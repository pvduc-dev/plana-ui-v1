/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const ItalicIcon: FC<IconProps> = ({ size, color, onClick, className }) => {
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
      <g clipPath="url(#clip0_403_3000)">
        <path d="M20 0H7C6.73478 0 6.48043 0.105357 6.29289 0.292893C6.10536 0.48043 6 0.734784 6 1C6 1.26522 6.10536 1.51957 6.29289 1.70711C6.48043 1.89464 6.73478 2 7 2H12.354L9.627 22H4C3.73478 22 3.48043 22.1054 3.29289 22.2929C3.10536 22.4804 3 22.7348 3 23C3 23.2652 3.10536 23.5196 3.29289 23.7071C3.48043 23.8946 3.73478 24 4 24H17C17.2652 24 17.5196 23.8946 17.7071 23.7071C17.8946 23.5196 18 23.2652 18 23C18 22.7348 17.8946 22.4804 17.7071 22.2929C17.5196 22.1054 17.2652 22 17 22H11.646L14.373 2H20C20.2652 2 20.5196 1.89464 20.7071 1.70711C20.8946 1.51957 21 1.26522 21 1C21 0.734784 20.8946 0.48043 20.7071 0.292893C20.5196 0.105357 20.2652 0 20 0V0Z" />
      </g>
      <defs>
        <clipPath id="clip0_403_3000">
          <rect
            width={24}
            height={24}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default ItalicIcon;
