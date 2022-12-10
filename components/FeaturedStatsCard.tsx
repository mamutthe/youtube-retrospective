import { RoundedTransparentCard } from './RoundedTransparentCard/RoundedTransparentCard';
import Image from 'next/image';

type FeaturedStatsCardProps = {
  key?: string;
  title?: string;
  link?: string;
  imgSrc?: string;
  textColor: string;
};

export const FeaturedStatsCard: React.FC<FeaturedStatsCardProps> = ({
  key,
  title,
  link,
  imgSrc,
  textColor,
}) => {
  return (
    <a
      className="w-full"
      key={key}
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      <RoundedTransparentCard className="flex h-[5.5rem] w-full rounded-2xl">
        {imgSrc && (
          <Image
            className="mr-auto rounded-l-2xl h-full"
            src={imgSrc}
            alt="channel pic"
            width={0}
            height={0}
          />
        )}
        <span
          className={`${textColor} text-black font-medium text-xl text-center trucate mr-auto`}
        >
          {title}
        </span>
      </RoundedTransparentCard>
    </a>
  );
};
export {};
