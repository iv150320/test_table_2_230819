// register the grid component
Vue.component('demo-grid', {
  template: '#grid-template',
  replace: true,
  props: {
    data: Array,
    columns: Array,
    filterKey: String
  },
  data: function () {
    var sortOrders = {}
    this.columns.forEach(function (key) {
      sortOrders[key] = 0
    })
    return {
      sortKey: '',
      sortOrders: sortOrders
    }
  },
  computed: {
    filteredData: function () {
      var sortKey = this.sortKey
      var filterKey = this.filterKey && this.filterKey.toLowerCase()
      var order = this.sortOrders[sortKey] || 0
      var data = this.data
      if (filterKey) {
        data = data.filter(function (row) {
          return Object.keys(row).some(function (key) {
            return String(row[key]).toLowerCase().indexOf(filterKey) > -1
          })
        })
      }
      if (sortKey) {
        data = data.slice().sort(function (a, b) {
          a = a[sortKey]
          b = b[sortKey]
          return (a === b ? 0 : a > b ? 1 : -1) * order
        })
      }
      return data
    }
  },
  filters: {
    capitalize: function (str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    }
  },
  methods: {
    sortBy: function (key) {
      this.sortKey = key
      this.sortOrders[key] = this.sortOrders[key] * -1
    }
  }
})

