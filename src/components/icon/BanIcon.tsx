/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const BanIcon: FC<IconProps> = ({ size, color, onClick, className }) => {
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
      <g clipPath="url(#clip0_403_3169)">
        <path d="M12 0C9.62663 0 7.30655 0.703788 5.33316 2.02236C3.35977 3.34094 1.8217 5.21509 0.913451 7.4078C0.00519943 9.60051 -0.232441 12.0133 0.230582 14.3411C0.693605 16.6689 1.83649 18.8071 3.51472 20.4853C5.19295 22.1635 7.33115 23.3064 9.65892 23.7694C11.9867 24.2324 14.3995 23.9948 16.5922 23.0866C18.7849 22.1783 20.6591 20.6402 21.9776 18.6668C23.2962 16.6935 24 14.3734 24 12C23.9966 8.81846 22.7312 5.76821 20.4815 3.51852C18.2318 1.26883 15.1815 0.00344108 12 0V0ZM12 2C14.3065 1.99816 16.5419 2.79775 18.324 4.262L4.26201 18.324C3.06257 16.8598 2.30366 15.0851 2.07362 13.2064C1.84358 11.3277 2.15186 9.42234 2.96259 7.71204C3.77332 6.00174 5.05314 4.55688 6.65308 3.54564C8.25303 2.53441 10.1073 1.9984 12 2V2ZM12 22C9.69353 22.0018 7.45808 21.2023 5.67601 19.738L19.738 5.676C20.9374 7.14016 21.6963 8.91488 21.9264 10.7936C22.1564 12.6723 21.8481 14.5777 21.0374 16.288C20.2267 17.9983 18.9469 19.4431 17.3469 20.4544C15.747 21.4656 13.8927 22.0016 12 22Z" />
      </g>
      <defs>
        <clipPath id="clip0_403_3169">
          <rect
            width={24}
            height={24}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default BanIcon;