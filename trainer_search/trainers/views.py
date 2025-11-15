from django.shortcuts import render
from .models import Trainer
from .serializers import TrainerSerializer
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from django.db.models import Q

class TrainerListCreateView(generics.ListCreateAPIView):
    queryset = Trainer.objects.all()
    serializer_class = TrainerSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        queryset = Trainer.objects.all()

        name = self.request.query_params.get('name')
        location = self.request.query_params.get('location')
        technology = self.request.query_params.get('technology')
        

        if name:
            queryset = queryset.filter(name__icontains = name)

        if location:
            queryset = queryset.filter(location__icontains = location)

        if technology:
            queryset = queryset.filter(
                Q(technology1__icontains =technology ) | Q(technology2__icontains=technology))


        return queryset
    
class TrainerRetriveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Trainer.objects.all()
    serializer_class = TrainerSerializer
    permission_classes = [IsAuthenticated]
