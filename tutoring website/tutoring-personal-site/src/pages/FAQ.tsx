
import "./Page.css"
import "../assets/Fonts.css"

import { Link } from "react-router"



export default function FAQ() {
    return (
        <>
    <div className = "sitewide min-h-screen flex justify-center items-center">
      
      <div className="body">
        <div className="grid grid-flow-row grid-rows-auto grid-cols-4 md:grid-cols-6 w-[400px] md:w-[1080px] gap-y-4 gap-x-4 p-4">

            <div className="container col-span-6 rounded-4xl p-8">
                <h1 className="text-center fira-sans-black">Frequently asked questions</h1>
                <br />
                <p className="fira-sans-regular">
                <ul>
                    <li className="fira-sans-medium">
                        What is your cancellation policy?
                    </li>
                    <li>
                        Please let me know 24 hours before the session for a full refund, otherwise you’ll be charged for half the cost of the session.                    </li>
                    <br />
                    <li className="fira-sans-medium">
                        Do you do a free intro/consultation session?
                    </li>
                    <li>
                        Yes! The first hour we spend together will be free, during which we can do introductions and some lesson time. Feel free to talk about you/your student’s goals, preferences, and any questions!
                    </li>
                    <br />
                    <li className="fira-sans-medium">
                        How long are your sessions?
                    </li>
                    <li>
                        I prefer one hour, but I am super flexible if you would like 90 minutes or something else.
                    </li>
                </ul>
              </p>
            </div>

            <div className="center container col-span-6 rounded-4xl p-8">
                <h1 className="fira-sans-semibold"><Link to="/" className="underline">Back to home page</Link></h1>
            </div>

        </div>
      </div>
    </div>
        </>
    )
}