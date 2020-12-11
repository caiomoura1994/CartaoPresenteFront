import Link from 'next/link';

import { ProductInterface } from '@/interfaces'
import Layout from '@/components/Layout'
import ButtonComponent, { BackButtonComponent } from '@/components/Ui/Button';

type Props = {
  item?: ProductInterface
}
const SaleFinished = ({ item }: Props) => {

  return (
    <Layout
      title={`${
        item ? item.name : 'ProductInterface Detail'
        } | Next.js + TypeScript Example`}
    >
      <BackButtonComponent />
      <div style={{ textAlign: "center", marginBottom: 24 }}>
        <img src="assets/check-icon.png" alt="" height={150} width={150} />
        <h1>Compra finalizada com sucesso</h1>
        <h2>Código da sua compra <span style={{ color: "#333399", fontSize: 36 }}>#87523</span></h2>
        <Link href={`/`}>
          <ButtonComponent size="lg">Continuar Comprando</ButtonComponent>
        </Link>
      </div>
    </Layout>
  )
}

export default SaleFinished

