export class Random {
  public static fromArray<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  public static max(max: number): number {
    return Math.floor(Math.random() * max);
  }

  public static between(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  public static range(range: [number, number]): number {
    return Random.between(range[0], range[1]);
  }
}

export class ArrayUtils {
  public static join<T>(arr: T[]): string {
    // return all elements in the array as a string separated by a comma and at the end a & sign
    return arr.slice(0, -1).join(', ') + ' & ' + arr.slice(-1);
  }
}