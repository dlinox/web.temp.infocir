<template>
  <section class="blog-one news">
    <div class="container">
      <div class="row">
        <div
          v-for="item in plantas"
          :key="item.plan_id"
          class="col-12 col-lg-6"
        >
          <div class="blog_one_single mb-30">
            <div class="blog_one_image">
              <div class="blog_image">
                <img
                  src="/assets/images/blog/news-detail-img-1.jpg"
                  alt="Blog One Image"
                />
                <div class="blog_one_date_box">
                  <p>{{ item.ubigeo.ubig_completo }}</p>
                </div>
              </div>
              <div class="blog-one__content">
                <ul class="list-unstyled blog-one__meta">
                  <li>
                    <div class="item">
                     
                      {{ item.plan_ruc }}
                    </div>
                  </li>

                  <!-- <li>
                    <nuxt-link to="/news_detail">
                      <i class="fas fa-tags"></i> Tipo: A
                    </nuxt-link>
                  </li> -->
                </ul>
                <h3>
                  <nuxt-link :to="`/plantas/${item.plan_id}`">
                    {{ item.plan_razon_social }}
                  </nuxt-link>
                </h3>

                <div class="read_more_btn">
                  <nuxt-link :to="`/plantas/${item.plan_id}`">
                    <i class="fa fa-angle-right"></i>
                    Ver Mas
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const plantas = ref(null);
const init = async () => {
  let res = await fetch("http://infocir.linox.net.pe/api/plantas");
  let json = await res.json();
  plantas.value = json;

};

init();
</script>
