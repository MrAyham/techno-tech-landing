export const safeAddEventListener = (
  e: EventTarget | null,
  t: string,
  n: EventListenerOrEventListenerObject,
  r?: boolean | AddEventListenerOptions,
) => {
  if (e && 'addEventListener' in e) {
    e.addEventListener(t, n, r);
    return () => (e as EventTarget).removeEventListener(t, n, r);
  }
  return () => {
    /* noop */
  };
};
