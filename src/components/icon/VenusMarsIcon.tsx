/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const VenusMarsIcon: FC<IconProps> = ({ size, color, onClick, className }) => {
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
      <g clipPath="url(#clip0_403_3050)">
        <path d="M21.9998 0H17.9998C17.7346 0 17.4802 0.105357 17.2927 0.292893C17.1051 0.48043 16.9998 0.734784 16.9998 1C16.9998 1.26522 17.1051 1.51957 17.2927 1.70711C17.4802 1.89464 17.7346 2 17.9998 2H20.5858L18.1858 4.4C17.0913 3.57348 15.7765 3.08974 14.4073 3.00983C13.0382 2.92992 11.676 3.25742 10.4928 3.951C9.60102 3.4357 8.60637 3.12387 7.58002 3.03781C6.55367 2.95176 5.52099 3.09361 4.55586 3.45322C3.59073 3.81283 2.71701 4.3813 1.99721 5.11798C1.2774 5.85465 0.729318 6.7413 0.392161 7.7145C0.0550032 8.68771 -0.0628912 9.7234 0.0469123 10.7475C0.156716 11.7716 0.491503 12.7587 1.02732 13.6383C1.56314 14.5179 2.28674 15.2682 3.14636 15.8355C4.00598 16.4029 4.98036 16.7732 5.99979 16.92V19H3.99979C3.73457 19 3.48022 19.1054 3.29268 19.2929C3.10515 19.4804 2.99979 19.7348 2.99979 20C2.99979 20.2652 3.10515 20.5196 3.29268 20.7071C3.48022 20.8946 3.73457 21 3.99979 21H5.99979V23C5.99979 23.2652 6.10515 23.5196 6.29268 23.7071C6.48022 23.8946 6.73457 24 6.99979 24C7.26501 24 7.51936 23.8946 7.7069 23.7071C7.89443 23.5196 7.99979 23.2652 7.99979 23V21H9.99979C10.265 21 10.5194 20.8946 10.7069 20.7071C10.8944 20.5196 10.9998 20.2652 10.9998 20C10.9998 19.7348 10.8944 19.4804 10.7069 19.2929C10.5194 19.1054 10.265 19 9.99979 19H7.99979V16.927C8.87885 16.796 9.72453 16.4973 10.4908 16.047C11.884 16.8619 13.5164 17.1692 15.1105 16.9168C16.7047 16.6643 18.1623 15.8677 19.2355 14.6622C20.3088 13.4567 20.9315 11.9168 20.9979 10.3042C21.0644 8.69152 20.5703 7.10563 19.5998 5.816L21.9998 3.416V6C21.9998 6.26522 22.1051 6.51957 22.2927 6.70711C22.4802 6.89464 22.7346 7 22.9998 7C23.265 7 23.5194 6.89464 23.7069 6.70711C23.8944 6.51957 23.9998 6.26522 23.9998 6V2C23.9998 1.46957 23.7891 0.960859 23.414 0.585786C23.0389 0.210714 22.5302 0 21.9998 0V0ZM1.99979 10C1.99505 9.18785 2.18937 8.38691 2.56576 7.66722C2.94216 6.94754 3.48915 6.33104 4.1589 5.87165C4.82865 5.41226 5.60076 5.12396 6.4077 5.03198C7.21464 4.93999 8.03183 5.04712 8.78779 5.344C7.63673 6.62162 6.99973 8.28033 6.99973 10C6.99973 11.7197 7.63673 13.3784 8.78779 14.656C8.03183 14.9529 7.21464 15.06 6.4077 14.968C5.60076 14.876 4.82865 14.5877 4.1589 14.1284C3.48915 13.669 2.94216 13.0525 2.56576 12.3328C2.18937 11.6131 1.99505 10.8122 1.99979 10V10ZM13.9998 15C13.0109 15 12.0442 14.7068 11.2219 14.1573C10.3997 13.6079 9.75883 12.827 9.38039 11.9134C9.00195 10.9998 8.90294 9.99445 9.09586 9.02455C9.28879 8.05464 9.76499 7.16373 10.4643 6.46447C11.1635 5.7652 12.0544 5.289 13.0243 5.09607C13.9942 4.90315 14.9996 5.00216 15.9132 5.3806C16.8268 5.75904 17.6077 6.3999 18.1571 7.22215C18.7065 8.04439 18.9998 9.01109 18.9998 10C18.9982 11.3256 18.4709 12.5964 17.5336 13.5338C16.5962 14.4711 15.3254 14.9984 13.9998 15Z" />
      </g>
      <defs>
        <clipPath id="clip0_403_3050">
          <rect
            width={24}
            height={24}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default VenusMarsIcon;
