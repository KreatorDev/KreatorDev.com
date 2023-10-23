import AboutWork from "@/components/work/about-work";

export default function AboutWorkEntry({ params }: { params: any }) {
  const { id } = params;
  return <AboutWork id={id} />;
}
