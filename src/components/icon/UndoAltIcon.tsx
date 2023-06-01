/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const UndoAltIcon: FC<IconProps> = ({ size, color, onClick, className }) => {
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
      <g clipPath="url(#clip0_403_2910)">
        <path d="M22.535 8.46006C22.0715 7.99508 21.5205 7.62662 20.9137 7.37602C20.3069 7.12541 19.6565 6.99762 19 7.00006V7.00006H2.79997L7.09997 2.70006C7.28721 2.51202 7.39209 2.2573 7.39152 1.99194C7.39096 1.72657 7.285 1.4723 7.09697 1.28506C6.90893 1.09782 6.65421 0.992939 6.38884 0.993502C6.12348 0.994065 5.86921 1.10002 5.68197 1.28806L0.731966 6.23706C0.263288 6.70588 0 7.34165 0 8.00456C0 8.66747 0.263288 9.30324 0.731966 9.77206L5.68197 14.7231C5.77481 14.8162 5.88508 14.8901 6.00649 14.9406C6.1279 14.9911 6.25806 15.0171 6.38955 15.0173C6.52104 15.0175 6.65128 14.9918 6.77283 14.9416C6.89438 14.8915 7.00486 14.8179 7.09797 14.7251C7.19107 14.6322 7.26498 14.5219 7.31547 14.4005C7.36596 14.2791 7.39204 14.149 7.39223 14.0175C7.39242 13.886 7.3667 13.7557 7.31655 13.6342C7.26641 13.5126 7.19281 13.4022 7.09997 13.3091L2.78797 9.00006H19C19.7956 9.00006 20.5587 9.31613 21.1213 9.87874C21.6839 10.4413 22 11.2044 22 12.0001V19.0001C22 19.7957 21.6839 20.5588 21.1213 21.1214C20.5587 21.684 19.7956 22.0001 19 22.0001H4.99997C4.73475 22.0001 4.4804 22.1054 4.29286 22.2929C4.10532 22.4805 3.99997 22.7348 3.99997 23.0001C3.99997 23.2653 4.10532 23.5196 4.29286 23.7072C4.4804 23.8947 4.73475 24.0001 4.99997 24.0001H19C20.3256 23.9985 21.5964 23.4712 22.5337 22.5338C23.4711 21.5965 23.9984 20.3257 24 19.0001V12.0001C24.0022 11.3424 23.8738 10.6909 23.6224 10.0832C23.3709 9.47552 23.0013 8.92381 22.535 8.46006Z" />
      </g>
      <defs>
        <clipPath id="clip0_403_2910">
          <rect
            width={24}
            height={24}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default UndoAltIcon;
