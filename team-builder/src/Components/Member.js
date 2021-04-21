function Member(props) {
    const {info} = props

    if(!info) {
        return <p>Loading...</p>
    }

    return (
        <div className='member-container'>
            <h2>{info.name}</h2>
            <p>Email: {info.email}</p>
            <p>Role: {info.role}</p>
        </div>
    )
}

export default Member