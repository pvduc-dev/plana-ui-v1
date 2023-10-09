/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const MusicIcon: FC<IconProps> = ({ size, color, onClick, className }) => {
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
      <g clipPath="url(#clip0_403_2914)">
        <path d="M18.9999 1.00031H12.9999C11.6743 1.00189 10.4035 1.52919 9.46616 2.46653C8.52882 3.40386 8.00153 4.67471 7.99994 6.00031V14.0263C7.13955 13.3645 6.08541 13.004 4.99994 13.0003C4.01104 13.0003 3.04434 13.2936 2.22209 13.843C1.39984 14.3924 0.758982 15.1733 0.380544 16.0869C0.00210539 17.0005 -0.0969113 18.0059 0.0960148 18.9758C0.288941 19.9457 0.765145 20.8366 1.46441 21.5358C2.16367 22.2351 3.05459 22.7113 4.02449 22.9042C4.9944 23.0972 5.99973 22.9981 6.91336 22.6197C7.82699 22.2413 8.60788 21.6004 9.15729 20.7782C9.7067 19.9559 9.99994 18.9892 9.99994 18.0003V6.00031C9.99994 5.20466 10.316 4.44159 10.8786 3.87898C11.4412 3.31638 12.2043 3.00031 12.9999 3.00031H18.9999C19.7956 3.00031 20.5587 3.31638 21.1213 3.87898C21.6839 4.44159 21.9999 5.20466 21.9999 6.00031V14.0263C21.1396 13.3645 20.0854 13.004 18.9999 13.0003C18.011 13.0003 17.0443 13.2936 16.2221 13.843C15.3998 14.3924 14.759 15.1733 14.3805 16.0869C14.0021 17.0005 13.9031 18.0059 14.096 18.9758C14.2889 19.9457 14.7651 20.8366 15.4644 21.5358C16.1637 22.2351 17.0546 22.7113 18.0245 22.9042C18.9944 23.0972 19.9997 22.9981 20.9134 22.6197C21.827 22.2413 22.6079 21.6004 23.1573 20.7782C23.7067 19.9559 23.9999 18.9892 23.9999 18.0003V6.00031C23.9984 4.67471 23.4711 3.40386 22.5337 2.46653C21.5964 1.52919 20.3255 1.00189 18.9999 1.00031V1.00031ZM4.99994 21.0003C4.4066 21.0003 3.82658 20.8244 3.33323 20.4947C2.83988 20.1651 2.45537 19.6965 2.2283 19.1484C2.00124 18.6002 1.94183 17.997 2.05759 17.415C2.17334 16.8331 2.45906 16.2985 2.87862 15.879C3.29818 15.4594 3.83273 15.1737 4.41467 15.0579C4.99661 14.9422 5.59981 15.0016 6.14799 15.2287C6.69617 15.4557 7.16471 15.8402 7.49435 16.3336C7.824 16.8269 7.99994 17.407 7.99994 18.0003C7.99994 18.796 7.68387 19.559 7.12126 20.1216C6.55865 20.6842 5.79559 21.0003 4.99994 21.0003ZM18.9999 21.0003C18.4066 21.0003 17.8266 20.8244 17.3332 20.4947C16.8399 20.1651 16.4554 19.6965 16.2283 19.1484C16.0012 18.6002 15.9418 17.997 16.0576 17.415C16.1733 16.8331 16.4591 16.2985 16.8786 15.879C17.2982 15.4594 17.8327 15.1737 18.4147 15.0579C18.9966 14.9422 19.5998 15.0016 20.148 15.2287C20.6962 15.4557 21.1647 15.8402 21.4944 16.3336C21.824 16.8269 21.9999 17.407 21.9999 18.0003C21.9999 18.796 21.6839 19.559 21.1213 20.1216C20.5587 20.6842 19.7956 21.0003 18.9999 21.0003Z" />
      </g>
      <defs>
        <clipPath id="clip0_403_2914">
          <rect
            width={24}
            height={24}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default MusicIcon;