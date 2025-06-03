from django.core.management.base import BaseCommand
from products.models import Category, Brand, Product
from customers.models import Customer
from orders.models import Order, OrderItem
from decimal import Decimal
import random
from django.utils import timezone

class Command(BaseCommand):
    help = 'Create sample data for testing'

    def handle(self, *args, **options):
        self.stdout.write('Creating sample data...')
        
        # Categories yaratish
        categories_data = [
            {'name': 'Erkaklar kiyimi', 'description': 'Erkaklar uchun kiyimlar'},
            {'name': 'Ayollar kiyimi', 'description': 'Ayollar uchun kiyimlar'},
            {'name': 'Bolalar kiyimi', 'description': 'Bolalar uchun kiyimlar'},
            {'name': 'Poyabzal', 'description': 'Har xil poyabzallar'},
            {'name': 'Aksessuarlar', 'description': 'Kiyim aksessuarlari'},
        ]
        
        for cat_data in categories_data:
            category, created = Category.objects.get_or_create(
                name=cat_data['name'],
                defaults=cat_data
            )
            if created:
                self.stdout.write(f'Created category: {category.name}')

        # Brands yaratish
        brands_data = [
            {'name': 'Nike', 'description': 'Sport kiyimlari'},
            {'name': 'Adidas', 'description': 'Sport brendи'},
            {'name': 'Zara', 'description': 'Moda kiyimlari'},
            {'name': 'H&M', 'description': 'Arzon moda'},
            {'name': 'LC Waikiki', 'description': 'Oilaviy brend'},
        ]
        
        for brand_data in brands_data:
            brand, created = Brand.objects.get_or_create(
                name=brand_data['name'],
                defaults=brand_data
            )
            if created:
                self.stdout.write(f'Created brand: {brand.name}')

        # Products yaratish
        categories = list(Category.objects.all())
        brands = list(Brand.objects.all())
        
        products_data = [
            {'name': 'Erkaklar ko\'ylagi', 'sku': 'EK001', 'description': 'Klassik erkaklar ko\'ylagi'},
            {'name': 'Ayollar bluzasi', 'sku': 'AB001', 'description': 'Zamonaviy ayollar bluzasi'},
            {'name': 'Jeans shim', 'sku': 'JS001', 'description': 'Universal jeans shim'},
            {'name': 'Sport krossovka', 'sku': 'SK001', 'description': 'Yuqori sifatli sport poyabzali'},
            {'name': 'Bolalar futbolkasi', 'sku': 'BF001', 'description': 'Bolalar uchun qulay futbolka'},
            {'name': 'Ayollar ko\'ylagi', 'sku': 'AK001', 'description': 'Zamonaviy ayollar ko\'ylagi'},
            {'name': 'Erkaklar pantalonи', 'sku': 'EP001', 'description': 'Klassik erkaklar pantalonи'},
            {'name': 'Bolalar shim', 'sku': 'BS001', 'description': 'Bolalar uchun qulay shim'},
            {'name': 'Sport kostyum', 'sku': 'SPK001', 'description': 'Sport mashg\'ulotlari uchun kostyum'},
            {'name': 'Ayollar tunika', 'sku': 'AT001', 'description': 'Zamonaviy ayollar tunikasi'},
        ]
        
        for prod_data in products_data:
            product, created = Product.objects.get_or_create(
                sku=prod_data['sku'],
                defaults={
                    'name': prod_data['name'],
                    'description': prod_data['description'],
                    'category': random.choice(categories),
                    'brand': random.choice(brands),
                    'wholesale_price': Decimal(str(random.randint(50, 200) * 1000)),
                    'retail_price': Decimal(str(random.randint(80, 300) * 1000)),
                    'cost_price': Decimal(str(random.randint(30, 150) * 1000)),
                    'stock_quantity': random.randint(10, 100),
                    'min_stock_level': 10,
                    'max_stock_level': 100,
                    'status': 'active',
                    'is_featured': random.choice([True, False]),
                    'created_at': timezone.now(),
                    'updated_at': timezone.now(),
                }
            )
            if created:
                self.stdout.write(f'Created product: {product.name}')

        # Customers yaratish
        customers_data = [
            {'company_name': 'Karimov Trade', 'contact_person': 'Alisher Karimov', 'phone': '+998901234567'},
            {'company_name': 'Tosh Fashion', 'contact_person': 'Malika Tosheva', 'phone': '+998902345678'},
            {'company_name': 'Rahim Textile', 'contact_person': 'Bobur Rahimov', 'phone': '+998903456789'},
            {'company_name': 'Said Group', 'contact_person': 'Nilufar Saidova', 'phone': '+998904567890'},
            {'company_name': 'Umar Fashion', 'contact_person': 'Jasur Umarov', 'phone': '+998905678901'},
        ]
        
        for i, cust_data in enumerate(customers_data, 1):
            customer, created = Customer.objects.get_or_create(
                customer_code=f'CUST{str(i).zfill(3)}',
                defaults={
                    'company_name': cust_data['company_name'],
                    'contact_person': cust_data['contact_person'],
                    'business_type': random.choice(['retailer', 'distributor', 'wholesaler']),
                    'phone': cust_data['phone'],
                    'email': f"customer{i}@example.com",
                    'billing_address': 'Toshkent shahar',
                    'city': 'Toshkent',
                    'state': 'Toshkent',
                    'postal_code': '100000',
                    'country': 'Uzbekistan',
                    'credit_limit': Decimal(str(random.randint(1000, 10000) * 1000)),
                    'payment_terms': '30',
                    'discount_percentage': Decimal(str(random.randint(5, 15))),
                    'status': 'active',
                    'created_at': timezone.now(),
                    'updated_at': timezone.now(),
                }
            )
            if created:
                self.stdout.write(f'Created customer: {customer.company_name}')

        # Orders yaratish
        customers = list(Customer.objects.all())
        products = list(Product.objects.all())
        
        for i in range(10):
            customer = random.choice(customers)
            order, created = Order.objects.get_or_create(
                order_number=f'ORD{str(i+1).zfill(4)}',
                defaults={
                    'customer': customer,
                    'status': random.choice(['pending', 'confirmed', 'processing', 'completed']),
                    'payment_status': random.choice(['pending', 'paid', 'partial']),
                    'payment_method': random.choice(['bank_transfer', 'credit_card', 'cash']),
                    'subtotal': Decimal('0.00'),
                    'discount_amount': Decimal('0.00'),
                    'tax_amount': Decimal('0.00'),
                    'shipping_amount': Decimal('0.00'),
                    'total_amount': Decimal('0.00'),
                    'billing_address': customer.billing_address,
                    'shipping_address': customer.billing_address,
                    'order_date': timezone.now(),
                    'created_at': timezone.now(),
                    'updated_at': timezone.now(),
                }
            )
            
            if created:
                # Order items yaratish
                total = Decimal('0.00')
                for j in range(random.randint(1, 5)):
                    product = random.choice(products)
                    quantity = random.randint(1, 10)
                    unit_price = product.wholesale_price
                    total_price = unit_price * quantity
                    total += total_price
                    
                    OrderItem.objects.create(
                        order=order,
                        product=product,
                        quantity=quantity,
                        unit_price=unit_price,
                        total_price=total_price,
                    )
                
                order.subtotal = total
                order.total_amount = total
                order.save()
                
                self.stdout.write(f'Created order: {order.order_number}')

        self.stdout.write(self.style.SUCCESS('Sample data created successfully!'))
