/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const GiftIcon: FC<IconProps> = ({ size, color, onClick, className }) => {
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
      <g clipPath="url(#clip0_403_2999)">
        <path d="M20 7H18.262C18.8274 6.5016 19.2762 5.88488 19.5766 5.1936C19.8769 4.50232 20.0215 3.75341 20 3C20 2.73478 19.8946 2.48043 19.7071 2.29289C19.5196 2.10536 19.2652 2 19 2C18.7348 2 18.4804 2.10536 18.2929 2.29289C18.1054 2.48043 18 2.73478 18 3C18 5.622 15.629 6.53 13.826 6.841C14.4915 5.66105 14.8921 4.35037 15 3C15 2.20435 14.6839 1.44129 14.1213 0.87868C13.5587 0.31607 12.7956 0 12 0C11.2044 0 10.4413 0.31607 9.87868 0.87868C9.31607 1.44129 9 2.20435 9 3C9.10791 4.35037 9.50852 5.66105 10.174 6.841C8.371 6.53 6 5.622 6 3C6 2.73478 5.89464 2.48043 5.70711 2.29289C5.51957 2.10536 5.26522 2 5 2C4.73478 2 4.48043 2.10536 4.29289 2.29289C4.10536 2.48043 4 2.73478 4 3C3.97851 3.75341 4.12307 4.50232 4.42344 5.1936C4.7238 5.88488 5.1726 6.5016 5.738 7H4C2.93913 7 1.92172 7.42143 1.17157 8.17157C0.421427 8.92172 0 9.93913 0 11L0 12C0 12.5304 0.210714 13.0391 0.585786 13.4142C0.960859 13.7893 1.46957 14 2 14V19C2.00159 20.3256 2.52888 21.5964 3.46622 22.5338C4.40356 23.4711 5.6744 23.9984 7 24H17C18.3256 23.9984 19.5964 23.4711 20.5338 22.5338C21.4711 21.5964 21.9984 20.3256 22 19V14C22.5304 14 23.0391 13.7893 23.4142 13.4142C23.7893 13.0391 24 12.5304 24 12V11C24 9.93913 23.5786 8.92172 22.8284 8.17157C22.0783 7.42143 21.0609 7 20 7ZM12 2C12.2652 2 12.5196 2.10536 12.7071 2.29289C12.8946 2.48043 13 2.73478 13 3C12.8793 4.06283 12.5387 5.08891 12 6.013C11.4613 5.08891 11.1207 4.06283 11 3C11 2.73478 11.1054 2.48043 11.2929 2.29289C11.4804 2.10536 11.7348 2 12 2V2ZM2 11C2 10.4696 2.21071 9.96086 2.58579 9.58579C2.96086 9.21071 3.46957 9 4 9H11V12H2V11ZM4 19V14H11V22H7C6.20435 22 5.44129 21.6839 4.87868 21.1213C4.31607 20.5587 4 19.7956 4 19V19ZM20 19C20 19.7956 19.6839 20.5587 19.1213 21.1213C18.5587 21.6839 17.7956 22 17 22H13V14H20V19ZM13 12V9H20C20.5304 9 21.0391 9.21071 21.4142 9.58579C21.7893 9.96086 22 10.4696 22 11V12H13Z" />
      </g>
      <defs>
        <clipPath id="clip0_403_2999">
          <rect
            width={24}
            height={24}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default GiftIcon;
