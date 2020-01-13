from django.contrib import admin
from .models import Lead
from .models import BankRates

# Register your models here.
admin.site.register(Lead)
admin.site.register(BankRates)