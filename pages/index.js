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

      <main>

        <CookieStandInput />
        <p className="pl-1">Report Table Coming Soon...</p>
        <p> JSON maybe one day</p>

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
    <form className="bg-violet-500 flex-col m-4 ">
      <h1 className="px-80">Create Cookie Stand</h1>
      
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
        <button className="text-lg py-5 px-40 bg-violet-800">Create</button>
      </div>

    </form>
    
    </>
  )
}