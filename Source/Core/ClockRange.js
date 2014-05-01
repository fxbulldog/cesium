/*global define*/
define([], function() {
    "use strict";

    /**
     * Constants used by {@link Clock#tick} to determine behavior
     * when {@link Clock#startTime} or {@link Clock#stopTime} is reached.
     *
     * @exports ClockRange
     *
     * @see Clock
     * @see ClockStep
     */
    var ClockRange = {
        /**
         * {@link Clock#tick} will always advances the clock in its current direction.
         *
         * @type {Number}
         * @constant
         * @default 0
         */
        UNBOUNDED : 0,

        /**
         * When {@link Clock#startTime} or {@link Clock#stopTime} is reached,
         * {@link Clock#tick} will not advance {@link Clock#currentTime} any further.
         *
         * @type {Number}
         * @constant
         * @default 1
         */
        CLAMPED : 1,

        /**
         * When {@link Clock#stopTime} is reached, {@link Clock#tick} will advance
         * {@link Clock#currentTime} to the opposite end of the interval.  When
         * time is moving backwards, {@link Clock#tick} will not advance past
         * {@link Clock#startTime}
         *
         * @type {Number}
         * @constant
         * @default 2
         */
        LOOP_STOP : 2
    };

    return ClockRange;
});
