export interface ProductModel {
  id?: string | undefined;
  name: string;
  price: number;
  transactionIds?: string[] | null;
}