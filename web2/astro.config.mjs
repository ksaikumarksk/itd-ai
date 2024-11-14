// @ts-check
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import getSidebarItems from "./file-content";



export default defineConfig({
  integrations: [
    starlight({
      title: "Italent Digital | AI",
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        {
          label: "products",
          items: [
            {
              label: "Aurora Copilot",
              slug: "products/aurora-copilot",
            },
            {
              label: "Arx-cli",
              slug: "products/arx-cli",
            },
            {
              label: "Axr Dev Tools",
              slug: "products/arx-dev-tools",
            },
            {
              label: "Khoros Docs Chat",
              slug: "products/khoros-docs-chat",
            },
            {
              label: "Ask Ai",
              slug: "products/ask-ai",
            },
            {
              label: "Skill Matrix",
              slug: "products/skill-matrix",
            },
            {
              label: "Community Monitor",
              slug: "products/community-monitor",
            },
            {
              label: "RTE",
              slug: "products/rte",
            },
            {
              label: "Image gen",
              slug: "products/image-gen",
            },
            {
              label: "Video gen",
              slug: "products/video-gen",
            },
          ],
        },
        {
          label: "Details",
          items: await getSidebarItems(),
        },
      ],
    }),
  ],
});
