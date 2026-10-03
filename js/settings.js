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
                                                                
const profilePictureButton =
    document.getElementById("profile-picture-settings");

    const profilePictureSelector =
        document.getElementById("profile-picture-selector");

        const profilePictureSelectorClose =
            document.getElementById("profile-picture-selector-close");

            if (
                profilePictureButton &&
                    profilePictureSelector &&
                        profilePictureSelectorClose
                        ) {
                            profilePictureButton.addEventListener("click", () => {
                                    profilePictureSelector.classList.add("open");
                                        });

                                            profilePictureSelectorClose.addEventListener("click", () => {
                                                    profilePictureSelector.classList.remove("open");
                                                        });
                                                        }
                                                    });
