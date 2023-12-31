import getAppPage from "@/components/cards/app-page/data/get-object";
import Privacy from "@/components/cards/app-page/privacy";
import NotFound from "@/components/other/404";

export default function PrivacyEntry({ params }: { params: any }) {
  const { id } = params;
  const page = getAppPage(id);
  if (!page) return <NotFound />;
  return <Privacy page={page} />;
}
