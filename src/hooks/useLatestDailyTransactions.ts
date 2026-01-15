import { useQuery } from "@tanstack/react-query"
import { _get } from "../api/client";
import type { TransactionsModel } from "../api/types/TransactionsModel";

export const KPI_KEYS = {
    //query key for the current weather data
    latestTransactions: ["LastestTransactions"] as const,
} as const 

export const useLatestDailyTransactions = () =>{
    return useQuery({
        queryFn: () => _get<TransactionsModel[]>("transactions/latest", {}),
        queryKey: KPI_KEYS.latestTransactions

    });
}