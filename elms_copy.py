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

driver.get("https://elms.uiu.ac.bd/login/index.php")

# Locator -> ID, CLASS_NAME, NAME, XPATH, CSSSelector, Link

driver.find_element(By.ID,  "username").send_keys("YOUR ID")  # Enter text in the input field
driver.find_element(By.ID, "password").send_keys("YOUR PASSWORD") # Enter password

# Button Click
driver.find_element(By.ID, "loginbtn").click()  # Click the button

#driver.find_element(By.LINK_TEXT, "Courses").click()  # Click on Courses link
#driver.find_element(By.CLASS_NAME,"dropdown-item").send_keys("My Courses").click()  # Click on the dropdown menu