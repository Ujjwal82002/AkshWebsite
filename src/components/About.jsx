/* eslint-disable react/no-unescaped-entities */
// 
export default function About() {
  return (
    <div className='flex flex-col w-full lg:h-[0%] lg:flex-row  lg:my-[-30px] '>
      <div className='lg:w-[150%] w-auto h-auto lg:ml-20'>
        <img 
          src="https://akshtechnology.com/static/media/people.f70077a04052c1ccf7185974fa7ff86b.svg" 
          alt="People" 
          className='object-cover w-full h-auto' 
        />
      </div>
      <div className='px-4 mt-10 lg:mt-16 lg:px-32 lg:mb-56'>
        <div>
          <h1 className='text-4xl text-center font-display lg:text-left'>ABOUT US</h1>
          <p className='my-3 text-base text-center text-slate-600 lg:text-left'>
            Welcome to our vibrant IT company where innovation meets excellence. At Aksh Technology, we're not just about creating software, we're crafting experiences. Specializing in UI/UX design, JavaScript, CSS, mobile app development, Node.js, React.js, React Native, HTML, and more, we're dedicated to bringing your digital dreams to life. Join us on this journey of innovation, where every line of code is infused with creativity and every project is a masterpiece in the making.
          </p>

          <div className='mb-32 mt-7 lg:mb-0'>
            <h1 className='text-xl text-center font-display mt-7 lg:text-left'>Why Choose Us?</h1>
            <div className='flex flex-col mt-5 lg:flex-row lg:justify-start'>
              <ul className='mb-5 lg:mb-0'>
                <li className='relative pl-6 text-slate-600 before:absolute before:left-0 before:content-["✔"] before:text-green-500'>
                  Expertise Meets Innovation
                </li>
                <li className='relative pl-6 text-slate-600 before:absolute before:left-0 before:content-["✔"] before:text-green-500'>
                  Affordable Solutions
                </li>
                <li className='relative pl-6 text-slate-600 before:absolute before:left-0 before:content-["✔"] before:text-green-500'>
                  Timely Delivery
                </li>
              </ul> 
              <ul className='lg:ml-16'>
                <li className='relative pl-6 text-slate-600 before:absolute before:left-0 before:content-["✔"] before:text-green-500'>
                  Client-Centric Approach
                </li>
                <li className='relative pl-6 text-slate-600 before:absolute before:left-0 before:content-["✔"] before:text-green-500'>
                  Creative Excellence
                </li>
                <li className='relative pl-6 text-slate-600 before:absolute before:left-0 before:content-["✔"] before:text-green-500'>
                  Quality Assurance
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
