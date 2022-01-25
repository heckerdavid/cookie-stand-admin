export default function LoginForm({ onLogin }) {

    function handleSubmit(event) {
        event.preventDefault();
  
        onLogin(event.target.username.value, event.target.password.value)
      }
  
      return (
        <>
        <form onSubmit={handleSubmit} className="bg-violet-500 flex-col mx-40 rounded-md my-5" autoComplete="off">
          <h1 className="px-80 text-2xl pt-3 pb-2">Login</h1>
          
          <div className="flex px">
            <p className="p-5 my-auto pr-2">USERNAME</p>
            <input type="text" className="my-auto h-1/2 w-full mr-5" name='username'/>
          </div>
    
          <div className="flex py-4">
    
            <div className="p-3">
              <p className="p-5 my-auto">PASSWORD</p>
              <input type="password" className="flex-auto h-1/4 my-auto pl-4 ml-6" name="password"/>
            </div>

            <button className="text-lg py-2 px-16 bg-violet-800 m-2 ml-24 rounded">LOGIN</button>
    
          </div>
    
        </form>
        
        </>
      )
}