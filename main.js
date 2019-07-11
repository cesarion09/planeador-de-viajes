document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.inputTareas')
        .addEventListener('keyup', event => {
            if (event.keyCode === 13) {
                let tarea = document.createElement('div');
                let linea = document.createElement('hr');
                tarea.innerText = '';
                let titulo = document.createElement('h4');
                titulo.innerText = event.target.value;
                event.target.value = ""

                let descriptionTarea = document.createElement('input')
                let listaSubtareas = document.createElement('ol')

                titulo.setAttribute('contenteditable', 'true');
                descriptionTarea.addEventListener('keyup', event => {
                    if (event.keyCode === 13) {
                        let subtareas = document.createElement('li')
                        subtareas.innerText = event.target.value;
                        event.target.value = ""
                        listaSubtareas.appendChild(subtareas)
                    }
                })
                let completedButton = document.createElement('button');
                completedButton.innerText = ' 👌🏽';
                completedButton.addEventListener('click', event => {
                    event.target.parentNode.classList.toggle('completed')
                });
                let dateActivitie = document.createElement('span');
                dateActivitie.innerText = 'fecha y lista de actividades';
                dateActivitie.style.fontSize = '1em';
                dateActivitie.style.color = 'red';
                let calendarButton = document.createElement('button');
                let tFecha = document.createElement('h4');
                tFecha .innerText = 'fecha';
                let inputDate = document.createElement('input');
                inputDate.setAttribute('type', 'date');
                inputDate.style.display = 'none';
                calendarButton.innerText = ' 📅 ';
                calendarButton.addEventListener('click', event => {
                    inputDate.style.display = 'block';
                })

                let delateButton = document.createElement('button');
                delateButton.innerText = '✖️';
                delateButton.addEventListener('click', event => {
                    event.target.parentNode.remove();
                })

                
                document.querySelector('.tareas').appendChild(tarea)
                tarea.appendChild(titulo);
                tarea.appendChild(linea);
                tarea.appendChild(dateActivitie);
                tarea.appendChild(calendarButton);
                tarea.appendChild(inputDate);
                tarea.appendChild(descriptionTarea);
                tarea.appendChild(listaSubtareas);
                tarea.appendChild(delateButton);
                tarea.appendChild(tFecha);  
            };
        })

    document.querySelector('.inputLugares')
        .addEventListener('keyup', event => {
            if (event.keyCode === 13) {
                let lugar = document.createElement('div');
                lugar.innerText = event.target.value;
                event.target.value = ""
                lugar.setAttribute('contenteditable', 'true')

                let ciudadYSitios = document.createElement('span');
                ciudadYSitios.innerText = 'ciudad y/o sitios de interes';
               
                let inputPlaces = document.createElement('input');
                inputPlaces.setAttribute('type', 'text');
                let visitedButton = document.createElement('button');
                visitedButton.innerText = '👁️‍';
                visitedButton.addEventListener('click', event => {
                    event.target.parentNode.classList.toggle('completed')
                    if (visitedButton.innerText === "✅") visitedButton.innerText = '👁️‍';
                    else visitedButton.innerText = "✅";
                    if (visitedButton.innerText === "✅") event.target.parentNode;
                })

                
                let satisfactionButton = document.createElement('button');
                satisfactionButton.innerText = '😀';
                satisfactionButton.style.display = 'none';
                visitedButton.addEventListener('click', event => {
                    satisfactionButton.style.display = 'block';
                })
                satisfactionButton.addEventListener('click', event => {
                    satisfactionButton.innerText = '😦';
                    if (satisfactionButton.innerText === "😦") satisfactionButton.addEventListener('click', event => {
                        satisfactionButton.innerText = '😑';
                        if (satisfactionButton.innerText === "😑") satisfactionButton.addEventListener('click', event => {
                            satisfactionButton.innerText = '😍';
                            if (satisfactionButton.innerText === "😍") satisfactionButton.addEventListener('click', event => {
                                satisfactionButton.innerText = '😀';
                                if (satisfactionButton.innerText === "😀");

                            })
                        })
                    })

                })  
                let facebook = document.createElement('img');
                //facebook.src="../images";
                let googleMaps = document.createElement('img');
                let instagram = document.createElement('img');



                let delatelistButton = document.createElement('button');
                delatelistButton.innerText = '✖️';
                delatelistButton.addEventListener('click', event => {
                    event.target.parentNode.remove();
                });

                document.querySelector('.lugares').appendChild(lugar);
                lugar.appendChild(visitedButton);
                lugar.appendChild(ciudadYSitios);
                lugar.appendChild(inputPlaces);
                lugar.appendChild(satisfactionButton);
                lugar.appendChild(faceBook);
                lugar.appendChild(googleMaps);
                lugar.appendChild(instagram);
                lugar.appendChild(delatelistButton);
                


            }
        })
    //document.querySelector('.inputLugares')
    //.addEventListener('keyup', event => {
    //   if (event.keyCode === 13) {


    // )}
})
    