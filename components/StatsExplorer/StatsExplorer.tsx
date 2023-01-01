import React, { useContext, useEffect, useMemo, useState } from "react";
import { HistoryContext } from "../../pages/HistoryAnalyzer";
import { reducedYTVideoTYPE } from "../../types/types";
import { StoryInfoCard } from "../StoryInfoCard";
import { ViewCount } from "../ViewCount";
import { ArrowButton } from "./ArrowButton";
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
    <div className="flex flex-col min-h-screen bg-fixed px-36 py-1 text-center colorful-gradient">
      <span className="text-white font-bold text-5xl antialiased my-10">
        Explore your YouTube Stats
      </span>

      <div className="flex justify-center mb-14">
        <SearchBar
          onChange={(e) => setSearchQuery((e.target as HTMLFormElement).value)}
        />
      </div>

      <ArrowButton
        arrow="down"
        className="bottom-1 right-6"
        onClick={() =>
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
          })
        }
      />

      <ArrowButton
        arrow="up"
        className="bottom-1 right-20"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      />
      <div className="flex flex-col space-y-2 w-">
        {filteredHistory.slice(0, listSize).map((video: reducedYTVideoTYPE) => (
          <StoryInfoCard
            key={video.title}
            info={video.title}
            extraInfo={video.channelTitle}
            link={video.titleUrl}
            textStyle="col-start-2 col-end-6 text-xl text-gray-900 font-semibold whitespace-nowrap overflow-hidden overflow-ellipsis"
            className="grid overflow-hidden grid-cols-6 grid-rows-1 gap-y-0 bg-white/70 hover:bg-white/80 rounded-xl"
          >
            <ViewCount className="bg-white/30 text-lg w-[50%] max-w-full">
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
