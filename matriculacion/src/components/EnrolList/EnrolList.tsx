import React, { useEffect, useState } from "react";
import { DetailsList, IColumn } from "@fluentui/react/lib/DetailsList";

import { initializeIcons } from "@fluentui/react/lib/Icons";
import { Student } from "../../entities/Studente";
import { v4 as uuidv4 } from "uuid";
import { MdEdit, MdDelete } from "react-icons/md";
import './EnrolList.css';
initializeIcons(); // Inicialización de íconos de FluentUI, requerida para la lista.

const items: any[] = [];
for (let i = 1; i < 5; i++) {
  items.push({
    key: i,
    fname: "Nombre de #" + i,
    lname: "Apellidos de #" + i,
    program: "UG",
  });
}

// Definición de las propiedades que el componente recibe
interface EnrolListProps {
  student?: Student;
  onStudentRemoved: (student: Student) => void;
  onStudentEditing: (student: Student) => void;
}

function EnrolList(props: EnrolListProps) {
  const [items, setItems] = useState<Student[]>([]);

    // Configuración de columnas para la lista de FluentUI
  const columns: IColumn[] = [
    {
      key: "fname",
      name: "Nombre",
      fieldName: "firstName",
      minWidth: 90,
      maxWidth: 200,
      isResizable: true,
    },
    {
      key: "lname",
      name: "Apellidos",
      fieldName: "lastName",
      minWidth: 90,
      maxWidth: 200,
      isResizable: true,
    },
    {
      key: "program",
      name: "Estudios",
      fieldName: "program",
      minWidth: 60,
      maxWidth: 200,
      isResizable: true,
    },
    {
      key: "actions",
      name: "Acciones",
      fieldName: "actions",
      minWidth:30,
      maxWidth: 60,
      isResizable: true,
      onRender: (item: any) => (
        <div>
          <MdEdit
            style={{ cursor: "pointer", marginRight: "10px" }}
            onClick={() => handleEdit(item)}
          />
          <MdDelete
            style={{ cursor: "pointer" }}
            onClick={() => handleDelete(item)}
          />
        </div>
      ),
    },
  ];
  useEffect(() => {
    if (props.student) {
      const currentID = props.student.id;
            // Si no hay ID, crea un nuevo estudiante con un ID único
      if (currentID == undefined) {
        const student: Student = { ...props.student, id: uuidv4() };
        setItems([...items, student]);
      } else {
                // Si el estudiante ya existe, actualiza sus datos
        const studentIndex = items.findIndex(
          (item) => item.id === props.student!.id
        );
        if (studentIndex !== -1) {
          const updatedItems = [...items];
          updatedItems[studentIndex] = { ...props.student }; // reemplazamos el estudiante
          setItems(updatedItems);
        } else {
                    // Si no se encuentra el estudiante, muestra un mensaje en la consola
          console.log("No encontramos el estudiante con ID " + studentIndex);
        }
      }
    }
  }, [props.student]);

  //Etapa 4: Borrado de un student.
  const handleDelete = (item: Student) => {
    setItems(items.filter((i) => i.id !== item.id));
    props.onStudentRemoved(item);// Notifica al componente padre
  };

 //Etapa 5: Edición de un student.
  const handleEdit = (item: Student) => {
    props.onStudentEditing(item);
  };

  return (
    <div className="enrolList">
      <DetailsList items={items} columns={columns} />
    </div>
  );
}
export default EnrolList;
