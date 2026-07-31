
import "./Page.css"
import "./Calendar.css"
import { Link } from "react-router"

export default function Calendar() {
    return (
        <>
    <div className = "sitewide min-h-screen flex justify-center items-center">
      
      <div className="body">
        <div className="grid grid-flow-row grid-cols-6 w-[1080px] gap-y-4 gap-x-4 p-4">

            <div className="container col-span-6 grid grid-flow-row grid-cols-7 gap-x-2 p-2 h-200">
                <div className="container grid grid-flow-col grid-rows-48">
                    <div className="available row-span-10"></div>
                    <div className="full row-span-6"></div>
                </div>
                <div className="container grid grid-flow-col grid-rows-48">
                    
                </div>
                <div className="container grid grid-flow-col grid-rows-48">
                    
                </div>
                <div className="container grid grid-flow-col grid-rows-48">
                    
                </div>
                <div className="container grid grid-flow-col grid-rows-48">
                    
                </div>
                <div className="container grid grid-flow-col grid-rows-48">
                    
                </div>
                <div className="container grid grid-flow-col grid-rows-48">
                    
                </div>
            </div>

            <div className="container col-span-6">
                <h1>
                    <Link to="/">Home</Link>
                </h1>
                <h1>
                    <Link to="/teachingexamples">Teaching Examples</Link>
                </h1>

            </div>
        



        </div>
      </div>
    </div>
        </>
    )
}