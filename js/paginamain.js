const homeInput = document.getElementById('home')
const pagPeriodosInput = document.getElementById('pagPeriodos')
const pagDepartamentosInput = document.getElementById('pagDepartamentos')
const pagProgramasInput = document.getElementById('pagProgramas')
const pagTarifasInput = document.getElementById('pagTarifas')
const pagCursosInput = document.getElementById('pagCursos')
const pagSalonesInput = document.getElementById('pagSalones')
const formAlumnosInput = document.getElementById('formAlumnos')
const formDocentesInput = document.getElementById('formDocentes')
const formAsignaturasInput = document.getElementById('formAsignaturas')
const formMatriculasInput = document.getElementById('formMatriculas')
const pagReportesInput = document.getElementById('pagReportes')
const formHorariosInput = document.getElementById('formHorarios')
const listaEstudiantesInput = document.getElementById('listaEstudiantes')
const listaProfesoresInput = document.getElementById('listaProfesores')







const paginaPrincipal=()=>{
    homeInput.style.display="block";
    pagPeriodosInput.style.display="none";
    pagDepartamentosInput.style.display="none";
    pagProgramasInput.style.display="none";
    pagTarifasInput.style.display="none";
    pagCursosInput.style.display="none";
    pagSalonesInput.style.display="none";
    formAlumnosInput.style.display="none";
    formDocentesInput.style.display="none";
    formAsignaturasInput.style.display="none";
    formMatriculasInput.style.display="none";
    pagReportesInput.style.display="none";
    formHorariosInput.style.display="none";
    listaEstudiantesInput.style.display="none";
    listaProfesoresInput.style.display="none";

    cargarMatriculasTabla()
}


const paginaDepartamentos=()=>{
    homeInput.style.display="none";
    pagDepartamentosInput.style.display="block";
    pagPeriodosInput.style.display="none";
    pagProgramasInput.style.display="none";
    pagTarifasInput.style.display="none";
    pagCursosInput.style.display="none";
    pagSalonesInput.style.display="none";
    formAlumnosInput.style.display="none";
    formDocentesInput.style.display="none";
    formAsignaturasInput.style.display="none";
    formMatriculasInput.style.display="none";
    pagReportesInput.style.display="none";
    formHorariosInput.style.display="none";
    listaEstudiantesInput.style.display="none";
    listaProfesoresInput.style.display="none";
    
    

    cargarDepartamentosTabla()
}

const paginaProgramas=()=>{
    homeInput.style.display="none";
    pagDepartamentosInput.style.display="none";
    pagPeriodosInput.style.display="none";
    pagProgramasInput.style.display="block";
    pagTarifasInput.style.display="none";
    pagCursosInput.style.display="none";
    pagSalonesInput.style.display="none";
    formAlumnosInput.style.display="none";
    formDocentesInput.style.display="none";
    formAsignaturasInput.style.display="none";
    formMatriculasInput.style.display="none";
    pagReportesInput.style.display="none";
    formHorariosInput.style.display="none";
    listaEstudiantesInput.style.display="none";
    listaProfesoresInput.style.display="none";
    

    cargarProgramasTabla()
}

const paginaPeriodos=()=>{
    homeInput.style.display="none";
    pagDepartamentosInput.style.display="none";
    pagPeriodosInput.style.display="block";
    pagProgramasInput.style.display="none";
    pagTarifasInput.style.display="none";
    pagCursosInput.style.display="none";
    pagSalonesInput.style.display="none";
    formAlumnosInput.style.display="none";
    formDocentesInput.style.display="none";
    formAsignaturasInput.style.display="none";
    formMatriculasInput.style.display="none";
    pagReportesInput.style.display="none";
    formHorariosInput.style.display="none";
    listaEstudiantesInput.style.display="none";
    listaProfesoresInput.style.display="none";
    

    cargarPeriodosTabla()
}

const paginaCursos=()=>{
    homeInput.style.display="none";
    pagDepartamentosInput.style.display="none";
    pagPeriodosInput.style.display="none";
    pagProgramasInput.style.display="none";
    pagTarifasInput.style.display="none";
    pagCursosInput.style.display="block";
    pagSalonesInput.style.display="none";
    formAlumnosInput.style.display="none";
    formDocentesInput.style.display="none";
    formAsignaturasInput.style.display="none";
    formMatriculasInput.style.display="none";
    pagReportesInput.style.display="none";
    formHorariosInput.style.display="none";
    listaEstudiantesInput.style.display="none";
    listaProfesoresInput.style.display="none";
    

    cargarCursosTabla()
}

