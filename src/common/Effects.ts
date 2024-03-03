export class Effects {
  public static All = new Effects(true, true, true, true, true);
  
  constructor(
    public bigTom: boolean,
    public tonals: boolean,
    public whiteNoise: boolean,
    public subDrop: boolean,
    public impacts: boolean,
  ) {}
}

export default Effects;