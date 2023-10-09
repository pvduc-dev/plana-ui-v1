/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const CursorFingerIcon: FC<IconProps> = ({
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
      <g clipPath="url(#clip0_403_3041)">
        <path d="M17.9798 9.37599L11.9998 8.17999V3.10698C12.0092 2.38377 11.7639 1.68029 11.3069 1.11974C10.8498 0.559193 10.2101 0.177314 9.4998 0.0409837C9.06954 -0.031743 8.6286 -0.00973383 8.20772 0.105476C7.78685 0.220686 7.39617 0.426323 7.06294 0.708046C6.72971 0.989768 6.46195 1.34079 6.27833 1.73664C6.09471 2.13249 5.99966 2.56362 5.9998 2.99998V9.66099L3.2108 13.3C2.39279 14.2574 1.96438 15.4871 2.0105 16.7455C2.05662 18.0039 2.5739 19.1991 3.4598 20.094L5.8598 22.519C6.80154 23.4639 8.07973 23.9965 9.4138 24H16.9998C18.3254 23.9984 19.5962 23.4711 20.5336 22.5338C21.4709 21.5964 21.9982 20.3256 21.9998 19V14.279C21.9973 13.1237 21.5959 12.0046 20.8634 11.1112C20.1309 10.2178 19.1122 9.60484 17.9798 9.37599V9.37599ZM19.9998 19C19.9998 19.7956 19.6837 20.5587 19.1211 21.1213C18.5585 21.6839 17.7954 22 16.9998 22H9.4138C8.61247 21.9977 7.84486 21.6772 7.2798 21.109L4.8798 18.681C4.34351 18.1353 4.03349 17.407 4.01197 16.6423C3.99045 15.8775 4.25904 15.1329 4.7638 14.558L5.9998 12.945V17C5.9998 17.2652 6.10515 17.5196 6.29269 17.7071C6.48023 17.8946 6.73458 18 6.9998 18C7.26501 18 7.51937 17.8946 7.7069 17.7071C7.89444 17.5196 7.9998 17.2652 7.9998 17V2.99998C7.99971 2.85371 8.03171 2.70919 8.09355 2.57663C8.15539 2.44407 8.24555 2.32668 8.35769 2.23276C8.46983 2.13883 8.60121 2.07065 8.74256 2.03303C8.88392 1.9954 9.0318 1.98924 9.1758 2.01498C9.41791 2.07424 9.63214 2.21527 9.78227 2.41424C9.93241 2.6132 10.0092 2.85791 9.9998 3.10698V8.99998C9.99975 9.23052 10.0794 9.45398 10.2251 9.63257C10.3709 9.81115 10.5739 9.93388 10.7998 9.97998L17.5838 11.337C18.2638 11.4739 18.8757 11.8414 19.316 12.3775C19.7562 12.9136 19.9978 13.5853 19.9998 14.279V19Z" />
      </g>
      <defs>
        <clipPath id="clip0_403_3041">
          <rect
            width={24}
            height={24}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default CursorFingerIcon;