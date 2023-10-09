/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const StopwatchIcon: FC<IconProps> = ({ size, color, onClick, className }) => {
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
      <g clipPath="url(#clip0_403_2832)">
        <path d="M14 13C14.0016 13.3515 13.9105 13.6971 13.736 14.0022C13.5615 14.3072 13.3097 14.5609 13.0059 14.7377C12.7021 14.9144 12.3571 15.008 12.0057 15.009C11.6542 15.01 11.3087 14.9184 11.004 14.7434C10.6992 14.5683 10.4459 14.3161 10.2697 14.012C10.0934 13.7079 10.0004 13.3628 10 13.0113C9.99963 12.6599 10.0918 12.3145 10.2674 12.01C10.443 11.7056 10.6956 11.4527 11 11.277V7C11 6.73478 11.1054 6.48043 11.2929 6.29289C11.4804 6.10536 11.7348 6 12 6C12.2652 6 12.5196 6.10536 12.7071 6.29289C12.8946 6.48043 13 6.73478 13 7V11.277C13.3031 11.4513 13.5551 11.7023 13.7306 12.0047C13.9061 12.3071 13.999 12.6503 14 13V13ZM20.06 5.539C21.517 7.10778 22.4845 9.06766 22.8439 11.1783C23.2033 13.2889 22.9389 15.4586 22.0832 17.4212C21.2275 19.3837 19.8177 21.0539 18.0266 22.2269C16.2355 23.3999 14.141 24.0247 12 24.0247C9.85899 24.0247 7.76451 23.3999 5.97342 22.2269C4.18233 21.0539 2.77248 19.3837 1.91677 17.4212C1.06107 15.4586 0.796696 13.2889 1.15608 11.1783C1.51547 9.06766 2.483 7.10778 3.94001 5.539L3.26801 4.792C2.86085 4.93532 2.43161 5.00573 2.00001 5C1.73479 5 1.48044 4.89464 1.2929 4.70711C1.10536 4.51957 1.00001 4.26522 1.00001 4C1.00001 3.73478 1.10536 3.48043 1.2929 3.29289C1.48044 3.10536 1.73479 3 2.00001 3C2.78501 3 3.00001 2.785 3.00001 2C3.00001 1.73478 3.10536 1.48043 3.2929 1.29289C3.48044 1.10536 3.73479 1 4.00001 1C4.26522 1 4.51958 1.10536 4.70711 1.29289C4.89465 1.48043 5.00001 1.73478 5.00001 2C5.00583 2.48663 4.91048 2.96916 4.72001 3.417L5.42601 4.201C7.04811 2.98027 8.97831 2.23576 11 2.051V1C11 0.734784 11.1054 0.48043 11.2929 0.292893C11.4804 0.105357 11.7348 0 12 0C12.2652 0 12.5196 0.105357 12.7071 0.292893C12.8946 0.48043 13 0.734784 13 1V2.051C15.0216 2.23546 16.9518 2.97963 18.574 4.2L19.28 3.416C19.0897 2.96847 18.9943 2.48629 19 2C19 1.73478 19.1054 1.48043 19.2929 1.29289C19.4804 1.10536 19.7348 1 20 1C20.2652 1 20.5196 1.10536 20.7071 1.29289C20.8946 1.48043 21 1.73478 21 2C21 2.785 21.215 3 22 3C22.2652 3 22.5196 3.10536 22.7071 3.29289C22.8946 3.48043 23 3.73478 23 4C23 4.26522 22.8946 4.51957 22.7071 4.70711C22.5196 4.89464 22.2652 5 22 5C21.5684 5.00573 21.1392 4.93532 20.732 4.792L20.06 5.539ZM21 13C21 11.22 20.4722 9.47991 19.4832 7.99987C18.4943 6.51983 17.0887 5.36627 15.4442 4.68508C13.7996 4.0039 11.99 3.82567 10.2442 4.17293C8.49836 4.5202 6.89472 5.37737 5.63604 6.63604C4.37737 7.89471 3.52021 9.49836 3.17294 11.2442C2.82567 12.99 3.0039 14.7996 3.68509 16.4442C4.36628 18.0887 5.51983 19.4943 6.99987 20.4832C8.47992 21.4722 10.22 22 12 22C14.3861 21.9974 16.6738 21.0483 18.361 19.361C20.0483 17.6738 20.9974 15.3861 21 13V13Z" />
      </g>
      <defs>
        <clipPath id="clip0_403_2832">
          <rect
            width={24}
            height={24}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default StopwatchIcon;