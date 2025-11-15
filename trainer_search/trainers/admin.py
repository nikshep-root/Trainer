from django.contrib import admin
from .models import Trainer


# Register your models here.
class TrainerAdmin(admin.ModelAdmin):
    list_display = (
        'name',
        'location',
        'phone',
        'email',
        'technology1',
        'technology2',
    )


admin.site.register(Trainer, TrainerAdmin)
