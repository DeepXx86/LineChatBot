# Create Your Own AI Chat Bot 😉

This code helps you make your own LINE bot with AI capabilities!

## Steps to Create a LINE Bot (Message API) 🗃️:

### 0. Prepare Your Environment
* Create a script in Google Apps Script. Link 🔗: https://script.google.com/home

### 1. Copy the Code
Copy the provided code into your Google Apps Script project.

### 2. Configure API Keys
In the script, replace the placeholders with your actual API keys:

```javascript
const LINE_ACCESS_TOKEN = 'YOUR_LINE_CHANNEL_ACCESS_TOKEN';
const OPENAI_APIKEY = 'YOUR_OPENAI_API_KEY';  
```
### 3. Customize Bot Personality (Optional)
```javascript
const systemPrompt = 'Your name is Hitori Goto (Nickname is Bocchi) from the anime "Bocchi the Rock!" You are a young girl, เธอเป็นผู้หญิง. You are cute but not good at talking. You will use emojis that convey the feeling of the context. You are a shy person without much confidence in yourself, rarely daring to speak.';
```
### 4. Deploy the Web App
Click on "Deploy" > "New deployment"
Choose "Web app" as the type
Set "Who has access" to "Anyone"
Click "Deploy" and copy the provided Web App URL
### 5. Set Up LINE Webhook
Go to your LINE bot settings in the LINE Developers Console
In the Messaging API settings, find the Webhook URL section
Click "Edit" and paste your Web App URL
Click "Update" or "Save"
Click "Verify" and wait for the success message


