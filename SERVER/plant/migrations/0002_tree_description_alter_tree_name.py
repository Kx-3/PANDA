# Generated by Django 5.0.5 on 2024-05-13 14:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('plant', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='tree',
            name='description',
            field=models.CharField(default='description', max_length=999),
        ),
        migrations.AlterField(
            model_name='tree',
            name='name',
            field=models.CharField(max_length=200, unique=True),
        ),
    ]
