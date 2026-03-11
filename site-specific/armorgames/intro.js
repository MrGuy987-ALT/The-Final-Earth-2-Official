var donePlayingIntro = true;

/**
 * Play the Armor Games intro
 * @param {string} windowHandle the canvas element 
 * @param {string} directory Directory to find the armor games intros in. A / will be automatically added
 */
function playArmorGamesIntro(windowHandle, onDone) {
    // Immediately mark intro as done and call the callback
    donePlayingIntro = true;
    if (onDone) onDone();
}

// Optional: keep the resize function to avoid errors if something calls it
window.resizeArmorGamesIntro = function() {
    // Nothing to do, intro is skipped
};