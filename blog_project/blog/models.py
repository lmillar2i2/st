from django.db import models

# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=200, verbose_name=("Título"))
    content = models.TextField(verbose_name=("Contenido"))
    author = models.CharField(max_length=100, verbose_name=("Autor"))
    created_at = models.DateTimeField(auto_now_add=True, verbose_name=("Fecha de Creación"))

    def __str__(self):
        return self.title
    
    class Meta:
        verbose_name = ("Post")
        verbose_name_plural = ("Posts")