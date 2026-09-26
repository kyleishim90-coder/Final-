// =========================================================
// KYDNO KORE - CIRCULAR COIN REEL
// Step 2: Arrange the coins around the reel
// =========================================================

function createKydnoCircularReel(reelElement) {
    if (!reelElement) return;

        reelElement.innerHTML = "";

            const reel = document.createElement("div");
                reel.className = "kydno-circular-reel";

                    const track = document.createElement("div");
                        track.className = "kydno-reel-track";

                            const sides = [
                                    "heads",
                                            "tails",
                                                    "heads",
                                                            "tails",
                                                                    "heads",
                                                                            "tails",
                                                                                    "heads",
                                                                                            "tails"
                                                                                                ];

                                                                                                    // Distance from the center of the reel.
                                                                                                        // This controls how large the circular path is.
                                                                                                            const radius = 70;

                                                                                                                sides.forEach((side, index) => {
                                                                                                                        const coin = document.createElement("img");

                                                                                                                                coin.className = "kydno-reel-coin";

                                                                                                                                        coin.src = side === "heads"
                                                                                                                                                    ? "assets/kydno_kore_heads_coin.png"
                                                                                                                                                                : "assets/kydno_kore_tails_coin.png";

                                                                                                                                                                        coin.alt = side === "heads"
                                                                                                                                                                                    ? "Kydno Kore Heads Coin"
                                                                                                                                                                                                : "Kydno Kore Tails Coin";

                                                                                                                                                                                                        coin.dataset.side = side;

                                                                                                                                                                                                                // Place each coin around the circular reel.
                                                                                                                                                                                                                        const angle = (360 / sides.length) * index;

                                                                                                                                                                                                                                coin.style.transform = `
                                                                                                                                                                                                                                            translate(-50%, -50%)
                                                                                                                                                                                                                                                        rotateX(${angle}deg)
                                                                                                                                                                                                                                                                    translateZ(${radius}px)
                                                                                                                                                                                                                                                                            `;

                                                                                                                                                                                                                                                                                    track.appendChild(coin);
                                                                                                                                                                                                                                                                                        });

                                                                                                                                                                                                                                                                                            reel.appendChild(track);
                                                                                                                                                                                                                                                                                                reelElement.appendChild(reel);
                                                                                                                                                                                                                                                                                                }


                                                                                                                                                                                                                                                                                                // ---------------------------------------------------------
                                                                                                                                                                                                                                                                                                // TEMPORARY TEST
                                                                                                                                                                                                                                                                                                // Only build the first reel for now.
                                                                                                                                                                                                                                                                                                // ---------------------------------------------------------

                                                                                                                                                                                                                                                                                                const firstKydnoReel = document.getElementById("kydno-reel-1");

                                                                                                                                                                                                                                                                                                createKydnoCircularReel(firstKydnoReel);