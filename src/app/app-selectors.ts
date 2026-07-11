import type {RootState} from "@/app/store";
import type {ThemeMode} from "@/app/app-reducer";

export const selectThemeMode=(state:RootState):ThemeMode=>state.app.themeMode