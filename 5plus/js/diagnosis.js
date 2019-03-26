/**
 * 诊断健康状态
 * @param {问诊回答} questions 
 * @param {面诊结果} faceResult 
 * @param {舌诊结果} tongueResult 
 */
var diagnosis = function(questions, faceResult, tongueResult){
    console.log("diagnosis");
        /**
     * 面部打分
     * @param {面诊结果} faceResult 
     */
    var getFaceScore = function(faceResult){
        var score = new Array(7);
        for(var i=0;i<7;++i)score[i] = 0;
        if(null!=faceResult){
            if(faceResult.result._2faceColor == 0){ // 面白
                score[0] += 5;
                score[5] += 8;
            }
            if(faceResult.result._2faceColor == 3){  // 面黄
                score[4] += 10;
            }
        }
        return score;
    }

    var getTongueScore = function(tongueResult){
        var score = new Array(7);
        for(var i=0;i<7; ++i)score[i] = 0;
        if(null!=tongueResult){
            if(tongueResult.result_6tongueNatureColor==1){ // 舌淡白
                score[0] += 8;
                score[4] += 10;
                score[5] += 10;
                score[6] += 10;
            }
            if(tongueResult.result_6tongueNatureColor==3){ // 舌红
                score[1] += 15;
            }
            if(tongueResult.result._6tongueNatureColor==0){ // 舌暗红
                score[3] += 10;
            }
            if(tongueResult.result._4tongueCoatThickness==1){ // 苔厚
                score[2] += 30;
            }
        }
        return score;
    }
    dict = {
        phyTypes: ["阳虚","阴虚", "痰湿","瘀滞", "脾虚", "肾虚", "气虚", "健康"],
        faceResult: faceResult,
        tongueResult: tongueResult,
        healthScore: 100,
        healthType: [0, 0, 0, 0, 0, 0, 0],    // 是否包含某种体质
        questionScore: [0, 0, 0, 0, 0, 0, 0],    // 各种问题的体质得分
        symCount: [0, 0, 0, 0, 0, 0, 0],         // 各种体质症状个数
        phy: "健康",                             // 最终体质
        faceScore: getFaceScore(faceResult),
        tongueScore: getTongueScore(tongueResult)
    }

    console.log(dict);

    // 遍历所有选项
    for(var i=0;i<questions.length;++i){
        var choose = questions[i].choose;
        console.log(choose);
        // 遍历所有问题
        for(var j=0;j<choose.length;++j){
            console.log(choose[j]);
            if(choose[j].state=="true"){
                dict.questionScore[0] += choose[j].score.yangxu;
                dict.questionScore[1] += choose[j].score.yinxu;
                dict.questionScore[2] += choose[j].score.tanshi;
                dict.questionScore[3] += choose[j].score.yuzhi;
                dict.questionScore[4] += choose[j].score.pixu;
                dict.questionScore[5] += choose[j].score.shenxu;
                dict.questionScore[6] += choose[j].score.qixu;

                // 统计症状个数
                if(choose[j].score.yangxu!=0)dict.symCount[0]++;
                if(choose[j].score.yinxu!=0)dict.symCount[1]++;
                if(choose[j].score.tanshi!=0)dict.symCount[2]++;
                if(choose[j].score.yuzhi!=0)dict.symCount[3]++;
                if(choose[j].score.pixu!=0)dict.symCount[4]++;
                if(choose[j].score.shenxu!=0)dict.symCount[5]++;
                if(choose[j].score.qixu!=0)dict.symCount[6]++;

                // 第一题选了A就是肾虚
                if(i==0 && j==0){
                    dict.healthType[6] = 1;
                }
                // 
                if(i==12 && j==0){
                    dict.healthType[5] == 0;
                }
            }

            
        }
    }

    // 把面部和舌头的加上
    for(var i=0;i<7;i++) {
        dict.questionScore[i] += dict.faceScore[i] + dict.tongueScore[i];
    }

    if(null!= tongueResult && tongueResult.result._4tongueCoatThickness==1){
        dict.healthType[2] = 1;
    }

    return dict;
};