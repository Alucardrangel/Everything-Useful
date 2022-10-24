from django.db import models

# Create your models here.
class Client(models.Model):
    name = models.TextField(max_length=50)
    email = models.TextField(max_length=100)
    address = models.TextField(max_length=50)
    is_active = models.BooleanField(default=False)


def create_client(name, email, address, is_active):
        clients = Client(
         name = name,
         email = email, 
         address = address, 
         is_active = is_active,
        )
        clients.save()
        return clients

def all_clients():
    return Client.objects.all()

def find_client_by_name(name):
    if len(Client.objects.filter(name=name)) == 0:
        return None
    else:
        return Client.objects.get(name=name)

def active_clients():
    return Client.objects.filter(is_active=True)

def update_client_email(name, new):
    clients = find_client_by_name(name)
    clients.email = new
    clients.save()

def delete_client(name):
    clients = find_client_by_name(name)
    clients.delete()


