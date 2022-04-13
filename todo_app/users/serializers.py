from rest_framework.serializers import ModelSerializer, HyperlinkedModelSerializer
from .models import User


class UserModelSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'first_name', 'last_name', 'email', 'birthday_year', )
        # Можно исключать, чтобы не перечислять всё, либо использовать exclude = ()
        # fields = '__all__'
