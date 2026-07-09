import type {ChangeEvent} from "react";
import {useAppDispatch} from "../../../../../../../common/hooks/useAppDispatch";
import {changeTaskStatusAC, changeTaskTitleAC, deleteTaskAC} from "@/features/todolists/model/tasks-reducer";
import {Checkbox, IconButton, ListItem} from "@mui/material";
import type {Task} from "@/app/App";
import {EditableSpan} from "@/common/components/EditableSpan/EditableSpan";
import DeleteIcon from "@mui/icons-material/Delete";
import {getListItemSx} from "@/features/todolists/ui/Todolists/TodolistItem/Tasks/TaskItem/TaskItem.styles";


type Props = {
    task:Task
    todolistId: string
}

export const TaskItem = ({task,todolistId}: Props) => {

    const dispatch = useAppDispatch()

    const changeTaskStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newStatusValue = e.currentTarget.checked
        dispatch(changeTaskStatusAC({todolistId, taskId:task.id, isDone:newStatusValue}))
    }
    const deleteTaskHandler = () => {
        dispatch(deleteTaskAC({todolistId, taskId: task.id}))
    }

    const changeTaskTitleHandler = (title: string) => {
        dispatch(changeTaskTitleAC({todolistId, taskId: task.id, title}))
    }

    return (
            <ListItem sx={getListItemSx(task.isDone)}>
                <div>
                    <Checkbox checked={task.isDone} onChange={changeTaskStatusHandler}/>
                    <EditableSpan value={task.title} onChange={changeTaskTitleHandler} />
                </div>
                <IconButton onClick={deleteTaskHandler}>
                    <DeleteIcon />
                </IconButton>
            </ListItem>
    );
};

