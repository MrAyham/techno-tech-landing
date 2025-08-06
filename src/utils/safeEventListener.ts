export const safeAddEventListener = (
  target: EventTarget | null,
  type: string,
  listener: EventListenerOrEventListenerObject,
  options?: boolean | AddEventListenerOptions,
) => {
  if (target?.addEventListener) {
    target.addEventListener(type, listener, options);
    return () => target.removeEventListener(type, listener, options);
  }

  return () => {
    /* noop */
  };
};
