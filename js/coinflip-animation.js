// =========================================================
// KYDNO KORE - 5 REEL 3D COIN ANIMATION
// Clean circular coin version
// =========================================================

const KYDNO_COIN_ASSETS = {
  heads: "assets/kydno_kore_heads_coin.png",
  tails: "assets/kydno_kore_tails_coin.png",
};

function getRandomKydnoSide() {
  return Math.random() < 0.5 ? "heads" : "tails";
}

// =========================================================
// KYDNO KORE - VERTICAL COIN REEL
// =========================================================

function createKydnoCoin(side) {
  const coin = document.createElement("img");

  coin.className = "kydno-reel-coin";

  coin.src = KYDNO_COIN_ASSETS[side];

  coin.alt =
    side === "heads" ? "Kydno Kore Heads Coin" : "Kydno Kore Tails Coin";

  coin.dataset.side = side;

  return coin;
}

// =========================================================
// CREATE ONE VERTICAL REEL
// =========================================================

function createKydnoVerticalReel(reelElement) {
  if (!reelElement) return;

  reelElement.innerHTML = "";

  const track = document.createElement("div");

  track.className = "kydno-vertical-track";

  // Lots of coins so the reel can continuously
  // travel downward without running out.

  // Create one completely random sequence for this reel
  const reelCoins = [];

  for (let i = 0; i < 50; i++) {
    const side = getRandomKydnoSide();

    const coin = createKydnoCoin(side);

    reelCoins.push(coin);

    track.appendChild(coin);
  }

  // Duplicate THIS reel's own random sequence.
  // This creates a seamless loop without synchronizing
  // the other four reels.
  reelCoins.forEach((coin) => {
    const duplicate = coin.cloneNode(true);

    track.appendChild(duplicate);
  });

  reelElement.appendChild(track);

  // Large final result coin.

  const landedCoin = document.createElement("img");

  landedCoin.className = "kydno-landed-coin";

  landedCoin.alt = "";

  reelElement.appendChild(landedCoin);
}

// =========================================================
// BUILD ALL FIVE REELS
// =========================================================

const kydnoReelTracks = [];

for (let i = 1; i <= 5; i++) {
  const reelElement = document.getElementById(`kydno-reel-${i}`);

  createKydnoVerticalReel(reelElement);

  const track = reelElement?.querySelector(".kydno-vertical-track");

  if (track) {
    kydnoReelTracks.push(track);
  }
}

// =========================================================
// SHOW LANDED COIN
// =========================================================

function showKydnoLandedCoin(reelElement, side) {
  if (!reelElement) return;

  const landedCoin = reelElement.querySelector(".kydno-landed-coin");

  if (!landedCoin) return;

  landedCoin.src = KYDNO_COIN_ASSETS[side];

  landedCoin.classList.add("show");
}
// =========================================================
// KYDNO KORE - 5 REEL SPIN TEST
// =========================================================

const KYDNO_TEST_RESULTS = ["heads", "tails", "heads", "tails", "heads"];
// =========================================================
// RUN THE 5 REEL SPIN TEST
// =========================================================
// =========================================================
// CONTINUOUS REEL SPIN + INDIVIDUAL LANDING
// =========================================================
// =========================================================
// CONTINUOUS REEL SPIN + INDIVIDUAL LANDING
// =========================================================

function spinKydnoReel(track, reelElement, resultSide, reelNumber, duration) {
  if (!track || !reelElement) return;

  const coins = Array.from(track.querySelectorAll(".kydno-reel-coin"));

  if (coins.length < 8) return;

  const coinHeight = coins[0].getBoundingClientRect().height;

  const step = coins[1].offsetTop - coins[0].offsetTop;

  if (!step) return;

  const reelHeight = reelElement.clientHeight;

  // Start with multiple coins already visible.
  let currentY = reelHeight / 2 - 3 * step - coinHeight / 2;

  track.style.transition = "none";
  track.style.transform = `translate(-50%, ${currentY}px)`;

  // Extremely fast slot-machine speed.
  const maxSpeed = reelNumber === 5 ? 42 : 48;

  // Slow down only near the end.
  const decelerationTime = reelNumber === 5 ? 1100 : 800;

  const startTime = performance.now();

  const cycleHeight = step * 50;

  let running = true;

  function animateReel(now) {
    if (!running) return;

    const elapsed = now - startTime;

    const remaining = duration - elapsed;

    let speed = maxSpeed;

    // Aggressive deceleration.
    if (remaining <= decelerationTime) {
      const progress = Math.max(0, Math.min(1, remaining / decelerationTime));

      speed = maxSpeed * (0.08 + 0.92 * progress * progress * progress);
    }

    currentY += speed;

    // Loop the 50-coin sequence seamlessly.
    if (currentY > 0) {
      currentY -= cycleHeight;
      }
    track.style.transform = `translate(-50%, ${currentY}px)`;

    if (elapsed >= duration) {
      running = false;

      landKydnoReel(track, reelElement, resultSide, reelNumber, currentY);

      return;
    }

    requestAnimationFrame(animateReel);
  }

  requestAnimationFrame(animateReel);
}

// =========================================================
// INDIVIDUAL REEL LANDING
// =========================================================

