def main():
    from bs4 import BeautifulSoup
    import requests
    import json

    urlist = ["https://www.rabota.md/ro/locuri-de-munca/devops-engineer-createq/92222",
          "https://www.rabota.md/ro/locuri-de-munca/mid-senior-software-developer-3/36018",
          "https://www.rabota.md/ro/locuri-de-munca/android-developer-ook-group/85491",
          "https://www.rabota.md/ro/locuri-de-munca/1s-developer/86998",
          "https://www.rabota.md/ro/locuri-de-munca/senior-php-developer-balti/51308",
          "https://www.rabota.md/ro/locuri-de-munca/it-teacher/72552",
          "https://www.rabota.md/ro/locuri-de-munca/senior-java-developer/36688",
          "https://www.rabota.md/ro/locuri-de-munca/android-developer/93077",
          "https://www.rabota.md/ro/locuri-de-munca/business-intelligence-analyst-english/86554",
          "https://www.rabota.md/ro/locuri-de-munca/middle-ios-developer/79364",
          "https://www.rabota.md/ro/locuri-de-munca/middle-java-developer-it-solutions-for-financial-sector/91429",
          "https://www.rabota.md/ro/locuri-de-munca/c-developer-10-000-45-000-mdl/91559"
          ]


    def vacancy(url):
        html_doc = requests.get(url).text
        soup = BeautifulSoup(html_doc, 'html.parser')
        vacancytxt = soup.find_all("div", {"class": "vacancy-content"})[0].text.strip()
        sidebar = [element.text.strip() for element in soup.find_all("div", {"class": "vip-vacancy-summary__col text-sm "
                                                                                  "text-gray-700"})]
        return {"vacancytxt": vacancytxt,
                "location": sidebar[0],
                "studies": sidebar[1],
                "experience": sidebar[2],
                "salary": sidebar[3],
                "worktime": sidebar[4],
                "workplace": sidebar[5],
                "employer": sidebar[6]
             }


    dictlist = []

    for i in range(len(urlist)):
        dictlist.append(vacancy(urlist[i]))

    json_object = json.dumps(dictlist, indent=4)
    with open("vacancies.json", "w") as f:
        f.write(json_object)
