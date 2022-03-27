from rest_framework.renderers import JSONRenderer
from rest_framework.viewsets import ModelViewSet

from .models import User, Project, ToDo

from .serializers import UserModelSerializer, ProjectModelSerializer, ToDoModelSerializer


class UserModelViewSet(ModelViewSet):
    renderer_classes = [JSONRenderer]
    queryset = User.objects.all()
    serializer_class = UserModelSerializer


class ProjectModelViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectModelSerializer


class ToDoModelViewSet(ModelViewSet):
    queryset = ToDo.objects.all()
    serializer_class = ToDoModelSerializer