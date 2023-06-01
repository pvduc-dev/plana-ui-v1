/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const InfinityIcon: FC<IconProps> = ({ size, color, onClick, className }) => {
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
      <g clipPath="url(#clip0_403_3218)">
        <path d="M18 6C15.028 6 13.057 8.227 12 9.882C10.943 8.227 8.972 6 6 6C4.4087 6 2.88258 6.63214 1.75736 7.75736C0.632141 8.88258 0 10.4087 0 12C0 13.5913 0.632141 15.1174 1.75736 16.2426C2.88258 17.3679 4.4087 18 6 18C8.972 18 10.943 15.773 12 14.118C13.057 15.773 15.028 18 18 18C19.5913 18 21.1174 17.3679 22.2426 16.2426C23.3679 15.1174 24 13.5913 24 12C24 10.4087 23.3679 8.88258 22.2426 7.75736C21.1174 6.63214 19.5913 6 18 6ZM6 16C4.93913 16 3.92172 15.5786 3.17157 14.8284C2.42143 14.0783 2 13.0609 2 12C2 10.9391 2.42143 9.92172 3.17157 9.17157C3.92172 8.42143 4.93913 8 6 8C8.693 8 10.382 10.945 10.9 12C10.386 13.06 8.708 16 6 16ZM18 16C15.307 16 13.618 13.055 13.1 12C13.615 10.942 15.293 8 18 8C19.0609 8 20.0783 8.42143 20.8284 9.17157C21.5786 9.92172 22 10.9391 22 12C22 13.0609 21.5786 14.0783 20.8284 14.8284C20.0783 15.5786 19.0609 16 18 16Z" />
      </g>
      <defs>
        <clipPath id="clip0_403_3218">
          <rect
            width={24}
            height={24}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default InfinityIcon;
