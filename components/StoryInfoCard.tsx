import { RoundedTransparentCard } from "./RoundedTransparentCard/RoundedTransparentCard";

type StoryInfoCardTYPE = {
  key: string;
  title: string;
  link: string;
  textColor: string;
};

export const StoryInfoCard: React.FC<StoryInfoCardTYPE> = ({
  key,
  title,
  link,
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
      <RoundedTransparentCard className="flex justify-center items-center h-[4.5rem] w-full rounded-2xl">
        <span
          className={`${textColor} text-black font-medium text-xl trucate`}
        >
          {title}
        </span>
      </RoundedTransparentCard>
    </a>
  );
};
export {};
