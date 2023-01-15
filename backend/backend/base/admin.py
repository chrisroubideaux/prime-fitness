from .models import *
from django.contrib import admin

# Register your models here.

admin.site.register(Sessions)
admin.site.register(Trainer)
admin.site.register(Guides)
admin.site.register(Member)
admin.site.register(Owners)
admin.site.register(Review)
admin.site.register(Promo)
admin.site.register(Orders)

admin.site.register(CheckoutDetails)
