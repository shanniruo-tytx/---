from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time

# 创建浏览器驱动，确保浏览器驱动程序已正确安装并在系统路径中
driver = webdriver.Chrome()

# 进入斗鱼直播间
room_id = "12306"
driver.get(f"https://www.douyu.com/{room_id}")

# 等待页面加载完成
time.sleep(15)
#窗口最大化
driver.maximize_window()

# 等待页面加载完成
time.sleep(15)

# 定位登录按钮并点击
login_button = driver.find_element(By.CSS_SELECTOR, '.MuteStatus-isLog')
login_button.click()

# 等待登录弹窗出现
time.sleep(5)

# 定位切换到密码登录窗口的按钮并点击
switch_button = driver.find_element(By.CSS_SELECTOR, '.inputLoginBtn.scanicon-toLogin.js-qrcode-switch')
switch_button.click()

# 定位到昵称登录窗口的按钮并点击
switch_button = driver.find_element(By.CSS_SELECTOR, '.l-stype.js-l-stype[data-subtype="login-by-nickname"]')
switch_button.click()

# 输入用户名和密码进行登录

username_input = driver.find_element(By.CSS_SELECTOR, 'input[name="username"]')

username_input.send_keys("")

# 定位密码输入框并输入密码
password_input = driver.find_element(By.CSS_SELECTOR, 'div.loginbox-p.login-by-phoneNum.login-by-nickname input[name="password"]')

password_input.send_keys("")

# 定位登录按钮并点击
login_submit_button = driver.find_element(By.CSS_SELECTOR, 'input.loginbox-sbt.btn-sub')
login_submit_button.click()


# 等待登录完成
time.sleep(5)

# 定位弹幕输入框
input_box = driver.find_element(By.CSS_SELECTOR, 'textarea.ChatSend-txt')
input_box.click()

# 发送弹幕
input_box.send_keys("飞八分钱")
input_box.send_keys(Keys.RETURN)

# 等待一段时间，观察发送效果
time.sleep(5)

# 关闭浏览器驱动
driver.quit()
