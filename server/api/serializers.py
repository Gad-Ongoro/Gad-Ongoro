from rest_framework import serializers
from django.core.mail import send_mail
from . import models

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Contact
        fields = '__all__'