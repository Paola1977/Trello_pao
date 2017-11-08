function PrimerLi()
{
    //var texto=document.getElementById('liname').value;
    //var li=document.createElement('LI');
    //li.innerHTML=texto==''?'(nada)':texto;
    var node = document.createElement("li");
    node.innerHTML = "<span class=\"primer-input\" id=\"primero\" type=\"text\" onclick=\"OtrosLi()\">Añadir tarjeta....</span>"
    
    //"<input class=\"field\" placeholder=\"Añadir una tarjeta..\" id=\"primero\"  type=\"text\" />"
    document.getElementById('lista').appendChild(node);
}

function OtrosLi()
{
    //var texto=document.getElementById('liname').value;
    //var li=document.createElement('LI');
    //li.innerHTML=texto==''?'(nada)':texto;
    //node.innerHTML = "<ul id=\"lista2\"></ul>"
    var ul = document.getElementById("lista2");
    var li = document.createElement("li");
    node.innerHTML = "<input size=\"3\">"
    document.getElementById('lista2').appendChild(node);
}

function borrar()
{
    lis=document.getElementById('lista').getElementsByTagName('li');
    for(var i=0; i<lis.length;i++){
        lis[i].onclick=function(){
            if(confirm('¿Borrar este li?'))
            this.parentNode.removeChild(this);
        };
    }
    
}