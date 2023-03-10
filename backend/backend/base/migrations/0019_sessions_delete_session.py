# Generated by Django 4.1.4 on 2023-01-07 14:37

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('base', '0018_rename_id_session__id'),
    ]

    operations = [
        migrations.CreateModel(
            name='Sessions',
            fields=[
                ('title', models.CharField(blank=True, max_length=500, null=True)),
                ('instructor', models.CharField(blank=True, max_length=500, null=True)),
                ('name', models.CharField(blank=True, max_length=500, null=True)),
                ('email', models.CharField(blank=True, max_length=500, null=True)),
                ('phone', models.CharField(blank=True, max_length=500, null=True)),
                ('bio', models.CharField(blank=True, max_length=500, null=True)),
                ('description', models.TextField(blank=True, max_length=500, null=True)),
                ('image', models.ImageField(blank=True, null=True, upload_to='')),
                ('photo', models.ImageField(blank=True, null=True, upload_to='')),
                ('cover', models.ImageField(blank=True, null=True, upload_to='')),
                ('profile', models.ImageField(blank=True, null=True, upload_to='')),
                ('experience', models.CharField(blank=True, max_length=500, null=True)),
                ('days', models.CharField(blank=True, max_length=500, null=True)),
                ('time', models.CharField(blank=True, max_length=500, null=True)),
                ('level', models.CharField(blank=True, max_length=500, null=True)),
                ('group', models.CharField(blank=True, max_length=500, null=True)),
                ('memberships', models.CharField(blank=True, max_length=500, null=True)),
                ('virtualSession', models.CharField(blank=True, max_length=500, null=True)),
                ('chat', models.CharField(blank=True, max_length=500, null=True)),
                ('rating', models.DecimalField(blank=True, decimal_places=2, max_digits=7, null=True)),
                ('createdAt', models.DateTimeField(auto_now_add=True)),
                ('id', models.AutoField(editable=False, primary_key=True, serialize=False)),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.DeleteModel(
            name='Session',
        ),
    ]
