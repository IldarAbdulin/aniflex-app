export interface Random {
  id?: number;
  code?: string;
  names?: Names;
  franchises?: any[];
  announce?: any;
  status?: Status;
  posters?: Posters;
  updated?: number;
  last_change?: number;
  type?: Type;
  genres?: string[];
  team?: Team;
  season?: Season;
  description?: string;
  in_favorites?: number;
  blocked?: Blocked;
  player?: Player;
  torrents?: Torrents;
}

export interface Names {
  ru: string;
  en: string;
  alternative: any;
}

export interface Status {
  string: string;
  code: number;
}

export interface Posters {
  small: Small;
  medium: Medium;
  original: Original;
}

export interface Small {
  url: string;
  raw_base64_file: any;
}

export interface Medium {
  url: string;
  raw_base64_file: any;
}

export interface Original {
  url: string;
  raw_base64_file: any;
}

export interface Type {
  full_string: string;
  code: number;
  string: string;
  episodes: number;
  length: number;
}

export interface Team {
  voice: string[];
  translator: string[];
  editing: any[];
  decor: any[];
  timing: any[];
}

export interface Season {
  string: any;
  code: number;
  year: number;
  week_day: number;
}

export interface Blocked {
  copyrights: boolean;
  geoip: boolean;
  geoip_list: any[];
}

export interface Player {
  alternative_player: string;
  host: string;
  is_rutube: boolean;
  episodes: Episodes;
  list: RandomInfo[];
  rutube: Rutube;
}

export interface Episodes {
  first: number;
  last: number;
  string: string;
}

export interface RandomInfo {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips;
  hls: Hls;
}

export interface Skips {
  opening: number[];
  ending: any[];
}

export interface Hls {
  fhd: any;
  hd: string;
  sd: string;
}

export interface N2 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips2;
  hls: Hls2;
}

export interface Skips2 {
  opening: number[];
  ending: any[];
}

export interface Hls2 {
  fhd: any;
  hd: string;
  sd: string;
}

export interface N3 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips3;
  hls: Hls3;
}

export interface Skips3 {
  opening: number[];
  ending: any[];
}

export interface Hls3 {
  fhd: any;
  hd: string;
  sd: string;
}

export interface N4 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips4;
  hls: Hls4;
}

export interface Skips4 {
  opening: number[];
  ending: any[];
}

export interface Hls4 {
  fhd: any;
  hd: string;
  sd: string;
}

export interface N5 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips5;
  hls: Hls5;
}

export interface Skips5 {
  opening: number[];
  ending: any[];
}

export interface Hls5 {
  fhd: any;
  hd: string;
  sd: string;
}

export interface N6 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips6;
  hls: Hls6;
}

export interface Skips6 {
  opening: number[];
  ending: any[];
}

export interface Hls6 {
  fhd: any;
  hd: string;
  sd: string;
}

export interface N7 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips7;
  hls: Hls7;
}

export interface Skips7 {
  opening: number[];
  ending: any[];
}

export interface Hls7 {
  fhd: any;
  hd: string;
  sd: string;
}

export interface N8 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips8;
  hls: Hls8;
}

export interface Skips8 {
  opening: number[];
  ending: any[];
}

export interface Hls8 {
  fhd: any;
  hd: string;
  sd: string;
}

export interface N9 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips9;
  hls: Hls9;
}

export interface Skips9 {
  opening: number[];
  ending: any[];
}

export interface Hls9 {
  fhd: any;
  hd: string;
  sd: string;
}

export interface N10 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips10;
  hls: Hls10;
}

export interface Skips10 {
  opening: number[];
  ending: any[];
}

export interface Hls10 {
  fhd: any;
  hd: string;
  sd: string;
}

export interface N11 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips11;
  hls: Hls11;
}

export interface Skips11 {
  opening: number[];
  ending: any[];
}

export interface Hls11 {
  fhd: any;
  hd: string;
  sd: string;
}

export interface N12 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips12;
  hls: Hls12;
}

export interface Skips12 {
  opening: number[];
  ending: any[];
}

export interface Hls12 {
  fhd: any;
  hd: string;
  sd: string;
}

export interface N13 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips13;
  hls: Hls13;
}

export interface Skips13 {
  opening: number[];
  ending: any[];
}

export interface Hls13 {
  fhd: any;
  hd: string;
  sd: string;
}

export interface N14 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips14;
  hls: Hls14;
}

export interface Skips14 {
  opening: number[];
  ending: any[];
}

export interface Hls14 {
  fhd: any;
  hd: string;
  sd: string;
}

export interface N15 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips15;
  hls: Hls15;
}

export interface Skips15 {
  opening: number[];
  ending: any[];
}

export interface Hls15 {
  fhd: any;
  hd: string;
  sd: string;
}

export interface N16 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips16;
  hls: Hls16;
}

export interface Skips16 {
  opening: number[];
  ending: any[];
}

export interface Hls16 {
  fhd: any;
  hd: string;
  sd: string;
}

export interface Rutube {}

export interface Torrents {
  episodes: Episodes2;
  list: List2[];
}

export interface Episodes2 {
  first: number;
  last: number;
  string: string;
}

export interface List2 {
  torrent_id: number;
  episodes: Episodes3;
  quality: Quality;
  leechers: number;
  seeders: number;
  downloads: number;
  total_size: number;
  size_string: string;
  url: string;
  magnet: string;
  uploaded_timestamp: number;
  hash: string;
  metadata: any;
  raw_base64_file: any;
}

export interface Episodes3 {
  first: number;
  last: number;
  string: string;
}

export interface Quality {
  string: string;
  type: string;
  resolution: string;
  encoder: string;
  lq_audio: any;
}
