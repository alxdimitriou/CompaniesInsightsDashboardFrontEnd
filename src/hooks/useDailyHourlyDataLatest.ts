import { useQuery } from "@tanstack/react-query"
import { _get } from "../api/client";
import type { DailyHourlyDataModel } from "../api/types/DailyHourlyDataModel";

export const KPI_KEYS = {
    //query key for the current weather data
    lastestDailyHourlyData: ["LastestDailyHourlyData"] as const,
} as const 

export const useDailyHourlyDataLatest = () =>{
    return useQuery({

        queryFn: () => _get<DailyHourlyDataModel[]>("DailyHourlyData/latest", {}),
        queryKey: KPI_KEYS.lastestDailyHourlyData
    });
}