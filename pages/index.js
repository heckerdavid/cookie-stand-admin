import Head from "next/head"
import Header from "../components/Header"
import Footer from "../components/Footer"
import CreateForm from "../components/CreateForm"
import ReportTable from "../components/ReportTable"
import { hours } from '../data'
import { useState } from 'react'

export default function CookieStandAdmin() {


  const [storeList, setStoreList] = useState([])
  

  function handleCreate(location, min, max, avg) {
    
    const newStore = {
      location,
      min,
      max,
      avg,
      hourly_sales: [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36],
      id: storeList.length
    }

    setStoreList([...storeList, newStore])
  }

  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>

      <Header />

      <main className="flex-col content-around">

        <CreateForm onCreate={handleCreate}/>

        <ReportTable hours={hours} storeList={storeList}/>

      </main>

      <Footer totalLocations={storeList.length}/>
    </>
  )
}