function landKydnoReel(track, reelElement, resultSide, reelNumber, currentY) {
  const coins = Array.from(track.querySelectorAll(".kydno-reel-coin"));

  const coinHeight = coins[0]?.getBoundingClientRect().height || 105;
  const reelCenter = reelElement.clientHeight / 2;

  const targetCoin = coins
    .filter((coin) => coin.dataset.side === resultSide)
      .sort((a, b) => {
          const aCenter = a.offsetTop + currentY + coinHeight / 2;
              const bCenter = b.offsetTop + currentY + coinHeight / 2;

                  return (
                        Math.abs(aCenter - reelCenter) -
                              Math.abs(bCenter - reelCenter)
                                  );
                                    })[0];

                                    let finalY = currentY;
                                    
                                    

                                    if (targetCoin) {
                                      const targetCenter =
                                          targetCoin.offsetTop + currentY + coinHeight / 2;

                                            finalY += reelCenter - targetCenter;
                                            }

                                            track.style.setProperty("--kydno-base-y", `${finalY}px`);

  if (!track || !reelElement) return;

  const landedCoin = reelElement.querySelector(".kydno-landed-coin");

  if (!landedCoin) return;

  // Set the final result.
  landedCoin.src = KYDNO_COIN_ASSETS[resultSide];

  landedCoin.classList.remove("show");

  // Smoothly land the reel on the actual result.
  const snapClass = "kydno-reel-snap";
  const snapDuration = reelNumber === 5 ? 720 : 420;
  if (reelNumber === 5) {
    track.classList.remove("kydno-reel-snap");
      track.classList.remove("kydno-reel-five-pull");

        track.style.transition =
            "transform 0.72s cubic-bezier(0.22, 0.8, 0.25, 1)";

              track.style.transform =
                  `translate(-50%, ${finalY}px)`;
                  } else {
                  

                        track.style.animationDuration = `${snapDuration}ms`;

                          track.classList.remove("kydno-reel-snap");
                            track.classList.remove("kydno-reel-five-pull");

                              void track.offsetWidth;

                                track.classList.add(snapClass);
                                }

  // Wait until the physical snap is finished.
  setTimeout(() => {
    // Moving coins are still visible here.
    // Now show the large result coin.
    landedCoin.classList.add("show");

    // Keep the moving coins visible until the result coin
    // has completely finished its landing animation.
    setTimeout(() => {
      track.querySelectorAll(".kydno-reel-coin").forEach((coin) => {
        coin.style.opacity = "0";
      });

      track.classList.remove(snapClass);
      if (reelNumber === 5) {
          const animationPopup = document.getElementById("kydno-coinflip-animation");

            if (animationPopup) {
                animationPopup.style.display = "none";
                  }

                    setTimeout(() => {
                        window.showKydnoFlipResultPopup();
                          }, 1300);
                          }
      
    }, 720);
  }, snapDuration);
}

// =========================================================
// INDIVIDUAL REEL LANDING
// =========================================================

function runKydnoSpinTest(forcedResult = null) {
  // Reset the reels first
  kydnoReelTracks.forEach((track) => {
    track.style.transition = "none";

    track.style.transform = "translate(-50%, 0px)";

    track.querySelectorAll(".kydno-reel-coin").forEach((coin) => {
      coin.style.opacity = "1";
    });
  });

  // Hide previous result coins
  kydnoReelTracks.forEach((track, index) => {
    const reelElement = document.getElementById(`kydno-reel-${index + 1}`);

    const landedCoin = reelElement?.querySelector(".kydno-landed-coin");

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

      const durations = [1300, 1700, 2100, 2500, 4000];
      const oppositeResult = forcedResult === "heads" ? "tails" : "heads";

      const winningCount = Math.random() < 0.15
        ? 5
          : Math.random() < 0.45
              ? 4
                  : 3;

                  const reelResults = Array(5).fill(forcedResult);

                  for (let i = winningCount; i < 5; i++) {
                    reelResults[i] = oppositeResult;
                    }

                    reelResults.sort(() => Math.random() - 0.5);

      kydnoReelTracks.forEach((track, index) => {
        const reelNumber = index + 1;

        const reelElement = document.getElementById(`kydno-reel-${reelNumber}`);

        spinKydnoReel(
            track,
              reelElement,
                reelResults[index],
                  reelNumber,
                    durations[index],
                    );     
      });
    });
  });
}

// Allows us to restart the test later
window.runKydnoSpinTest = runKydnoSpinTest;
window.startKydnoCoinflip = function (resultSide) {
  const normalizedResult = String(resultSide || "")
    .toLowerCase()
    .trim();

  if (normalizedResult !== "heads" && normalizedResult !== "tails") {
    console.error("Invalid Kydno coinflip result:", resultSide);
    return;
  }
  const animationPopup = document.getElementById("kydno-coinflip-animation");

  if (animationPopup) {
      animationPopup.style.display = "flex";
      }

  runKydnoSpinTest(normalizedResult);
};
// =========================================================
// KYDNO FLIP RESULT POPUP
// =========================================================

async function showKydnoFlipResultPopup() {
  const popup = document.getElementById("kydno-flip-result-popup");
    const sideElement = document.getElementById("kydno-flip-result-side");
      const titleElement = document.getElementById("kydno-flip-result-title");

        if (!popup || !sideElement || !titleElement) return;

          const resultSide = String(window.kydnoLastFlipResult || "")
              .toLowerCase()
                  .trim();

                    const winnerId = String(window.kydnoLastFlipWinnerId || "");

                      const {
                          data: { user }
                            } = await supabaseClient.auth.getUser();

                              const didWin = user && winnerId === user.id;

                                sideElement.textContent =
                                    resultSide === "heads" ? "HEADS" : "TAILS";

                                      titleElement.textContent = didWin
                                          ? "You Won"
                                              : "You Lost";

                                                popup.hidden = false;
                                                }

                                                window.showKydnoFlipResultPopup = showKydnoFlipResultPopup;
