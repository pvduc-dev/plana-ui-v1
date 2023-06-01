/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const DocumentSignedIcon: FC<IconProps> = ({
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
      <g clipPath="url(#clip0_403_3084)">
        <path d="M19.535 3.12202L17.879 1.46402C17.4157 0.998333 16.8646 0.629159 16.2576 0.377864C15.6507 0.126569 14.9999 -0.00185599 14.343 2.02654e-05H8C6.6744 0.00160812 5.40356 0.528902 4.46622 1.46624C3.52888 2.40358 3.00159 3.67443 3 5.00002V19C3.00159 20.3256 3.52888 21.5965 4.46622 22.5338C5.40356 23.4711 6.6744 23.9984 8 24H16C17.3256 23.9984 18.5964 23.4711 19.5338 22.5338C20.4711 21.5965 20.9984 20.3256 21 19V6.65702C21.0016 6.0002 20.873 5.34959 20.6215 4.74281C20.37 4.13604 20.0007 3.58515 19.535 3.12202V3.12202ZM18.121 4.53602C18.2628 4.67734 18.3898 4.83282 18.5 5.00002H16V2.50002C16.1669 2.61134 16.3227 2.7386 16.465 2.88002L18.121 4.53602ZM19 19C19 19.7957 18.6839 20.5587 18.1213 21.1213C17.5587 21.684 16.7956 22 16 22H8C7.20435 22 6.44129 21.684 5.87868 21.1213C5.31607 20.5587 5 19.7957 5 19V5.00002C5 4.20437 5.31607 3.44131 5.87868 2.8787C6.44129 2.31609 7.20435 2.00002 8 2.00002H14V5.00002C14 5.53045 14.2107 6.03916 14.5858 6.41423C14.9609 6.78931 15.4696 7.00002 16 7.00002H19V19ZM16 9.00002C16.2652 9.00002 16.5196 9.10538 16.7071 9.29291C16.8946 9.48045 17 9.7348 17 10C17 10.2652 16.8946 10.5196 16.7071 10.7071C16.5196 10.8947 16.2652 11 16 11H8C7.73478 11 7.48043 10.8947 7.29289 10.7071C7.10536 10.5196 7 10.2652 7 10C7 9.7348 7.10536 9.48045 7.29289 9.29291C7.48043 9.10538 7.73478 9.00002 8 9.00002H16ZM17 14C17 14.2652 16.8946 14.5196 16.7071 14.7071C16.5196 14.8947 16.2652 15 16 15H8C7.73478 15 7.48043 14.8947 7.29289 14.7071C7.10536 14.5196 7 14.2652 7 14C7 13.7348 7.10536 13.4805 7.29289 13.2929C7.48043 13.1054 7.73478 13 8 13H16C16.2652 13 16.5196 13.1054 16.7071 13.2929C16.8946 13.4805 17 13.7348 17 14ZM16.808 17.413C16.9634 17.6269 17.0279 17.8936 16.9872 18.1548C16.9466 18.416 16.8041 18.6505 16.591 18.807C15.5778 19.529 14.3778 19.9432 13.135 20C12.4089 19.9965 11.7048 19.7501 11.135 19.3C10.807 19.075 10.682 19 10.435 19C9.76643 19.1035 9.13562 19.3769 8.603 19.794C8.39175 19.9446 8.13024 20.0072 7.87369 19.9686C7.61715 19.93 7.38565 19.7932 7.22808 19.5871C7.07052 19.381 6.99922 19.1217 7.02925 18.864C7.05927 18.6063 7.18827 18.3704 7.389 18.206C8.27018 17.522 9.32828 17.1036 10.439 17C11.1051 17.0107 11.7491 17.2409 12.271 17.655C12.5089 17.869 12.8152 17.9913 13.135 18C13.9527 17.9388 14.739 17.6594 15.412 17.191C15.6266 17.0355 15.8942 16.9715 16.1559 17.0131C16.4177 17.0547 16.6522 17.1986 16.808 17.413V17.413Z" />
      </g>
      <defs>
        <clipPath id="clip0_403_3084">
          <rect
            width={24}
            height={24}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default DocumentSignedIcon;
