/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const EnvelopeDownloadIcon: FC<IconProps> = ({
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
      <g clipPath="url(#clip0_403_3029)">
        <path d="M14.73 7.7C14.6381 7.6061 14.5655 7.49502 14.5165 7.3731C14.4676 7.25117 14.4431 7.12079 14.4444 6.98939C14.4458 6.858 14.4731 6.72816 14.5247 6.6073C14.5762 6.48644 14.6511 6.37693 14.745 6.285C14.8389 6.19307 14.95 6.12054 15.0719 6.07155C15.1938 6.02255 15.3242 5.99805 15.4556 5.99944C15.587 6.00084 15.7168 6.0281 15.8377 6.07967C15.9586 6.13124 16.0681 6.20611 16.16 6.3L18 8.181V1C18 0.734784 18.1054 0.48043 18.2929 0.292893C18.4804 0.105357 18.7348 0 19 0C19.2652 0 19.5196 0.105357 19.7071 0.292893C19.8946 0.48043 20 0.734784 20 1V8.181L21.84 6.3C22.0257 6.11037 22.279 6.00226 22.5444 5.99944C22.8098 5.99663 23.0654 6.09935 23.255 6.285C23.4446 6.47065 23.5527 6.72403 23.5556 6.98939C23.5584 7.25476 23.4557 7.51037 23.27 7.7L20.755 10.27C20.2932 10.734 19.6666 10.9964 19.012 11C19.0058 11.0015 18.9992 11.0015 18.993 11C18.6697 11.0001 18.3496 10.9364 18.051 10.8125C17.7524 10.6886 17.4812 10.5069 17.253 10.278L14.73 7.7ZM23 11C22.7348 11 22.4804 11.1054 22.2929 11.2929C22.1054 11.4804 22 11.7348 22 12V19C22 19.7956 21.6839 20.5587 21.1213 21.1213C20.5587 21.6839 19.7956 22 19 22H5C4.20435 22 3.44129 21.6839 2.87868 21.1213C2.31607 20.5587 2 19.7956 2 19V9.071L8.465 15.536C9.4041 16.4656 10.6716 16.9879 11.9929 16.9897C13.3143 16.9916 14.5833 16.4729 15.525 15.546L17.407 13.717C17.5027 13.6258 17.5794 13.5166 17.6326 13.3956C17.6858 13.2746 17.7145 13.1443 17.7171 13.0122C17.7196 12.88 17.6959 12.7487 17.6474 12.6257C17.5988 12.5028 17.5264 12.3907 17.4343 12.2959C17.3422 12.2012 17.2321 12.1256 17.1106 12.0736C16.9891 12.0216 16.8585 11.9942 16.7263 11.993C16.5942 11.9918 16.4631 12.0168 16.3406 12.0666C16.2182 12.1164 16.1068 12.1899 16.013 12.283L14.121 14.122C13.5493 14.667 12.7898 14.971 12 14.971C11.2102 14.971 10.4507 14.667 9.879 14.122L2.361 6.6C2.6138 6.11854 2.99311 5.71514 3.45812 5.43321C3.92312 5.15128 4.45621 5.0015 5 5H12C12.2652 5 12.5196 4.89464 12.7071 4.70711C12.8946 4.51957 13 4.26522 13 4C13 3.73478 12.8946 3.48043 12.7071 3.29289C12.5196 3.10536 12.2652 3 12 3H5C3.6744 3.00159 2.40356 3.52888 1.46622 4.46622C0.528882 5.40356 0.00158786 6.6744 0 8L0 19C0.00158786 20.3256 0.528882 21.5964 1.46622 22.5338C2.40356 23.4711 3.6744 23.9984 5 24H19C20.3256 23.9984 21.5964 23.4711 22.5338 22.5338C23.4711 21.5964 23.9984 20.3256 24 19V12C24 11.7348 23.8946 11.4804 23.7071 11.2929C23.5196 11.1054 23.2652 11 23 11Z" />
      </g>
      <defs>
        <clipPath id="clip0_403_3029">
          <rect
            width={24}
            height={24}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default EnvelopeDownloadIcon;