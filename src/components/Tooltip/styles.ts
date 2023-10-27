import { Placement } from './Tooltip';

export default {
  container: {
    position: 'relative',
    fontFamily: "'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
  } as React.CSSProperties,
  tooltip: {
    position: 'absolute',
    zIndex: 1,
    borderRadius: '3px',
    padding: '8px',
    width: 'max-content',
    maxWidth: '250px',
    textAlign: 'left',
    backgroundColor: 'rgba(82, 82, 82, 0.95)',
    color: '#fff',
  } as React.CSSProperties,
};

export function positioner(
  contentEl: HTMLElement | null,
  placement: Placement
) {
  if (contentEl) {
    const content = contentEl.getBoundingClientRect();
    switch (placement) {
      case 'top':
        return {
          bottom: 'calc(100% + 4px)',
          left: `calc(50% - ${content.width / 2}px)`,
        };
      case 'right':
        return {
          top: `calc(50% - ${content.height / 2}px)`,
          left: 'calc(100% + 4px)',
        };
      case 'bottom':
        return {
          top: 'calc(100% + 4px)',
          left: `calc(50% - ${content.width / 2}px)`,
        };
      case 'left':
        return {
          top: `calc(50% - ${content.height / 2}px)`,
          right: 'calc(100% + 4px)',
        };
      default:
        return {
          top: 'calc(100% + 4px)',
          left: `calc(50% - ${content.width / 2}px)`,
        };
    }
  }
}
