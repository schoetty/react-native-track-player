export default class VideoInfo {
  title: string;
  desc: string;
  videoCount: number;
  picSrc: string;
  uploader: { mid: number; name: string; face: string };
  pages: Array<{
    bvid: string;
    part: string;
    cid: number | string;
    duration: number;
  }>;
  bvid: string;
  duration: number;

  constructor(
    title: string,
    desc: string,
    videoCount: number,
    picSrc: string,
    uploader: { mid: number; name: string; face: string },
    pages: Array<{
      bvid: string;
      part: string;
      cid: number | string;
      duration: number;
    }>,
    bvid: string,
    duration: number
  ) {
    this.title = title;
    this.desc = desc;
    this.videoCount = videoCount;
    this.picSrc = picSrc;
    this.uploader = uploader;
    this.pages = pages;
    this.bvid = bvid;
    this.duration = duration;
  }
}

/**
 * this interface serves
 * http://api.bilibili.com/x/web-interface/view?bvid=BV1bv4y1p7K4
 */
export interface VideoInfoJsonData {
  bvid: string;
  aid: number;
  videos: number;
  tid: number;
  tname: string;
  pic: string;
  title: string;
  owner: {
    mid: number;
    name: string;
    face: string;
  };
  pages: Array<{
    cid: number;
    page: number;
    part: string;
    duration: number;
    [key: string]: any;
  }>;
  duration: number;
  [key: string]: any;
}

/**
 * this interface serves
 * https://www.bilibili.com/audio/music-service-c/web/song/info?sid=13598
 */
export interface AudioInfoJsonData {
  title: string;
  id: number;
  duration: number;
  cover: string;
  bvid: string;
  aid: number;
  lyric: string;
  uname: string;
  author: string;
  uid: number;
  [key: string]: any;
}
