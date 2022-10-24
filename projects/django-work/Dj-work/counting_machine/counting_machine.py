class Countmc:
    def __init__(self, inc, dec) -> None:
        self.inc = inc
        self.dec - dec

    def dec(self):
        self.count -= 1

    def inc(self):
        self.count += 1

class CountingMachine(Countmc):
    def __init__(self) -> None:
        self.count = 0