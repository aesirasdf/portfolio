import { Head } from '@inertiajs/react'
import { Button } from '@mui/material'
import React, { useState } from 'react'

export default function Welcome({users}) {
    const [commands, setCommands] = useState([])
    const validCommands = {
        sudo: "You have no permission to use <span class='text-red-500'>sudo</span> commands.",
        whoami: "Jeco Renz Concepcion a full-stack developer for more than 4 years.",
        ls: "About&emsp;Contacts&emsp;Porfolio"
    }
    const onType = (e) => {
        if(e.key === 'Enter' && e.target.innerText.trim().length > 0){
            e.preventDefault()
            if(e.target.innerText.toLowerCase() != 'clear'){
                setCommands([...commands, e.target.innerText.trim().split(" ")[0]])
            }
            else{
                setCommands([])
            }
            
            e.target.innerText = ""
        }
    }
  return (
    <>
        <Head title="Welcome" />
        <nav className="p-3 flex gap-5 bg-neutral-800 text-slate-100 items-center">
            <div className='flex-1 sm:text-center md:text-left'>
                <h1 className="m-0 animate-ease-in logo flex-1">
                    Jeco Renz Concepcion
                </h1>
                <div className="m-0">
                    Full-stack Developer
                </div>
            </div>
            <div className="md:flex gap-5 sm:hidden">
                <div className="text-xl">
                    About
                </div>
                <div className="text-xl">
                    Portfolio
                </div>
                <div className="text-xl">
                    Contact Me
                </div>
            </div>
        </nav>
        <main className='my-3'>
            <div className="flex gap-2">
                <div className="m-2 flex-1">
                    <div onClick={() => {document.getElementById("typable").focus()}}>
                        <div className="bg-stone-800 p-2 flex gap-2 rounded-t-md">
                            <div className='p-2 bg-red-500 rounded-full'></div>
                            <div className='p-2 bg-orange-400 rounded-full'></div>
                            <div className='p-2 bg-green-500 rounded-full'></div>
                        </div>
                        <div className="h-[400px] bg-stone-950 rounded-b-md text-green-500 p-2" style={{fontFamily: "Courier New", overflow: 'auto'}}>
                            {
                                commands.map((command, i) => (
                                    <React.Fragment key={i}>
                                        <div>
                                            root@fedora:~$ <span className="text-yellow-400">{command}</span>
                                        </div>
                                        {
                                            validCommands[command] ? (
                                                <div dangerouslySetInnerHTML={{__html: validCommands[command]}}></div>
                                            ) :
                                            <div>
                                                Command '{command}' not recognized.
                                            </div>
                                        }
                                    </React.Fragment>

                                ))
                            }
                            
                            <div className="p-0">
                                root@fedora:~$ <span onKeyDown={onType} id="typable" className="text-yellow-400 outline-none" style={{cursor: 'none'}} contentEditable={true}></span><span className="cursor">█</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </main>
    </>
  )
}
