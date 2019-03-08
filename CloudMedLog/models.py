from django.db import models


class UploadImage(models.Model):
    img = models.ImageField(upload_to="upload")


class OpLog(models.Model):

    user = models.CharField(max_length=1024, verbose_name="用户", null=False)
    device = models.CharField(max_length=1024, verbose_name="设备名", default="")
    op = models.CharField(max_length=1024, verbose_name="操作名", default="")
    info = models.TextField(verbose_name="操作信息", blank=True, default="")

    date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return super().__str__()
