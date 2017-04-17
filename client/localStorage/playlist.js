
export function onSavePlaylist(list) {
  localStorage.playlist = JSON.stringify(list)
}

export function getPlaylist() {
  const playlist = localStorage.playlist
    ? JSON.parse(localStorage.playlist)
    : [{
      "name":"致青春",
      "id":1,
      "alias":["电影《致我们终将逝去的青春》主题曲"],
      "artists":[{
        "name":"王菲",
        "id":9621,
        "picUrl":"http://p4.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
        "img1v1Url":"http://p3.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
      }],
      "album":{
        "name":"致 青春",
        "id":2421038,
        "blurPicUrl":"http://p4.music.126.net/hIkqOvTEhIZPm_NfU-Lknw==/1904354139400534.jpg",
        "pic":1904354139400534,
        "picUrl":"http://p4.music.126.net/hIkqOvTEhIZPm_NfU-Lknw==/1904354139400534.jpg",
      },
      "mp3Url":"http://m2.music.126.net/qh_7jdMm6NezeYKKBF1Nlg==/2785062953164777.mp3",
      "source":{
        "description":"搜索",
        "site":"search?s=致青春"
      }
    }]
  return playlist
}