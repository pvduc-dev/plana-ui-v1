/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const RotateRightIcon: FC<IconProps> = ({
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
      <g clipPath="url(#clip0_403_3203)">
        <path d="M21.9619 12.875C21.7691 15.1548 20.8026 17.3002 19.2228 18.9552C17.643 20.6102 15.5449 21.6754 13.2765 21.9739C11.0081 22.2725 8.70575 21.7866 6.75152 20.5967C4.79728 19.4069 3.30857 17.5846 2.53238 15.4324C1.7562 13.2801 1.73918 10.9271 2.48417 8.76383C3.22915 6.60055 4.69135 4.75699 6.62818 3.53901C8.56501 2.32103 10.86 1.80184 13.1325 2.06758C15.405 2.33332 17.5183 3.36801 19.1219 5H15.9999C15.7347 5 15.4803 5.10536 15.2928 5.29289C15.1052 5.48043 14.9999 5.73478 14.9999 6C14.9999 6.26522 15.1052 6.51957 15.2928 6.70711C15.4803 6.89464 15.7347 7 15.9999 7H20.1429C20.6353 6.99974 21.1075 6.804 21.4557 6.45581C21.8039 6.10761 21.9996 5.63543 21.9999 5.143V1C21.9999 0.734784 21.8945 0.48043 21.707 0.292893C21.5195 0.105357 21.2651 0 20.9999 0V0C20.7347 0 20.4803 0.105357 20.2928 0.292893C20.1052 0.48043 19.9999 0.734784 19.9999 1V3.078C17.9886 1.28073 15.4298 0.214484 12.7374 0.0517113C10.0449 -0.111061 7.37634 0.639157 5.16314 2.18103C2.94995 3.72291 1.32158 5.96628 0.541399 8.54832C-0.23878 11.1304 -0.125152 13.9001 0.863907 16.4095C1.85297 18.919 3.65962 21.0214 5.99168 22.3768C8.32373 23.7322 11.0448 24.2614 13.7149 23.8786C16.3849 23.4958 18.8477 22.2236 20.7051 20.2676C22.5624 18.3116 23.7057 15.7863 23.9499 13.1C23.9628 12.9607 23.9466 12.8203 23.9022 12.6877C23.8579 12.555 23.7864 12.4331 23.6923 12.3296C23.5982 12.2261 23.4836 12.1434 23.3558 12.0866C23.228 12.0299 23.0897 12.0004 22.9499 12C22.7059 11.9971 22.4696 12.085 22.287 12.2468C22.1043 12.4085 21.9885 12.6325 21.9619 12.875V12.875Z" />
      </g>
      <defs>
        <clipPath id="clip0_403_3203">
          <rect
            width={24}
            height={24}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default RotateRightIcon;