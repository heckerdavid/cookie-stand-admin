import Head from "next/head"
import Header from "../components/Header"
import Footer from "../components/Footer"
import CreateForm from "../components/CreateForm"
import ReportTable from "../components/ReportTable"


export default function CookieStandAdmin() {
  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>

      <Header />

      <main className="flex-col content-around">

        <CreateForm />

        <ReportTable />

      </main>

      <Footer />
    </>
  )
}
