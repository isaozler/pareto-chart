export const getTextLabelClass = (bandWidth: number, styles: any, i: number, step: number) => {
  return bandWidth >= 30
    ? `${styles.textLabel.__largeBar} --large`
    : bandWidth < 30 && i % step === 0
    ? `${styles.textLabel.__smallBar} --small`
    : `${styles.textLabel.__hidden} --hidden`;
};

export const tickFilter = (highestVitalFewValue: number, maxCount: number) => (pVal: any, i: number) =>
  pVal === highestVitalFewValue || maxCount === i;

export const debounce = <F extends (...args: any[]) => any>(func: F, waitFor: number) => {
  let timeout: any;

  return (...args: Parameters<F>): Promise<ReturnType<F>> =>
    new Promise(resolve => {
      if (timeout) {
        clearTimeout(timeout);
      }

      timeout = setTimeout(() => resolve(func(...args)), waitFor);
    });
};

export const throttle = <F extends (...args: any[]) => any>(func: F, waitFor: number) => {
  const now = () => new Date().getTime();
  const resetStartTime = () => (startTime = now());
  let timeout: any;
  let startTime: number = now() - waitFor;

  return (...args: Parameters<F>): Promise<ReturnType<F>> =>
    new Promise(resolve => {
      const timeLeft = startTime + waitFor - now();
      if (timeout) {
        clearTimeout(timeout);
      }
      if (startTime + waitFor <= now()) {
        resetStartTime();
        resolve(func(...args));
      } else {
        timeout = setTimeout(() => {
          resetStartTime();
          resolve(func(...args));
        }, timeLeft);
      }
    });
};
