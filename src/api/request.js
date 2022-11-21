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

// 获取推荐mv
export const getRecommendVideos = () => {
  return axiosInstance.get(`/personalized/mv`);
};

// 获取mv排行
export const getTopVideos = offset => {
  return axiosInstance.get(`/top/mv?offset=${offset}`);
};

// 获取mv详情
export const getVideoDetail = mvid => {
  return axiosInstance.get(`/mv/detail?mvid=${mvid}`);
};

// 获取mv播放地址
export const getVideoUrl = id => {
  return axiosInstance.get(`/mv/url?id=${id}&r=1080`);
};

// 获取mv点赞转发评论数数据
export const getVideoLikesForwardsComments = mvid => {
  return axiosInstance.get(`/mv/detail/info?mvid=${mvid}`);
};

// 获取相关视频
export const getAllMv = limit => {
  return axiosInstance.get(`/mv/first?limit=${limit}`);
};