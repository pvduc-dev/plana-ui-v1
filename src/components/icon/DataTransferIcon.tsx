/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const DataTransferIcon: FC<IconProps> = ({
  size,
  color,
  onClick,
  className,
}) => {
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
      <g clipPath="url(#clip0_403_3038)">
        <path d="M8 0H4C2.93913 0 1.92172 0.421427 1.17157 1.17157C0.421427 1.92172 0 2.93913 0 4L0 5C0 6.06087 0.421427 7.07828 1.17157 7.82843C1.92172 8.57857 2.93913 9 4 9H5V11H3C2.73478 11 2.48043 11.1054 2.29289 11.2929C2.10536 11.4804 2 11.7348 2 12C2 12.2652 2.10536 12.5196 2.29289 12.7071C2.48043 12.8946 2.73478 13 3 13H9C9.26522 13 9.51957 12.8946 9.70711 12.7071C9.89464 12.5196 10 12.2652 10 12C10 11.7348 9.89464 11.4804 9.70711 11.2929C9.51957 11.1054 9.26522 11 9 11H7V9H8C9.06087 9 10.0783 8.57857 10.8284 7.82843C11.5786 7.07828 12 6.06087 12 5V4C12 2.93913 11.5786 1.92172 10.8284 1.17157C10.0783 0.421427 9.06087 0 8 0V0ZM10 5C10 5.53043 9.78929 6.03914 9.41421 6.41421C9.03914 6.78929 8.53043 7 8 7H4C3.46957 7 2.96086 6.78929 2.58579 6.41421C2.21071 6.03914 2 5.53043 2 5V4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2H8C8.53043 2 9.03914 2.21071 9.41421 2.58579C9.78929 2.96086 10 3.46957 10 4V5ZM20 11H18C16.9391 11 15.9217 11.4214 15.1716 12.1716C14.4214 12.9217 14 13.9391 14 15V20C14 21.0609 14.4214 22.0783 15.1716 22.8284C15.9217 23.5786 16.9391 24 18 24H20C21.0609 24 22.0783 23.5786 22.8284 22.8284C23.5786 22.0783 24 21.0609 24 20V15C24 13.9391 23.5786 12.9217 22.8284 12.1716C22.0783 11.4214 21.0609 11 20 11V11ZM22 20C22 20.5304 21.7893 21.0391 21.4142 21.4142C21.0391 21.7893 20.5304 22 20 22H18C17.4696 22 16.9609 21.7893 16.5858 21.4142C16.2107 21.0391 16 20.5304 16 20V15C16 14.4696 16.2107 13.9609 16.5858 13.5858C16.9609 13.2107 17.4696 13 18 13H20C20.5304 13 21.0391 13.2107 21.4142 13.5858C21.7893 13.9609 22 14.4696 22 15V20ZM14 4C14 3.73478 14.1054 3.48043 14.2929 3.29289C14.4804 3.10536 14.7348 3 15 3H17C17.7956 3 18.5587 3.31607 19.1213 3.87868C19.6839 4.44129 20 5.20435 20 6V8C20 8.26522 19.8946 8.51957 19.7071 8.70711C19.5196 8.89464 19.2652 9 19 9C18.7348 9 18.4804 8.89464 18.2929 8.70711C18.1054 8.51957 18 8.26522 18 8V6C18 5.73478 17.8946 5.48043 17.7071 5.29289C17.5196 5.10536 17.2652 5 17 5H15C14.7348 5 14.4804 4.89464 14.2929 4.70711C14.1054 4.51957 14 4.26522 14 4ZM12 20C12 20.2652 11.8946 20.5196 11.7071 20.7071C11.5196 20.8946 11.2652 21 11 21H8C7.20435 21 6.44129 20.6839 5.87868 20.1213C5.31607 19.5587 5 18.7956 5 18V16C5 15.7348 5.10536 15.4804 5.29289 15.2929C5.48043 15.1054 5.73478 15 6 15C6.26522 15 6.51957 15.1054 6.70711 15.2929C6.89464 15.4804 7 15.7348 7 16V18C7 18.2652 7.10536 18.5196 7.29289 18.7071C7.48043 18.8946 7.73478 19 8 19H11C11.2652 19 11.5196 19.1054 11.7071 19.2929C11.8946 19.4804 12 19.7348 12 20ZM20 20C20 20.1978 19.9414 20.3911 19.8315 20.5556C19.7216 20.72 19.5654 20.8482 19.3827 20.9239C19.2 20.9996 18.9989 21.0194 18.8049 20.9808C18.6109 20.9422 18.4327 20.847 18.2929 20.7071C18.153 20.5673 18.0578 20.3891 18.0192 20.1951C17.9806 20.0011 18.0004 19.8 18.0761 19.6173C18.1518 19.4346 18.28 19.2784 18.4444 19.1685C18.6089 19.0586 18.8022 19 19 19C19.2652 19 19.5196 19.1054 19.7071 19.2929C19.8946 19.4804 20 19.7348 20 20Z" />
      </g>
      <defs>
        <clipPath id="clip0_403_3038">
          <rect
            width={24}
            height={24}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default DataTransferIcon;
