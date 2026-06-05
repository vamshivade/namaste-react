import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="about-container">
      <h1>About page</h1>
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
