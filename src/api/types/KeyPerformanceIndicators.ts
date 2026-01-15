export interface DailyData {
  date: string; // ISO string for UTC DateTimeOffset
  revenue: number;
  expenses: number;
}

export interface MonthlyData {
  id: number,
  month: string;
  revenue: number;
  expenses: number;
  operationalExpenses: number;
  nonOperationalExpenses: number;
}

export interface KeyPerformanceType {
  id: string;
  totalProfit: number;
  totalRevenue: number;
  totalExpenses: number;
  expensesByCategory: Record<string, number>; // dictionary<string,int>
  dailyData: DailyData[];
  monthlyData: MonthlyData[];
  dateTimeCreated: string; // ISO string for DateTimeOffset.UtcNow
}