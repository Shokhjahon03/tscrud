import { ChangeEvent, useState } from "react"
type bb={
  setuser:(a:boolean)=>void
}
const Regester = ({setuser}:bb) => {

  let [valusUser,setValuesUser]=useState<{name:string,email:string}>({
    name:'',
    email:''
  })

  let func=(e:React.SyntheticEvent<EventTarget>):void=>{
      e.preventDefault()
      if (valusUser.name!=='',valusUser.email!=='') {
        localStorage.setItem('val',JSON.stringify(valusUser))
      setuser(true)
      }
  }

  return (
    <div className="w-full h-dvh fixed top-0 left-0 bg-slate-200 flex justify-center items-center">
      <form className="w-[600px] h-[300px] rounded-2xl bg-white flex flex-col p-4 gap-y-2 ">
            <p className="w-full border-b pb-[10px]">Log In</p>
            <input value={valusUser.name} onChange={(e:ChangeEvent<HTMLInputElement>)=>setValuesUser({name:e.target.value,email:valusUser.email})} type="text" className="w-full rounded-lg outline-none" placeholder="Your Name" />
            <input value={valusUser.email} onChange={(e:ChangeEvent<HTMLInputElement>)=>setValuesUser({name:valusUser.name,email:e.target.value})} type="email" className="w-full rounded-lg outline-none" placeholder="Your Email" />
            <button onClick={(e)=>func(e)} className="cta">
              <span>Log In</span>
            </button>
      </form>
    </div>
  )
}

export default Regester
