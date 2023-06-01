/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const BilliardIcon: FC<IconProps> = ({ size, color, onClick, className }) => {
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
      <g clipPath="url(#clip0_403_3158)">
        <path d="M12 24C9.62663 24 7.30655 23.2962 5.33316 21.9776C3.35977 20.6591 1.8217 18.7849 0.913451 16.5922C0.00519943 14.3995 -0.232441 11.9867 0.230582 9.65892C0.693605 7.33115 1.83649 5.19295 3.51472 3.51472C5.19295 1.83649 7.33115 0.693605 9.65892 0.230582C11.9867 -0.232441 14.3995 0.00519943 16.5922 0.913451C18.7849 1.8217 20.6591 3.35977 21.9776 5.33316C23.2962 7.30655 24 9.62663 24 12C23.9966 15.1815 22.7312 18.2318 20.4815 20.4815C18.2318 22.7312 15.1815 23.9966 12 24V24ZM12 2.00001C10.0222 2.00001 8.08879 2.5865 6.4443 3.68531C4.79981 4.78412 3.51809 6.34591 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C21.9971 9.34873 20.9426 6.80689 19.0679 4.93215C17.1931 3.05742 14.6513 2.00292 12 2.00001V2.00001ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88744 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88744 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00347 15.0615 4.60897C16.5233 5.21447 17.7727 6.23985 18.6518 7.55544C19.5308 8.87104 20 10.4178 20 12C19.9976 14.121 19.154 16.1545 17.6542 17.6542C16.1545 19.154 14.121 19.9976 12 20V20ZM12 6.00001C10.8133 6.00001 9.65328 6.3519 8.66658 7.01119C7.67989 7.67048 6.91085 8.60755 6.45673 9.70391C6.0026 10.8003 5.88378 12.0067 6.11529 13.1705C6.3468 14.3344 6.91825 15.4035 7.75736 16.2426C8.59648 17.0818 9.66558 17.6532 10.8295 17.8847C11.9934 18.1162 13.1997 17.9974 14.2961 17.5433C15.3925 17.0892 16.3295 16.3201 16.9888 15.3334C17.6481 14.3467 18 13.1867 18 12C17.9984 10.4092 17.3658 8.88399 16.2409 7.75912C15.116 6.63424 13.5908 6.00159 12 6.00001V6.00001ZM11.857 15.515L14.857 10.515C14.9482 10.3633 14.9974 10.1901 14.9997 10.0131C15.002 9.83613 14.9574 9.6617 14.8702 9.50765C14.7831 9.35359 14.6566 9.22542 14.5037 9.13624C14.3508 9.04705 14.177 9.00004 14 9.00001H10C9.73479 9.00001 9.48044 9.10536 9.2929 9.2929C9.10536 9.48044 9.00001 9.73479 9.00001 10C9.00001 10.2652 9.10536 10.5196 9.2929 10.7071C9.48044 10.8946 9.73479 11 10 11H12.234L10.143 14.485C10.0725 14.5976 10.0252 14.7231 10.0038 14.8542C9.98237 14.9853 9.98729 15.1194 10.0183 15.2486C10.0492 15.3778 10.1056 15.4995 10.1841 15.6066C10.2627 15.7138 10.3618 15.8042 10.4756 15.8726C10.5895 15.941 10.7158 15.9861 10.8473 16.0051C10.9788 16.0242 11.1127 16.0169 11.2413 15.9836C11.3699 15.9503 11.4906 15.8917 11.5963 15.8112C11.702 15.7308 11.7906 15.6301 11.857 15.515V15.515Z" />
      </g>
      <defs>
        <clipPath id="clip0_403_3158">
          <rect
            width={24}
            height={24}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default BilliardIcon;
