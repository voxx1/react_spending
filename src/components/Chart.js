import ChartBar from "./ChartBar"
import './Chart.css'

const Chart = (props) => {
    const dataPointValue = props.dataPoints.map(dataPoint => dataPoint.value)
    const totalMax = Math.max(...dataPointValue)
    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint => <ChartBar value={dataPoint.value} maxValue={totalMax} label={dataPoint.label} key={dataPoint.id} />)}
        </div>
    )
}

export default Chart