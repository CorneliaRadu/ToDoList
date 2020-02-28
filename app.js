//Select elements

const clear = document.querySelector(".clear");
const data = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

//Show date
const today = new Date();
options = {weekday:"long", month:"short", day:"numeric"};
data.innerHTML = today.toLocaleDateString("en-US", options);



//Function ToDo

function addToDo(toDo){
position = 'beforeend';
const item = ` 
<i class="fa fa-circle-thin co" job="complete" id="0"></i>
<p class="text">${toDo}</p>
<i class="fa fa-trash-o de" job="delete" id="0"></i>
`;



list.insertAdjacentHTML(position, item);

}

document.addEventListener('keyup', function(event){

    if(event.keyCode == 13){

        const todo = input.nodeValue;

        if(todo){
            addToDo(todo);
    }
}

});
