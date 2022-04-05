from rest_framework.pagination import LimitOffsetPagination
from rest_framework.viewsets import ModelViewSet
from .models import Project, ToDo
from .serializers import ProjectModelSerializer, ToDoModelSerializer


class ProjectPagination(LimitOffsetPagination):
    default_limit = 10  # размер страницы 10 записей


class ProjectModelViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectModelSerializer
    pagination_class = ProjectPagination


class ToDoPagination(LimitOffsetPagination):
    default_limit = 20  # размер страницы 20 записей


class ToDoModelViewSet(ModelViewSet):
    queryset = ToDo.objects.all()
    serializer_class = ToDoModelSerializer
    pagination_class = ToDoPagination
