from django.db import models

# Create your models here.
class Tree(models.Model):
    name = models.CharField(max_length=200, unique=True)
    common_name = models.CharField(max_length=200, default="common")
    img_url = models.CharField(max_length=999)
    co2 = models.IntegerField()
    price = models.IntegerField()
    description = models.CharField(default="description", max_length=999)
    
    def __str__(self):
        return self.name
    
class Site(models.Model):
    name = models.CharField(max_length=200, unique=True)
    about = models.CharField(max_length=900)
    
    def __str__(self):
        return self.name