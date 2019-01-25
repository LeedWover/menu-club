<template>
  <div class="home">
    <main role="main">
      <!-- Main rész -->
      <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="first-slide"
              src="https://www.egorestaurants.co.uk/wp-content/uploads/2017/09/Ego-Mediterranean-Restaurant-Kenilworth-2-1.jpg"
              alt="First slide"
            >
            <div class="container">
              <div class="carousel-caption text-left">
                <span style="font-size: 3rem;">
                  <span style="color: white;">
                    <i class="fas fa-phone"></i>
                    <span>06/99 9999 999</span>
                  </span>
                </span>
                <br>
                <button class="btn btn-outline-light">Nézze meg aktuális menü ajánlatunkat</button>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img
              class="second-slide"
              src="https://www.egorestaurants.co.uk/wp-content/uploads/2017/09/Ego-Mediterranean-Restaurant-Kenilworth-2-1.jpg"
              alt="Second slide"
            >
            <div class="container">
              <div class="carousel-caption">
                <h1>Állandó ételeink</h1>
                <p>A gombra kattintva megtekintheti állandó étel kínálatunkat!</p>
                <p>
                  <a class="btn btn-lg btn-outline-light" href="#" role="button">Tovább</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <!-- /Main rész -->
      <div class="container marketing">
        <!-- Bemutatás -->
        <hr class="featurette-divider">

        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading">Házias Ízek</h2>
            <p
              class="lead"
            >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum deserunt dignissimos laborum suscipit quae quia odit nulla eos inventore sapiente.</p>
          </div>
          <div class="col-md-5 my-auto text-right">
            <span style="font-size: 6rem;">
              <span style="color: gray;">
                <i class="fas fa-utensils"></i>
              </span>
            </span>
          </div>
        </div>

        <hr class="featurette-divider">

        <div class="row featurette">
          <div class="col-md-7 order-md-2">
            <h2 class="featurette-heading">Egészséges ételek</h2>
            <p
              class="lead"
            >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut expedita debitis sint nam illum a quis quia aperiam blanditiis tempora.</p>
          </div>
          <div class="col-md-5 order-md-1">
            <span style="font-size: 6rem;">
              <span style="color: gray;">
                <i class="fas fa-carrot"></i>
              </span>
            </span>
          </div>
        </div>

        <hr class="featurette-divider">

        <!-- /Bemutatás -->
        <!-- Elérhetőségek -->
        <div class="row">
          <div class="col-lg-4 text-center">
            <span style="font-size: 3rem;">
              <span style="color: gray;">
                <i class="fab fa-facebook-square"></i>
              </span>
            </span>
            <h2>Facebook</h2>
            <p>Itt megtalálod Facebook oldalunk</p>
            <p>
              <a class="btn btn-secondary" href="#" role="button">Tovább &raquo;</a>
            </p>
          </div>
          <!-- /.col-lg-4 -->
          <div class="col-lg-4 text-center">
            <span style="font-size: 3rem;">
              <span style="color: gray;">
                <i class="fas fa-envelope-square"></i>
              </span>
            </span>
            <h2>Email</h2>
            <p>emailcim@email.com</p>
            <p>
              <a class="btn btn-secondary" href="#" role="button">Küldj emailt &raquo;</a>
            </p>
          </div>
          <!-- /.col-lg-4 -->
          <div class="col-lg-4 text-center">
            <span style="font-size: 3rem;">
              <span style="color: gray;">
                <i class="fas fa-map-marked-alt"></i>
              </span>
            </span>
            <h2>Cím</h2>
            <p>Budapest 11.ker Sáfrány u 42</p>
            <p>
              <a class="btn btn-secondary" href="#" role="button">Térkép &raquo;</a>
            </p>
          </div>
          <!-- /.col-lg-4 -->
        </div>
        <!-- /.row -->
        <!-- /Elérhetőségek -->
      </div>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
</script>
