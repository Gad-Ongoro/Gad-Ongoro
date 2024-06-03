from django.shortcuts import render
from rest_framework import generics, views, status, response
from django.core.mail import send_mail
from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string
from django.conf import settings
from . import models
from . import serializers

# Create your views here.
class Contact_ListView(generics.ListAPIView):
    queryset = models.Contact.objects.all()
    serializer_class = serializers.ContactSerializer
    
class Contact_DetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Contact.objects.all()
    serializer_class = serializers.ContactSerializer

class SendEmailView(views.APIView):
    def post(self, request, *args, **kwargs):
        serializer = serializers.ContactSerializer(data=request.data)
        if serializer.is_valid():
            name = serializer.validated_data['name']
            email = serializer.validated_data['email']
            message = serializer.validated_data['message']
            
            # Send email
            # send_mail(
            #     f"Contact form submission from {name}",
            #     message,
            #     email,
            #     ['wavatar245@fresec.com'],
            #     fail_silently=False,
            # )

            context = {'user': name}
            subject = f'New Contact Message from {name}'
            from_email = settings.DEFAULT_FROM_EMAIL
            to_email = 'gadongoro1@gmail.com'

            # Render the HTML template to a string
            html_content = render_to_string('contact_email.html', {
                'name': name,
                'email': email,
                'message': message,
            })
            text_content = 'This is an important message.'  # Fallback text content

            # Create the email
            email = EmailMultiAlternatives(subject, text_content, from_email, [to_email])
            email.attach_alternative(html_content, "text/html")

            # Send the email
            email.send()

            models.Contact.objects.create(name=name, email=email, message=message)

            return response.Response({'message': 'Email sent successfully'}, status=status.HTTP_200_OK)
        return response.Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)