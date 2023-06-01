/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const ManHeadIcon: FC<IconProps> = ({ size, color, onClick, className }) => {
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
      <g clipPath="url(#clip0_403_2946)">
        <path d="M14.5 13.0004C14.2034 13.0004 13.9134 12.9124 13.6667 12.7476C13.42 12.5828 13.2278 12.3485 13.1142 12.0744C13.0007 11.8003 12.971 11.4987 13.0289 11.2078C13.0867 10.9168 13.2296 10.6495 13.4394 10.4397C13.6492 10.23 13.9164 10.0871 14.2074 10.0292C14.4984 9.97134 14.8 10.001 15.0741 10.1146C15.3482 10.2281 15.5824 10.4204 15.7472 10.667C15.9121 10.9137 16 11.2037 16 11.5004C16 11.8982 15.842 12.2797 15.5607 12.5611C15.2794 12.8424 14.8979 13.0004 14.5 13.0004ZM21.851 8.27439C21.4496 5.95449 20.2404 3.85137 18.4376 2.33714C16.6348 0.822908 14.3544 -0.00482513 12 0.000390711C5.10004 0.000390711 3.12404 4.67439 1.81904 7.76739C1.55442 8.64254 1.10457 9.4505 0.500043 10.1364C0.319452 10.2417 0.176413 10.401 0.0910359 10.5918C0.00565876 10.7827 -0.0177625 10.9955 0.0240651 11.2003C0.0658926 11.4051 0.170865 11.5917 0.324225 11.7338C0.477584 11.8759 0.671617 11.9663 0.879043 11.9924C3.35085 12.2002 5.83687 11.8234 8.13604 10.8924C8.00919 11.1735 7.97208 11.4869 8.02976 11.7899C8.08744 12.0929 8.23711 12.3707 8.45839 12.5855C8.67967 12.8004 8.96179 12.9418 9.26634 12.9905C9.57089 13.0392 9.88305 12.9929 10.1603 12.8578C10.4376 12.7227 10.6664 12.5054 10.8158 12.2356C10.9651 11.9657 11.0276 11.6564 10.9948 11.3497C10.9619 11.043 10.8354 10.754 10.6323 10.5218C10.4293 10.2897 10.1596 10.1257 9.86004 10.0524C11.8247 8.95183 13.518 7.42553 14.816 5.58539C14.8984 5.479 14.9585 5.35708 14.9926 5.22694C15.0267 5.09679 15.0343 4.96109 15.0147 4.82797C14.9952 4.69485 14.949 4.56704 14.8789 4.45219C14.8088 4.33735 14.7162 4.23783 14.6068 4.1596C14.4973 4.08137 14.3732 4.02603 14.2418 3.99691C14.1104 3.96778 13.9746 3.96546 13.8423 3.99009C13.71 4.01472 13.5841 4.06579 13.472 4.14025C13.3599 4.2147 13.264 4.311 13.19 4.42339C12.0239 6.06524 10.5016 7.42214 8.73694 8.39259C6.97234 9.36303 5.01113 9.92191 3.00004 10.0274C3.22704 9.57439 3.43804 9.07139 3.66204 8.54439C4.89204 5.62839 6.42304 2.00039 12 2.00039C13.9759 1.99567 15.8832 2.72429 17.3526 4.04518C18.822 5.36606 19.749 7.18523 19.954 9.15039C19.9769 9.36525 20.0688 9.56692 20.2159 9.7252C20.363 9.88348 20.5574 9.98985 20.77 10.0284C21.1344 10.0997 21.4593 10.3035 21.6821 10.6005C21.9048 10.8975 22.0096 11.2665 21.976 11.6362C21.9424 12.0059 21.7729 12.3501 21.5003 12.602C21.2276 12.854 20.8713 12.996 20.5 13.0004C20.4155 12.998 20.3312 12.989 20.248 12.9734C20.0148 12.9309 19.7741 12.9731 19.5692 13.0925C19.3644 13.2119 19.209 13.4005 19.131 13.6244C18.215 16.2214 15.132 19.0004 12 19.0004C9.10004 19.0004 6.40004 16.7174 5.23404 14.4614C5.11204 14.2259 4.90148 14.0485 4.64869 13.9682C4.39589 13.8879 4.12156 13.9114 3.88604 14.0334C3.65053 14.1554 3.47313 14.366 3.39286 14.6188C3.3126 14.8716 3.33604 15.1459 3.45804 15.3814C4.49446 17.3152 6.07308 18.9043 8.00004 19.9534V23.0004C8.00004 23.2656 8.1054 23.52 8.29294 23.7075C8.48047 23.895 8.73483 24.0004 9.00004 24.0004C9.26526 24.0004 9.51961 23.895 9.70715 23.7075C9.89469 23.52 10 23.2656 10 23.0004V20.7384C11.3101 21.0904 12.6899 21.0904 14 20.7384V23.0004C14 23.2656 14.1054 23.52 14.2929 23.7075C14.4805 23.895 14.7348 24.0004 15 24.0004C15.2653 24.0004 15.5196 23.895 15.7072 23.7075C15.8947 23.52 16 23.2656 16 23.0004V19.9544C18.0642 18.8447 19.7215 17.1068 20.732 14.9924C21.5178 14.9388 22.2626 14.6217 22.8459 14.0924C23.4291 13.5631 23.8168 12.8525 23.9462 12.0756C24.0756 11.2986 23.9392 10.5008 23.559 9.811C23.1788 9.12121 22.577 8.57983 21.851 8.27439V8.27439Z" />
      </g>
      <defs>
        <clipPath id="clip0_403_2946">
          <rect
            width={24}
            height={24}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default ManHeadIcon;
