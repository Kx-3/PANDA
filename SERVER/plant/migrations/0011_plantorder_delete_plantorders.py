# Generated by Django 5.0.4 on 2024-06-06 12:48

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('plant', '0010_rename_plantorder_plantorders'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='PlantOrder',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('order_date', models.DateField(auto_now_add=True)),
                ('site_name', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='plant.site', to_field='name')),
                ('tree_species', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='plant.tree', to_field='name')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, to_field='username')),
            ],
        ),
        migrations.DeleteModel(
            name='PlantOrders',
        ),
    ]
