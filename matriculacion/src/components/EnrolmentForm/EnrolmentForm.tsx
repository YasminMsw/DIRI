import React, { FormEvent, useEffect, useRef, useState } from "react";
import { Student } from "../../entities/Studente";
import './EnrolmentForm.css';

// Definición de las props que recibe el componente
interface EnrolmentFormProps {
  chosenProgram: string;
  currentEnrolments: number;
  editingStudent?: Student;
  onChangeEnrolments: (updateEnrolments: number) => void;
  onStudentChanged: (student: Student) => void;
}

function EnrolmentForm(props: EnrolmentFormProps) {
    // Estados locales para manejar los datos del formulario
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const nameInputRef = useRef<HTMLInputElement>(null);

  const [btnTitle, setBtnTitle] = useState("Registar");
  const [editingStudentID, setEditingStudentID] = useState<string>();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    const submitter = (event.nativeEvent as SubmitEvent).submitter as HTMLInputElement;

  // Si no se presiona "Cancelar", procesar el formulario
 if (!submitter || submitter.value != "Cancelar") {
    setWelcomeMessage(`Bienvenido/a ${firstName} ${lastName}`);  // Actualiza el mensaje de bienvenida
    props.onChangeEnrolments(props.currentEnrolments + 1); // Incrementa las matriculaciones
    
    // Crea el objeto student y lo envía al componente padre
    const student: Student = {
      id: editingStudentID,
      firstName: firstName,
      lastName: lastName,
      program: props.chosenProgram
    };
    props.onStudentChanged(student);
  }
    //event.currentTarget.reset();

    // Limpia los campos del formulario y restablece el estado
    setEditingStudentID(undefined);
    setFirstName(""); // añadido porque hemos añadido value en el input
    setLastName("");
    nameInputRef.current?.focus();// Devuelve el foco al campo de "Nombre"
    event.preventDefault();// Previene el comportamiento predeterminado del formulario
    setBtnTitle("Registrar");// Cambia el botón de vuelta a "Registrar"

  };

    // Actualiza los campos del formulario si se pasa un estudiante en edición
  useEffect(() => {
    if (props.editingStudent) {
   setEditingStudentID(props.editingStudent.id);
    setFirstName(props.editingStudent.firstName);
    setLastName(props.editingStudent.lastName);
    setBtnTitle("Actualizar");
    }
    }, [props.editingStudent]);// Ejecutar cada vez que cambie el estudiante en edición


  return (
    <div>
      <form className="enrolForm" onSubmit={handleSubmit}>
        <h1>Datos del estudiante - {props.chosenProgram}</h1>
        <label>Nombre:</label>
        <input
          type="text"
          name="fname"
          ref={nameInputRef}
          onChange={(event) => setFirstName(event.target.value)}
          value={firstName}
        />
        <label>Apellidos:</label>
        <input
          type="text"
          name="lname"
          onChange={(event) => setLastName(event.target.value)}
          value={lastName}
        />
      <input type="submit" value={btnTitle} />
      <input type="submit" value="Cancelar" />
      <label id="studentMsg" className="message">
          {welcomeMessage}
        </label>
      </form>
    </div>
  );
}

export default EnrolmentForm;
