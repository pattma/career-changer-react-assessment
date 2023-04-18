import Layout from "./Layout"
import Navbar from './Navbar';

const Normal = ({ setSector }) => {
    return (
        // <Layout>
            <div>
                {/* <Navbar /> */}
                <h1>
                Generation Thailand <br />
                React - Assesment
                </h1>
                <button onClick={() => setSector("user")}>User Home Sector</button>
                <button onClick={() => setSector("admin")}>Admin Home Sector</button>
            </div>
        // </Layout>
    )
}

export default Normal