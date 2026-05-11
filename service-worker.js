/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at
 http://www.apache.org/licenses/LICENSE-2.0
 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

// Names of the two caches used in this version of the service worker.
// Change to v2, etc. when you update any of the local resources, which will
// in turn trigger the install event again.
const PRECACHE = "precache-20260511150744+0000";
const RUNTIME = "runtime-20260511150744+0000";

// A list of local resources we always want to be cached.
const PRECACHE_URLS = [
  
  
    './assets/css/custom.css',
  
    './assets/img/apple-mask-icon.svg',
  
    './assets/img/logo.png',
  
    './assets/img/themed-mask-icon.png',
  
    './assets/js/index.js',
  
    './assets/photos/interiors/273808929_109716964966492_1257565072509379129_n.jpg',
  
    './assets/photos/interiors/277669033_130470846224437_4264867575808583705_n.jpg',
  
    './assets/photos/interiors/312457475_187395630518676_667788369058296254_n.jpg',
  
    './assets/photos/interiors/312485117_187396083851964_7565104069079825687_n.jpg',
  
    './assets/photos/interiors/316049156_194022926522613_3693885641179913228_n.jpg',
  
    './assets/photos/metalBuildings/306794345_179504934641079_8535974952308255770_n.jpg',
  
    './assets/photos/metalBuildings/312231030_187397013851871_635093394470264618_n.jpg',
  
    './assets/photos/metalBuildings/312419075_187397997185106_8773415772926229329_n.jpg',
  
    './assets/photos/metalBuildings/317319496_196066479651591_8033086363596913829_n.jpg',
  
    './assets/photos/metalBuildings/330773912_888035055680899_6729533302421398130_n.jpg',
  
    './assets/photos/metalBuildings/338722894_902938790993122_7620509298610421811_n.jpg',
  
    './assets/photos/metalBuildings/360128884_297708939487344_7486151275152916537_n.jpg',
  
    './assets/photos/metalBuildings/IMG_1016.jpg',
  
    './assets/photos/metalBuildings/IMG_2201.jpg',
  
    './assets/photos/metalBuildings/IMG_2925.jpg',
  
    './assets/photos/metalBuildings/IMG_3260.jpg',
  
    './assets/photos/metalBuildings/IMG_3262.jpg',
  
    './assets/photos/metalBuildings/IMG_3525.jpg',
  
    './assets/photos/metalBuildings/IMG_3858.jpg',
  
    './assets/photos/metalBuildings/IMG_4323.jpg',
  
    './assets/photos/metalBuildings/IMG_4326.jpg',
  
    './assets/photos/metalBuildings/IMG_4335.jpg',
  
    './assets/photos/metalBuildings/IMG_4570.jpg',
  
    './assets/photos/metalBuildings/IMG_4816.jpg',
  
    './assets/photos/metalBuildings/IMG_4937.jpg',
  
    './assets/photos/metalBuildings/IMG_4962.jpg',
  
    './assets/photos/misc/277346936_128665343071654_3684056946120170643_n.jpg',
  
    './assets/photos/misc/277670370_129307439674111_6636102260424274141_n.jpg',
  
    './assets/photos/misc/312978283_188336767091229_2527326504798738543_n.jpg',
  
    './assets/photos/misc/315938373_194022226522683_1105717561318048404_n.jpg',
  
    './assets/photos/misc/316060686_194021756522730_421869203808825585_n.jpg',
  
    './assets/photos/misc/combined.jpg',
  
    './assets/photos/woodBuildingsExteriors/296309277_164515082820013_3807612566924205564_n.jpg',
  
    './assets/photos/woodBuildingsExteriors/307012730_179503731307866_5455523791698014710_n.jpg',
  
    './assets/photos/woodBuildingsExteriors/307099935_179716831286556_6501496958567859927_n.jpg',
  
    './assets/photos/woodBuildingsExteriors/307361119_179887764602796_6746691413869205369_n.jpg',
  
    './assets/photos/woodBuildingsExteriors/312178328_187395530518686_5826124788769628328_n.jpg',
  
    './assets/photos/woodBuildingsExteriors/312378978_187398577185048_4976433010011334822_n.jpg',
  
    './assets/photos/woodBuildingsExteriors/312506116_187601597164746_5140390994332309915_n.jpg',
  
    './assets/photos/woodBuildingsExteriors/315315027_194021929856046_6572346340184719963_n.jpg',
  
    './assets/photos/woodBuildingsExteriors/315394633_194022119856027_3669500207694322769_n.jpg',
  
    './assets/photos/woodBuildingsExteriors/315436880_194022613189311_2800573190790370030_n.jpg',
  
    './assets/photos/woodBuildingsExteriors/315443076_194022389856000_2593358726981860783_n.jpg',
  
    './assets/photos/woodBuildingsExteriors/315464830_194022283189344_856498257118608311_n.jpg',
  
    './assets/photos/woodBuildingsExteriors/315544123_194022449855994_8340016083664191396_n.jpg',
  
    './assets/photos/woodBuildingsExteriors/315553179_194022643189308_210532773170104936_n.jpg',
  
    './assets/photos/woodBuildingsExteriors/315693101_194022503189322_6121017617906877547_n.jpg',
  
    './assets/photos/woodBuildingsExteriors/315706441_194021859856053_3969430763201883945_n.jpg',
  
    './assets/photos/woodBuildingsExteriors/315819346_194021776522728_1371115405545408446_n.jpg',
  
    './assets/photos/woodBuildingsExteriors/315846877_194022556522650_4621601706608275566_n.jpg',
  
    './assets/photos/woodBuildingsExteriors/315897295_194022423189330_4802535523674719575_n.jpg',
  
    './assets/photos/woodBuildingsExteriors/315955778_194022039856035_4908468224910972019_n.jpg',
  
    './assets/photos/woodBuildingsExteriors/315963020_194022173189355_6592163033549930934_n.jpg',
  
    './assets/photos/woodBuildingsExteriors/315966824_194021869856052_1539917471058420946_n.jpg',
  
    './assets/photos/woodBuildingsExteriors/316007853_194021726522733_4708372897441210114_n.jpg',
  
    './assets/photos/woodBuildingsExteriors/316047519_194023083189264_4751612418373410524_n.jpg',
  
    './assets/photos/woodBuildingsExteriors/316047984_194023003189272_3354075957300133007_n.jpg',
  
    './assets/photos/woodBuildingsExteriors/316059472_194022953189277_498638989776965615_n.jpg',
  
    './assets/photos/woodBuildingsExteriors/316085989_194021959856043_148918654592113424_n.jpg',
  
    './assets/photos/woodBuildingsExteriors/316089187_194023076522598_3681658895350288652_n.jpg',
  
    './assets/photos/woodBuildingsExteriors/316097645_194021829856056_1951294302220724822_n.jpg',
  
    './assets/photos/woodBuildingsExteriors/316104147_194022196522686_3625891179104415355_n.jpg',
  
    './assets/photos/woodBuildingsExteriors/316108159_194021809856058_4238063182667304887_n.jpg',
  
    './assets/photos/woodBuildingsExteriors/316148157_194022989855940_3780689501333514205_n.jpg',
  
    './assets/photos/woodBuildingsExteriors/316256468_194022343189338_6414962900318669852_n.jpg',
  
    './assets/photos/woodBuildingsExteriors/316815107_196066436318262_5728505603133179146_n.jpg',
  
    './assets/photos/woodBuildingsExteriors/317069212_196066669651572_3264464496037420631_n.jpg',
  
    './assets/photos/woodBuildingsExteriors/317076551_196066506318255_7849869876898882511_n.jpg',
  
    './assets/photos/woodBuildingsExteriors/317098197_196066556318250_401753936565286682_n.jpg',
  
    './assets/photos/woodBuildingsExteriors/317244531_196066449651594_5653166593472077644_n.jpg',
  
    './assets/photos/woodBuildingsExteriors/317248327_196066412984931_1548440574333977193_n.jpg',
  
    './assets/photos/woodBuildingsExteriors/317256631_196066402984932_6008371050632593430_n.jpg',
  
    './assets/photos/woodBuildingsExteriors/317257530_196066396318266_2410997365364506849_n.jpg',
  
    './assets/photos/woodBuildingsExteriors/317258751_196066532984919_5000359204240112348_n.jpg',
  
    './assets/photos/woodBuildingsExteriors/317259337_196066656318240_6776040959092057245_n.jpg',
  
    './assets/photos/woodBuildingsExteriors/317305361_196066526318253_8124637362063992771_n.jpg',
  
    './assets/photos/woodBuildingsExteriors/317315562_196066486318257_1823387784181203141_n.jpg',
  
    './assets/photos/woodBuildingsExteriors/317346280_196066459651593_1239697562143216782_n.jpg',
  
    './assets/photos/woodBuildingsExteriors/317349703_196066442984928_7294981046766497828_n.jpg',
  
    './assets/photos/woodBuildingsExteriors/317352433_196066632984909_2720071073795498877_n.jpg',
  
    './assets/photos/woodBuildingsExteriors/317387231_196066642984908_5300496027241828950_n.jpg',
  
    './assets/photos/woodBuildingsExteriors/317390809_196066466318259_1505856712895319984_n.jpg',
  
    './assets/photos/woodBuildingsExteriors/332500800_1858161564554510_1257490891665167562_n.jpg',
  
    './assets/photos/woodBuildingsExteriors/343132800_249828797430035_2418222288186126761_n.jpg',
  
    './assets/photos/woodBuildingsExteriors/redCabin.jpg',
  
    './cache/resize/0dfbc05b93318579309b8cd736a6cb3a_4x4.jpg',
  
    './cache/resize/1592353edcd0ca622a90485735b78c4a_4x4.jpg',
  
    './cache/resize/1bc39d165015469e04f09d19398f3b8d_4x4.jpg',
  
    './cache/resize/1be8a869d16b073b89ca529767843817_4x4.jpg',
  
    './cache/resize/1c351ef24e6e04c7593d2db9a629bf83_4x4.jpg',
  
    './cache/resize/1c91f53c73314b6328394bf1f99b0143_4x4.jpg',
  
    './cache/resize/1f40cc857e5a11603b8df4416a5112b7_4x4.jpg',
  
    './cache/resize/26e7d57a378491889da1deb07714ff10_4x4.jpg',
  
    './cache/resize/289bcefe70a25c5f464fa46a6e6d298e_4x4.jpg',
  
    './cache/resize/31c83f23d5a7305696578317fae4c12d_4x4.jpg',
  
    './cache/resize/34a9cdff0f099083549fa6d49c83f385_4x4.jpg',
  
    './cache/resize/477190060dcf470a07ff36c980c61799_4x4.jpg',
  
    './cache/resize/50ca3cf00312b20304f75d911ca7cdbf_4x4.jpg',
  
    './cache/resize/53dec89434e3a94680d93da08a99dff2_4x4.jpg',
  
    './cache/resize/57df9b533896cae963a59d72f0615a3b_4x4.jpg',
  
    './cache/resize/5939c10bf3fc6af5e8e30aa3e69d273f_4x4.jpg',
  
    './cache/resize/61f0938d84b946ba444404f624c75b12_4x4.jpg',
  
    './cache/resize/6782925136e4c6336984c5e2f208da05_4x4.jpg',
  
    './cache/resize/77aec7ce156b68f6149d81799cabeb18_4x4.jpg',
  
    './cache/resize/78304b17284be71914e83453e6310eaa_4x4.jpg',
  
    './cache/resize/8298ad1dc764b527d8263b6ed80ed4d5_4x4.jpg',
  
    './cache/resize/83a696c8be7dbc91aaeb9e0cd994785c_4x4.jpg',
  
    './cache/resize/841d09928c4391c04bdc3bd1d506bc57_4x4.jpg',
  
    './cache/resize/85866b9a0451af4c009da384bd6888b4_4x4.jpg',
  
    './cache/resize/86e4957c887d95812baba01224d16652_4x4.jpg',
  
    './cache/resize/9f953f46801c151faaee9f2fc56f324d_4x4.jpg',
  
    './cache/resize/a26e7b140deedf3582b7d2cc7aa1d9f5_4x4.jpg',
  
    './cache/resize/b1f6e6efd3cd402182f3df15bfaef5fd_4x4.jpg',
  
    './cache/resize/b66b5745901ea8ba93c45e1ec1cc80f5_4x4.jpg',
  
    './cache/resize/c3ef4e108aac16d7473f6b229069531a_4x4.jpg',
  
    './cache/resize/c67ffb8a89482ccaf34fa0ebacd9c728_4x4.jpg',
  
    './cache/resize/d0f7e9b6f2fefd55e4572aafb982c46d_4x4.jpg',
  
    './cache/resize/d9c664ccc4721b3e6f5d628d363828c2_4x4.jpg',
  
    './cache/resize/dcf507c468b7944b51e90f6ca70a60c0_4x4.jpg',
  
    './cache/resize/dd40ab47a431ebdcbb7b51ef2e545559_4x4.jpg',
  
    './cache/resize/e093b4f48681ef65c764a985bfeb5593_4x4.jpg',
  
    './cache/resize/ec5191a0261444eaa8f99d3a51046c91_4x4.jpg',
  
    './cache/resize/eec700586afb0d73a55c32d2a080dc67_4x4.jpg',
  
    './cache/resize/f2f059454613759abc27295bfbdcf5cd_4x4.jpg',
  
    './cache/resize/f7c7752dd3100c19a97262cdce2c49ac_4x4.jpg',
  
    './cache/resize/fbcf9e98916a5b734d3338f6e22fc766_4x4.jpg',
  
    './lib/feather.min.js',
  
    './lib/skeleton/skeleton.css',
  
    './lib/splide/css/splide.min.css',
  
    './lib/splide/js/splide-extension-url-hash.min.js',
  
    './lib/splide/js/splide.min.js',
  
    './lib/splide/js/splide.min.js.map',
  
    './assets/img/logo.webp',
  
    './assets/img/themed-mask-icon.webp',
  
    './assets/photos/interiors/273808929_109716964966492_1257565072509379129_n.webp',
  
    './assets/photos/interiors/277669033_130470846224437_4264867575808583705_n.webp',
  
    './assets/photos/interiors/312457475_187395630518676_667788369058296254_n.webp',
  
    './assets/photos/interiors/312485117_187396083851964_7565104069079825687_n.webp',
  
    './assets/photos/interiors/316049156_194022926522613_3693885641179913228_n.webp',
  
    './assets/photos/metalBuildings/306794345_179504934641079_8535974952308255770_n.webp',
  
    './assets/photos/metalBuildings/312231030_187397013851871_635093394470264618_n.webp',
  
    './assets/photos/metalBuildings/312419075_187397997185106_8773415772926229329_n.webp',
  
    './assets/photos/metalBuildings/317319496_196066479651591_8033086363596913829_n.webp',
  
    './assets/photos/metalBuildings/330773912_888035055680899_6729533302421398130_n.webp',
  
    './assets/photos/metalBuildings/338722894_902938790993122_7620509298610421811_n.webp',
  
    './assets/photos/metalBuildings/360128884_297708939487344_7486151275152916537_n.webp',
  
    './assets/photos/metalBuildings/IMG_1016.webp',
  
    './assets/photos/metalBuildings/IMG_2201.webp',
  
    './assets/photos/metalBuildings/IMG_2925.webp',
  
    './assets/photos/metalBuildings/IMG_3260.webp',
  
    './assets/photos/metalBuildings/IMG_3262.webp',
  
    './assets/photos/metalBuildings/IMG_3525.webp',
  
    './assets/photos/metalBuildings/IMG_3858.webp',
  
    './assets/photos/metalBuildings/IMG_4323.webp',
  
    './assets/photos/metalBuildings/IMG_4326.webp',
  
    './assets/photos/metalBuildings/IMG_4335.webp',
  
    './assets/photos/metalBuildings/IMG_4570.webp',
  
    './assets/photos/metalBuildings/IMG_4816.webp',
  
    './assets/photos/metalBuildings/IMG_4937.webp',
  
    './assets/photos/metalBuildings/IMG_4962.webp',
  
    './assets/photos/misc/277346936_128665343071654_3684056946120170643_n.webp',
  
    './assets/photos/misc/277670370_129307439674111_6636102260424274141_n.webp',
  
    './assets/photos/misc/312978283_188336767091229_2527326504798738543_n.webp',
  
    './assets/photos/misc/315938373_194022226522683_1105717561318048404_n.webp',
  
    './assets/photos/misc/316060686_194021756522730_421869203808825585_n.webp',
  
    './assets/photos/misc/combined.webp',
  
    './assets/photos/woodBuildingsExteriors/296309277_164515082820013_3807612566924205564_n.webp',
  
    './assets/photos/woodBuildingsExteriors/307012730_179503731307866_5455523791698014710_n.webp',
  
    './assets/photos/woodBuildingsExteriors/307099935_179716831286556_6501496958567859927_n.webp',
  
    './assets/photos/woodBuildingsExteriors/307361119_179887764602796_6746691413869205369_n.webp',
  
    './assets/photos/woodBuildingsExteriors/312178328_187395530518686_5826124788769628328_n.webp',
  
    './assets/photos/woodBuildingsExteriors/312378978_187398577185048_4976433010011334822_n.webp',
  
    './assets/photos/woodBuildingsExteriors/312506116_187601597164746_5140390994332309915_n.webp',
  
    './assets/photos/woodBuildingsExteriors/315315027_194021929856046_6572346340184719963_n.webp',
  
    './assets/photos/woodBuildingsExteriors/315394633_194022119856027_3669500207694322769_n.webp',
  
    './assets/photos/woodBuildingsExteriors/315436880_194022613189311_2800573190790370030_n.webp',
  
    './assets/photos/woodBuildingsExteriors/315443076_194022389856000_2593358726981860783_n.webp',
  
    './assets/photos/woodBuildingsExteriors/315464830_194022283189344_856498257118608311_n.webp',
  
    './assets/photos/woodBuildingsExteriors/315544123_194022449855994_8340016083664191396_n.webp',
  
    './assets/photos/woodBuildingsExteriors/315553179_194022643189308_210532773170104936_n.webp',
  
    './assets/photos/woodBuildingsExteriors/315693101_194022503189322_6121017617906877547_n.webp',
  
    './assets/photos/woodBuildingsExteriors/315706441_194021859856053_3969430763201883945_n.webp',
  
    './assets/photos/woodBuildingsExteriors/315819346_194021776522728_1371115405545408446_n.webp',
  
    './assets/photos/woodBuildingsExteriors/315846877_194022556522650_4621601706608275566_n.webp',
  
    './assets/photos/woodBuildingsExteriors/315897295_194022423189330_4802535523674719575_n.webp',
  
    './assets/photos/woodBuildingsExteriors/315955778_194022039856035_4908468224910972019_n.webp',
  
    './assets/photos/woodBuildingsExteriors/315963020_194022173189355_6592163033549930934_n.webp',
  
    './assets/photos/woodBuildingsExteriors/315966824_194021869856052_1539917471058420946_n.webp',
  
    './assets/photos/woodBuildingsExteriors/316007853_194021726522733_4708372897441210114_n.webp',
  
    './assets/photos/woodBuildingsExteriors/316047519_194023083189264_4751612418373410524_n.webp',
  
    './assets/photos/woodBuildingsExteriors/316047984_194023003189272_3354075957300133007_n.webp',
  
    './assets/photos/woodBuildingsExteriors/316059472_194022953189277_498638989776965615_n.webp',
  
    './assets/photos/woodBuildingsExteriors/316085989_194021959856043_148918654592113424_n.webp',
  
    './assets/photos/woodBuildingsExteriors/316089187_194023076522598_3681658895350288652_n.webp',
  
    './assets/photos/woodBuildingsExteriors/316097645_194021829856056_1951294302220724822_n.webp',
  
    './assets/photos/woodBuildingsExteriors/316104147_194022196522686_3625891179104415355_n.webp',
  
    './assets/photos/woodBuildingsExteriors/316108159_194021809856058_4238063182667304887_n.webp',
  
    './assets/photos/woodBuildingsExteriors/316148157_194022989855940_3780689501333514205_n.webp',
  
    './assets/photos/woodBuildingsExteriors/316256468_194022343189338_6414962900318669852_n.webp',
  
    './assets/photos/woodBuildingsExteriors/316815107_196066436318262_5728505603133179146_n.webp',
  
    './assets/photos/woodBuildingsExteriors/317069212_196066669651572_3264464496037420631_n.webp',
  
    './assets/photos/woodBuildingsExteriors/317076551_196066506318255_7849869876898882511_n.webp',
  
    './assets/photos/woodBuildingsExteriors/317098197_196066556318250_401753936565286682_n.webp',
  
    './assets/photos/woodBuildingsExteriors/317244531_196066449651594_5653166593472077644_n.webp',
  
    './assets/photos/woodBuildingsExteriors/317248327_196066412984931_1548440574333977193_n.webp',
  
    './assets/photos/woodBuildingsExteriors/317256631_196066402984932_6008371050632593430_n.webp',
  
    './assets/photos/woodBuildingsExteriors/317257530_196066396318266_2410997365364506849_n.webp',
  
    './assets/photos/woodBuildingsExteriors/317258751_196066532984919_5000359204240112348_n.webp',
  
    './assets/photos/woodBuildingsExteriors/317259337_196066656318240_6776040959092057245_n.webp',
  
    './assets/photos/woodBuildingsExteriors/317305361_196066526318253_8124637362063992771_n.webp',
  
    './assets/photos/woodBuildingsExteriors/317315562_196066486318257_1823387784181203141_n.webp',
  
    './assets/photos/woodBuildingsExteriors/317346280_196066459651593_1239697562143216782_n.webp',
  
    './assets/photos/woodBuildingsExteriors/317349703_196066442984928_7294981046766497828_n.webp',
  
    './assets/photos/woodBuildingsExteriors/317352433_196066632984909_2720071073795498877_n.webp',
  
    './assets/photos/woodBuildingsExteriors/317387231_196066642984908_5300496027241828950_n.webp',
  
    './assets/photos/woodBuildingsExteriors/317390809_196066466318259_1505856712895319984_n.webp',
  
    './assets/photos/woodBuildingsExteriors/332500800_1858161564554510_1257490891665167562_n.webp',
  
    './assets/photos/woodBuildingsExteriors/343132800_249828797430035_2418222288186126761_n.webp',
  
    './assets/photos/woodBuildingsExteriors/redCabin.webp',
  
  
    './slideshow/more/',
  
    './slideshow/wood/',
  
    './slideshow/metal/',
  
    './slideshow/tinyhomes/',
  
    './build/wood/',
  
    './build/metal/',
  
    './build/',
  
    './',
  
  './sitemap.xml',
  './index.html'
];

// The install handler takes care of precaching the resources we always need.
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(PRECACHE)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(self.skipWaiting())
  );
});

// The activate handler takes care of cleaning up old caches.
self.addEventListener('activate', event => {
  const currentCaches = [PRECACHE, RUNTIME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
    }).then(cachesToDelete => {
      return Promise.all(cachesToDelete.map(cacheToDelete => {
        return caches.delete(cacheToDelete);
      }));
    }).then(() => self.clients.claim())
  );
});

// The fetch handler serves responses for same-origin resources from a cache.
// If no response is found, it populates the runtime cache with the response
// from the network before returning it to the page.
self.addEventListener('fetch', event => {
  // Skip cross-origin requests, like those for Google Analytics.
  if (event.request.url.startsWith(self.location.origin)) {
    event.respondWith(
      caches.match(event.request).then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return caches.open(RUNTIME).then(cache => {
          return fetch(event.request).then(response => {
            // Put a copy of the response in the runtime cache.
            return cache.put(event.request, response.clone()).then(() => {
              return response;
            });
          });
        });
      })
    );
  }
});
