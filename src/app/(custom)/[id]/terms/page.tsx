import getAppPage from "@/components/cards/app-page/data/get-object";
import Terms from "@/components/cards/app-page/terms";
import NotFound from "@/components/other/404";

export default function TermsEntry({ params }: { params: any }) {
  const { id } = params;
  const page = getAppPage(id);
  if (!page) return <NotFound />;
  return <Terms page={page} />;
}
