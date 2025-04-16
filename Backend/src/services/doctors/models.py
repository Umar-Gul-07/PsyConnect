from django.db import models

class CounselingCard(models.Model):
    title = models.CharField(max_length=100)
    desc = models.TextField()
    icon = models.CharField(max_length=100)
    link = models.URLField(max_length=200)

    def __str__(self):
        return self.title
       
class Doctor(models.Model):
    name = models.CharField(max_length=100)
    title = models.CharField(max_length=100, default='Dr.')
    position = models.CharField(max_length=100)
    profile_image = models.ImageField(upload_to='doctor_profiles/')
    description = models.TextField()
    short_quote = models.CharField(max_length=255, blank=True, null=True)

    # Social Links
    facebook = models.URLField(blank=True, null=True)
    twitter = models.URLField(blank=True, null=True)
    google_plus = models.URLField(blank=True, null=True)

    def __str__(self):
        return f"{self.title} {self.name}"


class AdmittedEntry(models.Model):
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE, related_name='admitted_entries')
    text = models.CharField(max_length=255)

    def __str__(self):
        return f"Admitted: {self.text}"


class Education(models.Model):
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE, related_name='education')
    year = models.CharField(max_length=20)
    details = models.TextField()

    def __str__(self):
        return f"Education {self.year}"


class Experience(models.Model):
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE, related_name='experience')
    text = models.CharField(max_length=255)

    def __str__(self):
        return self.text


class Award(models.Model):
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE, related_name='awards')
    image = models.ImageField(upload_to='doctor_awards/')

    def __str__(self):
        return f"Award for {self.doctor.name}"

class Testimonial(models.Model):
    name = models.CharField(max_length=100)
    role = models.CharField(max_length=100)
    quote = models.TextField()
    image = models.ImageField(upload_to='testimonials/')

    def __str__(self):
        return f"{self.name} - {self.role}"
    

class Slide(models.Model):
    title = models.CharField(max_length=255)
    subtitle = models.CharField(max_length=255)
    image = models.ImageField(upload_to='slides/')

    def __str__(self):
        return self.title
    
class TreatmentStep(models.Model):
    step_number = models.PositiveIntegerField()
    title = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='steps/')

    def __str__(self):
        return f"Step {self.step_number}: {self.title}"