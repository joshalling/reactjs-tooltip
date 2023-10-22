export default {
  container: {
    position: 'relative',
    padding: '4px',
    fontFamily: "'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
  },
  tooltip: {
    position: 'absolute',
    zIndex: 1,
    borderRadius: '3px',
    padding: '8px',
    width: '250px',
    textAlign: 'left',
    backgroundColor: 'rgba(82, 82, 82, 0.95)',
    color: '#fff',
  },
  positioner: (contentEl, placement) => {
    if (contentEl) {
      const content = contentEl.getBoundingClientRect();
      switch (placement) {
        case 'top':
          return {
            bottom: '100%',
            left: `calc(50% - ${content.width / 2}px)`,
          };
        case 'right':
          return {
            top: `calc(50% - ${content.height / 2}px)`,
            left: '100%',
          };
        case 'bottom':
          return {
            top: '100%',
            left: `calc(50% - ${content.width / 2}px)`,
          };
        case 'left':
          return {
            top: `calc(50% - ${content.height / 2}px)`,
            right: '100%',
          };
        default:
          return {
            top: '100%',
            left: `calc(50% - ${content.width / 2}px)`,
          };
      }
    }
  },
};
