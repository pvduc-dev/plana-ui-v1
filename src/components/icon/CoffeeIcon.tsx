/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const CoffeeIcon: FC<IconProps> = ({ size, color, onClick, className }) => {
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
      <g clipPath="url(#clip0_403_3073)">
        <path d="M23.0001 5C23.0001 4.20435 22.684 3.44129 22.1214 2.87868C21.5588 2.31607 20.7957 2 20.0001 2H19.8291C19.6215 1.41549 19.2382 0.909511 18.7317 0.551443C18.2252 0.193376 17.6203 0.000756748 17.0001 0L7.00007 0C6.3798 0.000756748 5.77495 0.193376 5.26846 0.551443C4.76197 0.909511 4.37866 1.41549 4.17107 2H4.00007C3.39394 2.00399 2.80323 2.1915 2.30577 2.53783C1.8083 2.88415 1.42742 3.37305 1.21328 3.94011C0.999143 4.50717 0.961803 5.1258 1.10618 5.7145C1.25056 6.3032 1.56987 6.83435 2.02207 7.238L3.57007 19.62C3.72262 20.8286 4.31057 21.9402 5.22379 22.7464C6.13702 23.5527 7.31286 23.9984 8.53107 24H15.4691C16.6872 23.9982 17.863 23.5524 18.7761 22.7462C19.6893 21.94 20.2773 20.8285 20.4301 19.62L21.9781 7.238C22.2979 6.95918 22.5545 6.6153 22.7307 6.22935C22.907 5.84341 22.9988 5.42428 23.0001 5ZM19.1171 14H15.9171C15.0251 8.713 8.97007 8.716 8.07907 14H4.87907L4.12907 8H19.8671L19.1171 14ZM14.0001 15C13.8951 18.954 10.1051 18.953 10.0001 15C10.1051 11.046 13.9001 11.047 14.0001 15ZM4.00007 4H5.00007C5.26529 4 5.51964 3.89464 5.70718 3.70711C5.89471 3.51957 6.00007 3.26522 6.00007 3C6.00007 2.73478 6.10543 2.48043 6.29297 2.29289C6.4805 2.10536 6.73486 2 7.00007 2H17.0001C17.2653 2 17.5196 2.10536 17.7072 2.29289C17.8947 2.48043 18.0001 2.73478 18.0001 3C18.0001 3.26522 18.1054 3.51957 18.293 3.70711C18.4805 3.89464 18.7349 4 19.0001 4H20.0001C20.2653 4 20.5196 4.10536 20.7072 4.29289C20.8947 4.48043 21.0001 4.73478 21.0001 5C21.0001 5.26522 20.8947 5.51957 20.7072 5.70711C20.5196 5.89464 20.2653 6 20.0001 6H4.00007C3.73486 6 3.4805 5.89464 3.29297 5.70711C3.10543 5.51957 3.00007 5.26522 3.00007 5C3.00007 4.73478 3.10543 4.48043 3.29297 4.29289C3.4805 4.10536 3.73486 4 4.00007 4V4ZM18.4451 19.372C18.3544 20.0974 18.002 20.7648 17.454 21.2487C16.906 21.7326 16.2002 21.9998 15.4691 22H8.53107C7.79982 22 7.09374 21.733 6.54553 21.2491C5.99732 20.7651 5.64475 20.0976 5.55407 19.372L5.13307 16H8.08107C8.97307 21.287 15.0291 21.284 15.9191 16H18.8671L18.4451 19.372Z" />
      </g>
      <defs>
        <clipPath id="clip0_403_3073">
          <rect
            width={24}
            height={24}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default CoffeeIcon;
