<template>
  <AppHeadPage title="Productos" />

  <section class="product">
    <div class="container">
      <div class="row">
        <div class="col-xl-3 col-lg-3 col-md-6">
          <div class="sidebar-wrapper style2">
            <!--Start single sidebar-->
            <div
              class="single-sidebar wow fadeInUp animated animated"
              data-wow-delay="0.1s"
              data-wow-duration="1200ms"
              style="
                visibility: visible;
                animation-duration: 1200ms;
                animation-delay: 0.1s;
                animation-name: fadeInUp;
              "
            >
              <div class="sidebar-search-box">
                <form class="search-form" action="#">
                  <input placeholder="Buscar" type="text" />
                  <button type="submit">
                    <i class="icon-magnifying-glass" aria-hidden="true"></i>
                  </button>
                </form>
              </div>
            </div>
            <!--End single sidebar-->
            <!--Start sidebar categories Box-->
            <div
              class="single-sidebar wow fadeInUp animated animated"
              data-wow-delay="0.3s"
              data-wow-duration="1200ms"
              style="
                visibility: visible;
                animation-duration: 1200ms;
                animation-delay: 0.3s;
                animation-name: fadeInUp;
              "
            >
              <ClientOnly>
                <ClientTypeProducts />
              </ClientOnly>
            </div>
            <!--End sidebar categories Box-->
            <!--Start single sidebar-->
            <!-- <div
              class="single-sidebar wow fadeInUp animated animated"
              data-wow-delay="0.5s"
              data-wow-duration="1200ms"
              style="
                visibility: visible;
                animation-duration: 1200ms;
                animation-delay: 0.5s;
                animation-name: fadeInUp;
              "
            >
              <div class="top_sellers">
                <div class="title">
                  <h3>Top Products</h3>
                </div>
                <ul class="top-products">
                  <li>
                    <div class="product_item">
                      <div class="img-box">
                        <img
                          src="/assets/images/shop/top-product-1.jpg"
                          alt="Awesome Image"
                        />
                        <div class="overlay-content">
                          <a href="#"
                            ><i class="fa fa-link" aria-hidden="true"></i
                          ></a>
                        </div>
                      </div>
                      <div class="title-box">
                        <h4><a href="#">Wheat Bag</a></h4>
                        <div class="value">$9.99</div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="product_item">
                      <div class="img-box">
                        <img
                          src="/assets/images/shop/top-product-2.jpg"
                          alt="Awesome Image"
                        />
                        <div class="overlay-content">
                          <a href="#"
                            ><i class="fa fa-link" aria-hidden="true"></i
                          ></a>
                        </div>
                      </div>
                      <div class="title-box">
                        <h4><a href="#">Pinepale</a></h4>
                        <div class="value">$9.99</div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div> -->
            <!--End single sidebar-->
          </div>
        </div>
        <!--End Sidebar Wrapper-->
        <div class="col-xl-9 col-lg-9">
          <div class="product-items">
            <div class="row">
              <div class="col-xl-12">
                <div class="showing-result-shorting">
                  <div class="left">
                    <div class="showing">
                      <!-- <p>Showing 1-9 of 20 Results</p> -->
                    </div>
                  </div>
                  <div class="right">
                    <!-- <div class="shorting">
                      <div
                        class="dropdown shorting bootstrap-select"
                        style="width: 100%"
                      >
                        <select
                          class="selectpicker"
                          data-width="100%"
                          tabindex="-98"
                        >
                          <option selected="selected">Default Sorting</option>
                          <option>Default Sorting 1</option>
                          <option>Default Sorting 2</option>
                          <option>Default Sorting 3</option>
                          <option>Default Sorting 4</option>
                        </select>
                        <div class="dropdown-menu" role="combobox">
                          <div
                            class="inner show"
                            role="listbox"
                            aria-expanded="false"
                            tabindex="-1"
                          >
                            <ul class="dropdown-menu inner show"></ul>
                          </div>
                        </div>
                      </div>
                    </div> -->
                  </div>
                </div>
              </div>
            </div>
          
            <ClientOnly>
              <ClientProducts/>
            </ClientOnly>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup></script>
