// =========================================================
// KYDNO KORE - 5 REEL COINFLIP ANIMATION
// 3D circular tire-style reels
// =========================================================

const KYDNO_COIN_ASSETS = {
    heads: "assets/kydno_kore_heads_coin.png",
        tails: "assets/kydno_kore_tails_coin.png"
        };

        const KYDNO_REEL_SIDES = [
            "heads",
                "tails",
                    "heads",
                        "tails",
                            "heads",
                                "tails",
                                    "heads",
                                        "tails"
                                        ];


                                        // =========================================================
                                        // CREATE ONE 3D COIN
                                        // =========================================================

                                        function createKydno3DCoin(side) {

                                            const coin = document.createElement("div");
                                                coin.className = "kydno-3d-coin";
                                                    coin.dataset.side = side;

                                                        // Front face
                                                            const front = document.createElement("img");
                                                                front.className = "kydno-coin-face kydno-coin-front";
                                                                    front.src = KYDNO_COIN_ASSETS[side];
                                                                        front.alt = side === "heads"
                                                                                ? "Kydno Kore Heads Coin"
                                                                                        : "Kydno Kore Tails Coin";

                                                                                            // Back face
                                                                                                const back = document.createElement("img");
                                                                                                    back.className = "kydno-coin-face kydno-coin-back";
                                                                                                        back.src = KYDNO_COIN_ASSETS[side];
                                                                                                            back.alt = "";

                                                                                                                coin.appendChild(front);
                                                                                                                    coin.appendChild(back);

                                                                                                                        // Fake physical edge
                                                                                                                            for (let i = 0; i < 8; i++) {
                                                                                                                                    const edge = document.createElement("div");

                                                                                                                                            edge.className = "kydno-coin-edge";

                                                                                                                                                    edge.style.transform =
                                                                                                                                                                `rotateY(${i * 45}deg) translateZ(54px)`;

                                                                                                                                                                        coin.appendChild(edge);
                                                                                                                                                                            }

                                                                                                                                                                                return coin;
                                                                                                                                                                                }


                                                                                                                                                                                // =========================================================
                                                                                                                                                                                // CREATE CIRCULAR REEL
                                                                                                                                                                                // =========================================================

                                                                                                                                                                                function createKydnoCircularReel(reelElement) {

                                                                                                                                                                                    if (!reelElement) return;

                                                                                                                                                                                        reelElement.innerHTML = "";

                                                                                                                                                                                            const reel = document.createElement("div");
                                                                                                                                                                                                reel.className = "kydno-circular-reel";

                                                                                                                                                                                                    const track = document.createElement("div");
                                                                                                                                                                                                        track.className = "kydno-reel-track";

                                                                                                                                                                                                            // More spacing between coins.
                                                                                                                                                                                                                const radius = 150;

                                                                                                                                                                                                                    KYDNO_REEL_SIDES.forEach((side, index) => {

                                                                                                                                                                                                                            const coin = createKydno3DCoin(side);

                                                                                                                                                                                                                                    const angle =
                                                                                                                                                                                                                                                (360 / KYDNO_REEL_SIDES.length) * index;

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


                                                                                                                                                                                                                                                                                                                        // =========================================================
                                                                                                                                                                                                                                                                                                                        // BUILD ALL FIVE REELS
                                                                                                                                                                                                                                                                                                                        // =========================================================

                                                                                                                                                                                                                                                                                                                        for (let i = 1; i <= 5; i++) {

                                                                                                                                                                                                                                                                                                                            const reelElement =
                                                                                                                                                                                                                                                                                                                                    document.getElementById(`kydno-reel-${i}`);

                                                                                                                                                                                                                                                                                                                                        createKydnoCircularReel(reelElement);
                                                                                                                                                                                                                                                                                                                                        }