/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const EnvelopeOpenIcon: FC<IconProps> = ({
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
      <g clipPath="url(#clip0_403_3069)">
        <path d="M22.459 8.10012L15.535 1.46412C14.5966 0.535612 13.3307 0.0135603 12.0106 0.0107536C10.6905 0.00794686 9.4223 0.524611 8.48 1.44912L1.54 8.10012C1.05461 8.56761 0.668162 9.12792 0.403609 9.74773C0.139055 10.3675 0.00180022 11.0342 0 11.7081L0 19.0001C0.00158786 20.3257 0.528882 21.5966 1.46622 22.5339C2.40356 23.4712 3.6744 23.9985 5 24.0001H19C20.3256 23.9985 21.5964 23.4712 22.5338 22.5339C23.4711 21.5966 23.9984 20.3257 24 19.0001V11.7081C23.9982 11.0341 23.8609 10.3673 23.5962 9.74751C23.3314 9.12767 22.9447 8.56743 22.459 8.10012V8.10012ZM9.879 2.87812C10.446 2.31611 11.213 2.00213 12.0113 2.00513C12.8097 2.00813 13.5742 2.32787 14.137 2.89412L20.884 9.35812L14.121 16.1221C13.5493 16.6671 12.7898 16.9711 12 16.9711C11.2102 16.9711 10.4507 16.6671 9.879 16.1221L3.115 9.35812L9.879 2.87812ZM22 19.0001C22 19.7958 21.6839 20.5588 21.1213 21.1214C20.5587 21.684 19.7956 22.0001 19 22.0001H5C4.20435 22.0001 3.44129 21.684 2.87868 21.1214C2.31607 20.5588 2 19.7958 2 19.0001V11.7081C2.00101 11.514 2.02077 11.3204 2.059 11.1301L8.465 17.5361C9.40572 18.4676 10.6761 18.9902 12 18.9902C13.3239 18.9902 14.5943 18.4676 15.535 17.5361L21.941 11.1301C21.9792 11.3204 21.999 11.514 22 11.7081V19.0001Z" />
      </g>
      <defs>
        <clipPath id="clip0_403_3069">
          <rect
            width={24}
            height={24}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default EnvelopeOpenIcon;