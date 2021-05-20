import os


class Config:
    REPORT_TITLE = "API Tests"
    URLS = {
        "dev": "https://jsonplaceholder.typicode.com"
    }
    CSV_ENCODING = "utf8"
    DELIMETER = ";"
    UNIVERSAL_NEWLINE = "\n"

    @classmethod
    def env(cls):
        return os.environ.get("ENV") or "dev"

    @classmethod
    def base_url(cls):
        return cls.URLS[cls.env()]


def print_configuration():
    print("Env: " + Config.env())
    print("Base url: " + Config.base_url())


def main():
    print_configuration()


if __name__ == '__main__':
    from dotenv import load_dotenv
    load_dotenv()
    main()
