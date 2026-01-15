import { useQuery } from "@tanstack/react-query";
import { _get } from "../api/client";


const useAverageDailyOrderValue = () => {
  return (
    useQuery({
        queryKey : ["averageDailyOrderValue"],
        queryFn: () => _get<number>("MetricsControllers/averageDailyOrderAmount", {})
    })
  )
}

export default useAverageDailyOrderValue