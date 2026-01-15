import { useQuery } from "@tanstack/react-query"
import { _get } from "../api/client"
import type { TopSellingProduct } from "../api/types/TopSellingProduct"

const useTopSellingProducts = () => {
  return (
    useQuery({
        queryKey: ["topSellingProducts"],
        queryFn: () => _get<TopSellingProduct>("MetricsControllers/topSellingProduct", {})
    })
  )
}

export default useTopSellingProducts