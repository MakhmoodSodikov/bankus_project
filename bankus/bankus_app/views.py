from django.shortcuts import render
from . import models


def rates_render(request):
    obj1 = models.BankRates.objects.get(id=1)
    obj2 = models.BankRates.objects.get(id=2)
    context = {
        'obj1': obj1,
        'obj2': obj2
    }
    return render(request, 'rates.html', context)
# Create your views here.
