import React, { useState } from 'react'
import Head from 'next/head'
import Header from './src/components/header'


export default function HomePage() {
  const [data, setData] = useState(0)
  return (
    <React.Fragment>
      <Head>
        <title>Calculadora de IPS</title>
      </Head>
      <div className="grid grid-col-1 text-2xl w-full text-center">
        <Header/>
      </div>
    </React.Fragment>
  )
}
