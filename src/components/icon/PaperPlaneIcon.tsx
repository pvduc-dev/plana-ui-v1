/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const PaperPlaneIcon: FC<IconProps> = ({ size, color, onClick, className }) => {
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
      <g clipPath="url(#clip0_403_3286)">
        <path d="M23.1189 0.882014C22.7604 0.519141 22.3144 0.254869 21.8239 0.11473C21.3334 -0.0254085 20.8151 -0.0366769 20.3189 0.0820139L4.31895 3.45201C3.39753 3.57838 2.52968 3.95949 1.81315 4.55243C1.09662 5.14536 0.559862 5.92657 0.263324 6.80808C-0.033214 7.68959 -0.0777536 8.63638 0.134721 9.54183C0.347196 10.4473 0.808246 11.2754 1.46595 11.933L3.18395 13.65C3.27693 13.743 3.35067 13.8534 3.40095 13.9748C3.45123 14.0963 3.47705 14.2265 3.47695 14.358V17.526C3.47916 17.9714 3.5817 18.4107 3.77695 18.811L3.76895 18.818L3.79495 18.844C4.08796 19.4331 4.56653 19.9096 5.15695 20.2L5.18295 20.226L5.18995 20.218C5.59031 20.4133 6.02952 20.5158 6.47495 20.518H9.64295C9.908 20.5178 10.1623 20.6228 10.3499 20.81L12.0669 22.527C12.5275 22.9926 13.0756 23.3625 13.6797 23.6153C14.2839 23.8681 14.9321 23.9989 15.5869 24C16.1327 23.9993 16.6747 23.9102 17.1919 23.736C18.0654 23.4492 18.8413 22.924 19.4322 22.2197C20.023 21.5154 20.4053 20.66 20.5359 19.75L23.9109 3.71501C24.0358 3.21465 24.0284 2.69043 23.8896 2.19378C23.7507 1.69712 23.4852 1.24508 23.1189 0.882014V0.882014ZM4.59995 12.238L2.88095 10.521C2.48067 10.1304 2.20012 9.63366 2.07224 9.08917C1.94435 8.54468 1.97443 7.97501 2.15895 7.44701C2.33784 6.90534 2.66855 6.42644 3.11175 6.06728C3.55494 5.70811 4.09196 5.4838 4.65895 5.42101L20.4999 2.08601L5.47495 17.113V14.358C5.47646 13.9644 5.39991 13.5743 5.24972 13.2104C5.09953 12.8465 4.87868 12.516 4.59995 12.238V12.238ZM18.5709 19.408C18.4942 19.9604 18.265 20.4804 17.909 20.9097C17.5531 21.339 17.0846 21.6606 16.5561 21.8384C16.0275 22.0162 15.4599 22.0431 14.9169 21.9163C14.3739 21.7894 13.877 21.5136 13.4819 21.12L11.7619 19.4C11.4843 19.1209 11.1541 18.8995 10.7904 18.7488C10.4266 18.5981 10.0367 18.521 9.64295 18.522H6.88795L21.9149 3.50001L18.5709 19.408Z" />
      </g>
      <defs>
        <clipPath id="clip0_403_3286">
          <rect
            width={24}
            height={24}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default PaperPlaneIcon;
