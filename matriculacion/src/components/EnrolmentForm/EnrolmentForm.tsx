import React, { FormEvent, useEffect, useRef, useState } from "react";
import { Student } from "../../entities/Studente";
import './EnrolmentForm.css';
import { FormattedMessage } from "react-intl";
import { useIntl } from "react-intl";

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

    const intl = useIntl();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const nameInputRef = useRef<HTMLInputElement>(null);

  const [btnTitle, setBtnTitle] = useState("registrar");
  const [editingStudentID, setEditingStudentID] = useState<string>();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    const submitter = (event.nativeEvent as SubmitEvent).submitter as HTMLInputElement;

  // Si no se presiona "Cancelar", procesar el formulario
 if (!submitter || submitter.value != "Cancelar") {
  setWelcomeMessage(`${intl.formatMessage({ id: "app.label.mensajeBienvenida" })} ${firstName} ${lastName}`);
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
    setBtnTitle("registrar");// Cambia el botón de vuelta a "Registrar"

  };

    // Actualiza los campos del formulario si se pasa un estudiante en edición
  useEffect(() => {
    if (props.editingStudent) {
   setEditingStudentID(props.editingStudent.id);
    setFirstName(props.editingStudent.firstName);
    setLastName(props.editingStudent.lastName);
    setBtnTitle("actualizar");
    }
    }, [props.editingStudent]);// Ejecutar cada vez que cambie el estudiante en edición

   const getValueInput =(()=>{
      
      return intl.formatMessage({ id: `app.label.${btnTitle}` });
    }
  )

  return (
    <div className="flex justify-center items-center p-8 bg-gray-100">
  <form
    className="bg-white rounded-lg shadow-lg p-6 w-[450px] text-gray-800"
    onSubmit={handleSubmit}
  >
    {/* Título */}
    <h1 className="text-2xl font-bold text-center mb-5">
      <FormattedMessage id="app.label.titulo2" /> - {props.chosenProgram}
    </h1>

    {/* Campo Nombre */}
    <label className="block text-lg font-medium mb-1">
      <FormattedMessage id="app.label.nombre" />
    </label>
    <input
      type="text"
      name="fname"
      ref={nameInputRef}
      onChange={(event) => setFirstName(event.target.value)}
      value={firstName}
      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    {/* Campo Apellidos */}
    <label className="block text-lg font-medium mt-4 mb-1">
      <FormattedMessage id="app.label.apellidos" />
    </label>
    <input
      type="text"
      name="lname"
      onChange={(event) => setLastName(event.target.value)}
      value={lastName}
      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    {/* Botón Registrar */}
    <input
      type="submit"
      value={getValueInput()}
      className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg mt-4 hover:bg-blue-700 transition duration-200"
    />

    {/* Botón Cancelar */}
    <input
      type="submit"
      value={intl.formatMessage({ id: "app.label.cancelar" })}
      className="w-full bg-gray-400 text-black font-semibold py-3 rounded-lg mt-2 hover:bg-gray-500 transition duration-200"
    />

    {/* Mensaje de bienvenida */}
    <label className="block text-green-600 font-bold text-center mt-4">
      {welcomeMessage}
    </label>
  </form>
</div>

  );
}

export default EnrolmentForm;
