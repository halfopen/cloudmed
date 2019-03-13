# coding: utf-8
import os

class TcmPro:
	def tcmPro(self, img_path, pro_type):
		tmp = os.popen("./main "+img_path+" "+pro_type).readlines()
		print(tmp)
		tmp = tmp[0]
		return tmp.replace("\n", "")


	def facePro(self, img_path):
		tmp = self.tcmPro(img_path, "face")
		tmp = tmp.replace("tcmFaceFeature = ", "")
		return tmp


	def tongPro(self, img_path):
		tmp = self.tcmPro(img_path, "tongue")
		tmp = tmp.replace("tcmTongueFeature = ", "")
		return tmp


if __name__ == "__main__":
	tcm = TcmPro()
	print(tcm.facePro("pos1.jpg"))
	print(tcm.tongPro("pos1.jpg"))
