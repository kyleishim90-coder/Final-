// =========================================================
// KYDNO KORE - CIRCULAR COIN REEL
// Step 1: Build the reel structure
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

                                                                                                    sides.forEach((side) => {
                                                                                                            const coin = document.createElement("img");

                                                                                                                    coin.className = "kydno-reel-coin";

                                                                                                                            coin.src = side === "heads"
                                                                                                                                        ? "assets/kydno_kore_heads_coin.png"
                                                                                                                                                    : "assets/kydno_kore_tails_coin.png";

                                                                                                                                                            coin.alt = side === "heads"
                                                                                                                                                                        ? "Kydno Kore Heads Coin"
                                                                                                                                                                                    : "Kydno Kore Tails Coin";

                                                                                                                                                                                            coin.dataset.side = side;

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