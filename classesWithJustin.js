function difference(a, b) {
  return Math.abs(a - b);
}
class TTKR {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
  get(key, timestamp = null) {
    let differenceResult = difference(key, timestamp);
    return differenceResult;
  }
}
const data = new TTKR(3, 2);
const data1 = new TTKR(3, 1);
const dataGet = data.get(data1.value, data.value);
