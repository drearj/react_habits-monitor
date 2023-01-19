import { generateDatesFromYearBeginning } from "../utils/generate-dates-from-year-beginning";
import { HabitDay } from "./HabitDay";

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
const summaryDays = generateDatesFromYearBeginning();

const minimumSummaryDaysSize = 18 * 7; // 18 weeks
const ammountOfDaysToFill = minimumSummaryDaysSize - summaryDays.length;

export function SummaryTable() {
    return (
        <div className="w-full flex ">
            <div className="grid grid-rows-7 grid-flow-row gap-3">

                {weekDays.map((weekDay, index) => {
                    return (
                        <div key={`${weekDay}-${index}`} className="text-zinc-400 text-xl h-10 w-10 font-bold flex items-center justify-center">
                            {weekDay}
                        </div>
                    );
                })}
            </div>

            <div className="grid grid-rows-7 grid-flow-col gap-3">
                {summaryDays.map(day => {
                    return (
                        
                        <HabitDay 
                            key={day.toString()} 
                            amount={5}
                            completed={Math.random() * 5}
                        />

                    );
                })}

                {ammountOfDaysToFill > 0 && Array.from({length: ammountOfDaysToFill}).map((_, index) => {
                    return(
                        <div key={index} className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed" />
                    )
                })}
            </div>
        </div>
    );
}