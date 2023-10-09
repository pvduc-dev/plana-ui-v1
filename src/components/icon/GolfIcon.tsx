/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const GolfIcon: FC<IconProps> = ({ size, color, onClick, className }) => {
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
      <g clipPath="url(#clip0_403_2990)">
        <path d="M12 9.99963C10.6514 9.99919 9.30605 10.1332 7.984 10.3996L7.978 8.11462L12.987 6.03863C13.2921 5.88359 13.5523 5.65286 13.7428 5.3685C13.9332 5.08414 14.0475 4.75567 14.0747 4.41452C14.1019 4.07336 14.0411 3.73094 13.8981 3.42001C13.7551 3.10907 13.5347 2.84003 13.258 2.63862C13.2263 2.61461 13.1928 2.59289 13.158 2.57362L8.9 0.211624C8.59494 0.0579014 8.25558 -0.0151211 7.91429 -0.000481706C7.573 0.0141576 7.24114 0.115971 6.95036 0.295252C6.65958 0.474533 6.41957 0.725305 6.2532 1.02366C6.08684 1.32202 5.99967 1.65802 6 1.99962V10.9136C2.391 12.1086 0 14.3596 0 16.9996C0 20.9246 5.271 23.9996 12 23.9996C18.729 23.9996 24 20.9246 24 16.9996C24 13.0746 18.729 9.99963 12 9.99963ZM12.073 4.25462L7.973 5.95462L7.963 1.98362L12.073 4.25462ZM12 21.9996C6.58 21.9996 2 19.7096 2 16.9996C2 15.4056 3.591 13.9606 6 13.0376V16.9996C6 17.2648 6.10536 17.5192 6.29289 17.7067C6.48043 17.8943 6.73478 17.9996 7 17.9996C7.26522 17.9996 7.51957 17.8943 7.70711 17.7067C7.89464 17.5192 8 17.2648 8 16.9996L7.989 12.4396C9.30562 12.1451 10.6508 11.9975 12 11.9996C17.42 11.9996 22 14.2896 22 16.9996C22 19.7096 17.42 21.9996 12 21.9996ZM17 16.9996C17 17.3952 16.8827 17.7819 16.6629 18.1108C16.4432 18.4397 16.1308 18.696 15.7654 18.8474C15.3999 18.9988 14.9978 19.0384 14.6098 18.9612C14.2219 18.884 13.8655 18.6935 13.5858 18.4138C13.3061 18.1341 13.1156 17.7778 13.0384 17.3898C12.9613 17.0018 13.0009 16.5997 13.1522 16.2343C13.3036 15.8688 13.56 15.5564 13.8889 15.3367C14.2178 15.1169 14.6044 14.9996 15 14.9996C15.5304 14.9996 16.0391 15.2103 16.4142 15.5854C16.7893 15.9605 17 16.4692 17 16.9996Z" />
      </g>
      <defs>
        <clipPath id="clip0_403_2990">
          <rect
            width={24}
            height={24}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default GolfIcon;