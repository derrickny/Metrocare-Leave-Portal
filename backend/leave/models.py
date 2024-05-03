from django.contrib.auth.models import AbstractUser
from django.db import models


class Branch(models.Model):
    branch_id = models.AutoField(primary_key=True)
    branch_name = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    has_leave_days = models.BooleanField(default=False)

    class Meta:
        db_table = 'Branches'
        
class User(AbstractUser):
    ROLES = (
        ('EMP', 'Employee'),
        ('MGR', 'Manager'),
        ('HR', 'HR'),
        ('ADM', 'Admin'),
    )
    GENDER = (
        ('M', 'Male'),
        ('F', 'Female'),
        ('O', 'Other'),
    )
    email = models.EmailField(unique=True,null=True, blank=True)
    role = models.CharField(max_length=3, choices=ROLES)
    gender = models.CharField(max_length=1, choices=GENDER, default='O')
    phone_number = models.CharField(max_length=255, unique=True, null=True, blank=True)
    branch = models.ForeignKey('Branch', on_delete=models.CASCADE, null=True)
    managed_branches = models.ManyToManyField('Branch', related_name='managers', blank=True)
    
    class meta:
        db_table = 'Users'
        


class LeaveType(models.Model):
    leave_type_id = models.AutoField(primary_key=True)
    leave_name = models.CharField(max_length=255)
    default_days = models.IntegerField(default=0)

    class Meta:
        db_table = 'LeaveTypes'
        

class LeaveRequest(models.Model):
    STATUS_CHOICES = (
        ('PEN', 'Pending'),
        ('MGR', 'Approved by Manager'),
        ('HR', 'Approved by HR'),
        ('DEC', 'Declined'),
    )

    request_id = models.AutoField(primary_key=True)
    user = models.ForeignKey('User', on_delete=models.CASCADE, related_name='leave_requests')
    leave_type = models.ForeignKey('LeaveType', on_delete=models.CASCADE)
    start_date = models.DateField()
    end_date = models.DateField()
    status = models.CharField(max_length=3, choices=STATUS_CHOICES, default='PEN')
    manager_approval = models.ForeignKey('User', on_delete=models.SET_NULL, null=True, blank=True, related_name='manager_approvals')
    hr_approval = models.ForeignKey('User', on_delete=models.SET_NULL, null=True, blank=True, related_name='hr_approvals')

    class Meta:
        db_table = 'LeaveRequests'


class EmployeeLeaveDays(models.Model):
    user = models.ForeignKey('User', on_delete=models.CASCADE)
    leave_type = models.ForeignKey('LeaveType', on_delete=models.CASCADE)
    remaining_days = models.IntegerField()
    last_accrual_date = models.DateField()

    class Meta:
        db_table = 'EmployeeLeaveDays'
        unique_together = ('user', 'leave_type',)
        
    
    