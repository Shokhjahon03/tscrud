type bb={
  setuser:(a:boolean)=>void
}
const Profile = ({setuser}:bb) => {

  let userval:any=localStorage.getItem('val')
  console.log(userval);
  
  
  return (
  
  <div>

    <div className="w-[400px] h-[400px] flex flex-col p-5 justify-around items-start">
        <p>Username : {JSON.parse(userval).name}</p>
        <p>User email : {JSON.parse(userval).email}</p>
        <button onClick={()=>setuser(false)} className="ii">
    <span>Log Out</span>
</button>
    </div>

  </div>
  
  
  
  )
};

export default Profile;
