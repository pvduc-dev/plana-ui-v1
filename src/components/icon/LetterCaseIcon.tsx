/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const LetterCaseIcon: FC<IconProps> = ({ size, color, onClick, className }) => {
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
      <path d="M7.40006 5.55269C7.30779 5.3977 7.17684 5.26934 7.02003 5.1802C6.86322 5.09106 6.68594 5.04419 6.50556 5.04419C6.32518 5.04419 6.1479 5.09106 5.99109 5.1802C5.83428 5.26934 5.70333 5.3977 5.61106 5.55269L0.111059 16.5527C0.0511452 16.6703 0.0151011 16.7986 0.00500536 16.9302C-0.00509038 17.0618 0.0109619 17.1941 0.0522367 17.3194C0.0935115 17.4448 0.159192 17.5607 0.245492 17.6606C0.331792 17.7604 0.437004 17.8422 0.555062 17.9012C0.673119 17.9602 0.801687 17.9952 0.933353 18.0043C1.06502 18.0134 1.19718 17.9963 1.32221 17.954C1.44724 17.9118 1.56267 17.8452 1.66185 17.7581C1.76103 17.6711 1.84199 17.5652 1.90006 17.4467L3.61906 13.9997H9.38306L11.1071 17.4467C11.1651 17.5652 11.2461 17.6711 11.3453 17.7581C11.4444 17.8452 11.5599 17.9118 11.6849 17.954C11.8099 17.9963 11.9421 18.0134 12.0738 18.0043C12.2054 17.9952 12.334 17.9602 12.4521 17.9012C12.5701 17.8422 12.6753 17.7604 12.7616 17.6606C12.8479 17.5607 12.9136 17.4448 12.9549 17.3194C12.9962 17.1941 13.0122 17.0618 13.0021 16.9302C12.992 16.7986 12.956 16.6703 12.8961 16.5527L7.40006 5.55269ZM4.61906 11.9997L6.50006 8.2357L8.38306 11.9997H4.61906Z" />
      <path d="M22.9999 7.99963C22.7346 7.99963 22.4803 8.10499 22.2927 8.29253C22.1052 8.48006 21.9999 8.73442 21.9999 8.99963V9.02563C21.1395 8.36383 20.0853 8.00331 18.9999 7.99963C17.6738 7.99963 16.402 8.52642 15.4643 9.4641C14.5267 10.4018 13.9999 11.6736 13.9999 12.9996C13.9999 14.3257 14.5267 15.5975 15.4643 16.5352C16.402 17.4728 17.6738 17.9996 18.9999 17.9996C20.0853 17.996 21.1395 17.6354 21.9999 16.9736V16.9996C21.9999 17.2649 22.1052 17.5192 22.2927 17.7067C22.4803 17.8943 22.7346 17.9996 22.9999 17.9996C23.2651 17.9996 23.5194 17.8943 23.707 17.7067C23.8945 17.5192 23.9998 17.2649 23.9998 16.9996V8.99963C23.9998 8.73442 23.8945 8.48006 23.707 8.29253C23.5194 8.10499 23.2651 7.99963 22.9999 7.99963ZM18.9999 15.9996C18.4065 15.9996 17.8265 15.8237 17.3332 15.494C16.8398 15.1644 16.4553 14.6959 16.2282 14.1477C16.0012 13.5995 15.9418 12.9963 16.0575 12.4144C16.1733 11.8324 16.459 11.2979 16.8785 10.8783C17.2981 10.4588 17.8327 10.173 18.4146 10.0573C18.9965 9.94152 19.5997 10.0009 20.1479 10.228C20.6961 10.4551 21.1646 10.8396 21.4943 11.3329C21.8239 11.8263 21.9999 12.4063 21.9999 12.9996C21.9999 13.7953 21.6838 14.5583 21.1212 15.121C20.5586 15.6836 19.7955 15.9996 18.9999 15.9996Z" />
    </svg>
  );
};
export default LetterCaseIcon;
