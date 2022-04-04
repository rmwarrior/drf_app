from rest_framework.renderers import JSONRenderer
from rest_framework.viewsets import ModelViewSet
from .models import User
from .serializers import UserModelSerializer


class UserModelViewSet(ModelViewSet):
    # renderer_classes = [JSONRenderer]
    serializer_class = UserModelSerializer
    queryset = User.objects.all()
