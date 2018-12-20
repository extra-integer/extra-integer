function bitCount(a) {
  a = a - ((a>>>1) & 0x55555555);
  a = (a & 0x33333333) + ((a>>>2) & 0x33333333);
  return ((a + (a>>>4) & 0x0F0F0F0F) * 0x01010101)>>>24;
};
module.exports = bitCount;
