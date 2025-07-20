from selenium import webdriver
from selenium.webdriver.edge.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.keys import Keys

# To Keep Browser Open Indefinitely
options = webdriver.EdgeOptions()
options.add_experimental_option("detach", True)
service_obj = Service()
driver = webdriver.Edge(options=options, service=service_obj)

# Edge Driver
service_obj = Service()
driver = webdriver.Edge(options=options, service=service_obj)

# Browser Tasks
driver.maximize_window()
driver.get("https://ucam.uiu.ac.bd/Security/LogIn.aspx")
driver.get("https://elms.uiu.ac.bd/")

wait = WebDriverWait(driver, 10)

login_link = WebDriverWait(driver, 10).until(
    EC.element_to_be_clickable((By.LINK_TEXT, "Log in"))
)
login_link.click()


username_input = WebDriverWait(driver, 10).until(
    EC.visibility_of_element_located((By.ID, "username"))
)
username_input.clear()
username_input.send_keys("enter your id")

username_input = WebDriverWait(driver, 10).until(
    EC.visibility_of_element_located((By.ID, "password"))
)
username_input.clear()
username_input.send_keys("enter your password")

login_button = WebDriverWait(driver, 10).until(
    EC.element_to_be_clickable((By.ID, "loginbtn"))
)
login_button.click()

