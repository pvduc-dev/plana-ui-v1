/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const AngleDownIcon: FC<IconProps> = ({ size, color, onClick, className }) => {
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
      <g clipPath="url(#clip0_403_3233)">
        <path d="M12.0001 17.17C11.3431 17.1712 10.6922 17.0429 10.0848 16.7923C9.4774 16.5418 8.92531 16.174 8.46012 15.71L0.290124 7.54002C0.101821 7.35172 -0.00396729 7.09632 -0.00396729 6.83002C-0.00396729 6.56372 0.101821 6.30832 0.290124 6.12002C0.478428 5.93172 0.733823 5.82593 1.00012 5.82593C1.26643 5.82593 1.52182 5.93172 1.71012 6.12002L9.88012 14.29C10.4426 14.8518 11.2051 15.1674 12.0001 15.1674C12.7951 15.1674 13.5576 14.8518 14.1201 14.29L22.2901 6.12002C22.4784 5.93172 22.7338 5.82593 23.0001 5.82593C23.2664 5.82593 23.5218 5.93172 23.7101 6.12002C23.8984 6.30832 24.0042 6.56372 24.0042 6.83002C24.0042 7.09632 23.8984 7.35172 23.7101 7.54002L15.5401 15.71C15.0749 16.174 14.5228 16.5418 13.9154 16.7923C13.308 17.0429 12.6572 17.1712 12.0001 17.17V17.17Z" />
      </g>
      <defs>
        <clipPath id="clip0_403_3233">
          <rect
            width={24}
            height={24}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default AngleDownIcon;
