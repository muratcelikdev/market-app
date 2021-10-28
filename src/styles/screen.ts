export const breakpoints = {
  largeScreenBreakpoint: 1200,
};

export const intervals = {
  smallScreenMaxWidth: breakpoints.largeScreenBreakpoint - 1,
  largeScreenMinWidth: breakpoints.largeScreenBreakpoint,
};

const screens = {
  smallScreen: `(max-width: ${intervals.smallScreenMaxWidth}px)`,
  largeScreen: `(max-width: ${intervals.largeScreenMinWidth}px)`,
};

export default screens;
