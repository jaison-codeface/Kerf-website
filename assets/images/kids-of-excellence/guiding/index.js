function importAll(r) {
  return r.keys().map(r);
}
const i = importAll(require.context("/", false, /\.(png|jpe?g|svg|webp)$/));

export const images = i.filter((item, index) => i.indexOf(item) === index);
