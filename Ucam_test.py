from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.keys import Keys

# To Keep Browser Open Indefinitely
options = webdriver.ChromeOptions()
options.add_experimental_option("detach", True)

# Edge Driver
service_obj = Service()
driver = webdriver.Chrome(options=options, service=service_obj)

# Browser Tasks
driver.maximize_window()
driver.get("https://ucam.uiu.ac.bd/Security/LogIn.aspx")

wait = WebDriverWait(driver, 10)

username_input = wait.until(EC.visibility_of_element_located((By.ID, "logMain_UserName")))
username_input.clear()  
username_input.send_keys("enter your id")  


username_input = wait.until(EC.visibility_of_element_located((By.ID, "logMain_Password")))
username_input.clear() 
username_input.send_keys("enter your password")  

# Click the login button
login_button = wait.until(EC.element_to_be_clickable((By.ID, "logMain_Button1")))
login_button.click()