from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
import time

options = webdriver.ChromeOptions()
options.add_experimental_option('detach', True)

service_obj = Service()
driver = webdriver.Chrome(options = options, service = service_obj)

driver.maximize_window()
driver.get("https://www.uiu.ac.bd/")

driver.find_element(By.LINK_TEXT, "Important Contact").click()
time.sleep(5)

elements = driver.find_elements(By.CLASS_NAME, "section-wrapper")

for E in elements:
    print(E.text)
    