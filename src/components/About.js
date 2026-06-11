import User from "./User";
import UserClass from "./UserClass";

import { useContext } from "react";
import UserContext from "../utils/UserContext";

const About = () => {
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="about-container">
      <h1>About page {loggedInUser}</h1>
      <div className="class-function">
        {/* 
        <User
          method={"functional component"}
          name={"Vamshi Vade"}
          location={"Hyderabad"}
          contact={"@vamshivade"}
        />
        */}
        <UserClass
          method={"class component"}
          name={"Vamshi Vade"}
          location={"Hyderabad"}
          contact={"@vamshivade"}
        />
      </div>
    </div>
  );
};

export default About;
