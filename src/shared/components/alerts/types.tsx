export type AlertType = {
  title?: string;
  description?: string;
  seconds?: number;
  type?: AlertEnum;
  className?: string;
};

export enum AlertEnum {
  ERROR = "ERROR",
  SUCCESS = "SUCCESS",
  WARNING = "WARNING",
  INFO = "INFO",
}
