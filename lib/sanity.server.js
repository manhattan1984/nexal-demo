import { createClient } from "next-sanity";
import { config } from "./config";

export const sanityClient = createClient(config);

export const previewClient = createClient({
  ...config,
  useCdn: false,
  token:
    "skdl6XwWxJYyR7dEsMdw9wAdizGY0u3ytnGbQ8HagXV3APLntsAQbHbzdZeeUbJzAMG88hvmyuc17ooiWRQp2psqGphxaVjwYZWvSYm7c3TFGWWdPHnhpnzzCDuW3mrzA4UMh0DYP1bZoIWlEydUqWAoJkkLyg2kuIXJdHJgSwusFIggcONr",
});

export const getClient = (usePreview) =>
  usePreview ? previewClient : sanityClient;
