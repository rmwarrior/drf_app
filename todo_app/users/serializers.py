from rest_framework.serializers import ModelSerializer, HyperlinkedModelSerializer

from .models import User, Project, ToDo


class UserModelSerializer(ModelSerializer):
    class Meta:
        model = User
        # fields = ('username, first_name, last_name, email',)
        # Можно исключать, чтобы не перечислять всё, либо использовать exclude = ()
        fields = '__all__'


class ProjectModelSerializer(ModelSerializer):
    # users = UserModelSerializer(many=True)

    class Meta:
        model = Project
        fields = '__all__'


class ToDoModelSerializer(HyperlinkedModelSerializer):
    # user = UserModelSerializer()
    # project = ProjectModelSerializer()

    class Meta:
        model = ToDo
        fields = '__all__'
