import { historyTYPE, reducedHistoryTYPE } from '../types/types';
import { reduceHistory } from './reduceHistory';
import {
  getAmountOfVideosWatched,
  getVideosWatchedPerMonth,
} from './getFeaturedStats';
import { getTopVideos } from './getTopVideos';
import { getUserHistory } from './handleHistory';
import { getTopVideosPerMonth } from './getTopVideosPerMonth';
import { getTopChannels } from './getTopChannels';

export const generateRetrospective = async () => {
  const userHistory: historyTYPE = await getUserHistory();
  const reducedHistory: reducedHistoryTYPE = reduceHistory(userHistory);

  getTopVideos(reducedHistory, 7);
  getTopChannels(reducedHistory, 7);
  getTopVideosPerMonth(reducedHistory);
  getVideosWatchedPerMonth(userHistory);
  getAmountOfVideosWatched(userHistory);
  window.localStorage.setItem('isGenerated', 'true');
};
