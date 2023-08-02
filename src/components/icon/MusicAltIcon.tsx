/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const MusicAltIcon: FC<IconProps> = ({ size, color, onClick, className }) => {
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
      <g clipPath="url(#clip0_403_2916)">
        <path d="M22.554 0.923029C22.1026 0.546516 21.5733 0.274738 21.0042 0.127245C20.4352 -0.0202473 19.8405 -0.039788 19.263 0.0700288L10.079 1.79203C8.93274 2.00685 7.89762 2.6156 7.15274 3.51295C6.40787 4.4103 6.00011 5.5398 6 6.70603V16.556C5.39466 16.1961 4.70426 16.0042 4 16C3.20888 16 2.43552 16.2346 1.77772 16.6742C1.11992 17.1137 0.607234 17.7384 0.304484 18.4693C0.00173312 19.2002 -0.0774802 20.0045 0.0768607 20.7804C0.231202 21.5563 0.612165 22.269 1.17157 22.8285C1.73098 23.3879 2.44372 23.7688 3.21964 23.9232C3.99557 24.0775 4.79983 23.9983 5.53074 23.6955C6.26164 23.3928 6.88636 22.8801 7.32588 22.2223C7.76541 21.5645 8 20.7912 8 20V10.876C7.99997 10.4094 8.16309 9.95747 8.46113 9.59844C8.75916 9.23941 9.17335 8.99589 9.632 8.91003L20.815 6.81003C20.9601 6.78272 21.1094 6.78786 21.2522 6.82508C21.3951 6.86231 21.5279 6.9307 21.6412 7.02534C21.7545 7.11998 21.8454 7.23852 21.9074 7.37246C21.9695 7.50641 22.0011 7.65242 22 7.80003V13.56C21.3951 13.1987 20.7046 13.0054 20 13C19.2089 13 18.4355 13.2346 17.7777 13.6742C17.1199 14.1137 16.6072 14.7384 16.3045 15.4693C16.0017 16.2002 15.9225 17.0045 16.0769 17.7804C16.2312 18.5563 16.6122 19.269 17.1716 19.8285C17.731 20.3879 18.4437 20.7688 19.2196 20.9232C19.9956 21.0775 20.7998 20.9983 21.5307 20.6955C22.2616 20.3928 22.8864 19.8801 23.3259 19.2223C23.7654 18.5645 24 17.7912 24 17V4.00003C24.0007 3.41227 23.8714 2.83162 23.6214 2.29967C23.3714 1.76772 23.0069 1.29762 22.554 0.923029V0.923029ZM4 22C3.60444 22 3.21776 21.8827 2.88886 21.663C2.55996 21.4432 2.30362 21.1308 2.15224 20.7654C2.00087 20.3999 1.96126 19.9978 2.03843 19.6098C2.1156 19.2219 2.30608 18.8655 2.58579 18.5858C2.86549 18.3061 3.22186 18.1156 3.60982 18.0385C3.99778 17.9613 4.39992 18.0009 4.76537 18.1523C5.13082 18.3036 5.44318 18.56 5.66294 18.8889C5.8827 19.2178 6 19.6045 6 20C6 20.5305 5.78929 21.0392 5.41422 21.4142C5.03914 21.7893 4.53044 22 4 22ZM20.447 4.84803L9.263 6.94403C8.81833 7.02876 8.39126 7.18836 8 7.41603V6.70603C7.99991 6.00625 8.24445 5.32845 8.6913 4.78992C9.13816 4.25139 9.75921 3.88602 10.447 3.75703L19.632 2.03503C19.9207 1.98098 20.2178 1.9912 20.5022 2.06495C20.7865 2.13871 21.0511 2.27419 21.2772 2.46178C21.5032 2.64936 21.6852 2.88444 21.8101 3.1503C21.935 3.41616 21.9999 3.70628 22 4.00003V4.98403C21.5038 4.8005 20.9675 4.75353 20.447 4.84803V4.84803ZM20 19C19.6044 19 19.2178 18.8827 18.8889 18.663C18.56 18.4432 18.3036 18.1308 18.1522 17.7654C18.0009 17.3999 17.9613 16.9978 18.0384 16.6098C18.1156 16.2219 18.3061 15.8655 18.5858 15.5858C18.8655 15.3061 19.2219 15.1156 19.6098 15.0385C19.9978 14.9613 20.3999 15.0009 20.7654 15.1523C21.1308 15.3036 21.4432 15.56 21.6629 15.8889C21.8827 16.2178 22 16.6045 22 17C22 17.5305 21.7893 18.0392 21.4142 18.4142C21.0391 18.7893 20.5304 19 20 19Z" />
      </g>
      <defs>
        <clipPath id="clip0_403_2916">
          <rect
            width={24}
            height={24}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default MusicAltIcon;
