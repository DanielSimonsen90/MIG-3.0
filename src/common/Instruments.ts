export class Instruments {
  public static All = new Instruments(true, true, true, true, true);
  
  constructor(
    public piano: boolean,
    public guitar: boolean,
    public horns: boolean,
    public strings: boolean,
    public flute: boolean,
  ) {}
}

export default Instruments;