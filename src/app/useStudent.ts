import { create } from 'zustand';
import { StudentStoreType } from '../types/Student.type';
import axios from 'axios';

const useStudent = create<StudentStoreType>((set) => ({
  loading: false,
  students: [],
  error: null,
  idUser:[],
  getStudents: async () => {
    try {
      set(() => ({
        loading: true,
      }));
      const res = await fetch('http://localhost:3000/students');
      const data = await res.json();
      set(() => ({
        loading: false,
        students: data,
        error: null,
      }));
    } catch (err: any) {
      set(() => ({
        loading: false,
        error: err.message,
      }));
    }
  },
  AddUsers: async(user:{})=>{
    axios.post('http://localhost:3000/students',user)
  },
  DaletUser:async(id:string)=>{
    axios.delete(`http://localhost:3000/students/${id}`)
  },
  Getiduser:async(id:string)=>{
   let res =await axios.get(`http://localhost:3000/students/${id}`)
   let data=await res.data
   set(() => ({
    loading: false,
    idUser: data,
    error: null,
  }))
  },
  saves:async(val)=>{
    axios.put(`http://localhost:3000/students/${val.id}`,val)
  }

}));

export default useStudent;
