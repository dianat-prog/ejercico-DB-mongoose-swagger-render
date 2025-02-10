module.exports={
    components:{
        schemas:{
            Task:{
                type:'object',
                properties:{
                    _id:{
                        type:'objectId',
                        description: 'task identification number',
                        example: '54214Bb4fiensc456987'
                    },
                    title:{
                        type:'string',
                        description: 'Task title',
                        example: 'first task'
                        
                    },
                    completed:{
                        type:'boolean',
                        description: 'task status (completed or not)',
                        example: 'true'
                    }
            }
        }
    }
}
}