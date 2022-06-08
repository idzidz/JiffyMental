const Home = () => {

    const handleDoctor = () => {
        console.log('doctor button');
    }

    const handlePatient = () => {
        console.log('patient button');
    }

    return (
        <div className="home">
            <h2 className="homeWelcome">Welcome to Jiffy Health!</h2>
            <h4 className="homeButtons">To get started, please select the appropriate button below</h4>

            <button onClick={handleDoctor}>Doctors</button>
            <button onClick={handlePatient}>Patients</button>


        </div>
    )
}

export default Home;