/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const FootballIcon: FC<IconProps> = ({ size, color, onClick, className }) => {
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
      <g clipPath="url(#clip0_403_3191)">
        <path d="M12.0032 -0.00231934C5.36554 -0.00231934 -0.0153809 5.3786 -0.0153809 12.0162C-0.0153809 18.6539 5.36554 24.0348 12.0032 24.0348C18.6408 24.0348 24.0217 18.6539 24.0217 12.0162C24.0217 5.3786 18.6408 -0.00231934 12.0032 -0.00231934ZM19.4519 8.83788L20.2279 6.3289C21.2736 7.8446 21.8777 9.62093 21.9729 11.4599L19.8309 9.95088C19.4768 9.70118 19.3237 9.25184 19.4519 8.83788ZM14.5999 2.35287H14.5919L12.5919 3.80885C12.2413 4.06371 11.7665 4.06371 11.4159 3.80885L9.41587 2.35287C11.1119 1.88224 12.9039 1.88224 14.5999 2.35287ZM3.77188 6.32988L4.5479 8.83788C4.67606 9.25184 4.52301 9.70118 4.16892 9.95088L2.02692 11.4599C2.12212 9.62126 2.72624 7.84521 3.77188 6.32988ZM4.00692 17.9839L6.75393 17.9929C7.18757 17.9938 7.57124 18.2741 7.70395 18.6869L8.56795 21.3799C6.75187 20.7115 5.16787 19.5321 4.00692 17.9839ZM15.4329 21.3799L16.2959 18.6869C16.4285 18.2744 16.8116 17.9942 17.2449 17.9929L19.9929 17.9839C18.8325 19.5323 17.2488 20.7117 15.4329 21.3799ZM21.1689 15.9799L17.2389 15.9929C15.9377 15.9946 14.7868 16.8371 14.3919 18.0769L13.1569 21.9269C12.3886 22.0242 11.6111 22.0242 10.8429 21.9269L9.60787 18.0759C9.21253 16.8361 8.06118 15.994 6.75988 15.9929L2.83087 15.9809C2.52848 15.2832 2.30737 14.5531 2.17185 13.8049L5.32087 11.5859C6.38531 10.8388 6.84529 9.48963 6.45885 8.24787L5.32387 4.57587C5.89743 4.05466 6.52968 3.60195 7.20787 3.22685L10.2359 5.42684C11.2869 6.19362 12.7128 6.19362 13.7639 5.42684L16.7918 3.22685C17.4699 3.60218 18.1021 4.05485 18.6758 4.57587L17.5409 8.24787C17.1545 9.48959 17.6144 10.8387 18.6788 11.5859L21.8279 13.8049C21.6925 14.5528 21.4713 15.2826 21.1689 15.9799Z" />
        <path d="M15.3858 9.22367L13.4688 7.83167C12.5937 7.19267 11.4059 7.19267 10.5308 7.83167L8.6138 9.22367C7.73363 9.85962 7.36636 10.9922 7.70578 12.0237L8.43778 14.2767C8.77233 15.3059 9.73252 16.0019 10.8148 15.9997H13.1848C14.2681 15.9997 15.2282 15.3021 15.5628 14.2716L16.2938 12.0186C16.6311 10.9887 16.264 9.85873 15.3858 9.22367ZM14.3918 11.4006L13.6607 13.6536C13.5939 13.86 13.4017 13.9998 13.1847 13.9996H10.8147C10.5982 13.9993 10.4064 13.8597 10.3397 13.6536L9.60779 11.3997C9.54043 11.1933 9.61397 10.967 9.7898 10.8396L11.7058 9.44966C11.8811 9.32225 12.1186 9.32225 12.2938 9.44966L14.2108 10.8417C14.3858 10.9692 14.4588 11.1948 14.3918 11.4006Z" />
      </g>
      <defs>
        <clipPath id="clip0_403_3191">
          <rect
            width={24}
            height={24}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default FootballIcon;
