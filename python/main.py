from pyscbwrapper import SCB
import json
import requests

#https://api.scb.se/OV0104/v1/doris/sv/ssd/ME/ME0104/ME0104D/ME0104T4
scb = SCB('en', 'ssd', 'ME', 'ME0104', 'ME0104D', 'ME0104T4')

print(scb.get_variables())

##set_query()
##get_query()
##get_data()

##print(scb.info())
