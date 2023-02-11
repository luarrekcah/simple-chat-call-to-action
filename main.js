const divChatPopup = document.createElement("div");
divChatPopup.classList.add("chat-container");

document.body.appendChild(divChatPopup);

let timer = 5000;

function chatPopup({ pic, text, timer }) {
  divChatPopup.innerHTML = `
  
    <div class="chat-icon">
              <img
                src="${pic}"
                alt="Profile picture"
                class="profile-picture"
              />
              <div class="online-indicator"></div>
            </div>
            <div class="chat-bubble">
              <!--<button class="close-button">&times;</button>-->
              <p id="messagebubble" style="display: none; color: #555 !important;">${text}</p>
              <div class="loading" id="loading">
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
              </div>
            </div>
            </a>
    `;

  setTimeout(function () {
    document.getElementById("loading").style.display = "none";
    document.getElementById("messagebubble").style.display = "block";
  }, timer);
}
