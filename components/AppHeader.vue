<template>
  <div class="site_header__header_two_wrap">
    <div class="topbar-two">
      <div class="container">
        <div class="topbar_two_content clearfix">
          <div class="logo-box-two float-left">
            <a href="/" class="main-nag__logo py-3">
              <img src="/assets/images/resources/logo.svg" alt="" />
            </a>
          </div>
          <div class="header_address_two float-left">
            <ul class="clearfix list-unstyled">
              <li>
                <div class="address_icon">
                  <span class="icon-farmer"></span>
                </div>
                <nuxt-link :to="config.public.appBaseURL" class="a_item" target="_blank">
                  <h6>APP LACTIRED</h6>
                  <p>infocir.linox.net.pe</p>
                </nuxt-link>
              </li>
              <li>
                <div class="address_icon">
                  <span class="icon-meeting"></span>
                </div>
                <nuxt-link :to="config.public.capBaseURL" class="a_item" target="_blank">
                  <h6>Capacitaciones</h6>
                  <p>cap-infocir.linox.net.pe</p>
                </nuxt-link>
              </li>
            </ul>
          </div>
          <div class="header_btn_two float-right">
            <a class="thm-btn" href="http://infocir.linox.net.pe/registro-cliente" target="_blank">Registrarme</a>
          </div>
        </div>
      </div>
    </div>

    <header class="main-nav__header_two clearfix">
      <nav
        :class="`header-navigation stricky clearfix ${
          sticky ? 'stricked-menu stricky-fixed' : ''
        }`"
      >
        <div class="container">
          <div class="main-nav__header_two_content">
            <div class="mobile_menu_icon_two">
              <a href="#" class="side-menu__toggler">
                <i class="fa fa-bars"></i>
              </a>
            </div>
            <div class="main-nav__main-navigation two float-left">
              <ul class="main-nav__navigation-box">
                <li class="dropdown current">
                  <nuxt-link to="/">Inicio</nuxt-link>
                </li>
                <li class="dropdown">
                  <nuxt-link to="/plantas">Plantas</nuxt-link>
                </li>

                <!-- <li class="dropdown">
                                    <nuxt-link to="/projects">Georeferencia</nuxt-link>
                                    <ul>
                                        <li><nuxt-link to="/projects">Productores</nuxt-link></li>
                                        <li><nuxt-link to="/projects_detail">Plantas</nuxt-link></li>
                                        <li><nuxt-link to="/projects_detail">Acopiadores</nuxt-link></li>
                                    </ul>
                                </li> -->
                <li>
                  <nuxt-link to="/productos">Productos</nuxt-link>
                </li>

                <li>
                  <nuxt-link to="/nosotros">Nosotros</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/contactanos">Contactanos</nuxt-link>
                </li>
              </ul>
            </div>

            <div class="main_nav_right_two float-right">
              <div class="icon_cart_box">
                <nuxt-link to="/georeferencia">
                  <i class="fas fa-globe"></i>
                  <span class="icon-earth"></span>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  </div>

</template>
<script setup>
import { useWindowScroll } from "@vueuse/core";
const config = useRuntimeConfig();
const { y } = useWindowScroll();

const sticky = computed(() => (y.value > 70 ? true : false));
</script>
