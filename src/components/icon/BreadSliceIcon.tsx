/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const BreadSliceIcon: FC<IconProps> = ({ size, color, onClick, className }) => {
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
      <path d="M17 22.9999H7.00001C5.67441 22.9983 4.40356 22.471 3.46623 21.5337C2.52889 20.5963 2.00159 19.3255 2.00001 17.9999V10.4459C1.99198 10.2943 1.95318 10.1458 1.88596 10.0097C1.81874 9.87352 1.72451 9.75247 1.60901 9.65389C1.00139 9.09407 0.542306 8.39211 0.27299 7.61104C0.00367296 6.82997 -0.0674502 5.99424 0.0660064 5.17889C0.482006 2.59989 2.85001 0.999893 6.24201 0.999893H18.848C20.0517 0.987788 21.2212 1.4 22.1512 2.16419C23.0813 2.92838 23.7124 3.99572 23.934 5.17889V5.17889C24.0675 5.99496 23.9961 6.83141 23.7263 7.61305C23.4564 8.3947 22.9966 9.09702 22.388 9.65689C22.2732 9.75524 22.1797 9.8759 22.113 10.0115C22.0463 10.1472 22.0078 10.2949 22 10.4459V17.9999C21.9984 19.3255 21.4711 20.5963 20.5338 21.5337C19.5964 22.471 18.3256 22.9983 17 22.9999V22.9999ZM6.24201 2.99989C3.82801 2.99989 2.29701 3.91089 2.04201 5.49989C1.9578 5.98903 1.99832 6.49151 2.15983 6.96084C2.32134 7.43016 2.59862 7.85116 2.96601 8.18489C3.2864 8.4689 3.54389 8.81675 3.72196 9.20612C3.90002 9.59548 3.99473 10.0178 4.00001 10.4459V17.9999C4.00001 18.7955 4.31608 19.5586 4.87869 20.1212C5.4413 20.6838 6.20436 20.9999 7.00001 20.9999H17C17.7957 20.9999 18.5587 20.6838 19.1213 20.1212C19.6839 19.5586 20 18.7955 20 17.9999V10.4459C20.0046 10.0177 20.099 9.59515 20.2771 9.20569C20.4552 8.81622 20.7131 8.46846 21.034 8.18489C21.4015 7.85121 21.6789 7.43025 21.8406 6.96093C22.0023 6.49162 22.043 5.98912 21.959 5.49989V5.49989C21.8168 4.7841 21.427 4.14124 20.8582 3.6841C20.2893 3.22696 19.5776 2.98472 18.848 2.99989H6.24201ZM8.00001 11.9999C7.73479 11.9999 7.48044 12.1053 7.2929 12.2928C7.10536 12.4803 7.00001 12.7347 7.00001 12.9999C7.00001 13.2651 7.10536 13.5195 7.2929 13.707C7.48044 13.8945 7.73479 13.9999 8.00001 13.9999C8.26522 13.9999 8.51958 13.8945 8.70711 13.707C8.89465 13.5195 9.00001 13.2651 9.00001 12.9999C9.00001 12.7347 8.89465 12.4803 8.70711 12.2928C8.51958 12.1053 8.26522 11.9999 8.00001 11.9999V11.9999ZM12 15.9999C11.7348 15.9999 11.4804 16.1052 11.2929 16.2928C11.1054 16.4803 11 16.7347 11 16.9999C11 17.2651 11.1054 17.5195 11.2929 17.707C11.4804 17.8945 11.7348 17.9999 12 17.9999C12.2652 17.9999 12.5196 17.8945 12.7071 17.707C12.8946 17.5195 13 17.2651 13 16.9999C13 16.7347 12.8946 16.4803 12.7071 16.2928C12.5196 16.1052 12.2652 15.9999 12 15.9999ZM8.00001 15.9999C7.73479 15.9999 7.48044 16.1052 7.2929 16.2928C7.10536 16.4803 7.00001 16.7347 7.00001 16.9999C7.00001 17.2651 7.10536 17.5195 7.2929 17.707C7.48044 17.8945 7.73479 17.9999 8.00001 17.9999C8.26522 17.9999 8.51958 17.8945 8.70711 17.707C8.89465 17.5195 9.00001 17.2651 9.00001 16.9999C9.00001 16.7347 8.89465 16.4803 8.70711 16.2928C8.51958 16.1052 8.26522 15.9999 8.00001 15.9999V15.9999Z" />
    </svg>
  );
};
export default BreadSliceIcon;