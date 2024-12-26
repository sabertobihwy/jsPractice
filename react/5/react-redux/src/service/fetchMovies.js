async function fetchMoviesAsyn(url,page,size){
    const params = {
      page: page,
      size: size
    };
    const queryString = new URLSearchParams(params).toString(); // 生成 "page=2&size=10"
    const fullUrl = `${url}?${queryString}`;
    const data = await fetch(fullUrl).then(resp=> resp.json()).then(obj => obj.data)
    return {
        totalCount: data.movieTotal,
        listData : data.movieList,
    }
  }

  export default fetchMoviesAsyn

  