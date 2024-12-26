import {createActions} from 'redux-actions'

// counter{}
// movies{
//       isLoading:
//       condition:
//       result: {totalCount, datas}
// }
const {fetchMovies, setMoviesResult,isLoading} = createActions({
    FETCH_MOVIES: null,
    SET_MOVIES_RESULT: (result)=>result,
    IS_LOADING: (bool) => bool
})

export {fetchMovies, setMoviesResult,isLoading}