/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const StarIcon: FC<IconProps> = ({ size, color, onClick, className }) => {
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
      <g clipPath="url(#clip0_403_2837)">
        <path d="M23.8358 8.79432C23.6312 8.14322 23.2226 7.57523 22.6702 7.17435C22.1179 6.77347 21.4512 6.56099 20.7688 6.56832H16.3998L15.0728 2.43232C14.8641 1.78128 14.4541 1.21333 13.9018 0.810386C13.3495 0.407437 12.6835 0.190308 11.9998 0.190308C11.3161 0.190308 10.6501 0.407437 10.0978 0.810386C9.54553 1.21333 9.13547 1.78128 8.9268 2.43232L7.5998 6.56832H3.2308C2.55054 6.56929 1.88799 6.78521 1.33778 7.18523C0.787564 7.58525 0.377837 8.14891 0.167118 8.79571C-0.0436018 9.44251 -0.0445344 10.1394 0.164453 10.7867C0.37344 11.4341 0.781657 11.9988 1.3308 12.4003L4.8868 15.0003L3.5348 19.1873C3.31631 19.8367 3.31354 20.5393 3.52691 21.1904C3.74027 21.8415 4.15834 22.4062 4.7188 22.8003C5.26965 23.2071 5.93719 23.425 6.62195 23.4216C7.30671 23.4182 7.97204 23.1936 8.5188 22.7813L11.9998 20.2193L15.4818 22.7783C16.0317 23.1828 16.6956 23.4025 17.3782 23.4058C18.0607 23.4091 18.7268 23.1959 19.2806 22.7968C19.8343 22.3978 20.2473 21.8334 20.4601 21.1848C20.6729 20.5362 20.6745 19.8369 20.4648 19.1873L19.1128 15.0003L22.6728 12.4003C23.2282 12.0039 23.6412 11.4391 23.8507 10.7897C24.0601 10.1402 24.0549 9.44058 23.8358 8.79432ZM21.4928 10.7853L17.3488 13.8143C17.1786 13.9385 17.0519 14.1132 16.9869 14.3137C16.9219 14.5141 16.9219 14.7299 16.9868 14.9303L18.5618 19.8003C18.6415 20.0473 18.6408 20.3132 18.5599 20.5598C18.4789 20.8064 18.3218 21.021 18.1112 21.1727C17.9006 21.3244 17.6474 21.4054 17.3878 21.4041C17.1283 21.4028 16.8758 21.3192 16.6668 21.1653L12.5918 18.1653C12.4202 18.0392 12.2128 17.9713 11.9998 17.9713C11.7868 17.9713 11.5794 18.0392 11.4078 18.1653L7.3328 21.1653C7.12388 21.3212 6.87073 21.4066 6.61006 21.4089C6.34939 21.4113 6.09474 21.3306 5.88303 21.1785C5.67131 21.0264 5.51354 20.8108 5.43259 20.563C5.35164 20.3152 5.35171 20.0481 5.4328 19.8003L7.0128 14.9303C7.07771 14.7299 7.07766 14.5141 7.01266 14.3137C6.94765 14.1132 6.82101 13.9385 6.6508 13.8143L2.5068 10.7853C2.2981 10.6325 2.14303 10.4177 2.06374 10.1715C1.98444 9.92526 1.98498 9.6603 2.06528 9.41442C2.14558 9.16854 2.30152 8.95433 2.51084 8.80237C2.72016 8.65042 2.97214 8.5685 3.2308 8.56832H8.3308C8.54251 8.56831 8.74876 8.50111 8.91984 8.3764C9.09093 8.25168 9.21801 8.07588 9.2828 7.87432L10.8328 3.04332C10.9124 2.79611 11.0683 2.58051 11.2782 2.42757C11.4881 2.27463 11.7411 2.19223 12.0008 2.19223C12.2605 2.19223 12.5135 2.27463 12.7234 2.42757C12.9333 2.58051 13.0892 2.79611 13.1688 3.04332L14.7188 7.87432C14.7836 8.07588 14.9107 8.25168 15.0817 8.3764C15.2528 8.50111 15.4591 8.56831 15.6708 8.56832H20.7708C21.0295 8.5685 21.2814 8.65042 21.4908 8.80237C21.7001 8.95433 21.856 9.16854 21.9363 9.41442C22.0166 9.6603 22.0171 9.92526 21.9379 10.1715C21.8586 10.4177 21.7035 10.6325 21.4948 10.7853H21.4928Z" />
      </g>
      <defs>
        <clipPath id="clip0_403_2837">
          <rect
            width={24}
            height={24}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default StarIcon;