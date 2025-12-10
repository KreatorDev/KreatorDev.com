import { useRef, useState } from "react";
import { AlertType } from "./types";

export function useAlert({
  Alert,
  iniAlert,
}: {
  Alert: any;
  iniAlert?: AlertType;
}) {
  const [alertType, setAlert] = useState(iniAlert);
  const timeout = useRef<NodeJS.Timeout>(undefined);

  const closeAlert = () => {
    setAlert({});
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
