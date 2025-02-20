import { ChangeEvent, useContext, useState } from "react";
import EnrolmentForm from "./components/EnrolmentForm/EnrolmentForm";
import EnrolList from "./components/EnrolList/EnrolList";
import { Student } from "./entities/Studente";
import "./App.css";
import { FormattedMessage } from "react-intl";
import { LanguageProvider } from "./lang/LanguageProvider";
import { LanguageContext } from "./lang/LanguageContext";

function App() {
  const { changeLanguage, locale } = useContext(LanguageContext);

  const [program, setProgram] = useState("UG");
  const [ugEnrolments, setUGEnrolments] = useState(0);
  const [pgEnrolments, setPGEnrolments] = useState(0);
  const [student, setStudent] = useState<Student>();
  const [editingStudent, setEditingStudent] = useState<Student>();

  const handleChangeEnrolments = (updateEnrolments: number) => {
    program == "UG"
      ? setUGEnrolments(updateEnrolments)
      : setPGEnrolments(updateEnrolments);
  };

  const handleChangeProgram = (event: ChangeEvent<HTMLLIElement>) => {
    setProgram(event.target.value.toString());
  };

  const selectedEnrolments = (): number => {
    return program == "UG" ? ugEnrolments : pgEnrolments;
  };

  const handleStudentRemoved = (student: Student): void => {
    student.program === "UG"
      ? setUGEnrolments(ugEnrolments - 1)
      : setPGEnrolments(pgEnrolments - 1);
  };
  return (
    <div className="App">
      <div>
        <label htmlFor="language-select">
          <FormattedMessage
            id="app.languageSelector"
            defaultMessage="Select language:"
          />
        </label>
        {""}
        <select
          id="language-select"
          onChange={(e) => changeLanguage(e.target.value)}
          value={locale}
          style={{ marginBottom: "20px" }}
        >
          <option value="en">English</option>
          <option value="es">Español</option>
        </select>
      </div>

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
          <li onChange={handleChangeProgram} className="parentLabels">
            <input type="radio" value="UG" name="programGroup" defaultChecked />
            <FormattedMessage id="app.label.grado" />
            <input
              type="radio"
              className="radioSel"
              value="PG"
              name="programGroup"
            />
            <FormattedMessage id="app.label.posgrado" />
          </li>
          <li>
            <FormattedMessage id="app.label.titulo" />({program}):{" "}
            {selectedEnrolments()}{" "}
          </li>
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
      <EnrolList
        student={student}
        onStudentRemoved={handleStudentRemoved}
        onStudentEditing={setEditingStudent}
      />
    </div>
  );
}

export default App;
