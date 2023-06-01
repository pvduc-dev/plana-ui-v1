/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const TornadoIcon: FC<IconProps> = ({ size, color, onClick, className }) => {
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
      <g clipPath="url(#clip0_403_2854)">
        <path d="M16.0002 24H14.0002C13.735 24 13.4807 23.8946 13.2931 23.7071C13.1056 23.5196 13.0002 23.2652 13.0002 23C13.0002 22.7348 13.1056 22.4804 13.2931 22.2929C13.4807 22.1054 13.735 22 14.0002 22H16.0002C16.2654 22 16.5198 21.8946 16.7073 21.7071C16.8949 21.5196 17.0002 21.2652 17.0002 21C17.0002 20.7348 16.8949 20.4804 16.7073 20.2929C16.5198 20.1054 16.2654 20 16.0002 20H12.0002C11.2046 20 10.4415 19.6839 9.87891 19.1213C9.3163 18.5587 9.00023 17.7956 9.00023 17C9.00023 16.2044 9.3163 15.4413 9.87891 14.8787C10.4415 14.3161 11.2046 14 12.0002 14H19.0002C19.2654 14 19.5198 13.8946 19.7073 13.7071C19.8949 13.5196 20.0002 13.2652 20.0002 13C20.0002 12.7348 19.8949 12.4804 19.7073 12.2929C19.5198 12.1054 19.2654 12 19.0002 12H6.00023C-1.93177 11.747 -1.92577 0.25 6.00023 0H20.0002C21.0611 0 22.0785 0.421427 22.8287 1.17157C23.5788 1.92172 24.0002 2.93913 24.0002 4C24.0002 5.06087 23.5788 6.07828 22.8287 6.82843C22.0785 7.57857 21.0611 8 20.0002 8H6.00023C5.73502 8 5.48066 7.89464 5.29313 7.70711C5.10559 7.51957 5.00023 7.26522 5.00023 7C5.00023 6.73478 5.10559 6.48043 5.29313 6.29289C5.48066 6.10536 5.73502 6 6.00023 6H20.0002C20.5307 6 21.0394 5.78929 21.4144 5.41421C21.7895 5.03914 22.0002 4.53043 22.0002 4C22.0002 3.46957 21.7895 2.96086 21.4144 2.58579C21.0394 2.21071 20.5307 2 20.0002 2H6.00023C4.93937 2 3.92195 2.42143 3.17181 3.17157C2.42166 3.92172 2.00023 4.93913 2.00023 6C2.00023 7.06087 2.42166 8.07828 3.17181 8.82843C3.92195 9.57857 4.93937 10 6.00023 10H19.0002C19.7959 10 20.5589 10.3161 21.1216 10.8787C21.6842 11.4413 22.0002 12.2044 22.0002 13C22.0002 13.7956 21.6842 14.5587 21.1216 15.1213C20.5589 15.6839 19.7959 16 19.0002 16H12.0002C11.735 16 11.4807 16.1054 11.2931 16.2929C11.1056 16.4804 11.0002 16.7348 11.0002 17C11.0002 17.2652 11.1056 17.5196 11.2931 17.7071C11.4807 17.8946 11.735 18 12.0002 18H16.0002C16.7959 18 17.5589 18.3161 18.1216 18.8787C18.6842 19.4413 19.0002 20.2044 19.0002 21C19.0002 21.7956 18.6842 22.5587 18.1216 23.1213C17.5589 23.6839 16.7959 24 16.0002 24Z" />
      </g>
      <defs>
        <clipPath id="clip0_403_2854">
          <rect
            width={24}
            height={24}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default TornadoIcon;