/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const CaretRightIcon: FC<IconProps> = ({ size, color, onClick, className }) => {
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
      <path d="M9.00014 17.88V6.71004C8.99898 6.51141 9.05701 6.31695 9.16681 6.15143C9.27661 5.98591 9.43321 5.85684 9.61666 5.78067C9.8001 5.7045 10.0021 5.68469 10.1968 5.72376C10.3916 5.76283 10.5703 5.85901 10.7101 6.00004L16.2902 11.59C16.4764 11.7774 16.5809 12.0309 16.5809 12.295C16.5809 12.5592 16.4764 12.8127 16.2902 13L10.7101 18.59C10.5703 18.7311 10.3916 18.8272 10.1968 18.8663C10.0021 18.9054 9.8001 18.8856 9.61666 18.8094C9.43321 18.7332 9.27661 18.6042 9.16681 18.4387C9.05701 18.2731 8.99898 18.0787 9.00014 17.88Z" />
    </svg>
  );
};
export default CaretRightIcon;
