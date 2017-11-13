//creo botton añadir lista
var btn = document.createElement("button");
//agrego nombre id al button
btn.setAttribute('id', 'btn');
//pongo texto al boton
btn.innerHTML = "Añadir una Lista...";

// tomo contenedor div
var saveListName = document.getElementById("addListName");

//pongo el boton en el div contenedor saveListName
saveListName.appendChild(btn);

//llamo al elemento boton añadir lista
var btn = document.getElementById("btn");

// tomo contenedor div
var saveListName = document.getElementById("addListName");


// asigno evento al boton agregar lista
btn.addEventListener('click', function () {
 console.log("funciona el boton"); //probando funcionamiento

//saco el elemento boton añadir lista 
 saveListName.removeChild(btn);

// agrego padding al div addListName
addListName.style.padding = "0.3em";

//creo un elemento input
var inputName = document.createElement("input");
    
//pongo nombre id al input
    inputName.setAttribute("id", "inputName");

//pongo el texto de ejemplo en el input
    inputName.setAttribute('placeholder', 'Añadir una Lista...');

//pongo el input en el div contenedor addListName
    saveListName.appendChild(inputName);

//poner focus en el input
    document.getElementById("inputName").focus();


//creo  boton guardar 
    var btnSaveName = document.createElement("button");

//agrego nombre id al button
    btnSaveName.setAttribute('id','btnSaveName');

//pongo texto al boton
    btnSaveName.innerHTML = "Guardar";

//pongo el boton en el div contenedor saveListName
    saveListName.appendChild(btnSaveName);

//creo boton x
var xButton = document.createElement("button");

//agrego nombre id al button
xButton.setAttribute('id', 'xButton');

//agrego elementos mediante innerHTML
   xButton.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>';

//pongo el xboton en el div contenedor saveListName
    saveListName.appendChild(xButton);
    

//llamo al x boton 
    var btnXbutton = document.getElementById("xButton");

//activo función para xboton 
btnXbutton.addEventListener('click', function () {
        console.log("botonX");

//pongo el btn en el div contenedor saveListName
        saveListName.replaceChild(btn, inputName);
        saveListName.replaceChild(btn, btnSaveName);
        saveListName.replaceChild(btn, btnXbutton);
        addListName.style.padding = "0";
    })

// asigno evento al boton guardar nombre de lista:
    var btnSaveName = document.getElementById("btnSaveName");

//funcion guardar nombre de lista
        btnSaveName.addEventListener('click', function () {
            console.log("funcion nombre lista"); //probando funcionamiento
//tomar el texto del input
  var nameList = document.getElementById("inputName").value;
    console.log(nameList);

//crear div padre que tenga el nombre
            var divNameList = document.createElement('div');
//agregar clase al div
            divNameList.setAttribute("class", "nameList");
//crea elemento p para el nombre de lista desde input
            var titleList = document.createElement('h3');
//crea nodo de texto para el nombre de lista desde input
            var nodeNameList = document.createTextNode(nameList);
            console.log(nodeNameList + "probando"); //probando funcionamiento
//poner nodo de texto como hijo del elemento h3 titleList
            titleList.appendChild(nodeNameList);
//poner titleList como hijo de divNameList
            divNameList.appendChild(titleList);
//poner divNameList como hijo de addListName
            addListName.appendChild(divNameList);
//poner arriba el titulo
            addListName.insertBefore(divNameList, inputName);

            //valida que textarea tenga un mensaje
            if (nameList.length == 0 || nameList == null) {
                return false;
            };

            //crear elemento boton
            var btnNewCard = document.createElement("button");

            //agrego nombre id al button
            btnNewCard.setAttribute('id', 'btnNewCard');
            //pongo texto al boton
            btnNewCard.innerHTML = "Añadir una Tarjeta...";
            
            //pongo el boton en el div contenedor 
            saveListName.appendChild(btnNewCard);
            
            //elimino input y boton guardar y x
            addListName.removeChild(inputName);
            addListName.removeChild(btnSaveName);
            addListName.removeChild(btnXbutton);

            //asigno un evento al boton añadir una tarjeta
            var newCard = document.getElementById("btnNewCard");

                //funcion guardar nueva tarjeta
                newCard.addEventListener('click', function () {
                console.log("nueva tarjeta") //probando funcionamiento
                
                    //saco el elemento boton añadir tarjeta 
                    addListName.removeChild(newCard);
                
                    //creo un elemento textarea
                    var textAreaCard = document.createElement("textarea");
                    //pongo nombre id al textarea
                    textAreaCard.setAttribute("id", "textAreaCard");


                    //creo un div para guardar el textarea
                    var divTextCard = document.createElement("div");
                    //agregar clase al div
                    divTextCard.setAttribute("class", "newCards");
                    //agregar id al div
                    divTextCard.setAttribute("id", "divTextCard");
                    //pongo el textarea en el div contenedor divTextCard
                    divTextCard.appendChild(textAreaCard);
                    //pongo divTexCard en el elemento padre addNewList
                    addListName.appendChild(divTextCard);

                    // creo el boton añadir
                     var addCardButton = document.createElement("button");
                     //agrego nombre id al button
                     addCardButton.setAttribute('id', 'addCardButton');
                     //pongo texto al boton
                     addCardButton.textContent = "Añadir";
                     //pongo el boton en el div contenedor addListName
                     saveListName.appendChild(addCardButton);

                    //llamo al boton guardar nueva tarjeta 
                    var btnSaveNewCard = document.getElementById("addCardButton");

                    //pongo el xboton en el div contenedor saveListName
                    saveListName.appendChild(xButton);

                    //llamo al x boton 
                    var btnXbutton = document.getElementById("xButton");

                    //activo función para xboton 
                    btnXbutton.addEventListener('click', function () {
                        console.log("botonX");
                        //reemplazo elementos: 
                        saveListName.replaceChild(btnNewCard, addCardButton);
                        saveListName.replaceChild(btnNewCard, btnXbutton);
                        saveListName.replaceChild(btnNewCard, divTextCard);
                    })

                    //poner focus en el textArea
                    document.getElementById("textAreaCard").focus();
                    
                    //creo función para el boton guardar
                    btnSaveNewCard.addEventListener('click', function () {                            
                        //tomar texto del textarea
                        var textAreaCardValue = document.getElementById("textAreaCard").value;
                        console.log("textAreaCardValue " + textAreaCardValue); //probando funcionamiento

                        //limpiar el textarea 
                        document.getElementById("textAreaCard").value = "";
            
                        //creamos el div que contiene cada tarjeta
                        var divNewCards = document.createElement("div");
                        //agregar clase al div
                        divNewCards.setAttribute("class", "newCards");

                        //creo los nodos de texto para guardar cada tarjeta
                        var nodetextNewCards = document.createTextNode(textAreaCardValue);
                        //creo el elemento p para los textos de la tarjeta
                        var textPCard = document.createElement('p');
                        
                        //poner nodo de texto como hijo del elemento p
                        textPCard.appendChild(nodetextNewCards);
                        //poner texPcard como hijo de divNewCards
                        divNewCards.appendChild(textPCard);
                        //poner divNewCards como hijo de addListName
                        addListName.appendChild(divNewCards);
                        //poner arriba el texto de la nueva tarjeta
                        addListName.insertBefore(divNewCards, divTextCard);
                      })
                });
        });
});