import { useEffect, useState } from "react";

type LoadingButtonType = {
  className?: string;
  loadingClassName?: string;
  loading?: boolean;
  button?: React.ReactNode;
};

export const useLoadingButton = ({
  props,
  iniIsLoading = false,
}: {
  props: LoadingButtonType;
  iniIsLoading?: boolean;
}) => {
  const [isLoading, setLoading] = useState(iniIsLoading);

  useEffect(() => {
    setLoading(iniIsLoading);
  }, [iniIsLoading]);

  return {
    isLoading,
    setLoading,
    loadingButton: (
      <div className={"relative " + props.className}>
        <div
          style={{
            opacity: isLoading ? 0 : 1,
            transition: "opacity 0.2s ease-in-out",
          }}
          className={isLoading ? "pointer-events-none" : ""}
        >
          {props.button}
        </div>
        {isLoading && (
          <div className="absolute inset-0 flex justify-center items-center">
            <LoadingSpinnerByColor
              className={"h-6 w-6 " + props.loadingClassName}
            />
          </div>
        )}
      </div>
    ),
  };
};

function LoadingSpinnerByColor(props: any) {
  const size = 34;
  return (
    <svg viewBox={`0 0 ${size} ${size}`} fill="none" {...props}>
      <defs>
        <linearGradient id="spinner-secondHalf">
          <stop offset="0%" stopOpacity="0" stopColor="currentColor" />
          <stop offset="100%" stopOpacity="0.5" stopColor="currentColor" />
        </linearGradient>
        <linearGradient id="spinner-firstHalf">
          <stop offset="0%" stopOpacity="1" stopColor="currentColor" />
          <stop offset="100%" stopOpacity="0.5" stopColor="currentColor" />
        </linearGradient>
      </defs>

      <g strokeWidth="3">
        <path
          stroke={`url(#spinner-secondHalf)`}
          d={`M 4 ${size / 2} A ${(size - 8) / 2} ${(size - 8) / 2} 0 0 1 ${
            size - 4
          } ${size / 2}`}
        />
        <path
          stroke={`url(#spinner-firstHalf)`}
          d={`M ${size - 4} ${size / 2} A ${(size - 8) / 2} ${
            (size - 8) / 2
          } 0 0 1 4 ${size / 2}`}
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          d={`M 4 ${size / 2} A ${(size - 8) / 2} ${(size - 8) / 2} 0 0 1 4 ${
            size / 2 - 2
          }`}
        />
      </g>

      <animateTransform
        from="0 0 0"
        to="360 0 0"
        attributeName="transform"
        type="rotate"
        repeatCount="indefinite"
        dur="1300ms"
      />
    </svg>
  );
}
