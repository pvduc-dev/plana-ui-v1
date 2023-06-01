/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const RocketIcon: FC<IconProps> = ({ size, color, onClick, className }) => {
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
      <g clipPath="url(#clip0_403_2911)">
        <path d="M18 6.99959C18 7.19737 17.9414 7.39071 17.8315 7.55516C17.7216 7.71961 17.5654 7.84778 17.3827 7.92347C17.2 7.99916 16.9989 8.01896 16.8049 7.98038C16.6109 7.94179 16.4327 7.84655 16.2929 7.7067C16.153 7.56685 16.0578 7.38866 16.0192 7.19468C15.9806 7.0007 16.0004 6.79963 16.0761 6.61691C16.1518 6.43418 16.28 6.278 16.4444 6.16812C16.6089 6.05824 16.8022 5.99959 17 5.99959C17.2652 5.99959 17.5196 6.10495 17.7071 6.29249C17.8946 6.48002 18 6.73438 18 6.99959ZM14 8.99959C13.8022 8.99959 13.6089 9.05824 13.4444 9.16812C13.28 9.278 13.1518 9.43418 13.0761 9.61691C13.0004 9.79963 12.9806 10.0007 13.0192 10.1947C13.0578 10.3887 13.153 10.5668 13.2929 10.7067C13.4327 10.8466 13.6109 10.9418 13.8049 10.9804C13.9989 11.019 14.2 10.9992 14.3827 10.9235C14.5654 10.8478 14.7216 10.7196 14.8315 10.5552C14.9414 10.3907 15 10.1974 15 9.99959C15 9.73438 14.8946 9.48002 14.7071 9.29249C14.5196 9.10495 14.2652 8.99959 14 8.99959ZM11 11.9996C10.8022 11.9996 10.6089 12.0582 10.4444 12.1681C10.28 12.278 10.1518 12.4342 10.0761 12.6169C10.0004 12.7996 9.98063 13.0007 10.0192 13.1947C10.0578 13.3887 10.153 13.5668 10.2929 13.7067C10.4327 13.8466 10.6109 13.9418 10.8049 13.9804C10.9989 14.019 11.2 13.9992 11.3827 13.9235C11.5654 13.8478 11.7216 13.7196 11.8315 13.5552C11.9414 13.3907 12 13.1974 12 12.9996C12 12.7344 11.8946 12.48 11.7071 12.2925C11.5196 12.1049 11.2652 11.9996 11 11.9996ZM23.866 2.95759L23.791 3.16859C22.289 7.33659 20.848 11.2996 18 14.8196V14.9996C17.9982 16.5313 17.6772 18.0458 17.0574 19.4465C16.4375 20.8472 15.5325 22.1033 14.4 23.1346C13.8005 23.6877 13.0157 23.9963 12.2 23.9996C11.3511 23.9969 10.5378 23.6581 9.93806 23.0573C9.33834 22.4565 9.00105 21.6425 9 20.7936V19.6426C8.26209 19.4046 7.59039 18.9967 7.039 18.4516L7 18.4136L4.707 20.7066C4.5184 20.8888 4.2658 20.9895 4.0036 20.9873C3.7414 20.985 3.49059 20.8798 3.30518 20.6944C3.11977 20.509 3.0146 20.2582 3.01233 19.996C3.01005 19.7338 3.11084 19.4812 3.293 19.2926L5.586 16.9996L5.547 16.9616C5.00157 16.4096 4.59269 15.7377 4.353 14.9996H3.363C2.47149 14.9988 1.61671 14.6444 0.98623 14.0141C0.355746 13.3838 0.00105907 12.5291 0 11.6376C0.00176888 10.7669 0.337503 9.93007 0.938 9.29959C1.9835 8.22585 3.23879 7.37876 4.62576 6.81104C6.01272 6.24332 7.50169 5.9671 9 5.99959H9.18C12.7 3.15259 16.66 1.71159 20.826 0.210592L21.042 0.133592C21.4362 -0.011327 21.8636 -0.0403829 22.2738 0.0498572C22.684 0.140097 23.0598 0.345862 23.3568 0.64284C23.6537 0.939817 23.8595 1.3156 23.9497 1.72578C24.04 2.13596 24.0109 2.5634 23.866 2.95759V2.95759ZM3.363 12.9996H4.1C4.17512 12.1185 4.48258 11.2731 4.991 10.5496C5.54904 9.7467 6.15305 8.97675 6.8 8.24359C5.12253 8.59081 3.58896 9.43636 2.4 10.6696C2.14706 10.9288 2.00379 11.2755 2 11.6376C2.00053 11.9988 2.14433 12.3451 2.39986 12.6004C2.65538 12.8558 3.00176 12.9993 3.363 12.9996V12.9996ZM15.7 17.2516C14.9827 17.8795 14.2309 18.4667 13.448 19.0106C12.7239 19.5141 11.8791 19.8164 11 19.8866V20.7936C11.0005 21.1135 11.1279 21.42 11.3542 21.6461C11.5804 21.8722 11.8871 21.9993 12.207 21.9996C12.5241 21.9949 12.828 21.8719 13.059 21.6546C14.3482 20.4745 15.2659 18.9446 15.7 17.2516ZM21.937 2.06259C21.9104 2.03295 21.8751 2.01239 21.8362 2.00378C21.7973 1.99517 21.7567 1.99895 21.72 2.01459L21.505 2.09259C16.661 3.83759 12.478 5.34559 8.876 8.94659C8.04974 9.79866 7.29768 10.7197 6.628 11.6996C6.22066 12.2778 6.03069 12.9813 6.09162 13.6859C6.15255 14.3905 6.46046 15.0509 6.961 15.5506L8.453 17.0406C8.95242 17.5408 9.6124 17.8485 10.3166 17.9097C11.0208 17.9708 11.7239 17.7813 12.302 17.3746C13.2814 16.705 14.2017 15.9529 15.053 15.1266C18.653 11.5266 20.163 7.33959 21.909 2.49359L21.985 2.28259C22.0012 2.24554 22.0053 2.20432 21.9966 2.16482C21.988 2.12531 21.9671 2.08954 21.937 2.06259V2.06259Z" />
      </g>
      <defs>
        <clipPath id="clip0_403_2911">
          <rect
            width={24}
            height={24}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default RocketIcon;
