const listaPeriodos=[];


const loadPeriodos= async()=>{
   
    try{
        listaPeriodos.length=0;
        const respuesta=await fetch('http://localhost:3000/periodos');

        if(!respuesta.ok){
           throw new Error('Error al cargar periodo. Estado: ',respuesta.status);
        }
        const Periodos=await respuesta.json();
        listaPeriodos.push(...Periodos);

    }catch(error){
        console.error("Error al cargar periodos",error.message);
    }
}


const cargarPeriodosTabla=()=>{
    const periodoInput=document.getElementById("tablaPeriodos");
    let datos = '';
    for ( const periodo of listaPeriodos){
        datos+=`<tr>

        <td>${periodo.id}</td>
        <td>${periodo.codigo}</td>
        <td>${periodo.ano}</td>
        <td>${periodo.semestre}</td>


        </tr>`
    }
    console.log(datos)

    periodoInput.innerHTML=datos;


}