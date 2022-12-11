import { BaseCard } from '../BaseCard/BaseCard';
import { FeaturedStatsCard } from '../../FeaturedStatsCard';
import ytChannelPic from '/workspaces/yt-history-stats/public/picExample.jpg';

export function TopArtistsCard() {
  const TopArtists = [
    {
      name: 'Lady Gaga',
      artistPic: ytChannelPic,
      profileLink: 'https://www.youtube.com/watch?v=ANxZbWB8tWI',
    },
    {
      name: 'ABBA',
      artistPic: ytChannelPic,
      profileLink: 'https://www.youtube.com/watch?v=ANxZbWB8tWI',
    },
    {
      name: 'Backstreet',
      artistPic: ytChannelPic,
      profileLink: 'https://www.youtube.com/watch?v=ANxZbWB8tWI',
    },
    {
      name: 'Britney Spears',
      artistPic: ytChannelPic,
      profileLink: 'https://www.youtube.com/watch?v=ANxZbWB8tWI',
    },
    {
      name: 'Madonna',
      artistPic: ytChannelPic,
      profileLink: 'https://www.youtube.com/watch?v=ANxZbWB8tWI',
    },
  ];
  return (
    <BaseCard className="flex items-center justify-center flex-col space-y-4 bg-gradient-to-r from-sky-400 to-sky-700 px-4 py-1">
      <span className="text-slate-200 font-medium text-2xl mb-4">
        Your Top Artists
      </span>

      {TopArtists.map((artist) => (
        <FeaturedStatsCard
          //@ts-ignore: Unreachable code error
          imgSrc={artist.artistPic}
          key={artist.name}
          title={artist.name}
          link={artist.profileLink}
          textColor={'text-sky-900'}
        />
      ))}
    </BaseCard>
  );
}

export {};
