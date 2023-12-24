/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/next-script-for-ga */
import Head from 'next/head'
import { AppProps } from 'next/app'
import '../globals.css'
import { Toaster } from 'react-hot-toast'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const queryClient = new QueryClient()

export default function MyApp({ Component, pageProps }: AppProps) {
  // useEffect(() => {
  //   ;(function (h, o, t, j, a, r) {
  //     //@ts-ignore
  //     h.hj =
  //       //@ts-ignore
  //       h.hj ||
  //       function () {
  //         //@ts-ignore
  //         ;(h.hj.q = h.hj.q || []).push(arguments)
  //       }
  //     //@ts-ignore
  //     h._hjSettings = { hjid: 3577128, hjsv: 6 }
  //     //@ts-ignore
  //     a = o.getElementsByTagName('head')[0]
  //     //@ts-ignore
  //     r = o.createElement('script')
  //     //@ts-ignore
  //     r.async = 1
  //     //@ts-ignore
  //     r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv
  //     //@ts-ignore
  //     a.appendChild(r)
  //   })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=')

  //   //@ts-ignore
  //   window.dataLayer = window.dataLayer || []

  //   function gtag() {
  //     //@ts-ignore
  //     dataLayer.push(arguments)
  //   }
  //   //@ts-ignore
  //   gtag('js', new Date())

  //   //@ts-ignore
  //   gtag('config', 'G-XR54FJ14GJ')
  // }, [])
  return (
    <>
      <Head>
        <title>Sofhiguel: Conectando destinos, entregando confiança</title>
        <meta
          name="title"
          content="Budget Saas: Sistema de gestão financeira, O ERP para Saúde Financeira, rápido, fácil e eficiente"
        />
        <meta
          name="description"
          content="Sistema de gestão financeira, O ERP para Saúde Financeira, rápido, fácil e eficiente"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://budgetsaas.com.br" />
        <meta
          property="og:title"
          content="Budget Saas - Sistema de gestão financeira"
        />
        <meta
          property="og:description"
          content="Sistema de gestão financeira, O ERP para Saúde Financeira, rápido, fácil e eficiente"
        />
        <meta
          property="og:image"
          content="https://budgetsaas.com.br/logo.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://budgetsaas.com.br" />
        <meta
          property="twitter:title"
          content="Budget Saas - Sistema de gestão financeira"
        />
        <meta
          property="twitter:description"
          content="Sistema de gestão financeira, O ERP para Saúde Financeira, rápido, fácil e eficiente"
        />
        <meta
          property="twitter:image"
          content="https://budgetsaas.com.br/logo.png"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XR54FJ14GJ"
        ></script>
      </Head>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
      <Toaster />
    </>
  )
}
