import csv
from Configuration.Config import Config


class CSVReader:

    @staticmethod
    def read_from_csv(filename):
        test_data = []
        with open(filename, newline=Config.UNIVERSAL_NEWLINE, encoding=Config.CSV_ENCODING) as csv_file:
            data = csv.reader(csv_file, delimiter=Config.DELIMETER)
            next(data)
            test_data = [row for row in data]
        return test_data
