import { useQuery } from '@tanstack/react-query';
import { _get } from '../api/client';
import { type TransactionsModel } from '../api/types/TransactionsModel';

export const KPI_KEYS = {
    transactions: ["ransactions"] as const,
} as const

export const useTransactions = () =>{
    return(
        useQuery({
            queryFn: () => _get<TransactionsModel[]>("transactions", {}),
            queryKey: KPI_KEYS.transactions
        })
    );
}
    