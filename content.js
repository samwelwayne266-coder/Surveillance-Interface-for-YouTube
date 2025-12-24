/**
 * PROJECT: Surveillance-Interface-for-YouTube
 * OPERATOR: Wayne Core (samwelwayne266-coder)
 * STATUS: KERNEL_OPERATIONAL
 * BREACH_CODE: WAYNE
 */

(function() {
    console.log("WAYNE_CORE: System Breach Initialized. Operator: samwelwayne266-coder");

    // 1. TACTICAL HUD INJECTION
    const injectHUD = () => {
        const videoPlayer = document.querySelector('.html5-video-player');
        if (videoPlayer && !document.querySelector('.wayne-hud-overlay')) {
            const hud = document.createElement('div');
            hud.className = 'wayne-hud-overlay';
            hud.innerHTML = `
                <div style="position:absolute; top:20px; left:20px; color:red; font-family:monospace; font-weight:bold; z-index:10; text-shadow: 2px 2px black;">
                    ● REC <span id="wayne-timer">00:00:00</span>
                </div>
                <div style="position:absolute; top:10px; left:10px; width:50px; height:50px; border-top:2px solid cyan; border-left:2px solid cyan;"></div>
                <div style="position:absolute; top:10px; right:10px; width:50px; height:50px; border-top:2px solid cyan; border-right:2px solid cyan;"></div>
                <div style="position:absolute; bottom:10px; left:10px; width:50px; height:50px; border-bottom:2px solid cyan; border-left:2px solid cyan;"></div>
                <div style="position:absolute; bottom:10px; right:10px; width:50px; height:50px; border-bottom:2px solid cyan; border-right:2px solid cyan;"></div>
                <div style="position:absolute; bottom:20px; left:50%; transform:translateX(-50%); color:cyan; font-family:monospace; font-size:12px;">
                    SOURCE: WAYNE_CORE // CAM_01
                </div>
            `;
            videoPlayer.appendChild(hud);
        }
    };

    // 2. GHOST SEARCH PROTOCOL
    const applyGhostSearch = () => {
        if (window.location.pathname === "/") {
            const feed = document.querySelector('ytd-browse');
            if (feed) feed.style.display = 'none';
            document.body.style.backgroundColor = 'black';
        }
    };

    // 3. END OF STREAM (EOS) JITTER & LOW BATTERY
    const monitorEOS = () => {
        const video = document.querySelector('video');
        if (video) {
            video.ontimeupdate = () => {
                const timeLeft = video.duration - video.currentTime;
                if (timeLeft < 6 && timeLeft > 0) {
                    document.body.style.filter = `contrast(1.5) brightness(0.8) hue-rotate(${Math.random() * 10}deg)`;
                    document.body.style.transform = `translate(${Math.random() * 2}px, ${Math.random() * 2}px)`;
                    if (!document.querySelector('.wayne-warning')) {
                        const warn = document.createElement('div');
                        warn.className = 'wayne-warning';
                        warn.innerText = "[!] LOW_BATTERY: SIGNAL_LOSS_IMMINENT";
                        warn.style = "position:fixed; top:50%; left:50%; transform:translate(-50%,-50%); color:red; font-family:monospace; font-size:24px; z-index:9999; background:black; padding:10px; border:2px solid red;";
                        document.body.appendChild(warn);
                    }
                } else {
                    document.body.style.filter = '';
                    document.body.style.transform = '';
                    const warn = document.querySelector('.wayne-warning');
                    if (warn) warn.remove();
                }
            };
        }
    };

    // 4. SECRET BREACH OVERRIDE (WAYNE)
    let inputBuffer = "";
    window.addEventListener('keydown', (e) => {
        inputBuffer += e.key.toUpperCase();
        if (inputBuffer.includes("WAYNE")) {
            document.documentElement.style.filter = "invert(1) hue-rotate(180deg)";
            console.log("SYSTEM BREACH CONFIRMED. ACCESS GRANTED, OPERATOR.");
            inputBuffer = "";
            setTimeout(() => { document.documentElement.style.filter = ""; }, 3000);
        }
        if (inputBuffer.length > 10) inputBuffer = inputBuffer.substring(1);
    });

    // RUNTIME LOOP
    setInterval(() => {
        injectHUD();
        applyGhostSearch();
        monitorEOS();
    }, 1000);
})();
