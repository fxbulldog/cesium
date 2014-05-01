/*global define*/
define([], function() {
    "use strict";

    /**
     * This enumerated type is for representing keyboard modifiers. These are keys
     * that are held down in addition to other event types.
     *
     * @exports KeyboardEventModifier
     */
    var KeyboardEventModifier = {
        /**
         * Represents the shift key being held down.
         *
         * @type {Number}
         * @constant
         * @default 0
         */
        SHIFT : 0,

        /**
         * Represents the control key being held down.
         *
         * @type {Number}
         * @constant
         * @default 1
         */
        CTRL : 1,

        /**
         * Represents the alt key being held down.
         *
         * @type {Number}
         * @constant
         * @default 2
         */
        ALT : 2
    };

    return KeyboardEventModifier;
});
