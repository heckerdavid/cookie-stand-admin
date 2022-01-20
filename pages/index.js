// stupid = {"location": "Barcelona", "minCustomers":2, "maxCustomers":4, "avgCookies": 2.5}
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>

      <header className="text-3xl p-5 bg-violet-500">
        <h1>Cookie Stand Admin</h1>
      </header>

      <main className="flex-col content-around">

        <CookieStandInput />
        <p className="mx-20 pl-96 pb-2.5">Report Table Coming Soon...</p>
        <p className="mx-20 pl-96"> JSON maybe one day</p>

      </main>

      <footer className=" bg-violet-500 mt-1 p-2">
        <p>&copy; 2022</p>
      </footer>
    </>
  )
}

function CookieStandInput() {
  return (
    <>
    <form className="bg-violet-500 flex-col mx-40 rounded-md my-5">
      <h1 className="px-80 text-2xl pt-3 pb-2">Create Cookie Stand</h1>
      
      <div className="flex">
        <p className="p-5">Location</p>
        <input type="text" className="h-1/2" />
      </div>

      <div className="flex py-2">
        <p className="p-5">Min</p>
        <input type="text" className="flex-auto h-1/2"/>
        <p className="p-5">Max</p>
        <input type="text" className="flex-auto h-1/2" />
        <p className="p-5">Avg</p>
        <input type="text" className="flex-auto h-1/2" />
        <button className="text-lg py-4 px-12 bg-violet-800 m-3 rounded">Create</button>
      </div>

    </form>
    
    </>
  )
}