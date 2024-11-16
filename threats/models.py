from django.db import models

# Create your models here.
from django.db import models

class Threat(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()

    def __str__(self):
        return self.title

class ForumPost(models.Model):
    content = models.TextField()

    def __str__(self):
        return self.content[:50]
