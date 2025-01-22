import React, { useState } from 'react'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { inquiry_store } from '@/api/inquiry'
import { toast } from 'react-toastify'
export default function CustomDialog() {
  const [toggle, setToggle] = useState(false)
  const [loading, setLoading] = useState(false)

  const sendMessage = (e) => {
    e.preventDefault()
    if(!loading){
      setLoading(true)
      const email = document.getElementById("inpEmail").value
      const subject = document.getElementById("inpSubject").value
      const message = document.getElementById("inpMessage").value
  
      const toastId = toast.loading("Sending your message!")
  
      inquiry_store({email, subject, message}).then(res => {
        if(res?.ok){
          toast.success(res?.message ?? "Message Sent!")
          toast.done(toastId)
          setToggle(false)
        }
        else{
          toast.error(res?.message ?? "Something went wrong!")
          toast.done(toastId)
        }
      }).finally(() => setLoading(false))
    }
  }

  return (
    <Dialog open={toggle} onOpenChange={setToggle}>
        <DialogTrigger asChild>
          <Button className="hover:text-black hover:border-black hover:bg-slate-300 border border-slate-300 text-slate-300" variant="outlined">Get in Touch</Button>
          </DialogTrigger>
        <DialogContent>
            <DialogHeader>
            <DialogTitle>Contact Me</DialogTitle>
            </DialogHeader>
            <form onSubmit={sendMessage}>
              <Input placeholder="Your Email" type="email" required id="inpEmail" />
              <Input className="mt-1" placeholder="Subject" required id="inpSubject" />
              <Textarea className="mt-1 max-h-[400px]" placeholder="Message" id="inpMessage" required />
              <div className='mt-3 text-right'>
                <Button disabled={loading} type="submit" className="hover:text-black hover:border-black hover:bg-slate-300 border border-slate-300 text-black-300" variant="outlined">Send Message</Button>
              </div>
            </form>
          <DialogFooter>
          </DialogFooter>
        </DialogContent>
    </Dialog>

  )
}
