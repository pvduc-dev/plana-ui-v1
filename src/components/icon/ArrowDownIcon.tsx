/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const ArrowDownIcon: FC<IconProps> = ({ size, color, onClick, className }) => {
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
      <g clipPath="url(#clip0_403_3230)">
        <path d="M18.05 17.79C17.9571 17.6963 17.8465 17.6219 17.7246 17.5711C17.6028 17.5203 17.472 17.4942 17.34 17.4942C17.208 17.4942 17.0773 17.5203 16.9555 17.5711C16.8336 17.6219 16.723 17.6963 16.63 17.79L13 21.42V1C13 0.734783 12.8947 0.480429 12.7071 0.292893C12.5196 0.105357 12.2653 0 12 0V0C11.7348 0 11.4805 0.105357 11.2929 0.292893C11.1054 0.480429 11 0.734783 11 1V21.41L7.38004 17.79C7.29432 17.6728 7.18412 17.5757 7.05708 17.5054C6.93005 17.4351 6.78922 17.3933 6.6444 17.3829C6.49958 17.3725 6.35424 17.3938 6.21847 17.4452C6.0827 17.4967 5.95976 17.5771 5.85821 17.6809C5.75665 17.7846 5.67891 17.9093 5.63038 18.0461C5.58185 18.183 5.56371 18.3287 5.57721 18.4733C5.5907 18.6178 5.63552 18.7577 5.70854 18.8832C5.78156 19.0087 5.88103 19.1168 6.00004 19.2L9.92004 23.12C10.4825 23.6818 11.245 23.9974 12.04 23.9974C12.835 23.9974 13.5975 23.6818 14.16 23.12L18.08 19.2C18.2624 19.0087 18.3615 18.753 18.3559 18.4888C18.3503 18.2246 18.2403 17.9734 18.05 17.79V17.79Z" />
      </g>
      <defs>
        <clipPath id="clip0_403_3230">
          <rect
            width={24}
            height={24}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default ArrowDownIcon;
