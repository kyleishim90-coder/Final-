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
                                loadUnlockedProfilePets();
                                        });

                                            profilePictureSelectorClose.addEventListener("click", () => {
                                                    profilePictureSelector.classList.remove("open");
                                                        });
                                                        }
                                                        async function loadUnlockedProfilePets() {
                                                                const petsContainer =
                                                                        document.getElementById("profile-picture-pets");

                                                                            if (!petsContainer) return;

                                                                                petsContainer.innerHTML =
                                                                                        '<div class="profile-picture-loading">Loading your unlocked pets...</div>';

                                                                                            const { data: { user }, error: userError } =
                                                                                                    await supabaseClient.auth.getUser();

                                                                                                        if (userError || !user) {
                                                                                                                petsContainer.innerHTML =
                                                                                                                            '<div class="profile-picture-loading">Please log in first.</div>';
                                                                                                                                    return;
                                                                                                                                        }

                                                                                                                                            const { data, error } = await supabaseClient
                                                                                                                                                    .from("profile_pet_unlocks")
                                                                                                                                                            .select("pet_name")
                                                                                                                                                                    .eq("user_id", user.id)
                                                                                                                                                                            .order("pet_name", { ascending: true });

                                                                                                                                                                                if (error) {
                                                                                                                                                                                        console.error("Failed to load profile pet unlocks:", error);
                                                                                                                                                                                                petsContainer.innerHTML =
                                                                                                                                                                                                            '<div class="profile-picture-loading">Failed to load unlocked pets.</div>';
                                                                                                                                                                                                                    return;
                                                                                                                                                                                                                        }

                                                                                                                                                                                                                            if (!data || data.length === 0) {
                                                                                                                                                                                                                                    petsContainer.innerHTML =
                                                                                                                                                                                                                                                '<div class="profile-picture-loading">You have not unlocked any profile pets yet.</div>';
                                                                                                                                                                                                                                                        return;
                                                                                                                                                                                                                                                            }

                                                                                                                                                                                                                                                                petsContainer.innerHTML = "";

                                                                                                                                                                                                                                                                    data.forEach((pet) => {
                                                                                                                                                                                                                                                                            const petCard = document.createElement("button");

                                                                                                                                                                                                                                                                                    petCard.type = "button";
                                                                                                                                                                                                                                                                                            petCard.className = "profile-picture-pet";
                                                                                                                                                                                                                                                                                                    petCard.dataset.petName = pet.pet_name;

                                                                                                                                                                                                                                                                                                            const image = document.createElement("img");

                                                                                                                                                                                                                                                                                                                    image.src =
                                                                                                                                                                                                                                                                                                                                (typeof itemImages !== "undefined" && itemImages[pet.pet_name])
                                                                                                                                                                                                                                                                                                                                                ? itemImages[pet.pet_name]
                                                                                                                                                                                                                                                                                                                                                                : "";

                                                                                                                                                                                                                                                                                                                                                                        image.alt = "";

                                                                                                                                                                                                                                                                                                                                                                                petCard.appendChild(image);
                                                                                                                                                                                                                                                                                                                                                                                        petsContainer.appendChild(petCard);
                                                                                                                                                                                                                                                                                                                                                                                            });
                                                                                                                                                                                                                                                                                                                                                                                            }
                                                        

                                                                                                                                            
                                                                                                                                                                                                                                                                                                                
                                                        
                                                    });
