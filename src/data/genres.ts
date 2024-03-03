import { Arrangement, BPM, Category, Drums, Effects, Genre, Instruments, Synths } from "../common";

const Playlist: Category = {
  name: 'Playlist',
  subCategories: [
    new Category('EDM', {
      subCategories: [
        new Category('Big Room', {
          genres: [
            new Genre(
              'Big Room',
              new BPM([126, 150]),
              new Drums('Punchy', 'Huge', 'Lowend', 'House', 'House', false, true, false, false),
              new Synths(true, true, true, true, false),
              new Instruments(true, false, true, true, false),
              new Arrangement(['Intro', 'Drop', 'Verse', 'Build-Up', 'Drop', 'Outro']),
            ),
            new Genre(
              "Spinnin' Records",
              new BPM([125, 135]),
              new Drums('Punchy', 'Main', 'Tick', 'House', 'House', false, true, true, false),
              Synths.All,
              new Instruments(true, true, true, true, false),
              new Arrangement(['Intro', 'Verse', 'Build-Up', 'Drop', 'Drum-N-Bass-Break', 'Intro', 'Build-Up', 'Drop', 'Drum-N-Bass-Break']),
            )
          ],
          subCategories: [
            new Category('Bounce', {
              genres: [
                new Genre(
                  'Bootleg', // TODO: find a better name
                  new BPM([128, 140]),
                  new Drums('Punchy', 'Main', 'Tick', 'Club', 'House', false, true, true, true),
                  new Synths(true, false, true, true, false),
                  new Instruments(true, true, true, true, false),
                  new Arrangement(['Intro', 'Verse', 'Drop', 'Verse', 'Drop']),
                ),
                new Genre(
                  'Bounce',
                  new BPM([125, 175]),
                  new Drums('Punchy', 'Main', 'Tick', 'Club', 'House', false, true, true, true),
                  new Synths(true, false, true, true, false),
                  new Instruments(true, true, true, true, false),
                  new Arrangement(['Intro', 'Pre-Chorus', 'Build-Up', 'Drop', 'Verse', 'Pre-Chorus', 'Build-Up', 'Drop']),
                ),
                new Genre(
                  'Melbourne Bounce',
                  new BPM([128, 140]),
                  new Drums('Punchy', 'Main', 'Tick', 'Club', 'House', false, true, true, true),
                  new Synths(true, false, true, true, false),
                  new Instruments(true, true, true, true, false),
                  new Arrangement(['Intro', 'Verse', 'Build-Up', 'Drop', 'Verse', 'Build-Up', 'Drop', 'Outro']),
                )
              ]
            })
          ]
        }),
        new Category('Drum and stuff', {
          genres: [
            new Genre(
              'Drumstep',
              new BPM([110, 175]),
              new Drums('Punchy', 'Main', 'Tick', 'House', 'House', true, true, true, true),
              Synths.All,
              Instruments.All,
              new Arrangement(['Intro', 'Verse', 'Pre-Chorus', 'Drop', 'Break', 'Verse', 'Pre-Chorus', 'Drop', 'Dubstep-Break', 'Break', 'Outro']),
            ),
            new Genre(
              "Drum 'n' Bass",
              new BPM([160, 180]),
              new Drums('Punchy', 'Main', 'Tick', 'House', 'House', false, true, true, true),
              Synths.All,
              Instruments.All,
              new Arrangement(['Intro', 'Verse', 'Pre-Chorus', 'Drop', 'Break', 'Pre-Chorus', 'Techno-Break', 'Outro']),
            )
          ]
        }),
        new Category('Dubstep', {
          genres: [
            new Genre(
              'Dubstep',
              new BPM([140, 150]),
              new Drums('Punchy', 'Main', 'Tick', 'House', 'Dubstep', true, true, true, true),
              Synths.All,
              Instruments.All,
              new Arrangement(['Intro', 'Verse', 'Pre-Chorus', 'Drop', 'Reggae-Break', 'Break', 'Verse', 'Pre-Chorus', 'Drop', 'Reggae-Break', 'Break', 'Outro']),
            ),
            new Genre(
              'Melodic Dubstep',
              new BPM([140, 150]),
              new Drums('Punchy', 'Main', 'Lowend', 'House', 'Dubstep', false, true, true, true),
              Synths.All,
              new Instruments(true, false, true, true, false),
              new Arrangement(['Intro', 'Build-Up', 'Drop', 'Break', 'Verse', 'Build-Up', 'Drop', 'Break', '8-bit Break', 'Outro']),
            )
          ]
        }),
        new Category('Future Bass', {
          genres: [
            new Genre(
              'Future Bass',
              new BPM([140, 170]),
              new Drums('Punchy', 'Main', 'Tick', 'House', 'Future Bass', true, true, true, true),
              Synths.All,
              new Instruments(true, false, false, true, true),
              new Arrangement(['Intro', 'Verse', 'Pre-Chorus', 'Drop', 'Verse', 'Break', 'Pre-Chorus', 'Drop'])
            ),
            new Genre(
              'Future Funk',
              new BPM([90, 130]),
              new Drums('Punchy', 'Main', 'Tick', 'House', 'Future Bass', true, true, true, true),
              Synths.All,
              new Instruments(true, true, false, true, true),
              new Arrangement(['Intro', 'Build-Up', 'Verse', 'Pre-Chorus', 'Drop', 'Verse', 'Pre-Chorus', 'Drop'])
            ),
            new Genre(
              'Future House',
              new BPM([120, 160]),
              new Drums('Punchy', 'Main', 'Tick', 'House', 'Future Bass', true, true, true, true),
              Synths.All,
              new Instruments(true, false, false, true, true),
              new Arrangement([''])
            ),
            new Genre(
              'Future Bounce',
              new BPM([125, 135]),
              new Drums('Punchy', 'Main', 'Tick', 'House', 'Future Bass', true, true, true, true),
              Synths.All,
              new Instruments(true, false, false, true, true),
              new Arrangement([''])
            )
          ]
        })
      ]
    })
  ]
};

export const Genres = getDescendingGenres(Playlist);
export const Arrangements = Genres.map(genre => genre.arrangement).filter((arrangement, index, self) => self.indexOf(arrangement) === index);

export default Genres;

function getDescendingGenres(category: Category): Genre[] {
  const result: Genre[] = [];

  if (category.genres) result.push(...category.genres);
  if (category.subCategories) {
    for (const subCategory of category.subCategories) {
      result.push(...getDescendingGenres(subCategory));
    }
  }

  return result;
}