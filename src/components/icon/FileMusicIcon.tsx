/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const FileMusicIcon: FC<IconProps> = ({ size, color, onClick, className }) => {
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
      <g clipPath="url(#clip0_403_3055)">
        <path d="M15.0001 12.0004C15.0001 12.2656 14.8948 12.52 14.7072 12.7075C14.5197 12.895 14.2653 13.0004 14.0001 13.0004H13.0001V17.5004C13.0001 17.9948 12.8535 18.4782 12.5788 18.8893C12.3041 19.3004 11.9136 19.6209 11.4568 19.8101C11 19.9993 10.4973 20.0488 10.0124 19.9524C9.52744 19.8559 9.08199 19.6178 8.73236 19.2682C8.38272 18.9185 8.14462 18.4731 8.04816 17.9881C7.9517 17.5032 8.0012 17.0005 8.19042 16.5437C8.37964 16.0869 8.70007 15.6964 9.1112 15.4217C9.52232 15.147 10.0057 15.0004 10.5001 15.0004C10.668 15.0007 10.8355 15.0175 11.0001 15.0504V13.0004C11.0001 12.47 11.2108 11.9612 11.5859 11.5862C11.961 11.2111 12.4697 11.0004 13.0001 11.0004H14.0001C14.2653 11.0004 14.5197 11.1057 14.7072 11.2933C14.8948 11.4808 15.0001 11.7352 15.0001 12.0004ZM22.0001 10.4854V19.0004C21.9985 20.326 21.4712 21.5968 20.5339 22.5342C19.5966 23.4715 18.3257 23.9988 17.0001 24.0004H7.00012C5.67453 23.9988 4.40368 23.4715 3.46634 22.5342C2.529 21.5968 2.00171 20.326 2.00012 19.0004V5.00039C2.00171 3.6748 2.529 2.40395 3.46634 1.46661C4.40368 0.529272 5.67453 0.00197778 7.00012 0.000389923H11.5151C12.4348 -0.00201158 13.3459 0.178025 14.1956 0.530079C15.0452 0.882133 15.8166 1.39921 16.4651 2.05139L19.9491 5.53539C20.6013 6.18388 21.1184 6.95529 21.4704 7.80495C21.8225 8.65462 22.0025 9.56568 22.0001 10.4854V10.4854ZM15.0511 3.46539C14.7366 3.16001 14.3832 2.89742 14.0001 2.68439V7.00039C14.0001 7.26561 14.1055 7.51996 14.293 7.7075C14.4806 7.89503 14.7349 8.00039 15.0001 8.00039H19.3161C19.1031 7.61727 18.8405 7.26389 18.5351 6.94939L15.0511 3.46539ZM20.0001 10.4854C20.0001 10.3204 19.9681 10.1624 19.9531 10.0004H15.0001C14.2045 10.0004 13.4414 9.68432 12.8788 9.12171C12.3162 8.5591 12.0001 7.79604 12.0001 7.00039V2.04739C11.8381 2.03239 11.6801 2.00039 11.5151 2.00039H7.00012C6.20447 2.00039 5.44141 2.31646 4.8788 2.87907C4.31619 3.44168 4.00012 4.20474 4.00012 5.00039V19.0004C4.00012 19.796 4.31619 20.5591 4.8788 21.1217C5.44141 21.6843 6.20447 22.0004 7.00012 22.0004H17.0001C17.7958 22.0004 18.5588 21.6843 19.1214 21.1217C19.6841 20.5591 20.0001 19.796 20.0001 19.0004V10.4854Z" />
      </g>
      <defs>
        <clipPath id="clip0_403_3055">
          <rect
            width={24}
            height={24}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default FileMusicIcon;