// bootstrap the demo
var demo = new Vue({
  el: '#demo',
  data: {
    searchQuery: '',
    gridColumns: ['id', 'fullname', 'date_submited', 'position', 'organization', 'org_type', 'territory', 'location', 'vid', 'birthdate', 'qualification_category', 'plan_attestation_year', 'workflow' ],
    gridData: [
      {"id":"6656680255054304563","fullname":"Учитель учителевич0","date_submited":"11.02.2019 12:59:08","position":"учитель (преподаватель) русского языка", "organization":"Школа №1","org_type":"Общеобразовательная","territory":"Городской округ Балашиха","location":"Балашиха","vid":"Не задано","birthdate":"1992","qualification_category":"первая","plan_attestation_year":"Не задано","workflow":"На утверждении руководителя"},
      {"id":"6657089011751247571","fullname":"Учитель учителевич1","date_submited":"12.02.2019 15:25:19","position":"Не задано","organization":"МОУ Речицкая СОШ","org_type":"Общеобразовательная","territory":"Раменский муниципальный район МО","location":"Речицы","vid":"Сельская","birthdate":"1987","qualification_category":"Не задано","plan_attestation_year":"Не задано","workflow":"Утверждена"},
      {"id":"6658643380202187052","fullname":"Учитель учителевич2","date_submited":"16.02.2019 19:57:04","position":"Не задано","organization":"МДОУ «Детский сад №4 «Золотая рыбка»","org_type":"ДОУ, УДОД, СПО","territory":"Дмитровский р-он","location":"Дмитров","vid":"Городская","birthdate":"Не задано","qualification_category":"Не задано","plan_attestation_year":"Не задано","workflow":"Утверждена"},
      {"id":"6634514989172544841","fullname":"Учитель учителевич3","date_submited":"13.12.2018 19:26:35","position":"Не задано","organization":"МДОУ - детский сад  № 7 Вишенка","org_type":"ДОУ, УДОД, СПО","territory":"Клин г.о.","location":"Клин","vid":"Городская","birthdate":"Не задано","qualification_category":"Не задано","plan_attestation_year":"Не задано","workflow":"Утверждена"},
      {"id":"6659589957689136790","fullname":"Учитель учителевич4","date_submited":"19.02.2019 09:10:16","position":"Не задано","organization":"МДОУ \"Детский сад № 14 \"Маленькая страна\"","org_type":"ДОУ, УДОД, СПО","territory":"Дмитровский р-он","location":"Дмитров","vid":"Городская","birthdate":"Не задано","qualification_category":"Не задано","plan_attestation_year":"Не задано","workflow":"Утверждена"},
      {"id":"6634896888843572925","fullname":"Учитель учителевич5","date_submited":"14.12.2018 20:08:33","position":"Не задано","organization":"МБДОУ \"ЦРР-Детский сад №84 \"Золотое зёрнышко\"","org_type":"ДОУ, УДОД, СПО","territory":"Ногинский р-он","location":"Кудиново","vid":"Сельская","birthdate":"Не задано","qualification_category":"Не задано","plan_attestation_year":"Не задано","workflow":"Утверждена"},
      {"id":"6683069638359488768","fullname":"Учитель учителевич6","date_submited":"23.04.2019 15:43:25","position":"Не задано","organization":"МБДОУ №75","org_type":"ДОУ, УДОД, СПО","territory":"Мытищи г.о.","location":"Мытищи","vid":"Городская","birthdate":"Не задано","qualification_category":"Не задано","plan_attestation_year":"Не задано","workflow":"Утверждена"},
      {"id":"6659299725587355313","fullname":"Учитель учителевич7","date_submited":"18.02.2019 14:24:01","position":"Не задано","organization":"МБОУ Менделеевская СОШ","org_type":"Общеобразовательная","territory":"Солнечногорский муниципальный район МО","location":"Менделеево","vid":"Городская","birthdate":"1960","qualification_category":"Не задано","plan_attestation_year":"Не задано","workflow":"Утверждена"},
      {"id":"6680836310893638413","fullname":"Учитель учителевич8","date_submited":"17.04.2019 15:16:58","position":"учитель (преподаватель) музыки","organization":"МАОУ Алабинская СОШ сУИОП им Героя РФ С.А.Ашихмина","org_type":"Общеобразовательная","territory":"Наро-Фоминский муниципальный район МО","location":"Калининец","vid":"Городская","birthdate":"1969","qualification_category":"высшая","plan_attestation_year":"Не задано","workflow":"Утверждена"},
      {"id":"6659325605908577590","fullname":"Учитель учителевич9","date_submited":"18.02.2019 16:04:27","position":"Не задано","organization":"МУ ДО ДДЮТ","org_type":"ДОУ, УДОД, СПО","territory":"Люберцы г.о.","location":"Люберцы","vid":"Городская","birthdate":"Не задано","qualification_category":"Не задано","plan_attestation_year":"Не задано","workflow":"Утверждена"},
      {"id":"6681130361601114745","fullname":"Учитель учителевич10","date_submited":"18.04.2019 10:18:02","position":"Не задано","organization":"МАОУ Домодедовская СОШ №8","org_type":"Общеобразовательная","territory":"Домодедово городской округ МО","location":"Домодедово","vid":"Городская","birthdate":"1994","qualification_category":"Не задано","plan_attestation_year":"Не задано","workflow":"Утверждена"},
      {"id":"6672747017588779620","fullname":"Учитель учителевич11","date_submited":"26.03.2019 20:06:23","position":"Не задано","organization":"№79 Детский сад комбинированного вида №79","org_type":"ДОУ, УДОД, СПО","territory":"Раменский р-он","location":"Дубовая роща","vid":"Сельская","birthdate":"Не задано","qualification_category":"Не задано","plan_attestation_year":"Не задано","workflow":"Утверждена"},
      {"id":"6699320762646142199","fullname":"Учитель учителевич12","date_submited":"06.06.2019 10:46:05","position":"Не задано","organization":"МАДОУ \"Детский сад №50\"","org_type":"ДОУ, УДОД, СПО","territory":"Балашиха г.о.","location":"Балашиха","vid":"Городская","birthdate":"Не задано","qualification_category":"первая","plan_attestation_year":"Не задано","workflow":"Утверждена"},
      {"id":"6637066913583029034","fullname":"Учитель учителевич13","date_submited":"20.12.2018 16:29:21","position":"Не задано","organization":"МБОУ СОШ № 1","org_type":"Общеобразовательная","territory":"Московская область","location":"Королёв городской округ МО","vid":"Городская","birthdate":"1981","qualification_category":"Не задано","plan_attestation_year":"Не задано","workflow":"Утверждена"},
      {"id":"6664541441156950485","fullname":"Учитель учителевич14","date_submited":"04.03.2019 17:24:33","position":"Не задано","organization":"МДОУ Детский сад №4 города Электросталь","org_type":"ДОУ, УДОД, СПО","territory":"Электросталь г.о.","location":"Электросталь","vid":"Городская","birthdate":"Не задано","qualification_category":"Не задано","plan_attestation_year":"Не задано","workflow":"На утверждении руководителя"},
      {"id":"6646627702631716545","fullname":"Учитель учителевич15","date_submited":"15.01.2019 10:50:06","position":"Не задано","organization":"МАОУ \"Радумльский лицей - интернат\"","org_type":"Общеобразовательная","territory":"Солнечногорский муниципальный район МО","location":"Радумля","vid":"Сельская","birthdate":"1971","qualification_category":"Не задано","plan_attestation_year":"Не задано","workflow":"Утверждена"},
      {"id":"6667923911847838194","fullname":"Учитель учителевич16","date_submited":"13.03.2019 20:10:16","position":"Не задано","organization":"МБОУ СОШ № 1 г. Пушкино","org_type":"Общеобразовательная","territory":"Пушкинский муниципальный район МО","location":"Пушкино","vid":"Городская","birthdate":"1952","qualification_category":"Не задано","plan_attestation_year":"Не задано","workflow":"Утверждена"},
      {"id":"6634128854703110629","fullname":"Учитель учителевич17","date_submited":"12.12.2018 18:28:11","position":"Не задано","organization":"МБДОУ \"Детский сад №35 общеразвивающего вида\"","org_type":"ДОУ, УДОД, СПО","territory":"Ногинский р-он","location":"Ногинск","vid":"Городская","birthdate":"Не задано","qualification_category":"Не задано","plan_attestation_year":"Не задано","workflow":"Утверждена"},
      {"id":"6680108193123260498","fullname":"Учитель учителевич18","date_submited":"15.04.2019 16:11:30","position":"Не задано","organization":"МБОУ СОШ № 3 г. Химки","org_type":"Общеобразовательная","territory":"Химки городской округ МО","location":"Химки городской округ МО","vid":"Городская","birthdate":"1968","qualification_category":"Не задано","plan_attestation_year":"Не задано","workflow":"Утверждена"},
      {"id":"6634404244245288052","fullname":"Учитель учителевич19","date_submited":"13.12.2018 12:16:50","position":"Не задано","organization":"МБОУ Щёлковская гимназия ЩМР МО","org_type":"Общеобразовательная","territory":"Щёлковский муниципальный район МО","location":"Щелково","vid":"Городская","birthdate":"1959","qualification_category":"высшая","plan_attestation_year":"Не задано","workflow":"Утверждена"},
      {"id":"6633341192100902771","fullname":"Учитель учителевич20","date_submited":"10.12.2018 15:31:39","position":"Не задано","organization":"МБОУ СОШ № 22 г. Химки","org_type":"Общеобразовательная","territory":"Химки городской округ МО","location":"Химки городской округ МО","vid":"Городская","birthdate":"1977","qualification_category":"Не задано","plan_attestation_year":"Не задано","workflow":"Утверждена"},
      {"id":"6633652023421533327","fullname":"Учитель учителевич21","date_submited":"11.12.2018 11:37:50","position":"Не задано","organization":"МАОУ Домодедовская СОШ №8","org_type":"Общеобразовательная","territory":"Домодедово городской округ МО","location":"Домодедово","vid":"Городская","birthdate":"1964","qualification_category":"Не задано","plan_attestation_year":"Не задано","workflow":"Утверждена"},
      {"id":"6634394956907327740","fullname":"Учитель учителевич22","date_submited":"13.12.2018 11:40:48","position":"Не задано","organization":"МБДОУ ДС №52 \"Котенок\"","org_type":"ДОУ, УДОД, СПО","territory":"Химки г.о.","location":"Химки","vid":"Городская","birthdate":"Не задано","qualification_category":"Не задано","plan_attestation_year":"Не задано","workflow":"Утверждена"},
      {"id":"6678619650807895424","fullname":"Учитель учителевич23","date_submited":"11.04.2019 15:55:12","position":"Не задано","organization":"МАОУ Домодедовская СОШ №2","org_type":"Общеобразовательная","territory":"Домодедово городской округ МО","location":"Домодедово","vid":"Городская","birthdate":"1966","qualification_category":"Не задано","plan_attestation_year":"Не задано","workflow":"Утверждена"},
      {"id":"6670939946068625726","fullname":"Учитель учителевич24","date_submited":"21.03.2019 23:14:01","position":"Не задано","organization":"МОУ Дмитровская СОШ №2","org_type":"Общеобразовательная","territory":"Дмитровский муниципальный район МО","location":"Дмитров","vid":"Городская","birthdate":"1971","qualification_category":"Не задано","plan_attestation_year":"Не задано","workflow":"На утверждении руководителя"},
      {"id":"6635088139829871902","fullname":"Учитель учителевич25","date_submited":"15.12.2018 08:30:42","position":"Не задано","organization":"МДОУ Детский сад №3","org_type":"ДОУ, УДОД, СПО","territory":"Сергиево-Посадский р-он","location":"Сергиев Посад-7","vid":"Городская","birthdate":"Не задано","qualification_category":"высшая","plan_attestation_year":"Не задано","workflow":"Утверждена"},
      {"id":"6698569363558372522","fullname":"Учитель учителевич26","date_submited":"04.06.2019 10:10:16","position":"учитель начальных классов","organization":"МОУ школа № 3","org_type":"Общеобразовательная","territory":"Московская область","location":"Жуковский городской округ МО","vid":"Городская","birthdate":"1965","qualification_category":"нет","plan_attestation_year":"Не задано","workflow":"Утверждена"},
      {"id":"6634025860917872980","fullname":"Учитель учителевич27","date_submited":"12.12.2018 11:48:31","position":"Не задано","organization":"АОУ СОШ №14","org_type":"Общеобразовательная","territory":"Московская область","location":"Долгопрудный городской округ МО","vid":"Городская","birthdate":"1962","qualification_category":"Не задано","plan_attestation_year":"Не задано","workflow":"На утверждении руководителя"},
      {"id":"6699405827906093620","fullname":"Учитель учителевич28","date_submited":"06.06.2019 16:16:11","position":"Не задано","organization":"МБОУ СОШ № 14","org_type":"Общеобразовательная","territory":"Мытищи городской округ МО","location":"Мытищи","vid":"Городская","birthdate":"1975","qualification_category":"первая","plan_attestation_year":"Не задано","workflow":"На утверждении руководителя"},
      {"id":"6690869384896988456","fullname":"Учитель учителевич29","date_submited":"14.05.2019 16:10:25","position":"учитель (преподаватель) музыки","organization":"МБОУ СОШ №8","org_type":"Общеобразовательная","territory":"Красногорск городской округ МО","location":"Красногорск","vid":"Городская","birthdate":"1956","qualification_category":"первая","plan_attestation_year":"Не задано","workflow":"Утверждена"},
      {"id":"6658237201545983406","fullname":"Учитель учителевич30","date_submited":"15.02.2019 17:40:53","position":"Не задано","organization":"МБОУ СОШ №4","org_type":"Общеобразовательная","territory":"Солнечногорский муниципальный район МО","location":"Солнечногорск","vid":"Городская","birthdate":"1967","qualification_category":"Не задано","plan_attestation_year":"Не задано","workflow":"Утверждена"},
      {"id":"6694178526444728802","fullname":"Учитель учителевич31","date_submited":"23.05.2019 14:11:35","position":"Не задано","organization":"ЛСОШ №2","org_type":"Общеобразовательная","territory":"Лотошинский муниципальный район МО","location":"Лотошино","vid":"Городская","birthdate":"1968","qualification_category":"Не задано","plan_attestation_year":"Не задано","workflow":"Утверждена"},
      {"id":"6661512626000383156","fullname":"Учитель учителевич32","date_submited":"24.02.2019 13:31:12","position":"Не задано","organization":"МДОУ «Детский сад №19 «Пчёлка»","org_type":"ДОУ, УДОД, СПО","territory":"Дмитровский р-он","location":"Дмитров","vid":"Городская","birthdate":"Не задано","qualification_category":"Не задано","plan_attestation_year":"Не задано","workflow":"Утверждена"},
      {"id":"6657104219596761977","fullname":"Учитель учителевич33","date_submited":"12.02.2019 16:24:20","position":"Не задано","organization":"МБДОУ детский сад №23 \"Ромашка\"","org_type":"ДОУ, УДОД, СПО","territory":"Пушкинский р-он","location":"Тарасовка","vid":"Городская","birthdate":"Не задано","qualification_category":"Не задано","plan_attestation_year":"Не задано","workflow":"Утверждена"},
      {"id":"6633743244310779869","fullname":"Учитель учителевич34","date_submited":"11.12.2018 17:31:49","position":"учитель (преподаватель) музыки","organization":"МБОУ СОШ № 16","org_type":"Общеобразовательная","territory":"Московская область","location":"Серпухов городской округ МО","vid":"Городская","birthdate":"1963","qualification_category":"первая","plan_attestation_year":"Не задано","workflow":"Утверждена"},
      {"id":"6656817865541216014","fullname":"Учитель учителевич35","date_submited":"11.02.2019 21:53:08","position":"учитель (преподаватель) музыки","organization":"МБОУ гимназия №7","org_type":"Общеобразовательная","territory":"Чехов городской округ МО","location":"Чехов","vid":"Городская","birthdate":"1968","qualification_category":"высшая","plan_attestation_year":"Не задано","workflow":"Утверждена"},
      {"id":"6658213090179645644","fullname":"Учитель учителевич36","date_submited":"15.02.2019 16:07:19","position":"Не задано","organization":"МБОУ СОШ №3","org_type":"Общеобразовательная","territory":"Чехов городской округ МО","location":"Чехов","vid":"Городская","birthdate":"1961","qualification_category":"Не задано","plan_attestation_year":"Не задано","workflow":"Утверждена"},
      {"id":"6639325687332017587","fullname":"Учитель учителевич37","date_submited":"26.12.2018 18:34:33","position":"Не задано","organization":"МБОУ Школа №8.","org_type":"Общеобразовательная","territory":"Московская область","location":"Серпухов городской округ МО","vid":"Городская","birthdate":"1973","qualification_category":"Не задано","plan_attestation_year":"Не задано","workflow":"Утверждена"},
      {"id":"6657376160128072191","fullname":"Учитель учителевич38","date_submited":"13.02.2019 09:59:36","position":"Не задано","organization":"МОУ СОШ № 19","org_type":"Общеобразовательная","territory":"Раменский муниципальный район МО","location":"Раменское","vid":"Городская","birthdate":"1984","qualification_category":"Не задано","plan_attestation_year":"Не задано","workflow":"Утверждена"},
      {"id":"6691933422352528413","fullname":"Учитель учителевич39","date_submited":"17.05.2019 12:59:26","position":"Не задано","organization":"МБОУ СОШ 14","org_type":"Общеобразовательная","territory":"Ногинский муниципальный район МО","location":"Ногинск","vid":"Городская","birthdate":"1997","qualification_category":"Не задано","plan_attestation_year":"Не задано","workflow":"Утверждена"},
      {"id":"6692404292466246304","fullname":"Учитель учителевич40","date_submited":"18.05.2019 19:26:39","position":"Не задано","organization":"МБДОУ ЦРР д/с № 19","org_type":"ДОУ, УДОД, СПО","territory":"Ивантеевка г.о.","location":"Ивантеевка","vid":"Городская","birthdate":"Не задано","qualification_category":"Не задано","plan_attestation_year":"Не задано","workflow":"На утверждении руководителя"},
      {"id":"6663334010051017809","fullname":"Учитель учителевич41","date_submited":"01.03.2019 11:19:06","position":"учитель (преподаватель) музыки","organization":"МБУ ДО МХШ \"Радуга\"","org_type":"ДОУ, УДОД, СПО","territory":"Реутов г.о.","location":"Реутов","vid":"Городская","birthdate":"Не задано","qualification_category":"высшая","plan_attestation_year":"Не задано","workflow":"На утверждении руководителя"},
      {"id":"6694822828182057272","fullname":"Учитель учителевич42","date_submited":"25.05.2019 07:51:48","position":"учитель (преподаватель) музыки","organization":"МБОУ \"Нахабинская гимназия № 4\"","org_type":"Общеобразовательная","territory":"Красногорск городской округ МО","location":"Нахабино","vid":"Городская","birthdate":"1985","qualification_category":"нет","plan_attestation_year":"Не задано","workflow":"Утверждена"},
      {"id":"6678938321204800352","fullname":"Учитель учителевич43","date_submited":"12.04.2019 12:31:48","position":"Не задано","organization":"МАОУ Домодедовская СОШ №6","org_type":"Общеобразовательная","territory":"Домодедово городской округ МО","location":"Домодедово","vid":"Городская","birthdate":"1967","qualification_category":"Не задано","plan_attestation_year":"Не задано","workflow":"Утверждена"},
      {"id":"6634099287962904494","fullname":"Учитель учителевич44","date_submited":"12.12.2018 16:33:27","position":"Не задано","organization":"МБУДО ЦРТДиЮ","org_type":"ДОУ, УДОД, СПО","territory":"Королёв г.о.","location":"Королёв","vid":"Городская","birthdate":"Не задано","qualification_category":"высшая","plan_attestation_year":"Не задано","workflow":"Утверждена"},
      {"id":"6637050085166942966","fullname":"Учитель учителевич45","date_submited":"20.12.2018 15:24:03","position":"Не задано","organization":"МБДОУ №36","org_type":"ДОУ, УДОД, СПО","territory":"Солнечногорский р-он","location":"Солнечногорск","vid":"Городская","birthdate":"Не задано","qualification_category":"Не задано","plan_attestation_year":"Не задано","workflow":"Утверждена"},
      {"id":"6656828792377455803","fullname":"Учитель учителевич46","date_submited":"11.02.2019 22:35:32","position":"Не задано","organization":"МБДОУ «Детский сад № 28 «Ивушка»","org_type":"ДОУ, УДОД, СПО","territory":"Ленинский р-он","location":"Мисайлово","vid":"Не задано","birthdate":"Не задано","qualification_category":"Не задано","plan_attestation_year":"Не задано","workflow":"Утверждена"},
      {"id":"6682658716475272279","fullname":"Учитель учителевич47","date_submited":"22.04.2019 13:08:50","position":"Не задано","organization":"Гимназия №6","org_type":"Общеобразовательная","territory":"Красногорск городской округ МО","location":"Красногорск","vid":"Не задано","birthdate":"1974","qualification_category":"Не задано","plan_attestation_year":"Не задано","workflow":"Утверждена"},
      {"id":"6633412840826295544","fullname":"Учитель учителевич48","date_submited":"10.12.2018 20:09:41","position":"учитель (преподаватель) музыки","organization":"МБОУ Опалиховская СОШ","org_type":"Общеобразовательная","territory":"Красногорск городской округ МО","location":"Красногорск","vid":"Не задано","birthdate":"1977","qualification_category":"первая","plan_attestation_year":"Не задано","workflow":"Утверждена"},
      {"id":"6677435362352424496","fullname":"Учитель учителевич49","date_submited":"08.04.2019 11:19:33","position":"Не задано","organization":"МДОУ \"Детский сад №13\"","org_type":"ДОУ, УДОД, СПО","territory":"Волоколамский р-он","location":"Волоколамск","vid":"Городская","birthdate":"Не задано","qualification_category":"Не задано","plan_attestation_year":"Не задано","workflow":"На утверждении руководителя"},
      {"id":"6677479922396795985","fullname":"Учитель учителевич50","date_submited":"08.04.2019 14:12:28","position":"Не задано","organization":"МОУ гимназия № 24","org_type":"Общеобразовательная","territory":"Люберецкий муниципальный район МО","location":"Люберцы","vid":"Городская","birthdate":"1968","qualification_category":"Не задано","plan_attestation_year":"Не задано","workflow":"Утверждена"},
      {"id":"6670713728629294298","fullname":"Учитель учителевич51","date_submited":"21.03.2019 08:36:11","position":"учитель (преподаватель) музыки","organization":"МОУ Павлищевская СОШ","org_type":"Общеобразовательная","territory":"Можайский муниципальный район МО","location":"Отделения-4 свх Павлищево","vid":"Сельская","birthdate":"1969","qualification_category":"высшая","plan_attestation_year":"Не задано","workflow":"На утверждении руководителя"},
      {"id":"6667905022676283892","fullname":"Учитель учителевич52","date_submited":"13.03.2019 18:56:58","position":"Не задано","organization":"МБОУ КСОШ №3","org_type":"Общеобразовательная","territory":"Московская область","location":"Котельники городской округ МО","vid":"Городская","birthdate":"1966","qualification_category":"Не задано","plan_attestation_year":"Не задано","workflow":"Утверждена"},
      {"id":"6646751345919150043","fullname":"Учитель учителевич53","date_submited":"15.01.2019 18:49:54","position":"Не задано","organization":"МБДОУ детский сад № 68","org_type":"ДОУ, УДОД, СПО","territory":"Одинцовский р-он","location":"Одинцово","vid":"Городская","birthdate":"Не задано","qualification_category":"первая","plan_attestation_year":"Не задано","workflow":"Утверждена"},
      {"id":"6634151755467271518","fullname":"Учитель учителевич54","date_submited":"12.12.2018 19:57:03","position":"Не задано","organization":"МБДОУ детский сад №1 \"Чайка\"","org_type":"ДОУ, УДОД, СПО","territory":"Лобня г.о.","location":"Лобня","vid":"Городская","birthdate":"Не задано","qualification_category":"нет","plan_attestation_year":"Не задано","workflow":"Утверждена"}
    ]
  }
})






// {"id":"6656680255054304563",
//    "fullname":"Учитель учителевич0",
//    "date_submited":"11.02.2019 12:59:08",
//    "position":"учитель (преподаватель) русского языка",
//    "organization":"Школа №1",
//    "org_type":"Общеобразовательная",
//    "territory":"Городской округ Балашиха",
//    "location":"Балашиха",
//    "vid":"Не задано",
//    "birthdate":"1992",
//    "qualification_category":"первая",
//    "plan_attestation_year":"Не задано",
//    "workflow":"На утверждении руководителя"}





/*

data: {
    datas: []
},

computed: {
    getAccountNames() {
        return this.datas.map(dataSet => dataSet[0].account_name)
    }
},

mounted() {
    var self = this
    $.getJSON("modified_data.json", function(json_data) {
        self.datas = json_data.data
    })
  }
})*/