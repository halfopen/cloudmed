from django.shortcuts import render, render_to_response
from django.http.response import *
import os
import time
from cloudmed.settings import BASE_DIR, MEDIA_ROOT, UPLOAD_ROOT
from django import forms
from so.tcm import TcmPro

tcmPro = TcmPro()


def face(req):
    return render(req, "face.html")


def upload_image(req):

    if req.method == 'POST':
        print(req)
        my_file = req.FILES.get("file", None)
        type = req.POST.get("type", "face")
        if not my_file:
            print("no file to upload")
            return HttpResponse("")

        file_ext = os.path.splitext(my_file.name)[1]
        filename = str(time.time())+file_ext

        with open(os.path.join(UPLOAD_ROOT, filename), "wb") as f:
            for t in my_file.chunks():
                f.write(t)

        if type == "face":
            result = tcmPro.facePro(os.path.join(UPLOAD_ROOT, filename))
        else:
            result = tcmPro.tongPro(os.path.join(UPLOAD_ROOT, filename))
        d = decode_result(result, type)
        d['file'] = filename
        return JsonResponse(d)



"""
面诊返回值：  31251
    返回类型：int
	faceDetectRes->人脸检测结果:0->未检测出人脸，1->成功检测出人脸
	faceColor->面部颜色检测结果:0->面白，1->面黑，2->面红,3->面黄，4->面青，5->正常
	faceGloss->面部光泽检测结果:0->有光泽，1->少光泽，2->无光泽
	lipDetectRes->嘴唇检测结果:0->未检测出嘴唇，1->成功检测出嘴唇
	lipColor->嘴唇颜色检测结果:0->淡白，1->淡红，2->红,3->暗红，4->紫
	返回值编码格式：result = faceDetectRes*1 + faceColor*10 + faceGloss*100 + lipDetectRes*1000 + lipColor*10000

	例子：人脸检测成功并且嘴唇检测成功：31251
	                其中，faceDetectRes = 1；faceColor = 5；faceGloss = 2；lipDetectRes = 1；lipColor = 3；
		  人脸检测成功并且嘴唇检测失败：251
					其中，faceDetectRes = 1；faceColor = 5；faceGloss = 2；lipDetectRes = 0；(lipColor无具体值)
	      人脸检测失败，此时嘴唇一定检测失败：0
	                其中，faceDetectRes = 0；lipDetectRes = 0；(faceColor，faceGloss和lipColor无具体值)
	                
	                
/*舌诊返回值：
	返回类型：int
	tongueDetectRes->舌体检测结果:0->未检测出舌像，1->成功检测出舌像
	tongueCrack->舌裂纹检测结果:0->未检测到裂纹,1->成功检测到裂纹
	tongueFatThin->舌胖瘦检测结果:0->正常(瘦),1->胖舌
	tongueCoatThickness->舌苔厚薄检测结果:0->薄,1->厚
	tongueCoatColor->舌苔颜色检测结果:0->苔白，1->苔黄
	tongueNatureColor->舌质颜色检测结果:0->舌暗红，1->舌淡白，2->舌淡红，3->舌红，4->舌深红（舌紫）
	返回值编码格式：result = tongueDetectRes*1 + tongueCrack*10 + tongueFatThin*100 + tongueCoatThickness*1000 + tongueCoatColor*10000 + tongueNatureColor*100000

	例子：舌诊成功：310101
					其中，tongueDetectRes = 1；tongueCrack = 0；tongueFatThin = 1；tongueCoatThickness = 0；tongueCoatColor = 1；tongueNatureColor = 3；
		  舌诊失败：0
		            其中，tongueDetectRes = 0；(tongueCrack，tongueFatThin，tongueCoatThickness，tongueCoatColor和tongueNatureColor无具体值)
*/

"""


def decode_result(result, type="face"):
    result = int(result)
    key = None
    info = None
    d = dict()
    d["raw"] = str(result)
    if type == "face":
        key = {"_1faceDetectRes": "人脸检测结果", "_2faceColor": "面部颜色检测结果", "_3faceGloss": "面部光泽检测结果",
               "_4lipDetectRes": "嘴唇检测结果", "_5lipColor": "嘴唇颜色检测结果"}
        info = {
            "_1faceDetectRes": ["未检测到人脸", "成功检测到人脸"],
            "_2faceColor": ["面白", "面黑", "面红", "面黄", "面青", "正常"],
            "_3faceGloss": ["有光泽", "少光泽", "无光泽"],
            "_4lipDetectRes": ["未检测出嘴唇", "成功检测出嘴唇"],
            "_5lipColor": ["淡白", "淡红", "红", "暗红", "紫"]
        }
    else:
        key = {"_1tongueDetectRes":"舌体检测结果", "_2tongueCrack":"舌裂纹检测结果", "_3tongueFatThin":"舌胖瘦检测结果",
               "_4tongueCoatThickness":"舌苔厚薄检测结果", "_5tongueCoatColor":"舌苔颜色检测结果", "_6tongueNatureColor":"舌质颜色检测结果"}
        info = {
            "_1tongueDetectRes":["未检测出舌像","成功检测出舌像"],
            "_2tongueCrack":["未检测到裂纹","成功检测到裂纹"],
            "_3tongueFatThin": ["正常(瘦)","胖舌"],
            "_4tongueCoatThickness": ["薄","厚"],
            "_5tongueCoatColor": ["苔白","苔黄"],
            "_6tongueNatureColor":["舌暗红", "舌淡白","舌淡红", "舌红", "舌深红（舌紫）"]
        }

    d["info"] = info
    d["key"] = key
    result_dict = dict()
    keys = list(key.keys())
    keys.sort()
    for k in keys:
        result_dict[k] = result % 10
        result = int(result / 10)
    d['result'] = result_dict
    return d
