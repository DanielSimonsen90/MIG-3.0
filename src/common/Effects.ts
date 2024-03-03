export class Effects {
  public static All = new Effects(true, true, true, true, true);
  
  constructor(
    public bigTom: boolean,
    public tonals: boolean,
    public whiteNoise: boolean,
    public subDrop: boolean,
    public impacts: boolean,
  ) {}

  public any() {
    return this.bigTom || this.tonals || this.whiteNoise || this.subDrop || this.impacts;
  }
}

export default Effects;