const paginaTarifas=()=>{
    homeInput.style.display="none";
    pagDepartamentosInput.style.display="none";
    pagPeriodosInput.style.display="none";
    pagProgramasInput.style.display="none";
    pagTarifasInput.style.display="block";
    pagCursosInput.style.display="none";
    pagSalonesInput.style.display="none";
    formAlumnosInput.style.display="none";
    formDocentesInput.style.display="none";
    formAsignaturasInput.style.display="none";
    formMatriculasInput.style.display="none";
    pagReportesInput.style.display="none";
    formHorariosInput.style.display="none";
    listaEstudiantesInput.style.display="none";
    listaProfesoresInput.style.display="none";
    

    cargarTarifasTabla()
}

const paginaSalones=()=>{
    homeInput.style.display="none";
    pagDepartamentosInput.style.display="none";
    pagPeriodosInput.style.display="none";
    pagProgramasInput.style.display="none";
    pagTarifasInput.style.display="none";
    pagCursosInput.style.display="none";
    pagSalonesInput.style.display="none";
    formAlumnosInput.style.display="none";
    formDocentesInput.style.display="none";
    formAsignaturasInput.style.display="none";
    pagSalonesInput.style.display="block";
    formMatriculasInput.style.display="none";
    pagReportesInput.style.display="none";
    formHorariosInput.style.display="none";
    listaEstudiantesInput.style.display="none";
    listaProfesoresInput.style.display="none";
    

    cargarSalonesTabla()
}

const formAlumnos=()=>{
    homeInput.style.display="none";
    pagDepartamentosInput.style.display="none";
    pagPeriodosInput.style.display="none";
    pagProgramasInput.style.display="none";
    pagTarifasInput.style.display="none";
    pagCursosInput.style.display="none";
    pagSalonesInput.style.display="none";
    formAlumnosInput.style.display="block";
    formDocentesInput.style.display="none";
    formAsignaturasInput.style.display="none";
    pagSalonesInput.style.display="none";
    formMatriculasInput.style.display="none";
    pagReportesInput.style.display="none";
    formHorariosInput.style.display="none";
    listaEstudiantesInput.style.display="none";
    listaProfesoresInput.style.display="none";
    

    cargarProgramasAlum()
}


const formDocentes=()=>{
    homeInput.style.display="none";
    pagDepartamentosInput.style.display="none";
    pagPeriodosInput.style.display="none";
    pagProgramasInput.style.display="none";
    pagTarifasInput.style.display="none";
    pagCursosInput.style.display="none";
    pagSalonesInput.style.display="none";
    formAlumnosInput.style.display="none";
    formDocentesInput.style.display="block";
    formAsignaturasInput.style.display="none";
    pagSalonesInput.style.display="none";
    formMatriculasInput.style.display="none";
    pagReportesInput.style.display="none";
    formHorariosInput.style.display="none";
    listaEstudiantesInput.style.display="none";
    listaProfesoresInput.style.display="none";
    

    cargarDepartamentos()
    
}

const formAsignaturas=()=>{
    homeInput.style.display="none";
    pagDepartamentosInput.style.display="none";
    pagPeriodosInput.style.display="none";
    pagProgramasInput.style.display="none";
    pagTarifasInput.style.display="none";
    pagCursosInput.style.display="none";
    pagSalonesInput.style.display="none";
    formAlumnosInput.style.display="none";
    formDocentesInput.style.display="none";
    formAsignaturasInput.style.display="block";
    pagSalonesInput.style.display="none";
    formMatriculasInput.style.display="none";
    pagReportesInput.style.display="none";
    formHorariosInput.style.display="none";
    listaEstudiantesInput.style.display="none";
    listaProfesoresInput.style.display="none";
    

    cargarProgramas()
    cargarCursos()
    cargarProfesoresp()
    agregarHorario()
    agregarHorario()
}


