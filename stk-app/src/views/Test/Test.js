import React from 'react';
import RGL, { WidthProvider } from "react-grid-layout";
import {Favorite} from "../Dashboard/components/Home/components";
import {ResponsiveLine} from "@nivo/line";

const Test = () => {

    const data = [
        {
            "id": "japan",
            "color": "hsl(86, 70%, 50%)",
            "data": [
                {
                    "x": "plane",
                    "y": 20
                },
                {
                    "x": "helicopter",
                    "y": 155
                },
                {
                    "x": "boat",
                    "y": 261
                },
                {
                    "x": "train",
                    "y": 150
                },
                {
                    "x": "subway",
                    "y": 92
                },
                {
                    "x": "bus",
                    "y": 296
                },
                {
                    "x": "car",
                    "y": 150
                },
                {
                    "x": "moto",
                    "y": 33
                },
                {
                    "x": "bicycle",
                    "y": 86
                },
                {
                    "x": "horse",
                    "y": 266
                },
                {
                    "x": "skateboard",
                    "y": 114
                },
                {
                    "x": "others",
                    "y": 236
                }
            ]
        },
        {
            "id": "france",
            "color": "hsl(16, 70%, 50%)",
            "data": [
                {
                    "x": "plane",
                    "y": 221
                },
                {
                    "x": "helicopter",
                    "y": 91
                },
                {
                    "x": "boat",
                    "y": 30
                },
                {
                    "x": "train",
                    "y": 71
                },
                {
                    "x": "subway",
                    "y": 122
                },
                {
                    "x": "bus",
                    "y": 264
                },
                {
                    "x": "car",
                    "y": 90
                },
                {
                    "x": "moto",
                    "y": 77
                },
                {
                    "x": "bicycle",
                    "y": 5
                },
                {
                    "x": "horse",
                    "y": 298
                },
                {
                    "x": "skateboard",
                    "y": 85
                },
                {
                    "x": "others",
                    "y": 155
                }
            ]
        },
        {
            "id": "us",
            "color": "hsl(138, 70%, 50%)",
            "data": [
                {
                    "x": "plane",
                    "y": 8
                },
                {
                    "x": "helicopter",
                    "y": 173
                },
                {
                    "x": "boat",
                    "y": 166
                },
                {
                    "x": "train",
                    "y": 269
                },
                {
                    "x": "subway",
                    "y": 73
                },
                {
                    "x": "bus",
                    "y": 174
                },
                {
                    "x": "car",
                    "y": 56
                },
                {
                    "x": "moto",
                    "y": 286
                },
                {
                    "x": "bicycle",
                    "y": 178
                },
                {
                    "x": "horse",
                    "y": 223
                },
                {
                    "x": "skateboard",
                    "y": 222
                },
                {
                    "x": "others",
                    "y": 209
                }
            ]
        },
        {
            "id": "germany",
            "color": "hsl(238, 70%, 50%)",
            "data": [
                {
                    "x": "plane",
                    "y": 66
                },
                {
                    "x": "helicopter",
                    "y": 199
                },
                {
                    "x": "boat",
                    "y": 266
                },
                {
                    "x": "train",
                    "y": 5
                },
                {
                    "x": "subway",
                    "y": 176
                },
                {
                    "x": "bus",
                    "y": 115
                },
                {
                    "x": "car",
                    "y": 288
                },
                {
                    "x": "moto",
                    "y": 287
                },
                {
                    "x": "bicycle",
                    "y": 135
                },
                {
                    "x": "horse",
                    "y": 73
                },
                {
                    "x": "skateboard",
                    "y": 139
                },
                {
                    "x": "others",
                    "y": 66
                }
            ]
        },
        {
            "id": "norway",
            "color": "hsl(85, 70%, 50%)",
            "data": [
                {
                    "x": "plane",
                    "y": 43
                },
                {
                    "x": "helicopter",
                    "y": 16
                },
                {
                    "x": "boat",
                    "y": 36
                },
                {
                    "x": "train",
                    "y": 75
                },
                {
                    "x": "subway",
                    "y": 159
                },
                {
                    "x": "bus",
                    "y": 249
                },
                {
                    "x": "car",
                    "y": 176
                },
                {
                    "x": "moto",
                    "y": 72
                },
                {
                    "x": "bicycle",
                    "y": 27
                },
                {
                    "x": "horse",
                    "y": 256
                },
                {
                    "x": "skateboard",
                    "y": 52
                },
                {
                    "x": "others",
                    "y": 226
                }
            ]
        }
    ]
    return (
        <div style={{height: 100}}>
            <ResponsiveLine
                data={data}
                xScale={{ type: 'point' }}
                yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
                yFormat=" >-.2f"
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    orient: 'bottom',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'transportation',
                    legendOffset: 36,
                    legendPosition: 'middle'
                }}
                axisLeft={{
                    orient: 'left',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'count',
                    legendOffset: -40,
                    legendPosition: 'middle'
                }}
                pointSize={10}
                pointColor={{ theme: 'background' }}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor' }}
                pointLabelYOffset={-12}
                useMesh={true}
                legends={[
                    {
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 100,
                        translateY: 0,
                        itemsSpacing: 0,
                        itemDirection: 'left-to-right',
                        itemWidth: 80,
                        itemHeight: 20,
                        itemOpacity: 0.75,
                        symbolSize: 12,
                        symbolShape: 'circle',
                        symbolBorderColor: 'rgba(0, 0, 0, .5)',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemBackground: 'rgba(0, 0, 0, .03)',
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
            />
        </div>
    );
}

export default Test;