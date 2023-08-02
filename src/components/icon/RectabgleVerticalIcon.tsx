/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const RectabgleVerticalIcon: FC<IconProps> = ({
  size,
  color,
  onClick,
  className,
}) => {
  return (
    <svg
      width={size || '1.5rem'}
      height={size || '1.5rem'}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill={color || '#333'}
      className={className}
      onClick={onClick}
    >
      <g clipPath="url(#clip0_403_2871)">
        <path d="M16 0H8C6.67392 0 5.40215 0.526784 4.46447 1.46447C3.52678 2.40215 3 3.67392 3 5V19C3 19.6566 3.12933 20.3068 3.3806 20.9134C3.63188 21.52 4.00017 22.0712 4.46447 22.5355C5.40215 23.4732 6.67392 24 8 24H16C16.6566 24 17.3068 23.8707 17.9134 23.6194C18.52 23.3681 19.0712 22.9998 19.5355 22.5355C19.9998 22.0712 20.3681 21.52 20.6194 20.9134C20.8707 20.3068 21 19.6566 21 19V5C21 3.67392 20.4732 2.40215 19.5355 1.46447C18.5979 0.526784 17.3261 0 16 0V0ZM19 19C19 19.7956 18.6839 20.5587 18.1213 21.1213C17.5587 21.6839 16.7956 22 16 22H8C7.20435 22 6.44129 21.6839 5.87868 21.1213C5.31607 20.5587 5 19.7956 5 19V5C5 4.20435 5.31607 3.44129 5.87868 2.87868C6.44129 2.31607 7.20435 2 8 2H16C16.7956 2 17.5587 2.31607 18.1213 2.87868C18.6839 3.44129 19 4.20435 19 5V19Z" />
      </g>
      <defs>
        <clipPath id="clip0_403_2871">
          <rect
            width={24}
            height={24}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default RectabgleVerticalIcon;
