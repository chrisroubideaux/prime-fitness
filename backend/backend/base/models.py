from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Sessions(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    title = models.CharField(max_length=500, null=True, blank=True)
    instructor = models.CharField(max_length=500, null=True, blank=True)
    name = models.CharField(max_length=500, null=True, blank=True)
    email = models.CharField(max_length=500, null=True, blank=True)
    phone = models.CharField(max_length=500, null=True, blank=True)
    bio = models.CharField(max_length=500, null=True, blank=True)
    description = models.TextField(max_length=500, null=True, blank=True)
    image = models.ImageField(null=True, blank=True)
    photo = models.ImageField(null=True, blank=True)
    cover = models.ImageField(null=True, blank=True)
    profile = models.ImageField(null=True, blank=True)
    experience = models.CharField(max_length=500, null=True, blank=True)
    days = models.CharField(max_length=500, null=True, blank=True)
    time = models.CharField(max_length=500, null=True, blank=True)
    level = models.CharField(max_length=500, null=True, blank=True)
    group = models.CharField(max_length=500, null=True, blank=True)
    memberships = models.CharField(max_length=500, null=True, blank=True)
    virtualSession = models.CharField(max_length=500, null=True, blank=True)
    chat = models.CharField(max_length=500, null=True, blank=True)
    rating = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    id = models.AutoField(primary_key=True, editable=False)

    def _str_(self):
        return(self.name)

# trainer


class Trainer(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    title = models.CharField(max_length=500, null=True, blank=True)
    instructor = models.CharField(max_length=500, null=True, blank=True)
    name = models.CharField(max_length=500, null=True, blank=True)
    email = models.CharField(max_length=500, null=True, blank=True)
    phone = models.CharField(max_length=500, null=True, blank=True)
    bio = models.CharField(max_length=500, null=True, blank=True)
    description = models.TextField(max_length=500, null=True, blank=True)
    image = models.ImageField(null=True, blank=True)
    photo = models.ImageField(null=True, blank=True)
    cover = models.ImageField(null=True, blank=True)
    profile = models.ImageField(null=True, blank=True)
    experience = models.CharField(max_length=500, null=True, blank=True)
    days = models.CharField(max_length=500, null=True, blank=True)
    time = models.CharField(max_length=500, null=True, blank=True)
    level = models.CharField(max_length=500, null=True, blank=True)
    group = models.CharField(max_length=500, null=True, blank=True)
    memberships = models.CharField(max_length=500, null=True, blank=True)
    virtualSession = models.CharField(max_length=500, null=True, blank=True)
    chat = models.CharField(max_length=500, null=True, blank=True)
    rating = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    id = models.AutoField(primary_key=True, editable=False)

    def _str_(self):
        return (self.name)
# guide


class Guides(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=500, null=True, blank=True)
    title = models.CharField(max_length=500, null=True, blank=True)
    guide = models.CharField(max_length=500, null=True, blank=True)
    bio = models.CharField(max_length=500, null=True, blank=True)
    email = models.CharField(max_length=500, null=True, blank=True)
    photo = models.ImageField(null=True, blank=True)
    cover = models.ImageField(null=True, blank=True)
    phone = models.CharField(max_length=500, null=True, blank=True)
    experience = models.CharField(max_length=500, null=True, blank=True)
    wellness = models.CharField(max_length=500, null=True, blank=True)
    times = models.CharField(max_length=500, null=True, blank=True)
    appointments = models.CharField(max_length=500, null=True, blank=True)
    slot = models.CharField(max_length=500, null=True, blank=True)
    slot2 = models.CharField(max_length=500, null=True, blank=True)
    slot3 = models.CharField(max_length=500, null=True, blank=True)
    slot4 = models.CharField(max_length=500, null=True, blank=True)
    days = models.CharField(max_length=500, null=True, blank=True)
    npc = models.CharField(max_length=500, null=True, blank=True)
    rating = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    verified = models.CharField(max_length=500, null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    id = models.AutoField(primary_key=True, editable=False)

    def _str_(self):
        return (self.name)
# membership


class Member(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    title = models.CharField(max_length=500, null=True, blank=True)
    price = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    total = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    annualFee = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    commitment = models.CharField(max_length=500, null=True, blank=True)
    description = models.CharField(max_length=500, null=True, blank=True)
    image = models.ImageField(null=True, blank=True)
    photo = models.ImageField(null=True, blank=True)
    cover = models.ImageField(null=True, blank=True)
    accsess = models.CharField(max_length=500, null=True, blank=True)
    discounts = models.CharField(max_length=500, null=True, blank=True)
    security = models.CharField(max_length=500, null=True, blank=True)
    wellness = models.CharField(max_length=500, null=True, blank=True)
    wifi = models.CharField(max_length=500, null=True, blank=True)
    guests = models.CharField(max_length=500, null=True, blank=True)
    session = models.CharField(max_length=500, null=True, blank=True)
    training = models.CharField(max_length=500, null=True, blank=True)
    tan = models.CharField(max_length=500, null=True, blank=True)
    massage = models.CharField(max_length=500, null=True, blank=True)
    spa = models.CharField(max_length=500, null=True, blank=True)
    rating = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    verified = models.CharField(max_length=500, null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    id = models.AutoField(primary_key=True, editable=False)

    def _str_(self):
        return (self.name)
# owners


class Owners(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    title = models.CharField(max_length=500, null=True, blank=True)
    name = models.CharField(max_length=500, null=True, blank=True)
    email = models.CharField(max_length=500, null=True, blank=True)
    phone = models.CharField(max_length=500, null=True, blank=True)
    experience = models.CharField(max_length=500, null=True, blank=True)
    bio = models.CharField(max_length=500, null=True, blank=True)
    photo = models.ImageField(null=True, blank=True)
    cover = models.ImageField(null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    id = models.AutoField(primary_key=True, editable=False)

    def _str_(self):
        return (self.name)

# promo


class Promo(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    image1 = models.ImageField(null=True, blank=True)
    image2 = models.ImageField(null=True, blank=True)
    image3 = models.ImageField(null=True, blank=True)
    image4 = models.ImageField(null=True, blank=True)
    description1 = models.CharField(max_length=500, null=True, blank=True)
    description2 = models.CharField(max_length=500, null=True, blank=True)
    description3 = models.CharField(max_length=500, null=True, blank=True)
    description4 = models.CharField(max_length=500, null=True, blank=True)
    id = models.AutoField(primary_key=True, editable=False)

    def _str_(self):
        return (self.name)
# review


class Review(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=500, null=True, blank=True)
    rating = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    comment = models.CharField(max_length=500, null=True, blank=True)
    membershipType = models.CharField(max_length=500, null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    id = models.AutoField(primary_key=True, editable=False)

    def _str_(self):
        return (self.rating)

# order


class Orders(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    paymentMethod = models.CharField(max_length=500, null=True, blank=True)
    taxPrice = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    totalPrice = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    isPaid = models.BooleanField(default=False)
    paidAt = models.DateTimeField(auto_now_add=False, null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    id = models.AutoField(primary_key=True, editable=False)

    def _str_(self):
        return str(self.createdAt)

# checkout details


class CheckoutDetails(models.Model):
    orders = models.OneToOneField(
        Orders, on_delete=models.CASCADE, null=True, blank=True)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    title = models.CharField(max_length=500, null=True, blank=True)
    verified = models.CharField(max_length=500, null=True, blank=True)
    commitment = models.CharField(max_length=500, null=True, blank=True)
    annualFee = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    price = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    total = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)

    createdAt = models.DateTimeField(auto_now_add=True)
    id = models.AutoField(primary_key=True, editable=False)

    def _str_(self):
        return str(self.name)

# mailing address

    class MailingAddress(models.Model):

        orders = models.OneToOneField(
            Orders, on_delete=models.CASCADE, null=True, blank=True)
        address = models.CharField(max_length=500, null=True, blank=True)
        city = models.CharField(max_length=500, null=True, blank=True)
        postalCode = models.CharField(max_length=500, null=True, blank=True)
        country = models.CharField(max_length=500, null=True, blank=True)
        createdAt = models.DateTimeField(auto_now_add=True)
        id = models.AutoField(primary_key=True, editable=False)

        def _str_(self):
            return str(self.address)
