import { QueryClient } from "react-query"

export default new QueryClient({
    defaultOptions:{
      staleTime: 1000 * 60 * 5, 
      cacheTime: 1000 * 60 * 30, 
      retry: 2, 
     }
    })
   