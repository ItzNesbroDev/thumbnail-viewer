const getYoutubeId = require("get-youtube-id");

module.exports = function (url) {
    let id = getYoutubeId(url);

    if (!id && url.length === 11) {
        id = url
    }
    return 'http://img.youtube.com/vi/' + id + '/hqdefault.jpg'
}
