/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const CommentInfoIcon: FC<IconProps> = ({
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
      <g clipPath="url(#clip0_403_3070)">
        <path d="M13.4998 6.49992C13.4998 6.89775 13.3418 7.27928 13.0605 7.56058C12.7792 7.84189 12.3977 7.99992 11.9998 7.99992C11.602 7.99992 11.2205 7.84189 10.9392 7.56058C10.6579 7.27928 10.4998 6.89775 10.4998 6.49992C10.4998 6.1021 10.6579 5.72057 10.9392 5.43926C11.2205 5.15796 11.602 4.99992 11.9998 4.99992C12.3977 4.99992 12.7792 5.15796 13.0605 5.43926C13.3418 5.72057 13.4998 6.1021 13.4998 6.49992V6.49992ZM23.9998 18.9999V12.3399C24.0371 9.25737 22.9069 6.27481 20.8362 3.99109C18.7654 1.70737 15.9073 0.291558 12.8358 0.0279206C11.1215 -0.0920218 9.40137 0.15766 7.79188 0.760073C6.18238 1.36249 4.72105 2.30358 3.50675 3.51967C2.29246 4.73576 1.35354 6.19849 0.753514 7.80888C0.153488 9.41927 -0.093644 11.1398 0.0288396 12.8539C0.47084 19.2079 6.08184 23.9999 13.0828 23.9999H18.9998C20.3254 23.9983 21.5963 23.471 22.5336 22.5337C23.471 21.5964 23.9983 20.3255 23.9998 18.9999V18.9999ZM12.6998 2.02392C15.2663 2.25096 17.6518 3.44083 19.3769 5.35448C21.1021 7.26812 22.0392 9.76374 21.9998 12.3399V18.9999C21.9998 19.7956 21.6838 20.5586 21.1212 21.1212C20.5586 21.6839 19.7955 21.9999 18.9998 21.9999H13.0828C7.04884 21.9999 2.39984 18.0999 2.02484 12.7159C1.92639 11.3445 2.11181 9.96752 2.56952 8.67099C3.02723 7.37446 3.74739 6.18625 4.68501 5.18059C5.62263 4.17493 6.75757 3.37343 8.01891 2.82617C9.28025 2.2789 10.6409 1.99763 12.0158 1.99992C12.2428 1.99992 12.4718 2.00892 12.6998 2.02392ZM13.9998 17.9999V11.9999C13.9998 11.4695 13.7891 10.9608 13.4141 10.5857C13.039 10.2106 12.5303 9.99992 11.9998 9.99992H10.9998C10.7346 9.99992 10.4803 10.1053 10.2927 10.2928C10.1052 10.4804 9.99984 10.7347 9.99984 10.9999C9.99984 11.2651 10.1052 11.5195 10.2927 11.707C10.4803 11.8946 10.7346 11.9999 10.9998 11.9999H11.9998V17.9999C11.9998 18.2651 12.1052 18.5195 12.2927 18.707C12.4803 18.8946 12.7346 18.9999 12.9998 18.9999C13.2651 18.9999 13.5194 18.8946 13.7069 18.707C13.8945 18.5195 13.9998 18.2651 13.9998 17.9999Z" />
      </g>
      <defs>
        <clipPath id="clip0_403_3070">
          <rect
            width={24}
            height={24}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default CommentInfoIcon;
