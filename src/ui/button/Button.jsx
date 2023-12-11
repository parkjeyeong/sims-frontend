import { Button as AtndButton } from 'antd';
import styled from 'styled-components';

const StyledButton = styled(AtndButton)`
  width: ${ props => props.width };
  height: ${ props => props.height };
  color: ${ props => props.color };
  background-color: ${ props => props.backgroundcolor };

  &:hover {
    color: ${ props => props.color } !important;
    background-color: ${ props => props.hoveredbackgroundcolor } !important;
  }
`;

function Button({
  type,
  width,
  height,
  htmlType,
  onClickFunction,
  children
}) {

  let COLOR = '';
  let BACKGROUND_COLOR = '';
  let HOVERED_BACKGROUND_COLOR = '';
  let WIDTH = '';
  let HEIGHT = '';

  switch(type) {
    case 'primary':
      COLOR = '#ffffff';
      BACKGROUND_COLOR = '#002b49';
      HOVERED_BACKGROUND_COLOR = '#004270';
      break;
    default:
      COLOR = '#ffffff';
      BACKGROUND_COLOR = '';
      HOVERED_BACKGROUND_COLOR = '';
      break;
  }

  switch(width) {
    case 'full':
      WIDTH = '100%';
      break;
    case 'half':
      WIDTH = '50%';
      break;
    default:
      WIDTH = width;
      break;
  }

  switch(height) {
    case 'full':
      HEIGHT = '100%';
      break;
    case 'half':
      HEIGHT = '50%';
      break;
    default:
      HEIGHT = height;
      break;
  }

  return (
    <StyledButton
      htmlType={ htmlType }
      width={ WIDTH }
      height={ HEIGHT }
      color={ COLOR }
      backgroundcolor={ BACKGROUND_COLOR }
      hoveredbackgroundcolor={ HOVERED_BACKGROUND_COLOR }
      onClick={ onClickFunction }
    >
      { children }
    </StyledButton>
  );
}

export default Button;