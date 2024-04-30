from django.db import models

class User(models.Model):
    ROLES = (
        ('EMP', 'Employee'),
        ('MGR', 'Manager'),
        ('HR', 'HR'),
    )

    user_id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    email = models.EmailField(max_length=255)
    role = models.CharField(max_length=3, choices=ROLES)
    branch = models.ForeignKey('Branch', on_delete=models.CASCADE)
    manager = models.ForeignKey('self', on_delete=models.SET_NULL, null=True, blank=True)

    class Meta:
        db_table = 'Users'
    
        
class Branch(models.Model):
    branch_id = models.AutoField(primary_key=True)
    branch_name = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    has_leave_days = models.BooleanField(default=False)

    class Meta:
        db_table = 'Branches'

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
        
    
    