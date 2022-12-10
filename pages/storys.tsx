import { BaseCard, MostWatchedChannel, MostWatchedVideos, Top10Watched } from '../components';

export default function Storys() {
  return (
    <>
        <Top10Watched />
        <MostWatchedChannel />
        <MostWatchedVideos  />
    </>
  );
}
