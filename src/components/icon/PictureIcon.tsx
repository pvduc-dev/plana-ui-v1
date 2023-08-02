/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const PictureIcon: FC<IconProps> = ({ size, color, onClick, className }) => {
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
      <g clipPath="url(#clip0_403_2890)">
        <path d="M19 0H5C3.6744 0.00158786 2.40356 0.528882 1.46622 1.46622C0.528882 2.40356 0.00158786 3.6744 0 5L0 19C0.00158786 20.3256 0.528882 21.5964 1.46622 22.5338C2.40356 23.4711 3.6744 23.9984 5 24H19C20.3256 23.9984 21.5964 23.4711 22.5338 22.5338C23.4711 21.5964 23.9984 20.3256 24 19V5C23.9984 3.6744 23.4711 2.40356 22.5338 1.46622C21.5964 0.528882 20.3256 0.00158786 19 0V0ZM5 2H19C19.7956 2 20.5587 2.31607 21.1213 2.87868C21.6839 3.44129 22 4.20435 22 5V19C21.9983 19.4455 21.8957 19.8848 21.7 20.285L12.537 11.122C12.0727 10.6576 11.5214 10.2892 10.9147 10.0378C10.308 9.78644 9.65772 9.65707 9.001 9.65707C8.34428 9.65707 7.69399 9.78644 7.08728 10.0378C6.48056 10.2892 5.92931 10.6576 5.465 11.122L2 14.586V5C2 4.20435 2.31607 3.44129 2.87868 2.87868C3.44129 2.31607 4.20435 2 5 2V2ZM5 22C4.20435 22 3.44129 21.6839 2.87868 21.1213C2.31607 20.5587 2 19.7956 2 19V17.414L6.878 12.536C7.1566 12.2572 7.4874 12.0361 7.85151 11.8852C8.21561 11.7343 8.60587 11.6566 9 11.6566C9.39413 11.6566 9.78439 11.7343 10.1485 11.8852C10.5126 12.0361 10.8434 12.2572 11.122 12.536L20.285 21.7C19.8848 21.8957 19.4455 21.9983 19 22H5Z" />
        <path d="M16.0001 10.4996C16.6924 10.4996 17.369 10.2944 17.9446 9.90978C18.5202 9.52519 18.9688 8.97857 19.2337 8.33903C19.4986 7.69949 19.5679 6.99575 19.4329 6.31682C19.2978 5.63789 18.9645 5.01425 18.475 4.52476C17.9855 4.03528 17.3619 3.70194 16.6829 3.56689C16.004 3.43184 15.3003 3.50115 14.6607 3.76606C14.0212 4.03096 13.4746 4.47957 13.09 5.05514C12.7054 5.63071 12.5001 6.3074 12.5001 6.99964C12.5001 7.92789 12.8689 8.81813 13.5252 9.47451C14.1816 10.1309 15.0719 10.4996 16.0001 10.4996V10.4996ZM16.0001 5.49964C16.2968 5.49964 16.5868 5.58761 16.8335 5.75243C17.0802 5.91725 17.2724 6.15152 17.3859 6.42561C17.4995 6.6997 17.5292 7.0013 17.4713 7.29227C17.4134 7.58324 17.2706 7.85052 17.0608 8.0603C16.851 8.27007 16.5837 8.41294 16.2928 8.47081C16.0018 8.52869 15.7002 8.49899 15.4261 8.38546C15.152 8.27192 14.9177 8.07966 14.7529 7.83299C14.5881 7.58632 14.5001 7.29631 14.5001 6.99964C14.5001 6.60181 14.6582 6.22028 14.9395 5.93898C15.2208 5.65767 15.6023 5.49964 16.0001 5.49964V5.49964Z" />
      </g>
      <defs>
        <clipPath id="clip0_403_2890">
          <rect
            width={24}
            height={24}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default PictureIcon;
