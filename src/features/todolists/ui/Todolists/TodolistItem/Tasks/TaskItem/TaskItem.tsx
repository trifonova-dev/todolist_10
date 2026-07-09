import {Checkbox, IconButton, ListItem} from "@mui/material";
import {useAppDispatch} from "@/common/hooks/useAppDispatch";
import {changeTaskStatusAC, changeTaskTitleAC, deleteTaskAC} from "@/features/todolists/model/tasks-reducer";
import {EditableSpan} from "../../../../../../../common/components/EditableSpan/EditableSpan";
import DeleteIcon from "@mui/icons-material/Delete";
import type {Task} from "@/app/App";
import type {ChangeEvent} from "react";
import {getListItemSx} from "@/features/todolists/ui/Todolists/TodolistItem/Tasks/TaskItem/TaskItem.styles";


type Props = {
    todolistId:string
    task:Task
}

export const TaskItem = ({todolistId, task}: Props) => {

    const dispatch = useAppDispatch()
    const deleteTaskHandler = () => {
        dispatch(deleteTaskAC({todolistId, taskId: task.id}))
    }

    const changeTaskStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newStatusValue = e.currentTarget.checked
        dispatch(changeTaskStatusAC({todolistId, taskId: task.id, isDone: newStatusValue}))
    }

    const changeTaskTitleHandler = (title: string) => {
        dispatch(changeTaskTitleAC({todolistId, taskId: task.id, title}))
    }
    return (
        <ListItem sx={getListItemSx(task.isDone)}>
            <div>
                <Checkbox checked={task.isDone} onChange={changeTaskStatusHandler}/>
                <EditableSpan value={task.title} onChange={changeTaskTitleHandler}/>
            </div>
            <IconButton onClick={deleteTaskHandler}>
                <DeleteIcon/>
            </IconButton>
        </ListItem>
    )
}

