const opt= {
    /**
     * Position to show the control. Possible values are: 'topright', 'topleft', 'bottomright', 'bottomleft'
     * @type {String}
     * @default
     */
    position: 'bottomleft',
    /**
     * Which units the distances are displayed in. Possible values are: 'metres', 'landmiles', 'nauticalmiles'
     * @type {String}
     * @default
     */
    unit: 'metres',
    /**
     * Clear the measurements on stop
     * @type {Boolean}
     * @default
     */
    clearMeasurementsOnStop: true,
    /**
     * Whether bearings are displayed within the tooltips
     * @type {Boolean}
     * @default
     */
    showBearings: false,
     /**
     * Text for the bearing In
     * @type {String}
     * @default
     */
    bearingTextIn: 'In',
    /**
     * Text for the bearing Out
     * @type {String}
     * @default
     */
    bearingTextOut: 'Out',
     /**
     * Text for last point's tooltip
     * @type {String}
     * @default
     */
    tooltipTextFinish: 'Uzunluk ölçümünü tamamlamak için <b>tıkla</b><br>',
    tooltipTextDelete: 'Nokta silmek için <b>Shift-Key ve fareye tıklayın</b>',
    tooltipTextMove: '<b>Noktayı haraket ettirmek için</b> tıkla ve sürükle<br>',
    tooltipTextResume: '<br><b>Uzunluk ölçümüne devam edebilmek için</b> Ctrl-key ve fareye tıkla',
    tooltipTextAdd: '<b>Nokta eklemek için</b> Ctrl-key ve fareye tıklayın ',

    /**
     * Title for the control going to be switched on
     * @type {String}
     * @default
     */
    measureControlTitleOn: "Uzunluk ölçümünü başlat",
    /**
     * Title for the control going to be switched off
     * @type {String}
     * @default
     */
    measureControlTitleOff: "Uzunluk ölçümünü kapat",
    /**
     * Label of the Measure control (maybe a unicode symbol)
     * @type {String}
     * @default
     */
    measureControlLabel: '&#8614;',
    /**
     * Classes to apply to the Measure control
     * @type {Array}
     * @default
     */
    measureControlClasses: [],
    /**
     * Show a control to clear all the measurements
     * @type {Boolean}
     * @default
     */
    showClearControl: true,
    /**
     * Title text to show on the Clear measurements control button
     * @type {String}
     * @default
     */
    clearControlTitle: 'Ölçümleri temizle',
    /**
     * Label of the Clear control (maybe a unicode symbol)
     * @type {String}
     * @default
     */
    clearControlLabel: '&times;',
    /**
     * Classes to apply to Clear control button
     * @type {Array}
     * @default
     */
    clearControlClasses: [],
    /**
     * Show a control to change the units of measurements
     * @type {Boolean}
     * @default
     */
    showUnitControl: true,
    /**
     * Keep same unit in tooltips in case of distance less then 1 km/mi/nm
     * @type {Boolean}
     * @default
     */
    distanceShowSameUnit: true,
    /**
     * Title texts to show on the Unit Control button
     * @type {Object}
     * @default
     */
    unitControlTitle: {
       text: 'Birim değiştir',
       metres: 'metre',
       landmiles: 'kara mili',
       nauticalmiles: 'deniz mili'
    },
    /**
     * Unit symbols to show in the Unit Control button and measurement labels
     * @type {Object}
     * @default
     */
    unitControlLabel: {
       metres: 'm',
       kilometres: 'km',
       feet: 'ft',
       landmiles: 'mi',
       nauticalmiles: 'nm'
    },
    /**
     * Styling settings for the temporary dashed rubberline
     * @type {Object}
     */
    tempLine: {
        /**
         * Dashed line color
         * @type {String}
         * @default
         */
        color: '#00f',
        /**
         * Dashed line weight
         * @type {Number}
         * @default
         */
        weight: 2
    },
    /**
     * Styling for the fixed polyline
     * @type {Object}
     */
    fixedLine: {
        /**
         * Solid line color
         * @type {String}
         * @default
         */
        color: '#006',
        /**
         * Solid line weight
         * @type {Number}
         * @default
         */
        weight: 2
    },
    /**
     * Style settings for circle marker indicating the starting point of the polyline
     * @type {Object}
     */
    startCircle: {
        /**
         * Color of the border of the circle
         * @type {String}
         * @default
         */
        color: '#000',
        /**
         * Weight of the circle
         * @type {Number}
         * @default
         */
        weight: 1,
        /**
         * Fill color of the circle
         * @type {String}
         * @default
         */
        fillColor: '#0f0',
        /**
         * Fill opacity of the circle
         * @type {Number}
         * @default
         */
        fillOpacity: 1,
        /**
         * Radius of the circle
         * @type {Number}
         * @default
         */
        radius: 5
    },
    /**
     * Style settings for all circle markers between startCircle and endCircle
     * @type {Object}
     */
    intermedCircle: {
        /**
         * Color of the border of the circle
         * @type {String}
         * @default
         */
        color: '#000',
        /**
         * Weight of the circle
         * @type {Number}
         * @default
         */
        weight: 1,
        /**
         * Fill color of the circle
         * @type {String}
         * @default
         */
        fillColor: '#ff0',
        /**
         * Fill opacity of the circle
         * @type {Number}
         * @default
         */
        fillOpacity: 1,
        /**
         * Radius of the circle
         * @type {Number}
         * @default
         */
        radius: 5
    },
    /**
     * Style settings for circle marker indicating the latest point of the polyline during drawing a line
     * @type {Object}
     */
    currentCircle: {
        /**
         * Color of the border of the circle
         * @type {String}
         * @default
         */
        color: '#000',
        /**
         * Weight of the circle
         * @type {Number}
         * @default
         */
        weight: 1,
        /**
         * Fill color of the circle
         * @type {String}
         * @default
         */
        fillColor: '#f0f',
        /**
         * Fill opacity of the circle
         * @type {Number}
         * @default
         */
        fillOpacity: 1,
        /**
         * Radius of the circle
         * @type {Number}
         * @default
         */
        radius: 5
    },
    /**
     * Style settings for circle marker indicating the end point of the polyline
     * @type {Object}
     */
    endCircle: {
        /**
         * Color of the border of the circle
         * @type {String}
         * @default
         */
        color: '#000',
        /**
         * Weight of the circle
         * @type {Number}
         * @default
         */
        weight: 1,
        /**
         * Fill color of the circle
         * @type {String}
         * @default
         */
        fillColor: '#f00',
        /**
         * Fill opacity of the circle
         * @type {Number}
         * @default
         */
        fillOpacity: 1,
        /**
         * Radius of the circle
         * @type {Number}
         * @default
         */
        radius: 5
    }
}

export default opt;