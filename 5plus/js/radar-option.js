var option = {
    title: {},
    tooltip: {},
    legend: {
        data: ['体质得分'],
        tooltip:{
            color: 'orange'
        }							
    },
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5],
                fontSize: 15,
            }
            
        },
        indicator: [
            { name: '阳虚', max: 60},
            { name: '阴虚', max: 60},
            { name: '痰湿', max: 60},
            { name: '瘀滞', max: 60},
            { name: '脾虚', max: 60},
            { name: '肾虚', max: 60},
            { name: '气虚', max: 60}
        ],
        splitNumber: '2',
        splitArea: {
            areaStyle: {
                color: ['white', 'white', 'white', 'white']
            }
        },
        splitLine:{
            lineStyle: {
                color: ['#aaa', '#ddd'],
                width: '1'
            }
        }
        
    },
    series: [{
        name: '体质分数',
        type: 'radar',
        // areaStyle: {normal: {}},
        data : [
            {
                value : [0,0,0,0,0,0,0],
                name : '体质得分',
                lineStyle:{
                    color: 'darkred',
                    width: '5'
                }
            },
            
        ]
    }]
};