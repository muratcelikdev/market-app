import { useEffect } from 'react';
import styled from 'styled-components';

import { Z_INDEX } from 'common/constants';
import * as colors from 'common/colors';
import { ModalProps } from 'common/interfaces';
import BodyUtil from 'common/utils/BodyUtil';

import Button from 'components/button/Button';

import { FlexBox } from 'styles/components';
import screens, { intervals } from 'styles/screen';

const StyledModal = styled(FlexBox)`
  display: none;

  @media ${screens.smallScreen} {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    display: flex;

    width: 100vw;
    height: 100vh;

    z-index: ${Z_INDEX.MODAL};

    background-color: ${colors.white};
  }
`;

const StyledModalButton = styled(Button)`
  width: 100%;
  height: 48px;
`;

const Modal = ({
  children,
  visible,
  submitButtonText,
  onClose,
}: ModalProps): JSX.Element | null => {
  useEffect(() => {
    const handleModalRender = () => {
      if (window.innerWidth <= intervals.smallScreenMaxWidth && visible) {
        BodyUtil.disableBodyScroll();
      } else {
        BodyUtil.enableBodyScroll();
        onClose();
      }
    };

    if (visible) {
      BodyUtil.disableBodyScroll();
    } else {
      BodyUtil.enableBodyScroll();
    }

    window.addEventListener('resize', handleModalRender);

    return () => {
      window.removeEventListener('resize', handleModalRender);
    };
  }, [visible, onClose]);

  if (window.innerWidth <= intervals.smallScreenMaxWidth && visible) {
    return (
      <StyledModal flexDirection="column">
        {children}
        <StyledModalButton text={submitButtonText} onClick={onClose} />
      </StyledModal>
    );
  }

  return null;
};

export default Modal;
