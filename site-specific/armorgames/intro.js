// === COMPLETE ARMOR GAMES INTRO OVERRIDE ===
var donePlayingIntro = true;

/**
 * Fully bypasses the Armor Games intro.
 * @param {HTMLElement} windowHandle The canvas element (ignored)
 * @param {Function} onDone Callback to call immediately
 */
function playArmorGamesIntro(windowHandle, onDone) {
    // Mark intro as done
    donePlayingIntro = true;

    // Safely call the callback
    try {
        if (typeof onDone === "function") {
            onDone();
        }
    } catch (e) {
        console.warn("Intro skip callback error:", e);
    }
}

// Provide a no-op resize function so no other code breaks
window.resizeArmorGamesIntro = function() {};

// Optional: if the game calls or creates any video elements elsewhere, override them
HTMLVideoElement.prototype.play = function() {
    // Immediately resolve as if video finished playing
    var promise = Promise.resolve();
    promise.then(() => {
        if (this.onended) this.onended();
    });
    return promise;
};