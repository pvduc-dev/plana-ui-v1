/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const SquareIcon: FC<IconProps> = ({ size, color, onClick, className }) => {
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
      <g clipPath="url(#clip0_403_2839)">
        <path d="M19 0H5C3.67392 0 2.40215 0.526784 1.46447 1.46447C0.526784 2.40215 0 3.67392 0 5L0 19C0 19.6566 0.129329 20.3068 0.380602 20.9134C0.631876 21.52 1.00017 22.0712 1.46447 22.5355C2.40215 23.4732 3.67392 24 5 24H19C19.6566 24 20.3068 23.8707 20.9134 23.6194C21.52 23.3681 22.0712 22.9998 22.5355 22.5355C22.9998 22.0712 23.3681 21.52 23.6194 20.9134C23.8707 20.3068 24 19.6566 24 19V5C24 4.34339 23.8707 3.69321 23.6194 3.08658C23.3681 2.47995 22.9998 1.92876 22.5355 1.46447C22.0712 1.00017 21.52 0.631876 20.9134 0.380602C20.3068 0.129329 19.6566 0 19 0V0ZM22 19C22 19.7956 21.6839 20.5587 21.1213 21.1213C20.5587 21.6839 19.7956 22 19 22H5C4.20435 22 3.44129 21.6839 2.87868 21.1213C2.31607 20.5587 2 19.7956 2 19V5C2 4.20435 2.31607 3.44129 2.87868 2.87868C3.44129 2.31607 4.20435 2 5 2H19C19.7956 2 20.5587 2.31607 21.1213 2.87868C21.6839 3.44129 22 4.20435 22 5V19Z" />
      </g>
      <defs>
        <clipPath id="clip0_403_2839">
          <rect
            width={24}
            height={24}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default SquareIcon;
