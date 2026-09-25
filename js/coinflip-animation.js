// =========================================================
// KYDNO KORE - COINFLIP ANIMATION
// =========================================================

function setupKydnoCoinReels() {
    const reels = [
            document.getElementById("kydno-reel-1"),
                    document.getElementById("kydno-reel-2"),
                            document.getElementById("kydno-reel-3"),
                                    document.getElementById("kydno-reel-4"),
                                            document.getElementById("kydno-reel-5")
                                                ];

                                                    reels.forEach((reel, index) => {
                                                            if (!reel) return;

                                                                    const coin = document.createElement("img");

                                                                            coin.src = "assets/kydno_kore_heads_coin.png";
                                                                                    coin.alt = "Kydno Kore Heads Coin";
                                                                                            coin.className = "kydno-reel-coin";

                                                                                                    reel.appendChild(coin);
                                                                                                        });
                                                                                                        }

                                                                                                       function startKydnoCoinReels() {
                                                                                                            const reels = [
                                                                                                                    document.getElementById("kydno-reel-1"),
                                                                                                                            document.getElementById("kydno-reel-2"),
                                                                                                                                    document.getElementById("kydno-reel-3"),
                                                                                                                                            document.getElementById("kydno-reel-4"),
                                                                                                                                                    document.getElementById("kydno-reel-5")
                                                                                                                                                        ];

                                                                                                                                                            reels.forEach((reel) => {
                                                                                                                                                                    if (!reel) return;

                                                                                                                                                                            const coin = reel.querySelector(".kydno-reel-coin");
                                                                                                                                                                                    if (!coin) return;

                                                                                                                                                                                            setInterval(() => {
                                                                                                                                                                                                        const showingHeads = coin.dataset.side !== "tails";

                                                                                                                                                                                                                    coin.src = showingHeads
                                                                                                                                                                                                                                    ? "assets/kydno_kore_tails_coin.png"
                                                                                                                                                                                                                                                    : "assets/kydno_kore_heads_coin.png";

                                                                                                                                                                                                                                                                coin.dataset.side = showingHeads ? "tails" : "heads";
                                                                                                                                                                                                                                                                        }, 160);
                                                                                                                                                                                                                                                                            });
                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                            setupKydnoCoinReels();
                                                                                                                                                                                                                                                                            startKydnoCoinReels();

                                                                                                                                                                                                                                                                            
                                                                                                       
                                                                                                        
