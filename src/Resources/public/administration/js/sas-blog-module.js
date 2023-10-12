(()=>{var xe=Object.create;var v=Object.defineProperty;var Se=Object.getOwnPropertyDescriptor;var Ce=Object.getOwnPropertyNames;var ke=Object.getPrototypeOf,Ee=Object.prototype.hasOwnProperty;var Ae=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var Le=(e,t,a,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Ce(t))!Ee.call(e,i)&&i!==a&&v(e,i,{get:()=>t[i],enumerable:!(s=Se(t,i))||s.enumerable});return e};var Ie=(e,t,a)=>(a=e!=null?xe(ke(e)):{},Le(t||!e||!e.__esModule?v(a,"default",{value:e,enumerable:!0}):a,e));var $=Ae((b,u)=>{(function(e,t,a){typeof b=="object"?(u.exports=a(),u.exports.default=a()):typeof define=="function"&&define.amd?define(a):t[e]=a()})("slugify",b,function(){var e=JSON.parse(`{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","\xA2":"cent","\xA3":"pound","\xA4":"currency","\xA5":"yen","\xA9":"(c)","\xAA":"a","\xAE":"(r)","\xBA":"o","\xC0":"A","\xC1":"A","\xC2":"A","\xC3":"A","\xC4":"A","\xC5":"A","\xC6":"AE","\xC7":"C","\xC8":"E","\xC9":"E","\xCA":"E","\xCB":"E","\xCC":"I","\xCD":"I","\xCE":"I","\xCF":"I","\xD0":"D","\xD1":"N","\xD2":"O","\xD3":"O","\xD4":"O","\xD5":"O","\xD6":"O","\xD8":"O","\xD9":"U","\xDA":"U","\xDB":"U","\xDC":"U","\xDD":"Y","\xDE":"TH","\xDF":"ss","\xE0":"a","\xE1":"a","\xE2":"a","\xE3":"a","\xE4":"a","\xE5":"a","\xE6":"ae","\xE7":"c","\xE8":"e","\xE9":"e","\xEA":"e","\xEB":"e","\xEC":"i","\xED":"i","\xEE":"i","\xEF":"i","\xF0":"d","\xF1":"n","\xF2":"o","\xF3":"o","\xF4":"o","\xF5":"o","\xF6":"o","\xF8":"o","\xF9":"u","\xFA":"u","\xFB":"u","\xFC":"u","\xFD":"y","\xFE":"th","\xFF":"y","\u0100":"A","\u0101":"a","\u0102":"A","\u0103":"a","\u0104":"A","\u0105":"a","\u0106":"C","\u0107":"c","\u010C":"C","\u010D":"c","\u010E":"D","\u010F":"d","\u0110":"DJ","\u0111":"dj","\u0112":"E","\u0113":"e","\u0116":"E","\u0117":"e","\u0118":"e","\u0119":"e","\u011A":"E","\u011B":"e","\u011E":"G","\u011F":"g","\u0122":"G","\u0123":"g","\u0128":"I","\u0129":"i","\u012A":"i","\u012B":"i","\u012E":"I","\u012F":"i","\u0130":"I","\u0131":"i","\u0136":"k","\u0137":"k","\u013B":"L","\u013C":"l","\u013D":"L","\u013E":"l","\u0141":"L","\u0142":"l","\u0143":"N","\u0144":"n","\u0145":"N","\u0146":"n","\u0147":"N","\u0148":"n","\u014C":"O","\u014D":"o","\u0150":"O","\u0151":"o","\u0152":"OE","\u0153":"oe","\u0154":"R","\u0155":"r","\u0158":"R","\u0159":"r","\u015A":"S","\u015B":"s","\u015E":"S","\u015F":"s","\u0160":"S","\u0161":"s","\u0162":"T","\u0163":"t","\u0164":"T","\u0165":"t","\u0168":"U","\u0169":"u","\u016A":"u","\u016B":"u","\u016E":"U","\u016F":"u","\u0170":"U","\u0171":"u","\u0172":"U","\u0173":"u","\u0174":"W","\u0175":"w","\u0176":"Y","\u0177":"y","\u0178":"Y","\u0179":"Z","\u017A":"z","\u017B":"Z","\u017C":"z","\u017D":"Z","\u017E":"z","\u018F":"E","\u0192":"f","\u01A0":"O","\u01A1":"o","\u01AF":"U","\u01B0":"u","\u01C8":"LJ","\u01C9":"lj","\u01CB":"NJ","\u01CC":"nj","\u0218":"S","\u0219":"s","\u021A":"T","\u021B":"t","\u0259":"e","\u02DA":"o","\u0386":"A","\u0388":"E","\u0389":"H","\u038A":"I","\u038C":"O","\u038E":"Y","\u038F":"W","\u0390":"i","\u0391":"A","\u0392":"B","\u0393":"G","\u0394":"D","\u0395":"E","\u0396":"Z","\u0397":"H","\u0398":"8","\u0399":"I","\u039A":"K","\u039B":"L","\u039C":"M","\u039D":"N","\u039E":"3","\u039F":"O","\u03A0":"P","\u03A1":"R","\u03A3":"S","\u03A4":"T","\u03A5":"Y","\u03A6":"F","\u03A7":"X","\u03A8":"PS","\u03A9":"W","\u03AA":"I","\u03AB":"Y","\u03AC":"a","\u03AD":"e","\u03AE":"h","\u03AF":"i","\u03B0":"y","\u03B1":"a","\u03B2":"b","\u03B3":"g","\u03B4":"d","\u03B5":"e","\u03B6":"z","\u03B7":"h","\u03B8":"8","\u03B9":"i","\u03BA":"k","\u03BB":"l","\u03BC":"m","\u03BD":"n","\u03BE":"3","\u03BF":"o","\u03C0":"p","\u03C1":"r","\u03C2":"s","\u03C3":"s","\u03C4":"t","\u03C5":"y","\u03C6":"f","\u03C7":"x","\u03C8":"ps","\u03C9":"w","\u03CA":"i","\u03CB":"y","\u03CC":"o","\u03CD":"y","\u03CE":"w","\u0401":"Yo","\u0402":"DJ","\u0404":"Ye","\u0406":"I","\u0407":"Yi","\u0408":"J","\u0409":"LJ","\u040A":"NJ","\u040B":"C","\u040F":"DZ","\u0410":"A","\u0411":"B","\u0412":"V","\u0413":"G","\u0414":"D","\u0415":"E","\u0416":"Zh","\u0417":"Z","\u0418":"I","\u0419":"J","\u041A":"K","\u041B":"L","\u041C":"M","\u041D":"N","\u041E":"O","\u041F":"P","\u0420":"R","\u0421":"S","\u0422":"T","\u0423":"U","\u0424":"F","\u0425":"H","\u0426":"C","\u0427":"Ch","\u0428":"Sh","\u0429":"Sh","\u042A":"U","\u042B":"Y","\u042C":"","\u042D":"E","\u042E":"Yu","\u042F":"Ya","\u0430":"a","\u0431":"b","\u0432":"v","\u0433":"g","\u0434":"d","\u0435":"e","\u0436":"zh","\u0437":"z","\u0438":"i","\u0439":"j","\u043A":"k","\u043B":"l","\u043C":"m","\u043D":"n","\u043E":"o","\u043F":"p","\u0440":"r","\u0441":"s","\u0442":"t","\u0443":"u","\u0444":"f","\u0445":"h","\u0446":"c","\u0447":"ch","\u0448":"sh","\u0449":"sh","\u044A":"u","\u044B":"y","\u044C":"","\u044D":"e","\u044E":"yu","\u044F":"ya","\u0451":"yo","\u0452":"dj","\u0454":"ye","\u0456":"i","\u0457":"yi","\u0458":"j","\u0459":"lj","\u045A":"nj","\u045B":"c","\u045D":"u","\u045F":"dz","\u0490":"G","\u0491":"g","\u0492":"GH","\u0493":"gh","\u049A":"KH","\u049B":"kh","\u04A2":"NG","\u04A3":"ng","\u04AE":"UE","\u04AF":"ue","\u04B0":"U","\u04B1":"u","\u04BA":"H","\u04BB":"h","\u04D8":"AE","\u04D9":"ae","\u04E8":"OE","\u04E9":"oe","\u0531":"A","\u0532":"B","\u0533":"G","\u0534":"D","\u0535":"E","\u0536":"Z","\u0537":"E'","\u0538":"Y'","\u0539":"T'","\u053A":"JH","\u053B":"I","\u053C":"L","\u053D":"X","\u053E":"C'","\u053F":"K","\u0540":"H","\u0541":"D'","\u0542":"GH","\u0543":"TW","\u0544":"M","\u0545":"Y","\u0546":"N","\u0547":"SH","\u0549":"CH","\u054A":"P","\u054B":"J","\u054C":"R'","\u054D":"S","\u054E":"V","\u054F":"T","\u0550":"R","\u0551":"C","\u0553":"P'","\u0554":"Q'","\u0555":"O''","\u0556":"F","\u0587":"EV","\u0621":"a","\u0622":"aa","\u0623":"a","\u0624":"u","\u0625":"i","\u0626":"e","\u0627":"a","\u0628":"b","\u0629":"h","\u062A":"t","\u062B":"th","\u062C":"j","\u062D":"h","\u062E":"kh","\u062F":"d","\u0630":"th","\u0631":"r","\u0632":"z","\u0633":"s","\u0634":"sh","\u0635":"s","\u0636":"dh","\u0637":"t","\u0638":"z","\u0639":"a","\u063A":"gh","\u0641":"f","\u0642":"q","\u0643":"k","\u0644":"l","\u0645":"m","\u0646":"n","\u0647":"h","\u0648":"w","\u0649":"a","\u064A":"y","\u064B":"an","\u064C":"on","\u064D":"en","\u064E":"a","\u064F":"u","\u0650":"e","\u0652":"","\u0660":"0","\u0661":"1","\u0662":"2","\u0663":"3","\u0664":"4","\u0665":"5","\u0666":"6","\u0667":"7","\u0668":"8","\u0669":"9","\u067E":"p","\u0686":"ch","\u0698":"zh","\u06A9":"k","\u06AF":"g","\u06CC":"y","\u06F0":"0","\u06F1":"1","\u06F2":"2","\u06F3":"3","\u06F4":"4","\u06F5":"5","\u06F6":"6","\u06F7":"7","\u06F8":"8","\u06F9":"9","\u0E3F":"baht","\u10D0":"a","\u10D1":"b","\u10D2":"g","\u10D3":"d","\u10D4":"e","\u10D5":"v","\u10D6":"z","\u10D7":"t","\u10D8":"i","\u10D9":"k","\u10DA":"l","\u10DB":"m","\u10DC":"n","\u10DD":"o","\u10DE":"p","\u10DF":"zh","\u10E0":"r","\u10E1":"s","\u10E2":"t","\u10E3":"u","\u10E4":"f","\u10E5":"k","\u10E6":"gh","\u10E7":"q","\u10E8":"sh","\u10E9":"ch","\u10EA":"ts","\u10EB":"dz","\u10EC":"ts","\u10ED":"ch","\u10EE":"kh","\u10EF":"j","\u10F0":"h","\u1E62":"S","\u1E63":"s","\u1E80":"W","\u1E81":"w","\u1E82":"W","\u1E83":"w","\u1E84":"W","\u1E85":"w","\u1E9E":"SS","\u1EA0":"A","\u1EA1":"a","\u1EA2":"A","\u1EA3":"a","\u1EA4":"A","\u1EA5":"a","\u1EA6":"A","\u1EA7":"a","\u1EA8":"A","\u1EA9":"a","\u1EAA":"A","\u1EAB":"a","\u1EAC":"A","\u1EAD":"a","\u1EAE":"A","\u1EAF":"a","\u1EB0":"A","\u1EB1":"a","\u1EB2":"A","\u1EB3":"a","\u1EB4":"A","\u1EB5":"a","\u1EB6":"A","\u1EB7":"a","\u1EB8":"E","\u1EB9":"e","\u1EBA":"E","\u1EBB":"e","\u1EBC":"E","\u1EBD":"e","\u1EBE":"E","\u1EBF":"e","\u1EC0":"E","\u1EC1":"e","\u1EC2":"E","\u1EC3":"e","\u1EC4":"E","\u1EC5":"e","\u1EC6":"E","\u1EC7":"e","\u1EC8":"I","\u1EC9":"i","\u1ECA":"I","\u1ECB":"i","\u1ECC":"O","\u1ECD":"o","\u1ECE":"O","\u1ECF":"o","\u1ED0":"O","\u1ED1":"o","\u1ED2":"O","\u1ED3":"o","\u1ED4":"O","\u1ED5":"o","\u1ED6":"O","\u1ED7":"o","\u1ED8":"O","\u1ED9":"o","\u1EDA":"O","\u1EDB":"o","\u1EDC":"O","\u1EDD":"o","\u1EDE":"O","\u1EDF":"o","\u1EE0":"O","\u1EE1":"o","\u1EE2":"O","\u1EE3":"o","\u1EE4":"U","\u1EE5":"u","\u1EE6":"U","\u1EE7":"u","\u1EE8":"U","\u1EE9":"u","\u1EEA":"U","\u1EEB":"u","\u1EEC":"U","\u1EED":"u","\u1EEE":"U","\u1EEF":"u","\u1EF0":"U","\u1EF1":"u","\u1EF2":"Y","\u1EF3":"y","\u1EF4":"Y","\u1EF5":"y","\u1EF6":"Y","\u1EF7":"y","\u1EF8":"Y","\u1EF9":"y","\u2013":"-","\u2018":"'","\u2019":"'","\u201C":"\\"","\u201D":"\\"","\u201E":"\\"","\u2020":"+","\u2022":"*","\u2026":"...","\u20A0":"ecu","\u20A2":"cruzeiro","\u20A3":"french franc","\u20A4":"lira","\u20A5":"mill","\u20A6":"naira","\u20A7":"peseta","\u20A8":"rupee","\u20A9":"won","\u20AA":"new shequel","\u20AB":"dong","\u20AC":"euro","\u20AD":"kip","\u20AE":"tugrik","\u20AF":"drachma","\u20B0":"penny","\u20B1":"peso","\u20B2":"guarani","\u20B3":"austral","\u20B4":"hryvnia","\u20B5":"cedi","\u20B8":"kazakhstani tenge","\u20B9":"indian rupee","\u20BA":"turkish lira","\u20BD":"russian ruble","\u20BF":"bitcoin","\u2120":"sm","\u2122":"tm","\u2202":"d","\u2206":"delta","\u2211":"sum","\u221E":"infinity","\u2665":"love","\u5143":"yuan","\u5186":"yen","\uFDFC":"rial","\uFEF5":"laa","\uFEF7":"laa","\uFEF9":"lai","\uFEFB":"la"}`),t=JSON.parse('{"bg":{"\u0419":"Y","\u0426":"Ts","\u0429":"Sht","\u042A":"A","\u042C":"Y","\u0439":"y","\u0446":"ts","\u0449":"sht","\u044A":"a","\u044C":"y"},"de":{"\xC4":"AE","\xE4":"ae","\xD6":"OE","\xF6":"oe","\xDC":"UE","\xFC":"ue","\xDF":"ss","%":"prozent","&":"und","|":"oder","\u2211":"summe","\u221E":"unendlich","\u2665":"liebe"},"es":{"%":"por ciento","&":"y","<":"menor que",">":"mayor que","|":"o","\xA2":"centavos","\xA3":"libras","\xA4":"moneda","\u20A3":"francos","\u2211":"suma","\u221E":"infinito","\u2665":"amor"},"fr":{"%":"pourcent","&":"et","<":"plus petit",">":"plus grand","|":"ou","\xA2":"centime","\xA3":"livre","\xA4":"devise","\u20A3":"franc","\u2211":"somme","\u221E":"infini","\u2665":"amour"},"pt":{"%":"porcento","&":"e","<":"menor",">":"maior","|":"ou","\xA2":"centavo","\u2211":"soma","\xA3":"libra","\u221E":"infinito","\u2665":"amor"},"uk":{"\u0418":"Y","\u0438":"y","\u0419":"Y","\u0439":"y","\u0426":"Ts","\u0446":"ts","\u0425":"Kh","\u0445":"kh","\u0429":"Shch","\u0449":"shch","\u0413":"H","\u0433":"h"},"vi":{"\u0110":"D","\u0111":"d"},"da":{"\xD8":"OE","\xF8":"oe","\xC5":"AA","\xE5":"aa","%":"procent","&":"og","|":"eller","$":"dollar","<":"mindre end",">":"st\xF8rre end"},"nb":{"&":"og","\xC5":"AA","\xC6":"AE","\xD8":"OE","\xE5":"aa","\xE6":"ae","\xF8":"oe"},"it":{"&":"e"},"nl":{"&":"en"},"sv":{"&":"och","\xC5":"AA","\xC4":"AE","\xD6":"OE","\xE5":"aa","\xE4":"ae","\xF6":"oe"}}');function a(s,i){if(typeof s!="string")throw new Error("slugify: string argument expected");i=typeof i=="string"?{replacement:i}:i||{};var l=t[i.locale]||{},y=i.replacement===void 0?"-":i.replacement,ye=i.trim===void 0?!0:i.trim,o=s.normalize().split("").reduce(function(ve,m){var p=l[m]||e[m]||m;return p===y&&(p=" "),ve+p.replace(i.remove||/[^\w\s$*_+~.()'"!\-:@]+/g,"")},"");return i.strict&&(o=o.replace(/[^A-Za-z0-9\s]/g,"")),ye&&(o=o.trim()),o=o.replace(/\s+/g,y),i.lower&&(o=o.toLowerCase()),o}return a.extend=function(s){Object.assign(e,s)},a})});var x=`<div>
    <template v-for="componentSection in componentSections">
        <slot v-bind="{ componentSection }"/>
    </template>
</div>`;var{Component:Me,State:Be}=Shopware;Me.register("sas-blog-extension-component-sections",{template:x,props:{positionIdentifier:{type:String,required:!0}},computed:{componentSections(){return Be.get("extensionComponentSections").identifier[this.positionIdentifier]??[]}}});var S=`{% block sw_cms_sidebar_block_overview_category_options %}
{% parent %}
<option v-if="!isBlogDetail" value="sas-blog">Blog</option>
{% endblock %}

{% block sw_cms_sidebar_page_settings_type_field_options %}
{% parent %}
<option
    value="blog_detail"
    :disabled="!isBlogDetail"
>
    {{ $tc('sw-cms.detail.label.pageTypeBlog') }}
</option>
{% endblock %}

{% block sw_cms_sidebar_page_settings_type_field %}
    {% parent %}
    <sw-text-field
        v-model="page.toggle"
        :label="$tc('sw-cms.detail.label.pageName')"
        :placeholder="placeholder(page, 'name')"
        :error="pageNameError"
    />
{% endblock %}
`;var c=Object.freeze({REQUIRED_FIELD_ERROR_CODE:"c1051bb4-d103-4f74-8988-acbcafc7fdc3",PAGE_TYPES:{BLOG_DETAIL:"blog_detail"}});Shopware.Component.override("sw-cms-sidebar",{template:S,computed:{pageRepository(){return this.repositoryFactory.create("cms_page")},isBlogDetail(){return this.page.type===c.PAGE_TYPES.BLOG_DETAIL}}});var{Component:Pe}=Shopware;Pe.override("sw-cms-list",{computed:{sortPageTypes(){return[{value:"",name:this.$tc("sw-cms.sorting.labelSortByAllPages"),active:!0},{value:"page",name:this.$tc("sw-cms.detail.label.pageType.page")},{value:"landingpage",name:this.$tc("sw-cms.detail.label.pageType.landingpage")},{value:"product_list",name:this.$tc("sw-cms.detail.label.pageType.productList")},{value:"product_detail",name:this.$tc("sw-cms.detail.label.pageType.productDetail")},{value:"blog_detail",name:this.$tc("sw-cms.sorting.labelSortByBlogPages")}]}}});var C=`{% block sw_text_field %}
    <div :class="{ 'has-warning': hasWarning, 'sas-text-field': true }">
        {% parent() %}
        {% block sas_text_field_max_length %}
            <div v-if="maxLength" class="sas-text-field-counter-wrapper">
                <span class="char-left-count" v-show="hasWarning">{{ $tc('sas-blog.detail.warning.maxTextCountReached', 0, { charLeft }) }}</span>
                <span class="counter"><span class="current-counter">{{ currentLength }}</span> / {{ maxLength }}</span>
            </div>
        {% endblock %}
    </div>
{% endblock %}

`;var{Component:De}=Shopware;De.extend("sas-text-field","sw-text-field",{template:C,props:{maxLength:{type:Number,required:!1,default:255},textCountBeforeWarning:{type:Number,required:!1,default:20}},watch:{value(e){if(e){if(e.length>this.maxLength){this.currentValue=e.substr(0,this.maxLength),this.$emit("input",this.currentValue);return}this.currentValue=e}}},computed:{currentLength(){return this.currentValue?this.currentValue.length:0},charLeft(){return this.maxLength-this.currentLength},hasWarning(){return this.currentLength>0&&this.charLeft<=this.textCountBeforeWarning}}});var k=`{% block sw_block_field %}
    <div :class="{ 'has-warning': hasWarning, 'sas-textarea-field': true }">
        {% parent() %}
        {% block sas_textarea_field_max_length %}
            <div v-if="maxLength" class="sas-text-field-counter-wrapper">
                <span class="char-left-count" v-show="hasWarning">{{ $tc('sas-blog.detail.warning.maxTextCountReached', 0, { charLeft }) }}</span>
                <span class="counter"><span class="current-counter">{{ currentLength }}</span> / {{ maxLength }}</span>
            </div>
        {% endblock %}
    </div>
{% endblock %}

`;var{Component:ze}=Shopware;ze.extend("sas-textarea-field","sw-textarea-field",{template:k,props:{maxLength:{type:Number,required:!1,default:255},textCountBeforeWarning:{type:Number,required:!1,default:20}},watch:{value(e){if(e){if(e.length>this.maxLength){this.currentValue=e.substr(0,this.maxLength),this.$emit("input",this.currentValue);return}this.currentValue=e}}},computed:{currentLength(){return this.currentValue?this.currentValue.length:0},charLeft(){return this.maxLength-this.currentLength},hasWarning(){return this.currentLength>0&&this.charLeft<=this.textCountBeforeWarning}}});var E=`{% block sw_cms_section_content_block_slot %}
<sw-cms-slot
    v-for="el in block.slots"
    :slot="el.slot"
    :key="el.id"
    :element="el"
    :disabled="disabled"
    :active="selectedBlock !== null && selectedBlock.id === block.id"
/>
{% endblock %}

{% block sw_cms_section_content_block_component_slot %}
<sw-cms-slot
    v-for="el in block.slots"
    :slot="el.slot"
    :key="el.id"
    :element="el"
    :disabled="disabled"
    :active="selectedBlock !== null && selectedBlock.id === block.id"
/>
{% endblock %}
`;var{Component:Fe}=Shopware;Fe.extend("sas-cms-section","sw-cms-section",{template:E});var A={"blog.module.detail":{sas_blog_entries:["title","slug","teaser","authorId","publishedAt","blogCategories"]}};var L=`{% block sw_cms_sidebar_page_settings %}
    <sw-sidebar-item
            ref="blogDetailSidebar"
            icon="regular-info-circle"
            badge-type="error"
            :title="$tc('sas-blog.detail.sidebar.heading')"
            :has-simple-badge="blogModuleDetailError"
            :disabled="page.locked || disabled"
    >
        {% block sas_blog_cms_sidebar_page_basic_information %}
            <sw-sidebar-collapse :expand-on-loading="true">
                {% block sas_blog_cms_sidebar_page_basic_information_header %}
                    <span slot="header">{{ $tc('sas-blog.detail.sidebar.basicInformation') }}</span>
                {% endblock %}

                {% block sas_blog_cms_sidebar_page_basic_information_form %}
                    <sw-container
                        slot="content"
                        columns="100%"
                        gap="20px"
                        class="sw-cms-sidebar__settings"
                    >
                        {% block sas_blog_cms_sidebar_page_basic_information_title_field %}
                            <sas-text-field
                                required
                                v-model="blog.title"
                                :label="$tc('sas-blog.detail.titleLabel')"
                                :placeholder="$tc('sas-blog.detail.titlePlaceholder')"
                                :error="blogTitleError">
                            </sas-text-field>
                        {% endblock %}

                        {% block sas_blog_cms_sidebar_page_basic_information_slug_field %}
                            <sw-text-field
                                required
                                disabled
                                v-model="blog.slug"
                                :label="$tc('sas-blog.detail.slugLabel')"
                                :error="blogSlugError"
                                :placeholder="$tc('sas-blog.detail.slugPlaceholder')">
                            </sw-text-field>
                        {% endblock %}

                        {% block sas_blog_cms_sidebar_page_basic_information_teaser_field %}
                            <sas-textarea-field
                                type="textarea"
                                v-model="blog.teaser"
                                :label="$tc('sas-blog.detail.teaserLabel')"
                                :placeholder="$tc('sas-blog.detail.teaserPlaceholder')"
                                :error="blogTeaserError">
                            </sas-textarea-field>
                        {% endblock %}

                        {% block sas_blog_cms_sidebar_page_basic_information_image_field %}
                            <sw-upload-listener
                                :uploadTag="blog.id"
                                @media-upload-finish="onSetMediaItem"
                                autoUpload>
                            </sw-upload-listener>

                            <sw-media-compact-upload-v2
                                variant="regular"
                                :label="$tc('sas-blog.detail.teaserImageLabel')"
                                :source="mediaItem"
                                :uploadTag="blog.id"
                                :defaultFolder="blog.getEntityName()"
                                :allowMultiSelect="false"
                                :fileAccept="fileAccept"
                                @media-upload-remove-image="onRemoveMediaItem"
                                @selection-change="setMedia"
                                @media-drop="onMediaDropped">
                            </sw-media-compact-upload-v2>
                        {% endblock %}
                    </sw-container>
                {% endblock %}
            </sw-sidebar-collapse>
        {% endblock %}

        {% block sas_blog_cms_sidebar_page_settings %}
            <sw-sidebar-collapse :expand-on-loading="true">
                {% block sas_blog_cms_sidebar_page_settings_header %}
                    <span slot="header">{{ $tc('sas-blog.detail.sidebar.settings') }}</span>
                {% endblock %}

                {% block sas_blog_cms_sidebar_page_settings_form %}
                    <sw-container
                        slot="content"
                        columns="100%"
                        gap="20px"
                        class="sw-cms-sidebar__settings"
                    >
                        <div>
                            {% block sas_blog_cms_sidebar_page_settings_visibility_field %}
                                <sw-switch-field
                                    type="switch"
                                    class="sas-field--switch"
                                    :label="$tc('sas-blog.detail.visibility.label')"
                                    v-model="blog.active">
                                </sw-switch-field>
                            {% endblock %}

                            {% block sas_blog_cms_sidebar_page_settings_detail_teaser_field %}
                                <sw-switch-field
                                    type="switch"
                                    class="sas-field--switch"
                                    :label="$tc('sas-blog.detail.detailTeaser.label')"
                                    v-model="blog.detailTeaserImage">
                                </sw-switch-field>
                            {% endblock %}
                        </div>

                        {% block sas_blog_cms_sidebar_page_settings_published_at_field %}
                            <sw-datepicker
                                required
                                size="medium"
                                dateType="date"
                                v-model="blog.publishedAt"
                                :label="$tc('sas-blog.detail.publishedAtLabel')"
                                :error="blogPublishedAtError">
                            </sw-datepicker>
                        {% endblock %}

                        {% block sas_blog_cms_sidebar_page_settings_author_field %}
                            <sw-entity-single-select
                                required
                                v-model="blog.authorId"
                                labelProperty="translated.name"
                                class="sas-field--author"
                                entity="sas_blog_author"
                                :label="$tc('sas-blog.detail.author.label')"
                                :placeholder="$tc('sas-blog.detail.author.placeholder')"
                                :error="blogAuthorIdError"
                            >
                                <template #selection-label-property="{item}">
                                    <span>{{ item.firstName }} {{ item.lastName }} <i>({{ item.email }})</i></span>
                                </template>
                                <template #result-label-property="{item}">
                                    <span>{{ item.firstName }} {{ item.lastName }} <i>({{ item.email }})</i></span>
                                </template>
                            </sw-entity-single-select>
                        {% endblock %}

                        {% block sas_blog_cms_sidebar_page_settings_sales_channels %}
                            <sw-entity-multi-id-select
                                v-model="blogSalesChannelIds"
                                :repository="salesChannelRepository"
                                class="sas-field--sales-channels"
                                :label="$tc('sas-blog.detail.salesChannels.labelSalesChannels')"
                                :placeholder="$tc('sas-blog.detail.salesChannels.placeholderSalesChannels')"
                            ></sw-entity-multi-id-select>
                        {% endblock %}

                        {% block sas_blog_cms_sidebar_page_settings_category_field %}
                            <sas-blog-category-tree-field
                                required
                                v-model="blog.blogCategories"
                                class="sas-field--category"
                                :label="$tc('sas-blog.detail.category.label')"
                                :placeholder="$tc('sas-blog.detail.category.placeholder')"
                                :error="blogBlogCategoriesError"
                                :categoriesCollection="blog.blogCategories">
                            </sas-blog-category-tree-field>
                        {% endblock %}
                    </sw-container>
                {% endblock %}
            </sw-sidebar-collapse>
        {% endblock %}

        {% block sas_blog_cms_sidebar_page_serp %}
            <sw-sidebar-collapse :expand-on-loading="true">
                {% block sas_blog_cms_sidebar_page_serp_header %}
                    <span slot="header">{{ $tc('sas-blog.detail.serp.title') }}</span>
                {% endblock %}

                {% block sas_blog_cms_sidebar_page_serp_form %}
                    <sw-container
                        slot="content"
                        columns="100%"
                        class="sw-cms-sidebar__settings serp-preview-card"
                    >
                        <div class="serp-preview">
                            <h3>{{ blog.metaTitle }}</h3>
                            <cite>{{ blog.slug }}</cite>
                            <p>{{ blog.metaDescription }}</p>
                        </div>

                        {% block sas_blog_cms_sidebar_page_serp_meta_title_field %}
                            <sas-text-field
                                v-model="blog.metaTitle"
                                :maxLength="maximumMetaTitleCharacter"
                                :placeholder="$tc('sas-blog.detail.serp.metaTitle')">
                            </sas-text-field>
                        {% endblock %}

                        {% block sas_blog_cms_sidebar_page_serp_meta_description_field %}
                            <sas-textarea-field
                                type="textarea"
                                v-model="blog.metaDescription"
                                :maxLength="maximumMetaDescriptionCharacter"
                                :placeholder="$tc('sas-blog.detail.serp.metaDescription')">
                            </sas-textarea-field>
                        {% endblock %}
                    </sw-container>
                {% endblock %}
            </sw-sidebar-collapse>
        {% endblock %}
    </sw-sidebar-item>
{% endblock %}

{% block sw_cms_sidebar_layout_assignment %}
    {% block sas_blog_cms_sidebar_extension_component %}
        <sas-blog-extension-component-sections
            :position-identifier="positionIdentifierExtension"
            class="sas-extension-component"
        >
            <template #default="{ componentSection }">
                <sw-sidebar-item
                    v-if="componentSection"
                    :icon="componentSection.props.icon"
                    badge-type="error"
                    :title="componentSection.props.title"
                    :disabled="page.locked || disabled"
                >
                    <sw-iframe-renderer
                        :src="componentSection.src"
                        :location-id="componentSection.props.locationId"
                    ></sw-iframe-renderer>
                </sw-sidebar-item>
            </template>
        </sas-blog-extension-component-sections>
    {% endblock %}
{% endblock %}
`;var{Component:I}=Shopware,{mapPageErrors:Ue,mapPropertyErrors:qe}=I.getComponentHelper();I.extend("sas-cms-sidebar","sw-cms-sidebar",{template:L,inject:["repositoryFactory","systemConfigApiService"],props:{blog:{type:Object,default:()=>({})}},data(){return{fileAccept:"image/*",maximumMetaTitleCharacter:160,maximumMetaDescriptionCharacter:160}},created(){this.createdComponent()},mounted(){this.openBlogDetailSideBar()},computed:{blogSalesChannelIds:{get(){return this.blog.customFields?.salesChannelIds||[]},set(e){let t=null;e&&e.length>0&&(t=e),this.blog.customFields={...this.blog.customFields,salesChannelIds:t}}},salesChannelRepository(){return this.repositoryFactory.create("sales_channel")},mediaRepository(){return this.repositoryFactory.create("media")},positionIdentifierExtension(){return"sas-cms-sidebar-extension"},mediaItem(){return this.blog&&this.blog.media},...Ue(A),...qe("blog",["title","slug","teaser","authorId","publishedAt","blogCategories"])},methods:{createdComponent(){this.systemConfigApiService.getValues("SasBlogModule.config").then(e=>{this.maximumMetaTitleCharacter=e["SasBlogModule.config.maximumMetaTitleCharacter"],this.maximumMetaDescriptionCharacter=e["SasBlogModule.config.maximumMetaDescriptionCharacter"]})},onSetMediaItem({targetId:e}){return this.mediaRepository.get(e,Shopware.Context.api).then(t=>{this.blog.mediaId=e,this.blog.media=t})},setMedia([e]){this.blog.mediaId=e.id,this.blog.media=e},onRemoveMediaItem(){this.blog.mediaId=null,this.blog.media=null},onMediaDropped(e){this.onSetMediaItem({targetId:e.id})},openBlogDetailSideBar(){this.$nextTick(()=>{this.$refs.blogDetailSidebar&&typeof this.$refs.blogDetailSidebar.openContent=="function"&&this.$refs.blogDetailSidebar.openContent()})}}});Shopware.Service("privileges").addPrivilegeMappingEntry({category:"permissions",parent:"content",key:"sas-blog",roles:{viewer:{privileges:["sas_blog_entries:read","sas_blog_entries_translation:read","sas_blog_blog_category:read"],dependencies:[]},editor:{privileges:["sas_blog_entries:update","sas_blog_entries_translation:update","system_config:read"],dependencies:[]},creator:{privileges:["sas_blog_entries:create","sas_blog_entries_translation:create","sas_blog_blog_category:create","system_config:read"],dependencies:[]},deleter:{privileges:["sas_blog_entries:delete","sas_blog_entries_translation:delete"],dependencies:[]}}});Shopware.Service("privileges").addPrivilegeMappingEntry({category:"permissions",parent:"content",key:"sas-blog-author",roles:{viewer:{privileges:["sas_blog_author:read","sas_blog_author_translation:read"],dependencies:[]},editor:{privileges:["sas_blog_author:update","sas_blog_author_translation:update"],dependencies:[]},creator:{privileges:["sas_blog_author:create","sas_blog_author_translation:create"],dependencies:[]},deleter:{privileges:["sas_blog_author:delete","sas_blog_author_translation:delete"],dependencies:[]}}});Shopware.Service("privileges").addPrivilegeMappingEntry({category:"permissions",parent:"content",key:"sas-blog-category",roles:{viewer:{privileges:["sas_blog_category:read","sas_blog_category_translation:read"],dependencies:[]},editor:{privileges:["sas_blog_category:update","sas_blog_category_translation:update"],dependencies:[]},creator:{privileges:["sas_blog_category:create","sas_blog_category_translation:create"],dependencies:[]},deleter:{privileges:["sas_blog_category:delete","sas_blog_category_translation:delete"],dependencies:[]}}});var T=`{% block sas_blog_list %}
        <sw-page class="sas-blog-list">
            <template slot="smart-bar-header">
                <h2>
                    {% block sas_blog_list_smart_bar_header_title_text %}
                    {{ $tc('sas-blog.list.textBlogOverview') }}
                    {% endblock %}
                    {% block sas_blog_list_smart_bar_header_amount %}
                    <span v-if="!isLoading" class="sw-page__smart-bar-amount">
                    ({{ total }})
                </span>
                    {% endblock %}
                </h2>
            </template>
            <template #language-switch>
                <sw-language-switch @on-change="changeLanguage"></sw-language-switch>
            </template>
            {% block sas_blog_list_smart_bar_actions %}
            <template slot="smart-bar-actions">
                {% block sas_blog_list_smart_bar_actions_add %}
                <sw-button :routerLink="{ name: 'blog.module.create' }" variant="primary">
                    {{ $tc('sas-blog.list.buttonAddBlogEntry') }}
                </sw-button>
                {% endblock %}
            </template>
            {% endblock %}

            <template #sidebar>
                <sas-blog-vertical-tabs />
            </template>

            <template #side-content>
                {% block sas_blog_category_side_content %}
                <sas-blog-category-tree
                    :categoryId="categoryId"
                    :currentLanguageId="currentLanguageId"
                    @change-category-id="changeCategoryId"
                ></sas-blog-category-tree>
                {% endblock %}
            </template>

            <template #content>
                {% block sas_blog_list_content %}
                <sw-entity-listing
                    v-if="blogEntries"
                    :items="blogEntries"
                    :repository="blogEntriesRepository"
                    :showSelection="false"
                    :columns="columns"
                    detailRoute="blog.module.detail">

                    {% block sas_blog_list_grid_columns_name %}
                    <template slot="column-active" slot-scope="{ item, isInlineEdit }">
                        {% block sas_blog_list_grid_columns_name_inline_edit %}
                        <template v-if="isInlineEdit">
                            <sw-checkbox-field v-model="item.active"></sw-checkbox-field>
                        </template>
                        {% endblock %}

                        {% block sas_blog_list_grid_columns_name_content %}
                        <template v-else>
                            <sw-icon v-if="item.active" name="regular-checkmark-xs" small class="is--active"></sw-icon>
                            <sw-icon v-else name="regular-times-xs" small class="is--inactive"></sw-icon>
                        </template>
                        {% endblock %}
                    </template>
                    {% endblock %}

                    {% block sas_blog_list_grid_columns_author %}
                    <template slot="column-author" slot-scope="{ item }">
                        {% block sas_blog_list_grid_columns_author_content %}
                            <router-link :to="{ name: 'blog.module.author.detail', params: { id: item.authorId } }">
                                {{ salutation(item.blogAuthor) }}
                            </router-link>
                        {% endblock %}
                    </template>
                    {% endblock %}

                </sw-entity-listing>
                {% endblock %}

                {% block sas_blog_list_empty_state %}
                <sw-empty-state v-if="!isLoading && !total" :title="$tc('sas-blog.list.messageEmpty')">
                    {{ $tc('sas-blog-author.list.messageEmpty') }}
                </sw-empty-state>
                {% endblock %}
            </template>

        </sw-page>
{% endblock %}
`;var{Component:Ke,Mixin:M}=Shopware,h=Shopware.Data.Criteria;Ke.register("sas-blog-list",{template:T,inject:["repositoryFactory"],mixins:[M.getByName("salutation"),M.getByName("listing")],data(){return{categoryId:null,blogEntries:null,total:0,isLoading:!0,currentLanguageId:Shopware.Context.api.languageId}},metaInfo(){return{title:this.$createTitle()}},created(){this.getList()},computed:{blogEntriesRepository(){return this.repositoryFactory.create("sas_blog_entries")},blogCategoryRepository(){return this.repositoryFactory.create("sas_blog_category")},columns(){return[{property:"title",dataIndex:"title",label:this.$tc("sas-blog.list.table.title"),routerLink:"blog.module.detail",primary:!0,inlineEdit:"string"},{property:"author",label:this.$tc("sas-blog.list.table.author"),inlineEdit:!1},{property:"active",label:this.$tc("sas-blog.list.table.active"),inlineEdit:"boolean"}]}},methods:{changeLanguage(e){this.currentLanguageId=e,this.getList()},changeCategoryId(e){e&&e!==this.categoryId&&(this.categoryId=e,this.getList())},getList(){this.isLoading=!0;let e=new h(this.page,this.limit);return e.addAssociation("blogAuthor"),e.addAssociation("blogCategories"),e.addSorting(h.sort("publishedAt","DESC",!1)),this.categoryId&&e.addFilter(h.equals("blogCategories.id",this.categoryId)),this.blogEntriesRepository.search(e,Shopware.Context.api).then(t=>{this.total=t.total,this.blogEntries=t,this.isLoading=!1})}}});var B="";var{Component:Ye}=Shopware;Ye.extend("sas-blog-create","sas-blog-detail",{template:B,methods:{async createdComponent(){Shopware.State.commit("adminMenu/collapseSidebar");let e=Shopware.State.getters["context/isSystemDefaultLanguage"];this.$store.commit("cmsPageState/setIsSystemDefaultLanguage",e),e||Shopware.State.commit("context/resetLanguageToDefault"),Shopware.Context.api.languageId!==Shopware.Context.api.systemLanguageId&&Shopware.State.commit("context/setApiLanguageId",Shopware.Context.api.languageId),this.resetCmsPageState(),this.createPage(),this.createBlog(this.page.id),this.isLoading=!1,this.setPageContext()},createBlog(e){this.blog=this.blogRepository.create(),this.blog.cmsPageId=e,this.blogId=this.blog.id}}});var O=Ie($());var P=`{% block sw_cms_detail_toolbar_page_name %}
    <h2 class="sw-cms-detail__page-name">
        {{ placeholder(blog, 'title') }}
    </h2>
{% endblock %}

{% block sw_cms_detail_toolbar_language_switch %}
    <sw-language-switch
        slot="language-switch"
        :disabled="isLoading"
        :save-changes-function="saveOnLanguageChange"
        @on-change="onChangeLanguage"
    />
{% endblock %}

{% block sw_cms_detail_toolbar_back_button %}
    <router-link
        :to="backPath"
        class="sw-cms-detail__back-btn"
    >
        <sw-icon name="regular-times" />
    </router-link>
{% endblock %}

{% block sw_cms_detail_toolbar_page_type %}
{% endblock %}

{% block sw_cms_detail_toolbar_actions_save %}
    <sw-button-process
        v-tooltip.bottom="tooltipSave"
        class="sw-cms-detail__save-action"
        :is-loading="isLoading"
        :process-success="isSaveSuccessful"
        :disabled="isLoading || page.locked"
        variant="primary"
        @process-finish="saveFinish"
        @click="onSaveBlog"
    >
        {{ $tc('sw-cms.detail.label.buttonSave') }}
    </sw-button-process>
{% endblock %}


{% block sw_cms_detail_stage_empty_stade_content %}
    <div class="sw-cms-detail__empty-stage-content">
        <h2 class="sw-cms-detail__empty-stage-headline">
            {{ $tc('sw-cms.detail.label.headlineEmptyState') }}
        </h2>
        <p class="sw-cms-detail__empty-stage-claim">
            {{ $tc('sw-cms.detail.label.claimEmptyState') }}
        </p>
        <sw-cms-stage-add-section
            ref="cmsStageAddSection"
            :key="0"
            :force-choose="true"
            @stage-section-add="addAdditionalSection($event, 0)"
        />
    </div>
{% endblock %}
{% block sw_cms_detail_stage_add_first_section %}
    <sw-cms-stage-add-section
        :key="0"
        @stage-section-add="addAdditionalSection($event, 0)"
    />
{% endblock %}
{% block sw_cms_detail_stage_add_last_section %}
    <sw-cms-stage-add-section
        :key="page.sections.length + 1"
        @stage-section-add="addAdditionalSection($event, page.sections.length)"
    />
{% endblock %}


{% block sw_cms_detail_stage_content_section %}
    <sas-cms-section
        class="sw-cms-stage-section sas-blog-cms-stage-section"
        :key="section.id"
        :page="page"
        :section="section"
        :active="selectedSection !== null && selectedSection.id === section.id"
        @page-config-open="pageConfigOpen"
        @block-duplicate="onBlockDuplicate"
    />
{% endblock %}

{% block sw_cms_detail_sidebar %}
    <sas-cms-sidebar
        v-if="blog"
        ref="cmsSidebar"
        :page="page"
        :blog="blog"
        :demo-entity="currentMappingEntity"
        :demo-entity-id-prop="demoEntityId"
        @demo-entity-change="onDemoEntityChange"
        @block-duplicate="onBlockDuplicate"
        @section-duplicate="onSectionDuplicate"
        @block-stage-drop="onPageUpdate"
        @block-navigator-sort="onBlockNavigatorSort"
        @page-type-change="onPageTypeChange"
        @page-update="onPageUpdate"
        @page-save="onPageSave"
        @open-layout-assignment="onOpenLayoutAssignment"
    />
{% endblock %}

`;function Ze(e){let t=Shopware.Context.app.config.version;return G(t,e,">=")}function G(e,t,a){let s,i=0;e=N(e),t=N(t);let l=Math.max(e.length,t.length);for(s=0;s<l;s++)if(e[s]!==t[s]){if(e[s]=D(e[s]),t[s]=D(t[s]),e[s]<t[s]){i=-1;break}else if(e[s]>t[s]){i=1;break}}if(!a)return i;switch(a){case">":case"gt":return i>0;case">=":case"ge":return i>=0;case"<=":case"le":return i<=0;case"===":case"=":case"eq":return i===0;case"<>":case"!==":case"ne":return i!==0;case"":case"<":case"lt":return i<0;default:return null}}var Je={dev:-6,alpha:-5,a:-5,beta:-4,b:-4,RC:-3,rc:-3,"#":-2,p:1,pl:1};function N(e){return e.length?(e=(""+e).replace(/[_\-+]/g,"."),e=e.replace(/([^.\d]+)/g,".$1.").replace(/\.{2,}/g,"."),e.split(".")):[-8]}function D(e){return e?isNaN(e)?Je[e]||-7:parseInt(e,10):0}var z={versionGTE:Ze,versionCompare:G};var{Component:Qe,Data:Xe,Utils:U,Classes:et,ExtensionAPI:R,State:r,Context:n}=Shopware,{Criteria:g}=Xe,{debounce:F}=U,{cloneDeep:tt}=U.object,{ShopwareError:st}=et,V=300;Qe.extend("sas-blog-detail","sw-cms-detail",{template:P,data(){return{blogId:null,blog:null,originalSlug:null,isLoading:!1,localeLanguage:null,showSectionModal:!1,sectionDontRemind:!1}},computed:{identifier(){return this.placeholder(this.blog,"title")},blogRepository(){return this.repositoryFactory.create("sas_blog_entries")},localeRepository(){return this.repositoryFactory.create("locale")},loadBlogCriteria(){let e=new g(1,1),t=g.sort("position","ASC",!0);return e.addAssociation("blogCategories").getAssociation("cmsPage").getAssociation("sections").addSorting(t).addAssociation("backgroundMedia").getAssociation("blocks").addSorting(t).addAssociation("backgroundMedia").addAssociation("slots"),e},backPath(){return this.$route.query.ids&&this.$route.query.ids.length>0?{name:"blog.module.index",query:{ids:this.$route.query.ids,limit:this.$route.query.limit,page:this.$route.query.page}}:{name:"blog.module.index"}},isCreateMode(){return this.$route.name==="blog.module.create"}},watch:{"blog.title":function(e){this.onBlogTitleChanged(e)}},methods:{async createdComponent(){this.publishExtensionData(),r.commit("adminMenu/collapseSidebar");let e=r.getters["context/isSystemDefaultLanguage"];this.$store.commit("cmsPageState/setIsSystemDefaultLanguage",e),this.resetCmsPageState(),this.$route.params.id&&(this.isLoading=!0,this.blogId=this.$route.params.id,await this.loadBlog(this.blogId)),this.setPageContext()},publishExtensionData(){R.publishData({id:"sas-blog-detail__page",path:"page",scope:this}),R.publishData({id:"sas-blog-detail__blog",path:"blog",scope:this})},onBlockNavigatorSort(e=!1){if(e){this.loadPage(this.pageId);return}this.onPageUpdate(),this.debouncedPageSave()},debouncedPageSave:F(function(){this.onSave()},V),loadBlog(e){return this.isLoading=!0,this.blogRepository.get(e,n.api,this.loadBlogCriteria).then(t=>(this.blog=t,this.originalSlug=t.slug,t.cmsPageId?(this.page=t.cmsPage,this.pageId=t.cmsPageId,delete this.blog.cmsPage,this.loadCMSDataResolver()):(this.isLoading=!1,this.createPage(t.title),this.blog.cmsPageId=this.page.id,this.blogId=t.id,Promise.resolve()))).catch(t=>{this.isLoading=!1,this.createNotificationError({title:t.message,message:t.response})})},onPageSave(e=!1){if(this.onPageUpdate(),e){this.debouncedPageSave();return}this.onSaveBlog()},addAdditionalSection(e,t){return this.blogIsValid()?(this.onAddSection(e,t),this.onSaveBlog()):(this.createNotificationError({message:this.$tc("sas-blog.detail.notification.error.pageInvalid")}),this.$nextTick(()=>{this.$refs.cmsStageAddSection&&(this.$refs.cmsStageAddSection.showSelection=!0)}),Promise.reject())},async onChangeLanguage(){return this.isLoading=!0,this.salesChannelRepository.search(new g).then(e=>{this.salesChannels=e;let t=r.getters["context/isSystemDefaultLanguage"];return this.$store.commit("cmsPageState/setIsSystemDefaultLanguage",t),this.loadBlog(this.blogId)})},saveOnLanguageChange(){return this.onSaveBlog()},loadCMSDataResolver(){return this.isLoading=!0,this.cmsDataResolverService.resolve(this.page).then(()=>{if(this.updateSectionAndBlockPositions(),r.commit("cmsPageState/setCurrentPage",this.page),this.updateDataMapping(),this.pageOrigin=tt(this.page),this.selectedBlock){let e=this.selectedBlock.id,t=this.selectedBlock.sectionId;this.page.sections.forEach(a=>{a.id===t&&a.blocks.forEach(s=>{s.id===e&&this.setSelectedBlock(t,s)})})}this.isLoading=!1}).catch(e=>{this.isLoading=!1,this.createNotificationError({title:e.message,message:e.response}),warn(this._name,e.message,e.response)})},onSaveBlog(){return this.blogIsValid()?this.cmsPageIsValid()?this.showMissingElementModal?Promise.reject():this.onSavePageEntity().then(()=>this.onSaveBlogEntity()).then(()=>this.loadBlog(this.blogId)).catch(e=>(this.isLoading=!1,this.createNotificationError({message:e.message}),Promise.reject(e))):(this.createNotificationError({message:this.$tc("sas-blog.detail.notification.error.pageInvalid")}),Promise.reject()):(this.createNotificationError({message:this.$tc("sas-blog.detail.notification.error.pageInvalid")}),Promise.reject())},onSaveBlogEntity(){return this.isLoading=!0,this.blogRepository.save(this.blog,n.api).catch(e=>(this.createNotificationError({message:e.message}),Promise.reject(e))).finally(()=>{this.isLoading=!1})},onSavePageEntity(){return this.isLoading=!0,this.deleteEntityAndRequiredConfigKey(this.page.sections),this.pageRepository.save(this.page,n.api,!1).then(()=>(this.isLoading=!1,this.isSaveSuccessful=!0,Promise.resolve())).catch(e=>(this.isLoading=!1,this.createNotificationError({message:e.message}),Promise.reject(e)))},blogIsValid(){return r.dispatch("error/resetApiErrors"),[this.missingTitleValidation(),this.missingPublishedAtValidation(),this.missingAuthorIdValidation(),this.missingCategoriesValidation()].every(e=>e)},missingTitleValidation(){return!this.isSystemDefaultLanguage||this.blog.title?!0:(this.addBlogError({property:"title",message:this.$tc("sw-cms.detail.notification.messageMissingFields")}),!1)},missingPublishedAtValidation(){return this.blog.publishedAt?!0:(this.addBlogError({property:"publishedAt",message:this.$tc("sw-cms.detail.notification.messageMissingFields")}),!1)},missingAuthorIdValidation(){return this.blog.authorId?!0:(this.addBlogError({property:"authorId",message:this.$tc("sw-cms.detail.notification.messageMissingFields")}),!1)},missingCategoriesValidation(){return this.blog.blogCategories&&this.blog.blogCategories.length?!0:(this.addBlogError({property:"blogCategories",message:this.$tc("sw-cms.detail.notification.messageMissingFields")}),!1)},cmsPageIsValid(){return z.versionGTE("6.4.8.0")?this.cmsPageIsValidV648():this.cmsPageIsValidV640()},cmsPageIsValidV648(){return this.pageIsValid()},cmsPageIsValidV640(){if(this.isSystemDefaultLanguage&&!this.page.name||!this.page.type){this.pageConfigOpen();let t=this.$tc("sw-cms.detail.notification.messageMissingFields");return this.createNotificationError({message:t}),!1}let{foundEmptyRequiredField:e}=this.getSlotValidations(this.page.sections);if(e.length>0){let t=this.$tc("sw-cms.detail.notification.messageMissingBlockFields");return this.createNotificationError({message:t}),!1}return!0},pageSectionCountValidation(){return!0},onBlogTitleChanged:F(function(e){e&&(this.page.name=e,this.getLocaleLanguage(),this.generateSlug(e))},V),addBlogError({property:e=null,payload:t={},code:a=c.REQUIRED_FIELD_ERROR_CODE,message:s=""}={}){let i=`sas_blog_entries.${this.blog.id}.${e}`,l=new st({code:a,detail:s,meta:{parameters:t}});r.commit("error/addApiError",{expression:i,error:l})},getLocaleLanguage(){return this.localeRepository.get(n.api.language.localeId,n.api).then(e=>(this.localeLanguage=e.code.substr(0,e.code.length-3).toLowerCase(),Promise.resolve(this.localeLanguage)))},generateSlug(e){if(!e)return;let t=(0,O.default)(e,{locale:this.localeLanguage,lower:!0});if(!this.localeLanguage){this.blog.slug=t;return}let a=new g;a.addFilter(g.equals("slug",t)),this.blogRepository.search(a,n.api).then(s=>{let i=s.length,l=this.originalSlug!==t;i&&l?this.blog.slug=t+"-1":this.blog.slug=t}).catch(()=>{this.blog.slug=t})},createPage(e){this.page=this.pageRepository.create(),this.page.name=e,this.page.type=c.PAGE_TYPES.BLOG_DETAIL,this.page.sections=[],this.pageId=this.page.id}}});var q={"sas-blog":{general:{mainMenuItemGeneral:"Blog",mainMenuItemList:"Blog",mainMenuItemAdd:"Blog Eintrag anlegen",descriptionTextModule:"Verwaltung von Blog Eintr\xE4ge.",placeholderSearchBar:"Durchsuche alle Eintr\xE4ge",tooltipLanguageSwitch:"Du musst zuerst einen Eintrag in der Systemsprache anlegen"},list:{textBlogOverview:"Blog Eintr\xE4ge",buttonAddBlogEntry:"Blog Eintrag erstellen",messageEmpty:"Keine Eintr\xE4ge vorhanden",table:{title:"Titel",active:"Aktiv",author:"Autor"}},detail:{sidebar:{heading:"Blog detail",basicInformation:"Grundlegende Information",settings:"Einstellungen"},saveBlogEntry:"Eintrag speichern",buttonCancel:"Abbrechen",activeLabel:"Artikel aktiv",contentLabel:"Markdown Inhalt",slugLabel:"Slug",slugPlaceholder:"Undefiniert",titleLabel:"Titel",mediaLabel:"Teaser Image",teaserLabel:"Teaser",teaserImageLabel:"Teaser Bild",teaserPlaceholder:"Der Teaser Text, welcher im Blog Listing angezeigt wird ...",editorCardTitle:"Dein Artikel",editorLabel:"Blog Inhalt",editorPlaceholder:"Starte deinen Blog Beitrag ...",publishedAtLabel:"Erstellungsdatum",visibility:{label:"Artikel aktiv"},detailTeaser:{label:"Zeige Teaser Image auf Detailseite"},editor:{headerPlaceholder:"\xDCberschrift",paragraphPlaceholder:"Fange an zu schreiben ...",warningTitle:"Titel der Warnung",warningMessage:"Deine Warnung ...",quotePlaceholder:"Verrate mir dein Zitat ...",quoteCaption:"... und den Autor"},notification:{"save-success":{title:"Erfolreich!",text:"Dein Blog Artikel wurde gespeichert."},error:{missingCategory:"Bitte w\xE4hle mind. eine Kategorie!",pageInvalid:"Einige Fehler sind aufgetreten. Bitte \xFCberpr\xFCfe die Liste im Editor."}},author:{label:"Autor",placeholder:"W\xE4hle einen Autor"},category:{label:"Kategorien",placeholder:"W\xE4hle eine Kategorie"},salesChannels:{labelSalesChannels:"Verkaufskanal",placeholderSalesChannels:"W\xE4hle Verkaufskan\xE4le aus ..."}},elements:{listing:{config:{paginationCount:"Pagination count",showFilter:{label:"Zeige Filter",options:{all:"Alle",select:"Filter ausw\xE4hlen",filter:{category:"Zeige Kategorie Filter",author:"Zeige Autor Filter"}}},showType:{label:"Anzeigetyp",options:{all:"Alle",select:"Kategorien ausw\xE4hlen"}},blogCategories:{label:"Kategorien",placeholder:"Kategorien ausw\xE4hlen"}},component:{elementHeadline:"Blog Listen Element",infoText:"Der Blog Listen Inhalt wird automatisch in der Storefront ausgespielt."}},detail:{config:{showMeta:{label:"Detail Ansicht Meta Informationen",showAuthor:"Zeige Autor",showCategory:"Zeige Kategorie"}},component:{elementHeadline:"Blog Detail Element",infoText:"Der Blog Inhalt wird automatisch in der Storefront ausgespielt. Derzeit gibt es keine Element Konfiguration."}},"single-select":{label:"Blog Single Select",selectFieldLabel:"W\xE4hle einen Blog Eintrag",previewText:"Lorem Ipsum Dolor"},newestListing:{config:{itemCount:"Anzahl der Artikel",showType:{label:"Typ anzeigen",options:{all:"Alle",select:"Kategorien ausw\xE4hlen"}},blogCategories:{label:"Kategorien",placeholder:"Kategorien ausw\xE4hlen"}},component:{elementHeadline:"Blog neuestes Listenelement",infoText:"Der Inhalt des Blogs mit den neuesten Eintr\xE4gen wird automatisch von diesem Element abgerufen."},preview:{label:"Blog Neueste Auflistung"}}},blocks:{blog:{listing:{previewTitle:"Blog Liste",label:"Blog Listen Ansicht"},detail:{previewTitle:"Blog Detail",label:"Blog Detail"},singleEntry:{previewTitle:"Einzelner Blogeintrag",label:"Einzelner Blogeintrag"},newestListing:{previewTitle:"Blog Neueste Auflistung",label:"Blog Neueste Auflistung"}}}},"sas-blog-category":{general:{treeHeadline:"Blog Kategorien",mainMenuItemIndex:"Kategorien",mainMenuItemList:"Overview",descriptionTextModule:"Verwalte hier deine Kategorien.",headlineCategories:"Kategorien",placeholderSearchBar:"Suche in Kategorien...",buttonCreate:"Kategorie erstellen",buttonSafeCategory:"Speichern",descriptionLabel:"Beschreibung",messageSaveSuccess:'Kategorie "{name}" wurde gespeichert.',useAsLogo:"Use as display image",treeHeadSelected:"{count} ausgew\xE4hlt",emptyStateHeadline:"Keine Kategorie ausgew\xE4hlt",actions:{actionsDisabledInLanguage:"Kategorien k\xF6nnen nur in der Default Sprache erstellt werden.",createSub:"Neue Unterkategorie",createBefore:"Neue Kategorie davor",createAfter:"Neue Kategorie danach"}},modal:{textDeleteMultipleConfirm:"M\xF6chtest Du diese {count} blogs Kategorien wirklich l\xF6schen?"}},"sas-blog-author":{general:{mainMenuItemList:"Autor"},list:{textBlogOverview:"Autoren",buttonAdd:"Autor erstellen",messageEmpty:"Keine Autoren ...",table:{fullName:"Voller Name",displayName:"Anzeigename",email:"Email",salutation:"Anrede"}},detail:{title:"Autor",messageSaveSuccess:'Autor "{name}" wurde gespeichert.',buttonSave:"Speichern",buttonCancel:"Abbrechen",buttonEdit:"Editieren",firstName:{label:"Vorname",placeholder:"Gebe den Vornamen des Autors ein"},lastName:{label:"Nachname",placeholder:"Gebe den Nachnamen des Autors ein"},displayName:{label:"Anzeigename",placeholder:"Gebe den Anzeigenamen des Autors ein"},email:{label:"Email",placeholder:"Gebe die Email Adresse des Autors ein"},description:{label:"Beschreibung",placeholder:"Gebe eine kurze Beschreibung des Autors ein"},salutation:{label:"Anrede",placeholder:"Anrede"},media:{label:"Avatar des Autors"}}},"sas-blog-tree-item":{actions:{edit:"Editieren"}},"sw-privileges":{permissions:{"sas-blog":{label:"Blog"},"sas-blog-author":{label:"Blog Autor"},"sas-blog-category":{label:"Blog Kategorien"}}}};var j={"sas-blog":{general:{mainMenuItemGeneral:"Blog",mainMenuItemList:"Blog",mainMenuItemAdd:"New blog entry",descriptionTextModule:"Verwaltung von Blog Eintr\xE4ge.",placeholderSearchBar:"Search all blog entries",tooltipLanguageSwitch:"Create an entry first in the system language"},list:{textBlogOverview:"Blog entries",buttonAddBlogEntry:"Create blog entry",messageEmpty:"No blog entries ...",table:{title:"Title",active:"Active",author:"Author"}},detail:{serp:{title:"SERP preview",metaDescription:"Meta Description",metaTitle:"Meta Title"},sidebar:{heading:"Blog detail",basicInformation:"Basic information",settings:"Settings"},saveBlogEntry:"Save entry",buttonCancel:"Cancel",activeLabel:"Entry active",contentLabel:"Markdown content",slugLabel:"Slug",slugPlaceholder:"Undefined",titleLabel:"Title",mediaLabel:"Teaser Image",titlePlaceholder:"Enter your blog title",teaserLabel:"Teaser",teaserImageLabel:"Teaser Image",teaserPlaceholder:"The teaser text which will be shown as an introduction within the blog listing ...",editorCardTitle:"Your article",editorLabel:"Blog Content",editorPlaceholder:"Start your blog post ...",publishedAtLabel:"Published at",visibility:{label:"Article active"},detailTeaser:{label:"Show teaser image on detail page"},editor:{headerPlaceholder:"Type in your heading text",paragraphPlaceholder:"Start typing ...",warningTitle:"Warning title",warningMessage:"Write your warning message ...",quotePlaceholder:"Tell me about your quote ...",quoteCaption:"... the caption"},notification:{"save-success":{title:"Success!",text:"Your blog entry has been saved."},error:{missingCategory:"Please choose at least one blog category!",pageInvalid:"Errors occured. Please check the error list in the editor."}},author:{label:"Author",placeholder:"Select a blog's author"},category:{label:"Categories",placeholder:"Select blog's categories"},salesChannels:{labelSalesChannels:"Sales Channel",placeholderSalesChannels:"Add Sales Channels..."},warning:{maxTextCountReached:"There're {charLeft} character(s) left"}},elements:{listing:{config:{paginationCount:"Pagination count",showFilter:{label:"Listing filter",options:{all:"All",select:"Select filter",filter:{category:"Show Category filter",author:"Show Author filter"}}},showType:{label:"Show type",options:{all:"All",select:"Select categories"}},blogCategories:{label:"Categories",placeholder:"Select categories"}},component:{elementHeadline:"Blog listing element",infoText:"The blog listing content will be automatically fetched by the element."}},detail:{config:{showMeta:{label:"Detail view meta information",showAuthor:"Show author",showCategory:"Show category"}},component:{elementHeadline:"Blog detail element",infoText:"The blog detail content will be automatically fetched by the element. There's currently no configuration available."}},"single-select":{label:"Blog Single Select",selectFieldLabel:"Select a blog entry",previewText:"Lorem Ipsum Dolor"},newestListing:{config:{itemCount:"Item count",showType:{label:"Show type",options:{all:"All",select:"Select categories"}},blogCategories:{label:"Categories",placeholder:"Select categories"}},component:{elementHeadline:"Blog newest listing element",infoText:"The blog newest listing content will be automatically fetched by the element."},preview:{label:"Blog Newest Listing"}}},blocks:{blog:{listing:{previewTitle:"Blog Listing",label:"Blog Listing"},detail:{previewTitle:"Blog Detail View",label:"Blog Detail"},singleEntry:{previewTitle:"Single Blog Entry",label:"Single Blog Entry"},newestListing:{previewTitle:"Blog Newest Listing",label:"Blog Newest Listing"}}}},"sw-seo-url-template-card":{routeNames:{"sas-frontend-blog-detail":"Blog Detail Page"}},"sas-blog-category":{general:{treeHeadline:"Blog categories",mainMenuItemIndex:"Categories",mainMenuItemList:"Overview",descriptionTextModule:"Manage categories here.",headlineCategories:"Categories",placeholderSearchBar:"Search categories...",buttonCreate:"Create category",buttonSafeCategory:"Save",descriptionLabel:"Description",messageSaveSuccess:'Category "{name}" has been saved.',useAsLogo:"Use as display image",treeHeadSelected:"{count} selected",emptyStateHeadline:"No category selected",actions:{actionsDisabledInLanguage:"Categories can only be created in the default language.",createSub:"New subcategory",createBefore:"New category before",createAfter:"New category after"}},modal:{textDeleteMultipleConfirm:"Are you sure you want to delete the {count} selected blogs?"}},"sas-blog-author":{general:{mainMenuItemList:"Author"},list:{textBlogOverview:"Blog authors",buttonAdd:"Add new blog author",messageEmpty:"No blog authors ...",table:{fullName:"Full name",displayName:"Display name",email:"Email",salutation:"Salutation"}},detail:{title:"Blog author",messageSaveSuccess:'Author "{name}" has been saved.',buttonSave:"Save",buttonCancel:"Cancel",buttonEdit:"Edit",firstName:{label:"First Name",placeholder:"Enter author's first name"},lastName:{label:"Last Name",placeholder:"Enter author's last name"},displayName:{label:"Display Name",placeholder:"Enter author's display name"},email:{label:"Email",placeholder:"Enter author's email"},description:{label:"Description",placeholder:"Enter author's short description"},salutation:{label:"Salutation",placeholder:"Salutation"},media:{label:"Author's avatar"}}},"sas-blog-tree-item":{actions:{edit:"Edit"}},"sw-privileges":{permissions:{"sas-blog":{label:"Blog"},"sas-blog-author":{label:"Author Blog"},"sas-blog-category":{label:"Category Blog"}}}};var K=`{% block sas_cms_block_listing %}
    <div class="sas-cms-block-listing">
        <slot name="listing"></slot>
    </div>
{% endblock %}
`;Shopware.Component.register("sw-cms-block-blog-listing",{template:K});var H=`{% block sas_cms_preview_blog_listing %}
    <div class="sas-cms-preview-blog-listing">
       <div class="sas-cms-preview-blog-listing-item">
           <h2>{{ $tc('sas-blog.blocks.blog.listing.previewTitle') }}</h2>
           <div>
               <time>{{ today }}</time>
               <div></div>
               <div></div>
           </div>
           <div>
               <time>{{ today }}</time>
               <div></div>
               <div></div>
           </div>
       </div>
    </div>
{% endblock %}
`;Shopware.Component.register("sas-cms-preview-blog-listing",{template:H,computed:{today(){return new Date().toLocaleDateString()}}});Shopware.Service("cmsService").registerCmsBlock({name:"blog-listing",label:"sas-blog.blocks.blog.listing.label",category:"sas-blog",component:"sas-cms-block-blog",previewComponent:"sas-cms-preview-blog-listing",defaultConfig:{marginBottom:"0px",marginTop:"0px",marginLeft:"0px",marginRight:"0px",sizingMode:"boxed"},slots:{listing:"blog"}});var Y=`{% block sas_cms_block_detail %}
    <div class="sas-cms-block-detail">
        <slot name="blogDetail"></slot>
    </div>
{% endblock %}
`;Shopware.Component.register("sw-cms-block-blog-detail",{template:Y});var W=`{% block sas_cms_preview_blog_detail %}
    <div class="sas-cms-preview-blog-detail">
       <div class="sas-cms-preview-blog-detail-item">
           <h2>{{ $tc('sas-blog.blocks.blog.detail.previewTitle') }}</h2>
           <div>
               <time>{{ today }}</time>
               <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                   sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                   sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
           </div>
       </div>
    </div>
{% endblock %}
`;Shopware.Component.register("sas-cms-preview-blog-detail",{template:W,computed:{today(){return new Date().toLocaleDateString()}}});Shopware.Service("cmsService").registerCmsBlock({name:"blog-detail",label:"sas-blog.blocks.blog.detail.label",category:"sas-blog",component:"sas-cms-block-blog-detail",previewComponent:"sas-cms-preview-blog-detail",defaultConfig:{marginBottom:"0px",marginTop:"0px",marginLeft:"0px",marginRight:"0px",sizingMode:"boxed"},slots:{blogDetail:"blog-detail"}});var Z=`{% block sas_cms_block_blog_single_entry %}
    <div class="sas-cms-block-blog-single-entry">
        <slot name="singleEntry"></slot>
    </div>
{% endblock %}
`;Shopware.Component.register("sw-cms-block-blog-single-entry",{template:Z});var J=`{% block sas_cms_preview_blog_single_entry %}
    <div class="sas-cms-preview-blog-single-entry">
       <div class="sas-cms-preview-blog-single-entry-item">
           <h2>{{ $tc('sas-blog.blocks.blog.singleEntry.previewTitle') }}</h2>
           <div>
               <time>{{ today }}</time>
               <div></div>
               <div></div>
           </div>
       </div>
    </div>
{% endblock %}
`;Shopware.Component.register("sas-cms-preview-blog-single-entry",{template:J,computed:{today(){return new Date().toLocaleDateString()}}});Shopware.Service("cmsService").registerCmsBlock({name:"blog-single-entry",label:"sas-blog.blocks.blog.singleEntry.label",category:"sas-blog",component:"sas-cms-block-blog-single-entry",previewComponent:"sas-cms-preview-blog-single-entry",defaultConfig:{marginBottom:"0px",marginTop:"0px",marginLeft:"0px",marginRight:"0px",sizingMode:"boxed"},slots:{singleEntry:{type:"blog-single-select",default:{config:{blogEntry:{source:"static",value:null}}}}}});var Q=`{% block sas_cms_block_newest_listing %}
    <div class="sas-cms-block-newest-listing">
        <slot name="listing"></slot>
    </div>
{% endblock %}
`;var{Component:mt}=Shopware;mt.register("sw-cms-block-blog-newest-listing",{template:Q});var X=`{% block sas_cms_preview_newest_listing %}
<div class="sas-cms-preview-newest-listing">
    <div class="sas-cms-preview-newest-listing-item">
        <h2>{{ $tc('sas-blog.blocks.blog.newestListing.previewTitle') }}</h2>
        <div>
            <div></div>
            <div></div>
        </div>
        <div>
            <div></div>
            <div></div>
        </div>
    </div>
</div>
{% endblock %}
`;var{Component:ht}=Shopware;ht.register("sas-cms-preview-newest-listing",{template:X});Shopware.Service("cmsService").registerCmsBlock({name:"blog-newest-listing",label:"sas-blog.blocks.blog.newestListing.label",category:"sas-blog",component:"sas-cms-block-newest-listing",previewComponent:"sas-cms-preview-newest-listing",defaultConfig:{marginBottom:"0px",marginTop:"0px",marginLeft:"0px",marginRight:"0px",sizingMode:"boxed"},slots:{listing:"blog-newest-listing"}});var ee=`{% block sas_cms_element_blog_detail %}
    <div class="sas-cms-el-blog-detail">
        <h2>{{ $tc('sas-blog.elements.detail.component.elementHeadline') }}</h2>
        <sw-alert variant="info">
            {{ $tc('sas-blog.elements.detail.component.infoText') }}
        </sw-alert>
    </div>
{% endblock %}
`;var{Mixin:ut}=Shopware;Shopware.Component.register("sas-blog-el-blog-detail",{template:ee,mixins:[ut.getByName("cms-element")],created(){this.createdComponent()},methods:{createdComponent(){this.initElementConfig("blog-detail")}}});var te=`{% block sas_cms_element_blog_detail_config %}
<div class="sw-cms-el-config-blog-detail">

    {% block sas_cms_element_blog_detail_config_show_meta %}
        <sw-card
            :title="$tc('sas-blog.elements.detail.config.showMeta.label')"
            :hero="false"
            :isLoading="false"
            :large="false"
            class="sw-blog-detail-config-filter">

            <sw-checkbox-field
                :label="$tc('sas-blog.elements.detail.config.showMeta.showAuthor')"
                v-model="element.config.showAuthor.value">
            </sw-checkbox-field>

            <sw-checkbox-field
                :label="$tc('sas-blog.elements.detail.config.showMeta.showCategory')"
                v-model="element.config.showCategory.value">
            </sw-checkbox-field>
        </sw-card>
    {% endblock %}

</div>
{% endblock %}
`;var{Component:_t,Mixin:ft}=Shopware;_t.register("sw-cms-el-config-blog-detail",{template:te,inject:["repositoryFactory"],mixins:[ft.getByName("cms-element")],created(){this.createdComponent()},methods:{createdComponent(){this.initElementConfig("blog")}}});var se=`{% block sas_blog_element_previews %}
    <div class="sw-cms-el-preview-text">
        <h2>Lorem ipsum dolor</h2>
        <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
            sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.
        </p>
    </div>
{% endblock %}
`;Shopware.Component.register("sas-blog-el-blog-detail-preview",{template:se});Shopware.Service("cmsService").registerCmsElement({name:"blog-detail",label:"Blog Detail",component:"sas-blog-el-blog-detail",configComponent:"sw-cms-el-config-blog-detail",previewComponent:"sas-blog-el-blog-detail-preview",defaultConfig:{showCategory:{source:"static",value:!0},showAuthor:{source:"static",value:!0}}});var ae=`{% block sas_cms_element_blog_listing %}
    <div class="sas-cms-el-blog-listing">
        <h2>{{ $tc('sas-blog.elements.listing.component.elementHeadline') }}</h2>
        <sw-alert variant="info">
            {{ $tc('sas-blog.elements.listing.component.infoText') }}
        </sw-alert>
    </div>
{% endblock %}
`;var{Mixin:xt}=Shopware;Shopware.Component.register("sw-cms-el-blog",{template:ae,mixins:[xt.getByName("cms-element")],created(){this.createdComponent()},methods:{createdComponent(){this.initElementConfig("blog")}}});var ie=`{% block sas_cms_element_blog_listing_config %}
<div class="sw-cms-el-config-blog">

    {% block sas_cms_element_blog_listing_config_paginationCount_field %}
        <sw-number-field
            numberType="int"
            :step="1"
            :min="1"
            :max="null"
            v-model="element.config.paginationCount.value"
            :digits="2"
            :allowEmpty="false"
            :label="$tc('sas-blog.elements.listing.config.paginationCount')">
        </sw-number-field>
    {% endblock %}

    {% block sas_cms_element_blog_listing_config_show_type %}
        <sw-select-field :label="$tc('sas-blog.elements.listing.config.showType.label')"
                         v-model="element.config.showType.value">
            {% block sas_cms_element_download_card_config_layout_select_options %}
                <option value="all">{{ $tc('sas-blog.elements.listing.config.showType.options.all') }}</option>
                <option value="select">{{ $tc('sas-blog.elements.listing.config.showType.options.select') }}</option>
            {% endblock %}
        </sw-select-field>
    {% endblock %}


    {% block sas_cms_element_blog_listing_config_select_categories %}
        <sas-blog-category-tree-field
            v-if="element.config.showType.value !== 'all' && selectedCategories"
            v-model="selectedCategories"
            :label="$tc('sas-blog.elements.listing.config.blogCategories.label')"
            :categoriesCollection="selectedCategories"
            class="sw-product-detail__select-category"
            :placeholder="$tc('sas-blog.elements.listing.config.blogCategories.placeholder')">
        </sas-blog-category-tree-field>
    {% endblock %}

    {% block sas_cms_element_blog_listing_config_show_filter_select %}
        <sw-card
            :title="$tc('sas-blog.elements.listing.config.showFilter.label')"
            :hero="false"
            :isLoading="false"
            :large="false"
            class="sw-blog-config-filter">

            <sw-checkbox-field
                :label="$tc('sas-blog.elements.listing.config.showFilter.options.filter.category')"
                v-model="element.config.showCategoryFilter.value">
            </sw-checkbox-field>

            <sw-checkbox-field
                :label="$tc('sas-blog.elements.listing.config.showFilter.options.filter.author')"
                v-model="element.config.showAuthorFilter.value">
            </sw-checkbox-field>
        </sw-card>
    {% endblock %}

</div>
{% endblock %}
`;var{Component:Ct,Mixin:kt}=Shopware,{EntityCollection:Et,Criteria:oe}=Shopware.Data;Ct.register("sw-cms-el-config-blog",{template:ie,inject:["repositoryFactory"],mixins:[kt.getByName("cms-element")],data(){return{categories:[],selectedCategories:null}},computed:{blogCategoryRepository(){return this.repositoryFactory.create("sas_blog_category")},blogListingSelectContext(){let e=Object.assign({},Shopware.Context.api);return e.inheritance=!0,e},blogCategoriesConfigValue(){return this.element.config.blogCategories.value}},watch:{selectedCategories:{handler(e){this.element.config.blogCategories.value=e.getIds(),this.$set(this.element.data,"blogCategories",e),this.$emit("element-update",this.element)}}},created(){this.createdComponent()},methods:{async createdComponent(){this.initElementConfig("blog"),await this.getSelectedCategories()},getSelectedCategories(){if(Shopware.Utils.types.isEmpty(this.blogCategoriesConfigValue))this.selectedCategories=new Et(this.blogCategoryRepository.route,this.blogCategoryRepository.schema.entity,Shopware.Context.api,new oe);else{let e=new oe;e.setIds(this.blogCategoriesConfigValue),this.blogCategoryRepository.search(e,Shopware.Context.api).then(t=>{this.selectedCategories=t})}}}});var le=`{% block sw_cms_element_blog_preview %}
    <div class="sw-cms-el-preview-blog">
        <p>Blog Listing Element</p>
        <hr>
        <div class="sw-cms-el-category-placeholder-listing">
            <div class="sw-cms-el-category-navigation__placeholder"></div>
            <hr>
            <div class="sw-cms-el-category-navigation__placeholder"></div>
            <div class="sw-cms-el-category-navigation__placeholder--subcategory"></div>
            <div class="sw-cms-el-category-navigation__placeholder--subcategory"></div>
        </div>
    </div>
{% endblock %}
`;Shopware.Component.register("sw-cms-el-preview-blog",{template:le});Shopware.Service("cmsService").registerCmsElement({name:"blog",label:"Blog",component:"sw-cms-el-blog",configComponent:"sw-cms-el-config-blog",previewComponent:"sw-cms-el-preview-blog",defaultConfig:{paginationCount:{source:"static",value:5},showType:{source:"static",value:"all"},showCategoryFilter:{source:"static",value:!0},showAuthorFilter:{source:"static",value:!0},blogCategories:{source:"static",value:null,entity:{name:"sas_blog_categories"}}}});var re=`{% block sas_cms_element_blog_single_select %}
    <div class="sas-cms-el-blog-single-select">
        <h6>{{ categoryName }}</h6>
        <h3>{{ title }}</h3>
        <img :src="articleImage" />
        <p>{{ teaser }}</p>
    </div>
{% endblock %}
`;var{Mixin:It,Context:Tt}=Shopware,{Criteria:Mt}=Shopware.Data;Shopware.Component.register("sw-cms-el-blog-single-select",{template:re,inject:["repositoryFactory"],mixins:[It.getByName("cms-element")],created(){this.createdComponent()},data(){return{article:null,title:"Placeholder Article Title",teaser:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus maximus velit, dictum mollis erat finibus quis. Ut dictum ornare dolor, sed mattis tellus gravida vel.",mediaUrl:null,categoryName:"Placeholder Category"}},computed:{articleImage(){return this.mediaUrl?this.mediaUrl:`${Shopware.Context.api.assetsPath}/administration/static/img/cms/preview_mountain_small.jpg`},repository(){return this.repositoryFactory.create("sas_blog_entries")},selectedBlogEntry(){return this.element.config.blogEntry.value}},methods:{createdComponent(){this.initElementConfig("blog-single-select"),this.initElementData("blog-single-select"),this.element.config.blogEntry.value&&this.getEntityProperties()},getEntityProperties(){if(this.element.config.blogEntry.value){let e=new Mt;e.addAssociation("blogCategories"),this.repository.get(this.element.config.blogEntry.value,Tt.api,e).then(t=>{this.article=t,this.title=this.article.translated.title,this.teaser=this.article.translated.teaser,this.mediaUrl=this.article.media.url,this.categoryName=this.article.blogCategories[0]?this.article.blogCategories[0].translated.name:null})}else this.article=null,this.title="Placeholder Article Title",this.teaser="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus maximus velit, dictum mollis erat finibus quis. Ut dictum ornare dolor, sed mattis tellus gravida vel.",this.mediaUrl=null,this.categoryName="Placeholder Category"}},watch:{selectedBlogEntry:function(){this.getEntityProperties()}}});var ne=`{% block sas_cms_element_blog_single_select_config %}
    <div class="sw-cms-el-config-blog-single-select">
        <sw-entity-single-select
            :placeholder="$tc('sas-blog.elements.single-select.selectFieldLabel')"
            :label="$tc('sas-blog.elements.single-select.selectFieldLabel')"
            entity="sas_blog_entries"
            v-model="element.config.blogEntry.value">

            <template #selection-label-property="{ item }">
                <slot name="selection-label-property" v-bind="{ item }">
                    {{ item.translated.title || item.name }}
                </slot>
            </template>

            <template #result-item="{ item, index }">
                <slot name="result-item" v-bind="{ item, index }">
                    <li is="sw-select-result" v-bind="{ item, index }">
                        {{ item.translated.title || item.name }}
                    </li>
                </slot>
            </template>
        </sw-entity-single-select>
    </div>
{% endblock %}
`;var{Component:$t,Mixin:Pt}=Shopware;$t.register("sw-cms-el-config-blog-single-select",{template:ne,inject:["repositoryFactory"],mixins:[Pt.getByName("cms-element")],data(){return{blogEntry:null,selectedEntry:null}},computed:{blogEntryRepository(){return this.repositoryFactory.create("sas_blog_entries")}},created(){this.createdComponent()},methods:{createdComponent(){this.initElementConfig("blog-single-select")}}});var ce=`{% block sw_cms_element_blog_single_select_preview %}
    <div class="sw-cms-el-preview-blog-single-select">
        <h6>{{ $tc('sas-blog.elements.single-select.previewText') }}</h6>
        <img :src="'/administration/static/img/cms/preview_mountain_small.jpg' | asset">
        <div class="sw-cms-el-category-placeholder-listing">
            <div class="sw-cms-el-category-navigation__placeholder"></div>
            <div class="sw-cms-el-category-navigation__placeholder"></div>
        </div>
    </div>
{% endblock %}
`;Shopware.Component.register("sw-cms-el-preview-blog-single-select",{template:ce});Shopware.Service("cmsService").registerCmsElement({name:"blog-single-select",label:"sas-blog.elements.single-select.label",component:"sw-cms-el-blog-single-select",configComponent:"sw-cms-el-config-blog-single-select",previewComponent:"sw-cms-el-preview-blog-single-select",defaultConfig:{blogEntry:{source:"static",value:null,entity:{name:"sas_blog_entries"}}}});var ge=`{% block sas_cms_el_newest_listing %}
<div class="sas-cms-el-newest-listing">
    <h2>{{ $tc('sas-blog.elements.newestListing.component.elementHeadline') }}</h2>
    <sw-alert variant="info">
        {{ $tc('sas-blog.elements.newestListing.component.infoText') }}
    </sw-alert>
</div>
{% endblock %}
`;var{Component:Gt,Mixin:zt}=Shopware;Gt.register("sas-cms-el-newest-listing",{template:ge,mixins:[zt.getByName("cms-element")],created(){this.createdComponent()},methods:{createdComponent(){this.initElementConfig("blog-newest-listing"),this.initElementData("blog-newest-listing")}}});var de=`{% block sas_cms_element_newest_listing_config %}
<div class="sas-cms-el-config-newest-listing">

    {% block sas_cms_element_newest_listing_config_itemCount_field %}
        <sw-number-field
            numberType="int"
            :step="1"
            :min="1"
            :max="null"
            v-model="element.config.itemCount.value"
            :digits="2"
            :allowEmpty="false"
            :label="$tc('sas-blog.elements.newestListing.config.itemCount')">
        </sw-number-field>
    {% endblock %}

    {% block sas_cms_element_blog_listing_config_show_type %}
        <sw-select-field :label="$tc('sas-blog.elements.newestListing.config.showType.label')"
                         v-model="element.config.showType.value">
            {% block sas_cms_element_download_card_config_layout_select_options %}
                <option value="all">{{ $tc('sas-blog.elements.newestListing.config.showType.options.all') }}</option>
                <option value="select">{{ $tc('sas-blog.elements.newestListing.config.showType.options.select') }}</option>
            {% endblock %}
        </sw-select-field>
    {% endblock %}

    {% block sas_cms_element_blog_listing_config_select_categories %}
        <sas-blog-category-tree-field
            v-if="element.config.showType.value !== 'all' && selectedCategories"
            v-model="selectedCategories"
            :label="$tc('sas-blog.elements.newestListing.config.blogCategories.label')"
            :categoriesCollection="selectedCategories"
            class="sw-product-detail__select-category"
            :placeholder="$tc('sas-blog.elements.newestListing.config.blogCategories.placeholder')">
        </sas-blog-category-tree-field>
    {% endblock %}

</div>
{% endblock %}
`;var{Component:Ft,Mixin:Vt}=Shopware,{EntityCollection:Ot,Criteria:me}=Shopware.Data;Ft.register("sas-cms-el-config-newest-listing",{template:de,inject:["repositoryFactory"],mixins:[Vt.getByName("cms-element")],data(){return{categories:[],selectedCategories:null}},computed:{blogCategoryRepository(){return this.repositoryFactory.create("sas_blog_category")},blogListingSelectContext(){let e=Object.assign({},Shopware.Context.api);return e.inheritance=!0,e},blogCategoriesConfigValue(){return this.element.config.blogCategories.value}},watch:{selectedCategories:{handler(e){this.element.config.blogCategories.value=e.getIds(),this.$set(this.element.data,"blogCategories",e),this.$emit("element-update",this.element)}}},created(){this.createdComponent()},methods:{async createdComponent(){this.initElementConfig("blog-newest-listing"),await this.getSelectedCategories()},getSelectedCategories(){if(Shopware.Utils.types.isEmpty(this.blogCategoriesConfigValue))this.selectedCategories=new Ot(this.blogCategoryRepository.route,this.blogCategoryRepository.schema.entity,Shopware.Context.api,new me);else{let e=new me;e.setIds(this.blogCategoriesConfigValue),this.blogCategoryRepository.search(e,Shopware.Context.api).then(t=>{this.selectedCategories=t})}}}});var pe=`{% block sas_cms_element_newest_listing_preview %}
<div class="sas-cms-el-preview-newest-listing">
    <p>Newest Listing Element</p>
    <hr>
    <div class="sas-cms-el-category-placeholder-listing">
        <div class="sas-cms-el-category-navigation__placeholder"></div>
        <hr>
        <div class="sas-cms-el-category-navigation__placeholder"></div>
        <div class="sas-cms-el-category-navigation__placeholder--subcategory"></div>
        <div class="sas-cms-el-category-navigation__placeholder--subcategory"></div>
    </div>
</div>
{% endblock %}
`;var{Component:qt}=Shopware;qt.register("sas-cms-el-preview-newest-listing",{template:pe});Shopware.Service("cmsService").registerCmsElement({name:"blog-newest-listing",label:"sas-blog.elements.newestListing.preview.label",component:"sas-cms-el-newest-listing",configComponent:"sas-cms-el-config-newest-listing",previewComponent:"sas-cms-el-preview-newest-listing",defaultConfig:{itemCount:{source:"static",value:5},showType:{source:"static",value:"all"},blogCategories:{source:"static",value:null,entity:{name:"sas_blog_categories"}}}});var{Component:jt}=Shopware;jt.extend("sas-blog-tree","sw-tree",{methods:{async onFinishEditNameingElement(e,t,a){a&&(await this.$emit("finish-edit-item",a),this.saveItems(),this.currentEditMode!==null&&this.contextItem&&this.currentEditMode(this.contextItem,this.addElementPosition)),this._eventFromEdit=t,this.newElementId=null}}});var he=`{% block sw_tree_item_children_items %}
    <sas-blog-tree-item v-for="child in item.children"
              :key="child.id"
              :item="child"
              :draggedItem="draggedItem"
              :parentScope="parentScope"
              :newElementId="newElementId"
              :translationContext="translationContext"
              :onChangeRoute="onChangeRoute"
              @check-item="emitCheckedItem"
              :activeParentIds="activeParentIds"
              :activeItemIds="activeItemIds"
              :markInactive="markInactive"
              :sortable="sortable"
              :shouldFocus="shouldFocus"
              :activeFocusId="activeFocusId"
              :displayCheckbox="displayCheckbox"
              :disableContextMenu="disableContextMenu">
        {% block sw_tree_item_children_items_slots %}
            {% parent %}
        {% endblock %}
    </sas-blog-tree-item>
{% endblock %}

{% block sw_tree_items_actions_edit %}
<sw-context-menu-item @click="onEditCategory(item)">
    {{ $tc('sas-blog-tree-item.actions.edit') }}
</sw-context-menu-item>
{% endblock %}
`;var{Component:Ht}=Shopware;Ht.extend("sas-blog-tree-item","sw-tree-item",{template:he,computed:{parentScope(){let e=this.$parent;for(;e.$options._componentTag!=="sas-blog-tree";)e=e.$parent;return e}},data(){return{editingCategory:null}},methods:{onEditCategory(e){this.editingCategory=e,this.currentEditElement=e.id,this.editElementName()},onFinishNameingElement(e,t){this.editingCategory?(this.parentScope.onFinishEditNameingElement(e,t,this.editingCategory),this.currentEditElement=null,this.editingCategory=null):this.parentScope.onFinishNameingElement(e,t)},onBlurTreeItemInput(e){this.abortCreateElement(e)},onCancelSubmit(e){this.abortCreateElement(e)},abortCreateElement(e){this.currentEditElement=null,this.editingCategory=null,this.$super("abortCreateElement",e)}}});var be=`{% block sw_category_tree %}
    <div class="sw-category-tree">
        <sas-blog-tree class="sw-category-tree__inner"
                 v-if="!isLoadingInitialData"
                 after-id-property="afterCategoryId"
                 :items="categories"
                 :sortable="allowEdit"
                 :searchable="false"
                 :activeTreeItemId="categoryId"
                 :translationContext="translationContext"
                 :onChangeRoute="changeCategory"
                 :disableContextMenu="disableContextMenu"
                 :allowDeleteCategories="allowDelete"
                 @batch-delete="deleteCheckedItems"
                 @delete-element="onDeleteCategory"
                 @drag-end="onUpdatePositions"
                 @get-tree-items="onGetTreeItems"
                 @finish-edit-item="onFinishEditCategory"
                 @editing-end="syncSiblings">

            {% block sw_category_tree_items %}
                <template
                    #items="{
                        treeItems,
                        sortable,
                        draggedItem,
                        newElementId,
                        checkItem,
                        translationContext,
                        onChangeRoute,
                        disableContextMenu
                    }">
                    <sas-blog-tree-item
                        v-for="item in treeItems"
                        :key="item.id"
                        :item="item"
                        :allowNewCategories="allowCreate"
                        :allowDeleteCategories="allowDelete"
                        :active="item.active"
                        :translationContext="translationContext"
                        :onChangeRoute="onChangeRoute"
                        :sortable="sortable"
                        :draggedItem="draggedItem"
                        :disableContextMenu="disableContextMenu"
                        :displayCheckbox="allowDelete"
                        :contextMenuTooltipText="contextMenuTooltipText"
                        :newElementId="newElementId"
                        @check-item="checkItem">
                    </sas-blog-tree-item>
                </template>
            {% endblock %}
        </sas-blog-tree>

        <sw-loader v-else></sw-loader>
    </div>
{% endblock %}
`;var{Component:Wt}=Shopware,w=Shopware.Data.Criteria;Wt.extend("sas-blog-category-tree","sw-category-tree",{template:be,props:{categoryId:{type:String,required:!1,default:null},currentLanguageId:{type:String,required:!0}},data(){return{blogCategory:null,translationContext:"sas-blog-category"}},computed:{defaultLayout(){return null},category(){return this.blogCategory},categoryRepository(){return this.repositoryFactory.create("sas_blog_category")},disableContextMenu(){return this.allowEdit?(this.allowCreate=this.currentLanguageId===Shopware.Context.api.systemLanguageId,this.allowDelete=this.currentLanguageId===Shopware.Context.api.systemLanguageId,!1):!0}},methods:{loadDefaultLayout(){Promise.resolve()},createdComponent(){this.getCategory(),this.$super("createdComponent")},changeCategory(e){this.$emit("change-category-id",e.id)},onFinishEditCategory(e){let t=e.data;this.categoryRepository.save(t,Shopware.Context.api).then(()=>{let a=new w;a.setIds([t.id,t.parentId].filter(s=>s!==null)),this.categoryRepository.search(a,Shopware.Context.api).then(s=>{this.addCategories(s)})})},getCategory(){let e=new w;this.categoryId&&e.addFilter(w.equals("blogCategories.id",this.categoryId)),this.categoryRepository.search(e,Shopware.Context.api).then(t=>{this.blogCategory=t[0],this.blogCategory.childCount=9})}}});var{Component:Zt}=Shopware,{Criteria:_}=Shopware.Data;Zt.extend("sas-blog-category-tree-field","sw-category-tree-field",{computed:{globalCategoryRepository(){return this.repositoryFactory.create("sas_blog_category")}},methods:{getTreeItems(e=null){this.isFetching=!0;let t=new _(1,500);return t.addFilter(_.equals("parentId",e)),this.globalCategoryRepository.search(t,Shopware.Context.api).then(a=>e===null?(this.categories=a,this.isFetching=!1,Promise.resolve()):(a.forEach(s=>{this.categories.add(s)}),Promise.resolve()))},searchCategories(e){let t=new _(1,500);return t.setTerm(e),this.globalCategoryRepository.search(t,Shopware.Context.api)}}});var ue=`{% block sas_blog_author_list %}
<sw-page class="sas-blog-author-list">
    <template slot="smart-bar-header">
        <h2>
            {% block sas_blog_author_list_smart_bar_header_title_text %}
                {{ $tc('sas-blog-author.list.textBlogOverview') }}
                {% endblock %}
                {% block sas_blog_author_list_smart_bar_header_amount %}
                <span v-if="!isLoading" class="sw-page__smart-bar-amount">
                ({{ total }})
                </span>
            {% endblock %}
        </h2>
    </template>
    <template #language-switch>
        <sw-language-switch @on-change="changeLanguage"></sw-language-switch>
    </template>
    {% block sas_blog_author_list_smart_bar_actions %}
    <template slot="smart-bar-actions">
        {% block sas_blog_author_list_smart_bar_actions_add %}
        <sw-button :routerLink="{ name: 'blog.module.author.create' }" variant="primary">
            {{ $tc('sas-blog-author.list.buttonAdd') }}
        </sw-button>
        {% endblock %}
    </template>
    {% endblock %}

    <template #sidebar>
        <sas-blog-vertical-tabs :defaultItem="'author'" />
    </template>

    <template #content>
        {% block sas_blog_author_list_content %}
        <sw-entity-listing
            v-if="blogAuthors"
            :items="blogAuthors"
            :repository="blogAuthorRepository"
            :showSelection="false"
            :columns="columns"
            detailRoute="blog.module.author.detail">

            {% block sas_blog_author_list_columns_image_preview %}
            <template #preview-fullName="{ item, compact }">
                <sw-avatar
                    :size="compact ? '32px' : '48px'"
                    :imageUrl="item.media ? item.media.url : null"
                    :sourceContext="item"
                    :firstName="item.firstName"
                    :lastName="item.lastName">
                </sw-avatar>
            </template>
            {% endblock %}

            {% block sas_blog_author_list_grid_columns_name %}
            <template #column-fullName="{ item, compact, isInlineEdit }">
                {% block sas_blog_author_list_grid_inline_edit_name %}
                    <template v-if="isInlineEdit">
                        {% block sas_blog_author_list_grid_inline_edit_first_name %}
                        <sw-text-field class="sas-blog-author-list__inline-edit-first-name"
                                       v-model="item.firstName"
                                       :size="compact ? 'small' : 'default'">
                        </sw-text-field>
                        {% endblock %}

                        {% block sas_blog_author_list_grid_inline_edit_last_name %}
                        <sw-text-field class="sas-blog-author-list__inline-edit-last-name"
                                       v-model="item.lastName"
                                       :size="compact ? 'small' : 'default'">
                        </sw-text-field>
                        {% endblock %}
                    </template>
                    {% endblock %}

                    {% block sas_blog_author_list_grid_columns_name_link %}
                    <router-link v-else :to="{ name: 'blog.module.author.detail', params: { id: item.id } }">
                        {{ item.firstName }} {{ item.lastName }}
                    </router-link>
                    {% endblock %}
                </template>
            {% endblock %}


        </sw-entity-listing>
        {% endblock %}

        {% block sas_blog_author_list_empty_state %}
        <sw-empty-state v-if="!isLoading && !total" :title="$tc('sas-blog-author.list.messageEmpty')">
            {{ $tc('sas-blog-author.list.messageEmpty') }}
        </sw-empty-state>
        {% endblock %}
    </template>

</sw-page>
{% endblock %}
`;var{Component:Qt,Mixin:f}=Shopware,Xt=Shopware.Data.Criteria;Qt.register("sas-blog-author-list",{template:ue,inject:["repositoryFactory"],mixins:[f.getByName("notification"),f.getByName("salutation"),f.getByName("listing")],data(){return{blogAuthors:null,total:0,isLoading:!0,currentLanguageId:Shopware.Context.api.languageId}},metaInfo(){return{title:this.$createTitle()}},created(){this.getList()},computed:{blogAuthorRepository(){return this.repositoryFactory.create("sas_blog_author")},columns(){return[{property:"salutation.displayName",label:"sas-blog-author.list.table.salutation",width:"100px",allowResize:!0},{property:"fullName",dataIndex:"firstName,lastName",inlineEdit:"string",label:"sas-blog-author.list.table.fullName",routerLink:"sw.blog.author.detail",allowResize:!0,primary:!0},{property:"displayName",label:"sas-blog-author.list.table.displayName",allowResize:!0,inlineEdit:"string"},{property:"email",label:"sas-blog-author.list.table.email",align:"right",inlineEdit:"string",allowResize:!0}]}},methods:{changeLanguage(e){this.currentLanguageId=e,this.getList()},getList(){this.isLoading=!0;let e=new Xt(this.page,this.limit);return e.addAssociation("media"),e.addAssociation("salutation"),this.blogAuthorRepository.search(e,Shopware.Context.api).then(t=>{this.total=t.total,this.blogAuthors=t,this.isLoading=!1})}}});var we=`{% block sas_blog_author_detail %}
<sw-page class="sas-blog-author-detail">
    <template slot="smart-bar-header">
        <h2>
            {% block sas_blog_author_detail_smart_bar_header_title_text %}
                 {{ salutation(blogAuthor) || $tc('sas-blog-author.detail.title') }}
            {% endblock %}
        </h2>
    </template>

    <template slot="smart-bar-actions">
        <sw-button :routerLink="{ name: 'blog.module.author.index' }">
            {{ $tc('sas-blog-author.detail.buttonCancel') }}
        </sw-button>

        <sw-button-process
            :isLoading="isLoading"
            :processSuccess="processSuccess"
            variant="primary"
            @process-finish="saveFinish"
            @click="onSave">
            {{ $tc('sas-blog-author.detail.buttonSave') }}
        </sw-button-process>

    </template>

    <template slot="content">
        <sw-card-view>
            <sw-card v-if="blogAuthor" :isLoading="isLoading" :title="$tc('sas-blog-author.detail.title')">

                    <sw-container columns="2fr 4fr 4fr" gap="16px">
                        <sw-entity-single-select
                            class="sas-blog-author-base-form__salutation-select"
                            entity="salutation"
                            :label="$tc('sas-blog-author.detail.salutation.label')"
                            :placeholder="$tc('sas-blog-author.detail.salutation.placeholder')"
                            :error="blogAuthorSalutationIdError"
                            labelProperty="displayName"
                            required
                            v-model ="blogAuthor.salutationId">
                        </sw-entity-single-select>

                        <sw-text-field
                            required
                            :error="blogAuthorFirstNameError"
                            :placeholder="$tc('sas-blog-author.detail.firstName.placeholder')"
                            :label="$tc('sas-blog-author.detail.firstName.label')"
                            v-model="blogAuthor.firstName">
                        </sw-text-field>

                        <sw-text-field
                            required
                            :error="blogAuthorLastNameError"
                            :placeholder="$tc('sas-blog-author.detail.lastName.placeholder')"
                            :label="$tc('sas-blog-author.detail.lastName.label')"
                            v-model="blogAuthor.lastName">
                        </sw-text-field>
                    </sw-container>

                    <sw-container columns="6fr 4fr" gap="24px">
                        <sw-text-field
                            :error="blogAuthorDisplayNameError"
                            :placeholder="$tc('sas-blog-author.detail.displayName.placeholder')"
                            :label="$tc('sas-blog-author.detail.displayName.label')"
                            v-model="blogAuthor.displayName">
                        </sw-text-field>

                        <sw-text-field
                            required
                            :error="blogAuthorEmailError"
                            :placeholder="$tc('sas-blog-author.detail.email.placeholder')"
                            :label="$tc('sas-blog-author.detail.email.label')"
                            v-model="blogAuthor.email">
                        </sw-text-field>
                    </sw-container>

                <sw-container columns="1fr" gap="32px">
                    <sw-text-editor
                        :label="$tc('sas-blog-author.detail.description.label')"
                        :placeholder="$tc('sas-blog-author.detail.description.placeholder')"
                        :error="blogAuthorDescriptionError"
                        v-model="blogAuthor.description">
                    </sw-text-editor>
                </sw-container>

                <sw-upload-listener
                        :uploadTag="blogAuthor.id"
                        @media-upload-finish="onSetMediaItem"
                        autoUpload>
                    </sw-upload-listener>

                    <sw-media-upload-v2
                        variant="regular"
                        :allowMultiSelect="false"
                        defaultFolder="sas_blog_author"
                        :disabled="isLoading"
                        :fileAccept="fileAccept"
                        :label="$tc('sas-blog-author.detail.media.label')"
                        :uploadTag="blogAuthor.id"
                        :caption="$tc('sw-cms.elements.general.config.caption.mediaUpload')"
                        :source="blogAuthor.mediaId"
                        @media-upload-remove-image="onRemoveMediaItem"
                        @media-drop="onMediaDropped">
                    </sw-media-upload-v2>
            </sw-card>
        </sw-card-view>
    </template>

</sw-page>
{% endblock %}
`;var{Component:ts,Mixin:_e}=Shopware,{Criteria:d}=Shopware.Data,{mapPropertyErrors:ss}=Shopware.Component.getComponentHelper();ts.register("sas-blog-author-detail",{template:we,inject:["repositoryFactory"],mixins:[_e.getByName("notification"),_e.getByName("salutation")],shortcuts:{"SYSTEMKEY+S":"onSave",ESCAPE:"onCancel"},data(){return{isLoading:!1,isSaveSuccessful:!1,blogAuthor:null,blogAuthorCustomFieldSets:null,processSuccess:!1,availableTags:null,fileAccept:"image/*"}},metaInfo(){return{title:this.$createTitle(this.identifier)}},computed:{identifier(){return this.blogAuthor!==null?this.salutation(this.blogAuthor):""},blogAuthorRepository(){return this.repositoryFactory.create("sas_blog_author")},mediaRepository(){return this.repositoryFactory.create("media")},defaultCriteria(){let e=new d;return e.addAssociation("media").addAssociation("salutation"),e},customFieldSetRepository(){return this.repositoryFactory.create("custom_field_set")},customFieldSetCriteria(){let e=new d;return e.addFilter(d.equals("relations.entityName","sas_blog_author")),e.getAssociation("customFields").addSorting(d.sort("config.customFieldPosition")),e},...ss("blogAuthor",["firstName","lastName","displayName","email","salutationId","description"])},created(){this.createdComponent()},methods:{createdComponent(){this.isLoading=!0,this.blogAuthorRepository.get(this.$route.params.id,Shopware.Context.api,this.defaultCriteria).then(e=>{this.blogAuthor=e,this.isLoading=!1})},saveFinish(){this.isSaveSuccessful=!1},async onSave(){return this.isLoading=!0,this.isSaveSuccessful=!1,this.blogAuthorRepository.save(this.blogAuthor,Shopware.Context.api).then(()=>{this.isLoading=!1,this.isSaveSuccessful=!0,this.createNotificationSuccess({message:this.$tc("sas-blog-author.detail.messageSaveSuccess",0,{name:`${this.blogAuthor.firstName} ${this.blogAuthor.lastName}`})}),this.$router.push({name:"blog.module.author.detail",params:{id:this.blogAuthor.id}})}).catch(e=>{throw this.createNotificationError({message:this.$tc("global.notification.unspecifiedSaveErrorMessage")}),this.isLoading=!1,e})},onCancel(){this.$router.push({name:"sas.blog.author.index"})},onSetMediaItem({targetId:e}){this.mediaRepository.get(e,Shopware.Context.api).then(t=>{this.blogAuthor.mediaId=e,this.blogAuthor.media=t})},onRemoveMediaItem(){this.blogAuthor.mediaId=null,this.blogAuthor.media=null},onMediaDropped(e){this.onSetMediaItem({targetId:e.id})}}});var{Component:as}=Shopware;as.extend("sas-blog-author-create","sas-blog-author-detail",{methods:{createdComponent(){Shopware.State.commit("context/resetLanguageToDefault"),this.blogAuthor=this.blogAuthorRepository.create(Shopware.Context.api)}}});var fe=`<sw-tabs
    isVertical
    :defaultItem="defaultItem"
    :small="false"
    class="sw-blog__tabs"
    @new-item-active="onChangeTab"
    position-identifier="blog-vertical-tabs"
>
    <template #default="{ active }">
        {% block sas_block_list_tab_item %}
        <sw-tabs-item :title="$tc('sas-blog.general.mainMenuItemList')"
                      variant="minimal"
                      :route="{ name: 'blog.module.index' }"
                      :activeTab="active"
                      :native="true"
                      name="blog">
            {{ $tc('sas-blog.general.mainMenuItemList') }}
        </sw-tabs-item>
        {% endblock %}

        {% block sas_block_tags_tab_item %}
        <sw-tabs-item :title="$tc('sas-blog-author.general.mainMenuItemList')"
                      :route="{ name: 'blog.module.author' }"
                      variant="minimal"
                      :activeTab="active"
                      :native="true"
                      name="author">
            {{ $tc('sas-blog-author.general.mainMenuItemList') }}
        </sw-tabs-item>
        {% endblock %}
    </template>
</sw-tabs>
`;var{Component:os}=Shopware;os.register("sas-blog-vertical-tabs",{template:fe,props:{defaultItem:{type:String,default:"blog"}},methods:{onChangeTab(e){this.currentTab=e}}});var{Module:ls}=Shopware;ls.register("blog-module",{type:"plugin",name:"Blog",title:"sas-blog.general.mainMenuItemGeneral",description:"sas-blog.general.descriptionTextModule",color:"#F965AF",icon:"regular-content",snippets:{"de-DE":q,"en-GB":j},routes:{index:{components:{default:"sas-blog-list"},path:"index"},create:{components:{default:"sas-blog-create"},path:"create"},detail:{component:"sas-blog-detail",path:"detail/:id"},author:{path:"author",component:"sas-blog-author-list",meta:{parentPath:"blog.module.index"},redirect:{name:"blog.module.author.index"}},"author.index":{path:"author/index",component:"sas-blog-author-list"},"author.create":{path:"author/new",component:"sas-blog-author-create",meta:{parentPath:"blog.module.author.index"}},"author.detail":{path:"author/detail/:id",component:"sas-blog-author-detail",meta:{parentPath:"blog.module.author.index"}}},navigation:[{id:"sas-blog",label:"sas-blog.general.mainMenuItemGeneral",path:"blog.module.index",parent:"sw-content",meta:{privilege:["sas-blog-category:read","sas_blog_author:read","sas_blog_entries:read"]}}]});})();
