console.log('js');

$(document).ready(()=>{
    getTask();
    clickHandlers();
}); // end document ready

function clickHandlers(){

} // end clickHandlers

//append to DOM
function appendTask(newTask){
    console.log('in appendTask', newTask);
    $('#taskList').empty();
    for (let i = 0; i < tasks.length; i++) {
        let list = newTask[i];
        let $tr = $(`<tr></tr>`);
        $tr.data('list', list);
        $tr.data('id', list.id);
        $tr.append(`<td>${list.task}</td>`);
        $tr.append(`<td><button class="deleteBtn">Delete!</button></td>`);
        $tr.append(`<td><button class="completeBtn">Completed!</button></td>`);
        $('#taskList').append($tr);
    }
}

//POST
function addTask(){
    //create new task as objectToSend
    let objectToSend = {
        objectToSend: $('#task').val(),
    };
    console.log(objectToSend);
    //deliver objectToSend through AJAX
    $.ajax({
        type:'POST',
        url: '/task',
        date: objectToSend
    }).then(function(response){
        $('#task-in').val('');
        console.log('response from server.', response);
        // ADD FUNCTION FROM GET HERE
        getTask();
    }).catch(function(error){
        console.log('Error in Client POST', error)
        alert('unable to add new task at this time. See console for details');
})

//GET
function getTask(){
    $.ajax({
        type: 'GET',
        url: '/task'
    }).then(function(response) {
        console.log('in THEN GET', response);
        appendTask(response);
    }).catch(function(error) {
        alert(console.log('error in GET', error));
    });
}

//PUT
function clickComplete(){
    let id = $(this).closest('tr').data('id')
    $.ajax({
        method: 'PUT',
        url: `/task/${id}`
    }).then(function(response){
        console.log('back from PUT with:', response);
        getTask();
    }).catch(function(error){
        alert('something went wrong in PUT CLIENT');
        console.log(error);
    });
}

//DELETE