import {MostWatchedChannel, MostWatchedVideos, Top10Watched, MostListenedSongsCard, TopArtists, TopMonthCard } from '../components';

export default function Storys() {
  return (
    <>
        <Top10Watched />
        <MostWatchedChannel />
        <MostWatchedVideos  />
        <MostListenedSongsCard />
        <TopArtists />
        <TopMonthCard />
    </>
  );
}
