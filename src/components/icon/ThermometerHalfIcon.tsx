/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const ThermometerHalfIcon: FC<IconProps> = ({
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
      <g clipPath="url(#clip0_403_2818)">
        <path d="M13.0001 14.1845V8.00049C13.0001 7.73527 12.8947 7.48092 12.7072 7.29338C12.5197 7.10584 12.2653 7.00049 12.0001 7.00049C11.7349 7.00049 11.4805 7.10584 11.293 7.29338C11.1054 7.48092 11.0001 7.73527 11.0001 8.00049V14.1845C10.3345 14.4203 9.77376 14.8838 9.41682 15.493C9.05987 16.1022 8.92973 16.818 9.04938 17.5139C9.16903 18.2097 9.53077 18.8409 10.0707 19.296C10.6106 19.751 11.294 20.0005 12.0001 20.0005C12.7062 20.0005 13.3895 19.751 13.9295 19.296C14.4694 18.8409 14.8311 18.2097 14.9508 17.5139C15.0704 16.818 14.9403 16.1022 14.5833 15.493C14.2264 14.8838 13.6656 14.4203 13.0001 14.1845V14.1845ZM17.0001 12.1115V5.00049C16.7891 -1.6085 7.20908 -1.5995 7.00008 5.00049V12.1115C6.03541 13.096 5.38289 14.3435 5.12433 15.6974C4.86578 17.0513 5.0127 18.4514 5.54668 19.7222C6.08065 20.993 6.97791 22.0778 8.12595 22.8406C9.27399 23.6035 10.6217 24.0104 12.0001 24.0104C13.3785 24.0104 14.7262 23.6035 15.8742 22.8406C17.0222 22.0778 17.9195 20.993 18.4535 19.7222C18.9875 18.4514 19.1344 17.0513 18.8758 15.6974C18.6173 14.3435 17.9647 13.096 17.0001 12.1115V12.1115ZM12.0001 22.0005C10.9936 21.9892 10.0138 21.6755 9.18793 21.1001C8.36206 20.5247 7.72831 19.7143 7.369 18.7741C7.00969 17.8339 6.94144 16.8073 7.17311 15.8278C7.40477 14.8483 7.92565 13.9611 8.66808 13.2815C8.77254 13.1877 8.85608 13.073 8.91328 12.9448C8.97048 12.8166 9.00006 12.6778 9.00008 12.5375V5.00049C9.00008 4.20484 9.31615 3.44178 9.87876 2.87917C10.4414 2.31656 11.2044 2.00049 12.0001 2.00049C12.7957 2.00049 13.5588 2.31656 14.1214 2.87917C14.684 3.44178 15.0001 4.20484 15.0001 5.00049V12.5375C15.0001 12.6778 15.0297 12.8166 15.0869 12.9448C15.1441 13.073 15.2276 13.1877 15.3321 13.2815C16.0745 13.9611 16.5954 14.8483 16.8271 15.8278C17.0587 16.8073 16.9905 17.8339 16.6312 18.7741C16.2719 19.7143 15.6381 20.5247 14.8122 21.1001C13.9864 21.6755 13.0065 21.9892 12.0001 22.0005Z" />
      </g>
      <defs>
        <clipPath id="clip0_403_2818">
          <rect
            width={24}
            height={24}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default ThermometerHalfIcon;
