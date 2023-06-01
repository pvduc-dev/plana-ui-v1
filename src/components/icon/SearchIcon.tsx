/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const SearchIcon: FC<IconProps> = ({ size, color, onClick, className }) => {
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
      <g clipPath="url(#clip0_403_2886)">
        <path d="M23.7068 22.2937L17.7378 16.3247C19.3644 14.3353 20.1642 11.7968 19.9716 9.23426C19.7791 6.67173 18.609 4.28123 16.7034 2.55722C14.7977 0.833208 12.3024 -0.0924103 9.73342 -0.0281784C7.16447 0.0360534 4.71849 1.08522 2.9014 2.90231C1.08431 4.7194 0.0351379 7.16539 -0.029094 9.73434C-0.0933258 12.3033 0.832293 14.7987 2.5563 16.7043C4.28031 18.6099 6.67081 19.78 9.23334 19.9725C11.7959 20.1651 14.3344 19.3653 16.3238 17.7387L22.2928 23.7077C22.4814 23.8899 22.734 23.9907 22.9962 23.9884C23.2584 23.9861 23.5092 23.8809 23.6946 23.6955C23.88 23.5101 23.9852 23.2593 23.9875 22.9971C23.9897 22.7349 23.8889 22.4823 23.7068 22.2937ZM9.99978 18.0007C8.41753 18.0007 6.87081 17.5315 5.55522 16.6525C4.23963 15.7734 3.21425 14.524 2.60875 13.0622C2.00324 11.6004 1.84482 9.99182 2.1535 8.43998C2.46218 6.88813 3.22411 5.46266 4.34293 4.34384C5.46175 3.22502 6.88721 2.4631 8.43906 2.15442C9.99091 1.84573 11.5994 2.00416 13.0613 2.60966C14.5231 3.21516 15.7725 4.24054 16.6515 5.55614C17.5306 6.87173 17.9998 8.41845 17.9998 10.0007C17.9974 12.1217 17.1538 14.1551 15.654 15.6549C14.1542 17.1547 12.1208 17.9983 9.99978 18.0007Z" />
      </g>
      <defs>
        <clipPath id="clip0_403_2886">
          <rect
            width={24}
            height={24}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default SearchIcon;
