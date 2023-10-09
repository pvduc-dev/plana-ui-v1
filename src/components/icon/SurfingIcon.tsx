/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const SurfingIcon: FC<IconProps> = ({ size, color, onClick, className }) => {
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
      <g clipPath="url(#clip0_403_3017)">
        <path d="M19.9998 0.0102315C16.1878 0.0102315 11.8748 2.04823 8.46077 5.46123C5.02747 8.86506 2.2666 12.8856 0.322766 17.3122C0.00492892 18.0475 -0.0838797 18.8615 0.0679296 19.648C0.219739 20.4346 0.605115 21.1571 1.17377 21.7212L2.27977 22.8262C2.84287 23.3936 3.56371 23.7783 4.34848 23.9302C5.13325 24.0822 5.94559 23.9944 6.67977 23.6782C11.1091 21.7372 15.1312 18.9757 18.5338 15.5392C21.9518 12.1262 23.9898 7.81323 23.9898 4.00023C24.046 3.46244 23.9814 2.91888 23.8008 2.40923C23.6202 1.89957 23.328 1.43668 22.9457 1.05433C22.5633 0.671981 22.1004 0.379829 21.5908 0.199195C21.0811 0.0185602 20.5376 -0.045998 19.9998 0.0102315V0.0102315ZM17.1248 14.1252C13.9027 17.3812 10.0941 19.9989 5.89977 21.8402C5.56626 21.9768 5.20211 22.0211 4.84559 21.9683C4.48908 21.9155 4.15338 21.7676 3.87377 21.5402L16.7068 8.70723C16.8023 8.61498 16.8785 8.50464 16.9309 8.38264C16.9833 8.26063 17.0109 8.12941 17.012 7.99663C17.0132 7.86385 16.9879 7.73217 16.9376 7.60928C16.8873 7.48638 16.8131 7.37473 16.7192 7.28084C16.6253 7.18694 16.5136 7.11269 16.3907 7.06241C16.2678 7.01213 16.1361 6.98683 16.0034 6.98798C15.8706 6.98913 15.7394 7.01672 15.6174 7.06913C15.4954 7.12154 15.385 7.19772 15.2928 7.29323L2.45677 20.1292C2.22911 19.8494 2.08109 19.5133 2.0283 19.1564C1.9755 18.7995 2.01988 18.435 2.15677 18.1012C4.00086 13.9073 6.61928 10.0988 9.87477 6.87523C13.4628 3.28823 17.4578 2.01023 19.9998 2.01023C21.4508 2.01023 21.9898 2.54923 21.9898 4.00023C21.9898 6.54323 20.7118 10.5382 17.1248 14.1252V14.1252Z" />
      </g>
      <defs>
        <clipPath id="clip0_403_3017">
          <rect
            width={24}
            height={24}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default SurfingIcon;