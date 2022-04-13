import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "iohf2uz8",
  dataset: "production",
  useCdn: "true",
  apiVersion: "v1",
});


