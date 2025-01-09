import { ChangeEvent, useState } from "react";
import EnrolmentForm from "./components/EnrolmentForm/EnrolmentForm";
import EnrolList from "./components/EnrolList/EnrolList";
import { Student } from "./entities/Studente";
import './App.css';

function App() {
  const [program, setProgram] = useState("UG");
  const [ugEnrolments, setUGEnrolments] = useState(0);
 const [pgEnrolments, setPGEnrolments] = useState(0);
 const [student, setStudent] = useState<Student>();
 const [editingStudent, setEditingStudent] = useState<Student>();

 const handleChangeEnrolments = (updateEnrolments: number) => {
  program == "UG" ? setUGEnrolments(updateEnrolments) : setPGEnrolments(updateEnrolments);
  };

  const handleChangeProgram = (event: ChangeEvent<HTMLLIElement>) => {
    setProgram(event.target.value.toString());
  };

  const selectedEnrolments = (): number => {
    return program == "UG" ? ugEnrolments : pgEnrolments;
  }

  const handleStudentRemoved = (student: Student): void => {
    student.program === "UG" ? setUGEnrolments(ugEnrolments - 1) :
   setPGEnrolments(pgEnrolments - 1);
    }
  return (
    <div className="App">
      <div className="programs">
        {/* ETAPA 2: Formulario con Select
        <div>
          <label>Selecciona el tipo de estudio:</label>
        <select
          className="appDropDowns"
          
          value={program}
          >
          <option value="UG">Grado</option>
          <option value="PG">Postgrado</option>
        </select>
        </div>
        
        <label>Matriculaciones actuales: {selectedEnrolments()} </label> */}

          {/* ETAPA 3: formulario con radio boxes  */}
        <ul className="ulEnrol">
          <li onChange={handleChangeProgram} className="parentLabels" >
            <input type="radio" value="UG" name="programGroup" defaultChecked />
            Grado
            <input 
              type="radio"
              className="radioSel"
              value="PG"
              name="programGroup"
            />
            Postgrado
          </li>
          <li>Matriculaciones actuales ({program}): {selectedEnrolments()} </li>
        </ul>
      </div>

      {/* ETAPA 1: formulario básico */}
      <EnrolmentForm
 chosenProgram={program}
 onChangeEnrolments={handleChangeEnrolments}
 currentEnrolments={selectedEnrolments()}
 onStudentChanged={setStudent}
 editingStudent={editingStudent}
 />
{/* ETAPA 3: Añadir la lista  */}
<EnrolList student={student} onStudentRemoved={handleStudentRemoved}
 onStudentEditing={setEditingStudent}/>

    </div>
  );
}

export default App;
