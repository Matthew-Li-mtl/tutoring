
import { Link } from "react-router"
import "./Page.css"


export default function TeachingExamples() {
    return (
        <>
    <div className = "sitewide min-h-screen flex justify-center items-center">
      
      <div className="body">
        <div className="grid grid-flow-row grid-rows-[700px_700px_700px] grid-cols-6 w-[1080px] gap-y-4 gap-x-4 p-4">

            <div className="container col-span-6 rounded-4xl">

            </div>

            <div className="container col-span-6 rounded-4xl">
                
            </div>

            <div className="container col-span-6 rounded-4xl">
                <h1>
                    <Link to="/calendar">Calendar</Link>
                </h1>
            </div>

        </div>
      </div>
    </div>
        </>
    )
}