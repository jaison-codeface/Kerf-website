import { API_URL, WORDPRESS_AUTH_REFRESH_TOKEN } from "./client";

async function fecthAPi(query = "") {
  const headers = { "Content-Type": "application/json" };
  if (WORDPRESS_AUTH_REFRESH_TOKEN) {
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

type Ids = { "": string };

export async function getContentFromWordPress(id: Ids, slug?: string) {
  const query: Ids = {
    "": "",
  };
  const data = await fecthAPi(query[id]);
  return data;
  
}
