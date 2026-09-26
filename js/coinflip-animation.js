// =========================================================
// KYDNO KORE - 5 REEL 3D COIN ANIMATION
// Clean circular coin version
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
                                        // CREATE ONE CLEAN 3D COIN
                                        // =========================================================

                                        function createKydno3DCoin(side) {

                                            const coin = document.createElement("div");

                                                coin.className = "kydno-3d-coin";
                                                    coin.dataset.side = side;

                                                        // Metallic circular body
                                                            const body = document.createElement("div");
                                                                body.className = "kydno-coin-body";

                                                                    // Front face
                                                                        const front = document.createElement("img");

                                                                            front.className =
                                                                                    "kydno-coin-face kydno-coin-front";

                                                                                        front.src =
                                                                                                KYDNO_COIN_ASSETS[side];

                                                                                                    front.alt =
                                                                                                            side === "heads"
                                                                                                                        ? "Kydno Kore Heads Coin"
                                                                                                                                    : "Kydno Kore Tails Coin";


                                                                                                                                        // Back face
                                                                                                                                            const back = document.createElement("img");

                                                                                                                                                back.className =
                                                                                                                                                        "kydno-coin-face kydno-coin-back";

                                                                                                                                                            back.src =
                                                                                                                                                                    KYDNO_COIN_ASSETS[side];

                                                                                                                                                                        back.alt = "";


                                                                                                                                                                            body.appendChild(front);
                                                                                                                                                                                body.appendChild(back);

                                                                                                                                                                                    coin.appendChild(body);

                                                                                                                                                                                        return coin;
                                                                                                                                                                                        }


                                                                                                                                                                                        // =========================================================
                                                                                                                                                                                        // CREATE ONE CIRCULAR REEL
                                                                                                                                                                                        // =========================================================

                                                                                                                                                                                        function createKydnoCircularReel(reelElement) {

                                                                                                                                                                                            if (!reelElement) return;

                                                                                                                                                                                                reelElement.innerHTML = "";

                                                                                                                                                                                                    const reel =
                                                                                                                                                                                                            document.createElement("div");

                                                                                                                                                                                                                reel.className =
                                                                                                                                                                                                                        "kydno-circular-reel";


                                                                                                                                                                                                                            const track =
                                                                                                                                                                                                                                    document.createElement("div");

                                                                                                                                                                                                                                        track.className =
                                                                                                                                                                                                                                                "kydno-reel-track";


                                                                                                                                                                                                                                                    // More spacing between coins.
                                                                                                                                                                                                                                                        const radius = 115;


                                                                                                                                                                                                                                                            KYDNO_REEL_SIDES.forEach(
                                                                                                                                                                                                                                                                    (side, index) => {

                                                                                                                                                                                                                                                                                const coin =
                                                                                                                                                                                                                                                                                                createKydno3DCoin(side);


                                                                                                                                                                                                                                                                                                            const angle =
                                                                                                                                                                                                                                                                                                                            (360 / KYDNO_REEL_SIDES.length)
                                                                                                                                                                                                                                                                                                                                            * index;


                                                                                                                                                                                                                                                                                                                                                        coin.style.transform = `
                                                                                                                                                                                                                                                                                                                                                                        translate(-50%, -50%)
                                                                                                                                                                                                                                                                                                                                                                                        rotateX(${angle}deg)
                                                                                                                                                                                                                                                                                                                                                                                                        translateZ(${radius}px)
                                                                                                                                                                                                                                                                                                                                                                                                                    `;


                                                                                                                                                                                                                                                                                                                                                                                                                                track.appendChild(coin);
                                                                                                                                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                                                                                                                            );


                                                                                                                                                                                                                                                                                                                                                                                                                                                reel.appendChild(track);

                                                                                                                                                                                                                                                                                                                                                                                                                                                    reelElement.appendChild(reel);
                                                                                                                                                                                                                                                                                                                                                                                                                                                    const landedCoin = document.createElement("img");

                                                                                                                                                                                                                                                                                                                                                                                                                                                    landedCoin.className = "kydno-landed-coin";
                                                                                                                                                                                                                                                                                                                                                                                                                                                    landedCoin.alt = "";

                                                                                                                                                                                                                                                                                                                                                                                                                                                    reelElement.appendChild(landedCoin);
                                                                                                                                                                                                                                                                                                                                                                                                                                                    }


                                                                                                                                                                                                                                                                                                                                                                                                                                                    // =========================================================
                                                                                                                                                                                                                                                                                                                                                                                                                                                    // BUILD ALL FIVE REELS
                                                                                                                                                                                                                                                                                                                                                                                                                                                    // =========================================================

                                                                                                                                                                                                                                                                                                                                                                                                                                                    function showKydnoLandedCoin(reelElement, side) {

                                                                                                                                                                                                                                                                                                                                                                                                                                                            if (!reelElement) return;

                                                                                                                                                                                                                                                                                                                                                                                                                                                                const landedCoin =
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        reelElement.querySelector(".kydno-landed-coin");

                                                                                                                                                                                                                                                                                                                                                                                                                                                                            if (!landedCoin) return;

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                landedCoin.src =
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        KYDNO_COIN_ASSETS[side];

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            landedCoin.classList.add("show");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                                                                                                                    
                                                                                                                                                                                                                                                                                                                                                                                                                                                    const kydnoReelTracks = [];

                                                                                                                                                                                                                                                                                                                                                                                                                                                    for (let i = 1; i <= 5; i++) {

                                                                                                                                                                                                                                                                                                                                                                                                                                                        const reelElement =
                                                                                                                                                                                                                                                                                                                                                                                                                                                                document.getElementById(
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            `kydno-reel-${i}`
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    );

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        createKydnoCircularReel(
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                reelElement
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    );


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        const track =
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                reelElement?.querySelector(
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            ".kydno-reel-track"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    );


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        if (track) {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                kydnoReelTracks.push(track);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                setTimeout(() => {

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        const testReel =
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                document.getElementById("kydno-reel-1");

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    showKydnoLandedCoin(
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            testReel,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    "heads"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        );

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        }, 1500);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
