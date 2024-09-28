import React, { useEffect, useState } from 'react'
import { Button } from '../button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import { useNavigate, useNavigation } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { FcGoogle } from "react-icons/fc";
import axios from 'axios';


function Header() {

  const user=JSON.parse(localStorage.getItem('user'));
  const [openDialog,setOpenDialog] = useState(false);
  

  useEffect(()=>{
      console.log(user)
  },[])
  const login = useGoogleLogin({
    onSuccess:(codeResp)=>GetUserProfile(codeResp),
    onError:(error)=>console.log(error)
  })

  const GetUserProfile=(tokenInfo)=>{
    axios.get(`https://www.googleapis.com/oauth2/v2/userinfo?access_token=${tokenInfo?.access_token}`,{
      headers:{
        Authorization:`Bearer ${tokenInfo?.access_token}`,
        Accept:'Application/json'

      }
    }).then((resp)=>{
      console.log(resp);
      localStorage.setItem('user',JSON.stringify(resp.data));
      setOpenDialog(false); 
      window.location.reload()
    })
  }
  return (
    <div className='p-2 shadow-sm flex justify-between items-center px-2 '>
      
      
      <img src='/logo.svg'></img>
      
      <div>
        <div>
          {user?
            <div className='flex items-center gap-3'>
              <a href='/create-trip'>
                <Button  className="rounded-full text-white">+ Create Trip</Button>
              </a>
              <a href='/my-trips'>
                <Button  className="rounded-full text-white">My Trips</Button>
              </a>
              <Popover>
                <PopoverTrigger>
                <img src={user?.picture} className='h-[20px] w-[20px] rounded-full'/>
                </PopoverTrigger>
                <PopoverContent>
                  <h2 className='cursor-pointer' onClick={()=>{
                    googleLogout();
                    localStorage.clear();
                    window.location.reload();
                  }}>Logout</h2>
                </PopoverContent>
              </Popover>

            </div>:
            <Button className='bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-full'onClick={()=>setOpenDialog(true)} >Sign In</Button>
          }
        </div>
        <Dialog open={openDialog}>
      
        <DialogContent className='bg-slate-50'>
            <DialogHeader>
              <DialogTitle></DialogTitle>
              <DialogDescription>
                <img src='/logo.svg'/>
                <h2 className='font-bold text-lg mt-7'>Sign In With Google</h2>
                <p>Sign to the App with Google Authentication securely </p>

                <Button onClick={login}  className=' text-white rounded-sm w-full mt-5 flex gap-4 items-center'>
                <FcGoogle className='h-7 w-7' />
                Sign In with Google</Button>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>

        
      


      </div>
    </div>

    
  )
}

export default Header
