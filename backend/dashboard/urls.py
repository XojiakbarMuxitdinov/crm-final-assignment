from django.urls import path
from . import views

urlpatterns = [
    path('overview/', views.dashboard_overview, name='dashboard-overview'),
    path('sales-analytics/', views.sales_analytics, name='sales-analytics'),
]
