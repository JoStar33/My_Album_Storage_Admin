export type adminAlbumType = {
  id: string,
  artist: string,
  image: string,
  name: string;
  header: string,
  description: string,
  owner: string,
  isSelected: boolean
}

type image = {
  height: number,
  url: string,
  width: number
};

type artist = {
  external_urls: Object,
  href: string,
  id: string,
  name: string,
  type: string,
  uri: string
};

export type item = {
  album_type: string,
  artists: artist[],
  available_markets: string[],
  external_urls: Object,
  href: string,
  id: string,
  images: image[],
  name: string,
  release_date: string,
  release_date_precision: string,
  total_tracks: number,
  type: string,
  uri: string
};