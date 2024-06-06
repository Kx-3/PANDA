from django.urls import path, include
from .views import register_user, login_user, logout_user, show_trees, show_sites, send_order

urlpatterns = [
    path("login/", login_user, name="login"),
    path("register/", register_user, name="register"),
    path("logout/", logout_user, name="logout"),
    path("trees/", show_trees, name="trees"),
    path("sites/", show_sites, name="sites"),
    path("plant/", send_order, name="plant")
]