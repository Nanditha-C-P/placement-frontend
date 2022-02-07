import React , {useEffect, useState} from 'react'
import axios from 'axios'
import { Card, CardContent,Button, Typography } from '@material-ui/core'
import Cards from './Cards'


function DataFetchingCard() {
    const [job, setJob] = useState([])

    useEffect(() =>{
        axios.get('https://acharya-placement-dev.herokuapp.com/api/tpo/job/list?pageSize=5&pageNo=1',{headers:{Authorization:'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImMxMGM5MGJhNGMzNjYzNTE2ZTA3MDdkMGU5YTg5NDgxMDYyODUxNTgiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiTmFuZGl0aGEgTSIsInJvbGVzIjpbInRwbyJdLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGxhY2VtZW50LXN5c3RlbS1hY2hhcnlhIiwiYXVkIjoicGxhY2VtZW50LXN5c3RlbS1hY2hhcnlhIiwiYXV0aF90aW1lIjoxNjQzOTY0MjEzLCJ1c2VyX2lkIjoic2pBaWFGVER0VlNBazlPbmR4c2hkczhvTmJOMiIsInN1YiI6InNqQWlhRlREdFZTQWs5T25keHNoZHM4b05iTjIiLCJpYXQiOjE2NDM5NjQyMTMsImV4cCI6MTY0Mzk2NzgxMywiZW1haWwiOiJuYW5kaXRoYW1hZGh1c3VkaGFAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibmFuZGl0aGFtYWRodXN1ZGhhQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.H9TSFMoler9AMTVrgjlpQ7my19uDGbeKv9XsQnuyy3MGtgyIszga_EWCXe4Kt6H7JAve5e-Qnx78v35VFDKQKD-0hpR0Flon8cnQVASpBRgWYvjjFI6BwEZ2zju2FMe7F8BU1fQ0Vy21IPL3Pg4fb8j4nxPpadhpbzvn0l7jmqOZjX1-u_PWMOFtaJm3PlzJglBUH3RHwIthyh7b04Uw3BDlsLwTGoluk7AHqR52ulakt_jYrzySOUmyKI07AuvSp0Pb4_9Hd901L0GTMQD6JmQlItugtxT__9RNP6dYFo7HWQnR9DCzEisVaFEJhCpU-O-Y0rCU5FADwkXDcPLuxw' }})
        .then(res =>{
            setJob(res.data.jobs)
        })
        .catch(err => {
            console.log(err)
        })
    },[])
    return (
        <div>
            {
                        job.map(job => <Cards key={job.postId}><h2>CAMPUS PLACEMENT DRIVE BY {job.companyName}</h2>
                        <li>Designation: {job.designation}</li>
                        <li>Contact Number: {job.contactNo}</li>
                        <li>Email: {job.email}</li>
                        </Cards>)
            }
         
        </div>
    )
}

export default DataFetchingCard
