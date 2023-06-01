/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const PackageIcon: FC<IconProps> = ({ size, color, onClick, className }) => {
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
      <g clipPath="url(#clip0_403_2897)">
        <path d="M21 7.99978H17C16.2044 7.99978 15.4413 8.31585 14.8787 8.87846C14.3161 9.44107 14 10.2041 14 10.9998V15.9998H12V11.9998C11.9994 10.9263 11.7108 9.87268 11.1643 8.94873C10.6178 8.02478 9.83344 7.26437 8.893 6.74678C9.43391 6.18029 9.7966 5.46746 9.93607 4.69672C10.0755 3.92598 9.98567 3.13125 9.67759 2.41112C9.36952 1.691 8.8568 1.07717 8.20304 0.64578C7.54928 0.214393 6.78326 -0.015564 6 -0.015564C5.21674 -0.015564 4.45072 0.214393 3.79696 0.64578C3.1432 1.07717 2.63048 1.691 2.32241 2.41112C2.01433 3.13125 1.92445 3.92598 2.06393 4.69672C2.2034 5.46746 2.56609 6.18029 3.107 6.74678C2.16656 7.26437 1.3822 8.02478 0.835712 8.94873C0.289224 9.87268 0.000622181 10.9263 0 11.9998L0 22.9998C0 23.265 0.105357 23.5194 0.292893 23.7069C0.48043 23.8944 0.734784 23.9998 1 23.9998C1.26522 23.9998 1.51957 23.8944 1.70711 23.7069C1.89464 23.5194 2 23.265 2 22.9998V17.9998H22V22.9998C22 23.265 22.1054 23.5194 22.2929 23.7069C22.4804 23.8944 22.7348 23.9998 23 23.9998C23.2652 23.9998 23.5196 23.8944 23.7071 23.7069C23.8946 23.5194 24 23.265 24 22.9998V10.9998C24 10.2041 23.6839 9.44107 23.1213 8.87846C22.5587 8.31585 21.7956 7.99978 21 7.99978ZM4 3.99978C4 3.60422 4.1173 3.21754 4.33706 2.88864C4.55682 2.55974 4.86918 2.3034 5.23463 2.15202C5.60009 2.00065 6.00222 1.96104 6.39018 2.03821C6.77814 2.11538 7.13451 2.30586 7.41421 2.58557C7.69392 2.86527 7.8844 3.22164 7.96157 3.6096C8.03874 3.99756 7.99913 4.3997 7.84776 4.76515C7.69638 5.1306 7.44004 5.44296 7.11114 5.66272C6.78224 5.88248 6.39556 5.99978 6 5.99978C5.46957 5.99978 4.96086 5.78907 4.58579 5.414C4.21071 5.03892 4 4.53021 4 3.99978V3.99978ZM6 7.99978C7.06087 7.99978 8.07828 8.42121 8.82843 9.17136C9.57857 9.9215 10 10.9389 10 11.9998V15.9998H2V11.9998C2 10.9389 2.42143 9.9215 3.17157 9.17136C3.92172 8.42121 4.93913 7.99978 6 7.99978V7.99978ZM16 15.9998V10.9998C16 10.7346 16.1054 10.4802 16.2929 10.2927C16.4804 10.1051 16.7348 9.99978 17 9.99978H18V10.9998C18 11.265 18.1054 11.5194 18.2929 11.7069C18.4804 11.8944 18.7348 11.9998 19 11.9998C19.2652 11.9998 19.5196 11.8944 19.7071 11.7069C19.8946 11.5194 20 11.265 20 10.9998V9.99978H21C21.2652 9.99978 21.5196 10.1051 21.7071 10.2927C21.8946 10.4802 22 10.7346 22 10.9998V15.9998H16Z" />
      </g>
      <defs>
        <clipPath id="clip0_403_2897">
          <rect
            width={24}
            height={24}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default PackageIcon;
