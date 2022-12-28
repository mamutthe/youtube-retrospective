import { historyTYPE, ytVideoTYPE } from "../types/types";

//Ano que será usado para filtrar o histórico
const year = 2022;

// Função para filtrar o histórico pelo ano especificado na const year
function filterHistoryByYear(year: number, history: historyTYPE): historyTYPE {
  const historyFilteredByYear: historyTYPE = history.filter(
    (ytVideo: ytVideoTYPE) => ytVideo.time.includes(`${year}`)
  );

  return historyFilteredByYear;
}

// Função para remover informações desnecessárias do histórico
function filterUnnecessaryInfo(
  historyFilteredByYear: historyTYPE
): historyTYPE {
  // Filtrar o histórico removendo objetos com atributo "details" definido,
  // ou com títulos "Watched a video that has been removed" ou "Visited YouTube Music"
  const historyWithoutAdsAndRemoved: historyTYPE = historyFilteredByYear.filter(
    (ytVideo: ytVideoTYPE) =>
      ytVideo.details === undefined && // Anuncios
      ytVideo.title !== "Watched a video that has been removed" && // Videos removidos
      ytVideo.title !== "Visited YouTube Music" && // Visita ao YouTube Music???
      ytVideo.subtitles !== undefined // Videos do YouTube que nao estao mais disponiveis, por algum motivo...
  );

  return historyWithoutAdsAndRemoved;
}

// Função para corrigir a URL do título
function fixTitleUrl(history: historyTYPE): historyTYPE {
  const historyWithFixedUrl: historyTYPE = history.map(
    (ytVideo: ytVideoTYPE) => {
      const fixedUrl = ytVideo.titleUrl
        .replace(/\\u003d/g, "=")
        .replace(/\\u0026/g, "&");
      ytVideo.titleUrl = fixedUrl;
      return ytVideo;
    }
  );
  return historyWithFixedUrl;
}

// Função principal para filtrar o histórico bruto
export function filterHistory(historyFile: string): historyTYPE {
  const rawHistory = JSON.parse(historyFile);
  const historyFilteredByYear = filterHistoryByYear(year, rawHistory);
  const historyWithoutUnecessary = filterUnnecessaryInfo(historyFilteredByYear);
  const filteredHistory = fixTitleUrl(historyWithoutUnecessary);
  //return the videos where subtitles are undefined
  const teste = historyWithoutUnecessary.filter(
    (ytVideo: ytVideoTYPE) => ytVideo.subtitles === undefined
  );
  console.log(teste);
  return filteredHistory;
}
