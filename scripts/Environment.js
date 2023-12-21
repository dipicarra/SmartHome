"use strict";

/**
 * Represents an environment with various attributes and functionalities.
 */
class Environment {

    /**
     * Initializes a new instance of the Environment class.
     * 
     * @param {String} environmentName - The name of the environment.
     * @param {Array} products - The array of products associated with the environment.
     * @param {Array} productMultiples - The array of product multiples associated with the environment.
     * @param {String} type - The type of the environment.
     */
    constructor(environmentName, products, productMultiples, type) {
        this._environmentName = environmentName;
        this._products = products;
        this._productMultiples = productMultiples;
        this._type = type;
    }

    /**
     * Gets the name of the environment.
     * @property {String} environmentName
     */
    get environmentName() {
        return this._environmentName;
    }

    /**
     * Gets the array of products associated with the environment.
     * @property {Array} products
     */
    get products() {
        return this._products;
    }

    /**
     * Gets the array of product multiples associated with the environment.
     * @property {Array} productMultiples
     */
    get productMultiples() {
        return this._productMultiples
    }

    /**
     * Gets the type of the environment.
     * @property {String} type
     */
    get type() {
        return this._type;
    }

    /**
     * Sets the name of the environment.
     * @param {String} environmentName - The new name for the environment.
     */
    set environmentName(environmentName) {
        this._environmentName = environmentName;
    }

    /**
     * Sets the array of products associated with the environment.
     * @param {Array} products - The new array of products for the environment.
     */
    set products(products) {
        this._products = products;
    }

    /**
     * Sets the type of the environment.
     * @param {String} name - The new type for the environment.
     */
    set type(name) {
        this._type = name;
    }

    /**
     * Sets the array of product multiples associated with the environment.
     * @param {Array} productMultiples - The new array of product multiples for the environment.
     */
    set productMultiples(productMultiples) {
        this._productMultiples = productMultiples;
    }

    /**
     * Creates an environment button and handles associated actions.
     */
    createEnvironmentButton() {
        let environmentWrapper = document.createElement("div");
        environmentWrapper.classList.add("environment");
        environmentWrapper.setAttribute("draggable", true);
        environmentsWindow.prepend(environmentWrapper);
        let button = document.createElement("div");
        button.classList.add(this.type);
        environmentWrapper.appendChild(button);
        let buttonText = document.createElement("p");
        buttonText.classList.add("environment-button-text");
        buttonText.innerText = this.environmentName;
        environmentWrapper.appendChild(buttonText);

        button.addEventListener("click", () => {
            document.body.classList.add("no-blur");
            document.body.style.backgroundImage = `url(./media/images/${this.type}.jpg)`;
            localStorage.setItem("chosenEnvironment", this.type);
            localStorage.setItem("chosenEnvironmentName", this.environmentName);

            environmentsOuterWindow.style.animation = "blur-transition-out 0.15s";
            setTimeout(() => {
                environmentsOuterWindow.style.animation = "blur-transition-in 0.15s";
                setTimeout(() => {
                    environmentsOuterWindow.style.animation = "none";
                }, 150);
                if (preferencesReturnButton.style.display != "none") {
                    if (preferencesOuterWindow.querySelector('[class$="submit-button"]:not([style*="display: none"])')) {
                        preferencesOuterWindow.querySelector('[class$="submit-button"]:not([style*="display: none"])').disabled = true;
                    }
                    preferencesReturnButton.click();
                }

                if (!environmentsWindow.classList.contains("expanded-environments-view")) {
                    expandEnvironmentsButton.click();
                }
                expandEnvironmentsButton.style.display = "none";
                environmentsElements = Array.from(document.getElementsByClassName("environment"));
                environmentsElements.forEach(element => { element.style.display = "none"; });
                leftButton.style.display = 'none';
                rightButton.style.display = 'none';

                // Append the sorted elements back to environmentsWindow
                this.products.forEach((element) => {
                    environmentsWindow.appendChild(element);

                    element.addEventListener("click", () => {
                        editEnvironmentButton.style.display = "none";
                    })
                });
                editEnvironmentButton.style.display = "flex";

                // Add message if all atributes are null
                environmentsText.innerText = this.environmentName;
                environmentsText.style.marginLeft = "42px";
                document.body.style.backdropFilter = "none";
                document.body.style.webkitBackdropFilter = "none";
                environmentsWindow.style.display = "flex";
                environmentsOuterWindow.style.justifyContent = "space-between";
                environmentsReturnButton.style.removeProperty("display");
            }, 150);
        });
    }

