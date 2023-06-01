/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const AppsSortIcon: FC<IconProps> = ({ size, color, onClick, className }) => {
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
      <g clipPath="url(#clip0_403_3008)">
        <path d="M7 0H4C2.93913 0 1.92172 0.421427 1.17157 1.17157C0.421427 1.92172 0 2.93913 0 4L0 7C0 8.06087 0.421427 9.07828 1.17157 9.82843C1.92172 10.5786 2.93913 11 4 11H7C8.06087 11 9.07828 10.5786 9.82843 9.82843C10.5786 9.07828 11 8.06087 11 7V4C11 2.93913 10.5786 1.92172 9.82843 1.17157C9.07828 0.421427 8.06087 0 7 0V0ZM9 7C9 7.53043 8.78929 8.03914 8.41421 8.41421C8.03914 8.78929 7.53043 9 7 9H4C3.46957 9 2.96086 8.78929 2.58579 8.41421C2.21071 8.03914 2 7.53043 2 7V4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2H7C7.53043 2 8.03914 2.21071 8.41421 2.58579C8.78929 2.96086 9 3.46957 9 4V7Z" />
        <path d="M7 13H4C2.93913 13 1.92172 13.4214 1.17157 14.1716C0.421427 14.9217 0 15.9391 0 17L0 20C0 21.0609 0.421427 22.0783 1.17157 22.8284C1.92172 23.5786 2.93913 24 4 24H7C8.06087 24 9.07828 23.5786 9.82843 22.8284C10.5786 22.0783 11 21.0609 11 20V17C11 15.9391 10.5786 14.9217 9.82843 14.1716C9.07828 13.4214 8.06087 13 7 13V13ZM9 20C9 20.5304 8.78929 21.0392 8.41421 21.4142C8.03914 21.7893 7.53043 22 7 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0392 2 20.5304 2 20V17C2 16.4696 2.21071 15.9609 2.58579 15.5858C2.96086 15.2107 3.46957 15 4 15H7C7.53043 15 8.03914 15.2107 8.41421 15.5858C8.78929 15.9609 9 16.4696 9 17V20Z" />
        <path d="M22.2932 19.049L20.0002 21.339V2.63297L22.2932 4.92297C22.3861 5.01581 22.4964 5.08945 22.6178 5.13967C22.7391 5.18989 22.8692 5.21572 23.0005 5.21567C23.1319 5.21563 23.2619 5.18971 23.3833 5.1394C23.5046 5.08909 23.6148 5.01538 23.7077 4.92247C23.8005 4.82956 23.8742 4.71927 23.9244 4.5979C23.9746 4.47654 24.0004 4.34647 24.0004 4.21512C24.0003 4.08377 23.9744 3.95371 23.9241 3.83238C23.8738 3.71105 23.8001 3.60081 23.7072 3.50797L21.1202 0.924968C20.5577 0.363166 19.7952 0.0476074 19.0002 0.0476074C18.2052 0.0476074 17.4427 0.363166 16.8802 0.924968L14.2932 3.50797C14.2003 3.60081 14.1266 3.71105 14.0763 3.83238C14.026 3.95371 14 4.08377 14 4.21512C14 4.34647 14.0258 4.47654 14.076 4.5979C14.1262 4.71927 14.1999 4.82956 14.2927 4.92247C14.3855 5.01538 14.4958 5.08909 14.6171 5.1394C14.7384 5.18971 14.8685 5.21563 14.9998 5.21567C15.1312 5.21572 15.2613 5.18989 15.3826 5.13967C15.504 5.08945 15.6143 5.01581 15.7072 4.92297L18.0002 2.63297V21.339L15.7072 19.049C15.6143 18.9561 15.504 18.8825 15.3826 18.8323C15.2613 18.7821 15.1312 18.7562 14.9998 18.7563C14.8685 18.7563 14.7384 18.7822 14.6171 18.8325C14.4958 18.8829 14.3855 18.9566 14.2927 19.0495C14.1999 19.1424 14.1262 19.2527 14.076 19.374C14.0258 19.4954 14 19.6255 14 19.7568C14 19.8882 14.026 20.0182 14.0763 20.1396C14.1266 20.2609 14.2003 20.3711 14.2932 20.464L16.8802 23.047C17.4427 23.6088 18.2052 23.9243 19.0002 23.9243C19.7952 23.9243 20.5577 23.6088 21.1202 23.047L23.7072 20.464C23.8001 20.3711 23.8738 20.2609 23.9241 20.1396C23.9744 20.0182 24.0003 19.8882 24.0004 19.7568C24.0004 19.6255 23.9746 19.4954 23.9244 19.374C23.8742 19.2527 23.8005 19.1424 23.7077 19.0495C23.6148 18.9566 23.5046 18.8829 23.3833 18.8325C23.2619 18.7822 23.1319 18.7563 23.0005 18.7563C22.8692 18.7562 22.7391 18.7821 22.6178 18.8323C22.4964 18.8825 22.3861 18.9561 22.2932 19.049V19.049Z" />
      </g>
      <defs>
        <clipPath id="clip0_403_3008">
          <rect
            width={24}
            height={24}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default AppsSortIcon;