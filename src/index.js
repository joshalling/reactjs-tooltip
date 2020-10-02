import PropTypes from "prop-types";
import React, { useRef, useState } from "react";
import styles from "./styles";

function Tooltip({ children, content, placement, style }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef();

  const position = styles.positioner(contentRef.current, placement);

  return (
    <span
      style={{ ...styles.container, ...style }}
      onMouseOver={() => setIsOpen(true)}
      onMouseOut={() => setIsOpen(false)}
    >
      {children}
      {isOpen && (
        <div style={{ ...styles.tooltip, ...position }} ref={contentRef}>
          {content}
        </div>
      )}
    </span>
  );
}

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
  placement: PropTypes.oneOf(["top", "right", "bottom", "left"]),
  style: PropTypes.object,
};

Tooltip.defaultProps = {
  placement: "bottom",
  style: {},
};

export default Tooltip;
