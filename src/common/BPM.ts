import { Random } from "./utils";

export class BPM {
  public value: number;
  public range: [number, number];

  constructor(range: [number, number]);
  constructor(value: number);
  constructor(valueOrRange: number | [number, number]) {
    if (typeof valueOrRange === "number") {
      this.value = valueOrRange;
      this.range = [valueOrRange, valueOrRange];
    } else {
      this.value = Random.range(valueOrRange);
      this.range = valueOrRange;
    }
  }

  public toString() {
    return `${this.value} BPM`;
  }
}

export default BPM;