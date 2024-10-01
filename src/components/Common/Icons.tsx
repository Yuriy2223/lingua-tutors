import sprite from '../../assets/svg/sprite.svg';

export const Iconsvg = ({
  width,
  height,
  iconName,
  className,
}: {
  width: number;
  height: number;
  iconName: string;
  className?: string;
}) => {
  return (
    <svg width={width} height={height} className={className}>
      <use href={`${sprite}#${iconName}`}></use>
    </svg>
  );
};
