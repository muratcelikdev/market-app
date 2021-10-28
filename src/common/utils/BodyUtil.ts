class BodyUtil {
  static disableBodyScroll = () => {
    document.body.style.overflow = 'hidden';
  };

  static enableBodyScroll = () => {
    document.body.style.removeProperty('overflow');
  };
}

export default BodyUtil;
