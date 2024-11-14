import fg from "fast-glob";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

async function getSidebarItems() {
    const contentDir = "src/content/docs/products"; // Adjust if needed
    const files = await fg(`${contentDir}/**/*.{md,mdx}`);
  
    const sidebar = await Promise.all(
      files.map(async (filePath) => {
        try {
          const fileContent = fs.readFileSync(filePath, "utf-8");
          const { data } = matter(fileContent);
  
          // Generate slug and label
          const label =
            data.label || path.basename(filePath, path.extname(filePath));
          const slug =
            data.slug ||
            filePath
              .replace(/^src\/content\/docs/, "")
              .replace(/\.(md|mdx)$/, "")
              .replace(/\\/g, "/");
  
          // Extract middle label (e.g., 'arx-cli' from '/products/arx-cli/index')
          const m = slug.split("/")[2];
          const middleLabel = m.charAt(0).toUpperCase() + m.slice(1);
  
          return { label, slug, middleLabel };
        } catch (error) {
          console.error(
            `Error processing file: $apps\web2\astro.config.mjs`,
            error
          );
          return null;
        }
      })
    );
  
    const groupedSidebar = sidebar
      .filter(Boolean)
      .filter((item) => item !== null)
      .reduce((acc, { label, slug, middleLabel }) => {
        if (!acc[middleLabel])
          acc[middleLabel] = { label: middleLabel, items: [] };
        if (slug.endsWith("/index")) {
          slug = slug.replace("/index", "");
          label = "About"; 
        }
        acc[middleLabel].items.push({ label, slug });
        return acc;
      }, {});
  
    return Object.values(groupedSidebar).slice(1).sort((a, b) => a.label.localeCompare(b.label)).map((section) => ({
      ...section,
      items: section.items.sort((a, b) => {
        if (a.label === "About") return -1; // Place "About" at the top
        if (b.label === "About") return 1;
        return a.label.localeCompare(b.label); // Alphabetical for other items
      }).map((item) => ({
        label: item.label.charAt(0).toUpperCase() + item.label.slice(1),
        slug: item.slug.startsWith("/") ? item.slug.slice(1) : item.slug,
      })),
    }));
  }

  export default getSidebarItems;