import { ChangeEvent, useEffect } from 'react';
import useStudent from '../app/useStudent';
import { Button, Table } from 'flowbite-react';
import { Modal } from 'flowbite-react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Students = () => {
  const { loading, error, students, getStudents,AddUsers,DaletUser,Getiduser,idUser} = useStudent();
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  let [a,setA]=useState(true)
  let [values,setVal]=useState<{
    name:string,
    email:string,
    group:string,
    username:string
  }>({
    name:'',
    email:'',
    group:'',
    username:''
  })

  let [editsval,setEditval]=useState<{
    id:string,
    name:string,
    email:string,
    group:string,
    username:string
  }>({
    id:'',
    name:'',
    email:'',
    group:'',
    username:''
  })


  let rest:{name:string,email:string,group:string,username:string}={
    name:'',
    email:'',
    group:'',
    username:''
  }

  let EditUser=(id:string):void=>{
    setOpenModal2(true)
    Getiduser(id)
    console.log(id);
    // setEditval(idUser)
    console.log(idUser);
    console.log(editsval);
    
  }

  let AddUser= (val:{}) :void=>{
      AddUsers(val)
      setOpenModal(false)
      setA(!a)
      setVal(rest)
  }
let Dali=(id:string):void=>{
  DaletUser(id)
  setA(!a)
}
let savevales=():void=>{
  setOpenModal2(false)
  // saves(editsval.id,editsval)
  setA(!a)
}

  useEffect(() => {
    getStudents();
    
  }, [a]);
  return (
    <div>
      {loading ? <h2>Loading...</h2> : null}
      {students.length > 0
        ? 
        <Table>
           <Table.Head>
          <Table.HeadCell>Username</Table.HeadCell>
          <Table.HeadCell>User Email</Table.HeadCell>
          <Table.HeadCell>Group</Table.HeadCell>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
        {
          students.map((student,i) =>(
            <Table.Row key={i} className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {`${student.username}`}
            </Table.Cell>
            <Table.Cell>{student.email}</Table.Cell>
            <Table.Cell>{student.group}</Table.Cell>
            <Table.Cell>{student.name}</Table.Cell>
            <Table.Cell className='flex gap-x-3'>
              <Button onClick={():void=>Dali(student.id)} color="failure" className='text-white'>
                Dalet
              </Button>
              <Button onClick={() => EditUser(student.id)} color="success" className='text-white'>
                Edit
              </Button>
            </Table.Cell>
          </Table.Row>
          ))
        }

        </Table.Body>

        </Table>
        : null}
      {error ? <h2>{error.message}</h2> : null}
      <Button className='mt-[50px]' onClick={() => setOpenModal(true)}>Add User</Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Add User</Modal.Header>
        <Modal.Body>
          <div className=" w-full h-full">
            <form className='w-full h-full  flex flex-col items-center gap-y-5'>
              <input value={values.name} onChange={(e:ChangeEvent<HTMLInputElement>):void=>setVal({name:e.target.value,email:values.email,group:values.group,username:values.username})} className='w-full rounded-xl' type="text" placeholder='Name' />
              <input value={values.username} onChange={(e:ChangeEvent<HTMLInputElement>):void=>setVal({name:values.name,email:values.email,group:values.group,username:e.target.value})} className='w-full rounded-xl' type="text" placeholder='Username' />
              <input value={values.email} onChange={(e:ChangeEvent<HTMLInputElement>):void=>setVal({name:values.name,email:e.target.value,group:values.group,username:values.username})} className='w-full rounded-xl' type="email" placeholder='Email' />
              <input value={values.group} onChange={(e:ChangeEvent<HTMLInputElement>):void=>setVal({name:values.name,email:values.email,group:e.target.value,username:values.username})} className='w-full rounded-xl' type="text" placeholder='Group' />
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() =>AddUser(values)}>Add</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal dismissible show={openModal2} onClose={() => setOpenModal2(false)}>
        <Modal.Header>Terms of Service</Modal.Header>
        <Modal.Body>
          <form className='w-full h-full  flex flex-col items-center gap-y-5'>
              <input value={editsval.name} onChange={(e:ChangeEvent<HTMLInputElement>):void=>setEditval({name:e.target.value,email:editsval.email,group:editsval.group,username:editsval.username,id:uuidv4()})} className='w-full rounded-xl' type="text"  />
              <input value={editsval.email} onChange={(e:ChangeEvent<HTMLInputElement>):void=>setEditval({name:editsval.name,email:e.target.value,group:editsval.group,username:editsval.username,id:uuidv4()})} className='w-full rounded-xl' type="text"  />
              <input value={editsval.group} onChange={(e:ChangeEvent<HTMLInputElement>):void=>setEditval({name:editsval.name,email:editsval.email,group:e.target.value,username:editsval.username,id:uuidv4()})} className='w-full rounded-xl' type="text" />
              <input value={editsval.username} onChange={(e:ChangeEvent<HTMLInputElement>):void=>setEditval({name:editsval.name,email:editsval.email,group:editsval.group,username:e.target.value,id:uuidv4()})} className='w-full rounded-xl' type="text"  />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => savevales()}>Save</Button>
          <Button color="gray" onClick={() => setOpenModal2(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Students;
