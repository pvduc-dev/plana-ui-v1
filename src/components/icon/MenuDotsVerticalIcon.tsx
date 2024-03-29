/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const MenuDotsVerticalIcon: FC<IconProps> = ({
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
      <g clipPath="url(#clip0_403_2933)">
        <path d="M12.0001 4C13.1046 4 14.0001 3.10457 14.0001 2C14.0001 0.89543 13.1046 0 12.0001 0C10.8955 0 10.0001 0.89543 10.0001 2C10.0001 3.10457 10.8955 4 12.0001 4Z" />
        <path d="M12.0001 14.0003C13.1046 14.0003 14.0001 13.1049 14.0001 12.0003C14.0001 10.8957 13.1046 10.0003 12.0001 10.0003C10.8955 10.0003 10.0001 10.8957 10.0001 12.0003C10.0001 13.1049 10.8955 14.0003 12.0001 14.0003Z" />
        <path d="M12.0001 23.9997C13.1046 23.9997 14.0001 23.1043 14.0001 21.9997C14.0001 20.8951 13.1046 19.9997 12.0001 19.9997C10.8955 19.9997 10.0001 20.8951 10.0001 21.9997C10.0001 23.1043 10.8955 23.9997 12.0001 23.9997Z" />
      </g>
      <defs>
        <clipPath id="clip0_403_2933">
          <rect
            width={24}
            height={24}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default MenuDotsVerticalIcon;
