from django.shortcuts import render
from django.http.response import *
import os
import time
# Create your views here.

def upload_image(req):

	if req.method == 'POST':
		my_file = req.POST.get("file", None)
		if not my_file:
			print("no file to upload")
			return HttpResponse("")

		file_ext = os.path.splitext(my_file.name)[1]
		filename = str(time.time())+file_ext
		
		with open(filename, "wb") as f:
			for t in my_file.chunks():
				f.write(t)

		return HttpResponse(filename)
