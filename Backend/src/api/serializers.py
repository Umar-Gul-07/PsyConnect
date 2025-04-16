from rest_framework import serializers
from ..services.doctors.models import CounselingCard, Doctor, AdmittedEntry, Education, Experience, Award, Testimonial, Slide, TreatmentStep

class CounselingCardSerializer(serializers.ModelSerializer):
    class Meta:
        model = CounselingCard
        fields = '__all__'

class DoctorSerializer(serializers.ModelSerializer):
    admitted_entries = serializers.StringRelatedField(many=True)
    education = serializers.StringRelatedField(many=True)
    experience = serializers.StringRelatedField(many=True)
    awards = serializers.StringRelatedField(many=True)

    class Meta:
        model = Doctor
        fields = '__all__'

class AdmittedEntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = AdmittedEntry
        fields = '__all__'

class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = '__all__'

class ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experience
        fields = '__all__'

class AwardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Award
        fields = '__all__'

class TestimonialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Testimonial
        fields = '__all__'

class SlideSerializer(serializers.ModelSerializer):
    class Meta:
        model = Slide
        fields = '__all__'

class TreatmentStepSerializer(serializers.ModelSerializer):
    class Meta:
        model = TreatmentStep
        fields = '__all__'
