import AppPage from "@/components/cards/app-page/app-page";
import getAppPage from "@/components/cards/app-page/data/get-object";
import NotFound from "@/components/other/404";

export default function AppPageEntry({ params }: { params: any }) {
  const { id } = params;
  const page = getAppPage(id);
  if (!page) return <NotFound />;
  return <AppPage page={page} />;
}
