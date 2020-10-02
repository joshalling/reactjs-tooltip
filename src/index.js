import PropTypes from "prop-types";
import React, { useRef, useState } from "react";
import styles from "./styles";

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
  const contentRef = useRef();

  const position = styles.positioner(contentRef.current, placement);

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
          ref={contentRef}
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
  placement: PropTypes.oneOf(["top", "right", "bottom", "left"]),
  style: PropTypes.object,
  tipClassName: PropTypes.string,
  tipStyle: PropTypes.object,
};

Tooltip.defaultProps = {
  className: "",
  placement: "bottom",
  style: {},
  tipClassName: "",
  tipStyle: {},
};

export default Tooltip;
