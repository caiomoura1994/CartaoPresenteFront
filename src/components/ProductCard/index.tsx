import * as React from 'react'
import Image from 'next/image';
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

const DESCRIPTION_LIMIT = 90;

const ProductCard = () => {
  const title = "titulo"
  const id = 1
  const description = "asdfasdf adf asdf asd f asdf asd f asdf asd fas dfasdf asd fasd fa sdf asdasdfasdf adf asdf asd f asdf asd f asdf asd fas dfasdf asd fasd fa sdf asd"

  return <Link href={`/${id}`} aria-label={title}>
    <ProductListingItemLink>
      <Item>
        <Preview>
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHk9uYqH7LCLq-zmw6F9gdoX-MDCyaXSbIhQ&usqp=CAU"
            alt="logo"
            layout="responsive"
            width={"100%"}
            height={"auto"}
          />
        </Preview>

        <Name>{title}</Name>
        <Description>
          {cutDescriptionShort(
            removeCareInstructions(description),
            DESCRIPTION_LIMIT
          )}
        </Description>
        <PriceComponent value={100} withCardIcon />
      </Item>
    </ProductListingItemLink>
  </Link>
}

export default ProductCard
