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
        const data_val = [22700, 23066, 24066, 23492, 27532, 26694, 28757],
            xAxis_val = ['2010', '2011', '2012', '2013', '2014', '2015', '2016'];
        const data_val1 = [0, 0, 0, 0, 0, 0, 0];
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
                formatter: '{b}:{c}',
                extraCssText: 'box-shadow: 0 0 5px rgba(0, 0, 0, 1)'
            },
            legend: {
                right: 0,
                top: 0,
                data: ['距离'],
                textStyle: {
                    color: '#5c6076'
                }
            },
            title: {
                text: '日志历史统计',
                x: '4%',
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

            series: [{
                type: 'bar',
                name: 'error',
                tooltip: {
                    show: false
                },
                animation: false,
                barWidth: 1.4,
                hoverAnimation: false,
                data: data_val,
                itemStyle: {
                    normal: {
                        color: '#f17a52',
                        opacity: 0.6,
                        label: {
                            show: false
                        }
                    }
                }
            }, {
                type: 'line',
                name: '人才资源总量',

                animation: false,
                symbol: 'circle',

                hoverAnimation: false,
                data: data_val1,
                itemStyle: {
                    normal: {
                        color: '#f17a52',
                        opacity: 0,
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1,
                        color: '#384157',
                        opacity: 1
                    }
                }
            }, {
                type: 'line',
                name: 'linedemo',
                smooth: true,
                symbolSize: 10,
                animation: false,
                lineWidth: 1.2,
                hoverAnimation: false,
                data: data_val,
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

            }]
        };
        myChart.setOption(option);
    }


}


