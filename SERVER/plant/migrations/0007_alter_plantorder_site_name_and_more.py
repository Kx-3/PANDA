# Generated by Django 5.0.5 on 2024-06-06 08:35

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('plant', '0006_plantorder'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AlterField(
            model_name='plantorder',
            name='site_name',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='plant.site', to_field='name'),
        ),
        migrations.AlterField(
            model_name='plantorder',
            name='tree_species',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='plant.tree', to_field='name'),
        ),
        migrations.AlterField(
            model_name='plantorder',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, to_field='username'),
        ),
    ]
