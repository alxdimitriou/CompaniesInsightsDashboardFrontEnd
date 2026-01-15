import { useQuery } from '@tanstack/react-query';
import { _get } from '../api/client';
import { type KeyPerformanceType } from '../api/types/KeyPerformanceIndicators';

export const KPI_KEYS = {
    //query key for the current weather data
    kpi: ["KpiData"] as const,
} as const 


export const useKpis = () => {
  return (
    useQuery({
        queryKey: KPI_KEYS.kpi,
        queryFn: () =>  _get<KeyPerformanceType[]>('kpis', {})
        //enabled => for refretch
    })
  )
}
