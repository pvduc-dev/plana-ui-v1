/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const VectorAltIcon: FC<IconProps> = ({ size, color, onClick, className }) => {
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
      <g clipPath="url(#clip0_403_2829)">
        <path d="M21 16.0004V12.0004C20.9997 10.6569 20.698 9.33062 20.1172 8.11917C19.5364 6.90772 18.6912 5.84197 17.644 5.00041H20.277C20.4986 5.37802 20.8385 5.67205 21.2441 5.83699C21.6497 6.00193 22.0983 6.02857 22.5206 5.91279C22.9429 5.79702 23.3152 5.54528 23.5799 5.19655C23.8447 4.84781 23.9871 4.42154 23.9851 3.9837C23.9831 3.54586 23.8369 3.12089 23.569 2.77455C23.3011 2.42822 22.9266 2.17984 22.5033 2.06787C22.08 1.9559 21.6316 1.98657 21.2275 2.15515C20.8235 2.32373 20.4862 2.62081 20.268 3.00041H15.858C15.6397 2.14282 15.1419 1.38241 14.4433 0.839299C13.7446 0.296188 12.8849 0.00134277 12 0.00134277C11.1151 0.00134277 10.2554 0.296188 9.55672 0.839299C8.85806 1.38241 8.36027 2.14282 8.142 3.00041H3.723C3.50139 2.62279 3.16148 2.32876 2.75589 2.16382C2.3503 1.99889 1.90166 1.97225 1.4794 2.08802C1.05714 2.2038 0.684827 2.45554 0.42008 2.80427C0.155333 3.153 0.0129225 3.57928 0.0148928 4.01711C0.0168631 4.45495 0.163104 4.87993 0.430979 5.22626C0.698853 5.5726 1.07342 5.82098 1.4967 5.93295C1.91999 6.04492 2.36837 6.01424 2.77246 5.84566C3.17655 5.67708 3.51379 5.38 3.732 5.00041H6.356C5.30876 5.84197 4.46362 6.90772 3.88281 8.11917C3.30201 9.33062 3.00033 10.6569 3 12.0004V16.0004C2.20435 16.0004 1.44129 16.3165 0.87868 16.8791C0.31607 17.4417 0 18.2048 0 19.0004L0 21.0004C0 21.7961 0.31607 22.5591 0.87868 23.1217C1.44129 23.6843 2.20435 24.0004 3 24.0004H5C5.79565 24.0004 6.55871 23.6843 7.12132 23.1217C7.68393 22.5591 8 21.7961 8 21.0004V19.0004C8 18.2048 7.68393 17.4417 7.12132 16.8791C6.55871 16.3165 5.79565 16.0004 5 16.0004V12.0004C5.00163 10.7691 5.32801 9.56003 5.94621 8.49517C6.5644 7.43032 7.45254 6.54736 8.521 5.93541C8.86194 6.56038 9.36493 7.08197 9.97712 7.44537C10.5893 7.80876 11.2881 8.00053 12 8.00053C12.7119 8.00053 13.4107 7.80876 14.0229 7.44537C14.6351 7.08197 15.1381 6.56038 15.479 5.93541C16.5475 6.54736 17.4356 7.43032 18.0538 8.49517C18.672 9.56003 18.9984 10.7691 19 12.0004V16.0004C18.2044 16.0004 17.4413 16.3165 16.8787 16.8791C16.3161 17.4417 16 18.2048 16 19.0004V21.0004C16 21.7961 16.3161 22.5591 16.8787 23.1217C17.4413 23.6843 18.2044 24.0004 19 24.0004H21C21.7956 24.0004 22.5587 23.6843 23.1213 23.1217C23.6839 22.5591 24 21.7961 24 21.0004V19.0004C24 18.2048 23.6839 17.4417 23.1213 16.8791C22.5587 16.3165 21.7956 16.0004 21 16.0004V16.0004ZM6 19.0004V21.0004C6 21.2656 5.89464 21.52 5.70711 21.7075C5.51957 21.8951 5.26522 22.0004 5 22.0004H3C2.73478 22.0004 2.48043 21.8951 2.29289 21.7075C2.10536 21.52 2 21.2656 2 21.0004V19.0004C2 18.7352 2.10536 18.4808 2.29289 18.2933C2.48043 18.1058 2.73478 18.0004 3 18.0004H5C5.26522 18.0004 5.51957 18.1058 5.70711 18.2933C5.89464 18.4808 6 18.7352 6 19.0004ZM12 6.00041C11.6044 6.00041 11.2178 5.88311 10.8889 5.66335C10.56 5.44358 10.3036 5.13123 10.1522 4.76577C10.0009 4.40032 9.96126 3.99819 10.0384 3.61023C10.1156 3.22226 10.3061 2.8659 10.5858 2.58619C10.8655 2.30649 11.2219 2.11601 11.6098 2.03884C11.9978 1.96167 12.3999 2.00127 12.7654 2.15265C13.1308 2.30402 13.4432 2.56037 13.6629 2.88927C13.8827 3.21817 14 3.60484 14 4.00041C14 4.53084 13.7893 5.03955 13.4142 5.41462C13.0391 5.78969 12.5304 6.00041 12 6.00041ZM22 21.0004C22 21.2656 21.8946 21.52 21.7071 21.7075C21.5196 21.8951 21.2652 22.0004 21 22.0004H19C18.7348 22.0004 18.4804 21.8951 18.2929 21.7075C18.1054 21.52 18 21.2656 18 21.0004V19.0004C18 18.7352 18.1054 18.4808 18.2929 18.2933C18.4804 18.1058 18.7348 18.0004 19 18.0004H21C21.2652 18.0004 21.5196 18.1058 21.7071 18.2933C21.8946 18.4808 22 18.7352 22 19.0004V21.0004Z" />
      </g>
      <defs>
        <clipPath id="clip0_403_2829">
          <rect
            width={24}
            height={24}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default VectorAltIcon;
