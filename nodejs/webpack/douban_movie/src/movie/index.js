import {page_data} from "@/movie/list"
import { generate_pager } from "./pager"

let pageSize = 15
// 1. page_data() show current page data 
let totalCount = await page_data(1,pageSize)
// 2. generate_pager()  
generate_pager(1,pageSize,totalCount)
