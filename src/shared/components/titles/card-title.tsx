function CardTitle({ icon, title }: { icon?: any; title: string }) {
  return (
    <div className="flex items-center justify-start opacity-50">
      {icon}
      {!!icon && <div className="w-2.5" />}
      <p className="text-sm font-normal">{title}</p>
    </div>
  );
}

export default CardTitle;
