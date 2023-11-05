import React, { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import { Button, Chip } from "@mui/material"
import Chart from "react-apexcharts";

const AreaChartExp = ({ }) => {

    const [currentPeriod, setCurrentPeriod] = useState('max')
    const [loadingChart, setLoadingChart] = useState(false)

    const chartProps = {
        options: {
            colors: ["#a7d397"],
            theme: {
                mode: 'light',
            },
            dataLabels: {
                enabled: false
            },
            chart: {
                // background: '#141823',
                zoom: {
                    enabled: false
                },
                toolbar: {
                    show: false
                }
            },
            fill: {
                gradient: {
                    enabled: true,
                    opacityFrom: 0.55,
                    opacityTo: 0
                }
            },
            xaxis: {
                categories: [
                    "01 Jan",
                    "02 Jan",
                    "03 Jan",
                    "04 Jan",
                    "05 Jan",
                    "06 Jan",
                    "07 Jan"
                ]
            },
            noData: {
                text: 'Loading...'
            },
        },
        series: [
            {
                name: "Last 7 days",
                data: [45, 52, 38, 45, 19, 23, 2]
            }
        ]

    }

    return (
        <div className="pe-4">
            {loadingChart == false ?
                <div>
                    <div style={{ cursor: "default" }} className="basic-chart-container">
                        <Chart
                            options={chartProps.options}
                            series={chartProps.series}
                            theme="light"
                            type="area"
                            width="550"
                            height="300"

                        />
                    </div>
                </div>
                :
                <div style={{ textAlign: 'center' }}>
                    <div className="d-flex justify-content-center p-10">
                        <ReactLoading type="bubbles" color="#0D90FF" height={100} width={100} />
                    </div>
                    <h6>Loading...</h6>
                </div>
            }
        </div >

    )
}

export default AreaChartExp