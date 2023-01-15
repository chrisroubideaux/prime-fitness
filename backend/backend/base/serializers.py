from rest_framework import serializers
from django.contrib.auth.models import User
from .models import *

from .models import Sessions
from .models import Trainer
from .models import Member
from .models import Guides
from .models import Promo
from .models import Review
from .models import Orders
from .models import CheckoutDetails
from .models import Owners

class SessionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sessions
        fields = '__all__'


class TrainerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trainer
        fields = '__all__'


class MemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = '__all__'


class GuidesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Guides
        fields = '__all__'


class PromosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Promo
        fields = '__all__'


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = '__all__'


class OrdersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Orders
        fields = '__all__'


class CheckoutDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = CheckoutDetails
        fields = '__all__'


class OwnersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Owners
        fields = '__all__'
