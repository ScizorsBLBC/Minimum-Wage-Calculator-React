import React from "react";

import wages, { federalWage } from "./wages";

export const numberFormat = (number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number)
}

const WageTable = (props) => {
    return (
        <div className="WageTable">
            <table>
                <thead>
                    <tr>
                        <th>
                            State
                        </th>
                        <th>
                            Wage
                        </th>
                        <th>
                            Yearly Income
                        </th>
                        <th>
                            Yearly Income @ $15/ Hour
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {wages.map((wage) => (
                        <tr key={wage.abbreviation} className={props.selectedState == wage.abbreviation ? "boldedRow" : null}>
                            <td>
                                {wage.name}
                            </td>
                            <td>
                                {numberFormat(wage.wage || federalWage)} {wage.wage == null ? "*" : null}
                            </td>
                            <td>
                                {numberFormat((wage.wage || federalWage) * (props.hoursPerWeekWorked || 40) * (props.numWeeksWorked || 50))}
                            </td>
                            <td>
                                {numberFormat(15 * (props.hoursPerWeekWorked || 40) * (props.numWeeksWorked || 50))}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default WageTable;