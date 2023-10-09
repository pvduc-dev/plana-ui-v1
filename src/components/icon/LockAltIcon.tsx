/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const LockAltIcon: FC<IconProps> = ({ size, color, onClick, className }) => {
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
      <g clipPath="url(#clip0_403_2972)">
        <path d="M12 0C9.62663 0 7.30655 0.703788 5.33316 2.02236C3.35977 3.34094 1.8217 5.21509 0.913451 7.4078C0.00519943 9.60051 -0.232441 12.0133 0.230582 14.3411C0.693605 16.6689 1.83649 18.8071 3.51472 20.4853C5.19295 22.1635 7.33115 23.3064 9.65892 23.7694C11.9867 24.2324 14.3995 23.9948 16.5922 23.0866C18.7849 22.1783 20.6591 20.6402 21.9776 18.6668C23.2962 16.6935 24 14.3734 24 12C23.9966 8.81846 22.7312 5.76821 20.4815 3.51852C18.2318 1.26883 15.1815 0.00344108 12 0V0ZM12 22C10.0222 22 8.08879 21.4135 6.4443 20.3147C4.79981 19.2159 3.51809 17.6541 2.76121 15.8268C2.00433 13.9996 1.8063 11.9889 2.19215 10.0491C2.578 8.10929 3.53041 6.32746 4.92894 4.92893C6.32746 3.53041 8.10929 2.578 10.0491 2.19215C11.9889 1.8063 13.9996 2.00433 15.8268 2.76121C17.6541 3.51808 19.2159 4.79981 20.3147 6.4443C21.4135 8.08879 22 10.0222 22 12C21.9971 14.6513 20.9426 17.1931 19.0679 19.0679C17.1931 20.9426 14.6513 21.9971 12 22V22ZM12 7C11.2932 6.99866 10.6087 7.24752 10.0678 7.7025C9.52684 8.15748 9.16439 8.78922 9.04462 9.48582C8.92484 10.1824 9.05547 10.8989 9.41337 11.5085C9.77126 12.118 10.3333 12.5812 11 12.816V16C11 16.2652 11.1054 16.5196 11.2929 16.7071C11.4804 16.8946 11.7348 17 12 17C12.2652 17 12.5196 16.8946 12.7071 16.7071C12.8946 16.5196 13 16.2652 13 16V12.816C13.6667 12.5812 14.2288 12.118 14.5866 11.5085C14.9445 10.8989 15.0752 10.1824 14.9554 9.48582C14.8356 8.78922 14.4732 8.15748 13.9322 7.7025C13.3913 7.24752 12.7068 6.99866 12 7V7ZM12 11C11.8022 11 11.6089 10.9414 11.4444 10.8315C11.28 10.7216 11.1518 10.5654 11.0761 10.3827C11.0004 10.2 10.9806 9.99889 11.0192 9.80491C11.0578 9.61093 11.153 9.43275 11.2929 9.29289C11.4328 9.15304 11.6109 9.0578 11.8049 9.01922C11.9989 8.98063 12.2 9.00043 12.3827 9.07612C12.5654 9.15181 12.7216 9.27998 12.8315 9.44443C12.9414 9.60888 13 9.80222 13 10C13 10.2652 12.8946 10.5196 12.7071 10.7071C12.5196 10.8946 12.2652 11 12 11Z" />
      </g>
      <defs>
        <clipPath id="clip0_403_2972">
          <rect
            width={24}
            height={24}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default LockAltIcon;