import { useState, useEffect} from "react";
import { mockEmployees } from "./Home"

const Admin = () => {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        setEmployees(mockEmployees);
    }, []);

    // Function to add a new employee to the list
    const addEmployee = () => {
        // Get input values
        const nameInput = document.querySelector('input[name="name"]');
        const lnameInput = document.querySelector('input[name="lastname"]');
        const posInput = document.querySelector('input[name="position"]');

        // Create new employee object
        const newEmployee = {
            id: employees.length + 1,
            name: nameInput.value,
            lastname: lnameInput.value,
            position: posInput.value,
        };
        // Add new employee to the state
        setEmployees([...employees, newEmployee]); // '...employees' = Destructuring assignment

        // Clear input fields
        nameInput.value = "";
        lnameInput.value = "";
        posInput.value = "";
    };

    const deleteEmployee = (id) => {
        setEmployees(employees.filter((employee) => employee.id !== id));
    };

    return (
            <>
                <>
                    <h3>Create User Here</h3>
                    <input type="text" name="name" placeholder="Name" style={{ margin: "4px" }} />
                    <input type="text" name="lastname" placeholder="Last Name" style={{ margin: "4px" }} />
                    <input type="text" name="position" placeholder="Position" style={{ margin: "4px" }} />
                    <button style={{ margin: "4px" }} onClick={addEmployee}>Save</button>
                </>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Last Name</th>
                            <th>Position</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.lastname}</td>
                                    <td>{item.position}</td>
                                    <td>
                                        <button style={{ color: "red", border: "none", backgroundColor: "inherit", cursor: "pointer"}} onClick={() => deleteEmployee(item.id)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </>
    )           
}

export default Admin