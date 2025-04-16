from django.contrib import admin
from .models import CounselingCard, Doctor, AdmittedEntry, Education, Experience, Award, Testimonial, Slide, TreatmentStep

class CounselingCardAdmin(admin.ModelAdmin):
    list_display = ('title', 'desc', 'icon', 'link')
    search_fields = ('title',)

class DoctorAdmin(admin.ModelAdmin):
    list_display = ('name', 'position', 'title', 'description')
    search_fields = ('name', 'position')
    list_filter = ('title',)

class AdmittedEntryAdmin(admin.ModelAdmin):
    list_display = ('doctor', 'text')
    search_fields = ('text',)

class EducationAdmin(admin.ModelAdmin):
    list_display = ('doctor', 'year', 'details')
    search_fields = ('doctor__name',)

class ExperienceAdmin(admin.ModelAdmin):
    list_display = ('doctor', 'text')
    search_fields = ('doctor__name', 'text')

class AwardAdmin(admin.ModelAdmin):
    list_display = ('doctor', 'image')
    search_fields = ('doctor__name',)

class TestimonialAdmin(admin.ModelAdmin):
    list_display = ('name', 'role', 'quote')
    search_fields = ('name', 'role')

class SlideAdmin(admin.ModelAdmin):
    list_display = ('title', 'subtitle')
    search_fields = ('title',)

class TreatmentStepAdmin(admin.ModelAdmin):
    list_display = ('step_number', 'title', 'description')
    search_fields = ('title',)

# Register your models
admin.site.register(CounselingCard, CounselingCardAdmin)
admin.site.register(Doctor, DoctorAdmin)
admin.site.register(AdmittedEntry, AdmittedEntryAdmin)
admin.site.register(Education, EducationAdmin)
admin.site.register(Experience, ExperienceAdmin)
admin.site.register(Award, AwardAdmin)
admin.site.register(Testimonial, TestimonialAdmin)
admin.site.register(Slide, SlideAdmin)
admin.site.register(TreatmentStep, TreatmentStepAdmin)
