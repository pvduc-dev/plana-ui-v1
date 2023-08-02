/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const CrownIcon: FC<IconProps> = ({ size, color, onClick, className }) => {
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
      <g clipPath="url(#clip0_403_3023)">
        <path d="M22.766 4.566C22.4006 4.41379 21.9981 4.37378 21.6099 4.45107C21.2217 4.52836 20.8653 4.71945 20.586 5L18 7.586L13.414 3C13.0389 2.62506 12.5303 2.41443 12 2.41443C11.4697 2.41443 10.9611 2.62506 10.586 3L6 7.586L3.414 5C3.1343 4.72038 2.77797 4.52997 2.39006 4.45283C2.00216 4.3757 1.60009 4.41531 1.23469 4.56665C0.869291 4.71799 0.556965 4.97426 0.337197 5.30308C0.117428 5.6319 8.44486e-05 6.0185 0 6.414L0 17C0.00158786 18.3256 0.528882 19.5964 1.46622 20.5338C2.40356 21.4711 3.6744 21.9984 5 22H19C20.3256 21.9984 21.5964 21.4711 22.5338 20.5338C23.4711 19.5964 23.9984 18.3256 24 17V6.414C24.0001 6.01847 23.8829 5.63179 23.6633 5.30285C23.4436 4.97391 23.1314 4.71749 22.766 4.566V4.566ZM22 17C22 17.7957 21.6839 18.5587 21.1213 19.1213C20.5587 19.6839 19.7956 20 19 20H5C4.20435 20 3.44129 19.6839 2.87868 19.1213C2.31607 18.5587 2 17.7957 2 17V6.414L5.293 9.707C5.48053 9.89447 5.73484 9.99979 6 9.99979C6.26516 9.99979 6.51947 9.89447 6.707 9.707L12 4.414L17.293 9.707C17.4805 9.89447 17.7348 9.99979 18 9.99979C18.2652 9.99979 18.5195 9.89447 18.707 9.707L22 6.414V17Z" />
      </g>
      <defs>
        <clipPath id="clip0_403_3023">
          <rect
            width={24}
            height={24}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default CrownIcon;
