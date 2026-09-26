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

        const coin = document.createElement("img");

            coin.className = "kydno-3d-coin";

                coin.src =
                        KYDNO_COIN_ASSETS[side];

                            coin.alt =
                                    side === "heads"
                                                ? "Kydno Kore Heads Coin"
                                                            : "Kydno Kore Tails Coin";

                                                                coin.dataset.side = side;

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
    // =========================================================
    // KYDNO KORE - 5 REEL SPIN TEST
    // =========================================================

    const KYDNO_TEST_RESULTS = [
        "heads",
            "tails",
                "heads",
                    "tails",
                        "heads"
                        ];

                        function getKydnoTargetAngle(side) {

                            const index =
                                    KYDNO_REEL_SIDES.indexOf(side);

                                        if (index < 0) return 0;

                                            return -(
                                                    (360 / KYDNO_REEL_SIDES.length)
                                                            * index
                                                                );
                                                                }

                                                                function spinKydnoReel(
                                                                    track,
                                                                        reelElement,
                                                                            resultSide,
                                                                                reelNumber,
                                                                                    duration
                                                                                    ) {

                                                                                        if (!track || !reelElement) return;

                                                                                            const targetAngle =
                                                                                                    getKydnoTargetAngle(resultSide);

                                                                                                        const fullSpins =
                                                                                                                reelNumber === 5
                                                                                                                            ? 8
                                                                                                                                        : 6;

                                                                                                                                            const finalRotation =
                                                                                                                                                    -(fullSpins * 360)
                                                                                                                                                            + targetAngle;

                                                                                                                                                                track.style.transition =
                                                                                                                                                                        `transform ${duration}ms cubic-bezier(0.08, 0.72, 0.18, 1)`;

                                                                                                                                                                            track.style.transform = `
                                                                                                                                                                                    translate(-50%, -50%)
                                                                                                                                                                                            rotateX(${finalRotation}deg)
                                                                                                                                                                                                    translateZ(-18px)
                                                                                                                                                                                                        `;

                                                                                                                                                                                                            setTimeout(() => {

                                                                                                                                                                                                                    showKydnoLandedCoin(
                                                                                                                                                                                                                                reelElement,
                                                                                                                                                                                                                                            resultSide
                                                                                                                                                                                                                                                    );

                                                                                                                                                                                                                                                            if (reelNumber === 5) {

                                                                                                                                                                                                                                                                        reelElement.classList.add(
                                                                                                                                                                                                                                                                                        "kydno-reel-landed"
                                                                                                                                                                                                                                                                                                    );

                                                                                                                                                                                                                                                                                                                setTimeout(() => {

                                                                                                                                                                                                                                                                                                                                reelElement.classList.remove(
                                                                                                                                                                                                                                                                                                                                                    "kydno-reel-landed"
                                                                                                                                                                                                                                                                                                                                                                    );

                                                                                                                                                                                                                                                                                                                                                                                }, 300);
                                                                                                                                                                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                                                                                                                                                                            }, duration);
                                                                                                                                                                                                                                                                                                                                                                                            }           
  // =========================================================
  // RUN THE 5 REEL SPIN TEST
  // =========================================================

  function runKydnoSpinTest() {

      // Reset the reels first
          kydnoReelTracks.forEach((track) => {

                  track.style.transition = "none";

                          track.style.transform = `
                                      translate(-50%, -50%)
                                                  rotateX(0deg)
                                                              translateZ(-18px)
                                                                      `;
                                                                          });

                                                                              // Hide previous result coins
                                                                                  kydnoReelTracks.forEach((track, index) => {

                                                                                          const reelElement =
                                                                                                      document.getElementById(
                                                                                                                      `kydno-reel-${index + 1}`
                                                                                                                                  );

                                                                                                                                          const landedCoin =
                                                                                                                                                      reelElement?.querySelector(
                                                                                                                                                                      ".kydno-landed-coin"
                                                                                                                                                                                  );

                                                                                                                                                                                          if (landedCoin) {
                                                                                                                                                                                                      landedCoin.classList.remove("show");
                                                                                                                                                                                                                  landedCoin.removeAttribute("src");
                                                                                                                                                                                                                          }
                                                                                                                                                                                                                              });

                                                                                                                                                                                                                                  // Wait for the reset to happen
                                                                                                                                                                                                                                      requestAnimationFrame(() => {

                                                                                                                                                                                                                                              requestAnimationFrame(() => {

                                                                                                                                                                                                                                                          // Reel 1 → 2 → 3 → 4
                                                                                                                                                                                                                                                                      // Reel 5 gets the dramatic slowdown

                                                                                                                                                                                                                                                                                  const durations = [
                                                                                                                                                                                                                                                                                                  1600,
                                                                                                                                                                                                                                                                                                                  2100,
                                                                                                                                                                                                                                                                                                                                  2600,
                                                                                                                                                                                                                                                                                                                                                  3100,
                                                                                                                                                                                                                                                                                                                                                                  5000
                                                                                                                                                                                                                                                                                                                                                                              ];

                                                                                                                                                                                                                                                                                                                                                                                          kydnoReelTracks.forEach(
                                                                                                                                                                                                                                                                                                                                                                                                          (track, index) => {

                                                                                                                                                                                                                                                                                                                                                                                                                              const reelNumber =
                                                                                                                                                                                                                                                                                                                                                                                                                                                      index + 1;

                                                                                                                                                                                                                                                                                                                                                                                                                                                                          const reelElement =
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  document.getElementById(
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              `kydno-reel-${reelNumber}`
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      );

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          spinKydnoReel(
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  track,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          reelElement,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  KYDNO_TEST_RESULTS[index],
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          reelNumber,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  durations[index]
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      );
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  );

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          });

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              });
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              }


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              // Automatically start the test
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              setTimeout(() => {

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  runKydnoSpinTest();

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  }, 500);


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  // Allows us to restart the test later
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  window.runKydnoSpinTest =
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      runKydnoSpinTest;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
