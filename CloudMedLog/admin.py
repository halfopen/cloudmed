from django.contrib import admin
from .models import *
# Register your models here.


@admin.register(OpLog)
class OpLogAdmin(admin.ModelAdmin):
    list_display = ('phone', 'device', 'op', 'info', 'date')
    date_hierarchy = 'date'
    list_filter = ('phone', 'device', 'op')
    search_fields = ('info',)
