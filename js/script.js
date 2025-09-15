// Likes
document.querySelectorAll('.like').forEach(btn => {
  btn.addEventListener('click', () => {
    let count = btn.querySelector('.count');
    count.textContent = parseInt(count.textContent) + 1;
  });
});

// Comments
document.querySelectorAll('.comment').forEach(btn => {
  btn.addEventListener('click', () => {
    alert("Open comments section (not implemented)");
  });
});

// Shares
document.querySelectorAll('.share').forEach(btn => {
  btn.addEventListener('click', () => {
    let count = btn.querySelector('.count');
    count.textContent = parseInt(count.textContent) + 1;
    alert("Post shared!");
  });
});

// Saves
document.querySelectorAll('.save').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.textContent = "✅ Saved";
  });
});

// Follow buttons
document.querySelectorAll('.follow-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.textContent = (btn.textContent === "Follow +") ? "Following ✔️" : "Follow +";
  });
});
