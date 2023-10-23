import WorkPage from "@/components/work/work-page";

export default function WorkPageEntry({ params }: { params: any }) {
  const { id } = params;
  return <WorkPage id={id} />;
}
