import { useQuery } from "@tanstack/react-query"
import { _get } from "../api/client"

const useLowStockProductsNotificationsCounter = () => {
  return (
    useQuery({
        queryKey: ["lowStockProductNotificationsCount"],
        queryFn: () => _get<number>("MetricsControllers/lowStockProductNotificationsCount", {})
    })
  )
}

export default useLowStockProductsNotificationsCounter