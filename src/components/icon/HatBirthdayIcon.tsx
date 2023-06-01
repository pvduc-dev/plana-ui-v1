/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const HatBirthdayIcon: FC<IconProps> = ({
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
      <g clipPath="url(#clip0_403_2980)">
        <path d="M22.1389 17.7784L13.5919 5.53437C14.9962 4.65513 15.4219 2.80394 14.5427 1.39962C13.6634 -0.00471237 11.8123 -0.430384 10.4079 0.448897C9.0036 1.32818 8.57793 3.17932 9.45721 4.58365C9.6981 4.9684 10.0232 5.29348 10.4079 5.53437L1.86088 17.7784C0.930741 18.9964 0.753179 20.6299 1.39987 22.0194C2.16252 23.3367 3.60833 24.1052 5.1269 24.0003H18.8729C20.3915 24.1052 21.8373 23.3367 22.5999 22.0194C23.2466 20.6299 23.069 18.9964 22.1389 17.7784ZM11.7309 22.0003L17.1889 14.1814L18.5999 16.2084L14.5609 22.0004H11.7309V22.0003ZM6.53891 22.0003L14.5929 10.4623L15.9689 12.4343L9.29188 22.0003H6.53891ZM3.16991 21.0943C2.87333 20.3646 2.99999 19.5311 3.49991 18.9223L11.9999 6.74735L13.3809 8.72533C13.3669 8.74333 13.3469 8.75233 13.3339 8.77033L4.1999 21.8593C3.76682 21.755 3.39491 21.4788 3.16991 21.0943ZM20.8299 21.0943C20.4013 21.7421 19.644 22.0926 18.8729 22.0003H16.9999L19.8219 17.9563L20.4969 18.9223C20.9978 19.5305 21.1257 20.3641 20.8299 21.0943Z" />
      </g>
      <defs>
        <clipPath id="clip0_403_2980">
          <rect
            width={24}
            height={24}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default HatBirthdayIcon;
