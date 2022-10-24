from urllib import response
from django.test import SimpleTestCase

# Create your tests here.
class TestHelloView(SimpleTestCase):
    def test_hello_views(self):
        response=self.client.get("/hello/World")
        self.assertContains(response, "Hello World!")
        
 
