export const safeAddEventListener = (
  e: EventTarget | null,
  t: string,
  n: EventListenerOrEventListenerObject,
  r?: boolean | AddEventListenerOptions,
) => {
  if (!e) {
    return () => {
      /* noop */
    };
  }

  e.addEventListener(t, n, r);
  return () => e.removeEventListener(t, n, r);
};
