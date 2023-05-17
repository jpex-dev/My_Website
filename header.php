<link rel="stylesheet" href="css/custom.css" />
<header class="header">
    <nav class="navbar">
        <a href="home.php" class="logo">JPex.Dev</a>
        <ul class="nav-menu">
            <li class="nav-item"> <a href="project.php" class="nav-link"> Projetos</a></li>
            <li class="nav-item"><a href="#" class="nav-link">Sobre</a></li>
            <li class="nav-item"><a href="#" class="nav-link">Contato</a></li>
        </ul>
        <div class="hamburguer">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </div>
        <script>
            const hamburguer = document.querySelector(".hamburguer")
            const navMenu =  document.querySelector(".nav-menu");

            hamburguer.addEventListener("click", ()=>{
                hamburguer.classList.toggle('active');
                navMenu.classList.toggle('active');
            })
        </script>

    </nav>
</header>