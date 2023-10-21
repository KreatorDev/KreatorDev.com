import { usePathname } from "next/navigation";

export const useAppPathsList = () => {
  const pathname = usePathname() ?? "";
  const paths = pathname.split("/");
  if (paths.length < 2) return [];
  return paths.slice(1);
};

const useAppPathname = () => {
  const paths = useAppPathsList();
  if (paths.length === 0) return "/";
  return "/" + paths[0];
};

export default useAppPathname;
