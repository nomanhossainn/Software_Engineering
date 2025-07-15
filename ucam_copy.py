#SELENIUM

from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By

# To Keep Browser Open Indefinitely
options = webdriver.ChromeOptions()
options.add_experimental_option("detach", True)

#Chrome Driver Setup

service_obj = Service()
driver = webdriver.Chrome(options=options, service=service_obj)

#Browser Tasks
driver.maximize_window()

driver.get("https://ucam.uiu.ac.bd/Security/LogIn.aspx")

# Locator -> ID, CLASS_NAME, NAME, XPATH, CSSSelector, Link

driver.find_element(By.ID,  "logMain_UserName").send_keys("YOUR ID")  # Enter text in the input field
driver.find_element(By.ID, "logMain_Password").send_keys("YOUR PASSWORD") # Enter password

# Button Click
driver.find_element(By.ID, "logMain_Button1").click()  # Click the button