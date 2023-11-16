import profileImage from '../assets/img/Profile.jpeg'

const Profile = () => {
    return (
        
        <div>
            <br></br>
            <img src={profileImage}alt="Profile Picture" className="profile-pic" />
            <h2>John Doe</h2>
            <p>Years of Experience: 5</p>
            <p>Languages: JavaScript, Python, C++</p>
            <div className="projects">
                <a href="https://github.com/user/project1">Project 1</a>
                <a href="https://github.com/user/project2">Project 2</a>
                <a href="https://github.com/user/project3">Project 3</a>
            </div>
        </div>
    )
 }
 
 export default Profile
 