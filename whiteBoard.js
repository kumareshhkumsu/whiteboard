window.addEventListener
(
    "load",
    ()=>{
        const canvas = document.querySelector("#canvas")
        const ctx = canvas.getContext("2d")


       canvas.width = window.innerWidth
       canvas.height = window.innerHeight

        let painting = false;
        let drawContent = window.localStorage.getItem("drawContent")

        if(drawContent !== null)
            drawCanvas()

        function drawCanvas()
        {
            var img = new Image;
            img.src = drawContent;
            ctx.drawImage(img, 20, 20);
        }

        function startPath(e)
        {
            painting = true;
            draw(e);
        }

        function finishPath()
        {
            painting = false;
            ctx.beginPath();
        }

        function draw(e)
        {
            if(!painting) return;
            ctx.lineWidth = 10;
            ctx.lineCap ="round";

            ctx.lineTo(e.clientX, e.clientY)
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(e.clientX, e.clientY)
        }

        canvas.addEventListener("mousedown", startPath)
        canvas.addEventListener("mouseup", finishPath)
        canvas.addEventListener("mousemove", draw)

        

        document.getElementById("save").addEventListener
        (
            "click", function() {
                window.localStorage.setItem("drawContent", canvas.toDataURL("image/png"))
            }
          );
        
    }
    
)

