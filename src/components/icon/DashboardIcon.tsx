/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const DashboardIcon: FC<IconProps> = ({ size, color, onClick, className }) => {
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
      <g clipPath="url(#clip0_403_3076)">
        <path d="M23.8999 11.4372C23.507 8.4126 21.9771 5.65112 19.6212 3.71402C17.2654 1.77693 14.2603 0.809592 11.2168 1.00863C8.17329 1.20767 5.31978 2.55814 3.23625 4.78556C1.15273 7.01298 -0.00446334 9.95019 -0.000109051 13.0002C-0.00587345 14.6327 0.324949 16.2489 0.971706 17.7478C1.61846 19.2468 2.56727 20.5963 3.75889 21.7122C4.67023 22.5559 5.87105 23.0171 7.11289 23.0002H16.8799C18.1919 23.0033 19.4523 22.4899 20.3889 21.5712C21.7236 20.2726 22.7362 18.68 23.3458 16.9204C23.9554 15.1609 24.1452 13.2831 23.8999 11.4372V11.4372ZM18.9909 20.1372C18.4283 20.6915 17.6697 21.0016 16.8799 21.0002H7.11289C6.38216 21.0152 5.67338 20.7501 5.13189 20.2592C4.13917 19.3293 3.34871 18.2048 2.80985 16.9559C2.27098 15.707 1.99526 14.3604 1.99989 13.0002C2.00087 11.5924 2.29866 10.2007 2.87383 8.91579C3.44899 7.63088 4.28861 6.48169 5.33789 5.54318C7.16104 3.89909 9.53093 2.99255 11.9859 3.00018C12.3781 3.00035 12.7701 3.02238 13.1599 3.06618C15.0355 3.28402 16.811 4.02874 18.2808 5.21411C19.7506 6.39947 20.8545 7.97696 21.4647 9.76387C22.0749 11.5508 22.1664 13.474 21.7286 15.3108C21.2907 17.1475 20.3415 18.8227 18.9909 20.1422V20.1372ZM7.80689 17.2852C7.99652 17.4708 8.10463 17.7242 8.10745 17.9896C8.11026 18.2549 8.00754 18.5106 7.82189 18.7002C7.63624 18.8898 7.38286 18.9979 7.1175 19.0007C6.85213 19.0036 6.59652 18.9008 6.40689 18.7152C5.27185 17.6034 4.49359 16.1787 4.1713 14.6229C3.84901 13.0671 3.99731 11.4505 4.59728 9.9793C5.19724 8.50808 6.22171 7.24882 7.54009 6.36206C8.85846 5.4753 10.411 5.0012 11.9999 5.00018C12.3823 5.00007 12.7643 5.02714 13.1429 5.08118C13.2729 5.09993 13.398 5.14411 13.5109 5.2112C13.6239 5.27829 13.7225 5.36698 13.8011 5.47219C13.8798 5.57741 13.9369 5.6971 13.9693 5.82441C14.0017 5.95172 14.0087 6.08417 13.9899 6.21418C13.9727 6.34491 13.9295 6.47088 13.8629 6.58467C13.7962 6.69846 13.7075 6.79778 13.602 6.87679C13.4964 6.9558 13.3761 7.01291 13.2482 7.04474C13.1202 7.07658 12.9872 7.08251 12.8569 7.06218C11.6054 6.88342 10.3294 7.10454 9.21098 7.69399C8.09259 8.28343 7.18896 9.21107 6.62905 10.3445C6.06914 11.478 5.88155 12.7594 6.09307 14.0058C6.30458 15.2522 6.90439 16.3999 7.80689 17.2852V17.2852ZM19.9189 11.8572C19.9729 12.2358 20 12.6177 19.9999 13.0002C20.0031 14.0659 19.7916 15.1213 19.3778 16.1033C18.9641 17.0854 18.3567 17.9741 17.5919 18.7162C17.402 18.9018 17.1461 19.0044 16.8806 19.0014C16.615 18.9984 16.3615 18.8901 16.1759 18.7002C15.9902 18.5103 15.8876 18.2544 15.8906 17.9889C15.8936 17.7233 16.002 17.4698 16.1919 17.2842C16.8675 16.6256 17.3778 15.8165 17.6809 14.923C17.984 14.0295 18.0714 13.0769 17.9359 12.1432C17.898 11.8805 17.9659 11.6135 18.1249 11.4009C18.2838 11.1883 18.5207 11.0476 18.7834 11.0097C19.0461 10.9718 19.3131 11.0397 19.5257 11.1987C19.7382 11.3576 19.879 11.5945 19.9169 11.8572H19.9189ZM13.9259 12.4882C14.0462 12.9209 14.0199 13.3814 13.8509 13.7975C13.682 14.2137 13.3799 14.5623 12.992 14.7887C12.6041 15.0151 12.1521 15.1067 11.7066 15.0491C11.2611 14.9915 10.8473 14.788 10.5297 14.4704C10.2121 14.1528 10.0086 13.7389 9.95099 13.2935C9.89341 12.848 9.98498 12.396 10.2114 12.0081C10.4378 11.6201 10.7863 11.3181 11.2025 11.1492C11.6187 10.9802 12.0791 10.9538 12.5119 11.0742L16.2929 7.29318C16.3851 7.19767 16.4955 7.12149 16.6175 7.06908C16.7395 7.01667 16.8707 6.98909 17.0035 6.98793C17.1363 6.98678 17.2679 7.01208 17.3908 7.06236C17.5137 7.11264 17.6254 7.18689 17.7193 7.28079C17.8132 7.37468 17.8874 7.48633 17.9377 7.60923C17.988 7.73212 18.0133 7.8638 18.0121 7.99658C18.011 8.12936 17.9834 8.26058 17.931 8.38259C17.8786 8.50459 17.8024 8.61494 17.7069 8.70718L13.9259 12.4882Z" />
      </g>
      <defs>
        <clipPath id="clip0_403_3076">
          <rect
            width={24}
            height={24}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default DashboardIcon;
