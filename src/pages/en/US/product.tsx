import React from "react";
import { Container } from "theme-ui";
import { products  } from "../../../mockData/products";
import { Layout } from "../../../components/Layout";
import ProductCard, { ProductCardInt } from "../../../components/ProductCard/ProductCard";

const pods: ProductCardInt[] = products;

const Product: React.FC = () => (
    <Layout>
      <Container sx={{display: 'flex', flexWrap: 'wrap', gap: 5, alignItems: 'center'}}>  
      {pods.map((product) => (
    <ProductCard key={product.id} {...product}/> 
      ))}   
     </Container>
    </Layout> 
 );
   
export default Product;