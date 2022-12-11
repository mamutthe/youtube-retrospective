import {MostWatchedChannelCard, MostWatchedVideos, TopChannelsCard, MostListenedSongsCard, TopArtists, TopMonthCard } from '../components';

export default function Storys() {
  return (
    <>
        <TopChannelsCard />
        <MostWatchedChannelCard />
        <MostWatchedVideos  />
        <MostListenedSongsCard />
        <TopArtists />
        <TopMonthCard />  
    </>
  );
}
