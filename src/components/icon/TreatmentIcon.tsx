/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const TreatmentIcon: FC<IconProps> = ({ size, color, onClick, className }) => {
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
      <g clipPath="url(#clip0_403_2806)">
        <path d="M9 9C9 8.73478 9.10536 8.48043 9.29289 8.29289C9.48043 8.10536 9.73478 8 10 8H11V7C11 6.73478 11.1054 6.48043 11.2929 6.29289C11.4804 6.10536 11.7348 6 12 6C12.2652 6 12.5196 6.10536 12.7071 6.29289C12.8946 6.48043 13 6.73478 13 7V8H14C14.2652 8 14.5196 8.10536 14.7071 8.29289C14.8946 8.48043 15 8.73478 15 9C15 9.26522 14.8946 9.51957 14.7071 9.70711C14.5196 9.89464 14.2652 10 14 10H13V11C13 11.2652 12.8946 11.5196 12.7071 11.7071C12.5196 11.8946 12.2652 12 12 12C11.7348 12 11.4804 11.8946 11.2929 11.7071C11.1054 11.5196 11 11.2652 11 11V10H10C9.73478 10 9.48043 9.89464 9.29289 9.70711C9.10536 9.51957 9 9.26522 9 9ZM16 14H8C7.73478 14 7.48043 14.1054 7.29289 14.2929C7.10536 14.4804 7 14.7348 7 15C7 15.2652 7.10536 15.5196 7.29289 15.7071C7.48043 15.8946 7.73478 16 8 16H16C16.2652 16 16.5196 15.8946 16.7071 15.7071C16.8946 15.5196 17 15.2652 17 15C17 14.7348 16.8946 14.4804 16.7071 14.2929C16.5196 14.1054 16.2652 14 16 14ZM12 18H8C7.73478 18 7.48043 18.1054 7.29289 18.2929C7.10536 18.4804 7 18.7348 7 19C7 19.2652 7.10536 19.5196 7.29289 19.7071C7.48043 19.8946 7.73478 20 8 20H12C12.2652 20 12.5196 19.8946 12.7071 19.7071C12.8946 19.5196 13 19.2652 13 19C13 18.7348 12.8946 18.4804 12.7071 18.2929C12.5196 18.1054 12.2652 18 12 18ZM21 7V19C20.9984 20.3256 20.4711 21.5964 19.5338 22.5338C18.5964 23.4711 17.3256 23.9984 16 24H8C6.6744 23.9984 5.40356 23.4711 4.46622 22.5338C3.52888 21.5964 3.00159 20.3256 3 19V7C3.00159 5.6744 3.52888 4.40356 4.46622 3.46622C5.40356 2.52888 6.6744 2.00159 8 2H8.171C8.37858 1.41549 8.7619 0.909511 9.26839 0.551443C9.77487 0.193376 10.3797 0.000756748 11 0L13 0C13.6203 0.000756748 14.2251 0.193376 14.7316 0.551443C15.2381 0.909511 15.6214 1.41549 15.829 2H16C17.3256 2.00159 18.5964 2.52888 19.5338 3.46622C20.4711 4.40356 20.9984 5.6744 21 7V7ZM19 7C19 6.20435 18.6839 5.44129 18.1213 4.87868C17.5587 4.31607 16.7956 4 16 4H15C14.7348 4 14.4804 3.89464 14.2929 3.70711C14.1054 3.51957 14 3.26522 14 3C14 2.73478 13.8946 2.48043 13.7071 2.29289C13.5196 2.10536 13.2652 2 13 2H11C10.7348 2 10.4804 2.10536 10.2929 2.29289C10.1054 2.48043 10 2.73478 10 3C10 3.26522 9.89464 3.51957 9.70711 3.70711C9.51957 3.89464 9.26522 4 9 4H8C7.20435 4 6.44129 4.31607 5.87868 4.87868C5.31607 5.44129 5 6.20435 5 7V19C5 19.7956 5.31607 20.5587 5.87868 21.1213C6.44129 21.6839 7.20435 22 8 22H16C16.7956 22 17.5587 21.6839 18.1213 21.1213C18.6839 20.5587 19 19.7956 19 19V7Z" />
      </g>
      <defs>
        <clipPath id="clip0_403_2806">
          <rect
            width={24}
            height={24}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default TreatmentIcon;