import { API_URL, WORDPRESS_AUTH_REFRESH_TOKEN } from "./client";
import { aboutUsQuery, homeQuery } from "./queries";

async function fecthAPi(query = "") {
  const headers = { "Content-Type": "application/json" };
  if (WORDPRESS_AUTH_REFRESH_TOKEN) {
    // @ts-ignore
    Headers["Authorization"] = `Bearer ${WORDPRESS_AUTH_REFRESH_TOKEN}`;
  }

  // WPGraphQL Plugin must be enabled
  const res = await fetch(API_URL, {
    headers,
    method: "POST",
    body: JSON.stringify({
      query,
    }),
    cache: "no-store",
  });
  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

type Ids = "home" | "about";
export async function getContentFromWordPress(id: Ids, slug?: string) {
  const query: Record<Ids, any> = {
    home: homeQuery,
    about: aboutUsQuery,
  };
  const data = await fecthAPi(query[id]);
  return data;
}
