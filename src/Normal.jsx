const Normal = ({ setSector }) => {
    return (
            <div>
                <button onClick={() => setSector("user")}>User Home Sector</button>
                <button onClick={() => setSector("admin")}>Admin Home Sector</button>
            </div>
    )
}

export default Normal