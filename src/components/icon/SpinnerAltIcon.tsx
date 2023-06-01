/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const SpinnerAltIcon: FC<IconProps> = ({ size, color, onClick, className }) => {
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
      <g clipPath="url(#clip0_403_2842)">
        <path d="M13 1V3C13 3.26522 12.8946 3.51957 12.7071 3.70711C12.5196 3.89464 12.2652 4 12 4C11.7348 4 11.4804 3.89464 11.2929 3.70711C11.1054 3.51957 11 3.26522 11 3V1C11 0.734784 11.1054 0.48043 11.2929 0.292893C11.4804 0.105357 11.7348 0 12 0C12.2652 0 12.5196 0.105357 12.7071 0.292893C12.8946 0.48043 13 0.734784 13 1V1ZM12 20C11.7348 20 11.4804 20.1054 11.2929 20.2929C11.1054 20.4804 11 20.7348 11 21V23C11 23.2652 11.1054 23.5196 11.2929 23.7071C11.4804 23.8946 11.7348 24 12 24C12.2652 24 12.5196 23.8946 12.7071 23.7071C12.8946 23.5196 13 23.2652 13 23V21C13 20.7348 12.8946 20.4804 12.7071 20.2929C12.5196 20.1054 12.2652 20 12 20ZM4 12C4 11.7348 3.89464 11.4804 3.70711 11.2929C3.51957 11.1054 3.26522 11 3 11H1C0.734784 11 0.48043 11.1054 0.292893 11.2929C0.105357 11.4804 0 11.7348 0 12C0 12.2652 0.105357 12.5196 0.292893 12.7071C0.48043 12.8946 0.734784 13 1 13H3C3.26522 13 3.51957 12.8946 3.70711 12.7071C3.89464 12.5196 4 12.2652 4 12ZM23 11H21C20.7348 11 20.4804 11.1054 20.2929 11.2929C20.1054 11.4804 20 11.7348 20 12C20 12.2652 20.1054 12.5196 20.2929 12.7071C20.4804 12.8946 20.7348 13 21 13H23C23.2652 13 23.5196 12.8946 23.7071 12.7071C23.8946 12.5196 24 12.2652 24 12C24 11.7348 23.8946 11.4804 23.7071 11.2929C23.5196 11.1054 23.2652 11 23 11ZM18.018 1.618C17.9044 1.5521 17.7788 1.50924 17.6486 1.49187C17.5184 1.4745 17.386 1.48296 17.2591 1.51677C17.1321 1.55057 17.0131 1.60906 16.9088 1.68888C16.8044 1.76871 16.7168 1.86831 16.651 1.982L15.651 3.713C15.5183 3.94256 15.4822 4.21541 15.5507 4.47157C15.6191 4.72773 15.7865 4.94622 16.016 5.079C16.1677 5.1677 16.3403 5.21431 16.516 5.214C16.6915 5.214 16.864 5.16779 17.016 5.08002C17.168 4.99225 17.2942 4.86602 17.382 4.714L18.382 2.983C18.5145 2.75365 18.5505 2.48113 18.4823 2.22523C18.414 1.96932 18.2471 1.75094 18.018 1.618V1.618ZM7.987 18.921C7.75756 18.7882 7.4848 18.752 7.22865 18.8202C6.97251 18.8885 6.75395 19.0557 6.621 19.285L5.621 21.016C5.48823 21.2454 5.45199 21.5182 5.52025 21.7743C5.5885 22.0305 5.75567 22.2491 5.985 22.382C6.13672 22.4706 6.3093 22.5172 6.485 22.517C6.6607 22.5172 6.83335 22.471 6.98555 22.3833C7.13776 22.2955 7.26415 22.1692 7.352 22.017L8.352 20.286C8.48437 20.0565 8.52028 19.7839 8.45185 19.528C8.38341 19.2721 8.21623 19.0538 7.987 18.921V18.921ZM4.715 6.621L2.984 5.621C2.75505 5.49779 2.48712 5.4686 2.23701 5.5396C1.9869 5.61061 1.77428 5.77623 1.64422 6.00136C1.51417 6.22649 1.4769 6.49342 1.54033 6.74555C1.60376 6.99769 1.7629 7.21521 1.984 7.352L3.715 8.352C3.94395 8.47521 4.21188 8.5044 4.46199 8.4334C4.7121 8.36239 4.92472 8.19677 5.05478 7.97164C5.18483 7.74651 5.2221 7.47958 5.15867 7.22745C5.09524 6.97531 4.9361 6.75779 4.715 6.621V6.621ZM22.015 16.651L20.284 15.651C20.0551 15.5278 19.7871 15.4986 19.537 15.5696C19.2869 15.6406 19.0743 15.8062 18.9442 16.0314C18.8142 16.2565 18.7769 16.5234 18.8403 16.7756C18.9038 17.0277 19.0629 17.2452 19.284 17.382L21.015 18.382C21.1667 18.4707 21.3393 18.5173 21.515 18.517C21.7351 18.517 21.9491 18.4443 22.1237 18.3103C22.2984 18.1763 22.4239 17.9884 22.4809 17.7758C22.5379 17.5632 22.5231 17.3377 22.4388 17.1343C22.3546 16.931 22.2056 16.7611 22.015 16.651V16.651ZM7.349 1.982C7.21221 1.7609 6.99469 1.60176 6.74255 1.53833C6.49042 1.4749 6.22349 1.51217 5.99836 1.64222C5.77323 1.77228 5.60761 1.9849 5.5366 2.23501C5.4656 2.48512 5.49479 2.75305 5.618 2.982L6.618 4.713C6.70577 4.86502 6.832 4.99125 6.98401 5.07902C7.13603 5.16679 7.30847 5.213 7.484 5.213C7.65971 5.21331 7.83232 5.1667 7.984 5.078C8.2135 4.94522 8.38088 4.72673 8.44933 4.47057C8.51777 4.21441 8.48169 3.94156 8.349 3.712L7.349 1.982ZM17.379 19.282C17.2422 19.0609 17.0247 18.9018 16.7726 18.8383C16.5204 18.7749 16.2535 18.8122 16.0284 18.9422C15.8032 19.0723 15.6376 19.2849 15.5666 19.535C15.4956 19.7851 15.5248 20.0531 15.648 20.282L16.648 22.013C16.7848 22.2341 17.0023 22.3932 17.2544 22.4567C17.5066 22.5201 17.7735 22.4828 17.9986 22.3528C18.2238 22.2227 18.3894 22.0101 18.4604 21.76C18.5314 21.5099 18.5022 21.2419 18.379 21.013L17.379 19.282ZM19.787 8.482C19.9625 8.48199 20.135 8.43578 20.287 8.348L22.018 7.348C22.2391 7.21121 22.3982 6.99369 22.4617 6.74155C22.5251 6.48942 22.4878 6.22249 22.3578 5.99736C22.2277 5.77223 22.0151 5.60661 21.765 5.5356C21.5149 5.4646 21.2469 5.49379 21.018 5.617L19.287 6.617C19.0969 6.72729 18.9484 6.89716 18.8645 7.10033C18.7806 7.30349 18.766 7.52864 18.8229 7.74095C18.8798 7.95326 19.0051 8.1409 19.1794 8.27486C19.3536 8.40881 19.5672 8.48161 19.787 8.482ZM3.713 15.648L1.982 16.648C1.79137 16.7581 1.64239 16.928 1.55815 17.1313C1.47392 17.3347 1.45915 17.5602 1.51612 17.7728C1.57309 17.9854 1.69863 18.1733 1.87327 18.3073C2.0479 18.4413 2.26187 18.514 2.482 18.514C2.65771 18.5143 2.83032 18.4677 2.982 18.379L4.713 17.379C4.9341 17.2422 5.09324 17.0247 5.15667 16.7726C5.2201 16.5204 5.18283 16.2535 5.05278 16.0284C4.92272 15.8032 4.7101 15.6376 4.45999 15.5666C4.20988 15.4956 3.94195 15.5248 3.713 15.648V15.648Z" />
      </g>
      <defs>
        <clipPath id="clip0_403_2842">
          <rect
            width={24}
            height={24}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default SpinnerAltIcon;
