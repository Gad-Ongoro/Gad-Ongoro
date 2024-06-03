from django.urls import path
from . import views

urlpatterns = [
    path('contacts/', views.Contact_ListView.as_view(), name='contacts_list'),
    path('post/contacts/', views.SendEmailView.as_view(), name='contact_create'),
    path('contacts/<uuid:pk>/', views.Contact_DetailView.as_view(), name='contact_detail'),
]