    // Products common to all environments

    /**
     * Initializes an Climate instance for the current instance.
     * 
     * @param {HTMLElement} element - The button element that will triggers 
     * the climate window to be displayed.
     */
    climate(element) {
        let climateProducts = [];
        for (const product of this.products) {
            if (product.includes("AC") || product.includes("AirPurifier")
                || product.includes("AirDiffuser") ||
                product.includes("Dehumidifier") ||
                product.includes("Humidifier")) {
                climateProducts.push(product);
            }
        }
        new Climate(element, "environments", this.environmentName, climateProducts);
    }

    /**
     * Initializes a Lights instance for the current instance.
     * 
     * @param {HTMLElement} element - The button element that triggers the lights window to be displayed.
     * @param {Number} count - The count of lights.
     */
    lights(element, count) {
        new Lights(element, count, "environments", this.environmentName);
    }

    /**
     * Initializes a Blinds instance for the current instance.
     * 
     * @param {HTMLElement} element - The button element that triggers the blinds window to be displayed.
     * @param {Number} count - The count of blinds.
     */
    blinds(element, count) {
        new Blinds(element, count, "environments", this.environmentName);
    }

    /**
     * Initializes a fireplace instance for the current instance.
     * 
     * @param {HTMLElement} element - The button element that triggers the fireplace window to be displayed.
     */
    fireplace(element) {
        let fireplaceWindow = document.createElement('div');
        fireplaceWindow.classList.add("fireplace-window");

        let fireplacePowerButton = document.createElement("button");
        fireplacePowerButton.innerHTML = `<svg height="20px" width="20px" 
        version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 512 512">
        <g>
            <g>
            <path d="m256,501c-120.6,0-218.7-98.1-218.7-218.7 0-91.6 57.9-174.1 144.2-205.4 10.6-3.9 22.3,1.6 26.2,12.2 
            3.8,10.6-1.6,22.3-12.2,26.2-70.1,25.5-117.3,92.6-117.3,167 0,98.1 79.8,177.8 177.8,177.8 
            98.1,0 177.8-79.8 177.8-177.8 0-74.4-47.1-141.6-117.3-167-10.6-3.8-16.1-15.6-12.2-26.2 3.8-10.6 
            15.6-16.1 26.2-12.2 86.2,31.3 144.2,113.8 144.2,205.4 0,120.6-98.1,218.7-218.7,218.7z"/>
            <path d="m256,308.8c-11.3,0-20.4-9.1-20.4-20.4v-257c0-11.3 9.1-20.4 20.4-20.4 11.3,0 20.4,9.1 20.4,20.4v256.9c0,11.3-9.1,20.5-20.4,20.5z"/>
            </g>
        </g>
        </svg>`;
        fireplacePowerButton.classList.add("fireplace-power-button");
        fireplacePowerButton.style.display = "flex";
        fireplacePowerButton.style.border = "3px solid red";
        fireplacePowerButton.querySelector("svg").style.fill = "red";
        fireplaceWindow.appendChild(fireplacePowerButton);

        let fireplaceFlameWrapper = document.createElement('div');
        fireplaceFlameWrapper.classList.add('.fireplace-flame-wrapper');
        fireplaceFlameWrapper.innerHTML = `
        <div class="fireplace-flame">
            <div class="zone-wrap">
                <div class="zone">
                    <div class="magnets">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div class="sphere">
                        <div class="core"></div>
                    </div>
                </div>
            </div>
        </div>`;
        fireplaceWindow.appendChild(fireplaceFlameWrapper);
        fireplaceFlameWrapper.style.display = "none";

        let fireplaceColorPicker = document.createElement('input');
        fireplaceColorPicker.type = "color";
        fireplaceColorPicker.value = getComputedStyle(document.documentElement).getPropertyValue("--color");
        fireplaceColorPicker.style.backgroundColor = "transparent";
        fireplaceFlameWrapper.querySelector(".fireplace-flame").appendChild(fireplaceColorPicker);

        let fireplaceSubmitButton = document.createElement('button');
        fireplaceSubmitButton.innerText = lang == "en" ? "Apply" : lang == "pt" ? "Aplicar" : null;
        fireplaceSubmitButton.style.backgroundColor = "green";
        fireplaceSubmitButton.style.width = "100%";
        fireplaceSubmitButton.style.color = "white";
        fireplaceSubmitButton.classList.add("fireplace-submit-button");
        fireplaceWindow.appendChild(fireplaceSubmitButton);

        fireplaceColorPicker.addEventListener("input", () => {
            document.documentElement.style.setProperty("--color", fireplaceColorPicker.value);
            if (fireplaceColorPicker.value != localStorage.getItem(`fireplaceFlameColor-${this.environmentName}`)) {
                fireplaceSubmitButton.innerText = lang == "en" ? "Apply" : lang == "pt" ? "Aplicar" : null;
                fireplaceSubmitButton.disabled = false;
            }
        });

        fireplacePowerButton.addEventListener("click", () => {
            if (fireplacePowerButton.querySelector("svg").style.fill == "red") {
                fireplacePowerButton.style.border = "3px solid green";
                fireplacePowerButton.querySelector("svg").style.fill = "green";
                fireplaceFlameWrapper.style.removeProperty("display");

                if (localStorage.getItem(`fireplaceFlameColor-${this.environmentName}`) == "off") {
                    fireplaceSubmitButton.innerText = lang == "en" ? "Apply" : lang == "pt" ? "Aplicar" : null;
                    fireplaceSubmitButton.disabled = false;
                }
                else if (fireplaceColorPicker.value == localStorage.getItem(`fireplaceFlameColor-${this.environmentName}`)) {
                    fireplaceSubmitButton.disabled = true;
                    fireplaceSubmitButton.innerText = lang == "en" ? "No changes to apply" : "Nenhuma mudança a aplicar";
                }
                else {
                    fireplaceSubmitButton.innerText = lang == "en" ? "Apply" : lang == "pt" ? "Aplicar" : null;
                    fireplaceSubmitButton.disabled = false;
                }
            }
            else {
                fireplacePowerButton.style.border = "3px solid red";
                fireplacePowerButton.querySelector("svg").style.fill = "red";
                fireplaceFlameWrapper.style.display = "none";

                if (localStorage.getItem(`fireplaceFlameColor-${this.environmentName}`) != "off" && localStorage.getItem(`fireplaceFlameColor-${this.environmentName}`)) {
                    fireplaceSubmitButton.innerText = lang == "en" ? "Apply" : lang == "pt" ? "Aplicar" : null;
                    fireplaceSubmitButton.disabled = false;
                }
                else {
                    fireplaceSubmitButton.disabled = true;
                    fireplaceSubmitButton.innerText = lang == "en" ? "No changes to apply" : "Nenhuma mudança a aplicar";
                }
            }
        });

        fireplaceSubmitButton.addEventListener("click", () => {
            showConfirmationDialog(lang == "en" ? "Are you sure you want to alter the fireplace settings?" :
                lang == "pt" ? "Tem certeza que quer alterar a configuração da lareira?" : null,
                lang == "en" ? "Yes" : lang == "pt" ? "Sim" : null,
                lang == "en" ? "No" : lang == "pt" ? "Não" : null,
                "negative",
                "environments",
                environmentsOuterWindow,
                lang == "en" ? "The fireplace settings were sucessfully altered" : lang == "pt" ?
                    "A configuração da lareira foi alterada com sucesso" : null, () => {
                        fireplaceSubmitButton.disabled = true;
                        if (fireplacePowerButton.querySelector("svg").style.fill == "red") {
                            localStorage.setItem(`fireplaceFlameColor-${this.environmentName}`, "off");
                        } else {
                            localStorage.setItem(`fireplaceFlameColor-${this.environmentName}`, fireplaceColorPicker.value);
                        }
                        // Go back
                        setTimeout(() => {
                            environmentsReturnButton.click();
                        }, 3000);
                    });
        });

        element.addEventListener("click", () => {
            environmentsOuterWindow.style.animation = "blur-transition-out 0.15s";
            setTimeout(() => {
                environmentsOuterWindow.style.animation = "blur-transition-in 0.15s";
                setTimeout(() => {
                    environmentsOuterWindow.style.removeProperty("animation");
                }, 150);
                document.querySelectorAll(".environment-preference-button").forEach(element => {
                    element.style.display = "none";
                });
                environmentsWindow.appendChild(fireplaceWindow);
                environmentsWindow.style.display = "flex";
                environmentsReturnButton.style.removeProperty("display");
                if (lang === 'en') {
                    environmentsText.innerHTML = `Fireplace<p class='subp'>${this.environmentName}</p>`;
                }
                else if (lang === 'pt') {
                    environmentsText.innerHTML = `Lareira<p class='subp'>${this.environmentName}</p>`;
                }
                if (localStorage.getItem(`fireplaceFlameColor-${this.environmentName}`)) {
                    document.documentElement.style.setProperty("--color", localStorage.getItem(`fireplaceFlameColor-${this.environmentName}`));
                    fireplaceColorPicker.value = localStorage.getItem(`fireplaceFlameColor-${this.environmentName}`);
                    fireplaceSubmitButton.disabled = true;
                    fireplaceSubmitButton.innerText = lang == "en" ? "No changes to apply" : "Nenhuma mudança a aplicar";

                    if (localStorage.getItem(`fireplaceFlameColor-${this.environmentName}`) == "off") {
                        fireplaceFlameWrapper.style.display = "none";
                        fireplacePowerButton.style.border = "3px solid red";
                        fireplacePowerButton.querySelector("svg").style.fill = "red";
                    } else {
                        fireplacePowerButton.style.border = "3px solid green";
                        fireplacePowerButton.querySelector("svg").style.fill = "green";
                        fireplaceFlameWrapper.style.removeProperty("display");
                    }
                }
                else {
                    fireplaceFlameWrapper.style.display = "none";
                    fireplacePowerButton.style.border = "3px solid red";
                    fireplacePowerButton.querySelector("svg").style.fill = "red";
                    fireplaceSubmitButton.disabled = true;
                    fireplaceSubmitButton.innerText = lang == "en" ? "No changes to apply" : "Nenhuma mudança a aplicar";
                    document.documentElement.style.setProperty("--color", getComputedStyle(document.documentElement).getPropertyValue("--defaultColor"));
                    fireplaceColorPicker.value = getComputedStyle(document.documentElement).getPropertyValue("--defaultColor");
                }
            }, 150);
        });
    }

