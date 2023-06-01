/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const CloudCheckIcon: FC<IconProps> = ({ size, color, onClick, className }) => {
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
      <g clipPath="url(#clip0_403_3092)">
        <path d="M11.692 22.9999C11.2979 23.0009 10.9075 22.9237 10.5434 22.7728C10.1794 22.6219 9.84883 22.4003 9.57098 22.1209L6.18398 18.6999C6.07728 18.6104 5.99043 18.4998 5.92898 18.3748C5.86753 18.2499 5.83283 18.1136 5.82711 17.9745C5.82139 17.8354 5.84477 17.6967 5.89575 17.5671C5.94673 17.4376 6.0242 17.3201 6.12319 17.2223C6.22218 17.1244 6.34051 17.0483 6.47061 16.9988C6.60071 16.9493 6.73971 16.9275 6.87872 16.9348C7.01773 16.9421 7.15369 16.9783 7.27789 17.0412C7.40208 17.1041 7.51179 17.1922 7.59998 17.2999L10.984 20.7139C11.1744 20.8946 11.4269 20.9953 11.6895 20.9953C11.952 20.9953 12.2045 20.8946 12.395 20.7139L17.809 15.2999C17.9965 15.1122 18.2509 15.0067 18.5161 15.0067C18.7814 15.0066 19.0358 15.1118 19.2235 15.2994C19.4111 15.4869 19.5166 15.7412 19.5167 16.0065C19.5168 16.2718 19.4115 16.5262 19.224 16.7139L13.809 22.1279C13.5312 22.4058 13.201 22.6259 12.8377 22.7756C12.4743 22.9253 12.0849 23.0015 11.692 22.9999V22.9999ZM6.99998 21.9999C6.99998 21.7346 6.89462 21.4803 6.70708 21.2927C6.51955 21.1052 6.26519 20.9999 5.99998 20.9999H5.68298C4.82894 20.9835 4.00518 20.6806 3.34397 20.1398C2.68276 19.599 2.22246 18.8517 2.03698 18.0179C1.92832 17.3013 2.04689 16.5687 2.37602 15.923C2.70515 15.2773 3.2283 14.7509 3.87198 14.4179C4.33047 14.164 4.67061 13.7399 4.81882 13.2373C4.96704 12.7346 4.91141 12.1938 4.66398 11.7319C4.27569 10.9913 4.04647 10.1778 3.99103 9.34344C3.9356 8.50911 4.05516 7.6724 4.34206 6.88699C4.62896 6.10158 5.07686 5.3848 5.65702 4.78265C6.23719 4.18049 6.93681 3.70625 7.71101 3.39034C8.4852 3.07443 9.31689 2.92383 10.1527 2.9482C10.9885 2.97257 11.81 3.17137 12.5645 3.53185C13.319 3.89233 13.9898 4.40654 14.5339 5.04147C15.078 5.67641 15.4833 6.41806 15.724 7.21886C15.8717 7.70164 16.1352 8.14102 16.4914 8.49881C16.8476 8.8566 17.2859 9.12198 17.768 9.27186C19.0746 9.6692 20.2056 10.5025 20.9723 11.6327C21.7389 12.763 22.095 14.1219 21.981 15.4829C21.8658 16.6649 21.3933 17.7838 20.6264 18.6906C19.8595 19.5974 18.8345 20.2491 17.688 20.5589C17.4391 20.6441 17.2338 20.8239 17.1166 21.0594C16.9994 21.2949 16.9797 21.5671 17.0618 21.817C17.1439 22.0669 17.3211 22.2744 17.5551 22.3946C17.7891 22.5147 18.0611 22.5378 18.312 22.4589C19.9507 21.9912 21.393 21.0035 22.4214 19.6447C23.4498 18.2859 24.0086 16.6295 24.0136 14.9254C24.0186 13.2213 23.4694 11.5617 22.4489 10.1969C21.4285 8.83211 19.9919 7.83604 18.356 7.35886C18.1844 7.30538 18.0286 7.21029 17.9027 7.08205C17.7767 6.95381 17.6844 6.7964 17.634 6.62386C17.1048 4.92348 16.0235 3.44826 14.5612 2.43189C13.0989 1.41553 11.3393 0.916117 9.56109 1.01277C7.7829 1.10943 6.0878 1.79663 4.74429 2.96552C3.40079 4.1344 2.4857 5.71814 2.14398 7.46586C1.79253 9.23286 2.07583 11.0672 2.94398 12.6459C1.93174 13.1678 1.10872 13.9941 0.590812 15.0084C0.0729007 16.0227 -0.113808 17.1739 0.0569775 18.2999C0.317629 19.6077 1.01779 20.787 2.04119 21.6419C3.0646 22.4969 4.34966 22.9761 5.68298 22.9999H5.99998C6.26519 22.9999 6.51955 22.8945 6.70708 22.707C6.89462 22.5194 6.99998 22.2651 6.99998 21.9999V21.9999Z" />
      </g>
      <defs>
        <clipPath id="clip0_403_3092">
          <rect
            width={24}
            height={24}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default CloudCheckIcon;
