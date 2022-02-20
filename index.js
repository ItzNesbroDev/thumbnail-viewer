import getYoutubeId from "get-youtube-id";

function thumbnailViewer(url) {
let id = getYoutubeId(url);

  if (!id && url.length === 11) {
    id = url;
  }
  return "http://img.youtube.com/vi/" + id + "/hqdefault.jpg";
}

module.exports.thumbnailViewer = thumbnailViewer;
