import {
  githubIcon,
  instagramIcon,
  linkedinIcon,
  xIcon,
} from "@/assets/icons/all-social";
import linksMetadata from "@/metadata/links";

const linksCards = [
  {
    title: "Github",
    href: linksMetadata.github,
    className: "dark:bg-white p-2",
    icon: githubIcon,
  },
  {
    title: "LinkedIn",
    className: "!bg-[#0A66C2] p-4",
    href: linksMetadata.linkedin,
    icon: linkedinIcon,
  },
  {
    title: "Instagram",
    className: "!bg-transparent",
    href: linksMetadata.instagram,
    icon: instagramIcon,
  },
  {
    title: "X",
    className: "p-4 bg-dark dark:bg-white",
    href: linksMetadata.x,
    icon: xIcon,
  },
];

export default linksCards;
