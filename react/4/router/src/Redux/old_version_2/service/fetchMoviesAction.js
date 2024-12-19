import { actionType } from "../action/movies/searchCondition"
import { setLoadingAction } from "../action/movies/searchCondition"
import { getResultAction } from "../action/movies/searchResult"
import fetchMovies from "./fetchMovies"

const fetchMoviesAction = ()=>(async (dispatch,getState)=>{
    dispatch(setLoadingAction(true))
    const info = await fetchMovies('/api/movies',
        getState().movies.condition.page,
        getState().movies.condition.size 
    ) 
    dispatch(getResultAction({
        datas: info.listData,
        totalCount: info.totalCount
    }))
    dispatch(setLoadingAction(false))
})

export default fetchMoviesAction