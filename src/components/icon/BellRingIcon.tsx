/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const BellRingIcon: FC<IconProps> = ({ size, color, onClick, className }) => {
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
      <g clipPath="url(#clip0_403_3160)">
        <path d="M20.8589 15.3311L17.0869 21.4861C16.6727 22.1661 16.1088 22.7426 15.4382 23.1719C14.7675 23.6011 14.0078 23.8717 13.2169 23.9631C13.0085 23.9878 12.7988 24.0002 12.5889 24.0001C11.5143 23.9986 10.4665 23.6651 9.58888 23.0451C8.68193 23.7245 7.56161 24.0567 6.43088 23.9813C5.30016 23.9059 4.23384 23.428 3.42512 22.6341C2.61641 21.8403 2.11879 20.783 2.02243 19.6539C1.92608 18.5248 2.23736 17.3985 2.89988 16.4791L1.58488 15.1661C1.02337 14.6045 0.596192 13.9232 0.335328 13.1732C0.0744636 12.4232 -0.0133237 11.6238 0.0785403 10.835C0.170404 10.0463 0.439539 9.28848 0.865788 8.61847C1.29204 7.94845 1.86435 7.38355 2.53988 6.96608L8.30688 3.40008C9.86909 2.39886 11.7062 1.91343 13.5591 2.0123C15.412 2.11116 17.1871 2.78931 18.6339 3.95108L20.2929 2.29208C20.3851 2.19657 20.4955 2.12039 20.6175 2.06798C20.7395 2.01557 20.8707 1.98799 21.0035 1.98683C21.1363 1.98568 21.2679 2.01098 21.3908 2.06126C21.5137 2.11154 21.6254 2.18579 21.7193 2.27969C21.8132 2.37358 21.8874 2.48523 21.9377 2.60813C21.988 2.73102 22.0133 2.8627 22.0121 2.99548C22.011 3.12826 21.9834 3.25948 21.931 3.38149C21.8786 3.50349 21.8024 3.61384 21.7069 3.70608L20.0499 5.36408C21.1612 6.75632 21.8319 8.44851 21.976 10.2241C22.1201 11.9996 21.7311 13.7778 20.8589 15.3311V15.3311ZM8.06488 21.6471L4.34588 17.9271C4.05525 18.4468 3.94316 19.0476 4.0268 19.6372C4.11043 20.2268 4.38517 20.7726 4.80888 21.1911C5.2363 21.5971 5.77995 21.8593 6.36377 21.9411C6.94759 22.0228 7.54236 21.9201 8.06488 21.6471V21.6471ZM17.9859 6.04708C16.8754 4.92592 15.4136 4.22011 13.8451 4.04772C12.2765 3.87534 10.6963 4.24684 9.36888 5.10008L3.59188 8.66608C3.17292 8.92505 2.81798 9.27544 2.55363 9.69103C2.28929 10.1066 2.1224 10.5766 2.06545 11.0659C2.00851 11.5551 2.06298 12.0509 2.2248 12.5161C2.38663 12.9813 2.6516 13.4038 2.99988 13.7521L10.2899 21.0431C10.6387 21.3923 11.0622 21.6579 11.5285 21.8199C11.9947 21.9819 12.4917 22.036 12.9819 21.9783C13.4721 21.9205 13.9429 21.7524 14.3587 21.4865C14.7746 21.2206 15.1247 20.8638 15.3829 20.4431L19.1379 14.3181C19.8713 13.0008 20.1556 11.4805 19.9477 9.98718C19.7399 8.49389 19.0512 7.10898 17.9859 6.04208V6.04708ZM19.2649 24.0001C19.0537 24.0005 18.8478 23.934 18.6767 23.8102C18.5056 23.6863 18.3782 23.5115 18.3125 23.3108C18.2469 23.1101 18.2466 22.8937 18.3115 22.6927C18.3764 22.4918 18.5032 22.3165 18.6739 22.1921C20.4249 20.8756 21.6099 18.9427 21.9889 16.7851C22.0154 16.6552 22.0676 16.5319 22.1422 16.4223C22.2169 16.3128 22.3126 16.2192 22.4238 16.1469C22.535 16.0747 22.6594 16.0253 22.7898 16.0016C22.9203 15.9779 23.0541 15.9804 23.1836 16.0089C23.3131 16.0374 23.4356 16.0914 23.544 16.1677C23.6525 16.244 23.7446 16.341 23.8152 16.4533C23.8858 16.5655 23.9333 16.6907 23.955 16.8215C23.9768 16.9522 23.9723 17.086 23.9419 17.2151C23.4519 19.8467 21.9933 22.1991 19.8539 23.8081C19.6828 23.9328 19.4766 24 19.2649 24.0001ZM0.999876 5.73908C0.815179 5.73826 0.634318 5.6863 0.477347 5.58897C0.320376 5.49163 0.193429 5.35273 0.110581 5.18765C0.0277322 5.02258 -0.00777989 4.83778 0.00798181 4.65375C0.0237435 4.46973 0.0901632 4.29366 0.199876 4.14508C1.83086 1.96567 4.23169 0.490404 6.91288 0.0200819C7.17279 -0.0329614 7.44313 0.0194175 7.66442 0.165696C7.88571 0.311974 8.03983 0.54017 8.09288 0.800082C8.14592 1.05999 8.09354 1.33033 7.94726 1.55163C7.80098 1.77292 7.57279 1.92704 7.31288 1.98008C5.11085 2.3437 3.13511 3.54571 1.79988 5.33408C1.70725 5.4592 1.5867 5.56096 1.44781 5.63127C1.30893 5.70159 1.15554 5.7385 0.999876 5.73908V5.73908Z" />
      </g>
      <defs>
        <clipPath id="clip0_403_3160">
          <rect
            width={24}
            height={24}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default BellRingIcon;
