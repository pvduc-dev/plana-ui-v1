/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const MedicineIcon: FC<IconProps> = ({ size, color, onClick, className }) => {
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
      <g clipPath="url(#clip0_403_3245)">
        <path d="M16 6.99971L15.977 5.82271C16.648 5.59321 17.2158 5.13281 17.5789 4.52361C17.942 3.91441 18.0769 3.19604 17.9595 2.49661C17.8422 1.79718 17.4802 1.16218 16.9381 0.704853C16.3961 0.247529 15.7092 -0.00237587 15 -0.000292251H9C8.29317 -0.00163157 7.60868 0.247227 7.06776 0.702207C6.52683 1.15719 6.16439 1.78892 6.04461 2.48553C5.92484 3.18214 6.05547 3.89865 6.41336 4.50817C6.77126 5.1177 7.33332 5.58089 8 5.81571V6.99971C6.6744 7.0013 5.40356 7.52859 4.46622 8.46593C3.52888 9.40327 3.00159 10.6741 3 11.9997V18.9997C3.00159 20.3253 3.52888 21.5962 4.46622 22.5335C5.40356 23.4708 6.6744 23.9981 8 23.9997H16C17.3256 23.9981 18.5964 23.4708 19.5338 22.5335C20.4711 21.5962 20.9984 20.3253 21 18.9997V11.9997C20.9984 10.6741 20.4711 9.40327 19.5338 8.46593C18.5964 7.52859 17.3256 7.0013 16 6.99971V6.99971ZM9 1.99971H15C15.2652 1.99971 15.5196 2.10506 15.7071 2.2926C15.8946 2.48014 16 2.73449 16 2.99971C16 3.26492 15.8946 3.51928 15.7071 3.70681C15.5196 3.89435 15.2652 3.99971 15 3.99971H9C8.73478 3.99971 8.48043 3.89435 8.29289 3.70681C8.10536 3.51928 8 3.26492 8 2.99971C8 2.73449 8.10536 2.48014 8.29289 2.2926C8.48043 2.10506 8.73478 1.99971 9 1.99971V1.99971ZM19 18.9997C19 19.7954 18.6839 20.5584 18.1213 21.121C17.5587 21.6836 16.7956 21.9997 16 21.9997H8C7.20435 21.9997 6.44129 21.6836 5.87868 21.121C5.31607 20.5584 5 19.7954 5 18.9997V11.9997C5 11.2041 5.31607 10.441 5.87868 9.87839C6.44129 9.31578 7.20435 8.99971 8 8.99971H9C9.26522 8.99971 9.51957 8.89435 9.70711 8.70682C9.89464 8.51928 10 8.26493 10 7.99971V5.99971H13.973L14 8.01371C14.0037 8.27649 14.1107 8.52726 14.2978 8.71178C14.4849 8.8963 14.7372 8.99974 15 8.99971H16C16.7956 8.99971 17.5587 9.31578 18.1213 9.87839C18.6839 10.441 19 11.2041 19 11.9997V18.9997ZM16 14.9997C16 15.2649 15.8946 15.5193 15.7071 15.7068C15.5196 15.8944 15.2652 15.9997 15 15.9997H13V17.9997C13 18.2649 12.8946 18.5193 12.7071 18.7068C12.5196 18.8944 12.2652 18.9997 12 18.9997C11.7348 18.9997 11.4804 18.8944 11.2929 18.7068C11.1054 18.5193 11 18.2649 11 17.9997V15.9997H9C8.73478 15.9997 8.48043 15.8944 8.29289 15.7068C8.10536 15.5193 8 15.2649 8 14.9997C8 14.7345 8.10536 14.4801 8.29289 14.2926C8.48043 14.1051 8.73478 13.9997 9 13.9997H11V11.9997C11 11.7345 11.1054 11.4801 11.2929 11.2926C11.4804 11.1051 11.7348 10.9997 12 10.9997C12.2652 10.9997 12.5196 11.1051 12.7071 11.2926C12.8946 11.4801 13 11.7345 13 11.9997V13.9997H15C15.2652 13.9997 15.5196 14.1051 15.7071 14.2926C15.8946 14.4801 16 14.7345 16 14.9997Z" />
      </g>
      <defs>
        <clipPath id="clip0_403_3245">
          <rect
            width={24}
            height={24}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default MedicineIcon;
