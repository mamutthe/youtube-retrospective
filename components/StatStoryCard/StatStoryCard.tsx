import ytChannelPic from '/workspaces/yt-history-stats/components/StatStoryCard/ytChannelPic.jpg';
import Image from 'next/image';

export function StatStoryCard() {
  const mostWatchedChannel = 'Web Diva Tulla Luana';
  const channelLink = 'https://www.youtube.com/@PQPWEBDIVATULLALUANA;';
  const mostWatchedChannelTime = 150;
  return (
    <section className="flex justify-center items-center my-4">
      <div className="flex items-center flex-col bg-[#0c3a57] w-[25rem] h-[40rem] rounded-2xl">
        <span className="pt-14 pb-2 text-slate-200 font-medium text-xl text-center">
          Your most watched channel was
        </span>
        <a href={channelLink} target="_blank" rel="noreferrer">
          <picture className="flex justify-center py-3">
            <Image
              className="rounded-full"
              src={ytChannelPic}
              alt="channel pic"
              width={200}
            ></Image>
          </picture>
          <span className="text-slate-200 font-medium text-[2rem] text-center">
            {mostWatchedChannel}
          </span>
        </a>
        <span className="text-purple-900 font-medium text-xl text-center">
          You watched it for {mostWatchedChannelTime} minutes
        </span>
      </div>
    </section>
  );
}
