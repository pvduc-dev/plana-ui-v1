/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const MapMarkerPlusIcon: FC<IconProps> = ({
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
      <path d="M8.17463 22.4473C10.2773 24.5042 13.6354 24.5126 15.7483 22.4663L19.7302 18.7866C24.0436 14.5306 24.0902 7.58363 19.8341 3.27019C15.5781 -1.04325 8.63115 -1.08984 4.31771 3.16622C4.28283 3.20063 4.24815 3.23531 4.21374 3.27019C-0.0707749 7.55536 -0.0702124 14.5025 4.21496 18.787C4.22382 18.7958 4.23273 18.8047 4.24163 18.8136L8.17463 22.4473ZM5.62412 4.68061C9.12221 1.1671 14.8062 1.15458 18.3197 4.65267C21.8333 8.15077 21.8458 13.8348 18.3477 17.3483L14.3738 21.021C13.0165 22.2984 10.8969 22.2905 9.5491 21.003L5.62412 17.3762C2.11833 13.8705 2.11829 8.18649 5.62402 4.68066C5.62407 4.68066 5.62412 4.68061 5.62412 4.68061ZM6.98466 11.0284C6.98466 10.4775 7.43124 10.031 7.98212 10.031H10.9745V7.03861C10.9745 6.48774 11.4211 6.04116 11.9719 6.04116C12.5228 6.04116 12.9694 6.48774 12.9694 7.03861V10.031H15.9617C16.5126 10.031 16.9592 10.4775 16.9592 11.0284C16.9592 11.5793 16.5126 12.0259 15.9617 12.0259H12.9694V15.0182C12.9694 15.5691 12.5228 16.0157 11.9719 16.0157C11.4211 16.0157 10.9745 15.5691 10.9745 15.0182V12.0259H7.98212C7.43124 12.0259 6.98466 11.5793 6.98466 11.0284Z" />
    </svg>
  );
};
export default MapMarkerPlusIcon;