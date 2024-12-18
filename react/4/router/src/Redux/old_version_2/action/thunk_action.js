import { fetchCities } from "../thunk"
import { getCitiesAction, getIsLoadingAction } from "./Number"

const fetchCitiesAction = ()=>(async (dispatch)=>{
    dispatch(getIsLoadingAction(true))
    const data = await fetchCities()
    dispatch(getCitiesAction(data))
    dispatch(getIsLoadingAction(false))
})

export default fetchCitiesAction