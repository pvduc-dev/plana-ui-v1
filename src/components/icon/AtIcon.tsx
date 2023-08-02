/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const AtIcon: FC<IconProps> = ({ size, color, onClick, className }) => {
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
      <g clipPath="url(#clip0_403_3278)">
        <path d="M12.0001 0C8.81859 0.00344108 5.76834 1.26883 3.51865 3.51852C1.26896 5.76821 0.00357155 8.81846 0.00013047 12C-0.12587 21.573 11.1591 27.429 18.9001 21.817C19.0114 21.743 19.1067 21.6475 19.1804 21.536C19.2541 21.4246 19.3047 21.2995 19.3293 21.1682C19.3538 21.0369 19.3518 20.902 19.3233 20.7714C19.2949 20.6409 19.2406 20.5174 19.1636 20.4082C19.0866 20.299 18.9885 20.2063 18.8751 20.1357C18.7617 20.065 18.6353 20.0178 18.5034 19.9968C18.3714 19.9758 18.2366 19.9815 18.1069 20.0135C17.9772 20.0454 17.8552 20.1031 17.7481 20.183C11.3001 24.856 1.90013 19.978 2.00013 12C2.54913 -1.266 21.4531 -1.263 22.0001 12V14C22.0001 14.5304 21.7894 15.0391 21.4143 15.4142C21.0393 15.7893 20.5306 16 20.0001 16C19.4697 16 18.961 15.7893 18.5859 15.4142C18.2108 15.0391 18.0001 14.5304 18.0001 14V12C17.7481 4.071 6.25113 4.072 6.00013 12C6.01177 13.216 6.39158 14.3999 7.08951 15.3958C7.78744 16.3916 8.77073 17.1526 9.90978 17.5784C11.0488 18.0043 12.2902 18.075 13.4702 17.7812C14.6503 17.4875 15.7136 16.8431 16.5201 15.933C16.9539 16.6986 17.6281 17.2998 18.4382 17.6435C19.2483 17.9871 20.1491 18.0541 21.0011 17.8339C21.8531 17.6137 22.6087 17.1187 23.1509 16.4256C23.6931 15.7325 23.9916 14.8799 24.0001 14V12C23.9967 8.81846 22.7313 5.76821 20.4816 3.51852C18.2319 1.26883 15.1817 0.00344108 12.0001 0V0ZM12.0001 16C10.9393 16 9.92185 15.5786 9.1717 14.8284C8.42156 14.0783 8.00013 13.0609 8.00013 12C8.00013 10.9391 8.42156 9.92172 9.1717 9.17157C9.92185 8.42143 10.9393 8 12.0001 8C13.061 8 14.0784 8.42143 14.8286 9.17157C15.5787 9.92172 16.0001 10.9391 16.0001 12C16.0001 13.0609 15.5787 14.0783 14.8286 14.8284C14.0784 15.5786 13.061 16 12.0001 16Z" />
      </g>
      <defs>
        <clipPath id="clip0_403_3278">
          <rect
            width={24}
            height={24}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default AtIcon;
