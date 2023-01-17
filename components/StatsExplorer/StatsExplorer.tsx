import React, { useContext, useEffect, useMemo, useState } from "react";
import { HistoryContext } from "../../pages/HistoryAnalyzer";
import { reducedYTVideoTYPE } from "../../types/types";
import { StoryInfoCard } from "../StoryInfoCard";
import { ViewCount } from "../ViewCount";
import { ArrowButton } from "../ArrowButton";
import { LoadMoreButton } from "./LoadMoreButton";
import { SearchBar } from "./SearchBar";

export const StatsExplorer = () => {
  const { reducedHistory } = useContext(HistoryContext);
  const defaultListSize = 10;
  const [listSize, setListSize] = useState(defaultListSize);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredHistory = useMemo(() => {
    if (searchQuery === "") return reducedHistory;
    const lowerCaseQuery = searchQuery.toLowerCase();

    return reducedHistory.filter((video: reducedYTVideoTYPE) => {
      return (
        video.title.toLowerCase().includes(lowerCaseQuery) ||
        video.channelTitle.toLowerCase().includes(lowerCaseQuery)
      );
    });
  }, [searchQuery, reducedHistory]);

  useEffect(() => {
    if (listSize <= defaultListSize) return;
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  }, [listSize]);

  return (
    <div className="colorful-gradient flex min-h-screen flex-col bg-fixed px-36 py-1 text-center">
      <span className="my-10 text-5xl font-bold text-white antialiased">
        Explore your YouTube Stats
      </span>

      <div className="mb-14 flex justify-center">
        <SearchBar
          onChange={(e) => setSearchQuery((e.target as HTMLFormElement).value)}
        />
      </div>

      <ArrowButton
        arrow="down"
        className="fixed bottom-1 right-6"
        onClick={() =>
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
          })
        }
      />

      <ArrowButton
        arrow="up"
        className="fixed bottom-1 right-20"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      />
      <div className="w- flex flex-col space-y-2">
        {filteredHistory.slice(0, listSize).map((video: reducedYTVideoTYPE) => (
          <StoryInfoCard
            key={video.title}
            info={video.title}
            extraInfo={video.channelTitle}
            link={video.titleUrl}
            textStyle="col-start-2 col-end-6 text-xl text-gray-900 font-semibold whitespace-nowrap overflow-hidden overflow-ellipsis"
            className="grid grid-cols-6 grid-rows-1 gap-y-0 overflow-hidden rounded-xl bg-white/70 hover:bg-white/80"
          >
            <ViewCount className="w-[50%] max-w-full bg-white/30 text-lg">
              {video.views} <br /> views
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

export {};
