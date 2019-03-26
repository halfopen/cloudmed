from rest_framework import serializers
from .models import *


class UserSlz(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = '__all__'

class OpLogSlz(serializers.ModelSerializer):

    class Meta:
        model = OpLog
        fields = '__all__'


class DiagnosisSlz(serializers.ModelSerializer):

    class Meta:
        model = Diagnosis
        fields = "__all__"


class ReportSlz(serializers.ModelSerializer):

    class Meta:
        model = Report
        fields = "__all__"
