/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const CreditCardIcon: FC<IconProps> = ({ size, color, onClick, className }) => {
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
      <g clipPath="url(#clip0_403_3048)">
        <path d="M5.50006 17.0001C6.32849 17.0001 7.00006 16.3285 7.00006 15.5001C7.00006 14.6717 6.32849 14.0001 5.50006 14.0001C4.67163 14.0001 4.00006 14.6717 4.00006 15.5001C4.00006 16.3285 4.67163 17.0001 5.50006 17.0001Z" />
        <path d="M19 3H5C3.6744 3.00159 2.40356 3.52888 1.46622 4.46622C0.528882 5.40356 0.00158786 6.6744 0 8L0 16C0.00158786 17.3256 0.528882 18.5964 1.46622 19.5338C2.40356 20.4711 3.6744 20.9984 5 21H19C20.3256 20.9984 21.5964 20.4711 22.5338 19.5338C23.4711 18.5964 23.9984 17.3256 24 16V8C23.9984 6.6744 23.4711 5.40356 22.5338 4.46622C21.5964 3.52888 20.3256 3.00159 19 3V3ZM5 5H19C19.7956 5 20.5587 5.31607 21.1213 5.87868C21.6839 6.44129 22 7.20435 22 8H2C2 7.20435 2.31607 6.44129 2.87868 5.87868C3.44129 5.31607 4.20435 5 5 5V5ZM19 19H5C4.20435 19 3.44129 18.6839 2.87868 18.1213C2.31607 17.5587 2 16.7956 2 16V10H22V16C22 16.7956 21.6839 17.5587 21.1213 18.1213C20.5587 18.6839 19.7956 19 19 19Z" />
      </g>
      <defs>
        <clipPath id="clip0_403_3048">
          <rect
            width={24}
            height={24}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default CreditCardIcon;