import { useState, useEffect} from "react";
import { mockEmployees } from "./Home"

const User = () => {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        setEmployees(mockEmployees);
    }, []);

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>Position</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.lastname}</td>
                                <td>{item.position}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default User