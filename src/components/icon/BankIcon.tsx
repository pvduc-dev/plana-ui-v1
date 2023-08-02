/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const BankIcon: FC<IconProps> = ({ size, color, onClick, className }) => {
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
      <g clipPath="url(#clip0_403_2864)">
        <path d="M24 23.0001C24 23.2653 23.8947 23.5196 23.7071 23.7072C23.5196 23.8947 23.2652 24.0001 23 24.0001H1.00002C0.734808 24.0001 0.480454 23.8947 0.292918 23.7072C0.105381 23.5196 2.46239e-05 23.2653 2.46239e-05 23.0001C2.46239e-05 22.7348 0.105381 22.4805 0.292918 22.293C0.480454 22.1054 0.734808 22.0001 1.00002 22.0001H23C23.2652 22.0001 23.5196 22.1054 23.7071 22.293C23.8947 22.4805 24 22.7348 24 23.0001ZM0.291025 8.55206C0.0755469 8.15238 -0.0242807 7.70056 0.00274505 7.24731C0.0297708 6.79405 0.18258 6.35729 0.444025 5.98606C0.871283 5.35917 1.44347 4.84462 2.11202 4.48606L9.61303 0.582055C10.3503 0.198686 11.169 -0.00146484 12 -0.00146484C12.831 -0.00146484 13.6498 0.198686 14.387 0.582055L21.887 4.48906C22.5556 4.84762 23.1278 5.36217 23.555 5.98906C23.8165 6.36029 23.9693 6.79705 23.9963 7.25031C24.0233 7.70356 23.9235 8.15538 23.708 8.55506C23.476 8.99389 23.1281 9.36066 22.7021 9.61544C22.2761 9.87023 21.7884 10.0033 21.292 10.0001H21V18.0001H22C22.2652 18.0001 22.5196 18.1054 22.7071 18.2929C22.8947 18.4805 23 18.7348 23 19.0001C23 19.2653 22.8947 19.5196 22.7071 19.7072C22.5196 19.8947 22.2652 20.0001 22 20.0001H2.00002C1.73481 20.0001 1.48045 19.8947 1.29292 19.7072C1.10538 19.5196 1.00002 19.2653 1.00002 19.0001C1.00002 18.7348 1.10538 18.4805 1.29292 18.2929C1.48045 18.1054 1.73481 18.0001 2.00002 18.0001H3.00002V10.0001H2.70802C2.21118 10.0032 1.72303 9.86976 1.29681 9.61442C0.870596 9.35908 0.522683 8.9916 0.291025 8.55206V8.55206ZM5.00003 18.0001H8.00003V10.0001H5.00003V18.0001ZM10 10.0001V18.0001H14V10.0001H10ZM19 10.0001H16V18.0001H19V10.0001ZM2.06302 7.62506C2.12577 7.74074 2.21914 7.83691 2.33291 7.90306C2.44668 7.9692 2.57645 8.00276 2.70802 8.00006H21.292C21.4236 8.00276 21.5534 7.9692 21.6671 7.90306C21.7809 7.83691 21.8743 7.74074 21.937 7.62506C21.9827 7.54862 22.0048 7.46039 22.0006 7.37143C21.9963 7.28248 21.9658 7.19676 21.913 7.12506C21.6707 6.76497 21.3452 6.4686 20.964 6.26106L13.464 2.35406C13.012 2.11948 12.5103 1.99703 12.001 1.99703C11.4918 1.99703 10.99 2.11948 10.538 2.35406L3.03803 6.26106C2.65701 6.46926 2.33155 6.76591 2.08902 7.12606C2.03611 7.19746 2.00543 7.28288 2.0008 7.37164C1.99618 7.46039 2.01782 7.54854 2.06302 7.62506V7.62506Z" />
      </g>
      <defs>
        <clipPath id="clip0_403_2864">
          <rect
            width={24}
            height={24}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default BankIcon;
