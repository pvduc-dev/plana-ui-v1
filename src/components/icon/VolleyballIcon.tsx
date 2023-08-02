/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const VolleyballIcon: FC<IconProps> = ({ size, color, onClick, className }) => {
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
      <g clipPath="url(#clip0_403_2938)">
        <path d="M12.0034 -0.00231934C5.36579 -0.00231934 -0.0151367 5.3786 -0.0151367 12.0162C-0.0151367 18.6539 5.36579 24.0348 12.0034 24.0348C18.6411 24.0348 24.0219 18.6539 24.0219 12.0162C24.0219 5.3786 18.6411 -0.00231934 12.0034 -0.00231934ZM21.8752 10.4999V10.5029C20.968 11.0677 19.976 11.4834 18.9372 11.7339C18.7218 8.53076 17.663 5.44165 15.8682 2.77985C19.0762 4.13417 21.3508 7.05738 21.8752 10.4999ZM12.0001 1.9999C12.2531 1.9999 12.5002 2.01888 12.7492 2.03792C15.244 4.77748 16.7261 8.28832 16.9492 11.9869C15.5826 12.0336 14.2211 11.7988 12.9492 11.2969C12.7501 7.91552 11.1349 4.77471 8.50018 2.64588C9.61833 2.22134 10.8041 2.00248 12.0001 1.9999ZM6.48713 3.6649C7.42655 4.27751 8.25638 5.04349 8.94211 5.93088C5.94464 7.94093 3.61032 10.7945 2.23416 14.1309C1.34396 10.0978 3.03605 5.93384 6.48713 3.6649ZM3.35616 17.0049C4.35441 13.1865 6.70735 9.86149 9.97618 7.64988C10.5681 8.86596 10.9059 10.1899 10.9692 11.5409C8.24011 13.6147 6.52496 16.754 6.25416 20.1709C5.0716 19.3364 4.08305 18.2565 3.35616 17.0049ZM12.0001 21.9999C10.7064 21.9995 9.42511 21.7468 8.22816 21.2559C8.20613 19.9659 8.43432 18.684 8.90016 17.4809C12.1871 18.94 15.8373 19.3752 19.3752 18.7299C17.4878 20.8109 14.8096 21.9985 12.0001 21.9999ZM9.80016 15.6899C10.4341 14.7074 11.2359 13.8443 12.1692 13.1399C13.5827 13.7115 15.0924 14.0078 16.6172 14.0129C18.4722 14.0127 20.3023 13.585 21.9652 12.7629C21.8715 13.9851 21.5518 15.1793 21.0222 16.2849C17.3297 17.4269 13.3511 17.216 9.80016 15.6899Z" />
      </g>
      <defs>
        <clipPath id="clip0_403_2938">
          <rect
            width={24}
            height={24}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default VolleyballIcon;
