import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const beans = defineCollection({
  // Load Markdown and MDX files in the `src/content/beans/` directory.
  loader: glob({ base: "./src/content/beans", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      producer: z.string(),
      producerImg: z.string(),
      tasteNotes: z.string(),
      species: z.string(),
      varietas: z.string(),
      processType: z.string(),
      roastLevel: z.string(),
      farmLocation: z.string(),
      farmAltitude: z.number().optional().nullable(),
      farmAltitudeTo: z.number().optional().nullable(),
      boughtDate: z.string().optional().nullable(),
      boughtPlace: z.string(),
      weight: z.string(),
    }),
});

export const collections = { beans };
