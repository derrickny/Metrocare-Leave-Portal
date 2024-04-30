import os
from supabase_py import create_client, Client
from dotenv import load_dotenv

load_dotenv()
url: str = os.getenv('SUPABASE_URL')
key: str = os.getenv('SUPABASE_KEY')
supabase: Client = create_client(url, key)

# data = [
#     {"branch_id": 1, "branch_name": "KENCOM", "location": "KCB CLINIC, KENCOM HOUSE WING A, ON 1ST FLOOR ALONG MOI AVENUE", "has_leave_days": True},
#     {"branch_id": 2, "branch_name": "USIU", "location": "Freida Brown Student Centre United States International University-Africa", "has_leave_days": False},
#     {"branch_id": 3, "branch_name": "ADAMS", "location": "NAIROBI WOMENS", "has_leave_days": True},
#     {"branch_id": 4, "branch_name": "KAMAKIS", "location": "NEXUS BUILDING KAMAKIS", "has_leave_days": True},
#     # Add more branches as needed
# ]

# # Convert strings to uppercase
# for branch in data:
#     branch["branch_name"] = branch["branch_name"].upper()
#     branch["location"] = branch["location"].upper()

# for branch in data:
#     supabase.table('Branches').insert(branch).execute()


data = [
    {"leave_name": "sick", "default_days": 15},
    {"leave_name": "bereavement", "default_days": 0},  # Days deducted from personal leave
    {"leave_name": "unpaid", "default_days": 0},
    {"leave_name": "maternity", "default_days": 21},
    {"leave_name": "paternity", "default_days": 14},
    {"leave_name": "personal", "default_days": 0},  # Days specific to the user and the branch
    {"leave_name": "other", "default_days": 0}
]



# Convert strings to uppercase
for leave_type in data:
    leave_type["leave_name"] = leave_type["leave_name"].upper()
    
for leave_type in data:
    supabase.table('LeaveTypes').insert(leave_type).execute()