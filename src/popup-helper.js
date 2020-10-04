const popup = {
    /**
     * Displays popup on screen with the given text and colour.
     */
    showText: (text) => {
        
        document.getElementById("popuptext").innerHTML = text;
        
        gsap.set("#popupbox", { 'visibility':'visible' });
        gsap.to("#popupbox", {
            opacity: 1, // any properties (not limited to CSS)
            duration: 0.3, // seconds
            ease: "quad.Out",
            immediateRender: false,
            onComplete: null,
            // other callbacks: 
            // onStart, onUpdate, onRepeat, onReverseComplete
            // Each callback has a params property as well
            // i.e. onUpdateParams (Array)
          });
    },
    /**
     * Removes popup from screen and resets state of all commands 
     */
    delete: () => {
        gsap.to("#popupbox", { opacity: 0, duration:0.2 });
    },
    
};