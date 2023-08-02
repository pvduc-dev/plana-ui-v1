/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const ComputerIcon: FC<IconProps> = ({ size, color, onClick, className }) => {
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
      <g clipPath="url(#clip0_403_2904)">
        <path d="M19 0.999878H5C3.6744 1.00147 2.40356 1.52876 1.46622 2.4661C0.528882 3.40344 0.00158786 4.67428 0 5.99988L0 13.9999C0.00158786 15.3255 0.528882 16.5963 1.46622 17.5337C2.40356 18.471 3.6744 18.9983 5 18.9999H11V20.9999H7C6.73478 20.9999 6.48043 21.1052 6.29289 21.2928C6.10536 21.4803 6 21.7347 6 21.9999C6 22.2651 6.10536 22.5194 6.29289 22.707C6.48043 22.8945 6.73478 22.9999 7 22.9999H17C17.2652 22.9999 17.5196 22.8945 17.7071 22.707C17.8946 22.5194 18 22.2651 18 21.9999C18 21.7347 17.8946 21.4803 17.7071 21.2928C17.5196 21.1052 17.2652 20.9999 17 20.9999H13V18.9999H19C20.3256 18.9983 21.5964 18.471 22.5338 17.5337C23.4711 16.5963 23.9984 15.3255 24 13.9999V5.99988C23.9984 4.67428 23.4711 3.40344 22.5338 2.4661C21.5964 1.52876 20.3256 1.00147 19 0.999878V0.999878ZM5 2.99988H19C19.7956 2.99988 20.5587 3.31595 21.1213 3.87856C21.6839 4.44117 22 5.20423 22 5.99988V12.9999H2V5.99988C2 5.20423 2.31607 4.44117 2.87868 3.87856C3.44129 3.31595 4.20435 2.99988 5 2.99988V2.99988ZM19 16.9999H5C4.38174 16.9973 3.77937 16.8038 3.2753 16.4458C2.77123 16.0878 2.39008 15.5828 2.184 14.9999H21.816C21.6099 15.5828 21.2288 16.0878 20.7247 16.4458C20.2206 16.8038 19.6183 16.9973 19 16.9999Z" />
      </g>
      <defs>
        <clipPath id="clip0_403_2904">
          <rect
            width={24}
            height={24}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default ComputerIcon;
