import change from "../../redux/action/movies/condition"
import { fetchMovies } from "../../redux/action/movies/result"
import {connect} from 'react-redux'
import Condition from "./condition"

const mapToProps = (state) => {
    return {
        defaultPage: state.movies.condition.page,
        defaultSize: state.movies.condition.size
    }
}

const mapToDispatch = (dispatch) =>{
    return {
        onSearch: ({ page, size })=>{
            dispatch(change({ page, size }))
            dispatch(fetchMovies())
        }
    }
}

export default connect(mapToProps,mapToDispatch)(Condition)