/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const LockIcon: FC<IconProps> = ({ size, color, onClick, className }) => {
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
      <g clipPath="url(#clip0_403_2970)">
        <path d="M18.9999 8.424V7C18.9999 5.14348 18.2624 3.36301 16.9497 2.05025C15.6369 0.737498 13.8565 0 11.9999 0C10.1434 0 8.36295 0.737498 7.05019 2.05025C5.73744 3.36301 4.99994 5.14348 4.99994 7V8.424C4.1093 8.81271 3.35123 9.45252 2.81844 10.2652C2.28564 11.0779 2.00122 12.0282 1.99994 13V19C2.00153 20.3256 2.52882 21.5964 3.46616 22.5338C4.4035 23.4711 5.67434 23.9984 6.99994 24H16.9999C18.3255 23.9984 19.5964 23.4711 20.5337 22.5338C21.4711 21.5964 21.9984 20.3256 21.9999 19V13C21.9987 12.0282 21.7142 11.0779 21.1814 10.2652C20.6486 9.45252 19.8906 8.81271 18.9999 8.424V8.424ZM6.99994 7C6.99994 5.67392 7.52672 4.40215 8.46441 3.46447C9.40209 2.52678 10.6739 2 11.9999 2C13.326 2 14.5978 2.52678 15.5355 3.46447C16.4732 4.40215 16.9999 5.67392 16.9999 7V8H6.99994V7ZM19.9999 19C19.9999 19.7956 19.6839 20.5587 19.1213 21.1213C18.5587 21.6839 17.7956 22 16.9999 22H6.99994C6.20429 22 5.44123 21.6839 4.87862 21.1213C4.31601 20.5587 3.99994 19.7956 3.99994 19V13C3.99994 12.2044 4.31601 11.4413 4.87862 10.8787C5.44123 10.3161 6.20429 10 6.99994 10H16.9999C17.7956 10 18.5587 10.3161 19.1213 10.8787C19.6839 11.4413 19.9999 12.2044 19.9999 13V19Z" />
        <path d="M11.9999 13.9996C11.7347 13.9996 11.4804 14.105 11.2928 14.2925C11.1053 14.4801 10.9999 14.7344 10.9999 14.9996V16.9996C10.9999 17.2648 11.1053 17.5192 11.2928 17.7067C11.4804 17.8943 11.7347 17.9996 11.9999 17.9996C12.2652 17.9996 12.5195 17.8943 12.7071 17.7067C12.8946 17.5192 13 17.2648 13 16.9996V14.9996C13 14.7344 12.8946 14.4801 12.7071 14.2925C12.5195 14.105 12.2652 13.9996 11.9999 13.9996Z" />
      </g>
      <defs>
        <clipPath id="clip0_403_2970">
          <rect
            width={24}
            height={24}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default LockIcon;
