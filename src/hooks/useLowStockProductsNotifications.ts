import { useQuery } from "@tanstack/react-query"
import { _get } from "../api/client"
import type { LowStockProductsNotifications } from "../api/types/LowStockProductsNotifications"

const useLowStockProductsNotifications = () => {
  return (
    useQuery({
        queryKey: ["lowStockProductsNotifications"],
        queryFn: () => _get<LowStockProductsNotifications[]>("LowProductsStockNotifications", {})
    })
  )
}

export default useLowStockProductsNotifications