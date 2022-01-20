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
        <p className="mx-20 pl-96"> &#123;"location": "Barcelona", "minCustomers":2, "maxCustomers":4, "avgCookies": 2.5&#x7D;  </p>

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
      
      <div className="flex px">
        <p className="p-5 my-auto pr-2">Location</p>
        <input type="text" className="my-auto h-1/2 w-full mr-5" />
      </div>

      <div className="flex py-2">
        <p className="p-5 my-auto">Min</p>
        <input type="text" className="flex-auto h-1/2 my-auto"/>
        <p className="p-5 my-auto">Max</p>
        <input type="text" className="flex-auto h-1/2 my-auto" />
        <p className="p-5 my-auto">Avg</p>
        <input type="text" className="flex-auto h-1/2 my-auto" />
        <button className="text-lg py-4 px-16 bg-violet-800 m-2 mr-7 rounded">Create</button>
      </div>

    </form>
    
    </>
  )
}