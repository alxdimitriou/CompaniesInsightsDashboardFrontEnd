import { _get } from '../api/client';
import { useQuery } from '@tanstack/react-query';
import type { LastHighestRevenueRandomMonth } from '../api/types/LastHighestRevenueRandomMonth';

const useRandomHighestRevenueMonth = () => {
  return (
    useQuery({
        queryKey: ["lastHighestRevenueMonth"],
        queryFn: () => _get<LastHighestRevenueRandomMonth>("MetricsControllers/lastHighestRevenueMonth", {})
    })
  )
}

export default useRandomHighestRevenueMonth