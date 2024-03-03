import { ReferenceArtist, ReferenceTrack } from "../common";

export const Artists = [
  // 2.brkn
  // 24kGoldn
  // 3LAU
  // 7ru7h
  // 808Riot
  // A-RIZE
  // Act of Rage
  // Aden Foyer
  // Adrenalize
  // After Forever
  // Aftershock
  // Ahrix
  // akumuh
  // Al Storm
  // Alan Walker
  // Alleviate
  // Alter Ego
  // AMAG
  // Amaranthe
  // Anderex
  // Andrew Liogas
  // Andy the Core
  // Angerfist
  // Anime
  // Anklebreaker
  // Approaching Nirvana
  // Ariana Grande
  // Ashnikko
  // Atef
  // Atmozfears
  // Audiofreq
  // Audiotricz
  // autrioly
  // Avenue Beat
  // Averro
  // Aversion
  // Avi8
  // Avicii
  // AWS
  // B-Front
  // B-Frontliner
  // B2A
  // B3nte
  // BABYMETAL
  // Bankrol Hayden
  // Barber
  // Bass Modulators
  // Bassbrain
  // Basshunter
  // Ben Nicky
  // BENJAMINRICH
  // Billx
  // Blake Shelton
  // Blaster
  // Bloodlust
  // BluntOne
  // Boef
  // BoyWithUke
  // Braden Ross
  // Braken
  // Brenky
  // Brennan Heart
  // Brennan Story
  // Bri-C
  // braintdream
  // billion.
  // Broken Minds
  // Brutal Theory
  // Bulletproof
  // Bumloco
  // boyelog
  // bülow
  // Calvin Harris
  // Carter Cook
  // Cascada
  // Casiio
  // Charlotte Sands
  // Cheat Codes
  // Code Black
  // Connor Price
  // Constera
  // Coone
  // Crude Intentions
  // Cryex
  // Crypton (frenchcore)
  // Crypton (lofi)
  // Crystal Lake
  // D'ort
  // D-Block & S-te-Fan
  // D-Charged
  // D-Fence
  // D-Frek
  // D-Mind
  // D-Sturb
  // Da Tweekaz
  // Daniel Simonsen
  // Darren Styles
  // De-Grees
  // Deadfish
  // Deadly Guns
  // Degos & Re-Done
  // Delain
  // Desiigner
  // Devin Wild
  // Different Heaven
  // Dimitri K
  // Dimitri Vegas & Like Mike
  // Disfigure
  // DJ Gollum
  // DJ Isaac
  // Doris
  // Dr Donk
  // Dr. Peacock
  // Drex Carter
  // DRS
  // DVRST
  // Dxrk
  // Electric Callboy
  // Empyre One
  // Envine
  // Ezra Hazard
  // F. Noize
  // F.O.O.L
  // Fall Out Boy
  // FIFTY FIFTY
  // Fox Stevenson
  // From Ashes to New
  // Frontliner
  // G-Eazy
  // Galactixx
  // Ghost Rider
  // Ghostface Playa
  // gloomy
  // GPF
  // GridKiller
  // guccihighwaters
  // Gunz For Hire
  // Hard Driver
  // Harris & Ford
  // Headhunterz
  // Heathenz
  // Hellberg
  // heylog
  // HM Surf
  // Hoogway
  // Hysta
  /// iamjakehill
  // iann dior
  // ILLENIUM
  // illuszion
  // Imanbek
  // Inpulsa
  // Insan3Lik3
  // Irradiate
  // ItaloBrothers
  // Itro
  // j'san
  // Jax
  // JDX
  // JGSW
  // Jhove
  // Jiyagi
  // Jomie
  // Jonas Aden
  // Josh A
  // JTS
  // Judy Collins
  // Juice WRLD
  // Juju Rush
  // juli
  // Julia Alexa
  // Justin Starling
  // JVNA
  // K-391
  // KAAZE
  // Kado
  // KDrew
  // KELTEK
  // Kevin Powers
  // KID E$s
  // Klaas
  // Knife Party
  // Kordhell
  // Korsakoff
  // Koven
  // Krewella
  // Kronos
  // Krowdexx
  // KSHMR
  // KSI
  // Kygo
  // Kylastic
  // Kyle Beats
  // Kyle Beats Collective
  // L.Dre
  // Lady Dammage
  // Laffey
  // LALOU
  // Last Dinosaurs
  // Laufey
  // Lensko
  // Lexi Jayde
  // Lil Man J
  // Lil Revive
  // Lil Tecca
  // Lil Texas
  // LNY TNZ
  // LOONA
  // Lucid Green
  // Luh Kel
  // LunaKorpz
  // LXST CXNTURY
  // Major Conspiracy
  // Malice
  // MANDY
  // Manifest Destiny
  // Mark With a K
  // Matt Corman
  // Mind Compressor
  // Mish
  // Miss K8
  // Mizz Behave
  // MoeTheKidd
  // Mookigang
  // Mr. Ivex
  // My Chemical Romance
  // MYST
  // MYTH
  // N-Vitral
  // nanobii
  // Narcyz
  // Natalie Jane
  // Neolux
  // NeoQor
  // Never Surrender
  // NF
  // Nightcraft
  // Nigthwish
  // No Hero
  // no.cape
  // Noisecontrollers
  // Noiseflow
  // Noisestorm
  // Nosferatu
  // Octatonez
  // Ouse
  // Outsiders
  // OVERWERK
  // Panda Eyes
  // Panic! At The Disco
  // Partyraiser
  // Payday
  // Pegboard Nerds
  // Phuture Noize
  // Pixl
  // PlayaPhonk
  // Polo G
  // Powerwolf
  // Powfu
  // Primeshock
  // Project 46
  // Project Zak
  // Proleter
  // Promoting Sounds
  // Purrple Cat
  // Quickdrop
  // R3HAB
  // R3T3P
  // Radical Redemption
  // RAIZHELL
  // Rameses B
  // Ran-D
  // Ranji
  // Rarin
  // Rayvolt
  // Re-Fuzz
  // Re-Style
  // REAPER
  // Rebelion
  // Refuzion
  // Rejecta
  // Remzcore
  // Restrained
  // Rewildz
  // Rnla
  // Rob IYF
  // Rolexz
  // Rooler
  // Runeforce
  // Rxseboy
  // S3RL
  // SadBoyProlific
  // sadeyes
  // Sadfriendd
  // salem ilese
  // Sara Kays
  // Sarcastic Sounds
  // Scarra
  // Scott Brown
  // Sefa
  // Sephyx
  // Serzo
  // Set It Off
  // SHADXWBXRN
  // Shaggy Soldiers
  // shamlo
  // SHAUN
  // Sickmode
  // Sik World
  // Simon Servida
  // sleep.ing
  // Slipfunc
  // Snøw
  // softy
  // Solstice
  // sorrow
  // Sound Rush
  // Stephen Walking
  // Stonebank
  // Stormerz
  // Suae
  // Sub Focus
  // Sub Sonik
  // Sub Zero Project
  // Supachefm
  // Synthsoldier
  // Tatsunoshin
  // TCM
  // Technikore
  // Teminite
  // Tessa
  // Tharoza
  // the bootleg boy
  // The Dark Horror
  // The Kid LAROI
  // The Material
  // Thomas Reid
  // Thyron
  // Timmy Trumpet
  // TMRWNITE
  // TNT
  // Tobey Stark
  // Tobu
  // Toneshifterz
  // TRIIIPL3 INC.
  // Tungevaag
  // Tut Tut Child
  // Tweekacore
  // Ude Af Kontrol
  // Undefiant
  // Unicorn on Ketamine
  // Unproven
  // USAO
  // Vasto
  // Vertex
  // Vertile
  // Vicetone
  // Vwillz
  // Warface
  // Wasted Penguinz
  // WHITENO1SE
  // Wildstylez
  // WYS
  // XYLØ
  // yaeow
  // Yuta Imai
  // Yves V
  // Zedd
] as ReferenceArtist[];
export const Tracks = Artists.flatMap(artist => artist.releases);
export const TrackNameWords = Tracks.flatMap(track => track.name.split(' ').map(word => word.toLowerCase()));

export default Artists;