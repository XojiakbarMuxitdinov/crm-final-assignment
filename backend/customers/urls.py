from django.urls import path
from . import views

urlpatterns = [
    path('', views.CustomerListCreateView.as_view(), name='customer-list'),
    path('<uuid:pk>/', views.CustomerDetailView.as_view(), name='customer-detail'),
    path('search/', views.customer_search, name='customer-search'),
]
