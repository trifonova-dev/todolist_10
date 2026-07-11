import type {Todolist} from "@/app/App";
import {selectTasks} from "@/features/todolists/model/tasks-selectors";
import {useAppSelector} from "../../../../../../common/hooks/useAppSelector";
import {List} from "@mui/material";
import {TasksItem} from "@/features/todolists/ui/Todolists/TodolistItem/Tasks/TasksItem/TasksItem";

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
                        <TasksItem key={task.id} task={task} todolistId={id}/>
                    ))}
                </List>
            )}
        </div>
    );
};
