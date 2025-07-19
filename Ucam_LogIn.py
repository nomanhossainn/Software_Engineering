from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By

options = webdriver.ChromeOptions()
options.add_experimental_option("detach", True)

service_obj = Service()
driver = webdriver.Chrome(options=options, service = service_obj)

driver.maximize_window()
driver.get("https://ucam.uiu.ac.bd/Security/Login.aspx")

driver.find_element(By.ID, "logMain_UserName").send_keys("username")
driver.find_element(By.ID, "logMain_Password").send_keys("password")
driver.find_element(By.ID, "logMain_Button1").click()
