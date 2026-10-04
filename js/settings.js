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
            const profilePictureSave =
                document.getElementById("profile-picture-save");

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
                                                        if (profilePictureSave) {
                                                            profilePictureSave.addEventListener("click", async () => {
                                                                    const selectedPet =
                                                                                document.querySelector(".profile-picture-pet.selected");

                                                                                        if (!selectedPet) {
                                                                                                    return;
                                                                                                            }

                                                                                                                    const petName = selectedPet.dataset.petName;

                                                                                                                            const { data: { user }, error: userError } =
                                                                                                                                        await supabaseClient.auth.getUser();

                                                                                                                                                if (userError || !user) {
                                                                                                                                                            return;
                                                                                                                                                                    }

                                                                                                                                                                            const { error } = await supabaseClient
                                                                                                                                                                                        .from("profiles")
                                                                                                                                                                                                    .update({
                                                                                                                                                                                                                    profile_pet_name: petName
                                                                                                                                                                                                                                })
                                                                                                                                                                                                                                            .eq("id", user.id);

                                                                                                                                                                                                                                                    if (error) {
                                                                                                                                                                                                                                                                console.error("Failed to save profile picture:", error);
                                                                                                                                                                                                                                                                            return;
                                                                                                                                                                                                                                                                                    }

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

                                                                                                                                                                                const { data: profile, error: profileError } =
                                                                                                                                                                                    await supabaseClient
                                                                                                                                                                                            .from("profiles")
                                                                                                                                                                                                    .select("profile_pet_name")
                                                                                                                                                                                                            .eq("id", user.id)
                                                                                                                                                                                                                    .single();

                                                                                                                                                                                                                    if (profileError) {
                                                                                                                                                                                                                        console.error("Failed to load saved profile picture:", profileError);
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
                                                                                                                                                                                                                                                                                                    if (
                                                                                                                                                                                                                                                                                                            profile &&
                                                                                                                                                                                                                                                                                                                profile.profile_pet_name === pet.pet_name
                                                                                                                                                                                                                                                                                                                ) {
                                                                                                                                                                                                                                                                                                                    petCard.classList.add("selected");
                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                    

                                                                                                                                                                                                                                                                                                            const image = document.createElement("img");

                                                                                                                                                                                                                                                                                                                    image.src =
                                                                                                                                                                                                                                                                                                                                (typeof itemImages !== "undefined" && itemImages[pet.pet_name])
                                                                                                                                                                                                                                                                                                                                                ? itemImages[pet.pet_name]
                                                                                                                                                                                                                                                                                                                                                                : "";

                                                                                                                                                                                                                                                                                                                                                                        image.alt = "";

                                                                                                                                                                                                                                                                                                                                                                                petCard.appendChild(image);

                                                                                                                                                                                                                                                                                                                                                                                petCard.addEventListener("click", () => {
                                                                                                                                                                                                                                                                                                                                                                                    document
                                                                                                                                                                                                                                                                                                                                                                                            .querySelectorAll(".profile-picture-pet.selected")
                                                                                                                                                                                                                                                                                                                                                                                                    .forEach(card => card.classList.remove("selected"));

                                                                                                                                                                                                                                                                                                                                                                                                        petCard.classList.add("selected");
                                                                                                                                                                                                                                                                                                                                                                                                        });

                                                                                                                                                                                                                                                                                                                                                                                                        petsContainer.appendChild(petCard);
                                                                                                                                                                                                                                                                                                                                                                                            });
                                                                                                                                                                                                                                                                                                                                                                                            }
                                                        

                                                                                                                                            
                                                                                                                                                                                                                                                                                                                
                                                        
                                                    });
