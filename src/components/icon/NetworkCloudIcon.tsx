/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const NetworkCloudIcon: FC<IconProps> = ({
  size,
  color,
  onClick,
  className,
}) => {
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
      <g clipPath="url(#clip0_403_2909)">
        <path d="M23 19.9997H14.816C14.5135 19.1527 13.847 18.4862 13 18.1837V14.0217C14.344 14.0217 15.52 14.0097 16.095 13.9987C16.454 13.9919 16.8112 13.948 17.161 13.8677C18.9986 13.4401 20.4334 12.0052 20.861 10.1677C21.489 7.53485 19.9136 4.87887 17.302 4.16768L17.13 4.12967C16.83 4.06268 16.6791 4.02968 16.542 3.70067C15.273 0.639588 11.7627 -0.813162 8.70159 0.455885C6.94144 1.18559 5.63255 2.70799 5.175 4.55764C4.95848 5.45346 4.93903 6.38557 5.118 7.28965C3.34237 8.05367 2.52234 10.1124 3.28631 11.888C3.70566 12.8626 4.54448 13.5944 5.56697 13.8777C5.83908 13.9499 6.11855 13.9909 6.39998 13.9997C7.05497 14.0177 8.934 14.0257 10.894 14.0257H11V18.1847C10.1533 18.487 9.48675 19.1531 9.18398 19.9997H0.999984C0.447703 19.9997 0 20.4474 0 20.9997C0 21.5519 0.447703 21.9996 0.999984 21.9996H9.18398C9.72581 23.5549 11.4258 24.3764 12.981 23.8346C13.8407 23.5351 14.5165 22.8593 14.816 21.9996H23C23.5522 21.9996 24 21.5519 24 20.9997C24 20.4474 23.5523 19.9997 23 19.9997ZM6.456 11.9997C6.32761 11.9951 6.20011 11.9759 6.07598 11.9427C5.58164 11.8039 5.19516 11.4179 5.05598 10.9236C4.84317 10.1947 5.20861 9.42176 5.907 9.12364C6.80508 8.74353 7.30205 7.77485 7.08698 6.82362C6.63108 4.66203 8.01384 2.54014 10.1754 2.08428C10.2476 2.06904 10.3201 2.05582 10.393 2.04462C10.588 2.01579 10.7849 2.00074 10.982 1.99962C12.6069 1.99399 14.0748 2.96881 14.7 4.46862C15.053 5.34584 15.8476 5.96773 16.784 6.09964C18.3549 6.53468 19.2981 8.13696 18.916 9.72162C18.6527 10.8076 17.8029 11.6543 16.716 11.9136C16.5002 11.9642 16.2796 11.9917 16.058 11.9956C15.365 12.0087 7.21102 12.0197 6.456 11.9997ZM12 21.9996C11.4477 21.9996 11 21.5519 11 20.9997C11 20.4474 11.4477 19.9997 12 19.9997C12.5523 19.9997 13 20.4474 13 20.9997C13 21.5519 12.5523 21.9996 12 21.9996Z" />
      </g>
      <defs>
        <clipPath id="clip0_403_2909">
          <rect
            width={24}
            height={24}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default NetworkCloudIcon;