import { Button } from '@/Components/ui/button'
import { Head } from '@inertiajs/react'
import { Box, Divider } from '@mui/material'
import React, { useEffect, useState } from 'react'
import react_icon from '@/assets/react.svg'
import laravel_icon from '@/assets/laravel.svg'
import js_icon from '@/assets/js.svg'
import php_icon from '@/assets/php.svg'
import linux_icon from '@/assets/linux.svg'
import windows_icon from '@/assets/windows.svg'
import dotnet_icon from '@/assets/dotnet.svg'
import java_icon from '@/assets/java.svg'
import csharp_icon from '@/assets/csharp.svg'
import cplusplus_icon from '@/assets/cplusplus.svg'
import vite_icon from '@/assets/vite.svg'

export default function Welcome({users}) {
    const [commands, setCommands] = useState([])
    const validCommands = {
        sudo: "You have no permission to use <span class='text-red-500'>sudo</span> commands.",
        whoami: "Jeco Renz Concepcion a full-stack developer for more than 4 years.",
        ls: "<pre>About         Contacts        Porfolio</pre>",
        man: `
<pre>
    <span class="text-yellow-400">whoami</span>  -   show information about the owner of this site.
    <span class="text-yellow-400">ls</span>      -   list all available directory.
    <span class="text-yellow-400">man</span>     -   view all available commands.
    <span class="text-yellow-400">clear</span>   -   clear console.
</pre>
        `
    }

    useEffect(() => {
        document.getElementById("typable").focus()
    }, [])
    const onType = (e) => {
        if(e.key === 'Enter' && e.target.innerText.trim().length > 0){
            e.preventDefault()
            if(e.target.innerText.trim().split(" ")[0].toLowerCase() != 'clear'){
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
                <div className="m-0 text-zinc-400">
                    Full-stack Developer
                </div>
            </div>
            <div className="md:flex gap-5 sm:hidden">

            </div>
        </nav>
        <main className='my-3 max-w-[1920px] mx-auto'>
            <div className="flex gap-20 flex-wrap p-2 sm:p-5 justify-center flex-col lg:flex-row" id="about">
                <div className="m-0 md:m-2 flex-1">
                    <div onClick={() => {document.getElementById("typable").focus()}} className="shadow-2xl">
                        <div className="bg-stone-800 p-2 flex gap-2 rounded-t-md">
                            <div className='p-2 bg-red-500 rounded-full'></div>
                            <div className='p-2 bg-orange-400 rounded-full'></div>
                            <div className='p-2 bg-green-500 rounded-full'></div>
                        </div>
                        <div className="h-[400px] bg-stone-950 rounded-b-md text-green-500 p-2 text-xs xl:text-lg" style={{fontFamily: "Courier New", overflow: 'auto'}}>
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
                                root@fedora:~$ <span onKeyDown={onType} id="typable" className="text-yellow-400 outline-none" style={{cursor: 'none'}} contentEditable={true}></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 text-white m-2 flex justify-center flex-col gap-5 text-left items-start md:p-5 sm:p-2">
                    <div>
                        Hi, my name is
                    </div>
                    <h2 className="text-2xl md:text-5xl text-slate-300 font-bold">
                        Jeco Renz Concepcion.
                    </h2>
                    <h2 className="text-2xl md:text-5xl text-slate-400 font-bold">
                        I build things for your devices.
                    </h2>
                    <p className='max-w-[400px] mt-5 text-stone-400'>
                        I'm a software engineer, specializing in building and designing websites, applications and everything in between.
                    </p>
                    <div>
                        <Button className="hover:text-black hover:border-black hover:bg-slate-300 border border-slate-300 text-slate-300" variant="outlined">Get in Touch</Button>
                    </div>
                </div>
            </div>
            <div className="flex gap-5 mt-10 text-center lg:text-left p-2 lg:p-10 flex-wrap" id="skills">
                <div className="flex-1 text-white m-2 flex justify-center flex-col gap-5">
                    <h2 className="text-2xl md:text-5xl text-slate-300 font-bold">
                        Proficient in multiple frameworks and programming languages.
                    </h2>
                    <h2 className="text-2xl md:text-5xl text-slate-400 font-bold">
                        Adept in Linux & Windows Server.
                    </h2>
                    <p className='mt-2 md:mt-5 text-stone-400'>
                        Through the years, I've experienced deploying my Website and APIs in both Linux and Windows server. Mastered the art of single page application, server-side rendering, unit testing and database design.
                    </p>
                    <div className="flex gap-5 flex-wrap justify-around">
                        <Box width={100} component="img" src={php_icon} alt="PHP Icon" title="PHP Icon" />
                        <Box width={100} component="img" src={js_icon} alt="JS Icon" title="JS Icon" />
                        <Box width={100} component="img" src={react_icon} alt="React Icon" title="React Icon" />
                        <Box width={100} component="img" src={laravel_icon} alt="Laravel Icon" title="Laravel Icon" />
                        <Box width={100} component="img" src={linux_icon} alt="Linux Icon" title="Linux Icon" />
                        <Box width={100} component="img" src={windows_icon} alt="Windows Icon" title="Windows Icon" />
                        <Box width={100} component="img" src={dotnet_icon} alt=".NET Icon" title=".NET Icon" />
                        <Box width={100} component="img" src={java_icon} alt="Java Icon" title="Java Icon" />
                        <Box width={100} component="img" src={csharp_icon} alt="C# Icon" title="C# Icon" />
                        <Box width={100} component="img" src={cplusplus_icon} alt="C++ Icon" title="C++ Icon" />
                        <Box width={100} component="img" src={vite_icon} alt="Vite Icon" title="Vite Icon" />

                    </div>
                </div>
            </div>
        </main>
    </>
  )
}
