import styled, { css } from 'styled-components';
import tw from 'twin.macro';

const Circle = styled.div.attrs((props) => {
  const width = `border${(props?.width && '-' + props.width) || ''}`;
  const color = `${(props?.color && '') || 'border-primary'}`;
  return { className: `relative rounded-full inline-block flex-shrink-0 ${width} ${color}` };
})`
  border-color: ${(props) => props.color};

  ${(props) =>
    props.fillBg &&
    css`
      &::after {
        content: '';
        background-color: ${props.fillColor || props.color};
        width: inherit;
        height: inherit;
        transform: translate(-50%, -50%);
        ${tw`rounded-full block absolute top-1/2 left-1/2`};
      }
    `}

  ${(props) =>
    props.hover &&
    css`
      &:hover::after {
        content: '';
        background-color: ${props.color};
        width: 80%;
        height: 80%;
        transform: translate(-50%, -50%);
        ${tw`rounded-full block absolute top-1/2 left-1/2`};
      }
    `}
`;

export default Circle;
