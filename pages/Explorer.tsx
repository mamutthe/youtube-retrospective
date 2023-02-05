import React, { useEffect, useMemo, useState } from 'react';
import { reduceHistory } from '../history-analyzer/reduceHistory';
import { getUserHistory } from '../history-analyzer/handleHistory';
import { reducedYTVideoTYPE } from '../types/types';
import { StoryInfoCard } from '../components';
import { ViewCount } from '../components/ViewCount';
import { ArrowButton } from '../components/ArrowButton';
import { LoadMoreButton } from '../components/Explorer/LoadMoreButton';
import { SearchBar } from '../components/Explorer/SearchBar';

export const Explorer = () => {
  const [reducedHistory, setReducedHistory] = useState(
    [] as reducedYTVideoTYPE[]
  );
  const [listSize, setListSize] = useState(10);
  const [searchQuery, setSearchQuery] = useState('');

  /*   useEffect(() => {
    if (listSize <= listSize) return;
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
    alert('sas');
  }, [listSize]); */

  useEffect(() => {
    getUserHistory().then((result) => {
      setReducedHistory(reduceHistory(result));
    });
  }, []);

  const filteredHistory = useMemo(() => {
    if (searchQuery === '') return reducedHistory;
    const lowerCaseQuery = searchQuery.toLowerCase();
    return reducedHistory.filter((video: reducedYTVideoTYPE) => {
      return (
        video.title.toLowerCase().includes(lowerCaseQuery) ||
        video.channelTitle.toLowerCase().includes(lowerCaseQuery)
      );
    });
  }, [searchQuery, reducedHistory]);

  return (
    <div className="flex min-h-screen flex-col items-center bg-fixed p-4 text-center">
      <span className="mb-8 text-4xl font-bold text-white antialiased md:text-5xl">
        Explore seu histórico
      </span>

      <div className="invisible md:visible">
        <ArrowButton
          arrow="down"
          className="fixed bottom-1 right-6"
          onClick={() =>
            window.scrollTo({
              top: document.body.scrollHeight,
              behavior: 'smooth',
            })
          }
        />

        <ArrowButton
          arrow="up"
          className="fixed bottom-1 right-20"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        />
      </div>

      <div className="flex flex-col items-center space-y-2 px-4 md:w-[70%]">
        <SearchBar
          onChange={(e) => setSearchQuery((e.target as HTMLFormElement).value)}
        />
        {filteredHistory.slice(0, listSize).map((video: reducedYTVideoTYPE) => (
          <StoryInfoCard
            key={video.title}
            info={video.title}
            extraInfo={video.channelTitle}
            link={video.titleUrl}
            textStyle="col-start-2 col-end-6 text-xl text-gray-900 font-semibold whitespace-nowrap overflow-hidden overflow-ellipsis"
            className="grid h-[4.5rem] grid-cols-6 grid-rows-1 gap-y-0 overflow-hidden rounded-xl bg-white/70 hover:bg-white/80"
          >
            <ViewCount className="h-full w-full max-w-none bg-white/40 text-lg">
              {video.views} <br /> vezes
            </ViewCount>
          </StoryInfoCard>
        ))}
      </div>

      <div className="mt-4">
        <LoadMoreButton onClick={() => setListSize(listSize + 10)} />
      </div>
    </div>
  );
};

export default Explorer;
