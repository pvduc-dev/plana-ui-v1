/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const SunIcon: FC<IconProps> = ({ size, color, onClick, className }) => {
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
      <g clipPath="url(#clip0_403_2830)">
        <path d="M23 11H18.92C18.8421 10.449 18.6981 9.90948 18.491 9.393L22.018 7.349C22.1359 7.28557 22.2398 7.19911 22.3237 7.09476C22.4075 6.99041 22.4695 6.87029 22.5061 6.74152C22.5427 6.61275 22.553 6.47794 22.5365 6.34511C22.52 6.21227 22.477 6.08409 22.41 5.96818C22.3431 5.85228 22.2535 5.75099 22.1467 5.67033C22.0398 5.58967 21.9179 5.53129 21.7881 5.49863C21.6583 5.46597 21.5232 5.45971 21.3909 5.48021C21.2587 5.50072 21.1318 5.54757 21.018 5.618L17.488 7.665C17.1505 7.23872 16.765 6.85283 16.339 6.515L18.385 2.984C18.5082 2.75505 18.5374 2.48712 18.4664 2.23701C18.3954 1.9869 18.2298 1.77428 18.0046 1.64422C17.7795 1.51417 17.5126 1.4769 17.2604 1.54033C17.0083 1.60376 16.7908 1.7629 16.654 1.984L14.607 5.509C14.0906 5.30172 13.551 5.15768 13 5.08V1C13 0.734784 12.8946 0.48043 12.7071 0.292893C12.5196 0.105357 12.2652 0 12 0C11.7348 0 11.4804 0.105357 11.2929 0.292893C11.1054 0.48043 11 0.734784 11 1V5.08C10.449 5.15768 9.90941 5.30172 9.393 5.509L7.349 1.982C7.21221 1.7609 6.99469 1.60176 6.74255 1.53833C6.49042 1.4749 6.22349 1.51217 5.99836 1.64222C5.77323 1.77228 5.60761 1.9849 5.5366 2.23501C5.4656 2.48512 5.49479 2.75305 5.618 2.982L7.664 6.515C7.23801 6.85283 6.85246 7.23872 6.515 7.665L2.985 5.618C2.87116 5.54757 2.74435 5.50072 2.61206 5.48021C2.47978 5.45971 2.34473 5.46597 2.21492 5.49863C2.0851 5.53129 1.96316 5.58967 1.85633 5.67033C1.7495 5.75099 1.65995 5.85228 1.59299 5.96818C1.52603 6.08409 1.48302 6.21227 1.46651 6.34511C1.45001 6.47794 1.46034 6.61275 1.4969 6.74152C1.53346 6.87029 1.5955 6.99041 1.67934 7.09476C1.76318 7.19911 1.86712 7.28557 1.985 7.349L5.509 9.393C5.30195 9.90948 5.15791 10.449 5.08 11H1C0.734784 11 0.48043 11.1054 0.292893 11.2929C0.105357 11.4804 0 11.7348 0 12C0 12.2652 0.105357 12.5196 0.292893 12.7071C0.48043 12.8946 0.734784 13 1 13H5.08C5.15791 13.551 5.30195 14.0905 5.509 14.607L1.982 16.651C1.86412 16.7144 1.76018 16.8009 1.67634 16.9052C1.5925 17.0096 1.53046 17.1297 1.4939 17.2585C1.45734 17.3873 1.44701 17.5221 1.46351 17.6549C1.48002 17.7877 1.52303 17.9159 1.58999 18.0318C1.65695 18.1477 1.7465 18.249 1.85333 18.3297C1.96016 18.4103 2.0821 18.4687 2.21192 18.5014C2.34173 18.534 2.47678 18.5403 2.60906 18.5198C2.74135 18.4993 2.86816 18.4524 2.982 18.382L6.512 16.335C6.84946 16.7613 7.23501 17.1472 7.661 17.485L5.618 21.016C5.49479 21.2449 5.4656 21.5129 5.5366 21.763C5.60761 22.0131 5.77323 22.2257 5.99836 22.3558C6.22349 22.4858 6.49042 22.5231 6.74255 22.4597C6.99469 22.3962 7.21221 22.2371 7.349 22.016L9.393 18.489C9.90947 18.6965 10.449 18.8412 11 18.92V23C11 23.2652 11.1054 23.5196 11.2929 23.7071C11.4804 23.8946 11.7348 24 12 24C12.2652 24 12.5196 23.8946 12.7071 23.7071C12.8946 23.5196 13 23.2652 13 23V18.92C13.5509 18.8419 14.0904 18.6978 14.607 18.491L16.651 22.018C16.7878 22.2391 17.0053 22.3982 17.2574 22.4617C17.5096 22.5251 17.7765 22.4878 18.0016 22.3578C18.2268 22.2277 18.3924 22.0151 18.4634 21.765C18.5344 21.5149 18.5052 21.2469 18.382 21.018L16.336 17.487C16.762 17.1492 17.1475 16.7633 17.485 16.337L21.015 18.384C21.1288 18.4544 21.2557 18.5013 21.3879 18.5218C21.5202 18.5423 21.6553 18.536 21.7851 18.5034C21.9149 18.4707 22.0368 18.4123 22.1437 18.3317C22.2505 18.251 22.3401 18.1497 22.407 18.0338C22.474 17.9179 22.517 17.7897 22.5335 17.6569C22.55 17.5241 22.5397 17.3893 22.5031 17.2605C22.4665 17.1317 22.4045 17.0116 22.3207 16.9072C22.2368 16.8029 22.1329 16.7164 22.015 16.653L18.488 14.609C18.6962 14.092 18.8413 13.5518 18.92 13H23C23.2652 13 23.5196 12.8946 23.7071 12.7071C23.8946 12.5196 24 12.2652 24 12C24 11.7348 23.8946 11.4804 23.7071 11.2929C23.5196 11.1054 23.2652 11 23 11ZM12 17C5.392 16.79 5.394 7.209 12 7C18.608 7.21 18.606 16.791 12 17Z" />
      </g>
      <defs>
        <clipPath id="clip0_403_2830">
          <rect
            width={24}
            height={24}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default SunIcon;