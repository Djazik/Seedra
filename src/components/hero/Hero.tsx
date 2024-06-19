import axios from 'axios'
import React, { useEffect, useState } from 'react'

interface  UserSchema {
    id: string,
    image: string,
    title:string
    }

const API_URL:stirng = "http://dummyjson.com"

const Hero: React.FC = () => {
    const [userData, setUserData] = useState<null | UserSchema[]>(null)

    useEffect(()=>{
        axios
            .get(`${API_URL}/users`)
            .then(res => setUserData(res.data.users))
    },[])
    console.log(userData)

    const usersItem: JSX.Element[] | undefined = userData?.map((user: UserSchema) => (
        <div key={user.id} >
            <img src={user.image} width={200} alt="" />
            <h2>{user.company.address.address}</h2>
        </div>
    ))

  return (
    <div>
        <h2>Hero</h2>
        {usersItem}
    </div>
  )
}

export default Hero