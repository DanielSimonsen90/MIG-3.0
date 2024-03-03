import { Idea } from "../../common";

type Props = {
  idea: Idea;
};

export default function Idea({ idea }: Props) {
  const { title, genre, mood, reference, scale, effects, arrangement } = idea;
  const { name: genreName, bpm, drums, instruments, synths } = genre;

  console.log(idea);

  return (
    <article className="idea">
      <header>
        <h1>{title.trim() || 'Idea'}</h1>
        <p><span id="mood" title="Track mood">{mood}</span> <span id="genre-name" title="Track genre">{genreName}</span> in <span id="scale" title="Track key & scale">{scale.toString()}</span> at <span id="bpm" title="Track BPM">{bpm.toString()}</span>.</p>
      </header>
      {/* <aside>
        <h2>Reference</h2>
        <p>{reference.artist.name} - {reference.track.name}</p>
      </aside> */}
      <section>
        <div id="drums" className="container">
          <h2>Drums</h2>
          <p>Kick: {drums.kick}</p>
          <p>Clap: {drums.clap}</p>
          <p>Hihat: {drums.hihat}</p>
          <p>Openhat: {drums.openhat}</p>
          <p>Snare: {drums.snare}</p>

          <br />

          {drums.tom && <p>Tom</p>}
          {drums.crash && <p>Crash</p>}
          {drums.ride && <p>Ride</p>}
          {drums.perc && <p>Percussion</p>}
        </div>

        <div id="instruments" className="container">
          <h2>Instruments</h2>
          {!instruments.any() && <p>No instruments</p>}
          {instruments.piano && <p>Piano</p>}
          {instruments.guitar && <p>Guitar</p>}
          {instruments.strings && <p>Strings</p>}
          {instruments.horns && <p>Horns</p>}
          {instruments.flute && <p>Flute</p>}
          {instruments.sax && <p>Sax</p>}
        </div>

        <div id="effects" className="container">
          <h2>Effects</h2>
          {!effects.any() && <p>No effects</p>}
          {effects.bigTom && <p>Big Tom</p>}
          {effects.tonals && <p>Tonals</p>}
          {effects.whiteNoise && <p>White Noise</p>}
          {effects.subDrop && <p>Sub Drop</p>}
          {effects.impacts && <p>Impacts</p>}
        </div>

        <div id="synths" className="container">
          <div id="lead">
            <h2>Lead Synths</h2>
            <ul>
              {synths.lead.length === 0 && <li>No lead synths</li>}
              {synths.lead.map((lead, i) => <li key={i}>{lead.toString()}</li>)}
            </ul>
          </div>
          <div id="chords">
            <h2>Chord Synths</h2>
            <ul>
              {synths.chords.length === 0 && <li>No chord synths</li>}
              {synths.chords.map((chord, i) => <li key={i}>{chord.toString()}</li>)}
            </ul>
          </div>
          <div id="pad">
            <h2>Pad Synths</h2>
            <ul>
              {synths.pad.length === 0 && <li>No pad synths</li>}
              {synths.pad.map((pad, i) => <li key={i}>{pad.toString()}</li>)}
            </ul>
          </div>
          <div id="bass">
            <h2>Bass Synths</h2>
            <ul>
              {synths.bass.length === 0 && <li>No bass synths</li>}
              {synths.bass.map((bass, i) => <li key={i}>{bass.toString()}</li>)}
            </ul>
          </div>
          <div id="arp">
            <h2>Arp Synths</h2>
            <ul>
              {synths.arp.length === 0 && <li>No arp synths</li>}
              {synths.arp.map((arp, i) => <li key={i}>{arp.toString()}</li>)}
            </ul>
          </div>
        </div>

      </section>
      <footer id="arrangement" className="container">
        <h2>Arrangement</h2>
        <p>{arrangement}</p>
      </footer>
    </article>
  );
}