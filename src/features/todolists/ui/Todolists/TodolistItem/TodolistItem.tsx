import type {Todolist} from '@/app/App'
import {CreateItemForm} from '@/common/components/CreateItemForm/CreateItemForm'
import {useAppDispatch} from "@/common/hooks/useAppDispatch";
import {createTaskAC} from "@/features/todolists/model/tasks-reducer";
import {TodolistTitle} from "@/features/todolists/ui/Todolists/TodolistItem/TodolistTitle/TodolistTitle";
import {Tasks} from "@/features/todolists/ui/Todolists/TodolistItem/Tasks/Tasks";
import {FilterButtons} from "@/features/todolists/ui/Todolists/TodolistItem/FilterButtons/FilterButtons";
import styles from "./TodolistTitle/TodolistTitle.module.css"

type Props = {
  todolist: Todolist
}

export const TodolistItem = ({todolist}: Props) => {
  const {id} = todolist

  const dispatch = useAppDispatch()

  const createTaskHandler = (title: string) => {
    dispatch(createTaskAC({todolistId:id, title}))
  }
  return (
      <div>
        <div className={styles.container}>
         <TodolistTitle todolist={todolist}/>
        </div>
        <CreateItemForm onCreateItem={createTaskHandler}/>
        <Tasks todolist={todolist}/>
        <FilterButtons todolist={todolist}/>
      </div>
  )
}
