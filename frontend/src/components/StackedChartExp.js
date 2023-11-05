import React from 'react'
import Chart from "react-apexcharts";

const StackedChartExp = () => {

    const chartProps = {
        options: {
            chart: {
                type: 'bar',
                height: 350,
                stacked: true,
                toolbar: {
                    show: true
                },
                zoom: {
                    enabled: true
                },
            },
            responsive: [{
                breakpoint: 767,
                options: {
                    legend: {
                        position: 'bottom',
                        offsetX: -10,
                        offsetY: 0
                    }
                }
            }],
            plotOptions: {
                bar: {
                    horizontal: false,
                    borderRadius: 10,
                    dataLabels: {
                        total: {
                            enabled: true,
                            style: {
                                fontSize: '13px',
                                fontWeight: 900
                            }
                        }
                    }
                },
            },
            xaxis: {
                type: 'month',
                categories: ['January', 'February', 'March', 'April',
                    'May', 'June'
                ],
            },
            legend: {
                position: 'right',
                offsetY: 40
            },
            fill: {
                opacity: 1
            }
        },
        series: [{
            name: 'Subscriptions',
            data: [44, 55, 41, 67, 22, 43],
            color:"black"
        }, {
            name: 'CrossFit',
            data: [13, 23, 20, 8, 13, 27],
            color:"#a7d397"
        }, {
            name: 'Groceries',
            data: [11, 17, 15, 15, 21, 14],
            color:"#555843"
        }, {
            name: 'Restaurants',
            data: [21, 7, 25, 13, 22, 8],
            color:"#897e3d"
        }],
    }

    return (
        <Chart
            options={chartProps.options}
            series={chartProps.series}
            theme="light"
            type="bar"
            height="400"
        />
    )
}

export default StackedChartExp