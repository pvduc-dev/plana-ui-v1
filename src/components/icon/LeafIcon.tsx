/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const LeafIcon: FC<IconProps> = ({ size, color, onClick, className }) => {
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
      <g clipPath="url(#clip0_403_2957)">
        <path d="M23.119 0.871547C22.8064 0.559735 22.4286 0.321137 22.0127 0.172943C21.5969 0.0247496 21.1533 -0.0293485 20.714 0.0145469C17.921 0.284547 8.528 1.44755 4.90001 5.07155C3.16578 6.8105 2.1374 9.13037 2.01348 11.5832C1.88956 14.0359 2.67888 16.4477 4.22901 18.3525L0.289012 22.2925C0.106854 22.4811 0.00606017 22.7338 0.00833858 22.9959C0.010617 23.2581 0.115786 23.509 0.301194 23.6944C0.486602 23.8798 0.737414 23.9849 0.99961 23.9872C1.26181 23.9895 1.51441 23.8887 1.70301 23.7065L5.64301 19.7665C7.54751 21.3188 9.95987 22.1097 12.4137 21.9865C14.8675 21.8633 17.1885 20.8347 18.928 19.0995C22.604 15.4225 23.728 6.05855 23.987 3.27655C24.0293 2.83642 23.9734 2.39238 23.8233 1.97648C23.6732 1.56058 23.4327 1.18319 23.119 0.871547V0.871547ZM17.519 17.6815C16.1555 19.04 14.3442 19.8559 12.4233 19.9768C10.5023 20.0977 8.60306 19.5154 7.08 18.3385L16.712 8.70655C16.8942 8.51794 16.9949 8.26534 16.9927 8.00315C16.9904 7.74095 16.8852 7.49014 16.6998 7.30473C16.5144 7.11932 16.2636 7.01415 16.0014 7.01187C15.7392 7.00959 15.4866 7.11039 15.298 7.29255L5.66101 16.9245C4.48398 15.4016 3.90154 13.5022 4.02244 11.5812C4.14334 9.66025 4.95932 7.84893 6.318 6.48555C8.827 3.97755 15.745 2.49955 20.907 2.00455C21.0532 1.99032 21.2007 2.00848 21.3391 2.05773C21.4775 2.10697 21.6033 2.18611 21.7077 2.2895C21.812 2.39289 21.8923 2.51799 21.9428 2.65592C21.9934 2.79385 22.0129 2.94122 22 3.08755C21.5 8.47455 20.059 15.1365 17.514 17.6815H17.519Z" />
      </g>
      <defs>
        <clipPath id="clip0_403_2957">
          <rect
            width={24}
            height={24}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default LeafIcon;