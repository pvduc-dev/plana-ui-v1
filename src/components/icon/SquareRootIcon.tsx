/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const SquareRootIcon: FC<IconProps> = ({ size, color, onClick, className }) => {
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
      <path d="M16.0399 4.00061C15.3842 4.00218 14.7468 4.21795 14.225 4.61508C13.7031 5.01222 13.3253 5.56897 13.1489 6.20061L9.09995 20.7686C9.00314 21.1198 8.79466 21.43 8.50601 21.6522C8.21737 21.8745 7.86423 21.9968 7.49995 22.0006C7.14365 21.9959 6.79732 21.8823 6.5074 21.6752C6.21749 21.468 5.99785 21.1772 5.87795 20.8416L3.08495 13.1616C2.90293 12.6383 2.59793 12.1664 2.19561 11.7855C1.79329 11.4046 1.3054 11.1258 0.772956 10.9726C0.515166 10.9102 0.292745 10.7478 0.154625 10.5214C0.0165046 10.2949 -0.0260018 10.0229 0.0364566 9.76511C0.098915 9.50732 0.261222 9.2849 0.487672 9.14678C0.714122 9.00866 0.986165 8.96615 1.24396 9.02861C2.09808 9.25751 2.88344 9.6914 3.53188 10.2926C4.18032 10.8938 4.67224 11.6442 4.96495 12.4786L7.43895 19.2786L11.2229 5.66261C11.5176 4.61096 12.1475 3.68424 13.0169 3.02327C13.8864 2.36231 14.9478 2.00323 16.0399 2.00061H22.9999C23.2651 2.00061 23.5195 2.10597 23.707 2.2935C23.8946 2.48104 23.9999 2.73539 23.9999 3.00061C23.9999 3.26583 23.8946 3.52018 23.707 3.70772C23.5195 3.89525 23.2651 4.00061 22.9999 4.00061H16.0399ZM23.5999 12.2006C23.3878 12.0415 23.1211 11.9732 22.8585 12.0107C22.596 12.0482 22.3591 12.1884 22.1999 12.4006L19.9999 15.3336L17.7999 12.4006C17.6408 12.1884 17.4039 12.0482 17.1414 12.0107C16.8788 11.9732 16.6121 12.0415 16.3999 12.2006C16.1878 12.3597 16.0475 12.5966 16.01 12.8592C15.9725 13.1217 16.0408 13.3884 16.1999 13.6006L18.7499 17.0006L16.1999 20.4006C16.1211 20.5057 16.0638 20.6252 16.0312 20.7524C15.9986 20.8796 15.9914 21.012 16.01 21.142C16.0286 21.272 16.0726 21.3971 16.1395 21.5101C16.2064 21.6231 16.2949 21.7218 16.3999 21.8006C16.505 21.8794 16.6245 21.9367 16.7518 21.9693C16.879 22.0019 17.0114 22.0091 17.1414 21.9906C17.2714 21.972 17.3964 21.928 17.5094 21.8611C17.6224 21.7942 17.7211 21.7057 17.7999 21.6006L19.9999 18.6676L22.1999 21.6006C22.2787 21.7057 22.3774 21.7942 22.4904 21.8611C22.6034 21.928 22.7285 21.972 22.8585 21.9906C22.9885 22.0091 23.1209 22.0019 23.2481 21.9693C23.3753 21.9367 23.4949 21.8794 23.5999 21.8006C23.705 21.7218 23.7935 21.6231 23.8604 21.5101C23.9273 21.3971 23.9713 21.272 23.9899 21.142C24.0084 21.012 24.0012 20.8796 23.9686 20.7524C23.936 20.6252 23.8787 20.5057 23.7999 20.4006L21.2499 17.0006L23.7999 13.6006C23.8787 13.4956 23.936 13.376 23.9686 13.2488C24.0012 13.1216 24.0084 12.9892 23.9899 12.8592C23.9713 12.7292 23.9273 12.6041 23.8604 12.4911C23.7935 12.3781 23.705 12.2794 23.5999 12.2006V12.2006Z" />
    </svg>
  );
};
export default SquareRootIcon;
