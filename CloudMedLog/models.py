from django.db import models


class User(models.Model):
    username = models.CharField(max_length=48, verbose_name="用户名")
    phone = models.CharField(max_length=16, verbose_name="用户手机号")
    password = models.CharField(max_length=2048, verbose_name="用户密码")
    date = models.DateTimeField(auto_now=True)


class Diagnosis(models.Model):
    """
        一次面诊或者舌诊记录
    """
    img = models.ImageField(upload_to="upload")
    type = models.IntegerField(default=0, verbose_name="类型", choices=((0, "脸部"), (1, "舌头")))
    date = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(User, on_delete="CASCADE")


class Report(models.Model):
    """
        诊断记录
    """
    tizhi = models.CharField(verbose_name="体质", default="正常", max_length=16)       # 主要体质
    score = models.IntegerField(verbose_name="分数")                      # 健康分数
    tongue = models.CharField(max_length=2048, verbose_name="舌诊")       # tongueJson
    face = models.CharField(max_length=2048, verbose_name="面诊")     # faceJson
    date = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(User, on_delete="CASCADE")


class OpLog(models.Model):
    """
        操作日志
    """
    user = models.ForeignKey(User, on_delete="CASCADE")
    device = models.CharField(max_length=1024, verbose_name="设备名", default="")
    op = models.CharField(max_length=1024, verbose_name="操作名", default="")
    info = models.TextField(verbose_name="操作信息", blank=True, default="")

    date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return super().__str__()
