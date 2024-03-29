/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const CaretLeftIcon: FC<IconProps> = ({ size, color, onClick, className }) => {
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
      <path d="M13.29 18.59L7.70998 13C7.52373 12.8127 7.41919 12.5592 7.41919 12.295C7.41919 12.0309 7.52373 11.7774 7.70998 11.59L13.29 6.00004C13.4299 5.85901 13.6086 5.76283 13.8033 5.72376C13.998 5.68469 14.2 5.7045 14.3835 5.78067C14.5669 5.85684 14.7235 5.98591 14.8333 6.15143C14.9431 6.31695 15.0011 6.51141 15 6.71004V17.88C15.0011 18.0787 14.9431 18.2731 14.8333 18.4387C14.7235 18.6042 14.5669 18.7332 14.3835 18.8094C14.2 18.8856 13.998 18.9054 13.8033 18.8663C13.6086 18.8272 13.4299 18.7311 13.29 18.59Z" />
    </svg>
  );
};
export default CaretLeftIcon;
