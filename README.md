# ~~TwitchPopups~~ TwitchBits
Based on a fork of Limmy's [TwitchPopups](https://github.com/DaftLimmy/TwitchPopups) - you should probably just go there.

Provides simple text-popups, overlays, and some basic chatbot behaviours driven by commands issued in your Twitch chat.
At some point I'll be using it on my own [Twitch streams](https://twitch.tv/mikedotalmond) 

***

## So what's this for then?
- Learning a bit more about tmi / Twitch
- Reworking things to suit my own needs
- Adding a basic utility/helper chatbot
- Tweaking popup style/behaviours



## Where did settings.js go?

`./settings.js` Now contains various security details for logging in via the tmi client interface, so shouldn't be committed to version control.

Create it yourself and add the following, filling with your own values as needed:

```javascript
const config = {
    debug: true, 
    channel : 'YOUR_CHANNELID_HERE',
    botMessagePrefix: "[my-bot] ", // prefix all bot-sent messages with this
    clientId : "[YOUR_TWITCH_APP_CLIENTID_HERE]",
    identity: {
		username: '[YOUR_TWITCH_APP_NAME_HERE]',
		password: 'oauth:[YOUR_OAUTH_TOKEN_HERE]'
    },
}
```
