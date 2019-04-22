from django.db import models


class Diagnosis(models.Model):
    """
        一次面诊或者舌诊记录
    """
    img = models.ImageField(upload_to="upload")
    crop_img_base64 = models.TextField(verbose_name="剪切图的base64编码", blank=True, default="")
    type = models.IntegerField(default=0, verbose_name="类型", choices=((0, "脸部"), (1, "舌头")))
    date = models.DateTimeField(auto_now=True)
    phone = models.CharField(max_length=24, verbose_name="手机号")
    result_code = models.CharField(max_length=16, verbose_name="结果", default="0")


class Report(models.Model):
    """
        诊断记录
    """
    tizhi = models.CharField(verbose_name="体质", default="正常", max_length=16)       # 主要体质
    score = models.IntegerField(verbose_name="分数")                      # 健康分数
    tongue = models.CharField(max_length=2048, verbose_name="舌诊", null=True)       # tongueJson
    face = models.CharField(max_length=2048, verbose_name="面诊", null=True)     # faceJson
    date = models.DateTimeField(auto_now=True)
    questions = models.TextField(verbose_name="回答的问题", default="")
    result_json = models.TextField(verbose_name="原始json", default="")
    phone = models.CharField(max_length=24, verbose_name="手机号")


class OpLog(models.Model):
    """
        操作日志
    """
    phone = models.CharField(max_length=24, verbose_name="手机号")
    device = models.CharField(max_length=1024, verbose_name="设备名", default="")
    op = models.CharField(max_length=1024, verbose_name="操作名", default="")
    info = models.TextField(verbose_name="操作信息", blank=True, default="")

    date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return super().__str__()
