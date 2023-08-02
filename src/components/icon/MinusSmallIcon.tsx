/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const MinusSmallIcon: FC<IconProps> = ({ size, color, onClick, className }) => {
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
      <path d="M17 10.9997H7C6.44772 10.9997 6 11.4474 6 11.9997C6 12.552 6.44772 12.9997 7 12.9997H17C17.5523 12.9997 18 12.552 18 11.9997C18 11.4474 17.5523 10.9997 17 10.9997Z" />
    </svg>
  );
};
export default MinusSmallIcon;
