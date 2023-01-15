from django.urls import path
from . import views


urlpatterns = [
    # path('', views.getRoutes, name="routes"),
    # sessions
    path('sessions/', views.getSessions, name="sessions"),
    path('sessions/<str:pk>/', views.getSession, name="session"),

    # trainers
    path('trainers/', views.getTrainers, name="trainers"),
    path('trainers/<str:pk>/', views.getTrainer, name="trainer"),

    # members
    path('members/', views.getMembers, name="members"),
    path('members/<str:pk>/', views.getMember, name="member"),


    # guides
    path('guides/', views.getGuides, name="guides"),
    path('guides/<str:pk>/', views.getGuide, name="guide"),

    # owners
    path('owners/', views.getOwners, name="owners"),
    path('owners/<str:pk>/', views.getOwner, name="owner"),

]
