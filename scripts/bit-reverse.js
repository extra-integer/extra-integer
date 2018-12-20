function bitReverse(a) {
  a = ((a>>>1) & 0x55555555) | ((a & 0x55555555)<<1);
  a = ((a>>>2) & 0x33333333) | ((a & 0x33333333)<<2);
  a = ((a>>>4) & 0x0F0F0F0F) | ((a & 0x0F0F0F0F)<<4);
  a = ((a>>>8) & 0x00FF00FF) | ((a & 0x00FF00FF)<<8);
  return (a>>>16) | (a<<16);
};
module.exports = bitReverse;
