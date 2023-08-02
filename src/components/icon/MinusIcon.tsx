/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const MinusIcon: FC<IconProps> = ({ size, color, onClick, className }) => {
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
      <g clipPath="url(#clip0_403_3149)">
        <path d="M23 10.9997H1C0.447715 10.9997 0 11.4474 0 11.9997C0 12.552 0.447715 12.9997 1 12.9997H23C23.5523 12.9997 24 12.552 24 11.9997C24 11.4474 23.5523 10.9997 23 10.9997Z" />
      </g>
      <defs>
        <clipPath id="clip0_403_3149">
          <rect
            width={24}
            height={24}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default MinusIcon;
