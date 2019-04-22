"""cloudmed URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
import os, django, cloudmed.settings
from django.conf.urls import url, include
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.conf.urls import url, include
from django.contrib import admin
import CloudMedLog.urls
from CloudMedLog.views import *
from django.views.static import serve


DIRNAME = os.path.dirname(__file__)

urlpatterns = [
    url(r'^$', face),
    url(r'^admin/', admin.site.urls),
    url(r'^api/', include(CloudMedLog.urls)),
    url(r'^upload$', upload_image),
    url(r'^upload_image_base64$', upload_image_base64),
    url(r'^send_code', sendVrfCode),
    url(r'^check_code', checkVrfCode),
    url(r'^media/(?P<path>.*)$', serve, {'document_root':settings.MEDIA_ROOT}),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_URL)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_URL)
