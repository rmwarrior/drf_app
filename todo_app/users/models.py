from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    first_name = models.CharField(max_length=64)
    last_name = models.CharField(max_length=64)
    email = models.CharField(max_length=254, unique=True)
    birthday_year = models.PositiveIntegerField()

    def __str__(self):
        return f'{self.first_name} {self.last_name} {self.birthday_year}'


class Project(models.Model):
    name = models.CharField(max_length=64)
    repo = models.CharField(max_length=254)
    users = models.ManyToManyField(User)

    def __str__(self):
        return self.name


class ToDo(models.Model):
    project = models.OneToOneField(Project, on_delete=models.CASCADE)
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    text = models.CharField(max_length=254)
    creation_date = models.DateTimeField()
    update_date = models.DateTimeField()
    is_active = models.BooleanField()

    def __str__(self):
        return f'{self.project} {self.user} {self.text}'
