<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="images/favicon-32x32.png" type="image/x-icon">
    <title>HOME</title>
    <?php include "header.php"; ?>
</head>

<body>
    <div class="landing">

        <div class="land-image" style="--order: 1">

            <img src="images/SAM_1460-1.png" alt="me" class="mobile">
        </div>
        <div class="land-let mobile" style="--order: 2">
            <div class="let mobile">
                <div class="big-let">
                    "Today better than yesterday, Tomorrow better than today."
                </div>
                <div class="me-let">
                    Hi! Im a 19y developer. A AI explorer. Coding learner.
                </div>
            </div>
        </div>
    </div>

    <div class="land-carrer">
        <div class="div-let-carrer">
            <div class="big-let-carrer">
                PROJECTS
            </div>
            <div class="small-let-carrer">
                Hi! Im a 19y developer. A AI explorer. Coding learner.
            </div>
        </div>
        <div class="slide">
            <div class="slideshow-container">

                <div class="mySlides fade">
                    <div class="numbertext">1 / 3</div>
                    <img src="images/python_cert.png" >
                    <div class="text">Caption Text</div>
                </div>

                <div class="mySlides fade">
                    <div class="numbertext">2 / 3</div>
                    <img src="images/python_cert.png" >
                    <div class="text">Caption Two</div>
                </div>

                <div class="mySlides fade">
                    <div class="numbertext">3 / 3</div>
                    <img src="images/python_cert.png" >
                    <div class="text">Caption Three</div>
                </div>

                <a class="prev" onclick="plusSlides(-1)">❮</a>
                <a class="next" onclick="plusSlides(1)">❯</a>

            </div>
            <br>

            <div style="text-align:center">
                <span class="dot" onclick="currentSlide(1)"></span>
                <span class="dot" onclick="currentSlide(2)"></span>
                <span class="dot" onclick="currentSlide(3)"></span>
            </div>

        </div>
    </div>
    <script>
        let slideIndex = 1;
        showSlides(slideIndex);

        function plusSlides(n) {
            showSlides(slideIndex += n);
        }

        function currentSlide(n) {
            showSlides(slideIndex = n);
        }

        function showSlides(n) {
            let i;
            let slides = document.getElementsByClassName("mySlides");
            let dots = document.getElementsByClassName("dot");
            if (n > slides.length) {
                slideIndex = 1
            }
            if (n < 1) {
                slideIndex = slides.length
            }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active";
        }
    </script>



    <div class="land-carrer">
        dasd
    </div>



</body>

</html>