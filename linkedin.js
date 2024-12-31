var mainFeed = document.querySelector('[aria-label="Main Feed"]');
if (mainFeed) {
  mainFeed.style.display = 'none';
  console.log("Main Feed hidden successfully.");
} else {
    console.log("Main Feed not hidden.");
}
