document.addEventListener('keydown', function(event) {
    // console.log('Tuş basıldı:', event.key, 'Tuş kodu:', event.keyCode);
    switch (event.key) {
        case "a":
            let a = new Audio("./sound/a.mp3");
            a.play()
            break;
        case "b":
            let b = new Audio("./sound/b.mp3");
            b.play()
            break;
        case "c":
            let c = new Audio("./sound/c.mp3");
            c.play()
            break;
        case "d":
            let d = new Audio("./sound/d.mp3");
            d.play()
            break;
        default:
            break;
    }
  });