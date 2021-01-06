import Layout from '@/components/Layout'
import ProductCard from '@/components/ProductCard'
import WhatsappIcon from '@/components/Ui/WhatsappIcon';
import { GetServerSideProps } from 'next';
import { PaginatedProductsInterface } from '@/interfaces';
import { useState, useEffect } from 'react';
import { ProductListingContainer, Title } from '@/styles/pages/Home';

const LIMIT = 10;

const IndexPage = (props: PaginatedProductsInterface) => {
  const [paginatedRequest, setPaginatedRequest] = useState(props);
  const [products, setProducts] = useState(props.results);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMore = async () => {
    setIsLoading(true)
    const response = await fetch(`${paginatedRequest.next}&limit=${LIMIT}`)
    const json: PaginatedProductsInterface = await response.json()
    setPaginatedRequest(json)
    setProducts([...products, ...json.results])
    setIsLoading(false)
  };

  const infiniteScroll = () => {
    const screenHeight = window.innerHeight + document.documentElement.scrollTop
    if (screenHeight === document.documentElement.offsetHeight && paginatedRequest.next) {
      fetchMore()
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', infiniteScroll);
  }, [])

  return (
    <Layout title="Home | Presente Cartão">
      <Title>Cartão presente</Title>
      <ProductListingContainer>
        {products.map((product) => <ProductCard key={product.id} product={product} />)}
        {isLoading && "Carregando ..."}

      </ProductListingContainer>
      <WhatsappIcon />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<PaginatedProductsInterface> = async () => {
  const response = await fetch('https://cartao-presente.herokuapp.com/product/');
  const productsPaginated = await response.json() as PaginatedProductsInterface;

  return {
    props: productsPaginated
  }
}
export default IndexPage
