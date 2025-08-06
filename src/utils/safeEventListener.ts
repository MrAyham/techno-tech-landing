export const safeAddEventListener = (
  e: EventTarget | null | undefined,
  t: string,
  n: EventListenerOrEventListenerObject,
  r?: boolean | AddEventListenerOptions,
) => {
  if (e && 'addEventListener' in e && 'removeEventListener' in e) {
    e.addEventListener(t, n, r);
    return () => (e as EventTarget).removeEventListener(t, n, r);
  }
  return () => {
    /* noop */
  };
};

export const safeRemoveEventListener = (
  e: EventTarget | null | undefined,
  t: string,
  n: EventListenerOrEventListenerObject,
  r?: boolean | EventListenerOptions,
) => {
  if (e && 'removeEventListener' in e) {
    (e as EventTarget).removeEventListener(t, n, r);
  }
};
