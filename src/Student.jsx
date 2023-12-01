import PropsTypes from "prop-types";

function Student(props) {
  return (
    <div className="student-container">
      <p>Name: {props.name}</p>
      <p> Student Id: {props.id}</p>
      <p> Country: {props.country}</p>
      <p> IsStudent: {props.isStudent ? "Yes" : "No"}</p>
    </div>
  );
}

Student.propsTypes = {
  name: PropsTypes.string,
  id: PropsTypes.number,
  country: PropsTypes.string,
  isStudent: PropsTypes.bool,
};

Student.defaultProps = {
  name: "abc",
  id: 1234,
  country: "Unknown",
  isStudent: false,
};

export default Student;
