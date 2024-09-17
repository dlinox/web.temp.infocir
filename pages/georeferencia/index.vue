<template>
  <AppHeadPage title="Georegerencia" />
  <div class="row no-gutters">
    <div class="col-12 col-lg-4 col-xl-3">
      <div class="project_information_box h-100 geo-plant">
        <h3>Legenda</h3>

        <div class="footer_input-box">
          <img
            src="/assets/images/icons-map/home.png"
            width="30px"
            alt=""
            class="mr-2"
          />
          PLANTAS
          <button
            type="submit"
            class="button"
            @click="showPlants = !showPlants"
          >
            <i v-if="showPlants" class="fa fa-check"></i>
            <i v-else class="fas fa-minus"></i>
          </button>
        </div>

        <div class="footer_input-box">
          <img
            src="/assets/images/icons-map/shop.png"
            width="30px"
            alt=""
            class="mr-2"
          />
          PROVEEDORES
          <button
            type="submit"
            class="button"
            @click="showSupplier = !showSupplier"
          >
            <i v-if="showSupplier" class="fa fa-check"></i>
            <i v-else class="fas fa-minus"></i>
          </button>
        </div>

        <div class="footer_input-box">
          <img
            src="/assets/images/icons-map/user.png"
            width="30px"
            alt=""
            class="mr-2"
          />
          CLIENTES
          <button
            type="submit"
            class="button"
            @click="showClients = !showClients"
          >
            <i v-if="showClients" class="fa fa-check"></i>
            <i v-else class="fas fa-minus"></i>
          </button>
        </div>
      </div>
    </div>
    <div class="ccol-12 col-lg-8 col-xl-9">
      <div style="height: 100%; min-height: 600px; z-index: 1;">
        <LMap ref="map" :zoom="zoom" :center="[-15.833333, -70.033333]" style="z-index: 2;">
          <LTileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&amp;copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
            layer-type="base"
            name="OpenStreetMap"
          />
          <l-polygon
            :lat-lngs="peruCoordinates"
            :fillOpacity="0.08"
            color="black"
            :weight="0.5"
          />

          <template v-if="showPlants" v-for="(item, index) in plantas">
            <l-marker :lat-lng="item.latLng">
              <l-icon
                icon-url="/assets/images/icons-map/home.png"
                :icon-size="[40, 40]"
              />

              <l-popup>
                <div class="card bg-white border-white">
                  <div class="card-header bg-white border-white">
                    {{ item.nombre }}
                  </div>
                  <div class="card-body">
                    <nuxt-link :to="'/plantas/' + item.color">
                      <span class="icon-left-arrow">
                        Ver detalles de la planta
                      </span>
                    </nuxt-link>
                  </div>
                </div>
              </l-popup>
            </l-marker>
          </template>

          <template v-if="showSupplier" v-for="(item, index) in proveedores">
            <l-marker :lat-lng="item.latLng">
              <l-icon
                icon-url="/assets/images/icons-map/shop.png"
                :icon-size="[40, 40]"
              />

              <l-popup>
                <div class="card bg-white border-white">
                  <div class="card-header bg-white border-white">
                    {{ item.nombre }}
                  </div>
                </div>
              </l-popup>
            </l-marker>
          </template>

          <template v-if="showClients" v-for="(item, index) in clientes">
            <l-marker :lat-lng="item.latLng">
              <l-icon
                icon-url="/assets/images/icons-map/user.png"
                :icon-size="[40, 40]"
              />

              <l-popup>
                <div class="card bg-white border-white">
                  <div class="card-header bg-white border-white">
                    {{ item.nombre }}
                  </div>
                </div>
              </l-popup>
            </l-marker>
          </template>
        </LMap>
      </div>
    </div>
  </div>
</template>
<script setup>
const zoom = ref(6);

const showPlants = ref(true);
const showSupplier = ref(true);
const showClients = ref(true);

