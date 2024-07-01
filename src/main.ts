import { getPage } from "./api.ts";
import { sleep } from "./utils.ts";

const DELAY_MS = 1000;
const OUTPUT_FILE = "out/posts.json";

/**
 * Fetch all blog posts and write to JSON file
 */
if (import.meta.main) {
  let posts = [];

  for (let page = 1;; page += 1) {
    console.debug(`Fetching page ${page}...`);
    const postsPerPage = await getPage(page);

    if (!postsPerPage.length) {
      break;
    }

    posts.push(...postsPerPage);

    await sleep(DELAY_MS);
  }

  await Deno.mkdir("out", { recursive: true });
  await Deno.writeTextFile(OUTPUT_FILE, JSON.stringify(posts));
}
