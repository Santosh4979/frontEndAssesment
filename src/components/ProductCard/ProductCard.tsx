import { Card, Text, Image, Button } from 'theme-ui';


export interface ProductCardInt {
    id: string;
    name: string;
    description: string;
    image: string;
    price: {
        amount: string;
        currency: string;
      }
}

const ProductCard: React.FC<ProductCardInt> = ({ name, description, image, price }) => (
<Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 , mb: 3, width: 320, height: 400, boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}> 
  <Image alt='product' sx={{ p:4, width: '100%', height: 150 }} src={image} />
   <Text sx={{ fontSize: 4, wordWrap: 'break-word', width: '85%', textAlign: 'center' }}>{name}</Text>
  <Text>{price.currency ? '$' : ''}{price.amount}</Text>
  <Text sx={{ wordWrap: 'break-word', width: '65%', textAlign: 'center'}}>{description}</Text>
  <Button  sx= {{ p: 3, bg: 'lightblue', color: 'white'}}>Buy Now</Button>

  </Card>
);

export default ProductCard;


