document.addEventListener("DOMContentLoaded", () => {
        const settingsButton = document.getElementById("settings-button");
            const settingsPanel = document.getElementById("settings-panel");
                const settingsClose = document.getElementById("settings-close");

                    if (!settingsButton || !settingsPanel || !settingsClose) {
                            return;
                                }

                                    settingsButton.addEventListener("click", () => {
                                            settingsPanel.classList.add("open");
                                                });

                                                    settingsClose.addEventListener("click", () => {
                                                            settingsPanel.classList.remove("open");
                                                                });
                                                                });