    /**
     * Initializes a TV instance for the current instance.
     * 
     * @param {HTMLElement} element - The button element that triggers the TV window to be displayed.
     */
    TV(element) {
        let TVWindow = document.createElement('div');
        TVWindow.classList.add("TV-window");

        let TVPowerButton = document.createElement("button");
        TVPowerButton.innerHTML = `<svg height="20px" width="20px" 
        version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 512 512">
        <g>
            <g>
            <path d="m256,501c-120.6,0-218.7-98.1-218.7-218.7 0-91.6 57.9-174.1 144.2-205.4 10.6-3.9 22.3,1.6 26.2,12.2 
            3.8,10.6-1.6,22.3-12.2,26.2-70.1,25.5-117.3,92.6-117.3,167 0,98.1 79.8,177.8 177.8,177.8 
            98.1,0 177.8-79.8 177.8-177.8 0-74.4-47.1-141.6-117.3-167-10.6-3.8-16.1-15.6-12.2-26.2 3.8-10.6 
            15.6-16.1 26.2-12.2 86.2,31.3 144.2,113.8 144.2,205.4 0,120.6-98.1,218.7-218.7,218.7z"/>
            <path d="m256,308.8c-11.3,0-20.4-9.1-20.4-20.4v-257c0-11.3 9.1-20.4 20.4-20.4 11.3,0 20.4,9.1 20.4,20.4v256.9c0,11.3-9.1,20.5-20.4,20.5z"/>
            </g>
        </g>
        </svg>`;
        TVPowerButton.classList.add("TV-power-button");
        TVPowerButton.style.display = "flex";
        TVPowerButton.style.border = "3px solid green";
        TVPowerButton.querySelector("svg").style.fill = "green";
        TVWindow.appendChild(TVPowerButton);

        TVWindow.appendChild(document.createElement('hr'));

        TVWindow.appendChild(Object.assign(document.createElement('p'), { innerText: lang == "en" ? "Channel:" : "Canal:" }));
        let channelInput = document.createElement("input");
        channelInput.readOnly = true;
        channelInput.value = "Menu";
        channelInput.type = "text";
        TVWindow.appendChild(channelInput);

        let numberPad = document.createElement("div");
        numberPad.classList.add("TV-number-pad");
        numberPad.innerHTML = `<button>0</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button id="number-pad-del">Del</button>
        <button style="font-size: 15px">Menu</button>`;
        TVWindow.appendChild(numberPad);

        numberPad.querySelector('#number-pad-del').disabled = true;

        // Event listener function for number buttons
        function handleNumberButtonClick(event) {
            const clickedButton = event.target;
            const inputValue = channelInput.value;

            // Remove "Menu" if it's present
            if (inputValue === 'Menu') {
                channelInput.value = '';
            }

            if (inputValue.length < 10) {
                channelInput.value += clickedButton.innerText;
            }

            // Enable the "Del" button
            numberPad.querySelector('#number-pad-del').disabled = false;
        }

        // Event listener function for the "Del" button
        function handleDeleteButtonClick() {
            const inputValue = channelInput.value;

            // Remove the last character from the input field
            channelInput.value = inputValue.slice(0, -1);

            // Disable the "Del" button if "Menu" is in the input field
            if (channelInput.value === 'Menu') {
                numberPad.querySelector('#number-pad-del').disabled = true;
            }
        }

        // Event listener function for the "Menu" button
        function handleMenuButtonClick() {
            // Set the input field to "Menu" only
            channelInput.value = 'Menu';

            // Disable the "Del" button
            numberPad.querySelector('#number-pad-del').disabled = true;
        }

        // Add event listeners to each number button
        const numberButtons = numberPad.querySelectorAll('button');
        numberButtons.forEach(button => {
            switch (button.innerText) {
                case 'Del':
                    button.addEventListener('click', handleDeleteButtonClick);
                    break;
                case 'Menu':
                    button.addEventListener('click', handleMenuButtonClick);
                    break;
                default:
                    button.addEventListener('click', handleNumberButtonClick);
                    break;
            }
        });

        TVWindow.appendChild(document.createElement('hr'));

        TVWindow.appendChild(Object.assign(document.createElement('p'), { innerText: lang == "en" ? "Sound Volume:" : "Volume do Som:" }));

        let TVRangeContainer = document.createElement('div');
        TVRangeContainer.id = "TV-range-container";

        TVRangeContainer.innerHTML = `
        <div class="range-slider">
        <div id="slider_thumb" class="range-slider_thumb"></div>
        <div class="range-slider_line">
            <div id="slider_line" class="range-slider_line-fill"></div>
        </div>
        <input id="slider_input" class="range-slider_input" type="range" value="0" min="0" max="100">
        </div>`;
        TVWindow.appendChild(TVRangeContainer);

        let slider_input = TVWindow.querySelector('#TV-range-container').querySelector('#slider_input');
        let slider_thumb = TVWindow.querySelector('#TV-range-container').querySelector('#slider_thumb');
        let slider_line = TVWindow.querySelector('#TV-range-container').querySelector('#slider_line');
        const showSliderValue = () => {
            slider_thumb.innerHTML = slider_input.value + '%';
            const bulletPosition = (slider_input.value / slider_input.max),
                space = slider_input.offsetWidth - slider_thumb.offsetWidth;

            slider_thumb.style.left = (bulletPosition * space) + 'px';
            slider_line.style.width = slider_input.value + '%';
        }

        TVWindow.appendChild(document.createElement('hr'));

        let TVSubmitButton = document.createElement('button');
        TVSubmitButton.innerText = lang == "en" ? "Apply" : lang == "pt" ? "Aplicar" : null;
        TVSubmitButton.style.backgroundColor = "green";
        TVSubmitButton.style.width = "100%";
        TVSubmitButton.style.color = "white";
        TVSubmitButton.classList.add("TV-submit-button");
        TVWindow.appendChild(TVSubmitButton);

        TVSubmitButton.addEventListener("click", () => {
            showConfirmationDialog(lang == "en" ? "Are you sure you want to alter the state of the TV?" :
                lang == "pt" ? "Tem certeza que quer alterar o estado da TV?" : null,
                lang == "en" ? "Yes" : lang == "pt" ? "Sim" : null,
                lang == "en" ? "No" : lang == "pt" ? "Não" : null,
                "negative",
                "environments",
                environmentsOuterWindow,
                lang == "en" ? "The TV state was sucessfully altered" : lang == "pt" ?
                    "O estado da TV foi alterado com sucesso" : null, () => {
                        localStorage.setItem(`TV-${this.environmentName}`, JSON.stringify({
                            state: TVWindow.querySelector(".TV-power-button").querySelector("svg").style.fill == "green" ? "on" : "off",
                            channel: TVWindow.querySelector("input[type='text']").value,
                            volume: TVWindow.querySelector("#slider_input").value
                        }));

                        TVSubmitButton.disabled = true;
                        TVSubmitButton.innerText = lang == "en" ? "No changes to apply" : lang == "pt" ? "Nenhuma mudança a aplicar" : null;
                    });
        });

        TVPowerButton.addEventListener("click", () => {
            if (TVPowerButton.querySelector("svg").style.fill == "red") {
                TVPowerButton.style.border = "3px solid green";
                TVPowerButton.querySelector("svg").style.fill = "green";

                Array.from(TVWindow.children).forEach(child => {
                    child.style.display = "flex";
                });
            }
            else {
                TVPowerButton.style.border = "3px solid red";
                TVPowerButton.querySelector("svg").style.fill = "red";

                Array.from(TVWindow.children).forEach(child => {
                    if (child != TVPowerButton && child != TVWindow.querySelector("hr")[0] && !child.classList.contains("TV-submit-button")) {
                        child.style.display = "none";
                    }
                });
            }
        });

        [TVWindow.querySelectorAll('button'), TVWindow.querySelectorAll('input')].forEach(elements => {
            elements.forEach(element => {
                element.addEventListener("click", () => {
                    TVSubmitButton.disabled = false;
                    TVSubmitButton.innerText = lang == "en" ? "Apply" : lang == "pt" ? "Aplicar" : null;
                });
                element.addEventListener("input", () => {
                    TVSubmitButton.disabled = false;
                    TVSubmitButton.innerText = lang == "en" ? "Apply" : lang == "pt" ? "Aplicar" : null;
                });
            });
        });

        showSliderValue();
        slider_input.addEventListener('input', showSliderValue);
        window.addEventListener("resize", showSliderValue);
        element.addEventListener("click", () => {
            environmentsOuterWindow.style.animation = "blur-transition-out 0.15s";
            setTimeout(() => {
                environmentsOuterWindow.style.animation = "blur-transition-in 0.15s";
                setTimeout(() => {
                    environmentsOuterWindow.style.removeProperty("animation");
                }, 150);
                document.querySelectorAll(".environment-preference-button").forEach(element => {
                    element.style.display = "none";
                });
                environmentsWindow.appendChild(TVWindow);
                TVSubmitButton.disabled = true;
                TVSubmitButton.innerText = lang == "en" ? "No changes to apply" : lang == "pt" ? "Nenhuma mudança a aplicar" : null;
                environmentsWindow.style.display = "flex";
                environmentsReturnButton.style.removeProperty("display");
                environmentsText.innerHTML = `TV<p class='subp'>${this.environmentName}</p>`;
                showSliderValue();
                if (localStorage.getItem(`TV-${this.environmentName}`)) {
                    TVWindow.querySelector("#slider_input").value = JSON.parse(localStorage.getItem(`TV-${this.environmentName}`)).volume;
                    showSliderValue();
                    TVWindow.querySelector("input[type='text']").value = JSON.parse(localStorage.getItem(`TV-${this.environmentName}`)).channel;
                    if (JSON.parse(localStorage.getItem(`TV-${this.environmentName}`)).state == "on") {
                        TVPowerButton.style.border = "3px solid green";
                        TVPowerButton.querySelector("svg").style.fill = "green";
                        Array.from(TVWindow.children).forEach(child => {
                            child.style.display = "flex";
                        });
                    }
                    else if (JSON.parse(localStorage.getItem(`TV-${this.environmentName}`)).state == "off") {
                        TVPowerButton.style.border = "3px solid red";
                        TVPowerButton.querySelector("svg").style.fill = "red";
                        Array.from(TVWindow.children).forEach(child => {
                            if (child != TVPowerButton && child != TVWindow.querySelector('hr') &&
                                child != TVWindow.querySelector('.TV-submit-button')) {
                                child.style.display = "none";
                            }
                        });
                        TVWindow.querySelector("#slider_input").value = 0;
                    }
                }
                else {
                    TVPowerButton.style.border = "3px solid red";
                    TVPowerButton.querySelector("svg").style.fill = "red";
                    TVWindow.querySelector("#slider_input").value = 0;
                    Array.from(TVWindow.children).forEach(child => {
                        if (child != TVPowerButton && child != TVWindow.querySelector('hr') &&
                            child != TVWindow.querySelector('.TV-submit-button')) {
                            child.style.display = "none";
                        }
                    });
                }
                showSliderValue();
            }, 150);
        });
    }

}