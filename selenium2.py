from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By


options = webdriver.ChromeOptions()
options.add_experimental_option("detach", True)

service_obj = Service()
driver = webdriver.Chrome(options=options, service = service_obj)

driver.maximize_window()
driver.get("https://ucam.uiu.ac.bd/")

driver.find_element(By.ID, "logMain_UserName").send_keys("YOUR ID")  # Enter text in the input field
#driver.find_element(By.ID, "logMain_Password").send_keys("YOUR PASSWORD") # Enter password
driver.find_element(By.ID, "logMain_Button1").click()

driver.find_element(By.XPATH, "(//a[@type = 'level1 static'])[5]").click()


# XPATH
driver.find_element(By.XPATH, "//input[@type='Password']").send_keys("<PASSWORD>")
driver.find_element(By.CSS_SELECTOR, "input[type='Password']").send_keys("<PASSWORD>")
driver.find_element(By.ID,"logMain_Button2").clear()

# Hierarchy
driver.find_element(By.XPATH, "(//input[@type = 'Password'])[2]").send_keys("<PASSWORD>")

# text retrieve
msg = driver.find_element(By.CLASS_NAME, "alert").text
print(msg)

assert "Success" in msg
#driver.close()
