import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import styles from './styles';

function Tooltip(props) {
  const {
    children,
    className,
    content,
    placement,
    style,
    tipClassName,
    tipStyle,
  } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [contentRef, setRef] = useState(null);

  const position = styles.positioner(contentRef, placement);
  console.log(position);
  console.log(props);
  return (
    <span
      className={className}
      style={{ ...styles.container, ...style }}
      onMouseOver={() => setIsOpen(true)}
      onMouseOut={() => setIsOpen(false)}
    >
      {children}
      {isOpen && (
        <div
          className={tipClassName}
          style={{ ...styles.tooltip, ...position, ...tipStyle }}
          ref={setRef}
        >
          {content}
        </div>
      )}
    </span>
  );
}

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  content: PropTypes.node.isRequired,
  placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  style: PropTypes.object,
  tipClassName: PropTypes.string,
  tipStyle: PropTypes.object,
};

Tooltip.defaultProps = {
  className: '',
  placement: 'top',
  style: {},
  tipClassName: '',
  tipStyle: {},
};

export default Tooltip;
