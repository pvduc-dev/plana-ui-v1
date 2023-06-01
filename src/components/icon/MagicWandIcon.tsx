/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const MagicWandIcon: FC<IconProps> = ({ size, color, onClick, className }) => {
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
      <g clipPath="url(#clip0_403_2949)">
        <path d="M17.9999 9.06371C18 8.66147 17.9206 8.26318 17.7661 7.89178C17.6117 7.52038 17.3852 7.18321 17.0999 6.89971C16.516 6.34256 15.7399 6.0317 14.9329 6.0317C14.1258 6.0317 13.3498 6.34256 12.7659 6.89971L0.899887 18.7687C0.358306 19.3494 0.0633283 20.1177 0.0771231 20.9117C0.0909179 21.7056 0.412407 22.4632 0.973835 23.0248C1.53526 23.5863 2.29278 23.908 3.08672 23.922C3.88067 23.936 4.64904 23.6412 5.22989 23.0997L17.0999 11.2307C17.3857 10.9469 17.6124 10.6093 17.7668 10.2373C17.9213 9.86536 18.0005 9.46647 17.9999 9.06371V9.06371ZM3.81589 21.6877C3.61373 21.8804 3.34517 21.9879 3.06589 21.9879C2.78661 21.9879 2.51804 21.8804 2.31589 21.6877C2.1173 21.4886 2.00578 21.2189 2.00578 20.9377C2.00578 20.6565 2.1173 20.3868 2.31589 20.1877L10.0849 12.4177L11.5899 13.9227L3.81589 21.6877ZM15.6879 9.81571L12.9999 12.5047L11.4999 10.9997L14.1889 8.31171C14.2847 8.2022 14.4021 8.11355 14.5336 8.05123C14.6651 7.98892 14.808 7.95428 14.9535 7.94945C15.0989 7.94462 15.2438 7.96971 15.3792 8.02316C15.5145 8.07662 15.6375 8.1573 15.7404 8.26021C15.8433 8.36312 15.924 8.48606 15.9774 8.62142C16.0309 8.75678 16.056 8.90167 16.0511 9.04713C16.0463 9.19258 16.0117 9.33549 15.9494 9.46701C15.887 9.59853 15.7984 9.71585 15.6889 9.81171L15.6879 9.81571ZM4.86289 2.85471L6.41289 2.41271L6.85489 0.862707C6.92609 0.613991 7.07635 0.395224 7.28293 0.239487C7.48951 0.0837495 7.74118 -0.000488281 7.99989 -0.000488281C8.25859 -0.000488281 8.51027 0.0837495 8.71685 0.239487C8.92343 0.395224 9.07368 0.613991 9.14489 0.862707L9.58689 2.41271L11.1369 2.85471C11.3856 2.92591 11.6044 3.07617 11.7601 3.28275C11.9158 3.48933 12.0001 3.741 12.0001 3.99971C12.0001 4.25841 11.9158 4.51009 11.7601 4.71667C11.6044 4.92325 11.3856 5.0735 11.1369 5.14471L9.58689 5.58671L9.14489 7.13671C9.07368 7.38542 8.92343 7.60419 8.71685 7.75993C8.51027 7.91566 8.25859 7.9999 7.99989 7.9999C7.74118 7.9999 7.48951 7.91566 7.28293 7.75993C7.07635 7.60419 6.92609 7.38542 6.85489 7.13671L6.41289 5.58671L4.86289 5.14471C4.61417 5.0735 4.3954 4.92325 4.23967 4.71667C4.08393 4.51009 3.99969 4.25841 3.99969 3.99971C3.99969 3.741 4.08393 3.48933 4.23967 3.28275C4.3954 3.07617 4.61417 2.92591 4.86289 2.85471V2.85471ZM23.1369 17.1447L21.5869 17.5867L21.1449 19.1367C21.0737 19.3854 20.9234 19.6042 20.7168 19.7599C20.5103 19.9157 20.2586 19.9999 19.9999 19.9999C19.7412 19.9999 19.4895 19.9157 19.2829 19.7599C19.0763 19.6042 18.9261 19.3854 18.8549 19.1367L18.4129 17.5867L16.8629 17.1447C16.6142 17.0735 16.3954 16.9232 16.2397 16.7167C16.0839 16.5101 15.9997 16.2584 15.9997 15.9997C15.9997 15.741 16.0839 15.4893 16.2397 15.2827C16.3954 15.0762 16.6142 14.9259 16.8629 14.8547L18.4129 14.4127L18.8549 12.8627C18.9261 12.614 19.0763 12.3952 19.2829 12.2395C19.4895 12.0838 19.7412 11.9995 19.9999 11.9995C20.2586 11.9995 20.5103 12.0838 20.7168 12.2395C20.9234 12.3952 21.0737 12.614 21.1449 12.8627L21.5869 14.4127L23.1369 14.8547C23.3856 14.9259 23.6044 15.0762 23.7601 15.2827C23.9158 15.4893 24.0001 15.741 24.0001 15.9997C24.0001 16.2584 23.9158 16.5101 23.7601 16.7167C23.6044 16.9232 23.3856 17.0735 23.1369 17.1447V17.1447ZM17.7549 2.49971L19.1109 2.11271L19.4999 0.754707C19.5632 0.538524 19.6949 0.348679 19.8751 0.21362C20.0554 0.0785608 20.2746 0.00556181 20.4999 0.00556181C20.7252 0.00556181 20.9443 0.0785608 21.1246 0.21362C21.3049 0.348679 21.4366 0.538524 21.4999 0.754707L21.8869 2.11071L23.2429 2.49771C23.4591 2.56102 23.6489 2.69268 23.784 2.87296C23.919 3.05325 23.992 3.27244 23.992 3.49771C23.992 3.72297 23.919 3.94217 23.784 4.12245C23.6489 4.30273 23.4591 4.4344 23.2429 4.49771L21.8869 4.88471L21.4999 6.24371C21.4366 6.45989 21.3049 6.64973 21.1246 6.78479C20.9443 6.91985 20.7252 6.99285 20.4999 6.99285C20.2746 6.99285 20.0554 6.91985 19.8751 6.78479C19.6949 6.64973 19.5632 6.45989 19.4999 6.24371L19.1129 4.88871L17.7549 4.49971C17.5387 4.4364 17.3489 4.30473 17.2138 4.12445C17.0787 3.94417 17.0057 3.72497 17.0057 3.49971C17.0057 3.27444 17.0787 3.05525 17.2138 2.87496C17.3489 2.69468 17.5387 2.56302 17.7549 2.49971V2.49971Z" />
      </g>
      <defs>
        <clipPath id="clip0_403_2949">
          <rect
            width={24}
            height={24}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default MagicWandIcon;
