import Header from "../components/Header"
import Footer from "../components/Footer"
import CreateForm from "../components/CreateForm"
import ReportTable from "../components/ReportTable"
import { hours } from '../data'
import { useState } from 'react'
import useResource from '../hooks/useResource'
import CookieStandTable from '../components/CookieStandTable'

export default function CookieStandAdmin({ user, logout }) {

    const { resources, deleteResource } = useResource();


    const standsCount = resources ? resources.length : 0;
  
    return (
      <>

        <Header user={user} logout={logout}/>
  
        <main className="flex-col content-around">
  
          <CreateForm user={user} />
          <div className="my-8 border-violet-900 border-2 p-2 m-4 ml-24">

          <CookieStandTable className="border-violet-900 border-2 p-20" stands={resources || []} deleteStand={deleteResource} />
          </div>

  
        </main>
  
        <Footer totalLocations={standsCount}/>
      </>
    )
  }
  