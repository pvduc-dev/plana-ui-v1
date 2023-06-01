/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const ArchiveIcon: FC<IconProps> = ({ size, color, onClick, className }) => {
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
      <g clipPath="url(#clip0_403_3134)">
        <path d="M17.0001 0H7.00012C5.67453 0.00158786 4.40368 0.528882 3.46634 1.46622C2.529 2.40356 2.00171 3.6744 2.00012 5V19C2.00171 20.3256 2.529 21.5964 3.46634 22.5338C4.40368 23.4711 5.67453 23.9984 7.00012 24H17.0001C18.3257 23.9984 19.5966 23.4711 20.5339 22.5338C21.4712 21.5964 21.9985 20.3256 22.0001 19V5C21.9985 3.6744 21.4712 2.40356 20.5339 1.46622C19.5966 0.528882 18.3257 0.00158786 17.0001 0V0ZM7.00012 2H17.0001C17.7958 2 18.5588 2.31607 19.1214 2.87868C19.6841 3.44129 20.0001 4.20435 20.0001 5V11H4.00012V5C4.00012 4.20435 4.31619 3.44129 4.8788 2.87868C5.44141 2.31607 6.20447 2 7.00012 2V2ZM17.0001 22H7.00012C6.20447 22 5.44141 21.6839 4.8788 21.1213C4.31619 20.5587 4.00012 19.7956 4.00012 19V13H20.0001V19C20.0001 19.7956 19.6841 20.5587 19.1214 21.1213C18.5588 21.6839 17.7958 22 17.0001 22Z" />
        <path d="M10.9998 7H12.9998C13.265 7 13.5194 6.89464 13.7069 6.7071C13.8945 6.51957 13.9998 6.26521 13.9998 6C13.9998 5.73478 13.8945 5.48043 13.7069 5.29289C13.5194 5.10536 13.265 5 12.9998 5H10.9998C10.7346 5 10.4802 5.10536 10.2927 5.29289C10.1052 5.48043 9.99982 5.73478 9.99982 6C9.99982 6.26521 10.1052 6.51957 10.2927 6.7071C10.4802 6.89464 10.7346 7 10.9998 7V7Z" />
        <path d="M12.9998 17H10.9998C10.7346 17 10.4802 17.1054 10.2927 17.2929C10.1052 17.4804 9.99982 17.7348 9.99982 18C9.99982 18.2652 10.1052 18.5196 10.2927 18.7071C10.4802 18.8947 10.7346 19 10.9998 19H12.9998C13.265 19 13.5194 18.8947 13.7069 18.7071C13.8945 18.5196 13.9998 18.2652 13.9998 18C13.9998 17.7348 13.8945 17.4804 13.7069 17.2929C13.5194 17.1054 13.265 17 12.9998 17Z" />
      </g>
      <defs>
        <clipPath id="clip0_403_3134">
          <rect
            width={24}
            height={24}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default ArchiveIcon;