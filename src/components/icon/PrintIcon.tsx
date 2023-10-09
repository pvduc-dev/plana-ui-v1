/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const PrintIcon: FC<IconProps> = ({ size, color, onClick, className }) => {
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
      <g clipPath="url(#clip0_403_3150)">
        <path d="M19 6V4C19 2.93913 18.5786 1.92172 17.8284 1.17157C17.0783 0.421427 16.0609 0 15 0L9 0C7.93913 0 6.92172 0.421427 6.17157 1.17157C5.42143 1.92172 5 2.93913 5 4V6C3.6744 6.00159 2.40356 6.52888 1.46622 7.46622C0.528882 8.40356 0.00158786 9.6744 0 11L0 16C0.00158786 17.3256 0.528882 18.5964 1.46622 19.5338C2.40356 20.4711 3.6744 20.9984 5 21C5 21.7956 5.31607 22.5587 5.87868 23.1213C6.44129 23.6839 7.20435 24 8 24H16C16.7956 24 17.5587 23.6839 18.1213 23.1213C18.6839 22.5587 19 21.7956 19 21C20.3256 20.9984 21.5964 20.4711 22.5338 19.5338C23.4711 18.5964 23.9984 17.3256 24 16V11C23.9984 9.6744 23.4711 8.40356 22.5338 7.46622C21.5964 6.52888 20.3256 6.00159 19 6V6ZM7 4C7 3.46957 7.21071 2.96086 7.58579 2.58579C7.96086 2.21071 8.46957 2 9 2H15C15.5304 2 16.0391 2.21071 16.4142 2.58579C16.7893 2.96086 17 3.46957 17 4V6H7V4ZM17 21C17 21.2652 16.8946 21.5196 16.7071 21.7071C16.5196 21.8946 16.2652 22 16 22H8C7.73478 22 7.48043 21.8946 7.29289 21.7071C7.10536 21.5196 7 21.2652 7 21V17C7 16.7348 7.10536 16.4804 7.29289 16.2929C7.48043 16.1054 7.73478 16 8 16H16C16.2652 16 16.5196 16.1054 16.7071 16.2929C16.8946 16.4804 17 16.7348 17 17V21ZM22 16C22 16.7956 21.6839 17.5587 21.1213 18.1213C20.5587 18.6839 19.7956 19 19 19V17C19 16.2044 18.6839 15.4413 18.1213 14.8787C17.5587 14.3161 16.7956 14 16 14H8C7.20435 14 6.44129 14.3161 5.87868 14.8787C5.31607 15.4413 5 16.2044 5 17V19C4.20435 19 3.44129 18.6839 2.87868 18.1213C2.31607 17.5587 2 16.7956 2 16V11C2 10.2044 2.31607 9.44129 2.87868 8.87868C3.44129 8.31607 4.20435 8 5 8H19C19.7956 8 20.5587 8.31607 21.1213 8.87868C21.6839 9.44129 22 10.2044 22 11V16Z" />
        <path d="M18 10.0003H16C15.7348 10.0003 15.4804 10.1057 15.2929 10.2932C15.1054 10.4807 15 10.7351 15 11.0003C15 11.2655 15.1054 11.5199 15.2929 11.7074C15.4804 11.8949 15.7348 12.0003 16 12.0003H18C18.2652 12.0003 18.5196 11.8949 18.7071 11.7074C18.8946 11.5199 19 11.2655 19 11.0003C19 10.7351 18.8946 10.4807 18.7071 10.2932C18.5196 10.1057 18.2652 10.0003 18 10.0003Z" />
      </g>
      <defs>
        <clipPath id="clip0_403_3150">
          <rect
            width={24}
            height={24}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default PrintIcon;