from django.conf.urls import url, include
from rest_framework import routers
from .rest_viewsets import *
from .views import *

router = routers.DefaultRouter()
router.register(r'op_log', OpLogViewset)
router.register(r'diagnosis', DiagnosisImageViewset)
router.register(r'report', ReportViewset)
router.register(r'user', UserViewset)


urlpatterns = [
    # restful api list, with get and post method
    url(r'^', include(router.urls)),
]
