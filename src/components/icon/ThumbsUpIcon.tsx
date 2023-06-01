/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const ThumbsUpIcon: FC<IconProps> = ({ size, color, onClick, className }) => {
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
      <g clipPath="url(#clip0_403_2816)">
        <path d="M22.773 7.72138C22.3041 7.18098 21.7245 6.74766 21.0736 6.45073C20.4226 6.15381 19.7155 6.00022 19 6.00038H15.011L15.347 3.95938C15.4659 3.24064 15.3225 2.50311 14.9429 1.88132C14.5633 1.25952 13.9728 0.79489 13.2792 0.572169C12.5856 0.349448 11.835 0.383478 11.1644 0.668053C10.4938 0.952627 9.94777 1.46878 9.626 2.12238L7.712 6.00038H5C3.6744 6.00197 2.40356 6.52926 1.46622 7.4666C0.528882 8.40394 0.00158786 9.67478 0 11.0004L0 16.0004C0.00158786 17.326 0.528882 18.5968 1.46622 19.5342C2.40356 20.4715 3.6744 20.9988 5 21.0004H18.3C19.5035 20.9955 20.6652 20.5587 21.5738 19.7695C22.4824 18.9804 23.0776 17.8913 23.251 16.7004L23.956 11.7004C24.0553 10.9911 24.001 10.2688 23.7969 9.58231C23.5928 8.89582 23.2437 8.2612 22.773 7.72138ZM2 16.0004V11.0004C2 10.2047 2.31607 9.44167 2.87868 8.87906C3.44129 8.31645 4.20435 8.00038 5 8.00038H7V19.0004H5C4.20435 19.0004 3.44129 18.6843 2.87868 18.1217C2.31607 17.5591 2 16.796 2 16.0004ZM21.971 11.4194L21.265 16.4194C21.1618 17.1334 20.8057 17.7866 20.2616 18.2603C19.7175 18.7339 19.0214 18.9965 18.3 19.0004H9V7.73438C9.09424 7.65227 9.17226 7.55323 9.23 7.44238L11.419 3.00738C11.5011 2.85931 11.6171 2.73283 11.7576 2.63834C11.8981 2.54385 12.059 2.48404 12.2271 2.46384C12.3952 2.44363 12.5657 2.4636 12.7246 2.5221C12.8834 2.58061 13.0262 2.67598 13.141 2.80038C13.2392 2.91462 13.3111 3.04915 13.3513 3.19435C13.3916 3.33955 13.3994 3.49184 13.374 3.64038L12.846 6.84038C12.8228 6.98336 12.831 7.12967 12.8699 7.26918C12.9089 7.4087 12.9776 7.53809 13.0715 7.64841C13.1654 7.75872 13.2821 7.84733 13.4136 7.90811C13.545 7.96888 13.6882 8.00036 13.833 8.00038H19C19.4294 8.00032 19.8538 8.09244 20.2445 8.27052C20.6353 8.4486 20.9832 8.70849 21.2649 9.03261C21.5465 9.35674 21.7553 9.73755 21.8772 10.1493C21.999 10.5611 22.031 10.9942 21.971 11.4194Z" />
      </g>
      <defs>
        <clipPath id="clip0_403_2816">
          <rect
            width={24}
            height={24}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default ThumbsUpIcon;