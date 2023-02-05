import * as localForage from 'localforage';
import { historyTYPE } from '../types/types';

localForage.config({
  driver: localForage.INDEXEDDB,
  name: 'userHistory',
});

export const storeUserHistory = async (userHistory: historyTYPE) => {
  await localForage.clear();
  await localForage.setItem('strings', { id: 1, userHistory });
};

export const getUserHistory = async (): Promise<historyTYPE> => {
  const result:any = await localForage.getItem('strings');
  return result.userHistory;
};
