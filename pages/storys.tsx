import {MostWatchedChannel, MostWatchedVideos, TopChannelsCard, MostListenedSongsCard, TopArtists, TopMonthCard } from '../components';

export default function Storys() {
  return (
    <>
        <TopChannelsCard />
        <MostWatchedChannel />
        <MostWatchedVideos  />
        <MostListenedSongsCard />
        <TopArtists />
        <TopMonthCard />
    </>
  );
}
