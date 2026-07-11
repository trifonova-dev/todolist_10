import {Grid, Paper} from "@mui/material";
import {useAppSelector} from "@/common/hooks/useAppSelector";
import {selectTodolists} from "@/common/features/todolists/model/todolists-selectors";
import {TodolistItem} from "@/common/features/todolists/ui/Todolists/TodolistItem/TodolistItem";

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
