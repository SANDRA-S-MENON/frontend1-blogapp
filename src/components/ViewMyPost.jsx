import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewMyPost = () => {
    const [data,setData]=useState([]

    )
    const [token,setToken]=useState(sessionStorage.getItem("token"))
    const [userId,setuserId]=useState(
        {"userId":sessionStorage.getItem("userId")}
    )
    const fetchData=()=>{
       
        axios.post("http://localhost:3030/viewmypost",userId,{headers:{"token":sessionStorage.getItem("token"),"Content-Type":"application/json"}}).then(
            (response)=>{
                setData(response.data)
            }
        ).catch(
            (error)=>{
                console.log(error)
            }
        )
    }

useEffect( ()=>{fetchData()},[])

    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                      {data.map(
                        (value,index)=>{
                            return   <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <div class="card mb-3" >
                                    <div class="row g-0">
                                        <div class="col-md-4">
                                            <img src="..." class="img-fluid rounded-start" alt="..." />
                                        </div>
                                        <div class="col-md-8">
                                           
                                        <div class="card-body">
                                                <p class="card-text">{value.Message}</p>
                                                <p class="card-text">Posted on{value.postedDate}</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>

                        }
                      )}


                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewMyPost