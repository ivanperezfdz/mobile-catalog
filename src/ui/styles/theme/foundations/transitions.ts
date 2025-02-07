export const transitions = {
  duration: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
  },
  timing: {
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
    linear: 'linear',
  },
  properties: {
    all: 'all',
    opacity: 'opacity',
    transform: 'transform',
    backgroundColor: 'background-color',
    borderColor: 'border-color',
    color: 'color',
  },
  create: (
    property: string,
    duration: string = '300ms',
    easing: string = 'ease'
  ) => `${property} ${duration} ${easing}`,
} as const;
