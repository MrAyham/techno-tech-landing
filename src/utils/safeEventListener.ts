export const safeAddEventListener = (
  e: unknown,
  t: string,
  n: EventListenerOrEventListenerObject,
  r?: boolean | AddEventListenerOptions,
) => {
  if (e && typeof (e as any).addEventListener === 'function') {
    (e as any).addEventListener(t, n, r);
    return () => {
      if (typeof (e as any).removeEventListener === 'function') {
        (e as any).removeEventListener(t, n, r);
      }
    };
  }
  return () => {
    /* noop */
  };
};
