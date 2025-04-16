from django.urls import path, include
from .views import (
    CounselingCardListCreateView, CounselingCardRetrieveUpdateDestroyView,
    DoctorListCreateView, DoctorRetrieveUpdateDestroyView,
    AdmittedEntryListCreateView, AdmittedEntryRetrieveUpdateDestroyView,
    EducationListCreateView, EducationRetrieveUpdateDestroyView,
    ExperienceListCreateView, ExperienceRetrieveUpdateDestroyView,
    AwardListCreateView, AwardRetrieveUpdateDestroyView,
    TestimonialListCreateView, TestimonialRetrieveUpdateDestroyView,
    SlideListCreateView, SlideRetrieveUpdateDestroyView,
    TreatmentStepListCreateView, TreatmentStepRetrieveUpdateDestroyView,
)

urlpatterns = [
    path('counseling-cards/', CounselingCardListCreateView.as_view(), name='counseling-card-list-create'),
    path('counseling-cards/<int:pk>/', CounselingCardRetrieveUpdateDestroyView.as_view(), name='counseling-card-detail'),
    path('doctors/', DoctorListCreateView.as_view(), name='doctor-list-create'),
    path('doctors/<int:pk>/', DoctorRetrieveUpdateDestroyView.as_view(), name='doctor-detail'),
    path('admitted-entries/', AdmittedEntryListCreateView.as_view(), name='admitted-entry-list-create'),
    path('admitted-entries/<int:pk>/', AdmittedEntryRetrieveUpdateDestroyView.as_view(), name='admitted-entry-detail'),
    path('educations/', EducationListCreateView.as_view(), name='education-list-create'),
    path('educations/<int:pk>/', EducationRetrieveUpdateDestroyView.as_view(), name='education-detail'),
    path('experiences/', ExperienceListCreateView.as_view(), name='experience-list-create'),
    path('experiences/<int:pk>/', ExperienceRetrieveUpdateDestroyView.as_view(), name='experience-detail'),
    path('awards/', AwardListCreateView.as_view(), name='award-list-create'),
    path('awards/<int:pk>/', AwardRetrieveUpdateDestroyView.as_view(), name='award-detail'),
    path('testimonials/', TestimonialListCreateView.as_view(), name='testimonial-list-create'),
    path('testimonials/<int:pk>/', TestimonialRetrieveUpdateDestroyView.as_view(), name='testimonial-detail'),
    path('slides/', SlideListCreateView.as_view(), name='slide-list-create'),
    path('slides/<int:pk>/', SlideRetrieveUpdateDestroyView.as_view(), name='slide-detail'),
    path('treatment-steps/', TreatmentStepListCreateView.as_view(), name='treatment-step-list-create'),
    path('treatment-steps/<int:pk>/', TreatmentStepRetrieveUpdateDestroyView.as_view(), name='treatment-step-detail'),
    
    
    # 🔐 We will use this code in future use for now its commented
    
    # path('accounts/', include('allauth.urls')),  
    # path('auth/', include('dj_rest_auth.urls')), 
    # path('auth/registration/', include('dj_rest_auth.registration.urls')),  
    
    # Website Url


]
