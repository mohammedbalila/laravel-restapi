<template>
  <section>
      <div class="row"  v-if="$i18n.locale == 'en'">
        <div class="col-md-5 sm_discount mt-4" style="background-color:#fafafa">
          <div class="clickdown"  @click="discount_section = !discount_section" v-if="!discount_section">
            <span>
              <i class="fa fa-shopping-cart ml-2 mr-2"></i>{{ $t("message.showorder") }} </span>
            <span class="plus" v-if="discount_section==false"><i class="fa fa-chevron-down"></i></span>
              <span style="float:right;" class="mr-3">
                <span style="color:#737171;"></span> $ {{totalprice_2}}
              </span>
              <div style="clear:both"></div>
          </div>
          <div class="clickdown" @click="discount_section = !discount_section" v-else>
            <span ><i class="fa fa-shopping-cart ml-2 mr-2"></i> {{ $t("message.hideorder") }} </span >
            <span class="plus" v-if="discount_section==true"><i class="fa fa-chevron-up"></i></span>
            <span style="float:right;" class="mr-3">
                <span style="color:#737171;"></span> $ {{totalprice_2}}
            </span>
            <div style="clear:both"></div>
          </div>
          <div class="discount_section mt-5" style="width:100%;padding:0px 10px" v-if="discount_section">
            <div class="border-bottom  p-2 img"
                v-for="item in cart"
                :key="item.product.id"

                >
                <span class="quantity"> {{ item.quantity }} </span>
              <img
              :src="item.product.img"
              />
              <span class="price ml-5"> <strong>{{ item.product.name }}</strong></span>
              <div class="countity" style="float:right">
                  ${{item.price}}
              </div>
              <div style="clear:both"></div>
              <!-- <h6 style="width: 50%;margin-left: 90px;margin-top:-31px">{{ item.sizeTarget }} </h6> -->
            </div>

            <div class="discount">
              <v-form class="form_discount">
                <v-row>
                  <v-col cols="9" sm="9">
                    <v-text-field v-model="discount" label="Discount" outlined filled style="border:none;"></v-text-field>
                  </v-col>
                  <v-col cols="3" sm="3"  style="padding:0">
                    <v-btn @click="apply_discount()" color="#c8c8c8" style="color:white;padding: 26px 0;"><i class="fa fa-arrow-right"></i></v-btn>
                  </v-col>
                </v-row>
              </v-form>
            </div>
            <hr />
            <!-- <div class="discount_text" style="color:#737171;padding:10px"> -->
              <div style="    padding: 10px;">
                <span style="padding:10px;color:#444f58">Subtotal</span>
                <span style="float:right;color:#444f58;padding-right: 10px;">$ {{discount_value}}</span>
                <div style="clear:both"></div>
              </div>
              <hr/>
              <!-- <div class="mt-3">
                <span>Shipping</span>
                <span style="float:right">calculated at next</span>
                <div style="clear:both"></div>
              </div> -->
            <!-- </div> -->

            <div style="padding:10px">
              <span style="font-size: 1.1428571429em;padding:10px"> Total </span>
              <span style="float:right;">
                <span style="color:#737171;padding-right: 10px;">USD&nbsp; &nbsp;<strong style="color:black;font-size:22px">${{totalprice_2}}</strong></span> 
              </span>
              <div style="clear:both"></div>
            </div>
          </div>
        </div>
      <div class="col-md-7">
        <!-- Button trigger modal -->
        <!-- Modal -->
        <div class="modal show" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" show='true'>
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content" style="display: contents;">
                  <div class="moda-body">
                          ss
                    <form :action="`/api/payment/${this.id}`" class="paymentWidgets" data-brands="VISA MASTER AMEX"></form>
                  </div>
                </div>
            </div>
          </div>
        <v-form class="form" @submit.prevent="send">
          <v-container>
            <div class="alert text-center mb-3">
              <h5 class="red--text" v-if="errors.items">{{ $t("message.noitem") }}</h5>
            </div>
              <div v-if=" message.length >0 " class="alert alert-info alert-dismissible fade show" role="alert">
                  <h1 class="text-center"> Done</h1>
                  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
              </div>
            <v-row>
              <h4>Contacts information </h4>
              <v-col cols="12" md="12">
                <label >E-mail</label>
                <v-text-field
                  v-model="form.email"
                  outlined
                  style="border:none"
                ></v-text-field>

                 <span class="red--text" v-if="errors.email">{{errors.email[0]}}</span>
              </v-col>
              <!-- <v-checkbox
                        v-model="form.checkbox"
                        :rules="[v => !!v || 'You must agree to continue!']"
                        label="Keep me up to date on news and exclusive offers"
                        required
              ></v-checkbox>-->

              <v-col cols="12" md="6">
                <label >First Name</label>
                <v-text-field v-model="form.fname"  outlined  style="border:none"></v-text-field>
                 <span class="red--text" v-if="errors.fname">{{errors.fname[0]}}</span>
              </v-col>

              <v-col cols="12" md="6">
                <label >Last Name</label>
                <v-text-field v-model="form.lname" outlined style="border:none"></v-text-field>
                 <span class="red--text" v-if="errors.lname">{{errors.lname[0]}}</span>
              </v-col>
              <v-col cols="12" md="12">
                <label >Address</label>
                <v-text-field v-model="form.address" outlined style="border:none"></v-text-field>
                 <span class="red--text" v-if="errors.address">{{errors.address[0]}}</span>
              </v-col>
              <v-col cols="12" md="12">
                <label >Appartment</label>
                <v-text-field v-model="form.apartment" outlined style="border:none"></v-text-field>
                 <span class="red--text" v-if="errors.apartment">{{errors.apartment[0]}}</span>
              </v-col>
              <v-col cols="12" md="12">
                <label >City</label>
                <v-text-field v-model="form.city" outlined style="border:none"></v-text-field>
                 <span class="red--text" v-if="errors.city">{{errors.city[0]}}</span>
              </v-col>
              <v-col  cols="12" sm="8">
                <label >Country</label>
                <v-select v-model="form.country" :items="item" outlined style="border:none"></v-select>
                 <span class="red--text" v-if="errors.country">{{errors.country[0]}}</span>
              </v-col>
              <!-- <v-col class="d-flex" cols="12" sm="4">
                <v-select
                  v-model="form.goverment"

                  item-text="name"
                  item-value="last"
                  :items="item"
                  label="governate"
                  outlined
                ></v-select>
              </v-col> -->
              <v-col cols="12" sm="4">
                <label >Post Code</label>
                <v-text-field v-model="form.postcode" outlined style="border:none"></v-text-field>
                 <span class="red--text" v-if="errors.postcode">{{errors.postcode[0]}}</span>
              </v-col>
              <v-col cols="12" md="12">
                <label>Phone</label>
                <v-text-field v-model="form.phone" outlined style="border:none"></v-text-field>
                 <span class="red--text" v-if="errors.phone">{{errors.phone[0]}}</span>
              </v-col>
            </v-row>
            <v-btn color="#197bbd" class="check_btn" type="submit">Proceed To Payment</v-btn>

          </v-container>
        </v-form>
      </div>
      <div class="col-md-5 lg_discount" style="background-color:#fafafa">
        <div class="discount_section mt-5">
          <div class="border-bottom  p-2 img"
              v-for="item in cart"
              :key="item.product.id"
              >
              <span class="quantity">{{ item.quantity }}</span>
            <img
             :src="item.product.img"
            />
            <span class="price ml-5"> <strong>{{ item.product.name }}</strong></span>
            <div class="countity" style="float:right">
                ${{item.price}}
            </div>
            <div style="clear:both"></div>
            <!-- <h6 style="width: 50%;margin-left: 90px;margin-top:-31px">{{ item.sizeTarget }} </h6> -->
          </div>

          <div class="discount">
            <v-form class="form_discount">
              <v-row>
                <v-col cols="12" sm="9">
                  <v-text-field v-model="discount" label="Discount" outlined filled  style="border:none"></v-text-field>
                </v-col>
                <v-col cols="12" sm="3">
                  <v-btn @click="apply_discount()" color="#c8c8c8" style="color:white">Apply</v-btn>
                </v-col>
              </v-row>
            </v-form>
          </div>
          <hr />
          <!-- <div class="discount_text" style="color:#737171;padding:10px"> -->
            <div>
              <span style="font-size:14px;padding:10px;color:#444f58">Subtotal</span>
              <span style="float:right;font-size:14px;color:#444f58;padding-right: 10px;">${{discount_value}}</span>
              <div style="clear:both"></div>
            </div>
            <hr/>
            <!-- <div class="mt-3">
              <span>Shipping</span>
              <span style="float:right">calculated at next</span>
              <div style="clear:both"></div>
            </div> -->
          <!-- </div> -->

          <div>
              <span style="font-size: 1.1428571429em;padding-left:10px"> Total </span>
              <span style="float:right;">
                <span style="color:#737171;padding-right: 10px;">USD&nbsp; &nbsp;<strong style="color:black;font-size:22px">${{totalprice_2}}</strong></span> 
              </span>
            <div style="clear:both"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="row"  v-else>
          <div class="col-md-5 sm_discount mt-4" style="background-color:#fafafa">
          <div class="clickdown" @click="discount_section = !discount_section" v-if="!discount_section">
            <span>
              <i class="fa fa-shopping-cart ml-2 mr-2"></i>{{ $t("message.showorder") }} </span>
            <span class="plus" v-if="discount_section==false"><i class="fa fa-chevron-down"></i></span>
              <span style="float:right;" class="mr-3">
                <span style="color:#737171;"></span> $ {{totalprice_2}}
              </span>
              <div style="clear:both"></div>
          </div>
          <div class="clickdown" @click="discount_section = !discount_section" v-else>
            <span ><i class="fa fa-shopping-cart ml-2 mr-2"></i> {{ $t("message.hideorder") }} </span >
            <span class="plus" v-if="discount_section==true"><i class="fa fa-chevron-up"></i></span>
            <span style="float:right;" class="mr-3">
                <span style="color:#737171;"></span> $ {{totalprice_2}}
            </span>
            <div style="clear:both"></div>
          </div>
          <div class="discount_section mt-5" style="width:100%;padding:0px 10px" v-if="discount_section">
            <div class="border-bottom  p-2 img"
                v-for="item in cart"
                :key="item.product.id"

                >
                <span class="quantity"> {{ item.quantity }} </span>
              <img
              :src="item.product.img"
              />
              <span class="price ml-5"> <strong>{{ item.product.name }}</strong></span>
              <div class="countity" style="float:right">
                  ${{item.price}}
              </div>
              <div style="clear:both"></div>
              <!-- <h6 style="width: 50%;margin-left: 90px;margin-top:-31px">{{ item.sizeTarget }} </h6> -->
            </div>

            <div class="discount">
              <v-form class="form_discount">
                  <v-row>
                    <v-col cols="9" sm="9">
                      <v-text-field v-model="discount" label="الكوبون" outlined filled  style="border:none"></v-text-field>
                    </v-col>
                    <v-col cols="3" sm="3"  style="padding:0">
                      <v-btn @click="apply_discount()" color="#c8c8c8" style="color:white;padding: 26px 0;"><i class="fa fa-arrow-right"></i></v-btn>
                    </v-col>
                  </v-row>
              </v-form>
            </div>
            <hr />
            <div class="discount_text" style="color:#737171;padding:10px">
              <div>
                <span style="font-size:14px;float:right;padding:10px;color:#444f58">الخصم</span>
                <span style="font-size:14px;color:#444f58;padding-right: 10px;">${{discount_value}}</span>
                <div style="clear:both"></div>
              </div>

            </div>

            <div style="font-size:20px;padding:10px">
              <span style="float:right;">الحساب الإجمالى</span>
              <span >
                <span style="color:#737171;padding-right: 10px;">USD&nbsp;&nbsp;<strong style="color:black;font-size:22px">${{totalprice_2}}</strong></span>
              </span>
              <div style="clear:both"></div>
            </div>
          </div>
        </div>
      <div class="col-md-7">
        <!-- Button trigger modal -->
        <!-- Modal -->
        <div class="modal show" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" show='true'>
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content" style="display: contents;">
                  <div class="moda-body">
                          ss
                    <form action="/api/payment/40" class="paymentWidgets" data-brands="VISA MASTER AMEX"></form>
                  </div>
              </div>
            </div>
          </div>
        <v-form class="form" @submit.prevent="send">

          <v-container>
            <div class="alert text-center mb-3">
              <h5 class="red--text" v-if="errors.items">{{ $t("message.noitem") }}</h5>
            </div>
            <div v-if=" message.length >0 " class="alert alert-info alert-dismissible fade show" role="alert">
                <h1 class="text-center"> Done</h1>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <h4 class="text-right">
              تسجيل البيانات
            </h4>
            <v-row>
              <v-col cols="12" md="12">
                <label style="float:right">البريد الإلكتروني </label>
                <div style="clear:both"></div>
                <v-text-field v-model="form.email" outlined  style="border:none" dir="rtl"></v-text-field>
                 <span class="red--text" v-if="errors.email">{{errors.email[0]}}</span>
              </v-col>
              <!-- <v-checkbox
                        v-model="form.checkbox"
                        :rules="[v => !!v || 'You must agree to continue!']"
                        label="Keep me up to date on news and exclusive offers"
                        required
              ></v-checkbox>-->

              <v-col cols="12" md="6">
                <label style="float:right">الاسم الأول</label>
                <div style="clear:both"></div>
                <v-text-field v-model="form.fname" outlined  style="border:none" dir="rtl"></v-text-field>
                 <span class="red--text" v-if="errors.fname">{{errors.fname[0]}}</span>
              </v-col>

              <v-col cols="12" md="6">
                <label style="float:right">الاسم الأخير</label>
                <div style="clear:both"></div>
                <v-text-field v-model="form.lname" outlined  style="border:none" dir="rtl"></v-text-field>
                 <span class="red--text" v-if="errors.lname">{{errors.lname[0]}}</span>
              </v-col>
              <v-col cols="12" md="12">
                <label style="float:right">العنوان</label>
                <div style="clear:both"></div>
                <v-text-field v-model="form.address" outlined  style="border:none" dir="rtl"></v-text-field>
                 <span class="red--text" v-if="errors.address">{{errors.address[0]}}</span>
              </v-col>
              <v-col cols="12" md="12">
                <label style="float:right">المنزل</label>
                <div style="clear:both"></div>
                <v-text-field v-model="form.apartment" outlined  style="border:none" dir="rtl"></v-text-field>
                 <span class="red--text" v-if="errors.apartment">{{errors.apartment[0]}}</span>
              </v-col>
              <v-col cols="12" md="12">
                <label style="float:right">المدينة</label>
                <div style="clear:both"></div>
                <v-text-field v-model="form.city" outlined style="border:none"  dir="rtl"></v-text-field>
                 <span class="red--text" v-if="errors.city">{{errors.city[0]}}</span>
              </v-col>
              <v-col cols="12" sm="8">
                <label style="float:right">الدولة</label>
                <div style="clear:both"></div>
                <v-select v-model="form.country" :items="item_ar" outlined  dir="rtl" style="border:none"></v-select>
                 <span class="red--text" v-if="errors.country">{{errors.country[0]}}</span>
              </v-col>
              <!-- <v-col class="d-flex" cols="12" sm="4">
                <v-select
                  v-model="form.goverment"
                  item-text="name"
                  item-value="last"
                  :items="item"
                  label="المحافظة"
                  outlined
                ></v-select>
              </v-col> -->
              <v-col cols="12" sm="4">
                <label style="float:right">رمز البريد</label>
                <div style="clear:both"></div>
                <v-text-field v-model="form.postcode" outlined  style="border:none" dir="rtl"></v-text-field>
                 <span class="red--text" v-if="errors.postcode">{{errors.postcode[0]}}</span>
              </v-col>
              <v-col cols="12" md="12">
                <label style="float:right">الهاتف</label>
                <div style="clear:both"></div>
                <v-text-field v-model="form.phone" outlined  style="border:none" dir="rtl"></v-text-field>
                 <span class="red--text" v-if="errors.phone">{{errors.phone[0]}}</span>
              </v-col>
            </v-row>
            <v-btn color="#197bbd" style="float:right" class="check_btn" type="submit">متابعة الشراء</v-btn>
            <div style="clear:both"></div>
          </v-container>
        </v-form>
      </div>
      <div class="col-md-5 lg_discount" style="background-color:#fafafa">

        <div class="discount_section mt-5">
          <div class="border-bottom  p-2 img"
            v-for="item in cart"
            :key="item.product.id"
          >
            <img
             :src="item.product.img"
            />
            <span class="quantity">{{ item.quantity }}</span>
            <span class="price ml-5"> <strong>{{ item.product.name }}</strong></span>
            <div class="countity" style="float:right">
                 ${{item.price}}
            </div>
            <div style="clear:both"></div>
            <!-- <h6 style="width: 50%;margin-left: 70px;margin-top:-31px">{{ item.sizeTarget }} </h6> -->
          </div>

          <div class="discount">
            <v-form class="form_discount">
                  <v-row>
                    <v-col cols="12" sm="9" >
                      <v-text-field v-model="discount" label="الكوبون" outlined filled  style="border:none"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="3">
                      <v-btn @click="apply_discount()" color="#c8c8c8" style="color:white;padding:0 6px">خصم الأن</v-btn>
                    </v-col>
                  </v-row>
            </v-form>
          </div>
          <hr />
          <div class="discount_text" style="color:#737171;padding:10px">
            <div>
              <span style="font-size:14px;float:right;padding:10px;color:#444f58">الخصم</span>
              <span style="font-size:14px;color:#444f58;padding-right: 10px;">${{discount_value}}</span>
              <div style="clear:both"></div>
            </div>

          </div>

          <div style="padding:10px">
            <span style="float:right;font-size: 1.1428571429em;">الحساب الإجمالى</span>
            <span >
              <span style="color:#737171;padding-right: 10px;">USD&nbsp;&nbsp;<strong style="color:black;font-size:22px"> ${{totalprice_2}}</strong></span> 
            </span>
            <div style="clear:both"></div>
          </div>
        </div>
      </div>
    </div>


  </section>

