from django.http import HttpResponse
from django.template import loader


def index(request):
    template = loader.get_template("vook_django_v1/index.html")
    context = {}
    return HttpResponse(template.render(context, request))
