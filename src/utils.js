const utils = {};

(() => {

    const
        // match all characters in [a-Z0-9_]
        word_regex = new RegExp('\\w', 'g'),

        /**
         * Strip any invalid characters from a command and return sanitised string 
         * Anything other than the \w regex match is removed.
         * 
         * @return sanitised string, or null if cmd only contains invalid characters.
         */
        sanitizeCommand = cmd => {
            if (cmd == null || cmd.length == 0) return null;
            const safe = cmd.match(word_regex);
            if (safe == null) return null;
            return safe.join("");
        },


        /**
         * pick a random element from any given array
         */
        randomElementFromArray = (arr) => {
            if (arr == null || arr.length == 0) return null;
            return arr[(arr.length * Math.random()) | 0];
        },

        /**
         * Random comparator for randomising arrays
         */
        randomSort = (a, b) => (Math.random() - 0.5) * 2.0,

        /**
         * build an array of random indices from zero to numElements-1
         */
        randomIndexArray = numElements => {
            if (numElements <= 0) return null;
            const out = [];
            for (let i = 0; i < numElements; i++) out[i] = i;
            return out.sort(randomSort);
        },

        /**
         * 
         */
        randomStringFromSet = (key, obj) => {
            const v = obj.hasOwnProperty(key) ? obj[key] : null;
            if (v !== null && v.length > 0) {
                if (v instanceof Array) {
                    return randomElementFromArray(v);
                } else if (v instanceof String) {
                    return v;
                }
            }
            return null;
        };

    utils.randomSort = randomSort;
    utils.randomIndexArray = randomIndexArray;
    utils.randomElementFromArray = randomElementFromArray;
    utils.randomStringFromSet = randomStringFromSet;

    utils.sanitizeCommand = sanitizeCommand;
})();
