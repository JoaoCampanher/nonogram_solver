'use client'

import nonogramsObjs from "../../../public/allNonograms";


export default function Nonograms() {
    function getNonograms() {
        const orderedNonograms = nonogramsObjs.sort((a, b) => {
            return (a.columns.length + a.rows.length) - (b.columns.length + b.rows.length)
        })

        console.log(orderedNonograms);
    }
    return (
        <div>
            <h1>Nonograms</h1>
            <button onClick={() => getNonograms()}> get Nonograms </button>
        </div>
    );
}