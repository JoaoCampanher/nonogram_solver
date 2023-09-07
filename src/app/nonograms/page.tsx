'use client'

import nonogramsObjs from "../../../public/allNonograms";
import solveNonogram from "../solver/nonogramSolver";


export default function Nonograms() {
    const orderedNonograms = nonogramsObjs.sort((a, b) => {
        return (a.columns.length + a.rows.length) - (b.columns.length + b.rows.length)
    })

    return (
        <div className="flex flex-col justify-start">
            {orderedNonograms.map((nonogram, index) => {
                return <button className="w-96 flex justify-between" key={index} onClick={() => solveNonogram(nonogram)}>
                    <h2 className="text-start">
                        {`${nonogram.name}`}
                    </h2>
                    <h2 className="text-end">
                        {`${nonogram.rows.length} X ${nonogram.columns.length}`}
                    </h2>
                </button>
            })}
        </div>
    );
}