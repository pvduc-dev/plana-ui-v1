/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const FlameIcon: FC<IconProps> = ({ size, color, onClick, className }) => {
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
      <g clipPath="url(#clip0_403_3009)">
        <path d="M16.6301 2.90015C15.8431 2.23316 15.0181 1.53215 14.1781 0.768133C13.5337 0.182101 12.6634 -0.0894925 11.8001 0.0261481C10.9635 0.136679 10.2191 0.612883 9.7681 1.32613C8.57607 3.31813 7.73326 5.49918 7.27609 7.77515C7.0967 7.51612 6.93755 7.24368 6.80007 6.96013C6.32645 5.96226 5.13357 5.53724 4.1357 6.01087C3.8941 6.12552 3.67796 6.28748 3.50007 6.48712C1.82274 8.20115 0.892883 10.51 0.914071 12.9081C0.866399 17.9487 4.25691 22.3742 9.13609 23.6401C10.0439 23.8686 10.976 23.9867 11.9121 23.9921C11.9421 23.9921 12.2611 23.9891 12.3901 23.9801C18.3601 23.7868 23.0975 18.8872 23.0901 12.9141C23.0861 8.38415 20.0941 5.84413 16.6301 2.90015ZM11.8871 21.9851C11.1429 21.9285 10.4074 21.627 9.8521 21.1791C8.98257 20.5638 8.40718 19.6616 8.27012 18.6221C8.1001 17.0001 9.10013 14.8791 11.1431 12.4831C11.3574 12.2329 11.6708 12.0895 12.0001 12.0911C12.3253 12.0888 12.6345 12.2318 12.8431 12.4811C14.7151 14.7031 15.7432 16.7531 15.7432 18.2541C15.7374 20.2261 14.196 21.7861 12.2332 21.9761C12.147 21.9845 12.0001 21.9971 11.8871 21.9851ZM17.5761 20.0831C17.5171 20.1291 17.4521 20.1661 17.3921 20.2101C17.6229 19.583 17.7417 18.9203 17.7431 18.2521C17.7431 15.7251 15.9081 13.0171 14.3701 11.1901C13.7817 10.4932 12.9162 10.0908 12.0041 10.0901H12.0001C11.0862 10.0884 10.2175 10.488 9.6241 11.1831C7.1791 14.0471 6.05612 16.62 6.28609 18.831C6.3407 19.3443 6.4718 19.8465 6.6751 20.3211C4.30051 18.6005 2.90134 15.8404 2.91709 12.9081C2.89777 11.0031 3.64899 9.17113 5.00007 7.82807C5.23074 8.3076 5.50773 8.76341 5.82709 9.18909C6.2657 9.78206 7.01499 10.0572 7.73307 9.88907C8.46521 9.72712 9.03366 9.14966 9.18409 8.41509C9.58585 6.29146 10.3536 4.2538 11.4531 2.3931C11.5884 2.18038 11.8118 2.03948 12.0621 2.0091C12.3418 1.97146 12.6237 2.05973 12.8321 2.25009C13.6901 3.03009 14.5321 3.75009 15.3321 4.4271C18.6701 7.2621 21.0831 9.31012 21.0831 12.9141C21.0917 15.7188 19.797 18.3684 17.5791 20.0851L17.5761 20.0831Z" />
      </g>
      <defs>
        <clipPath id="clip0_403_3009">
          <rect
            width={24}
            height={24}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default FlameIcon;
