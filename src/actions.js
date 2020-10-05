// =======================================
// Command: !alert <text>
// Description: will display whatever text comes after the !alert command
// =======================================

const actions = {};

actions['!alert'] = {
    security: (context, textContent) => {
        return context.mod || (context["badges-raw"] != null && context["badges-raw"].startsWith("broadcaster"))
    },
    handle: (context, textContent) => {
        console.log(context);
        console.log(textContent);
        popup.showText(textContent);
    }
};


// =======================================
// Command: !delete
// Description: This delete command resets the whole pop up system
// =======================================
actions['!delete'] = {
    security: (context, textContent) => {
        return context.mod || (context["badges-raw"] != null && context["badges-raw"].startsWith("broadcaster"))
    },
    handle: (context, textContent) => {
        popup.delete();
    }
};

settings.actions = actions;