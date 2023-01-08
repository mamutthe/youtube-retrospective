import {
  TopChannelsCard,
  MostWatchedChannelCard,
  TopVideosCard,
  TopVideosPerMonthCard,
  FeaturedStatsCard,
} from "../components";

export default function Storys() {
  return (
    <div className="flex flex-col space-y-12 bg-gray-900 p-32">
      <MostWatchedChannelCard />
      <TopChannelsCard />
      <TopVideosCard />
      <TopVideosPerMonthCard />
      <FeaturedStatsCard />
    </div>
  );
}
