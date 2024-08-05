import React from 'react';

const About = () => {
  return (
    <div className='w-auto h-auto flex flex-col lg:flex-row'>
      <div className='w-full h-auto'>
        <img 
          src="https://akshtechnology.com/static/media/people.f70077a04052c1ccf7185974fa7ff86b.svg" 
          alt="People" 
          className='w-full h-auto object-cover' 
        />
      </div>
      <div className='lg:ml-28 lg:mt-16 mt-10 px-4 lg:px-0'>
        <div>
          <h1 className='text-3xl font-medium text-center lg:text-left'>ABOUT US</h1>
          <p className='text-lg my-3 text-center lg:text-left'>
            Welcome to our vibrant IT company where innovation meets excellence. At Aksh Technology, we're not just about creating software, we're crafting experiences. Specializing in UI/UX design, JavaScript, CSS, mobile app development, Node.js, React.js, React Native, HTML, and more, we're dedicated to bringing your digital dreams to life. Join us on this journey of innovation, where every line of code is infused with creativity and every project is a masterpiece in the making.
          </p>

          <div className='mt-7'>
            <h1 className='font-medium text-xl mt-7 text-center lg:text-left'>Why Choose Us?</h1>
            <div className='flex flex-col lg:flex-row lg:justify-start mt-5'>
              <ul className='mb-5 lg:mb-0'>
                <li>Expertise Meets Innovation</li>
                <li>Affordable Solutions</li>
                <li>Timely Delivery</li>
              </ul> 
              <ul className='lg:ml-16'>
                <li>Client-Centric Approach</li>
                <li>Creative Excellence</li>
                <li>Quality Assurance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
