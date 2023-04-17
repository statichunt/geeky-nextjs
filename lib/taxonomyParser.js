import { getSinglePage } from "@lib/contentParser";
import { slugify } from "@lib/utils/textConverter";

// get all taxonomies from frontmatter
export const getTaxonomy = (folder, name) => {
  const singlePages = getSinglePage(folder);
  const taxonomyPages = singlePages.map((page) => page.frontmatter[name]);
  let taxonomies = [];
  for (let i = 0; i < taxonomyPages.length; i++) {
    if (taxonomyPages[i] === undefined) {
        continue;
    }
    const isArray = Array.isArray(taxonomyPages[i]);
    const categoryArray = isArray ? taxonomyPages[i] : [ taxonomyPages[i] ];
    for (let j = 0; j < categoryArray.length; j++) {
      taxonomies.push(slugify(categoryArray[j]));
    }
  }
  const taxonomy = [...new Set(taxonomies)];
  return taxonomy;
};
