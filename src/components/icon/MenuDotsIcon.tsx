/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const MenuDotsIcon: FC<IconProps> = ({ size, color, onClick, className }) => {
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
      <g clipPath="url(#clip0_403_2930)">
        <path d="M2 14.0003C3.10457 14.0003 4 13.1049 4 12.0003C4 10.8957 3.10457 10.0003 2 10.0003C0.89543 10.0003 0 10.8957 0 12.0003C0 13.1049 0.89543 14.0003 2 14.0003Z" />
        <path d="M12.0001 14.0003C13.1046 14.0003 14.0001 13.1049 14.0001 12.0003C14.0001 10.8957 13.1046 10.0003 12.0001 10.0003C10.8955 10.0003 10.0001 10.8957 10.0001 12.0003C10.0001 13.1049 10.8955 14.0003 12.0001 14.0003Z" />
        <path d="M22 14.0003C23.1045 14.0003 24 13.1049 24 12.0003C24 10.8957 23.1045 10.0003 22 10.0003C20.8954 10.0003 19.9999 10.8957 19.9999 12.0003C19.9999 13.1049 20.8954 14.0003 22 14.0003Z" />
      </g>
      <defs>
        <clipPath id="clip0_403_2930">
          <rect
            width={24}
            height={24}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default MenuDotsIcon;
