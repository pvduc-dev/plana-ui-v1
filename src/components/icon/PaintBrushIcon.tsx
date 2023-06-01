/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const PaintBrushIcon: FC<IconProps> = ({ size, color, onClick, className }) => {
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
      <g clipPath="url(#clip0_403_2896)">
        <path d="M23.0999 0.899664C22.5162 0.343686 21.741 0.0335693 20.9349 0.0335693C20.1288 0.0335693 19.3536 0.343686 18.7699 0.899664L7.5629 12.0997C7.21425 12.0325 6.85995 11.9991 6.5049 11.9997C5.7831 11.9976 5.06807 12.1387 4.4012 12.4149C3.73433 12.6911 3.12887 13.0968 2.6199 13.6086C1.2679 14.9616 0.3139 18.5916 0.0309004 20.5626C-0.0318798 20.989 -0.00205158 21.4239 0.118355 21.8378C0.238761 22.2516 0.446918 22.6346 0.728655 22.9608C1.01039 23.2869 1.3591 23.5485 1.75103 23.7278C2.14296 23.9071 2.56892 23.9998 2.9999 23.9996C3.14678 23.9997 3.29349 23.9894 3.4389 23.9686C5.4099 23.6856 9.0389 22.7316 10.3929 21.3796C11.0287 20.742 11.498 19.9579 11.7596 19.0963C12.0211 18.2348 12.0669 17.3221 11.8929 16.4386L23.0999 5.22966C23.6726 4.65466 23.9941 3.87619 23.9941 3.06466C23.9941 2.25313 23.6726 1.47466 23.0999 0.899664V0.899664ZM8.9769 19.9656C8.2519 20.6906 5.4769 21.6546 3.1529 21.9886C2.99759 22.0111 2.83918 21.9972 2.69014 21.9481C2.54109 21.899 2.40546 21.816 2.2939 21.7056C2.18273 21.5947 2.09927 21.4591 2.05028 21.3098C2.00129 21.1606 1.98814 21.0019 2.0119 20.8466C2.3449 18.5236 3.3119 15.7466 4.0339 15.0226C4.70014 14.4226 5.57127 14.1011 6.4676 14.1245C7.36392 14.1479 8.21708 14.5144 8.85109 15.1485C9.48511 15.7825 9.85162 16.6356 9.87503 17.5319C9.89844 18.4283 9.57696 19.2994 8.9769 19.9656V19.9656ZM21.6879 3.81566L11.0669 14.4376C10.6723 13.8401 10.1623 13.3274 9.5669 12.9296L20.1839 2.31166C20.3859 2.11874 20.6545 2.01109 20.9339 2.01109C21.2133 2.01109 21.4819 2.11874 21.6839 2.31166C21.7831 2.41005 21.8619 2.52705 21.9158 2.65595C21.9697 2.78485 21.9976 2.92312 21.998 3.06283C21.9984 3.20255 21.9712 3.34096 21.918 3.47014C21.8648 3.59933 21.7866 3.71674 21.6879 3.81566V3.81566Z" />
      </g>
      <defs>
        <clipPath id="clip0_403_2896">
          <rect
            width={24}
            height={24}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default PaintBrushIcon;