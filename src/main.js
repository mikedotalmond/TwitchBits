const actionHandlers = {};

((config, log) => {
    const
        processCommand = (target, context, msg, self) => {

            const spaceIndex = msg.indexOf(" ");
            const command = (spaceIndex > -1) ? msg.substring(0, spaceIndex) : msg;
            const parsedMessage = (spaceIndex > -1) ? msg.substring(spaceIndex + 1) : "";

            if (actionHandlers[command] && actionHandlers[command].security(context, command)) {
                actionHandlers[command].handle(context, parsedMessage);
            }
        },

        processMessage = (target, context, message, self) => {
            if(self) return;
            
            const messageType = context["message-type"];

            log(`Non-command message messageType:${messageType}, message:${message}`);
            
            // Handle different message types..
            switch (messageType) {
                case "action":
                    // This is an action message..
                    break;
                case "chat":
                    // This is a chat message..
                    break;
                case "whisper":
                    // This is a whisper..
                    break;
                default:
                    // Something else ?
                    break;
            }
        },

        onMessage = (target, context, msg, self) => {

            if (config.debug) log("onMessage", target, context, msg, self);

            const message = msg.trim();
            const isCommand = message.charAt(0) === "!";

            if (isCommand) processCommand(target, context, message, self);
            else processMessage(target, context, message, self);
        },

        onConnected = (addr, port) => {
            log(`* Connected to ${addr}:${port}`);
            client.say(config.channel, `[mikebot] Connected.`);
        },

        clientConfig = {
            options: { debug: config.debug, clientId: config.clientId },
            connection: { reconnect: true, secure: true },
            identity: config.identity,
            channels: [config.channel]
        };


    // connect    
    const client = new tmi.client(clientConfig)
        .on('message', onMessage)
        .on('connected', onConnected)
        .on("clearchat", () => popup.delete());

    client.connect();

})(config, console.log);