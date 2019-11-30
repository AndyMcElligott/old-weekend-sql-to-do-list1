console.log('js');

$(document).ready(()=>{
    getNewTask();
    clickHandlers();
}); // end document ready

function clickHandlers(){

} // end clickHandlers

//append to DOM

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

    }).catch(function(error){
        console.log('Error in Client POST', error)
        alert('unable to add new task at this time. See console for details')
}


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

//DELETE