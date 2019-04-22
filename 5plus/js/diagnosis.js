var getfaceResult = function(faceResult){
	console.log(faceResult, typeof(faceResult));
    if( typeof(faceResult)!="object" || null==faceResult|| faceResult.raw=="0"){
        return "未检测到人脸";
    }
    var result = "";
    result +="面色："+faceResult.info._2faceColor[faceResult.result._2faceColor]+","+faceResult.info._3faceGloss[faceResult.result._3faceGloss];
    if(faceResult._4lipDetectRes==1)result +=" 唇色:"+faceResult.info._5lipColor[faceResult.result._5lipColor];
    return result;
}

var gettongueResult = function(tongueResult){
	console.log(tongueResult, typeof(tongueResult));
    if( typeof(tongueResult)!="object" || null==tongueResult ||tongueResult.raw=="0"){
        return "未检测到舌头";
    }
    var result = "舌头：";
    if(tongueResult.result._2tongueCrack==1)result+="有裂纹 ";
    result += tongueResult.info._3tongueFatThin[tongueResult.result._3tongueFatThin]+" ";
    result += tongueResult.info._4tongueCoatThickness[tongueResult.result._4tongueCoatThickness]+" ";
    result += tongueResult.info._5tongueCoatColor[tongueResult.result._5tongueCoatColor]+" ";
    result += tongueResult.info._6tongueNatureColor[tongueResult.result._6tongueNatureColor]+" ";
    return result;
}

/**
 * 诊断健康状态
 * @param {问诊回答} questions 
 * @param {面诊结果} faceResult 
 * @param {舌诊结果} tongueResult 
 */
var diagnosis = function(questions, faceResult, tongueResult){
    console.log("diagnosis", getfaceResult(faceResult), gettongueResult(tongueResult));
        /**
     * 面部打分
     * @param {面诊结果} faceResult 
     */
    var getFaceScore = function(faceResult){
        var score = new Array(7);
        for(var i=0;i<7;++i)score[i] = 0;
        if(null!=faceResult && typeof(faceResult)=="object"){
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
        if(null!=tongueResult && typeof(tongueResult)=="object"){
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
    var phyTypes = ["阳虚","阴虚", "痰湿","瘀滞", "脾虚", "肾虚", "气虚", "健康"];
    dict = {
        faceResult: faceResult,
        tongueResult: tongueResult,
        healthScore: 100,
        healthType: [0, 0, 0, 0, 0, 0, 0],    // 是否包含某种体质,
        mainType:7,                             // 主要体质
        questionScore: [0, 0, 0, 0, 0, 0, 0],    // 各种问题的体质得分
        symCount: [0, 0, 0, 0, 0, 0, 0],         // 各种体质症状个数
        phy: "",                             // 最终体质
        faceScore: getFaceScore(faceResult),
        tongueScore: getTongueScore(tongueResult),
        symptom_num: 0, 
        baseScore: null,
    }

    

    // 遍历所有选项
    for(var i=0;i<questions.length;++i){
        var choose = questions[i].choose;
        // console.log(choose);
        // 遍历所有问题
        for(var j=0;j<choose.length;++j){
            // console.log(choose[j]);
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
    var symCount = 7; // 最大症状数
    var symptom_num = 0;
    // 如果气虚症状综述<2或者关键性问题回答否，那么就不是气虚
    if(dict.symCount[6]<2 && dict.healthType[6]==0){
        dict.questionScore[6] = 0;
        symptom_num++;
    }
    // 肾虚
    if(dict.symCount[5]<2&& dict.healthType[5]==0){
        dict.questionScore[5] = 0;
        symptom_num++;
    }
    // 脾虚
    if (dict.symCount[4]<2){
        dict.questionScore[4] = 0;
        symptom_num++;
    }
    // 瘀滞
    if (dict.symCount[3]<2){
        dict.questionScore[3] = 0;
        symptom_num++;
    }
    // 痰湿
    if (dict.symCount[2]<2 && dict.healthType[2]==0){
        dict.questionScore[2] = 0;
        symptom_num++;
    }
    // 阴虚
    if (dict.symCount[1]<2){
        dict.questionScore[4] = 0;
        symptom_num++;
    }
    // 阳虚
    if (dict.symCount[0]<3){
        dict.questionScore[4] = 0;
        symptom_num++;
    }

    symptom_num = symCount - symptom_num;

    var sortedQuestionScore = dict.questionScore.concat();

    console.log(dict.questionScore, symptom_num, sortedQuestionScore);
    sortedQuestionScore.sort();

    var tizhi = [-1, -1];

    var max1=0, max2=0;

    for(var i=0;i<dict.questionScore.length;i++){
        if(dict.questionScore[i]>max2 && dict.questionScore[i]<max1){
            max2 = dict.questionScore[i];
            tizhi[1] = i;
        }else if(dict.questionScore[i]>max1){
            max2 = max1;
            max1 = dict.questionScore[i];
            tizhi[1] = tizhi[0];
            tizhi[0] = i;
        }
    }
    console.log("symptom_num",tizhi, symptom_num);
    if(tizhi[0]>=0){
        dict.mainType = tizhi[0];
    }
    var baseScore = 0;
    dict.symptom_num = symptom_num;
    if(symptom_num>3){
        baseScore = sortedQuestionScore[6];
        dict.healthType[tizhi[0]] = 1;
        dict.healthType[tizhi[1]] = 1;
        dict.phy +=" "+ phyTypes[tizhi[0]];
        dict.phy +=" "+ phyTypes[tizhi[1]];
        dict.healthScore = 40 - Math.abs(40-baseScore);
    }else if(symptom_num==3){
        baseScore = sortedQuestionScore[6-2];  // 去
        dict.healthType[tizhi[0]] = 1;
        dict.healthType[tizhi[1]] = 1;
        dict.phy +=" "+ phyTypes[tizhi[0]];
        dict.phy +=" "+ phyTypes[tizhi[1]];
        if (80-baseScore>=40){
            dict.healthScore = 90 - baseScore;
        }else if(80-baseScore<40){
            dict.healthScore = (int)(40 + (80-baseScore)*0.8);
        }
    }else if(symptom_num == 2){
        baseScore = sortedQuestionScore[6-1];
        if(tizhi[0]>=0) {
            dict.healthType[tizhi[0]] = 1;
            dict.phy +=" "+ phyTypes[tizhi[0]];
        }
        if(tizhi[1]>=0){
            dict.healthType[tizhi[1]] = 1;
            dict.phy +=" "+ phyTypes[tizhi[1]];
        }
        if(80-baseScore>=40){
            dict.healthScore = 95-baseScore;
        }else if(80-baseScore<40){
            dict.healthScore = (int)(45 + (80-baseScore)*0.8);
        }
    }else if(symptom_num==1){
        if(tizhi[0]>0) {
            dict.healthType[tizhi[0]] = 1;
            dict.phy += " " + phyTypes[tizhi[0]];
        }
        baseScore = sortedQuestionScore[6];
        if(80-baseScore>40){
            dict.healthScore = 100-baseScore;
        }else{
            dict.healthScore = 50 + (int)((80-baseScore)*0.8);
        }

    }else if(symptom_num==0){
        dict.phy = "健康";
    }

    if(tizhi[0]==-1 || dict.phy.length==0){
        dict.phy = "健康";
        dict.healthScore = 100;
    }
    console.log(baseScore, JSON.stringify(dict));
    dict.baseScore = baseScore;
    console.log(dict);
    return dict;
};