import React, {useState }from 'react'
import NavBar from '../components/navbar'
import '../styles/students.css'
import data from '../data/studentPageData.json'
import Year from '../components/People/year'
import StudentData from '../components/People/studentData'
function Students() {
  const[yearSelected,setYearSelected]= useState("2021");
  const[studentData, setStudentData]= useState([]);
  return (
    <>
      <NavBar logo={true}/>
      <div id="topSection">
          <span id="heading" className='font-Archivo font-[200] text-[10vw]'>STUDENTS</span>
      </div>
      <div className="studentBody">
        <div className="scrollContainer">
          {/* {data.map((items,index)=>(<Year year={items.year} yearSelected={yearSelected} setYearSelected={setYearSelected} setStudentsData={setStudentData} key={index}/>))} */}
          {/* <Year year={"2017"} yearSelected={yearSelected} setYearSelected={setYearSelected} setStudentsData={setStudentData}/> */}
        </div>
          <div className="studentsContainer">
            <h className="font-Archivo text-center w-[100%] mb-10 text-[2rem]"><b>Btech 2021</b></h>
              {/* {studentData.map((items,index)=>(<StudentData student={items} key={index}/>))} */}
        </div>
      </div>
    </>
  )
}

export default Students