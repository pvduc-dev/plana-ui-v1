/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const GuitarIcon: FC<IconProps> = ({ size, color, onClick, className }) => {
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
      <g clipPath="url(#clip0_403_2985)">
        <path d="M10.0001 16C11.1047 16 12.0001 15.1046 12.0001 14C12.0001 12.8954 11.1047 12 10.0001 12C8.89555 12 8.00012 12.8954 8.00012 14C8.00012 15.1046 8.89555 16 10.0001 16Z" />
        <path d="M5.70704 16.2928C5.51844 16.1106 5.26584 16.0098 5.00364 16.0121C4.74144 16.0144 4.49063 16.1196 4.30522 16.305C4.11981 16.4904 4.01465 16.7412 4.01237 17.0034C4.01009 17.2656 4.11088 17.5182 4.29304 17.7068L6.29304 19.7068C6.38529 19.8023 6.49563 19.8785 6.61764 19.9309C6.73964 19.9833 6.87086 20.0109 7.00364 20.012C7.13642 20.0132 7.2681 19.9879 7.39099 19.9376C7.51389 19.8873 7.62554 19.8131 7.71944 19.7192C7.81333 19.6253 7.88758 19.5136 7.93786 19.3907C7.98814 19.2678 8.01345 19.1362 8.01229 19.0034C8.01114 18.8706 7.98355 18.7394 7.93114 18.6174C7.87873 18.4954 7.80255 18.385 7.70704 18.2928L5.70704 16.2928Z" />
        <path d="M23.482 0.518085C23.3179 0.353841 23.123 0.223548 22.9086 0.134652C22.6941 0.0457557 22.4642 0 22.232 0C21.9998 0 21.7699 0.0457557 21.5554 0.134652C21.341 0.223548 21.1461 0.353841 20.982 0.518085L20.768 0.732085C20.0418 1.46043 19.5137 2.3623 19.234 3.35208L16.259 6.32709C15.1612 5.43555 13.7794 4.96845 12.3659 5.01104C10.9523 5.05363 9.60113 5.60307 8.559 6.55908C8.39923 6.71805 8.25055 6.88778 8.114 7.06708C7.93491 7.32527 7.70445 7.54371 7.43706 7.70872C7.16966 7.87374 6.87107 7.98178 6.56 8.02608C4.8634 8.1409 3.26537 8.86463 2.06 10.0641C-0.896004 13.0211 -0.640004 18.0891 2.635 21.3641C4.26505 23.0253 6.48679 23.9731 8.814 24.0001C9.7615 24.0127 10.7021 23.8372 11.5813 23.4837C12.4605 23.1303 13.2608 22.606 13.936 21.9411C15.1355 20.7357 15.8592 19.1377 15.974 17.4411C16.0183 17.13 16.1263 16.8314 16.2914 16.564C16.4564 16.2966 16.6748 16.0662 16.933 15.8871C17.1123 15.7505 17.282 15.6018 17.441 15.4421C18.3959 14.3994 18.9445 13.0484 18.9871 11.6352C19.0297 10.2219 18.5634 8.8404 17.673 7.74208L20.648 4.76709C21.6378 4.48737 22.5397 3.95933 23.268 3.23308L23.482 3.01908C23.6464 2.85497 23.7768 2.66004 23.8658 2.44547C23.9548 2.23089 24.0006 2.00088 24.0006 1.76858C24.0006 1.53629 23.9548 1.30628 23.8658 1.0917C23.7768 0.877128 23.6464 0.682204 23.482 0.518085V0.518085ZM16.027 14.0271C15.9332 14.1223 15.833 14.2108 15.727 14.2921C15.24 14.6375 14.8324 15.0829 14.5314 15.5985C14.2305 16.1142 14.0432 16.6882 13.982 17.2821C13.9023 18.5022 13.3845 19.6525 12.524 20.5211C10.349 22.6961 6.549 22.4411 4.056 19.9471C1.563 17.4531 1.3 13.6551 3.479 11.4791C4.34763 10.6186 5.49788 10.1008 6.718 10.0211C7.3119 9.95992 7.88589 9.7726 8.40155 9.47166C8.9172 9.17072 9.36262 8.7631 9.708 8.27608C9.78929 8.17008 9.87783 8.06984 9.973 7.97608C10.2956 7.65937 10.6781 7.40998 11.098 7.24243C11.5179 7.07487 11.9669 6.99249 12.419 7.00008C13.2799 7.01102 14.1191 7.27231 14.834 7.75208L13.293 9.29309C13.1975 9.38533 13.1213 9.49568 13.0689 9.61768C13.0165 9.73968 12.9889 9.8709 12.9877 10.0037C12.9866 10.1365 13.0119 10.2681 13.0622 10.391C13.1125 10.5139 13.1867 10.6256 13.2806 10.7195C13.3745 10.8134 13.4861 10.8876 13.609 10.9379C13.7319 10.9882 13.8636 11.0135 13.9964 11.0123C14.1292 11.0112 14.2604 10.9836 14.3824 10.9312C14.5044 10.8788 14.6148 10.8026 14.707 10.7071L16.245 9.16908C16.7717 9.88088 17.0375 10.7522 16.9978 11.6368C16.9581 12.5213 16.6153 13.3653 16.027 14.0271Z" />
      </g>
      <defs>
        <clipPath id="clip0_403_2985">
          <rect
            width={24}
            height={24}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default GuitarIcon;
