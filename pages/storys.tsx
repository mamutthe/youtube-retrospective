import { BaseCard, MostWatchedVideoCard, Top10Watched } from '../components';

export default function Storys() {
  return (
    <>
    <div className='p-20'>
      <button className="bg-red-600 ">next</button>
      <Top10Watched/>
      <MostWatchedVideoCard/>
    </div>
    </>
  );
}
