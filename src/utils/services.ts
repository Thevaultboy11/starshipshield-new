import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";
import type { Services } from "~/types";
import { cleanSlug, trimSlash, services_PERMALINK_PATTERN } from "./permalinks";

const generatePermalink = async ({ id, slug, publishDate, category }) => {
  const year = String(publishDate.getFullYear()).padStart(4, "0");
  const month = String(publishDate.getMonth() + 1).padStart(2, "0");
  const day = String(publishDate.getDate()).padStart(2, "0");
  const hour = String(publishDate.getHours()).padStart(2, "0");
  const minute = String(publishDate.getMinutes()).padStart(2, "0");
  const second = String(publishDate.getSeconds()).padStart(2, "0");

  const permalink = services_PERMALINK_PATTERN
    .replace("%slug%", slug)
    .replace("%id%", id)
    .replace("%category%", category || "")
    .replace("%year%", year)
    .replace("%month%", month)
    .replace("%day%", day)
    .replace("%hour%", hour)
    .replace("%minute%", minute)
    .replace("%second%", second);

  return permalink
    .split("/")
    .map((el) => trimSlash(el))
    .filter((el) => !!el)
    .join("/");
};

const getNormalizedservices = async (
  services: CollectionEntry<any>
): Promise<Services> => {
  const { id, slug: rawSlug = "", data } = services;
  const { Content, remarkPluginFrontmatter } = await services.render();

  const {
    tags: rawTags = [],
    category: rawCategory,
    author = "Anonymous",
    publishDate: rawPublishDate = new Date(),
    ...rest
  } = data;

  const slug = cleanSlug(rawSlug.split("/").pop());
  const publishDate = new Date(rawPublishDate);
  const category = rawCategory ? cleanSlug(rawCategory) : undefined;
  const tags = rawTags.map((tag: string) => cleanSlug(tag));

  return {
    id: id,
    slug: slug,

    publishDate: publishDate,
    category: category,
    tags: tags,
    author: author,

    ...rest,

    Content: Content,
    // or 'body' in case you consume from API

    permalink: await generatePermalink({ id, slug, publishDate, category }),

    readingTime: remarkPluginFrontmatter?.readingTime,
  };
};

export const loadServices = async function (): Promise<Array<Services>> {
  const services = await getCollection("services");
  const normalizedServices = services.map(
    async (services) => await getNormalizedservices(services)
  );

  const results = (await Promise.all(normalizedServices))
    .sort((a, b) => b.publishDate.valueOf() - a.publishDate.valueOf())
    .filter((services) => !services.draft);

  return results;
};
