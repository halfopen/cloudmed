from rest_framework import serializers
from .models import *


class OpLogSlz(serializers.ModelSerializer):

    class Meta:
        model = OpLog
        fields = '__all__'


class UploadedImageSlz(serializers.ModelSerializer):

    class Meta:
        model = UploadImage
        fields = "__all__"
