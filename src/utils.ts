export const getTextLabelClass = (bandWidth: number, styles: any, i: number, step: number) => {
  return bandWidth >= 30
    ? `${styles.textLabel.__largeBar} --large`
    : bandWidth < 30 && i % step === 0
    ? `${styles.textLabel.__smallBar} --small`
    : `${styles.textLabel.__hidden} --hidden`;
};
