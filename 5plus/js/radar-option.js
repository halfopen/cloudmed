
var option = {
    title : {
        // text: '预算 vs 开销（Budget vs spending）',
        // subtext: '纯属虚构'
    },
    tooltip : {
        // trigger: 'axis'
    },
    legend: {
        data: ['体质得分'],
        tooltip:{
            color: 'orange'
        }
        
    },
    polar : [
       {
        indicator: [
            { name: '阴虚', max: 50},
            { name: '阳虚', max: 50},
            { name: '气虚', max: 50},
            { name: '血瘀', max: 50},
            { name: '肾虚', max: 50},
            { name: '瘀滞', max: 50}
         ],
        }
    ],
    calculable : true,
    series : [
        {
            name: '体质得分',
            type: 'radar',
            data : [
                {
                    value : [0, 0, 0, 0, 0, 0],
                    name : '体质得分'
                },
            ]
        }
    ]
};
                    