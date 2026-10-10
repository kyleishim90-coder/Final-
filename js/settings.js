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
                                                                // Pet Values window
                                                                const petValuesButton = document.getElementById("pet-values-settings");
                                                                const petValuesWindow = document.getElementById("pet-values-window");
                                                                const petValuesClose = document.getElementById("pet-values-close");

                                                                if (petValuesButton && petValuesWindow && petValuesClose) {
                                                                    petValuesButton.addEventListener("click", () => {
                                                                            petValuesWindow.style.display = "flex";
                                                                                });

                                                                                    petValuesClose.addEventListener("click", () => {
                                                                                            petValuesWindow.style.display = "none";
                                                                                                });

                                                                                                    petValuesWindow.addEventListener("click", (event) => {
                                                                                                            if (event.target === petValuesWindow) {
                                                                                                                        petValuesWindow.style.display = "none";
                                                                                                                                }
                                                                                                                                    });
                                                                                                                                    }
  
                                                                                                                                    const petValuesSearch = document.getElementById("pet-values-search");
                                                                                                                                    const petValuesList = document.getElementById("pet-values-list");

                                                                                                                                    function renderPetValues() {
                                                                                                                                        if (!petValuesList) return;

                                                                                                                                            const searchText = (petValuesSearch?.value || "")
                                                                                                                                                    .trim()
                                                                                                                                                            .toLowerCase();

                                                                                                                                                                const pets = itemDatabase
                                                                                                                                                                        .filter(pet => pet.name !== "Old Kd")
                                                                                                                                                                                .filter(pet => pet.name.toLowerCase().includes(searchText))
                                                                                                                                                                                        .sort((a, b) => Number(a.value) - Number(b.value));

                                                                                                                                                                                            if (pets.length === 0) {
                                                                                                                                                                                                    petValuesList.innerHTML = "<p>No pets found.</p>";
                                                                                                                                                                                                            return;
                                                                                                                                                                                                                }

                                                                                                                                                                                                                    petValuesList.innerHTML = pets.map(pet => {
                                                                                                                                                                                                                            const name = pet.name.replace(/[&<>"']/g, char => ({
                                                                                                                                                                                                                                        "&": "&amp;",
                                                                                                                                                                                                                                                    "<": "&lt;",
                                                                                                                                                                                                                                                                ">": "&gt;",
                                                                                                                                                                                                                                                                            '"': "&quot;",
                                                                                                                                                                                                                                                                                        "'": "&#39;"
                                                                                                                                                                                                                                                                                                }[char]));

                                                                                                                                                                                                                                                                                                        const imageUrl = itemImages[pet.name] || "";
                                                                                                                                                                                                                                                                                                                const image = imageUrl
                                                                                                                                                                                                                                                                                                                            ? `<img class="pet-values-image" src="${imageUrl}" alt="">`
                                                                                                                                                                                                                                                                                                                                        : `<span class="pet-values-image-placeholder">?</span>`;

                                                                                                                                                                                                                                                                                                                                                return `
                                                                                                                                                                                                                                                                                                                                                            <div class="pet-values-row">
                                                                                                                                                                                                                                                                                                                                                                            <div class="pet-values-pet">
                                                                                                                                                                                                                                                                                                                                                                                                ${image}
                                                                                                                                                                                                                                                                                                                                                                                                                    <span>${name}</span>
                                                                                                                                                                                                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                    <span class="pet-values-amount">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        ${Number(pet.value).toLocaleString()} Kash
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        </span>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            `;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                }).join("");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                }

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                petValuesSearch?.addEventListener("input", renderPetValues);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                petValuesButton?.addEventListener("click", renderPetValues);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
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
                                                                                                                                                                                                                                                                                            if (typeof loadActiveFlips === "function") {
                                                                                                                                                                                                                                                                                                    await loadActiveFlips();
                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                            
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
                                                        

                                                                                                                                            
                                                                                                                                                                                                                                                                                                                
                                                        
                                                  async function getSavedProfilePetImage(userId) {
                                                        if (!userId) return "";

                                                            const { data, error } = await supabaseClient
                                                                    .from("profiles")
                                                                            .select("profile_pet_name")
                                                                                    .eq("id", userId)
                                                                                            .maybeSingle();

                                                                                                if (error || !data?.profile_pet_name) {
                                                                                                        return "";
                                                                                                            }

                                                                                                                if (
                                                                                                                        typeof itemImages !== "undefined" &&
                                                                                                                                itemImages[data.profile_pet_name]
                                                                                                                                    ) {
                                                                                                                                            return itemImages[data.profile_pet_name];
                                                                                                                                                }

                                                                                                                                                    return "";
                                                                                                                                                    }
                                                  
                                                                                                                                                                                                                                                                                                                                                                                        });
