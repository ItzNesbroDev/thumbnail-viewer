import getYoutubeId from "get-youtube-id";

export const getThumbnail = (url: any) => {
  let id = getYoutubeId(url);

  if (!id && url.length === 11) {
    id = url;
  }
  return "http://img.youtube.com/vi/" + id + "/hqdefault.jpg";
};
