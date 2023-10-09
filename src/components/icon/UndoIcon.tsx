/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const UndoIcon: FC<IconProps> = ({ size, color, onClick, className }) => {
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
      <g clipPath="url(#clip0_403_2907)">
        <path d="M23 23.9993C22.7348 23.9993 22.4804 23.8939 22.2929 23.7064C22.1054 23.5189 22 23.2645 22 22.9993C21.9984 21.4085 21.3658 19.8833 20.2409 18.7584C19.116 17.6336 17.5908 17.0009 16 16.9993H10.17V18.5853C10.1699 18.9808 10.0526 19.3674 9.83282 19.6962C9.61305 20.025 9.30073 20.2813 8.93533 20.4327C8.56993 20.584 8.16786 20.6236 7.77995 20.5465C7.39205 20.4693 7.03572 20.2789 6.75602 19.9993L0.877017 14.1203C0.314603 13.5577 -0.00134277 12.7948 -0.00134277 11.9993C-0.00134277 11.2038 0.314603 10.4409 0.877017 9.87832L6.75602 3.99933C7.03572 3.71971 7.39205 3.5293 7.77995 3.45216C8.16786 3.37503 8.56993 3.41464 8.93533 3.56597C9.30073 3.71731 9.61305 3.97359 9.83282 4.30241C10.0526 4.63123 10.1699 5.01783 10.17 5.41333V6.99933H15C17.3862 7.00197 19.6738 7.95103 21.3611 9.63829C23.0483 11.3255 23.9974 13.6132 24 15.9993V22.9993C24 23.2645 23.8947 23.5189 23.7071 23.7064C23.5196 23.8939 23.2652 23.9993 23 23.9993ZM8.17002 5.41333L2.29102 11.2923C2.10355 11.4798 1.99823 11.7342 1.99823 11.9993C1.99823 12.2645 2.10355 12.5188 2.29102 12.7063L8.17002 18.5853V15.9993C8.17002 15.7341 8.27537 15.4797 8.46291 15.2922C8.65045 15.1047 8.9048 14.9993 9.17002 14.9993H16C17.1356 14.999 18.2582 15.2409 19.2929 15.7089C20.3275 16.1769 21.2505 16.8603 22 17.7133V15.9993C21.9979 14.1435 21.2597 12.3642 19.9474 11.0519C18.6351 9.73962 16.8559 9.00144 15 8.99932H9.17002C8.9048 8.99932 8.65045 8.89397 8.46291 8.70643C8.27537 8.51889 8.17002 8.26454 8.17002 7.99932V5.41333Z" />
      </g>
      <defs>
        <clipPath id="clip0_403_2907">
          <rect
            width={24}
            height={24}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default UndoIcon;