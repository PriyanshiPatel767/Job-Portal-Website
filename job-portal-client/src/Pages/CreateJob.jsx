import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import CreatableSelect from "react-select/creatable"


const CreateJob = () => {
    const [selectedOption,setSelectedOption] = useState(null);
    const {
        register,
        handleSubmit,reset,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => { 
        data.skills =selectedOption
        // console.log(data); 
        fetch("http://localhost:4000/post-job",{
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(data)
        })
        .then(res => res.json()).then((result) => {
            console.log(result)
            if(result.acknowledged === true){
                alert("Job Posted Successfully!!!")
            }
            reset()
        })
    };
const options =[
    {value: "JavaScript",label:"JavaScript"},
    {value: "C++",label:"C++"},
    {value: "HTML",label:"HTML"},
    {value: "CSS",label:"CSS"},
    {value: "React",label:"React"},
    {value: "Node",label:"Node"},
    {value: "MongoDB",label:"MongoDB"},
    {value: "Python",label:"Python"},
    {value: "Java",label:"Java"},
    {value: "C",label:"C"},
    {value: "Data Structure",label:"Data Structure"},
    {value: "DBMS",label:"DBMS"},
    {value: "Angular",label:"Angular"},
    
];
    //   console.log(watch("example")) // watch input value by passing the name of it

    return (
        <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>

            <div className='bg-[#FAFAFA] py-10px-4 lg:px-16'>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
                    {/*1st row */}

                    <div className='create-job-flex'>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Job Title</label>
                            <input type="text" defaultValue={"Web Developer"} placeholder="First name" {...register("jobTitle")} className='create-job-input' />
                        </div>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Company Name</label>
                            <input type="text" placeholder="Microsoft" {...register("companyName")} className='create-job-input' />
                        </div>


                    </div>

                    {/*2st row */}
                    <div className='create-job-flex'>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Minimam Salary</label>
                            <input type="text" placeholder="$20k" {...register("minPrice")} className='create-job-input' />
                        </div>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Maximam Salary</label>
                            <input type="text" placeholder="$120k" {...register("maxPrice")} className='create-job-input' />
                        </div>


                    </div>

                    {/*3st row */}
                    <div className='create-job-flex'>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Salary Type</label>
                            <select {...register("salaryType")} className='create-job-input'>
                                <option value="">Choose your salary</option>
                                <option value="Hourly">Hourly</option>
                                <option value="Monthly">Monthly</option>
                                <option value="Yearly">Yearly</option>
                            </select>
                        </div>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Job Location</label>
                            <input type="text" placeholder="Ex: New York" {...register("jobLocation")} className='create-job-input' />
                        </div>


                    </div>

                    {/*4st row */}
                    <div className='create-job-flex'>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Job Posting date</label>
                            <input type="Date" placeholder="ex: 2023-10-23" {...register("postingDate")} className='create-job-input' />
                        </div>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Experience Level</label>
                            <select {...register("experienceLevel")} className='create-job-input'>
                                <option value="">Choose your experience level</option>
                                <option value="NoExperience">No Experience</option>
                                <option value="Internship">Internship</option>
                                <option value="Work remotely">Work remotely</option>
                            </select>
                        </div>
                    </div>

                    {/*5st row */}

                    <div>
                    <label className='block mb-2 text-lg'>Required Skills Sets:</label>
                    <CreatableSelect defaultInputValue={'selectedOption'} 
                   options={options} isMulti onChange={setSelectedOption} className='create-job-input'/>
                    </div>


                    {/*6st row */}
                    <div className='create-job-flex'>
                    <div className='lg:w-1/2 w-full'>
                        <label className='block mb-2 text-lg'>Company Logo</label>
                        <input type="url" placeholder="Paste Your Logo URL:https://weshare.com" {...register("companyLogo")} className='create-job-input' />
                    </div>
                    <div className='lg:w-1/2 w-full'>
                        <label className='block mb-2 text-lg'>Employment Type</label>
                        <select {...register("employmentType")} className='create-job-input'>
                            <option value="">Choose your job type</option>
                            <option value="Full-time">Full-time</option>
                            <option value="Part-time">Part-time</option>
                            <option value="Temporary">Temporary</option>
                        </select>
                    </div>
                </div>
                    {/*7st row */}
                    <div className='w-full'>
                    <label className='block mb-2 text-lg'>Job Description</label>
                    <textarea className='w-full pl-3 py-1.5 focus:outline-none placeholder:text-gray-700' rows={6} defaultValue={'Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt.'} placeholder='description' {...register("description")}></textarea>
                    </div>


                    {/*8st row */}
                    <div className='w-full'>
                    <label className='block mb-2 text-lg'>Job Posted By</label>
                    <input type="email" placeholder="Your email" {...register("postedBy")} className='create-job-input' />
                    
                    </div>


                    <input type="submit" className='block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded-sm cursor-pointer' />
                </form>
            </div>
        </div>
    )
}

export default CreateJob
