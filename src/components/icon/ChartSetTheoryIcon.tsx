/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const ChartSetTheoryIcon: FC<IconProps> = ({
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
      <g clipPath="url(#clip0_403_2862)">
        <path d="M19.9127 8.57327C19.9127 8.54955 19.9127 8.52583 19.9127 8.50108C19.9127 4.13285 16.3715 0.591675 12.0033 0.591675C7.63507 0.591675 4.0939 4.13285 4.0939 8.50108C4.0939 8.52578 4.0939 8.5495 4.0939 8.57327C0.269887 10.6848 -1.11841 15.4964 0.993074 19.3204C3.10456 23.1445 7.91623 24.5328 11.7402 22.4213C11.8289 22.3724 11.9166 22.3217 12.0034 22.2694C15.7435 24.5261 20.6049 23.3237 22.8617 19.5835C25.1184 15.8434 23.9159 10.982 20.1758 8.72524C20.0891 8.67288 20.0014 8.62221 19.9127 8.57327ZM12.0033 19.8442C10.9397 18.8939 10.2544 17.5919 10.0734 16.1772C11.3391 16.4942 12.6635 16.4942 13.9293 16.1772C13.7481 17.5896 13.0644 18.8896 12.0033 19.8393V19.8442ZM12.0033 14.4332C11.3791 14.4335 10.7588 14.335 10.1653 14.1415C10.4351 12.9295 11.0779 11.8323 12.0033 11.0044C12.9288 11.8323 13.5715 12.9295 13.8413 14.1415C13.2478 14.335 12.6275 14.4335 12.0033 14.4332ZM8.37092 13.1874C7.27667 12.34 6.51261 11.137 6.21068 9.78639C7.54067 9.35327 8.9809 9.40403 10.2771 9.92974C9.38839 10.8461 8.73439 11.9637 8.37092 13.1874ZM13.7295 9.92477C15.0257 9.39906 16.466 9.3483 17.7959 9.78142C17.495 11.1339 16.7309 12.3387 15.6357 13.1874C15.2729 11.962 14.6189 10.8425 13.7295 9.92477ZM12.0033 2.56905C14.9879 2.57289 17.5064 4.7905 17.8879 7.75071C15.8939 7.24999 13.7832 7.54539 12.0033 8.57425C10.2234 7.54535 8.11273 7.24999 6.11872 7.75071C6.50018 4.79055 9.01868 2.57289 12.0033 2.56905ZM2.11657 15.4218C2.11676 13.588 2.9659 11.8577 4.41621 10.7355C4.99325 12.681 6.2929 14.332 8.04861 15.3496C8.04861 15.3733 8.04861 15.397 8.04861 15.4218C8.04753 17.4744 8.84698 19.4464 10.2771 20.9188C7.24086 22.1496 3.78181 20.686 2.55106 17.6498C2.26418 16.942 2.11662 16.1855 2.11657 15.4218ZM15.958 21.3539C15.194 21.3544 14.4372 21.2067 13.7295 20.9189C15.1596 19.4465 15.9591 17.4744 15.958 15.4218C15.958 15.3971 15.958 15.3734 15.958 15.3497C17.7141 14.3322 19.0141 12.6812 19.5914 10.7355C22.1796 12.7442 22.6494 16.4706 20.6407 19.0588C19.5178 20.5057 17.7895 21.3528 15.958 21.3539Z" />
      </g>
      <defs>
        <clipPath id="clip0_403_2862">
          <rect
            width={24}
            height={24}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default ChartSetTheoryIcon;