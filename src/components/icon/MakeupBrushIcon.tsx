/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const MakeupBrushIcon: FC<IconProps> = ({
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
      <g clipPath="url(#clip0_403_2948)">
        <path d="M23.229 0.770999C22.7564 0.300805 22.1234 0.0270324 21.4571 0.00476837C20.7908 -0.0174957 20.1409 0.213401 19.638 0.650999L5.472 13.133C3.137 13.573 0 14.874 0 17.6C0.00185286 19.2968 0.676732 20.9236 1.87656 22.1234C3.07639 23.3233 4.70318 23.9981 6.4 24C9.125 24 10.427 20.864 10.867 18.529L23.352 4.358C23.7887 3.85529 24.0188 3.20583 23.996 2.54031C23.9732 1.87479 23.6991 1.24261 23.229 0.770999V0.770999ZM10.141 16.327L7.673 13.859L9.678 12.092L11.908 14.322L10.141 16.327ZM6.4 22C5.23345 21.9987 4.11507 21.5347 3.29019 20.7098C2.46532 19.8849 2.00132 18.7665 2 17.6C2 16.092 4.639 15.313 6.049 15.063L8.937 17.95C8.686 19.361 7.908 22 6.4 22V22ZM21.849 3.04L13.233 12.818L11.181 10.767L20.956 2.154C21.0764 2.0507 21.2312 1.99653 21.3897 2.00226C21.5482 2.00798 21.6988 2.0732 21.8114 2.18491C21.924 2.29662 21.9904 2.44664 21.9973 2.6051C22.0043 2.76355 21.9513 2.91883 21.849 3.04V3.04Z" />
      </g>
      <defs>
        <clipPath id="clip0_403_2948">
          <rect
            width={24}
            height={24}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default MakeupBrushIcon;
