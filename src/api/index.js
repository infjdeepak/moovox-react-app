const baseUrl = "https://api.themoviedb.org/3/";
const key = import.meta.env.VITE_TMDB_API_KEY;

//get dates
const getCurrentYear = () => {
  return new Date().getFullYear();
};
const getCurrentMonth = () => {
  const currentMonth = new Date().getMonth() + 1;
  if (currentMonth < 10) {
    return `0${currentMonth}`;
  }
  return currentMonth;
};
const getCurrentDay = () => {
  const currentDay = new Date().getDate();
  if (currentDay < 10) {
    return `0${currentDay}`;
  }
  return currentDay;
};
const year = getCurrentYear();
const month = getCurrentMonth();
const day = getCurrentDay();
const currentDate = `${year}-${month}-${day}`;
// const nextDayDate = `${year}-${month}-${day + 1}`;
const lastYear = `${year - 1}-${month}-${day}`;
// const nextYear = `${year + 1}-${month}-${day}`;

//images url
export const imgPaths = {
  medium: `https://image.tmdb.org/t/p/w500`,
  original: `https://image.tmdb.org/t/p/original`,
};

//trending this week
export const getTrendingUrl = () => {
  return `${baseUrl}trending/movie/week?api_key=${key}`;
};
//latest Released
export const getLatestReleasedUrl = (page = 1) => {
  return `${baseUrl}discover/movie?api_key=${key}&sort_by=popularity.desc&page=${page}&release_date.gte=${lastYear}&release_date.lte=${currentDate}`;
};
//animation
export const getAnimationUrl = (page = 1) => {
  return `${baseUrl}discover/movie?api_key=${key}&sort_by=popularity.desc&page=${page}&release_date.gte=${lastYear}&release_date.lte=${currentDate}&with_genres=16`;
};
//horror
export const getHorrorUrl = (page = 1) => {
  return `${baseUrl}discover/movie?api_key=${key}&sort_by=popularity.desc&page=${page}&release_date.gte=${lastYear}&release_date.lte=${currentDate}&with_genres=27`;
};
//mystery
export const getMysteryUrl = (page = 1) => {
  return `${baseUrl}discover/movie?api_key=${key}&sort_by=popularity.desc&page=${page}&release_date.gte=${lastYear}&release_date.lte=${currentDate}&with_genres=9648`;
};

//search url
export const getSearchUrl = (query, page = 1) => {
  return `${baseUrl}search/movie?api_key=${key}&page=${page}&query=${query}`;
};
// get details
// export const getDetailsUrl = (id) => {
//   return `${baseUrl}movie/${id}?api_key=${key}`;
// };
