(function(t){function e(e){for(var n,s,i=e[0],c=e[1],l=e[2],d=0,p=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);v&&v(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,i=1;i<a.length;i++){var c=a[i];0!==r[c]&&(n=!1)}n&&(o.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={app:0},o=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/student-website-1/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var v=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0850":function(t,e,a){},"0b29":function(t,e,a){"use strict";var n=a("4173"),r=a.n(n);r.a},"0de2":function(t,e,a){"use strict";var n=a("ddd1"),r=a.n(n);r.a},1100:function(t,e,a){t.exports=a.p+"img/background.aa9eb153.jpg"},"28b6":function(t,e,a){"use strict";var n=a("0850"),r=a.n(n);r.a},"412f":function(t,e,a){"use strict";var n=a("53bc"),r=a.n(n);r.a},4173:function(t,e,a){},"53bc":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{staticStyle:{padding:"0 !important"},attrs:{dark:""}},[n("scroll-top-button"),n("v-app-bar",{staticStyle:{"z-index":"1000000001"},attrs:{elevation:"0",dark:"",color:"transparent",absolute:"",prominent:""}},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{staticClass:"text-right hidden-lg-and-up"},[n("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!t.drawer}}})],1),n("v-col",{staticClass:"text-sm-center hidden-md-and-down",attrs:{cols:"6"}},[n("v-btn",{staticClass:"mx-4 white--text",attrs:{fab:"",color:"#597da3",link:"",href:"https://vk.com/id507152403"}},[n("v-icon",[t._v("mdi-vk")])],1),n("v-btn",{staticClass:"mx-4 white--text",attrs:{fab:"",color:"#E1306C"}},[n("v-icon",[t._v("mdi-instagram")])],1),n("v-btn",{staticClass:"mx-4 white--text",attrs:{fab:"",color:"#1DA1F2"}},[n("v-icon",[t._v("mdi-twitter")])],1)],1)],1)],1),n("v-navigation-drawer",{staticStyle:{"z-index":"1000000005"},attrs:{app:"",fixed:"",dark:"",right:"",color:"rgba(33, 140, 116, 0.45)"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",t._l(t.menus,(function(e){return n("v-list-item",{key:e.id,attrs:{link:"",to:e.link}},[n("v-list-item-icon",[n("v-icon",[t._v(t._s(e.icon))])],1),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(e.text))])],1)],1)})),1)],1),n("v-content",[n("v-parallax",{staticStyle:{"z-index":"1000000000"},attrs:{src:a("1100")}},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[n("h1",{staticClass:"display-1 font-weight-thin mb-4",staticStyle:{}},[t._v("Виктория Камалетдинова")]),n("h4",{staticClass:"subtitle-1"},[t._v("Учитель начальных классов")])])],1)],1),n("div",{staticClass:"avatar-box"},[n("v-avatar",{attrs:{height:"300px",width:"300px"}},[n("v-img",{attrs:{src:a("8311")}})],1)],1),n("router-view")],1),n("v-footer",{staticClass:"footer-content",attrs:{dark:"",color:"rgba(52, 73, 94, 0.75)"}},[n("div",{staticClass:"d-flex flex-row fill-height flex-fill justify-center align-center"},[n("v-col",{staticClass:"text-right",attrs:{cols:"6"}},[t._v(" "+t._s(2016===(new Date).getFullYear()?"2016 ©":"2016 - "+(new Date).getFullYear()+" ©")+" Kenift Inc ")]),n("v-col",{staticClass:"text-left",attrs:{cols:"6"}},[t._v(" Privacy Policy ")])],1)])],1)},o=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-btn",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"},{name:"show",rawName:"v-show",value:t.fab,expression:"fab"}],staticClass:"ScrollTopButton",attrs:{fab:"",dark:"",fixed:"",right:"",bottom:"",color:"rgba(39, 174, 96, 0.5)"},on:{click:t.toTop}},[a("v-icon",[t._v("mdi-apple-keyboard-control")])],1)},i=[],c={name:"ScrollTopButton",data:function(){return{fab:!1}},methods:{onScroll:function(t){if("undefined"!==typeof window){var e=window.pageYOffset||t.target.scrollTop||0;this.fab=e>20}},toTop:function(){this.$vuetify.goTo(0)}}},l=c,v=(a("28b6"),a("2877")),d=Object(v["a"])(l,s,i,!1,null,"d3d9f5fa",null),p=d.exports,u={name:"App",data:function(){return{drawer:!1,group:null,menus:[{id:0,icon:"mdi-home",text:"Главная страница",link:"/"},{id:1,icon:"mdi-teach",text:"Учителям",link:"/teachers"},{id:2,icon:"mdi-human-male-boy",text:"Родителям",link:"/parents"},{id:3,icon:"mdi-help",text:"Чаво",link:"/about"}]}},components:{ScrollTopButton:p},watch:{group:function(){this.drawer=!1}}},h=u,m=(a("db9d"),Object(v["a"])(h,r,o,!1,null,"9664ec3e",null)),f=m.exports,x=a("8c4f"),b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"d-flex flex-column",attrs:{fluid:""}},[n("horizontal-menu"),n("v-row",{attrs:{justify:"center",align:"center"}},[n("v-col",{staticClass:"hidden-md-and-up",staticStyle:{"min-height":"calc(100vh - 600px)"},attrs:{cols:"12"}},[n("v-card-text",{staticClass:"greet"},[t._v(" Приветствую вас на моем персональном сайте учителя начальных классов!"),n("br"),t._v(" Сайт создан для учителей начальных классов, родителей и учеников."),n("br"),t._v(" Предназначен для обобщения и распространения педагогического опыта в преподавании, для организации дистанционной работы с обучающимися и их родителями."),n("br"),t._v(" На сайте представлены методические разработки уроков, внеклассных мероприятий, фотоматериалы из опыта работы."),n("br"),t._v(" Буду рада, если каждый найдёт здесь много интересной и полезной информации."),n("br")])],1),n("v-col",{staticClass:"hidden-sm-and-down",staticStyle:{"min-height":"calc(100vh - 600px)"},attrs:{cols:"6"}},[n("v-card-text",{staticClass:"greet"},[t._v(" Приветствую вас на моем персональном сайте учителя начальных классов!"),n("br"),t._v(" Сайт создан для учителей начальных классов, родителей и учеников."),n("br"),t._v(" Предназначен для обобщения и распространения педагогического опыта в преподавании, для организации дистанционной работы с обучающимися и их родителями."),n("br"),t._v(" На сайте представлены методические разработки уроков, внеклассных мероприятий, фотоматериалы из опыта работы."),n("br"),t._v(" Буду рада, если каждый найдёт здесь много интересной и полезной информации."),n("br")])],1)],1),n("v-row",{staticClass:"hidden-sm-and-down"},[n("v-col",{attrs:{cols:"4"}},[n("v-card",{staticClass:"mx-auto mx-4 my-12"},[n("v-img",{attrs:{height:"250",src:a("6043"),alt:"Девочка читает"}}),n("v-card-title",[t._v("Хотите, чтобы ваш ребёнок полюбил книги?")])],1)],1),n("v-col",{attrs:{cols:"4"}},[n("v-card",{staticClass:"mx-auto mx-4 my-12"},[n("v-img",{attrs:{height:"250",src:a("e6bc"),alt:"Девочка тренирует свою речь"}}),n("v-card-title",[t._v("Чтобы его речь была чистой и ясной?")])],1)],1),n("v-col",{attrs:{cols:"4"}},[n("v-card",{staticClass:"mx-auto mx-4 my-12"},[n("v-img",{attrs:{height:"250",src:a("df06"),alt:"Читающая книгу семья"}}),n("v-card-title",[t._v("Хотите сделать это дело семейной традицией?")])],1)],1)],1),n("v-col",{staticClass:"hidden-md-and-up",attrs:{cols:"12"}},[n("v-col",{attrs:{cols:"12"}},[n("v-card",{staticClass:"mx-auto mx-4 my-12"},[n("v-img",{attrs:{height:"250",src:a("6043"),alt:"Девочка читает"}}),n("v-card-title",[t._v("Хотите, чтобы ваш ребёнок полюбил книги?")])],1)],1),n("v-col",{attrs:{cols:"12"}},[n("v-card",{staticClass:"mx-auto mx-4 my-12"},[n("v-img",{attrs:{height:"250",src:a("e6bc"),alt:"Девочка тренирует свою речь"}}),n("v-card-title",[t._v("Чтобы его речь была чистой и ясной?")])],1)],1),n("v-col",{attrs:{cols:"12"}},[n("v-card",{staticClass:"mx-auto mx-4 my-12"},[n("v-img",{attrs:{height:"250",src:a("df06"),alt:"Читающая семья"}}),n("v-card-title",[t._v("Хотите сделать это дело семейной традицией?")])],1)],1)],1)],1)},_=[],y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"menu-bar"},[a("v-row",{staticClass:"hidden-md-and-down",attrs:{align:"center",justify:"center"}},[a("v-col",{staticClass:"d-flex justify-end align-center",attrs:{cols:"4"}},[a("v-btn",{staticClass:"white--text mx-4",attrs:{color:"rgba(39, 174, 96, 0.75)",to:"/teachers"}},[a("v-icon",{attrs:{left:""}},[t._v("mdi-teach")]),t._v(" Учителям ")],1),a("v-btn",{staticClass:"white--text mx-4",attrs:{color:"rgba(22, 160, 133, 0.75)",to:"/"}},[a("v-icon",{attrs:{left:""}},[t._v("mdi-home")]),t._v(" Главная ")],1)],1),a("div",{staticStyle:{width:"300px",height:"150px"},attrs:{cols:"2"}}),a("v-col",{attrs:{cols:"4"}},[a("v-btn",{staticClass:"white--text mx-4",attrs:{color:"rgba(41, 128, 185, 0.75)",to:"/parents"}},[a("v-icon",{attrs:{left:""}},[t._v("mdi-human-male-boy")]),t._v(" Родителям ")],1),a("v-btn",{staticClass:"white--text mx-4",attrs:{color:"rgba(155, 89, 182, 0.75)",to:"/about"}},[a("v-icon",{attrs:{left:""}},[t._v("mdi-help")]),t._v(" Чаво ")],1)],1)],1)],1)},g=[],k={name:"HorizontalMenu"},w=k,C=(a("65d7"),Object(v["a"])(w,y,g,!1,null,"d0f51ba8",null)),j=C.exports,S={name:"Home",data:function(){return{items:[]}},components:{HorizontalMenu:j}},O=S,T=(a("0b29"),Object(v["a"])(O,b,_,!1,null,"6130cec0",null)),z=T.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"forbiden"},[a("p",{staticClass:"greet"},[t._v("404 Страница не найдена")]),a("router-link",{attrs:{to:"/"}},[a("p",{staticClass:"greet"},[t._v("Вернуться на главную страницу")])])],1)},F=[],P={name:"Forbiden.vue"},M=P,$=(a("412f"),Object(v["a"])(M,E,F,!1,null,"567b777a",null)),A=$.exports,H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"d-flex flex-column",attrs:{fluid:""}},[a("horizontal-menu"),a("v-row",{staticStyle:{"margin-top":"50px"},attrs:{justify:"center",align:"start"}},[a("v-col",{staticClass:"hidden-sm-and-down",attrs:{cols:"6"}},[a("v-expansion-panels",{attrs:{accordion:""}},[a("v-expansion-panel",[a("v-expansion-panel-header",[t._v(' Программа дополнительного образования "Читай-ка" ')]),a("v-expansion-panel-content",[a("v-card",[a("v-card-text",[t._v(" Новизна программы состоит в том, что она построена в соответствии с основными принципами дифференцированной теории для работы как с дошкольниками (подготовка к обучению грамоте, развитие всех психических процессов), так и со школьниками, имею­щими нарушения письменной речи и проблемы с чтением. Для детей различного возраста (от 5—9 лет) и разного интеллектуального уровня развития — от нормы до задержки психического развития и до олигофрении, потому что все строится на методе дидактической (обучающей и развивающей) игры. В основу данной программы положены такие дидактические принципы, как переход от простого к сложному, системность и концентричность при изучении материала. Который подобран с учетом актуальности той или иной темы для детей старшего и подготовительного к школе возраста. ")]),a("v-card-actions",[a("v-btn",{attrs:{dark:"",color:"#16a085",href:"https://multiurok.ru/files/proghramma-dopolnitiel-nogho-obrazovaniia-chitai-k.html"}},[t._v(" Узнать больше... ")])],1)],1)],1)],1),a("v-expansion-panel",[a("v-expansion-panel-header",[t._v(" Программа по формированию беглого и динамического чтения у учащихся начальных классов ")]),a("v-expansion-panel-content",[a("v-card",[a("v-card-text",[t._v(" Научить детей правильному, беглому, осознанному, выразительному чтению – одна из задач начального образования. И эта задача чрезвычайно актуальна, так как чтение играет огромную роль в образовании, воспитании и развитии человека. Чтение – это окошко, через которое дети видят и познают мир и самого себя. Чтение – это и то, чему обучают младших школьников, посредствам чего их воспитывают и развивают. Умения и навыки чтения формируются не только как важнейший вид речевой и умственной деятельности, но и как сложный комплекс умений и навыков, имеющий обучающий характер, используемый учениками при изучении всех учебных предметов, во всех случаях внеклассной и внешкольной жизни. Следовательно, необходима, систематическая, целенаправленная работа над развитием и совершенствованием навыков беглого, осознанного чтения от класса к классу. ")]),a("v-card-actions",[a("v-btn",{attrs:{dark:"",color:"#16a085",href:"https://nsportal.ru/nachalnaya-shkola/chtenie/2016/01/20/rabochaya-programma-po-razvitiyu-tehniki-chteniya"}},[t._v(" Узнать больше... ")])],1)],1)],1)],1),a("v-expansion-panel",[a("v-expansion-panel-header",[t._v(" Хорошо читаем - отлично учимся (Система упражнений для формирования устойчивого навыка чтения у младших школьников) ")]),a("v-expansion-panel-content",[a("v-card",[a("v-card-text",[t._v(" Уверенное владение навыком чтения является одним из основных условий успешности детей в учении. Однако в настоящий момент навык чтения у школьников вызывают серьёзную тревогу у педагогов и родителей. Подавляющее большинство трудностей, которые наблюдаются у детей во время обучения в школе, связаны с тем, что они не могут самостоятельно получать информацию из книг и учебников. Современные дети не просто не любят, но и не умеют читать, а чтение – это не только тот предмет, которым надо успешно овладеть ученику, но и тот, посредством которого он будет осваивать другие дисциплины, познавать богатство окружающего мира и человеческих отношений, формировать в себе собственное отношение к действительности. Чтение – это труд. Наша задача - сделать его более производительным, продуктивным. Навык беглого, осознанного и выразительного чтения закладывается в начальных классах. Как помочь детям справиться с трудностями при обучении чтению? ")]),a("v-card-actions",[a("v-btn",{attrs:{dark:"",color:"#16a085",href:"https://schsad115.ru/specialist/logoped/190-khorosho-chitaem-otlichno-uchimsya-sistema-"}},[t._v(" Узнать больше... ")])],1)],1)],1)],1),a("v-expansion-panel",[a("v-expansion-panel-header",[t._v(" Как привить любовь к чтению у учащихся начальной школы ")]),a("v-expansion-panel-content",[a("v-card",[a("v-card-text",[t._v(" Задача учителя заключается в том, чтобы воспитать у учащихся интерес к литературе и литературному чтению. Приобщая ребенка к чтению и создавая культ книги в школе и дома, мы должны всегда помнить слова педагога В. А. Сухомлинского, который верил и с большой убежденностью говорил о воспитательной силе книги. Необходимо уделять внимание воспитанию у наших детей правильной образной речи, обогащать их словарь, учить понимать и чувствовать красоту языка подлинно художественных литературных произведений. Чтобы побудить ребенка к чтению, надо сам процесс чтения представить как чудо – показать в знакомом - незнакомое, в обычном – необычное, изумить таящимся в нем богатством возможностей. ")]),a("v-card-actions",[a("v-btn",{attrs:{dark:"",color:"#16a085",href:"https://infourok.ru/vistuplenie-po-teme-kak-privit-lyubov-k-chteniyu-u-uchaschihsya-nachalnoy-shkoli-892016.html"}},[t._v(" Узнать больше... ")])],1)],1)],1)],1)],1)],1),a("v-col",{staticClass:"hidden-md-and-up",attrs:{cols:"12"}},[a("v-expansion-panels",[a("v-expansion-panel",[a("v-expansion-panel-header",[t._v(' Программа дополнительного образования "Читай-ка" ')]),a("v-expansion-panel-content",[a("v-card",[a("v-card-text",[t._v(" Новизна программы состоит в том, что она построена в соответствии с основными принципами дифференцированной теории для работы как с дошкольниками (подготовка к обучению грамоте, развитие всех психических процессов), так и со школьниками, имею­щими нарушения письменной речи и проблемы с чтением. Для детей различного возраста (от 5—9 лет) и разного интеллектуального уровня развития — от нормы до задержки психического развития и до олигофрении, потому что все строится на методе дидактической (обучающей и развивающей) игры. В основу данной программы положены такие дидактические принципы, как переход от простого к сложному, системность и концентричность при изучении материала. Который подобран с учетом актуальности той или иной темы для детей старшего и подготовительного к школе возраста. ")]),a("v-card-actions",[a("v-btn",{attrs:{dark:"",color:"#16a085",href:"https://multiurok.ru/files/proghramma-dopolnitiel-nogho-obrazovaniia-chitai-k.html"}},[t._v(" Узнать больше... ")])],1)],1)],1)],1),a("v-expansion-panel",[a("v-expansion-panel-header",[t._v(" Программа по формированию беглого и динамического чтения у учащихся начальных классов ")]),a("v-expansion-panel-content",[a("v-card",[a("v-card-text",[t._v(" Научить детей правильному, беглому, осознанному, выразительному чтению – одна из задач начального образования. И эта задача чрезвычайно актуальна, так как чтение играет огромную роль в образовании, воспитании и развитии человека. Чтение – это окошко, через которое дети видят и познают мир и самого себя. Чтение – это и то, чему обучают младших школьников, посредствам чего их воспитывают и развивают. Умения и навыки чтения формируются не только как важнейший вид речевой и умственной деятельности, но и как сложный комплекс умений и навыков, имеющий обучающий характер, используемый учениками при изучении всех учебных предметов, во всех случаях внеклассной и внешкольной жизни. Следовательно, необходима, систематическая, целенаправленная работа над развитием и совершенствованием навыков беглого, осознанного чтения от класса к классу. ")]),a("v-card-actions",[a("v-btn",{attrs:{dark:"",color:"#16a085",href:"https://nsportal.ru/nachalnaya-shkola/chtenie/2016/01/20/rabochaya-programma-po-razvitiyu-tehniki-chteniya"}},[t._v(" Узнать больше... ")])],1)],1)],1)],1),a("v-expansion-panel",[a("v-expansion-panel-header",[t._v(" Хорошо читаем - отлично учимся (Система упражнений для формирования устойчивого навыка чтения у младших школьников) ")]),a("v-expansion-panel-content",[a("v-card",[a("v-card-text",[t._v(" Уверенное владение навыком чтения является одним из основных условий успешности детей в учении. Однако в настоящий момент навык чтения у школьников вызывают серьёзную тревогу у педагогов и родителей. Подавляющее большинство трудностей, которые наблюдаются у детей во время обучения в школе, связаны с тем, что они не могут самостоятельно получать информацию из книг и учебников. Современные дети не просто не любят, но и не умеют читать, а чтение – это не только тот предмет, которым надо успешно овладеть ученику, но и тот, посредством которого он будет осваивать другие дисциплины, познавать богатство окружающего мира и человеческих отношений, формировать в себе собственное отношение к действительности. Чтение – это труд. Наша задача - сделать его более производительным, продуктивным. Навык беглого, осознанного и выразительного чтения закладывается в начальных классах. Как помочь детям справиться с трудностями при обучении чтению? ")]),a("v-card-actions",[a("v-btn",{attrs:{dark:"",color:"#16a085",href:"https://schsad115.ru/specialist/logoped/190-khorosho-chitaem-otlichno-uchimsya-sistema-"}},[t._v(" Узнать больше... ")])],1)],1)],1)],1),a("v-expansion-panel",[a("v-expansion-panel-header",[t._v(" Как привить любовь к чтению у учащихся начальной школы ")]),a("v-expansion-panel-content",[a("v-card",[a("v-card-text",[t._v(" Задача учителя заключается в том, чтобы воспитать у учащихся интерес к литературе и литературному чтению. Приобщая ребенка к чтению и создавая культ книги в школе и дома, мы должны всегда помнить слова педагога В. А. Сухомлинского, который верил и с большой убежденностью говорил о воспитательной силе книги. Необходимо уделять внимание воспитанию у наших детей правильной образной речи, обогащать их словарь, учить понимать и чувствовать красоту языка подлинно художественных литературных произведений. Чтобы побудить ребенка к чтению, надо сам процесс чтения представить как чудо – показать в знакомом - незнакомое, в обычном – необычное, изумить таящимся в нем богатством возможностей. ")]),a("v-card-actions",[a("v-btn",{attrs:{dark:"",color:"#16a085",href:"https://infourok.ru/vistuplenie-po-teme-kak-privit-lyubov-k-chteniyu-u-uchaschihsya-nachalnoy-shkoli-892016.html"}},[t._v(" Узнать больше... ")])],1)],1)],1)],1)],1)],1)],1)],1)},B=[],D=a("9ce6"),N=a.n(D),Y={name:"Teachers",data:function(){return{}},components:{HorizontalMenu:j,VueMarkdown:N.a}},J=Y,V=(a("0de2"),Object(v["a"])(J,H,B,!1,null,"8fac1712",null)),q=V.exports,I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"d-flex flex-column",attrs:{fluid:""}},[a("horizontal-menu"),a("v-row",{staticStyle:{"margin-top":"50px"},attrs:{justify:"center",align:"start"}},[a("v-col",{staticClass:"hidden-sm-and-down",attrs:{cols:"6"}},[a("v-expansion-panels",{attrs:{accordion:""}},[a("v-expansion-panel",[a("v-expansion-panel-header",[t._v(" 17 способов мотивации детей к чтению ")]),a("v-expansion-panel-content",[a("v-card",[a("v-card-text",[t._v(" Многие родители даже самых смышленых детей нередко заходят в тупик, когда дело доходит до самостоятельного чтения. Напряжение возрастает, когда ребенок вот-вот должен пополнить ряды первоклашек. Часто бывает так, что чрезмерные старания родителей, сопровождающиеся давлением на ребенка, не дают результатов, а наоборот – напрочь отбивают желание у малыша познавать науку чтения. ")]),a("v-card-actions",[a("v-btn",{attrs:{dark:"",color:"#9b59b6",href:"https://mama.ua/27381-17-sposobov-motivacii-detej-k-chteniyu/"}},[t._v(" Узнать больше... ")])],1)],1)],1)],1),a("v-expansion-panel",[a("v-expansion-panel-header",[t._v(" Семейное чтение как традиция ")]),a("v-expansion-panel-content",[a("v-card",[a("v-card-text",[t._v(" В России существовали прекрасные традиции семейных чтений, когда родители и дети вместе думали, переживали, сострадали. Сегодня эта семейная традиция несколько утрачена, т.к. из-за развития техники и компьютерных технологий у людей практически пропал стимул обращаться к книге. Возродить забытую традицию – значит вернуть в дом культуру, взаимопонимание, тепло духовного общения. ")]),a("v-card-actions",[a("v-btn",{attrs:{dark:"",color:"#9b59b6",href:"https://nsportal.ru/detskiy-sad/materialy-dlya-roditeley/2016/04/23/traditsiya-semeynogo-chteniya"}},[t._v(" Узнать больше... ")])],1)],1)],1)],1),a("v-expansion-panel",[a("v-expansion-panel-header",[t._v(" Почему важно читать вместе с ребенком? ")]),a("v-expansion-panel-content",[a("v-card",[a("v-card-text",[t._v(" Вы можете спросить: А для чего это, если ребенок умеет читать сам? Пусть читает самостоятельно. Самостоятельно ребенок читать, рано или поздно, научится. Тем более, что этому учат в школе. Но вот получать удовольствие от книги он может и не научиться. Для того, чтобы получать удовольствие от любого процесса, надо, чтобы он был приятным и интересным. А чтение для ребенка, особенно на первых порах — тяжелый труд, а не удовольствие. И станет ли оно таковым, зависит во многом от взрослых. Кроме этого, в процессе чтения ребенок может не понять весь смысл прочитанного. А раз умного взрослого в этот момент нет рядом, не получается уточнить и осознать. Вот и выходит, что ребенок читает, устает и не понимает всего смысла текста. Он теряет мысль, не замечает причинно-следственных связей. Ему не всегда удается распознать смешные моменты, потому что он полностью поглощен процессом чтения. И книга становится ему непонятной или он понимает ее не совсем верно. Возьмет ли он книгу в руки в другой раз с удовольствием? ")]),a("v-card-actions",[a("v-btn",{attrs:{dark:"",color:"#9b59b6",href:"https://help-yourself.ru/deti/vospitanie-rebenka/chtenie-s-rebenkom-horoshaja-semejnaja-tradicija/"}},[t._v(" Узнать больше... ")])],1)],1)],1)],1),a("v-expansion-panel",[a("v-expansion-panel-header",[t._v(" Как привить детям интерес к чтению и любовь к книгам? ")]),a("v-expansion-panel-content",[a("v-card",[a("v-card-text",[t._v(" Наши дети – это наше продолжение. Воспитывая детей, мы пытаемся не просто научить их говорить, читать, писать и ориентироваться в повседневных ситуациях. Мы хотим привить им свое мировоззрение, передать им свои жизненные ценности. ")]),a("v-card-actions",[a("v-btn",{attrs:{dark:"",color:"#9b59b6",href:"https://nsportal.ru/detskiy-sad/razvitie-rechi/2018/03/20/konsultatsiya-dlya-roditeley-kak-privit-detyam-interes-k"}},[t._v(" Узнать больше... ")])],1)],1)],1)],1)],1)],1),a("v-col",{staticClass:"hidden-md-and-up",attrs:{cols:"12"}},[a("v-expansion-panels",{attrs:{accordion:""}},[a("v-expansion-panel",[a("v-expansion-panel-header",[t._v(" 17 способов мотивации детей к чтению ")]),a("v-expansion-panel-content",[a("v-card",[a("v-card-text",[t._v(" Многие родители даже самых смышленых детей нередко заходят в тупик, когда дело доходит до самостоятельного чтения. Напряжение возрастает, когда ребенок вот-вот должен пополнить ряды первоклашек. Часто бывает так, что чрезмерные старания родителей, сопровождающиеся давлением на ребенка, не дают результатов, а наоборот – напрочь отбивают желание у малыша познавать науку чтения. ")]),a("v-card-actions",[a("v-btn",{attrs:{dark:"",color:"#9b59b6",href:"https://mama.ua/27381-17-sposobov-motivacii-detej-k-chteniyu/"}},[t._v(" Узнать больше... ")])],1)],1)],1)],1),a("v-expansion-panel",[a("v-expansion-panel-header",[t._v(" Семейное чтение как традиция ")]),a("v-expansion-panel-content",[a("v-card",[a("v-card-text",[t._v(" В России существовали прекрасные традиции семейных чтений, когда родители и дети вместе думали, переживали, сострадали. Сегодня эта семейная традиция несколько утрачена, т.к. из-за развития техники и компьютерных технологий у людей практически пропал стимул обращаться к книге. Возродить забытую традицию – значит вернуть в дом культуру, взаимопонимание, тепло духовного общения. ")]),a("v-card-actions",[a("v-btn",{attrs:{dark:"",color:"#9b59b6",href:"https://nsportal.ru/detskiy-sad/materialy-dlya-roditeley/2016/04/23/traditsiya-semeynogo-chteniya"}},[t._v(" Узнать больше... ")])],1)],1)],1)],1),a("v-expansion-panel",[a("v-expansion-panel-header",[t._v(" Почему важно читать вместе с ребенком? ")]),a("v-expansion-panel-content",[a("v-card",[a("v-card-text",[t._v(" Вы можете спросить: А для чего это, если ребенок умеет читать сам? Пусть читает самостоятельно. Самостоятельно ребенок читать, рано или поздно, научится. Тем более, что этому учат в школе. Но вот получать удовольствие от книги он может и не научиться. Для того, чтобы получать удовольствие от любого процесса, надо, чтобы он был приятным и интересным. А чтение для ребенка, особенно на первых порах — тяжелый труд, а не удовольствие. И станет ли оно таковым, зависит во многом от взрослых. Кроме этого, в процессе чтения ребенок может не понять весь смысл прочитанного. А раз умного взрослого в этот момент нет рядом, не получается уточнить и осознать. Вот и выходит, что ребенок читает, устает и не понимает всего смысла текста. Он теряет мысль, не замечает причинно-следственных связей. Ему не всегда удается распознать смешные моменты, потому что он полностью поглощен процессом чтения. И книга становится ему непонятной или он понимает ее не совсем верно. Возьмет ли он книгу в руки в другой раз с удовольствием? ")]),a("v-card-actions",[a("v-btn",{attrs:{dark:"",color:"#9b59b6",href:"https://help-yourself.ru/deti/vospitanie-rebenka/chtenie-s-rebenkom-horoshaja-semejnaja-tradicija/"}},[t._v(" Узнать больше... ")])],1)],1)],1)],1),a("v-expansion-panel",[a("v-expansion-panel-header",[t._v(" Как привить детям интерес к чтению и любовь к книгам? ")]),a("v-expansion-panel-content",[a("v-card",[a("v-card-text",[t._v(" Наши дети – это наше продолжение. Воспитывая детей, мы пытаемся не просто научить их говорить, читать, писать и ориентироваться в повседневных ситуациях. Мы хотим привить им свое мировоззрение, передать им свои жизненные ценности. ")]),a("v-card-actions",[a("v-btn",{attrs:{dark:"",color:"#9b59b6",href:"https://nsportal.ru/detskiy-sad/razvitie-rechi/2018/03/20/konsultatsiya-dlya-roditeley-kak-privit-detyam-interes-k"}},[t._v(" Узнать больше... ")])],1)],1)],1)],1)],1)],1)],1)],1)},K=[],G={name:"Parents",data:function(){return{}},components:{HorizontalMenu:j,VueMarkdown:N.a}},L=G,Q=(a("5e48"),Object(v["a"])(L,I,K,!1,null,"553cdd23",null)),R=Q.exports;n["default"].use(x["a"]);var U=[{path:"/",name:"Home",component:z,meta:{title:"Виктория Камалетдинова - учитель начальных классов",metaTags:[{name:"description",content:"Приветствую вас на моем персональном сайте учителя начальных классов!\nСайт создан для учителей начальных классов, родителей и учеников.\nПредназначен для обобщения и распространения педагогического опыта в преподавании, для организации дистанционной работы с обучающимися и их родителями.\nНа сайте представлены методические разработки уроков, внеклассных мероприятий, фотоматериалы из опыта работы.\nБуду рада, если каждый найдёт здесь много интересной и полезной информации."},{property:"og:description",content:"Приветствую вас на моем персональном сайте учителя начальных классов!\nСайт создан для учителей начальных классов, родителей и учеников.\nПредназначен для обобщения и распространения педагогического опыта в преподавании, для организации дистанционной работы с обучающимися и их родителями.\nНа сайте представлены методические разработки уроков, внеклассных мероприятий, фотоматериалы из опыта работы.\nБуду рада, если каждый найдёт здесь много интересной и полезной информации."}]}},{path:"/parents",name:"Parents",component:R,meta:{title:"Виктория Камалетдинова - Родителям",metaTags:[{name:"description",content:"Страница с информацией и материалами для родителей."},{property:"og:description",content:"Страница с информацией и материалами для родителей."}]}},{path:"/teachers",name:"Teachers",component:q,meta:{title:"Виктория Камалетдинова - Учителям",metaTags:[{name:"description",content:"Страница с информацией и материалами для учителям."},{property:"og:description",content:"Страница с информацией и материалами для учителям."}]}},{path:"/404",name:"404",component:A},{path:"*",redirect:"/404"}],W=new x["a"]({mode:"history",base:"/student-website-1/",routes:U}),X=W,Z=a("2f62");n["default"].use(Z["a"]);var tt=new Z["a"].Store({state:{},mutations:{},actions:{},modules:{}}),et=a("ce5b"),at=a.n(et),nt=(a("bf40"),a("2992")),rt=a.n(nt);a("5363");n["default"].use(at.a);var ot=new at.a({icons:{iconfont:"mdi"},theme:{themes:{light:{primary:"#2c3e50",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}},lang:{locales:{ru:rt.a},current:"ru"}});a("e792"),a("845f");n["default"].config.productionTip=!1,X.beforeEach((function(t,e,a){var n=t.matched.slice().reverse().find((function(t){return t.meta&&t.meta.title})),r=t.matched.slice().reverse().find((function(t){return t.meta&&t.meta.metaTags}));e.matched.slice().reverse().find((function(t){return t.meta&&t.meta.metaTags}));if(n&&(document.title=n.meta.title),Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map((function(t){return t.parentNode.removeChild(t)})),!r)return a();r.meta.metaTags.map((function(t){var e=document.createElement("meta");return Object.keys(t).forEach((function(a){e.setAttribute(a,t[a])})),e.setAttribute("data-vue-router-controlled",""),e})).forEach((function(t){return document.head.appendChild(t)})),a()})),new n["default"]({router:X,store:tt,vuetify:ot,render:function(t){return t(f)}}).$mount("#app")},"5e48":function(t,e,a){"use strict";var n=a("d0d5"),r=a.n(n);r.a},6043:function(t,e,a){t.exports=a.p+"img/t1.2f9c7b6c.jpg"},"65d7":function(t,e,a){"use strict";var n=a("c2eb"),r=a.n(n);r.a},8311:function(t,e,a){t.exports=a.p+"img/photo.2130dc8d.jpg"},"845f":function(t,e,a){},c2eb:function(t,e,a){},c52f:function(t,e,a){},d0d5:function(t,e,a){},db9d:function(t,e,a){"use strict";var n=a("c52f"),r=a.n(n);r.a},ddd1:function(t,e,a){},df06:function(t,e,a){t.exports=a.p+"img/t3.6a594cb4.jpg"},e6bc:function(t,e,a){t.exports=a.p+"img/t2.5ba5467f.jpg"}});
//# sourceMappingURL=app.20d36c28.js.map