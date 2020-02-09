export interface DividendsProps {
  Division: number;
  BlockNumberOfWinners: number;
  BlocDividend: number;
  CompanyId: string;
  CompanyNumberOfWinners: number;
  CompanyDivident: number;
  PoolTransferType: string;
  PoolTransferedTo: number;
}

export interface DrawResult {
  ProductId?: string;
  DrawNumber?: 4023;
  DrawDate?: Date;
  DrawDisplayName?: string;
  DrawLogoUrl?: string;
  PrimaryNumbers: number[];
  SecondaryNumbers: number[];
  TicketNumbers?: [] | null;
  Dividends?: [];
}

export interface LotteryData {
  DrawResults: DrawResult[];
  ErrorInfo: Error | null;
  Success: boolean;
}

export interface DataProps {
  powerData?: DrawResult;
}
