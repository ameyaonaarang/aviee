let gameState = "START";
const popupContent = document.querySelector(".popup-content");

function loadState() {

    if (gameState === "START") {

        loadStart();

    }

    else if (gameState === "LOADING") {

        loadLoading();

    }

    else if (gameState === "PROFILES") {

        loadProfiles();

    }

    else if (gameState === "NETFLIX") {

        loadNetflix();

    }

    else if (gameState === "EDIT") {

        loadEdit();

    }

}

function changeState(state) {

    gameState = state;

    loadState();

}

function loadStart() {

    popupContent.innerHTML = `

        <div class="startScreen">

            <img src="assets/start.jpg" class="startLogo">

            <div class="pressText">

                press any key to start

            </div>

        </div>

    `;

}

function startNetflix() {

    if (gameState === "START") {

        changeState("LOADING");

    }

}

document.addEventListener("keydown", startNetflix);

document.addEventListener("click", startNetflix);

document.addEventListener("touchstart", startNetflix);

function loadLoading() {

    popupContent.innerHTML = `

        <video
            class="loadingVideo"
            autoplay
        >

            <source
                src="assets/netflix_loading.mp4"
                type="video/mp4"
            >

        </video>

    `;

    const video = document.querySelector(".loadingVideo");

    video.onended = () => {

        changeState("PROFILES");

    };

}

function loadProfiles() {

    popupContent.innerHTML = `

        <div class="profileScreen">

            <img src="assets/who.jpg" id="who">

            <div class="profiles">

                <button class="profileBtn" id="aviBtn">

                    <img src="assets/avi.jpg">

                    <p>avi</p>

                </button>

                <button class="profileBtn" id="meowBtn">

                    <img src="assets/meow.jpg">

                    <p>meow</p>

                </button>

                <button id="meowaviBtn" class="profileBtn">

                    <img src="assets/meowavi.jpg">

                    <p>meow + avii</p>

                </button>

                <button class="profileBtn" id="crazyBtn">

                    <img src="assets/crazy.jpg">

                    <p>crazyyy</p>

                </button>

            </div>

        </div>

    `;

    document
        .getElementById("meowaviBtn")
        .onclick = () => {

            changeState("NETFLIX");

        };

}

function loadNetflix() {

    popupContent.innerHTML = `

        <div class="netflixScreen">

            <img
                src="assets/netflix_background.png"
                class="netflixBg"
            >

            <button id="playBtn">

                <img src="assets/play.png">

            </button>

        </div>

    `;

    document
        .getElementById("playBtn")
        .onclick = () => {

            changeState("EDIT");

        };

}

function loadEdit() {

    popupContent.innerHTML = `

        <div class="editScreen">

            <video
                class="editVideo"
                autoplay
            >

                <source
                    src="assets/edit.mp4"
                    type="video/mp4"
                >

            </video>

        </div>

    `;

}

loadState();