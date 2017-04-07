
import { searchApi } from 'api'

export function postSearch(search, offset=1, limit=10, type=1) {
  fetch(searchApi, {
    method: "POST",
    headers: {
      "Cookie": "appver=1.5.0.75771",
      "Referer": "http://music.163.com/"
    },
    body: `s=${search}&offset=${offset}&limit=${limit}&type=${type}`
  }).then(function(res) {
    if(res.ok) {
      return res.json().then(data => data.result.songs);
    } else {
      throw new Error("response Error");
    }
  }, function(err) {
    return [];
    throw new Error(err);
  })
}

/*[{
  "name":"致青春",
  "id":26207292,
  "position":1,
  "alias":["电影《致我们终将逝去的青春》主题曲"],
  "status":0,
  "fee":0,
  "copyrightId":0,
  "disc":"",
  "no":1,
  "artists":[{
    "name":"王菲",
    "id":9621,
    "picId":0,
    "img1v1Id":0,
    "briefDesc":"",
    "picUrl":"http://p4.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
    "img1v1Url":"http://p3.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
    "albumSize":0,
    "alias":[],
    "trans":"",
    "musicSize":0
  }],
  "album":{
    "name":"致 青春",
    "id":2421038,
    "type":"EP/Single",
    "size":1,
    "picId":1904354139400534,
    "blurPicUrl":"http://p4.music.126.net/hIkqOvTEhIZPm_NfU-Lknw==/1904354139400534.jpg",
    "companyId":0,
    "pic":1904354139400534,
    "picUrl":"http://p4.music.126.net/hIkqOvTEhIZPm_NfU-Lknw==/1904354139400534.jpg",
    "publishTime":1366041600007,
    "description":"",
    "tags":"",
    "company":"KATIE CHAN PRODUCTIONS CO.LTD",
    "briefDesc":"",
    "artist":{
      "name":"",
      "id":0,
      "picId":0,
      "img1v1Id":0,
      "briefDesc":"",
      "picUrl":"http://p4.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
      "img1v1Url":"http://p3.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
      "albumSize":0,
      "alias":[],
      "trans":"",
      "musicSize":0
    },
    "songs":[],
    "alias":[],
    "status":1,
    "copyrightId":0,
    "commentThreadId":"R_AL_3_2421038",
    "artists":[{
      "name":"王菲",
      "id":9621,
      "picId":0,
      "img1v1Id":0,
      "briefDesc":"",
      "picUrl":"http://p3.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
      "img1v1Url":"http://p4.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
      "albumSize":0,
      "alias":[],
      "trans":"",
      "musicSize":0
    }]
  },
  "starred":false,
  "popularity":100.0,
  "score":100,
  "starredNum":0,
  "duration":193560,
  "playedNum":0,
  "dayPlays":0,
  "hearTime":0,
  "ringtone":"600902000007948101",
  "crbt":null,
  "audition":null,
  "copyFrom":"",
  "commentThreadId":"R_SO_4_26207292",
  "rtUrl":null,
  "ftype":0,
  "rtUrls":[],
  "copyright":2,
  "mvid":0,
  "rtype":0,
  "rurl":null,
  "hMusic":{
    "name":"致青春",
    "id":23407131,
    "size":7768943,
    "extension":"mp3",
    "sr":48000,
    "dfsId":2838939022925345,
    "bitrate":320000,
    "playTime":193560,
    "volumeDelta":0.143258
  },
  "mMusic":{
    "name":"致青春",
    "id":23407132,
    "size":3897743,
    "extension":"mp3",
    "sr":48000,
    "dfsId":2855431697341989,
    "bitrate":160000,
    "playTime":193560,
    "volumeDelta":0.430654
  },
  "lMusic":{
    "name":"致青春",
    "id":23407133,
    "size":2348879,
    "extension":"mp3",
    "sr":48000,
    "dfsId":2785062953164777,
    "bitrate":96000,
    "playTime":193560,
    "volumeDelta":0.345556
  },
  "bMusic":{
    "name":"致青春",
    "id":23407133,
    "size":2348879,
    "extension":"mp3",
    "sr":48000,
    "dfsId":2785062953164777,
    "bitrate":96000,
    "playTime":193560,
    "volumeDelta":0.345556
  },
  "mp3Url":"http://m2.music.126.net/qh_7jdMm6NezeYKKBF1Nlg==/2785062953164777.mp3"
}]
*/