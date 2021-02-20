import React from "react";
import { render } from "react-dom";

import Calculator from "./Calculator.jsx";




const App = (
    <React.Fragment>
    <main>
        <h1> Around how much would you make if you only made minimum wage in your US State?
        </h1>
        <Calculator/>
        
    </main>
    <footer>
        <p>
            *This data was gathered January 22, 2018 from <a href="https://www.dol.gov/whd/minwage/america.htm">the US Department of Labor</a> at which the data came from January 1, 2018. Wage circumstances can be complex, <a href="https://www.dol.gov/whd/contacts/state_of.htm"> so check your state's labor sites for more info.</a>
        </p>
    </footer>
    </React.Fragment>
)
render(App, document.querySelector("#root"));