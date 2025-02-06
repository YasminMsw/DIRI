

function ProblematicComponent() {
  throw new Error("Este es un error de prueba en ProblematicComponent");
  return <div>Este texto nunca se mostrará</div>;
}

export default ProblematicComponent;
