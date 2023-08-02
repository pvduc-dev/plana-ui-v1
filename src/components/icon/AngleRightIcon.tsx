/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const AngleRightIcon: FC<IconProps> = ({ size, color, onClick, className }) => {
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
      <g clipPath="url(#clip0_403_3214)">
        <path d="M6.99985 24C6.86824 24.0008 6.73778 23.9756 6.61594 23.9258C6.4941 23.876 6.38329 23.8027 6.28985 23.71C6.19612 23.6171 6.12172 23.5065 6.07096 23.3846C6.02019 23.2628 5.99405 23.132 5.99405 23C5.99405 22.868 6.02019 22.7373 6.07096 22.6155C6.12172 22.4936 6.19612 22.383 6.28985 22.29L14.4598 14.12C15.0216 13.5575 15.3372 12.7951 15.3372 12C15.3372 11.205 15.0216 10.4426 14.4598 9.88005L6.28985 1.71006C6.10154 1.52176 5.99576 1.26636 5.99576 1.00006C5.99576 0.733761 6.10154 0.478366 6.28985 0.290063C6.47815 0.101759 6.73355 -0.00402832 6.99985 -0.00402832C7.26615 -0.00402832 7.52154 0.101759 7.70985 0.290063L15.8798 8.46005C16.3455 8.92451 16.7149 9.47626 16.967 10.0837C17.219 10.6912 17.3488 11.3424 17.3488 12C17.3488 12.6577 17.219 13.3089 16.967 13.9164C16.7149 14.5238 16.3455 15.0756 15.8798 15.54L7.70985 23.71C7.61641 23.8027 7.50559 23.876 7.38375 23.9258C7.26192 23.9756 7.13145 24.0008 6.99985 24Z" />
      </g>
      <defs>
        <clipPath id="clip0_403_3214">
          <rect
            width={24}
            height={24}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default AngleRightIcon;
