/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const BellSchoolIcon: FC<IconProps> = ({ size, color, onClick, className }) => {
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
      <g clipPath="url(#clip0_403_2931)">
        <path d="M10.0001 8.00007C10.3957 8.00007 10.7824 8.11737 11.1113 8.33713C11.4402 8.5569 11.6965 8.86925 11.8479 9.2347C11.9993 9.60016 12.0389 10.0023 11.9617 10.3903C11.8845 10.7782 11.6941 11.1346 11.4144 11.4143C11.1346 11.694 10.7783 11.8845 10.3903 11.9616C10.0024 12.0388 9.60022 11.9992 9.23477 11.8478C8.86932 11.6965 8.55696 11.4401 8.3372 11.1112C8.11744 10.7823 8.00014 10.3956 8.00014 10.0001C8.00014 9.46964 8.21085 8.96093 8.58593 8.58586C8.961 8.21079 9.46971 8.00007 10.0001 8.00007V8.00007ZM24.0001 10.0001C23.9901 13.2937 22.8411 16.4825 20.7479 19.0254C18.6548 21.5684 15.7464 23.3091 12.5161 23.9521C12.0884 24.0302 11.6486 24.0128 11.2283 23.9012C10.8081 23.7895 10.4177 23.5863 10.0851 23.3061C9.74548 23.0232 9.47222 22.6692 9.28471 22.2689C9.0972 21.8687 9.00005 21.4321 9.00014 20.9901V19.9491C7.31732 19.7811 5.7046 19.189 4.3128 18.2283C2.92099 17.2676 1.79557 15.9696 1.04179 14.4557C0.288001 12.9418 -0.0695267 11.2614 0.00264053 9.57181C0.0748077 7.88217 0.574312 6.23843 1.45444 4.79432C2.33457 3.3502 3.56657 2.15289 5.03522 1.31435C6.50387 0.475806 8.1612 0.0234335 9.85221 -0.000466033C11.5432 -0.0243656 13.2127 0.380989 14.7044 1.17769C16.1962 1.97439 17.4616 3.13641 18.3821 4.55507C18.4538 4.66551 18.503 4.78898 18.5269 4.91843C18.5508 5.04788 18.549 5.18077 18.5215 5.30952C18.4941 5.43827 18.4416 5.56035 18.367 5.6688C18.2923 5.77725 18.1971 5.86994 18.0866 5.94157C17.9762 6.01321 17.8527 6.06239 17.7233 6.08631C17.5938 6.11023 17.4609 6.10841 17.3322 6.08098C17.2034 6.05354 17.0814 6.00101 16.9729 5.92638C16.8645 5.85176 16.7718 5.75651 16.7001 5.64607C15.761 4.19847 14.379 3.09331 12.7603 2.4955C11.1416 1.8977 9.37302 1.83929 7.71841 2.32899C6.0638 2.81869 4.61188 3.83025 3.57928 5.21273C2.54668 6.59522 1.98875 8.27452 1.98875 10.0001C1.98875 11.7256 2.54668 13.4049 3.57928 14.7874C4.61188 16.1699 6.0638 17.1815 7.71841 17.6712C9.37302 18.1609 11.1416 18.1024 12.7603 17.5046C14.379 16.9068 15.761 15.8017 16.7001 14.3541C16.7718 14.244 16.8644 14.149 16.9727 14.0747C17.081 14.0004 17.2029 13.9481 17.3315 13.9209C17.46 13.8937 17.5926 13.8921 17.7217 13.9161C17.8509 13.9402 17.974 13.9894 18.0841 14.0611C18.1943 14.1327 18.2892 14.2253 18.3635 14.3337C18.4378 14.442 18.4901 14.5639 18.5173 14.6924C18.5445 14.8209 18.5461 14.9535 18.5221 15.0827C18.498 15.2118 18.4488 15.335 18.3771 15.4451C17.5636 16.6996 16.478 17.7548 15.2009 18.5324C13.9239 19.31 12.4881 19.7901 11.0001 19.9371V20.9901C11.0002 21.1392 11.0332 21.2865 11.0966 21.4215C11.16 21.5564 11.2524 21.6758 11.3671 21.7711C11.4747 21.8635 11.6016 21.9306 11.7384 21.9674C11.8753 22.0043 12.0188 22.01 12.1581 21.9841C14.4346 21.5328 16.5349 20.4413 18.2124 18.8376C19.89 17.234 21.0749 15.1849 21.6281 12.9311C21.4219 12.9764 21.2113 12.9996 21.0001 13.0001C20.4068 13.0001 19.8268 12.8241 19.3334 12.4945C18.8401 12.1648 18.4556 11.6963 18.2285 11.1481C18.0014 10.5999 17.942 9.99674 18.0578 9.4148C18.1735 8.83286 18.4593 8.29831 18.8788 7.87875C19.2984 7.45919 19.8329 7.17347 20.4149 7.05772C20.9968 6.94196 21.6 7.00137 22.1482 7.22843C22.6964 7.4555 23.1649 7.84001 23.4945 8.33336C23.8242 8.82671 24.0001 9.40673 24.0001 10.0001V10.0001ZM22.0001 10.0001C22.0001 9.80229 21.9415 9.60895 21.8316 9.4445C21.7217 9.28005 21.5655 9.15188 21.3828 9.07619C21.2001 9.0005 20.999 8.9807 20.805 9.01929C20.6111 9.05787 20.4329 9.15311 20.293 9.29296C20.1532 9.43282 20.0579 9.611 20.0194 9.80498C19.9808 9.99896 20.0006 10.2 20.0763 10.3828C20.1519 10.5655 20.2801 10.7217 20.4446 10.8315C20.609 10.9414 20.8024 11.0001 21.0001 11.0001C21.2654 11.0001 21.5197 10.8947 21.7072 10.7072C21.8948 10.5196 22.0001 10.2653 22.0001 10.0001Z" />
      </g>
      <defs>
        <clipPath id="clip0_403_2931">
          <rect
            width={24}
            height={24}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default BellSchoolIcon;