import { useEffect, useState } from "react";
import { errorIcon, infoIcon, successIcon } from "./icons-data";
import { AlertEnum, AlertType } from "./types";

export function AlertDialog(alertType: AlertType) {
  const { title, description, seconds, type, className } = alertType;
  let bgColor = "bg-red-50",
    titleColor = "text-red-600",
    descColor = "text-red-500",
    strokeColor = "bg-red-500",
    icon: any = errorIcon;

  switch (type) {
    case AlertEnum.SUCCESS:
      bgColor = "bg-green-100";
      titleColor = "text-green-500";
      descColor = titleColor;
      strokeColor = "bg-green-500";
      icon = successIcon;
      break;
    case AlertEnum.WARNING:
      bgColor = "bg-yellow-50";
      titleColor = "text-yellow-600";
      descColor = "text-yellow-500";
      strokeColor = "bg-yellow-600";
      icon = infoIcon;
      break;
    case AlertEnum.INFO:
      bgColor = "bg-blue-50";
      titleColor = "text-blue-500";
      descColor = titleColor;
      strokeColor = "bg-blue-500";
      icon = infoIcon;
      break;
  }
  return (
    <div
      className={
        "fixed flex flex-col z-50 left-0 w-full m-auto justify-center items-center px-3 " +
        className
      }
    >
      <div
        className={"rounded-2xl overflow-clip bg-opacity-90 border " + bgColor}
      >
        <div className={"flex items-center pl-4 pt-4 pr-6 " + titleColor}>
          {icon && <div className="w-6 h-6 mr-2">{icon}</div>}
          {title && <strong className="block font-semibold">{title}</strong>}
        </div>
        <div className="flex items-center px-4 pb-4">
          {description && (
            <p className={"mt-3 mr-2 text-sm " + descColor}>{description}</p>
          )}
        </div>
        {seconds && (
          <ProgressBar strokeColor={strokeColor} maxSeconds={seconds} />
        )}
      </div>
    </div>
  );
}

function ProgressBar({
  maxSeconds,
  strokeColor,
}: {
  maxSeconds: number;
  strokeColor: string;
}) {
  maxSeconds = maxSeconds * 950;
  const [elapsedTime, setElapsedTime] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedTime((prevElapsedTime) => prevElapsedTime + 20);
    }, 20);

    return () => clearInterval(interval);
  }, []);
  const progress = Math.min(1, elapsedTime / maxSeconds);
  return (
    <div
      className="h-[2.5px] w-full rounded-full"
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={maxSeconds}
      aria-valuenow={elapsedTime}
    >
      <div
        className={"h-[2.5px] rounded-full " + strokeColor}
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
}
