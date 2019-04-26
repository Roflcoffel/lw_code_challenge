from pyscbwrapper import SCB

#https://api.scb.se/OV0104/v1/doris/sv/ssd/ME/ME0104/ME0104D/ME0104T4
scb = SCB('en', 'ssd', 'ME', 'ME0104', 'ME0104D', 'ME0104T4')

metatable = scb.get_variables()

m_region = metatable["region"]
m_years  = metatable["election year"]

scb.set_query(
        region=m_region,
        observations=["Voting rates in election to the Riksdag, percent"]
)

m_region_id = scb.get_query()["query"][0]["selection"]["values"]

#Map id to region_name
regions = {}
for i in range(len(m_region_id)):
        regions[m_region_id[i]] = m_region[i]

datatables = scb.get_data()["data"]

data = []
for obj in datatables:
        data.append({
                "region_name":regions[obj["key"][0]],
                "year":obj["key"][1],
                "percentage":obj["values"][0]
        })

highest_per_year = []
#Filter Per Year
for year in m_years:
        selYear = list(filter(lambda d : d["year"] == year, data))

        #Find Highest Percentage
        curHighest = selYear[0]
        for obj in selYear:
                if obj["percentage"] > curHighest["percentage"]:
                        curHighest = obj
                elif obj["percentage"] == curHighest["percentage"] and obj["region_name"] != curHighest["region_name"]:
                        curHighest["region_name"] = curHighest["region_name"] + ", " + obj["region_name"]

        highest_per_year.append(curHighest)


#Output
for data in highest_per_year:
        print(data["year"] + " : " + data["region_name"] + " : " + data["percentage"] + "%")




