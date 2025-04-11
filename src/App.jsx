import React, { useState } from "react";
import { Links } from "./Header/NavBar";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import { ThemeProvider } from "./ThemeContext";



const App =() => {
    const [isBlack, setIsBlack]=useState(true);
    
    const chnageColor=()=>{
        setIsBlack(prevState => !prevState);
    };


return (
<div>
    <ThemeProvider>
    <Main isBlack={isBlack}/>
    </ThemeProvider>
</div>

);

};

export default App;