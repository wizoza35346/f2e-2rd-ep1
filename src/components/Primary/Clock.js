import React, { memo } from 'react';
import styled from 'styled-components';
// 雷
// https://community.frontity.org/t/tailwindcss-with-babel-macro-plugin-and-css-in-js/1040/31
// import tw from "tailwind.macro";
import tw from 'twin.macro';

import config from '../../../tailwind.config';

// 使用bg-primary會使用css variable , IE(X
const StyledWrapper = styled.div`
  top: 130px;
  left: 560px;
  width: 540px;
  height: 540px;
  border-color: ${(props) => props.themeColor};
  background: ${(props) => props.backgroundColor || 'transparent'};
  ${tw`border-4 rounded-full absolute flex justify-center items-center`}

  >span {
    font-size: 6rem;
    color: white;
    ${tw`z-10 relative cursor-pointer select-none`}

    &:active {
      transform: scale(0.95);
    }
    & ::after {
      content: '';
      bottom: 8px;
      right: -8px;
      ${tw`inline-block border-4 absolute`}
    }
  }

  &::after {
    content: '';
    width: 95%;
    height: 95%;
    border-color: inherit;
    background-color: inherit;
    border-color: ${(props) => props.themeColor};
    background-color: ${(props) => props.themeColor};
    ${tw`rounded-full absolute border-4 p-4`}
  }
`;

function Clock({ handleTomatoState }) {
  return (
    <StyledWrapper themeColor={config.theme.colors.primary}>
      <span className="material-icons" onClick={handleTomatoState}>
        play_circle_filled
      </span>
      {/* <span class="material-icons">pause_circle_filled</span>  */}
    </StyledWrapper>
  );
}

export default memo(Clock);

// function Cloak() {
//   const sss = useRef(0);
//   const p = useRef(0);
//   const [bgParam, setBgParam] = useState({
//     firstCircle: {
//       degree: 90,
//       color1: 'white',
//       color2: 'transparent',
//     },
//     secondCircle: {
//       degree: 90,
//       color1: '#FF4384',
//       color2: 'transparent',
//     },
//   });

//   useEffect(() => {
//     p.current = setInterval(calcBgParam, 200);
//     return () => {
//       sss.current = 0;
//       clearInterval(p.current);
//     };
//   }, []);

//   const calcBgParam = () => {
//     sss.current += 1;
//     const percentage = sss.current / 200;
//     console.log(sss.current, percentage);

//     if (percentage <= 0.5) {
//       setBgParam({
//         ...bgParam,
//         secondCircle: {
//           ...bgParam.secondCircle,
//           degree: (bgParam.secondCircle.degree += (270 - 90) / 100),
//         },
//       });
//       return;
//     }
//     setBgParam({
//       ...bgParam,
//       firstCircle: {
//         color1: 'transparent',
//         color2: '#FF4384',
//         degree: (bgParam.firstCircle.degree += (270 - 90) / 100),
//       },
//     });

//     if (percentage >= 1) {
//       clearInterval(p.current);
//       sss.current = 0;
//       setTimeout(() => {
//         alert('task over');
//       }, 300);
//     }
//   };

//   const { firstCircle: f, secondCircle: s } = bgParam;
//   return (
//     <div
//       className="border-4 border-primary rounded-full absolute"
//       style={{
//         width: '540px',
//         height: '540px',
//         top: '130px',
//         left: '560px',
//         background: `linear-gradient(${f.degree}deg, ${f.color1} 50%, ${f.color2} 50%),linear-gradient(${s.degree}deg, ${s.color1} 50%, ${s.color2} 50%)`,
//       }}
//     >
//       <div
//         className="border-4 border-primary rounded-full absolute bg-primary p-4"
//         style={{ width: '508px', height: '508px', top: '.75rem', left: '.75rem' }}
//       >
//         <span
//           className="material-icons absolute text-white play-button cursor-pointer"
//           style={{ fontSize: '6rem', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}
//         >
//           play_circle_filled
//         </span>
//         {/* <span class="material-icons">pause_circle_filled</span> */}
//       </div>
//     </div>
//   );
// }
