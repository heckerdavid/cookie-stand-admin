
export default function CreateForm() {
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