import {
  createPreviewSubscriptionHook,
  createCurrentUserHook,
} from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";
import imageUrlBuilder from "@sanity/image-url";

import { config } from "./config";
import client from "./client";

// export const urlFor = (source) => createImageUrlBuilder(config);
export function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}


export const usePreviewSubscription = createPreviewSubscriptionHook(config);

export const useCurrentUser = createCurrentUserHook(config);
