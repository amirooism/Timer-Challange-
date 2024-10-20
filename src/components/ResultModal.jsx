export default function ResultModal({ref , result , TargetTime}) {
    return <dialog ref={ref} className="result-modal" >
        <h2>{result}</h2>
        <p>The target time was <strong>{TargetTime} seconds.</strong></p>
        <p>You stopped the timer with <strong>X seconds left</strong></p>
        <form method="dialog"> 
            <button>Close</button> 
        </form>
    </dialog>
}