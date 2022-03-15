export interface TaskEntity {
    id: string,
    title: string,
    description: string,
    status: TaskStatusEntity,
}

export interface TaskStatusEntity {
    id: string,
    text: string,
    canShow: string[] 
}