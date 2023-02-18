import { createContext, useState } from "react";

export const context = createContext();
const AppContext = ({ children }) => {
    const [auth, setAuth] = useState(false);

    const fnlogin = () => {
        setAuth(true);
    }
    const fnlogout = () => {
        setAuth(false);
    }
    return (
        <context.Provider value={{ auth, fnlogin, fnlogout }}>
            {children}
        </context.Provider>
    )

}
export default AppContext;