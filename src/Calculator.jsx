import React, { useState } from "react";

import wages,{ federalWage } from "./wages";
import WageTable, { numberFormat } from "./WageTable.jsx";


const Calculator = () => {
    const [numWeeksWorked, setNumWeeksWorked] = useState(0);
    const [hoursPerWeekWorked, setHoursPerWeekWorked] = useState(0);
    const [numWeeksWorkedError, setNumWeeksWorkedError] =  useState(null);
    const [hoursPerWeekWorkedError, setHoursPerWeekWorkedError] = useState(null);
    const [answer, setAnswer] = useState(null);
    const [selectedState, setSelectedState] = useState(null);
    const [selectedStateError, setSelectedStateError] = useState(null);

    // where do we want to do the search for the wage value

    // where in our code do we the have the abbreviation we need to use
    const handleCalculations = () => {
        if (numWeeksWorked > 52) {
           setNumWeeksWorkedError("Please enter a number between 1 and 52!")
       } else if (numWeeksWorked < 0) {
        setNumWeeksWorkedError(`Please enter a number between 1 and 52!`)
       } else {
           setNumWeeksWorkedError(null)
       }
        if (hoursPerWeekWorked > (24*7)) {
           setHoursPerWeekWorkedError(`Please enter a number between ${24*7}!`)
       } else if (hoursPerWeekWorked < 0) {
           setHoursPerWeekWorkedError(`Please enter a number between ${24*7}!`)
       } else {
           setHoursPerWeekWorkedError(null)
       }
        if (selectedState === null) {
            setSelectedStateError('Please select a state from the drop down menu!')
            console.log("revolt!")
        } else if (selectedState !== null) {
            setSelectedStateError(null)
        } 
        const selectedStateWage = wages.find((wageObject) => {
            console.log(wageObject.abbreviation, selectedState);
            return wageObject.abbreviation === selectedState
        }).wage || federalWage
        console.log(numWeeksWorked, hoursPerWeekWorked, selectedState, selectedStateWage);
        setAnswer(numWeeksWorked * hoursPerWeekWorked * selectedStateWage);

    
        // set numWeeksWorked error would happen here, along with validation text, succesful calculations, etc.
      

    }
    return (
        <section>
            <form 
                className="calculator"
                onSubmit={(event) => {
                    event.preventDefault();
                    handleCalculations();
                }}>
                <label for="calculator__state-select-input">
                    Select the State you live in
                </label>
                <select className="calculator__state-select-input"
                        onChange={ (event) => {
                            setSelectedState(event.currentTarget.value)
                            console.log(event.target.value)
                        }}>
                    <option value>
                        Select your State
                    </option>
                    {wages.map((wage) => (
                        <option key={wage.abbreviation} 
                                value={wage.abbreviation}>
                            {wage.name}
                        </option>
                    ))} 
                </select>
                <label for="calculator__num-weeks-worked-input">
                How many weeks per year do you typically work?
                </label>
                <input className="calculator__num-weeks-worked-input"
                    type="number" 
                    value={numWeeksWorked} 
                    onChange={ (event) => {
                        console.log(event)
                        setNumWeeksWorked(event.target.value)
                    }}
                />
                <p>
                    {numWeeksWorkedError}
                </p>
                <label for="calculator__hours-per-week-worked-input">
                Around how many hours per week do you work?
                </label>
                <input className="calculator__hours-per-week-worked-input"
                    type="number" 
                    value={hoursPerWeekWorked} 
                    onChange={ (event) => {
                        console.log(event)
                        setHoursPerWeekWorked(event.target.value)
                    }}
                />
                <p>
                    {hoursPerWeekWorkedError}
                </p>
                <button type="submit" className="calculator__submit-button"> 
                    Enter info above and select your State
                </button>
                <p>
                    {selectedStateError}
                </p>
                <div className="answer">
                    <p>
                        {numberFormat(answer)}
                    </p>
                </div>
                <div>
                    <p>
                        Below is a table with all the states and their minimum wage. I have included what the new Yearly Income would be if the Federal minimum wage was increased to $15 per hour as proposed by President Biden, and if it was increased to $24 per hour to match the increase in worker productivity as it should. * These states use the Federal minimum wage. *
                    </p>
                    <p>    
                        
                    </p>   
                    <WageTable
                        hoursPerWeekWorked={hoursPerWeekWorked}
                        numWeeksWorked={numWeeksWorked}    
                        selectedState={selectedState}
                    />
                </div>
                <div>
                    <small>
                        Note: We do not save or send your data anywhere - all calculations are done on your own browser. You can <a href="https://glitch.com/edit/#!/minimum-wage?path=client.js:69:4">view the source of this app on Glitch</a> to see how its done.
                    </small>
                </div>

            </form>
        </section>
)}


export default Calculator

// <select 
// value={StateYouLiveIn} 
// onChange={ (event) => {
//     event.target.value
//     console.log(event)
//     setNumWeeksWorked(event.target.value)
// }}
// />

// Define each state and its Min Wage : in wages file

// Add option element for each state 

// map over wages array

// All this happens upon button click
    //<button onClick={() => this....}
    //class extends react.component
    
    //function App() {}
    //mount unmount
        //render return this.setState(fucntion(state, props) {
            //return{}
        
        //componentDidmount / componentWillUnmount 

        //class Toggle extends React.component{
        //constructor(props) {
            //super(props);
            //this.,state = {isTogglleOn: true};
        //handleClick = () => {}

        //render() { return <button onClick={this.handleclick}>
        // ButtonText
        //</button>}

        //prevent component from rendering if state is toggled off

// Need variable for num of weeks per year worked

// I need the variable for how many hours per week worked

// Need variable for which state you live in

// When we know the state, how do we get the wage value for that state?

// What is the result? numOfWeeksWorked * hoursPerWeekWorked * minimumWage

// display the result on screen in dollars 

// what happens when they click the button in each case

// set disabled state to true

// set event listener for inputs to know when there are key presses and when the drop down menu has been set

// if inputsHaveValues === false button is disabled

// Make inputs red so you can see where to input info

// error messages: 
    // ERROR: Enter a number between 1 and 52
    // ERROR: Enter a number between 1 and 168
    // ERROR: Please fix all errors above

// Make the answer have a dollar sign before it.

// How do we save and access the value of an input

// Button 

// show what the wage would be at $15 an hour, and at $21 an hour