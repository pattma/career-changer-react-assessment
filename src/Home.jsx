import Layout from './Layout'
import { useState } from "react";
import Admin from "./Admin";
import User from "./User";
import Normal from "./Normal";

export const mockEmployees = [
  {
    id: 0,
    name: "mock",
    lastname: 'mocklastname',
    position: "Manager"
  },
  {
    id: 1,
    name: "employee 1",
    lastname: "em",
    position: "Engineer"
  },
  {
    id: 2,
    name: "employee 2",
    lastname: "lord",
    position: "Designer"
  },
]

const Home = () => {

  const [employees, setEmployees] = useState(mockEmployees);
  const [sector, setSector] = useState("normal");

  if (sector === "user") {
    return (
      <Layout>
        <Normal setSector={setSector} />
        <User />
      </Layout>
    )
  } 
  
  else if (sector === "admin") {
    return (
      <Layout>
        <Normal setSector={setSector} />
        <Admin />
      </Layout>
    )
  } 

  // return (
  //   <div>
      
  //   </div>
  // )
  return (
    <Layout>
      <Normal setSector={setSector} />
    </Layout>
  )
}

export default Home