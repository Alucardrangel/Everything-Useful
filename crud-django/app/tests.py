from django.test import TestCase
from app import models

class TestClient(TestCase):
    def test_can_create_client(self):
        contact = models.create_client(
            "Janet",
            "janet@example.com",
            "77 Dreary Lane",
            True,
        )

        self.assertEqual(contact.id, 1)
        self.assertEqual(contact.name, "Janet")
        self.assertEqual(contact.email, "janet@example.com")
        self.assertTrue(contact.is_active)

    def test_can_view_all_contacts_at_once(self):
        contacts_data = [
            {
                "name": "Elias",
                "email": "elias.laurila@example.com",
                "address": "2760 Cherry Tree Drive",
                "is_active": True,
            },
            {
                "name": "Martin",
                "email": "martin.dasilva@example.com",
                "address": "602 Owen Avenue",
                "is_active": False,
            },
            {
                "name": "Alma",
                "email": "alma.johansen@example.com",
                "address": "23 Alter Lane",
                "is_active": True,
            },
        ]

        for contact_data in contacts_data:
            models.create_client(
                contact_data["name"],
                contact_data["email"],
                contact_data["address"],
                contact_data["is_active"],
            )

        contacts = models.all_clients()
        self.assertEqual(len(contacts), len(contacts_data))

        contacts_data = sorted(contacts_data, key=lambda c: c["name"])
        contacts = sorted(contacts, key=lambda c: c.name)

        for data, contact in zip(contacts_data, contacts):
            self.assertEqual(data["name"], contact.name)
            self.assertEqual(data["email"], contact.email)
            self.assertEqual(data["address"], contact.address)
            self.assertEqual(data["is_active"], contact.is_active)

    def test_can_search_by_name(self):
        contacts_data = [
            {
                "name": "Elias",
                "email": "elias.laurila@example.com",
                "address": "2760 Cherry Tree Drive",
                "is_active": True,
            },
            {
                "name": "Martin",
                "email": "martin.dasilva@example.com",
                "address": "602 Owen Avenue",
                "is_active": False,
            },
            {
                "name": "Alma",
                "email": "alma.johansen@example.com",
                "address": "23 Alter Lane",
                "is_active": True,
            },
        ]

        for contact_data in contacts_data:
            models.create_client(
                contact_data["name"],
                contact_data["email"],
                contact_data["address"],
                contact_data["is_active"],
            )

        self.assertIsNone(models.find_client_by_name("aousnth"))

        contact = models.find_client_by_name("Alma")

        self.assertIsNotNone(contact)
        self.assertEqual(contact.email, "alma.johansen@example.com")

    def test_can_view_favorites(self):
        contacts_data = [
            {
                "name": "Elias",
                "email": "elias.laurila@example.com",
                "address": "2760 Cherry Tree Drive",
                "is_active": True,
            },
            {
                "name": "Martin",
                "email": "martin.dasilva@example.com",
                "address": "602 Owen Avenue",
                "is_active": False,
            },
            {
                "name": "Alma",
                "email": "alma.johansen@example.com",
                "address": "23 Alter Lane",
                "is_active": True,
            },
        ]

        for contact_data in contacts_data:
            models.create_client(
                contact_data["name"],
                contact_data["email"],
                contact_data["address"],
                contact_data["is_active"],
            )

        self.assertEqual(len(models.active_clients()), 2)

    def test_can_update_contacts_email(self):
        contacts_data = [
            {
                "name": "Elias",
                "email": "elias.laurila@example.com",
                "address": "2760 Cherry Tree Drive",
                "is_active": True,
            },
            {
                "name": "Martin",
                "email": "martin.dasilva@example.com",
                "address": "602 Owen Avenue",
                "is_active": False,
            },
            {
                "name": "Alma",
                "email": "alma.johansen@example.com",
                "address": "23 Alter Lane",
                "is_active": True,
            },
        ]

        for contact_data in contacts_data:
            models.create_client(
                contact_data["name"],
                contact_data["email"],
                contact_data["address"],
                contact_data["is_active"],
            )

        models.update_client_email("Elias", "big.e@example.com")

        self.assertEqual(
            models.find_client_by_name("Elias").email, "big.e@example.com"
        )

    def test_can_delete_contact(self):
        contacts_data = [
            {
                "name": "Elias",
                "email": "elias.laurila@example.com",
                "address": "2760 Cherry Tree Drive",
                "is_active": True,
            },
            {
                "name": "Martin",
                "email": "martin.dasilva@example.com",
                "address": "602 Owen Avenue",
                "is_active": False,
            },
            {
                "name": "Alma",
                "email": "alma.johansen@example.com",
                "address": "23 Alter Lane",
                "is_active": True,
            },
        ]

        for contact_data in contacts_data:
            models.create_client(
                contact_data["name"],
                contact_data["email"],
                contact_data["address"],
                contact_data["is_active"],
            )

        models.delete_client("Martin")

        self.assertEqual(len(models.all_clients()), 2)





