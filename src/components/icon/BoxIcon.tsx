/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const BoxIcon: FC<IconProps> = ({ size, color, onClick, className }) => {
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
      <g clipPath="url(#clip0_403_3151)">
        <path d="M9.00015 14H15.0001C15.2654 14 15.5197 13.8947 15.7072 13.7071C15.8948 13.5196 16.0001 13.2652 16.0001 13C16.0001 12.7348 15.8948 12.4804 15.7072 12.2929C15.5197 12.1054 15.2654 12 15.0001 12H9.00015C8.73493 12 8.48058 12.1054 8.29305 12.2929C8.10551 12.4804 8.00015 12.7348 8.00015 13C8.00015 13.2652 8.10551 13.5196 8.29305 13.7071C8.48058 13.8947 8.73493 14 9.00015 14V14Z" />
        <path d="M19 0H5C3.6744 0.00158786 2.40356 0.528882 1.46622 1.46622C0.528882 2.40356 0.00158786 3.6744 0 5L0 6C0.000290807 6.42174 0.0895008 6.83868 0.261809 7.22362C0.434117 7.60856 0.685652 7.95284 1 8.234V19C1.00159 20.3256 1.52888 21.5964 2.46622 22.5338C3.40356 23.4711 4.6744 23.9984 6 24H18C19.3256 23.9984 20.5964 23.4711 21.5338 22.5338C22.4711 21.5964 22.9984 20.3256 23 19V8.234C23.3143 7.95284 23.5659 7.60856 23.7382 7.22362C23.9105 6.83868 23.9997 6.42174 24 6V5C23.9984 3.6744 23.4711 2.40356 22.5338 1.46622C21.5964 0.528882 20.3256 0.00158786 19 0V0ZM2 5C2 4.20435 2.31607 3.44129 2.87868 2.87868C3.44129 2.31607 4.20435 2 5 2H19C19.7956 2 20.5587 2.31607 21.1213 2.87868C21.6839 3.44129 22 4.20435 22 5V6C22 6.26522 21.8946 6.51957 21.7071 6.70711C21.5196 6.89464 21.2652 7 21 7H3C2.73478 7 2.48043 6.89464 2.29289 6.70711C2.10536 6.51957 2 6.26522 2 6V5ZM21 19C21 19.7956 20.6839 20.5587 20.1213 21.1213C19.5587 21.6839 18.7956 22 18 22H6C5.20435 22 4.44129 21.6839 3.87868 21.1213C3.31607 20.5587 3 19.7956 3 19V9H21V19Z" />
      </g>
      <defs>
        <clipPath id="clip0_403_3151">
          <rect
            width={24}
            height={24}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default BoxIcon;
