/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const CommentCheckIcon: FC<IconProps> = ({
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
      <g clipPath="url(#clip0_403_3141)">
        <path d="M10.4998 16.9999C10.2369 17.0001 9.97646 16.9485 9.73349 16.8479C9.49051 16.7474 9.26975 16.5999 9.08384 16.4139L5.29984 12.7149C5.11021 12.5293 5.0021 12.2759 4.99928 12.0105C4.99647 11.7452 5.09919 11.4896 5.28484 11.2999C5.47049 11.1103 5.72387 11.0022 5.98923 10.9994C6.2546 10.9966 6.51021 11.0993 6.69984 11.2849L10.4928 14.9919L17.2988 8.29192C17.4908 8.12305 17.7401 8.03409 17.9956 8.04333C18.251 8.05257 18.4933 8.15931 18.6725 8.34161C18.8517 8.52391 18.9543 8.76792 18.9592 9.02352C18.9641 9.27912 18.871 9.52689 18.6988 9.71592L11.9058 16.4229C11.7209 16.6068 11.5016 16.7525 11.2603 16.8515C11.0191 16.9505 10.7606 17.0009 10.4998 16.9999ZM23.9998 18.9999V12.3399C24.0371 9.25737 22.9069 6.27481 20.8362 3.99109C18.7654 1.70737 15.9073 0.291558 12.8358 0.0279206C11.1215 -0.0920218 9.40137 0.15766 7.79188 0.760073C6.18238 1.36249 4.72105 2.30358 3.50675 3.51967C2.29246 4.73576 1.35354 6.19849 0.753514 7.80888C0.153488 9.41927 -0.093644 11.1398 0.0288396 12.8539C0.47084 19.2079 6.08184 23.9999 13.0828 23.9999H18.9998C20.3254 23.9983 21.5963 23.471 22.5336 22.5337C23.471 21.5964 23.9983 20.3255 23.9998 18.9999V18.9999ZM12.6998 2.02392C15.2663 2.25096 17.6518 3.44083 19.3769 5.35448C21.1021 7.26812 22.0392 9.76374 21.9998 12.3399V18.9999C21.9998 19.7956 21.6838 20.5586 21.1212 21.1212C20.5586 21.6839 19.7955 21.9999 18.9998 21.9999H13.0828C7.04884 21.9999 2.39984 18.0999 2.02484 12.7159C1.92639 11.3445 2.11181 9.96752 2.56952 8.67099C3.02723 7.37446 3.74739 6.18625 4.68501 5.18059C5.62263 4.17493 6.75757 3.37343 8.01891 2.82617C9.28025 2.2789 10.6409 1.99763 12.0158 1.99992C12.2428 1.99992 12.4718 2.00892 12.6998 2.02392Z" />
      </g>
      <defs>
        <clipPath id="clip0_403_3141">
          <rect
            width={24}
            height={24}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default CommentCheckIcon;
