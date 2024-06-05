import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import PageHeader from '../components/PageHeader';

// or via CommonJS
// const Swal = require('sweetalert2')


const JobDetails = () => {
const {id} = useParams();
const [job,setJob] = useState({})
useEffect(() => {
    fetch(`http://localhost:4000/all-jobs/${id}`).then(res => res.json()).then(data => setJob(data))
},[])
    
const handleApply = async() => {
    const { value: url } = await Swal.fire({
        input: "url",
        inputLabel: "URL address",
        inputPlaceholder: "Enter the URL"
      });
      if (url) {
        Swal.fire(`Entered URL: ${url}`);
      }
}

  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4 ml-2'>
    <PageHeader title={"Single Job Page"} path={"single job"}/>
    <h2>JobDetails: {id}</h2>
      <h1>{job.jobTitle}</h1>


<button className='bg-blue px-8 py-2 text-white flex flex-col' onClick={handleApply}>Apply Now</button>



    <div className="bg-white-100 p-6 ">
    <div className="max-w-4xl mx-auto ml-0">
      
      <h2 className="text-xl font-semibold mt-6 mb-2">Objective:</h2>
      <p className="mb-6">Dynamic and skilled web developer with [X years] of experience seeking to leverage expertise in [languages, frameworks, and technologies you specialize in] to contribute effectively to [company name or type of organization]. Passionate about creating innovative web solutions and staying updated with emerging technologies.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Skills:</h2>
      <ul className="list-disc list-inside mb-6">
        <li>Proficient in HTML, CSS, JavaScript</li>
        <li>Experienced with React.js, Tailwind CSS</li>
        <li>Strong understanding of responsive web design principles</li>
        <li>Knowledgeable in backend technologies such as Node.js, Express, MongoDB</li>
        <li>Familiarity with version control systems like Git</li>
        <li>Experience with UI/UX design principles</li>
        <li>Excellent problem-solving and troubleshooting abilities</li>
        <li>Strong communication and collaboration skills</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Experience:</h2>
      <div className="mb-6">
      
        <p className="italic">[Dates of Employment]</p>
        <ul className="list-disc list-inside">
          <li>Developed responsive and user-friendly web applications using HTML, CSS, and JavaScript</li>
          <li>Implemented backend functionalities using Node.js and Express, with MongoDB as the database</li>
          <li>Collaborated with cross-functional teams to design and implement intuitive user interfaces</li>
          <li>Conducted code reviews and provided constructive feedback to team members</li>
          <li>Optimized website performance and ensured compatibility across different browsers and devices</li>
        </ul>
      </div>

    



      
    </div>
  </div>
);




    </div>
  )
}

export default JobDetails
