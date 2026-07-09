import './App.module.css'
import {ThemeProvider} from '@mui/material/styles'
import {useAppSelector} from '@/common/hooks/useAppSelector'
import CssBaseline from '@mui/material/CssBaseline'
import {Header} from "@/common/components/Header/Header";
import {getTheme} from "@/common/theme/theme";
import {selectThemeMode} from "@/app/app-selectors";
import {Main} from "@/app/Main";
import styles from "./App.module.css";

export type Todolist = {
    id: string
    title: string
    filter: FilterValues
}

export type Task = {
    id: string
    title: string
    isDone: boolean
}

export type FilterValues = 'all' | 'active' | 'completed'

export type TasksState = Record<string, Task[]>


export const App = () => {
    const themeMode = useAppSelector(selectThemeMode)
    const theme = getTheme(themeMode)

    return (
        <ThemeProvider theme={theme}>
            <div className={styles.app}>
                <CssBaseline/>
                <Header/>
                <Main/>
            </div>
        </ThemeProvider>
    )
}
