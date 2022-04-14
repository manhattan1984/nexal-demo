import React from "react";
import imageUrlBuilder from "@sanity/image-url";
import client from "../../lib/client";
import Link from "next/link";
import { urlFor } from "../../lib/sanity";
import Image from "next/image";
import { Box, Button, Container, Typography } from "@mui/material";

const Product = ({ product }) => {
  if (!product) return null;

  const { name = "unknown", image, description = "unknown" } = product;
  return (
    <>
      <Link href="/products">
        <Button>Go Back</Button>
      </Link>
      <h1>{name ? name : ""}</h1>
      <Container align="center">
        {image && (
          <Box>
            <Image height={400} width={400} src={urlFor(image).url()} alt="" />
          </Box>
        )}
      </Container>
      <Typography variant="body1">{description ? description : ""}</Typography>
    </>
  );
};

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "product" && defined(slug.current)][].slug.current`
  );
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { slug = "" } = context.params;
  const product = await client.fetch(
    `
  *[_type == "product" && slug.current == $slug][0]
  `,
    { slug }
  );
  return {
    props: {
      product,
    },
  };
}
export default Product;
