/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const VectorIcon: FC<IconProps> = ({ size, color, onClick, className }) => {
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
      <g clipPath="url(#clip0_403_3052)">
        <path d="M10.007 3L8 2.986C7.9963 2.19278 7.67859 1.43331 7.11639 0.873724C6.55418 0.314139 5.79323 -8.63726e-06 5 1.78109e-10L3 1.7811e-10C2.20435 1.7811e-10 1.44129 0.31607 0.87868 0.87868C0.31607 1.44129 0 2.20435 0 3L0 5C-2.16263e-06 5.79444 0.315107 6.55644 0.876203 7.11885C1.4373 7.68126 2.19856 7.99815 2.993 8L2.979 9.993C2.97808 10.1244 3.00306 10.2547 3.05253 10.3764C3.102 10.4982 3.17497 10.609 3.26729 10.7025C3.3596 10.796 3.46945 10.8704 3.59054 10.9215C3.71163 10.9725 3.84159 10.9992 3.973 11H3.979C4.24301 11 4.49631 10.8956 4.68364 10.7096C4.87098 10.5236 4.97715 10.271 4.979 10.007L4.993 8H5C5.79565 8 6.55871 7.68393 7.12132 7.12132C7.68393 6.55871 8 5.79565 8 5V4.986L9.993 5H10C10.1313 5.00046 10.2614 4.97505 10.3829 4.92522C10.5045 4.87539 10.6149 4.80212 10.7081 4.70958C10.8013 4.61705 10.8754 4.50707 10.926 4.38592C10.9767 4.26477 11.003 4.13482 11.0035 4.0035C11.004 3.87218 10.9785 3.74205 10.9287 3.62055C10.8789 3.49905 10.8056 3.38855 10.7131 3.29537C10.6205 3.20218 10.5106 3.12814 10.3894 3.07746C10.2683 3.02678 10.1383 3.00046 10.007 3ZM6 5C6 5.26522 5.89464 5.51957 5.70711 5.70711C5.51957 5.89464 5.26522 6 5 6H3C2.73478 6 2.48043 5.89464 2.29289 5.70711C2.10536 5.51957 2 5.26522 2 5V3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2H5C5.26522 2 5.51957 2.10536 5.70711 2.29289C5.89464 2.48043 6 2.73478 6 3V5Z" />
        <path d="M20.9997 0H18.9997C18.2053 -2.16263e-06 17.4433 0.315107 16.8809 0.876203C16.3185 1.4373 16.0016 2.19856 15.9997 2.993L14.0057 2.979H13.9997C13.7345 2.97807 13.4798 3.08254 13.2916 3.26942C13.1034 3.4563 12.9972 3.71028 12.9962 3.9755C12.9953 4.24072 13.0998 4.49544 13.2866 4.68363C13.4735 4.87182 13.7275 4.97807 13.9927 4.979L15.9997 4.993V5C15.9997 5.79565 16.3158 6.55871 16.8784 7.12132C17.441 7.68393 18.2041 8 18.9997 8H19.0137L18.9997 9.993C18.9988 10.1243 19.0238 10.2545 19.0732 10.3762C19.1226 10.4979 19.1954 10.6087 19.2877 10.7022C19.3799 10.7957 19.4896 10.8701 19.6106 10.9212C19.7315 10.9723 19.8614 10.9991 19.9927 11H19.9997C20.2637 11 20.517 10.8956 20.7044 10.7096C20.8917 10.5236 20.9979 10.271 20.9997 10.007L21.0137 8C21.8069 7.9963 22.5664 7.67859 23.126 7.11639C23.6856 6.55418 23.9997 5.79323 23.9997 5V3C23.9997 2.20435 23.6837 1.44129 23.121 0.87868C22.5584 0.31607 21.7954 0 20.9997 0V0ZM21.9997 5C21.9997 5.26522 21.8944 5.51957 21.7068 5.70711C21.5193 5.89464 21.2649 6 20.9997 6H18.9997C18.7345 6 18.4802 5.89464 18.2926 5.70711C18.1051 5.51957 17.9997 5.26522 17.9997 5V3C17.9997 2.73478 18.1051 2.48043 18.2926 2.29289C18.4802 2.10536 18.7345 2 18.9997 2H20.9997C21.2649 2 21.5193 2.10536 21.7068 2.29289C21.8944 2.48043 21.9997 2.73478 21.9997 3V5Z" />
        <path d="M21.0067 15.9994L21.0207 14.0054C21.0215 13.8741 20.9964 13.7439 20.9469 13.6222C20.8974 13.5006 20.8244 13.3899 20.7321 13.2965C20.6398 13.2031 20.53 13.1288 20.409 13.0778C20.2879 13.0268 20.158 13.0002 20.0267 12.9994H20.0207C19.7567 12.9994 19.5034 13.1038 19.3161 13.2898C19.1287 13.4758 19.0226 13.7284 19.0207 13.9924L19.0067 15.9994H18.9997C18.2041 15.9994 17.441 16.3155 16.8784 16.8781C16.3158 17.4407 15.9997 18.2037 15.9997 18.9994V19.0134L14.0067 18.9994H13.9997C13.7345 18.9985 13.4798 19.1029 13.2916 19.2898C13.1034 19.4767 12.9972 19.7307 12.9962 19.9959C12.9953 20.2611 13.0998 20.5158 13.2866 20.704C13.4735 20.8922 13.7275 20.9985 13.9927 20.9994L15.9997 21.0134C16.0034 21.8066 16.3211 22.5661 16.8833 23.1257C17.4455 23.6852 18.2065 23.9994 18.9997 23.9994H20.9997C21.7954 23.9994 22.5584 23.6833 23.121 23.1207C23.6837 22.5581 23.9997 21.795 23.9997 20.9994V18.9994C23.9997 18.2049 23.6846 17.4429 23.1235 16.8805C22.5624 16.3181 21.8012 16.0012 21.0067 15.9994V15.9994ZM21.9997 20.9994C21.9997 21.2646 21.8944 21.5189 21.7068 21.7065C21.5193 21.894 21.2649 21.9994 20.9997 21.9994H18.9997C18.7345 21.9994 18.4802 21.894 18.2926 21.7065C18.1051 21.5189 17.9997 21.2646 17.9997 20.9994V18.9994C17.9997 18.7342 18.1051 18.4798 18.2926 18.2923C18.4802 18.1047 18.7345 17.9994 18.9997 17.9994H20.9997C21.2649 17.9994 21.5193 18.1047 21.7068 18.2923C21.8944 18.4798 21.9997 18.7342 21.9997 18.9994V20.9994Z" />
        <path d="M10.007 19.0204L8 19.0064V18.9994C8 18.2037 7.68393 17.4407 7.12132 16.8781C6.55871 16.3155 5.79565 15.9994 5 15.9994H4.986L5 14.0064C5.00092 13.8751 4.97597 13.7448 4.92656 13.6232C4.87716 13.5015 4.80427 13.3907 4.71206 13.2972C4.61985 13.2037 4.51013 13.1293 4.38915 13.0782C4.26818 13.0271 4.13832 13.0003 4.007 12.9994H4C3.73599 12.9994 3.48269 13.1038 3.29536 13.2898C3.10802 13.4758 3.00185 13.7284 3 13.9924L2.986 15.9994C2.19278 16.0031 1.43331 16.3208 0.873724 16.883C0.314139 17.4452 -8.63726e-06 18.2062 1.78109e-10 18.9994L1.78109e-10 20.9994C1.7811e-10 21.795 0.31607 22.5581 0.87868 23.1207C1.44129 23.6833 2.20435 23.9994 3 23.9994H5C5.79444 23.9994 6.55644 23.6843 7.11885 23.1232C7.68126 22.5621 7.99815 21.8008 8 21.0064L9.994 21.0204H10C10.2652 21.0213 10.5199 20.9168 10.7081 20.73C10.8963 20.5431 11.0026 20.2891 11.0035 20.0239C11.0044 19.7587 10.9 19.5039 10.7131 19.3157C10.5262 19.1276 10.2722 19.0213 10.007 19.0204V19.0204ZM6 20.9994C6 21.2646 5.89464 21.5189 5.70711 21.7065C5.51957 21.894 5.26522 21.9994 5 21.9994H3C2.73478 21.9994 2.48043 21.894 2.29289 21.7065C2.10536 21.5189 2 21.2646 2 20.9994V18.9994C2 18.7342 2.10536 18.4798 2.29289 18.2923C2.48043 18.1047 2.73478 17.9994 3 17.9994H5C5.26522 17.9994 5.51957 18.1047 5.70711 18.2923C5.89464 18.4798 6 18.7342 6 18.9994V20.9994Z" />
      </g>
      <defs>
        <clipPath id="clip0_403_3052">
          <rect
            width={24}
            height={24}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default VectorIcon;
