const CA = "0xdDDF7AB756C35b4d0537825497e6932780710241";

function copyCa() {
  navigator.clipboard.writeText(CA).then(() => {
    const el = document.getElementById("copied");
    if (el) {
      el.hidden = false;
      setTimeout(() => { el.hidden = true; }, 1800);
    }
    const btn = document.getElementById("copy-ca");
    if (btn) {
      const old = btn.textContent;
      btn.textContent = "COPIED";
      setTimeout(() => { btn.textContent = old; }, 1400);
    }
  });
}

document.getElementById("copy-ca")?.addEventListener("click", copyCa);
document.getElementById("ca-btn")?.addEventListener("click", copyCa);

const DEV = "0x64d2a232384Df792dde541E902410faa4594EB49";

document.querySelectorAll(".copy-dev").forEach((btn) => {
  btn.addEventListener("click", () => {
    const addr = btn.getAttribute("data-addr") || DEV;
    navigator.clipboard.writeText(addr).then(() => {
      const lab = btn.querySelector(".copy-lab");
      if (!lab) return;
      const old = lab.textContent;
      lab.textContent = "Copied";
      setTimeout(() => { lab.textContent = old; }, 1400);
    });
  });
});
