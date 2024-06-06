from django.db import models
from django.contrib.auth.models import User

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
    img_url = models.CharField(max_length=999, default="image")
    
    def __str__(self):
        return self.name
    
class PlantOrder(models.Model):
    tree_species = models.ForeignKey(Tree, on_delete=models.CASCADE, to_field="name")
    site_name = models.ForeignKey(Site, on_delete=models.CASCADE, to_field="name")
    user = models.ForeignKey(User, on_delete=models.CASCADE, to_field="username")
    order_date = models.DateField(auto_now_add=True)
    
    def __str__(self):
        return self.tree_species