from django import forms
from django.contrib import admin
from django.contrib.auth.hashers import make_password
from .models import User

class UserChangeForm(forms.ModelForm):
    password = forms.CharField(widget=forms.PasswordInput())

    class Meta:
        model = User
        fields = '__all__'

    def save(self, commit=True):
        user = super().save(commit=False)
        user.password = make_password(self.cleaned_data["password"])
        if commit:
            user.save()
        return user
    
class UserAdmin(admin.ModelAdmin):
    form = UserChangeForm
    list_display = ('username', 'phone_number', 'role', 'branch')  # adjust this to your needs
    search_fields = ('username', 'email')  # adjust this to your needs

admin.site.register(User, UserAdmin)