/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const MarsIcon: FC<IconProps> = ({ size, color, onClick, className }) => {
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
      <g clipPath="url(#clip0_403_2935)">
        <path d="M21.0117 0H16.0312C15.4811 0 15.0351 0.446719 15.0351 0.997734C15.0351 1.54875 15.4811 1.99547 16.0312 1.99547H20.5993L13.7939 8.81208C10.1109 5.90208 4.76997 6.53372 1.86479 10.2229C-1.04038 13.912 -0.409819 19.2617 3.27325 22.1717C6.95631 25.0817 12.2972 24.45 15.2024 20.7609C17.6357 17.671 17.6357 13.3128 15.2024 10.2229L22.0078 3.40631V7.98197C22.0078 8.53303 22.4538 8.9797 23.0039 8.9797C23.554 8.9797 24 8.53298 24 7.98197V2.99325C24 1.34011 22.6621 0 21.0117 0ZM8.56038 21.9504C4.98452 21.9504 2.08572 19.0468 2.08572 15.465C2.08572 11.8833 4.98452 8.9797 8.56038 8.9797C12.1362 8.9797 15.035 11.8833 15.035 15.465C15.0307 19.045 12.1344 21.946 8.56038 21.9504Z" />
      </g>
      <defs>
        <clipPath id="clip0_403_2935">
          <rect
            width={24}
            height={24}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default MarsIcon;
