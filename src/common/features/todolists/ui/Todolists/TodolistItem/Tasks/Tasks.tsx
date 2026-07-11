import type {Todolist} from "@/app/App";
import {useAppSelector} from "../../../../../../hooks/useAppSelector";
import {selectTasks} from "@/common/features/todolists/model/tasks-selectors";
import {List} from "@mui/material";
import {TaskItem} from "@/common/features/todolists/ui/Todolists/TodolistItem/Tasks/TaskItem/TaskItem";

type Props = {
    todolist: Todolist
}

export const Tasks = ({todolist}: Props) => {
    const {id, filter} = todolist
    const tasks = useAppSelector(selectTasks)

    const todolistTasks = tasks[id]
    let filteredTasks = todolistTasks
    if (filter === 'active') {
        filteredTasks = todolistTasks.filter(task => !task.isDone)
    }
    if (filter === 'completed') {
        filteredTasks = todolistTasks.filter(task => task.isDone)
    }

    return (
        <div>
            {filteredTasks.length === 0 ? (
                <p>Тасок нет</p>
            ) : (
                <List>
                    {filteredTasks.map(task => (
                        <TaskItem key={task.id} task={task} todolistId={id}/>
                    ))}
                </List>
            )}
        </div>
    );
};
