from django.urls import path
from .views import TrainerRetriveUpdateDestroyView,TrainerListCreateView

urlpatterns = [
    path('trainers/',TrainerListCreateView.as_view(),name='trainer-list-create'),
    path('trainers/<int:pk>/',TrainerRetriveUpdateDestroyView.as_view(),name='trainer-details')
]