</template>
 <script>
export default {

    computed: {
          larg(el,price,avilable){
             this.sizeTarget="Large - 70x93.5cm (28x37)"
            this.avilableTarget=avilable;
            this.active_el = el;
            this.priceTarget=price
            $(".active>.details_img").css({width:"100%",height:"250px"})
            $(".active>.content").css({width:"100%"})
        },
    cartTotalPrice() {
        this.totalprice_2= this.$store.getters.cartTotalPrice ;
      return this.$store.getters.cartTotalPrice;
    },
    cart() {
      return this.$store.state.cart;
    },
  },
  data() {
    return {
       errors: {},
      form: {
        email: null,
        lname: null,
        address: null,
        fname: null,
        apartment: null,
        city: null,
        phone: null,
        country: 'Saudi Arabia',
        goverment: 'Saudi Arabia',
        postcode: null,
        items: [],
        promocode:"",
      },
      discount: "",
      discount_value:0,
      totalprice_2:0,
      id:'',

      item: [
                "Afghanistan",
                "Albania",
                "Algeria",
                "American Samoa",
                "Andorra",
                "Angola",
                "Anguilla",
                "Antarctica",
                "Antigua and Barbuda",
                "Argentina",
                "Armenia",
                "Aruba",
                "Australia",
                "Austria",
                "Azerbaijan",
                "Bahamas (the)",
                "Bahrain",
                "Bangladesh",
                "Barbados",
                "Belarus",
                "Belgium",
                "Belize",
                "Benin",
                "Bermuda",
                "Bhutan",
                "Bolivia (Plurinational State of)",
                "Bonaire, Sint Eustatius and Saba",
                "Bosnia and Herzegovina",
                "Botswana",
                "Bouvet Island",
                "Brazil",
                "British Indian Ocean Territory (the)",
                "Brunei Darussalam",
                "Bulgaria",
                "Burkina Faso",
                "Burundi",
                "Cabo Verde",
                "Cambodia",
                "Cameroon",
                "Canada",
                "Cayman Islands (the)",
                "Central African Republic (the)",
                "Chad",
                "Chile",
                "China",
                "Christmas Island",
                "Cocos (Keeling) Islands (the)",
                "Colombia",
                "Comoros (the)",
                "Congo (the Democratic Republic of the)",
                "Congo (the)",
                "Cook Islands (the)",
                "Costa Rica",
                "Croatia",
                "Cuba",
                "Curaçao",
                "Cyprus",
                "Czechia",
                "Côte d'Ivoire",
                "Denmark",
                "Djibouti",
                "Dominica",
                "Dominican Republic (the)",
                "Ecuador",
                "Egypt",
                "El Salvador",
                "Equatorial Guinea",
                "Eritrea",
                "Estonia",
                "Eswatini",
                "Ethiopia",
                "Falkland Islands (the) [Malvinas]",
                "Faroe Islands (the)",
                "Fiji",
                "Finland",
                "France",
                "French Guiana",
                "French Polynesia",
                "French Southern Territories (the)",
                "Gabon",
                "Gambia (the)",
                "Georgia",
                "Germany",
                "Ghana",
                "Gibraltar",
                "Greece",
                "Greenland",
                "Grenada",
                "Guadeloupe",
                "Guam",
                "Guatemala",
                "Guernsey",
                "Guinea",
                "Guinea-Bissau",
                "Guyana",
                "Haiti",
                "Heard Island and McDonald Islands",
                "Holy See (the)",
                "Honduras",
                "Hong Kong",
                "Hungary",
                "Iceland",
                "India",
                "Indonesia",
                "Iran (Islamic Republic of)",
                "Iraq",
                "Ireland",
                "Isle of Man",
                "Israel",
                "Italy",
                "Jamaica",
                "Japan",
                "Jersey",
                "Jordan",
                "Kazakhstan",
                "Kenya",
                "Kiribati",
                "Korea (the Democratic People's Republic of)",
                "Korea (the Republic of)",
                "Kuwait",
                "Kyrgyzstan",
                "Lao People's Democratic Republic (the)",
                "Latvia",
                "Lebanon",
                "Lesotho",
                "Liberia",
                "Libya",
                "Liechtenstein",
                "Lithuania",
                "Luxembourg",
                "Macao",
                "Madagascar",
                "Malawi",
                "Malaysia",
                "Maldives",
                "Mali",
                "Malta",
                "Marshall Islands (the)",
                "Martinique",
                "Mauritania",
                "Mauritius",
                "Mayotte",
                "Mexico",
                "Micronesia (Federated States of)",
                "Moldova (the Republic of)",
                "Monaco",
                "Mongolia",
                "Montenegro",
                "Montserrat",
                "Morocco",
                "Mozambique",
                "Myanmar",
                "Namibia",
                "Nauru",
                "Nepal",
                "Netherlands (the)",
                "New Caledonia",
                "New Zealand",
                "Nicaragua",
                "Niger (the)",
                "Nigeria",
                "Niue",
                "Norfolk Island",
                "Northern Mariana Islands (the)",
                "Norway",
                "Oman",
                "Pakistan",
                "Palau",
                "Palestine, State of",
                "Panama",
                "Papua New Guinea",
                "Paraguay",
                "Peru",
                "Philippines (the)",
                "Pitcairn",
                "Poland",
                "Portugal",
                "Puerto Rico",
                "Qatar",
                "Republic of North Macedonia",
                "Romania",
                "Russian Federation (the)",
                "Rwanda",
                "Réunion",
                "Saint Barthélemy",
                "Saint Helena, Ascension and Tristan da Cunha",
                "Saint Kitts and Nevis",
                "Saint Lucia",
                "Saint Martin (French part)",
                "Saint Pierre and Miquelon",
                "Saint Vincent and the Grenadines",
                "Samoa",
                "San Marino",
                "Sao Tome and Principe",
                "Saudi Arabia",
                "Senegal",
                "Serbia",
                "Seychelles",
                "Sierra Leone",
                "Singapore",
                "Sint Maarten (Dutch part)",
                "Slovakia",
                "Slovenia",
                "Solomon Islands",
                "Somalia",
                "South Africa",
                "South Georgia and the South Sandwich Islands",
                "South Sudan",
                "Spain",
                "Sri Lanka",
                "Sudan (the)",
                "Suriname",
                "Svalbard and Jan Mayen",
                "Sweden",
                "Switzerland",
                "Syrian Arab Republic",
                "Taiwan",
                "Tajikistan",
                "Tanzania, United Republic of",
                "Thailand",
                "Timor-Leste",
                "Togo",
                "Tokelau",
                "Tonga",
                "Trinidad and Tobago",
                "Tunisia",
                "Turkey",
                "Turkmenistan",
                "Turks and Caicos Islands (the)",
                "Tuvalu",
                "Uganda",
                "Ukraine",
                "United Arab Emirates (the)",
                "United Kingdom of Great Britain and Northern Ireland (the)",
                "United States Minor Outlying Islands (the)",
                "United States of America (the)",
                "Uruguay",
                "Uzbekistan",
                "Vanuatu",
                "Venezuela (Bolivarian Republic of)",
                "Viet Nam",
                "Virgin Islands (British)",
                "Virgin Islands (U.S.)",
                "Wallis and Futuna",
                "Western Sahara",
                "Yemen",
                "Zambia",
                "Zimbabwe",
                "Åland Islands"
            ],
    item_ar :
        [       "أفغانستان" ,
                "ألبانيا" ,
                "الجزائر",
                "ساموا الأمريكية",
                "أندورا" ,
                "أنغولا" ,
                "أنغيلا" ,
                "أنتاركتيكا" ,
                "أنتيغوا وبربودا",
                "الأرجنتين" ,
                "أرمينيا" ,
                "أروبا" ,
                "أستراليا" ,
                "النمسا" ,
                "أذربيجان",
                "جزر البهاما" ,
                "البحرين",
                "بنغلاديش" ,
                "بربادوس" ,
                "بيلاروس" ,
                "بلجيكا" ,
                "بليز" ,
                "بنين" ,
                "برمودا" ,
                "بوتان" ,
                "بوليفيا (دولة - المتعددة القوميات)" ,
                "بونير وسينت أوستاتيوس وسابا" ,
                "البوسنة والهرسك",
                "بوتسوانا" ,
                "جزيرة بوفيت" ,
                "البرازيل",
                "إقليم المحيط الهندي البريطاني (the)" ,
                "بروناي دار السلام",
                "بلغاريا" ,
                "بوركينا فاسو",
                "بوروندي" ,
                "كابو فيردي" ,
                "كمبوديا" ,
                "الكاميرون" ,
                "كندا",
                "جزر كايمان (ال)" ,
                "جمهورية أفريقيا الوسطى" ,
                "تشاد" ,
                "تشيلي" ,
                "الصين",
                "جزيرة الكريسماس" ,
                "جزر كوكوس (كيلينغ)" ,
                "كولومبيا" ,
                "جزر القمر" ,
                "جمهورية الكونغو الديمقراطية" ,
                "الكونغو (ال)" ,
                "جزر كوك" ,
                "كوستا ريكا",
                "كرواتيا" ,
                "كوبا" ,
                "كوراساو" ,
                "قبرص" ,
                "التشيك" ,
                "كوت ديفوار" ,
                "الدنمارك" ,
                "جيبوتي" ,
                "دومينيكا" ,
                "جمهورية الدومينيكان" ,
                "إكوادور" ,
                "مصر" ,
                "السلفادور",
                "غينيا الإستوائية",
                "إريتريا" ,
                "إستونيا" ,
                "Eswatini" ,
                "أثيوبيا",
                "جزر فوكلاند (مالفيناس)" ,
                "جزر فارو" ,
                "فيجي" ,
                "فنلندا" ,
                "فرنسا",
                "غيانا الفرنسية",
                "بولينيزيا الفرنسية",
                "الأقاليم الجنوبية الفرنسية (ال)" ,
                "الغابون" ,
                "غامبيا" ,
                "جورجيا" ,
                "ألمانيا",
                "غانا" ,
                "جبل طارق" ,
                "اليونان",
                "الأرض الخضراء",
                "غرينادا" ,
                "جوادلوب" ,
                "غوام" ,
                "غواتيمالا" ,
                "غيرنسي" ,
                "غينيا" ,
                "غينيا - بيساو" ,
                "غيانا" ,
                "هايتي" ,
                "قلب الجزيرة وجزر ماكدونالز",
                "الكرسي الرسولي" ,
                "هندوراس" ,
                "هونغ كونغ" ,
                "هنغاريا",
                "أيسلندا",
                "الهند",
                "إندونيسيا",
                "جمهورية إيران الإسلامية" ,
                "العراق",
                "أيرلندا" ,
                "جزيرة آيل أوف مان",
                "إسرائيل",
                "إيطاليا",
                "جامايكا" ,
                "اليابان",
                "جيرسي" ,
                "الأردن",
                "كازاخستان" ,
                "كينيا" ,
                "كيريباتي" ,
                "كوريا (جمهورية - الديمقراطية الشعبية)" ,
                "جمهورية كوريا" ,
                "الكويت",
                "قيرغيزستان" ,
                "جمهورية لاو الديمقراطية الشعبية (ذا)" ,
                "لاتفيا" ,
                "لبنان" ,
                "ليسوتو" ,
                "ليبيريا" ,
                "ليبيا" ,
                "ليختنشتاين" ,
                "ليتوانيا" ,
                "لوكسمبورغ" ,
                "ماكاو" ,
                'مدغشقر',
                "ملاوي" ,
                "ماليزيا" ,
                "جزر المالديف" ,
                "مالي" ,
                "مالطا" ,
                "جزر مارشال" ,
                "مارتينيك" ,
                "موريتانيا" ,
                "موريشيوس" ,
                "مايوت" ,
                "المكسيك" ,
                "ميكرونيزيا (ولايات - الموحدة)" ,
                "مولدوفا (جمهورية)" ,
                "موناكو" ,
                "منغوليا" ,
                "الجبل الأسود" ,
                "مونتسيرات" ,
                "المغرب",
                "موزمبيق" ,
                "ميانمار" ,
                "ناميبيا" ,
                "ناورو" ,
                "نيبال" ,
                "هولندا" ,
                "كاليدونيا الجديدة",
                "نيوزيلندا",
                "نيكاراغوا" ,
                "النيجر" ,
                "نيجيريا" ,
                "نيوي" ,
                "جزيرة نورفولك" ,
                "جزر ماريانا الشمالية" ,
                "النرويج",
                "سلطنة عمان",
                "باكستان" ,
                "بالاو" ,
                "فلسطين , دولة" ,
                "بنما" ,
                "بابوا غينيا الجديدة" ,
                "باراغواي" ,
                "بيرو",
                "الفلبين" ,
                "بيتكيرن" ,
                "بولندا",
                "البرتغال",
                "بورتوريكو" ,
                "دولة قطر",
                "جمهورية شمال مقدونيا" ,
                "رومانيا",
                "الاتحاد الروسي" ,
                "رواندا" ,
                "جمع شمل",
                "سانت بارتيليمي",
                "سانت هيلانة وأسنسيون وتريستان دا كونها" ,
                "سانت كيتس ونيفيس",
                "القديسة لوسيا",
                "سانت مارتن (الجزء الفرنسي)" ,
                "سانت بيير وميكلون",
                "سانت فنسنت وجزر غرينادين",
                "ساموا" ,
                "سان مارينو",
                "ساو تومي وبرينسيبي" ,
                "المملكة العربية السعودية",
                "السنغال",
                "صربيا" ,
                "سيشيل" ,
                "سيرا ليون",
                "سنغافورة" ,
                "سانت مارتن (الجزء الهولندي)" ,
                "سلوفاكيا" ,
                "سلوفينيا" ,
                "جزر سليمان",
                "الصومال",
                "جنوب أفريقيا",
                "جورجيا الجنوبية وجزر ساندويتش الجنوبية",
                "جنوب السودان",
                "إسبانيا",
                "سيريلانكا",
                "السودان" ,
                "سورينام" ,
                "سفالبارد وجان ماين" ,
                "السويد",
                "سويسرا" ,
                "الجمهورية العربية السورية",
                "تايوان" ,
                "طاجيكستان" ,
                "جمهورية تنزانيا المتحدة" ,
                "تايلاند" ,
                "تيمور الشرقية" ,
                "توجو",
                "توكيلاو" ,
                "تونغا" ,
                "ترينداد وتوباغو",
                "تونس" ,
                "ديك رومي",
                "تركمانستان" ,
                "جزر تركس وكايكوس" ,
                "توفالو" ,
                "أوغندا" ,
                "أوكرانيا" ,
                "الإمارات العربية المتحدة" ,
                "المملكة المتحدة لبريطانيا العظمى وأيرلندا الشمالية (ال)" ,
                "جزر الولايات المتحدة الصغيرة النائية (ال)" ,
                "الولايات المتحدة الأمريكية" ,
                "أوروغواي" ,
                "أوزبكستان" ,
                "فانواتو" ,
                "فنزويلا (جمهورية - البوليفارية)" ,
                "فيتنام" ,
                "جزر العذراء البريطانية)",
                "جزر فيرجن (الولايات المتحدة)" ,
                "واليس وفوتونا",
                "الصحراء الغربية",
                "اليمن",
                "زامبيا" ,
                "زيمبابوي" ,
                "جزر آلاند"
          ],
      nameRules: [v => !!v || "Name is required"],
      checkbox: false,
      message: "",
      formview:'',
      discount_section:false,

    };
  },
  mounted(){
      $(".modal-mask").css("display","none")
      
  },
  created(){
this.cartTotalPrice;
//  {"paletteid":"3","palettesize":"medium","quantity":5}
this.cart.forEach(element => {

    this.form.items.push({
            paletteid: element.product.id,
            palettesize: element.sizeTarget,
            quantity: element.quantity,
    })
});


  },
  methods: {
      apply_discount(){
            //console.log(this.discount);
            axios.post('/api/check-promo',{code:this.discount}).then((data)=>{
                // console.log(data.data);
                if(data.data.status)
                {
                    var price=parseInt(data.data.percentage);
                    this.discount_value=this.cartTotalPrice * price/100;
                    this.cartTotalPrice = this.cartTotalPrice - this.discount_value;
                    this.form.promocode=this.discount
                }

            }).catch(e=>{console.log(e);
            })


      },
       clearProductFromCart(product){
      this.$store.dispatch("deleteCartItem",product)
    },
    clearCartItems(){
      this.$store.dispatch("clearCartItems")
    },

    send() {
        // console.log(this.cart());
// this.form.items=[    {paletteid:22,palettesize:"small",quantity:22}, {paletteid:2,palettesize:"small",quantity:22}]
      axios
        .post("/api/add-order", this.form)
        .then(data => {
          // console.log(data.data);
          // if (!data.data.status) {
          //   // console.log(data.data);
          //   this.errors = data.data.errors;
          // } else {
              $('#exampleModalCenter').modal('show')
              // console.log(data.data.checkid);
              // console.log(data.data.orderid);

            this.formview=data.data.orderid
            this.id=data.data.orderid

            this.message = "donnnnnnnnnnnnnnnnne";
            let tag = document.createElement("script");
                tag.setAttribute("src", "https://test.oppwa.com/v1/paymentWidgets.js?checkoutId="+data.data.checkid);
                document.head.appendChild(tag);
              this.errors=""
          //}
        })

      .catch(error => this.errors = error.response.data.errors)
    },
  }
};
</script>

