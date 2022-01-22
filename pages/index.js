import Head from "next/head"
import Header from "../components/Header"
import Footer from "../components/Footer"
import CreateForm from "../components/CreateForm"
import ReportTable from "../components/ReportTable"


export default function CookieStandAdmin() {

  function handleCreate(location, min, max, avg) {
    alert(location + min + max + avg)
  }

  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>

      <Header />

      <main className="flex-col content-around">

        <CreateForm onCreate={handleCreate}/>

        <ReportTable />

      </main>

      <Footer totalLocations={9}/>
    </>
  )
}
