import { historyTYPE, ytVideoTYPE } from "../types/types";

// Constante para armazenar o ano atual
const currentYear = 2022;

/**
 * @description Filtrar o histórico pelo ano especificado.
 *
 * @param {historyTYPE} history - O histórico a ser filtrado.
 * @param {number} year - O ano a ser usado como critério de filtragem.
 *
 * @returns {historyTYPE} - O histórico filtrado pelo ano especificado.
 */

function filterHistoryByYear(history: historyTYPE, year: number): historyTYPE {
  return history.filter((ytVideo: ytVideoTYPE) =>
    ytVideo.time.includes(`${year}`)
  );
}

/**
 * @description Remover informações desnecessárias do histórico.
 *
 * @param {historyTYPE} history - O histórico a ser filtrado.
 *
 * @returns {historyTYPE} - O histórico sem as informações desnecessárias.
 */

function removeUnnecessaryInfo(history: historyTYPE): historyTYPE {
  // Filtrar o histórico removendo objetos com atributo "details" definido,
  // ou com títulos "Watched a video that has been removed" ou "Visited YouTube Music"
  return history.filter((ytVideo: ytVideoTYPE) => {
    // Remover anúncios
    if (ytVideo.details !== undefined) {
      return false;
    }

    // Remover vídeos removidos
    if (ytVideo.title === "Watched a video that has been removed") {
      return false;
    }

    // Remover visitas ao YouTube Music
    if (ytVideo.title === "Visited YouTube Music") {
      return false;
    }

    // Remover vídeos do YouTube que não estão mais disponíveis
    if (ytVideo.subtitles === undefined) {
      return false;
    }

    return true;
  });
}

/**
 * @description Corrigir a URL do título.
 *
 * @param {historyTYPE} history - O histórico a ser corrigido.
 *
 * @returns {historyTYPE} - O histórico com as URLs dos títulos corrigidas.
 */

function fixTitleUrl(history: historyTYPE): historyTYPE {
  return history.map((ytVideo: ytVideoTYPE) => {
    const fixedUrl = ytVideo.titleUrl
      .replace(/\\u003d/g, "=")
      .replace(/\\u0026/g, "&");
    ytVideo.titleUrl = fixedUrl;
    return ytVideo;
  });
}

/**
 * @description Remover "Watched" e "- Topic" do título e do nome do canal, isso acontece em vídeos de música.
 *
 * @param {historyTYPE} history - O histórico a ser corrigido.
 *
 * @returns {historyTYPE} - O histórico com as informações extra removidas dos vídeos de música.
 */

function removeExtraInfoFromMusicVideos(history: historyTYPE): historyTYPE {
  return history.map((ytVideo: ytVideoTYPE) => {
    if (ytVideo.title.startsWith("Watched", 0)) {
      ytVideo.title = ytVideo.title.replace("Watched", "");
      ytVideo.subtitles[0].name = ytVideo.subtitles[0].name.replace(
        " - Topic",
        ""
      );
      return ytVideo;
    }
    return ytVideo;
  });
}

/**
 * @description Filtrar o histórico bruto.
 *
 * @param {string} historyFile - O arquivo JSON contendo o histórico bruto.
 *
 * @returns {historyTYPE} - O histórico filtrado.
 *
 * @throws {Error} - Caso o arquivo JSON não possa ser parseado.
 */

export function filterHistory(historyFile: string): historyTYPE {
  try {
    // Tentar parsear o arquivo JSON
    const rawHistory = JSON.parse(historyFile);

    // Filtrar o histórico pelo ano atual
    let filteredHistory = filterHistoryByYear(rawHistory, currentYear);

    // Remover informações desnecessárias do histórico
    filteredHistory = removeUnnecessaryInfo(filteredHistory);

    // Corrigir a URL do título
    filteredHistory = fixTitleUrl(filteredHistory);

    // Remover "Watched" e "- Topic" do título e do nome do canal dos vídeos de música
    filteredHistory = removeExtraInfoFromMusicVideos(filteredHistory);

    return filteredHistory;
  } catch (error) {
    // Tratar erros de parse do arquivo JSON
    throw new Error(`E: ${error}`);
  }
}
