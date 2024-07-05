import { useState } from 'react'
import reactLogo from './assets/react.svg'
import "./globals.css"
import viteLogo from '/vite.svg'
import './App.css'
import { Tabs } from "./components/ui/Tabs";
import { Document } from 'react-pdf'
import PDFViewer from './components/PDFViewer'
import resume from "./Resume.png";

function App() {

  const tabs = [
    {
      title: "intro",
      value: "intro",
      content: (
        <div className=" w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className = "font-bold mb-10">Hi! I'm Henry,</p>
          <p className = "md:text-xl">I'm currently a junior stuyding Computer Science at Northwestern University. </p>
          <p  className = "md:text-xl">Thanks for taking the time to look at my personal website. </p>
          <p className = "md:text-xl" >I hope this can give a little more information about my interests and hobbies!</p>
        </div>
      ),
    },
    {
      title: "Resume",
      value: "resume",
      content: (
        <div className="flex flex-col justify-center items-center overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="pb-8">Resume</p>
          <img src={resume} alt="Resume"  />
        </div>

      ),
    },
    {
      title: "Content",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Content tab</p>
        </div>
      ),
    },
    {
      title: "Random",
      value: "random",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Random tab</p>
        </div>
      ),
    },
  ];
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items- justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
    </> 
  )
}

export default App
