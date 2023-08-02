/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const IdBadgeIcon: FC<IconProps> = ({ size, color, onClick, className }) => {
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
      <g clipPath="url(#clip0_403_3259)">
        <path d="M19 4H15V3C15 2.20435 14.6839 1.44129 14.1213 0.87868C13.5587 0.31607 12.7956 0 12 0C11.2044 0 10.4413 0.31607 9.87868 0.87868C9.31607 1.44129 9 2.20435 9 3V4H5C3.6744 4.00159 2.40356 4.52888 1.46622 5.46622C0.528882 6.40356 0.00158786 7.6744 0 9L0 19C0.00158786 20.3256 0.528882 21.5964 1.46622 22.5338C2.40356 23.4711 3.6744 23.9984 5 24H19C20.3256 23.9984 21.5964 23.4711 22.5338 22.5338C23.4711 21.5964 23.9984 20.3256 24 19V9C23.9984 7.6744 23.4711 6.40356 22.5338 5.46622C21.5964 4.52888 20.3256 4.00159 19 4V4ZM11 3C11 2.73478 11.1054 2.48043 11.2929 2.29289C11.4804 2.10536 11.7348 2 12 2C12.2652 2 12.5196 2.10536 12.7071 2.29289C12.8946 2.48043 13 2.73478 13 3V5C13 5.26522 12.8946 5.51957 12.7071 5.70711C12.5196 5.89464 12.2652 6 12 6C11.7348 6 11.4804 5.89464 11.2929 5.70711C11.1054 5.51957 11 5.26522 11 5V3ZM22 19C22 19.7956 21.6839 20.5587 21.1213 21.1213C20.5587 21.6839 19.7956 22 19 22H5C4.20435 22 3.44129 21.6839 2.87868 21.1213C2.31607 20.5587 2 19.7956 2 19V9C2 8.20435 2.31607 7.44129 2.87868 6.87868C3.44129 6.31607 4.20435 6 5 6H9.184C9.38765 6.58454 9.76815 7.09123 10.2727 7.44977C10.7773 7.80831 11.381 8.00095 12 8.00095C12.619 8.00095 13.2227 7.80831 13.7273 7.44977C14.2318 7.09123 14.6124 6.58454 14.816 6H19C19.7956 6 20.5587 6.31607 21.1213 6.87868C21.6839 7.44129 22 8.20435 22 9V19ZM10 10H5C4.73478 10 4.48043 10.1054 4.29289 10.2929C4.10536 10.4804 4 10.7348 4 11V19C4 19.2652 4.10536 19.5196 4.29289 19.7071C4.48043 19.8946 4.73478 20 5 20H10C10.2652 20 10.5196 19.8946 10.7071 19.7071C10.8946 19.5196 11 19.2652 11 19V11C11 10.7348 10.8946 10.4804 10.7071 10.2929C10.5196 10.1054 10.2652 10 10 10ZM9 18H6V12H9V18ZM20 15C20 15.2652 19.8946 15.5196 19.7071 15.7071C19.5196 15.8946 19.2652 16 19 16H14C13.7348 16 13.4804 15.8946 13.2929 15.7071C13.1054 15.5196 13 15.2652 13 15C13 14.7348 13.1054 14.4804 13.2929 14.2929C13.4804 14.1054 13.7348 14 14 14H19C19.2652 14 19.5196 14.1054 19.7071 14.2929C19.8946 14.4804 20 14.7348 20 15ZM20 11C20 11.2652 19.8946 11.5196 19.7071 11.7071C19.5196 11.8946 19.2652 12 19 12H14C13.7348 12 13.4804 11.8946 13.2929 11.7071C13.1054 11.5196 13 11.2652 13 11C13 10.7348 13.1054 10.4804 13.2929 10.2929C13.4804 10.1054 13.7348 10 14 10H19C19.2652 10 19.5196 10.1054 19.7071 10.2929C19.8946 10.4804 20 10.7348 20 11ZM18 19C18 19.2652 17.8946 19.5196 17.7071 19.7071C17.5196 19.8946 17.2652 20 17 20H14C13.7348 20 13.4804 19.8946 13.2929 19.7071C13.1054 19.5196 13 19.2652 13 19C13 18.7348 13.1054 18.4804 13.2929 18.2929C13.4804 18.1054 13.7348 18 14 18H17C17.2652 18 17.5196 18.1054 17.7071 18.2929C17.8946 18.4804 18 18.7348 18 19Z" />
      </g>
      <defs>
        <clipPath id="clip0_403_3259">
          <rect
            width={24}
            height={24}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default IdBadgeIcon;
