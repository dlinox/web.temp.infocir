<template>
  <ClientOnly>
    <AppHeadPage :title="planta?.plan_razon_social" subtitle="detalle" />
    <section class="project_detail pb-0">
      <div class="container">
        <div class="row">
          <div class="col-xl-12 col-lg-12 col-md-12">
            <div class="project_detail_image">
              <img
                src="/assets/images/project/project-detail-img-1.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-8 col-lg-7">
            <div class="project_detail_left_content">
              <div class="harvest_innovations_detail">
                <h2>{{ planta?.plan_razon_social }}</h2>
                <p>
                  There are many variations of passages of psum available, but
                  the majority have suffered alteration in some form, by
                  injected humour, or randomised words which don't look even
                  slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text. Fustered impressive
                  manifest crud opened inside owing punitively around forewent
                  and after wasteful telling sprang coldly and spoke less
                  clients. Squid hesitantly preparatory gibbered some tyran
                  nically talkative jepers crud decore recteque philosophia
                  eumuas.
                </p>

                <p class="harvest_innovations_detail_bottom_text">
                  Beyond more stoic this along goodness hey this this wow
                  manatee mongoose one as since a far flustered impressive
                  manifest far crud opened inside owing punitively around
                  forewent and after wasteful telling sprang coldly and spoke
                  less clients.
                </p>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-5">
            <div class="project_information_box">
              <h3>Detalles</h3>
              <ul class="project_information_list list-unstyled">
                <li><span>Ruc:</span> {{ planta?.plan_ruc }}</li>
                <li><span>Marca:</span> {{ planta?.plan_marca }}</li>
                <li>
                  <span>Tipo de Planta:</span> {{ planta?.plan_tipo_planta }}
                </li>
                <li>
                  <span>Institucion:</span>
                  {{ planta?.institucion.inst_nombre }}
                </li>
              </ul>

              <ul class="project_information_list list-unstyled">
                <li>
                  <span>Ubicación:</span> {{ planta?.ubigeo.ubig_completo }}
                </li>
                <li><span>Sector:</span> {{ planta?.plan_sector }}</li>
                <li>
                  <span>Barrio / Comunidad:</span>
                  {{ planta?.plan_barrio_comunidad }}
                </li>
              </ul>
              <a href="#" class="thm-btn w-100 text-center px-3 py-2">
                <i class="fab fa-whatsapp mr-2"></i> Contactarme
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section v-if="planta">
      <div class="container-fullwidth" style="height: 500px">
        <AppMap :latLng="[planta.plan_latitud, planta.plan_longitud]" />
      </div>
    </section>

    <section class="">
      <div class="row">
        <div class="col-xl-12">
          <div class="cta_three_content wow fadeInUp" data-wow-delay="300ms">
            <div class="cta_three_text">
              <h2>Ofrecemos productos de alta calidad.</h2>
            </div>
            <div class="cta_three_btn">
              <nuxt-link to="" class="thm-btn">Contactarme</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </ClientOnly>
</template>
<script setup>
const route = useRoute();

const planta = ref(null);

const init = async () => {
  let res = await fetch(
    "http://infocir.linox.net.pe/api/planta/" + route.params.id
  );
  let json = await res.json();
  planta.value = json;
};

init();
</script>
