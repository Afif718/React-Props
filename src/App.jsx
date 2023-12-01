import Student from "./Student";
import Friends from "./Friends";
import Countries from "./Countries";
import "./App.css";

function App() {
  let studentName = "Afif";
  let stuId = 1001957171;
  let country = "Malaysia";

  let friendNames = ["Rashed", "Gabi", "Maisha", "Iftiaj"];

  let counNames = ["BD", "MY", "IND", "AUS", "NZ", "PK"];

  return (
    <>
      <Student
        name={studentName}
        id={stuId}
        country={country}
        isStudent={true}
      />

      <Student
        name={studentName}
        id={stuId}
        country={country}
        isStudent={true}
      />

      <Student />

      <Friends fNames={friendNames} />
      <Countries counNames={counNames} />
    </>
  );
}

export default App;
