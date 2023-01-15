from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
#from .sessions import sessions
#from .trainers import trainers
#from .members import members
#from .promos import promos

#from .guides import guides

from .models import *

from .serializers import *
from .serializers import CheckoutDetails
from .serializers import Promo
from .serializers import Guides
# Create your views here.


# @api_view(['GET'])
# def getRoutes(request):

#    routes = [
# sessions
#        '/api/sessions/',
#        '/api/sessions/create/',
#        '/api/sessions/upload/',
#        '/api/sessions<id>/reviews/',
#        '/api/sessions/top/',
#        '/api/sessions/<id>/',
#        '/api/sessions/delete/<id>/',
#        '/api/sessionss/<update>/<id>/',

# trainers
#        '/api/trainers/',
#        '/api/trainers/create/',
#        '/api/trainers/upload/',
#        '/api/trainers<id>/reviews/',
#        '/api/trainers/top/',
#        '/api/trainers/<id>/',
#        '/api/trainers/delete/<id>/',
#        '/api/trainers/<update>/<id>/',

# members
#        '/api/members/',
#        '/api/members/create/',
#        '/api/members/upload/',
#        '/api/members<id>/reviews/',
#        '/api/members/top/',
#        '/api/members/<id>/',
#        '/api/members/delete/<id>/',
#        '/api/members/<update>/<id>/',

# owners
#        '/api/owners/',
#        '/api/owners/create/',
#        '/api/owners/upload/',
#        '/api/owners<id>/reviews/',
#        '/api/owners/top/',
#        '/api/owners/<id>/',
#        '/api/owners/delete/<id>/',
#        '/api/owners/<update>/<id>/',

# guides
# '/api/guides/',
# '/api/guides/create/',
# '/api/guides/upload/',
# '/api/guides<id>/reviews/',
# '/api/guides/top/',
# '/api/guides/<id>/',
# '/api/guides/delete/<id>/',
# '/api/guides/<update>/<id>/',
#   ]

#    return JsonResponse("routes", safe=False)


# sessions

@api_view(['GET'])
def getSessions(request):
    sessions = Sessions.objects.all()
    serializer = SessionsSerializer(sessions, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getSession(request, pk):
    session = Sessions.objects.get(id=pk)
    serializer = SessionsSerializer(session, many=False)
    return Response(serializer.data)

# trainers


@api_view(['GET'])
def getTrainers(request):
    trainers = Trainer.objects.all()
    serializer = TrainerSerializer(trainers, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getTrainer(request, pk):
    trainer = Trainer.objects.get(id=pk)
    serializer = TrainerSerializer(trainer, many=False)
    return Response(serializer.data)

# members


@api_view(['GET'])
def getMembers(request):
    members = Member.objects.all()
    serializer = MemberSerializer(members, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getMember(request, pk):
    member = Member.objects.get(id=pk)
    serializer = MemberSerializer(member, many=False)
    return Response(serializer.data)

# owners


@api_view(['GET'])
def getOwners(request):
    owners = Owners.objects.all()
    serializer = OwnersSerializer(owners, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getOwner(request, pk):
    owner = Owners.objects.get(id=pk)
    serializer = OwnersSerializer(owner, many=False)
    return Response(serializer.data)

# guides


@api_view(['GET'])
def getGuides(request):
    guides = Guides.objects.all()
    serializer = GuidesSerializer(guides, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getGuide(request, pk):
    guide = Guides.objects.get(id=pk)
    serializer = GuidesSerializer(guide, many=False)
    return Response(serializer.data)

# promo


api_view(['GET'])


def getPromos(request):
    promos = Promo.objects.all()
    serializer = PromosSerializer(promos, many=True)
    return Response(serializer.data)


api_view(['GET'])


def getPromo(request, pk):
    promo = Promo.objects.get(id=pk)
    serializer = PromosSerializer(promo, many=False)
    return Response(serializer.data)

# reviews


@api_view(['GET'])
def getReviews(request):
    reviews = Review.objects.all()
    serializer = ReviewSerializer(reviews, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getReview(request, pk):
    review = Review.objects.get(id=pk)
    serializer = ReviewSerializer(review, many=False)
    return Response(serializer.data)

# promos

# checkout Details


@api_view(['GET'])
def getCheckoutDetails(request):
    checkoutDetails = CheckoutDetails.objects.all()
    serializer = CheckoutDetailsSerializer(checkoutDetails, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getCheckoutDetail(request, pk):
    checkoutDetail = CheckoutDetails.objects.get(id=pk)
    serializer = CheckoutDetailsSerializer(checkoutDetail, many=False)
    return Response(serializer.data)


# def getSessions(request):
   # sessions = sessions.objects.all()
    #serializer = SessionSerializer(sessions, many=True)
#    return JsonResponse(sessions, safe=False)


# def getTrainers(request):
#    return JsonResponse(trainers, safe=False)


# def getMembers(request):
#    return JsonResponse(members, safe=False)


# def getOwners(request):
#    return JsonResponse(owners, safe=False)


# def getGuides(request):
#    return JsonResponse(guides, safe=False)