const formMatriculas=()=>{
    homeInput.style.display="none";
    pagDepartamentosInput.style.display="none";
    pagPeriodosInput.style.display="none";
    pagProgramasInput.style.display="none";
    pagTarifasInput.style.display="none";
    pagCursosInput.style.display="none";
    pagSalonesInput.style.display="none";
    formAlumnosInput.style.display="none";
    formDocentesInput.style.display="none";
    formAsignaturasInput.style.display="none";
    pagSalonesInput.style.display="none";
    formMatriculasInput.style.display="block";
    pagReportesInput.style.display="none";
    formHorariosInput.style.display="none";
    listaEstudiantesInput.style.display="none";
    listaProfesoresInput.style.display="none";
    

    cargarEstudiantesp()
    cargarAsignaturas()
    cargarPeriodos()
}

const paginaReportes=()=>{
    homeInput.style.display="none";
    pagDepartamentosInput.style.display="none";
    pagPeriodosInput.style.display="none";
    pagProgramasInput.style.display="none";
    pagTarifasInput.style.display="none";
    pagCursosInput.style.display="none";
    pagSalonesInput.style.display="none";
    formAlumnosInput.style.display="none";
    formDocentesInput.style.display="none";
    formAsignaturasInput.style.display="none";
    pagSalonesInput.style.display="none";
    formMatriculasInput.style.display="none";
    pagReportesInput.style.display="block";
    formHorariosInput.style.display="none";
    listaEstudiantesInput.style.display="none";
    listaProfesoresInput.style.display="none";
    

    cargarReportesTabla()

}

const formHorarios=()=>{
    homeInput.style.display="none";
    pagDepartamentosInput.style.display="none";
    pagPeriodosInput.style.display="none";
    pagProgramasInput.style.display="none";
    pagTarifasInput.style.display="none";
    pagCursosInput.style.display="none";
    pagSalonesInput.style.display="none";
    formAlumnosInput.style.display="none";
    formDocentesInput.style.display="none";
    formAsignaturasInput.style.display="none";
    pagSalonesInput.style.display="none";
    formMatriculasInput.style.display="none";
    pagReportesInput.style.display="none";
    formHorariosInput.style.display="block";
    listaEstudiantesInput.style.display="none";
    listaProfesoresInput.style.display="none";
    

    cargarEstudiantesR()
    
}

const listaEstudiantes=()=>{
    homeInput.style.display="none";
    pagDepartamentosInput.style.display="none";
    pagPeriodosInput.style.display="none";
    pagProgramasInput.style.display="none";
    pagTarifasInput.style.display="none";
    pagCursosInput.style.display="none";
    pagSalonesInput.style.display="none";
    formAlumnosInput.style.display="none";
    formDocentesInput.style.display="none";
    formAsignaturasInput.style.display="none";
    pagSalonesInput.style.display="none";
    formMatriculasInput.style.display="none";
    pagReportesInput.style.display="none";
    formHorariosInput.style.display="none";
    listaEstudiantesInput.style.display="block";
    listaProfesoresInput.style.display="none";
    

    cargarEstudiantes()

}


const listaProfesores=()=>{
    homeInput.style.display="none";
    pagDepartamentosInput.style.display="none";
    pagPeriodosInput.style.display="none";
    pagProgramasInput.style.display="none";
    pagTarifasInput.style.display="none";
    pagCursosInput.style.display="none";
    pagSalonesInput.style.display="none";
    formAlumnosInput.style.display="none";
    formDocentesInput.style.display="none";
    formAsignaturasInput.style.display="none";
    pagSalonesInput.style.display="none";
    formMatriculasInput.style.display="none";
    pagReportesInput.style.display="none";
    formHorariosInput.style.display="none";
    listaEstudiantesInput.style.display="none";
    listaProfesoresInput.style.display="block";
    

    cargarProfesores()

}

const tablaAsignaturas=()=>{
    homeInput.style.display="none";
    pagDepartamentosInput.style.display="none";
    pagPeriodosInput.style.display="none";
    pagProgramasInput.style.display="none";
    pagTarifasInput.style.display="none";
    pagCursosInput.style.display="none";
    pagSalonesInput.style.display="none";
    formAlumnosInput.style.display="none";
    formDocentesInput.style.display="none";
    formAsignaturasInput.style.display="none";
    pagSalonesInput.style.display="none";
    formMatriculasInput.style.display="none";
    pagReportesInput.style.display="none";
    formHorariosInput.style.display="none";
    listaEstudiantesInput.style.display="none";
    listaProfesoresInput.style.display="none";
    tablaAsignaturasInput.style.display="block";

    cargarProfesores()

}

