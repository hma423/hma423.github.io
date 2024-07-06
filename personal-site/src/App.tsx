import { useState } from 'react'
import reactLogo from './assets/react.svg'
import "./globals.css"
import viteLogo from '/vite.svg'
import './App.css'
import { Tabs } from "./components/ui/Tabs";
import { Document } from 'react-pdf'
import PDFViewer from './components/PDFViewer'
import resume from "./Resume.png";
import Projectprops from "./components/Projectprops";
import Carousel from "./components/Carosuel";
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
      title: "projects",
      value: "projects",
      content: (
        <div className=" justify-center items-center overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold bg-gradient-to-br from-neutral-300 to-neutral-300">
          <p className = "mb-14 text-slate-600">projects</p>
          <Projectprops />

        </div>

      ),
    },
    {
      title: "hobbies",
      value: "Hobbies",
      content: (
        <div className="overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-300 to-sky-300">
          <p className="text-center">hobbies</p>
          <p className="mt-4 text-sm text-center">here are some of my hobbies!</p>
          <div className=" max-w-4xl mt-2">
            <Carousel />
          </div>
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
