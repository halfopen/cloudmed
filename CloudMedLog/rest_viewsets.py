from rest_framework import routers, serializers, viewsets
from rest_framework.pagination import *
from .models import *
from .serialisers import *


class DataSetPaging(LimitOffsetPagination):
    max_limit = 20  # 最大限制默认是None
    default_limit = 10  # 设置每一页显示多少条
    limit_query_param = "limit"  # 往后取几条
    offset_query_param = "offset"  # 当前所在的位置


class OpLogViewset(viewsets.ModelViewSet):
    queryset = OpLog.objects.order_by("-id").all()
    serializer_class = OpLogSlz
    pagination_class = DataSetPaging


class UploadedImageViewset(viewsets.ModelViewSet):
    queryset = UploadImage.objects.order_by("-id").all()
    serializer_class = UploadedImageSlz
    pagination_class = DataSetPaging