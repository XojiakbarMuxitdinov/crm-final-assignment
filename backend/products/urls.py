from django.urls import path
from . import views

urlpatterns = [
    path('', views.ProductListCreateView.as_view(), name='product-list'),
    path('<uuid:pk>/', views.ProductDetailView.as_view(), name='product-detail'),
    path('search/', views.product_search, name='product-search'),
    path('low-stock/', views.low_stock_products, name='low-stock-products'),
    path('categories/', views.CategoryListCreateView.as_view(), name='category-list'),
    path('brands/', views.BrandListCreateView.as_view(), name='brand-list'),
]
