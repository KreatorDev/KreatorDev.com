import ThemeSwitcher from "@/components/cards/theme/theme-toggle";
import CardTitle from "@/shared/components/titles/card-title";
import cardStyle from "@/shared/styles/card";

export default function ThemeCard({ className }: { className?: string }) {
  return (
    <div className={cardStyle + className}>
      <CardTitle title="THEME" />
      <ThemeSwitcher />
    </div>
  );
}
