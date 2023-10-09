/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const IceCreamIcon: FC<IconProps> = ({ size, color, onClick, className }) => {
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
      <path d="M16.9002 4.02044C16.6629 2.89664 16.0466 1.88854 15.1545 1.16511C14.2624 0.441677 13.1487 0.046875 12.0002 0.046875C10.8516 0.046875 9.73795 0.441677 8.84585 1.16511C7.95374 1.88854 7.33742 2.89664 7.10018 4.02044C6.17194 4.09392 5.27751 4.40161 4.50052 4.91474C3.72352 5.42786 3.08935 6.12965 2.65731 6.95448C2.22526 7.77932 2.00945 8.70025 2.03007 9.63116C2.05068 10.5621 2.30704 11.4725 2.77517 12.2774L9.01918 22.3334C9.33626 22.8373 9.77593 23.2525 10.2971 23.5403C10.8182 23.8281 11.4038 23.9791 11.9992 23.9791C12.5945 23.9791 13.1801 23.8281 13.7013 23.5403C14.2224 23.2525 14.6621 22.8373 14.9792 22.3334L21.2402 12.2534C21.7028 11.4481 21.9543 10.5388 21.9711 9.61021C21.988 8.68159 21.7697 7.76379 21.3366 6.94218C20.9035 6.12058 20.2696 5.42186 19.494 4.91102C18.7183 4.40018 17.826 4.09382 16.9002 4.02044V4.02044ZM20.0002 9.50044C19.9981 9.6927 19.9793 9.88441 19.9442 10.0734C17.7698 10.5808 15.5515 10.8768 13.3202 10.9574C11.3292 5.64744 19.5932 3.84244 20.0002 9.50044ZM12.0002 2.00044C12.6631 2.00297 13.3065 2.22503 13.8299 2.63192C14.3533 3.0388 14.7272 3.6076 14.8932 4.24944C13.7237 4.60706 12.7062 5.3429 12.0002 6.34144C11.2942 5.3429 10.2766 4.60706 9.10718 4.24944C9.27313 3.6076 9.64701 3.0388 10.1704 2.63192C10.6938 2.22503 11.3372 2.00297 12.0002 2.00044V2.00044ZM7.50018 6.00044C8.08461 6.00518 8.65866 6.15549 9.17041 6.4378C9.68217 6.7201 10.1155 7.12549 10.4312 7.61732C10.747 8.10915 10.9352 8.67191 10.9788 9.25474C11.0225 9.83756 10.9202 10.4221 10.6812 10.9554C8.45065 10.8683 6.23308 10.5737 4.05717 10.0754C3.9738 9.57485 4.00028 9.06212 4.13479 8.57278C4.26929 8.08345 4.5086 7.62921 4.83612 7.24157C5.16365 6.85392 5.57155 6.54214 6.03157 6.32783C6.49158 6.11352 6.99269 6.00181 7.50018 6.00044V6.00044ZM13.2782 21.2864C13.1374 21.4964 12.947 21.6685 12.724 21.7875C12.5009 21.9064 12.252 21.9687 11.9992 21.9687C11.7464 21.9687 11.4974 21.9064 11.2744 21.7875C11.0513 21.6685 10.861 21.4964 10.7202 21.2864L5.17017 12.3464C9.6847 13.1724 14.3116 13.1724 18.8262 12.3464L13.2782 21.2864Z" />
    </svg>
  );
};
export default IceCreamIcon;