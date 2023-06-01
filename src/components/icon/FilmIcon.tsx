/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const FilmIcon: FC<IconProps> = ({ size, color, onClick, className }) => {
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
      <g clipPath="url(#clip0_403_3161)">
        <path d="M19 0H5C3.6744 0.00158786 2.40356 0.528882 1.46622 1.46622C0.528882 2.40356 0.00158786 3.6744 0 5L0 19C0.00158786 20.3256 0.528882 21.5964 1.46622 22.5338C2.40356 23.4711 3.6744 23.9984 5 24H19C20.3256 23.9984 21.5964 23.4711 22.5338 22.5338C23.4711 21.5964 23.9984 20.3256 24 19V5C23.9984 3.6744 23.4711 2.40356 22.5338 1.46622C21.5964 0.528882 20.3256 0.00158786 19 0V0ZM20 11H22V13H20V11ZM20 9V7H22V9H20ZM18 11H6V2H18V11ZM4 13H2V11H4V13ZM4 9H2V7H4V9ZM2 15H4V17H2V15ZM6 13H18V22H6V13ZM20 15H22V17H20V15ZM22 5H20V2.184C20.5829 2.39008 21.0879 2.77123 21.4459 3.2753C21.8039 3.77937 21.9974 4.38174 22 5ZM4 2.184V5H2C2.00256 4.38174 2.19608 3.77937 2.55409 3.2753C2.91209 2.77123 3.41709 2.39008 4 2.184ZM2 19H4V21.816C3.41709 21.6099 2.91209 21.2288 2.55409 20.7247C2.19608 20.2206 2.00256 19.6183 2 19ZM20 21.816V19H22C21.9974 19.6183 21.8039 20.2206 21.4459 20.7247C21.0879 21.2288 20.5829 21.6099 20 21.816V21.816Z" />
      </g>
      <defs>
        <clipPath id="clip0_403_3161">
          <rect
            width={24}
            height={24}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default FilmIcon;
