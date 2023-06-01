/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const EnvelopeBanIcon: FC<IconProps> = ({
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
      <g clipPath="url(#clip0_403_3067)">
        <path d="M19 10C20.1568 9.99932 21.2776 9.59755 22.1714 8.86315C23.0651 8.12874 23.6766 7.10715 23.9016 5.97244C24.1266 4.83773 23.9511 3.66011 23.4052 2.64025C22.8592 1.62038 21.9765 0.821378 20.9075 0.379376C19.8385 -0.062626 18.6493 -0.120275 17.5425 0.216253C16.4357 0.55278 15.4799 1.26266 14.8379 2.22494C14.1958 3.18721 13.9073 4.34234 14.0215 5.49349C14.1357 6.64464 14.6454 7.72059 15.464 8.538C15.9282 9.00235 16.4795 9.37051 17.0863 9.62139C17.6931 9.87227 18.3434 10.0009 19 10ZM21.122 7.124C20.6829 7.55932 20.1199 7.84831 19.5102 7.95142C18.9005 8.05452 18.2739 7.96671 17.716 7.7L21.7 3.716C21.9665 4.27407 22.0539 4.90085 21.9505 5.51055C21.847 6.12025 21.5577 6.68308 21.122 7.122V7.124ZM16.878 2.878C17.3169 2.44235 17.8797 2.15299 18.4895 2.04952C19.0992 1.94606 19.7259 2.03354 20.284 2.3L16.3 6.284C16.0335 5.72593 15.9461 5.09915 16.0495 4.48945C16.153 3.87975 16.4423 3.31692 16.878 2.878V2.878ZM24 12V19C23.9984 20.3256 23.4711 21.5964 22.5338 22.5338C21.5964 23.4711 20.3256 23.9984 19 24H5C3.6744 23.9984 2.40356 23.4711 1.46622 22.5338C0.528882 21.5964 0.00158786 20.3256 0 19L0 8C0.00158786 6.6744 0.528882 5.40356 1.46622 4.46622C2.40356 3.52888 3.6744 3.00159 5 3H11C11.2652 3 11.5196 3.10536 11.7071 3.29289C11.8946 3.48043 12 3.73478 12 4C12 4.26522 11.8946 4.51957 11.7071 4.70711C11.5196 4.89464 11.2652 5 11 5H5C4.45621 5.0015 3.92312 5.15128 3.45812 5.43321C2.99311 5.71514 2.6138 6.11854 2.361 6.6L9.878 14.118C10.4417 14.6791 11.2047 14.9941 12 14.9941C12.7953 14.9941 13.5583 14.6791 14.122 14.118L15.992 12.282C16.1822 12.1008 16.4361 12.0017 16.6988 12.0061C16.9615 12.0106 17.2119 12.1183 17.3959 12.3059C17.5798 12.4935 17.6825 12.746 17.6818 13.0088C17.6811 13.2715 17.577 13.5234 17.392 13.71L15.528 15.538C14.5898 16.473 13.3189 16.9976 11.9943 16.9964C10.6697 16.9953 9.39964 16.4686 8.463 15.532L2 9.071V19C2 19.7956 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22H19C19.7956 22 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7956 22 19V12C22 11.7348 22.1054 11.4804 22.2929 11.2929C22.4804 11.1054 22.7348 11 23 11C23.2652 11 23.5196 11.1054 23.7071 11.2929C23.8946 11.4804 24 11.7348 24 12V12Z" />
      </g>
      <defs>
        <clipPath id="clip0_403_3067">
          <rect
            width={24}
            height={24}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default EnvelopeBanIcon;