import profileImage from "../assets/img/Profile.jpeg";
import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { UPDATE_USER } from "../utils/mutations";
import { QUERY_USER } from "../utils/queries";
import { useParams } from "react-router-dom";
import avatar1 from "../assets/img/avatar_png_files/avatar_1.png";
import avatar2 from "../assets/img/avatar_png_files/avatar_2.png";
import avatar3 from "../assets/img/avatar_png_files/avatar_3.png";
import avatar4 from "../assets/img/avatar_png_files/avatar_4.png";
import avatar5 from "../assets/img/avatar_png_files/avatar_5.png";
import avatar6 from "../assets/img/avatar_png_files/avatar_6.png";
import avatar7 from "../assets/img/avatar_png_files/avatar_7.png";
import avatar8 from "../assets/img/avatar_png_files/avatar_8.png";
import avatar9 from "../assets/img/avatar_png_files/avatar_9.png";
import avatar10 from "../assets/img/avatar_png_files/avatar_10.png";
import avatar11 from "../assets/img/avatar_png_files/avatar_11.png";
import avatar12 from "../assets/img/avatar_png_files/avatar_12.png";
import avatar13 from "../assets/img/avatar_png_files/avatar_13.png";
import avatar14 from "../assets/img/avatar_png_files/avatar_14.png";

const avatars = [
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6,
  avatar7,
  avatar8,
  avatar9,
  avatar10,
  avatar11,
  avatar12,
  avatar13,
  avatar14,
];

const randomAvatar = avatars[Math.floor(Math.random() * avatars.length)];

/* Socket.io */
import { useState, useEffect } from "react";
import { socket } from "../socket";
import { ConnectionState } from "../components/ConnectionState";
import { ConnectionManager } from "../components/ConnectionManager";
import { Events } from "../components/Events";
import { MyForm } from "../components/MyForm";
/* End Socket.IO */

const Profile = () => {
  const { id } = useParams();

  /* Socket.io state variables */
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [fooEvents, setFooEvents] = useState([]);

  /* socket io */
  const [updateUser] = useMutation(UPDATE_USER);

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    function onFooEvent(value) {
      setFooEvents((previous) => [...previous, value]);
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("foo", onFooEvent);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("foo", onFooEvent);
    };
  }, []);
  /* end socket io */

  const { loading, error, data } = useQuery(QUERY_USER, {
    variables: { id },
  });
  console.log(data, "profile line 90");

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const firstName = data.user.firstName;
  const lastName = data.user.lastName;
  const username = data.user.username;
  const languages = data.user.languages;
  const email = data.user.email;
  const skills = data.user.skills;

  /* function for handling page editing */

  function Editable({ text, type, onChange }) {
    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState(text);

    const handleChange = (e) => {
      setValue(e.target.value);
      onChange(e.target.value);
    };

    const handleEdit = () => {
      setIsEditing(true);
    };

    const { loading, error, data } = useQuery(QUERY_USER);

    // ...

    function handleSave() {
      setIsEditing(false);
      updateUser({
        variables: {
          id: data.user._id,
          username: username,
          firstName: firstName,
          lastName: lastName,
          email: email,
        },
      });
    }

    return (
      <span onClick={handleEdit}>
        {isEditing ? (
          <input
            type={type}
            value={value}
            onChange={handleChange}
            onBlur={handleSave}
          />
        ) : (
          <span>{value}</span>
        )}
      </span>
    );
  }

  /* end function for handling page editing */

  return (
    <div className="container row">
      <div className="main-section col-8 row">
        <div className="col-4">
          <br></br>
          <img
            src={randomAvatar}
            alt="Profile Picture"
            className="profile-pic"
            style={{ marginLeft: "1px " }}
          />
        </div>
        <div className="col-8">
          <br></br>
          <h2 style={{ marginLeft: "15px" }}>
            Name:{" "}
            <Editable
              text={`${firstName} ${lastName}`}
              type="text"
              onChange={(newValue) => {
                console.log(newValue);
              }}
            />{" "}
          </h2>

          <p style={{ marginLeft: "15px" }}>
            <strong>Username:</strong>
            <Editable
              text={`${username}`}
              type="text"
              onChange={(newValue) => {
                console.log(newValue);
              }}
            />
          </p>
          <p style={{ marginLeft: "15px" }}>
            <strong>Email: </strong>
            <Editable
              text={`${email}`}
              type="text"
              onChange={(newValue) => {
                console.log(newValue);
              }}
            />
          </p>
          <p style={{ marginLeft: "15px" }}>
            <strong>
              Skill:{" "}
              <Editable
                text={`${languages}`}
                type="text"
                onChange={(newValue) => {
                  console.log(newValue);
                }}
              />
            </strong>{" "}
          </p>

          {languages &&
            languages.map((language, index) => (
              <p key={index}>
                <strong>{language.language}</strong> - {language.skill}
              </p>
            ))}
        </div>
        <div className="container row">
          <div
            className="col-3"
            style={{
              minHeight: "200px",
              minWidth: "100px",
              margin: "55px 5px 5px 5px",
              border: "35px 35px 35px 35px",
              padding: "1px 1px 1px 1px",
              boxShadow: "1px 1px 1px 1px",
            }}
          >
            <br></br>
            <a href="https://github.com/user/project1">Project 1</a>
            {/* <iframe
            src="https://tailwindcss.com/"
            height="200"
            width="250"
            title=""
          ></iframe> */}
          </div>

          <div
            className="col-3"
            style={{
              minHeight: "200px",
              minWidth: "100px",
              margin: "55px 5px 5px 5px",
              border: "35px 35px 35px 35px",
              padding: "1px 1px 1px 1px",
              boxShadow: "1px 1px 1px 1px",
            }}
          >
            <br></br>

            <a href="https://github.com/user/project2">Project 2</a>
          </div>
          <div
            className="col-3"
            style={{
              minHeight: "200px",
              minWidth: "100px",
              margin: "55px 5px 5px 5px",
              border: "35px 35px 35px 35px",
              padding: "1px 1px 1px 1px",
              boxShadow: "1px 1px 1px 1px",
              clear: "both",
            }}
          >
            <br></br>
            <a href="https://github.com/user/project3">Project 3</a>
          </div>
        </div>
      </div>

      {/* <section class="bg-light">
        <div class="container">
          <div class="text-center">
            <h1>
              Messenger <ConnectionManager />
            </h1>
          </div>
        </div>
      </section> */}
      <div
        className="col-4"
        style={{
          // float: "auto",
          // position: "fixed",
          clear: "both",
          bottom: "0",
          border: "2px solid black",
          // marginRight: "20px",
          // marginBottom: "10px",
          // width: "400px",
          // height: "400px",
        }}
      >
        <div
          style={{
            backgroundColor: "lightblue",
            color: "white",
            padding: "2px",
          }}
        >
          <h1>
            Messenger <ConnectionManager />
          </h1>
        </div>
        <ConnectionState isConnected={isConnected} />
        <Events events={fooEvents} />
        <MyForm />
      </div>
    </div>
  );
  console.log(data);
};

export default Profile;
