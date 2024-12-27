import { connect } from "react-redux"
import Table from "./Table"

const mapToProps = (state)=>{
    return {
        movies: {
            datas: state.movies.result.datas,
            isLoading: state.movies.result.isLoading
        }
    }
}

export default connect(mapToProps,null)(Table)