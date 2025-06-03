from django.urls import path
from . import views

urlpatterns = [
    path('', views.OrderListCreateView.as_view(), name='order-list'),
    path('<uuid:pk>/', views.OrderDetailView.as_view(), name='order-detail'),
    path('search/', views.order_search, name='order-search'),
]
