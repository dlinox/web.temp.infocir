<template>
  <div>
    <footer class="site-footer">
      <div class="site-footer_farm_image">
        <img
          src="/assets/images/resources/site-footer-farm.png"
          alt="Farm Image"
        />
      </div>
      <div class="container">
        <div class="row no-gutters">
          <div class="col-xl-4 col-lg-4 col-md-6">
            <div
              class="footer-widget__column footer-widget__about wow fadeInUp"
              data-wow-delay="100ms"
            >
              <div class="footer-widget__title">
                <h3>Nosotros</h3>
              </div>
              <div class="footer-widget_about_text">
                <p>
                  LACTIRED, es una plataforma de información y capacitación en
                  producción de quesos y derivados lácteos, que busca fortalecer
                  la cadena productiva de la leche en el Perú.
                </p>
              </div>
              <form>
                <div class="footer_input-box">
                  <input type="Correo" placeholder="Correo Electrónico" />
                  <button type="submit" class="button">
                    <i class="fa fa-check"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div class="col-xl-2 col-lg-2 col-md-6">
            <div
              class="footer-widget__column footer-widget__link wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div class="footer-widget__title">
                <h3>Menu</h3>
              </div>
              <ul class="footer-widget__links-list list-unstyled">
                <li>
                  <nuxt-link to="/plantas">Plantas</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/productos">Productos</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/nosotros">Nosotros</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/contactanos">Contáctanos</nuxt-link>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-xl-3 col-lg-3 col-md-6">
            <div
              class="footer-widget__column footer-widget__contact wow fadeInUp"
              data-wow-delay="400ms"
            >
              <div class="footer-widget__title">
                <h3>Contacto</h3>
              </div>
              <div class="footer-widget_contact">
                <p>Puedes contactarnos en cualquier momento</p>
                <a href="info@lactired.pe">info@lactired.pe</a><br />

                <a href="tel:951208106"> 951208106 </a>
                <div class="site-footer__social">
                  <a href="#"><i class="fab fa-facebook-square"></i></a>
                  <a href="#"><i class="fab fa-twitter"></i></a>
                  <a href="#"><i class="fab fa-instagram"></i></a>
                  <a href="#"><i class="fab fa-dribbble"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>

    <div class="site-footer_bottom">
      <div class="container">
        <div class="site-footer_bottom_copyright">
          <p>@ 2021 LACTIRED. Todos los derechos reservados.</p>
        </div>
        <div class="site-footer_bottom_menu">
          <ul class="list-unstyled">
            <li><a href="#">Términos y Condiciones</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div
      @click="scrollTop"
      class="scroll-to-target scroll-to-top"
      :style="`display: ${scrollBtn ? 'block' : 'none'}`"
    >
      <i class="fa fa-angle-up"></i>
    </div>
  </div>
</template>
<script setup>
import { useWindowScroll } from "@vueuse/core";
const { x, y } = useWindowScroll();

const scrollBtn = computed(() => (y.value > 70 ? true : false));

const scrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>
