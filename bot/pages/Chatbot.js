import Script from 'next/script';
import React, { useEffect } from 'react'
const Chatbot = () => {
    const initBotPress = () => {
        window.botpressWebChat.init({
            "composerPlaceholder": "Chat with bot",
            "botConversationDescription": "This chatbot was built surprisingly fast with Botpress",
            "botId": "96382e32-6286-407a-9306-14db5f08a8d4",
            "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
            "messagingUrl": "https://messaging.botpress.cloud",
            "clientId": "96382e32-6286-407a-9306-14db5f08a8d4",
            "webhookId": "2c8d4a57-edd5-4c11-a2d8-8c472634e0fb",
            "lazySocket": true,
            "themeName": "prism",
            "frontendVersion": "v1",
            "showPoweredBy": true,
            "theme": "prism",
            "themeColor": "#2563eb"
          })
        };

   return(
<head>
<Script
     src = 'https://cdn.botpress.cloud/webchat/v1/inject.js'

     onLoad={()=>{
        initBotPress();
     }}
/>
</head>
   )
}
export default Chatbot
