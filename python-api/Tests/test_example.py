import requests
from Configuration.Config import Config


class TestExample:

    def test_example(self):
        response = requests.get(f"{Config.base_url()}/todos/1")
        print(response.text)

        assert response.status_code == 200
