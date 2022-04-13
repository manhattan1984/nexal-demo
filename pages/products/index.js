import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
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

const ProductList = ({ allProducts }) => {
  return (
    <div>
      <Link href="/">
        <Button>Go Home</Button>
      </Link>
      <Typography variant="h2">List</Typography>
      <List>
        {allProducts.length > 0 &&
          allProducts.map(
            ({ _id, name = "", slug = "", image }) =>
              slug && (
                <>
                  <Link
                    key={_id}
                    href="/products/[slug]"
                    as={`/products/${slug.current}`}
                  >
                    <Card>
                      <CardMedia>
                        <Image
                          height={500}
                          width={500}
                          src={urlFor(image).url()}
                        />
                      </CardMedia>
                      <CardContent>
                        <Typography variant="h6">{name}</Typography>
                      </CardContent>
                      <CardActions>
                        <Button>Add To Cart</Button>
                      </CardActions>
                    </Card>
                  </Link>
                  <Divider component="li" />
                </>
              )
          )}
      </List>
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
