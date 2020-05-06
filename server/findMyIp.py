from urllib.request import urlopen
import re
def getPublicIp():
    data = str(urlopen('http://checkip.dyndns.com/').read())
    # data = '<html><head><title>Current IP Check</title></head><body>Current IP Address: 65.96.168.198</body></html>\r\n'

    return re.compile(r'Address: (\d+\.\d+\.\d+\.\d+)').search(data).group(1)

print(getPublicIp())