from rest_framework import status
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from .filters import ToDoFilter
from .models import Project, ToDo
from .serializers import ProjectModelSerializer, ToDoModelSerializer


class ProjectPagination(LimitOffsetPagination):
    default_limit = 10  # размер страницы 10 записей


class ProjectModelViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectModelSerializer
    pagination_class = ProjectPagination

    def get_queryset(self):
        name = self.request.query_params.get('name', '')
        projects = Project.objects.all()
        if name:
            projects = projects.filter(name__contains=name)
        return projects


class ToDoPagination(LimitOffsetPagination):
    default_limit = 20  # размер страницы 20 записей


class ToDoModelViewSet(ModelViewSet):
    queryset = ToDo.objects.all()
    serializer_class = ToDoModelSerializer
    pagination_class = ToDoPagination
    # filterset_class = ToDoFilter  # Вариант 1
    filterset_fields = ['project']  # Вариант 2

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        if instance:
            instance.is_active = False
            instance.save()
        # return instance
        return Response(status=status.HTTP_204_NO_CONTENT)
