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
    const [storeList, setStoreList] = useState([]);
    
  
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

        <Header user={user} logout={logout}/>
  
        <main className="flex-col content-around">
  
          <CreateForm user={user} onCreate={handleCreate}/>

          <CookieStandTable stands={resources || []} deleteStand={deleteResource} />
          {/* <ReportTable stands = { resources || [] } deleteStand={deleteResource} hours={hours} storeList={storeList}/> */}
  
        </main>
  
        <Footer totalLocations={storeList.length}/>
      </>
    )
  }
  