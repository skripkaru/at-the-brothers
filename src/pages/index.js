import React from "react";
import Head from 'next/head'
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Team from "@/components/Team";
import Services from "@/components/Services";
import Stock from "@/components/Stock";
import Portfolio from "@/components/Portfolio";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";
import Contacts from "@/components/Contacts";

export default function Home() {

  return (
    <>
      <Head>
        <title>У братьев</title>
        <meta name="description" content="Барбершоп в Москве"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <Header/>
      <main>
        <Hero/>
        <About/>
        <Team/>
        <Services/>
        <Stock/>
        <Portfolio/>
        {/*<Reviews/>*/}
        <Contacts/>
      </main>
      <Footer/>
    </>
  )
}
