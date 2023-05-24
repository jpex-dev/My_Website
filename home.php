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

        <div class="land-image">

            <img src="images/SAM_1460-1.png" alt="me" class="mobile">
        </div>
        <div class="land-let mobile">
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
            <div class="slider-container">
                <img src="images/python_cert.png" alt="Image 1">
                <img src="image2.jpg" alt="Image 2">
                <img src="image3.jpg" alt="Image 3">
            </div>
            <div class="slider-container">
                <img src="images/python_cert.png" alt="Image 1">
                <img src="image2.jpg" alt="Image 2">
                <img src="image3.jpg" alt="Image 3">
            </div>
            <div class="slider-container">
                <img src="images/python_cert.png" alt="Image 1">
                <img src="image2.jpg" alt="Image 2">
                <img src="image3.jpg" alt="Image 3">
            </div>
            
        </div>
    </div>
    <script>
        // Get the slider container element
        const sliderContainer = document.querySelector('.slider-container');

        // Set initial position and offset
        let position = 0;
        const offset = 100; // Adjust the offset if needed

        // Function to slide the images
        function slideImages() {
            position -= offset;
            if (position < -(sliderContainer.children.length - 1) * offset) {
                position = 0;
            }
            sliderContainer.style.transform = `translateX(${position}%)`;
        }

        // Automatically slide the images every 3 seconds
        setInterval(slideImages, 3000);
    </script>

    <div class="land-carrer">
        dasd
    </div>



</body>

</html>