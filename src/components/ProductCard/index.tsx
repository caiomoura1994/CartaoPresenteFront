import * as React from 'react'
// import Image from 'next/image';
import Link from 'next/link';

import {
  ProductListingItemLink,
  Item,
  Preview,
  Name,
  Description,
} from './styles';

import PriceComponent from '@/components/Ui/Price';
import {
  removeCareInstructions,
  cutDescriptionShort
} from '@/styles/utils';
import { ProductInterface } from '@/interfaces';

const DESCRIPTION_LIMIT = 90;

const ProductCard = ({ product }: { product: ProductInterface }) => {
  return <Link href={`/${product.id}`} aria-label={product.name}>
    <ProductListingItemLink>
      <Item>
        <Preview>
          <img
            src={product.photo.large}
            alt="uber"
            // layout="responsive"
            width={"100%"}
            height={"auto"}
          />
        </Preview>

        <Name>{product.name}</Name>
        <Description>
          {cutDescriptionShort(
            removeCareInstructions(product.description),
            DESCRIPTION_LIMIT
          )}
        </Description>
        <PriceComponent value={100} withCardIcon />
      </Item>
    </ProductListingItemLink>
  </Link>
}

export default ProductCard
