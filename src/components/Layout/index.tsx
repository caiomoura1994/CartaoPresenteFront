import React, { ReactNode } from 'react'

import Head from 'next/head'
// import Image from 'next/image'
import Link from 'next/link'

import Footer from '../Footer'
import { NavbarContainer } from './styles'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <>
    <Link href="/">
      <NavbarContainer>
        <img src="/assets/logo.png" alt="logo" width={160} height={60} />
      </NavbarContainer>
    </Link>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <title>Título da minha página</title>
      <meta name="description" content="Descrição da minha página" />
      <meta name="author" content="Autor da minha página" />
      <link rel="base" href="http://meusite.com.br" />
      {/* <link rel="canonical" href="http://meusite.com.br" /> */}
      {/* <meta rel="sitemap" type="application/xml" content="http://meusite.com.br/sitemap.xml" /> */}
      <meta name="robots" content="index/follow" />
      <meta name="googlebot" content="index/follow" />
      <meta name="theme-color" content="#FF4455" />
      <meta name="msapplication-navbutton-color" content="#FF4455" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#FF4455" />
      {/* <!-- Schema.org markup for Google+ --> */}
      <meta itemProp="name" content="Título da minha página" />
      <meta itemProp="description" content="Descrição da minha página" />
      <meta itemProp="image" content="http://meusite.com.br/image.png" />
      {/* <!-- markup for facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Título da minha página" />
      <meta property="og:url" content="http://meusite.com.br" />
      <meta property="og:site_name" content="Exemplo" />
      <meta property="og:image" content="http://meusite.com.br/image.png" />
      <meta property="og:description" content="Descrição da minha página" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="fb:app_id" content="5349" />
      <meta property="fb:admins" content="123456789" />
      {/* <!-- markup for twitter --> */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Título da minha página" />
      <meta name="twitter:description" content="Descrição da minha página" />
      <meta name="twitter:creator" content="Autor da minha página" />
      <meta name="twitter:image" content="http://meusite.com.br/image.png" />
    </Head>
    {/* <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
        |{' '}
        <Link href="/about">
          <a>About</a>
        </Link>{' '}
        |{' '}
        <Link href="/users">
          <a>Users List</a>
        </Link>{' '}
        | <a href="/api/users">Users API</a>
      </nav>
    </header> */}
    {children}
    <Footer />
  </>
)

export default Layout
