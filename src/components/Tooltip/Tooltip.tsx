import PropTypes from 'prop-types';
import { useState } from 'react';
import styles, { positioner } from './styles';

export type Placement = 'top' | 'right' | 'bottom' | 'left' | null;

export interface TooltipProps {
  children: React.ReactNode;
  className?: string;
  content: React.ReactNode;
  placement?: Placement;
  style?: React.CSSProperties;
  tipClassName?: string;
  tipStyle?: React.CSSProperties;
}
function Tooltip(props: TooltipProps) {
  const {
    children,
    className,
    content,
    placement = 'top',
    style,
    tipClassName,
    tipStyle,
  } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [contentRef, setRef] = useState<HTMLElement | null>(null);

  const position = positioner(contentRef, placement);

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
  placement: PropTypes.oneOf([
    'top',
    'right',
    'bottom',
    'left',
  ]) as PropTypes.Validator<Placement>,
  style: PropTypes.object,
  tipClassName: PropTypes.string,
  tipStyle: PropTypes.object,
};

Tooltip.defaultProps = {
  className: '',
  placement: 'top' as Placement,
  style: {},
  tipClassName: '',
  tipStyle: {},
};

export default Tooltip;
