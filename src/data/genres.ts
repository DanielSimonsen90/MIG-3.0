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
              new Instruments(true, false, true, true, false, false),
              new Arrangement(['Intro', 'Drop', 'Verse', 'Build-Up', 'Drop', 'Outro']),
            ),
            new Genre(
              "Spinnin' Records",
              new BPM([125, 135]),
              new Drums('Punchy', 'Main', 'Tick', 'House', 'House', false, true, true, false),
              Synths.All,
              new Instruments(true, true, true, true, false, false),
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
                  new Instruments(true, true, true, true, false, false),
                  new Arrangement(['Intro', 'Verse', 'Drop', 'Verse', 'Drop']),
                ),
                new Genre(
                  'Bounce',
                  new BPM([125, 175]),
                  new Drums('Punchy', 'Main', 'Tick', 'Club', 'House', false, true, true, true),
                  new Synths(true, false, true, true, false),
                  new Instruments(true, true, true, true, false, false),
                  new Arrangement(['Intro', 'Pre-Chorus', 'Build-Up', 'Drop', 'Verse', 'Pre-Chorus', 'Build-Up', 'Drop']),
                ),
                new Genre(
                  'Melbourne Bounce',
                  new BPM([128, 140]),
                  new Drums('Punchy', 'Main', 'Tick', 'Club', 'House', false, true, true, true),
                  new Synths(true, false, true, true, false),
                  new Instruments(true, true, true, true, false, false),
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
              new Instruments(true, false, true, true, false, true),
              new Arrangement(['Intro', 'Build-Up', 'Drop', 'Break', 'Verse', 'Build-Up', 'Drop', 'Break', '8-bit-Break', 'Outro']),
            )
          ]
        }),
        new Category('Electro', {
          genres: [
            new Genre(
              'Progressive Electro',
              new BPM([100, 130]),
              new Drums('Punchy', 'Main', 'Acoustic', 'House', 'House', true, true, true, false),
              Synths.All,
              Instruments.All,
              new Arrangement(['Intro', 'Break', 'Verse', 'Build-Up', 'Drop', 'Break', 'Verse', 'Pre-Chorus', 'Drop', 'Break', 'Outro'])
            ),
            new Genre(
              'Electro',
              new BPM([100, 130]),
              new Drums('Punchy', 'Main', 'Tick', 'House', 'House', false, true, true, false),
              Synths.All,
              Instruments.All,
              new Arrangement(['Intro', 'Build-Up', 'Drop', 'Dubstep-Break', 'Break', 'Build-Up', 'Drop', 'Break', 'Outro'])
            ),
            new Genre(
              'Electroswing',
              new BPM([90, 130]),
              new Drums('Punchy', 'Main', 'Acoustic', 'House', 'House', false, true, true, true),
              Synths.All,
              Instruments.All,
              new Arrangement(['Intro', 'Build-Up', 'Drop', 'Verse', 'Break', 'Drop', 'Break', 'Verse', 'Drop', 'Break', 'Verse', 'Drop'])
            ),
            new Genre(
              'Pre-Teen',
              new BPM([100, 170]),
              new Drums('Punchy', 'Main', 'Acoustic', 'House', 'House', true, true, true, false),
              Synths.All,
              new Instruments(true, true, true, true, false, false),
              new Arrangement(['Intro', 'Drop', 'Break', 'Build-Up', 'Drop', 'Break', 'Intro', 'Outro'])
            )
          ]
        }),
        new Category('Future', {
          genres: [
            new Genre(
              'Future Bass',
              new BPM([140, 170]),
              new Drums('Punchy', 'Main', 'Tick', 'House', 'Future Bass', true, true, true, true),
              Synths.All,
              new Instruments(true, false, false, true, true, true),
              new Arrangement(['Intro', 'Verse', 'Pre-Chorus', 'Drop', 'Verse', 'Break', 'Pre-Chorus', 'Drop'])
            ),
            new Genre(
              'Future Funk',
              new BPM([90, 130]),
              new Drums('Punchy', 'Main', 'Tick', 'House', 'Future Bass', true, true, true, true),
              Synths.All,
              new Instruments(true, true, false, true, true, true),
              new Arrangement(['Intro', 'Build-Up', 'Verse', 'Pre-Chorus', 'Drop', 'Verse', 'Pre-Chorus', 'Drop'])
            ),
            new Genre(
              'Future House',
              new BPM([120, 160]),
              new Drums('Punchy', 'Main', 'Tick', 'House', 'Future Bass', true, true, true, true),
              Synths.All,
              new Instruments(true, false, false, true, true, true),
              new Arrangement(['Intro', 'Verse', 'Pre-Chorus', 'Build-Up', 'Drop', 'Verse', 'Pre-Chorus', 'Build-Up', 'Drop', 'Outro'])
            ),
            new Genre(
              'Future Bounce',
              new BPM([125, 135]),
              new Drums('Punchy', 'Main', 'Tick', 'House', 'Future Bass', true, true, true, true),
              Synths.All,
              new Instruments(true, false, false, true, true, false),
              new Arrangement(['Intro', 'Verse', 'Build-Up', 'Drop', 'Break', 'Build-Up', 'Drop', 'Outro'])
            )
          ]
        }),
        new Category('General', {
          genres: [
            new Genre(
              'General EDM',
              new BPM([110, 140]),
              new Drums('Punchy', 'Main', 'Lowend', 'House', 'House', false, true, true, false),
              Synths.All,
              Instruments.All,
              new Arrangement(['Verse', 'Pre-Chorus', 'Drop', 'Verse', 'Pre-Chorus', 'Drop', 'Rap-Verse', 'Drop', 'Outro'])
            ),
            new Genre(
              'EDM Trap',
              new BPM([95, 170]),
              new Drums('Punchy', 'Tight', 'Lowend', 'House', 'Trap', false, true, true, true),
              Synths.All,
              Instruments.All,
              new Arrangement(['Intro', 'Rap-Verse', 'Pre-Chorus', 'Drop', 'Rap-Verse', 'Pre-Chorus', 'Drop'])
            ),
            new Genre(
              'Electrio',
              new BPM([100, 175]),
              new Drums('Punchy', 'Main', 'Tick', 'House', 'House', false, true, true, false),
              Synths.All,
              Instruments.All,
              new Arrangement(['Intro', 'Verse', 'Pre-Chorus', 'Drop', 'Verse', 'Pre-Chorus', 'Drop'])
            )
          ]
        }),
        new Category('House', {
          genres: [
            new Genre(
              'Aimbottz',
              new BPM([100, 120]),
              new Drums('Punchy', 'Main', 'Lowend', 'House', 'House', false, true, true, true),
              Synths.All,
              Instruments.All,
              new Arrangement(['Intro', 'Build-Up', 'Drop', 'Break', 'Build-Up', 'Drop', 'Outro'])
            ),
            new Genre(
              'Deep/Slap House',
              new BPM([120, 130]),
              new Drums('Punchy', 'Main', 'Lowend', 'House', 'House', false, true, true, true),
              Synths.All,
              Instruments.All,
              new Arrangement(['Intro', 'Verse', 'Pre-Chorus', 'Drop', 'Verse', 'Pre-Chorus', 'Drop', 'Outro'])
            ),
            new Genre(
              'House',
              new BPM([120, 130]),
              new Drums('Punchy', 'Main', 'Lowend', 'House', 'House', false, true, true, true),
              Synths.All,
              Instruments.All,
              new Arrangement(['Intro', 'Verse', 'Pre-Chorus', 'Drop', 'Verse', 'Pre-Chorus', 'Drop'])
            ),
            new Genre(
              'Melodic House',
              new BPM([100, 130]),
              new Drums('Punchy', 'Main', 'Lowend', 'House', 'House', false, true, true, true),
              Synths.All,
              Instruments.All,
              new Arrangement(['Intro', 'Verse', 'Build-Up', 'Drop', 'Dubstep-Break', 'Drop', 'Outro'])
            ),
            new Genre(
              'Not Psytrance',
              new BPM([90, 160]),
              new Drums('Punchy', 'Main', 'Lowend', 'House', 'House', false, true, true, true),
              Synths.All,
              Instruments.All,
              new Arrangement(['Intro', 'Pre-Chorus', 'Drop', 'Break', 'Verse', 'Pre-Chorus', 'Drop'])
            ),
            new Genre(
              'Tropical House',
              new BPM([100, 128]),
              new Drums('Punchy', 'Main', 'Acoustic', 'House', 'House', false, true, true, true),
              Synths.All,
              new Instruments(true, true, false, true, true, true),
              new Arrangement(['Verse', 'Pre-Chorus', 'Build-Up', 'Drop', 'Verse', 'Pre-Chorus', 'Drop', 'Outro'])
            )
          ],
          subCategories: [
            new Category('Electro-House', {
               genres: [
                new Genre(
                  'Dudu dudu',
                  new BPM([100, 130]),
                  new Drums('Punchy', 'Main', 'Lowend', 'House', 'House', true, true, true, false),
                  Synths.All,
                  Instruments.All,
                  new Arrangement(['Intro', 'Verse', 'Build-Up', 'Drop', 'Verse', 'Build-Up', 'Drop', 'Build-Up', 'Drop'])
                ),
                new Genre(
                  'Electro-House',
                  new BPM([90, 175]),
                  new Drums('Punchy', 'Main', 'Lowend', 'House', 'House', false, true, true, false),
                  Synths.All,
                  Instruments.All,
                  new Arrangement(['Intro', 'Verse', 'Pre-Chorus', 'Drop', 'Verse', 'Pre-Chorus', 'Drop', 'Break', 'Drop'])
                ),
                new Genre(
                  'Taking Electro literal',
                  new BPM([128, 130]),
                  new Drums('Punchy', 'Main', 'Lowend', 'House', 'House', true, true, true, false),
                  Synths.All,
                  Instruments.All,
                  new Arrangement(['Intro', 'Verse', 'Build-Up', 'Drop', 'Verse', 'Build-Up', 'Drop', 'Build-Up'])
                )
               ]
            }),
            new Category('Progressive House', {
              genres: [
                new Genre(
                  'NCS Style',
                  new BPM([125, 130]),
                  new Drums('Punchy', 'Main', 'Lowend', 'House', 'House', false, true, true, false),
                  Synths.All,
                  Instruments.All,
                  new Arrangement(['Intro', 'Verse', 'Build-Up', 'Drop', 'Break', 'Verse', 'Build-Up', 'Drop', 'Break', 'Drop', 'Break', 'Outro'])
                ),
                new Genre(
                  'Progressive Dream',
                  new BPM([110, 130]),
                  new Drums('Punchy', 'Main', 'Lowend', 'House', 'House', false, true, true, false),
                  Synths.All,
                  new Instruments(true, true, false, true, true, true),
                  new Arrangement(['Intro', 'Verse', 'Build-Up', 'Drop', 'Break', 'Verse', 'Build-Up', 'Drop', 'Outro'])
                ),
                new Genre(
                  'Progressive House',
                  new BPM([120, 135]),
                  new Drums('Punchy', 'Main', 'Lowend', 'House', 'House', false, true, true, false),
                  Synths.All,
                  new Instruments(true, true, false, true, true, true),
                  new Arrangement(['Verse', 'Pre-Chorus', 'Drop', 'Verse', 'Pre-Chorus', 'Drop', 'Vocal-Chop-Break', 'Drop'])
                ),
                new Genre(
                  'Progressive Pop',
                  new BPM([125, 130]),
                  new Drums('Punchy', 'Main', 'Lowend', 'House', 'House', false, true, true, false),
                  Synths.All,
                  new Instruments(true, true, false, true, true, true),
                  new Arrangement(['Intro', 'Verse', 'Build-Up', 'Drop', 'Break', 'Verse', 'Build-Up', 'Drop', 'Outro'])
                )
              ]
            })
          ]
        }),
        new Category('Hype', {
          subCategories: [
            new Category('Classic', {
              genres: [
                new Genre(
                  'Hands Up',
                  new BPM([128, 170]),
                  new Drums('Club', 'Main', 'Lowend', 'Club', 'House', false, true, true, false),
                  Synths.All,
                  new Instruments(true, true, false, true, false, false),
                  new Arrangement(['Pre-Chorus', 'Build-Up', 'Drop', 'Verse', 'Pre-Chorus', 'Drop', 'Verse', 'Pre-Chorus', 'Drop'])
                ),
                new Genre(
                  'Eurodance',
                  new BPM([120, 160]),
                  new Drums('Club', 'Huge', 'Acoustic', 'Club', 'House', true, true, true, false),
                  Synths.All,
                  new Instruments(true, true, false, true, false, false),
                  new Arrangement(['Intro', 'Drop', 'Break', 'Build-Up', 'Drop', 'Techno-Break', 'Build-Up', 'Drop'])
                )
              ]
            }),
            new Category('High BPM', {
              genres: [
                new Genre(
                  'Russian Hardbass',
                  new BPM([150, 160]),
                  new Drums('Club', 'Main', 'Lowend', 'House', 'House', false, true, true, false),
                  Synths.All,
                  Instruments.All,
                  new Arrangement(['Intro', 'Verse', 'Drop', 'Break', 'Build-Up', 'Drop', 'Outro'])
                ),
                new Genre(
                  'Happy Hardcore',
                  new BPM([160, 180]),
                  new Drums('Club', 'Main', 'Lowend', 'Club', 'Club', false, true, true, false),
                  Synths.All,
                  Instruments.All,
                  new Arrangement(['Intro', 'Verse', 'Drop', 'Screech-Break', 'Dubstep-Break', 'Break', 'Build-Up', 'Drop', 'Screech-Break', 'Verse', 
                    'Build-Up', 'Drop', 'Pre-Chorus', 'Outro'])
                )
              ],
              subCategories: [
                new Category('Hardstyle', {
                  genres: [
                    new Genre(
                      'Classic Hardstyle',
                      new BPM([140, 160]),
                      new Drums('Classic Hardstyle Kick', 'Main', 'Lowend', 'Club', 'Club', false, true, true, false),
                      Synths.All,
                      Instruments.All,
                      new Arrangement(['Intro', 'Drop', 'Break', 'Drop', 'Break', 'Build-Up', 'Drop', 'Dubstep-Break', 'Build-Up', 'Drop'])
                    ),
                    new Genre(
                      'Hardcore',
                      new BPM([160, 200]),
                      new Drums('Hardcore Kick', 'Main', 'Lowend', 'Club', 'Club', false, true, true, false),
                      Synths.All,
                      Instruments.All,
                      new Arrangement(['Intro', 'Drop', 'Break', 'Build-Up', 'Drop', 'Break', 'Drop'])
                    ),
                    new Genre(
                      'Frenchcore',
                      new BPM([180, 240]),
                      new Drums('Frenchcore Kick', 'Main', 'Lowend', 'Club', 'Club', false, true, true, false),
                      Synths.All,
                      Instruments.All,
                      new Arrangement(['Intro', 'Drop', 'Break', 'Dubstep-Break', 'Build-Up', 'Drop', 'Dubstep-Break', 'Drop'])
                    )
                  ],
                  subCategories: [
                    new Category('Euphoric', {
                      genres: [
                        new Genre(
                          'Dreamy Hardstyle',
                          new BPM([150, 160]),
                          new Drums('Euphoric Hardstyle Kick', 'Main', 'Lowend', 'Club', 'Club', false, true, true, false),
                          Synths.All,
                          Instruments.All,
                          new Arrangement(['Intro', 'Verse', 'Build-Up', 'Verse', 'Drop', 'Verse', 'Drop', 'Outro'])
                        ),
                        new Genre(
                          'Nasty Euphoric',
                          new BPM([150, 160]),
                          new Drums('Nasty Euphoric Hardstyle Kick', 'Main', 'Lowend', 'Club', 'Club', false, true, true, false),
                          Synths.All,
                          Instruments.All,
                          new Arrangement(['Intro', 'Verse', 'Pre-Chorus', 'Build-Up', 'Pre-Chorus', 'Drop', 'Verse', 'Pre-Chorus', 'Drop', 'Break', 'Outro'])
                        ),
                        new Genre(
                          'Euphoric Hardstyle',
                          new BPM([150, 160]),
                          new Drums('Euphoric Hardstyle Kick', 'Main', 'Lowend', 'Club', 'Club', false, true, true, false),
                          Synths.All,
                          Instruments.All,
                          new Arrangement(['Intro', 'Verse', 'Build-Up', 'Drop', 'Vocal-Chop-Break', 'Build-Up', 'Drop', 'Outro'])
                        ),
                        new Genre(
                          'Rawphoric',
                          new BPM([150, 170]),
                          new Drums('Rawphoric Kick', 'Main', 'Lowend', 'Club', 'Club', false, true, true, false),
                          Synths.All,
                          Instruments.All,
                          new Arrangement(['Intro', 'Verse', 'Build-Up', 'Pre-Chorus', 'Drop', 'Break', 'Verse', 'Build-Up', 'Drop', 'Outro'])
                        )
                      ]
                    }),
                    new Category('Rawstyle', {
                      genres: [
                        new Genre(
                          'Klaplong',
                          new BPM([150, 170]),
                          new Drums('Klaplong Kick', 'Main', 'Lowend', 'Club', 'Club', false, true, true, false),
                          Synths.All,
                          Instruments.All,
                          new Arrangement(['Intro', 'Verse', 'Melody Reveal', 'Build-Up', 'Drop', 'Klaplong-Break', 'Break', 'Build-Up', 'Drop', 'Klaplong-Break'])
                        ),
                        new Genre(
                          'Rawstyle',
                          new BPM([150, 180]),
                          new Drums('Rawstyle Kick', 'Main', 'Lowend', 'Club', 'Club', false, true, true, false),
                          Synths.All,
                          Instruments.All,
                          new Arrangement(['Verse', 'Melody Reveal', 'Build-Up', 'Drop', 'Fake-Drop', 'Drop', 'Break', 'Verse', 'Build-Up', 'Drop', 'Break', 
                            'Build-Up', 'Drop', 'Build-Up', 'Drop', 'Fake-Drop', 'Drop', 'Outro'])
                        ),
                        new Genre(
                          'Rawtempo',
                          new BPM([150, 160]),
                          new Drums('Zaag Kick', 'Main', 'Lowend', 'Club', 'Club', false, true, true, false),
                          Synths.All,
                          Instruments.All,
                          new Arrangement(['Verse', 'Pre-Chorus', 'Build-Up', 'Melody Reveal', 'Build-Up', 'Drop', 'Zaag-Break', 'Break', 'Melody Reveal', 
                            'Pre-Chorus', 'Build-Up', 'Drop', 'Build-Up', 'Rawstyle-Break'])
                        )
                      ]
                    }),
                    new Category('Uptempo', {
                      genres: [
                        new Genre(
                          'Uptempo',
                          new BPM([200, 240]),
                          new Drums('Uptempo Kick', 'Main', 'Lowend', 'Club', 'Club', false, true, true, false),
                          Synths.All,
                          Instruments.All,
                          new Arrangement(['Intro', 'Verse', 'Build-Up', 'Drop', 'Vocal-Chop-Break', 'Break', 'Verse', 'Build-Up', 'Drop', 'Vocal-Chop-Break'])
                        ),
                        new Genre(
                          'TweekaTV After Party',
                          new BPM([200, 240]),
                          new Drums('Piep Kick', 'Main', 'Lowend', 'Club', 'Club', false, true, true, false),
                          Synths.All,
                          Instruments.All,
                          new Arrangement(['Intro', 'Verse', 'Build-Up', 'Fake-Drop', 'Techno-Break', 'Verse', 'Pre-Chorus', 'Build-Up', 'Fake-Drop', 'Drop', 
                            'Break', 'Verse', 'Break', 'Build-Up', 'Drop', 'Outro'])
                        ),
                        new Genre(
                          'Speedcore',
                          new BPM([200, 300]),
                          new Drums('Club', 'Main', 'Lowend', 'House', 'Club', false, true, true, false),
                          Synths.All,
                          Instruments.All,
                          new Arrangement(['Intro', 'Verse', 'Drop', 'Break', 'Drop', 'Break', 'Build-Up', 'Drop', 'Break', 'Verse', 'Outro'])
                        ),
                      ]
                    })
                  ]
                })
              ]
            }),
            new Category('Trance', {
              genres: [
                new Genre(
                  'Trance',
                  new BPM([120, 140]),
                  new Drums('Trance', 'Main', 'Lowend', 'Club', 'House', false, true, true, false),
                  Synths.All,
                  Instruments.All,
                  new Arrangement(['Intro', 'Verse', 'Break', 'Vocal-Chop-Break', 'Melody Reveal', 'Build-Up', 'Drop', 'Techno-Break', 
                    'Break', 'Verse', 'Build-Up', 'Drop', 'Break'])
                ),
                new Genre(
                  'Psytrance',
                  new BPM([130, 150]),
                  new Drums('Trance', 'Main', 'Lowend', 'Club', 'House', false, true, true, false),
                  Synths.All,
                  Instruments.All,
                  new Arrangement(['Intro', 'Verse', 'Build-Up', 'Drop', 'Break', 'Verse', 'Build-Up', 'Drop'])
                )
              ]
            })
          ]
        }),
        new Category('Oldschool', {
          genres: [
            new Genre(
              'Synthwave',
              new BPM([80, 130]),
              new Drums('Punchy', 'Main', 'Tick', 'House', 'House', true, true, true, false),
              Synths.All,
              Instruments.All,
              new Arrangement(['Intro', 'Verse', 'Pre-Chorus', 'Drop', 'Verse', 'Pre-Chorus', 'Drop', 'Break', 'Drop', 'Break', 'Outro'])
            ),
            new Genre(
              'Downtempo',
              new BPM([100, 130]),
              new Drums('Acoustic', 'Main', 'Tick', 'Acoustic', 'Acoustic', true, true, true, false),
              new Synths(false, true, true, true, true),
              Instruments.All,
              new Arrangement(['Intro', 'Verse', 'Pre-Chorus', 'Drop', 'Verse', 'Break', 'Drop', 'Break', 'Drop', 'Outro'])
            )
          ]
        }),
        new Category('Pops', {
          genres: [
            new Genre(
              'Pop',
              new BPM([90, 130]),
              new Drums('Punchy', 'Main', 'Lowend', 'House', 'House', false, true, true, false),
              Synths.All,
              Instruments.All,
              new Arrangement(['Verse', 'Pre-Chorus', 'Drop', 'Verse', 'Pre-Chorus', 'Drop', 'Verse', 'Pre-Chorus', 'Drop', 'Outro'])
            ),
            new Genre(
              'Female Pop',
              new BPM([90, 130]),
              new Drums('Punchy', 'Main', 'Lowend', 'House', 'House', true, true, true, true),
              Synths.All,
              Instruments.All,
              new Arrangement(['Intro', 'Verse', 'Pre-Chorus', 'Drop', 'Break', 'Verse', 'Pre-Chorus', 'Drop', 'Break', 'Verse', 'Break', 'Reggae-Break', 'Outro'])
            ),
            new Genre(
              'Asian Pop',
              new BPM([90, 130]),
              new Drums('Punchy', 'Main', 'Tick', 'House', 'House', true, true, true, true),
              Synths.All,
              Instruments.All,
              new Arrangement(['Intro', 'Verse', 'Pre-Chorus', 'Drop', 'Verse', 'Pre-Chorus', 'Drop', 'Break', 'Pre-Chorus', 'Drop', 'Outro'])
            )
          ]
        })
      ]
    }),
    new Category('Everything else', {
      genres: [
        new Genre(
          'Acoustic',
          new BPM([90, 130]),
          new Drums('Acoustic', 'Main', 'Acoustic', 'Acoustic', 'Acoustic', true, true, true, true),
          new Synths(false, false, false, false, false),
          Instruments.All,
          new Arrangement(['Pre-Chorus', 'Verse', 'Pre-Chorus', 'Drop', 'Verse', 'Pre-Chorus', 'Drop', 'Outro'])
        ),
        new Genre(
          'Country',
          new BPM([70, 120]),
          new Drums('Acoustic', 'Main', 'Acoustic', 'Acoustic', 'Acoustic', true, true, true, true),
          new Synths(false, false, false, false, false),
          Instruments.All,
          new Arrangement(['Intro', 'Verse', 'Pre-Chorus', 'Drop', 'Verse', 'Pre-Chorus', 'Drop'])
        ),
        new Genre(
          'Grandpa Music',
          new BPM([80, 120]),
          new Drums('Acoustic', 'Main', 'Acoustic', 'Acoustic', 'Acoustic', true, true, true, true),
          new Synths(false, false, false, false, false),
          Instruments.All,
          new Arrangement(['Intro', 'Verse', 'Drop', 'Break', 'Verse', 'Drop', 'Break', 'Drop', 'Sax Solo', 'Verse', 'Drop'])
        ),
        new Genre(
          'Girlbossing',
          new BPM([100, 180]),
          new Drums('Punchy', 'Main', 'Lowend', 'House', 'House', true, true, true, true),
          Synths.All,
          Instruments.All,
          new Arrangement(['Intro', 'Pre-Chorus', 'Drop', 'Verse', 'Pre-Chorus', 'Drop', 'Break', 'Drop'])
        ),
        new Genre(
          'Jazz',
          new BPM([90, 130]),
          new Drums('Acoustic', 'Main', 'Acoustic', 'Acoustic', 'Acoustic', true, true, true, true),
          new Synths(false, false, false, false, false),
          Instruments.All,
          new Arrangement(['Verse', 'Pre-Chorus', 'Drop', 'Break', 'Verse', 'Pre-Chorus', 'Drop', 'Break'])
        ),
        new Genre(
          'Weeb',
          new BPM([90, 130]),
          new Drums('Punchy', 'Main', 'Lowend', 'House', 'House', true, true, true, true),
          Synths.All,
          Instruments.All,
          new Arrangement(['Intro', 'Verse', 'Pre-Chorus', 'Drop', 'Break', 'Verse', 'Pre-Chorus', 'Drop', 'Verse', 'Pre-Chorus', 'Drop'])
        )
      ],
      subCategories: [
        new Category('Lofi Hiphop', {
          genres: [
            new Genre(
              'Lofi hiphop',
              new BPM([70, 100]),
              new Drums('Lofi', 'Tight', 'Lofi', 'Acoustic', 'Lofi', false, false, true, true),
              new Synths(false, false, false, false, false),
              Instruments.All,
              new Arrangement(['Intro', 'Verse', 'Drop', 'Verse', 'Drop', 'Outro'])
            ),
            new Genre(
              'Sad Lofi',
              new BPM([60, 120]),
              new Drums('Lofi', 'Tight', 'Lofi', 'Acoustic', 'Lofi', true, false, true, true),
              new Synths(false, false, false, false, false),
              Instruments.All,
              new Arrangement(['Pre-Chorus', 'Verse', 'Pre-Chorus', 'Drop', 'Verse', 'Pre-Chorus', 'Drop', 'Outro'])
            )
          ]
        }),
        new Category('Trap/Rap/Hiphop', {
          genres: [
            new Genre(
              'Sad Rap',
              new BPM([70, 170]),
              new Drums('Punchy', 'Tight', 'Tick', 'Acoustic', 'Trap', false, true, true, true),
              Synths.All,
              Instruments.All,
              new Arrangement(['Intro', 'Pre-Chorus', 'Drop', 'Verse', 'Pre-Chorus', 'Drop', 'Orchestral-Break'])
            ),
            new Genre(
              'Da Vibe',
              new BPM([70, 180]),
              new Drums('Punchy', 'Tight', 'Tick', 'Acoustic', 'Trap', false, true, true, true),
              Synths.All,
              Instruments.All,
              new Arrangement(['Intro', 'Drop', 'Rap-Verse', 'Pre-Chorus', 'Drop', 'Break', 'Rap-Verse', 'Pre-Chorus', 'Drop', 'Break', 'Pre-Chorus', 'Drop'])
            ),
            new Genre(
              'FeelsCoolMan',
              new BPM([70, 170]),
              new Drums('Punchy', 'Tight', 'Tick', 'Acoustic', 'Trap', false, true, true, true),
              Synths.All,
              Instruments.All,
              new Arrangement(['Intro', 'Melody Reveal', 'Drop', 'Rap-Verse', 'Drop', 'Rap-Verse', 'Drop', 'Outro'])
            ),
            new Genre(
              'Hip Hop',
              new BPM([70, 150]),
              new Drums('Punchy', 'Tight', 'Tick', 'Acoustic', 'Trap', false, true, true, true),
              Synths.All,
              Instruments.All,
              new Arrangement(['Intro', 'Verse', 'Drop', 'Rap-Verse', 'Pre-Chorus', 'Drop', 'Rap-Verse', 'Pre-Chorus', 'Drop', 'Rap-Verse', 'Pre-Chorus', 'Drop'])
            )
          ],
          subCategories: [
            new Category('Phonk', {
              genres: [
                new Genre(
                  'Dreamy/Chill Phonk',
                  new BPM([100, 170]),
                  new Drums('Punchy', 'Tight', 'Tick', 'Acoustic', 'Trap', false, true, true, true),
                  Synths.All,
                  Instruments.All,
                  new Arrangement(['Intro', 'Vocal-Chop-Break', 'Drop', 'Break'])
                ),
                new Genre(
                  'Phonk',
                  new BPM([70, 170]),
                  new Drums('Punchy', 'Tight', 'Tick', 'Acoustic', 'Trap', false, true, true, true),
                  Synths.All,
                  Instruments.All,
                  new Arrangement(['Intro', 'Drop', 'Break', 'Drop', 'Outro'])
                ),
              ]
            })
          ]
        }),
        new Category('Rock, Metal & Guitar', {
          genres: [
            new Genre(
              'Emo',
              new BPM([70, 190]),
              new Drums('Acoustic', 'Main', 'Acoustic', 'Acoustic', 'Acoustic', true, true, true, true),
              Synths.All,
              Instruments.All,
              new Arrangement(['Intro', 'Verse', 'Solo', 'Verse', 'Pre-Chorus', 'Drop', 'Break', 'Verse', 'Pre-Chorus', 'Drop', 'Break', 'Verse', 'Pre-Chorus', 'Drop', 'Break'])
            ),
            new Genre(
              'Goth',
              new BPM([70, 180]),
              new Drums('Acoustic', 'Main', 'Acoustic', 'Acoustic', 'Acoustic', true, true, true, true),
              Synths.All,
              Instruments.All,
              new Arrangement(['Intro', 'Solo', 'Verse', 'Pre-Chorus', 'Drop', 'Verse', 'Pre-Chorus', 'Drop', 'Break', 'Pre-Chorus', 'Drop', 'Break'])
            ),
            new Genre(
              'Indie',
              new BPM([80, 160]),
              new Drums('Acoustic', 'Main', 'Acoustic', 'Acoustic', 'Acoustic', true, true, true, true),
              new Synths(false, false, false, false, false),
              Instruments.All,
              new Arrangement(['Intro', 'Verse', 'Drop', 'Verse', 'Pre-Chorus', 'Drop', 'Break'])
            ),
            new Genre(
              'Metal',
              new BPM([80, 200]),
              new Drums('Acoustic', 'Main', 'Acoustic', 'Acoustic', 'Acoustic', true, true, true, true),
              Synths.All,
              Instruments.All,
              new Arrangement(['Intro', 'Verse', 'Pre-Chorus', 'Drop', 'Solo', 'Pre-Chorus', 'Drop', 'Metal-Break', 'Pre-Chorus', 'Drop'])
            ),
            new Genre(
              'Old Rock',
              new BPM([80, 160]),
              new Drums('Acoustic', 'Main', 'Acoustic', 'Acoustic', 'Acoustic', true, true, true, true),
              new Synths(false, false, false, false, false),
              Instruments.All,
              new Arrangement(['Intro', 'Verse', 'Drop', 'Verse', 'Pre-Chorus', 'Solo', 'Verse', 'Pre-Chorus', 'Drop', 'Sax Solo'])
            ),
            new Genre(
              'Pop-Rock',
              new BPM([80, 160]),
              new Drums('Acoustic', 'Main', 'Acoustic', 'Acoustic', 'Acoustic', true, true, true, true),
              Synths.All,
              Instruments.All,
              new Arrangement(['Intro', 'Verse', 'Pre-Chorus', 'Drop', 'Break', 'Verse', 'Pre-Chorus', 'Drop', 'Verse', 'Drop', 'Outro'])
            ),
            new Genre(
              'Rock',
              new BPM([80, 160]),
              new Drums('Acoustic', 'Main', 'Acoustic', 'Acoustic', 'Acoustic', true, true, true, true),
              new Synths(false, false, false, false, false),
              Instruments.All,
              new Arrangement(['Drop', 'Verse', 'Pre-Chorus', 'Drop', 'Verse', 'Pre-Chorus', 'Drop', 'Break', 'Solo', 'Drop'])
            ),
            new Genre(
              'Wannabe Metal',
              new BPM([80, 200]),
              new Drums('Acoustic', 'Main', 'Acoustic', 'Acoustic', 'Acoustic', true, true, true, true),
              Synths.All,
              Instruments.All,
              new Arrangement(['Intro', 'Verse', 'Pre-Chorus', 'Drop', 'Break', 'Verse', 'Pre-Chorus', 'Drop', 'Metal-Break', 'Techno-Break', 'Metal-Break', 'Break', 'Drop', 'Outro'])
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