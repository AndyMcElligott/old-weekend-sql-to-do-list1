// $(document).ready(()=>{
//     //console.log('JQ');
//     getNewTask();
//     clickHandlers();
// }); // end doc ready

// function clickHandlers(){
//     //$('#submitTask').on('click', submitTask)
//     $('#viewAllTasks').on('click', '.delete', clickDelete) // links to DELETE
//     $('#viewAllTasks').on('click', '.complete', clickComplete) // links to PUT
//     $('#submitTask').on('click', function(){
//         console.log('in submitTask button on click');
//         // get user input and put in an object
//         // object
//         let objectToSend = {
//             task: $('#taskIn').val()
//         };
//         // call submitTask with the new object
//         submitTask(objectToSend)
//     })
// }

// // function handleSubmitTask(){
// //     console.log('Clicked the submit button');
// //     let task = {}
// //     task.task = $('#taskIn').val()
// //     submitTask(task);
// // }

// // POST
// function submitTask(objectToSend){
//     //const task = $('#taskIn').val();
//     $.ajax({
//         method: 'POST',
//         url: '/tasks',
//         data: objectToSend
//     })
//         .then(function(response){
//             $('#taskIn').val('');
//             console.log('response from server.', response);
//             getNewTask();
//     })
//         .catch(function(error){
//             console.log('Error in Client POST', error)
//             alert('unable to add new task at this time. See console for details')
//     });
// }

// //Append to the DOM
// function appendTask(aTask){ // was task changed to response
//     console.log('in appendTask', aTask);
//     $('#viewAllTasks').empty();

//     for(let i=0; i<aTask.length; i++){
//         let task = aTask[i]; // changed to response[i] from task[i]
//         let $tr = (`<tr></tr>`)
//         $tr.data('task', task);
//         $tr.data('id', task.id);
//         $tr.append(`<td>${task.task}</td>`)
//         $tr.append(`<td>${task.complete}</td>`)
//         $tr.append(`<td><input="checkbox" class="complete">Compete</td>`) // Complete checkbox
//         $tr.append(`<td><button class="delete">Delete</td>`) // Delete button
//         $('#viewAllTasks').append($tr)
//     }

//     // console.log('in appendTask', array);
//     // const spot = $('#viewAllTasks');
//     // spot.empty();

//     // for(let item of array){
//     //     let checked = ''; //
//     //     let complete = '';
//     //     if (item.complete==='true'){
//     //         checked = 'checked';
//     //         completed = 'complete';
//     //     }
//     //     const el = $(`
//     //         <tr class="task-item ${complete}"><td><input="checkbox" class="complete" ${checked}></td></tr>
//     //         <tr><td>${item.task}</td></tr>
//     //         <tr><td><button class="delete">Delete</td></tr>
//     //     `);
//     //     el.data('task', item);
//     //     spot.append(el);
//     // }
// }

// // delete
// function clickDelete(){
//     console.log('in clickDelete');
//     const id = $(this).closest('tr').data('id');

//     $.ajax({
//         method: 'DELETE',
//         url: `/tasks/${id}`
//     })
//         .then(function(response){
//            getNewTask();
//     })
//         .catch(function(error){
//             alert('Error deleting a task. See the console for details.')
//             console.log('error in clickDelete',error);
//     })
// }

// // GET
// function getNewTask(){
//     //console.log('in getNewTask GET');
//     //ajax call to server to get tasks
//     $.ajax({
//         method: 'GET',
//         url: '/tasks'
//     }).then(function(response){
//             console.log('in /task GET', response);
//             appendTask(response);
//     }).catch(function(error){
//             alert('see console for details ya filthy animal')
//             console.log(error);
//     });
// } // end getNewTask

// // put
// function clickComplete(){
//     let id = $(this).closest('tr').data('id')
//     $.ajax({
//         method: 'PUT',
//         url: `/tasks/${id}`
//     }).then(function(response){
//         getNewTask();
//     }).catch(function(error){
//         alert('something went wrong')
//         console.log(error);
//     });
// }
