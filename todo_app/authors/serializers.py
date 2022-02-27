from rest_framework.serializers import ModelSerializer

from .models import Author


class AuthorModelSerializer(ModelSerializer):
    class Meta:
        model = Author
        # fields = ('username, first_name, last_name, email',)
        # Можно исключать, чтобы не перечислять всё
        fields = '__all__'
