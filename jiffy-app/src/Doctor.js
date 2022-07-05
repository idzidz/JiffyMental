const Doctor = () => {

    const testStorage = () => {
        console.log("Testing storage")
        console.log(localStorage);
        console.log(localStorage.getItem("userType"));
    }

    return(
        <div>
            <h4 className="subText" onLoad={testStorage()}>todo: Doctor landing page</h4>
            <h4 className="subText">todo: Change to Doctor navbar</h4>

        </div>

    )
}

export default Doctor;