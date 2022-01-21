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

      <footer className=" bg-violet-500 mt-1 p-4">
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

      <div className="flex py-4">

        <div className="p-3">
          <p className="p-5 my-auto">Minimum Customers Per Hour</p>
          <input type="text" className="flex-auto h-1/4 my-auto pl-4 ml-6"/>
        </div>

        <div className="p-3">
          <p className="p-5 my-auto">Maximum Customers Per Hour</p>
          <input type="text" className="flex-auto h-1/4 my-auto pl-4 ml-6" />
        </div>

        <div className="p-3">
          <p className="p-5 my-auto">Average Cookies Per Sale</p>
          <input type="text" className="flex-auto h-1/4 my-auto pl-4 ml-4" />
        </div>

        <button className="text-lg py-2 px-16 bg-violet-800 m-2 ml-24 rounded">Create</button>

      </div>

    </form>
    
    </>
  )
}