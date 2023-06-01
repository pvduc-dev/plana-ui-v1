/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const CheeseIcon: FC<IconProps> = ({ size, color, onClick, className }) => {
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
      <g clipPath="url(#clip0_403_3099)">
        <path d="M17 13.9999C16.4696 13.9999 15.9609 14.2106 15.5858 14.5857C15.2107 14.9607 15 15.4694 15 15.9999C15 16.5303 15.2107 17.039 15.5858 17.4141C15.9609 17.7892 16.4696 17.9999 17 17.9999C17.5304 17.9999 18.0391 17.7892 18.4142 17.4141C18.7893 17.039 19 16.5303 19 15.9999C19 15.4694 18.7893 14.9607 18.4142 14.5857C18.0391 14.2106 17.5304 13.9999 17 13.9999Z" />
        <path d="M7.99984 10.9999C6.93898 10.9999 5.92156 11.4213 5.17142 12.1714C4.42127 12.9216 3.99985 13.939 3.99985 14.9999C3.99985 16.0607 4.42127 17.0781 5.17142 17.8283C5.92156 18.5784 6.93898 18.9999 7.99984 18.9999C9.0607 18.9999 10.0781 18.5784 10.8283 17.8283C11.5784 17.0781 11.9998 16.0607 11.9998 14.9999C11.9998 13.939 11.5784 12.9216 10.8283 12.1714C10.0781 11.4213 9.0607 10.9999 7.99984 10.9999V10.9999ZM7.99984 16.9999C7.46941 16.9999 6.9607 16.7892 6.58563 16.4141C6.21056 16.039 5.99984 15.5303 5.99984 14.9999C5.99984 14.4694 6.21056 13.9607 6.58563 13.5857C6.9607 13.2106 7.46941 12.9999 7.99984 12.9999C8.53027 12.9999 9.03898 13.2106 9.41405 13.5857C9.78912 13.9607 9.99984 14.4694 9.99984 14.9999C9.99984 15.5303 9.78912 16.039 9.41405 16.4141C9.03898 16.7892 8.53027 16.9999 7.99984 16.9999Z" />
        <path d="M21.5891 6.70011L13.7511 0.849113C12.9042 0.277222 11.9013 -0.0190533 10.8795 0.000815738C9.85779 0.0206848 8.86714 0.355727 8.04309 0.960113C4.80571 3.38279 2.38374 6.73476 1.10009 10.5691C1.0856 10.6203 1.07491 10.6724 1.06809 10.7251C0.957927 10.9411 0.863352 11.1647 0.785094 11.3941C-0.265441 14.3753 -0.265441 17.626 0.785094 20.6071C1.12117 21.5973 1.75922 22.4572 2.60948 23.0658C3.45975 23.6745 4.47944 24.0012 5.52509 24.0001H9.14909C9.58277 23.9933 10.003 23.8483 10.3486 23.5863C10.6943 23.3242 10.9473 22.9588 11.0711 22.5431C11.1724 22.2445 11.3647 21.9851 11.621 21.8014C11.8773 21.6177 12.1848 21.5189 12.5001 21.5189C12.8154 21.5189 13.1228 21.6177 13.3792 21.8014C13.6355 21.9851 13.8278 22.2445 13.9291 22.5431C14.0528 22.9588 14.3059 23.3242 14.6516 23.5863C14.9972 23.8483 15.4174 23.9933 15.8511 24.0001H19.0001C20.3257 23.9985 21.5965 23.4712 22.5339 22.5339C23.4712 21.5966 23.9985 20.3257 24.0001 19.0001V11.5071C23.9979 10.5739 23.779 9.65393 23.3606 8.81975C22.9422 7.98556 22.3357 7.25995 21.5891 6.70011V6.70011ZM9.24009 2.56211C9.72481 2.20735 10.3065 2.00952 10.907 1.99521C11.5075 1.98091 12.098 2.15083 12.5991 2.48211L19.9891 8.00011H5.52609C5.13681 7.99973 4.74882 8.04504 4.37009 8.13511C5.59434 5.96332 7.25198 4.06639 9.24009 2.56211V2.56211ZM22.0001 19.0001C22.0001 19.7958 21.684 20.5588 21.1214 21.1214C20.5588 21.684 19.7957 22.0001 19.0001 22.0001L15.8341 21.9341C15.5997 21.2286 15.1474 20.6158 14.5424 20.1838C13.9374 19.7518 13.2109 19.523 12.4675 19.5304C11.7242 19.5377 11.0023 19.7808 10.406 20.2246C9.80961 20.6685 9.36952 21.2901 9.14909 22.0001H5.52509C4.8976 22.0004 4.28581 21.8039 3.77582 21.4384C3.26583 21.0728 2.88331 20.5565 2.68209 19.9621C1.77459 17.3991 1.77459 14.6022 2.68209 12.0391C2.88398 11.4449 3.26677 10.9288 3.7768 10.5631C4.28684 10.1974 4.89852 10.0006 5.52609 10.0001H21.7001C21.8965 10.4783 21.9984 10.9901 22.0001 11.5071V19.0001Z" />
      </g>
      <defs>
        <clipPath id="clip0_403_3099">
          <rect
            width={24}
            height={24}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default CheeseIcon;
