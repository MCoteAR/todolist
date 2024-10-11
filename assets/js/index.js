
let tareas = [
    { id: 1, descripcion: "Aprender HTML", completada: false },
    { id: 2, descripcion: "Estudiar CSS", completada: false },
    { id: 3, descripcion: "Practicar JavaScript", completada: false }
];


const inputTarea = document.getElementById('nuevaTarea');
const agregarTareaBtn = document.getElementById('agregarTareaBtn');
const listaTareas = document.getElementById('listaTareas');
const totalTareasElem = document.getElementById('totalTareas');
const tareasCompletadasElem = document.getElementById('tareasCompletadas');


function renderizarTareas() {
    listaTareas.innerHTML = ''; // Limpiar la lista antes de renderizar
    tareas.forEach((tarea, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="${tarea.completada ? 'completed' : ''}">${tarea.descripcion}</span>
            <button onclick="eliminarTarea(${index})">Eliminar</button>
            <button onclick="cambiarEstado(${index})">Cambiar</button>
        `;
        listaTareas.appendChild(li);
    });
    actualizarResumen();
}

// Función para actualizar el resumen
function actualizarResumen() {
    const total = tareas.length;
    const completadas = tareas.filter(tarea => tarea.completada).length;
    totalTareasElem.textContent = total;
    tareasCompletadasElem.textContent = completadas;
}


function agregarTarea() {
    const descripcion = inputTarea.value;
    if (descripcion.trim() !== '') {
        const nuevaTarea = {
            id: tareas.length + 1,
            descripcion: descripcion,
            completada: false
        };
        tareas.push(nuevaTarea);
        inputTarea.value = ''; 
        renderizarTareas();
    }
}


function eliminarTarea(index) {
    tareas.splice(index, 1);
    renderizarTareas();
}


function cambiarEstado(index) {
    tareas[index].completada = !tareas[index].completada;
    renderizarTareas();
}


agregarTareaBtn.addEventListener('click', agregarTarea);


renderizarTareas();
