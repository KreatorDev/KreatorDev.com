import { useRef, useState } from "react";
import { AlertType } from "./types";

export function useAlert({
  Alert,
  iniAlert,
}: {
  Alert: React.FC<AlertType>;
  iniAlert?: AlertType;
}) {
  const [alertType, setAlert] = useState<AlertType | undefined>(iniAlert);
  const timeout = useRef<NodeJS.Timeout>(undefined);

  const closeAlert = () => {
    setAlert(undefined);
    if (timeout.current) clearTimeout(timeout.current);
  };

  const setAlertWithTimeout = (type: AlertType) => {
    closeAlert();
    type.seconds ??= 3;
    type.className += " " + alertType?.className;
    setAlert(type);
    timeout.current = setTimeout(() => {
      closeAlert();
    }, type.seconds * 1000);
  };
  return {
    alertType,
    setAlert: (type: AlertType) => {
      type.seconds = undefined;
      type.className += " " + alertType?.className;
      setAlert(type);
    },
    setAlertWithTimeout,
    closeAlert,
    alert: !!alertType?.title && <Alert {...alertType} />,
  };
}
