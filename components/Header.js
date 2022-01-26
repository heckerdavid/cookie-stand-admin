import Link from "next/link";


export default function Header({ user, logout }) {
    return (
        <header className="p-5 bg-violet-500 flex justify-around">
          <h1 className="text-3xl">Cookie Stand Admin</h1>
          <div className="flex p-2">
            <h2 className="bg-gray-400 px-4 py-1 rounded-lg text-violet-900 mx-2 ">{user}</h2>
            <button onClick={logout} className="bg-violet-400 px-4 py-1 rounded-lg mx-2 text-gray-200">Logout</button>
            <Link href='/overview'>
            <a className="bg-gray-400 px-4 py-1 rounded-lg mx-2 ">Overview</a>
            </Link>
          </div>
        </header>
  )
}