// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("show") == -1) {
    x.className += " show";
  } else { 
    x.className = x.className.replace(" show", "");
  }
}

    /* ---- typewriter animation codepen 
    animation is sourced from: https://codepen/animations.com---- */
  function setupTypewriter(t) {
      var HTML = t.innerHTML;

      t.innerHTML = "";

      var cursorPosition = 0,
          tag = "",
          writingTag = false,
          tagOpen = false,
          typeSpeed = 100,
        tempTypeSpeed = 0;

      var type = function() {
        
          if (writingTag === true) {
              tag += HTML[cursorPosition];
          }

          if (HTML[cursorPosition] === "<") {
              tempTypeSpeed = 0;
              if (tagOpen) {
                  tagOpen = false;
                  writingTag = true;
              } else {
                  tag = "";
                  tagOpen = true;
                  writingTag = true;
                  tag += HTML[cursorPosition];
              }
          }
          if (!writingTag && tagOpen) {
              tag.innerHTML += HTML[cursorPosition];
          }
          if (!writingTag && !tagOpen) {
              if (HTML[cursorPosition] === " ") {
                  tempTypeSpeed = 0;
              }
              else {
                  tempTypeSpeed = (Math.random() * typeSpeed) + 50;
              }
              t.innerHTML += HTML[cursorPosition];
          }
          if (writingTag === true && HTML[cursorPosition] === ">") {
              tempTypeSpeed = (Math.random() * typeSpeed) + 50;
              writingTag = false;
              if (tagOpen) {
                  var newSpan = document.createElement("span");
                  t.appendChild(newSpan);
                  newSpan.innerHTML = tag;
                  tag = newSpan.firstChild;
              }
          }

          cursorPosition += 1;
          if (cursorPosition < HTML.length - 1) {
              setTimeout(type, tempTypeSpeed);
          }

      };

      return {
          type: type
      };
  }

  var typer = document.getElementById('typewriter');

  typewriter = setupTypewriter(typewriter);

  typewriter.type();
