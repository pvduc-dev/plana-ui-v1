/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const HastagIcon: FC<IconProps> = ({ size, color, onClick, className }) => {
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
      <g clipPath="url(#clip0_403_2981)">
        <path d="M23 6.99966H18.191L18.991 1.13466C19.0087 1.00452 19.0006 0.872167 18.9672 0.745149C18.9338 0.618131 18.8757 0.49894 18.7962 0.394381C18.7167 0.289823 18.6174 0.201944 18.504 0.135762C18.3905 0.069581 18.2651 0.0263932 18.135 0.00866474C18.0049 -0.00906371 17.8725 -0.000985596 17.7455 0.0324379C17.6185 0.0658613 17.4993 0.123976 17.3947 0.203463C17.2902 0.282949 17.2023 0.382252 17.1361 0.495702C17.0699 0.609151 17.0267 0.734525 17.009 0.864665L16.173 6.99966H9.191L9.991 1.13466C10.0087 1.00452 10.0007 0.872167 9.96723 0.745149C9.9338 0.618131 9.87569 0.49894 9.7962 0.394381C9.71672 0.289823 9.61741 0.201944 9.50396 0.135762C9.39051 0.069581 9.26514 0.0263932 9.135 0.00866477C9.00486 -0.00906369 8.8725 -0.00098557 8.74548 0.0324379C8.61847 0.0658613 8.49928 0.123976 8.39472 0.203463C8.29016 0.282949 8.20228 0.382252 8.1361 0.495702C8.06992 0.609151 8.02673 0.734525 8.009 0.864665L7.173 6.99966H2C1.73478 6.99966 1.48043 7.10502 1.29289 7.29256C1.10536 7.48009 1 7.73445 1 7.99967C1 8.26488 1.10536 8.51924 1.29289 8.70677C1.48043 8.89431 1.73478 8.99967 2 8.99967H6.9L6.082 14.9997H1C0.734784 14.9997 0.48043 15.105 0.292893 15.2926C0.105357 15.4801 0 15.7344 0 15.9997C0 16.2649 0.105357 16.5192 0.292893 16.7068C0.48043 16.8943 0.734784 16.9997 1 16.9997H5.809L5.009 22.8647C4.9732 23.1275 5.04327 23.3938 5.2038 23.6049C5.36433 23.8161 5.60217 23.9549 5.865 23.9907C6.12783 24.0265 6.39412 23.9564 6.60528 23.7959C6.81645 23.6353 6.9552 23.3975 6.991 23.1347L7.827 16.9997H14.809L14.009 22.8647C13.9732 23.1275 14.0433 23.3938 14.2038 23.6049C14.3643 23.8161 14.6022 23.9549 14.865 23.9907C15.1278 24.0265 15.3941 23.9564 15.6053 23.7959C15.8164 23.6353 15.9552 23.3975 15.991 23.1347L16.827 16.9997H22C22.2652 16.9997 22.5196 16.8943 22.7071 16.7068C22.8946 16.5192 23 16.2649 23 15.9997C23 15.7344 22.8946 15.4801 22.7071 15.2926C22.5196 15.105 22.2652 14.9997 22 14.9997H17.1L17.918 8.99967H23C23.2652 8.99967 23.5196 8.89431 23.7071 8.70677C23.8946 8.51924 24 8.26488 24 7.99967C24 7.73445 23.8946 7.48009 23.7071 7.29256C23.5196 7.10502 23.2652 6.99966 23 6.99966ZM15.082 14.9997H8.1L8.918 8.99967H15.9L15.082 14.9997Z" />
      </g>
      <defs>
        <clipPath id="clip0_403_2981">
          <rect
            width={24}
            height={24}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default HastagIcon;