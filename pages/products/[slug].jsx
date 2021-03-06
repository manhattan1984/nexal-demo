import React from "react";
import imageUrlBuilder from "@sanity/image-url";
import client from "../../lib/client";
import Link from "next/link";
import { urlFor } from "../../lib/sanity";
import Image from "next/image";
import { Button, Container } from "@mui/material";

const Product = ({ product }) => {
  const { name = "unknown", image, description = "unknown" } = product;
  return (
    <>
      <Link href="/products">
        <Button>Go Back</Button>
      </Link>
      <h1>{name}</h1>
      <Container align="center">
        {image && <Image width={100} height={100} src={urlFor(image).url()} alt="" />}
      </Container>
      <p>{description}</p>
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
