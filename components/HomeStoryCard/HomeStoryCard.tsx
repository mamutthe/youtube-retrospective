import Image from 'next/image';
import placeHolder from '/workspaces/yt-history-stats/components/HomeStoryCard/homecardplaceholder.png';
//Instagram story
export function HomeStoryCard() {
  const statsTitle = 'Instagram Story';
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-2">
      <Image alt="placeHolder" src={placeHolder} width={650}></Image>
    </div>
  );
}
