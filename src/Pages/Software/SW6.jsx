


import { useState } from "react";

export default function SW6() {
  const [accordianState, setAccordianState] = useState({
    togglePara1: false,
    togglePara2: false,
    togglePara3: false,
    togglePara4: false,
    togglePara5: false,
  });

  const handleAccordianClick = (para) => {
    setAccordianState((preValue) => {
      return {
        togglePara1: para === "para1" ? !preValue.togglePara1 : false,
        togglePara2: para === "para2" ? !preValue.togglePara2 : false,
        togglePara3: para === "para3" ? !preValue.togglePara3 : false,
        togglePara4: para === "para4" ? !preValue.togglePara4 : false,
        togglePara5: para === "para5" ? !preValue.togglePara5 : false,
      };
    });
  };

  return (
    <div className="">
      <div className="flex items-center justify-center p-4 sm:p-6 md:p-8">
        <div className="flex flex-col items-center w-full max-w-5xl mt-8 md:mt-12 lg:mt-16">
          <div className="text-center">
            <h1 className="text-2xl font-display sm:text-3xl md:text-4xl">FAQ</h1>
            <p className="w-full mx-auto mt-2 text-sm sm:mt-4 sm:text-base md:text-lg sm:w-4/5 lg:w-3/4">
              Have any questions about Software Development services? You can check the
              FAQs or reach out to us to get your answer.
            </p>
          </div>

          <div className="flex flex-col w-full h-auto mt-8 Accordian md:mt-12">
            {[
              { id: "para1", question: "How does a Software Development project start?", ans: "A software development project starts with requirement gathering, where stakeholders define objectives, functionalities, and target users. This is followed by planning, designing system architecture, and creating a detailed development roadmap." },
              { id: "para2", question: "How does the design process work?", ans: "The design process in software development includes gathering requirements, creating wireframes, developing prototypes, conducting user feedback sessions, refining designs based on input, and finalizing visual elements before development begins." },
              { id: "para3", question: "What tools do you use?", ans: "In software development, I use tools like Visual Studio for coding, Git for version control, JIRA for project management, Figma for design, and Jenkins for continuous integration and deployment." },
              { id: "para4", question: "Can you work with our existing brand?", ans: "Yes, I can work with your existing brand in software development, ensuring that the software aligns with your brand identity, including design elements, user experience, and overall functionality throughout the process." },
              { id: "para5", question: "What is your pricing structure?", ans: "My software development pricing structure includes hourly rates, fixed project fees, or retainer options for ongoing support, tailored to your project’s complexity, scope, and specific requirements to fit your budget." },
            ].map((item) => (
              <div
                key={item.id}
                className="w-full h-auto mb-4 accordianItem"
                onClick={() => handleAccordianClick(item.id)}
              >
                <div className="flex w-full border-t border-b border-green-500 justify-between items-center h-[60px] p-3 cursor-pointer">
                  <h2 className="text-base sm:text-lg md:text-xl">{item.question}</h2>
                  <span className="pr-2 text-xl">
                    {accordianState[`toggle${item.id.charAt(0).toUpperCase() + item.id.slice(1)}`] ? "-" : "+"}
                  </span>
                </div>
                {accordianState[`toggle${item.id.charAt(0).toUpperCase() + item.id.slice(1)}`] && (
                  <p className="p-3 text-sm Description sm:text-base md:text-lg">
                    {item.ans}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

