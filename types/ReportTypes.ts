import { Dispatch, SetStateAction } from "react";

export interface ReportFormProps {
  setReportVisible: Dispatch<SetStateAction<boolean>>;
  reportVisible: boolean;
}
