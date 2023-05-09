from django.shortcuts import render, HttpResponseRedirect

def home(requests):
    return render(requests,'index.html')