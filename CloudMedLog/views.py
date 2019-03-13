from django.shortcuts import render
from django.http.response import *
import os
import time
from cloudmed.settings import BASE_DIR, MEDIA_ROOT, UPLOAD_ROOT
from django import forms
from so.tcm import TcmPro

tcmPro = TcmPro()


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
        return HttpResponse(result)
