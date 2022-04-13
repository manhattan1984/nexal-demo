import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import client from "../../lib/client";
import { urlFor } from "../../lib/sanity";

const ProductItem = ({ name, image, slug }) => {
  return (
    <Grid item xs={6}>
      <Link href={`/products/${slug.current}`}>
        <Card>
          <CardMedia>
            <Image height={500} width={500} src={urlFor(image).url()} />
          </CardMedia>
          <CardContent>
            <Typography variant="h6">{name}</Typography>
          </CardContent>
          <CardActions>
            <Button>Add To Cart</Button>
          </CardActions>
          <Divider component="li" />
        </Card>
      </Link>
    </Grid>
  );
};

const ProductList = ({ allProducts }) => {
  return (
    <div>
      <Link href="/">
        <Button>Go Home</Button>
      </Link>
      <Typography variant="h2">List</Typography>
      <Grid container spacing={1}>
        {allProducts.length > 0 &&
          allProducts.map(
            ({ _id, name = "", slug = "", image }) =>
              slug && (
                <ProductItem key={_id} name={name} slug={slug} image={image} />
              )
          )}
      </Grid>
    </div>
  );
};

export async function getStaticProps() {
  const allProducts = await client.fetch(
    `*[_type=="product"]{name,_id, slug, image}`
  );
  return {
    props: { allProducts },
  };
}

export default ProductList;
