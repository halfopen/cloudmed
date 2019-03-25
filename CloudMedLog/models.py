from django.db import models


class User(models.Model):
    username = models.CharField()
    phone = models.CharField()
    password = models.CharField()


class Diagnosis(models.Model):
    img = models.ImageField(upload_to="upload")
    type = models.IntegerField(default=0, verbose_name="类型", choices=((0, "脸部"), (1, "舌头")))


class Report(models.Model):
    date = models.DateTimeField(auto_now_add=True)
    tizhi = models.CharField(verbose_name="体质", default="正常")
    score = models.IntegerField(verbose_name="分数")
    tongue = models.CharField(max_length=1024)
    face = models.CharField(max_length=1024, verbose_name="面诊")


class OpLog(models.Model):

    user = models.CharField(max_length=1024, verbose_name="用户", null=False)
    device = models.CharField(max_length=1024, verbose_name="设备名", default="")
    op = models.CharField(max_length=1024, verbose_name="操作名", default="")
    info = models.TextField(verbose_name="操作信息", blank=True, default="")

    date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return super().__str__()
