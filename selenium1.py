from selenium import webdriver
from selenium.webdriver.chrome.service import Service
import time

# To Keep Browser Open Indefinitely
options = webdriver.ChromeOptions()
options.add_experimental_option("detach", True)

service_obj = Service()
driver = webdriver.Chrome(options=options, service = service_obj)

driver.maximize_window()

driver.get("https://www.google.com")
#print(driver.page_source)
print(driver.title)
print(driver.current_url)

time.sleep(3)
driver.get("https://www.facebook.com")
#driver.forward()
driver.back()
time.sleep(3)
driver.refresh()
time.sleep(3)
driver.close()

