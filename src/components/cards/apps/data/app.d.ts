type AppItemType = {
  title: string;
  description: string;
  icon?: string;
  image: string;
  path: string;
  keywords?: string[];
  tags: string[];
  hasBorder?: boolean;
  link?: string;
  appstore?: string;
  playstore?: string;
  github?: string;
  pub?: string;
  imageClassName?: string;
};

export default AppItemType;
