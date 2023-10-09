/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const TimeFastIcon: FC<IconProps> = ({ size, color, onClick, className }) => {
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
      <g clipPath="url(#clip0_403_2813)">
        <path d="M9 23.9994H1C0.734784 23.9994 0.48043 23.894 0.292893 23.7065C0.105357 23.5189 0 23.2646 0 22.9994C0 22.7342 0.105357 22.4798 0.292893 22.2923C0.48043 22.1047 0.734784 21.9994 1 21.9994H9C9.26522 21.9994 9.51957 22.1047 9.70711 22.2923C9.89464 22.4798 10 22.7342 10 22.9994C10 23.2646 9.89464 23.5189 9.70711 23.7065C9.51957 23.894 9.26522 23.9994 9 23.9994Z" />
        <path d="M7 20H1C0.734784 20 0.48043 19.8947 0.292893 19.7071C0.105357 19.5196 0 19.2652 0 19C0 18.7348 0.105357 18.4804 0.292893 18.2929C0.48043 18.1054 0.734784 18 1 18H7C7.26522 18 7.51957 18.1054 7.70711 18.2929C7.89464 18.4804 8 18.7348 8 19C8 19.2652 7.89464 19.5196 7.70711 19.7071C7.51957 19.8947 7.26522 20 7 20Z" />
        <path d="M5 16.0006H1C0.734784 16.0006 0.48043 15.8953 0.292893 15.7077C0.105357 15.5202 0 15.2658 0 15.0006C0 14.7354 0.105357 14.481 0.292893 14.2935C0.48043 14.106 0.734784 14.0006 1 14.0006H5C5.26522 14.0006 5.51957 14.106 5.70711 14.2935C5.89464 14.481 6 14.7354 6 15.0006C6 15.2658 5.89464 15.5202 5.70711 15.7077C5.51957 15.8953 5.26522 16.0006 5 16.0006Z" />
        <path d="M13.0002 23.9546C12.7349 23.9664 12.4759 23.8723 12.28 23.6931C12.0841 23.5139 11.9675 23.2643 11.9557 22.9991C11.9438 22.7338 12.0379 22.4748 12.2171 22.2789C12.3963 22.083 12.6459 21.9664 12.9112 21.9546C14.8036 21.7814 16.6075 21.0726 18.1117 19.9111C19.6158 18.7497 20.7579 17.1837 21.4041 15.3966C22.0503 13.6095 22.1739 11.6752 21.7604 9.82037C21.3469 7.96554 20.4135 6.26692 19.0694 4.92347C17.7253 3.58002 16.0263 2.64736 14.1713 2.23473C12.3162 1.82211 10.382 1.9466 8.59523 2.59363C6.80841 3.24065 5.24294 4.38342 4.08219 5.88809C2.92143 7.39276 2.21345 9.19703 2.04116 11.0896C2.01729 11.3537 1.88947 11.5976 1.6858 11.7675C1.48214 11.9374 1.21932 12.0194 0.955165 11.9956C0.691009 11.9717 0.447155 11.8439 0.277248 11.6402C0.10734 11.4365 0.0252963 11.1737 0.0491658 10.9096C0.328054 7.83287 1.78277 4.98226 4.11049 2.95113C6.43821 0.919996 9.4596 -0.13517 12.5457 0.00527744C15.6318 0.145725 18.5449 1.47097 20.6785 3.70513C22.8121 5.9393 24.0019 8.91026 24.0001 11.9996C24.0155 14.9979 22.9016 17.8922 20.88 20.1066C18.8585 22.321 16.0775 23.6933 13.0902 23.9506C13.0602 23.9536 13.0292 23.9546 13.0002 23.9546V23.9546Z" />
        <path d="M12.0002 6C11.735 6 11.4806 6.10536 11.2931 6.29289C11.1055 6.48043 11.0002 6.73478 11.0002 7V12C11.0002 12.2652 11.1056 12.5195 11.2932 12.707L14.2932 15.707C14.4818 15.8892 14.7344 15.99 14.9966 15.9877C15.2588 15.9854 15.5096 15.8802 15.695 15.6948C15.8804 15.5094 15.9856 15.2586 15.9879 14.9964C15.9901 14.7342 15.8893 14.4816 15.7072 14.293L13.0002 11.586V7C13.0002 6.73478 12.8948 6.48043 12.7073 6.29289C12.5198 6.10536 12.2654 6 12.0002 6V6Z" />
      </g>
      <defs>
        <clipPath id="clip0_403_2813">
          <rect
            width={24}
            height={24}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default TimeFastIcon;