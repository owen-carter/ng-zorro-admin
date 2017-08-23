import {Component, OnInit} from '@angular/core';
import * as echarts from 'echarts'

@Component({
    selector: 'nz-log',
    templateUrl: './log.component.html',
    styleUrls: ['./log.component.less']
})
export class LogComponent implements OnInit {
    _ERROR = 70;
    _WARN = 7;
    _FATAL = 66;

    _formatLOG = percent => `${percent} %`;


    constructor() {
    }

    ngOnInit() {
        const myChart = echarts.init(document.getElementById('log-history-analysis'));
        const data_val = [22700, 23066, 24066, 23492, 27532, 26694, 28757];
        const xAxis_val = ['2017/1', '2017/2', '2017/3', '2017/4', '2017/5', '2017/6', '2017/7'];
        const option = {
            backgroundColor: '#29304200',
            grid: {
                left: 40,
                top: 80,
                bottom: 40,
                right: 40,
                containLabel: true
            },
            tooltip: {
                show: true,
                backgroundColor: '#384157',
                borderColor: '#384157',
                borderWidth: 1,
                formatter: '{b}:<br>统计到{c}条{a}类型日志',
                extraCssText: 'box-shadow: 0 0 5px rgba(0, 0, 0, 1)'
            },
            legend: {
                right: 40,
                top: 35,
                data: ['error', 'alert', 'info'],
                textStyle: {
                    color: '#5c6076'
                }
            },
            title: {
                text: '日志历史统计',
                x: '3%',
                top: 35,
                textStyle: {
                    color: '#434a4d'
                }
            },
            xAxis: {
                data: xAxis_val,
                boundaryGap: false,
                axisLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#434a4d'
                    }
                },
                axisTick: {
                    show: false
                }
            },
            yAxis: {
                ayisLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#434a4d'
                    }
                },
                min: 20000,
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#d5d5d5'
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#d5d5d5'
                    }
                }
            },

            series: [
                {
                    type: 'line',
                    name: 'error',
                    smooth: true,
                    symbolSize: 10,
                    animation: false,
                    lineWidth: 1.2,
                    hoverAnimation: false,
                    data: data_val.map((x: number) => {
                        return x + Math.floor(Math.random() * 10) * 1000;
                    }),
                    symbol: 'circle',
                    itemStyle: {
                        normal: {
                            color: '#f17a52',
                            shadowBlur: 40,
                            label: {
                                show: true,
                                position: 'top',
                                textStyle: {
                                    color: '#f17a52',

                                }
                            }
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: '#f17a52',
                            opacity: 0.08
                        }
                    }

                },
                {
                    type: 'line',
                    name: 'alert',
                    smooth: true,
                    symbolSize: 10,
                    animation: false,
                    lineWidth: 1.2,
                    hoverAnimation: false,
                    data: data_val.map((x: number) => {
                        return x + 12;
                    }),
                    symbol: 'circle',
                    itemStyle: {
                        normal: {
                            color: '#a42c13',
                            shadowBlur: 40,
                            label: {
                                show: true,
                                position: 'top',
                                textStyle: {
                                    color: '#a42c13',

                                }
                            }
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: '#a42c13',
                            opacity: 0.08
                        }
                    }

                },
                {
                    type: 'line',
                    name: 'info',
                    smooth: true,
                    symbolSize: 10,
                    animation: false,
                    lineWidth: 1.2,
                    hoverAnimation: false,
                    data: data_val.map((x: number) => {
                        return x + Math.floor(Math.random() * 10) * 1000;
                    }),
                    symbol: 'circle',
                    itemStyle: {
                        normal: {
                            color: '#1695a4',
                            shadowBlur: 40,
                            label: {
                                show: true,
                                position: 'top',
                                textStyle: {
                                    color: '#1695a4',

                                }
                            }
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: '#1695a4',
                            opacity: 0.08
                        }
                    }

                }
            ]
        };
        myChart.setOption(option);
    }


}


