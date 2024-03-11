const listaTarifas=[];


const loadTarifas= async()=>{
   
    try{
        listaTarifas.length=0;
        const respuesta=await fetch('http://localhost:3000/tarifas');

        if(!respuesta.ok){
           throw new Error('Error al cargar tarifa. Estado: ',respuesta.status);
        }
        const Tarifas=await respuesta.json();
        listaTarifas.push(...Tarifas);

    }catch(error){
        console.error("Error al cargar Tarifas",error.message);
    }
}

const cargarTarifasTabla=()=>{
    const tarifaInput=document.getElementById("tablaTarifas");
    let datos = '';
    for ( const tarifa of listaTarifas){
        datos+=`<tr>

        <td>${tarifa.id}</td>
        <td>${tarifa.costo_credito}</td>
        <td>${tarifa.periodo_id}</td>
        <td>${tarifa.programa_id}</td>


        </tr>`
    }
    console.log(datos)

    tarifaInput.innerHTML=datos;


}