<style scoped>
.form {
  width: 60%;
  margin: auto;
}
.img{
    margin: 20px 0 ;
}
.img img {
  width: 62px;
  height: 70px;
}
.form_discount {
  padding: 10px;
}
.discount_section {
  width: 65%;
}
.countity{
  margin-top: 20px;
}
.check_btn{
    border: 1px transparent solid;
    border-radius: 5px;
    color: white;
    font-weight: 500;
    padding: 25px 15px !important;
    text-align: center;
}
.price{
    position: relative;
    top: -16px;
}
@media (min-width: 767px) and (max-width: 991px) {
  .discount_section {
    width: 100%;
  }
}

.alert{
    text-align: center;
}
.sm_discount{
  display: none;
}
@media (max-width:767px)
{
  .lg_discount{
    display: none;
  }
  .sm_discount{
    display: block;
  }
}
.quantity{
    position: absolute;
    left: 70px;
    width: 25px;
    height: 25px;
    background: darkgray;
    border-radius: 50%;
    text-align: center;
    line-height: 25px
}
@media (max-width:767px){
  .quantity{
    left: 78px;
  }
}
.clickdown{
  cursor: pointer;
  font-size: 18px;
  color: #197bbd;
  padding: 7px;
}
.theme--light.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {
    background-color: #f5f5f5;
    margin-top: 9px;
}
@media (max-width:767px)
{
 .theme--light.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {
    background-color: #f5f5f5;
    margin-top: 14px;
  } 
}

.theme--light.v-text-field--filled>.v-input__control>.v-input__slot {
    background-color: white !important;
}
.theme--light.v-input{
  padding: 0 !important;
}
.v-text-field>.v-input__control>.v-input__slot>.v-text-field__slot  input{
    text-align: start !important;
}
</style>
