/* eslint max-len: 0 */
import type { FC } from 'react';
import type { IconProps } from './IconProps';
const WomanHeadIcon: FC<IconProps> = ({ size, color, onClick, className }) => {
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
      <g clipPath="url(#clip0_403_2794)">
        <path d="M14.4998 12.9994C14.2031 12.9994 13.9131 12.9114 13.6665 12.7466C13.4198 12.5818 13.2275 12.3475 13.114 12.0734C13.0005 11.7994 12.9708 11.4978 13.0286 11.2068C13.0865 10.9158 13.2294 10.6485 13.4391 10.4388C13.6489 10.229 13.9162 10.0861 14.2072 10.0282C14.4981 9.97036 14.7997 10.0001 15.0738 10.1136C15.3479 10.2271 15.5822 10.4194 15.747 10.6661C15.9118 10.9127 15.9998 11.2027 15.9998 11.4994C15.9998 11.8972 15.8418 12.2788 15.5605 12.5601C15.2792 12.8414 14.8976 12.9994 14.4998 12.9994ZM23.9248 18.1434C24.0496 18.8616 24.0158 19.5984 23.8259 20.3022C23.636 21.006 23.2944 21.6598 22.8252 22.2177C22.356 22.7756 21.7705 23.2241 21.1097 23.5319C20.4489 23.8397 19.7288 23.9992 18.9998 23.9994H14.9998C14.7346 23.9994 14.4802 23.8941 14.2927 23.7065C14.1052 23.519 13.9998 23.2646 13.9998 22.9994V20.7364C13.347 20.9086 12.6749 20.9969 11.9998 20.9994C11.3243 20.996 10.6521 20.9052 9.99981 20.7294V22.9994C9.99981 23.2646 9.89446 23.519 9.70692 23.7065C9.51938 23.8941 9.26503 23.9994 8.99981 23.9994H4.99982C4.27085 23.9992 3.55073 23.8397 2.88993 23.5319C2.22912 23.2241 1.6436 22.7756 1.1744 22.2177C0.7052 21.6598 0.363664 21.006 0.173722 20.3022C-0.0162204 19.5984 -0.049974 18.8616 0.0748257 18.1434L0.374825 16.4034C0.474583 15.8247 0.745419 15.2892 1.15241 14.8658C1.5594 14.4425 2.08387 14.1508 2.65821 14.0283C3.23254 13.9058 3.83039 13.9582 4.37466 14.1787C4.91894 14.3992 5.38468 14.7777 5.71182 15.2654C6.97582 17.1234 9.40881 18.9994 11.9998 18.9994C15.1298 18.9994 18.2138 16.2204 19.1298 13.6234C19.2033 13.4282 19.3344 13.2599 19.5056 13.1408C19.6768 13.0217 19.8802 12.9574 20.0888 12.9564L20.5208 12.9634C20.7144 12.9658 20.9066 12.9297 21.0861 12.8571C21.2657 12.7846 21.429 12.6771 21.5666 12.5409C21.7042 12.4046 21.8134 12.2424 21.8878 12.0636C21.9621 11.8848 22.0002 11.6931 21.9998 11.4994C21.9994 11.1487 21.8762 10.8092 21.6515 10.5399C21.4268 10.2706 21.1148 10.0885 20.7698 10.0254C20.557 9.98682 20.3625 9.8803 20.2154 9.72183C20.0683 9.56335 19.9765 9.36146 19.9538 9.14642C19.7483 7.18171 18.821 5.36314 17.3517 4.04283C15.8823 2.72252 13.9752 1.99439 11.9998 1.99942C6.42282 1.99942 4.89182 5.62742 3.66182 8.54342C3.43782 9.07042 3.22682 9.57342 2.99982 10.0264C5.01061 9.92009 6.97131 9.36042 8.73524 8.38927C10.4992 7.41812 12.0206 6.06065 13.1858 4.41842C13.2621 4.31152 13.3587 4.2207 13.4701 4.15114C13.5815 4.08158 13.7055 4.03464 13.8351 4.013C13.9646 3.99137 14.0971 3.99546 14.2251 4.02504C14.353 4.05462 14.4739 4.10912 14.5808 4.18542C14.6877 4.26172 14.7785 4.35832 14.8481 4.46972C14.9176 4.58112 14.9646 4.70512 14.9862 4.83466C15.0079 4.9642 15.0038 5.09673 14.9742 5.22469C14.9446 5.35264 14.8901 5.47352 14.8138 5.58042C13.5158 7.42058 11.8224 8.94689 9.85781 10.0474C10.1573 10.1209 10.4268 10.285 10.6297 10.5172C10.8326 10.7494 10.959 11.0385 10.9917 11.3452C11.0244 11.6518 10.9618 11.961 10.8124 12.2308C10.663 12.5006 10.4341 12.7178 10.1569 12.8528C9.87963 12.9878 9.56751 13.034 9.26302 12.9853C8.95853 12.9365 8.67646 12.7951 8.45523 12.5803C8.23399 12.3655 8.08434 12.0877 8.02665 11.7848C7.96895 11.4819 8.00603 11.1685 8.13282 10.8874C5.83364 11.8184 3.34762 12.1952 0.875825 11.9874C0.669797 11.9598 0.477495 11.8687 0.325662 11.7267C0.17383 11.5847 0.070016 11.399 0.0286572 11.1952C-0.0127017 10.9915 0.010451 10.78 0.0948952 10.59C0.179339 10.4001 0.320878 10.2412 0.499825 10.1354C1.10436 9.44952 1.55421 8.64157 1.81882 7.76642C3.12382 4.67342 5.09982 -0.000582344 11.9998 -0.000582344C14.3542 -0.00615982 16.6346 0.821466 18.4373 2.33578C20.2401 3.8501 21.4489 5.95342 21.8498 8.27342C22.4862 8.53946 23.0297 8.9876 23.4123 9.56155C23.7948 10.1355 23.9992 10.8097 23.9998 11.4994C23.9981 12.3304 23.6946 13.1325 23.1458 13.7564C23.1528 13.7824 23.1708 13.8034 23.1758 13.8314L23.9248 18.1434ZM7.99982 19.9394C6.41807 19.0918 5.06569 17.8729 4.05882 16.3874C3.97313 16.2579 3.85688 16.1515 3.72033 16.0775C3.58377 16.0036 3.43111 15.9644 3.27582 15.9634H3.25882C3.03988 15.968 2.82934 16.0485 2.66318 16.1912C2.49702 16.3338 2.38555 16.5297 2.34782 16.7454L2.04782 18.4844C1.97276 18.9152 1.99277 19.3572 2.10646 19.7794C2.22015 20.2016 2.42476 20.5939 2.70598 20.9288C2.98719 21.2636 3.33821 21.5329 3.73444 21.7179C4.13068 21.9028 4.56255 21.9989 4.99982 21.9994H7.99982V19.9394ZM21.9548 18.4844L21.3268 14.8714C21.1366 14.9168 20.9429 14.9455 20.7478 14.9574C19.7389 17.0863 18.0751 18.8364 15.9998 19.9514V21.9994H18.9998C19.4372 21.9993 19.8693 21.9036 20.2659 21.7189C20.6624 21.5342 21.0137 21.265 21.2952 20.9302C21.5768 20.5955 21.7817 20.2032 21.8956 19.7808C22.0095 19.3585 22.0297 18.9164 21.9548 18.4854V18.4844Z" />
      </g>
      <defs>
        <clipPath id="clip0_403_2794">
          <rect
            width={24}
            height={24}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default WomanHeadIcon;
