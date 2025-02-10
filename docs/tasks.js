module.exports ={
    paths:{
       "/create":{
        post:{
            tags:{
                Tasks: 'Create a new Task'
            },
            description: 'Create Task',
            responses:{
                201:{
                    description: 'Task successfully created',
                } ,
                500:{
                    description: 'There was a problem trying to create a task',
                } ,
               }
        }
       
       },

       "/":{
        get:{
            tags:{
                Tasks: 'list of all tasks'
            },
            description: 'Gets the list of all tasks',
        }
       
       },

       "/id/:_id":{
        put:{
            tags:{
                Tasks: 'update a Task'
            },
            description: 'update Task',
            responses:{
                201:{
                    description: 'update a task',
                } ,
                500:{
                    description: 'There was a problem trying to create a task',
                } ,
               }
        }
      
       },

       "/id/:_id:":{
        delete:{
            tags:{
                Tasks: 'delete a Task'
            },
            description: 'Delete a Task',
            responses:{
                201:{
                    description: 'task deleted',
                } ,
                500:{
                    description: 'There was a problem trying to delete a task',
                } ,
               }
        }
    
       }
    }
}



