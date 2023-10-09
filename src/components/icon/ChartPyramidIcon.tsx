/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const ChartPyramidIcon: FC<IconProps> = ({
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
      <g clipPath="url(#clip0_403_2888)">
        <path d="M23.4131 18.2399L15.5931 2.27485C15.2639 1.60259 14.7528 1.03618 14.1177 0.640007C13.4826 0.243838 12.7491 0.0338135 12.0006 0.0338135C11.2521 0.0338135 10.5186 0.243838 9.8835 0.640007C9.24842 1.03618 8.73724 1.60259 8.40809 2.27485L0.587087 18.2399C0.288283 18.8497 0.149659 19.5256 0.184279 20.2038C0.218898 20.882 0.425621 21.5402 0.784968 22.1165C1.14431 22.6927 1.64445 23.168 2.23826 23.4975C2.83207 23.827 3.49999 23.9999 4.17909 23.9999H19.8201C20.4993 24 21.1673 23.8273 21.7613 23.4978C22.3552 23.1684 22.8555 22.6931 23.2149 22.1169C23.5744 21.5406 23.7812 20.8823 23.8159 20.204C23.8506 19.5257 23.7119 18.8498 23.4131 18.2399ZM19.6001 14.9999H4.40009L6.85009 9.99985H17.1501L19.6001 14.9999ZM10.2001 3.15485C10.3647 2.81886 10.6203 2.53578 10.9378 2.33779C11.2553 2.1398 11.6219 2.03484 11.9961 2.03484C12.3702 2.03484 12.7369 2.1398 13.0544 2.33779C13.3719 2.53578 13.6275 2.81886 13.7921 3.15485L16.1691 7.99985H7.83009L10.2001 3.15485ZM21.5141 21.0549C21.3368 21.3459 21.0868 21.5857 20.7888 21.7509C20.4907 21.916 20.1548 22.0008 19.8141 21.9969H4.17909C3.8392 21.9975 3.50474 21.9116 3.2073 21.7471C2.90985 21.5826 2.65923 21.3451 2.47908 21.0569C2.29894 20.7686 2.19523 20.4392 2.17773 20.0998C2.16024 19.7604 2.22953 19.4221 2.37909 19.1169L3.42109 16.9999H20.5781L21.6161 19.1199C21.7693 19.4236 21.8408 19.762 21.8236 20.1018C21.8064 20.4416 21.7011 20.7711 21.5181 21.0579L21.5141 21.0549Z" />
      </g>
      <defs>
        <clipPath id="clip0_403_2888">
          <rect
            width={24}
            height={24}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default ChartPyramidIcon;