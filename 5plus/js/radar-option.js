var option = {
    title: {
        
    },
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
           { name: '阴虚', max: 6500},
           { name: '阳虚', max: 16000},
           { name: '气虚', max: 30000},
           { name: '血瘀', max: 38000},
           { name: '肾虚', max: 52000},
           { name: '瘀滞', max: 25000}
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
        name: '预算 vs 开销（Budget vs spending）',
        type: 'radar',
        // areaStyle: {normal: {}},
        data : [
            {
                value : [1000, 10000, 28000, 35000, 50000, 19000],
                name : '体质得分',
                lineStyle:{
                    color: 'darkred',
                    width: '5'
                }
            },
           
        ]
    }]
};