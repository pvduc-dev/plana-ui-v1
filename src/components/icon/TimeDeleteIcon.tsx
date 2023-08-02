/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const TimeDeleteIcon: FC<IconProps> = ({ size, color, onClick, className }) => {
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
      <g clipPath="url(#clip0_403_3042)">
        <path d="M23.707 15.2936C23.5195 15.1062 23.2652 15.0009 23 15.0009C22.7348 15.0009 22.4805 15.1062 22.293 15.2936L19.5 18.0866L16.707 15.2936C16.5184 15.1115 16.2658 15.0107 16.0036 15.013C15.7414 15.0152 15.4906 15.1204 15.3052 15.3058C15.1198 15.4912 15.0146 15.742 15.0123 16.0042C15.0101 16.2664 15.1109 16.519 15.293 16.7076L18.086 19.5006L15.293 22.2936C15.1975 22.3859 15.1213 22.4962 15.0689 22.6182C15.0165 22.7402 14.9889 22.8714 14.9878 23.0042C14.9866 23.137 15.0119 23.2687 15.0622 23.3916C15.1125 23.5145 15.1867 23.6261 15.2806 23.72C15.3745 23.8139 15.4862 23.8882 15.6091 23.9384C15.732 23.9887 15.8636 24.014 15.9964 24.0129C16.1292 24.0117 16.2604 23.9841 16.3824 23.9317C16.5044 23.8793 16.6148 23.8031 16.707 23.7076L19.5 20.9146L22.293 23.7076C22.4816 23.8898 22.7342 23.9906 22.9964 23.9883C23.2586 23.986 23.5094 23.8809 23.6948 23.6954C23.8802 23.51 23.9854 23.2592 23.9877 22.997C23.99 22.7348 23.8892 22.4822 23.707 22.2936L20.914 19.5006L23.707 16.7076C23.8945 16.5201 23.9998 16.2658 23.9998 16.0006C23.9998 15.7355 23.8945 15.4812 23.707 15.2936V15.2936Z" />
        <path d="M12 22C10.0222 22 8.08879 21.4135 6.4443 20.3147C4.79981 19.2159 3.51809 17.6541 2.76121 15.8268C2.00433 13.9996 1.8063 11.9889 2.19215 10.0491C2.578 8.10929 3.53041 6.32746 4.92894 4.92894C6.32746 3.53041 8.10929 2.578 10.0491 2.19215C11.9889 1.8063 13.9996 2.00433 15.8268 2.76121C17.6541 3.51809 19.2159 4.79981 20.3147 6.4443C21.4135 8.08879 22 10.0222 22 12C22 12.2652 22.1054 12.5196 22.2929 12.7071C22.4804 12.8946 22.7348 13 23 13C23.2652 13 23.5196 12.8946 23.7071 12.7071C23.8946 12.5196 24 12.2652 24 12C24 9.62663 23.2962 7.30655 21.9776 5.33316C20.6591 3.35977 18.7849 1.8217 16.5922 0.913451C14.3995 0.00519943 11.9867 -0.232441 9.65892 0.230582C7.33115 0.693605 5.19295 1.83649 3.51472 3.51472C1.83649 5.19295 0.693605 7.33115 0.230582 9.65892C-0.232441 11.9867 0.00519943 14.3995 0.913451 16.5922C1.8217 18.7849 3.35977 20.6591 5.33316 21.9776C7.30655 23.2962 9.62663 24 12 24C12.2652 24 12.5196 23.8946 12.7071 23.7071C12.8946 23.5196 13 23.2652 13 23C13 22.7348 12.8946 22.4804 12.7071 22.2929C12.5196 22.1054 12.2652 22 12 22Z" />
        <path d="M12.0002 6C11.735 6 11.4806 6.10536 11.2931 6.29289C11.1056 6.48043 11.0002 6.73478 11.0002 7V11.586L8.2932 14.293C8.19769 14.3852 8.12151 14.4956 8.0691 14.6176C8.01669 14.7396 7.98911 14.8708 7.98795 15.0036C7.9868 15.1364 8.0121 15.268 8.06238 15.3909C8.11266 15.5138 8.18692 15.6255 8.28081 15.7194C8.3747 15.8133 8.48635 15.8875 8.60925 15.9378C8.73214 15.9881 8.86382 16.0134 8.9966 16.0122C9.12938 16.0111 9.2606 15.9835 9.3826 15.9311C9.50461 15.8787 9.61495 15.8025 9.7072 15.707L12.7072 12.707C12.8947 12.5195 13.0001 12.2652 13.0002 12V7C13.0002 6.73478 12.8948 6.48043 12.7073 6.29289C12.5198 6.10536 12.2654 6 12.0002 6V6Z" />
      </g>
      <defs>
        <clipPath id="clip0_403_3042">
          <rect
            width={24}
            height={24}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default TimeDeleteIcon;
