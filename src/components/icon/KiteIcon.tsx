/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const KiteIcon: FC<IconProps> = ({ size, color, onClick, className }) => {
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
      <g clipPath="url(#clip0_403_2993)">
        <path d="M18.7599 16C18.0712 15.998 17.3889 16.1326 16.7526 16.3961C16.1163 16.6596 15.5386 17.0467 15.0529 17.535C13.6407 18.955 11.9609 20.0809 10.1107 20.8473C8.26046 21.6137 6.27659 22.0055 4.27391 22H3.12292C2.90111 22.0001 2.68424 21.9345 2.49977 21.8113C2.3153 21.6881 2.17152 21.513 2.08662 21.3081C2.00172 21.1032 1.97952 20.8777 2.02283 20.6601C2.06614 20.4426 2.17301 20.2428 2.32992 20.086L5.51991 16.9L17.2879 13.762C18.3527 13.4773 19.2937 12.849 19.9648 11.9748C20.636 11.1005 20.9999 10.0292 20.9999 8.927V5C20.9983 3.67441 20.471 2.40356 19.5337 1.46622C18.5963 0.528882 17.3255 0.00158786 15.9999 0L12.0729 0C10.9714 0.000902057 9.90098 0.365146 9.02755 1.03627C8.15412 1.70739 7.52647 2.6479 7.24191 3.712L4.09991 15.485L0.915918 18.672C0.479391 19.1085 0.182106 19.6646 0.061662 20.2701C-0.0587821 20.8755 0.00302443 21.5031 0.239265 22.0734C0.475506 22.6437 0.875568 23.1312 1.38886 23.4741C1.90215 23.817 2.50561 24.0001 3.12292 24H4.27391C6.53934 24.0063 8.78351 23.5631 10.8765 22.6961C12.9694 21.8291 14.8696 20.5555 16.4669 18.949C16.9206 18.4965 17.4982 18.1886 18.1267 18.0641C18.7552 17.9396 19.4065 18.0041 19.9985 18.2494C20.5904 18.4947 21.0964 18.9098 21.4526 19.4424C21.8088 19.9751 21.9992 20.6013 21.9999 21.242V23C21.9999 23.2652 22.1052 23.5196 22.2928 23.7071C22.4803 23.8946 22.7347 24 22.9999 24C23.2651 24 23.5195 23.8946 23.707 23.7071C23.8945 23.5196 23.9999 23.2652 23.9999 23V21.242C23.998 19.8527 23.4454 18.5207 22.4632 17.5381C21.481 16.5555 20.1492 16.0024 18.7599 16V16ZM16.7719 11.826L8.34191 14.074L14.4999 7.915L17.8559 11.271C17.5366 11.5286 17.1676 11.7176 16.7719 11.826V11.826ZM18.9999 5V8.927C18.9978 9.12638 18.9757 9.32504 18.9339 9.52L15.9149 6.5L18.6999 3.716C18.8951 4.11603 18.9976 4.5549 18.9999 5V5ZM12.0729 2H15.9999C16.446 2.00232 16.8858 2.10484 17.2869 2.3L14.4999 5.087L11.4799 2.066C11.6749 2.02424 11.8735 2.00213 12.0729 2V2ZM9.17291 4.228C9.28122 3.83197 9.47016 3.46259 9.72791 3.143L13.0869 6.5L6.92491 12.663L9.17291 4.228Z" />
      </g>
      <defs>
        <clipPath id="clip0_403_2993">
          <rect
            width={24}
            height={24}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default KiteIcon;