type AppItemType = {
  title: string;
  description: string;
  category: string;
  image: string;
  icon?: string;
  path?: string;
  keywords?: string[];
  hasBorder?: boolean;
  under_dev?: boolean;
  appstore?: string;
  playstore?: string;
};

export default AppItemType;
