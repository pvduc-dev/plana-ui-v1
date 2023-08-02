/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const WifiAltIcon: FC<IconProps> = ({ size, color, onClick, className }) => {
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
      <g clipPath="url(#clip0_403_2795)">
        <path d="M11 22.9994C11 22.8016 11.0587 22.6083 11.1685 22.4438C11.2784 22.2794 11.4346 22.1512 11.6173 22.0755C11.8001 21.9998 12.0011 21.98 12.1951 22.0186C12.3891 22.0572 12.5673 22.1524 12.7071 22.2923C12.847 22.4321 12.9422 22.6103 12.9808 22.8043C13.0194 22.9983 12.9996 23.1993 12.9239 23.3821C12.8482 23.5648 12.72 23.721 12.5556 23.8309C12.3911 23.9407 12.1978 23.9994 12 23.9994C11.7348 23.9994 11.4804 23.894 11.2929 23.7065C11.1054 23.519 11 23.2646 11 22.9994ZM15.535 20.8774C15.7225 20.6899 15.8278 20.4356 15.8278 20.1704C15.8278 19.9052 15.7225 19.6509 15.535 19.4634C14.5974 18.526 13.3258 17.9995 12 17.9995C10.6742 17.9995 9.40265 18.526 8.46501 19.4634C8.28285 19.652 8.18206 19.9046 8.18434 20.1668C8.18662 20.429 8.29179 20.6798 8.47719 20.8652C8.6626 21.0506 8.91341 21.1558 9.17561 21.1581C9.43781 21.1603 9.69041 21.0595 9.87901 20.8774C10.4507 20.3324 11.2102 20.0284 12 20.0284C12.7898 20.0284 13.5493 20.3324 14.121 20.8774C14.3085 21.0649 14.5628 21.1702 14.828 21.1702C15.0932 21.1702 15.3475 21.0649 15.535 20.8774V20.8774ZM18.364 18.0494C18.5515 17.8619 18.6568 17.6076 18.6568 17.3424C18.6568 17.0772 18.5515 16.8229 18.364 16.6354C16.6749 14.95 14.3862 14.0034 12 14.0034C9.61386 14.0034 7.32514 14.95 5.63601 16.6354C5.45385 16.824 5.35306 17.0766 5.35534 17.3388C5.35762 17.601 5.46279 17.8518 5.64819 18.0372C5.8336 18.2226 6.08441 18.3278 6.34661 18.3301C6.60881 18.3323 6.86141 18.2315 7.05001 18.0494C8.36421 16.7392 10.1443 16.0034 12 16.0034C13.8558 16.0034 15.6358 16.7392 16.95 18.0494C17.1375 18.2369 17.3918 18.3422 17.657 18.3422C17.9222 18.3422 18.1765 18.2369 18.364 18.0494V18.0494ZM5.98701 22.1604C6.00816 22.0308 6.00357 21.8983 5.97351 21.7704C5.94344 21.6426 5.88849 21.5219 5.81179 21.4153C5.73508 21.3087 5.63813 21.2183 5.52647 21.1491C5.41481 21.08 5.29063 21.0335 5.16101 21.0124C4.40537 20.8929 3.70322 20.5486 3.14601 20.0244C2.5888 19.5002 2.20236 18.8203 2.03701 18.0734C1.92941 17.3591 2.04718 16.6291 2.37393 15.9849C2.70068 15.3408 3.22014 14.8145 3.86001 14.4794C4.32064 14.2266 4.6633 13.8028 4.81393 13.2994C4.96457 12.796 4.91107 12.2536 4.66501 11.7894C4.27617 11.0489 4.04646 10.2352 3.99062 9.40066C3.93477 8.56611 4.05403 7.72911 4.34074 6.94337C4.62745 6.15763 5.07527 5.44051 5.65547 4.83805C6.23566 4.23559 6.93541 3.76109 7.7098 3.445C8.48418 3.12891 9.31611 2.97823 10.1522 3.00261C10.9882 3.027 11.8099 3.22592 12.5646 3.5866C13.3192 3.94729 13.9901 4.46177 14.5342 5.09702C15.0783 5.73228 15.4836 6.47428 15.724 7.27539C15.872 7.7581 16.1357 8.19735 16.4921 8.55497C16.8485 8.91259 17.2868 9.17774 17.769 9.32739C19.0754 9.72508 20.206 10.5585 20.9725 11.6887C21.7389 12.8189 22.0949 14.1776 21.981 15.5384C21.8916 16.5603 21.5275 17.539 20.9271 18.3708C20.3268 19.2026 19.5127 19.8566 18.571 20.2634C18.3378 20.381 18.1599 20.5851 18.0752 20.8321C17.9905 21.0792 18.0059 21.3496 18.1179 21.5854C18.23 21.8213 18.4299 22.004 18.6749 22.0945C18.9199 22.1849 19.1906 22.1759 19.429 22.0694C20.6918 21.516 21.7813 20.631 22.5819 19.5085C23.3824 18.3859 23.8641 17.0676 23.976 15.6934C24.127 13.8791 23.6516 12.0678 22.6289 10.5616C21.6062 9.05542 20.0981 7.94531 18.356 7.41639C18.1845 7.36308 18.0288 7.26817 17.9028 7.1401C17.7768 7.01204 17.6845 6.85479 17.634 6.68239C17.1046 4.98247 16.0233 3.50773 14.5612 2.49168C13.0992 1.47563 11.3399 0.976338 9.5621 1.07287C7.78428 1.1694 6.08945 1.85623 4.746 3.02461C3.40255 4.19299 2.48724 5.77614 2.14501 7.52339C1.79542 9.29128 2.07041 11.1257 2.92301 12.7134C1.91802 13.2389 1.10187 14.0646 0.588184 15.0757C0.0744934 16.0868 -0.11118 17.2328 0.0570113 18.3544C0.285495 19.5225 0.866276 20.5926 1.72121 21.4207C2.57615 22.2488 3.66421 22.7952 4.83901 22.9864C4.96863 23.0075 5.10114 23.0029 5.22898 22.9729C5.35682 22.9428 5.47749 22.8879 5.58409 22.8112C5.6907 22.7345 5.78115 22.6375 5.85028 22.5259C5.91941 22.4142 5.96587 22.29 5.98701 22.1604V22.1604Z" />
      </g>
      <defs>
        <clipPath id="clip0_403_2795">
          <rect
            width={24}
            height={24}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default WifiAltIcon;
