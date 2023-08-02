/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const AngleDoubleRightIcon: FC<IconProps> = ({
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
      <g clipPath="url(#clip0_403_3105)">
        <path d="M11.8298 23.9999C11.6982 24.0007 11.5678 23.9755 11.4459 23.9257C11.3241 23.8759 11.2133 23.8026 11.1198 23.7099C11.0261 23.617 10.9517 23.5064 10.9009 23.3845C10.8502 23.2627 10.824 23.132 10.824 22.9999C10.824 22.8679 10.8502 22.7372 10.9009 22.6154C10.9517 22.4935 11.0261 22.3829 11.1198 22.2899L19.2898 14.1199C19.8516 13.5574 20.1672 12.7949 20.1672 11.9999C20.1672 11.2049 19.8516 10.4424 19.2898 9.87994L11.1198 1.70994C11.0266 1.6167 10.9526 1.50601 10.9022 1.38419C10.8517 1.26237 10.8257 1.1318 10.8257 0.999941C10.8257 0.73364 10.9315 0.478245 11.1198 0.289941C11.3081 0.101638 11.5635 -0.00415039 11.8298 -0.00415039C12.0961 -0.00415039 12.3515 0.101638 12.5398 0.289941L20.7098 8.45994C21.1755 8.9244 21.5449 9.47615 21.797 10.0836C22.049 10.6911 22.1788 11.3423 22.1788 11.9999C22.1788 12.6576 22.049 13.3088 21.797 13.9163C21.5449 14.5237 21.1755 15.0755 20.7098 15.5399L12.5398 23.7099C12.4464 23.8026 12.3356 23.8759 12.2137 23.9257C12.0919 23.9755 11.9614 24.0007 11.8298 23.9999Z" />
        <path d="M1.82996 23.9999C1.69835 24.0007 1.56789 23.9755 1.44605 23.9257C1.32421 23.8759 1.2134 23.8026 1.11996 23.7099C1.02623 23.617 0.951833 23.5064 0.901065 23.3845C0.850296 23.2627 0.824158 23.132 0.824158 22.9999C0.824158 22.8679 0.850296 22.7372 0.901065 22.6154C0.951833 22.4935 1.02623 22.3829 1.11996 22.2899L10.71 12.7099C10.8037 12.617 10.8781 12.5064 10.9288 12.3845C10.9796 12.2627 11.0058 12.132 11.0058 11.9999C11.0058 11.8679 10.9796 11.7372 10.9288 11.6154C10.8781 11.4935 10.8037 11.3829 10.71 11.2899L1.11996 1.70994C0.931652 1.52164 0.825864 1.26624 0.825864 0.999941C0.825864 0.73364 0.931652 0.478245 1.11996 0.289941C1.30826 0.101638 1.56365 -0.00415039 1.82996 -0.00415039C2.09626 -0.00415039 2.35165 0.101638 2.53996 0.289941L12.12 9.87994C12.6818 10.4424 12.9973 11.2049 12.9973 11.9999C12.9973 12.7949 12.6818 13.5574 12.12 14.1199L2.53996 23.7099C2.44652 23.8026 2.3357 23.8759 2.21386 23.9257C2.09203 23.9755 1.96156 24.0007 1.82996 23.9999Z" />
      </g>
      <defs>
        <clipPath id="clip0_403_3105">
          <rect
            width={24}
            height={24}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default AngleDoubleRightIcon;
