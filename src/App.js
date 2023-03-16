import React from 'react';
import './App.css';
import { CiLocationOn } from "react-icons/ci";
import { VscMailRead } from "react-icons/vsc";
import { ImWhatsapp } from "react-icons/im";
import { BsLinkedin } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";


function App() {
  return (
    <div className="App">
    <div class="table">
        <div class="left">
            <img src={require("./images/pfp.jpg")} class="pfp" alt="profilePicture"/>
            <h3 class="left">CONTACT ME AT</h3>
            <div class="experienceList">
                <h6><CiLocationOn style={{ height: "3vw", width: "3vw", verticalAlign: 'middle', paddingRight: "2vw"}} />No.3, Jalan Halaman 5, Taman Halaman, 68000 Ampang, Selangor.</h6>
                <h6><VscMailRead style={{ height: "3vw", width: "3vw", verticalAlign: 'middle', paddingRight: "2vw"}}/>han9.2000@gmail.com</h6>
                <h6><ImWhatsapp style={{ height: "3vw", width: "3vw", verticalAlign: 'middle', paddingRight: "2vw"}}/>+6011-4069 3799</h6>
                <h6><BsLinkedin style={{ height: "3vw", width: "3vw", verticalAlign: 'middle', paddingRight: "2vw"}}/>Whei Han Lim</h6>
                <p><h4>SKILLS SUMMARY</h4></p>
                <h5>MySQL using MySQL workbench & PHP in PHPMYAdmin</h5>
                <h5>Web Site development using HTML, Bootstrap and PHP</h5>
                <h5>Microsoft Azure Data Factory</h5>
                <h5>Experience with Snowflake data warehouse service and Matillion ETL tools (Fairly Proficient)</h5>
                <h5>Data Visualization : Tableau and PowerBI</h5>
                <h5>Programming in Java, Python, R</h5>
            </div>

            <div class="experienceList">
                <h4>CO-CURICULUM</h4>
                <p><BsBookmark style={{ height: "2vw", width: "2vw", verticalAlign: 'middle', paddingRight: "2vw"}}/>Navy Reserved Officer Training Unit (PALAPES)</p>
                <ul>
                    <li>Attend trainings throughout the my time in university</li>
                </ul>
                {"\n"}
                
                <p><BsBookmark style={{ height: "2vw", width: "2vw", verticalAlign: 'middle', paddingRight: "2vw"}}/>Navy Reserved Officer Training Unit (PALAPES)</p>
                <ul>
                    <li>Produce teaser videos and posters for projects</li>
                    <li>Organize and manage online meeting plaforms used for events</li>
                </ul>

            </div>


        </div>

        <div class="right" >
            <h1 class="name">LIM WHEI HAN</h1>
            <h3 class="right">PERSONAL PROFILE</h3>
            <h5 class="description">
                <p>I am a fresh graduate Computer Science student majoring in Information Systems Universiti Malaya.</p>
                {" \n "}
                <p>I look forward to getting experience to understand the tech industry with what I have learned.</p>
            </h5>


            <h3 class="right">WORK EXPERIENCE</h3>
            <div class="experienceList">
                <h3 style={{'margin': '1vw'}}>Hotel Receptionist</h3>
                <p style={{'font-weight': 'ligher', 'color':'gray', 'font-size': '1.8vw'}}>Map Travelodge, Cameron Highlands | 2017-2019 (During
semester breaks)</p>
                <ul>
                    <li>Manage guest's booking from hotel sites.</li>
                    <li>Help book tours and bus tickets</li>
                </ul>
            </div>

            <div class="experienceList">
                <h3 style={{'margin': '1vw'}}>Data Engineer Intern</h3>
                <p style={{'font-weight': 'ligher', 'color':'gray', 'font-size': '1.8vw'}} > Affin Hwang Asset Management |
9/8/2021 - 28/1/2022 (First Internship)
18/7/2022 - 2/9/2022 (Second Internship)</p>
                <ul>
                    <li>Build migration pipelines to migrate data from
on-premise database to Snowflake cloud
database using Matillion ETL tools</li>
                    <li>Create Tableau dashboards using data from
Snowflake</li>
                    <li>Create stored procedure scripts for daily data
updates
</li>
                </ul>
            </div>
            
            <h3 class="right">EDUCATIONAL HISTORY</h3>
            <div class="experienceList">
                <h3 style={{'margin': '1vw'}}>University Malaya (UM)</h3>
                <p style={{'font-weight': 'ligher', 'color':'gray', 'font-size': '1.8vw'}} >2019 - 2023</p>
                <ul>
                    <li>Bachelor Degree in Computer Science
(Information System)</li>
                    <li>Studied Fundamentals of Programming,
Networking Technology, Database, Data Science</li>
                    <li>CGPA 3.63</li>
                </ul>
            </div>

            <div class="experienceList">
                <h3 style={{'margin': '1vw'}}>Kolej Matrikulasi Negeri Sembilan (KMNS)</h3>
                <p style={{'font-weight': 'ligher', 'color':'gray', 'font-size': '1.8vw'}} > 2018 - 2019</p>
                <ul>
                    <li>Science Stream</li>
                    <li>CGPA 4.0</li>
                </ul>
            </div>

        </div>


    </div>
    </div>
);
}

export default App;
