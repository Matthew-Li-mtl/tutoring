
import "./Page.css"
import "../assets/Fonts.css"
import { Link } from "react-router"


export default function Home() {
    return (
    <>
    <div className = "sitewide min-h-screen flex justify-center items-center">
      
      <div className="body">
        <div className="grid grid-flow-row grid-rows-auto grid-cols-4 md:grid-cols-6 w-[400px] md:w-[1080px] gap-y-4 gap-x-4 p-4">



          <div id="headshot" className="center container col-span-6 md:col-span-2 rounded-4xl p-8">
            <img className="rounded-full object-cover" src="src/assets/headshot-rectangle.png"></img>
          </div>
          <div id="aboutMe" className="container col-span-6 md:col-span-4 rounded-4xl">
            <div className="content-container p-8">
              <h1 className="text-center fira-sans-black">About me</h1><br/>
              <p className="fira-sans-regular">
                Hi! I’m Matthew, computer science freshman at UCSB. It’s so great to finally meet you!
                <br />
                <br />
                In high school I took multivariable calculus, linear algebra, and discrete math through my local college. I’m confident that the same studying and test-taking strategies that helped me through these courses will create breakthroughs for you/your student, because they have before. I also scored a 5 across all 8 AP exams I took, including Calculus BC, Statistics, and Computer Science A. I’ve crammed many times before for these, so feel free to shoot a message if you feel anxious!                
                <br />
                <br />
                <b>What I tutor</b>
                <br />
                In my two years of experience with private tutoring, I’ve taught four grades of math up to algebra 2. I’m currently looking to tutor higher level math, especially AP Precalculus and Calculus BC, because that’s where the really interesting conversations happen. I am also looking to tutor AP Computer Science (Principles and A).
              </p>
            </div>
          </div>

          <div id="introVideo" className="container col-span-6 rounded-4xl">

          </div>

          <div id="aboutMyLessons" className="container col-span-6 rounded-4xl">
            <div className="content-container p-8">
              <h1 className="text-center fira-sans-black">About my lessons</h1><br/>
              <p className="fira-sans-regular">
                <ul className="bulleted">
                  <li>
                    My lessons are 100% student centered. Before any new material, I’ll always assess the student to meet them where they are. We’ll do the necessary practice to build strong foundations from wherever they are at. But my favorite part about tutoring is having the dynamic conversations; constantly emphasizing the whys and having the student teach back any new or difficult content we cover. I also like having these conversations because it gives room for so many perspectives on the same topic…if the test throws a curve ball, the concept won’t freeze up.
                  </li>
                  <li>
                    During my lessons I love to leverage learning-related psychology that I’ve picked up on – mostly from AP Psych, some from other educator’s suggestions. Little commitments like semantic encoding or spaced repetition make a big impact on understanding.
                  </li>
                  <li>
                    Errors tend to fall into two categories: gaps in understanding and missteps. Most of our time together will be addressing the student’s understanding of the material, but we’ll also spend some time simulating tests and testing strategies to reduce the chance of missteps.
                  </li>
                  <li>
                    Currently, I’m <a className="underline">only offering virtual sessions</a> through Google Meets or Zoom. I use tools like my tablet and Desmos to help show things, and photosharing through messages or email to see any of the student’s handwritten work. 
                  </li>
                  <li>
                    After every session, I’ll give you/your student a set of personalized notes, study resources, and targeted practice based on what we did that day. I know your studying time is limited, so I want to help you make the most of it.
                  </li>
                </ul>
              </p>
            </div>
          </div>

          <div className="center container col-span-6 rounded-4xl p-8">
            <h1 className="fira-sans-black">
              Pricing
            </h1>
          </div>

          <div className="center container col-span-6 md:col-span-2 rounded-4xl p-8">
            <p id="pricing1" className="fira-sans-semibold">$50/hour</p>
          </div>
          <div className="flex flex-col justify-center fira-sans-regular container col-span-6 md:col-span-4 rounded-4xl p-8">
            <p id="pricing2" className="text-left">First hour free!</p>
            <p>I'm confident that you'll find my service satisfactory. Let's meet up for a free one hour of consultation and tutoring.</p>
          </div>

          <div id="faqlink" className="center container col-span-6 rounded-4xl p-4">
            <h1 className="fira-sans-semibold"><Link to="/faq" className="underline">Frequently asked questions</Link></h1>
          </div>

          <div id="contact" className="center container flex flex-col col-span-6 rounded-4xl p-8">
            <h2 className="fira-sans-bold">Feel free to reach out!</h2>
            <br />
            <a className="underline" href="mailto:matthewli.mtl@gmail.com">matthewli.mtl@gmail.com</a>
          </div>

          <div className="center col-span-6">
            <p className="gridFooter">This website was programmed by myself using react, tailwind, and vite. Check out my other coding projects <a className="gridFooter underline" href="https://github.com/Matthew-Li-mtl">here!</a></p>
          </div>

        </div>
      </div>
    </div>
    </>
    )
}