const peruCoordinates = [
  [
    [-13.116261286986765, -70.40210723876955],
    [-13.338847687855704, -69.64920043945314],
    [-13.004557745339769, -68.87123107910158],

    [-13.672675818669807, -69.07104492187501],
    [-13.823411722388972, -68.91860961914064],
    [-13.970052131637647, -68.97216796875001],

    [-14.217794985975296, -68.82659912109376],
    [-14.221788628397585, -68.96255493164064],
    [-14.309630880716188, -69.01199340820314],

    [-14.379480887695674, -68.98658752441408],
    [-14.519780046326085, -69.15000915527345],

    [-14.574279940609872, -69.14382934570314],

    [-14.579264015123194, -69.14794921875001],

    [-14.581922142091624, -69.22004699707033],

    [-14.655672349520419, -69.22725677490236],
    [-14.683737422701846, -69.25729751586915],
    [-14.739026694833317, -69.22433853149415],
    [-14.758449326534251, -69.23995971679689],
    [-14.769902886210486, -69.27051544189455],
    [-14.765089144784236, -69.30278778076173],
    [-14.795629695463282, -69.34038162231447],
    [-14.79289118013484, -69.34312820434572],
    [-14.801500789835831, -69.35368537902833],
    [-14.844585190123706, -69.35668945312501],
    [-14.881750774107623, -69.34364318847658],
    [-14.964686539599157, -69.35359954833986],
    [-15.25503929351312, -69.12048339843751],
    [-15.607165570177397, -69.38964843750001],
    [-16.219949175712056, -69.10675048828126],
    [-16.204124989730662, -68.96392822265626],
    [-16.34649680535433, -68.80462646484376],
    [-16.420278458525598, -68.99139404296876],
    [-16.659874953578605, -69.00238037109376],
    [-17.285086527937413, -69.64439392089845],
    [-17.296231991312766, -69.73297119140626],
    [-17.243776871690947, -69.83184814453126],
    [-17.125042196260953, -70.02342224121095],
    [-16.941214960202657, -70.12779235839845],
    [-16.738139810263743, -70.01037597656251],
    [-16.634876066188323, -70.03303527832033],
    [-16.655270140469216, -70.08934020996095],
    [-16.59671358730417, -70.17723083496095],
    [-16.465719300873015, -70.31250000000001],
    [-16.384708648758707, -70.38116455078126],
    [-16.20874050856334, -70.35987854003908],
    [-16.03987431492367, -70.44502258300783],
    [-16.033275064190914, -70.72517395019533],
    [-15.975192247698272, -70.83847045898439],
    [-15.775734698797926, -70.94078063964845],
    [-15.408671538149415, -71.03622436523439],
    [-15.249739618721511, -70.98266601562501],
    [-14.769570907465965, -70.97991943359376],
    [-14.655340196937146, -71.10351562500001],
    [-14.575609038170498, -70.97167968750001],
    [-13.83541305718796, -70.87005615234376],
    // [],
    // [],
    // [],

    //[-16.85711965391805, -70.64208984375001],
  ],
];

const plantas = [
  {
    nombre: "Plaza de Armas de Puno",
    latLng: [-15.8392, -70.021201],
    tipo: "A",
    color: "red",
  },
  {
    nombre: "Islas Flotantes de los Uros",
    latLng: [-15.810605, -69.995501],
    tipo: "B",
    color: "blue",
  },
  {
    nombre: "Sillustani",
    latLng: [-15.741763, -70.152523],
    tipo: "C",
    color: "green",
  },

  {
    nombre: "Sillustani",
    latLng: [-15.841763, -70.152523],
    tipo: "C",
    color: "green",
  },
];

const proveedores = [
  {
    nombre: "Plaza de Armas de Puno",
    latLng: [-15.8192, -70.022201],
    tipo: "A",
    color: "red",
  },
  {
    nombre: "Islas Flotantes de los Uros",
    latLng: [-15.650605, -69.995501],
    tipo: "B",
    color: "blue",
  },
  {
    nombre: "Sillustani",
    latLng: [-15.041763, -70.152523],
    tipo: "C",
    color: "green",
  },

  {
    nombre: "Sillustani",
    latLng: [-15.811763, -70.112523],
    tipo: "C",
    color: "green",
  },
];

const clientes = [
  {
    nombre: "Cliente 1",
    latLng: [-15.8192, -70.232201],
  },
  {
    nombre: "Cliente 2",
    latLng: [-15.665605, -69.095501],
  },
];
</script>
