import thirdPartyServices from "./data/third-party";

export default function ThirdPartyList({
  link,
  className,
}: {
  link: "privacy" | "terms";
  className: string;
}) {
  return (
    <ul className={className + " list-disc list-inside flex flex-col gap-1"}>
      {thirdPartyServices.map((group) => (
        <li key={group.category}>
          {group.category}:{" "}
          {group.services.map((service, index) => (
            <span key={service.name}>
              {index > 0 && ", "}
              <a
                href={service[link]}
                target="_blank"
                className="underline hover:opacity-50"
              >
                {service.name}
              </a>
            </span>
          ))}
        </li>
      ))}
    </ul>
  );
}
