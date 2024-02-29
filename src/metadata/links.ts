import { linkedinUsername, title, username } from "@/constants/strings";

const linksMetadata = {
  x: "https://x.com/" + username,
  linkedin: "https://linkedin.com/in/" + linkedinUsername,
  github: "https://github.com/" + username,
  instagram: "https://instagram.com/" + username,
  youtube: "https://youtube.com/@" + username,
};

export const sourceCode = linksMetadata.github + "/" + title + ".com";

export default linksMetadata;
