import { RoundedTransparentCard } from "./RoundedTransparentCard/RoundedTransparentCard";

type StoryInfoCardTYPE = {
  key?: string;
  info: string;
  extraInfo?: string;
  link?: string;
  textStyle: string;
  className?: string;
  children?: React.ReactNode;
} & React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

/**
 * @description Componente que mostra um RoundedTransparentCard com informações para StoryCards.
 *
 * @param {StoryInfoCardTYPE} props - As props para o componente.
 * @param {string} props.key - Chave utilizada pela função map.
 * @param {string} props.info - Exibe informações de texto.
 * @param {string} props.extraInfo - Informação de texto exibida em uma nova linha.
 * @param {string} props.link - Link disponível ao clicar no card, geralmente link do YouTube.
 * @param {string} props.textStyle - Estilo de texto do componente.
 * @param {string} props.className - Um nome de classe opcional para o componente.
 * @param {React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>} props.rest - Props HTML para o elemento <a>.
 * @param {React.ReactNode} props.children - Elementos filhos do componente.
 *
 */

export const StoryInfoCard: React.FC<StoryInfoCardTYPE> = ({
  info,
  extraInfo,
  link,
  textStyle,
  className,
  children,
  ...rest
}) => {
  return (
    <a
      className="h-full w-full"
      href={link}
      target="_blank"
      rel="noreferrer"
      {...rest}
    >
      <RoundedTransparentCard
        className={`${className} h-full md:h-[3.5rem] w-full rounded-2xl overflow-hidden border border-white/30`}
      >
        <span className={`${textStyle} font-bold md:font-medium`}>
          {info} <br/> {extraInfo}
        </span>
        {children}
      </RoundedTransparentCard>
    </a>
  );
};
