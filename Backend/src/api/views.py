from rest_framework import generics
from ..services.doctors.models import CounselingCard, Doctor, AdmittedEntry, Education, Experience, Award, Testimonial, Slide, TreatmentStep
from .serializers import CounselingCardSerializer, DoctorSerializer, AdmittedEntrySerializer, EducationSerializer, ExperienceSerializer, AwardSerializer, TestimonialSerializer, SlideSerializer, TreatmentStepSerializer

# Generic List and Detail Views for all models

class CounselingCardListCreateView(generics.ListCreateAPIView):
    queryset = CounselingCard.objects.all()
    serializer_class = CounselingCardSerializer

class CounselingCardRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = CounselingCard.objects.all()
    serializer_class = CounselingCardSerializer

class DoctorListCreateView(generics.ListCreateAPIView):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer

class DoctorRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer

class AdmittedEntryListCreateView(generics.ListCreateAPIView):
    queryset = AdmittedEntry.objects.all()
    serializer_class = AdmittedEntrySerializer

class AdmittedEntryRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = AdmittedEntry.objects.all()
    serializer_class = AdmittedEntrySerializer

class EducationListCreateView(generics.ListCreateAPIView):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer

class EducationRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer

class ExperienceListCreateView(generics.ListCreateAPIView):
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer

class ExperienceRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer

class AwardListCreateView(generics.ListCreateAPIView):
    queryset = Award.objects.all()
    serializer_class = AwardSerializer

class AwardRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Award.objects.all()
    serializer_class = AwardSerializer

class TestimonialListCreateView(generics.ListCreateAPIView):
    queryset = Testimonial.objects.all()
    serializer_class = TestimonialSerializer

class TestimonialRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Testimonial.objects.all()
    serializer_class = TestimonialSerializer

class SlideListCreateView(generics.ListCreateAPIView):
    queryset = Slide.objects.all()
    serializer_class = SlideSerializer

class SlideRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Slide.objects.all()
    serializer_class = SlideSerializer

class TreatmentStepListCreateView(generics.ListCreateAPIView):
    queryset = TreatmentStep.objects.all()
    serializer_class = TreatmentStepSerializer

class TreatmentStepRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = TreatmentStep.objects.all()
    serializer_class = TreatmentStepSerializer
