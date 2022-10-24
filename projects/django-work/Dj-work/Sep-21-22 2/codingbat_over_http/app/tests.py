from django.test import TestCase
from django.test import SimpleTestCase

# Create your tests here.
class TestLoneSum(SimpleTestCase):
    def test_lone_1(self):
        response = self.client.get("/lone_sum/1/2/3")
        self.assertContains(response, 6)

    def test_lone_2(self):
        response = self.client.get("/lone_sum/3/2/3")
        self.assertContains(response, 2)

    def test_lone_3(self):
        response = self.client.get("/lone_sum/3/3/3")
        self.assertContains(response, 0)



class TestLstringSplosion(SimpleTestCase):
    def test_lstring_splosion_1(self):
        response = self.client.get("/lstring_splosion/Code")
        self.assertContains(response, "CCoCodCode")

    def test_lstring_splosion_2(self):
        response = self.client.get("/lstring_splosion/abc")
        self.assertContains(response, "aababc")

    def test_lstring_splosion_3(self):
        response = self.client.get("/lstring_splosion/ab")
        self.assertContains(response, "aab")




class TestNearHundred(SimpleTestCase):
    def test_lnear_hundred1(self):
        response = self.client.get("/near_hundred/93")
        self.assertContains(response, "True")

    def test_lnear_hundred2(self):
        response = self.client.get("/near_hundred/89")
        self.assertContains(response, "False")
        
    def test_lnear_hundred3(self):
        response = self.client.get("/near_hundred/90")
        self.assertContains(response, "True")

   



class TestCatDof(SimpleTestCase):
    def test_cat_dog1(self):
        response = self.client.get("/cat_dog/catdog")
        self.assertContains(response, "True")

    def test_cat_dog2(self):
        response = self.client.get("/cat_dog/catcat")
        self.assertContains(response, "False")

    def test_cat_dog3(self):
        response = self.client.get("/cat_dog/1cat1cadodog")
        self.assertContains(response, "True")

   
    

   
