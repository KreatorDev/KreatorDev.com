type AppItemType = {
  title: string;
  description: string;
  image: string;
  path: string;
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
