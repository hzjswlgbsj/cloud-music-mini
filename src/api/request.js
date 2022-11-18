import { axiosInstance } from "./config";

export const getBannerRequest = () => {
  return axiosInstance.get ('/banner');
}

export const getRecommendListRequest = () => {
  return axiosInstance.get ('/personalized');
}

export const getHotSingerListRequest = (count) => {
  return axiosInstance.get(`/top/artists?offset=${count}`);
}

export const getSingerListRequest= (category, alpha, count) => {
  return axiosInstance.get(`/artist/list?cat=${category}&initial=${alpha.toLowerCase()}&offset=${count}`);
}

export const getRankListRequest = () => {
  return axiosInstance.get (`/toplist/detail`);
};

export const getAlbumDetailRequest = id => {
  return axiosInstance.get(`/playlist/detail?id=${id}`);
};

export const getSingerInfoRequest = id => {
  return axiosInstance.get(`/artists?id=${id}`);
};
export const getLyricRequest = id => {
  return axiosInstance.get(`/lyric?id=${id}`);
};
export const getHotKeyWordsRequest = () => {
  return axiosInstance.get(`/search/hot`);
};

export const getSuggestListRequest = query => {
  return axiosInstance.get(`/search/suggest?keywords=${query}`);
};

export const getResultSongsListRequest = query => {
  return axiosInstance.get(`/search?keywords=${query}`);
};

export const getSongDetailRequest = id => {
  return axiosInstance.get(`/song/detail?ids=${id}`);
};

// 获取推荐视频
export const getPromotedVideos = offset => {
  return axiosInstance.get(`/video/timeline/recommend?offset=${offset}`);
};

// 获取视频详情
export const getVideoDetail = id => {
  return axiosInstance.get(`/video/detail?id=${id}`);
};

// 获取视频播放地址
export const getVideoUrl = id => {
  return axiosInstance.get(`/video/url?id=${id}`);
};

// 获取视频点赞转发评论数数据
export const getVideoLikesForwardsComments = id => {
  return axiosInstance.get(`/video/detail/info?id=${id}`);
};

// 获取相关视频
export const getRelatedVideos = id => {
  return axiosInstance.get(`/related/allvideo?id=${id}`);
};