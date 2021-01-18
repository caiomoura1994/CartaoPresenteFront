import Link from 'next/link';

import { ProductInterface } from '@/interfaces'
import Layout from '@/components/Layout'
import ButtonComponent from '@/components/Ui/Button';
import { useState } from 'react';

type Props = {
  item?: ProductInterface
}
const SaleFinished = ({ item }: Props) => {
  const [openGiftCard, setShowGiftCard] = useState(false)
  const [order, setOrder] = useState({ gift_code: "" })
  let saleCode = "";
  if (process.browser) {
    const urlParams = new URLSearchParams(window.location.search);
    saleCode = urlParams.get('saleCode') || "0";
  }


  const openGiftCode = async () => {
    const sessionId = location.search.replace('?session_id=', '');
    const response = await fetch(`https://cartao-presente.herokuapp.com/check-order-by-session/?sessionCheckoutId=${sessionId}`);
    const orderResponse = await response.json()
    setOrder(orderResponse)
    setShowGiftCard(true);
  }

  return (
    <Layout
      title={`${
        item ? item.name : 'ProductInterface Detail'
        } | Presente Cartão`}
    >
      <div style={{ textAlign: "center", marginBottom: 24 }}>
        <img src="assets/check-icon.png" alt="" height={150} width={150} />
        <h1>Compra finalizada com sucesso</h1>
        {openGiftCard && <>
          <h2>Código da sua compra <span style={{ color: "#333399", fontSize: 36 }}>#{order?.gift_code}</span></h2>
          <h4>Esse código foi enviado para seu email também!</h4>
        </>}
        {openGiftCard ? <Link href={`/`}>
          <ButtonComponent size="lg">Continuar Comprando</ButtonComponent>
        </Link> :
          <ButtonComponent onClick={openGiftCode} size="lg">Ver Código</ButtonComponent>}
      </div>
    </Layout>
  )
}

export default SaleFinished

