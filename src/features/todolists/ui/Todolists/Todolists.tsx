import {Grid, Paper} from "@mui/material";
import {selectTodolists} from "@/features/todolists/model/todolists-selectors";
import {useAppSelector} from "../../../../common/hooks/useAppSelector";
import {TodolistItem} from "@/features/todolists/ui/Todolists/TodolistItem/TodolistItem";

export const Todolists = () => {
    const todolists = useAppSelector(selectTodolists)

    return (
        <div>
            {todolists.map(todolist => {

                return (
                    <Grid key={todolist.id}>
                        <Paper sx={{p: '0 20px 20px 20px'}}>
                            <TodolistItem todolist={todolist}/>
                        </Paper>
                    </Grid>
                )
            })}
        </div>
    );
};
