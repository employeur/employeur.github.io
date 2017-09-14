webpackJsonp([0],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultiSelectTarget; });
var MultiSelectTarget;
(function (MultiSelectTarget) {
    MultiSelectTarget[MultiSelectTarget["Week"] = 0] = "Week";
    MultiSelectTarget[MultiSelectTarget["CustomRange"] = 1] = "CustomRange";
})(MultiSelectTarget || (MultiSelectTarget = {}));
;
//# sourceMappingURL=shared.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VojCardModule", function() { return VojCardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__voj_card__ = __webpack_require__(822);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__voj_menu_voj_menu_module__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__voj_segment_voj_segment_module__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__voj_map_voj_map_module__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__voj_page_header_voj_page_header_module__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var VojCardModule = (function () {
    function VojCardModule() {
    }
    VojCardModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__voj_card__["a" /* VojCard */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__voj_menu_voj_menu_module__["VojMenuModule"],
                __WEBPACK_IMPORTED_MODULE_4__voj_segment_voj_segment_module__["VojSegmentModule"],
                __WEBPACK_IMPORTED_MODULE_5__voj_map_voj_map_module__["VojMapModule"],
                __WEBPACK_IMPORTED_MODULE_6__voj_page_header_voj_page_header_module__["a" /* VojPageHeaderModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__voj_card__["a" /* VojCard */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__voj_card__["a" /* VojCard */]
            ]
        })
    ], VojCardModule);
    return VojCardModule;
}());

//# sourceMappingURL=voj-card.module.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VojMapModule", function() { return VojMapModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__voj_map__ = __webpack_require__(824);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VojMapModule = (function () {
    function VojMapModule() {
    }
    VojMapModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__voj_map__["a" /* VojMap */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__voj_map__["a" /* VojMap */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__voj_map__["a" /* VojMap */]
            ],
            providers: []
        })
    ], VojMapModule);
    return VojMapModule;
}());

//# sourceMappingURL=voj-map.module.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LandingPage = (function () {
    function LandingPage() {
    }
    LandingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'landing-page',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/landing-page/landing-page.html"*/'<!DOCTYPE html>\n<html lang="en">\n<head>\n	<meta charset="UTF-8">\n	<title>Landing page</title>\n</head>\n<body>\nBienvenue à Vitonjob\n\n</body>\n</html>'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/landing-page/landing-page.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], LandingPage);
    return LandingPage;
}());

//# sourceMappingURL=landing-page.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainAddressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(846);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_account_service_account_service__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__personal_details_personal_details__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_navigation_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__config_voj_configuration__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_utils__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MainAddressPage = (function () {
    function MainAddressPage(http, loadingCtrl, configurationService, accountService, storage, viewCtrl, navParams, navigationService) {
        var _this = this;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.configurationService = configurationService;
        this.accountService = accountService;
        this.storage = storage;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.navigationService = navigationService;
        this.isMobile = false;
        this.isInscription = this.navParams.data.isInscription;
        this.config = this.configurationService.configuration;
        this.config.isLargeScreen ? this.isMobile = false : this.isMobile = true;
        // Set header data
        this.dataPageHeader = {
            title: 'Mon adresse',
            actions: [
                {
                    id: 'help',
                    label: '',
                    icon: 'help',
                    action: function () {
                        console.log('Click help button.');
                    }
                }
            ],
            style: 'any',
            isCanceled: false
        };
        // Set form data
        this.formData = {
            title: '',
            fields: [
                // Button
                {
                    type: 'button',
                    label: 'Me géolocaliser',
                    visible: true,
                    id: '',
                    action: function () {
                        console.log('Click Geolocalise me.');
                        _this.getCurrentAddress();
                    }
                },
                // Text
                /*{
                        placeholder: '',
                        type: 'text',
                        value: 'Domicile',
                        label: 'Name of address',
                        required: true,
                        readonly: false,
                        visible: true,
                        min: 0,
                        max: 100,
                        regex: '^[A-Za-z0-9 ]*$',
                        validationMsg: 'Name of address error',
                        id: '',
                        name: 'name'
                },*/
                // Text
                {
                    placeholder: '',
                    type: 'text',
                    value: '',
                    label: 'N°',
                    required: !this.isInscription,
                    readonly: false,
                    visible: true,
                    min: 0,
                    max: 100,
                    regex: '^[A-Za-z0-9 ]*$',
                    //validationMsg: 'N° error',
                    id: '',
                    name: 'number'
                },
                // Text
                {
                    placeholder: '',
                    type: 'text',
                    value: '',
                    label: 'Rue',
                    required: !this.isInscription,
                    readonly: false,
                    visible: true,
                    min: 0,
                    max: 100,
                    // regex: '^[A-Za-z0-9 ]*$',
                    //validationMsg: 'Street name error',
                    id: '',
                    name: 'street'
                },
                // Number
                {
                    placeholder: '',
                    type: 'text',
                    value: null,
                    label: 'Code postal',
                    required: !this.isInscription,
                    readonly: false,
                    visible: true,
                    min: 0,
                    max: 5,
                    regex: '^[0-9]*$',
                    //validationMsg: 'Postal code error',
                    id: '',
                    name: 'zipCode'
                },
                // Text
                {
                    placeholder: '',
                    type: 'text',
                    value: '',
                    label: 'Ville',
                    required: !this.isInscription,
                    readonly: false,
                    visible: true,
                    min: 0,
                    max: 100,
                    // regex: '^[A-Za-z ]*$',
                    //validationMsg: 'City error',
                    id: '',
                    name: 'city'
                },
            ],
            submit: {
                id: '',
                icon: '',
                label: (this.isInscription ? 'Suivant' : 'Valider'),
                action: function (event) {
                    _this.saveAddress();
                }
            }
        };
        this.storage.get("currentUser").then(function (val) {
            _this.currentUser = JSON.parse(val);
        });
    }
    MainAddressPage.prototype.saveAddress = function () {
        var _this = this;
        //if all fields are empty, ignore this step and go to the next page
        var ignoreThisStep = !__WEBPACK_IMPORTED_MODULE_9__utils_utils__["a" /* ObjectUtils */].isFormNotEmpty(this.formData.fields);
        if (ignoreThisStep) {
            this.goToPersonalDetailsPage();
            return;
        }
        var addressDto = {
            id: 0,
            //name: this.formData.fields.filter(f => f.name === "name")[0].value,
            name: "",
            number: this.formData.fields.filter(function (f) { return f.name === "number"; })[0].value,
            street: this.formData.fields.filter(function (f) { return f.name === "street"; })[0].value,
            zipCode: this.formData.fields.filter(function (f) { return f.name === "zipCode"; })[0].value,
            city: this.formData.fields.filter(function (f) { return f.name === "city"; })[0].value,
            adressType: ""
        };
        this.accountService.saveAddress(addressDto, this.currentUser.id).then(function (data) {
            if (data.status == "success") {
                //in the case of inscription: we should dismiss the mainAdress modal/page and show the PersonalDetails modal/page
                if (_this.isInscription) {
                    _this.goToPersonalDetailsPage();
                }
                else {
                    //TODO: display a notification of success
                }
            }
            else {
                console.log("une erreur est survenue lors de l'enregistrement des données");
                console.log(data.error);
            }
        });
    };
    MainAddressPage.prototype.goToPersonalDetailsPage = function () {
        this.navigationService.dismiss(this.viewCtrl);
        var vojPage = { page: __WEBPACK_IMPORTED_MODULE_6__personal_details_personal_details__["a" /* PersonalDetailsPage */], isModal: true, params: { isInscription: this.isInscription } };
        this.navigationService.navigate("main", vojPage);
    };
    MainAddressPage.prototype.getCurrentAddress = function () {
        var _this = this;
        // Show loading spinner
        var loading = this.loadingCtrl.create({});
        loading.present();
        //TODO: make a function that reset all the fields
        // Clear input fields
        for (var key in this.formData.fields) {
            // Clear city
            if (this.formData.fields[key].name === 'city') {
                this.formData.fields[key].value = '';
            }
            else if (this.formData.fields[key].name === 'street') {
                this.formData.fields[key].value = '';
            }
            else if (this.formData.fields[key].name === 'number') {
                this.formData.fields[key].value = '';
            }
            else if (this.formData.fields[key].name === 'zipCode') {
                this.formData.fields[key].value = null;
            }
        }
        // Check for geolocation availability
        if (!navigator.geolocation) {
            // Hide loading spinner
            loading.dismiss();
            //TODO: display a error msg explaining the cause of the geolocation failure
            return;
        }
        // Get current position
        navigator.geolocation.getCurrentPosition(function (res) {
            // Current coordinates
            var latitude = res.coords.latitude;
            var longitude = res.coords.longitude;
            //TODO: put this address in a file that contains constants, keys, ...
            // Google API key
            var key = 'AIzaSyAiXwdHbyWYjC63gTo1X3IUKTKf64oiAgI';
            // Full URL for request
            var url = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + latitude + ',' + longitude + '&key=' + key;
            // Request for getting address data
            _this.http.get(url).toPromise()
                .then(function (response) {
                var geocodeData = response.json().results;
                var streetName, buildNum, city, postalCode;
                // Get current address
                for (var i = 0; i < geocodeData[0].address_components.length; i++) {
                    // Get current city
                    if (geocodeData[0].address_components[i].types[0] === 'locality' &&
                        geocodeData[0].address_components[i].types[1] === 'political') {
                        city = geocodeData[0].address_components[i].long_name;
                        console.log('City:', city);
                    }
                    else if (geocodeData[0].address_components[i].types[0] === 'route') {
                        streetName = geocodeData[0].address_components[i].long_name;
                        console.log('Street:', streetName);
                    }
                    else if (geocodeData[0].address_components[i].types[0] === 'street_number') {
                        buildNum = geocodeData[0].address_components[i].long_name;
                        console.log('Build Number:', buildNum);
                    }
                }
                // Get postal code
                for (var k = 1; k < 3; k++) {
                    for (var i = 0; i < geocodeData[k].address_components.length; i++) {
                        if (geocodeData[k].address_components[i].types[0] === 'postal_code') {
                            postalCode = geocodeData[k].address_components[i].long_name;
                            console.log('Postal code:', postalCode);
                        }
                    }
                }
                // Set input fields
                for (var key_1 in _this.formData.fields) {
                    // Set city
                    if (_this.formData.fields[key_1].name === 'city') {
                        _this.formData.fields[key_1].value = city;
                    }
                    else if (_this.formData.fields[key_1].name === 'street') {
                        _this.formData.fields[key_1].value = streetName;
                    }
                    else if (_this.formData.fields[key_1].name === 'number') {
                        _this.formData.fields[key_1].value = buildNum;
                    }
                    else if (_this.formData.fields[key_1].name === 'zipCode') {
                        _this.formData.fields[key_1].value = Number(postalCode);
                    }
                }
                // Hide loading spinner
                loading.dismiss();
            })
                .catch(function (err) {
                // Hide loading spinner
                loading.dismiss();
            });
        }, function (err) {
            // Hide loading spinner
            loading.dismiss();
        });
    };
    MainAddressPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'main-address-page',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/account-module/main-address/main-address.html"*/'<voj-page-header [data]="dataPageHeader"></voj-page-header>\n\n<div [ngClass]="isMobile ? \'main-address-container\' : \'\'" class="voj-content">\n  <div class="voj-form-container">\n    <voj-form [data]=\'formData\'></voj-form>\n  </div>\n</div>\n'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/account-module/main-address/main-address.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_8__config_voj_configuration__["a" /* Configuration */],
            __WEBPACK_IMPORTED_MODULE_4__providers_account_service_account_service__["a" /* AccountService */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_7__services_navigation_service__["a" /* NavigationService */]])
    ], MainAddressPage);
    return MainAddressPage;
}());

//# sourceMappingURL=main-address.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_masterdata_service_masterdata_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__personal_details_identity_personal_details_identity__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_profile_service_profile_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config_voj_configuration__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_navigation_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_utils__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var PersonalDetailsPage = (function () {
    function PersonalDetailsPage(configuration, platform, profileService, masterdataService, navParams, viewCtrl, navigationService, storage) {
        var _this = this;
        this.configuration = configuration;
        this.platform = platform;
        this.profileService = profileService;
        this.masterdataService = masterdataService;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.navigationService = navigationService;
        this.storage = storage;
        this.config = this.configuration.configuration;
        this.config.isLargeScreen ? this.isMobile = false : this.isMobile = true;
        this.isInscription = this.navParams.data.isInscription;
        this.headerData = {
            title: 'Mes données sociales',
            style: 'any',
            isCanceled: true,
            actions: [{
                    id: 'xdfgchvbjknm',
                    label: 'help',
                    icon: 'help',
                    action: function () {
                        console.log('button works');
                    }
                }],
        };
        this.formData = {
            fields: [
                {
                    required: !this.isInscription,
                    type: 'date',
                    label: 'Date de naissance',
                    readonly: false,
                    visible: true,
                    id: 'date-of-birth',
                    //validationMsg: 'Date of birth error',
                    name: 'dateOfBirth'
                },
                {
                    required: !this.isInscription,
                    type: 'select',
                    value: '',
                    label: 'Pays de naissance',
                    dataset: [],
                    visible: true,
                    //validationMsg: 'Country of birth error',
                    id: 'country-of-birth',
                    name: 'countryBirth',
                    action: function () {
                        _this.setDepartmentList();
                    }
                },
                {
                    required: !this.isInscription,
                    type: 'select',
                    value: '',
                    label: 'Département de naissance',
                    dataset: [],
                    readonly: false,
                    visible: true,
                    //validationMsg: 'Department of birth error',
                    id: 'department-of-birth',
                    name: 'departmentOfBirth',
                    action: function () {
                        _this.changeDepartment();
                    }
                },
                {
                    required: !this.isInscription,
                    type: 'select',
                    value: '',
                    label: 'Lieu de naissance',
                    dataset: [],
                    readonly: false,
                    visible: true,
                    //validationMsg: 'Place of birth error',
                    id: 'place-of-birth',
                    name: 'placeOfBirth'
                },
                {
                    required: !this.isInscription,
                    type: 'number',
                    value: '',
                    label: 'Numéro de sécurité sociale',
                    readonly: false,
                    visible: true,
                    //validationMsg: 'Social security number error',
                    id: 'social-security-number',
                    name: 'socialSecurityNumber'
                }
            ],
            submit: {
                label: (this.isInscription ? 'Suivant' : 'Valider'),
                id: 'valid-btn',
                icon: 'no',
                action: function () {
                    _this.savePersonalDetails();
                }
            }
        };
        this.formData.fields[0].max = this.setMaxBirthDay();
        // Initialization
        this.foreignDepartmentList = [
            {
                value: '99',
                key: 'Etranger',
                id: 99
            }
        ];
        this.franceDepartmentList = [];
        this.storage.get("currentUser").then(function (val) {
            _this.currentUser = JSON.parse(val);
        });
    }
    PersonalDetailsPage.prototype.savePersonalDetails = function () {
        var _this = this;
        //if all fields are empty, ignore this step and go to the next page
        var ignoreThisStep = !__WEBPACK_IMPORTED_MODULE_8__utils_utils__["a" /* ObjectUtils */].isFormNotEmpty(this.formData.fields);
        if (ignoreThisStep) {
            this.gotoPersonalDetailsIdentity();
            return;
        }
        var countryPhoneCode = this.formData.fields.filter(function (f) { return f.name === "countryBirth"; })[0].value;
        var birthData;
        //if the user is french, save his department and municipality, else don't save them
        if (countryPhoneCode == "33") {
            birthData = {
                birthdate: __WEBPACK_IMPORTED_MODULE_8__utils_utils__["b" /* StringUtils */].preventNull(this.formData.fields.filter(function (f) { return f.name === "dateOfBirth"; })[0].value),
                country: this.formData.fields[1].dataset.filter(function (c) { return c.value === countryPhoneCode; })[0].id,
                department: this.formData.fields.filter(function (f) { return f.name === "departmentOfBirth"; })[0].value,
                municipality: this.formData.fields.filter(function (f) { return f.name === "placeOfBirth"; })[0].value
            };
        }
        else {
            birthData = {
                birthdate: this.formData.fields.filter(function (f) { return f.name === "dateOfBirth"; })[0].value,
                country: this.formData.fields[1].dataset.filter(function (c) { return c.value === countryPhoneCode; })[0].id,
                department: "",
                municipality: ""
            };
        }
        var numSS = this.formData.fields.filter(function (f) { return f.name === "socialSecurityNumber"; })[0].value;
        this.profileService.savePersonalDetails(this.currentUser.id, birthData, numSS).then(function (data) {
            if (data.status == "success") {
                if (_this.isInscription) {
                    _this.gotoPersonalDetailsIdentity();
                }
                else {
                    //TODO: display a notification of success
                }
            }
            else {
                console.log("une erreur est survenue lors de l'enregistrement des données");
                console.log(data.error);
            }
        });
    };
    PersonalDetailsPage.prototype.gotoPersonalDetailsIdentity = function () {
        this.navigationService.dismiss(this.viewCtrl);
        var vojPage = { page: __WEBPACK_IMPORTED_MODULE_3__personal_details_identity_personal_details_identity__["a" /* PersonalDetailsIdentityPage */], isModal: true, params: { isInscription: this.isInscription } };
        this.navigationService.navigate("main", vojPage);
    };
    PersonalDetailsPage.prototype.setDepartmentList = function () {
        if (this.franceDepartmentList.length === 0) {
            return;
        }
        var chosenCountry = this.formData.fields[1].value;
        // If France
        if (chosenCountry === '33') {
            this.formData.fields[2].readonly = false;
            this.formData.fields[3].readonly = false;
            this.formData.fields[2].dataset = this.franceDepartmentList;
            this.formData.fields[2].value = this.formData.fields[2].dataset[0].value; // Chosen by default
        }
        else if (chosenCountry !== '33') {
            this.formData.fields[2].readonly = true;
            this.formData.fields[3].readonly = true;
            this.formData.fields[2].dataset = this.foreignDepartmentList;
            this.formData.fields[2].value = '99'; // Chosen by default
        }
        this.getMunicipalities(this.formData.fields[2].dataset[0].id);
    };
    PersonalDetailsPage.prototype.setMaxBirthDay = function () {
        var _a = [String(new Date().getDate()), String(new Date().getMonth()),
            String(new Date().getFullYear() - 18)], date = _a[0], month = _a[1], year = _a[2];
        Number(date) < 10 ? date = '0' + date : date;
        Number(month) < 10 ? month = '0' + month : month;
        return year + "-" + month + "-" + date;
    };
    PersonalDetailsPage.prototype.showWarningBirthDayMessage = function () {
        var warningDiv = document.createElement('div');
        warningDiv.setAttribute('id', 'voj-warning-msg');
        warningDiv.innerHTML = '<p>Vous devez avoir plus de 18 ans</p>';
        warningDiv.className = 'voj-warning-msg';
        var parentId = 'date-of-birth';
        document.getElementById(parentId).appendChild(warningDiv);
    };
    PersonalDetailsPage.prototype.getMunicipalities = function (departmentId) {
        // Show loading spinner
        //let loading = this.loadingCtrl.create();
        //loading.present();
        var _this = this;
        this.profileService.getMunicipalitiesByDepartment(departmentId).then(function (data) {
            _this.formData.fields[3].dataset = _this.profileService.convertMunicipalitiesToDataset(data);
            // If France - first value by default
            if (_this.formData.fields[1].value === '33') {
                _this.formData.fields[3].value = _this.formData.fields[3].dataset[0].value;
            }
            // Hide loading spinner
            //loading.dismiss();
        });
    };
    PersonalDetailsPage.prototype.changeDepartment = function () {
        // Get Municipalities for Department
        for (var key in this.formData.fields[2].dataset) {
            if (this.formData.fields[2].dataset[key].value === this.formData.fields[2].value) {
                this.getMunicipalities(this.formData.fields[2].dataset[key].id);
            }
        }
    };
    PersonalDetailsPage.prototype.ngOnInit = function () {
        // Show loading spinner
        //let loading = this.loadingCtrl.create();
        //loading.present();
        var _this = this;
        this.masterdataService.loadCountriesList().then(function (data) {
            //set dataset of nationalities of the form
            _this.formData.fields.filter(function (f) { return f.name === "countryBirth"; })[0].dataset = _this.masterdataService.convertCountriesListToDataset(data);
            //the default nationality is "France"
            _this.formData.fields.filter(function (f) { return f.name === "countryBirth"; })[0].value = "33";
            console.log('Countries list dataset:', _this.formData.fields[1].dataset);
            // Get Department List
            _this.masterdataService.loadDepartmentList().then(function (data) {
                _this.franceDepartmentList = _this.masterdataService.convertDepartmentsListToDataset(data);
                // Set Department List
                _this.setDepartmentList();
                // Hide loading spinner
                //loading.dismiss();
            });
        });
    };
    PersonalDetailsPage.prototype.ionViewDidLoad = function () {
        this.showWarningBirthDayMessage();
    };
    PersonalDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'personal-details-page',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/account-module/personal-details/personal-details.html"*/'<voj-page-header [data]=\'headerData\'></voj-page-header>\n\n  <div [ngClass]="isMobile ? \'personal-details-container\' : \'\'" class="voj-content">\n    <div class="voj-form-container">\n      <voj-form [data]=\'formData\'></voj-form>\n    </div>\n  </div>\n'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/account-module/personal-details/personal-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__config_voj_configuration__["a" /* Configuration */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__providers_profile_service_profile_service__["a" /* ProfileService */],
            __WEBPACK_IMPORTED_MODULE_2__providers_masterdata_service_masterdata_service__["a" /* MasterdataService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_6__services_navigation_service__["a" /* NavigationService */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */]])
    ], PersonalDetailsPage);
    return PersonalDetailsPage;
}());

//# sourceMappingURL=personal-details.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalDetailsIdentityPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_voj_configuration__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_masterdata_service_masterdata_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bank_settings_bank_settings__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_navigation_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_profile_service_profile_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_utils__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the PersonalDetailsIdentityPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PersonalDetailsIdentityPage = (function () {
    function PersonalDetailsIdentityPage(configurationService, masterdataService, loadingCtrl, navParams, navigationService, viewCtrl, profileService, storage) {
        var _this = this;
        this.configurationService = configurationService;
        this.masterdataService = masterdataService;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.navigationService = navigationService;
        this.viewCtrl = viewCtrl;
        this.profileService = profileService;
        this.storage = storage;
        this.config = this.configurationService.configuration;
        this.isInscription = this.navParams.data.isInscription;
        this.formData = {
            fields: [
                {
                    type: 'select',
                    value: '',
                    dataset: [],
                    label: 'Nationalité',
                    required: !this.isInscription,
                    visible: true,
                    id: '',
                    name: 'nationality',
                    action: function () { return _this.checkNationalities(); }
                },
                {
                    type: 'select',
                    value: '',
                    dataset: [],
                    label: 'Type de pièce d\'identité',
                    required: !this.isInscription,
                    visible: true,
                    id: '',
                    name: 'typeCard',
                    action: function () { return _this.checkDocument(); }
                },
                {
                    type: 'text',
                    value: '',
                    label: 'Numéro de pièce d\'identité',
                    required: !this.isInscription,
                    visible: true,
                    regex: '^[A-Za-z0-9]*$',
                    validationMsg: 'Veuillez ne pas saisir de caractères spéciaux ou d\'espaces',
                    id: '',
                    name: 'cardNumber',
                },
                {
                    type: 'date',
                    value: '',
                    label: 'Délivrée le',
                    required: !this.isInscription,
                    visible: true,
                    id: '',
                    name: 'deliveredDate',
                    action: function () {
                        _this.chooseDeliveredDate();
                    }
                },
                {
                    type: 'select',
                    value: '',
                    dataset: [],
                    label: 'Par',
                    required: !this.isInscription,
                    visible: true,
                    id: '',
                    name: 'prefecture',
                },
                {
                    type: 'date',
                    value: '',
                    label: 'Valable du',
                    required: !this.isInscription,
                    visible: true,
                    id: '',
                    name: 'validFrom',
                    disabled: true,
                    action: function () {
                        _this.chooseValidFromDate();
                    }
                },
                {
                    type: 'date',
                    value: '',
                    label: 'Au',
                    required: !this.isInscription,
                    visible: true,
                    id: '',
                    name: 'validTo',
                    disabled: true
                }
            ],
            submit: {
                id: '',
                icon: '',
                label: (this.isInscription ? 'Suivant' : 'Valider'),
                action: function (event) {
                    console.log('navigation to J-S-GCO-V1-03 Information Resume ');
                    _this.savePersonalDetailsIdentity();
                }
            }
        };
        this.headerData = {
            title: 'Mon identité',
            actions: [
                {
                    id: '',
                    icon: 'help',
                    label: 'help',
                    action: function (event) {
                        console.log('help button works');
                    }
                }
            ],
            style: '',
            isCanceled: false
        };
        // Initialization of documents lists
        this.europeanDocsList = [
            {
                id: 301,
                key: 'CNI',
                value: '1'
            },
            {
                id: 302,
                key: 'Passeport',
                value: '2'
            },
            {
                id: 303,
                key: 'Carte des ressortissants de l\'union européenne',
                value: '3'
            }
        ];
        this.foreignDocsList = [
            {
                id: 304,
                key: 'Carte des résidants',
                value: '4'
            },
            {
                id: 305,
                key: 'Carte de séjour',
                value: '5'
            }
        ];
    }
    PersonalDetailsIdentityPage.prototype.chooseDeliveredDate = function () {
        // Change Delivered Date
        if (this.formData.fields[3].value !== '') {
            this.formData.fields[5].disabled = false;
            this.formData.fields[5].min = this.getNextDay(this.formData.fields[3].value);
        }
        else if (this.formData.fields[3].value === '') {
            this.formData.fields[5].disabled = true;
            this.formData.fields[6].disabled = true;
        }
        // Clear next fields date
        this.formData.fields[5].value = '';
        this.formData.fields[6].value = '';
    };
    PersonalDetailsIdentityPage.prototype.chooseValidFromDate = function () {
        console.log('date:', this.formData.fields[5].value);
        // Change Valid From Date
        if (this.formData.fields[5].value !== '') {
            this.formData.fields[6].disabled = false;
            this.formData.fields[6].min = this.getNextDay(this.formData.fields[5].value);
        }
        else if (this.formData.fields[5].value === '') {
            this.formData.fields[6].disabled = true;
        }
        // Clear next field date
        this.formData.fields[6].value = '';
    };
    PersonalDetailsIdentityPage.prototype.getNextDay = function (date) {
        // Calc next day
        var chosenDate = new Date(date);
        chosenDate.setDate(chosenDate.getDate() + 1);
        var currentMonth = (chosenDate.getMonth() + 1).toString();
        currentMonth = (currentMonth.length === 1) ? '0' + currentMonth : currentMonth;
        var currentDay = chosenDate.getDate().toString();
        currentDay = (currentDay.length === 1) ? '0' + currentDay : currentDay;
        return chosenDate.getFullYear() + '-' + currentMonth + '-' + currentDay;
    };
    PersonalDetailsIdentityPage.prototype.checkNationalities = function () {
        // Reset chosen value of document
        this.formData.fields[1].value = '';
        this.formData.fields[1].dataset = [];
        for (var key in this.nationalitiesList) {
            // foreign
            if (this.nationalitiesList[key].codeRegion === 3 && this.nationalitiesList[key].gid == this.formData.fields[0].value) {
                this.formData.fields[1].dataset = this.foreignDocsList;
                break;
            }
            else if (this.nationalitiesList[key].codeRegion !== 3 && this.nationalitiesList[key].gid == this.formData.fields[0].value) {
                this.formData.fields[1].dataset = this.europeanDocsList;
                break;
            }
        }
    };
    PersonalDetailsIdentityPage.prototype.checkDocument = function () {
        // Set max valid length
        // For cni
        if (this.formData.fields[1].value === '1') {
            this.formData.fields[2].max = 12;
        }
        else if (this.formData.fields[1].value === '2') {
            this.formData.fields[2].max = 9;
        }
        else {
            this.formData.fields[2].max = null;
        }
    };
    PersonalDetailsIdentityPage.prototype.savePersonalDetailsIdentity = function () {
        var _this = this;
        //if all fields are empty, ignore this step and go to the next page
        var ignoreThisStep = !__WEBPACK_IMPORTED_MODULE_8__utils_utils__["a" /* ObjectUtils */].isFormNotEmpty(this.formData.fields);
        if (ignoreThisStep) {
            this.gotoBankSettings();
            return;
        }
        var identityCardData = {
            nationality: this.formData.fields.filter(function (f) { return f.name === "nationality"; })[0].value,
            typeIDCard: this.formData.fields.filter(function (f) { return f.name === "typeCard"; })[0].value,
            numberIDCard: this.formData.fields.filter(function (f) { return f.name === "cardNumber"; })[0].value,
            deliveredDate: this.formData.fields.filter(function (f) { return f.name === "deliveredDate"; })[0].value,
            prefecture: this.formData.fields.filter(function (f) { return f.name === "prefecture"; })[0].value,
            validFrom: this.formData.fields.filter(function (f) { return f.name === "validFrom"; })[0].value,
            validTo: this.formData.fields.filter(function (f) { return f.name === "validTo"; })[0].value
        };
        this.profileService.savePersonalDetailsIdentity(this.currentUser.id, identityCardData).then(function (data) {
            if (data.status == "success") {
                if (_this.isInscription) {
                    _this.gotoBankSettings();
                }
                else {
                    //TODO: display a notification of success
                }
            }
            else {
                console.log("une erreur est survenue lors de l'enregistrement des données");
                console.log(data.error);
            }
        });
    };
    PersonalDetailsIdentityPage.prototype.gotoBankSettings = function () {
        this.navigationService.dismiss(this.viewCtrl);
        var vojPage = { page: __WEBPACK_IMPORTED_MODULE_4__bank_settings_bank_settings__["a" /* BankSettingsPage */], isModal: true, params: { isInscription: this.isInscription } };
        this.navigationService.navigate("main", vojPage);
    };
    PersonalDetailsIdentityPage.prototype.ngOnInit = function () {
        var _this = this;
        //Show loading spinner
        var loader = this.loadingCtrl.create();
        loader.present();
        //load nationality list
        this.masterdataService.loadNationalitiesList().then(function (data) {
            _this.nationalitiesList = data;
            //set dataset of nationalities of the form
            _this.formData.fields.filter(function (f) { return f.name === "nationality"; })[0].dataset = _this.masterdataService.convertNationalitiesListToDataset(data);
            //the default nationality is "France"
            _this.formData.fields.filter(function (f) { return f.name === "nationality"; })[0].value = "91";
            // Load Prefecture List
            _this.masterdataService.loadPrefectureList().then(function (data) {
                _this.formData.fields[4].dataset = _this.masterdataService.convertPrefectureListToDataset(data);
                // Hide loading spinner
                loader.dismiss();
            });
        });
        this.storage.get("currentUser").then(function (val) {
            _this.currentUser = JSON.parse(val);
        });
    };
    PersonalDetailsIdentityPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PersonalDetailsIdentityPage');
    };
    PersonalDetailsIdentityPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-personal-details-identity',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/account-module/personal-details-identity/personal-details-identity.html"*/'<voj-page-header [data]=\'headerData\'></voj-page-header>\n\n<div class="voj-content">\n  <div class="voj-form-container">\n      <voj-form [data]=\'formData\'></voj-form>\n  </div>\n</div>\n\n'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/account-module/personal-details-identity/personal-details-identity.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__config_voj_configuration__["a" /* Configuration */],
            __WEBPACK_IMPORTED_MODULE_3__providers_masterdata_service_masterdata_service__["a" /* MasterdataService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__services_navigation_service__["a" /* NavigationService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_profile_service_profile_service__["a" /* ProfileService */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */]])
    ], PersonalDetailsIdentityPage);
    return PersonalDetailsIdentityPage;
}());

//# sourceMappingURL=personal-details-identity.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BankSettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_voj_configuration__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_profile_service_profile_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_voj_notification_voj_notification_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_navigation_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_utils__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var BankSettingsPage = (function () {
    function BankSettingsPage(configurationService, platform, navParams, storage, profileService, vojNotification, navigationService, viewCtrl) {
        var _this = this;
        this.configurationService = configurationService;
        this.platform = platform;
        this.navParams = navParams;
        this.storage = storage;
        this.profileService = profileService;
        this.vojNotification = vojNotification;
        this.navigationService = navigationService;
        this.viewCtrl = viewCtrl;
        this.isMobile = false;
        this.config = this.configurationService.configuration;
        this.config.isLargeScreen ? this.isMobile = false : this.isMobile = true;
        this.isInscription = this.navParams.data.isInscription;
        this.headerData = {
            title: 'Mes coordonnées bancaires',
            style: 'any',
            actions: [{
                    id: 'xdcfgvyhubijnklbhvg',
                    label: 'help',
                    icon: 'help',
                    action: function () {
                        console.log('button works');
                    }
                }],
            isCanceled: true
        };
        this.formData = {
            fields: [
                {
                    type: 'text',
                    label: 'Nom de la banque',
                    readonly: false,
                    visible: true,
                    id: '',
                    name: 'bankname',
                    required: !this.isInscription
                },
                {
                    type: 'text',
                    label: 'Nom du détenteur',
                    readonly: true,
                    visible: true,
                    id: '',
                    name: 'ownername',
                    required: !this.isInscription
                },
                {
                    type: 'text',
                    label: 'IBAN',
                    readonly: false,
                    visible: true,
                    id: '',
                    name: 'iban',
                    required: !this.isInscription
                },
                {
                    type: 'text',
                    label: 'BIC',
                    readonly: false,
                    visible: true,
                    id: '',
                    name: 'bic',
                    required: !this.isInscription
                }
            ],
            submit: {
                id: 'xdcfgvyhubijnkfwlbhvg',
                label: (this.isInscription ? 'Suivant' : 'Valider'),
                icon: 'help',
                action: function (event) {
                    _this.saveBankData();
                }
            }
        };
    }
    BankSettingsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get("currentUser").then(function (val) {
            _this.currentUser = JSON.parse(val);
            if (!_this.currentUser) {
                return;
            }
            _this.formData.fields.filter(function (f) { return f.name === "ownername"; })[0].value = _this.currentUser.identity.lastName.trim() + " " + _this.currentUser.identity.middleName.trim() + " " + _this.currentUser.identity.firstName.trim();
        });
    };
    BankSettingsPage.prototype.saveBankData = function () {
        var _this = this;
        //if all fields are empty, ignore this step and go to the next page
        var ignoreThisStep = !__WEBPACK_IMPORTED_MODULE_7__utils_utils__["a" /* ObjectUtils */].isFormNotEmpty(this.formData.fields);
        if (ignoreThisStep) {
            this.navigationService.dismiss(this.viewCtrl);
            this.displaySuccessNotif();
            return;
        }
        var bankData = {
            id: null,
            bankName: this.formData.fields.filter(function (f) { return f.name === "bankname"; })[0].value,
            iban: this.formData.fields.filter(function (f) { return f.name === "iban"; })[0].value,
            bic: this.formData.fields.filter(function (f) { return f.name === "bic"; })[0].value
        };
        this.profileService.saveBankSetting(this.currentUser.id, bankData).then(function (data) {
            if (data.status == "success") {
                if (_this.isInscription) {
                    _this.navigationService.dismiss(_this.viewCtrl);
                    _this.displaySuccessNotif();
                }
                else {
                    //TODO
                }
            }
            else {
                console.log("une erreur est survenue lors de l'enregistrement des données");
                console.log(data.error);
            }
        });
    };
    BankSettingsPage.prototype.displaySuccessNotif = function () {
        var notificationData = {
            icon: '',
            title: 'Vit-On-Job',
            message: "Félicitation! Votre compte a bien été créé.",
            backdropDismiss: true,
            buttons: [
                {
                    id: 'cancel',
                    label: 'OK',
                    icon: '',
                    action: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        };
        this.vojNotification.present(notificationData);
    };
    BankSettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'bank-settings-page',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/account-module/bank-settings/bank-settings.html"*/'<voj-page-header [data]=\'headerData\'></voj-page-header>\n\n<!--<div [ngClass]="isMobile ? \'bank-settings-container\' : \'\'" class="bank-settings-parent">-->\n    <!--<div [ngClass]="isMobile ? \'bank-settings-child-container\' : \'\'" class="bank-settings-child">-->\n        <div class="voj-content">\n            <div class="voj-form-container">\n                <voj-form [data]=\'formData\'></voj-form>\n            </div>\n        </div>\n    <!--</div>-->\n<!--</div>-->\n'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/account-module/bank-settings/bank-settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__config_voj_configuration__["a" /* Configuration */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__providers_profile_service_profile_service__["a" /* ProfileService */],
            __WEBPACK_IMPORTED_MODULE_5__components_voj_notification_voj_notification_service__["a" /* VojNotificationService */],
            __WEBPACK_IMPORTED_MODULE_6__services_navigation_service__["a" /* NavigationService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */]])
    ], BankSettingsPage);
    return BankSettingsPage;
}());

//# sourceMappingURL=bank-settings.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_voj_page_header_model__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_voj_configuration_model__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AboutPage = (function () {
    function AboutPage(navCtrl, appCtrl, viewCtrl, configuration, event) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.appCtrl = appCtrl;
        this.viewCtrl = viewCtrl;
        this.configuration = configuration;
        this.event = event;
        this.gmapView = true;
        this.footerData = {
            style: '',
            actions: [{
                    id: '',
                    label: '',
                    icon: 'information-circle',
                    action: function () {
                        console.log('test');
                    }
                }
            ]
        };
        //  Page header
        this.pageHeader = new __WEBPACK_IMPORTED_MODULE_3__models_voj_page_header_model__["a" /* VojPageHeaderType */]();
        this.pageHeader.title = "Géolocatisation";
        this.pageHeader.actions = [
            {
                id: 'map',
                icon: 'map',
                action: function () {
                    if (!_this.configuration.isLargeScreen) {
                        _this.gmapView = !_this.gmapView;
                        _this.event.publish('MAP_DATA', _this.cards);
                    }
                },
                label: ''
            },
            {
                id: 'help',
                icon: 'help',
                action: function () {
                    console.log("Help");
                },
                label: ''
            }
        ];
        // Testing JobyerStrategy Data
        this.jobyerData = {
            title: {
                label: 'Title'
            },
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            cover: 'http://www.turfgrass.ie/wp-content/uploads/2014/07/T-Projects-Lubker-1.jpg',
            thumbnail: 'http://diysolarpanelsv.com/images/clip-art-user-14.png',
            subtitles: [
                {
                    icon: 'logo-angular',
                    label: 'Subtitle 1'
                },
                {
                    icon: 'logo-angular',
                    label: 'Subtitle 2'
                }
            ],
            actions: [
                {
                    id: '',
                    icon: 'build',
                    label: 'First action',
                    action: function () {
                        _this.test();
                    }
                }
            ],
            socialButton: [
                {
                    id: '',
                    icon: 'logo-googleplus',
                    label: 'Google+',
                    action: function () {
                        _this.test();
                    }
                }
            ],
            menu: [
                {
                    id: '',
                    icon: 'home',
                    label: 'Home',
                    action: function () {
                        _this.test();
                    }
                }
            ],
            badges: [
                {
                    id: '',
                    icon: 'star',
                    label: 'Star',
                    action: function () {
                        _this.test();
                    }
                }
            ],
            segments: [
                {
                    title: {
                        icon: 'star',
                        label: 'Title 1'
                    },
                    subtitle: {
                        icon: 'star',
                        label: 'Subtitle 1'
                    },
                    action: function () {
                        console.log('works 1');
                    },
                    style: 'style1'
                },
                {
                    title: {
                        icon: 'star',
                        label: 'Title 2'
                    },
                    subtitle: {
                        icon: 'star',
                        label: 'Subtitle 2'
                    },
                    action: function () {
                        console.log('works 2');
                    },
                    style: 'style1'
                }
            ]
        };
        this.title = "un autre titre dynamique";
        this.content = "un autre texte de détails..";
        this.actionName = "Action 2";
        this.listTitle = "Ma liste des cartes";
        this.actions = [{
                label: "test",
                action: function () {
                    _this.goToPage();
                }
            }, {
                label: "test2",
                action: function () {
                    _this.goToPage2();
                }
            }
        ];
        this.cards = [{
                title: "JobyerStrategy 1",
                content: "contenu 1",
                actionName: "action 1"
            }, {
                title: "JobyerStrategy 2",
                content: "contenu 2",
                actionName: "action 2"
            }, {
                title: "JobyerStrategy 3",
                content: "contenu 3",
                actionName: "action 3"
            }, {
                title: "JobyerStrategy 4",
                content: "contenu 4",
                actionName: "action 4"
            }, {
                title: "JobyerStrategy 5",
                content: "contenu 5",
                actionName: "action 5"
            }];
    }
    AboutPage.prototype.goToPage = function () {
        //
        this.appCtrl.getRootNav().push(__WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */]);
        //this.viewCtrl.getNav().push(ContactPage);
        //this.navCtrl.push(ContactPage);
    };
    AboutPage.prototype.goToPage2 = function () {
        //
        //this.appCtrl.getRootNav().push(ContactPage);
        //this.viewCtrl.getNav().push(ContactPage);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */]);
    };
    AboutPage.prototype.test = function () {
        console.log("works");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('contentMenu'),
        __metadata("design:type", Object)
    ], AboutPage.prototype, "nav", void 0);
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/test-components/about/about.html"*/'<!--ion-header no-border>\n	<ion-navbar transparent>\n		<ion-title>\n			Géolocalisation\n		</ion-title>\n	</ion-navbar>\n</ion-header-->\n\n\n<ion-content padding>\n	<voj-page-header [data]="pageHeader"></voj-page-header>\n	<!--<button ion-button (click)="goToPage()">test Navigation</button>-->\n	<!--<voj-card title="Test" content="le contenu détaillé ici" action-name="Action 1" [buttons]="actions" thumbnail="assets/img/advance-card-bttf.png" date="12/06/2017"> </voj-card>-->\n	<!--<voj-card [title]="title" [content]="content" [action-name]="actionName" cover="assets/img/advance-card-bttf.png" thumbnail="assets/img/advance-card-bttf.png"> </voj-card>-->\n	<!--voj-card [data]="jobyerData"></voj-card-->\n	<!--voj-list [title]="listTitle" [cards]="cards"></voj-list-->\n\n	<voj-map [data]="cards"></voj-map>\n	<ion-footer>\n		test\n	</ion-footer>\n</ion-content>\n'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/test-components/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_4__models_voj_configuration_model__["a" /* VojConfiguration */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_voj_configuration__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_landing_page_landing_page__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modal_service__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavigationService = (function () {
    function NavigationService(event, configurationService, modalService) {
        this.event = event;
        this.configurationService = configurationService;
        this.modalService = modalService;
        this.config = this.configurationService.configuration;
    }
    NavigationService.prototype.navigate = function (navName, vojPage) {
        if (this.config.isLargeScreen) {
            //if the target nav contains only the landing page
            //make the vojPage as a root page instead of landing page
            var targetNav = this.getNavByName(navName);
            if (targetNav.getViews().length == 1 && targetNav.last().component == __WEBPACK_IMPORTED_MODULE_3__pages_landing_page_landing_page__["a" /* LandingPage */]) {
                vojPage.isRoot = true;
            }
            if (vojPage.isModal) {
                this.modalService.present(vojPage);
            }
            else {
                this.event.publish("navigate:" + navName, vojPage);
            }
        }
        else {
            this.event.publish('navigate:main', vojPage);
        }
    };
    NavigationService.prototype.hide = function (navName) {
        if (this.config.isLargeScreen) {
            this.event.publish("hide:" + navName);
        }
    };
    NavigationService.prototype.goBack = function (navName) {
        if (this.config.isLargeScreen) {
            this.event.publish("pop:" + navName);
        }
        else {
            this.event.publish('pop:main');
        }
    };
    NavigationService.prototype.dismiss = function (viewCtrl) {
        if (viewCtrl.isOverlay) {
            viewCtrl.dismiss();
        }
    };
    NavigationService.prototype.getActiveNav = function (view) {
        switch (view) {
            case (this.nav1.getByIndex(0)):
                return this.nav1;
            case (this.nav2.getByIndex(0)):
                return this.nav2;
            case (this.nav3.getByIndex(0)):
                return this.nav3;
            default:
                return null;
        }
    };
    NavigationService.prototype.getNavByName = function (navName) {
        switch (navName) {
            case (this.nav1.name):
                return this.nav1;
            case (this.nav2.name):
                return this.nav2;
            case (this.nav3.name):
                return this.nav3;
            default:
                return null;
        }
    };
    NavigationService.prototype.constructPageMapping = function () {
        return { "SearchPage": "searchTab",
            "SignUpPage": "accountTab",
            "LoginPage": "accountTab" };
    };
    /*
    Getters and setters
     */
    NavigationService.prototype.getNav1 = function () {
        return this.nav1;
    };
    NavigationService.prototype.setNav1 = function (value) {
        this.nav1 = value;
    };
    NavigationService.prototype.getNav2 = function () {
        return this.nav2;
    };
    NavigationService.prototype.setNav2 = function (value) {
        this.nav2 = value;
    };
    NavigationService.prototype.getNav3 = function () {
        return this.nav3;
    };
    NavigationService.prototype.setNav3 = function (value) {
        this.nav3 = value;
    };
    NavigationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2__config_voj_configuration__["a" /* Configuration */],
            __WEBPACK_IMPORTED_MODULE_4__modal_service__["a" /* ModalService */]])
    ], NavigationService);
    return NavigationService;
}());

//# sourceMappingURL=navigation.service.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VojMenuModule", function() { return VojMenuModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__voj_menu__ = __webpack_require__(525);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VojMenuModule = (function () {
    function VojMenuModule() {
    }
    VojMenuModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__voj_menu__["a" /* VojMenu */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__voj_menu__["a" /* VojMenu */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__voj_menu__["a" /* VojMenu */]
            ]
        })
    ], VojMenuModule);
    return VojMenuModule;
}());

//# sourceMappingURL=voj-menu.module.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return envConfig; });
var envConfig = {
    cid: "3ml0y3r",
    //server : "http://127.0.0.1:8000/appsettings/",
    server: "https://hermes.vitonjob.com/appsettings/",
    thresholdWidth: 768
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VojConfiguration; });
var VojConfiguration = (function () {
    function VojConfiguration() {
    }
    return VojConfiguration;
}());

//# sourceMappingURL=voj-configuration.model.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_voj_card_model__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_voj_events_voj_events__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_navigation_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_voj_page_header_model__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_search_service_search_service__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DetailsPage = (function () {
    function DetailsPage(navParams, searchService, eventBus, navigationService) {
        this.navParams = navParams;
        this.searchService = searchService;
        this.eventBus = eventBus;
        this.navigationService = navigationService;
        this.headerData = new __WEBPACK_IMPORTED_MODULE_5__models_voj_page_header_model__["a" /* VojPageHeaderType */]();
        this.headerData.title = "Détails";
        this.card = new __WEBPACK_IMPORTED_MODULE_2__models_voj_card_model__["a" /* VojCardModel */]();
        this.card.id = 0;
        if (navParams.data && navParams.data.card) {
            this.card = navParams.data.card;
            if (this.searchService.eventMode) {
                this.searchService.markAsRead(this.card);
                this.eventBus.publishAppEventUpdate('read');
            }
        }
    }
    DetailsPage.prototype.ionViewDidLoad = function () {
    };
    DetailsPage.prototype.updateCard = function (c) {
        this.card = c;
        if (this.searchService.eventMode) {
            this.searchService.markAsRead(this.card);
            this.eventBus.publishAppEventUpdate('read');
        }
    };
    DetailsPage.prototype.noData = function () {
        return !this.card || this.card.id == 0;
    };
    DetailsPage.prototype.hideDetailsView = function () {
        this.navigationService.hide('details');
    };
    DetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-details',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/details/details.html"*/'<!--<ion-header no-border>\n  <ion-navbar transparent>\n    <ion-title>\n\n    </ion-title>\n    <ion-buttons right>\n      <button ion-button icon-only (click)="hideDetailsView()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>-->\n<ion-header >\n  <voj-page-header [data]="headerData"></voj-page-header>\n</ion-header>\n<ion-content >\n  <voj-card [hidden]="noData()" [data]="card" mode="full" ></voj-card>\n</ion-content>\n'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/details/details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_6__providers_search_service_search_service__["a" /* SearchServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_voj_events_voj_events__["a" /* EventBusProvider */],
            __WEBPACK_IMPORTED_MODULE_4__services_navigation_service__["a" /* NavigationService */]])
    ], DetailsPage);
    return DetailsPage;
}());

//# sourceMappingURL=details.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VojPageHeaderType; });
var VojPageHeaderType = (function () {
    function VojPageHeaderType() {
        this.isCanceled = true;
    }
    return VojPageHeaderType;
}());

//# sourceMappingURL=voj-page-header.model.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_voj_configuration__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_signup_service_signup_service__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__identity_identity__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__scripts_md5__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_masterdata_service_masterdata_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_navigation_service__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var SignUpPage = (function () {
    function SignUpPage(params, configurationService, signupService, viewCtrl, alertCtrl, storage, masterdataService, navigationService) {
        var _this = this;
        this.params = params;
        this.configurationService = configurationService;
        this.signupService = signupService;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.masterdataService = masterdataService;
        this.navigationService = navigationService;
        this.isMobile = false;
        this.config = this.configurationService.configuration;
        this.config.isLargeScreen ? this.isMobile = false : this.isMobile = true;
        this.formData = {
            fields: [
                // Phone code
                {
                    type: 'select',
                    value: null,
                    label: 'FORM.COUNTRY_CODE',
                    dataset: [],
                    required: true,
                    visible: true,
                    id: '',
                    name: 'selectPhoneCode'
                },
                // Phone
                {
                    //placeholder: 'PLACEHOLDER.ENTER_PHONE',
                    type: 'tel',
                    value: '',
                    label: 'FORM.PHONE',
                    required: true,
                    readonly: false,
                    visible: true,
                    id: '',
                    min: 9,
                    max: 10,
                    regex: '^[0-9]*$',
                    name: 'userPhone',
                    validationMsg: 'VALIDATION.PHONE_VALIDATION_MSG'
                },
                // Email
                {
                    //placeholder: 'PLACEHOLDER.ENTER_MAIL',
                    type: 'text',
                    value: '',
                    label: 'FORM.EMAIL',
                    required: true,
                    readonly: false,
                    visible: true,
                    name: 'userEmail',
                    id: '',
                    min: 5,
                    validationMsg: 'VALIDATION.EMAIL_VALIDATION_MSG',
                    regex: '^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'
                },
                // Password
                {
                    //placeholder: 'PLACEHOLDER.ENTER_PASSWORD',
                    type: 'password',
                    value: '',
                    label: 'FORM.PASSWORD',
                    required: true,
                    readonly: false,
                    visible: true,
                    min: 6,
                    id: '',
                    name: 'userPassword',
                    validationMsg: 'VALIDATION.PASSWORD_VALIDATION_MSG',
                },
                // Confirm password
                {
                    //placeholder: 'PLACEHOLDER.RE_ENTER_PASSWORD',
                    type: 'password',
                    value: '',
                    label: 'FORM.PASSWORD_CONFIRMATION',
                    required: true,
                    readonly: false,
                    visible: true,
                    min: 6,
                    id: '',
                    name: 'passwordConfirmation',
                    validationMsg: 'VALIDATION.PASSWORD_VALIDATION_MSG',
                },
            ],
            submit: {
                id: '',
                icon: 'build',
                label: 'SIGNUP.VALIDATE',
                action: function (event) {
                    var samePasswd = _this.checkPasswordConfirmation();
                    samePasswd ? _this.signUp() : false;
                }
            }
        };
        //header data
        this.headerData = {
            title: 'SIGNUP.TITLE',
            actions: [],
            style: '',
            isCanceled: false
        };
    }
    SignUpPage.prototype.checkPasswordConfirmation = function () {
        var password = Object(__WEBPACK_IMPORTED_MODULE_7__scripts_md5__["a" /* md5 */])(this.formData.fields.filter(function (f) { return f.name === "userPassword"; })[0].value);
        var passwordConfirmation = Object(__WEBPACK_IMPORTED_MODULE_7__scripts_md5__["a" /* md5 */])(this.formData.fields.filter(function (f) { return f.name === "passwordConfirmation"; })[0].value);
        if (password !== passwordConfirmation) {
            return false;
        }
        return true;
    };
    /*checkPhone() {
            for (let i = 0; i < this.formData.fields.length; i++) {
                    if (this.formData.fields[i].name === 'userPhone') {
                            if (this.formData.fields[i].value[0] === '0') {
                                    console.log('checkPhone was called. First symbol is 0. Corrected.');
                                    this.formData.fields[i].value = this.formData.fields[i].value.slice(1);
                            }
                    }
            }
    }*/
    SignUpPage.prototype.ngOnInit = function () {
        var _this = this;
        //load phone code list
        this.masterdataService.loadCountriesList().then(function (data) {
            //set dataset of phone codes of the form
            _this.formData.fields.filter(function (f) { return f.name === "selectPhoneCode"; })[0].dataset = _this.masterdataService.convertCountriesListToDataset(data);
            //the default phone code is France code (33)
            _this.formData.fields.filter(function (f) { return f.name === "selectPhoneCode"; })[0].value = "33";
        });
    };
    SignUpPage.prototype.signUp = function () {
        var _this = this;
        //prepare credentials data
        var code = this.formData.fields.filter(function (f) { return f.name === "selectPhoneCode"; })[0].value;
        var phone = this.formData.fields.filter(function (f) { return f.name === "userPhone"; })[0].value;
        var email = this.formData.fields.filter(function (f) { return f.name === "userEmail"; })[0].value;
        var password = Object(__WEBPACK_IMPORTED_MODULE_7__scripts_md5__["a" /* md5 */])(this.formData.fields.filter(function (f) { return f.name === "userPassword"; })[0].value);
        var phoneWithCode = "+" + code + phone.substr(phone.length - 9);
        //call web service method
        this.signupService.signup(phoneWithCode, email, password, "jobyer").then(function (data) {
            //if credentials already registred in our DB : show error msg
            if (data.found) {
                _this.displayNotificationForUsedCredentials();
            }
            else {
                //if credentials does not exist in our DB : store new user in localDB
                //dismiss the sign in modal and display identity modal
                var account = data;
                _this.storage.set("currentUser", JSON.stringify(account)).then(function () {
                    _this.goToIdentityPage();
                });
            }
        });
    };
    SignUpPage.prototype.goToIdentityPage = function () {
        this.navigationService.dismiss(this.viewCtrl);
        var vojPage = { page: __WEBPACK_IMPORTED_MODULE_5__identity_identity__["a" /* IdentityPage */], isRoot: true, isModal: true, params: { isInscription: true } };
        this.navigationService.navigate("main", vojPage);
    };
    //TODO: this error msg should be displayed in the form
    SignUpPage.prototype.displayNotificationForUsedCredentials = function () {
        var alert = this.alertCtrl.create({
            title: 'Attention!',
            subTitle: 'Ces informations d\'identification sont déjà enregistrées. Entrez un autre numéro de téléphone et un email.',
            buttons: ['OK']
        });
        alert.present();
    };
    SignUpPage.prototype.goToLogin = function () {
        this.navigationService.dismiss(this.viewCtrl);
        var vojPage = { page: __WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */], isRoot: true, isModal: true };
        this.navigationService.navigate("list", vojPage);
    };
    SignUpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sign-up-page',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/account-module/sign-up/sign-up.html"*/'<voj-page-header [data]="headerData"></voj-page-header>\n\n<div [ngClass]="isMobile ? \'sign-up-container\' : \'\'" class="voj-content">\n    <div class="voj-form-container">\n        <voj-form [data]="formData"></voj-form>\n\n        <div text-center class="connector">\n            <h5>{{\'SIGNUP.REGISTERED\' | translate}}</h5>\n\n            <button ion-button outline class="custom-btn" type="button" (click)="goToLogin()">\n                {{\'SIGNUP.LOGIN\' | translate}}\n            </button>\n        </div>\n    </div>\n</div>\n'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/account-module/sign-up/sign-up.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__config_voj_configuration__["a" /* Configuration */],
            __WEBPACK_IMPORTED_MODULE_4__providers_signup_service_signup_service__["a" /* SignupService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_8__providers_masterdata_service_masterdata_service__["a" /* MasterdataService */],
            __WEBPACK_IMPORTED_MODULE_9__services_navigation_service__["a" /* NavigationService */]])
    ], SignUpPage);
    return SignUpPage;
}());

//# sourceMappingURL=sign-up.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VojPageHeaderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__voj_page_header__ = __webpack_require__(853);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var VojPageHeaderModule = (function () {
    function VojPageHeaderModule() {
    }
    VojPageHeaderModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__voj_page_header__["a" /* VojPageHeader */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__voj_page_header__["a" /* VojPageHeader */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__voj_page_header__["a" /* VojPageHeader */]
            ]
        })
    ], VojPageHeaderModule);
    return VojPageHeaderModule;
}());

//# sourceMappingURL=voj-page-header.module.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VojSearchHeaderModule", function() { return VojSearchHeaderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__voj_search_header__ = __webpack_require__(859);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__voj_segment_voj_segment_module__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var VojSearchHeaderModule = (function () {
    function VojSearchHeaderModule() {
    }
    VojSearchHeaderModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__voj_search_header__["a" /* VojSearchHeader */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__voj_segment_voj_segment_module__["VojSegmentModule"],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__voj_search_header__["a" /* VojSearchHeader */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__voj_search_header__["a" /* VojSearchHeader */]
            ]
        })
    ], VojSearchHeaderModule);
    return VojSearchHeaderModule;
}());

//# sourceMappingURL=voj-search-header.module.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OptionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OptionsPage = (function () {
    function OptionsPage() {
        // Set page header title
        this.dataPageHeader = {
            title: 'Options',
            actions: [
                {
                    id: 'help',
                    icon: 'help',
                    action: function () { console.log('Click help button.'); },
                    label: ''
                }
            ]
        };
    }
    OptionsPage.prototype.presentPage = function (pageName) {
        console.log('Present page:', pageName);
    };
    OptionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'options-page',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/account-module/options/options.html"*/'<voj-page-header [data]="dataPageHeader"></voj-page-header>\n\n<ion-card>\n    <ion-card-content class="voj-card-buttons">\n        <button ion-button block small (click)="presentPage(\'Change Password\')">Change Password</button>\n        <button ion-button block small (click)="presentPage(\'Choose frequency of compensation\')">Choose frequency of compensation</button>\n        <button ion-button block small (click)="presentPage(\'Join a campaign\')">Join a campaign</button>\n        <button ion-button block small (click)="presentPage(\'Disconnect\')">Disconnect</button>\n    </ion-card-content>\n</ion-card>\n'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/account-module/options/options.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], OptionsPage);
    return OptionsPage;
}());

//# sourceMappingURL=options.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cv_offer_module_jobyer_availability_choice_jobyer_availability_choice__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__account_module_user_information_user_information__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__account_module_options_options__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
        // Form data for testing
        this.formData = {
            title: 'Form Title',
            fields: [
                {
                    placeholder: 'Item 1',
                    type: 'text',
                    value: 'Label 1',
                    label: 'Label 1',
                    dataset: [
                        { id: 4, key: 'russian', value: 'Russian' },
                        { id: 5, key: 'ukrainian', value: 'Ukrainian' },
                        { id: 6, key: 'english', value: 'English' }
                    ],
                    required: true,
                    readonly: false,
                    visible: true,
                    min: 3,
                    max: 10,
                    regex: '^[A-z]+$',
                    id: '',
                    name: 'Input1'
                },
                {
                    type: 'button',
                    label: 'Button',
                    visible: true,
                    id: '',
                    action: function () {
                        console.log('click Button');
                    }
                },
                {
                    placeholder: 'Item 2',
                    type: 'text',
                    value: 'Label 2',
                    label: 'Label 2',
                    required: true,
                    readonly: false,
                    visible: true,
                    min: 3,
                    max: 10,
                    regex: '^[A-z]+$',
                    id: '',
                    name: 'Input2'
                },
                {
                    placeholder: 'Password 1',
                    type: 'password',
                    value: 'Password 1',
                    label: 'Password 1',
                    required: true,
                    readonly: false,
                    visible: true,
                    min: 3,
                    max: 10,
                    regex: '^[A-z]+$',
                    id: '',
                    name: 'Password 1'
                },
                {
                    type: 'select',
                    value: 'select 1',
                    label: 'Label 3',
                    dataset: [
                        { id: 1, key: 'select 1', value: 'select 1' },
                        { id: 2, key: 'select 2', value: 'select 2' },
                        { id: 3, key: 'select 3', value: 'select 3' }
                    ],
                    required: true,
                    visible: true,
                    id: '',
                    name: 'Select1'
                },
                {
                    type: 'radio',
                    value: 'radio 1',
                    label: 'Label 4',
                    dataset: [
                        { id: 1, key: 'radio 1', value: 'radio 1' },
                        { id: 2, key: 'radio 2', value: 'radio 2' }
                    ],
                    required: true,
                    visible: true,
                    id: '',
                    name: 'radioTest'
                },
                // Custom Select
                {
                    type: 'customSelect',
                    value: null,
                    label: 'Label 6',
                    dataset: [
                        { id: 4, key: 'select 4', value: 'select 4' },
                        { id: 5, key: 'select 5', value: 'select 5' },
                        { id: 6, key: 'select 6', value: 'select 6' }
                    ],
                    required: true,
                    visible: true,
                    id: '',
                    name: 'customSelect'
                },
                {
                    type: 'customTwoSelects',
                    value: 'select 2',
                    value2: 'select 7',
                    label: 'Label 6',
                    dataset: [
                        { id: 4, key: 'russian', value: 'Russian' },
                        { id: 5, key: 'ukrainian', value: 'Ukrainian' },
                        { id: 6, key: 'english', value: 'English' }
                    ],
                    dataset2: [
                        { id: 7, key: 'beginner', value: 'Beginner' },
                        { id: 8, key: 'intermediate', value: 'Intermediate' },
                        { id: 9, key: 'advanced', value: 'Advanced' }
                    ],
                    required: true,
                    visible: true,
                    id: '',
                    name: 'customTwoSelects'
                }
            ],
            submit: {
                id: '',
                icon: 'build',
                label: 'Form Button',
                action: function (event) {
                    console.log(event);
                }
            }
        };
    }
    ContactPage.prototype.ngOnInit = function () {
        var actions = [{ id: 'create', icon: "create", label: "Créer", action: this.action1 }, { id: 'delete', icon: "trash", label: "Supprimer", action: this.action2 }];
        this.contactButtonsData = { style: { 'color': '#488aff' }, actions: actions };
        this.testVar = "Nom de la barre";
    };
    ContactPage.prototype.action1 = function () {
        console.log("action1 button clicked");
    };
    ContactPage.prototype.action2 = function () {
        console.log("action2 button clicked");
    };
    ContactPage.prototype.presentOptionsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__account_module_options_options__["a" /* OptionsPage */]);
    };
    ContactPage.prototype.presentJobyerAvailabilityChoicePage = function () {
        console.log('Present Jobyer Availability Choice Page.');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cv_offer_module_jobyer_availability_choice_jobyer_availability_choice__["a" /* JobyerAvailabilityChoicePage */]);
    };
    ContactPage.prototype.presentUserInfoPage = function () {
        console.log('Present user info page.');
        // Testing user data
        var testUser = {
            name: 'John',
            firstName: 'Terry',
            no: 11,
            streetName: 'Central Street',
            postcode: 12345,
            city: 'Paris',
            birthDate: '16/01/88',
            placeOfBirth: 'Paris, France',
            identityDocumentType: 'CNI',
            docNumber: 67890,
            bankDetails: 'Some bank details',
            documents: 'Some documents'
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__account_module_user_information_user_information__["a" /* UserInformationPage */], { userData: testUser });
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/test-components/contact/contact.html"*/'<ion-header no-border>\n	<ion-navbar transparent>\n		<ion-title>\n			Contact\n		</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n\n	<ion-list>\n		<ion-list-header>Follow us on Twitter</ion-list-header>\n		<ion-item>\n			<ion-icon name="ionic" item-left></ion-icon>\n			@ionicframework\n		</ion-item>\n	</ion-list>\n\n	<!-- Test form -->\n	<voj-form [data]=\'formData\'></voj-form>\n\n	<!-- Option page testing -->\n	<button ion-button (click)="presentOptionsPage()">Options page</button>\n	\n	<voj-footer [data]="contactButtonsData" [testVar]="testVar"></voj-footer>\n\n</ion-content>'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/test-components/contact/contact.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_voj_card_model__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_voj_map_model__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_voj_notification_voj_notification_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_text_type__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_http_request_http_request__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__test_components_contact_contact__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_navigation_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__account_module_identity_identity__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__cv_offer_module_jobyer_availability_choice_jobyer_availability_choice__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__account_module_user_information_user_information__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__account_module_enterprise_details_enterprise_details__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__account_module_options_options__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__account_module_account_account__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__account_module_main_address_main_address__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__account_module_login_login__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__account_module_bank_settings_bank_settings__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__account_module_personal_details_identity_personal_details_identity__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__account_module_sign_up_sign_up__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_modal_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__cv_offer_module_availabilities_add_days_availabilities_add_days__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__cv_offer_module_availabilities_availabilities__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__account_module_personal_details_personal_details__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__account_module_company_company__ = __webpack_require__(555);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

























var HomePage = (function () {
    function HomePage(navCtrl, platform, appCtrl, viewCtrl, event, httpRequest, vojNotification, navigationService, modalService) {
        // this.isWeb = !platform.is('cordova');
        var _this = this;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.appCtrl = appCtrl;
        this.viewCtrl = viewCtrl;
        this.event = event;
        this.httpRequest = httpRequest;
        this.vojNotification = vojNotification;
        this.navigationService = navigationService;
        this.modalService = modalService;
        this.isWeb = false;
        // Testing Jobyer Data
        this.jobyerData = {
            title: {
                label: 'Title'
            },
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            cover: 'http://www.turfgrass.ie/wp-content/uploads/2014/07/T-Projects-Lubker-1.jpg',
            thumbnail: 'http://diysolarpanelsv.com/images/clip-art-user-14.png',
            subtitles: [
                {
                    icon: 'logo-angular',
                    label: 'Subtitle 1'
                },
                {
                    icon: 'logo-angular',
                    label: 'Subtitle 2'
                }
            ],
            actions: [
                {
                    id: '',
                    icon: 'build',
                    label: 'First action',
                    action: function () {
                        _this.test();
                    }
                }
            ],
            socialButton: [
                {
                    id: '',
                    icon: 'logo-googleplus',
                    label: 'Google+',
                    action: function () {
                        _this.test();
                    }
                }
            ],
            menu: [
                {
                    id: '',
                    icon: 'home',
                    label: 'Home',
                    action: function () {
                        _this.test();
                    }
                }
            ],
            badges: [
                {
                    id: '',
                    icon: 'star',
                    label: 'Star',
                    action: function () {
                        _this.test();
                    }
                }
            ],
            segments: [
                {
                    title: {
                        icon: 'star',
                        label: 'Title 1'
                    },
                    subtitle: {
                        icon: 'star',
                        label: 'Subtitle 1'
                    },
                    action: function () {
                        console.log('works 1');
                    },
                    style: 'style1'
                },
                {
                    title: {
                        icon: 'star',
                        label: 'Title 2'
                    },
                    subtitle: {
                        icon: 'star',
                        label: 'Subtitle 2'
                    },
                    action: function () {
                        console.log('works 2');
                    },
                    style: 'style1'
                }
            ]
        };
        this.formData = {
            title: 'Form Title',
            fields: [
                {
                    placeholder: 'Item 1',
                    type: 'text',
                    value: 'Label 1',
                    label: 'Label 1',
                    dataset: [
                        { id: 4, key: 'russian', value: 'Russian' },
                        { id: 5, key: 'ukrainian', value: 'Ukrainian' },
                        { id: 6, key: 'english', value: 'English' }
                    ],
                    required: true,
                    readonly: false,
                    visible: true,
                    min: 3,
                    max: 10,
                    regex: '^[A-z]+$',
                    id: '',
                    name: 'Input1'
                },
                {
                    type: 'button',
                    label: 'Button',
                    visible: true,
                    id: '',
                    action: function () {
                        console.log('click Button');
                    }
                },
                {
                    placeholder: 'Item 2',
                    type: 'text',
                    value: 'Label 2',
                    label: 'Label 2',
                    required: true,
                    readonly: false,
                    visible: true,
                    min: 3,
                    max: 10,
                    regex: '^[A-z]+$',
                    id: '',
                    name: 'Input2'
                },
                {
                    placeholder: 'Password 1',
                    type: 'password',
                    value: 'Password 1',
                    label: 'Password 1',
                    required: true,
                    readonly: false,
                    visible: true,
                    min: 3,
                    max: 10,
                    regex: '^[A-z]+$',
                    id: '',
                    name: 'Password 1'
                },
                {
                    type: 'select',
                    value: 'select 1',
                    label: 'Label 3',
                    dataset: [
                        { id: 1, key: 'select 1', value: 'select 1' },
                        { id: 2, key: 'select 2', value: 'select 2' },
                        { id: 3, key: 'select 3', value: 'select 3' }
                    ],
                    required: true,
                    visible: true,
                    id: '',
                    name: 'Select1'
                },
                {
                    type: 'radio',
                    value: 'radio 1',
                    label: 'Label 4',
                    dataset: [
                        { id: 1, key: 'radio 1', value: 'radio 1' },
                        { id: 2, key: 'radio 2', value: 'radio 2' }
                    ],
                    required: true,
                    visible: true,
                    id: '',
                    name: 'radioTest'
                },
                // Custom Select
                {
                    type: 'customSelect',
                    value: null,
                    label: 'Label 6',
                    dataset: [
                        { id: 4, key: 'select 4', value: 'select 4' },
                        { id: 5, key: 'select 5', value: 'select 5' },
                        { id: 6, key: 'select 6', value: 'select 6' }
                    ],
                    required: true,
                    visible: true,
                    id: '',
                    name: 'customSelect'
                },
                {
                    type: 'customTwoSelects',
                    value: 'select 2',
                    value2: 'select 7',
                    label: 'Label 6',
                    dataset: [
                        { id: 4, key: 'russian', value: 'Russian' },
                        { id: 5, key: 'ukrainian', value: 'Ukrainian' },
                        { id: 6, key: 'english', value: 'English' }
                    ],
                    dataset2: [
                        { id: 7, key: 'beginner', value: 'Beginner' },
                        { id: 8, key: 'intermediate', value: 'Intermediate' },
                        { id: 9, key: 'advanced', value: 'Advanced' }
                    ],
                    required: true,
                    visible: true,
                    id: '',
                    name: 'customTwoSelects'
                }
            ],
            submit: {
                id: '',
                icon: 'build',
                label: 'Form Button',
                action: function (event) {
                    console.log(event);
                }
            }
        };
        this.searchHeaderData = {
            placeholders: {
                main: 'Recherche libre',
                what: 'Job',
                where: 'Localisation',
                when: 'Crénaux de mission',
                who: 'Nom'
            },
            action: function (args) {
                console.log(JSON.stringify(args));
            }
        };
        this.cardExample = new __WEBPACK_IMPORTED_MODULE_2__models_voj_card_model__["a" /* VojCardModel */]();
        this.cardExample.id = 1;
        this.cardExample.title = new __WEBPACK_IMPORTED_MODULE_5__models_text_type__["a" /* TextType */]();
        this.cardExample.title.label = 'Don Rodrigue';
        this.cardExample.subtitles = [{
                label: 'sous-titre',
                icon: ''
            }];
        this.cardExample.address = new __WEBPACK_IMPORTED_MODULE_3__models_voj_map_model__["a" /* VojMapModel */]();
        this.cardExample.address.title = 'Le Dôme';
        this.cardExample.address.number = '5';
        this.cardExample.address.street = 'Rue de la Haye';
        this.cardExample.address.zipCode = '93100';
        this.cardExample.address.city = 'Tremblay en France';
        this.cardExample.address.lat = 49.005278;
        this.cardExample.address.lng = 2.555114;
        this.cards = [this.cardExample];
        //this.tabBarElement = document.querySelector('#tabs ion-tabbar-section');
    }
    HomePage.prototype.ionViewDidEnter = function () {
        //this.tabBarElement.style.display = 'none';
    };
    HomePage.prototype.test = function () {
        console.log("works");
        var payLoad = { "service": "FULL_TEXT", "role": "jobyer", "fullText": "agent de piste aeroportuaire" };
        this.httpRequest.sendCallOut(payLoad, this).subscribe(function (response) {
            if (response)
                console.log(JSON.stringify(response));
            //
        });
    };
    HomePage.prototype.testNotification = function () {
        var notificationData = {
            icon: 'star',
            title: 'My title My title My title My title My title My title',
            message: 'My message. Hello. My message. Hello.My message. Hello.My message. Hello.My message. Hello.My message. Hello.My message. Hello.My message. Hello.My message. Hello.My message. Hello.My message. Hello.My message. Hello.My message. Hello.My message. Hello.My message. Hello.My message. Hello.My message. Hello.My message. Hello.My message. Hello.My message. Hello.My message. Hello.My message. Hello.My message. Hello.My message. Hello.',
            backdropDismiss: true,
            buttons: [
                {
                    id: 'cancel',
                    label: 'Cancel',
                    icon: 'alert',
                    action: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    id: 'validate',
                    label: 'OK',
                    icon: 'checkmark-circle',
                    action: function () {
                        console.log('Ok clicked');
                    }
                }
            ]
        };
        this.vojNotification.present(notificationData);
    };
    HomePage.prototype.goToPage = function () {
        var vojNav = { page: __WEBPACK_IMPORTED_MODULE_7__test_components_contact_contact__["a" /* ContactPage */], params: { num: 0, str: "amal" }, isRoot: false };
        //this.navCtrl.parent.select(2);
        //this.navCtrl.push(ContactPage);
        //this.navigationService.navigate('details', vojNav);
        this.navigationService.hide('details');
    };
    HomePage.prototype.goToPage1 = function () {
        var vojNav = { page: __WEBPACK_IMPORTED_MODULE_10__cv_offer_module_jobyer_availability_choice_jobyer_availability_choice__["a" /* JobyerAvailabilityChoicePage */], params: { num: 0, str: "amal" }, isRoot: false };
        this.navigationService.navigate('details', vojNav);
    };
    HomePage.prototype.goToPage2 = function () {
        var vojNav = { page: __WEBPACK_IMPORTED_MODULE_7__test_components_contact_contact__["a" /* ContactPage */], params: { num: 0, str: "amal" }, isRoot: false };
        this.navigationService.navigate('list', vojNav);
    };
    HomePage.prototype.goToEnterpriseDetails = function () {
        var vojNav = { page: __WEBPACK_IMPORTED_MODULE_12__account_module_enterprise_details_enterprise_details__["a" /* EnterpriseDetails */], isRoot: false };
        this.navigationService.navigate('list', vojNav);
    };
    HomePage.prototype.presentUserInfoPage = function () {
        console.log('Present user info page.');
        // this.navCtrl.push(UserInformationPage);
        var vojNav = { page: __WEBPACK_IMPORTED_MODULE_11__account_module_user_information_user_information__["a" /* UserInformationPage */], isRoot: false };
        this.navigationService.navigate('list', vojNav);
    };
    HomePage.prototype.presentCompany = function () {
        this.modalService.present({ page: __WEBPACK_IMPORTED_MODULE_24__account_module_company_company__["a" /* CompanyPage */] });
    };
    HomePage.prototype.presentJobyerAvailabilityChoicePage = function () {
        console.log('Present Jobyer Availability Choice Page.');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__cv_offer_module_jobyer_availability_choice_jobyer_availability_choice__["a" /* JobyerAvailabilityChoicePage */]);
    };
    HomePage.prototype.presentOptionsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__account_module_options_options__["a" /* OptionsPage */]);
    };
    HomePage.prototype.presentIdentityPage = function () {
        // this.navCtrl.push(IdentityPage);
        this.modalService.present({ page: __WEBPACK_IMPORTED_MODULE_9__account_module_identity_identity__["a" /* IdentityPage */] });
    };
    HomePage.prototype.goToAccountPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_14__account_module_account_account__["a" /* AccountPage */]);
    };
    HomePage.prototype.goToSignUp = function () {
        this.modalService.present({ page: __WEBPACK_IMPORTED_MODULE_19__account_module_sign_up_sign_up__["a" /* SignUpPage */] });
    };
    HomePage.prototype.presentAddressesPage = function () {
        this.modalService.present({ page: __WEBPACK_IMPORTED_MODULE_15__account_module_main_address_main_address__["a" /* MainAddressPage */] });
        // this.navCtrl.push(MainAddressPage);
    };
    HomePage.prototype.presentLoginPage = function () {
        // let vojNav: VojPage = { page: LoginPage, isRoot: false };
        // this.navigationService.navigate('list', vojNav);
        this.modalService.present({ page: __WEBPACK_IMPORTED_MODULE_16__account_module_login_login__["a" /* LoginPage */] });
    };
    HomePage.prototype.goToBankDetailsPage = function () {
        // let vojNav: VojPage = {page: BankSettingsPage, isRoot: false};
        // this.navigationService.navigate('list', vojNav);
        this.modalService.present({ page: __WEBPACK_IMPORTED_MODULE_17__account_module_bank_settings_bank_settings__["a" /* BankSettingsPage */] });
    };
    HomePage.prototype.goToPersonalDetailsIdentity = function () {
        this.modalService.present({ page: __WEBPACK_IMPORTED_MODULE_18__account_module_personal_details_identity_personal_details_identity__["a" /* PersonalDetailsIdentityPage */] });
        // let vojNav: VojPage = {page: PersonalDetailsIdentityPage, isRoot: false};
        // this.navigationService.navigate('list', vojNav);
    };
    HomePage.prototype.goToAvailabilitiesAddDays = function () {
        var vojNav = { page: __WEBPACK_IMPORTED_MODULE_21__cv_offer_module_availabilities_add_days_availabilities_add_days__["a" /* AvailabilitiesAddDaysPage */], isRoot: false };
        this.navigationService.navigate('list', vojNav);
    };
    HomePage.prototype.goToAvailabilities = function () {
        var vojNav = { page: __WEBPACK_IMPORTED_MODULE_22__cv_offer_module_availabilities_availabilities__["a" /* AvailabilitiesPage */], isRoot: false };
        this.navigationService.navigate('list', vojNav);
    };
    HomePage.prototype.goToPersonalDetails = function () {
        this.modalService.present({ page: __WEBPACK_IMPORTED_MODULE_23__account_module_personal_details_personal_details__["a" /* PersonalDetailsPage */] });
        // let vojNav: VojPage = {page: PersonalDetailsPage, isRoot: false};
        // this.navigationService.navigate('navigate:list', vojNav);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('contentMenu'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "nav2", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/home/home.html"*/'<ion-content #mycontent fullscreen>\n\n	<h2>Welcome to Ionic!</h2>\n	<p>\n		This starter project comes with simple tabs-based layout for apps\n		that are going to primarily use a Tabbed UI.\n	</p>\n	<p>\n		Take a look at the <code>src/pages/</code> directory to add or change tabs,\n		update any existing page or create new pages.\n	</p>\n	\n	<button ion-button (click)="goToPage()">Click me</button>\n	<button ion-button (click)="goToPage1()">Click me1</button>\n	<button ion-button (click)="goToPage2()">Click me2</button>\n	<button ion-button (click)="goToOpenApplication()">goToOpenApplication</button>\n	<button ion-button (click)="goToSignUp()">goToSignUpPage</button>\n	<button ion-button (click)="goToEnterpriseDetails()">goToEnterpriseDetails</button>\n	<button ion-button (click)="goToBankDetailsPage()">goToBankDetailsPage</button>\n	<button ion-button (click)="goToPersonalDetailsIdentity()">goToPersonalDetailsIdentity</button>\n\n	<!--Test availabilities page-->\n	<button ion-button (click)="goToAvailabilities()">goToAvailabilitiesPage</button>\n\n	<!-- Notification testing -->\n	<button ion-button (click)="testNotification()">Test notification</button>\n	<button ion-button (click)="goToPersonalDetails()">goTopersonalDetails</button>\n\n	<!-- Availabilities Add Days Page testing -->\n	<button ion-button (click)="goToAvailabilitiesAddDays()">AvailabilitiesAddDaysPage</button>\n\n	<!-- Test translate service -->\n	<p>{{ \'HOME.TEST_TRANSLATION\' | translate}}</p>\n\n	<!-- Test account page -->\n	<button ion-button (click)="goToAccountPage()">Account page</button>\n\n	<!-- Option page testing -->\n	<button ion-button (click)="presentOptionsPage()">Options page</button>\n\n	<!-- Test jobyer-availability-choice page  -->\n	<button ion-button (click)="presentJobyerAvailabilityChoicePage()">Jobyer Availability Choice page</button>\n\n	<!-- Test user info page -->\n	<button ion-button (click)="presentUserInfoPage()">Present user info page</button>\n\n	<!-- Test identity page -->\n	<button ion-button (click)="presentIdentityPage()">Test identity page</button>\n\n	<button ion-button (click)="goToPage()">Click me</button>\n\n	<button ion-button (click)="presentAddressesPage()">Present addresses page</button>\n\n	<!-- Test login page -->\n	<button ion-button (click)="presentLoginPage()">Test login page</button>\n	<button ion-button (click)="presentCompany()">Present Company</button>\n\n	<!--<voj-card title="Mon titre" content="Ma description ici" action-name="Mon identité" subtitle1="Tél: 0669938121"\n			  subtitle1-icon="call" subtitle2="E-mail: test@compte.com" subtitle2-icon="mail"  thumbnail="assets/img/advance-card-bttf.png"></voj-card>-->\n	<voj-card [data]=\'jobyerData\' [vojData]="cards" ></voj-card>\n	<voj-form [data]=\'formData\'></voj-form>\n\n	<ion-fab bottom right>\n		<button ion-fab (click)="test()" color="vojgreen">\n			<ion-icon name="log-in"></ion-icon>\n		</button>\n	</ion-fab>\n	<!-- DEACTIVATE IN CASE OF NEEDING TO SHOW A MAP -->\n	<!-- <voj-map [data]="cards"></voj-map> -->\n</ion-content>\n'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_6__providers_http_request_http_request__["a" /* HttpRequestProvider */],
            __WEBPACK_IMPORTED_MODULE_4__components_voj_notification_voj_notification_service__["a" /* VojNotificationService */],
            __WEBPACK_IMPORTED_MODULE_8__services_navigation_service__["a" /* NavigationService */],
            __WEBPACK_IMPORTED_MODULE_20__services_modal_service__["a" /* ModalService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_profile_service_profile_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_utils__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_navigation_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_information_user_information__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search_module_search_search__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__test_components_about_about__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__config_voj_configuration__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AccountPage = (function () {
    function AccountPage(storage, profileService, navigationService, configuration) {
        var _this = this;
        this.storage = storage;
        this.profileService = profileService;
        this.navigationService = navigationService;
        this.configuration = configuration;
        this.config = this.configuration.configuration;
        // Set page header
        this.dataPageHeader = {
            title: 'Mon compte',
            actions: [
                {
                    id: 'parameters',
                    label: '',
                    icon: 'settings',
                    action: function () {
                        console.log('Click parameters button.');
                    }
                },
                {
                    id: 'help',
                    label: '',
                    icon: 'help',
                    action: function () {
                        console.log('Click help button.');
                    }
                }
            ],
            style: 'any',
            isCanceled: true
        };
        this.storage.get("currentUser").then(function (data) {
            if (!data) {
                return;
            }
            _this.currentUser = JSON.parse(data);
            // Set profile data
            _this.profileData = {
                cover: 'http://www.turfgrass.ie/wp-content/uploads/2014/07/T-Projects-Lubker-1.jpg',
                thumbnail: 'http://diysolarpanelsv.com/images/clip-art-user-14.png',
                title: {
                    label: (__WEBPACK_IMPORTED_MODULE_3__utils_utils__["a" /* ObjectUtils */].isEmpty(_this.currentUser.identity.firstName) ? "Nous vous invitons à saisir vos informations d'identité." : _this.currentUser.identity.civility + " " + _this.currentUser.identity.firstName + " " + _this.currentUser.identity.middleName + " " + _this.currentUser.identity.lastName)
                },
                subtitles: [
                    {
                        icon: 'call',
                        label: _this.currentUser.account.phone
                    },
                    {
                        icon: 'mail',
                        label: _this.currentUser.account.mail
                    }
                ],
                actions: [
                    {
                        id: '',
                        icon: '',
                        label: 'se déconnecter',
                        action: function () {
                            _this.logout();
                        }
                    },
                    {
                        id: '',
                        icon: 'information-circle',
                        label: 'mes informations',
                        action: function () {
                            _this.gotoUserInformationPage();
                        }
                    }
                ],
                segments: [
                    {
                        title: {
                            icon: '',
                            label: '0'
                        },
                        subtitle: {
                            icon: '',
                            label: 'Contrat(s) en attente'
                        },
                        action: function () {
                            console.log('Present Waiting Contracts page.');
                        },
                        style: 'style1'
                    },
                    {
                        title: {
                            icon: '',
                            label: '0'
                        },
                        subtitle: {
                            icon: '',
                            label: 'Pointage à effectuer'
                        },
                        action: function () {
                            console.log('Present Hour Tracking page.');
                        },
                        style: 'style1'
                    },
                    {
                        title: {
                            icon: '',
                            label: '0'
                        },
                        subtitle: {
                            icon: '',
                            label: 'Mission(s) à clôturer'
                        },
                        action: function () {
                            console.log('Present Hours Validation Signature page.');
                        },
                        style: 'style1'
                    }
                ]
            };
        });
    }
    AccountPage.prototype.gotoUserInformationPage = function () {
        var vojPage = { page: __WEBPACK_IMPORTED_MODULE_5__user_information_user_information__["a" /* UserInformationPage */] };
        this.navigationService.navigate("details", vojPage);
    };
    AccountPage.prototype.ngOnInit = function () {
        //this.profileService.getAccountData(this.currentUser.account.id).then((data: any) => {
        //});
    };
    AccountPage.prototype.ionViewDidLoad = function () {
    };
    AccountPage.prototype.logout = function () {
        var _this = this;
        this.storage.clear().then(function () {
            var vojPageList = { page: __WEBPACK_IMPORTED_MODULE_6__search_module_search_search__["a" /* SearchPage */], isRoot: true };
            _this.navigationService.navigate("list", vojPageList);
            if (_this.config.isLargeScreen) {
                _this.navigationService.hide("details");
                var vojPageMain = { page: __WEBPACK_IMPORTED_MODULE_7__test_components_about_about__["a" /* AboutPage */], isRoot: true };
                _this.navigationService.navigate("main", vojPageMain);
            }
        });
    };
    AccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'account-page',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/account-module/account/account.html"*/'<voj-page-header [data]="dataPageHeader"></voj-page-header>\n\n<voj-card [data]="profileData" [mode]="\'reduced\'"></voj-card>'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/account-module/account/account.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__providers_profile_service_profile_service__["a" /* ProfileService */],
            __WEBPACK_IMPORTED_MODULE_4__services_navigation_service__["a" /* NavigationService */],
            __WEBPACK_IMPORTED_MODULE_8__config_voj_configuration__["a" /* Configuration */]])
    ], AccountPage);
    return AccountPage;
}());

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvailabilitiesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_voj_configuration__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jobyer_availability_choice_jobyer_availability_choice__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_navigation_service__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AvailabilitiesPage = (function () {
    function AvailabilitiesPage(configurationService, navigationService) {
        this.configurationService = configurationService;
        this.navigationService = navigationService;
        this.isMobile = false;
        this.config = this.configurationService.configuration;
        this.config.isLargeScreen ? this.isMobile = false : this.isMobile = true;
        this.headerData = {
            title: 'My availabilities',
            style: 'any',
            actions: [{
                    id: 'xdcfgvyhubijnklbhvg',
                    label: 'help',
                    icon: 'help',
                    action: function () {
                        console.log('button works');
                    }
                }],
            isCanceled: true
        };
        this.testAvailabilitiesData = [
            {
                fromDay: new Date(1503679162783),
                toDay: new Date(1503679162783 + 86400000),
                fromHour: 12,
                toHour: 1,
                entireDay: true
            },
            {
                fromDay: new Date(1503699162783),
                toDay: new Date(1503699162783 + 86400000),
                fromHour: 12,
                toHour: 1,
                entireDay: true
            },
        ];
    }
    AvailabilitiesPage.prototype.deleteAvailability = function (index) {
        this.testAvailabilitiesData.splice(index, 1);
    };
    AvailabilitiesPage.prototype.goToJobyerAvailabilityChoice = function () {
        var vojNav = { page: __WEBPACK_IMPORTED_MODULE_2__jobyer_availability_choice_jobyer_availability_choice__["a" /* JobyerAvailabilityChoicePage */], isRoot: false };
        this.navigationService.navigate('list', vojNav);
    };
    AvailabilitiesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BankSettingsPage');
    };
    AvailabilitiesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'availabilities-page',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/cv-offer-module/availabilities/availabilities.html"*/'<voj-page-header [data]=\'headerData\'></voj-page-header>\n<div [ngClass]="isMobile ? \'availabilities-container\' : \'\'" class="availabilities-parent">\n    <div [ngClass]="isMobile ? \'availabilities-child-container\' : \'\'" class="availabilities-child">\n\n        <p class="availabilities-link" (click)="goToJobyerAvailabilityChoice()">Add an availability</p>\n        <div class="empty-field1"></div>\n        <div class="custom-line"></div>\n        <div class="empty-field2"></div>\n\n        <ion-list padding class="availability-list">\n            <ion-item *ngFor="let item of testAvailabilitiesData let i = index">\n                <span class="availability-label">From {{item.fromDay | date: \'dd/MM/y\'}} to {{item.toDay | date: \'dd/MM/y\'}}</span>\n                <br>\n                <span class="availability-label">From {{item.fromHour}} to {{item.toHour}}</span>\n\n                <button class="availability-delete-btn" ion-button icon-only item-end (click)="deleteAvailability(i)">\n                    <ion-icon name="ios-trash"></ion-icon>\n                </button>\n            </ion-item>\n        </ion-list>\n\n        <div class="availabilities-validate-button">\n            <button ion-button class="validate-btn">Validate</button>\n        </div>\n\n    </div>\n</div>\n'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/cv-offer-module/availabilities/availabilities.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__config_voj_configuration__["a" /* Configuration */],
            __WEBPACK_IMPORTED_MODULE_3__services_navigation_service__["a" /* NavigationService */]])
    ], AvailabilitiesPage);
    return AvailabilitiesPage;
}());

//# sourceMappingURL=availabilities.js.map

/***/ }),

/***/ 246:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 246;

/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../components/voj-calendar/desktop-calendar/desktop-calendar.module": [
		349
	],
	"../components/voj-calendar/smart-calendar/smart-calendar.module": [
		290
	],
	"../components/voj-calendar/voj-calendar.module": [
		289
	],
	"../components/voj-card/voj-card.module": [
		113
	],
	"../components/voj-form/voj-form.module": [
		540
	],
	"../components/voj-header-segment/voj-header-segment.module": [
		542
	],
	"../components/voj-header-web/voj-header-web.module": [
		541
	],
	"../components/voj-header/voj-header.module": [
		538
	],
	"../components/voj-list/voj-list.module": [
		539
	],
	"../components/voj-map/voj-map.module": [
		114
	],
	"../components/voj-menu/voj-menu.module": [
		195
	],
	"../components/voj-search-header/voj-search-header.module": [
		210
	],
	"../components/voj-segment/voj-segment.module": [
		82
	],
	"../pages/account-module/company/company.module": [
		554
	],
	"../pages/account-module/enterprise-details/enterprise-details.module": [
		552
	],
	"../pages/account-module/open-application/open-application.module": [
		551
	],
	"../pages/account-module/options/options.module": [
		549
	],
	"../pages/account-module/personal-details-identity/personal-details-identity.module": [
		544
	],
	"../pages/account-module/personal-details/personal-details.module": [
		545
	],
	"../pages/account-module/user-information/user-information.module": [
		547
	],
	"../pages/calendar/calendar.module": [
		560
	],
	"../pages/cv-offer-module/jobyer-availability-choice/jobyer-availability-choice.module": [
		288
	],
	"../pages/home/home.module": [
		556
	],
	"../pages/landing-page/landing-page.module": [
		543
	],
	"../pages/options/options.module": [
		561
	],
	"../pages/search-module/search/search.module": [
		546
	],
	"../pages/tabs/tabs.module": [
		558
	],
	"../pages/test-components/about/about.module": [
		550
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 287;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobyerAvailabilityChoiceModule", function() { return JobyerAvailabilityChoiceModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jobyer_availability_choice__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var JobyerAvailabilityChoiceModule = (function () {
    function JobyerAvailabilityChoiceModule() {
    }
    JobyerAvailabilityChoiceModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__jobyer_availability_choice__["a" /* JobyerAvailabilityChoicePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__jobyer_availability_choice__["a" /* JobyerAvailabilityChoicePage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__["a" /* VojComponentsModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__jobyer_availability_choice__["a" /* JobyerAvailabilityChoicePage */]
            ]
        })
    ], JobyerAvailabilityChoiceModule);
    return JobyerAvailabilityChoiceModule;
}());

//# sourceMappingURL=jobyer-availability-choice.module.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VojCalendarModule", function() { return VojCalendarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__voj_calendar__ = __webpack_require__(635);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__smart_calendar_smart_calendar_module__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__desktop_calendar_desktop_calendar_module__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__full_calendar_full_calendar_module__ = __webpack_require__(815);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var VojCalendarModule = (function () {
    function VojCalendarModule() {
    }
    VojCalendarModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__voj_calendar__["a" /* VojCalendar */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__smart_calendar_smart_calendar_module__["SmartCalendarModule"],
                __WEBPACK_IMPORTED_MODULE_5__desktop_calendar_desktop_calendar_module__["DesktopCalendarModule"],
                __WEBPACK_IMPORTED_MODULE_6__full_calendar_full_calendar_module__["a" /* FullCalendarComponentModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__voj_calendar__["a" /* VojCalendar */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__voj_calendar__["a" /* VojCalendar */]
            ],
            entryComponents: []
        })
    ], VojCalendarModule);
    return VojCalendarModule;
}());

//# sourceMappingURL=voj-calendar.module.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmartCalendarModule", function() { return SmartCalendarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calendar_calendar_module__ = __webpack_require__(636);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_voj_popover_page__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__smart_calendar__ = __webpack_require__(770);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SmartCalendarModule = (function () {
    function SmartCalendarModule() {
    }
    SmartCalendarModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__smart_calendar__["a" /* SmartCalendar */],
                __WEBPACK_IMPORTED_MODULE_3__components_voj_popover_page__["a" /* PopoverPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__calendar_calendar_module__["a" /* NgCalendarModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__smart_calendar__["a" /* SmartCalendar */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__smart_calendar__["a" /* SmartCalendar */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__components_voj_popover_page__["a" /* PopoverPage */]
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["LOCALE_ID"], useValue: 'fr-FR' }
            ]
        })
    ], SmartCalendarModule);
    return SmartCalendarModule;
}());

//# sourceMappingURL=smart-calendar.module.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = defaultWeekViewDayHeader;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeekViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_date_fns__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_date_fns__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_merge__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__calendar_service__ = __webpack_require__(76);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








function defaultWeekViewDayHeader(config) {
    var datePipe = new __WEBPACK_IMPORTED_MODULE_0__angular_common__["DatePipe"](config.locale);
    return function (date) {
        var weekStart = config.startingDayWeek || 0;
        return {
            day: datePipe.transform(date, config.formatWeelViewWeekDayHeader),
            week: datePipe.transform(date, config.formatWeekViewDayHeader),
            isWeekend: date.getDay() > (4 + weekStart) || date.getDay() < weekStart,
            date: date
        };
    };
}
var WeekViewComponent = (function () {
    function WeekViewComponent(calendarService, elm, cdf) {
        this.calendarService = calendarService;
        this.elm = elm;
        this.cdf = cdf;
        this.class = true;
        this.dir = "";
        this.scrollToHour = 0;
        this.onRangeChanged = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        this.onEventSelected = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        this.onTimeSelected = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        this.onTitleChanged = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"](true);
        this.views = [];
        this.currentViewIndex = 0;
        this.direction = 0;
        this.mode = 'week';
        this.inited = false;
        this.callbackOnInit = true;
        this.updateOffset$ = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__["Subject"]();
    }
    WeekViewComponent_1 = WeekViewComponent;
    WeekViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.dateFormatter && this.dateFormatter.formatWeekViewDayHeader) {
            this.formatDayHeader = this.dateFormatter.formatWeekViewDayHeader;
        }
        else {
            // var datePipe = new DatePipe(this.locale);
            this.formatDayHeader = defaultWeekViewDayHeader({
                locale: this.locale,
                formatWeelViewWeekDayHeader: this.formatWeelViewWeekDayHeader,
                formatWeekViewDayHeader: this.formatWeekViewDayHeader,
                startingDayWeek: this.startingDayWeek
            });
            // this.formatDayHeader = function(date: Date) {
            //   return {
            //     day: datePipe.transform(date, this.formatWeelViewWeekDayHeader),
            //     week: datePipe.transform(date, this.formatWeekViewDayHeader),
            //     isWeekend: date.getDay() > 4,
            //     date: date
            //   }
            // };
        }
        if (this.dateFormatter && this.dateFormatter.formatWeekViewTitle) {
            this.formatTitle = this.dateFormatter.formatWeekViewTitle;
        }
        else {
            var datePipe = new __WEBPACK_IMPORTED_MODULE_0__angular_common__["DatePipe"](this.locale);
            this.formatTitle = function (date) {
                return datePipe.transform(date, this.formatWeekTitle);
            };
        }
        if (this.dateFormatter && this.dateFormatter.formatWeekViewHourColumn) {
            this.formatHourColumnLabel = this.dateFormatter.formatWeekViewHourColumn;
        }
        else {
            var datePipe = new __WEBPACK_IMPORTED_MODULE_0__angular_common__["DatePipe"](this.locale);
            this.formatHourColumnLabel = function (date) {
                return datePipe.transform(date, this.formatWeekViewHourColumn);
            };
        }
        if (this.lockSwipeToPrev) {
            this.slider.lockSwipeToPrev(true);
        }
        if (this.lockSwipes) {
            this.slider.lockSwipes(true);
        }
        this.refreshView();
        this.hourColumnLabels = this.getHourColumnLabels();
        this.inited = true;
        var fromParent$ = this.calendarService.currentDateChangedFromParent$;
        var fromChild$ = this.calendarService.currentDateChangedFromChildren$;
        this.currentDateChangedSubscription = __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"]
            .merge(fromParent$, fromChild$)
            .subscribe(function (currentDate) {
            _this.refreshView();
        });
        this.eventSourceChangedSubscription = this.calendarService.eventSourceChanged$.subscribe(function () {
            _this.onDataLoaded();
        });
    };
    WeekViewComponent.prototype.ngAfterViewInit = function () {
        var title = this.getTitle();
        this.onTitleChanged.emit(title);
        if (this.scrollToHour > 0) {
            var hourColumns_1 = this.elm.nativeElement.querySelector('.weekview-normal-event-container').querySelectorAll('.calendar-hour-column');
            var me = this;
            setTimeout(function () {
                me.initScrollPosition = hourColumns_1[me.scrollToHour].offsetTop;
            }, 0);
        }
    };
    WeekViewComponent.prototype.ngAfterContentInit = function () { };
    WeekViewComponent.prototype.ngOnChanges = function (changes) {
        if (!this.inited)
            return;
        var eventSourceChange = changes['eventSource'];
        if (eventSourceChange && eventSourceChange.currentValue) {
            this.onDataLoaded();
        }
        var lockSwipeToPrev = changes['lockSwipeToPrev'];
        if (lockSwipeToPrev) {
            this.slider.lockSwipeToPrev(lockSwipeToPrev.currentValue);
        }
        var lockSwipes = changes['lockSwipes'];
        if (lockSwipes) {
            this.slider.lockSwipes(lockSwipes.currentValue);
        }
    };
    WeekViewComponent.prototype.ngOnDestroy = function () {
        if (this.currentDateChangedSubscription) {
            this.currentDateChangedSubscription.unsubscribe();
            this.currentDateChangedSubscription = null;
        }
        if (this.eventSourceChangedSubscription) {
            this.eventSourceChangedSubscription.unsubscribe();
            this.eventSourceChangedSubscription = null;
        }
    };
    WeekViewComponent.prototype.onSlideChanged = function () {
        if (this.callbackOnInit) {
            this.callbackOnInit = false;
            return;
        }
        var currentSlideIndex = this.slider.getActiveIndex(), direction = 0, currentViewIndex = this.currentViewIndex;
        currentSlideIndex = (currentSlideIndex + 2) % 3;
        if (currentSlideIndex - currentViewIndex === 1) {
            direction = 1;
        }
        else if (currentSlideIndex === 0 && currentViewIndex === 2) {
            direction = 1;
            this.slider.slideTo(1, 0, false);
        }
        else if (currentViewIndex - currentSlideIndex === 1) {
            direction = -1;
        }
        else if (currentSlideIndex === 2 && currentViewIndex === 0) {
            direction = -1;
            this.slider.slideTo(3, 0, false);
        }
        this.currentViewIndex = currentSlideIndex;
        this.move(direction);
    };
    WeekViewComponent.prototype.move = function (direction) {
        if (direction === 0) {
            return;
        }
        this.direction = direction;
        var adjacent = this.calendarService.getAdjacentCalendarDate(this.mode, direction);
        this.calendarService.setCurrentDate(adjacent);
        this.refreshView();
        this.direction = 0;
    };
    WeekViewComponent.createDateObjects = function (startTime) {
        var times = [], currentHour = startTime.getHours(), currentDate = startTime.getDate();
        for (var hour = 0; hour < 24; hour += 1) {
            var row = [];
            for (var day = 0; day < 7; day += 1) {
                var time = new Date(startTime.getTime());
                time.setHours(currentHour + hour);
                time.setDate(currentDate + day);
                row.push({
                    events: [],
                    time: time
                });
            }
            times.push(row);
        }
        return times;
    };
    WeekViewComponent.getDates = function (startTime, n) {
        var dates = new Array(n), current = new Date(startTime.getTime()), i = 0;
        current.setHours(12); // Prevent repeated dates because of timezone bug
        while (i < n) {
            dates[i++] = {
                date: new Date(current.getTime()),
                events: []
            };
            current.setDate(current.getDate() + 1);
        }
        return dates;
    };
    WeekViewComponent.prototype.getHourColumnLabels = function () {
        var hourColumnLabels = [];
        for (var hour = 0, length_1 = this.views[0].rows.length; hour < length_1; hour += 1) {
            hourColumnLabels.push(this.formatHourColumnLabel(this.views[0].rows[hour][0].time));
        }
        return hourColumnLabels;
    };
    WeekViewComponent.prototype.getViewData = function (startTime) {
        var dates = WeekViewComponent_1.getDates(startTime, 7);
        var dayHeaders = [];
        for (var i = 0; i < 7; i++) {
            dayHeaders.push(this.formatDayHeader(dates[i].date));
        }
        return {
            rows: WeekViewComponent_1.createDateObjects(startTime),
            dates: dates,
            dayHeaders: dayHeaders
        };
    };
    WeekViewComponent.prototype.getRange = function (currentDate) {
        var year = currentDate.getFullYear(), month = currentDate.getMonth(), date = currentDate.getDate(), day = currentDate.getDay(), difference = day - this.startingDayWeek;
        if (difference < 0) {
            difference += 7;
        }
        var firstDayOfWeek = new Date(year, month, date - difference);
        var endTime = new Date(year, month, date - difference + 7);
        return {
            startTime: firstDayOfWeek,
            endTime: endTime
        };
    };
    WeekViewComponent.prototype.onDataLoaded = function () {
        var _this = this;
        var eventSource = this.eventSource, len = eventSource ? eventSource.length : 0, startTime = this.range.startTime, endTime = this.range.endTime, utcStartTime = new Date(Date.UTC(startTime.getFullYear(), startTime.getMonth(), startTime.getDate())), utcEndTime = new Date(Date.UTC(endTime.getFullYear(), endTime.getMonth(), endTime.getDate())), currentViewIndex = this.currentViewIndex, rows = this.views[currentViewIndex].rows, dates = this.views[currentViewIndex].dates, oneHour = 3600000, oneDay = 86400000, 
        // add allday eps
        eps = 0.016, allDayEventInRange = false, normalEventInRange = false;
        for (var i = 0; i < 7; i += 1) {
            dates[i].events = [];
        }
        for (var day = 0; day < 7; day += 1) {
            for (var hour = 0; hour < 24; hour += 1) {
                rows[hour][day].events = [];
            }
        }
        for (var i = 0; i < len; i += 1) {
            var event_1 = eventSource[i];
            var eventStartTime = new Date(event_1.startTime.getTime());
            var eventEndTime = new Date(event_1.endTime.getTime());
            if (event_1.allDay) {
                if (eventEndTime <= utcStartTime || eventStartTime >= utcEndTime) {
                    continue;
                }
                else {
                    allDayEventInRange = true;
                    var allDayStartIndex = void 0;
                    if (eventStartTime <= utcStartTime) {
                        allDayStartIndex = 0;
                    }
                    else {
                        allDayStartIndex = Math.floor((eventStartTime.getTime() - utcStartTime.getTime()) / oneDay);
                    }
                    var allDayEndIndex = void 0;
                    if (eventEndTime >= utcEndTime) {
                        allDayEndIndex = Math.ceil((utcEndTime.getTime() - utcStartTime.getTime()) / oneDay);
                    }
                    else {
                        allDayEndIndex = Math.ceil((eventEndTime.getTime() - utcStartTime.getTime()) / oneDay);
                    }
                    var displayAllDayEvent = {
                        event: event_1,
                        startIndex: allDayStartIndex,
                        endIndex: allDayEndIndex
                    };
                    var eventSet = dates[allDayStartIndex].events;
                    if (eventSet) {
                        eventSet.push(displayAllDayEvent);
                    }
                    else {
                        eventSet = [];
                        eventSet.push(displayAllDayEvent);
                        dates[allDayStartIndex].events = eventSet;
                    }
                }
            }
            else {
                if (eventEndTime <= startTime || eventStartTime >= endTime) {
                    continue;
                }
                else {
                    normalEventInRange = true;
                    var timeDiff = void 0;
                    var timeDifferenceStart = void 0;
                    if (eventStartTime <= startTime) {
                        timeDifferenceStart = 0;
                    }
                    else {
                        timeDiff = eventStartTime.getTime() - startTime.getTime() - (eventStartTime.getTimezoneOffset() - startTime.getTimezoneOffset()) * 60000;
                        timeDifferenceStart = timeDiff / oneHour;
                    }
                    var timeDifferenceEnd = void 0;
                    if (eventEndTime >= endTime) {
                        timeDiff = endTime.getTime() - startTime.getTime() - (endTime.getTimezoneOffset() - startTime.getTimezoneOffset()) * 60000;
                        timeDifferenceEnd = timeDiff / oneHour;
                    }
                    else {
                        timeDiff = eventEndTime.getTime() - startTime.getTime() - (eventEndTime.getTimezoneOffset() - startTime.getTimezoneOffset()) * 60000;
                        timeDifferenceEnd = timeDiff / oneHour;
                    }
                    var startIndex = Math.floor(timeDifferenceStart), endIndex = Math.ceil(timeDifferenceEnd - eps), startRowIndex = startIndex % 24, dayIndex = Math.floor(startIndex / 24), endOfDay = dayIndex * 24, startOffset = 0, endOffset = 0;
                    if (this.hourParts !== 1) {
                        startOffset = Math.floor((timeDifferenceStart - startIndex) * this.hourParts);
                    }
                    do {
                        endOfDay += 24;
                        var endRowIndex = void 0;
                        if (endOfDay <= endIndex) {
                            endRowIndex = 24;
                        }
                        else {
                            endRowIndex = endIndex % 24;
                            if (this.hourParts !== 1) {
                                endOffset = Math.floor((endIndex - timeDifferenceEnd) * this.hourParts);
                            }
                        }
                        var displayEvent = {
                            event: event_1,
                            startIndex: startRowIndex,
                            endIndex: endRowIndex,
                            startOffset: startOffset,
                            endOffset: endOffset
                        };
                        var eventSet = rows[startRowIndex][dayIndex].events;
                        if (eventSet) {
                            eventSet.push(displayEvent);
                        }
                        else {
                            eventSet = [];
                            eventSet.push(displayEvent);
                            rows[startRowIndex][dayIndex].events = eventSet;
                        }
                        startRowIndex = 0;
                        startOffset = 0;
                        dayIndex += 1;
                    } while (endOfDay < endIndex);
                }
            }
        }
        if (normalEventInRange) {
            for (var day = 0; day < 7; day += 1) {
                var orderedEvents = [];
                for (var hour = 0; hour < 24; hour += 1) {
                    if (rows[hour][day].events) {
                        rows[hour][day].events.sort(WeekViewComponent_1.compareEventByStartOffset);
                        orderedEvents = orderedEvents.concat(rows[hour][day].events);
                    }
                }
                if (orderedEvents.length > 0) {
                    this.placeEvents(orderedEvents);
                }
            }
        }
        if (allDayEventInRange) {
            var orderedAllDayEvents = [];
            for (var day = 0; day < 7; day += 1) {
                if (dates[day].events) {
                    orderedAllDayEvents = orderedAllDayEvents.concat(dates[day].events);
                }
            }
            if (orderedAllDayEvents.length > 0) {
                this.placeAllDayEvents(orderedAllDayEvents);
            }
        }
        setTimeout(function () { return _this.updateOffset$.next(); }, 500);
    };
    WeekViewComponent.prototype.refreshView = function () {
        var _this = this;
        this.range = this.getRange(this.calendarService.currentDate);
        if (this.inited) {
            var title = this.getTitle();
            this.onTitleChanged.emit(title);
        }
        this.calendarService.populateAdjacentViews(this);
        this.calendarService.rangeChanged(this);
        setTimeout(function () { return _this.updateOffset$.next(); }, 200);
    };
    WeekViewComponent.prototype.getTitle = function () {
        var firstDayOfWeek = this.range.startTime, weekFormat = '$n', weekNumberIndex = this.formatWeekTitle.indexOf(weekFormat), title = this.formatTitle(firstDayOfWeek);
        if (weekNumberIndex !== -1) {
            var weekNumber = String(WeekViewComponent_1.getISO8601WeekNumber(firstDayOfWeek));
            if (typeof title !== 'undefined') {
                title = title.replace(weekFormat, weekNumber);
            }
        }
        return title;
    };
    WeekViewComponent.getISO8601WeekNumber = function (date) {
        var dayOfWeekOnFirst = (new Date(date.getFullYear(), 0, 1)).getDay();
        var firstThurs = new Date(date.getFullYear(), 0, ((dayOfWeekOnFirst <= 4) ? 5 : 12) - dayOfWeekOnFirst);
        var thisThurs = new Date(date.getFullYear(), date.getMonth(), date.getDate() + (4 - date.getDay()));
        var diff = +thisThurs - +firstThurs;
        return (1 + Math.round(diff / 6.048e8)); // 6.048e8 ms per week
    };
    WeekViewComponent.compareEventByStartOffset = function (eventA, eventB) {
        return eventA.startOffset - eventB.startOffset;
    };
    WeekViewComponent.prototype.selectDay = function (date) {
        this.calendarService.setCurrentDate(date);
        this.select(date, null);
    };
    WeekViewComponent.prototype.select = function (selectedTime, events) {
        var disabled = false;
        if (Object(__WEBPACK_IMPORTED_MODULE_3_date_fns__["isPast"])(selectedTime)) {
            console.log('[weekview:past-date-selected]');
            return;
        }
        if (this.markDisabled) {
            disabled = this.markDisabled(selectedTime);
        }
        if (events == null) {
            return this.onTimeSelected.emit({
                selectedTime: selectedTime,
                events: [],
                disabled: disabled
            });
        }
        else {
            this.onTimeSelected.emit({
                selectedTime: selectedTime,
                events: events.map(function (e) { return e.event; }),
                disabled: disabled
            });
        }
    };
    WeekViewComponent.prototype.placeEvents = function (orderedEvents) {
        this.calculatePosition(orderedEvents);
        WeekViewComponent_1.calculateWidth(orderedEvents);
    };
    WeekViewComponent.prototype.placeAllDayEvents = function (orderedEvents) {
        this.calculatePosition(orderedEvents);
    };
    WeekViewComponent.prototype.overlap = function (event1, event2) {
        var earlyEvent = event1, lateEvent = event2;
        if (event1.startIndex > event2.startIndex || (event1.startIndex === event2.startIndex && event1.startOffset > event2.startOffset)) {
            earlyEvent = event2;
            lateEvent = event1;
        }
        if (earlyEvent.endIndex <= lateEvent.startIndex) {
            return false;
        }
        else {
            return !(earlyEvent.endIndex - lateEvent.startIndex === 1 && earlyEvent.endOffset + lateEvent.startOffset > this.hourParts);
        }
    };
    WeekViewComponent.prototype.calculatePosition = function (events) {
        var len = events.length, maxColumn = 0, isForbidden = new Array(len);
        for (var i = 0; i < len; i += 1) {
            var col = void 0;
            for (col = 0; col < maxColumn; col += 1) {
                isForbidden[col] = false;
            }
            for (var j = 0; j < i; j += 1) {
                if (this.overlap(events[i], events[j])) {
                    isForbidden[events[j].position] = true;
                }
            }
            for (col = 0; col < maxColumn; col += 1) {
                if (!isForbidden[col]) {
                    break;
                }
            }
            if (col < maxColumn) {
                events[i].position = col;
            }
            else {
                events[i].position = maxColumn++;
            }
        }
        if (this.dir === 'rtl') {
            for (var i = 0; i < len; i += 1) {
                events[i].position = maxColumn - 1 - events[i].position;
            }
        }
    };
    WeekViewComponent.calculateWidth = function (orderedEvents) {
        var cells = new Array(24);
        // sort by position in descending order, the right most columns should be calculated first
        orderedEvents.sort(function (eventA, eventB) {
            return eventB.position - eventA.position;
        });
        for (var i_1 = 0; i_1 < 24; i_1 += 1) {
            cells[i_1] = {
                calculated: false,
                events: []
            };
        }
        var len = orderedEvents.length;
        for (var i_2 = 0; i_2 < len; i_2 += 1) {
            var event_2 = orderedEvents[i_2];
            var index = event_2.startIndex;
            while (index < event_2.endIndex) {
                cells[index].events.push(event_2);
                index += 1;
            }
        }
        var i = 0;
        while (i < len) {
            var event_3 = orderedEvents[i];
            if (!event_3.overlapNumber) {
                var overlapNumber = event_3.position + 1;
                event_3.overlapNumber = overlapNumber;
                var eventQueue = [event_3];
                while ((event_3 = eventQueue.shift())) {
                    var index = event_3.startIndex;
                    while (index < event_3.endIndex) {
                        if (!cells[index].calculated) {
                            cells[index].calculated = true;
                            if (cells[index].events) {
                                var eventCountInCell = cells[index].events.length;
                                for (var j = 0; j < eventCountInCell; j += 1) {
                                    var currentEventInCell = cells[index].events[j];
                                    if (!currentEventInCell.overlapNumber) {
                                        currentEventInCell.overlapNumber = overlapNumber;
                                        eventQueue.push(currentEventInCell);
                                    }
                                }
                            }
                        }
                        index += 1;
                    }
                }
            }
            i += 1;
        }
    };
    WeekViewComponent.prototype.eventSelected = function (event) {
        this.onEventSelected.emit(event);
    };
    WeekViewComponent.prototype.setScrollPosition = function (scrollPosition) {
        this.initScrollPosition = scrollPosition;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])('weekSlider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* Slides */])
    ], WeekViewComponent.prototype, "slider", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["HostBinding"])('class.weekview'),
        __metadata("design:type", Object)
    ], WeekViewComponent.prototype, "class", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["TemplateRef"])
    ], WeekViewComponent.prototype, "weekviewAllDayEventTemplate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["TemplateRef"])
    ], WeekViewComponent.prototype, "weekviewNormalEventTemplate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], WeekViewComponent.prototype, "formatWeelViewWeekDayHeader", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], WeekViewComponent.prototype, "formatWeekTitle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], WeekViewComponent.prototype, "formatWeekViewDayHeader", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], WeekViewComponent.prototype, "formatWeekViewHourColumn", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], WeekViewComponent.prototype, "formatHourColumn", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], WeekViewComponent.prototype, "startingDayWeek", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], WeekViewComponent.prototype, "allDayLabel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], WeekViewComponent.prototype, "hourParts", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], WeekViewComponent.prototype, "eventSource", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", Function)
    ], WeekViewComponent.prototype, "markDisabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], WeekViewComponent.prototype, "locale", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], WeekViewComponent.prototype, "dateFormatter", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], WeekViewComponent.prototype, "dir", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], WeekViewComponent.prototype, "scrollToHour", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], WeekViewComponent.prototype, "preserveScrollPosition", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], WeekViewComponent.prototype, "lockSwipeToPrev", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], WeekViewComponent.prototype, "lockSwipes", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"])
    ], WeekViewComponent.prototype, "currentDateStream", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])('currentDate'),
        __metadata("design:type", Date)
    ], WeekViewComponent.prototype, "currentDate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], WeekViewComponent.prototype, "onRangeChanged", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], WeekViewComponent.prototype, "onEventSelected", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], WeekViewComponent.prototype, "onTimeSelected", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], WeekViewComponent.prototype, "onTitleChanged", void 0);
    WeekViewComponent = WeekViewComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'weekview',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-calendar/calendar/weekview/weekview.html"*/'<ion-slides #weekSlider [loop]="true" [dir]="dir" (ionSlideDidChange)="onSlideChanged()">\n  <ion-slide [ngxOffsetContainer]="updateOffset$">\n    <div *ngIf="0===currentViewIndex">\n      <div\n        ngxOffsetSource="offsetHeight"\n        ngxOffsetValueType="px">\n        <weekview-header\n          [data]="views[0]"\n          (onSelect)="selectDay($event)">\n        </weekview-header>\n        <div class="weekview-allday-table voj-weekview-allday-table">\n          <div class="weekview-allday-label">{{allDayLabel}}</div>\n          <ion-scroll scrollY="true" class="weekview-allday-content-wrapper" zoom="false">\n            <table class="table table-fixed weekview-allday-content-table">\n              <tbody>\n                <tr>\n                  <td *ngFor="let day of views[0].dates" class="calendar-cell">\n                    <div [ngClass]="{\'calendar-event-wrap\': day.events}" *ngIf="day.events" [ngStyle]="{height: 25*day.events.length+\'px\'}">\n                      <div *ngFor="let displayEvent of day.events" class="calendar-event" tappable (click)="eventSelected(displayEvent.event)" [ngStyle]="{top: 25*displayEvent.position+\'px\', width: 100*(displayEvent.endIndex-displayEvent.startIndex)+\'%\', height: \'25px\'}">\n                        <template [ngTemplateOutlet]="weekviewAllDayEventTemplate" [ngOutletContext]="{displayEvent:displayEvent}">\n                        </template>\n                      </div>\n                    </div>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </ion-scroll>\n        </div>\n      </div>\n      <init-position-scroll\n        class="weekview-normal-event-container voj-normal-event-container"\n        [initPosition]="initScrollPosition"\n        [emitEvent]="preserveScrollPosition"\n        (onScroll)="setScrollPosition($event)"\n        ngxOffsetTarget="margin-top">\n        <table class="table table-bordered table-fixed weekview-normal-event-table table-striped-verticaly">\n          <tbody>\n            <tr *ngFor="let row of views[0].rows; let i = index">\n              <td class="calendar-hour-column text-center">\n                {{hourColumnLabels[i]}}\n              </td>\n              <td *ngFor="let tm of row; let rowIndex = index" class="calendar-cell" tappable (click)="select(tm.time, tm.events)">\n                <div [ngClass]="{\'calendar-event-wrap\': tm.events}" *ngIf="tm.events">\n                  <div *ngFor="let displayEvent of tm.events" class="calendar-event" tappable (click)="eventSelected(displayEvent.event)" [ngStyle]="{top: (37*displayEvent.startOffset/hourParts)+\'px\',left: 100/displayEvent.overlapNumber*displayEvent.position+\'%\', width: 100/displayEvent.overlapNumber+\'%\', height: 37*(displayEvent.endIndex -displayEvent.startIndex - (displayEvent.endOffset + displayEvent.startOffset)/hourParts)+\'px\'}">\n                    <template [ngTemplateOutlet]="weekviewNormalEventTemplate" [ngOutletContext]="{displayEvent:displayEvent}">\n                    </template>\n                  </div>\n                </div>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </init-position-scroll>\n    </div>\n    <div *ngIf="0!==currentViewIndex">\n      <div class="weekview-allday-table voj-weekview-allday-table">\n        <div class="weekview-allday-label">{{allDayLabel}}</div>\n        <ion-scroll scrollY="true" class="weekview-allday-content-wrapper" zoom="false">\n          <table class="table table-fixed weekview-allday-content-table">\n            <tbody>\n              <tr>\n                <td *ngFor="let day of views[0].dates" class="calendar-cell">\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </ion-scroll>\n      </div>\n      <init-position-scroll class="weekview-normal-event-container voj-normal-event-container" [initPosition]="initScrollPosition">\n        <table class="table table-bordered table-fixed weekview-normal-event-table table-striped-verticaly">\n          <tbody>\n            <tr *ngFor="let row of views[0].rows; let i = index">\n              <td class="calendar-hour-column text-center">\n                {{hourColumnLabels[i]}}\n              </td>\n              <td *ngFor="let tm of row" class="calendar-cell">\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </init-position-scroll>\n    </div>\n  </ion-slide>\n  <ion-slide [ngxOffsetContainer]="updateOffset$">\n    <div *ngIf="1===currentViewIndex">\n      <div\n        ngxOffsetSource="offsetHeight"\n        ngxOffsetValueType="px">\n        <weekview-header\n          [data]="views[1]"\n          (onSelect)="selectDay($event)">\n        </weekview-header>\n        <div class="weekview-allday-table voj-weekview-allday-table">\n          <div class="weekview-allday-label">{{allDayLabel}}</div>\n          <ion-scroll scrollY="true" class="weekview-allday-content-wrapper" zoom="false">\n            <table class="table table-fixed weekview-allday-content-table">\n              <tbody>\n                <tr>\n                  <td *ngFor="let day of views[1].dates" class="calendar-cell">\n                    <div [ngClass]="{\'calendar-event-wrap\': day.events}" *ngIf="day.events" [ngStyle]="{height: 25*day.events.length+\'px\'}">\n                      <div *ngFor="let displayEvent of day.events" class="calendar-event" tappable (click)="eventSelected(displayEvent.event)" [ngStyle]="{top: 25*displayEvent.position+\'px\', width: 100*(displayEvent.endIndex-displayEvent.startIndex)+\'%\', height: \'25px\'}">\n                        <template [ngTemplateOutlet]="weekviewAllDayEventTemplate" [ngOutletContext]="{displayEvent:displayEvent}">\n                        </template>\n                      </div>\n                    </div>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </ion-scroll>\n        </div>\n      </div>\n      <init-position-scroll\n        class="weekview-normal-event-container voj-normal-event-container"\n        [initPosition]="initScrollPosition"\n        [emitEvent]="preserveScrollPosition"\n        (onScroll)="setScrollPosition($event)"\n        ngxOffsetTarget="margin-top">\n        <table class="table table-bordered table-fixed weekview-normal-event-table table-striped-verticaly">\n          <tbody>\n            <tr *ngFor="let row of views[1].rows; let i = index">\n              <td class="calendar-hour-column text-center">\n                {{hourColumnLabels[i]}}\n              </td>\n              <td *ngFor="let tm of row" class="calendar-cell" tappable (click)="select(tm.time, tm.events)">\n                <div [ngClass]="{\'calendar-event-wrap\': tm.events}" *ngIf="tm.events">\n                  <div *ngFor="let displayEvent of tm.events" class="calendar-event" tappable (click)="eventSelected(displayEvent.event)" [ngStyle]="{top: (37*displayEvent.startOffset/hourParts)+\'px\',left: 100/displayEvent.overlapNumber*displayEvent.position+\'%\', width: 100/displayEvent.overlapNumber+\'%\', height: 37*(displayEvent.endIndex -displayEvent.startIndex - (displayEvent.endOffset + displayEvent.startOffset)/hourParts)+\'px\'}">\n                    <template [ngTemplateOutlet]="weekviewNormalEventTemplate" [ngOutletContext]="{displayEvent:displayEvent}">\n                    </template>\n                  </div>\n                </div>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </init-position-scroll>\n    </div>\n    <div *ngIf="1!==currentViewIndex">\n      <div class="weekview-allday-table voj-weekview-allday-table">\n        <div class="weekview-allday-label">{{allDayLabel}}</div>\n        <ion-scroll scrollY="true" class="weekview-allday-content-wrapper" zoom="false">\n          <table class="table table-fixed weekview-allday-content-table">\n            <tbody>\n              <tr>\n                <td *ngFor="let day of views[1].dates" class="calendar-cell">\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </ion-scroll>\n      </div>\n      <init-position-scroll class="weekview-normal-event-container voj-normal-event-container" [initPosition]="initScrollPosition">\n        <table class="table table-bordered table-fixed weekview-normal-event-table table-striped-verticaly">\n          <tbody>\n            <tr *ngFor="let row of views[1].rows; let i = index">\n              <td class="calendar-hour-column text-center">\n                {{hourColumnLabels[i]}}\n              </td>\n              <td *ngFor="let tm of row" class="calendar-cell">\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </init-position-scroll>\n    </div>\n  </ion-slide>\n  <ion-slide [ngxOffsetContainer]="updateOffset$">\n    <div *ngIf="2===currentViewIndex">\n      <div\n        ngxOffsetSource="offsetHeight"\n        ngxOffsetValueType="px">\n        <weekview-header\n          [data]="views[2]"\n          (onSelect)="selectDay($event)">\n        </weekview-header>\n        <div class="weekview-allday-table voj-weekview-allday-table">\n          <div class="weekview-allday-label">{{allDayLabel}}</div>\n          <ion-scroll scrollY="true" class="weekview-allday-content-wrapper" zoom="false">\n            <table class="table table-fixed weekview-allday-content-table">\n              <tbody>\n                <tr>\n                  <td *ngFor="let day of views[2].dates" class="calendar-cell">\n                    <div [ngClass]="{\'calendar-event-wrap\': day.events}" *ngIf="day.events" [ngStyle]="{height: 25*day.events.length+\'px\'}">\n                      <div *ngFor="let displayEvent of day.events" class="calendar-event" tappable (click)="eventSelected(displayEvent.event)" [ngStyle]="{top: 25*displayEvent.position+\'px\', width: 100*(displayEvent.endIndex-displayEvent.startIndex)+\'%\', height: \'25px\'}">\n                        <template [ngTemplateOutlet]="weekviewAllDayEventTemplate" [ngOutletContext]="{displayEvent:displayEvent}">\n                        </template>\n                      </div>\n                    </div>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </ion-scroll>\n        </div>\n      </div>\n      <init-position-scroll\n        class="weekview-normal-event-container voj-normal-event-container"\n        [initPosition]="initScrollPosition"\n        [emitEvent]="preserveScrollPosition"\n        (onScroll)="setScrollPosition($event)"\n        ngxOffsetTarget="margin-top">\n        <table class="table table-bordered table-fixed weekview-normal-event-table table-striped-verticaly">\n          <tbody>\n            <tr *ngFor="let row of views[2].rows; let i = index">\n              <td class="calendar-hour-column text-center">\n                {{hourColumnLabels[i]}}\n              </td>\n              <td *ngFor="let tm of row" class="calendar-cell" tappable (click)="select(tm.time, tm.events)">\n                <div [ngClass]="{\'calendar-event-wrap\': tm.events}" *ngIf="tm.events">\n                  <div *ngFor="let displayEvent of tm.events" class="calendar-event" tappable (click)="eventSelected(displayEvent.event)" [ngStyle]="{top: (37*displayEvent.startOffset/hourParts)+\'px\',left: 100/displayEvent.overlapNumber*displayEvent.position+\'%\', width: 100/displayEvent.overlapNumber+\'%\', height: 37*(displayEvent.endIndex -displayEvent.startIndex - (displayEvent.endOffset + displayEvent.startOffset)/hourParts)+\'px\'}">\n                    <template [ngTemplateOutlet]="weekviewNormalEventTemplate" [ngOutletContext]="{displayEvent:displayEvent}">\n                    </template>\n                  </div>\n                </div>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </init-position-scroll>\n    </div>\n    <div *ngIf="2!==currentViewIndex">\n      <div class="weekview-allday-table voj-weekview-allday-table">\n        <div class="weekview-allday-label">{{allDayLabel}}</div>\n        <ion-scroll scrollY="true" class="weekview-allday-content-wrapper" zoom="false">\n          <table class="table table-fixed weekview-allday-content-table">\n            <tbody>\n              <tr>\n                <td *ngFor="let day of views[2].dates" class="calendar-cell">\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </ion-scroll>\n      </div>\n      <init-position-scroll\n        class="weekview-normal-event-container voj-normal-event-container"\n        [initPosition]="initScrollPosition"\n        ngxOffsetTarget="margin-top">\n        <table class="table table-bordered table-fixed weekview-normal-event-table table-striped-verticaly">\n          <tbody>\n            <tr *ngFor="let row of views[2].rows; let i = index">\n              <td class="calendar-hour-column text-center">\n                {{hourColumnLabels[i]}}\n              </td>\n              <td *ngFor="let tm of row" class="calendar-cell">\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </init-position-scroll>\n    </div>\n  </ion-slide>\n</ion-slides>\n'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-calendar/calendar/weekview/weekview.html"*/,
            styles: [
                "\n      .table-fixed {\n        table-layout: fixed;\n      }\n      .table {\n        width: 100%;\n        max-width: 100%;\n        background-color: transparent;\n      }\n      .table > thead > tr > th, .table > tbody > tr > th, .table > tfoot > tr > th, .table > thead > tr > td,\n      .table > tbody > tr > td, .table > tfoot > tr > td {\n        padding: 8px;\n        line-height: 20px;\n        vertical-align: top;\n      }\n      .table > thead > tr > th {\n        vertical-align: bottom;\n        border-bottom: 2px solid #ddd;\n      }\n      .table > thead:first-child > tr:first-child > th, .table > thead:first-child > tr:first-child > td {\n        border-top: 0\n      }\n      .table > tbody + tbody {\n        border-top: 2px solid #ddd;\n      }\n      .table-bordered {\n        border: 1px solid #ddd;\n      }\n      .table-bordered > thead > tr > th, .table-bordered > tbody > tr > th, .table-bordered > tfoot > tr > th,\n      .table-bordered > thead > tr > td, .table-bordered > tbody > tr > td, .table-bordered > tfoot > tr > td {\n        border: 1px solid #ddd;\n      }\n      .table-bordered > thead > tr > th, .table-bordered > thead > tr > td {\n        border-bottom-width: 2px;\n      }\n      .table-striped > tbody > tr:nth-child(odd) > td, .table-striped > tbody > tr:nth-child(odd) > th {\n        background-color: #f9f9f9\n      }\n      .calendar-hour-column {\n        width: 50px;\n        white-space: nowrap;\n      }\n      .calendar-event-wrap {\n        position: relative;\n        width: 100%;\n        height: 100%;\n      }\n      .calendar-event {\n        position: absolute;\n        padding: 2px;\n        cursor: pointer;\n        z-index: 10000;\n      }\n      .calendar-cell {\n        padding: 0 !important;\n        height: 37px;\n      }\n      .weekview-allday-label {\n        float: left;\n        height: 100%;\n        line-height: 50px;\n        text-align: center;\n        width: 50px;\n      }\n      [dir=\"rtl\"] .weekview-allday-label {\n          float: right;\n          border-right: 1px solid #ddd;\n      }\n      .weekview-allday-content-wrapper {\n        margin-left: 50px;\n        overflow: hidden;\n        height: 51px;\n      }\n      [dir=\"rtl\"] .weekview-allday-content-wrapper {\n        margin-left: 0;\n        margin-right: 50px;\n      }\n      .weekview-allday-content-table {\n        min-height: 50px;\n      }\n      .weekview-allday-content-table td {\n        border-left: 1px solid #ddd;\n        border-right: 1px solid #ddd;\n      }\n      .weekview-header th {\n        overflow: hidden;\n        white-space: nowrap;\n        font-size: 14px;\n      }\n      .weekview-allday-table {\n        height: 50px;\n        position: relative;\n        border-bottom: 1px solid #ddd;\n        font-size: 14px;\n      }\n      .weekview-normal-event-container {\n        margin-top: 87px;\n        overflow: hidden;\n        left: 0;\n        right: 0;\n        top: 0;\n        bottom: 0;\n        position: absolute;\n        font-size: 14px;\n      }\n      .weekview .slide-zoom {\n        height: 100%;\n      }\n      .weekview-allday-content-wrapper scroll-content {\n        width: 100%;\n      }\n      ::-webkit-scrollbar,\n      *::-webkit-scrollbar {\n        display: none;\n      }\n      .table > tbody > tr > td.calendar-hour-column {\n        padding-left: 0;\n        padding-right: 0;\n        vertical-align: middle;\n      }\n      @media (max-width: 750px) {\n        .weekview-allday-label, .calendar-hour-column {\n          width: 31px;\n          font-size: 12px;\n        }\n        .weekview-allday-label {\n          padding-top: 4px;\n        }\n        .table > tbody > tr > td.calendar-hour-column {\n          padding-left: 0;\n          padding-right: 0;\n          vertical-align: middle;\n          line-height: 12px;\n        }\n        .table > thead > tr > th.weekview-header {\n          padding-left: 0;\n          padding-right: 0;\n          font-size: 12px;\n        }\n        .weekview-allday-label {\n          line-height: 20px;\n        }\n        .weekview-allday-content-wrapper {\n          margin-left: 31px;\n        }\n        [dir=\"rtl\"] .weekview-allday-content-wrapper {\n          margin-left: 0;\n          margin-right: 31px;\n        }\n      }\n    ",
                "\n      calendar weekview init-position-scroll.weekview-normal-event-container.voj-normal-event-container {\n        margin-top: 72px;\n      }\n      .voj-normal-event-container .calendar-event {\n        padding: 0;\n      }\n      .voj-weekview-allday-table {\n        // border: none;\n      }\n    "
            ],
            encapsulation: __WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__calendar_service__["a" /* CalendarService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_2__angular_core__["ChangeDetectorRef"]])
    ], WeekViewComponent);
    return WeekViewComponent;
    var WeekViewComponent_1;
}());

//# sourceMappingURL=weekview.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarModePopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CalendarModePopoverPage = (function () {
    function CalendarModePopoverPage(viewCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.menuTemplateContext = {
            changeViewHandler: this.changeMode.bind(this)
        };
    }
    CalendarModePopoverPage.prototype.ngOnInit = function () {
        this.menuTemplate = null;
        this.menuTemplate = this.navParams.get('menuTemplate');
    };
    CalendarModePopoverPage.prototype.changeMode = function (mode) {
        this.viewCtrl.dismiss({ mode: mode });
    };
    CalendarModePopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-calendar/calendar/mode-popover/calendar-mode.popover.html"*/'<ng-container *ngIf="menuTemplate != null; else defaultTemplate">\n	<ng-container *ngTemplateOutlet="menuTemplate; context: menuTemplateContext">\n	</ng-container>\n</ng-container>\n<ng-template #defaultTemplate>\n	<ion-list>\n		<ion-list-header>Calendar mode</ion-list-header>\n		<button ion-item (click)="changeMode(\'month\')">Month view</button>\n		<button ion-item (click)="changeMode(\'week\')">Week view</button>\n		<button ion-item (click)="changeMode(\'day\')">Day view</button>\n	</ion-list>\n</ng-template>'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-calendar/calendar/mode-popover/calendar-mode.popover.html"*/,
            styles: [
                "\n\t\t\tion-list {\n\t\t\t\tmargin-bottom: 0;\n\t\t\t}\n\t\t\t.item-block:last-child {\n\t\t\t\tborder-bottom: none;\n\t\t\t}\n\t\t"
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], CalendarModePopoverPage);
    return CalendarModePopoverPage;
}());

//# sourceMappingURL=calendar-mode.popover.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step; });
var Step;
(function (Step) {
    Step[Step["QuarterHour"] = 15] = "QuarterHour";
    Step[Step["HalfHour"] = 30] = "HalfHour";
    Step[Step["Hour"] = 60] = "Hour";
})(Step || (Step = {}));
//# sourceMappingURL=calendar.models.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PopoverPage = (function () {
    function PopoverPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    PopoverPage.prototype.changeMode = function (mode) {
        this.viewCtrl.dismiss({ mode: mode });
    };
    PopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-calendar/smart-calendar/components/voj-popover.page.html"*/'<ion-list>\n	<ion-list-header>Calendar component</ion-list-header>\n	<button ion-item (click)="changeMode(\'day\')">Day view</button>\n	<button ion-item (click)="changeMode(\'month\')">Month view</button>\n	<button ion-item (click)="changeMode(\'week\')">Week view</button>\n</ion-list>'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-calendar/smart-calendar/components/voj-popover.page.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */]])
    ], PopoverPage);
    return PopoverPage;
}());

//# sourceMappingURL=voj-popover.page.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesktopCalendarModule", function() { return DesktopCalendarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__desktop_calendar__ = __webpack_require__(771);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_calendar__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__(811);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_custom_title_formatter__ = __webpack_require__(813);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_demo_utils_module__ = __webpack_require__(814);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










// import '../../../../node_modules/angular-calendar/dist/css/angular-calendar.css';
var DesktopCalendarModule = (function () {
    function DesktopCalendarModule() {
    }
    DesktopCalendarModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__desktop_calendar__["a" /* DesktopCalendar */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_9__components_demo_utils_module__["a" /* DemoUtilsModule */],
                __WEBPACK_IMPORTED_MODULE_3_angular_calendar__["b" /* CalendarModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["c" /* NgbModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__desktop_calendar__["a" /* DesktopCalendar */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__desktop_calendar__["a" /* DesktopCalendar */]
            ],
            entryComponents: [],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["LOCALE_ID"], useValue: 'fr-FR' },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_3_angular_calendar__["a" /* CalendarEventTitleFormatter */],
                    useClass: __WEBPACK_IMPORTED_MODULE_8__components_custom_title_formatter__["a" /* CustomEventTitleFormatter */]
                }
            ]
        })
    ], DesktopCalendarModule);
    return DesktopCalendarModule;
}());

//# sourceMappingURL=desktop-calendar.module.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventBusProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_voj_event_model__ = __webpack_require__(825);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the EventBusProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var EventBusProvider = (function () {
    function EventBusProvider(event) {
        this.event = event;
        console.log('Hello EventBusProvider Provider');
        this.passenger = new __WEBPACK_IMPORTED_MODULE_2__models_voj_event_model__["a" /* Passenger */]();
    }
    // MAP EVENTS
    /**
     * Send an event to set map values
     * @param {eMapType} passenger
     */
    EventBusProvider.prototype.set = function (passenger) {
        if (passenger.condition)
            this.event.publish(passenger.topic, passenger.data);
    };
    /**
     * Get an event to load map values
     */
    EventBusProvider.prototype.get = function (passenger) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.event.subscribe(passenger.topic, function (data) {
                if (passenger.condition)
                    resolve(data);
                else
                    reject('Passenger type is rejected for this bus line');
            });
        });
    };
    EventBusProvider.prototype.subscribeSearchService = function (ssp) {
        this.searchService = ssp;
    };
    EventBusProvider.prototype.subscribeMap = function (m) {
        this.map = m;
    };
    EventBusProvider.prototype.publishMap = function (cards) {
        if (this.map)
            this.map.updateMap(cards);
    };
    EventBusProvider.prototype.subscribeSearch = function (s) {
        this.search = s;
    };
    EventBusProvider.prototype.publishSearch = function (cards) {
        if (this.search) {
            this.search.updateCards(cards);
            this.search.pageHeader.actions[0].label = String(this.app.badge);
        }
    };
    EventBusProvider.prototype.publishPushEvents = function () {
        if (this.search) {
            this.search.eventsMode = true;
            this.search.updateCards(this.searchService.eventsCards);
            this.search.loadEvents();
            this.search.badge = this.search.eventsCards.length;
        }
    };
    EventBusProvider.prototype.subscribeMainApp = function (a) {
        this.app = a;
    };
    EventBusProvider.prototype.publishAppEventUpdate = function (mode) {
        if (mode === 'read') {
            if (this.app.badge > 0) {
                this.app.dataHeader.menu[0].badge--;
                this.app.badge--;
                this.search.pageHeader.actions[0].label = String(this.app.badge);
            }
            this.search.eventsMode = true;
            this.search.updateCards(this.searchService.eventsCards);
            this.search.loadEvents();
            return;
        }
        this.app.checkNotifications();
    };
    EventBusProvider.prototype.publishAppHeader = function () {
        if (this.app) {
            this.app.updateWebMenu();
        }
    };
    EventBusProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
    ], EventBusProvider);
    return EventBusProvider;
}());

//# sourceMappingURL=voj-events.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpRequestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_timeout__ = __webpack_require__(826);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(829);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_finally__ = __webpack_require__(831);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_finally___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_finally__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TIME_OUT_PERIOD = 120000;
/*
  Generated class for the HttpRequestProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var HttpRequestProvider = (function () {
    function HttpRequestProvider(http, toastCtrl, loadingCtrl) {
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        console.log('Hello HttpRequestProvider Provider');
        HttpRequestProvider_1.toastCtrl = this.toastCtrl;
        HttpRequestProvider_1.loading = this.loadingCtrl;
    }
    HttpRequestProvider_1 = HttpRequestProvider;
    /**
     * Shows error message
     * @param error
     * @returns {Promise<any>}
     */
    HttpRequestProvider.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        var vojMessage = HttpRequestProvider_1.getErrMessage(error, HttpRequestProvider_1.senderClassName);
        HttpRequestProvider_1.presentErrToast(vojMessage);
        //TODO send email to notify us
        var errorObject = { success: false, error: error.message || error };
        return Promise.reject(errorObject);
    };
    /**
     * Send a callOut request via http post method
     * @param payload
     * @param classObject
     * @param silentMode
     * @returns {Observable<T>}
     */
    HttpRequestProvider.prototype.sendCallOut = function (payload, classObject, silentMode) {
        var newTimeOutPeriod = 0;
        var silentLadingToast = this.toastCtrl.create();
        //
        if (silentMode !== true) {
            HttpRequestProvider_1.presentLoading();
            newTimeOutPeriod = TIME_OUT_PERIOD;
        }
        else {
            //silent mode : waiting for more time..
            newTimeOutPeriod = TIME_OUT_PERIOD * 10;
            silentLadingToast = HttpRequestProvider_1.presentSilentLoadingToast("En cours de chargement des données...", newTimeOutPeriod, 'top');
        }
        // Getting service class name
        HttpRequestProvider_1.senderClassName = (classObject) ? classObject.constructor.name : "";
        // Sending request
        var options = HttpRequestProvider_1.getHttpJsonHeaders();
        return this.http.post(HttpRequestProvider_1.calloutURL, JSON.stringify(payload), options)
            .map(function (res) { return res.json(); })
            .timeout(newTimeOutPeriod)
            .catch(this.handleError)
            .finally(function () {
            try {
                if (HttpRequestProvider_1.loaderComponent)
                    HttpRequestProvider_1.loaderComponent.dismiss();
                if (silentLadingToast)
                    silentLadingToast.onDidDismiss(function () {
                        console.log('Dismissed toast');
                    });
            }
            catch (error) {
                console.log(error);
            }
        });
    };
    /**
     * Calls a specific web service given the URL and payload
     * @param payload
     * @param url
     * @param classObject
     * @param silentMode
     * @returns {Observable<T>}
     */
    HttpRequestProvider.prototype.call = function (payload, url, classObject, silentMode) {
        var newTimeOutPeriod = 0;
        var silentLadingToast = this.toastCtrl.create();
        if (silentMode !== true) {
            HttpRequestProvider_1.presentLoading();
            newTimeOutPeriod = TIME_OUT_PERIOD;
        }
        else {
            //silent mode : waiting for more time..
            newTimeOutPeriod = TIME_OUT_PERIOD * 10;
            silentLadingToast = HttpRequestProvider_1.presentSilentLoadingToast("En cours de chargement des données...", newTimeOutPeriod, 'top');
        }
        // Getting service class name
        HttpRequestProvider_1.senderClassName = (classObject) ? classObject.constructor.name : "";
        // Sending request
        var options = HttpRequestProvider_1.getHttpJsonHeaders();
        return this.http.post(url, JSON.stringify(payload), options)
            .map(function (res) { return res.json(); })
            .timeout(newTimeOutPeriod)
            .catch(this.handleError)
            .finally(function () {
            if (HttpRequestProvider_1.loaderComponent)
                HttpRequestProvider_1.loaderComponent.dismiss();
            if (silentLadingToast) {
                silentLadingToast.dismissAll();
            }
        });
    };
    HttpRequestProvider.getHttpJsonHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var options = { headers: headers };
        options.headers.append("Content-Type", 'application/json');
        //if (GlobalConfigs.env === 'PROD')
        options.headers.append("Authorization", 'Basic dm9qYWRtaW46NG5ncmFNNDFueXU=');
        return options;
    };
    HttpRequestProvider.getHttpTextHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'text/plain');
        /*if (GlobalConfigs.env === 'PROD')
            headers.append("Authorization", 'Basic aGFkZXM6NWV0Y2Fy');*/
        return headers;
    };
    HttpRequestProvider.getHttpXmlHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'text/xml');
        /*if (GlobalConfigs.env === 'PROD')
            headers.append("Authorization", 'Basic aGFkZXM6NWV0Y2Fy');*/
        return headers;
    };
    /**
     * Show a red toast that contains error message
     * @param message
     * @param duration
     * @param position
     */
    HttpRequestProvider.presentErrToast = function (message, duration, position) {
        if (!duration)
            duration = 5;
        var toast = this.toastCtrl.create({
            message: message,
            position: position,
            dismissOnPageChange: true,
            showCloseButton: true,
            closeButtonText: "Ok",
            duration: duration * 1000
        });
        toast.present();
        // Change toast color to red
        var toastElement = document.getElementsByClassName('toast-wrapper toast-bottom');
        if (toastElement && toastElement.length > 0)
            toastElement[0].style.background = "#E8384F";
    };
    /**
     * Show a normal toast that contains silent loading message
     * @param message
     * @param duration
     * @param position
     */
    HttpRequestProvider.presentSilentLoadingToast = function (message, duration, position) {
        var toast = this.toastCtrl.create({
            message: message,
            position: position,
            dismissOnPageChange: false,
            showCloseButton: true,
            closeButtonText: "Ok",
            duration: duration
        });
        toast.present();
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        return toast;
    };
    /**
     * Present Loading component while the treatment of request
     */
    HttpRequestProvider.presentLoading = function () {
        try {
            HttpRequestProvider_1.loaderComponent = HttpRequestProvider_1.loading.create({ content: "Merci de patienter..." });
            HttpRequestProvider_1.loaderComponent.present();
        }
        catch (error) {
            console.log(error);
        }
    };
    /**
     * Get error message from status code
     * @param error
     * @param senderClassName
     * @returns {string}
     */
    HttpRequestProvider.getErrMessage = function (error, senderClassName) {
        if (error.message === "timeout") {
            error.status = -100;
        }
        switch (~~(error.status / 100)) {
            case 0:
                // General error with status 0: http://stackoverflow.com/a/26451773/2936049
                return "0 • Problème sur serveur, merci de réessayer ultérieurement. (" + senderClassName + ")";
            case 4:
                // 4xx: client type error
                return "4 • Merci de vérifier votre connexion internet et réessayer ultérieurement. (" + senderClassName + ")";
            case 5:
                // 5xx: server type error
                return "5 • Problème sur serveur, merci de réessayer ultérieurement. (" + senderClassName + ")";
            case -1:
                // TimeOut error specified by us. See cont variable TIME_OUT_PERIOD
                return "-1 • Merci de vérifier votre connexion internet et réessayer ultérieurement. (" + senderClassName + ")";
            default:
                // Other problems...
                return "• Merci de vérifier votre connexion internet et réessayer ultérieurement. (" + senderClassName + ")";
        }
    };
    HttpRequestProvider.calloutURL = "http://localhost:8000/search/";
    HttpRequestProvider = HttpRequestProvider_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["t" /* ToastController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["j" /* LoadingController */]])
    ], HttpRequestProvider);
    return HttpRequestProvider;
    var HttpRequestProvider_1;
}());

//# sourceMappingURL=http-request.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VojMenu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VojMenu = (function () {
    function VojMenu(params) {
        this.params = params;
        this.paramsMenu = this.params.data.data;
    }
    VojMenu.prototype.ngOnInit = function () {
    };
    VojMenu = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'voj-menu',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-menu/voj-menu.html"*/'<ion-list>\n	<ion-list-header>Menu</ion-list-header>\n	<button full icon-left ion-item *ngFor="let item of paramsMenu" (click)="item.action()">\n		<ion-icon [name]="item.icon"></ion-icon>\n		{{ item.label }}\n	</button>\n</ion-list>'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-menu/voj-menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], VojMenu);
    return VojMenu;
}());

//# sourceMappingURL=voj-menu.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextType; });
var TextType = (function () {
    function TextType() {
    }
    return TextType;
}());

//# sourceMappingURL=text-type.js.map

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VojMapModel; });
var VojMapModel = (function () {
    function VojMapModel() {
    }
    return VojMapModel;
}());

//# sourceMappingURL=voj-map.model.js.map

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchDTOFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_voj_configuration__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__search_dto_jobyer__ = __webpack_require__(836);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_dto_employer__ = __webpack_require__(837);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchDTOFactory = (function () {
    function SearchDTOFactory(config) {
        this.config = config;
    }
    SearchDTOFactory.prototype.create = function () {
        if (this.config.configuration.customer == 'J')
            return new __WEBPACK_IMPORTED_MODULE_1__search_dto_jobyer__["a" /* SearchDTOJobyer */]();
        else
            return new __WEBPACK_IMPORTED_MODULE_2__search_dto_employer__["a" /* SearchDTOEmployer */]();
    };
    SearchDTOFactory = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__config_voj_configuration__["a" /* Configuration */]])
    ], SearchDTOFactory);
    return SearchDTOFactory;
}());

//# sourceMappingURL=search-dto-factory.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_voj_configuration__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModalService = (function () {
    function ModalService(configurationService, modalCtrl) {
        this.configurationService = configurationService;
        this.modalCtrl = modalCtrl;
    }
    // header - optional parameter. If false - without header
    ModalService.prototype.present = function (vojPage, header) {
        var _this = this;
        console.log('header:', header);
        // Options for modal window
        var modalOptions = {
            cssClass: 'voj-modal',
            //enableBackdropDismiss: signUpData.backdropDismiss
            enableBackdropDismiss: true
        };
        // Create modal window
        var modal = this.modalCtrl.create(vojPage.page, vojPage.params, modalOptions);
        // Show modal window
        modal.present().then(function () {
            // Call on mobile screen
            if (_this.configurationService.configuration.isLargeScreen === true) {
                _this.setModalHeight(header);
            }
        });
    };
    ModalService.prototype.setModalHeight = function (header) {
        console.log('setModalHeight');
        // Content of page
        var vojContents = document.getElementsByClassName('voj-content');
        var modalContent = vojContents[vojContents.length - 1];
        // Modal window
        var modalWrapper = document.getElementsByClassName('modal-wrapper')[0];
        // Set height and show modal
        modalWrapper.style.display = 'block';
        var modalHeader = (header === false) ? 0 : 56;
        modalWrapper.style.height = modalContent.clientHeight + modalHeader + 'px';
    };
    ModalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__config_voj_configuration__["a" /* Configuration */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* ModalController */]])
    ], ModalService);
    return ModalService;
}());

//# sourceMappingURL=modal.service.js.map

/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_request_http_request__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_voj_configuration__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupService = (function () {
    function SignupService(http, configuration) {
        this.http = http;
        this.configuration = configuration;
        this.config = this.configuration.configuration;
    }
    SignupService.prototype.signup = function (phone, email, password, role) {
        var _this = this;
        var payload = {
            "service": "REGISTER",
            "role": this.config.customer == "J" ? "jobyer" : "employer",
            "phone": phone,
            "email": email,
            "password": password
        };
        var url = "";
        for (var i = 0; i < this.config.urls.length; i++) {
            var t = this.config.urls[i];
            if (t.key == "account") {
                url = t.value;
                break;
            }
        }
        return new Promise(function (resolve) {
            _this.http.call(payload, url, "", true).subscribe(function (data) {
                resolve(data);
            });
        });
    };
    SignupService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__http_request_http_request__["a" /* HttpRequestProvider */],
            __WEBPACK_IMPORTED_MODULE_3__config_voj_configuration__["a" /* Configuration */]])
    ], SignupService);
    return SignupService;
}());

//# sourceMappingURL=signup-service.js.map

/***/ }),

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VojNotification; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VojNotification = (function () {
    function VojNotification(params) {
        this.params = params;
        this.data = this.params.get('data');
    }
    VojNotification.prototype.setModalHeight = function () {
        // Content window
        var vojContents = document.getElementsByClassName('voj-content');
        var modalContent = vojContents[vojContents.length - 1];
        console.log(modalContent.clientHeight);
        // Modal window
        var modalWrapper = document.getElementsByClassName('modal-wrapper')[0];
        console.log(modalWrapper.clientHeight);
        // Set height and show modal
        modalWrapper.style.display = 'block';
        modalWrapper.style.height = modalContent.clientHeight + 60 + 'px';
    };
    VojNotification.prototype.ionViewDidLoad = function () {
        this.setModalHeight();
    };
    VojNotification = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'voj-notification',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-notification/voj-notification.html"*/'<div class="voj-content">\n    <!-- Title -->\n    <h1 class="voj-notification-title" *ngIf="(data.icon && data.icon.length > 0) || (data.title && data.title.length > 0)">\n        <ion-icon name="{{ data.icon }}" *ngIf="data.icon && data.icon.length > 0"></ion-icon>\n        {{ data.title | translate }}\n    </h1>\n\n    <!-- Message -->\n    <div class="voj-notification-message">\n        <p>{{ data.message | translate }}</p>\n    </div>\n\n    <!-- Buttons -->\n    <div class="voj-notification-buttons">\n        <button id="{{ button.id }}" ion-button icon-left clear navPop *ngFor="let button of data.buttons" (click)="button.action()">\n            <ion-icon name="{{ button.icon }}"></ion-icon>\n            {{ button.label | translate }}\n        </button>\n    </div>\n</div>\n'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-notification/voj-notification.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], VojNotification);
    return VojNotification;
}());

//# sourceMappingURL=voj-notification.js.map

/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return md5; });
// Taken from https://github.com/killmenot/webtoolkit.md5
var md5 = function (string) {
    function RotateLeft(lValue, iShiftBits) {
        return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
    }
    function AddUnsigned(lX, lY) {
        var lX4, lY4, lX8, lY8, lResult;
        lX8 = (lX & 0x80000000);
        lY8 = (lY & 0x80000000);
        lX4 = (lX & 0x40000000);
        lY4 = (lY & 0x40000000);
        lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
        if (lX4 & lY4) {
            return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
        }
        if (lX4 | lY4) {
            if (lResult & 0x40000000) {
                return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
            }
            else {
                return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
            }
        }
        else {
            return (lResult ^ lX8 ^ lY8);
        }
    }
    function F(x, y, z) {
        return (x & y) | ((~x) & z);
    }
    function G(x, y, z) {
        return (x & z) | (y & (~z));
    }
    function H(x, y, z) {
        return (x ^ y ^ z);
    }
    function I(x, y, z) {
        return (y ^ (x | (~z)));
    }
    function FF(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function GG(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function HH(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function II(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function ConvertToWordArray(string) {
        var lWordCount;
        var lMessageLength = string.length;
        var lNumberOfWords_temp1 = lMessageLength + 8;
        var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64;
        var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
        var lWordArray = Array(lNumberOfWords - 1);
        var lBytePosition = 0;
        var lByteCount = 0;
        while (lByteCount < lMessageLength) {
            lWordCount = (lByteCount - (lByteCount % 4)) / 4;
            lBytePosition = (lByteCount % 4) * 8;
            lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount) << lBytePosition));
            lByteCount++;
        }
        lWordCount = (lByteCount - (lByteCount % 4)) / 4;
        lBytePosition = (lByteCount % 4) * 8;
        lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
        lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
        lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
        return lWordArray;
    }
    ;
    function WordToHex(lValue) {
        var WordToHexValue = "", WordToHexValue_temp = "", lByte, lCount;
        for (lCount = 0; lCount <= 3; lCount++) {
            lByte = (lValue >>> (lCount * 8)) & 255;
            WordToHexValue_temp = "0" + lByte.toString(16);
            WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
        }
        return WordToHexValue;
    }
    ;
    function Utf8Encode(string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
        }
        return utftext;
    }
    ;
    var x = Array();
    var k, AA, BB, CC, DD, a, b, c, d;
    var S11 = 7, S12 = 12, S13 = 17, S14 = 22;
    var S21 = 5, S22 = 9, S23 = 14, S24 = 20;
    var S31 = 4, S32 = 11, S33 = 16, S34 = 23;
    var S41 = 6, S42 = 10, S43 = 15, S44 = 21;
    string = Utf8Encode(string);
    x = ConvertToWordArray(string);
    a = 0x67452301;
    b = 0xEFCDAB89;
    c = 0x98BADCFE;
    d = 0x10325476;
    for (k = 0; k < x.length; k += 16) {
        AA = a;
        BB = b;
        CC = c;
        DD = d;
        a = FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
        d = FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
        c = FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
        b = FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
        a = FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
        d = FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
        c = FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
        b = FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
        a = FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
        d = FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
        c = FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
        b = FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
        a = FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
        d = FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
        c = FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
        b = FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
        a = GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
        d = GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
        c = GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
        b = GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
        a = GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
        d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);
        c = GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
        b = GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
        a = GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
        d = GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
        c = GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
        b = GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
        a = GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
        d = GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
        c = GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
        b = GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
        a = HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
        d = HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
        c = HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
        b = HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
        a = HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
        d = HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
        c = HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
        b = HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
        a = HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
        d = HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
        c = HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
        b = HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
        a = HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
        d = HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
        c = HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
        b = HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
        a = II(a, b, c, d, x[k + 0], S41, 0xF4292244);
        d = II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
        c = II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
        b = II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
        a = II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
        d = II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
        c = II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
        b = II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
        a = II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
        d = II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
        c = II(c, d, a, b, x[k + 6], S43, 0xA3014314);
        b = II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
        a = II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
        d = II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
        c = II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
        b = II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
        a = AddUnsigned(a, AA);
        b = AddUnsigned(b, BB);
        c = AddUnsigned(c, CC);
        d = AddUnsigned(d, DD);
    }
    var temp = WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d);
    return temp.toLowerCase();
};
//# sourceMappingURL=md5.js.map

/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_account_service_account_service__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_voj_notification_voj_notification_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_masterdata_service_masterdata_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ResetPasswordPage = (function () {
    function ResetPasswordPage(accountService, vojNotification, masterdataService, viewCtrl) {
        var _this = this;
        this.accountService = accountService;
        this.vojNotification = vojNotification;
        this.masterdataService = masterdataService;
        this.viewCtrl = viewCtrl;
        this.dataPageHeader = {
            title: 'Mot de passe oublié',
            actions: [],
            style: 'any',
            isCanceled: true
        };
        // Set radio form data
        this.radioFormData = {
            title: '',
            fields: [
                {
                    type: 'radio',
                    value: 'sms',
                    label: '',
                    dataset: [
                        { id: 1, key: 'RESET_PASSWORD.SMS_BTN', value: 'sms' },
                        { id: 2, key: 'RESET_PASSWORD.MAIL_BTN', value: 'mail' }
                    ],
                    required: true,
                    visible: true,
                    id: '',
                    name: 'radioType'
                }
            ]
        };
        // Phone
        this.phoneFormData = {
            title: '',
            fields: [
                // Phone code
                {
                    type: 'select',
                    value: null,
                    label: 'FORM.COUNTRY_CODE',
                    dataset: [],
                    required: true,
                    visible: true,
                    id: 'phone-code-field',
                    name: 'code'
                },
                {
                    //placeholder: 'PLACEHOLDER.ENTER_PHONE',
                    type: 'tel',
                    value: '',
                    label: 'FORM.PHONE',
                    required: true,
                    readonly: false,
                    visible: true,
                    id: 'phone-field',
                    min: 9,
                    max: 10,
                    regex: '^(06|07)[0-9]*$',
                    name: 'userPhone',
                    validationMsg: 'VALIDATION.PHONE_VALIDATION_MSG',
                    action: function () {
                        // Hide error
                        _this.hideError();
                    }
                }
            ],
            submit: {
                id: '',
                icon: '',
                label: 'RESET_PASSWORD.VALIDATE_BTN',
                action: function () {
                    console.log('Check user phone.');
                    //this.checkUserData('telephone number');
                    var code = _this.phoneFormData.fields.filter(function (f) { return f.name === "code"; })[0].value;
                    var phone = _this.phoneFormData.fields.filter(function (f) { return f.name === "userPhone"; })[0].value;
                    var phoneWithCode = "+" + code + phone.substr(phone.length - 9);
                    _this.accountService.sendPassword(phoneWithCode, "").then(function (data) {
                        if (data.status == "success") {
                            _this.viewCtrl.dismiss().then(function () {
                                _this.presentConfirmation("sms");
                            });
                        }
                        else {
                            _this.presentError(data.code, "sms");
                        }
                    });
                }
            }
        };
        // Mail
        this.mailFormData = {
            title: '',
            fields: [
                {
                    //placeholder: 'PLACEHOLDER.ENTER_MAIL',
                    type: 'mail',
                    value: '',
                    label: 'FORM.EMAIL',
                    required: true,
                    readonly: false,
                    visible: true,
                    name: 'userEmail',
                    id: 'user-mail',
                    min: 5,
                    validationMsg: 'VALIDATION.EMAIL_VALIDATION_MSG',
                    regex: '^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$',
                    action: function () {
                        // Hide error
                        _this.hideError();
                    }
                }
            ],
            submit: {
                id: '',
                icon: '',
                label: 'RESET_PASSWORD.VALIDATE_BTN',
                action: function () {
                    console.log('Check user email.');
                    //this.checkUserData('e-mail address');
                    _this.accountService.sendPassword("", _this.mailFormData.fields[0].value).then(function (data) {
                        if (data.status == "success") {
                            _this.viewCtrl.dismiss().then(function () {
                                _this.presentConfirmation("mail");
                            });
                        }
                        else {
                            _this.presentError(data.code, "mail");
                        }
                    });
                }
            }
        };
        // Error init
        this.isErrorShown = false;
    }
    ResetPasswordPage.prototype.ngOnInit = function () {
        var _this = this;
        //load phone code list
        this.masterdataService.loadCountriesList().then(function (data) {
            //set dataset of phone codes of the form
            _this.phoneFormData.fields.filter(function (f) { return f.name === "code"; })[0].dataset = _this.masterdataService.convertCountriesListToDataset(data);
            //the default phone code is France code (33)
            _this.phoneFormData.fields.filter(function (f) { return f.name === "code"; })[0].value = "33";
        });
    };
    ResetPasswordPage.prototype.checkUserData = function (type) {
        // Hide error if shown
        if (this.isErrorShown === true) {
            this.hideError();
        }
        // Show error
        //this.presentError(type);
    };
    ResetPasswordPage.prototype.presentError = function (msg, type) {
        // Show only one error message
        if (this.isErrorShown === true) {
            return;
        }
        this.isErrorShown = true;
        var errorDiv = document.createElement('div');
        errorDiv.setAttribute('id', 'voj-error-msg');
        errorDiv.innerHTML = '<p>' + msg + '</p>';
        errorDiv.className = 'voj-validation-error-msg';
        var parentId = (type === 'sms' ? '2' : '3');
        document.getElementById(parentId).appendChild(errorDiv);
    };
    ResetPasswordPage.prototype.hideError = function () {
        // Hide error if it exists
        if (this.isErrorShown === false) {
            return;
        }
        if (document.getElementById('voj-error-msg')) {
            document.getElementById('voj-error-msg').remove();
        }
        this.isErrorShown = false;
    };
    ResetPasswordPage.prototype.presentConfirmation = function (method) {
        console.log('Show Present Confirmation modal.');
        var notificationData = {
            icon: '',
            title: '',
            message: (method == 'sms' ? 'RESET_PASSWORD.CONFIRMATION_MESSAGE' : 'RESET_PASSWORD.CONFIRMATION_MESSAGE'),
            backdropDismiss: true,
            buttons: [
                {
                    id: 'connectBtn',
                    label: 'RESET_PASSWORD.VALIDATE_BTN',
                    icon: '',
                    action: function () {
                        console.log('Connect was clicked');
                    }
                },
            ]
        };
        this.vojNotification.present(notificationData);
    };
    ResetPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'reset-password-page',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/account-module/reset-password/reset-password.html"*/'<voj-page-header [data]="dataPageHeader"></voj-page-header>\n<div class="voj-content">\n  <div class="voj-form-container">\n\n    <h2>{{ \'RESET_PASSWORD.MESSAGE\' | translate }}</h2>\n\n    <!-- Form for radio -->\n    <voj-form [data]=\'radioFormData\'></voj-form>\n\n    <!-- Form for phone -->\n    <voj-form [data]=\'phoneFormData\' *ngIf="radioFormData.fields[0].value === \'sms\'"></voj-form>\n\n    <!-- Form for mail -->\n    <voj-form [data]=\'mailFormData\' *ngIf="radioFormData.fields[0].value === \'mail\'"></voj-form>\n\n  </div>\n</div>\n'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/account-module/reset-password/reset-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_account_service_account_service__["a" /* AccountService */],
            __WEBPACK_IMPORTED_MODULE_2__components_voj_notification_voj_notification_service__["a" /* VojNotificationService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_masterdata_service_masterdata_service__["a" /* MasterdataService */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["u" /* ViewController */]])
    ], ResetPasswordPage);
    return ResetPasswordPage;
}());

//# sourceMappingURL=reset-password.js.map

/***/ }),

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformationResumePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_voj_configuration__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InformationResumePage = (function () {
    function InformationResumePage(configurationService, platform) {
        this.configurationService = configurationService;
        this.platform = platform;
        this.isMobile = false;
        this.config = this.configurationService.configuration;
        this.config.isLargeScreen ? this.isMobile = false : this.isMobile = true;
        this.headerData = {
            title: 'My CV',
            style: 'any',
            actions: [{
                    id: 'xdcfgvyhubijnklbhvg',
                    label: 'help',
                    icon: 'help',
                    action: function () {
                        console.log('button works');
                    }
                }],
            isCanceled: true
        };
        this.informationResumeData = [
            {
                label: 'My jobs',
                action: function () {
                    console.log('Redirects to J-S-CV-V1-02 Jobs List');
                }
            },
            {
                label: 'My Availabilities',
                action: function () {
                    console.log('Redirects to J-S-CV-V1-03 Availabilities 1/4');
                }
            },
            {
                label: 'My remuneration',
                action: function () {
                    console.log('Redirects to Private Link');
                }
            },
            {
                label: 'My qualities',
                action: function () {
                    console.log('Redirects to J-S-CV-V1-08 Qualities');
                }
            },
            {
                label: 'My languages',
                action: function () {
                    console.log('Redirects to J-S-CV-V1-09 Languages');
                }
            },
            {
                label: 'My Keywords',
                action: function () {
                    console.log('Redirects to J-S-CV-V1-10 Key Words');
                }
            },
            {
                label: 'My CV',
                action: function () {
                    console.log('Redirects to J-S-CV-V1-11 CV');
                }
            },
            {
                label: 'My CV Vit-On-Job',
                action: function () {
                    console.log('Redirects to J-S-CV-V1-12 CV VOJ');
                }
            },
        ];
    }
    InformationResumePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BankSettingsPage');
    };
    InformationResumePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'information-resume-page',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/information-resume/information-resume.html"*/'<voj-page-header [data]=\'headerData\'></voj-page-header>\n<div [ngClass]="isMobile ? \'information-resume-container\' : \'\'" class="information-resume-parent">\n    <div [ngClass]="isMobile ? \'information-resume-child-container\' : \'\'" class="information-resume-child">\n        <ion-list padding class="information-resume-list">\n            <ion-item *ngFor="let item of informationResumeData">\n                <span class="information-resume-label">{{item.label}}</span>\n                <button class="information-resume-edit-btn" ion-button icon-only item-end\n                        (click)="item.action()">\n                    <ion-icon name="md-create"></ion-icon>\n                </button>\n            </ion-item>\n        </ion-list>\n    </div>\n</div>'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/information-resume/information-resume.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__config_voj_configuration__["a" /* Configuration */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */]])
    ], InformationResumePage);
    return InformationResumePage;
}());

//# sourceMappingURL=information-resume.js.map

/***/ }),

/***/ 538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VojHeaderModule", function() { return VojHeaderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__voj_header__ = __webpack_require__(856);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VojHeaderModule = (function () {
    function VojHeaderModule() {
    }
    VojHeaderModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__voj_header__["a" /* VojHeader */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__voj_header__["a" /* VojHeader */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__voj_header__["a" /* VojHeader */]
            ]
        })
    ], VojHeaderModule);
    return VojHeaderModule;
}());

//# sourceMappingURL=voj-header.module.js.map

/***/ }),

/***/ 539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VojListModule", function() { return VojListModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__voj_list__ = __webpack_require__(857);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__voj_card_voj_card_module__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var VojListModule = (function () {
    function VojListModule() {
    }
    VojListModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__voj_list__["a" /* VojList */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__voj_card_voj_card_module__["VojCardModule"],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__voj_list__["a" /* VojList */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__voj_list__["a" /* VojList */]
            ]
        })
    ], VojListModule);
    return VojListModule;
}());

//# sourceMappingURL=voj-list.module.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return StringUtils; });
/* unused harmony export ArrayUtils */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObjectUtils; });
var StringUtils = (function () {
    function StringUtils() {
    }
    StringUtils.preventNull = function (str) {
        if (ObjectUtils.isEmpty(str)) {
            return "";
        }
        else {
            return str;
        }
    };
    return StringUtils;
}());

var ArrayUtils = (function () {
    function ArrayUtils() {
    }
    return ArrayUtils;
}());

var ObjectUtils = (function () {
    function ObjectUtils() {
    }
    ObjectUtils.isEmpty = function (obj) {
        if (obj == "" || obj == null || !obj || obj.length == 0) {
            return true;
        }
        else {
            return false;
        }
    };
    /**
     * Checking if at least one field is filled
     */
    ObjectUtils.isFormNotEmpty = function (fields) {
        return fields.some(this.isFieldNotEmpty);
    };
    ObjectUtils.isFieldNotEmpty = function (element, index, array) {
        return !ObjectUtils.isEmpty(element.value);
    };
    return ObjectUtils;
}());

//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 540:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VojFormModule", function() { return VojFormModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__voj_form__ = __webpack_require__(858);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var VojFormModule = (function () {
    function VojFormModule() {
    }
    VojFormModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__voj_form__["a" /* VojForm */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__voj_form__["a" /* VojForm */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__voj_form__["a" /* VojForm */]
            ]
        })
    ], VojFormModule);
    return VojFormModule;
}());

//# sourceMappingURL=voj-form.module.js.map

/***/ }),

/***/ 541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VojHeaderWebModule", function() { return VojHeaderWebModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__voj_header_web__ = __webpack_require__(862);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__voj_segment_voj_segment_module__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var VojHeaderWebModule = (function () {
    function VojHeaderWebModule() {
    }
    VojHeaderWebModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__voj_header_web__["a" /* VojHeaderWeb */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__voj_segment_voj_segment_module__["VojSegmentModule"],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__voj_header_web__["a" /* VojHeaderWeb */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__voj_header_web__["a" /* VojHeaderWeb */]
            ]
        })
    ], VojHeaderWebModule);
    return VojHeaderWebModule;
}());

//# sourceMappingURL=voj-header-web.module.js.map

/***/ }),

/***/ 542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VojHeaderSegmentModule", function() { return VojHeaderSegmentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__voj_header_segment__ = __webpack_require__(863);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VojHeaderSegmentModule = (function () {
    function VojHeaderSegmentModule() {
    }
    VojHeaderSegmentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__voj_header_segment__["a" /* VojHeaderSegment */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__voj_header_segment__["a" /* VojHeaderSegment */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__voj_header_segment__["a" /* VojHeaderSegment */]
            ]
        })
    ], VojHeaderSegmentModule);
    return VojHeaderSegmentModule;
}());

//# sourceMappingURL=voj-header-segment.module.js.map

/***/ }),

/***/ 543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageModule", function() { return LandingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__landing_page__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LandingPageModule = (function () {
    function LandingPageModule() {
    }
    LandingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__landing_page__["a" /* LandingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__landing_page__["a" /* LandingPage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__landing_page__["a" /* LandingPage */]
            ]
        })
    ], LandingPageModule);
    return LandingPageModule;
}());

//# sourceMappingURL=landing-page.module.js.map

/***/ }),

/***/ 544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalDetailsIdentityPageModule", function() { return PersonalDetailsIdentityPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__personal_details_identity__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PersonalDetailsIdentityPageModule = (function () {
    function PersonalDetailsIdentityPageModule() {
    }
    PersonalDetailsIdentityPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__personal_details_identity__["a" /* PersonalDetailsIdentityPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__personal_details_identity__["a" /* PersonalDetailsIdentityPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__["a" /* VojComponentsModule */]
            ],
        })
    ], PersonalDetailsIdentityPageModule);
    return PersonalDetailsIdentityPageModule;
}());

//# sourceMappingURL=personal-details-identity.module.js.map

/***/ }),

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalDetailsPageModule", function() { return PersonalDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__personal_details__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PersonalDetailsPageModule = (function () {
    function PersonalDetailsPageModule() {
    }
    PersonalDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__personal_details__["a" /* PersonalDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__personal_details__["a" /* PersonalDetailsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__["a" /* VojComponentsModule */]
            ],
        })
    ], PersonalDetailsPageModule);
    return PersonalDetailsPageModule;
}());

//# sourceMappingURL=personal-details.module.js.map

/***/ }),

/***/ 546:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_voj_page_header_voj_page_header_module__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_voj_search_header_voj_search_header_module__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_voj_card_voj_card_module__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_voj_map_voj_map_module__ = __webpack_require__(114);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SearchPageModule = (function () {
    function SearchPageModule() {
    }
    SearchPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__search__["a" /* SearchPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__components_voj_search_header_voj_search_header_module__["VojSearchHeaderModule"],
                __WEBPACK_IMPORTED_MODULE_3__components_voj_page_header_voj_page_header_module__["a" /* VojPageHeaderModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_voj_card_voj_card_module__["VojCardModule"],
                __WEBPACK_IMPORTED_MODULE_6__components_voj_map_voj_map_module__["VojMapModule"],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__search__["a" /* SearchPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__search__["a" /* SearchPage */]
            ]
        })
    ], SearchPageModule);
    return SearchPageModule;
}());

//# sourceMappingURL=search.module.js.map

/***/ }),

/***/ 547:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInformationModule", function() { return UserInformationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_information__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var UserInformationModule = (function () {
    function UserInformationModule() {
    }
    UserInformationModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__user_information__["a" /* UserInformationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__user_information__["a" /* UserInformationPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__["a" /* VojComponentsModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__user_information__["a" /* UserInformationPage */]
            ]
        })
    ], UserInformationModule);
    return UserInformationModule;
}());

//# sourceMappingURL=user-information.module.js.map

/***/ }),

/***/ 548:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Context; });
var Context = (function () {
    function Context() {
    }
    Context.prototype.loadHeaderData = function () {
        return Context.strategy.loadHeaderData();
    };
    return Context;
}());

//# sourceMappingURL=context.js.map

/***/ }),

/***/ 549:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsModule", function() { return OptionsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__options__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var OptionsModule = (function () {
    function OptionsModule() {
    }
    OptionsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__options__["a" /* OptionsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__options__["a" /* OptionsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__["a" /* VojComponentsModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__options__["a" /* OptionsPage */]
            ]
        })
    ], OptionsModule);
    return OptionsModule;
}());

//# sourceMappingURL=options.module.js.map

/***/ }),

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return AboutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AboutModule = (function () {
    function AboutModule() {
    }
    AboutModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__["a" /* VojComponentsModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */]
            ]
        })
    ], AboutModule);
    return AboutModule;
}());

//# sourceMappingURL=about.module.js.map

/***/ }),

/***/ 551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenApplicationModule", function() { return OpenApplicationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__open_application__ = __webpack_require__(866);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var OpenApplicationModule = (function () {
    function OpenApplicationModule() {
    }
    OpenApplicationModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__open_application__["a" /* OpenApplication */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__open_application__["a" /* OpenApplication */]),
                __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__["a" /* VojComponentsModule */]
            ],
        })
    ], OpenApplicationModule);
    return OpenApplicationModule;
}());

//# sourceMappingURL=open-application.module.js.map

/***/ }),

/***/ 552:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnterpriseDetailsModule", function() { return EnterpriseDetailsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__enterprise_details__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var EnterpriseDetailsModule = (function () {
    function EnterpriseDetailsModule() {
    }
    EnterpriseDetailsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__enterprise_details__["a" /* EnterpriseDetails */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__enterprise_details__["a" /* EnterpriseDetails */]),
                __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__["a" /* VojComponentsModule */]
            ],
        })
    ], EnterpriseDetailsModule);
    return EnterpriseDetailsModule;
}());

//# sourceMappingURL=enterprise-details.module.js.map

/***/ }),

/***/ 553:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnterpriseDetails; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the EnterpriseDetails page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var EnterpriseDetails = (function () {
    function EnterpriseDetails(navCtrl, navParams, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.isMobile = false;
        platform.is('core') ? this.isMobile = false : this.isMobile = true;
        this.headerData = {
            title: 'Mess Donnees',
            style: 'any',
            actions: [{
                    id: 'xdcfgvyhubijnklbhvg',
                    label: 'help',
                    icon: 'help',
                    action: function () {
                        console.log('button works');
                    }
                }],
            isCanceled: true
        };
        this.formData = {
            fields: [{
                    type: 'select',
                    value: 'Convention collective1',
                    label: 'Convention collective1',
                    dataset: [
                        { id: 4, key: 'russian', value: 'Russian' },
                        { id: 5, key: 'ukrainian', value: 'Ukrainian' },
                        { id: 6, key: 'english', value: 'English' }
                    ],
                    readonly: false,
                    visible: true,
                    id: '',
                    name: 'Convention collective'
                },
                {
                    type: 'number',
                    value: 'Convention collective2',
                    label: 'Convention collective2',
                    readonly: false,
                    visible: true,
                    id: '',
                    name: 'Convention collective'
                },
                {
                    type: 'select',
                    value: 'Convention collective3',
                    label: 'Convention collective3',
                    dataset: [
                        { id: 4, key: 'russian', value: 'Russian' },
                        { id: 5, key: 'ukrainian', value: 'Ukrainian' },
                        { id: 6, key: 'english', value: 'English' }
                    ],
                    readonly: false,
                    visible: true,
                    id: '',
                    name: 'Convention collective'
                }],
            submit: {
                id: 'xdcfgvyhubijnkfwlbhvg',
                label: 'Suivant',
                icon: 'help',
                action: function () {
                    console.log('button works');
                }
            }
        };
    }
    EnterpriseDetails.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EnterpriseDetails');
    };
    EnterpriseDetails = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-enterprise-details',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/account-module/enterprise-details/enterprise-details.html"*/'<ion-content>\n    <voj-page-header [data]=\'headerData\'></voj-page-header>\n    <div [ngClass]="isMobile ? \'enterprise-details-container\' : \'\'">\n        <div [ngClass]="isMobile ? \'enterprise-details-child-container\' : \'\'">\n            <voj-form [data]=\'formData\'></voj-form>\n        </div>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/account-module/enterprise-details/enterprise-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */]])
    ], EnterpriseDetails);
    return EnterpriseDetails;
}());

//# sourceMappingURL=enterprise-details.js.map

/***/ }),

/***/ 554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyModule", function() { return CompanyModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__company__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_voj_components_module__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CompanyModule = (function () {
    function CompanyModule() {
    }
    CompanyModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__company__["a" /* CompanyPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__company__["a" /* CompanyPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4__components_voj_components_module__["a" /* VojComponentsModule */]
            ],
        })
    ], CompanyModule);
    return CompanyModule;
}());

//# sourceMappingURL=company.module.js.map

/***/ }),

/***/ 555:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CompanyPage = (function () {
    function CompanyPage() {
        var _this = this;
        // Header
        this.dataPageHeader = {
            title: 'COMPANY.TITLE',
            actions: [
                {
                    id: 'help',
                    label: '',
                    icon: 'help',
                    action: function () {
                        console.log('Click help button.');
                    }
                }
            ],
            style: 'any',
            isCanceled: true
        };
        // Form data
        this.formData = {
            title: '',
            fields: [
                // Search button
                {
                    type: 'button',
                    value: '',
                    label: 'COMPANY.SEARCH_BTN',
                    visible: true,
                    id: 'search-button',
                    name: 'searchButton',
                    action: function () {
                        console.log('Click search button');
                    }
                },
                // Text for company name
                {
                    type: 'text',
                    value: '',
                    label: 'COMPANY.COMPANY_NAME',
                    required: true,
                    visible: true,
                    regex: '^[A-z0-9 ]*$',
                    id: 'company-name',
                    name: 'companyName'
                    //validationMsg: 'COMPANY.COMPANY_NAME_ERR'
                },
                // Radio for civility
                {
                    type: 'radio',
                    value: '',
                    label: 'COMPANY.CIVILITY',
                    dataset: [
                        { id: 1, key: 'COMPANY.MRS', value: 'Mrs' },
                        { id: 2, key: 'COMPANY.MR', value: 'Mr' }
                    ],
                    required: true,
                    visible: true,
                    id: 'civility',
                    name: 'civility',
                },
                // Text for user name
                {
                    placeholder: '',
                    type: 'text',
                    value: '',
                    label: 'COMPANY.NAME',
                    required: true,
                    visible: true,
                    regex: '[A-z]*$',
                    id: 'user-name',
                    name: 'userName',
                    validationMsg: 'COMPANY.NAME_ERR'
                },
                // Text for first name
                {
                    placeholder: '',
                    type: 'text',
                    value: '',
                    label: 'COMPANY.FIRST_NAME',
                    required: true,
                    visible: true,
                    regex: '[A-z]*$',
                    id: 'first-name',
                    name: 'firstName',
                    validationMsg: 'COMPANY.FIRST_NAME_ERR'
                },
                // Company number
                {
                    placeholder: '999 999 999 99999',
                    type: 'text',
                    value: '',
                    label: 'COMPANY.COMPANY_NUMBER',
                    required: true,
                    visible: true,
                    regex: '^[0-9 ]*$',
                    id: 'company-number',
                    min: 17,
                    max: 17,
                    name: 'companyNumber',
                    validationMsg: 'COMPANY.COMPANY_NUMBER_ERR',
                    action: function () {
                        _this.maskCompanyNumber();
                    }
                },
                // Text for Naf
                {
                    placeholder: '9999A',
                    type: 'text',
                    value: '',
                    label: 'COMPANY.NAF',
                    required: true,
                    readonly: false,
                    visible: true,
                    min: 5,
                    max: 5,
                    regex: '^[0-9]{4}[A-Za-z]{1}',
                    id: 'naf',
                    name: 'naf',
                    validationMsg: 'COMPANY.NAF_ERR'
                }
            ],
            submit: {
                id: '',
                icon: '',
                label: 'COMPANY.VALIDATE_BTN',
                action: function () {
                    console.log('Present Add Adresses page.');
                }
            }
        };
        this.currentCompanyNumber = this.formData.fields[5].value;
    }
    CompanyPage.prototype.maskCompanyNumber = function () {
        // Mask company number
        var newValue = this.formData.fields[5].value;
        if (newValue > this.currentCompanyNumber) {
            if (newValue.length === 3 || newValue.length === 7 || newValue.length === 11) {
                this.formData.fields[5].value += ' ';
            }
            else if ((newValue.length === 4 || newValue.length === 8 || newValue.length === 12) &&
                newValue[newValue.length - 2] !== ' ') {
                this.formData.fields[5].value = newValue.slice(0, newValue.length - 1) + ' ' + newValue[newValue.length - 1];
            }
        }
        else if (newValue < this.currentCompanyNumber) {
            if (newValue.length === 4 || newValue.length === 8 || newValue.length === 12) {
                this.formData.fields[5].value = this.formData.fields[5].value.slice(0, newValue.length - 1);
            }
        }
        this.currentCompanyNumber = this.formData.fields[5].value;
    };
    CompanyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'company-page',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/account-module/company/company.html"*/'<voj-page-header [data]="dataPageHeader"></voj-page-header>\n\n<div class="voj-content">\n  <div class="voj-form-container">\n    <voj-form [data]=\'formData\'></voj-form>\n  </div>\n</div>\n'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/account-module/company/company.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], CompanyPage);
    return CompanyPage;
}());

//# sourceMappingURL=company.js.map

/***/ }),

/***/ 556:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_voj_components_module__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4__components_voj_components_module__["a" /* VojComponentsModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 557:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvailabilitiesAddDaysPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_voj_configuration__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AvailabilitiesAddDaysPage = (function () {
    function AvailabilitiesAddDaysPage(configurationService, platform) {
        this.configurationService = configurationService;
        this.platform = platform;
        this.isMobile = false;
        this.config = this.configurationService.configuration;
        this.config.isLargeScreen ? this.isMobile = false : this.isMobile = true;
        this.headerData = {
            title: 'Add an availability',
            style: 'any',
            actions: [{
                    id: 'xdcfgvyhubijnklbhvg',
                    label: 'help',
                    icon: 'help',
                    action: function () {
                        console.log('button works');
                    }
                }],
            isCanceled: true
        };
        this.formData = {
            fields: [
                {
                    type: 'checkbox',
                    label: 'Monday',
                    value: false,
                    visible: true,
                    id: '',
                },
                {
                    type: 'checkbox',
                    label: 'Tuesday',
                    value: false,
                    visible: true,
                    id: '',
                },
                {
                    type: 'checkbox',
                    label: 'Wednesday',
                    value: false,
                    visible: true,
                    id: '',
                },
                {
                    type: 'checkbox',
                    label: 'Thursday',
                    value: false,
                    visible: true,
                    id: '',
                },
                {
                    type: 'checkbox',
                    label: 'Friday',
                    value: false,
                    visible: true,
                    id: '',
                },
                {
                    type: 'checkbox',
                    label: 'Saturday',
                    value: false,
                    visible: true,
                    id: '',
                },
                {
                    type: 'checkbox',
                    label: 'Sunday',
                    value: false,
                    visible: true,
                    id: '',
                }
            ],
            submit: {
                id: 'xdcfgvyhubijnkfwlbhvg',
                label: 'Suivant',
                icon: 'help',
                action: function () {
                    console.log('navigate to  J-S-CV-V1-03 Availabilities 1/4');
                }
            }
        };
    }
    AvailabilitiesAddDaysPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BankSettingsPage');
    };
    AvailabilitiesAddDaysPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'availabilities-add-days-page',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/cv-offer-module/availabilities-add-days/availabilities-add-days.html"*/'<voj-page-header [data]=\'headerData\'></voj-page-header>\n<div [ngClass]="isMobile ? \'availabilities-add-days-container\' : \'\'" class="availabilities-add-days-parent">\n    <div [ngClass]="isMobile ? \'availabilities-add-days-child-container\' : \'\'" class="availabilities-add-days-child">\n        <voj-form [data]=\'formData\'></voj-form>\n    </div>\n</div>\n'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/cv-offer-module/availabilities-add-days/availabilities-add-days.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__config_voj_configuration__["a" /* Configuration */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */]])
    ], AvailabilitiesAddDaysPage);
    return AvailabilitiesAddDaysPage;
}());

//# sourceMappingURL=availabilities-add-days.js.map

/***/ }),

/***/ 558:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsModule", function() { return TabsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs__ = __webpack_require__(559);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TabsModule = (function () {
    function TabsModule() {
    }
    TabsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */]
            ]
        })
    ], TabsModule);
    return TabsModule;
}());

//# sourceMappingURL=tabs.module.js.map

/***/ }),

/***/ 559:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__test_components_about_about__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_module_search_search__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_navigation_service__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TabsPage = (function () {
    function TabsPage(platform, navCtrl, navigationService) {
        //".tabbar.show-tabbar" --> visibility: hidden
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.navigationService = navigationService;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_4__search_module_search_search__["a" /* SearchPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__test_components_about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        //let test: any = document.getElementsByClassName('tabbar.show-tabbar');
        //this.tabBarElement = document.querySelector('#tabs');
        /*if (!platform.is('cordova')){
         document.getElementsByClassName('tabbar show-tabbar')[0].style.visibility = 'hidden';
         }*/
    }
    TabsPage.prototype.ngOnInit = function () {
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/tabs/tabs.html"*/'<ion-tabs id="tabs">\n  <ion-tab [root]="tab1Root" tabTitle="Recherche" tabIcon="search"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Annonces" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Missions" tabIcon="contacts"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Compte" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n\n\n'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__services_navigation_service__["a" /* NavigationService */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 560:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarPageModule", function() { return CalendarPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_voj_components_module__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__calendar__ = __webpack_require__(867);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CalendarPageModule = (function () {
    function CalendarPageModule() {
    }
    CalendarPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__calendar__["a" /* CalendarPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__calendar__["a" /* CalendarPage */]),
                __WEBPACK_IMPORTED_MODULE_2__components_voj_components_module__["a" /* VojComponentsModule */]
            ],
        })
    ], CalendarPageModule);
    return CalendarPageModule;
}());

//# sourceMappingURL=calendar.module.js.map

/***/ }),

/***/ 561:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsPageModule", function() { return OptionsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__options__ = __webpack_require__(868);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var OptionsPageModule = (function () {
    function OptionsPageModule() {
    }
    OptionsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__options__["a" /* OptionsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__options__["a" /* OptionsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__["a" /* VojComponentsModule */]
            ],
        })
    ], OptionsPageModule);
    return OptionsPageModule;
}());

//# sourceMappingURL=options.module.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_account_service_account_service__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_modal_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sign_up_sign_up__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__scripts_md5__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_masterdata_service_masterdata_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__reset_password_reset_password__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__config_voj_configuration__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_navigation_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__search_module_search_search__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_voj_events_voj_events__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var LoginPage = (function () {
    function LoginPage(accountService, eventBus, storage, modalService, viewCtrl, alertCtrl, masterdataService, configuration, navigationService) {
        var _this = this;
        this.accountService = accountService;
        this.eventBus = eventBus;
        this.storage = storage;
        this.modalService = modalService;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.masterdataService = masterdataService;
        this.configuration = configuration;
        this.navigationService = navigationService;
        this.config = this.configuration.configuration;
        // Set form data
        this.formData = {
            title: '',
            fields: [
                // Phone code
                {
                    type: 'select',
                    value: null,
                    label: 'FORM.COUNTRY_CODE',
                    dataset: [],
                    required: true,
                    visible: true,
                    id: 'phone-code-field',
                    name: 'code'
                },
                // Phone
                {
                    placeholder: '',
                    type: 'tel',
                    value: '',
                    label: 'FORM.PHONE',
                    required: true,
                    readonly: false,
                    visible: true,
                    min: 9,
                    max: 10,
                    regex: '^[0-9]*$',
                    validationMsg: 'VALIDATION.PHONE_VALIDATION_MSG',
                    id: 'phone-field',
                    name: 'phone'
                },
                // Password
                {
                    placeholder: '',
                    type: 'password',
                    value: '',
                    label: 'FORM.PASSWORD',
                    required: true,
                    readonly: false,
                    visible: true,
                    min: 6,
                    max: 100,
                    regex: '',
                    validationMsg: 'VALIDATION.PASSWORD_VALIDATION_MSG',
                    id: 'password-field',
                    name: 'password'
                },
                // Forgotten password button
                {
                    type: 'button',
                    label: 'LOGIN.FORGOTTEN_PASSWORD',
                    visible: true,
                    id: 'forgotten-password-btn',
                    action: function () {
                        //display password forgotten modal
                        _this.gotoPasswordForgotten();
                    }
                }
            ],
            submit: {
                id: '',
                icon: '',
                label: 'LOGIN.VALIDATE',
                action: function () {
                    console.log('Click validate button.');
                    _this.authenticate();
                }
            }
        };
        // Set page header
        this.dataPageHeader = {
            title: 'LOGIN.TITLE',
            actions: [
                {
                    id: 'help',
                    label: '',
                    icon: 'help',
                    action: function () {
                        console.log('Click help button.');
                    }
                }
            ],
            style: 'any',
            isCanceled: true
        };
    }
    LoginPage.prototype.ngOnInit = function () {
        var _this = this;
        // load phone code list
        this.masterdataService.loadCountriesList().then(function (data) {
            //set dataset of phone codes of the form
            _this.formData.fields.filter(function (f) { return f.name === "code"; })[0].dataset = _this.masterdataService.convertCountriesListToDataset(data);
            //the default phone code is France code (33)
            _this.formData.fields.filter(function (f) { return f.name === "code"; })[0].value = "33";
        });
    };
    LoginPage.prototype.authenticate = function () {
        var _this = this;
        //prepare credentials data
        var code = this.formData.fields.filter(function (f) { return f.name === "code"; })[0].value;
        var phone = this.formData.fields.filter(function (f) { return f.name === "phone"; })[0].value;
        var password = Object(__WEBPACK_IMPORTED_MODULE_6__scripts_md5__["a" /* md5 */])(this.formData.fields.filter(function (f) { return f.name === "password"; })[0].value);
        var phoneWithCode = "+" + code + phone.substr(phone.length - 9);
        //call web service method
        this.accountService.authenticate(phoneWithCode, password).then(function (data) {
            if (data.status == "passwordError") {
                var msg = 'Le mot de passe est incorrect. Veuillez réessayer.';
                _this.displayErrorNotification(msg);
                return;
            }
            if (data.found == false) {
                var msg = 'Aucun compte associé à ce numéro de téléphone.';
                _this.displayErrorNotification(msg);
                return;
            }
            if (data.id != 0) {
                var account = data;
                _this.storage.set("currentUser", JSON.stringify(account)).then(function () {
                    if (_this.config.isLargeScreen) {
                        _this.viewCtrl.dismiss();
                    }
                    else {
                        var vojPage = { page: __WEBPACK_IMPORTED_MODULE_11__search_module_search_search__["a" /* SearchPage */], isRoot: true };
                        _this.navigationService.navigate("list", vojPage);
                    }
                    _this.eventBus.publishAppEventUpdate();
                });
            }
        });
    };
    LoginPage.prototype.gotoPasswordForgotten = function () {
        this.navigationService.dismiss(this.viewCtrl);
        this.modalService.present({ page: __WEBPACK_IMPORTED_MODULE_8__reset_password_reset_password__["a" /* ResetPasswordPage */] }, true);
    };
    LoginPage.prototype.goToSignup = function () {
        if (this.config.isLargeScreen) {
            this.viewCtrl.dismiss();
        }
        var vojPage = { page: __WEBPACK_IMPORTED_MODULE_4__sign_up_sign_up__["a" /* SignUpPage */], isRoot: true, isModal: true };
        this.navigationService.navigate("list", vojPage);
    };
    LoginPage.prototype.displayErrorNotification = function (msg) {
        var alert = this.alertCtrl.create({
            title: 'Attention!',
            subTitle: msg,
            buttons: ['OK']
        });
        alert.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'login-page',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/account-module/login/login.html"*/'<voj-page-header [data]="dataPageHeader"></voj-page-header>\n\n<div class="voj-content">\n  <div class="voj-form-container">\n    <voj-form [data]=\'formData\'></voj-form>\n\n    <!-- Create an account -->\n    <h2 class="voj-not-registered-title">{{ \'LOGIN.NOT_REGISTERED\' | translate }}</h2>\n    <button ion-button class="custom-btn" (click)="goToSignup()">\n      {{ \'LOGIN.CREATE_ACCOUNT\' | translate }}\n    </button>\n  </div>\n</div>\n'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/account-module/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_account_service_account_service__["a" /* AccountService */],
            __WEBPACK_IMPORTED_MODULE_12__providers_voj_events_voj_events__["a" /* EventBusProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__services_modal_service__["a" /* ModalService */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["u" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_masterdata_service_masterdata_service__["a" /* MasterdataService */],
            __WEBPACK_IMPORTED_MODULE_9__config_voj_configuration__["a" /* Configuration */],
            __WEBPACK_IMPORTED_MODULE_10__services_navigation_service__["a" /* NavigationService */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 603:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindJobPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FindJobPage = (function () {
    function FindJobPage() {
        this.initializeJobs();
    }
    FindJobPage.prototype.getJobs = function (ev) {
        // Reset array back to all of the items
        this.initializeJobs();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.jobsList = this.jobsList.filter(function (item) {
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    FindJobPage.prototype.initializeJobs = function () {
        this.jobsList = [
            'Dentist',
            'Nurse Practitioner',
            'Physician Assistant',
            'Statistician',
            'Computer Systems Analyst',
            'Software Developer'
        ];
    };
    FindJobPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FindJobPage');
    };
    FindJobPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'find-job-page',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/find-job/find-job.html"*/'<div class="voj-content">\n    <div class="voj-form-container">\n        <ion-searchbar (ionInput)="getJobs($event)"></ion-searchbar>\n        <ion-list no-lines>\n            <ion-item *ngFor="let job of jobsList">\n                {{ job }}\n            </ion-item>\n        </ion-list>\n    </div>\n</div>'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/find-job/find-job.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], FindJobPage);
    return FindJobPage;
}());

//# sourceMappingURL=find-job.js.map

/***/ }),

/***/ 604:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(605);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(613);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MasterdataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_voj_configuration__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_request_http_request__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MasterdataService = (function () {
    function MasterdataService(configuration, http) {
        this.configuration = configuration;
        this.http = http;
        this.config = this.configuration.configuration;
    }
    MasterdataService.prototype.loadCountriesList = function () {
        var _this = this;
        var payload = {
            "type": "COUNTRIES",
        };
        var url = "";
        for (var i = 0; i < this.config.urls.length; i++) {
            var t = this.config.urls[i];
            if (t.key == "masterdata") {
                url = t.value;
                break;
            }
        }
        return new Promise(function (resolve) {
            _this.http.call(payload, url, "", true).subscribe(function (data) {
                resolve(data);
            });
        });
    };
    MasterdataService.prototype.loadNationalitiesList = function () {
        var _this = this;
        var payload = {
            "type": "NATIONALITIES",
        };
        var url = "";
        for (var i = 0; i < this.config.urls.length; i++) {
            var t = this.config.urls[i];
            if (t.key == "masterdata") {
                url = t.value;
                break;
            }
        }
        return new Promise(function (resolve) {
            _this.http.call(payload, url, "", true).subscribe(function (data) {
                resolve(data);
            });
        });
    };
    MasterdataService.prototype.loadDepartmentList = function () {
        var _this = this;
        var payload = {
            "type": "DEPARTMENTS",
        };
        var url = "";
        for (var i = 0; i < this.config.urls.length; i++) {
            var t = this.config.urls[i];
            if (t.key == "masterdata") {
                url = t.value;
                break;
            }
        }
        return new Promise(function (resolve) {
            _this.http.call(payload, url, "", true).subscribe(function (data) {
                resolve(data);
            });
        });
    };
    MasterdataService.prototype.loadPrefectureList = function () {
        var _this = this;
        var payload = {
            "type": "PREFECTURES"
        };
        //let url = (this.config.urls.filter(tuple => tuple.key === "identity")).value;
        var url;
        for (var i = 0; i < this.config.urls.length; i++) {
            var t = this.config.urls[i];
            if (t.key == "masterdata") {
                url = t.value;
                break;
            }
        }
        return new Promise(function (resolve) {
            _this.http.call(payload, url, "", true).subscribe(function (data) {
                resolve(data);
            });
        });
    };
    MasterdataService.prototype.convertCountriesListToDataset = function (countries) {
        var dataset = [];
        for (var i = 0; i < countries.length; i++) {
            var ds = { id: countries[i].gid, key: countries[i].name + " (" + countries[i].phoneCode + ")", value: countries[i].phoneCode };
            dataset.push(ds);
        }
        return dataset;
    };
    MasterdataService.prototype.convertNationalitiesListToDataset = function (nationalities) {
        var dataset = [];
        for (var i = 0; i < nationalities.length; i++) {
            var ds = { id: nationalities[i].gid, key: nationalities[i].name, value: nationalities[i].gid.toString() };
            dataset.push(ds);
        }
        return dataset;
    };
    MasterdataService.prototype.convertDepartmentsListToDataset = function (departments) {
        var dataset = [];
        for (var i = 0; i < departments.length; i++) {
            var ds = { id: departments[i].gid, key: departments[i].name, value: departments[i].gid.toString() };
            dataset.push(ds);
        }
        return dataset;
    };
    MasterdataService.prototype.convertPrefectureListToDataset = function (prefectures) {
        var dataset = [];
        for (var i = 0; i < prefectures.length; i++) {
            var ds = { id: prefectures[i].gid, key: prefectures[i].name, value: prefectures[i].gid.toString() };
            dataset.push(ds);
        }
        return dataset;
    };
    MasterdataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__config_voj_configuration__["a" /* Configuration */],
            __WEBPACK_IMPORTED_MODULE_1__http_request_http_request__["a" /* HttpRequestProvider */]])
    ], MasterdataService);
    return MasterdataService;
}());

//# sourceMappingURL=masterdata-service.js.map

/***/ }),

/***/ 613:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HttpLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(886);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(601);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(602);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_voj_components_module__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_pages_module__ = __webpack_require__(889);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular_calendar__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_voj_notification_voj_notification__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_voj_notification_voj_notification_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_http_request_http_request__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_http__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__config_voj_configuration__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_search_service_search_service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_navigation_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ngx_translate_core__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ngx_translate_http_loader__ = __webpack_require__(917);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_voj_events_voj_events__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__models_voj_configuration_model__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_modal_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_signup_service_signup_service__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_account_service_account_service__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_geolocation__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_masterdata_service_masterdata_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_profile_service_profile_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_account_module_user_information_strategy_context__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__dtos_dto_strategy_search_search_dto_factory__ = __webpack_require__(528);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// import './node_modules/angular-calendar/dist/css/angular-calendar';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';





















function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_17__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__components_voj_notification_voj_notification__["a" /* VojNotification */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__components_voj_components_module__["a" /* VojComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_7__pages_pages_module__["a" /* PagesModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_8_angular_calendar__["b" /* CalendarModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    mode: 'md'
                }, {
                    links: [
                        { loadChildren: '../pages/cv-offer-module/jobyer-availability-choice/jobyer-availability-choice.module#JobyerAvailabilityChoiceModule', name: 'JobyerAvailabilityChoicePage', segment: 'jobyer-availability-choice', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/landing-page/landing-page.module#LandingPageModule', name: 'LandingPage', segment: 'landing-page', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/account-module/personal-details-identity/personal-details-identity.module#PersonalDetailsIdentityPageModule', name: 'PersonalDetailsIdentityPage', segment: 'personal-details-identity', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/account-module/personal-details/personal-details.module#PersonalDetailsPageModule', name: 'PersonalDetailsPage', segment: 'personal-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search-module/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/voj-map/voj-map.module#VojMapModule', name: 'VojMap', segment: 'voj-map', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/account-module/user-information/user-information.module#UserInformationModule', name: 'UserInformationPage', segment: 'user-information', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/account-module/options/options.module#OptionsModule', name: 'OptionsPage', segment: 'options', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/test-components/about/about.module#AboutModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/account-module/open-application/open-application.module#OpenApplicationModule', name: 'OpenApplication', segment: 'open-application', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/account-module/enterprise-details/enterprise-details.module#EnterpriseDetailsModule', name: 'EnterpriseDetails', segment: 'enterprise-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/account-module/company/company.module#CompanyModule', name: 'CompanyPage', segment: 'company', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomeModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/calendar/calendar.module#CalendarPageModule', name: 'CalendarPage', segment: 'calendar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/voj-calendar/voj-calendar.module#VojCalendarModule', name: 'VojCalendar', segment: 'voj-calendar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/voj-calendar/smart-calendar/smart-calendar.module#SmartCalendarModule', name: 'SmartCalendar', segment: 'smart-calendar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/voj-calendar/desktop-calendar/desktop-calendar.module#DesktopCalendarModule', name: 'DesktopCalendar', segment: 'desktop-calendar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/voj-menu/voj-menu.module#VojMenuModule', name: 'VojMenu', segment: 'voj-menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/voj-card/voj-card.module#VojCardModule', name: 'VojCard', segment: 'voj-card', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/voj-segment/voj-segment.module#VojSegmentModule', name: 'VojSegment', segment: 'voj-segment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/voj-header/voj-header.module#VojHeaderModule', name: 'VojHeader', segment: 'voj-header', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/voj-list/voj-list.module#VojListModule', name: 'VojList', segment: 'voj-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/voj-form/voj-form.module#VojFormModule', name: 'VojForm', segment: 'voj-form', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/voj-search-header/voj-search-header.module#VojSearchHeaderModule', name: 'VojSearchHeader', segment: 'voj-search-header', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/voj-header-web/voj-header-web.module#VojHeaderWebModule', name: 'VojHeaderWeb', segment: 'voj-header-web', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/voj-header-segment/voj-header-segment.module#VojHeaderSegmentModule', name: 'VojHeaderSegment', segment: 'voj-header-segment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/options/options.module#OptionsPageModule', name: 'OptionsPage', segment: 'options', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_22__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_16__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_16__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: HttpLoaderFactory,
                        deps: [__WEBPACK_IMPORTED_MODULE_12__angular_http__["b" /* Http */]]
                    }
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__components_voj_notification_voj_notification__["a" /* VojNotification */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_10__components_voj_notification_voj_notification_service__["a" /* VojNotificationService */],
                __WEBPACK_IMPORTED_MODULE_15__services_navigation_service__["a" /* NavigationService */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__config_voj_configuration__["a" /* Configuration */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__providers_http_request_http_request__["a" /* HttpRequestProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_search_service_search_service__["a" /* SearchServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_voj_events_voj_events__["a" /* EventBusProvider */],
                __WEBPACK_IMPORTED_MODULE_19__models_voj_configuration_model__["a" /* VojConfiguration */],
                __WEBPACK_IMPORTED_MODULE_20__services_modal_service__["a" /* ModalService */],
                __WEBPACK_IMPORTED_MODULE_21__providers_signup_service_signup_service__["a" /* SignupService */],
                __WEBPACK_IMPORTED_MODULE_23__providers_account_service_account_service__["a" /* AccountService */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_25__providers_masterdata_service_masterdata_service__["a" /* MasterdataService */],
                __WEBPACK_IMPORTED_MODULE_26__providers_profile_service_profile_service__["a" /* ProfileService */],
                __WEBPACK_IMPORTED_MODULE_27__pages_account_module_user_information_strategy_context__["a" /* Context */],
                __WEBPACK_IMPORTED_MODULE_28__dtos_dto_strategy_search_search_dto_factory__["a" /* SearchDTOFactory */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 635:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VojCalendar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VojCalendar = (function () {
    function VojCalendar(alert, elRef, platform) {
        this.alert = alert;
        this.desktopPlatform = false;
        this.elRef = elRef;
        this.platform = platform;
        if (this.platform.is('core')) {
            this.desktopPlatform = true;
            console.info('Desktop');
        }
    }
    VojCalendar.prototype.handleWeekSelect = function (data) {
        this.alert
            .create({
            title: 'Week Selection',
            message: "<pre>" + JSON.stringify(data, null, 2) + "</pre>",
            buttons: ['OK']
        })
            .present();
    };
    VojCalendar.prototype.handleonMultiSelect = function ($event) {
        this.alert
            .create({
            title: 'Multi-selection',
            message: "<pre>" + JSON.stringify($event, null, 2) + "</pre>",
            buttons: ['OK']
        })
            .present();
    };
    VojCalendar.prototype.handleonRangeSelect = function ($event) {
        this.alert
            .create({
            title: 'Range selection',
            message: "<pre>" + JSON.stringify($event, null, 2) + "</pre>",
            buttons: ['OK']
        })
            .present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('data'),
        __metadata("design:type", Object)
    ], VojCalendar.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('type'),
        __metadata("design:type", String)
    ], VojCalendar.prototype, "calendarType", void 0);
    VojCalendar = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'voj-calendar',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-calendar/voj-calendar.html"*/'<smart-calendar\n	*ngIf="!desktopPlatform"\n	[data]="data">\n</smart-calendar>\n<full-calendar\n	*ngIf="desktopPlatform"\n	[mode]="calendarType"\n	[data]="data"\n	(onWeekSelect)="handleWeekSelect($event)"\n	(onMultiSelect)="handleonMultiSelect($event)"\n	(onRangeSelect)="handleonRangeSelect($event)">\n</full-calendar>\n'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-calendar/voj-calendar.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */]])
    ], VojCalendar);
    return VojCalendar;
}());

//# sourceMappingURL=voj-calendar.js.map

/***/ }),

/***/ 636:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgCalendarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_offset__ = __webpack_require__(637);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_intl__ = __webpack_require__(638);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_intl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_intl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_intl_locale_data_jsonp_fr__ = __webpack_require__(641);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_intl_locale_data_jsonp_fr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_intl_locale_data_jsonp_fr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__monthview_monthview__ = __webpack_require__(642);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__weekview_weekview__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__weekview_header_weekview_header__ = __webpack_require__(758);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dayview_dayview__ = __webpack_require__(759);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__calendar__ = __webpack_require__(760);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__init_position_scroll__ = __webpack_require__(763);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__mode_popover_calendar_mode_popover__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pipes__ = __webpack_require__(764);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var NgCalendarModule = (function () {
    function NgCalendarModule() {
    }
    NgCalendarModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__monthview_monthview__["a" /* MonthViewComponent */],
                __WEBPACK_IMPORTED_MODULE_6__weekview_weekview__["a" /* WeekViewComponent */],
                __WEBPACK_IMPORTED_MODULE_7__weekview_header_weekview_header__["a" /* WeekViewHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_8__dayview_dayview__["a" /* DayViewComponent */],
                __WEBPACK_IMPORTED_MODULE_9__calendar__["a" /* CalendarComponent */],
                __WEBPACK_IMPORTED_MODULE_10__init_position_scroll__["a" /* initPositionScrollComponent */],
                __WEBPACK_IMPORTED_MODULE_11__mode_popover_calendar_mode_popover__["a" /* CalendarModePopoverPage */],
                __WEBPACK_IMPORTED_MODULE_12__pipes__["a" /* Pipes */],
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicModule */], __WEBPACK_IMPORTED_MODULE_2_ngx_offset__["a" /* OffsetModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_9__calendar__["a" /* CalendarComponent */], __WEBPACK_IMPORTED_MODULE_12__pipes__["a" /* Pipes */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_9__calendar__["a" /* CalendarComponent */], __WEBPACK_IMPORTED_MODULE_11__mode_popover_calendar_mode_popover__["a" /* CalendarModePopoverPage */]]
        })
    ], NgCalendarModule);
    return NgCalendarModule;
}());

//# sourceMappingURL=calendar.module.js.map

/***/ }),

/***/ 640:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 642:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonthViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_date_fns__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_date_fns__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_empty__ = __webpack_require__(728);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_empty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_empty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_of__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_observable_fromEvent__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_observable_fromEvent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_observable_fromEvent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_observable_from__ = __webpack_require__(732);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_observable_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_observable_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_observable_timer__ = __webpack_require__(739);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_add_observable_timer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_distinctuntilchanged__ = __webpack_require__(746);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_distinctuntilchanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_distinctuntilchanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_add_operator_switchMap__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_rxjs_add_operator_concatMap__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_rxjs_add_operator_concatMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_rxjs_add_operator_concatMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_rxjs_add_operator_debounceTime__ = __webpack_require__(748);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_rxjs_add_operator_buffer__ = __webpack_require__(750);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_rxjs_add_operator_buffer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_rxjs_add_operator_buffer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_rxjs_add_operator_pluck__ = __webpack_require__(752);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_rxjs_add_operator_pluck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_rxjs_add_operator_pluck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_rxjs_add_operator_bufferCount__ = __webpack_require__(754);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_rxjs_add_operator_bufferCount___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_rxjs_add_operator_bufferCount__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_rxjs_add_operator_takeUntil__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_rxjs_add_operator_takeUntil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_rxjs_add_operator_withLatestFrom__ = __webpack_require__(756);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_rxjs_add_operator_withLatestFrom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_rxjs_add_operator_withLatestFrom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__models_shared__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__calendar_service__ = __webpack_require__(76);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};























var MonthViewComponent = (function () {
    function MonthViewComponent(calendarService) {
        var _this = this;
        this.calendarService = calendarService;
        this.autoSelect = true;
        this.dir = "";
        this.onRangeChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onEventSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onTimeSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"](true);
        this.onTitleChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"](true);
        /** Command-trigger to activate multi-select mode */
        this.onMultiSelectActive = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"](true);
        /** Trigger for multi-select range */
        this.onMultiSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"](true);
        this.onWeekSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"](true);
        this.views = [];
        this.currentViewIndex = 0;
        this.mode = 'month';
        this.direction = 0;
        this.moveOnSelected = false;
        this.inited = false;
        this.callbackOnInit = true;
        this.onSlideChange$ = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.focusOffset = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].empty();
        this.onTimeSelected.subscribe(function (x) { return _this.markSelectedRow(); });
    }
    MonthViewComponent_1 = MonthViewComponent;
    MonthViewComponent.prototype.markSelectedRow = function () {
        Array.prototype.slice
            .call(document.querySelectorAll('tr.selected-row'))
            .forEach(function (elem) { return elem.classList.remove('selected-row'); });
        var selected = this.slider
            .getElementRef().nativeElement
            .querySelector('.monthview-selected');
        if (selected != null) {
            selected.parentElement.classList.add('selected-row');
        }
    };
    MonthViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.dateFormatter && this.dateFormatter.formatMonthViewDay) {
            this.formatDayLabel = this.dateFormatter.formatMonthViewDay;
        }
        else {
            var dayLabelDatePipe = new __WEBPACK_IMPORTED_MODULE_4__angular_common__["DatePipe"]('en-US');
            this.formatDayLabel = function (date) {
                return dayLabelDatePipe.transform(date, this.formatDay);
            };
        }
        if (this.dateFormatter && this.dateFormatter.formatMonthViewDayHeader) {
            this.formatDayHeaderLabel = this.dateFormatter.formatMonthViewDayHeader;
        }
        else {
            var datePipe = new __WEBPACK_IMPORTED_MODULE_4__angular_common__["DatePipe"](this.locale);
            this.formatDayHeaderLabel = function (date) {
                return datePipe.transform(date, this.formatDayHeader);
            };
        }
        if (this.dateFormatter && this.dateFormatter.formatMonthViewTitle) {
            this.formatTitle = this.dateFormatter.formatMonthViewTitle;
        }
        else {
            var datePipe = new __WEBPACK_IMPORTED_MODULE_4__angular_common__["DatePipe"](this.locale);
            this.formatTitle = function (date) {
                return datePipe.transform(date, this.formatMonthTitle);
            };
        }
        if (this.lockSwipeToPrev) {
            this.slider.lockSwipeToPrev(true);
        }
        if (this.lockSwipes) {
            this.slider.lockSwipes(true);
        }
        this.refreshView();
        this.inited = true;
        this.currentDateChangedFromParentSubscription = this.calendarService.currentDateChangedFromParent$.subscribe(function (currentDate) {
            _this.refreshView();
        });
        this.eventSourceChangedSubscription = this.calendarService.eventSourceChanged$.subscribe(function () {
            _this.onDataLoaded();
        });
    };
    MonthViewComponent.prototype.ngOnDestroy = function () {
        if (this.currentDateChangedFromParentSubscription) {
            this.currentDateChangedFromParentSubscription.unsubscribe();
            this.currentDateChangedFromParentSubscription = null;
        }
        if (this.eventSourceChangedSubscription) {
            this.eventSourceChangedSubscription.unsubscribe();
            this.eventSourceChangedSubscription = null;
        }
    };
    MonthViewComponent.prototype.ngOnChanges = function (changes) {
        if (!this.inited)
            return;
        var eventSourceChange = changes['eventSource'];
        if (eventSourceChange && eventSourceChange.currentValue) {
            this.onDataLoaded();
        }
        var lockSwipeToPrev = changes['lockSwipeToPrev'];
        if (lockSwipeToPrev) {
            this.slider.lockSwipeToPrev(lockSwipeToPrev.currentValue);
        }
        var lockSwipes = changes['lockSwipes'];
        if (lockSwipes) {
            this.slider.lockSwipes(lockSwipes.currentValue);
        }
        if ('focusOffset' in changes) {
            if (typeof this.focusOffset !== 'undefined') {
                this.focusOffset = changes['focusOffset'].currentValue;
                var parent_1 = document.querySelector('.swiper-container');
                var parentHeight_1 = parent_1.offsetHeight;
                var getSelectedRow$ = function (offset) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"]
                    .of(document.querySelector('.selected-row'))
                    .filter(function (row) { return row != null; })
                    .map(function (elementRef) {
                    /**
                     * Selected row index
                     * @type {number}
                     */
                    var rowIndex = Array.prototype.slice
                        .call(elementRef.parentElement.children)
                        .findIndex(function (row) { return row.classList.contains('selected-row'); });
                    return { offset: offset, meta: { elementRef: elementRef, rowIndex: rowIndex } };
                })
                    .filter(function (_a) {
                    var _b = _a.meta, rowIndex = _b.rowIndex, elementRef = _b.elementRef;
                    return rowIndex >= 0 && rowIndex < elementRef.parentElement.children.length;
                }); };
                this.focusOffset
                    .filter(function (offset) { return offset > 0; })
                    .switchMap(getSelectedRow$)
                    .subscribe(function (_a) {
                    var offset = _a.offset, meta = _a.meta;
                    var rowHeight = meta.elementRef.offsetHeight;
                    var maxHeight = meta.elementRef.parentElement.offsetHeight;
                    var firstRowOffset = meta.elementRef.parentElement.parentElement.children
                        .item(0).children
                        .item(0).offsetHeight;
                    var tableBody = meta.elementRef.parentElement;
                    var heightTotal = parentHeight_1 - rowHeight - firstRowOffset;
                    var normalizedOffset = offset - firstRowOffset;
                    var rowOffset = meta.rowIndex * rowHeight;
                    var height = maxHeight - normalizedOffset;
                    var heightRatio = (offset / heightTotal) * 100;
                    var transform = rowOffset / 100 * heightRatio;
                    if ((height >= rowHeight + firstRowOffset)
                        && (heightRatio > 0 && heightRatio <= 100)
                        && (transform > 0 && transform <= rowOffset)) {
                        parent_1.style.height = height + 'px';
                        tableBody.style.transform = "translateY(" + -transform + "px)";
                        /*const data = [
                          `o: ${ offset }`,                    // offset
                          `oN: ${ normalizedOffset }`,         // normalized offset
                          `h: ${ height }`,                    // height
                          `hR: ${ heightRatio.toFixed(1) }%`,  // height ratio
                          `t: ${ -transform.toFixed(1) }px`,   // transform
                          `rO: ${ rowOffset }`,                // row offset
                          `rH: ${ rowHeight }`,                // row height
                          `rF: ${ firstRowOffset }`            // first row offset
                        ];
                        console.log(data.join(', '));*/
                    }
                });
            }
        }
    };
    MonthViewComponent.prototype.ngAfterViewInit = function () {
        var title = this.getTitle();
        this.onTitleChanged.emit(title);
        this.initWeekSelection();
        this.initMultiSelectMode();
    };
    MonthViewComponent.prototype.initMultiSelectMode = function () {
        var _this = this;
        var flattenTouches$ = function (event) {
            var touches = [].slice.call(event.changedTouches);
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].from(touches.map(function (touch) { return ({ event: event, touch: touch }); }));
        };
        var mapTouches$ = function (elem, event) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"]
            .fromEvent(elem, event)
            .flatMap(flattenTouches$); };
        var cells = document.querySelectorAll('[data-clickable-target="true"]');
        var start$ = mapTouches$(cells, 'touchstart');
        var move$ = mapTouches$(cells, 'touchmove');
        var end$ = mapTouches$(cells, 'touchend');
        // Depends on current slide(listens cells only on the slide which was current during component initialization).
        // To fix it use delegate on document and filter by [data-clickable-target="true"] selector
        var longPress$ = start$
            .flatMap(function (startEvent) {
            var startTouchId = startEvent.touch.identifier;
            var moveOrEnd$ = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"]
                .merge(move$, end$)
                .filter(function (_a) {
                var identifier = _a.touch.identifier;
                return identifier === startTouchId;
            });
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"]
                .timer(1000)
                .takeUntil(moveOrEnd$)
                .map(function () { return startEvent; });
        });
        var click$ = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"]
            .fromEvent(document, 'click')
            .filter(function (event) { return event.target.dataset.clickableTarget === 'true'; });
        var multiSelect$ = click$
            .takeUntil(this.acceptSelectedRange)
            .map(function (event) { return event.target; })
            .do(function (elem) { return elem.classList.toggle('multiselect-col'); })
            .buffer(this.acceptSelectedRange)
            .map(function (elements) { return elements
            .filter(function (elem) { return elem.classList.contains('multiselect-col'); })
            .map(function (elem) {
            var id = elem.id, clickableDate = elem.dataset.clickableDate;
            return { id: id, date: new Date(clickableDate) };
        }); });
        var outerSubject$ = this.activateMultiSelect
            .filter(function (target) { return target === __WEBPACK_IMPORTED_MODULE_21__models_shared__["a" /* MultiSelectTarget */].CustomRange; });
        if (this.rangeSelectSubscription != null
            && this.rangeSelectSubscription instanceof __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__["Subscription"]
            && !this.rangeSelectSubscription.closed) {
            this.rangeSelectSubscription.unsubscribe();
        }
        var multiSelectDelegate$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        var targetsDelegate$ = this.onSlideChange$
            .map(function () { return multiSelectDelegate$.getValue(); })
            .filter(function (values) { return values.length > 0; })
            .do(function (values) { return values.forEach(function (entry) {
            var elem = document.getElementById(entry.id);
            if (elem != null && !elem.classList.contains('multiselect-col')) {
                elem.classList.add('multiselect-col');
            }
        }); });
        /**
         * TODO:
         * - make delegate on document that filters table cells
         * - store selected selectors inside the observable chain
         */
        this.rangeSelectSubscription = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"]
            .merge(longPress$, outerSubject$) // chain activators
            .do(function () { return _this.onMultiSelectActive.emit(__WEBPACK_IMPORTED_MODULE_21__models_shared__["a" /* MultiSelectTarget */].CustomRange); })
            .switchMap(function () { return multiSelect$
            .takeUntil(_this.onMultiSelect.asObservable()); })
            .do(function (targets) { return multiSelectDelegate$.next(targets); })
            .withLatestFrom(this.acceptSelectedRange)
            .map(function (_a) {
            var range = _a[0], state = _a[1];
            return ({ range: range, state: state });
        })
            .subscribe(function (_a) {
            var range = _a.range, state = _a.state;
            _this.clearMultiSelectRange();
            if (state.isAccepted && state.target === __WEBPACK_IMPORTED_MODULE_21__models_shared__["a" /* MultiSelectTarget */].CustomRange) {
                _this.onMultiSelect.emit({
                    payload: range.map(function (item) { return item.date; })
                });
            }
        });
        targetsDelegate$.subscribe();
    };
    MonthViewComponent.prototype.initWeekSelection = function () {
        var _this = this;
        if (this.weekSelectSubscription != null
            && this.weekSelectSubscription instanceof __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__["Subscription"]
            && !this.weekSelectSubscription.closed) {
            this.weekSelectSubscription.unsubscribe();
        }
        var cells = document.querySelectorAll('[data-clickable-target="true"]');
        var click$ = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].fromEvent(cells, 'click');
        var outerSubject$ = this.activateMultiSelect
            .filter(function (target) { return target === __WEBPACK_IMPORTED_MODULE_21__models_shared__["a" /* MultiSelectTarget */].Week; })
            .switchMap(function () { return click$.takeUntil(_this.acceptSelectedRange); });
        var doubleClick$ = click$
            .buffer(click$.debounceTime(250))
            .filter(function (events) { return events.length === 2; })
            .map(function (events) { return events[0]; });
        this.weekSelectSubscription = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"]
            .merge(doubleClick$, outerSubject$)
            .pluck('target', 'parentElement')
            .do(function (selectedRow) {
            _this.clearWeekSelectRange();
            selectedRow.classList.add('selected-week');
        })
            .do(function (_) { return _this.onMultiSelectActive.emit(__WEBPACK_IMPORTED_MODULE_21__models_shared__["a" /* MultiSelectTarget */].Week); })
            .map(function (selectedRow) {
            var range = [].slice
                .call(selectedRow.cells)
                .map(function (cell) { return new Date(cell.dataset.clickableDate); });
            return {
                start: { date: range[0] },
                end: { date: range[range.length - 1] }
            };
        })
            .switchMap(function (selectedRow) { return _this.acceptSelectedRange; }, function (range, state) { return ({ range: range, state: state }); })
            .subscribe(function (_a) {
            var range = _a.range, state = _a.state;
            if (state.isAccepted && state.target === __WEBPACK_IMPORTED_MODULE_21__models_shared__["a" /* MultiSelectTarget */].Week) {
                _this.onWeekSelect.emit({
                    start: range.start.date,
                    end: range.end.date
                });
            }
            _this.clearWeekSelectRange();
        });
    };
    MonthViewComponent.prototype.htmlQuery = function (selector) {
        var query = document.querySelectorAll(selector);
        var result = query.length > 0
            ? [].slice.call(query)
            : [];
        return result;
    };
    MonthViewComponent.prototype.getMultiSelectRange = function (from, to) {
        /**
         * @returns
         *   0 - view(slide) index
         *   1st - row index
         *   2nd - weekday index
         */
        var parse = function (token) { return token.split('-').map(function (x) { return Number(x); }); };
        var range = [];
        var start = parse(from);
        var end = parse(to);
        for (var view = start[0]; view <= end[0]; view += 1) {
            for (var row = start[1]; row <= end[1]; row += 1) {
                var startCol = view === start[0] && row === start[1] ? start[2] : 0;
                for (var col = startCol; col < 7; col += 1) {
                    range.push([view, row, col].join('-'));
                    if (view === end[0] && row === end[1] && col === end[2]) {
                        return range;
                    }
                }
            }
        }
    };
    MonthViewComponent.prototype.markMultiSelectRange = function (from, to) {
        var range = this.getMultiSelectRange(from, to);
        range.forEach(function (id) {
            var elem = document.getElementById(id);
            if (elem != null) {
                elem.classList.add('multiselect-col');
            }
        });
    };
    MonthViewComponent.prototype.clearMultiSelectRange = function () {
        this.htmlQuery('.multiselect-col')
            .forEach(function (elem) { return elem.classList.remove('multiselect-col'); });
    };
    MonthViewComponent.prototype.clearWeekSelectRange = function () {
        this.htmlQuery('.selected-week')
            .forEach(function (row) { return row.classList.remove('selected-week'); });
    };
    MonthViewComponent.prototype.onSlideChanged = function () {
        if (this.callbackOnInit) {
            this.callbackOnInit = false;
            return;
        }
        var currentSlideIndex = this.slider.getActiveIndex(), direction = 0, currentViewIndex = this.currentViewIndex;
        currentSlideIndex = (currentSlideIndex + 2) % 3;
        if (currentSlideIndex - currentViewIndex === 1) {
            direction = 1;
        }
        else if (currentSlideIndex === 0 && currentViewIndex === 2) {
            direction = 1;
            this.slider.slideTo(1, 0, false);
        }
        else if (currentViewIndex - currentSlideIndex === 1) {
            direction = -1;
        }
        else if (currentSlideIndex === 2 && currentViewIndex === 0) {
            direction = -1;
            this.slider.slideTo(3, 0, false);
        }
        this.currentViewIndex = currentSlideIndex;
        this.move(direction);
    };
    MonthViewComponent.prototype.move = function (direction) {
        if (direction === 0)
            return;
        this.direction = direction;
        if (!this.moveOnSelected) {
            var adjacentDate = this.calendarService.getAdjacentCalendarDate(this.mode, direction);
            this.calendarService.setCurrentDate(adjacentDate);
        }
        this.refreshView();
        this.direction = 0;
        this.moveOnSelected = false;
    };
    MonthViewComponent.prototype.createDateObject = function (date) {
        var disabled = false;
        if (this.markDisabled) {
            disabled = this.markDisabled(date);
        }
        return {
            date: date,
            events: [],
            label: this.formatDayLabel(date),
            secondary: false,
            disabled: disabled
        };
    };
    MonthViewComponent.getDates = function (startDate, n) {
        var dates = new Array(n), current = new Date(startDate.getTime()), i = 0;
        current.setHours(12); // Prevent repeated dates because of timezone bug
        while (i < n) {
            dates[i++] = new Date(current.getTime());
            current.setDate(current.getDate() + 1);
        }
        return dates;
    };
    MonthViewComponent.prototype.getViewData = function (startTime) {
        var startDate = startTime, date = startDate.getDate(), month = (startDate.getMonth() + (date !== 1 ? 1 : 0)) % 12;
        var dates = MonthViewComponent_1.getDates(startDate, 42);
        var days = [];
        for (var i = 0; i < 42; i++) {
            var dateObject = this.createDateObject(dates[i]);
            dateObject.secondary = dates[i].getMonth() !== month;
            days[i] = dateObject;
        }
        var dayHeaders = [];
        for (var i = 0; i < 7; i++) {
            dayHeaders.push(this.formatDayHeaderLabel(days[i].date));
        }
        return {
            dates: days,
            dayHeaders: dayHeaders
        };
    };
    MonthViewComponent.prototype.getHighlightClass = function (date) {
        var className = '';
        if (date.hasEvent) {
            if (date.secondary) {
                className = 'monthview-secondary-with-event';
            }
            else {
                className = 'monthview-primary-with-event';
            }
        }
        if (date.selected) {
            if (className) {
                className += ' ';
            }
            className += 'monthview-selected';
        }
        if (date.current) {
            if (className) {
                className += ' ';
            }
            className += 'monthview-current';
        }
        if (date.secondary) {
            if (className) {
                className += ' ';
            }
            className += 'text-muted';
        }
        if (date.disabled) {
            if (className) {
                className += ' ';
            }
            className += 'monthview-disabled';
        }
        return className;
    };
    MonthViewComponent.prototype.getRange = function (currentDate) {
        var year = currentDate.getFullYear(), month = currentDate.getMonth(), firstDayOfMonth = new Date(year, month, 1), difference = this.startingDayMonth - firstDayOfMonth.getDay(), numDisplayedFromPreviousMonth = (difference > 0) ? 7 - difference : -difference, startDate = new Date(firstDayOfMonth.getTime());
        if (numDisplayedFromPreviousMonth > 0) {
            startDate.setDate(-numDisplayedFromPreviousMonth + 1);
        }
        var endDate = new Date(startDate.getTime());
        endDate.setDate(endDate.getDate() + 42);
        return {
            startTime: startDate,
            endTime: endDate
        };
    };
    MonthViewComponent.prototype.onDataLoaded = function () {
        var range = this.range, eventSource = this.eventSource, len = eventSource ? eventSource.length : 0, startTime = range.startTime, endTime = range.endTime, utcStartTime = new Date(Date.UTC(startTime.getFullYear(), startTime.getMonth(), startTime.getDate())), utcEndTime = new Date(Date.UTC(endTime.getFullYear(), endTime.getMonth(), endTime.getDate())), currentViewIndex = this.currentViewIndex, dates = this.views[currentViewIndex].dates, oneDay = 86400000, eps = 0.0006;
        for (var r = 0; r < 42; r += 1) {
            if (dates[r].hasEvent) {
                dates[r].hasEvent = false;
                dates[r].events = [];
            }
        }
        for (var i = 0; i < len; i += 1) {
            var event_1 = eventSource[i], eventStartTime = new Date(event_1.startTime.getTime()), eventEndTime = new Date(event_1.endTime.getTime()), st = void 0, et = void 0;
            if (event_1.allDay) {
                if (eventEndTime <= utcStartTime || eventStartTime >= utcEndTime) {
                    continue;
                }
                else {
                    st = utcStartTime;
                    et = utcEndTime;
                }
            }
            else {
                if (eventEndTime <= startTime || eventStartTime >= endTime) {
                    continue;
                }
                else {
                    st = startTime;
                    et = endTime;
                }
            }
            var timeDiff = void 0;
            var timeDifferenceStart = void 0;
            if (eventStartTime <= st) {
                timeDifferenceStart = 0;
            }
            else {
                timeDiff = eventStartTime.getTime() - st.getTime();
                if (!event_1.allDay) {
                    timeDiff = timeDiff - (eventStartTime.getTimezoneOffset() - st.getTimezoneOffset()) * 60000;
                }
                timeDifferenceStart = timeDiff / oneDay;
            }
            var timeDifferenceEnd = void 0;
            if (eventEndTime >= et) {
                timeDiff = et.getTime() - st.getTime();
                if (!event_1.allDay) {
                    timeDiff = timeDiff - (et.getTimezoneOffset() - st.getTimezoneOffset()) * 60000;
                }
                timeDifferenceEnd = timeDiff / oneDay;
            }
            else {
                timeDiff = eventEndTime.getTime() - st.getTime();
                if (!event_1.allDay) {
                    timeDiff = timeDiff - (eventEndTime.getTimezoneOffset() - st.getTimezoneOffset()) * 60000;
                }
                timeDifferenceEnd = timeDiff / oneDay;
            }
            var index = Math.floor(timeDifferenceStart);
            while (index < timeDifferenceEnd - eps) {
                dates[index].hasEvent = true;
                var eventSet = dates[index].events;
                if (eventSet) {
                    eventSet.push(event_1);
                }
                else {
                    eventSet = [];
                    eventSet.push(event_1);
                    dates[index].events = eventSet;
                }
                index += 1;
            }
        }
        for (var r = 0; r < 42; r += 1) {
            if (dates[r].hasEvent) {
                dates[r].events.sort(this.compareEvent);
            }
        }
        if (this.autoSelect) {
            var findSelected = false;
            for (var r = 0; r < 42; r += 1) {
                if (dates[r].selected) {
                    this.selectedDate = dates[r];
                    findSelected = true;
                    break;
                }
            }
            if (findSelected) {
                this.onTimeSelected.emit({
                    selectedTime: this.selectedDate.date,
                    events: this.selectedDate.events,
                    disabled: this.selectedDate.disabled
                });
            }
        }
    };
    ;
    MonthViewComponent.prototype.refreshView = function () {
        var _this = this;
        this.range = this.getRange(this.calendarService.currentDate);
        if (this.inited) {
            var title = this.getTitle();
            this.onTitleChanged.emit(title);
        }
        this.calendarService.populateAdjacentViews(this);
        this.updateCurrentView(this.range.startTime, this.views[this.currentViewIndex]);
        this.calendarService.rangeChanged(this);
        setTimeout(function () {
            _this.markSelectedRow();
            _this.initWeekSelection();
            _this.onSlideChange$.emit();
            // this.initMultiSelectMode();
        }, 200);
    };
    MonthViewComponent.prototype.getTitle = function () {
        var currentViewStartDate = this.range.startTime, date = currentViewStartDate.getDate(), month = (currentViewStartDate.getMonth() + (date !== 1 ? 1 : 0)) % 12, year = currentViewStartDate.getFullYear() + (date !== 1 && month === 0 ? 1 : 0), headerDate = new Date(year, month, 1);
        return this.formatTitle(headerDate);
    };
    MonthViewComponent.prototype.compareEvent = function (event1, event2) {
        if (event1.allDay) {
            return 1;
        }
        else if (event2.allDay) {
            return -1;
        }
        else {
            return (event1.startTime.getTime() - event2.startTime.getTime());
        }
    };
    MonthViewComponent.prototype.handleDayPress = function (event) {
        // this.onMultiSelectActive.emit();
    };
    MonthViewComponent.prototype.select = function (event, viewDate) {
        if (!this.views)
            return;
        var selectedDate = viewDate.date, events = viewDate.events;
        if (Object(__WEBPACK_IMPORTED_MODULE_6_date_fns__["isPast"])(selectedDate)) {
            console.log('[monthview:past-date-selected]');
            return;
        }
        var selectedWeekQuery = this.htmlQuery('.selected-week');
        if (selectedWeekQuery.length > 0) {
            selectedWeekQuery.forEach(function (row) { return row.classList.remove('selected-week'); });
        }
        if (!viewDate.disabled) {
            var dates = this.views[this.currentViewIndex].dates, currentCalendarDate = this.calendarService.currentDate, currentMonth = currentCalendarDate.getMonth(), currentYear = currentCalendarDate.getFullYear(), selectedMonth = selectedDate.getMonth(), selectedYear = selectedDate.getFullYear(), direction = 0;
            event.target.parentElement;
            if (currentYear === selectedYear) {
                if (currentMonth !== selectedMonth) {
                    direction = currentMonth < selectedMonth ? 1 : -1;
                }
            }
            else {
                direction = currentYear < selectedYear ? 1 : -1;
            }
            this.calendarService.setCurrentDate(selectedDate);
            if (direction === 0) {
                var currentViewStartDate = this.range.startTime, oneDay = 86400000, selectedDayDifference = Math.floor((selectedDate.getTime() - currentViewStartDate.getTime() - (selectedDate.getTimezoneOffset() - currentViewStartDate.getTimezoneOffset()) * 60000) / oneDay);
                for (var r = 0; r < 42; r += 1) {
                    dates[r].selected = false;
                }
                if (selectedDayDifference >= 0 && selectedDayDifference < 42) {
                    dates[selectedDayDifference].selected = true;
                    this.selectedDate = dates[selectedDayDifference];
                }
            }
            else {
                this.moveOnSelected = true;
                this.slideView(direction);
            }
        }
        this.onTimeSelected.emit({ selectedTime: selectedDate, events: events, disabled: viewDate.disabled });
    };
    MonthViewComponent.prototype.slideView = function (direction) {
        if (direction === 1) {
            this.slider.slideNext();
        }
        else if (direction === -1) {
            this.slider.slidePrev();
        }
    };
    MonthViewComponent.prototype.updateCurrentView = function (currentViewStartDate, view) {
        var currentCalendarDate = this.calendarService.currentDate, today = new Date(), oneDay = 86400000, selectedDayDifference = Math.floor((currentCalendarDate.getTime() - currentViewStartDate.getTime() - (currentCalendarDate.getTimezoneOffset() - currentViewStartDate.getTimezoneOffset()) * 60000) / oneDay), currentDayDifference = Math.floor((today.getTime() - currentViewStartDate.getTime() - (today.getTimezoneOffset() - currentViewStartDate.getTimezoneOffset()) * 60000) / oneDay);
        for (var r = 0; r < 42; r += 1) {
            view.dates[r].selected = false;
        }
        if (selectedDayDifference >= 0 && selectedDayDifference < 42 && !view.dates[selectedDayDifference].disabled && (this.autoSelect || this.moveOnSelected)) {
            view.dates[selectedDayDifference].selected = true;
            this.selectedDate = view.dates[selectedDayDifference];
        }
        else {
            this.selectedDate = {
                date: null,
                events: [],
                label: null,
                secondary: null,
                disabled: false
            };
        }
        if (currentDayDifference >= 0 && currentDayDifference < 42) {
            view.dates[currentDayDifference].current = true;
        }
    };
    MonthViewComponent.prototype.eventSelected = function (event) {
        this.onEventSelected.emit(event);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('monthSlider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["s" /* Slides */])
    ], MonthViewComponent.prototype, "slider", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])(__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["r" /* Slide */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"])
    ], MonthViewComponent.prototype, "monthSlides", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], MonthViewComponent.prototype, "monthviewDisplayEventTemplate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], MonthViewComponent.prototype, "monthviewInactiveDisplayEventTemplate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], MonthViewComponent.prototype, "monthviewEventDetailTemplate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], MonthViewComponent.prototype, "formatDay", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], MonthViewComponent.prototype, "formatDayHeader", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], MonthViewComponent.prototype, "formatMonthTitle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], MonthViewComponent.prototype, "eventSource", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], MonthViewComponent.prototype, "startingDayMonth", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], MonthViewComponent.prototype, "showEventDetail", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], MonthViewComponent.prototype, "noEventsLabel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], MonthViewComponent.prototype, "autoSelect", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Function)
    ], MonthViewComponent.prototype, "markDisabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], MonthViewComponent.prototype, "locale", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MonthViewComponent.prototype, "dateFormatter", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], MonthViewComponent.prototype, "dir", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], MonthViewComponent.prototype, "lockSwipeToPrev", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], MonthViewComponent.prototype, "lockSwipes", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"])
    ], MonthViewComponent.prototype, "focusOffset", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('acceptSelectedRange'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"])
    ], MonthViewComponent.prototype, "acceptSelectedRange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('activateMultiSelect'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"])
    ], MonthViewComponent.prototype, "activateMultiSelect", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], MonthViewComponent.prototype, "onRangeChanged", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], MonthViewComponent.prototype, "onEventSelected", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], MonthViewComponent.prototype, "onTimeSelected", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], MonthViewComponent.prototype, "onTitleChanged", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], MonthViewComponent.prototype, "onMultiSelectActive", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], MonthViewComponent.prototype, "onMultiSelect", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], MonthViewComponent.prototype, "onWeekSelect", void 0);
    MonthViewComponent = MonthViewComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'monthview',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-calendar/calendar/monthview/monthview.html"*/'<div>\n  <ion-slides\n    #monthSlider\n    [loop]="true"\n    [dir]="dir"\n    (ionSlideDidChange)="onSlideChanged()">\n    <ion-slide class="monthview-slide">\n      <table *ngIf="0===currentViewIndex" class="table table-fixed monthview-datetable">\n        <thead>\n          <tr>\n            <th *ngFor="let dayHeader of views[0].dayHeaders" class="monthview-week-title">\n              <small>{{dayHeader}}</small>\n            </th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor="let row of [0,1,2,3,4,5]">\n            <td\n              *ngFor="let col of [0,1,2,3,4,5,6]"\n              tappable\n              [id]="[0, row, col].join(\'-\')"\n              (click)="select($event, views[0].dates[row*7+col])"\n              [ngClass]="getHighlightClass(views[0].dates[row*7+col])"\n              [attr.data-clickable-target]="!(views[0].dates[row*7+col] | isPast)"\n              [attr.data-clickable-date]="views[0].dates[row*7+col].date"\n              [class.weekend]="col > 4">\n              <template\n                [ngTemplateOutlet]="monthviewDisplayEventTemplate"\n                [ngOutletContext]="{view: views[0], row: row, col: col}">\n              </template>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n      <table *ngIf="0!==currentViewIndex" class="table table-fixed monthview-datetable">\n        <thead>\n          <tr class="text-center">\n            <th *ngFor="let dayHeader of views[0].dayHeaders">\n              <small>{{dayHeader}}</small>\n            </th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor="let row of [0,1,2,3,4,5]">\n            <td *ngFor="let col of [0,1,2,3,4,5,6]">\n              <template\n                [ngTemplateOutlet]="monthviewInactiveDisplayEventTemplate"\n                [ngOutletContext]="{view: views[0], row: row, col: col}">\n              </template>\n            </td>\n            <tr>\n        </tbody>\n      </table>\n    </ion-slide>\n    <ion-slide class="monthview-slide">\n      <table *ngIf="1===currentViewIndex" class="table table-fixed monthview-datetable">\n        <thead>\n          <tr>\n            <th *ngFor="let dayHeader of views[1].dayHeaders" class="monthview-week-title">\n              <small>{{dayHeader}}</small>\n            </th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor="let row of [0,1,2,3,4,5]">\n            <td\n              *ngFor="let col of [0,1,2,3,4,5,6]"\n              tappable\n              [id]="[1, row, col].join(\'-\')"\n              (click)="select($event, views[1].dates[row*7+col])"\n              [ngClass]="getHighlightClass(views[1].dates[row*7+col])"\n              [attr.data-clickable-target]="!(views[1].dates[row*7+col] | isPast)"\n              [attr.data-clickable-date]="views[1].dates[row*7+col].date"\n              [class.weekend]="col > 4">\n              <template [ngTemplateOutlet]="monthviewDisplayEventTemplate" [ngOutletContext]="{view: views[1], row: row, col: col}">\n              </template>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n      <table *ngIf="1!==currentViewIndex" class="table table-fixed monthview-datetable">\n        <thead>\n          <tr class="text-center">\n            <th *ngFor="let dayHeader of views[1].dayHeaders">\n              <small>{{dayHeader}}</small>\n            </th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor="let row of [0,1,2,3,4,5]">\n            <td *ngFor="let col of [0,1,2,3,4,5,6]">\n              <template [ngTemplateOutlet]="monthviewInactiveDisplayEventTemplate" [ngOutletContext]="{view: views[1], row: row, col: col}">\n              </template>\n            </td>\n            <tr>\n        </tbody>\n      </table>\n    </ion-slide>\n    <ion-slide class="monthview-slide">\n      <table *ngIf="2===currentViewIndex" class="table table-fixed monthview-datetable">\n        <thead>\n          <tr>\n            <th *ngFor="let dayHeader of views[2].dayHeaders" class="monthview-week-title">\n              <small>{{dayHeader}}</small>\n            </th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor="let row of [0,1,2,3,4,5]">\n            <td\n              *ngFor="let col of [0,1,2,3,4,5,6]"\n              tappable\n              [id]="[2, row, col].join(\'-\')"\n              (click)="select($event, views[2].dates[row*7+col])"\n              [ngClass]="getHighlightClass(views[2].dates[row*7+col])"\n              [attr.data-clickable-target]="!(views[2].dates[row*7+col] | isPast)"\n              [attr.data-clickable-date]="views[2].dates[row*7+col].date"\n              [class.weekend]="col > 4">\n              <template [ngTemplateOutlet]="monthviewDisplayEventTemplate" [ngOutletContext]="{view: views[2], row: row, col: col}">\n              </template>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n      <table *ngIf="2!==currentViewIndex" class="table table-fixed monthview-datetable">\n        <thead>\n          <tr class="text-center">\n            <th *ngFor="let dayHeader of views[2].dayHeaders">\n              <small>{{dayHeader}}</small>\n            </th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor="let row of [0,1,2,3,4,5]">\n            <td *ngFor="let col of [0,1,2,3,4,5,6]">\n              <template [ngTemplateOutlet]="monthviewInactiveDisplayEventTemplate" [ngOutletContext]="{view: views[2], row: row, col: col}">\n              </template>\n            </td>\n            <tr>\n        </tbody>\n      </table>\n    </ion-slide>\n  </ion-slides>\n  <template [ngTemplateOutlet]="monthviewEventDetailTemplate" [ngOutletContext]="{showEventDetail:showEventDetail, selectedDate: selectedDate, noEventsLabel: noEventsLabel}">\n  </template>\n</div>\n'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-calendar/calendar/monthview/monthview.html"*/,
            styles: [
                "\n      .text-muted {\n        color: #999;\n      }\n\n      .table-fixed {\n        table-layout: fixed;\n      }\n\n      .table {\n        width: 100%;\n        max-width: 100%;\n        background-color: transparent;\n        border: none !important;\n      }\n\n      .table > thead > tr > th,\n      .table > tbody > tr > th,\n      .table > tfoot > tr > th,\n      .table > thead > tr > td,\n      .table > tbody > tr > td,\n      .table > tfoot > tr > td {\n        padding: 8px;\n        line-height: 20px;\n        vertical-align: top;\n      }\n\n      .table > thead > tr > th {\n        vertical-align: bottom;\n        border-bottom: 2px solid #ddd;\n      }\n\n      .table > thead:first-child > tr:first-child > th, .table > thead:first-child > tr:first-child > td {\n        border-top: 0\n      }\n\n      .table > tbody + tbody {\n        border-top: 2px solid #ddd;\n      }\n\n      .table-bordered {\n        border: 1px solid #ddd;\n      }\n\n      .table-bordered > thead > tr > th, .table-bordered > tbody > tr > th, .table-bordered > tfoot > tr > th,\n      .table-bordered > thead > tr > td, .table-bordered > tbody > tr > td, .table-bordered > tfoot > tr > td {\n        border: 1px solid #ddd;\n      }\n\n      .table-bordered > thead > tr > th, .table-bordered > thead > tr > td {\n        border-bottom-width: 2px;\n      }\n\n      .table-striped > tbody > tr:nth-child(odd) > td, .table-striped > tbody > tr:nth-child(odd) > th {\n        background-color: #f9f9f9\n      }\n\n      .monthview-primary-with-event {\n        background-color: #3a87ad;\n        color: white;\n      }\n\n      .monthview-current {\n        background-color: #f0f0f0;\n      }\n\n      .monthview-selected {\n        background-color: #009900;\n        color: white;\n      }\n\n      .monthview-datetable td.monthview-disabled {\n        color: lightgrey;\n        cursor: default;\n      }\n\n      .monthview-datetable th {\n        text-align: center;\n      }\n\n      .monthview-datetable td {\n        cursor: pointer;\n        text-align: center;\n      }\n\n      .monthview-secondary-with-event {\n        background-color: #d9edf7;\n      }\n\n      ::-webkit-scrollbar,\n      *::-webkit-scrollbar {\n        display: none;\n      }\n    ",
                "\n      .monthview-week-title {\n        border-bottom: none !important;\n      }\n\n      .monthview-slide {\n        padding-top: 40px;\n        align-items: flex-start;\n      }\n\n      .monthview-slide table thead {\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        background: #fff;\n        z-index: 24810;\n      }\n\n      .monthview-slide table thead tr {\n        height: 40px;\n        display: flex;\n        justify-content: space-around;\n      }\n\n      .monthview-slide table tbody td {\n        height: 40px;\n        transition: color 100ms ease-in-out;\n      }\n\n      .monthview-slide table tbody td.weekend,\n      .monthview-week-title:last-child,\n      .monthview-week-title:nth-last-child(2) {\n        color: red;\n      }\n\n      .monthview-slide table tbody {\n        transform: translateY(0px);\n      }\n\n      .monthview-current,\n      .monthview-selected {\n        border-radius: 100%;\n        transition: border-radius 200ms ease-in-out;\n      }\n\n      .monthview-selected {\n        background-color: #139dea !important;\n        color: #fff !important;\n      }\n\n      .monthview-slide table tbody td.text-muted.weekend {\n        color: #ad4a4a;\n      }\n\n      .monthview-primary-with-event,\n      .monthview-secondary-with-event {\n        background-color: transparent;\n        color: #333;\n      }\n\n      .monthview-secondary-with-event {\n        color: #888;\n      }\n\n      .selected-week td,\n      .multiselect-col {\n        background-color: #139dea !important;\n        color: #fff !important;\n        font-weight: bold;\n        border-radius: 0;\n        border: 1px solid #139dea;\n      }\n    "
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_22__calendar_service__["a" /* CalendarService */]])
    ], MonthViewComponent);
    return MonthViewComponent;
    var MonthViewComponent_1;
}());

//# sourceMappingURL=monthview.js.map

/***/ }),

/***/ 758:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeekViewHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WeekViewHeaderComponent = (function () {
    function WeekViewHeaderComponent() {
        this.onSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"](true);
    }
    WeekViewHeaderComponent.prototype.select = function (date) {
        this.onSelect.emit(date);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('data'),
        __metadata("design:type", Object)
    ], WeekViewHeaderComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('onSelect'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], WeekViewHeaderComponent.prototype, "onSelect", void 0);
    WeekViewHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'weekview-header',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-calendar/calendar/weekview-header/weekview-header.html"*/'<table class="table table-fixed weekview-header table-weekview-header">\n  <thead>\n    <tr>\n      <th class="calendar-hour-column"></th>\n      <th\n        *ngFor="let dayHeader of data.dayHeaders | markCurrent: currentDate"\n        [class.weekend]="dayHeader.isWeekend"\n        class="weekview-header text-center">\n        {{ dayHeader.day }}\n      </th>\n    </tr>\n    <tr>\n      <th class="calendar-hour-column">\n        <span class="calendar-hour-column-icon"></span>\n      </th>\n      <th\n        *ngFor="let dayHeader of data.dayHeaders | markCurrent: currentDate; let dayIndex = index"\n        [class.weekend]="dayHeader.isWeekend"\n        [class.current]="dayHeader.isCurrent"\n        [class.has-events]="data | hasEvents: dayIndex"\n        class="weekview-header text-center">\n        <button\n          (click)="select(dayHeader.date)"\n          class="day-button"\n          ion-button\n          clear>\n          <div>\n            {{ dayHeader.week }}\n          </div>\n          <div class="has-events-dot">•</div>\n        </button>\n      </th>\n    </tr>\n  </thead>\n</table>\n'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-calendar/calendar/weekview-header/weekview-header.html"*/,
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            styles: [
                "\n      .table-weekview-header {\n        box-shadow: 0 1px 10px rgba(0,0,0,0.2);\n        position: relative;\n        z-index: 2;\n      }\n      .table-weekview-header > thead > tr:first-child {\n        font-size: 12px;\n      }\n      .table-weekview-header > thead > tr:last-child .calendar-hour-column-icon {\n        background-image: url('/assets/delivery.svg');\n        background-repeat: no-repeat;\n        background-position: center;\n        background-size: cover;\n        display: inline-block;\n        width: 75%;\n        padding-top: 75%;\n      }\n      .table-weekview-header > thead > tr > th {\n        padding: 0 !important;\n        vertical-align: middle !important;\n      }\n      .table-weekview-header > thead > tr > th .day-button .button-inner {\n        position: relative;\n      }\n      .table-weekview-header > thead > tr > th .has-events-dot {\n        display: none;\n        position: absolute;\n        bottom: -15px;\n      }\n      .table-weekview-header > thead > tr > th.current .has-events-dot {\n        bottom: -5px;\n      }\n      .table-weekview-header > thead > tr > th.has-events .has-events-dot {\n        display: block;\n      }\n      .table-weekview-header > thead > tr > th.current {\n        color: #488aff;\n      }\n      .table-weekview-header > thead > tr > th.current .day-button .button-inner {\n        border: 1px solid #488aff;\n        border-radius: 50%;\n        background-color: #488aff;\n        color: #fff;\n        min-height: 42px;\n      }\n      .table-weekview-header > thead > tr > th.current .has-events-dot {\n        color: #fff;\n      }\n      .table-weekview-header > thead > tr > th.weekend,\n      .table-weekview-header > thead > tr > th.weekend .day-button {\n        color: red;\n      }\n      .table-weekview-header > thead > tr > th .day-button {\n        color: #222;\n        height: auto;\n        margin: 0;\n        padding: 14px 0;\n        width: 100%;\n      }\n      .table-weekview-header > thead > tr > th .day-button .button-inner {\n        flex-direction: column;\n        font-size: 2rem;\n      }\n      .table-weekview-header > thead > tr:first-child > th {\n        padding: 0;\n        border-bottom-width: 1px;\n      }\n      .table-weekview-header > thead > tr > th {\n        vertical-align: top;\n      }\n    "
            ]
        }),
        __metadata("design:paramtypes", [])
    ], WeekViewHeaderComponent);
    return WeekViewHeaderComponent;
}());

//# sourceMappingURL=weekview-header.js.map

/***/ }),

/***/ 759:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DayViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_merge__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_date_fns__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_date_fns__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__calendar_service__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__weekview_weekview__ = __webpack_require__(341);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var DayViewComponent = (function () {
    function DayViewComponent(calendarService, elm) {
        this.calendarService = calendarService;
        this.elm = elm;
        this.class = true;
        this.dir = "";
        this.scrollToHour = 0;
        this.onRangeChanged = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        this.onEventSelected = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        this.onTimeSelected = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        this.onTitleChanged = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"](true);
        this.slideOption = {
            runCallbacksOnInit: false,
            loop: true
        };
        this.views = [];
        this.currentViewIndex = 0;
        this.direction = 0;
        this.mode = 'day';
        this.inited = false;
        this.callbackOnInit = true;
        this.updateOffset$ = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
    }
    DayViewComponent_1 = DayViewComponent;
    DayViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentDate = this.calendarService.currentDate;
        if (this.dateFormatter && this.dateFormatter.formatDayViewTitle) {
            this.formatTitle = this.dateFormatter.formatDayViewTitle;
        }
        else {
            var datePipe = new __WEBPACK_IMPORTED_MODULE_0__angular_common__["DatePipe"](this.locale);
            this.formatTitle = function (date) {
                return datePipe.transform(date, this.formatDayTitle);
            };
        }
        if (this.dateFormatter && this.dateFormatter.formatDayViewHourColumn) {
            this.formatHourColumnLabel = this.dateFormatter.formatDayViewHourColumn;
        }
        else {
            var datePipe = new __WEBPACK_IMPORTED_MODULE_0__angular_common__["DatePipe"](this.locale);
            this.formatHourColumnLabel = function (date) {
                return datePipe.transform(date, 'H');
            };
        }
        if (this.lockSwipeToPrev) {
            this.slider.lockSwipeToPrev(true);
        }
        if (this.lockSwipes) {
            this.slider.lockSwipes(true);
        }
        this.refreshView();
        this.hourColumnLabels = this.getHourColumnLabels();
        this.inited = true;
        var fromParent$ = this.calendarService.currentDateChangedFromParent$;
        var fromChild$ = this.calendarService.currentDateChangedFromChildren$;
        this.currentDateChangedSubscription = __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"]
            .merge(fromParent$, fromChild$)
            .subscribe(function (currentDate) {
            _this.currentDate = currentDate;
            _this.refreshView();
        });
        this.eventSourceChangedSubscription = this.calendarService.eventSourceChanged$.subscribe(function () {
            _this.onDataLoaded();
        });
    };
    DayViewComponent.prototype.ngAfterViewInit = function () {
        var title = this.getTitle();
        this.onTitleChanged.emit(title);
        if (this.scrollToHour > 0) {
            var hourColumns_1 = this.elm.nativeElement.querySelector('.dayview-normal-event-container').querySelectorAll('.calendar-hour-column');
            var me = this;
            setTimeout(function () {
                me.initScrollPosition = hourColumns_1[me.scrollToHour].offsetTop;
            }, 0);
        }
    };
    DayViewComponent.prototype.ngOnChanges = function (changes) {
        if (!this.inited)
            return;
        var eventSourceChange = changes['eventSource'];
        if (eventSourceChange && eventSourceChange.currentValue) {
            this.onDataLoaded();
        }
        var lockSwipeToPrev = changes['lockSwipeToPrev'];
        if (lockSwipeToPrev) {
            this.slider.lockSwipeToPrev(lockSwipeToPrev.currentValue);
        }
        var lockSwipes = changes['lockSwipes'];
        if (lockSwipes) {
            this.slider.lockSwipes(lockSwipes.currentValue);
        }
    };
    DayViewComponent.prototype.ngOnDestroy = function () {
        if (this.currentDateChangedSubscription) {
            this.currentDateChangedSubscription.unsubscribe();
            this.currentDateChangedSubscription = null;
        }
        if (this.eventSourceChangedSubscription) {
            this.eventSourceChangedSubscription.unsubscribe();
            this.eventSourceChangedSubscription = null;
        }
    };
    DayViewComponent.prototype.onSlideChanged = function () {
        if (this.callbackOnInit) {
            this.callbackOnInit = false;
            return;
        }
        var currentSlideIndex = this.slider.getActiveIndex(), direction = 0, currentViewIndex = this.currentViewIndex;
        currentSlideIndex = (currentSlideIndex + 2) % 3;
        if (currentSlideIndex - currentViewIndex === 1) {
            direction = 1;
        }
        else if (currentSlideIndex === 0 && currentViewIndex === 2) {
            direction = 1;
            this.slider.slideTo(1, 0, false);
        }
        else if (currentViewIndex - currentSlideIndex === 1) {
            direction = -1;
        }
        else if (currentSlideIndex === 2 && currentViewIndex === 0) {
            direction = -1;
            this.slider.slideTo(3, 0, false);
        }
        this.currentViewIndex = currentSlideIndex;
        this.move(direction);
    };
    DayViewComponent.prototype.move = function (direction) {
        if (direction === 0)
            return;
        this.direction = direction;
        var adjacentDate = this.calendarService.getAdjacentCalendarDate(this.mode, direction);
        this.calendarService.setCurrentDate(adjacentDate);
        this.refreshView();
        this.direction = 0;
    };
    DayViewComponent.createDateObjects = function (startTime) {
        var rows = [], time, currentHour = startTime.getHours(), currentDate = startTime.getDate();
        for (var hour = 0; hour < 24; hour += 1) {
            time = new Date(startTime.getTime());
            time.setHours(currentHour + hour);
            time.setDate(currentDate);
            rows.push({
                time: time,
                events: []
            });
        }
        return rows;
    };
    DayViewComponent.prototype.getHourColumnLabels = function () {
        var hourColumnLabels = [];
        for (var hour = 0, length_1 = this.views[0].rows.length; hour < length_1; hour += 1) {
            hourColumnLabels.push(this.formatHourColumnLabel(this.views[0].rows[hour].time));
        }
        return hourColumnLabels;
    };
    DayViewComponent.prototype.getViewData = function (startTime) {
        var start = new Date(startTime.getFullYear(), startTime.getMonth(), startTime.getDate() - startTime.getDay() + 1);
        var dates = __WEBPACK_IMPORTED_MODULE_8__weekview_weekview__["a" /* WeekViewComponent */].getDates(start, 7);
        var weekViewHeaderConfig = {
            locale: this.locale,
            formatWeelViewWeekDayHeader: this.formatWeelViewWeekDayHeader,
            formatWeekViewDayHeader: this.formatWeekViewDayHeader,
            startingDayWeek: this.startingDayWeek
        };
        var dayHeaders = [];
        var formatter = Object(__WEBPACK_IMPORTED_MODULE_8__weekview_weekview__["b" /* defaultWeekViewDayHeader */])(weekViewHeaderConfig);
        for (var i = 0; i < 7; i++) {
            dayHeaders.push(formatter(dates[i].date));
        }
        return {
            rows: DayViewComponent_1.createDateObjects(startTime),
            allDayEvents: [],
            dayHeaders: dayHeaders
        };
    };
    DayViewComponent.prototype.getRange = function (currentDate) {
        var year = currentDate.getFullYear(), month = currentDate.getMonth(), date = currentDate.getDate(), startTime = new Date(year, month, date), endTime = new Date(year, month, date + 1);
        var difference = currentDate.getDay() - this.startingDayWeek;
        return {
            startTime: startTime,
            endTime: endTime
        };
    };
    DayViewComponent.prototype.onDataLoaded = function () {
        var eventSource = this.eventSource, len = eventSource ? eventSource.length : 0, startTime = this.range.startTime, endTime = this.range.endTime, utcStartTime = new Date(Date.UTC(startTime.getFullYear(), startTime.getMonth(), startTime.getDate())), utcEndTime = new Date(Date.UTC(endTime.getFullYear(), endTime.getMonth(), endTime.getDate())), currentViewIndex = this.currentViewIndex, rows = this.views[currentViewIndex].rows, allDayEvents = this.views[currentViewIndex].allDayEvents, oneHour = 3600000, eps = 0.016, normalEventInRange = false;
        for (var hour = 0; hour < 24; hour += 1) {
            rows[hour].events = [];
        }
        for (var i = 0; i < len; i += 1) {
            var event_1 = eventSource[i];
            var eventStartTime = new Date(event_1.startTime.getTime());
            var eventEndTime = new Date(event_1.endTime.getTime());
            if (event_1.allDay) {
                if (eventEndTime <= utcStartTime || eventStartTime >= utcEndTime) {
                    continue;
                }
                else {
                    allDayEvents.push({
                        event: event_1
                    });
                }
            }
            else {
                if (eventEndTime <= startTime || eventStartTime >= endTime) {
                    continue;
                }
                else {
                    normalEventInRange = true;
                }
                var timeDiff = void 0;
                var timeDifferenceStart = void 0;
                if (eventStartTime <= startTime) {
                    timeDifferenceStart = 0;
                }
                else {
                    timeDiff = eventStartTime.getTime() - startTime.getTime() - (eventStartTime.getTimezoneOffset() - startTime.getTimezoneOffset()) * 60000;
                    timeDifferenceStart = timeDiff / oneHour;
                }
                var timeDifferenceEnd = void 0;
                if (eventEndTime >= endTime) {
                    timeDiff = endTime.getTime() - startTime.getTime() - (endTime.getTimezoneOffset() - startTime.getTimezoneOffset()) * 60000;
                    timeDifferenceEnd = timeDiff / oneHour;
                }
                else {
                    timeDiff = eventEndTime.getTime() - startTime.getTime() - (eventEndTime.getTimezoneOffset() - startTime.getTimezoneOffset()) * 60000;
                    timeDifferenceEnd = timeDiff / oneHour;
                }
                var startIndex = Math.floor(timeDifferenceStart);
                var endIndex = Math.ceil(timeDifferenceEnd - eps);
                var startOffset = 0;
                var endOffset = 0;
                if (this.hourParts !== 1) {
                    startOffset = Math.floor((timeDifferenceStart - startIndex) * this.hourParts);
                    endOffset = Math.floor((endIndex - timeDifferenceEnd) * this.hourParts);
                }
                var displayEvent = {
                    event: event_1,
                    startIndex: startIndex,
                    endIndex: endIndex,
                    startOffset: startOffset,
                    endOffset: endOffset
                };
                try {
                    (rows[startIndex].events);
                }
                catch (err) {
                    console.log(rows, startIndex);
                    console.warn(err);
                }
                var eventSet = rows[startIndex].events;
                if (eventSet) {
                    eventSet.push(displayEvent);
                }
                else {
                    eventSet = [];
                    eventSet.push(displayEvent);
                    rows[startIndex].events = eventSet;
                }
            }
        }
        if (normalEventInRange) {
            var orderedEvents = [];
            for (var hour = 0; hour < 24; hour += 1) {
                if (rows[hour].events) {
                    rows[hour].events.sort(DayViewComponent_1.compareEventByStartOffset);
                    orderedEvents = orderedEvents.concat(rows[hour].events);
                }
            }
            if (orderedEvents.length > 0) {
                this.placeEvents(orderedEvents);
            }
        }
    };
    DayViewComponent.prototype.refreshView = function () {
        var _this = this;
        this.range = this.getRange(this.calendarService.currentDate);
        if (this.inited) {
            var title = this.getTitle();
            this.onTitleChanged.emit(title);
        }
        this.calendarService.populateAdjacentViews(this);
        this.calendarService.rangeChanged(this);
        setTimeout(function () { return _this.updateOffset$.next(); }, 200);
    };
    DayViewComponent.prototype.getTitle = function () {
        var startingDate = this.range.startTime;
        return this.formatTitle(startingDate);
    };
    DayViewComponent.compareEventByStartOffset = function (eventA, eventB) {
        return eventA.startOffset - eventB.startOffset;
    };
    DayViewComponent.prototype.selectDay = function (date) {
        this.calendarService.setCurrentDate(date);
        this.select(date, null);
    };
    DayViewComponent.prototype.select = function (selectedTime, events) {
        var disabled = false;
        if (Object(__WEBPACK_IMPORTED_MODULE_6_date_fns__["isPast"])(selectedTime)) {
            console.log('[dayview:past-date-selected]');
            return;
        }
        if (this.markDisabled) {
            disabled = this.markDisabled(selectedTime);
        }
        if (events == null) {
            return this.onTimeSelected.emit({
                selectedTime: selectedTime,
                events: [],
                disabled: disabled
            });
        }
        else {
            this.onTimeSelected.emit({
                selectedTime: selectedTime,
                events: events.map(function (e) { return e.event; }),
                disabled: disabled
            });
        }
    };
    DayViewComponent.prototype.placeEvents = function (orderedEvents) {
        this.calculatePosition(orderedEvents);
        DayViewComponent_1.calculateWidth(orderedEvents);
    };
    DayViewComponent.prototype.placeAllDayEvents = function (orderedEvents) {
        this.calculatePosition(orderedEvents);
    };
    DayViewComponent.prototype.overlap = function (event1, event2) {
        var earlyEvent = event1, lateEvent = event2;
        if (event1.startIndex > event2.startIndex || (event1.startIndex === event2.startIndex && event1.startOffset > event2.startOffset)) {
            earlyEvent = event2;
            lateEvent = event1;
        }
        if (earlyEvent.endIndex <= lateEvent.startIndex) {
            return false;
        }
        else {
            return !(earlyEvent.endIndex - lateEvent.startIndex === 1 && earlyEvent.endOffset + lateEvent.startOffset > this.hourParts);
        }
    };
    DayViewComponent.prototype.calculatePosition = function (events) {
        var len = events.length, maxColumn = 0, col, isForbidden = new Array(len);
        for (var i = 0; i < len; i += 1) {
            for (col = 0; col < maxColumn; col += 1) {
                isForbidden[col] = false;
            }
            for (var j = 0; j < i; j += 1) {
                if (this.overlap(events[i], events[j])) {
                    isForbidden[events[j].position] = true;
                }
            }
            for (col = 0; col < maxColumn; col += 1) {
                if (!isForbidden[col]) {
                    break;
                }
            }
            if (col < maxColumn) {
                events[i].position = col;
            }
            else {
                events[i].position = maxColumn++;
            }
        }
        if (this.dir === 'rtl') {
            for (var i = 0; i < len; i += 1) {
                events[i].position = maxColumn - 1 - events[i].position;
            }
        }
    };
    DayViewComponent.calculateWidth = function (orderedEvents) {
        var cells = new Array(24);
        // sort by position in descending order, the right most columns should be calculated first
        orderedEvents.sort(function (eventA, eventB) {
            return eventB.position - eventA.position;
        });
        for (var i_1 = 0; i_1 < 24; i_1 += 1) {
            cells[i_1] = {
                calculated: false,
                events: []
            };
        }
        var len = orderedEvents.length;
        for (var i_2 = 0; i_2 < len; i_2 += 1) {
            var event_2 = orderedEvents[i_2];
            var index = event_2.startIndex;
            while (index < event_2.endIndex) {
                cells[index].events.push(event_2);
                index += 1;
            }
        }
        var i = 0;
        while (i < len) {
            var event_3 = orderedEvents[i];
            if (!event_3.overlapNumber) {
                var overlapNumber = event_3.position + 1;
                event_3.overlapNumber = overlapNumber;
                var eventQueue = [event_3];
                while ((event_3 = eventQueue.shift())) {
                    var index = event_3.startIndex;
                    while (index < event_3.endIndex) {
                        if (!cells[index].calculated) {
                            cells[index].calculated = true;
                            if (cells[index].events) {
                                var eventCountInCell = cells[index].events.length;
                                for (var j = 0; j < eventCountInCell; j += 1) {
                                    var currentEventInCell = cells[index].events[j];
                                    if (!currentEventInCell.overlapNumber) {
                                        currentEventInCell.overlapNumber = overlapNumber;
                                        eventQueue.push(currentEventInCell);
                                    }
                                }
                            }
                        }
                        index += 1;
                    }
                }
            }
            i += 1;
        }
    };
    DayViewComponent.prototype.eventSelected = function (event) {
        this.onEventSelected.emit(event);
    };
    DayViewComponent.prototype.setScrollPosition = function (scrollPosition) {
        this.initScrollPosition = scrollPosition;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])('daySlider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* Slides */])
    ], DayViewComponent.prototype, "slider", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["HostBinding"])('class.dayview'),
        __metadata("design:type", Object)
    ], DayViewComponent.prototype, "class", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["TemplateRef"])
    ], DayViewComponent.prototype, "dayviewAllDayEventTemplate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["TemplateRef"])
    ], DayViewComponent.prototype, "dayviewNormalEventTemplate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], DayViewComponent.prototype, "formatHourColumn", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], DayViewComponent.prototype, "formatDayTitle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], DayViewComponent.prototype, "formatWeelViewWeekDayHeader", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], DayViewComponent.prototype, "formatWeekViewDayHeader", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], DayViewComponent.prototype, "allDayLabel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], DayViewComponent.prototype, "hourParts", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], DayViewComponent.prototype, "eventSource", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", Function)
    ], DayViewComponent.prototype, "markDisabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], DayViewComponent.prototype, "locale", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DayViewComponent.prototype, "dateFormatter", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], DayViewComponent.prototype, "dir", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], DayViewComponent.prototype, "scrollToHour", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], DayViewComponent.prototype, "preserveScrollPosition", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], DayViewComponent.prototype, "lockSwipeToPrev", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], DayViewComponent.prototype, "lockSwipes", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], DayViewComponent.prototype, "startingDayWeek", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], DayViewComponent.prototype, "onRangeChanged", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], DayViewComponent.prototype, "onEventSelected", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], DayViewComponent.prototype, "onTimeSelected", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], DayViewComponent.prototype, "onTitleChanged", void 0);
    DayViewComponent = DayViewComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'dayview',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-calendar/calendar/dayview/dayview.html"*/'<ion-slides\n  #daySlider\n  [loop]="true"\n  [dir]="dir"\n  (ionSlideDidChange)="onSlideChanged()">\n  <ion-slide [ngxOffsetContainer]="updateOffset$">\n    <div>\n      <div ngxOffsetSource="offsetHeight" ngxOffsetValueType="px">\n        <weekview-header [data]="views[0]" (onSelect)="selectDay($event)">\n        </weekview-header>\n        <div class="dayview-allday-table">\n          <div class="dayview-allday-label">{{ allDayLabel }}</div>\n          <ion-scroll\n            scrollY="true"\n            zoom="false"\n            class="dayview-allday-content-wrapper">\n            <table class="table dayview-allday-content-table">\n              <tbody>\n                <tr>\n                  <td\n                    *ngIf="0===currentViewIndex"\n                    class="calendar-cell"\n                    [ngClass]="{\'calendar-event-wrap\':views[0].allDayEvents.length>0}"\n                    [ngStyle]="{height: 25*views[0].allDayEvents.length+\'px\'}">\n                    <div\n                      *ngFor="let displayEvent of views[0].allDayEvents; let eventIndex=index"\n                      class="calendar-event"\n                      tappable\n                      (click)="eventSelected(displayEvent.event)"\n                      [ngStyle]="{top: 25*eventIndex+\'px\',width: \'100%\',height:\'25px\'}">\n                      <ng-template [ngTemplateOutlet]="dayviewAllDayEventTemplate" [ngOutletContext]="{displayEvent:displayEvent}">\n                      </ng-template>\n                    </div>\n                  </td>\n                  <td class="calendar-cell" *ngIf="0!==currentViewIndex">\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </ion-scroll>\n        </div>\n      </div>\n      <init-position-scroll\n        *ngIf="0===currentViewIndex"\n        class="dayview-normal-event-container"\n        ngxOffsetTarget="margin-top"\n        [initPosition]="initScrollPosition"\n        [emitEvent]="preserveScrollPosition"\n        (onScroll)="setScrollPosition($event)">\n        <table class="table table-bordered table-fixed dayview-normal-event-table">\n          <tbody>\n            <tr *ngFor="let tm of views[0].rows; let i = index">\n              <td class="calendar-hour-column text-center">\n                {{hourColumnLabels[i]}}\n              </td>\n              <td\n                class="calendar-cell"\n                tappable\n                (click)="select(tm.time, tm.events)">\n                <div\n                  [ngClass]="{\'calendar-event-wrap\': tm.events}"\n                  *ngIf="tm.events">\n                  <div\n                    *ngFor="let displayEvent of tm.events"\n                    class="calendar-event"\n                    tappable\n                    (click)="eventSelected(displayEvent.event)"\n                    [ngStyle]="{\n                      top: (37*displayEvent.startOffset/hourParts)+\'px\',\n                      left: 100/displayEvent.overlapNumber*displayEvent.position+\'%\',\n                      width: 100/displayEvent.overlapNumber+\'%\',\n                      height: 37*(displayEvent.endIndex -displayEvent.startIndex - (displayEvent.endOffset + displayEvent.startOffset)/hourParts)+\'px\'}">\n                    <template [ngTemplateOutlet]="dayviewNormalEventTemplate" [ngOutletContext]="{displayEvent:displayEvent}">\n                    </template>\n                  </div>\n                </div>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </init-position-scroll>\n      <init-position-scroll\n        *ngIf="0!==currentViewIndex"\n        class="dayview-normal-event-container"\n        ngxOffsetTarget="margin-top"\n        [initPosition]="initScrollPosition">\n        <table class="table table-bordered table-fixed dayview-normal-event-table">\n          <tbody>\n            <tr *ngFor="let tm of views[0].rows; let i = index">\n              <td class="calendar-hour-column text-center">\n                {{hourColumnLabels[i]}}\n              </td>\n              <td class="calendar-cell">\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </init-position-scroll>\n    </div>\n  </ion-slide>\n  <ion-slide [ngxOffsetContainer]="updateOffset$">\n    <div>\n      <div ngxOffsetSource="offsetHeight" ngxOffsetValueType="px">\n        <weekview-header [data]="views[1]" (onSelect)="selectDay($event)">\n        </weekview-header>\n        <div class="dayview-allday-table">\n          <div class="dayview-allday-label">{{ allDayLabel }}</div>\n          <ion-scroll\n            scrollY="true"\n            zoom="false"\n            class="dayview-allday-content-wrapper">\n            <table class="table dayview-allday-content-table">\n              <tbody>\n                <tr>\n                  <td\n                    *ngIf="1===currentViewIndex"\n                    class="calendar-cell"\n                    [ngClass]="{\'calendar-event-wrap\':views[1].allDayEvents.length>0}"\n                    [ngStyle]="{height: 25*views[1].allDayEvents.length+\'px\'}">\n                    <div\n                      *ngFor="let displayEvent of views[1].allDayEvents; let eventIndex=index"\n                      class="calendar-event"\n                      tappable\n                      (click)="eventSelected(displayEvent.event)"\n                      [ngStyle]="{top: 25*eventIndex+\'px\',width: \'100%\',height:\'25px\'}">\n                      <ng-template [ngTemplateOutlet]="dayviewAllDayEventTemplate" [ngOutletContext]="{displayEvent:displayEvent}">\n                      </ng-template>\n                    </div>\n                  </td>\n                  <td class="calendar-cell" *ngIf="1!==currentViewIndex">\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </ion-scroll>\n        </div>\n      </div>\n      <init-position-scroll\n        *ngIf="1===currentViewIndex"\n        class="dayview-normal-event-container"\n        ngxOffsetTarget="margin-top"\n        [initPosition]="initScrollPosition"\n        [emitEvent]="preserveScrollPosition"\n        (onScroll)="setScrollPosition($event)">\n        <table class="table table-bordered table-fixed dayview-normal-event-table">\n          <tbody>\n            <tr *ngFor="let tm of views[1].rows; let i = index">\n              <td class="calendar-hour-column text-center">\n                {{hourColumnLabels[i]}}\n              </td>\n              <td\n                class="calendar-cell"\n                tappable\n                (click)="select(tm.time, tm.events)">\n                <div\n                  [ngClass]="{\'calendar-event-wrap\': tm.events}"\n                  *ngIf="tm.events">\n                  <div\n                    *ngFor="let displayEvent of tm.events"\n                    class="calendar-event"\n                    tappable\n                    (click)="eventSelected(displayEvent.event)"\n                    [ngStyle]="{\n                      top: (37*displayEvent.startOffset/hourParts)+\'px\',\n                      left: 100/displayEvent.overlapNumber*displayEvent.position+\'%\',\n                      width: 100/displayEvent.overlapNumber+\'%\',\n                      height: 37*(displayEvent.endIndex -displayEvent.startIndex - (displayEvent.endOffset + displayEvent.startOffset)/hourParts)+\'px\'}">\n                    <template [ngTemplateOutlet]="dayviewNormalEventTemplate" [ngOutletContext]="{displayEvent:displayEvent}">\n                    </template>\n                  </div>\n                </div>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </init-position-scroll>\n      <init-position-scroll\n        *ngIf="1!==currentViewIndex"\n        class="dayview-normal-event-container"\n        ngxOffsetTarget="margin-top"\n        [initPosition]="initScrollPosition">\n        <table class="table table-bordered table-fixed dayview-normal-event-table">\n          <tbody>\n            <tr *ngFor="let tm of views[1].rows; let i = index">\n              <td class="calendar-hour-column text-center">\n                {{hourColumnLabels[i]}}\n              </td>\n              <td class="calendar-cell">\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </init-position-scroll>\n    </div>\n  </ion-slide>\n  <ion-slide [ngxOffsetContainer]="updateOffset$">\n    <div>\n      <div ngxOffsetSource="offsetHeight" ngxOffsetValueType="px">\n        <weekview-header [data]="views[0]" (onSelect)="selectDay($event)">\n        </weekview-header>\n        <div class="dayview-allday-table">\n          <div class="dayview-allday-label">{{ allDayLabel }}</div>\n          <ion-scroll\n            scrollY="true"\n            zoom="false"\n            class="dayview-allday-content-wrapper">\n            <table class="table dayview-allday-content-table">\n              <tbody>\n                <tr>\n                  <td\n                    *ngIf="2===currentViewIndex"\n                    class="calendar-cell"\n                    [ngClass]="{\'calendar-event-wrap\':views[2].allDayEvents.length>0}"\n                    [ngStyle]="{height: 25*views[2].allDayEvents.length+\'px\'}">\n                    <div\n                      *ngFor="let displayEvent of views[2].allDayEvents; let eventIndex=index"\n                      class="calendar-event"\n                      tappable\n                      (click)="eventSelected(displayEvent.event)"\n                      [ngStyle]="{top: 25*eventIndex+\'px\',width: \'100%\',height:\'25px\'}">\n                      <ng-template [ngTemplateOutlet]="dayviewAllDayEventTemplate" [ngOutletContext]="{displayEvent:displayEvent}">\n                      </ng-template>\n                    </div>\n                  </td>\n                  <td class="calendar-cell" *ngIf="2!==currentViewIndex">\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </ion-scroll>\n        </div>\n      </div>\n      <init-position-scroll\n        *ngIf="2===currentViewIndex"\n        class="dayview-normal-event-container"\n        ngxOffsetTarget="margin-top"\n        [initPosition]="initScrollPosition"\n        [emitEvent]="preserveScrollPosition"\n        (onScroll)="setScrollPosition($event)">\n        <table class="table table-bordered table-fixed dayview-normal-event-table">\n          <tbody>\n            <tr *ngFor="let tm of views[2].rows; let i = index">\n              <td class="calendar-hour-column text-center">\n                {{hourColumnLabels[i]}}\n              </td>\n              <td\n                class="calendar-cell"\n                tappable\n                (click)="select(tm.time, tm.events)">\n                <div\n                  [ngClass]="{\'calendar-event-wrap\': tm.events}"\n                  *ngIf="tm.events">\n                  <div\n                    *ngFor="let displayEvent of tm.events"\n                    class="calendar-event"\n                    tappable\n                    (click)="eventSelected(displayEvent.event)"\n                    [ngStyle]="{\n                      top: (37*displayEvent.startOffset/hourParts)+\'px\',\n                      left: 100/displayEvent.overlapNumber*displayEvent.position+\'%\',\n                      width: 100/displayEvent.overlapNumber+\'%\',\n                      height: 37*(displayEvent.endIndex -displayEvent.startIndex - (displayEvent.endOffset + displayEvent.startOffset)/hourParts)+\'px\'}">\n                    <template [ngTemplateOutlet]="dayviewNormalEventTemplate" [ngOutletContext]="{displayEvent:displayEvent}">\n                    </template>\n                  </div>\n                </div>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </init-position-scroll>\n      <init-position-scroll\n        *ngIf="2!==currentViewIndex"\n        class="dayview-normal-event-container"\n        ngxOffsetTarget="margin-top"\n        [initPosition]="initScrollPosition">\n        <table class="table table-bordered table-fixed dayview-normal-event-table">\n          <tbody>\n            <tr *ngFor="let tm of views[2].rows; let i = index">\n              <td class="calendar-hour-column text-center">\n                {{hourColumnLabels[i]}}\n              </td>\n              <td class="calendar-cell">\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </init-position-scroll>\n    </div>\n  </ion-slide>\n</ion-slides>\n'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-calendar/calendar/dayview/dayview.html"*/,
            styles: [
                "\n      .table-fixed {\n        table-layout: fixed;\n      }\n\n      .table {\n        width: 100%;\n        max-width: 100%;\n        background-color: transparent;\n      }\n\n      .table > thead > tr > th, .table > tbody > tr > th, .table > tfoot > tr > th, .table > thead > tr > td,\n      .table > tbody > tr > td, .table > tfoot > tr > td {\n        padding: 8px;\n        line-height: 20px;\n        vertical-align: top;\n      }\n\n      .table > thead > tr > th {\n        vertical-align: bottom;\n        border-bottom: 2px solid #ddd;\n      }\n\n      .table > thead:first-child > tr:first-child > th, .table > thead:first-child > tr:first-child > td {\n        border-top: 0\n      }\n\n      .table > tbody + tbody {\n        border-top: 2px solid #ddd;\n      }\n\n      .table-bordered {\n        border: 1px solid #ddd;\n      }\n\n      .table-bordered > thead > tr > th, .table-bordered > tbody > tr > th, .table-bordered > tfoot > tr > th,\n      .table-bordered > thead > tr > td, .table-bordered > tbody > tr > td, .table-bordered > tfoot > tr > td {\n        border: 1px solid #ddd;\n      }\n\n      .table-bordered > thead > tr > th, .table-bordered > thead > tr > td {\n        border-bottom-width: 2px;\n      }\n\n      .table-striped > tbody > tr:nth-child(odd) > td, .table-striped > tbody > tr:nth-child(odd) > th {\n        background-color: #f9f9f9\n      }\n\n      .calendar-hour-column {\n        width: 50px;\n        white-space: nowrap;\n      }\n\n      .calendar-event-wrap {\n        position: relative;\n        width: 100%;\n        height: 100%;\n      }\n\n      .calendar-event {\n        position: absolute;\n        padding: 2px;\n        cursor: pointer;\n        z-index: 10000;\n      }\n\n      .calendar-cell {\n        padding: 0 !important;\n        height: 37px;\n      }\n\n      .dayview-allday-label {\n        float: left;\n        height: 100%;\n        line-height: 50px;\n        text-align: center;\n        width: 50px;\n      }\n\n      [dir=\"rtl\"] .dayview-allday-label {\n          border-right: 1px solid #ddd;\n          float: right;\n      }\n\n      .dayview-allday-content-wrapper {\n        margin-left: 50px;\n        overflow: hidden;\n        height: 51px;\n      }\n\n      [dir=\"rtl\"] .dayview-allday-content-wrapper {\n        margin-left: 0;\n        margin-right: 50px;\n      }\n\n      .dayview-allday-content-table {\n        min-height: 50px;\n      }\n\n      .dayview-allday-content-table td {\n        border-left: 1px solid #ddd;\n        border-right: 1px solid #ddd;\n      }\n\n      .dayview-allday-table {\n        height: 50px;\n        position: relative;\n        border-bottom: 1px solid #ddd;\n        font-size: 14px;\n      }\n\n      .dayview-normal-event-container {\n        margin-top: 50px;\n        overflow: hidden;\n        left: 0;\n        right: 0;\n        top: 0;\n        bottom: 0;\n        position: absolute;\n        font-size: 14px;\n      }\n\n      .dayview .slide-zoom {\n        height: 100%;\n      }\n\n      .dayview-allday-content-wrapper scroll-content {\n        width: 100%;\n      }\n\n      ::-webkit-scrollbar,\n      *::-webkit-scrollbar {\n        display: none;\n      }\n\n      .table > tbody > tr > td.calendar-hour-column {\n        padding-left: 0;\n        padding-right: 0;\n        vertical-align: middle;\n      }\n\n      @media (max-width: 750px) {\n        .dayview-allday-label, .calendar-hour-column {\n          width: 31px;\n          font-size: 12px;\n        }\n\n        .dayview-allday-label {\n          padding-top: 4px;\n        }\n\n        .table > tbody > tr > td.calendar-hour-column {\n          padding-left: 0;\n          padding-right: 0;\n          vertical-align: middle;\n          line-height: 12px;\n        }\n\n        .dayview-allday-label {\n          line-height: 20px;\n        }\n\n        .dayview-allday-content-wrapper {\n          margin-left: 31px;\n        }\n\n        [dir=\"rtl\"] .dayview-allday-content-wrapper {\n          margin-left: 0;\n          margin-right: 31px;\n        }\n      }\n    ",
                "\n      .dayview-allday-table {\n        border: none;\n      }\n    "
            ],
            encapsulation: __WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__calendar_service__["a" /* CalendarService */], __WEBPACK_IMPORTED_MODULE_2__angular_core__["ElementRef"]])
    ], DayViewComponent);
    return DayViewComponent;
    var DayViewComponent_1;
}());

//# sourceMappingURL=dayview.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CalendarService = (function () {
    function CalendarService() {
        this.currentDateChangedFromParent = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.currentDateChangedFromChildren = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.eventSourceChanged = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.currentDateChangedFromParent$ = this.currentDateChangedFromParent.asObservable();
        this.currentDateChangedFromChildren$ = this.currentDateChangedFromChildren.asObservable();
        this.eventSourceChanged$ = this.eventSourceChanged.asObservable();
    }
    CalendarService.prototype.setCurrentDate = function (val, fromParent) {
        if (fromParent === void 0) { fromParent = false; }
        this._currentDate = val;
        if (fromParent) {
            this.currentDateChangedFromParent.next(val);
        }
        else {
            this.currentDateChangedFromChildren.next(val);
        }
    };
    Object.defineProperty(CalendarService.prototype, "currentDate", {
        get: function () {
            return this._currentDate;
        },
        enumerable: true,
        configurable: true
    });
    CalendarService.prototype.rangeChanged = function (component) {
        if (this.queryMode === 'local') {
            if (component.eventSource && component.onDataLoaded) {
                component.onDataLoaded();
            }
        }
        else if (this.queryMode === 'remote') {
            component.onRangeChanged.emit(component.range);
        }
    };
    CalendarService.prototype.getStep = function (mode) {
        switch (mode) {
            case 'month':
                return {
                    years: 0,
                    months: 1,
                    days: 0
                };
            case 'week':
                return {
                    years: 0,
                    months: 0,
                    days: 7
                };
            case 'day':
                return {
                    years: 0,
                    months: 0,
                    days: 1
                };
        }
    };
    CalendarService.prototype.getAdjacentCalendarDate = function (mode, direction) {
        var step = this.getStep(mode);
        var calculateCalendarDate = new Date(this.currentDate.getTime()), year = calculateCalendarDate.getFullYear() + direction * step.years, month = calculateCalendarDate.getMonth() + direction * step.months, date = calculateCalendarDate.getDate() + direction * step.days;
        calculateCalendarDate.setFullYear(year, month, date);
        if (mode === 'month') {
            var firstDayInNextMonth = new Date(year, month + 1, 1);
            if (firstDayInNextMonth.getTime() <= calculateCalendarDate.getTime()) {
                calculateCalendarDate = new Date(firstDayInNextMonth.getTime() - 24 * 60 * 60 * 1000);
            }
        }
        return calculateCalendarDate;
    };
    CalendarService.prototype.getAdjacentViewStartTime = function (component, direction) {
        var adjacentCalendarDate = this.getAdjacentCalendarDate(component.mode, direction);
        return component.getRange(adjacentCalendarDate).startTime;
    };
    CalendarService.prototype.populateAdjacentViews = function (component) {
        var currentViewStartDate, currentViewData, toUpdateViewIndex, currentViewIndex = component.currentViewIndex;
        if (component.direction === 1) {
            currentViewStartDate = this.getAdjacentViewStartTime(component, 1);
            toUpdateViewIndex = (currentViewIndex + 1) % 3;
            component.views[toUpdateViewIndex] = component.getViewData(currentViewStartDate);
        }
        else if (component.direction === -1) {
            currentViewStartDate = this.getAdjacentViewStartTime(component, -1);
            toUpdateViewIndex = (currentViewIndex + 2) % 3;
            component.views[toUpdateViewIndex] = component.getViewData(currentViewStartDate);
        }
        else {
            if (!component.views) {
                currentViewData = [];
                currentViewStartDate = component.range.startTime;
                currentViewData.push(component.getViewData(currentViewStartDate));
                currentViewStartDate = this.getAdjacentViewStartTime(component, 1);
                currentViewData.push(component.getViewData(currentViewStartDate));
                currentViewStartDate = this.getAdjacentViewStartTime(component, -1);
                currentViewData.push(component.getViewData(currentViewStartDate));
                component.views = currentViewData;
            }
            else {
                currentViewStartDate = component.range.startTime;
                component.views[currentViewIndex] = component.getViewData(currentViewStartDate);
                currentViewStartDate = this.getAdjacentViewStartTime(component, -1);
                toUpdateViewIndex = (currentViewIndex + 2) % 3;
                component.views[toUpdateViewIndex] = component.getViewData(currentViewStartDate);
                currentViewStartDate = this.getAdjacentViewStartTime(component, 1);
                toUpdateViewIndex = (currentViewIndex + 1) % 3;
                component.views[toUpdateViewIndex] = component.getViewData(currentViewStartDate);
            }
        }
    };
    CalendarService.prototype.loadEvents = function () {
        this.eventSourceChanged.next();
    };
    CalendarService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], CalendarService);
    return CalendarService;
}());

//# sourceMappingURL=calendar.service.js.map

/***/ }),

/***/ 760:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__(761);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_pairwise__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_pairwise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_pairwise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_filter__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_concatMap__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_concatMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_concatMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_takeUntil__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_takeUntil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__calendar_service__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__mode_popover_calendar_mode_popover__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__calendar_models__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__models_shared__ = __webpack_require__(108);
/* unused harmony namespace reexport */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};















var CalendarComponent = (function () {
    function CalendarComponent(locale, elementRef, calendarService, popoverCtrl) {
        this.locale = locale;
        this.elementRef = elementRef;
        this.calendarService = calendarService;
        this.popoverCtrl = popoverCtrl;
        this.eventSource = [];
        this.calendarMode = 'month';
        this.formatDay = 'd';
        this.formatDayHeader = 'EEE';
        this.formatDayTitle = 'MMMM dd, yyyy';
        this.formatWeekTitle = 'MMMM yyyy, Week $n';
        this.formatMonthTitle = 'MMMM yyyy';
        this.formatWeekViewDayHeader = 'd';
        this.formatWeelViewWeekDayHeader = 'E';
        this.formatHourColumn = 'j';
        this.formatWeekViewHourColumn = 'H';
        this.showEventDetail = true;
        this.startingDayMonth = 0;
        this.startingDayWeek = 0;
        this.allDayLabel = 'all day';
        this.noEventsLabel = 'No Events';
        this.queryMode = 'local';
        this.step = __WEBPACK_IMPORTED_MODULE_12__calendar_models__["a" /* Step */].Hour;
        this.autoSelect = true;
        this.dir = "";
        this.scrollToHour = 0;
        this.preserveScrollPosition = false;
        this.lockSwipeToPrev = false;
        this.lockSwipes = false;
        this.parentOffsetHeight = 0;
        this.onCurrentDateChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onRangeChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onEventSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onTimeSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onTitleChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onMultiSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onWeekSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.hourParts = 1;
        this.multiSelectTarget = null;
        this.multipleSelectMenuActive$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](false);
        this.acceptSelectedRange$ = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.activateMultiSelect$ = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.parentOffsetHeight = 0;
        this.months = [
            { label: 'Janvier', value: 0 },
            { label: 'Février', value: 1 },
            { label: 'Mars', value: 2 },
            { label: 'Avril', value: 3 },
            { label: 'Mai', value: 4 },
            { label: 'Juin', value: 5 },
            { label: 'Juillet', value: 6 },
            { label: 'Aout', value: 7 },
            { label: 'Septembr', value: 8 },
            { label: 'Octobre', value: 9 },
            { label: 'Novembre', value: 10 },
            { label: 'Décembre', value: 11 }
        ];
        this.years = new Array(30)
            .fill(null)
            .map(function (x, i) { return ({
            label: (2000 + i).toString(),
            value: 2000 + i
        }); });
    }
    Object.defineProperty(CalendarComponent.prototype, "currentDate", {
        get: function () {
            return this._currentDate;
        },
        set: function (val) {
            if (!val) {
                val = new Date();
            }
            this._currentDate = val;
            this.calendarService.setCurrentDate(val, true);
            this.onCurrentDateChanged.emit(this._currentDate);
        },
        enumerable: true,
        configurable: true
    });
    CalendarComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.autoSelect) {
            if (this.autoSelect.toString() === 'false') {
                this.autoSelect = false;
            }
            else {
                this.autoSelect = true;
            }
        }
        this.hourParts = 60 / this.step;
        this.calendarService.queryMode = this.queryMode;
        this.currentDate = new Date();
        this.currentMonth = this.currentDate.getMonth();
        this.currentYear = this.currentDate.getFullYear();
        this.currentDateChangedFromChildrenSubscription = this.calendarService.currentDateChangedFromChildren$.subscribe(function (currentDate) {
            _this._currentDate = currentDate;
            _this.onCurrentDateChanged.emit(currentDate);
        });
    };
    CalendarComponent.prototype.ngAfterViewInit = function () {
        this.initMonthViewSwipe();
    };
    CalendarComponent.prototype.ngOnDestroy = function () {
        if (this.currentDateChangedFromChildrenSubscription) {
            this.currentDateChangedFromChildrenSubscription.unsubscribe();
            this.currentDateChangedFromChildrenSubscription = null;
        }
    };
    CalendarComponent.prototype.initMonthViewSwipe = function () {
        var _this = this;
        var extractY = function (event) { return event.touches[0].clientY; };
        var wrapper = this.scrollableWrapper.nativeElement;
        var height = wrapper.clientHeight;
        var touchStart$ = __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].fromEvent(wrapper, 'touchstart');
        var touchMove$ = __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].fromEvent(wrapper, 'touchmove');
        var touchEnd$ = __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].fromEvent(wrapper, 'touchend');
        this.parentOffsetHeight = this.toolbar.nativeElement.offsetHeight;
        this.focusOffset$ = touchStart$
            .concatMap(function (start) { return touchMove$
            .pairwise()
            .map(function (events) { return events
            .map(extractY)
            .map(function (y) { return y - _this.parentOffsetHeight; }); })
            .map(function (_a) {
            var a = _a[0], b = _a[1];
            return height - b;
        })
            .takeUntil(touchEnd$); });
    };
    /** Handler for the case when child component requests multi-select mode */
    CalendarComponent.prototype.handleMultiSelect = function (from) {
        this.multipleSelectMenuActive$.next(true);
        this.multiSelectTarget = from;
    };
    /** Proxy output from child component to the parent */
    CalendarComponent.prototype.handleMultiSelectRange = function (range) {
        this.onMultiSelect.emit(range);
    };
    /** Proxy output from child component to the parent */
    CalendarComponent.prototype.handleWeekSelectRange = function (range) {
        this.onWeekSelect.emit(range);
    };
    CalendarComponent.prototype.discardSelectedRange = function () {
        this.multipleSelectMenuActive$.next(false);
        this.acceptSelectedRange$.emit({ isAccepted: false });
    };
    CalendarComponent.prototype.acceptSelectedRange = function () {
        this.multipleSelectMenuActive$.next(false);
        this.acceptSelectedRange$.emit({
            isAccepted: true,
            target: this.multiSelectTarget
        });
        this.multiSelectTarget = null;
    };
    CalendarComponent.prototype.handleMonthChange = function (event) {
        var date = new Date(this.currentDate);
        date.setMonth(event);
        this.currentDate = date;
    };
    CalendarComponent.prototype.handleYearChange = function (event) {
        var date = new Date(this.currentDate);
        date.setFullYear(event);
        this.currentDate = date;
    };
    CalendarComponent.prototype.handleCurrentDateChanged = function ($event) {
        this.calendarService.setCurrentDate($event);
    };
    CalendarComponent.prototype.presentPopover = function (event) {
        var _this = this;
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_11__mode_popover_calendar_mode_popover__["a" /* CalendarModePopoverPage */], {
            menuTemplate: this.menuTemplate
        });
        popover.present({
            ev: event
        });
        popover.onDidDismiss(function (data) {
            if (data != null) {
                switch (data.mode) {
                    case 'month':
                    case 'week':
                    case 'day': {
                        _this.calendarMode = data.mode;
                        if (_this.calendarMode === 'month') {
                            setTimeout(function () { return _this.initMonthViewSwipe(); }, 200);
                        }
                        break;
                    }
                    case 'today':
                        {
                            return _this.calendarService.setCurrentDate(new Date(Date.now()), true);
                        }
                        ;
                    case 'weekSelect': {
                        return _this.activateMultiSelect$.emit(__WEBPACK_IMPORTED_MODULE_13__models_shared__["a" /* MultiSelectTarget */].Week);
                    }
                    case 'multiSelect': {
                        return _this.activateMultiSelect$.emit(__WEBPACK_IMPORTED_MODULE_13__models_shared__["a" /* MultiSelectTarget */].CustomRange);
                    }
                }
            }
        });
    };
    CalendarComponent.prototype.rangeChanged = function (range) {
        this.onRangeChanged.emit(range);
    };
    CalendarComponent.prototype.eventSelected = function (event) {
        this.onEventSelected.emit(event);
    };
    CalendarComponent.prototype.timeSelected = function (timeSelected) {
        this.onTimeSelected.emit(timeSelected);
    };
    CalendarComponent.prototype.titleChanged = function (title) {
        this.onTitleChanged.emit(title);
    };
    CalendarComponent.prototype.loadEvents = function () {
        this.calendarService.loadEvents();
    };
    CalendarComponent.prototype.handleMonthViewScroll = function (event) {
        console.log(event);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Date),
        __metadata("design:paramtypes", [Date])
    ], CalendarComponent.prototype, "currentDate", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('currentDateStream'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"])
    ], CalendarComponent.prototype, "currentDateStream", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], CalendarComponent.prototype, "eventSource", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CalendarComponent.prototype, "calendarMode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CalendarComponent.prototype, "formatDay", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CalendarComponent.prototype, "formatDayHeader", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CalendarComponent.prototype, "formatDayTitle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CalendarComponent.prototype, "formatWeekTitle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CalendarComponent.prototype, "formatMonthTitle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CalendarComponent.prototype, "formatWeekViewDayHeader", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CalendarComponent.prototype, "formatWeelViewWeekDayHeader", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CalendarComponent.prototype, "formatHourColumn", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CalendarComponent.prototype, "formatWeekViewHourColumn", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], CalendarComponent.prototype, "showEventDetail", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], CalendarComponent.prototype, "startingDayMonth", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], CalendarComponent.prototype, "startingDayWeek", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CalendarComponent.prototype, "allDayLabel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CalendarComponent.prototype, "noEventsLabel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CalendarComponent.prototype, "queryMode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], CalendarComponent.prototype, "step", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], CalendarComponent.prototype, "autoSelect", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Function)
    ], CalendarComponent.prototype, "markDisabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], CalendarComponent.prototype, "menuTemplate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], CalendarComponent.prototype, "monthviewDisplayEventTemplate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], CalendarComponent.prototype, "monthviewInactiveDisplayEventTemplate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], CalendarComponent.prototype, "monthviewEventDetailTemplate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], CalendarComponent.prototype, "weekviewAllDayEventTemplate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], CalendarComponent.prototype, "weekviewNormalEventTemplate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], CalendarComponent.prototype, "dayviewAllDayEventTemplate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], CalendarComponent.prototype, "dayviewNormalEventTemplate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CalendarComponent.prototype, "dateFormatter", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CalendarComponent.prototype, "dir", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], CalendarComponent.prototype, "scrollToHour", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], CalendarComponent.prototype, "preserveScrollPosition", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], CalendarComponent.prototype, "lockSwipeToPrev", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], CalendarComponent.prototype, "lockSwipes", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], CalendarComponent.prototype, "parentOffsetHeight", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], CalendarComponent.prototype, "onCurrentDateChanged", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], CalendarComponent.prototype, "onRangeChanged", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], CalendarComponent.prototype, "onEventSelected", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], CalendarComponent.prototype, "onTimeSelected", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], CalendarComponent.prototype, "onTitleChanged", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], CalendarComponent.prototype, "onMultiSelect", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], CalendarComponent.prototype, "onWeekSelect", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('monthViewHost'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], CalendarComponent.prototype, "monthViewHost", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('scrollableWrapper'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], CalendarComponent.prototype, "scrollableWrapper", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('calendarToolbar'),
        __metadata("design:type", Object)
    ], CalendarComponent.prototype, "toolbar", void 0);
    CalendarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'calendar',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-calendar/calendar/calendar.html"*/'<template\n  #monthviewDefaultDisplayEventTemplate\n  let-view="view"\n  let-row="row"\n  let-col="col">\n  {{view.dates[row*7+col].label}}\n  <div *ngIf="view.dates[row*7+col].events.length > 0">•</div>\n</template>\n<template\n  #monthviewDefaultEventDetailTemplate\n  let-showEventDetail="showEventDetail"\n  let-selectedDate="selectedDate"\n  let-noEventsLabel="noEventsLabel">\n  <ion-list\n    *ngIf="showEventDetail"\n    overflow-scroll="false"\n    class="event-detail-container"\n    has-bouncing="false">\n    <ion-item\n      *ngFor="let event of selectedDate?.events"\n      (click)="eventSelected(event)">\n      <span *ngIf="!event.allDay" class="monthview-eventdetail-timecolumn">\n        {{event.startTime|date: \'HH:mm\'}}\n        -\n        {{event.endTime|date: \'HH:mm\'}}\n      </span>\n      <span *ngIf="event.allDay" class="monthview-eventdetail-timecolumn">\n        {{allDayLabel}}\n      </span>\n      <span class="event-detail">  |  {{event.title}}</span>\n    </ion-item>\n    <ion-item *ngIf="selectedDate?.events.length==0">\n      <div class="no-events-label">{{noEventsLabel}}</div>\n    </ion-item>\n  </ion-list>\n</template>\n<template #defaultAllDayEventTemplate let-displayEvent="displayEvent">\n  <div class="calendar-event-inner">{{displayEvent.event.title}}</div>\n</template>\n<template #defaultNormalEventTemplate let-displayEvent="displayEvent">\n  <div class="calendar-event-inner">{{displayEvent.event.title}}</div>\n</template>\n\n<div [ngSwitch]="multipleSelectMenuActive$ | async" #calendarToolbar>\n  <ion-toolbar *ngSwitchCase="false" color="primary">\n    <ion-title [ngSwitch]="calendarMode" class="month-view-toolbar-title">\n      <div *ngSwitchCase="\'month\'" class="month-view-select-container">\n        <ion-select\n          [selectOptions]="{ cssClass: \'calendar-header-select-popover\' }"\n          [ngModel]="currentMonth"\n          (ngModelChange)="handleMonthChange($event)"\n          class="month-view-date-select"\n          interface="popover"\n          color="white">\n          <ion-option *ngFor="let option of months" [value]="option.value">\n            {{ option.label }}\n          </ion-option>\n        </ion-select>\n        <ion-select\n          [selectOptions]="{ cssClass: \'calendar-header-select-popover\' }"\n          [ngModel]="currentYear"\n          (ngModelChange)="handleYearChange($event)"\n          class="month-view-date-select"\n          interface="popover"\n          color="white">\n          <ion-option *ngFor="let option of years" [value]="option.value">\n            {{ option.label }}\n          </ion-option>\n        </ion-select>\n      </div>\n      <div *ngSwitchCase="\'week\'" text-center>\n        <h3 class="week-view-title" style="margin-bottom: 0">{{ currentDate | date: \'MMMM y\' }}</h3>\n        <div>semaine {{ currentDate | dateFormat: \'W\' }}</div>\n      </div>\n      <div *ngSwitchCase="\'day\'" text-center>\n        <div>{{ currentDate | date: \'MMMM d y\' }}</div>\n      </div>\n    </ion-title>\n  \n    <ion-buttons class="menu-toggle-wrapper" end>\n      <button (click)="presentPopover($event)" ion-button clear icon-only>\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-toolbar *ngSwitchCase="true" color="primary">\n    <ion-buttons end>\n      <button\n        (click)="acceptSelectedRange()"\n        color="white"\n        ion-button\n        clear icon-only>\n        <ion-icon name="checkmark"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>\n      Select a range\n    </ion-title>\n    <ion-buttons start>\n      <button\n        (click)="discardSelectedRange()"\n        color="white"\n        ion-button\n        clear\n        icon-only>\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</div>\n\n<div class="calendar-wrapper">\n  <div [ngSwitch]="calendarMode" class="{{calendarMode}}view-container">\n    <div #scrollableWrapper>\n      <div *ngSwitchCase="\'month\'">\n        <div class="scrollable-wrapper">\n          <div\n            class="scrollable-area"\n            id="monthViewHost"\n            #monthViewHost>\n            <monthview\n              [formatDay]="formatDay"\n              [formatDayHeader]="formatDayHeader"\n              [formatMonthTitle]="formatMonthTitle"\n              [startingDayMonth]="startingDayMonth"\n              [showEventDetail]="false"\n              [noEventsLabel]="noEventsLabel"\n              [autoSelect]="autoSelect"\n              [eventSource]="eventSource"\n              [markDisabled]="markDisabled"\n              [monthviewDisplayEventTemplate]="monthviewDisplayEventTemplate||monthviewDefaultDisplayEventTemplate"\n              [monthviewInactiveDisplayEventTemplate]="monthviewInactiveDisplayEventTemplate||monthviewDefaultDisplayEventTemplate"\n              [monthviewEventDetailTemplate]="monthviewEventDetailTemplate||monthviewDefaultEventDetailTemplate"\n              [locale]="locale"\n              [dateFormatter]="dateFormatter"\n              [dir]="dir"\n              [lockSwipeToPrev]="lockSwipeToPrev"\n              [lockSwipes]="lockSwipes"\n              [focusOffset]="focusOffset$"\n              (onRangeChanged)="rangeChanged($event)"\n              (onEventSelected)="eventSelected($event)"\n              (onTimeSelected)="timeSelected($event)"\n              (onTitleChanged)="titleChanged($event)"\n              (scoll)="handleMonthViewScroll($event)"\n              (onMultiSelectActive)="handleMultiSelect($event)"\n              (onMultiSelect)="handleMultiSelectRange($event)"\n              (onWeekSelect)="handleWeekSelectRange($event)"\n              [acceptSelectedRange]="acceptSelectedRange$.asObservable()"\n              [activateMultiSelect]="activateMultiSelect$.asObservable()">\n            </monthview>\n          </div>\n        </div>\n      </div>\n    </div>\n    <weekview\n      *ngSwitchCase="\'week\'"\n      [currentDate]="currentDateStream | async"\n      [formatWeekTitle]="formatWeekTitle"\n      [formatWeekViewDayHeader]="formatWeekViewDayHeader"\n      [formatWeelViewWeekDayHeader]="formatWeelViewWeekDayHeader"\n      [formatHourColumn]="formatHourColumn"\n      [formatWeekViewHourColumn]="formatWeekViewHourColumn"\n      [startingDayWeek]="startingDayWeek"\n      [allDayLabel]="allDayLabel"\n      [hourParts]="hourParts"\n      [eventSource]="eventSource"\n      [markDisabled]="markDisabled"\n      [weekviewAllDayEventTemplate]="weekviewAllDayEventTemplate||defaultAllDayEventTemplate"\n      [weekviewNormalEventTemplate]="weekviewNormalEventTemplate||defaultNormalEventTemplate"\n      [locale]="locale"\n      [dateFormatter]="dateFormatter"\n      [dir]="dir"\n      [scrollToHour]="scrollToHour"\n      [preserveScrollPosition]="preserveScrollPosition"\n      [lockSwipeToPrev]="lockSwipeToPrev"\n      [lockSwipes]="lockSwipes"\n      (onRangeChanged)="rangeChanged($event)"\n      (onEventSelected)="eventSelected($event)"\n      (onTimeSelected)="timeSelected($event)"\n      (onTitleChanged)="titleChanged($event)">\n    </weekview>\n    <dayview\n      *ngSwitchCase="\'day\'"\n      [formatDayTitle]="formatDayTitle"\n      [formatHourColumn]="formatHourColumn"\n      [formatWeekViewDayHeader]="formatWeekViewDayHeader"\n      [formatWeelViewWeekDayHeader]="formatWeelViewWeekDayHeader"\n      [startingDayWeek]="startingDayWeek"\n      [allDayLabel]="allDayLabel"\n      [hourParts]="hourParts"\n      [eventSource]="eventSource"\n      [markDisabled]="markDisabled"\n      [dayviewAllDayEventTemplate]="dayviewAllDayEventTemplate||defaultAllDayEventTemplate"\n      [dayviewNormalEventTemplate]="dayviewNormalEventTemplate||defaultNormalEventTemplate"\n      [locale]="locale"\n      [dateFormatter]="dateFormatter"\n      [dir]="dir"\n      [scrollToHour]="scrollToHour"\n      [preserveScrollPosition]="preserveScrollPosition"\n      [lockSwipeToPrev]="lockSwipeToPrev"\n      [lockSwipes]="lockSwipes"\n      (onRangeChanged)="rangeChanged($event)"\n      (onEventSelected)="eventSelected($event)"\n      (onTimeSelected)="timeSelected($event)"\n      (onTitleChanged)="titleChanged($event)">\n    </dayview>\n  </div>\n</div>'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-calendar/calendar/calendar.html"*/,
            styles: [
                "\n    .calendar-wrapper,\n    .weekview-container,\n    .dayview-container {\n      height: 100%;\n    }\n\n    .menu-toggle-wrapper {\n      position: absolute;\n      right: 4px;\n      top: 50%;\n      transform: translateY(-50%);\n    }\n\n    .event-detail-container {\n      border-top: 2px darkgrey solid;\n    }\n\n    .no-events-label {\n      font-weight: bold;\n      color: darkgrey;\n      text-align: center;\n    }\n\n    .event-detail {\n      cursor: pointer;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n    }\n\n    .week-view-title {\n      margin-top: 0;\n    }\n\n    .monthview-eventdetail-timecolumn {\n      width: 110px;\n      overflow: hidden;\n    }\n\n    .calendar-event-inner {\n      overflow: hidden;\n      background-color: rgba(150, 225, 194, .5);\n      border-radius: 6px;\n      color: white;\n      height: 100%;\n      width: 100%;\n      padding: 8px 2px;\n      line-height: 15px;\n      font-weight: 700;\n    }\n\n    @media (max-width: 750px) {\n      .calendar-event-inner {\n        font-size: 24px;\n      }\n      weekview .calendar-event-inner {\n        font-size: 14px;\n      }\n    }\n  ",
                "\n    .month-view-select-container {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n    .month-view-toolbar-title.title-ios {\n      padding: 0 60px 1px;\n    }\n    .month-view-date-select {\n      position: relative;\n      // margin: auto;\n      color: #fff;\n      font-size: 1.8rem;\n      font-weight: 500;\n      vertical-align: middle;\n    }\n\n    /deep/ .month-view-date-select .select-icon {\n      height: 2.3rem;\n    }\n\n    /deep/ .month-view-date-select .select-icon .select-icon-inner {\n      color: #fff;\n    }\n    .month-view-date-select.select-ios {\n      max-width: 90%;\n    }\n    .month-view-date-select .select-text {\n      text-align: center;\n    }\n  "
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__calendar_service__["a" /* CalendarService */]]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["LOCALE_ID"])),
        __metadata("design:paramtypes", [String, __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_10__calendar_service__["a" /* CalendarService */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["p" /* PopoverController */]])
    ], CalendarComponent);
    return CalendarComponent;
}());

//# sourceMappingURL=calendar.js.map

/***/ }),

/***/ 763:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return initPositionScrollComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var initPositionScrollComponent = (function (_super) {
    __extends(initPositionScrollComponent, _super);
    function initPositionScrollComponent(el) {
        var _this = _super.call(this) || this;
        _this.onScroll = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        _this.listenerAttached = false;
        _this.element = el;
        return _this;
    }
    initPositionScrollComponent.prototype.ngOnChanges = function (changes) {
        var initPosition = changes['initPosition'];
        if (initPosition && initPosition.currentValue !== undefined && this.scrollContent) {
            this.scrollContent.scrollTop = initPosition.currentValue;
        }
    };
    initPositionScrollComponent.prototype.ngAfterViewInit = function () {
        var scrollContent = this.scrollContent = this.element.nativeElement.querySelector('.scroll-content');
        if (this.initPosition !== undefined) {
            scrollContent.scrollTop = this.initPosition;
        }
        if (this.emitEvent && !this.listenerAttached) {
            var onScroll_1 = this.onScroll;
            this.handler = function () {
                onScroll_1.emit(scrollContent.scrollTop);
            };
            this.listenerAttached = true;
            scrollContent.addEventListener('scroll', this.handler);
        }
    };
    initPositionScrollComponent.prototype.ngOnDestroy = function () {
        if (this.listenerAttached) {
            this.scrollContent.removeEventListener('scroll', this.handler);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], initPositionScrollComponent.prototype, "initPosition", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], initPositionScrollComponent.prototype, "emitEvent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], initPositionScrollComponent.prototype, "onScroll", void 0);
    initPositionScrollComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'init-position-scroll',
            template: "\n        <ion-scroll scrollY=\"true\" zoom=\"false\" style=\"height:100%\">\n            <ng-content></ng-content>\n        </ion-scroll>\n    "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"]])
    ], initPositionScrollComponent);
    return initPositionScrollComponent;
}(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["q" /* Scroll */]));

//# sourceMappingURL=init-position-scroll.js.map

/***/ }),

/***/ 764:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pipes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__date_format_pipe__ = __webpack_require__(765);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hasEvents_pipe__ = __webpack_require__(766);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mark_current_pipe__ = __webpack_require__(767);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__trace_pipe__ = __webpack_require__(768);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__is_past_pipe__ = __webpack_require__(769);





var Pipes = [
    __WEBPACK_IMPORTED_MODULE_0__date_format_pipe__["a" /* DateFormatPipe */],
    __WEBPACK_IMPORTED_MODULE_1__hasEvents_pipe__["a" /* HasEventsPipe */],
    __WEBPACK_IMPORTED_MODULE_4__is_past_pipe__["a" /* IsPastPipe */],
    __WEBPACK_IMPORTED_MODULE_2__mark_current_pipe__["a" /* MarkCurrentPipe */],
    __WEBPACK_IMPORTED_MODULE_3__trace_pipe__["a" /* TracePipe */]
];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 765:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateFormatPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_date_fns__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DateFormatPipe = (function () {
    function DateFormatPipe() {
    }
    DateFormatPipe.prototype.transform = function (date, format) {
        return Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["format"])(date, format);
    };
    DateFormatPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'dateFormat'
        })
    ], DateFormatPipe);
    return DateFormatPipe;
}());

//# sourceMappingURL=date-format.pipe.js.map

/***/ }),

/***/ 766:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HasEventsPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HasEventsPipe = (function () {
    function HasEventsPipe() {
    }
    HasEventsPipe.prototype.transform = function (week, dayIndex /*, weekIndex: number*/) {
        if (Array.isArray(week.rows[0])) {
            return week.rows.some(function (row) { return row[dayIndex].events.length > 0; });
        }
        return week.rows[dayIndex].events.length > 0;
    };
    HasEventsPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'hasEvents',
            pure: true
        })
    ], HasEventsPipe);
    return HasEventsPipe;
}());

//# sourceMappingURL=hasEvents.pipe.js.map

/***/ }),

/***/ 767:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarkCurrentPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__calendar_service__ = __webpack_require__(76);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MarkCurrentPipe = (function () {
    function MarkCurrentPipe(calendarService) {
        this.calendarService = calendarService;
    }
    MarkCurrentPipe.prototype.transform = function (week, currentDate) {
        var _this = this;
        return week.map(function (day) { return Object.assign({}, day, {
            isCurrent: day.date.toISOString().substring(0, 10) === _this.calendarService.currentDate.toISOString().substring(0, 10)
        }); });
    };
    MarkCurrentPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'markCurrent'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__calendar_service__["a" /* CalendarService */]])
    ], MarkCurrentPipe);
    return MarkCurrentPipe;
}());

//# sourceMappingURL=mark-current.pipe.js.map

/***/ }),

/***/ 768:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TracePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TracePipe = (function () {
    function TracePipe() {
    }
    TracePipe.prototype.transform = function (value) {
        console.log('[trace-pipe]', JSON.stringify(value, null, 2));
        return '';
    };
    TracePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'trace'
        })
    ], TracePipe);
    return TracePipe;
}());

//# sourceMappingURL=trace.pipe.js.map

/***/ }),

/***/ 769:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IsPastPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_date_fns__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var IsPastPipe = (function () {
    function IsPastPipe() {
    }
    IsPastPipe.prototype.transform = function (row) {
        return Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["isPast"])(row.date);
    };
    IsPastPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'isPast'
        })
    ], IsPastPipe);
    return IsPastPipe;
}());

//# sourceMappingURL=is-past.pipe.js.map

/***/ }),

/***/ 770:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmartCalendar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_voj_popover_page__ = __webpack_require__(346);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SmartCalendar = (function () {
    function SmartCalendar(elRef, popoverCtrl, alertCtrl) {
        this.alertCtrl = alertCtrl;
        this.calendarCollapse = false;
        this.calendar = {
            mode: 'month',
            currentDate: new Date()
        };
        this.eventsSource = [];
        this.elRef = elRef;
        this.popoverCtrl = popoverCtrl;
        this.currentDate$ = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.parentOffsetHeight = 0;
        this.months = [
            { label: 'Janvier', value: 0 },
            { label: 'Février', value: 1 },
            { label: 'Mars', value: 2 },
            { label: 'Avril', value: 3 },
            { label: 'Mai', value: 4 },
            { label: 'Juin', value: 5 },
            { label: 'Juillet', value: 6 },
            { label: 'Aout', value: 7 },
            { label: 'Septembr', value: 8 },
            { label: 'Octobre', value: 9 },
            { label: 'Novembre', value: 10 },
            { label: 'Décembre', value: 11 }
        ];
        this.eventSource = [];
    }
    Object.defineProperty(SmartCalendar.prototype, "selectPopoverOptions", {
        get: function () {
            return {
                cssClass: 'calendar-header-select-popover'
            };
        },
        enumerable: true,
        configurable: true
    });
    SmartCalendar.prototype.handleMonthChange = function (event) {
        this.currentDate.setMonth(event);
        this.currentDate$.emit(this.currentDate);
    };
    SmartCalendar.prototype.handleCurrentDateChanged = function ($event) {
        this.currentDate = $event;
    };
    SmartCalendar.prototype.handleMultiSelectRange = function ($event) {
        this.alertCtrl.create({
            title: 'MultiSelect range',
            message: "<pre>" + JSON.stringify($event, null, 2) + "</pre>",
            buttons: ['Ok']
        }).present();
    };
    SmartCalendar.prototype.handleWeekSelect = function ($event) {
        this.alertCtrl.create({
            title: 'Week range',
            message: "<pre>" + JSON.stringify($event, null, 2) + "</pre>",
            buttons: ['Ok']
        }).present();
    };
    SmartCalendar.prototype.ngOnInit = function () {
        this.currentDate = new Date();
        this.currentMonth = this.currentDate.getMonth();
        this.eventSource = this.data.slots || [];
    };
    SmartCalendar.prototype.ngAfterViewInit = function () {
        this.parentOffsetHeight = document
            .querySelector('.container-calendar')
            .offsetTop;
    };
    SmartCalendar.prototype.presentPopover = function (myEvent) {
        var _this = this;
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_3__components_voj_popover_page__["a" /* PopoverPage */]);
        popover.onDidDismiss(function (data) {
            if (data != null) {
                _this.calendar.mode = data.mode;
            }
        });
        popover.present({
            ev: myEvent
        });
    };
    SmartCalendar.prototype.onViewTitleChanged = function (title) {
        this.viewTitle = title;
    };
    SmartCalendar.prototype.onEventSelected = function (event) {
        console.log(event);
        console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
    };
    SmartCalendar.prototype.changeMode = function (mode) {
        this.calendar.mode = mode;
    };
    SmartCalendar.prototype.today = function () {
        this.calendar.currentDate = new Date();
    };
    SmartCalendar.prototype.onTimeSelected = function (ev) {
        // console.log(ev);
        if (this.calendar.mode === 'month') {
            return;
        }
        // let selectedTime: any = new Date(ev.selectedTime);
        var selected = Date.parse(ev.selectedTime);
        var event = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.find(ev.events, function (event) {
            var timeEvent = Date.parse(event['startTime']);
            return timeEvent == selected;
        });
        console.log(event);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('data'),
        __metadata("design:type", Object)
    ], SmartCalendar.prototype, "data", void 0);
    SmartCalendar = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'smart-calendar',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-calendar/smart-calendar/smart-calendar.html"*/'<ng-template\n	let-changeViewHandler="changeViewHandler"\n	#customMenuTemplate>\n	<ion-list>\n		<ion-item-group>\n			<button (click)="changeViewHandler(\'month\')" ion-item>\n				Month view\n			</button>\n			<button (click)="changeViewHandler(\'week\')" ion-item>\n				Week view\n			</button>\n			<button (click)="changeViewHandler(\'day\')" ion-item>\n				Day view\n			</button>\n		</ion-item-group>\n		<ion-item-group>\n			<button (click)="changeViewHandler(\'today\')" ion-item>\n				Today\n			</button>\n			<button (click)="changeViewHandler(\'weekSelect\')" ion-item>\n				Select week\n			</button>\n			<button (click)="changeViewHandler(\'multiSelect\')" ion-item>\n				Multiple selection\n			</button>\n		</ion-item-group>\n	</ion-list>\n</ng-template>\n\n<div class="container-calendar">\n	<calendar\n		[eventSource]="events"\n		[startingDayWeek]="1"\n		[startingDayMonth]="1"\n		[menuTemplate]="customMenuTemplate"\n		(onMultiSelect)="handleMultiSelectRange($event)"\n		(onWeekSelect)="handleWeekSelect($event)"\n		locale="fr-FR"\n		formatDayHeader="E">\n	</calendar>\n</div>\n\n'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-calendar/smart-calendar/smart-calendar.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */]])
    ], SmartCalendar);
    return SmartCalendar;
}());

//# sourceMappingURL=smart-calendar.js.map

/***/ }),

/***/ 771:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DesktopCalendar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_date_fns__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var colors = {
    yellow: {
        primary: '#e5bd85',
    },
    green: {
        primary: '#14baa6',
    }
};
/**
 * Generated class for the SmartCalendar component.
 *
 */
var DesktopCalendar = (function () {
    function DesktopCalendar(modal, locale) {
        var _this = this;
        this.modal = modal;
        this.view = 'month';
        this.viewDate = new Date();
        this.actions = [{
                label: '<i class="fa fa-fw fa-pencil"></i>',
                onClick: function (_a) {
                    var event = _a.event;
                    _this.handleEvent('Edited', event);
                }
            }, {
                label: '<i class="fa fa-fw fa-times"></i>',
                onClick: function (_a) {
                    var event = _a.event;
                    _this.events = _this.events.filter(function (iEvent) { return iEvent !== event; });
                    _this.handleEvent('Deleted', event);
                }
            }];
        this.refresh = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.events = [{
                start: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["subDays"])(Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["startOfDay"])(new Date()), 1),
                end: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["addDays"])(new Date(), 1),
                title: 'A 3 day event',
                color: colors.yellow,
                actions: this.actions
            }, {
                start: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["startOfDay"])(new Date()),
                title: 'An event with no end date',
                color: colors.green,
                actions: this.actions
            }, {
                start: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["subDays"])(Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["endOfMonth"])(new Date()), 3),
                end: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["addDays"])(Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["endOfMonth"])(new Date()), 3),
                title: 'A long event that spans 2 months',
                color: colors.green
            }, {
                start: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["addHours"])(Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["startOfDay"])(new Date()), 2),
                end: new Date(),
                title: 'A draggable and resizable event',
                color: colors.green,
                actions: this.actions,
                resizable: {
                    beforeStart: true,
                    afterEnd: true
                },
                draggable: true
            }];
        this.activeDayIsOpen = true;
    }
    DesktopCalendar.prototype.dayClicked = function (_a) {
        var date = _a.date, events = _a.events;
        // if (isSameMonth(date, this.viewDate)) {
        // 	if (
        // 		(isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        // 		events.length === 0
        // 	) {
        // 		this.activeDayIsOpen = false;
        // 	} else {
        // 		this.activeDayIsOpen = true;
        // 		this.viewDate = date;
        // 	}
        // }
        console.log(date);
    };
    DesktopCalendar.prototype.eventTimesChanged = function (_a) {
        var event = _a.event, newStart = _a.newStart, newEnd = _a.newEnd;
        event.start = newStart;
        event.end = newEnd;
        this.handleEvent('Dropped or resized', event);
        this.refresh.next();
    };
    DesktopCalendar.prototype.handleEvent = function (action, event) {
        this.modalData = { event: event, action: action };
        this.modal.open(this.modalContent, { size: 'lg' });
    };
    DesktopCalendar.prototype.addEvent = function () {
        this.events.push({
            title: 'New event',
            start: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["startOfDay"])(new Date()),
            end: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["endOfDay"])(new Date()),
            color: colors.red,
            draggable: true,
            resizable: {
                beforeStart: true,
                afterEnd: true
            }
        });
        this.refresh.next();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalContent'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], DesktopCalendar.prototype, "modalContent", void 0);
    DesktopCalendar = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'desktop-calendar',
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-calendar/desktop-calendar/desktop-calendar.html"*/'<!--<ng-template #modalContent let-close="close">-->\n<!--<div class="modal-header">-->\n<!--<h5 class="modal-title">Event action occurred</h5>-->\n<!--<button type="button" class="close" (click)="close()">-->\n<!--<span aria-hidden="true">&times;</span>-->\n<!--</button>-->\n<!--</div>-->\n<!--<div class="modal-body">-->\n<!--<div>-->\n<!--Action:-->\n<!--<pre>{{ modalData?.action }}</pre>-->\n<!--</div>-->\n<!--<div>-->\n<!--Event:-->\n<!--<pre>{{ modalData?.event | json }}</pre>-->\n<!--</div>-->\n<!--</div>-->\n<!--<div class="modal-footer">-->\n<!--<button type="button" class="btn btn-secondary" (click)="close()">OK</button>-->\n<!--</div>-->\n<!--</ng-template>-->\n<div class="desktop-calendar-container">\n\n	<!--<div class="col-md-4">-->\n	<!--<div class="btn-group">-->\n	<!--<div-->\n	<!--class="btn btn-primary"-->\n	<!--mwlCalendarPreviousView-->\n	<!--[view]="view"-->\n	<!--[(viewDate)]="viewDate">-->\n	<!--Previous-->\n	<!--</div>-->\n	<!--<div-->\n	<!--class="btn btn-secondary"-->\n	<!--mwlCalendarToday-->\n	<!--[(viewDate)]="viewDate">-->\n	<!--Today-->\n	<!--</div>-->\n	<!--<div-->\n	<!--class="btn btn-primary"-->\n	<!--mwlCalendarNextView-->\n	<!--[view]="view"-->\n	<!--[(viewDate)]="viewDate">-->\n	<!--Next-->\n	<!--</div>-->\n	<!--</div>-->\n	<!--</div>-->\n\n	<div class="desktop-calendar-container-header-buttons">\n		<button (click)="view = \'month\'" [class.active]="view === \'month\'">Mois</button>\n		<button (click)="view = \'week\'" [class.active]="view === \'week\'">Semaine</button>\n		<button (click)="view = \'day\'" [class.active]="view === \'day\'">Jour</button>\n	</div>\n\n	<div [ngSwitch]="view" class="desktop-calendar-container-inside">\n		<h3 [ngStyle]="{\'text-transform\' : \'none\'}">\n			{{ viewDate | calendarDate:(view + \'ViewTitle\'):\'fr\' }}\n		</h3>\n		<mwl-calendar-month-view\n			*ngSwitchCase="\'month\'"\n			[viewDate]="viewDate"\n			[locale]="locale"\n			[events]="events"\n			[refresh]="refresh"\n			(dayClicked)="dayClicked($event.day)"\n			(eventClicked)="handleEvent(\'Clicked\', $event.event)"\n			(eventTimesChanged)="eventTimesChanged($event)">\n		</mwl-calendar-month-view>\n		<mwl-calendar-week-view\n			*ngSwitchCase="\'week\'"\n			[viewDate]="viewDate"\n			[events]="events"\n			[locale]="locale"\n			[refresh]="refresh"\n			(eventClicked)="handleEvent(\'Clicked\', $event.event)"\n			(eventTimesChanged)="eventTimesChanged($event)">\n		</mwl-calendar-week-view>\n		<mwl-calendar-day-view\n			*ngSwitchCase="\'day\'"\n			[viewDate]="viewDate"\n			[events]="events"\n			[locale]="locale"\n			[refresh]="refresh"\n			(eventClicked)="handleEvent(\'Clicked\', $event.event)"\n			(eventTimesChanged)="eventTimesChanged($event)">\n		</mwl-calendar-day-view>\n	</div>\n\n	<!--<h3>-->\n	<!--Edit events-->\n	<!--<button-->\n	<!--class="btn btn-primary pull-right"-->\n	<!--(click)="addEvent()">-->\n	<!--Add new-->\n	<!--</button>-->\n	<!--<div class="clearfix"></div>-->\n	<!--</h3>-->\n\n	<!--<table class="table table-bordered">-->\n\n	<!--<thead>-->\n	<!--<tr>-->\n	<!--<th>Title</th>-->\n	<!--<th>Primary color</th>-->\n	<!--<th>Secondary color</th>-->\n	<!--<th>Starts at</th>-->\n	<!--<th>Ends at</th>-->\n	<!--<th>Remove</th>-->\n	<!--</tr>-->\n	<!--</thead>-->\n\n	<!--<tbody>-->\n	<!--<tr *ngFor="let event of events; let index = index">-->\n	<!--<td>-->\n	<!--<input-->\n	<!--type="text"-->\n	<!--class="form-control"-->\n	<!--[(ngModel)]="event.title"-->\n	<!--(keyup)="refresh.next()">-->\n	<!--</td>-->\n	<!--<td>-->\n	<!--<input-->\n	<!--type="color"-->\n	<!--[(ngModel)]="event.color.primary"-->\n	<!--(change)="refresh.next()">-->\n	<!--</td>-->\n	<!--<td>-->\n	<!--<input-->\n	<!--type="color"-->\n	<!--[(ngModel)]="event.color.secondary"-->\n	<!--(change)="refresh.next()">-->\n	<!--</td>-->\n	<!--<td>-->\n	<!--<mwl-demo-utils-date-time-picker-->\n	<!--[(date)]="event.start"-->\n	<!--(dateChange)="refresh.next()"-->\n	<!--placeholder="Not set">-->\n	<!--</mwl-demo-utils-date-time-picker>-->\n	<!--</td>-->\n	<!--<td>-->\n	<!--<mwl-demo-utils-date-time-picker-->\n	<!--[(date)]="event.end"-->\n	<!--(dateChange)="refresh.next()"-->\n	<!--placeholder="Not set">-->\n	<!--</mwl-demo-utils-date-time-picker>-->\n	<!--</td>-->\n	<!--<td>-->\n	<!--<button-->\n	<!--class="btn btn-danger"-->\n	<!--(click)="events.splice(index, 1); refresh.next()">-->\n	<!--Delete-->\n	<!--</button>-->\n	<!--</td>-->\n	<!--</tr>-->\n	<!--</tbody>-->\n\n	<!--</table>-->\n</div>\n<div class="desktop-calendar-footer">\n	<button>Creer une annouce</button>\n</div>'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-calendar/desktop-calendar/desktop-calendar.html"*/
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["LOCALE_ID"])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */], String])
    ], DesktopCalendar);
    return DesktopCalendar;
}());

//# sourceMappingURL=desktop-calendar.js.map

/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VojComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__voj_calendar_voj_calendar_module__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__voj_card_voj_card_module__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__voj_footer_voj_footer_module__ = __webpack_require__(854);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__voj_header_voj_header_module__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__voj_list_voj_list_module__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__voj_form_voj_form_module__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__voj_map_voj_map_module__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__voj_menu_voj_menu_module__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__voj_search_header_voj_search_header_module__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__voj_segment_voj_segment_module__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__voj_header_web_voj_header_web_module__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__voj_page_header_voj_page_header_module__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__voj_header_segment_voj_header_segment_module__ = __webpack_require__(542);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var VojComponentsModule = (function () {
    function VojComponentsModule() {
    }
    VojComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [],
            imports: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__voj_calendar_voj_calendar_module__["VojCalendarModule"],
                __WEBPACK_IMPORTED_MODULE_2__voj_card_voj_card_module__["VojCardModule"],
                __WEBPACK_IMPORTED_MODULE_3__voj_footer_voj_footer_module__["a" /* VojFooterModule */],
                __WEBPACK_IMPORTED_MODULE_4__voj_header_voj_header_module__["VojHeaderModule"],
                __WEBPACK_IMPORTED_MODULE_5__voj_list_voj_list_module__["VojListModule"],
                __WEBPACK_IMPORTED_MODULE_6__voj_form_voj_form_module__["VojFormModule"],
                __WEBPACK_IMPORTED_MODULE_7__voj_map_voj_map_module__["VojMapModule"],
                __WEBPACK_IMPORTED_MODULE_8__voj_menu_voj_menu_module__["VojMenuModule"],
                __WEBPACK_IMPORTED_MODULE_9__voj_search_header_voj_search_header_module__["VojSearchHeaderModule"],
                __WEBPACK_IMPORTED_MODULE_10__voj_segment_voj_segment_module__["VojSegmentModule"],
                __WEBPACK_IMPORTED_MODULE_11__voj_header_web_voj_header_web_module__["VojHeaderWebModule"],
                __WEBPACK_IMPORTED_MODULE_12__voj_page_header_voj_page_header_module__["a" /* VojPageHeaderModule */],
                __WEBPACK_IMPORTED_MODULE_13__voj_header_segment_voj_header_segment_module__["VojHeaderSegmentModule"]
            ]
        })
    ], VojComponentsModule);
    return VojComponentsModule;
}());

//# sourceMappingURL=voj-components.module.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VojCardModel; });
var VojCardModel = (function () {
    function VojCardModel() {
    }
    return VojCardModel;
}());

//# sourceMappingURL=voj-card.model.js.map

/***/ }),

/***/ 813:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomEventTitleFormatter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_calendar__ = __webpack_require__(111);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var CustomEventTitleFormatter = (function (_super) {
    __extends(CustomEventTitleFormatter, _super);
    function CustomEventTitleFormatter(locale) {
        var _this = _super.call(this) || this;
        _this.locale = locale;
        return _this;
    }
    // you can override any of the methods defined in the parent class
    CustomEventTitleFormatter.prototype.month = function (event) {
        return "<b>" + new Intl.DateTimeFormat(this.locale, {
            hour: 'numeric',
            minute: 'numeric'
        }).format(event.start) + "</b> " + event.title;
    };
    CustomEventTitleFormatter.prototype.week = function (event) {
        return "<b>" + new Intl.DateTimeFormat(this.locale, {
            hour: 'numeric',
            minute: 'numeric'
        }).format(event.start) + "</b> " + event.title;
    };
    CustomEventTitleFormatter.prototype.day = function (event) {
        return "<b>" + new Intl.DateTimeFormat(this.locale, {
            hour: 'numeric',
            minute: 'numeric'
        }).format(event.start) + "</b> " + event.title;
    };
    CustomEventTitleFormatter = __decorate([
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["LOCALE_ID"])),
        __metadata("design:paramtypes", [String])
    ], CustomEventTitleFormatter);
    return CustomEventTitleFormatter;
}(__WEBPACK_IMPORTED_MODULE_1_angular_calendar__["a" /* CalendarEventTitleFormatter */]));

//# sourceMappingURL=custom-title-formatter.js.map

/***/ }),

/***/ 814:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoUtilsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_calendar__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DemoUtilsModule = (function () {
    function DemoUtilsModule() {
    }
    DemoUtilsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbDatepickerModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["d" /* NgbTimepickerModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4_angular_calendar__["b" /* CalendarModule */]
            ],
            declarations: [],
            exports: []
        })
    ], DemoUtilsModule);
    return DemoUtilsModule;
}());

//# sourceMappingURL=demo-utils.module.js.map

/***/ }),

/***/ 815:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullCalendarComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__full_calendar__ = __webpack_require__(816);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ap_angular2_fullcalendar__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ap_angular2_fullcalendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ap_angular2_fullcalendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_fullcalendar_dist_locale_fr__ = __webpack_require__(821);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_fullcalendar_dist_locale_fr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_fullcalendar_dist_locale_fr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var FullCalendarComponentModule = (function () {
    function FullCalendarComponentModule() {
    }
    FullCalendarComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__full_calendar__["a" /* FullCalendarComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__full_calendar__["a" /* FullCalendarComponent */]),
                __WEBPACK_IMPORTED_MODULE_3_ap_angular2_fullcalendar__["CalendarModule"],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__full_calendar__["a" /* FullCalendarComponent */]
            ]
        })
    ], FullCalendarComponentModule);
    return FullCalendarComponentModule;
}());

//# sourceMappingURL=full-calendar.module.js.map

/***/ }),

/***/ 816:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullCalendarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ap_angular2_fullcalendar__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ap_angular2_fullcalendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ap_angular2_fullcalendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_date_fns__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_date_fns__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__full_calendar_service__ = __webpack_require__(820);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_shared__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var FullCalendarComponent = (function () {
    function FullCalendarComponent(calendarService) {
        this.calendarService = calendarService;
        /** Command-trigger to activate multi-select mode */
        this.onMultiSelectActive = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"](true);
        /** Trigger for multi-select range */
        this.onMultiSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"](true);
        this.onWeekSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"](true);
        this.onRangeSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"](true);
        var currentYearOffset = new Date().getFullYear() - 10;
        this.fullcalendarMode = 'month';
        this.years = new Array(20)
            .fill(null)
            .map(function (x, i) { return ({
            label: (currentYearOffset + i).toString(),
            value: currentYearOffset + i
        }); });
        this.months = [
            { label: 'Janvier', value: 0 },
            { label: 'Février', value: 1 },
            { label: 'Mars', value: 2 },
            { label: 'Avril', value: 3 },
            { label: 'Mai', value: 4 },
            { label: 'Juin', value: 5 },
            { label: 'Juillet', value: 6 },
            { label: 'Aout', value: 7 },
            { label: 'Septembr', value: 8 },
            { label: 'Octobre', value: 9 },
            { label: 'Novembre', value: 10 },
            { label: 'Décembre', value: 11 }
        ];
    }
    FullCalendarComponent.prototype.htmlQuery = function (selector) {
        var query = document.querySelectorAll(selector);
        var result = query.length > 0
            ? [].slice.call(query)
            : [];
        return result;
    };
    FullCalendarComponent.prototype.clearSelectedRange = function () {
        this.calendar.fullCalendar('unselect');
        this.htmlQuery('.voj-range-selected-event')
            .forEach(function (elem) { return elem.classList.remove('voj-range-selected-event'); });
        this.htmlQuery('.voj-selected-event')
            .forEach(function (elem) { return elem.classList.remove('voj-selected-event'); });
    };
    FullCalendarComponent.prototype.mapSlotToEventObject = function (slot) {
        return {
            start: slot.startDate,
            end: slot.endDate || null,
            title: slot.title,
            colot: slot.color
        };
    };
    FullCalendarComponent.prototype.initRangeSelect = function () {
        var _this = this;
        var target = __WEBPACK_IMPORTED_MODULE_6_jquery__('angular2-fullcalendar > .fc-view-container').get(0);
        var mouseUp$ = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].fromEvent(target, 'mouseup');
        var mouseMove$ = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].fromEvent(document, 'mousemove');
        var mouseDown$ = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].fromEvent(target, 'mousedown');
        mouseDown$
            .filter(function () { return !_this.calendarService.isMultiSelectActive; })
            .do(function () { return _this.clearSelectedRange(); })
            .flatMap(function (elem) { return mouseMove$
            .takeUntil(mouseUp$)
            .distinctUntilChanged(function (a, b) {
            var c = a.target.dataset.date;
            var d = b.target.dataset.date;
            return c === d;
        })
            .map(function (event) { return event.target; })
            .filter(function (target) { return target.classList.contains('fc-today')
            || target.classList.contains('fc-future'); })
            .do(function (target) { return target.classList.toggle('voj-range-selected-event'); })
            .buffer(mouseUp$); })
            .map(function (entries) { return entries
            .filter(function (entry) { return entry.classList.contains('voj-range-selected-event'); }); })
            .do(function (entries) { return console.log('[buffer:after]', entries.map(function (entry) { return entry.dataset.date; })); })
            .do(function (entries) { return entries.length <= 1 && _this.clearSelectedRange(); })
            .filter(function (entries) { return entries.length > 1; })
            .map(function (entries) { return entries
            .map(function (entry) { return new Date(entry.dataset.date).toISOString(); })
            .sort(); })
            .do(function (dates) { return console.log('[dates]', dates); })
            .map(function (dates) {
            console.log('[range]', Object(__WEBPACK_IMPORTED_MODULE_5_date_fns__["eachDay"])(dates[0], dates[dates.length - 1]));
            return Object(__WEBPACK_IMPORTED_MODULE_5_date_fns__["eachDay"])(dates[0], dates[dates.length - 1]);
        })
            .subscribe(function (payload) {
            _this.clearSelectedRange();
            _this.onRangeSelect.emit({ payload: payload });
        });
    };
    FullCalendarComponent.prototype.initWeekSelect = function () {
        var _this = this;
        var click$ = this.calendarService.clickDelegate$.asObservable();
        this.calendarService.activateMultiSelect$
            .asObservable()
            .filter(function (target) { return target === __WEBPACK_IMPORTED_MODULE_8__models_shared__["a" /* MultiSelectTarget */].Week; })
            .switchMap(function () { return click$
            .takeUntil(_this.calendarService.acceptSelectedRange$.asObservable()); })
            .pluck('parentElement')
            .do(function (_) { return _this.onMultiSelectActive.emit(__WEBPACK_IMPORTED_MODULE_8__models_shared__["a" /* MultiSelectTarget */].Week); })
            .map(function (selectedRow) {
            var range = __WEBPACK_IMPORTED_MODULE_6_jquery__(selectedRow)
                .closest('.fc-row.fc-week')
                .find('.fc-bg .fc-day')
                .toArray();
            return {
                start: {
                    date: range[0].dataset.date,
                    elem: range[0]
                },
                end: {
                    date: range[range.length - 1].dataset.date,
                    elem: range[range.length - 1]
                }
            };
        })
            .do(function (range) {
            var start = __WEBPACK_IMPORTED_MODULE_4_moment__(range.start.date);
            var end = __WEBPACK_IMPORTED_MODULE_4_moment__(range.end.date).add(1, 'day');
            _this.clearSelectedRange();
            _this.calendar.fullCalendar('select', start, end);
        })
            .switchMap(function (selectedRow) { return _this.calendarService.acceptSelectedRange$.asObservable(); }, function (range, state) { return ({ range: range, state: state }); })
            .subscribe(function (_a) {
            var range = _a.range, state = _a.state;
            _this.clearSelectedRange();
            _this.calendarService.disableMultiSelect();
            if (state.isAccepted && state.target === __WEBPACK_IMPORTED_MODULE_8__models_shared__["a" /* MultiSelectTarget */][__WEBPACK_IMPORTED_MODULE_8__models_shared__["a" /* MultiSelectTarget */].Week]) {
                _this.onWeekSelect.emit({
                    start: new Date(range.start.date),
                    end: new Date(range.end.date)
                });
            }
        });
    };
    FullCalendarComponent.prototype.initMultiSelect = function () {
        var _this = this;
        var cancelation$ = this.calendarService.acceptSelectedRange$.asObservable();
        var opening$ = this.calendarService.activateMultiSelect$
            .asObservable()
            .filter(function (target) { return target === __WEBPACK_IMPORTED_MODULE_8__models_shared__["a" /* MultiSelectTarget */].CustomRange; });
        var multiSelect$ = this.calendarService.clickDelegate$
            .asObservable()
            .takeUntil(cancelation$)
            .do(function (elem) { return elem.classList.toggle('voj-selected-event'); })
            .buffer(cancelation$)
            .map(function (targets) { return targets
            .filter(function (targets) { return targets.classList.contains('voj-selected-event'); })
            .map(function (target) {
            var id = target.id, date = target.dataset.date;
            return { id: id, date: new Date(date) };
        }); });
        opening$
            .do(function () { return _this.onMultiSelectActive.emit(__WEBPACK_IMPORTED_MODULE_8__models_shared__["a" /* MultiSelectTarget */].CustomRange); })
            .switchMap(function () { return multiSelect$; })
            .withLatestFrom(cancelation$)
            .map(function (_a) {
            var range = _a[0], state = _a[1];
            return ({ range: range, state: state });
        })
            .subscribe(function (_a) {
            var range = _a.range, state = _a.state;
            var isValidTarget = state.target === __WEBPACK_IMPORTED_MODULE_8__models_shared__["a" /* MultiSelectTarget */][__WEBPACK_IMPORTED_MODULE_8__models_shared__["a" /* MultiSelectTarget */].CustomRange];
            _this.clearSelectedRange();
            _this.calendarService.disableMultiSelect();
            if (state.isAccepted && isValidTarget) {
                _this.onMultiSelect.emit({
                    payload: range.map(function (item) { return item.date; })
                });
            }
        });
    };
    FullCalendarComponent.prototype.ngAfterViewInit = function () {
        this.calendarService.setInstance(this.calendar);
    };
    FullCalendarComponent.prototype.ngOnInit = function () {
        var _this = this;
        var currentDate = new Date();
        this.currentDate$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"](new Date());
        this.currentMonth = currentDate.getMonth();
        this.currentYear = currentDate.getFullYear();
        this.calendarOptions = this.calendarService.getOptions();
        this.calendarService.setOptions({
            selectAllow: function (info) {
                return __WEBPACK_IMPORTED_MODULE_4_moment__(info.start).isSameOrAfter(new Date(), 'hour');
            },
            dayClick: function (date, event, view) {
                var hasHandler = typeof _this.data.dayClick !== 'undefined'
                    && _this.data.dayClick instanceof Function;
                _this.calendarService.onDayClick(event);
                if (__WEBPACK_IMPORTED_MODULE_4_moment__(date).isSameOrAfter(new Date())) {
                    _this.calendar.fullCalendar('gotoDate', date);
                }
                if (hasHandler) {
                    _this.data.dayClick(date, event, view);
                }
            },
            defaultDate: currentDate,
            eventClick: this.data.eventClick,
            events: this.data.slots.map(this.mapSlotToEventObject)
        });
        this.currentDate$.subscribe(function (date) { return _this.setCurrentDate(date); });
        this.calendarService.calendarRendered$
            .asObservable()
            .subscribe(function () {
            _this.initWeekSelect();
            _this.initMultiSelect();
            _this.initRangeSelect();
        });
    };
    FullCalendarComponent.prototype.getCurrentDate = function () {
        var date = __WEBPACK_IMPORTED_MODULE_6_jquery__('angular2-fullcalendar').fullCalendar('getDate');
        return date.toDate();
    };
    FullCalendarComponent.prototype.setCurrentDate = function (date) {
        __WEBPACK_IMPORTED_MODULE_6_jquery__('angular2-fullcalendar').fullCalendar('gotoDate', date);
    };
    FullCalendarComponent.prototype.handleCalendarModeChange = function (mode) {
        this.fullcalendarMode = mode;
        __WEBPACK_IMPORTED_MODULE_6_jquery__('angular2-fullcalendar').fullCalendar('changeView', mode);
    };
    FullCalendarComponent.prototype.handleMonthChange = function (event) {
        var date = new Date(this.getCurrentDate());
        date.setMonth(event);
        this.currentDate$.next(date);
    };
    FullCalendarComponent.prototype.handleYearChange = function (event) {
        var date = new Date(this.getCurrentDate());
        date.setFullYear(event);
        this.currentDate$.next(date);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ap_angular2_fullcalendar__["CalendarComponent"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ap_angular2_fullcalendar__["CalendarComponent"])
    ], FullCalendarComponent.prototype, "calendar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('data'),
        __metadata("design:type", Object)
    ], FullCalendarComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('mode'),
        __metadata("design:type", String)
    ], FullCalendarComponent.prototype, "mode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], FullCalendarComponent.prototype, "onMultiSelectActive", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], FullCalendarComponent.prototype, "onMultiSelect", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], FullCalendarComponent.prototype, "onWeekSelect", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], FullCalendarComponent.prototype, "onRangeSelect", void 0);
    FullCalendarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'full-calendar',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-calendar/full-calendar/full-calendar.html"*/'<angular2-fullcalendar [options]="calendarOptions | async"></angular2-fullcalendar>\n'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-calendar/full-calendar/full-calendar.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_7__full_calendar_service__["a" /* FullCalendarService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__full_calendar_service__["a" /* FullCalendarService */]])
    ], FullCalendarComponent);
    return FullCalendarComponent;
}());

//# sourceMappingURL=full-calendar.js.map

/***/ }),

/***/ 818:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 410,
	"./af.js": 410,
	"./ar": 411,
	"./ar-dz": 412,
	"./ar-dz.js": 412,
	"./ar-kw": 413,
	"./ar-kw.js": 413,
	"./ar-ly": 414,
	"./ar-ly.js": 414,
	"./ar-ma": 415,
	"./ar-ma.js": 415,
	"./ar-sa": 416,
	"./ar-sa.js": 416,
	"./ar-tn": 417,
	"./ar-tn.js": 417,
	"./ar.js": 411,
	"./az": 418,
	"./az.js": 418,
	"./be": 419,
	"./be.js": 419,
	"./bg": 420,
	"./bg.js": 420,
	"./bn": 421,
	"./bn.js": 421,
	"./bo": 422,
	"./bo.js": 422,
	"./br": 423,
	"./br.js": 423,
	"./bs": 424,
	"./bs.js": 424,
	"./ca": 425,
	"./ca.js": 425,
	"./cs": 426,
	"./cs.js": 426,
	"./cv": 427,
	"./cv.js": 427,
	"./cy": 428,
	"./cy.js": 428,
	"./da": 429,
	"./da.js": 429,
	"./de": 430,
	"./de-at": 431,
	"./de-at.js": 431,
	"./de-ch": 432,
	"./de-ch.js": 432,
	"./de.js": 430,
	"./dv": 433,
	"./dv.js": 433,
	"./el": 434,
	"./el.js": 434,
	"./en-au": 435,
	"./en-au.js": 435,
	"./en-ca": 436,
	"./en-ca.js": 436,
	"./en-gb": 437,
	"./en-gb.js": 437,
	"./en-ie": 438,
	"./en-ie.js": 438,
	"./en-nz": 439,
	"./en-nz.js": 439,
	"./eo": 440,
	"./eo.js": 440,
	"./es": 441,
	"./es-do": 442,
	"./es-do.js": 442,
	"./es.js": 441,
	"./et": 443,
	"./et.js": 443,
	"./eu": 444,
	"./eu.js": 444,
	"./fa": 445,
	"./fa.js": 445,
	"./fi": 446,
	"./fi.js": 446,
	"./fo": 447,
	"./fo.js": 447,
	"./fr": 448,
	"./fr-ca": 449,
	"./fr-ca.js": 449,
	"./fr-ch": 450,
	"./fr-ch.js": 450,
	"./fr.js": 448,
	"./fy": 451,
	"./fy.js": 451,
	"./gd": 452,
	"./gd.js": 452,
	"./gl": 453,
	"./gl.js": 453,
	"./gom-latn": 454,
	"./gom-latn.js": 454,
	"./he": 455,
	"./he.js": 455,
	"./hi": 456,
	"./hi.js": 456,
	"./hr": 457,
	"./hr.js": 457,
	"./hu": 458,
	"./hu.js": 458,
	"./hy-am": 459,
	"./hy-am.js": 459,
	"./id": 460,
	"./id.js": 460,
	"./is": 461,
	"./is.js": 461,
	"./it": 462,
	"./it.js": 462,
	"./ja": 463,
	"./ja.js": 463,
	"./jv": 464,
	"./jv.js": 464,
	"./ka": 465,
	"./ka.js": 465,
	"./kk": 466,
	"./kk.js": 466,
	"./km": 467,
	"./km.js": 467,
	"./kn": 468,
	"./kn.js": 468,
	"./ko": 469,
	"./ko.js": 469,
	"./ky": 470,
	"./ky.js": 470,
	"./lb": 471,
	"./lb.js": 471,
	"./lo": 472,
	"./lo.js": 472,
	"./lt": 473,
	"./lt.js": 473,
	"./lv": 474,
	"./lv.js": 474,
	"./me": 475,
	"./me.js": 475,
	"./mi": 476,
	"./mi.js": 476,
	"./mk": 477,
	"./mk.js": 477,
	"./ml": 478,
	"./ml.js": 478,
	"./mr": 479,
	"./mr.js": 479,
	"./ms": 480,
	"./ms-my": 481,
	"./ms-my.js": 481,
	"./ms.js": 480,
	"./my": 482,
	"./my.js": 482,
	"./nb": 483,
	"./nb.js": 483,
	"./ne": 484,
	"./ne.js": 484,
	"./nl": 485,
	"./nl-be": 486,
	"./nl-be.js": 486,
	"./nl.js": 485,
	"./nn": 487,
	"./nn.js": 487,
	"./pa-in": 488,
	"./pa-in.js": 488,
	"./pl": 489,
	"./pl.js": 489,
	"./pt": 490,
	"./pt-br": 491,
	"./pt-br.js": 491,
	"./pt.js": 490,
	"./ro": 492,
	"./ro.js": 492,
	"./ru": 493,
	"./ru.js": 493,
	"./sd": 494,
	"./sd.js": 494,
	"./se": 495,
	"./se.js": 495,
	"./si": 496,
	"./si.js": 496,
	"./sk": 497,
	"./sk.js": 497,
	"./sl": 498,
	"./sl.js": 498,
	"./sq": 499,
	"./sq.js": 499,
	"./sr": 500,
	"./sr-cyrl": 501,
	"./sr-cyrl.js": 501,
	"./sr.js": 500,
	"./ss": 502,
	"./ss.js": 502,
	"./sv": 503,
	"./sv.js": 503,
	"./sw": 504,
	"./sw.js": 504,
	"./ta": 505,
	"./ta.js": 505,
	"./te": 506,
	"./te.js": 506,
	"./tet": 507,
	"./tet.js": 507,
	"./th": 508,
	"./th.js": 508,
	"./tl-ph": 509,
	"./tl-ph.js": 509,
	"./tlh": 510,
	"./tlh.js": 510,
	"./tr": 511,
	"./tr.js": 511,
	"./tzl": 512,
	"./tzl.js": 512,
	"./tzm": 513,
	"./tzm-latn": 514,
	"./tzm-latn.js": 514,
	"./tzm.js": 513,
	"./uk": 515,
	"./uk.js": 515,
	"./ur": 516,
	"./ur.js": 516,
	"./uz": 517,
	"./uz-latn": 518,
	"./uz-latn.js": 518,
	"./uz.js": 517,
	"./vi": 519,
	"./vi.js": 519,
	"./x-pseudo": 520,
	"./x-pseudo.js": 520,
	"./yo": 521,
	"./yo.js": 521,
	"./zh-cn": 522,
	"./zh-cn.js": 522,
	"./zh-hk": 523,
	"./zh-hk.js": 523,
	"./zh-tw": 524,
	"./zh-tw.js": 524
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 818;

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VojSegmentModule", function() { return VojSegmentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__voj_segment__ = __webpack_require__(823);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VojSegmentModule = (function () {
    function VojSegmentModule() {
    }
    VojSegmentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__voj_segment__["a" /* VojSegment */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__voj_segment__["a" /* VojSegment */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__voj_segment__["a" /* VojSegment */]
            ]
        })
    ], VojSegmentModule);
    return VojSegmentModule;
}());

//# sourceMappingURL=voj-segment.module.js.map

/***/ }),

/***/ 820:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MultiSelect */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullCalendarService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_shared__ = __webpack_require__(108);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var MultiSelect = (function () {
    function MultiSelect() {
        this.isActive = false;
    }
    return MultiSelect;
}());

var FullCalendarService = (function () {
    function FullCalendarService(locale) {
        var _this = this;
        this.locale = locale;
        this.activateMultiSelect$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.acceptSelectedRange$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.calendarRendered$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.clickDelegate$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.optionsStore = {
            header: {
                right: 'agendaDay,agendaWeek,month',
                center: 'prev,title,next',
                left: 'weekSelect,multiSelect,acceptSelection,resetSelection'
            },
            customButtons: {
                weekSelect: {
                    text: 'Week',
                    click: this.weekSelectionHandler()
                },
                multiSelect: {
                    text: 'Custom',
                    click: this.multiSelectionHandler()
                },
                acceptSelection: {
                    text: 'Accept',
                    click: this.acceptSelectionHandler()
                },
                resetSelection: {
                    text: 'Reset',
                    click: this.resetSelectionHandler()
                }
            },
            height: 'auto',
            allDaySlot: false,
            locale: this.locale,
            fixedWeekCount: false,
            defaultDate: new Date(),
            editable: true,
            eventLimit: true,
            events: [],
            selectable: false,
            dayClick: function (date, jsEvent, view) {
                console.log('[dayclick]', date, view);
            },
            eventClick: function (event, jsEvent, view) {
                console.log('[eventclick]', event, view);
            },
            eventAfterAllRender: function () {
                _this.calendarRendered$.next();
            }
        };
        this.options$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](this.optionsStore);
    }
    FullCalendarService.prototype.weekSelectionHandler = function () {
        var parentContext = this;
        return function () {
            var vm = this;
            var $oppositeModeButton = __WEBPACK_IMPORTED_MODULE_3_jquery__(vm.parentElement).find('.fc-multiSelect-button');
            vm.parentElement.classList.toggle('voj-weekselect-active');
            vm.parentElement.dataset.target = __WEBPACK_IMPORTED_MODULE_4__models_shared__["a" /* MultiSelectTarget */].Week.toString();
            parentContext.resetEnabledState(vm.parentElement);
            parentContext.isMultiSelectActive = vm.parentElement.classList.contains('voj-weekselect-active');
            if (parentContext.isMultiSelectActive) {
                $oppositeModeButton.prop('disabled', true);
                parentContext.activateMultiSelect$.next(__WEBPACK_IMPORTED_MODULE_4__models_shared__["a" /* MultiSelectTarget */].Week);
            }
        };
    };
    FullCalendarService.prototype.multiSelectionHandler = function () {
        var parentContext = this;
        return function () {
            var vm = this;
            var $oppositeModeButton = __WEBPACK_IMPORTED_MODULE_3_jquery__(vm.parentElement).find('.fc-weekSelect-button');
            console.log('[enabling:multiselect]');
            vm.parentElement.classList.toggle('voj-multiselect-active');
            vm.parentElement.dataset.target = __WEBPACK_IMPORTED_MODULE_4__models_shared__["a" /* MultiSelectTarget */].CustomRange.toString();
            parentContext.resetEnabledState(vm.parentElement);
            parentContext.isMultiSelectActive = vm.parentElement.classList.contains('voj-multiselect-active');
            if (parentContext.isMultiSelectActive) {
                $oppositeModeButton.prop('disabled', true);
                parentContext.activateMultiSelect$.next(__WEBPACK_IMPORTED_MODULE_4__models_shared__["a" /* MultiSelectTarget */].CustomRange);
            }
        };
    };
    FullCalendarService.prototype.resetState = function (elem) {
        elem.classList.remove('voj-weekselect-active');
        elem.classList.remove('voj-multiselect-active');
        elem.dataset.target = '';
        [].slice
            .call(elem.children)
            .forEach(function (item) {
            if (item.classList.contains('fc-acceptSelection-button')
                || item.classList.contains('fc-resetSelection-button')) {
                __WEBPACK_IMPORTED_MODULE_3_jquery__(item).prop('disabled', true);
            }
            else {
                __WEBPACK_IMPORTED_MODULE_3_jquery__(item).prop('disabled', false);
            }
        });
    };
    FullCalendarService.prototype.resetEnabledState = function (elem) {
        [].slice
            .call(elem.children)
            .forEach(function (item) { return __WEBPACK_IMPORTED_MODULE_3_jquery__(item).prop('disabled', false); });
    };
    FullCalendarService.prototype.acceptSelectionHandler = function () {
        var parentContext = this;
        return function () {
            var vm = this;
            var target = __WEBPACK_IMPORTED_MODULE_4__models_shared__["a" /* MultiSelectTarget */][Number(vm.parentElement.dataset.target)];
            parentContext.tempSelection = [];
            parentContext.resetState(vm.parentElement);
            parentContext.acceptSelectedRange$.next({
                isAccepted: true,
                target: target
            });
        };
    };
    FullCalendarService.prototype.resetSelectionHandler = function () {
        var parentContext = this;
        return function () {
            var vm = this;
            var target = __WEBPACK_IMPORTED_MODULE_4__models_shared__["a" /* MultiSelectTarget */][Number(vm.parentElement.dataset.target)];
            parentContext.tempSelection = [];
            parentContext.resetState(vm.parentElement);
            parentContext.acceptSelectedRange$.next({
                isAccepted: false,
                target: target
            });
        };
    };
    FullCalendarService.prototype.getOptions = function () {
        return this.options$.asObservable();
    };
    FullCalendarService.prototype.setOptions = function (updatedOptions) {
        this.optionsStore = __assign({}, this.optionsStore, updatedOptions);
        this.options$.next(this.optionsStore);
    };
    FullCalendarService.prototype.setInstance = function (instance) {
        this.instance = instance;
    };
    FullCalendarService.prototype.disableMultiSelect = function () {
        this.isMultiSelectActive = false;
    };
    FullCalendarService.prototype.onDayClick = function (event) {
        this.clickDelegate$.next(event.target);
    };
    FullCalendarService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["LOCALE_ID"])),
        __metadata("design:paramtypes", [Object])
    ], FullCalendarService);
    return FullCalendarService;
}());

//# sourceMappingURL=full-calendar.service.js.map

/***/ }),

/***/ 822:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VojCard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__voj_menu_voj_menu__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_voj_card_model__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VojCard = (function () {
    function VojCard(actionSheetCtrl, popoverCtrl) {
        this.actionSheetCtrl = actionSheetCtrl;
        this.popoverCtrl = popoverCtrl;
        this.socialButtons = [];
    }
    VojCard.prototype.openMenu = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__voj_menu_voj_menu__["a" /* VojMenu */], { data: this.data.menu });
        popover.present({
            ev: myEvent
        });
    };
    VojCard.prototype.presentActionSheet = function () {
        var actionSocial = this.actionSheetCtrl.create({
            title: 'Social networks',
            buttons: this.socialButtons
        });
        actionSocial.present();
    };
    VojCard.prototype.setClasses = function (data) {
        // Set classes if json field does not exist
        return {
            'voj-indent': !data.title,
            'voj-without-menu': !data.cover && !data.menu,
            'voj-without-badges': !data.cover && !data.badges,
            'voj-without-menu-and-badges': !data.cover && !data.menu && !data.badges,
            'voj-card-without-header': !data.cover && !data.menu && !data.badges && !data.thumbnail
        };
    };
    VojCard.prototype.ngOnInit = function () {
        // Data for header of card
        this.reduced = this.mode == 'reduced';
        /*this.dataPageHeader = this.data.header;

        if(!this.data.header) {
            this.data.header = new VojPageHeaderType();
        }
        this.dataPageHeader = this.data.header;*/
        // Social buttons for share
        if (this.data && this.data.socialButtons && this.data.socialButtons.length > 0) {
            for (var i = 0; i < this.data.socialButtons.length; i++) {
                this.socialButtons.push({
                    text: this.data.socialButtons[i].label,
                    handler: this.data.socialButtons[i].action,
                    icon: this.data.socialButtons[i].icon
                });
            }
        }
        this.modelForSegment = 0;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])('data'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__models_voj_card_model__["a" /* VojCardModel */])
    ], VojCard.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])('vojData'),
        __metadata("design:type", Array)
    ], VojCard.prototype, "vojData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])('mode'),
        __metadata("design:type", String)
    ], VojCard.prototype, "mode", void 0);
    VojCard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'voj-card',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-card/voj-card.html"*/'<!-- Generated template for the VojCard component -->\n<div *ngIf="data">\n	<!-- DEACTIVATE IN CASE OF NEEDING TO SHOW A MAP -->\n	<!-- <voj-map [data]="vojData"></voj-map> -->\n\n	<!-- Card -->\n	<ion-card>\n		<div class="voj-style">\n			<div class="badges-container" [ngClass]="setClasses(data)">\n				<!-- Menu button -->\n				<button *ngIf="data.menu && data.menu.length > 0"\n						class="menu-button" \n						ion-button \n						icon-left \n						clear \n						round \n						small\n						(click)="openMenu($event)">\n						<ion-icon name="menu"></ion-icon>\n				</button>\n\n				<!-- Badges -->\n				<ion-item text-right *ngIf="data.badges && data.badges.length > 0" class="{{reduced?\'reduced-badge-style\':\'\'}}">\n					<!-- Buttons for badges -->\n					<button ion-button icon-only round outline class="voj-badge-button" *ngFor="let badge of data.badges">\n						<ion-icon name="{{ badge.icon }}" (click)="badge.action()"></ion-icon>\n					</button>\n				</ion-item>\n\n				<!-- Cover -->\n				<img [src]="data.cover" *ngIf="data.cover && !reduced" class="{{reduced?\'cover-50\':\'\'}}"/>\n\n				<!-- Thumbnail -->\n				<ion-avatar item-left *ngIf="data.thumbnail">\n					<img [src]="data.thumbnail">\n				</ion-avatar>\n			</div>\n\n			<!-- Title -->\n			<div class="voj-style-header" *ngIf="data.title">\n				<h2>{{data.title.label}}</h2>\n			</div>\n\n			<!-- Segments -->\n			<voj-segment [data]="data.segments"></voj-segment>\n			<!-- Subtitles -->\n			<div *ngIf="data.subtitles && data.subtitles.length > 0">\n				<ion-item text-wrap no-lines *ngFor="let title of data.subtitles" class="voj-subtitle">\n					<ion-icon [name]="title.icon" item-start small></ion-icon>\n					<h2>{{title.label}}</h2>\n				</ion-item>\n			</div>\n\n			<!-- Content -->\n			<ion-card-content class="voj-content" no-margin no-lines *ngIf="data.content">{{data.content}}</ion-card-content>\n		</div>\n\n		<!-- Buttons -->\n		<ion-grid *ngIf="data.actions && data.actions.length > 0">\n			<ion-row>\n				<ion-col text-center *ngFor="let button of data.actions">\n					<button small ion-button icon-left class="voj-button" (click)="button.action($event)">\n						<ion-icon [name]="button.icon"></ion-icon>\n						{{button.label}}\n					</button>\n				</ion-col>\n			</ion-row>\n		</ion-grid>\n\n		<!-- Social buttons -->\n		<ion-row>\n			<ion-col >\n\n				<button\n					*ngFor="let button of data.socialButtons"\n					class="social-buttons"\n					left\n					ion-button\n					clear\n					large\n					(click)="button.action($event)">\n					<ion-icon [name]="button.icon">\n					</ion-icon>\n				</button>\n			</ion-col>\n		</ion-row>\n	</ion-card>\n</div>'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-card/voj-card.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["p" /* PopoverController */]])
    ], VojCard);
    return VojCard;
}());

//# sourceMappingURL=voj-card.js.map

/***/ }),

/***/ 823:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VojSegment; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VojSegment = (function () {
    function VojSegment() {
        this.segmentModelChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    VojSegment.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('data'),
        __metadata("design:type", Object)
    ], VojSegment.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('segmentModel'),
        __metadata("design:type", Object)
    ], VojSegment.prototype, "segmentModel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('isStats'),
        __metadata("design:type", Boolean)
    ], VojSegment.prototype, "isStats", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], VojSegment.prototype, "segmentModelChange", void 0);
    VojSegment = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'voj-segment',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-segment/voj-segment.html"*/'<div class="voj-segments-container">\n	<div class="voj-segment" *ngFor="let segment of data"\n		 [ngStyle]="{\'color\': segment.style === \'style2\' ? \'#fff\':\'#000\'}" (click)="segment.action()">\n		<div [className]="(isStats)? \'voj-segment-title-web\': \'voj-segment-title\'">{{segment.title.label}}</div>\n		<div [className]="(isStats)? \'voj-segment-subtitle-web\': \'voj-segment-subtitle\'">{{segment.subtitle.label}}</div>\n	</div>\n</div>'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-segment/voj-segment.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], VojSegment);
    return VojSegment;
}());

//# sourceMappingURL=voj-segment.js.map

/***/ }),

/***/ 824:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VojMap; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_voj_events_voj_events__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_search_service_search_service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_details_details__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_navigation_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_account_module_login_login__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var VojMap = (function () {
    function VojMap(platform, storage, searchService, geolocation, eventBus, navigationService) {
        var _this = this;
        this.platform = platform;
        this.storage = storage;
        this.searchService = searchService;
        this.geolocation = geolocation;
        this.eventBus = eventBus;
        this.navigationService = navigationService;
        this.hiddenMap = true;
        this.position = null;
        this.latitude = 48.855168;
        this.longitude = 2.344813;
        this.markers = [];
        this.geolocation.getCurrentPosition().then(function (resp) {
            if (resp && resp.coords) {
                _this.latitude = resp.coords.latitude;
                _this.longitude = resp.coords.longitude;
            }
            _this.initMap();
        }).catch(function (data) {
            //console.clear();
            console.log(JSON.stringify(data));
        });
        // TODO: Hotfix for the broken event problem to remove once the bus is fixed
        this.eventBus.subscribeMap(this);
    }
    Object.defineProperty(VojMap.prototype, "data", {
        set: function (value) {
            var _this = this;
            var mapPassenger = this.eventBus.passenger.type.get('map');
            this.eventBus.get(mapPassenger).then(function (eventValue) {
                if (eventValue) {
                    _this.mapData = eventValue;
                    _this.initMap();
                }
                else if (value) {
                    _this.mapData = value;
                    _this.initMap();
                }
            });
        },
        enumerable: true,
        configurable: true
    });
    VojMap.prototype.ngOnInit = function () {
        this.initMap();
    };
    // TODO: Hotfix for the broken event problem to remove once the bus is fixed
    VojMap.prototype.updateMap = function (data) {
        this.mapData = data;
        this.initMap();
    };
    VojMap.prototype.initMap = function () {
        for (var i = 0; i < this.markers.length; i++) {
            var m = void 0;
            m = this.markers[i];
            m.setMap(null);
        }
        var latLng = new google.maps.LatLng(this.latitude, this.longitude);
        this.loadJSMap(latLng);
        this.hiddenMap = false;
        if (this.mapData && this.mapData.length > 0) {
            for (var i = 0; i < this.mapData.length; i++) {
                var card = this.mapData[i];
                this.addMarker(card);
            }
        }
    };
    VojMap.prototype.addMarker = function (card) {
        var marker = new google.maps.Marker({
            position: { lat: card.address.lat, lng: card.address.lng },
            map: this.map,
            icon: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png',
            title: card.address.title
        });
        var infoWindow = new google.maps.InfoWindow({
            content: '<div id="myInfoWinDiv_' + card.id + '">' +
                '<img src="' + card.thumbnail + '" style="width:50px;height:50px"><br />' +
                '<strong>' + card.title.label + '</strong><br />' +
                card.subtitles[0].label
                + '</div>'
        });
        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open(this.map, marker);
            google.maps.event.addDomListener(document.getElementById('myInfoWinDiv_' + card.id), 'click', function () {
                this.updateDetails(card);
            }.bind(this));
        }.bind(this));
        this.markers.push(marker);
    };
    VojMap.prototype.loadJSMap = function (latLng) {
        var mapOptions = {
            center: latLng,
            zoom: 9,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        var largeCircle = new google.maps.Circle({
            strokeColor: '#488aff',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#488aff',
            fillOpacity: 0.10,
            map: this.map,
            center: { lat: this.latitude, lng: this.longitude },
            radius: 50000
        });
        var mediumCircle = new google.maps.Circle({
            strokeColor: '#14baa6',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#14baa6',
            fillOpacity: 0.20,
            map: this.map,
            center: { lat: this.latitude, lng: this.longitude },
            radius: 30000
        });
        var shortCircle = new google.maps.Circle({
            strokeColor: '#757575',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#757575',
            fillOpacity: 0.30,
            map: this.map,
            center: { lat: this.latitude, lng: this.longitude },
            radius: 10000
        });
    };
    VojMap.prototype.updateDetails = function (card) {
        var _this = this;
        //  Check if user is authenticated
        this.storage.get("currentUser").then(function (sdata) {
            var data = JSON.parse(sdata);
            if (data && data.account) {
                //  OK user is authenticated
                var results = _this.searchService.eventMode ? _this.searchService.events : _this.searchService.results;
                console.log("Details : " + card.id);
                var c = null;
                for (var i = 0; i < results.length; i++) {
                    if (results[i].id == card.id) {
                        c = results[i].toCardDetails();
                        break;
                    }
                }
                var vojNav = { page: __WEBPACK_IMPORTED_MODULE_4__pages_details_details__["a" /* DetailsPage */], params: { card: c }, isRoot: false };
                _this.navigationService.navigate('details', vojNav);
            }
            else {
                //  These are not the droids you are looking for
                var vojPageList = { page: __WEBPACK_IMPORTED_MODULE_8__pages_account_module_login_login__["a" /* LoginPage */], isRoot: true, isModal: true };
                _this.navigationService.navigate("list", vojPageList);
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('data'),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], VojMap.prototype, "data", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], VojMap.prototype, "mapElement", void 0);
    VojMap = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'voj-map',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-map/voj-map.html"*/'<ion-card [hidden]="hiddenMap" class="map">\n    <div #map id="map"></div>\n</ion-card>\n'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-map/voj-map.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__providers_search_service_search_service__["a" /* SearchServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_2__providers_voj_events_voj_events__["a" /* EventBusProvider */],
            __WEBPACK_IMPORTED_MODULE_5__services_navigation_service__["a" /* NavigationService */]])
    ], VojMap);
    return VojMap;
}());

//# sourceMappingURL=voj-map.js.map

/***/ }),

/***/ 825:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Passenger; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__voj_card_model__ = __webpack_require__(81);

var Passenger = (function () {
    function Passenger() {
        this.type = new Map();
        /**
         * Map events
         */
        this.type.set('map', {
            topic: 'MAP_DETAILS',
            data: new Array(),
            condition: true
        });
        /**
         * Others
         */
        this.type.set('details', {
            topic: 'SHOW_DETAILS',
            data: __WEBPACK_IMPORTED_MODULE_0__voj_card_model__["a" /* VojCardModel */],
            condition: true
        });
    }
    return Passenger;
}());

//# sourceMappingURL=voj-event.model.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_request_http_request__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_voj_configuration__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dtos_search_result_dto__ = __webpack_require__(834);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__voj_events_voj_events__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_button_type_model__ = __webpack_require__(835);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dtos_dto_strategy_search_search_dto_factory__ = __webpack_require__(528);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SearchServiceProvider = (function () {
    function SearchServiceProvider(http, dtoFactory, eventBus, configuration) {
        this.http = http;
        this.dtoFactory = dtoFactory;
        this.eventBus = eventBus;
        this.configuration = configuration;
        this.eventMode = false;
        this.events = [];
        this.eventsCards = [];
        this.eventBus.subscribeSearchService(this);
    }
    SearchServiceProvider.prototype.markAsRead = function (card) {
        var _this = this;
        if (!this.eventMode)
            return;
        var id = card.id;
        var idEvent = 0;
        var index = -1;
        for (var i = 0; i < this.events.length; i++) {
            if (this.events[i].dataSource.result.id == id) {
                idEvent = this.events[i].eventId;
                index = i;
                break;
            }
        }
        if (idEvent == 0)
            return;
        if (card.badges && card.badges.length > 0)
            for (var i = 0; i < card.badges.length; i++) {
                if (card.badges[i].id == 'read-mark') {
                    card.badges[i].icon = 'mail-open';
                }
            }
        var payload = {
            "service": "READ_PUSH",
            "eventId": idEvent
        };
        var url = null;
        for (var i = 0; i < this.configuration.configuration.urls.length; i++) {
            var t = this.configuration.configuration.urls[i];
            if (t.key == "search") {
                url = t.value;
                break;
            }
        }
        return new Promise(function (resolve) {
            _this.http.call(payload, url, "", true).subscribe(function (data) {
                resolve(data);
            });
        });
    };
    SearchServiceProvider.prototype.retrieveRecent = function () {
        var _this = this;
        this.eventMode = false;
        var payload = {
            "service": "RECENT",
            "role": this.configuration.configuration.customer == "J" ? "jobyer" : "employer"
        };
        var url = "https://hermes.vitonjob.com/search/";
        try {
            for (var i = 0; i < this.configuration.configuration.urls.length; i++) {
                var t = this.configuration.configuration.urls[i];
                if (t.key == "search") {
                    url = t.value;
                    break;
                }
            }
        }
        catch (exception) {
            console.log("notification occured before initlaizing configuration");
        }
        return new Promise(function (resolve) {
            _this.http.call(payload, url, "", true).subscribe(function (data) {
                _this.eventMode = false;
                _this.results = [];
                var cards = [];
                for (var i = 0; i < data.length; i++) {
                    var r = new __WEBPACK_IMPORTED_MODULE_4__dtos_search_result_dto__["a" /* SearchResultDTO */](data[i], _this.dtoFactory);
                    var c = r.toVojCard();
                    cards.push(c);
                    _this.results.push(r);
                }
                resolve(cards);
            });
        });
    };
    /**
     *
     * @param accountId
     * @returns {Promise<T>}
     */
    SearchServiceProvider.prototype.checkEvents = function (accountId) {
        var _this = this;
        this.eventMode = true;
        var payload = {
            "service": "CHECK",
            "accountId": accountId
        };
        var url = "https://hermes.vitonjob.com/search/";
        try {
            for (var i = 0; i < this.configuration.configuration.urls.length; i++) {
                var t = this.configuration.configuration.urls[i];
                if (t.key == "search") {
                    url = t.value;
                    break;
                }
            }
        }
        catch (exception) {
            console.log("notification occured before initlaizing configuration");
        }
        return new Promise(function (resolve) {
            _this.http.call(payload, url, "", true).subscribe(function (data) {
                _this.results = [];
                _this.events = [];
                _this.eventsCards = [];
                var cards = [];
                for (var i = 0; i < data.length; i++) {
                    var r = null;
                    if (_this.configuration.configuration.customer == "J")
                        r = new __WEBPACK_IMPORTED_MODULE_4__dtos_search_result_dto__["a" /* SearchResultDTO */](data[i].subject.annonce, _this.dtoFactory);
                    else
                        r = new __WEBPACK_IMPORTED_MODULE_4__dtos_search_result_dto__["a" /* SearchResultDTO */](data[i].subject.jobyer, _this.dtoFactory);
                    r.eventId = data[i].id_event;
                    r.read = data[i].read;
                    r.badges = [];
                    var b = new __WEBPACK_IMPORTED_MODULE_6__models_button_type_model__["a" /* ButtonType */]();
                    b.icon = data[i].read ? 'mail-open' : 'mail';
                    r.badges.push(b);
                    b.id = 'read-mark';
                    var c = r.toVojCard();
                    cards.push(c);
                    _this.events.push(r);
                }
                _this.eventsCards = cards;
                resolve(cards);
            });
        });
    };
    /**
     * Seek offers/jobyers based on composit query
     * @param SearchQuery object
     * @returns {Promise<T>}
     */
    SearchServiceProvider.prototype.criteriaSearch = function (query) {
        var _this = this;
        this.eventMode = false;
        var payload = {
            "service": "CRITERIA",
            "role": this.configuration.configuration.customer == "J" ? "jobyer" : "employer",
            "query": query
        };
        var url = "";
        for (var i = 0; i < this.configuration.configuration.urls.length; i++) {
            var t = this.configuration.configuration.urls[i];
            if (t.key == "search") {
                url = t.value;
                break;
            }
        }
        return new Promise(function (resolve) {
            _this.http.call(payload, url, "", true).subscribe(function (data) {
                _this.eventMode = false;
                _this.results = [];
                var cards = [];
                for (var i = 0; i < data.length; i++) {
                    var r = new __WEBPACK_IMPORTED_MODULE_4__dtos_search_result_dto__["a" /* SearchResultDTO */](data[i], _this.dtoFactory);
                    var c = r.toVojCard();
                    cards.push(c);
                    _this.results.push(r);
                }
                resolve(cards);
            });
        });
    };
    /**
     * Seek offers/jobyers based on natural language query
     * @param fullText
     * @returns {Promise<T>}
     */
    SearchServiceProvider.prototype.semanticSearch = function (fullText) {
        var _this = this;
        this.eventMode = false;
        var payload = {
            "service": "FULL_TEXT",
            "role": this.configuration.configuration.customer == "J" ? "jobyer" : "employer",
            "fullText": fullText
        };
        var url = "";
        for (var i = 0; i < this.configuration.configuration.urls.length; i++) {
            var t = this.configuration.configuration.urls[i];
            if (t.key == "search") {
                url = t.value;
                break;
            }
        }
        return new Promise(function (resolve) {
            _this.http.call(payload, url, "", true).subscribe(function (data) {
                _this.eventMode = false;
                _this.results = [];
                var cards = [];
                for (var i = 0; i < data.length; i++) {
                    var r = new __WEBPACK_IMPORTED_MODULE_4__dtos_search_result_dto__["a" /* SearchResultDTO */](data[i], _this.dtoFactory);
                    var c = r.toVojCard();
                    cards.push(c);
                    _this.results.push(r);
                }
                resolve(cards);
            });
        });
    };
    SearchServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__http_request_http_request__["a" /* HttpRequestProvider */],
            __WEBPACK_IMPORTED_MODULE_7__dtos_dto_strategy_search_search_dto_factory__["a" /* SearchDTOFactory */],
            __WEBPACK_IMPORTED_MODULE_5__voj_events_voj_events__["a" /* EventBusProvider */],
            __WEBPACK_IMPORTED_MODULE_3__config_voj_configuration__["a" /* Configuration */]])
    ], SearchServiceProvider);
    return SearchServiceProvider;
}());

//# sourceMappingURL=search-service.js.map

/***/ }),

/***/ 833:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VojTuple; });
var VojTuple = (function () {
    function VojTuple() {
    }
    return VojTuple;
}());

//# sourceMappingURL=voj-tuple.model.js.map

/***/ }),

/***/ 834:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchResultDTO; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_voj_card_model__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_text_type__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_voj_map_model__ = __webpack_require__(527);



var SearchResultDTO = (function () {
    function SearchResultDTO(row, factory) {
        this.factory = factory;
        this.eventMode = false;
        this.eventId = 0;
        this.read = false;
        var r = row.result;
        this.id = r.id;
        this.indexation = 0;
        this.name = r.name;
        this.phone = r.phone;
        this.email = r.email;
        this.availability = "Disponible";
        this.lat = r.latitude;
        this.lng = r.longitude;
        if (row.jobs && row.jobs.length > 0) {
            this.job = row.jobs[0].label;
            this.job += row.jobs[0].level == 2 ? '  expert' : ' débutant';
        }
        this.dataSource = row;
    }
    SearchResultDTO.prototype.toVojCard = function () {
        var result = new __WEBPACK_IMPORTED_MODULE_0__models_voj_card_model__["a" /* VojCardModel */]();
        result.id = this.id;
        result.title = new __WEBPACK_IMPORTED_MODULE_1__models_text_type__["a" /* TextType */]();
        result.title.label = this.name;
        result.thumbnail = "https://dev.vitonjob.com/resources/jobyer_avatar.png";
        result.cover = this.dataSource.cover ? this.dataSource.cover : "https://dev.vitonjob.com/resources/726.jpg";
        result.cover = result.cover.replace("http://", "https://");
        result.subtitles = [
            {
                icon: '',
                label: this.job
            },
            {
                icon: '',
                label: 'Disponible dès maintenant'
            }
        ];
        result.actions = this.factory.create().generateCardButtons();
        result.socialButtons = [{
                id: 'mail',
                icon: 'mail',
                label: '',
                action: function () {
                    console.log('SMS');
                }
            }, {
                id: 'call',
                icon: 'call',
                label: '',
                action: function () {
                    console.log('PHONE');
                }
            }, {
                id: 'fav',
                icon: 'star',
                label: '',
                action: function () {
                    console.log('FAV');
                }
            }];
        result.address = new __WEBPACK_IMPORTED_MODULE_2__models_voj_map_model__["a" /* VojMapModel */]();
        result.address.title = this.name;
        result.badges = this.badges;
        if (this.lat)
            result.address.lat = parseFloat(this.lat);
        if (this.lng)
            result.address.lng = parseFloat(this.lng);
        return result;
    };
    SearchResultDTO.prototype.toCardDetails = function () {
        var result = new __WEBPACK_IMPORTED_MODULE_0__models_voj_card_model__["a" /* VojCardModel */]();
        result.id = this.id;
        result.title = new __WEBPACK_IMPORTED_MODULE_1__models_text_type__["a" /* TextType */]();
        result.title.label = this.name;
        result.thumbnail = "https://dev.vitonjob.com/resources/jobyer_avatar.png";
        result.cover = this.dataSource.cover ? this.dataSource.cover : "https://dev.vitonjob.com/resources/726.jpg";
        result.subtitles = [
            {
                icon: '',
                label: this.job
            },
            {
                icon: 'clock',
                label: 'Disponible dès maintenant'
            }
        ];
        if (this.dataSource.address) {
            result.subtitles.push({
                icon: 'home',
                label: this.dataSource.address
            });
        }
        for (var i = 0; i < this.dataSource.jobs.length; i++) {
            result.subtitles.push({
                icon: 'briefcase',
                label: this.dataSource.jobs[i].label + (this.dataSource.jobs[i].level == 1 ? " débutant" : " expérimenté")
            });
        }
        for (var i = 0; i < this.dataSource.languages.length; i++) {
            result.subtitles.push({
                icon: 'globe',
                label: this.dataSource.languages[i].label + (this.dataSource.languages[i].level == 1 ? " débutant" : " courant")
            });
        }
        for (var i = 0; i < this.dataSource.qualities.length; i++) {
            result.subtitles.push({
                icon: 'flower',
                label: this.dataSource.qualities[i].label
            });
        }
        result.actions = result.actions = this.factory.create().generateDetailedCardButtons();
        result.socialButtons = [{
                id: 'mail',
                icon: 'mail',
                label: '',
                action: function () {
                    console.log('SMS');
                }
            }, {
                id: 'call',
                icon: 'call',
                label: '',
                action: function () {
                    console.log('PHONE');
                }
            }, {
                id: 'fav',
                icon: 'star',
                label: '',
                action: function () {
                    console.log('FAV');
                }
            }];
        result.address = new __WEBPACK_IMPORTED_MODULE_2__models_voj_map_model__["a" /* VojMapModel */]();
        result.address.title = this.name;
        result.badges = this.badges;
        if (this.lat)
            result.address.lat = parseFloat(this.lat);
        if (this.lng)
            result.address.lng = parseFloat(this.lng);
        return result;
    };
    return SearchResultDTO;
}());

//# sourceMappingURL=search-result.dto.js.map

/***/ }),

/***/ 835:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonType; });
var ButtonType = (function () {
    function ButtonType() {
    }
    return ButtonType;
}());

//# sourceMappingURL=button-type.model.js.map

/***/ }),

/***/ 836:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchDTOJobyer; });
var SearchDTOJobyer = (function () {
    function SearchDTOJobyer() {
    }
    SearchDTOJobyer.prototype.generateCardButtons = function () {
        return [{
                id: 'recruite',
                icon: '',
                label: "Cette offre m'intéresse",
                action: function () {
                    console.log('REC');
                }
            }, {
                id: 'details',
                icon: '',
                label: 'Détails',
                action: function () {
                    console.log('DTL');
                }
            }];
    };
    SearchDTOJobyer.prototype.generateDetailedCardButtons = function () {
        return [{
                id: 'recruite',
                icon: '',
                label: "Cette offre m'intéresse",
                action: function () {
                    console.log('REC');
                }
            }];
    };
    return SearchDTOJobyer;
}());

//# sourceMappingURL=search-dto-jobyer.js.map

/***/ }),

/***/ 837:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchDTOEmployer; });
var SearchDTOEmployer = (function () {
    function SearchDTOEmployer() {
    }
    SearchDTOEmployer.prototype.generateCardButtons = function () {
        return [{
                id: 'recruite',
                icon: '',
                label: 'Recruter',
                action: function () {
                    console.log('REC');
                }
            }, {
                id: 'details',
                icon: '',
                label: 'Détails',
                action: function () {
                    console.log('DTL');
                }
            }];
    };
    SearchDTOEmployer.prototype.generateDetailedCardButtons = function () {
        return [{
                id: 'recruite',
                icon: '',
                label: 'Recruter',
                action: function () {
                    console.log('REC');
                }
            }];
    };
    return SearchDTOEmployer;
}());

//# sourceMappingURL=search-dto-employer.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_request_http_request__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_voj_configuration__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccountService = (function () {
    function AccountService(http, configuration) {
        this.http = http;
        this.configuration = configuration;
        this.config = this.configuration.configuration;
    }
    AccountService.prototype.authenticate = function (phone, password) {
        var _this = this;
        var payload = {
            "service": "AUTH",
            "role": this.config.customer == "J" ? "jobyer" : "employer",
            "phone": phone,
            "password": password
        };
        var url;
        for (var i = 0; i < this.config.urls.length; i++) {
            var t = this.config.urls[i];
            if (t.key == "account") {
                url = t.value;
                break;
            }
        }
        return new Promise(function (resolve) {
            _this.http.call(payload, url, "", true).subscribe(function (data) {
                console.log(JSON.stringify(data));
                resolve(data);
            });
        });
    };
    AccountService.prototype.saveIdentity = function (identityDto, roleId) {
        var _this = this;
        var payload = {
            "service": "IDENTITY_SAVE",
            "role": this.config.customer == "J" ? "jobyer" : "employer",
            "civility": identityDto.civility,
            "lastName": identityDto.lastName,
            "middleName": identityDto.middleName,
            "firstName": identityDto.firstName,
            "roleId": roleId.toString()
        };
        //let url = (this.config.urls.filter(tuple => tuple.key === "identity")).value;
        var url;
        for (var i = 0; i < this.config.urls.length; i++) {
            var t = this.config.urls[i];
            if (t.key == "account") {
                url = t.value;
                break;
            }
        }
        return new Promise(function (resolve) {
            _this.http.call(payload, url, "", true).subscribe(function (data) {
                console.log(JSON.stringify(data));
                resolve(data);
            });
        });
    };
    AccountService.prototype.saveAddress = function (addressDto, roleId) {
        var _this = this;
        var payload = {
            "service": "ADDRESS_SAVE",
            //"id": roleId,
            "id": roleId.toString(),
            "role": this.config.customer == "J" ? "jobyer" : "employer",
            "name": addressDto.name,
            "number": addressDto.number,
            "street": addressDto.street,
            "zipCode": addressDto.zipCode.toString(),
            "city": addressDto.city,
        };
        //let url = (this.config.urls.filter(tuple => tuple.key === "identity")).value;
        var url;
        for (var i = 0; i < this.config.urls.length; i++) {
            var t = this.config.urls[i];
            if (t.key == "account") {
                url = t.value;
                break;
            }
        }
        return new Promise(function (resolve) {
            _this.http.call(payload, url, "", true).subscribe(function (data) {
                console.log(JSON.stringify(data));
                resolve(data);
            });
        });
    };
    AccountService.prototype.sendPassword = function (phone, email) {
        var _this = this;
        var payload = {
            "service": "SEND_PASSWD",
            "role": this.config.customer == "J" ? "jobyer" : "employer",
            "phone": phone,
            "email": email
        };
        var url;
        for (var i = 0; i < this.config.urls.length; i++) {
            var t = this.config.urls[i];
            if (t.key == "account") {
                url = t.value;
                break;
            }
        }
        return new Promise(function (resolve) {
            _this.http.call(payload, url, "", true).subscribe(function (data) {
                console.log(JSON.stringify(data));
                resolve(data);
            });
        });
    };
    AccountService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__http_request_http_request__["a" /* HttpRequestProvider */],
            __WEBPACK_IMPORTED_MODULE_2__config_voj_configuration__["a" /* Configuration */]])
    ], AccountService);
    return AccountService;
}());

//# sourceMappingURL=account-service.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IdentityPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_voj_configuration__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_account_service_account_service__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__main_address_main_address__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_voj_notification_voj_notification_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_navigation_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_utils__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var IdentityPage = (function () {
    function IdentityPage(configurationService, accountService, viewCtrl, storage, notification, navigationService, navParams) {
        var _this = this;
        this.configurationService = configurationService;
        this.accountService = accountService;
        this.viewCtrl = viewCtrl;
        this.storage = storage;
        this.notification = notification;
        this.navigationService = navigationService;
        this.navParams = navParams;
        this.isMobile = false;
        this.config = this.configurationService.configuration;
        this.isInscription = this.navParams.data.isInscription;
        this.config.isLargeScreen ? this.isMobile = false : this.isMobile = true;
        // Set page header
        this.dataPageHeader = {
            title: 'Ma civilité',
            actions: [
                {
                    id: 'help',
                    label: '',
                    icon: 'help',
                    action: function () {
                        console.log('Click help button.');
                    }
                }
            ],
            style: 'any',
            isCanceled: true
        };
        // Set form data
        this.formData = {
            title: '',
            fields: [
                // Radio for civility
                {
                    type: 'radio',
                    value: 'Mme',
                    label: 'Civilité',
                    dataset: [
                        { id: 1, key: 'Mme', value: 'Mme' },
                        { id: 2, key: 'Mr', value: 'Mr' }
                    ],
                    required: !this.isInscription,
                    visible: true,
                    id: 'civility',
                    name: 'civility',
                    action: function () {
                        _this.checkCivility();
                    }
                },
                // Text for name
                {
                    placeholder: '',
                    type: 'text',
                    value: "",
                    label: 'Nom',
                    required: !this.isInscription,
                    readonly: false,
                    visible: true,
                    min: 0,
                    max: 100,
                    regex: '^[A-Za-z]*$',
                    id: '',
                    name: 'lastName'
                },
                // Text for maiden name
                {
                    placeholder: '',
                    type: 'text',
                    value: "",
                    label: 'Nom de jeune fille',
                    required: false,
                    readonly: false,
                    visible: true,
                    min: 0,
                    max: 100,
                    regex: '^[A-Za-z]*$',
                    id: '',
                    name: 'middleName'
                },
                // Text for Prénom
                {
                    placeholder: '',
                    type: 'text',
                    value: "",
                    label: 'Prénom',
                    required: !this.isInscription,
                    readonly: false,
                    visible: true,
                    min: 0,
                    max: 100,
                    regex: '^[A-Za-z]*$',
                    id: '',
                    name: 'firstName'
                },
            ],
            submit: {
                id: '',
                icon: '',
                label: (this.isInscription ? 'Suivant' : 'Valider'),
                action: function (event) {
                    console.log('Present Information Resume page.');
                    _this.saveIdentity();
                }
            }
        };
    }
    IdentityPage.prototype.checkCivility = function () {
        if (this.formData.fields[0].value === 'Mme') {
            this.formData.fields[2].visible = true;
        }
        else if (this.formData.fields[0].value === 'Mr') {
            this.formData.fields[2].visible = false;
        }
        else {
            this.formData.fields[2].visible = false;
        }
    };
    IdentityPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get("currentUser").then(function (data) {
            if (!data) {
                return;
            }
            _this.currentUser = JSON.parse(data);
            // Set form data
            _this.formData.fields.filter(function (f) { return f.name === "civility"; })[0].value = (__WEBPACK_IMPORTED_MODULE_8__utils_utils__["a" /* ObjectUtils */].isEmpty(_this.currentUser.identity.civility) ? "Mme" : _this.currentUser.identity.civility);
            _this.formData.fields.filter(function (f) { return f.name === "lastName"; })[0].value = _this.currentUser.identity.lastName;
            _this.formData.fields.filter(function (f) { return f.name === "middleName"; })[0].value = _this.currentUser.identity.middleName;
            _this.formData.fields.filter(function (f) { return f.name === "firstName"; })[0].value = _this.currentUser.identity.firstName;
        });
    };
    IdentityPage.prototype.saveIdentity = function () {
        var _this = this;
        //if all fields are empty, ignore this step and go to the next page
        var ignoreThisStep = !__WEBPACK_IMPORTED_MODULE_8__utils_utils__["a" /* ObjectUtils */].isFormNotEmpty(this.formData.fields);
        if (ignoreThisStep && this.isInscription) {
            this.goToMainAdressPage();
            return;
        }
        //if at least one field is filled, save identity data
        var firstname = this.formData.fields.filter(function (f) { return f.name === "firstName"; })[0].value;
        var identityDto = {
            civility: this.formData.fields.filter(function (f) { return f.name === "civility"; })[0].value,
            lastName: this.formData.fields.filter(function (f) { return f.name === "lastName"; })[0].value.toUpperCase(),
            middleName: this.formData.fields.filter(function (f) { return f.name === "middleName"; })[0].value.toUpperCase(),
            //first letter in uppercase, like 'Amal'
            firstName: firstname.charAt(0).toUpperCase() + firstname.slice(1)
        };
        this.accountService.saveIdentity(identityDto, this.currentUser.id).then(function (data) {
            if (data.status == "success") {
                //save identity data in the local storage
                _this.currentUser.identity = identityDto;
                _this.storage.set("currentUser", JSON.stringify(_this.currentUser));
                //in the case of inscription: we should dismiss the identity modal/page and show the MainAddress modal/page
                if (_this.isInscription) {
                    _this.goToMainAdressPage();
                }
                else {
                    var notif = {
                        icon: "star",
                        title: "Sauvegarde réussie",
                        message: "Vos informations ont bien été sauvegardées",
                        buttons: [{ id: "0", icon: "star", label: "OK", action: _this.closeNotif }],
                        backdropDismiss: true
                    };
                    _this.notification.present(notif);
                }
            }
            else {
                console.log("une erreur est survenue lors de l'enregistrement des données");
                console.log(data.error);
            }
        });
    };
    /*
     * Dismissing the current modal (in the case of inscription), and going to the MainAddress page
     */
    IdentityPage.prototype.goToMainAdressPage = function () {
        this.navigationService.dismiss(this.viewCtrl);
        var vojPage = { page: __WEBPACK_IMPORTED_MODULE_5__main_address_main_address__["a" /* MainAddressPage */], isModal: true, params: { isInscription: this.isInscription } };
        this.navigationService.navigate("main", vojPage);
    };
    IdentityPage.prototype.closeNotif = function () {
        this.viewCtrl.dismiss();
    };
    IdentityPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'identity-page',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/account-module/identity/identity.html"*/'<voj-page-header [data]="dataPageHeader"></voj-page-header>\n<!--<div [ngClass]="!config.isLargeScreen ? \'sign-up-container\' : \'\'">-->\n  <!--<div [ngClass]="!config.isLargeScreen ? \'sign-up-child-container\' : \'\'">-->\n    <div [ngClass]="isMobile ? \'identity-container\' : \'\'" class="voj-content">\n      <div class="voj-form-container">\n        <voj-form [data]=\'formData\'></voj-form>\n      </div>\n    </div>\n  <!--</div>-->\n<!--</div>-->'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/account-module/identity/identity.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__config_voj_configuration__["a" /* Configuration */],
            __WEBPACK_IMPORTED_MODULE_2__providers_account_service_account_service__["a" /* AccountService */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["u" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_6__components_voj_notification_voj_notification_service__["a" /* VojNotificationService */],
            __WEBPACK_IMPORTED_MODULE_7__services_navigation_service__["a" /* NavigationService */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* NavParams */]])
    ], IdentityPage);
    return IdentityPage;
}());

//# sourceMappingURL=identity.js.map

/***/ }),

/***/ 853:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VojPageHeader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_voj_configuration__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_navigation_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_landing_page_landing_page__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VojPageHeader = (function () {
    function VojPageHeader(platform, navigationService, configurationService, viewCtrl) {
        this.platform = platform;
        this.navigationService = navigationService;
        this.configurationService = configurationService;
        this.viewCtrl = viewCtrl;
        this.showHeader = true;
        this.config = this.configurationService.configuration;
    }
    VojPageHeader.prototype.ngOnInit = function () {
        this.activeNav = this.navigationService.getActiveNav(this.viewCtrl);
        //canGoBack and canClose should be initialized in ngOnInit to make sure that the component is initialized
        //Going back is allowed if the page : isn't a modal AND isn't the first in the nav stack
        this.canGoBack = (!this.viewCtrl.isOverlay && !this.viewCtrl.isFirst() && this.viewCtrl.enableBack());
        //Closing a page is allowed if the page : is a modal OR is first in the stack in large screen
        //only the second and third navs are allowed to be hiding
        this.canClose = this.viewCtrl.isOverlay || (this.viewCtrl.isFirst() && this.config.isLargeScreen && this.activeNav.name != this.navigationService.getNav1().name);
    };
    VojPageHeader.prototype.closePage = function () {
        var _this = this;
        //if modal: dismiss it
        if (this.viewCtrl.isOverlay) {
            this.viewCtrl.dismiss();
            return;
        }
        //if page in large screen: set a default root page (LandingPage) and hide the nav
        this.activeNav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_landing_page_landing_page__["a" /* LandingPage */]).then(function () {
            _this.navigationService.hide(_this.activeNav.name);
        });
        //if page in small screen : hiding is not allowed
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('data'),
        __metadata("design:type", Object)
    ], VojPageHeader.prototype, "data", void 0);
    VojPageHeader = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'voj-page-header',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-page-header/voj-page-header.html"*/'<div *ngIf="showHeader">\n    <ion-navbar [ngClass]="config.isLargeScreen ? \'desktop-header\' : \'mobile-header\'">\n        <!-- Back button -->\n        <!--<button class="header-back" (click)="goToPreviousPage()" *ngIf="canGoBack">\n            <ion-icon name="arrow-round-back" ></ion-icon>\n        </button>-->\n    \n        <!-- Close button -->\n        <button class="header-back" (click)="closePage()" *ngIf="canClose">\n            <span>\n                <ion-icon name="close"></ion-icon>\n            </span>\n        </button>\n    \n        <div class="page-header-title">{{ data.title | translate }}</div>\n\n        <ion-buttons end *ngFor="let button of data.actions">\n            <button ion-button color="danger" *ngIf="button.id === \'notification\' && config.isLargeScreen" (click)="button.action()">\n                <ion-badge  color="danger" *ngIf="button.id === \'notification\' && config.isLargeScreen ">{{button.label}}</ion-badge>\n                <!--ion-icon name="alert" style="font-size: x-large" icon-right></ion-icon-->\n            </button>\n        </ion-buttons>\n        \n        <!--<span *ngIf="!config.isLargeScreen" class="voj-page-header-buttons">  || button.id === \'notification\'-->\n        <ion-buttons end >\n            <span *ngFor="let button of data.actions">\n                <button class="page-header-button" *ngIf="!config.isLargeScreen"\n                        ion-button (click)="button.action()">\n                    <ion-badge class="fab-notification" *ngIf="!config.isLargeScreen" color="danger">{{button.label}}</ion-badge>\n                    <ion-icon name="{{button.icon}}" style="color:white; font-size: xx-large"></ion-icon>\n                </button>\n            </span>\n        </ion-buttons>\n    </ion-navbar>\n</div>\n'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-page-header/voj-page-header.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__services_navigation_service__["a" /* NavigationService */],
            __WEBPACK_IMPORTED_MODULE_2__config_voj_configuration__["a" /* Configuration */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */]])
    ], VojPageHeader);
    return VojPageHeader;
}());

//# sourceMappingURL=voj-page-header.js.map

/***/ }),

/***/ 854:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VojFooterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__voj_footer__ = __webpack_require__(855);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VojFooterModule = (function () {
    function VojFooterModule() {
    }
    VojFooterModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__voj_footer__["a" /* VojFooter */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__voj_footer__["a" /* VojFooter */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__voj_footer__["a" /* VojFooter */]
            ]
        })
    ], VojFooterModule);
    return VojFooterModule;
}());

//# sourceMappingURL=voj-footer.module.js.map

/***/ }),

/***/ 855:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VojFooter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_voj_configuration__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VojFooter = (function () {
    function VojFooter(configurationService) {
        this.configurationService = configurationService;
        console.log('Hello VojFooter Component');
        this.config = this.configurationService.configuration;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], VojFooter.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], VojFooter.prototype, "testVar", void 0);
    VojFooter = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'voj-footer',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-footer/voj-footer.html"*/'<!-- Generated template for the VojFooter component -->\n<!--div-->\n<ion-footer *ngIf="config.isLargeScreen" >\n	<ion-toolbar>\n\n		<ion-buttons end *ngIf="data">\n			<button ion-button icon-left *ngFor="let btn of data.actions" (click)="btn.action()" [ngStyle]="data.style">\n				<ion-icon name="{{btn.icon}}"></ion-icon>\n				{{btn.label}}\n			</button>\n		</ion-buttons>\n\n		{{testVar}}\n	</ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-footer/voj-footer.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__config_voj_configuration__["a" /* Configuration */]])
    ], VojFooter);
    return VojFooter;
}());

//# sourceMappingURL=voj-footer.js.map

/***/ }),

/***/ 856:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VojHeader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VojHeader = (function () {
    function VojHeader() {
        console.log('Hello VojHeader Component');
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('data'),
        __metadata("design:type", Object)
    ], VojHeader.prototype, "data", void 0);
    VojHeader = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'voj-header',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-header/voj-header.html"*/'<!-- Generated template for the VojHeader component -->\n<ion-header no-border>\n	<ion-navbar *ngIf="isWeb" class="generic">\n		<ion-item class="voj-style" no-lines>\n			<button ion-button icon-right outline item-end>\n				{{searchButtonTitle}}\n				<!--ion-icon name="search"></ion-icon-->\n			</button>\n			<button ion-button icon-right outline item-end>\n				{{offerButtonTitle}}\n				<!--ion-icon name="search"></ion-icon-->\n			</button>\n			<button ion-button icon-right outline item-end>\n				{{missionButtonTitle}}\n				<!--ion-icon name="search"></ion-icon-->\n			</button>\n			<button ion-button icon-right outline item-end>\n				{{accountButtonTitle}}\n				<!--ion-icon name="person"></ion-icon-->\n			</button>\n		</ion-item>\n		<div padding>\n			<ion-segment>\n				<ion-segment-button value="1" class="voj-style">\n					<span ion-text class="voj-style">8</span> Contrats en attente\n				</ion-segment-button>\n				<ion-segment-button value="3" class="voj-style">\n					<span ion-text class="voj-style">3</span>\n					Pointages à valider\n				</ion-segment-button>\n				<ion-segment-button value="4" class="voj-style">\n					<span ion-text class="voj-style">0</span>\n					Missions à clôturer\n				</ion-segment-button>\n			</ion-segment>\n		</div>\n	</ion-navbar>\n\n	<!--ion-navbar *ngIf="isViewNavbar && isWeb" >\n	  <!-- Sub navigation bar, content depends on every view -->\n	<!--ion-title>test</ion-title>\n  </ion-navbar-->\n\n\n	<ion-navbar *ngIf="!isWeb">\n		<ion-segment [(ngModel)]="icons" color="secondary">\n			<ion-segment-button value="camera">\n				<!--ion-icon name="camera"></ion-icon-->\n				{{firstSegment}}\n			</ion-segment-button>\n			<ion-segment-button value="bookmark">\n				<!--ion-icon name="bookmark"></ion-icon-->\n				{{secondSegment}}\n			</ion-segment-button>\n		</ion-segment>\n		<ion-buttons start>\n			<button ion-fab icon-only>\n				<ion-icon name="search"></ion-icon>\n			</button>\n		</ion-buttons>\n	</ion-navbar>\n\n	<ion-navbar *ngIf="!isWeb">\n		<ion-searchbar></ion-searchbar>\n		<ion-searchbar></ion-searchbar>\n	</ion-navbar>\n</ion-header>\n'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-header/voj-header.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], VojHeader);
    return VojHeader;
}());

//# sourceMappingURL=voj-header.js.map

/***/ }),

/***/ 857:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VojList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the VojList component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var VojList = (function () {
    function VojList() {
        console.log('Hello VojList Component');
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('cards'),
        __metadata("design:type", Object)
    ], VojList.prototype, "cards", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('title'),
        __metadata("design:type", String)
    ], VojList.prototype, "title", void 0);
    VojList = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'voj-list',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-list/voj-list.html"*/'<!-- Generated template for the VojList component -->\n<div>\n	<ion-list-header>{{title}}</ion-list-header>\n	<ion-list>\n		<div *ngFor="let card of cards">\n			<!--<voj-card [title]="card.title" [content]="card.content" [action-name]="card.actionName"> </voj-card>-->\n		</div>\n	</ion-list>\n</div>\n'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-list/voj-list.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], VojList);
    return VojList;
}());

//# sourceMappingURL=voj-list.js.map

/***/ }),

/***/ 858:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VojForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the VojForm component.
 *
 */
var VojForm = (function () {
    function VojForm(formBuilder) {
        this.formBuilder = formBuilder;
        this.arePasswordsIdentical = true; // Passwords identity validation
        this.selectedItems = [];
        this.selectedCustomItems = [];
        this.showList = false;
        this.submitAttempt = false; // Form validation
        this.documents = {
            uploadedFileName: '',
            uploadedObj: {},
            uploadedItems: []
        };
    }
    VojForm.prototype.checkNgModel = function (action) {
        // Call action if exists
        if (typeof action !== 'undefined') {
            action();
        }
    };
    VojForm.prototype.checkValidaionAvailability = function (type) {
        if (type === 'text' || type === 'textarea' || type === 'number' || type === 'tel' || type === 'week' ||
            type === 'url' || type === 'time' || type === 'date' || type === 'color' || type === 'mail' ||
            type === 'month' || type === 'password' || type === 'password-visible' || type === 'search') {
            return true;
        }
        else {
            return false;
        }
    };
    VojForm.prototype.formValidationInit = function (fieldsData) {
        var validationConfig = {};
        for (var i = 0; i < fieldsData.length; i++) {
            // Check available types for validation
            // if (!this.checkValidaionAvailability(fieldsData[i].type)) {
            // 	continue;
            // }
            if (fieldsData[i].dataset3) {
                for (var j = 0; j < fieldsData[i].dataset3.length; j++) {
                    var validators_1 = [];
                    console.log('fieldsData[i].dataset3[j]', fieldsData[i].dataset3[j]);
                    if (fieldsData[i].dataset3[j].subdata) {
                        validationConfig[fieldsData[i].dataset3[j].subdata.name1] = ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose(validators_1)];
                        validationConfig[fieldsData[i].dataset3[j].subdata.name2] = ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose(validators_1)];
                    }
                }
            }
            var validators = [];
            // Min validation
            if (fieldsData[i].min !== null && typeof fieldsData[i].min !== 'undefined') {
                validators.push(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(fieldsData[i].min));
            }
            // Max validation
            if (fieldsData[i].max !== null && typeof fieldsData[i].max !== 'undefined') {
                validators.push(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].maxLength(fieldsData[i].max));
            }
            // Regex validation
            if (fieldsData[i].regex !== null && fieldsData[i].regex !== '' && typeof fieldsData[i].regex !== 'undefined') {
                validators.push(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].pattern(fieldsData[i].regex));
            }
            // Required validation
            if (fieldsData[i].required === true) {
                validators.push(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required);
            }
            validationConfig[fieldsData[i].name] = ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose(validators)];
        }
        this.dynamicalForm = this.formBuilder.group(validationConfig);
    };
    VojForm.prototype.ngOnInit = function () {
        console.log('this.data:', this.data);
        this.formValidationInit(this.data.fields);
    };
    VojForm.prototype.onSubmit = function (formData, action) {
        console.log("dynamicalForm----->", this.dynamicalForm);
        // Form validation
        this.submitAttempt = true;
        // Passwords identical validation reset
        this.arePasswordsIdentical = true;
        if (!this.dynamicalForm.valid) {
            console.log('Error in validation.');
        }
        else {
            console.log('Success validation.');
            console.log('dynamicalForm value:', this.dynamicalForm.value);
            // Check password identity
            if (this.dynamicalForm.value.userPassword && this.dynamicalForm.value.passwordConfirmation &&
                (this.dynamicalForm.value.userPassword !== this.dynamicalForm.value.passwordConfirmation)) {
                // Passwords are not identical
                console.log('Passwords are not identical.');
                this.arePasswordsIdentical = false;
            }
            else {
                console.log("Form data:", formData);
                // Call action
                action();
            }
        }
    };
    VojForm.prototype.customSelectValidation = function (value) {
        // Check for customQualitiesSelect existing
        if ('customQualitiesSelect' in value === false) {
            return false;
        }
        var customSelectExists = 'customQualitiesSelect' in value;
        var selectedItemsLength = this.selectedItems.length;
        return !(customSelectExists === true && selectedItemsLength > 0);
    };
    // Custom Select
    VojForm.prototype.onChangeSelectedItems = function (selectedValue, index) {
        var _this = this;
        // Clear select input
        setTimeout(function () {
            _this.data.fields[index].value = null;
        });
        if (!__WEBPACK_IMPORTED_MODULE_3_lodash___default.a.find(this.selectedItems, function (item) { return item == selectedValue; })) {
            selectedValue ? this.selectedItems.push(selectedValue) : false;
        }
    };
    VojForm.prototype.deleteSelectedItem = function (selectedValue) {
        selectedValue ? __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.pull(this.selectedItems, selectedValue) : false;
    };
    VojForm.prototype.deleteSelectedCustomItem = function (selectedValue) {
        selectedValue ? __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.pull(this.selectedCustomItems, selectedValue) : false;
    };
    VojForm.prototype.managePassword = function (value, fieldIndex) {
        // Change password visibility
        value._type === 'password' ?
            this.data.fields[fieldIndex].type = 'password-visible' : this.data.fields[fieldIndex].type = 'password';
    };
    VojForm.prototype.addCustomSelect = function (val1, val2) {
        if (this.сustomSubItem1 && this.сustomSubItem1.length && this.сustomSubItem2 && this.сustomSubItem2.length) {
            this.selectedCustomItems.push(this.сustomSubItem1 + " - " + this.сustomSubItem2);
            val1._value = '';
            val1._text = '';
            val2._value = '';
            val2._text = '';
            this.сustomSubItem1 = '';
            this.сustomSubItem2 = '';
        }
    };
    VojForm.prototype.onSelecteCustomItems = function (val) {
        if (val.id === 4 || val.id === 5 || val.id === 6) {
            this.сustomSubItem1 = val.value;
        }
        else {
            this.сustomSubItem2 = val.value;
        }
    };
    /* Custom Input  START*/
    VojForm.prototype.getItems = function (event, sourceArr) {
        if (!sourceArr) {
            return;
        }
        var val = event.target.value;
        if (val && val.trim() != '') {
            // Filter the items
            this.itemsForAutocomplete = sourceArr.filter(function (item) {
                return (item.key.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
            // Show the results
            this.showList = true;
        }
        else {
            // hide the results when the query is empty
            this.showList = false;
        }
    };
    VojForm.prototype.selectTip = function (value, field) {
        value ? field.value = value : false;
        this.showList = false;
    };
    /* Custom Input  END*/
    // Custom Select for Uploading items
    VojForm.prototype.fileEvent = function (selectedFile) {
        var files = selectedFile.srcElement.files;
        if (files[0]) {
            this.documents.uploadedFileName = files[0].name;
        }
        else {
            return false;
        }
        // Encode the file to base64
        var reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = function () {
            // console.log('Current file in base64:', reader.result);
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
        // if (!_.find(this.uploadedItems, item => item == this.uploadedFileName) && files[0]) {
        //     this.uploadedFileName ? this.uploadedItems.push(this.uploadedFileName) : false;
        // }
    };
    // Add file name to local Array with uploaded items
    VojForm.prototype.pushFile = function () {
        this.documents.uploadedObj = {};
        this.documents.uploadedObj['name'] = this.documents.uploadedFileName;
        this.documents.uploadedObj['type'] = this.getFieldName().type;
        this.documents.uploadedFileName ? this.documents.uploadedItems.push(this.documents.uploadedObj) : false;
    };
    // Getting necessary value and message of the field
    VojForm.prototype.getFieldName = function () {
        if (!this.checkDocument('ID')) {
            return {
                title: 'You have to load your ID',
                type: 'ID'
            };
        }
        else if (!this.checkDocument('vital card')) {
            return {
                title: 'You must load your vital card',
                type: 'vital card'
            };
        }
        else if (!this.checkDocument('proof of domicile')) {
            return {
                title: 'You have to load your proof of residence',
                type: 'proof of domicile'
            };
        }
        else {
            return {
                title: 'You can load any other document',
                type: 'document label'
            };
        }
    };
    VojForm.prototype.checkDocument = function (type) {
        for (var i = 0; i < this.documents.uploadedItems.length; i++) {
            if (this.documents.uploadedItems[i].type === type) {
                return true;
            }
        }
        return false;
    };
    VojForm.prototype.deleteUploadedItem = function (index) {
        this.documents.uploadedItems.splice(index, 1);
        // selectedValue ? _.pull(this.uploadedItems, selectedValue) : false;
    };
    VojForm.prototype.downloadUploadedItem = function (item) {
        console.log('Downloaded item:', item);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('data'),
        __metadata("design:type", Object)
    ], VojForm.prototype, "data", void 0);
    VojForm = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'voj-form',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-form/voj-form.html"*/'<!-- Generated template for the VojForm component -->\n<div class="calendar-container">\n    <h2 [innerHTML]="data.title" *ngIf="data.title && data.title.length > 0"></h2>\n    <form #formComponent="ngForm" [formGroup]="dynamicalForm" (ngSubmit)="onSubmit(formComponent, data.submit.action)" novalidate>\n\n        <div class="dynamical-form" id="{{ field.id }}" *ngFor="let field of data.fields; let fieldIndex = index">\n            <button ion-button class="custom-btn" *ngIf="field.type === \'button\'" [hidden]="!field.visible"\n                    (click)="field.action()" type="button">\n                {{ field.label | translate }}\n            </button>\n\n            <ion-list *ngIf="field.type === \'text\' || field.type === \'textarea\'\n							|| field.type === \'number\' || field.type === \'tel\'">\n                <ion-item class="custom-input" [hidden]="!field.visible">\n                    <ion-label stacked *ngIf="field.label && field.label.length > 0">{{field.label | translate}}\n                        <span class="asterisk" *ngIf="field.required">*</span></ion-label>\n                    <ion-input type="{{ field.type }}"\n                               [readonly]="field.readonly"\n                               required="{{field.required}}"\n                               placeholder="{{field.placeholder | translate}}"\n                               maxlength="{{field.max}}"\n                               [(ngModel)]="field.value"\n                               (ngModelChange)="field.value = $event; checkNgModel(field.action)"\n                               (keyup)="getItems($event, field.dataset)"\n                               formControlName="{{field.name}}"></ion-input>\n                </ion-item>\n                <div *ngIf="showList && field.dataset" class="input-autocomplete">\n                    <ion-list>\n                        <ion-item *ngFor="let item of itemsForAutocomplete" (click)="selectTip(item.value, field)">\n                            {{ item.value }}\n                        </ion-item>\n                    </ion-list>\n                </div>\n            </ion-list>\n\n            <ion-list *ngIf="field.type === \'week\' || field.type === \'url\' || field.type === \'time\'\n             || field.type === \'color\' || field.type === \'mail\' || field.type === \'month\'">\n                <ion-item class="custom-input">\n                    <ion-label stacked *ngIf="field.label && field.label.length > 0">{{ field.label | translate }}\n                        <span class="asterisk" *ngIf="field.required">*</span></ion-label>\n                    <ion-input type="text"\n                               autocomplete="on"\n                               [hidden]="!field.visible"\n                               [readonly]="field.readonly"\n                               placeholder="{{field.placeholder | translate}}"\n                               maxlength="{{field.max}}"\n                               [(ngModel)]="field.value"\n                               (ngModelChange)="field.value = $event; checkNgModel(field.action)"\n                               formControlName="{{field.name}}"></ion-input>\n                </ion-item>\n            </ion-list>\n\n            <ion-list *ngIf="field.type === \'date\'">\n                <ion-item class="custom-input">\n                    <ion-label stacked *ngIf="field.label && field.label.length > 0">{{ field.label | translate }}\n                        <span class="asterisk" *ngIf="field.required">*</span></ion-label>\n                    <ion-input type="date"\n                               [hidden]="!field.visible"\n                               [readonly]="field.readonly"\n                               [disabled]="field.disabled"\n                               [(ngModel)]="field.value"\n                               (ngModelChange)="field.value = $event; checkNgModel(field.action)"\n                               formControlName="{{field.name}}"\n                               min="{{field.min}}"\n                               max="{{field.max}}"></ion-input>\n                </ion-item>\n            </ion-list>\n\n            <ion-list *ngIf="field.type === \'password\' || field.type === \'password-visible\' || field.type === \'search\'">\n                <ion-item class="custom-input custom-input-password">\n                    <ion-label stacked>{{ field.label | translate }}\n                        <span class="asterisk" *ngIf="field.required">*</span></ion-label>\n                    <ion-input type="{{ (field.type === \'password\') ? \'password\' : \'text\' }}"\n                               autocomplete="on"\n                               clearOnEdit="false"\n                               [hidden]="!field.visible"\n                               [readonly]="field.readonly"\n                               placeholder="{{field.placeholder | translate}}"\n                               maxlength="{{field.max}}"\n                               [(ngModel)]="field.value"\n                               (ngModelChange)="field.value = $event"\n                               formControlName="{{field.name}}" #inputPass></ion-input>\n                    <button ion-button icon-only type="button" item-right\n                            (click)="managePassword(inputPass, fieldIndex)">\n                        <ion-icon name="{{ field.type === \'password\' ? \'ios-eye\' : field.type === \'password-visible\' ?\n                                        \'ios-eye-off\' : \'ios-search\'}}">\n                        </ion-icon>\n                    </button>\n                </ion-item>\n            </ion-list>\n\n            <ion-list *ngIf="field.type === \'range\'">\n                <ion-item>\n                    <ion-range min="{{field.min}}" max="{{field.max}}" [(ngModel)]="field.value" color="secondary"\n                               [hidden]="!field.visible" formControlName="{{field.name}}">\n                        <ion-label range-left>{{field.min}}</ion-label>\n                        <ion-label range-right>{{field.max}}</ion-label>\n                    </ion-range>\n                </ion-item>\n            </ion-list>\n\n            <ion-list *ngIf="field.type === \'select\'">\n                <ion-item class="custom-select">\n                    <ion-label>{{ field.label | translate }}\n                        <span class="asterisk" *ngIf="field.required">*</span></ion-label>\n                    <ion-select [(ngModel)]="field.value"\n                                cancelText="{{ \'FORM.CANCEL_BTN\' | translate }}"\n                                [hidden]="!field.visible"\n                                [disabled]="field.readonly"\n                                required="{{field.required}}"\n                                (ngModelChange)="field.value = $event; checkNgModel(field.action)"\n                                formControlName="{{field.name}}">\n                        <ion-option value="{{subSelect.value}}" *ngFor="let subSelect of field.dataset">\n                            {{ subSelect.key }}\n                        </ion-option>\n                    </ion-select>\n                </ion-item>\n            </ion-list>\n\n            <!-- Radio -->\n            <ion-list radio-group class="custom-radio" *ngIf="field.type === \'radio\'"\n                      [(ngModel)]="field.value" formControlName="{{field.name}}" (ngModelChange)="checkNgModel(field.action)">\n                <ion-list-header class="voj-radio-label" *ngIf="field.label && field.label.length > 0">\n                    {{ field.label | translate }}\n                </ion-list-header>\n                <ion-item class="voj-radio-button" *ngFor="let radioItem of field.dataset">\n                    <ion-label>{{ radioItem.key | translate }}</ion-label>\n                    <ion-radio value="{{radioItem.value}}"></ion-radio>\n                </ion-item>\n            </ion-list>\n\n            <!-- Radio with inputs -->\n            <ion-list radio-group class="custom-radio-with-inputs" *ngIf="field.type === \'radioWithInputs\'"\n                      formControlName="{{field.name}}"\n                      [(ngModel)]="field.value">\n                <div *ngFor="let radioItem of field.dataset3"\n                     (click)="field.value=radioItem.value" class="custom-radio-wrap">\n                    <div [ngClass]="field.value===radioItem.value ? \'\' : \'selectedItem\'" class="custom-radio-1">\n                        <ion-icon\n                                name="{{field.value===radioItem.value ? \'radio-button-on\' : \'radio-button-off\'}}"\n                        class="custom-radio-icon"></ion-icon>\n                        <label class="custom-radio-label-1">{{radioItem.key || \'\'}}</label>\n                    </div>\n                    <div *ngIf="radioItem.subdata" class="custom-radio-2"\n                         [ngClass]="field.value === radioItem.value ? \'\' : \'selectedItem\'">\n                            <div class="radio-field-wrap">\n                                <label class="custom-radio-label-2">{{radioItem.subdata.key1}}</label>\n                                <input class="custom-radio-input"\n                                       formControlName="{{radioItem.subdata.name1}}"\n                                       [(ngModel)]="radioItem.subdata.value1"\n                                       required="{{field.value===radioItem.value ? field.required : false}}"\n                                       pattern="{{field.regex}}" type="text"\n                                       placeholder="{{radioItem.subdata.placeholder1 | translate}}">\n                            </div>\n                            <div class="radio-field-wrap">\n                                <label class="custom-radio-label-2">{{radioItem.subdata.key2}}</label>\n                                <input class="custom-radio-input" [(ngModel)]="radioItem.subdata.value2"\n                                       formControlName="{{radioItem.subdata.name2}}"\n                                       required="{{field.value===radioItem.value ? field.required : false}}"\n                                       pattern="{{field.regex}}" type="text"\n                                       placeholder="{{radioItem.subdata.placeholder2 | translate}}">\n                            </div>\n                    </div>\n                </div>\n            </ion-list>\n\n            <!-- Custom Select -->\n            <div class="custom-select-container" *ngIf="field.type === \'customSelect\'">\n                <div>{{ field.label | translate }}</div>\n                <ion-list class="custom-select-btn">\n                    <ion-label stacked>{{ field.label | translate }}</ion-label>\n                    <ion-item class="custom-select">\n                        <ion-select [(ngModel)]="field.value"\n                                    (ngModelChange)="onChangeSelectedItems($event, fieldIndex)"\n                                    [hidden]="!field.visible"\n                                    formControlName="{{field.name}}">\n                            <ion-option value="{{subSelect.value}}" *ngFor="let subSelect of field.dataset">\n                                {{ subSelect.value }}\n                            </ion-option>\n                        </ion-select>\n                    </ion-item>\n                    <!--<button ion-button icon-right icon-only class="custom-select-btn-inner">-->\n                    <!--<ion-icon ios="md-add" md="md-add"></ion-icon>-->\n                    <!--</button>-->\n                </ion-list>\n\n                <div class="custom-select-btn-attachment" *ngFor="let item of selectedItems">\n                    <div>{{ item }}</div>\n                    <button ion-button icon-only class="custom-select-btn-attachment-inner" type="button"\n                            (click)="deleteSelectedItem(item)">\n                        <ion-icon ios="md-trash" md="md-trash"></ion-icon>\n                    </button>\n                </div>\n            </div>\n\n            <!-- Custom Two Selects -->\n            <div class="custom-select-container custom-select2" *ngIf="field.type === \'customTwoSelects\'">\n                <div>{{ field.label | translate }}</div>\n                <!--ion-list class="custom-select-btn"-->\n                <!--div class="custom-layer"-->\n                <ion-grid fixed no-padding>\n                    <ion-row align-items-center>\n                        <ion-col col-sm-10>\n                                <ion-row>\n\n                                    <ion-item class="custom-select" no-lines>\n                                        <ion-select [(ngModel)]="field.value"\n                                                    [hidden]="!field.visible"\n                                                    formControlName="{{field.name}}"\n                                                    required="{{field.required}}" #customSelect1>\n                                            <ion-option value="{{subSelect.value}}"\n                                                        *ngFor="let subSelect of field.dataset"\n                                                        (ionSelect)="onSelecteCustomItems(subSelect)">\n                                                {{ subSelect.value }}\n                                            </ion-option>\n                                        </ion-select>\n                                    </ion-item>\n                                </ion-row>\n                            <ion-row>\n                                <ion-item class="custom-select" no-lines>\n                                    <ion-select [(ngModel)]="field.value2"\n                                                [hidden]="!field.visible"\n                                                formControlName="{{field.name}}"\n                                                required="{{field.required}}" #customSelect2>\n                                        <ion-option value="{{subSelect.value}}" *ngFor="let subSelect of field.dataset2"\n                                                    (ionSelect)="onSelecteCustomItems(subSelect)">\n                                            {{ subSelect.value }}\n                                        </ion-option>\n                                    </ion-select>\n                                </ion-item>\n                            </ion-row>\n                        </ion-col>\n                        <ion-col col-2>\n                            <button ion-button icon-right icon-only class="custom-select-btn-inner" type="button"\n                                    (click)="addCustomSelect(customSelect1, customSelect2)">\n                                <ion-icon ios="md-add" md="md-add"></ion-icon>\n                            </button>\n                        </ion-col>\n                    </ion-row>\n\n                </ion-grid>\n\n                <!--/div-->\n\n                <!--/ion-list-->\n\n                <div class="custom-select-btn-attachment" *ngFor="let item of selectedCustomItems">\n                    <div>{{ item }}</div>\n                    <button ion-button icon-only small class="custom-select-btn-attachment-inner"\n                            (click)="deleteSelectedCustomItem(item)">\n                        <ion-icon ios="md-trash" md="md-trash"></ion-icon>\n                    </button>\n                </div>\n            </div>\n\n            <ion-list *ngIf="field.type === \'checkbox\'">\n                <ion-item [ngClass]="field.value ? \'\' : \'custom-checkbox-checked\'">\n                    <ion-label>{{field.label | translate}}</ion-label>\n                    <ion-checkbox [(ngModel)]="field.value" [ngModelOptions]="{standalone: true}"></ion-checkbox>\n                </ion-item>\n            </ion-list>\n\n            <!--Custom Select with Uploading files-->\n            <ion-grid *ngIf="field.type === \'customUploadSelect\'">\n                <ion-row align-items-center>\n                    <ion-col col-10>\n                        <input [(ngModel)]="field.value"\n                               [hidden]="!field.visible"\n                               formControlName="{{field.name}}"\n                               type="file" name="file" id="file" class="inputfile" (change)="fileEvent($event)"/>\n                        <label class="text-upload-field" for="file">{{documents.uploadedFileName || field.label}}</label>\n                    </ion-col>\n                    <ion-col col-2 text-right>\n                        <!--<input [(ngModel)]="field.value"-->\n                               <!--[hidden]="!field.visible"-->\n                               <!--formControlName="{{field.name}}"-->\n                               <!--type="file" name="file" id="file" class="inputfile" (change)="fileEvent($event)"/>-->\n                        <!--<label class="custom-upload-button" ion-button (click)="pushFile()">-->\n                            <!--<ion-icon name="md-add"></ion-icon>-->\n                        <!--</label>-->\n                        <button ion-button type="button" (click)="pushFile()" class="custom-upload-button">\n                            <ion-icon name="md-add"></ion-icon></button>\n                    </ion-col>\n                </ion-row>\n\n                <ion-row text-left align-items-center class="uploaded-items" *ngFor="let item of documents.uploadedItems; let i = index">\n                    <ion-col col-8>\n                        <div class="uploaded-item">{{ item.name }}</div>\n                    </ion-col>\n                    <ion-col col-2>\n                        <button ion-button clear icon-only type="button" class="download-uploaded-item-btn"\n                                (click)="downloadUploadedItem(item)">\n                            <ion-icon name="ios-download-outline"></ion-icon>\n                        </button>\n                    </ion-col>\n                    <ion-col col-2>\n                        <button ion-button icon-only class="delete-uploaded-item-btn" type="button"\n                                (click)="deleteUploadedItem(i)">\n                            <ion-icon name="md-trash"></ion-icon>\n                        </button>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n\n            <!--Custom Select 2 with Uploading files-->\n            <ion-grid *ngIf="field.type === \'customUploadSelect2\'">\n                <ion-row text-left align-items-center class="uploaded-items" *ngFor="let item of documents.uploadedItems; let i = index">\n                    <ion-col col-8>\n                        <div class="uploaded-item">{{ item.name }}</div>\n                    </ion-col>\n                    <ion-col col-2>\n                        <button ion-button clear icon-only type="button" class="download-uploaded-item-btn"\n                                (click)="downloadUploadedItem(item)">\n                            <ion-icon name="ios-download-outline"></ion-icon>\n                        </button>\n                    </ion-col>\n                    <ion-col col-2>\n                        <button ion-button icon-only class="delete-uploaded-item-btn" type="button"\n                                (click)="deleteUploadedItem(i)">\n                            <ion-icon name="md-trash"></ion-icon>\n                        </button>\n                    </ion-col>\n                </ion-row>\n                <div class="custom-line"></div>\n                <label class="documents-title">{{getFieldName().title}}</label>\n                <label class="documents-type">{{getFieldName().type}}</label>\n                <ion-row align-items-center>\n                    <ion-col col-10>\n                        <input [(ngModel)]="field.value"\n                               [hidden]="!field.visible"\n                               formControlName="{{field.name}}"\n                               type="file" name="file2" id="file2" class="inputfile" (change)="fileEvent($event)"/>\n                        <label class="text-upload-field" for="file2">{{documents.uploadedFileName}}</label>\n                    </ion-col>\n                    <ion-col col-2 text-right>\n                        <button ion-button type="button" (click)="pushFile()" class="custom-upload-button">\n                            <ion-icon name="md-add"></ion-icon></button>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n\n            <!-- Validation error message -->\n            <div class="voj-validation-error-msg" [hidden]="!(!dynamicalForm.controls[field.name].valid  && (dynamicalForm.controls[field.name].dirty || submitAttempt))">\n                <p>{{ field.validationMsg | translate }}</p>\n            </div>\n        </div>\n\n        <!-- Password identity error message -->\n        <div class="voj-validation-error-msg" *ngIf="!arePasswordsIdentical">\n            <p>{{ \'VALIDATION.PASSWORD_CONFIRMATION_MSG\' | translate }}</p>\n        </div>\n\n        <button *ngIf="data.submit" ion-button class="custom-btn" [disabled]="formComponent.invalid || customSelectValidation(formComponent.value)">\n            {{ data.submit.label | translate }}\n        </button>\n    </form>\n</div>\n'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-form/voj-form.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], VojForm);
    return VojForm;
}());

//# sourceMappingURL=voj-form.js.map

/***/ }),

/***/ 859:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VojSearchHeader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_search_header_model__ = __webpack_require__(860);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_search_query_model__ = __webpack_require__(861);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_voj_configuration__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VojSearchHeader = (function () {
    function VojSearchHeader(element, renderer, platform, confService) {
        this.element = element;
        this.renderer = renderer;
        this.confService = confService;
        this.criteriaMode = false;
        this.headerSegment = 'liste';
        this.isWeb = false;
        this.platform = platform;
        this.isWeb = !this.platform.is('cordova');
        this.config = this.confService.configuration;
    }
    VojSearchHeader.prototype.ngOnInit = function () {
        this.searchModeLabel = this.criteriaMode ? "Moins de critères" : "Plus de critères";
    };
    /**
     * trigger the search process, this proxy method will pass down the search arguments to
     * the calling controller in order to perform the search
     * @returns {any}
     */
    VojSearchHeader.prototype.triggerSearch = function () {
        var query = new __WEBPACK_IMPORTED_MODULE_3__models_search_query_model__["a" /* SearchQuery */]();
        query.freeText = this.fullText;
        query.job = this.job;
        query.location = this.location;
        query.timeslot = this.timeslot;
        query.name = this.name;
        query.queryType = this.criteriaMode ? 'criteria' : 'full_text';
        return this.searchHeaderData.action(query);
    };
    /**
     * Change search mode from full text search to criteria search
     */
    VojSearchHeader.prototype.toggleSearchMode = function () {
        if (this.criteriaMode && this.job) {
            this.fullText = this.job;
        }
        if (!this.criteriaMode && this.fullText) {
            this.job = this.fullText;
        }
        this.criteriaMode = !this.criteriaMode;
        this.searchModeLabel = this.criteriaMode ? "Moins de critères" : "Plus de critères";
    };
    VojSearchHeader.prototype.searchEvent = function (event) {
        if (event.keyCode === 13) {
            this.triggerSearch();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('data'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__models_search_header_model__["a" /* SearchHeaderData */])
    ], VojSearchHeader.prototype, "searchHeaderData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('criteria-mode'),
        __metadata("design:type", Boolean)
    ], VojSearchHeader.prototype, "criteriaMode", void 0);
    VojSearchHeader = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'voj-search-header',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-search-header/voj-search-header.html"*/'<ion-header no-border [ngStyle]="{\'backgroundColor\' : config.isLargeScreen ? \'\' : \'#4c545d\'}">\n	<div class="search-header-container" >\n		<ion-item *ngIf="!criteriaMode">\n			<ion-input type="text" placeholder="{{searchHeaderData.placeholders.main}}"\n					   [(ngModel)]="fullText" (keyup)="searchEvent($event)"></ion-input>\n		</ion-item>\n\n		<ion-item *ngIf="criteriaMode">\n			<ion-input type="text" placeholder="{{searchHeaderData.placeholders.what}}"\n					   [(ngModel)]="job" (keyup)="searchEvent($event)"></ion-input>\n		</ion-item>\n\n		<ion-item *ngIf="criteriaMode">\n			<ion-input type="text" placeholder="{{searchHeaderData.placeholders.where}}"\n					   [(ngModel)]="location" (keyup)="searchEvent($event)"></ion-input>\n		</ion-item>\n\n		<ion-item *ngIf="criteriaMode">\n			<ion-input type="text" onfocus="(this.type = \'date\')"\n					   placeholder="{{searchHeaderData.placeholders.when}}"\n					   [(ngModel)]="timeslot" (keyup)="searchEvent($event)"></ion-input>\n		</ion-item>\n\n		<ion-item  *ngIf="criteriaMode">\n			<ion-input type="text" placeholder="{{searchHeaderData.placeholders.who}}"\n					   [(ngModel)]="name" (keyup)="searchEvent($event)"></ion-input>\n		</ion-item>\n\n		<ion-item item class="toggler-text"  >\n			<span (click)="toggleSearchMode()">\n				{{searchModeLabel}}\n			</span>\n\n		</ion-item>\n\n		<button ion-button icon-only class="search-header-btn" (click)="triggerSearch()">\n			<ion-icon ios="ios-search" md="md-search"></ion-icon>\n		</button>\n\n	</div>\n\n</ion-header>'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-search-header/voj-search-header.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__config_voj_configuration__["a" /* Configuration */]])
    ], VojSearchHeader);
    return VojSearchHeader;
}());

//# sourceMappingURL=voj-search-header.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_voj_configuration__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_request_http_request__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_utils__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileService = (function () {
    function ProfileService(configuration, http) {
        this.configuration = configuration;
        this.http = http;
        this.config = this.configuration.configuration;
    }
    ProfileService.prototype.getAccountData = function (accountId) {
        var _this = this;
        var payload = {
            "service": "GET_ACCOUNT_RESUME",
            "role": this.config.customer == "J" ? "jobyer" : "employer",
            "accountId": accountId.toString()
        };
        //let url = (this.config.urls.filter(tuple => tuple.key === "identity")).value;
        var url;
        for (var i = 0; i < this.config.urls.length; i++) {
            var t = this.config.urls[i];
            if (t.key == "profile") {
                url = t.value;
                break;
            }
        }
        return new Promise(function (resolve) {
            _this.http.call(payload, url, "", true).subscribe(function (data) {
                resolve(data);
            });
        });
    };
    /***
     * Method retuning a list of municipalities according to a given department
     * @param {number} departmentId : the id of the department
     * @returns {Promise<any>} list of the municipalities
     */
    ProfileService.prototype.getMunicipalitiesByDepartment = function (departmentId) {
        var _this = this;
        var payload = {
            "service": "GET_MUNICIPALITIES_BY_DEPARTMENT",
            "departmentId": departmentId.toString()
        };
        //let url = (this.config.urls.filter(tuple => tuple.key === "identity")).value;
        var url;
        for (var i = 0; i < this.config.urls.length; i++) {
            var t = this.config.urls[i];
            if (t.key == "profile") {
                url = t.value;
                break;
            }
        }
        return new Promise(function (resolve) {
            _this.http.call(payload, url, "", true).subscribe(function (data) {
                resolve(data);
            });
        });
    };
    ProfileService.prototype.convertMunicipalitiesToDataset = function (municipalities) {
        var dataset = [];
        for (var i = 0; i < municipalities.length; i++) {
            var ds = {
                id: Number(municipalities[i].id),
                key: municipalities[i].name.toString(),
                value: municipalities[i].id.toString()
            };
            dataset.push(ds);
        }
        return dataset;
    };
    ProfileService.prototype.savePersonalDetails = function (jobyerId, birthData, numSS) {
        var _this = this;
        var payload = {
            "service": "SAVE_PERSONAL_DETAILS",
            "jobyerId": jobyerId.toString(),
            "numSS": numSS,
            "birthDate": birthData.birthdate,
            "birthCountryId": birthData.country.toString(),
            "departmentId": birthData.department.toString(),
            "municipalityId": birthData.municipality.toString()
        };
        //let url = (this.config.urls.filter(tuple => tuple.key === "identity")).value;
        var url;
        for (var i = 0; i < this.config.urls.length; i++) {
            var t = this.config.urls[i];
            if (t.key == "profile") {
                url = t.value;
                break;
            }
        }
        return new Promise(function (resolve) {
            _this.http.call(payload, url, "", true).subscribe(function (data) {
                resolve(data);
            });
        });
    };
    ProfileService.prototype.savePersonalDetailsIdentity = function (jobyerId, identityCardData) {
        var _this = this;
        var payload = {
            "service": "SAVE_PERSONAL_DETAILS_IDENTITY",
            "jobyerId": jobyerId.toString(),
            "nationalityId": identityCardData.nationality,
            //"regionId": identityCardData.nationality.codeRegion,
            "typeIDCard": identityCardData.typeIDCard,
            "numberIDCard": identityCardData.numberIDCard,
            "deliveredDate": identityCardData.deliveredDate,
            "prefectureId": identityCardData.prefecture,
            "validFrom": identityCardData.validFrom,
            "validTo": identityCardData.validTo
        };
        //let url = (this.config.urls.filter(tuple => tuple.key === "identity")).value;
        var url;
        for (var i = 0; i < this.config.urls.length; i++) {
            var t = this.config.urls[i];
            if (t.key == "profile") {
                url = t.value;
                break;
            }
        }
        return new Promise(function (resolve) {
            _this.http.call(payload, url, "", true).subscribe(function (data) {
                resolve(data);
            });
        });
    };
    ProfileService.prototype.saveBankSetting = function (roleId, bankData) {
        var _this = this;
        var payload = {
            "service": "SAVE_BANK_DATA",
            "role": this.config.customer == "J" ? "jobyer" : "employer",
            "roleId": roleId.toString(),
            "bankDetailsId": "",
            "bankName": __WEBPACK_IMPORTED_MODULE_3__utils_utils__["b" /* StringUtils */].preventNull(bankData.bankName),
            "bic": __WEBPACK_IMPORTED_MODULE_3__utils_utils__["b" /* StringUtils */].preventNull(bankData.bic),
            "iban": __WEBPACK_IMPORTED_MODULE_3__utils_utils__["b" /* StringUtils */].preventNull(bankData.iban)
        };
        //let url = (this.config.urls.filter(tuple => tuple.key === "identity")).value;
        var url;
        for (var i = 0; i < this.config.urls.length; i++) {
            var t = this.config.urls[i];
            if (t.key == "profile") {
                url = t.value;
                break;
            }
        }
        return new Promise(function (resolve) {
            _this.http.call(payload, url, "", true).subscribe(function (data) {
                resolve(data);
            });
        });
    };
    ProfileService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__config_voj_configuration__["a" /* Configuration */],
            __WEBPACK_IMPORTED_MODULE_2__http_request_http_request__["a" /* HttpRequestProvider */]])
    ], ProfileService);
    return ProfileService;
}());

//# sourceMappingURL=profile-service.js.map

/***/ }),

/***/ 860:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchHeaderData; });
/**
 * Search header data is an input model specifying placeholders and the function performing actual search
 */
var SearchHeaderData = (function () {
    function SearchHeaderData() {
    }
    return SearchHeaderData;
}());

//# sourceMappingURL=search-header.model.js.map

/***/ }),

/***/ 861:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchQuery; });
/**
 * Encapsulating search arguments
 */
var SearchQuery = (function () {
    function SearchQuery() {
        this.queryType = '';
        this.freeText = '';
        this.job = '';
        this.location = '';
        this.timeslot = '';
        this.name = '';
    }
    return SearchQuery;
}());

//# sourceMappingURL=search-query.model.js.map

/***/ }),

/***/ 862:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VojHeaderWeb; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VojHeaderWeb = (function () {
    function VojHeaderWeb(platform) {
        this.platform = platform;
        this.showHeader = false;
        platform.is('core') ? this.showHeader = true : this.showHeader = false;
    }
    VojHeaderWeb.prototype.ngOnInit = function () {
        console.log('data', this.data);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('data'),
        __metadata("design:type", Object)
    ], VojHeaderWeb.prototype, "data", void 0);
    VojHeaderWeb = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'voj-header-web',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-header-web/voj-header-web.html"*/'<ion-header class="generic voj-web-header" *ngIf="showHeader">\n	<ion-row no-padding>\n		<ion-col col-5>\n			<img *ngIf="data.logo" [src]="data.logo">\n		</ion-col>\n		<ion-col col-7>\n			<!--ion-fab class="fab-notification" >\n				<button ion-fab *ngFor="let item of data.menu"\n						(click)="item.notificationFunction()" [hidden]="item.badge < 0" >\n					{{item.badge}}\n				</button>\n			</ion-fab-->\n			<ion-badge color="danger" *ngFor="let item of data.menu" class="fab-notification" [hidden]="item.badge <= 0">{{item.badge}}</ion-badge>\n			<button *ngFor="let item of data.menu" class="top-buttons notifications-button" (click)="item.action()" ion-button icon-right outline item-end>\n				{{ item.label }}\n			</button>\n\n\n		</ion-col>\n	</ion-row>\n	<ion-row no-padding>\n		<ion-col col-5></ion-col>\n		<ion-col col-7 vertical-align-top>\n			<voj-segment [data]="data.segments" isStats="true"></voj-segment>\n		</ion-col>\n	</ion-row>\n</ion-header>\n'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-header-web/voj-header-web.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */]])
    ], VojHeaderWeb);
    return VojHeaderWeb;
}());

//# sourceMappingURL=voj-header-web.js.map

/***/ }),

/***/ 863:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VojHeaderSegment; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VojHeaderSegment = (function () {
    function VojHeaderSegment() {
        this.activeTabChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.enterpriseSearchEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    VojHeaderSegment.prototype.setTab = function (tabNam) {
        this.callEnterpriseSearchPage();
        this.activeTab = tabNam;
        this.activeTabChange.emit(tabNam);
    };
    VojHeaderSegment.prototype.callEnterpriseSearchPage = function () {
        this.enterpriseSearchEvent.next();
    };
    VojHeaderSegment.prototype.ngOnInit = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('data'),
        __metadata("design:type", Object)
    ], VojHeaderSegment.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], VojHeaderSegment.prototype, "activeTab", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], VojHeaderSegment.prototype, "activeTabChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], VojHeaderSegment.prototype, "enterpriseSearchEvent", void 0);
    VojHeaderSegment = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'voj-header-segment',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-header-segment/voj-header-segment.html"*/'<section class="segmentSection">\n    <div class="form-wrap">\n        <ul class="segmentList">\n            <li *ngFor="let segment of data.segmentsList let i = index" class="segmentListItem"\n                [ngClass]="{active:activeTab === i }"\n                (click)="setTab(i)">{{segment.title}}\n            </li>\n        </ul>\n    </div>\n</section>'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-header-segment/voj-header-segment.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], VojHeaderSegment);
    return VojHeaderSegment;
}());

//# sourceMappingURL=voj-header-segment.js.map

/***/ }),

/***/ 864:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployerStrategy; });
var EmployerStrategy = (function () {
    function EmployerStrategy() {
    }
    EmployerStrategy.prototype.loadHeaderData = function () {
        return {
            title: 'USER_INFORMATION.TITLE_EMPLOYER',
            actions: [
                {
                    id: 'help',
                    label: '',
                    icon: 'help',
                    action: function () {
                        console.log('Click help button.');
                    }
                }
            ],
            style: 'any',
            isCanceled: true
        };
    };
    return EmployerStrategy;
}());

//# sourceMappingURL=employer.js.map

/***/ }),

/***/ 865:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobyerStrategy; });
var JobyerStrategy = (function () {
    function JobyerStrategy() {
    }
    JobyerStrategy.prototype.loadHeaderData = function () {
        return {
            title: 'USER_INFORMATION.TITLE_JOBYER',
            actions: [
                {
                    id: 'help',
                    label: '',
                    icon: 'help',
                    action: function () {
                        console.log('Click help button.');
                    }
                }
            ],
            style: 'any',
            isCanceled: true
        };
    };
    return JobyerStrategy;
}());

//# sourceMappingURL=jobyer.js.map

/***/ }),

/***/ 866:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpenApplication; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the OpenApplicationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var OpenApplication = (function () {
    function OpenApplication(navCtrl, navParams, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.isMobile = false;
        platform.is('core') ? this.isMobile = false : this.isMobile = true;
        this.headerData = {
            title: 'Recevoir des candidatures',
            style: 'any',
            actions: [{
                    id: 'xdcfgvyhubijnkwdwlbhvg',
                    label: 'help',
                    icon: 'help',
                    action: function () {
                        console.log('button works');
                    }
                }],
            isCanceled: true
        };
        this.formData = {
            fields: [{
                    type: 'radio',
                    value: 'Oui',
                    label: 'Acceptez',
                    dataset: [
                        { id: 4, key: 'Oui', value: 'Oui' },
                        { id: 5, key: 'Non', value: 'Non' },
                    ],
                    readonly: false,
                    visible: true,
                    id: '111',
                    name: 'Acceptez'
                }],
            submit: {
                id: 'xdcfgvyhubijnkfwlbhvg',
                label: 'Valider',
                icon: '',
                action: function () {
                    console.log('button works');
                }
            }
        };
    }
    OpenApplication.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OpenApplicationPage');
    };
    OpenApplication = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-open-application',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/account-module/open-application/open-application.html"*/'<ion-content>\n    <voj-page-header [data]=\'headerData\'></voj-page-header>\n    <div [ngClass]="isMobile ? \'container\' : \'\'">\n        <div [ngClass]="isMobile ? \'child-container\' : \'\'">\n            <voj-form [data]="formData"></voj-form>\n        </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/account-module/open-application/open-application.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */]])
    ], OpenApplication);
    return OpenApplication;
}());

//# sourceMappingURL=open-application.js.map

/***/ }),

/***/ 867:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarPage; });
/* unused harmony export SLOTS_MOCK */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CalendarPage = (function () {
    function CalendarPage(platform) {
        this.platform = platform;
        this.isDesktop = this.platform.is('core');
        this.calendarData = {
            dayClick: function (date, jsEvent, view) {
                console.log('[dayclick]', date.toString());
                // this.modalCtrl
                //     .create(VojCard, {
                //         data: this.jobyerData,
                //         vojData: this.cards
                //     })
                //     .present();
            },
            eventClick: function (event, jsEvent, view) {
                console.log('[eventclick]', event, view);
            },
            slots: SLOTS_MOCK
        };
        this.calendarMode = 'offer';
    }
    CalendarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-calendar',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/calendar/calendar.html"*/'<ion-content\n	[class.full-height]="isDesktop"\n	ion-fixed>\n	<div\n		[class.pad]="isDesktop"\n		class="calendar-wrapper">\n		<voj-calendar [data]="calendarData" [type]="calendarMode"></voj-calendar>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/calendar/calendar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */]])
    ], CalendarPage);
    return CalendarPage;
}());

var SLOTS_MOCK = [
    {
        id: 99,
        title: 'morbi vel',
        color: '#e103cc',
        startDate: '2016-10-19T10:26:12Z',
        endDate: '2016-10-19T21:48:46Z',
        startHour: 3,
        endHour: 20,
        type: 'type 1',
        break: true,
        action: function () { return console.log("Event " + 96 + " triggered"); }
    },
    {
        id: 25,
        title: 'turpis nec euismod',
        color: '#c79295',
        startDate: '2016-10-06T05:14:19Z',
        endDate: '2017-06-17T04:35:03Z',
        startHour: 7,
        endHour: 17,
        type: 'type 1',
        break: true,
        action: function () { return console.log("Event " + 96 + " triggered"); }
    },
    {
        id: 96,
        title: 'tortor risus dapibus augue vel accumsan tellus nisi eu orci',
        color: '#b41d7f',
        startDate: '2016-09-26T02:48:08Z',
        endDate: '2016-12-16T21:02:11Z',
        startHour: 11,
        endHour: 19,
        type: 'type 1',
        break: false,
        action: function () { return console.log("Event " + 96 + " triggered"); }
    },
    {
        id: 78,
        title: 'libero nam dui proin leo odio porttitor id consequat',
        color: '#8565bf',
        startDate: '2016-11-10T11:23:28Z',
        endDate: '2017-08-10T14:51:15Z',
        startHour: 3,
        endHour: 18,
        type: 'type 1',
        break: true,
        action: function () { return console.log("Event " + 96 + " triggered"); }
    },
    {
        id: 42,
        title: 'a libero nam dui proin leo odio',
        color: '#1c6222',
        startDate: '2017-01-20T21:40:48Z',
        endDate: '2016-10-09T14:34:04Z',
        startHour: 8,
        endHour: 14,
        type: 'type 1',
        break: true,
        action: function () { return console.log("Event " + 96 + " triggered"); }
    },
    {
        id: 29,
        title: 'nec euismod scelerisque quam turpis',
        color: '#ecdfe0',
        startDate: '2016-12-11T16:01:19Z',
        endDate: '2016-10-24T13:02:15Z',
        startHour: 3,
        endHour: 21,
        type: 'type 1',
        break: false,
        action: function () { return console.log("Event " + 96 + " triggered"); }
    },
    {
        id: 54,
        title: 'sit amet lobortis sapien sapien non',
        color: '#4edd1a',
        startDate: '2017-03-08T03:06:52Z',
        endDate: '2016-08-31T11:47:34Z',
        startHour: 4,
        endHour: 17,
        type: 'type 1',
        break: false,
        action: function () { return console.log("Event " + 96 + " triggered"); }
    },
    {
        id: 50,
        title: 'sit amet consectetuer adipiscing elit',
        color: '#44cb43',
        startDate: '2016-10-23T20:46:33Z',
        endDate: '2017-02-06T06:35:00Z',
        startHour: 10,
        endHour: 13,
        type: 'type 1',
        break: false,
        action: function () { return console.log("Event " + 96 + " triggered"); }
    },
    {
        id: 16,
        title: 'lobortis sapien sapien non mi',
        color: '#5e8753',
        startDate: '2016-09-15T00:35:58Z',
        endDate: '2016-09-02T20:35:37Z',
        startHour: 6,
        endHour: 13,
        type: 'type 2',
        break: false,
        action: function () { return console.log("Event " + 96 + " triggered"); }
    },
    {
        id: 36,
        title: 'nullam molestie nibh in',
        color: '#cf6a62',
        startDate: '2017-02-03T20:05:16Z',
        endDate: '2016-09-08T22:03:56Z',
        startHour: 5,
        endHour: 12,
        type: 'type 2',
        break: false,
        action: function () { return console.log("Event " + 96 + " triggered"); }
    }
];
//# sourceMappingURL=calendar.js.map

/***/ }),

/***/ 868:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OptionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OptionsPage = (function () {
    function OptionsPage(platform) {
        this.platform = platform;
        platform.is('core') ? this.isMobile = false : this.isMobile = true;
        this.headerData = {
            title: 'Options',
            style: 'any',
            isCanceled: true,
            actions: [{
                    id: 'xdcfjhkbjvhbnkm',
                    label: 'help',
                    icon: 'help',
                    action: function () {
                        console.log('button works');
                    }
                }]
        };
        this.formData = {
            fields: [{
                    type: 'text',
                    label: null,
                    value: 'Some text 1',
                    readonly: false,
                    visible: true,
                    id: 'tbrf',
                    name: 'Some text 1'
                },
                {
                    type: 'text',
                    value: 'Some text 2',
                    label: null,
                    readonly: false,
                    visible: true,
                    id: '',
                    name: 'Some text 2'
                },
                {
                    type: 'text',
                    value: 'Some text 3',
                    label: null,
                    readonly: false,
                    visible: true,
                    id: '',
                    name: 'Some text 3'
                },
                {
                    type: 'text',
                    value: 'Some text 4',
                    label: null,
                    readonly: false,
                    visible: true,
                    id: '',
                    name: 'Some text 4'
                },
                {
                    type: 'text',
                    value: 'Some text 5',
                    label: null,
                    readonly: false,
                    visible: true,
                    id: '',
                    name: 'Some text 5'
                }
            ]
        };
    }
    OptionsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OptionsPage');
    };
    OptionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-options',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/options/options.html"*/'<ion-content>\n    <voj-page-header [data]=\'headerData\'></voj-page-header>\n    <div [ngClass]="isMobile ? \'options-container\' : \'\'">\n        <div [ngClass]="isMobile ? \'options-child-container\' : \'\'">\n            <voj-form [data]=\'formData\'></voj-form>\n        </div>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/options/options.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */]])
    ], OptionsPage);
    return OptionsPage;
}());

//# sourceMappingURL=options.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VojNotificationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__voj_notification__ = __webpack_require__(531);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VojNotificationService = (function () {
    function VojNotificationService(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    // Present notification
    VojNotificationService.prototype.present = function (notificationData) {
        // Options for modal window
        var modalOptions = {
            cssClass: 'voj-notification-modal',
            enableBackdropDismiss: notificationData.backdropDismiss
        };
        // Create modal window
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__voj_notification__["a" /* VojNotification */], { data: notificationData }, modalOptions);
        // Show modal window
        modal.present();
    };
    VojNotificationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* ModalController */]])
    ], VojNotificationService);
    return VojNotificationService;
}());

//# sourceMappingURL=voj-notification.service.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_voj_page_header_model__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_search_service_search_service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_voj_events_voj_events__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_navigation_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__details_details__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__config_voj_configuration__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_modal_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_geolocation__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__information_resume_information_resume__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__config_environment__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__account_module_login_login__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_storage__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var SearchPage = (function () {
    function SearchPage(platform, navCtrl, storage, geolocation, eventBus, navigationService, configuration, searchService, vojEvent, modalService, navParams) {
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.geolocation = geolocation;
        this.eventBus = eventBus;
        this.navigationService = navigationService;
        this.configuration = configuration;
        this.searchService = searchService;
        this.vojEvent = vojEvent;
        this.modalService = modalService;
        this.navParams = navParams;
        this.gmapView = false;
        this.sortType = 'pertinence';
        this.badge = 0;
        this.eventsCards = [];
        this.eventsMode = false;
        this.emptyResults = "Aucun résultat. Essayez avec la recherche multicritères";
    }
    /**
     * This function patches the gmap synch issue
     * it is executed once a second after we switch from list to map view
     */
    SearchPage.prototype.checkSynchMap = function () {
        this.eventBus.publishMap(this.cards);
    };
    SearchPage.prototype.ngOnInit = function () {
        var _this = this;
        this.gmapView = false;
        if (!this.configuration.configuration.isLargeScreen) {
            this.mobileStyle = {
                "z-index": 1,
                "position": "relative",
                "background-color": "rgb(76, 84, 93)"
            };
            this.messageStyle = {
                'bottom': '5%',
                'position': 'absolute',
                'z-index': 1,
                'text-align': 'center',
                'width': '100%'
            };
        }
        else {
            this.mobileStyle = {};
            this.messageStyle = {
                'bottom': '20%',
                'position': 'fixed',
                'z-index': 1,
                'text-align': 'center',
                'width': '100%'
            };
        }
        /**
         *  This section is usually called before receiving
         */
        this.platform.ready().then(function () {
            _this.gmapView = (_this.platform.width() < __WEBPACK_IMPORTED_MODULE_11__config_environment__["a" /* envConfig */].thresholdWidth);
            if (_this.gmapView && _this.pageHeader
                && _this.pageHeader.actions && _this.pageHeader.actions.length > 1) {
                _this.pageHeader.actions[1].icon = 'list';
            }
        });
        if (this.navParams.data)
            if (this.navParams.data.isNewNotification) {
                console.log('badge : ' + this.navParams.data.app.badge);
                this.badge = this.navParams.data.app.badge;
            }
        //  Page header
        this.pageHeader = new __WEBPACK_IMPORTED_MODULE_2__models_voj_page_header_model__["a" /* VojPageHeaderType */]();
        this.pageHeader.title = "Recherche";
        this.pageHeader.isCanceled = false;
        this.pageHeader.actions = [
            {
                id: 'notification',
                icon: '',
                label: String(this.badge),
                action: function () {
                    setTimeout(function () {
                        _this.vojEvent.publishPushEvents();
                    }, 1000);
                }
            },
            {
                id: 'map',
                icon: 'pin',
                action: function () {
                    if (!_this.configuration.configuration.isLargeScreen) {
                        _this.gmapView = !_this.gmapView;
                        if (_this.gmapView) {
                            _this.messageStyle = {
                                'bottom': '5%',
                                'position': 'absolute',
                                'z-index': 1,
                                'text-align': 'center',
                                'width': '100%'
                            };
                        }
                        else {
                            _this.messageStyle = {
                                'bottom': '12%',
                                'position': 'fixed',
                                'z-index': 1,
                                'text-align': 'center',
                                'width': '100%'
                            };
                        }
                        _this.pageHeader.actions[1].icon = _this.gmapView ? 'list' : 'pin';
                        if (_this.cards && _this.gmapView) {
                            setTimeout(function () {
                                _this.checkSynchMap();
                            }, 1000);
                        }
                        //this.event.publish('MAP_DATA', this.cards);
                    }
                    else {
                        _this.gmapView = false;
                    }
                },
                label: ''
            }
        ];
        this.searchHeaderData = {
            placeholders: {
                main: 'Recherche libre',
                what: 'Quoi ?',
                where: 'Où ?',
                when: 'Quand ?',
                who: 'Qui ?'
            },
            action: function (q) {
                _this.search(q);
            }
        };
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.position = resp;
            //  Let us retrive the most recent results now that we know where we are
            _this.searchService.retrieveRecent().then(function (data) {
                _this.sortType = 'pertinence';
                _this.cards = data;
                var _loop_1 = function (i) {
                    var c = _this.cards[i];
                    c.scoreOrder = i;
                    c.socialButtons.forEach(function (socialButton) {
                        socialButton.action = function () { return _this.gotoDetails(c); };
                    });
                    for (var j = 0; j < c.actions.length; j++) {
                        var action = c.actions[j];
                        // FIXME: temporarily removed due to https://app.asana.com/0/404438886620813/428613916108003 by nickpe
                        // if (action.id == "details") {
                        //     action.action = () => {
                        //         this.gotoDetails(c);
                        //     };
                        //     break;
                        // }
                        action.action = function () { return _this.gotoDetails(c); };
                    }
                };
                for (var i = 0; i < _this.cards.length; i++) {
                    _loop_1(i);
                }
                //TODO TIM: an event service that defines an event for every data structure and then verify types of sent objects
                //TODO TIM: All maps will be updated. We should define witch map to update, if we have more than one..
                // sending values to map component in other pages
                /*let mapPassenger: eBusType = this.eventBus.passenger.type.get('map');
                 mapPassenger.data = this.cards;
                 this.eventBus.set(mapPassenger);*/
                _this.eventBus.publishMap(_this.cards);
                if (_this.position && _this.position.coords)
                    _this.saveProximityOrder(_this.position.coords.latitude, _this.position.coords.longitude);
            });
        }).catch(function (data) {
        });
        this.eventBus.subscribeSearch(this);
    };
    SearchPage.prototype.delete = function (chip) {
        chip.remove();
    };
    SearchPage.prototype.updateCards = function (cards) {
        if (cards && cards.length > 0) {
            this.badge = cards.length;
            this.eventsCards = cards;
        }
    };
    SearchPage.prototype.loadEvents = function () {
        var _this = this;
        this.eventsMode = true;
        this.searchService.eventMode = true;
        this.cards = this.eventsCards;
        var _loop_2 = function (i) {
            var c = this_1.cards[i];
            c.scoreOrder = i;
            for (var j = 0; j < c.actions.length; j++) {
                var action = c.actions[j];
                if (action.id == "details") {
                    action.action = function () {
                        _this.gotoDetails(c);
                    };
                    break;
                }
            }
        };
        var this_1 = this;
        for (var i = 0; i < this.cards.length; i++) {
            _loop_2(i);
        }
        //TODO TIM: an event service that defines an event for every data structure and then verify types of sent objects
        //TODO TIM: All maps will be updated. We should define witch map to update, if we have more than one..
        this.eventBus.publishMap(this.cards);
        if (this.position && this.position.coords)
            this.saveProximityOrder(this.position.coords.latitude, this.position.coords.longitude);
    };
    SearchPage.prototype.search = function (q) {
        var _this = this;
        this.eventsMode = false;
        if (q.queryType == 'full_text' && q.freeText && q.freeText != '') {
            //TODO TIM: Data should have an Array<VojCardType> as type
            //TODO ABDESLAM: If data is of VojCardType type it will be too generic and unusable for other apps and services
            this.searchService.semanticSearch(q.freeText).then(function (data) {
                _this.sortType = 'pertinence';
                _this.cards = data;
                var _loop_3 = function (i) {
                    var c = _this.cards[i];
                    c.scoreOrder = i;
                    for (var j = 0; j < c.actions.length; j++) {
                        var action = c.actions[j];
                        if (action.id == "details") {
                            action.action = function () {
                                _this.gotoDetails(c);
                            };
                            break;
                        }
                    }
                };
                for (var i = 0; i < _this.cards.length; i++) {
                    _loop_3(i);
                }
                //TODO TIM: an event service that defines an event for every data structure and then verify types of sent objects
                //TODO TIM: All maps will be updated. We should define witch map to update, if we have more than one..
                // sending values to map component in other pages
                /*let mapPassenger: eBusType = this.eventBus.passenger.type.get('map');
                mapPassenger.data = this.cards;
                this.eventBus.set(mapPassenger);*/
                _this.eventBus.publishMap(_this.cards);
                if (_this.position && _this.position.coords)
                    _this.saveProximityOrder(_this.position.coords.latitude, _this.position.coords.longitude);
            });
        }
        else if (q.queryType == 'criteria' && (q.job || q.location || q.timeslot || q.name)) {
            this.searchService.criteriaSearch(q).then(function (data) {
                _this.sortType = 'pertinence';
                _this.cards = data;
                var _loop_4 = function (i) {
                    var c = _this.cards[i];
                    c.scoreOrder = i;
                    for (var j = 0; j < c.actions.length; j++) {
                        var action = c.actions[j];
                        if (action.id == "details") {
                            action.action = function () {
                                _this.gotoDetails(c);
                            };
                            break;
                        }
                    }
                };
                for (var i = 0; i < _this.cards.length; i++) {
                    _loop_4(i);
                }
                /*let mapPassenger: eBusType = this.eventBus.passenger.type.get('map');
                mapPassenger.data = this.cards;
                this.eventBus.set(mapPassenger);*/
                _this.eventBus.publishMap(_this.cards);
                if (_this.position && _this.position.coords)
                    _this.saveProximityOrder(_this.position.coords.latitude, _this.position.coords.longitude);
            });
        }
    };
    SearchPage.prototype.saveProximityOrder = function (x0, y0) {
        for (var i = 0; i < this.cards.length; i++) {
            if (!this.cards[i].address.lat || !this.cards[i].address.lng)
                this.cards[i].locationOrder = 9999; // large distance to ensure sending the card to the end
            var x1 = this.cards[i].address.lat;
            var y1 = this.cards[i].address.lng;
            var distance = Math.sqrt((x0 - x1) * (x0 - x1) + (y0 - y1) * (y0 - y1)); // Thanks Pythagoras
            this.cards[i].locationOrder = distance;
        }
    };
    SearchPage.prototype.doSort = function (e) {
        if (this.sortType == 'pertinence') {
            this.cards.sort(function (a, b) {
                return a.scoreOrder - b.scoreOrder;
            });
        }
        else {
            this.cards.sort(function (a, b) {
                return a.locationOrder - b.locationOrder;
            });
        }
    };
    SearchPage.prototype.gotoDetails = function (card) {
        var _this = this;
        //  Check if user is authenticated
        this.storage.get("currentUser").then(function (sdata) {
            var data = JSON.parse(sdata);
            if (data && data.account) {
                //  OK user is authenticated
                var c = null;
                var results = _this.eventsMode ? _this.searchService.events : _this.searchService.results;
                for (var i = 0; i < results.length; i++) {
                    if (results[i].id == card.id) {
                        c = results[i].toCardDetails();
                        break;
                    }
                }
                if (c == null) {
                    //  bullocks :(
                    return;
                }
                var vojNav = { page: __WEBPACK_IMPORTED_MODULE_6__details_details__["a" /* DetailsPage */], params: { card: c }, isRoot: false };
                _this.navigationService.navigate('details', vojNav);
            }
            else {
                //  These are not the droids you are looking for
                var vojPageList = { page: __WEBPACK_IMPORTED_MODULE_12__account_module_login_login__["a" /* LoginPage */], isRoot: true, isModal: true };
                _this.navigationService.navigate("list", vojPageList);
            }
        });
    };
    SearchPage.prototype.goToInformationResumePage = function () {
        var vojNav = { page: __WEBPACK_IMPORTED_MODULE_10__information_resume_information_resume__["a" /* InformationResumePage */], isRoot: false };
        this.navigationService.navigate('details', vojNav);
    };
    /*
    goToSignUp() {
        this.modalService.present(SignUpPage);

    }

    presentResetPassword() {
        console.log('Call Reset Password.');
        // this.resetPassword.present();
        this.modalService.present(ResetPasswordPage, false);
    }

    goToJobsListPage() {
        let vojNav: VojPage = {page: LanguagesPage, isRoot: false};
        this.navigationService.navigate('details', vojNav);
    }
    */
    SearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchPage');
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-search',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/search-module/search/search.html"*/'<ion-header no-border>\n  <voj-page-header [data]="pageHeader"></voj-page-header>\n</ion-header>\n<ion-content padding class="search-page-content">\n  <voj-search-header [criteria-mode]="false" [data]="searchHeaderData"></voj-search-header>\n  <ion-segment [(ngModel)]="sortType" color="primary" (ionChange)="doSort($event)" [ngStyle]="mobileStyle">\n    <ion-segment-button value="pertinence">\n      Pertinence\n    </ion-segment-button>\n    <ion-segment-button value="distance">\n      Proximité\n    </ion-segment-button>\n  </ion-segment>\n  <voj-map [data]="cards" *ngIf="gmapView"></voj-map>\n  <!--div class="search-warning-message" padding *ngIf="cards && !cards.length>0">{{emptyResults}}</div>\n  <div class="search-info-message" padding *ngIf="cards && cards.length>0">{{cards.length}} résultat(s) trouvé(s)</div-->\n  <span [ngStyle]="messageStyle">\n    <ion-chip #chip1 class="search-warning-chip" *ngIf="cards && !cards.length>0">\n      <ion-label>{{emptyResults}}</ion-label>\n      <button ion-button clear color="light" (click)="delete(chip1)">\n        <ion-icon name="close-circle"></ion-icon>\n      </button>\n    </ion-chip>\n  </span>\n  <span [ngStyle]="messageStyle">\n    <ion-chip #chip2 class="search-info-chip" *ngIf="cards && cards.length>0">\n      <ion-label >{{cards.length}} résultat(s) trouvé(s)</ion-label>\n      <button ion-button clear color="light" (click)="delete(chip2)">\n        <ion-icon name="close-circle"></ion-icon>\n      </button>\n    </ion-chip>\n  </span>\n  <voj-card [hidden]="gmapView" *ngFor="let c of cards" [data]="c" [vojData]="cards" mode="reduced" ></voj-card>\n\n\n  <!--<button ion-button (click)="goToSignUp()">openSignUpModal</button>\n\n\n  <button ion-button (click)="presentResetPassword()">Test reset password</button>\n\n    <button ion-button (click)="goToJobsListPage()">Go to JobsListPage</button>\n    <button ion-button (click)="goToJobsListPage()">Go to JobsListPage</button>\n    <button ion-button (click)="goToInformationResumePage()">Go to InformationResumePage</button>\n    <button ion-button (click)="loadEvents()">{{badge}}</button>-->\n\n</ion-content>\n'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/search-module/search/search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_4__providers_voj_events_voj_events__["a" /* EventBusProvider */],
            __WEBPACK_IMPORTED_MODULE_5__services_navigation_service__["a" /* NavigationService */], __WEBPACK_IMPORTED_MODULE_7__config_voj_configuration__["a" /* Configuration */],
            __WEBPACK_IMPORTED_MODULE_3__providers_search_service_search_service__["a" /* SearchServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_voj_events_voj_events__["a" /* EventBusProvider */],
            __WEBPACK_IMPORTED_MODULE_8__services_modal_service__["a" /* ModalService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 886:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(601);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(602);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_test_components_about_about__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config_voj_configuration__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_search_module_search_search__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_navigation_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__config_environment__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_voj_events_voj_events__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_landing_page_landing_page__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_modal_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_account_module_login_login__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_account_module_account_account__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_account_module_user_information_user_information__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_account_module_identity_identity__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_search_service_search_service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__startegy_jobyer__ = __webpack_require__(887);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__startegy_employer__ = __webpack_require__(888);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};























var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, searchService, configurationService, event, navigationService, translate, vojEvent, modalService, storage) {
        var _this = this;
        this.searchService = searchService;
        this.configurationService = configurationService;
        this.event = event;
        this.navigationService = navigationService;
        this.translate = translate;
        this.vojEvent = vojEvent;
        this.modalService = modalService;
        this.storage = storage;
        this.appPages = [
            { title: 'Schedule', name: 'Tabs', component: __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */], tabComponent: "", index: 0, icon: 'calendar' },
            { title: 'Speakers', name: 'Tabs', component: __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */], tabComponent: "", index: 1, icon: 'contacts' },
            { title: 'Map', name: 'Tabs', component: __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */], tabComponent: "", index: 2, icon: 'map' },
            { title: 'About', name: 'Tabs', component: __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */], tabComponent: "", index: 3, icon: 'information-circle' }
        ];
        this.loggedInPages = [
            { title: 'Account', name: 'AccountPage', component: "", icon: 'person' },
            { title: 'Support', name: 'SupportPage', component: "", icon: 'help' },
            { title: 'Logout', name: 'Tabs', component: __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */], icon: 'log-out', logsOut: true }
        ];
        this.loggedOutPages = [
            { title: 'Login', name: 'LoginPage', component: "", icon: 'log-in' },
            { title: 'Support', name: 'SupportPage', component: "", icon: 'help' },
            { title: 'Signup', name: 'SignupPage', component: "", icon: 'person-add' }
        ];
        this.interval = 1000 * 60 * 15;
        this.badge = 0;
        this.annoncesLabel = 'Annonces';
        this.self = this;
        this.config = this.configurationService.configuration;
        this.dataPageHeader = {
            title: 'string',
            actions: [
                { icon: 'search', label: 'button 1', action: Function },
                { icon: 'search', label: 'button 2', action: Function },
                { icon: 'search', label: 'button 3', action: Function }
            ],
            style: 'any'
        };
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can dopu any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            //determine the main root page according to the screen size
            _this.config.isLargeScreen = (platform.width() >= __WEBPACK_IMPORTED_MODULE_11__config_environment__["a" /* envConfig */].thresholdWidth);
            //set the main page (third nav) according to the screen width
            //(this function should be called after the platform is ready)
            _this.setMainPages();
        });
        this.listTitle = "Ma liste des cartes";
        this.cards = [{
                title: "Jobyer 1",
                content: "contenu 1",
                actionName: "action 1"
            }, {
                title: "Jobyer 2",
                content: "contenu 2",
                actionName: "action 2"
            }, {
                title: "Jobyer 3",
                content: "contenu 3",
                actionName: "action 3"
            }, {
                title: "Jobyer 4",
                content: "contenu 4",
                actionName: "action 4"
            }, {
                title: "Jobyer 5",
                content: "contenu 5",
                actionName: "action 5"
            }];
        this.initializeTranslation();
    }
    MyApp.prototype.ngOnInit = function () {
        var _this = this;
        this.configurationService.initialize();
        //initializing the navigation params
        this.initializeNavigation();
        //initializing header
        this.initializeWebHeader();
        this.checkNotifications();
        this.task = setInterval(function () {
            _this.checkNotifications();
        }, this.interval);
        this.vojEvent.subscribeMainApp(this);
    };
    MyApp.prototype.checkNotifications = function () {
        var _this = this;
        console.log('STARTUP NOTIFICATIONS CHECK');
        this.storage.get("currentUser").then(function (sdata) {
            var data = JSON.parse(sdata);
            if (data && data.account) {
                //console.clear();
                console.log(JSON.stringify(data.account));
                _this.searchService.checkEvents(data.account.id).then(function (data) {
                    console.log(JSON.stringify(data));
                    _this.badge = 0;
                    _this.dataHeader.menu[0].badge = 0;
                    for (var i = 0; i < _this.searchService.events.length; i++) {
                        if (!_this.searchService.events[i].read)
                            _this.badge++;
                    }
                    _this.dataHeader.menu[0].badge = _this.badge;
                    if (data)
                        _this.vojEvent.publishSearch(data);
                });
            }
        });
    };
    MyApp.prototype.notificationFunction = function (caller) {
        if (!caller)
            caller = this;
        var p1 = { page: __WEBPACK_IMPORTED_MODULE_7__pages_search_module_search_search__["a" /* SearchPage */], isRoot: true, params: { isNewNotification: true, app: caller } };
        caller.navigationService.navigate('list', p1);
        caller.navigationService.hide('details');
        var p3 = { page: __WEBPACK_IMPORTED_MODULE_5__pages_test_components_about_about__["a" /* AboutPage */], isRoot: true };
        caller.navigationService.navigate('main', p3);
        setTimeout(function () {
            caller.vojEvent.publishPushEvents();
        }, 1000);
    };
    MyApp.prototype.navigateToSearch = function (caller) {
        if (!caller)
            caller = this;
        var p1 = { page: __WEBPACK_IMPORTED_MODULE_7__pages_search_module_search_search__["a" /* SearchPage */], isRoot: true };
        caller.navigationService.navigate('list', p1);
        caller.navigationService.hide('details');
        var p3 = { page: __WEBPACK_IMPORTED_MODULE_5__pages_test_components_about_about__["a" /* AboutPage */], isRoot: true };
        caller.navigationService.navigate('main', p3);
    };
    MyApp.prototype.mock = function (caller) {
        if (!caller)
            caller = this;
    };
    MyApp.prototype.initializeWebHeader = function () {
        var _this = this;
        this.dataHeader = {
            menu: [
                {
                    icon: 'search',
                    label: 'Recherche',
                    badge: 0,
                    action: this.notificationFunction,
                    notificationFunction: this.notificationFunction
                },
                {
                    icon: 'search',
                    label: 'Annonces',
                    badge: -1,
                    action: function () {
                        _this.nav3.push(__WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */]);
                    }
                },
                {
                    icon: 'search',
                    label: 'Missions',
                    badge: -1,
                    action: Function
                },
                {
                    self: this,
                    icon: 'search',
                    label: 'Compte',
                    badge: -1,
                    action: this.goToAccount
                }
            ],
            logo: 'assets/img/vitonjob.png',
            searchbar: {
                placeholder: 'string'
            },
            segments: [
                {
                    title: {
                        icon: 'string',
                        label: '0'
                    },
                    subtitle: {
                        icon: 'string',
                        label: 'Contrats en attente'
                    },
                    action: function () {
                        console.log('works 1');
                    },
                    style: 'style2'
                },
                {
                    title: {
                        icon: 'string',
                        label: '0'
                    },
                    subtitle: {
                        icon: 'string',
                        label: 'Pointages à valider'
                    },
                    action: function () {
                        console.log('works 2');
                    },
                    style: 'style2'
                },
                {
                    title: {
                        icon: 'string',
                        label: '0'
                    },
                    subtitle: {
                        icon: 'string',
                        label: 'Missions à clôturer'
                    },
                    action: function () {
                        console.log('works 3');
                    },
                    style: 'style2'
                }
            ]
        };
        this.annoncesLabel = this.dataHeader.menu[1].label;
    };
    MyApp.prototype.updateWebMenu = function () {
        var _this = this;
        var navMock = function () {
            var vojPageList = { page: __WEBPACK_IMPORTED_MODULE_15__pages_account_module_login_login__["a" /* LoginPage */], isRoot: true, isModal: true };
            _this.navigationService.navigate("list", vojPageList);
        };
        if (this.config && this.config.customer) {
            var s = this.config.customer == 'J' ? new __WEBPACK_IMPORTED_MODULE_21__startegy_jobyer__["a" /* JobyerStrategy */]() : new __WEBPACK_IMPORTED_MODULE_22__startegy_employer__["a" /* EmployerStrategy */]();
            this.dataHeader = s.loadHeaderData(this, this.notificationFunction, this.navigateToSearch, navMock, navMock, this.goToAccount);
            this.annoncesLabel = this.dataHeader.menu[1].label;
        }
    };
    MyApp.prototype.openPage = function () {
    };
    MyApp.prototype.openTutorial = function () {
    };
    MyApp.prototype.isActive = function (page) {
        var childNav = this.nav1.getActiveChildNav();
        // Tabs are a special case because they have their own navigation
        if (childNav) {
            if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
                return 'primary';
            }
            return;
        }
        if (this.nav1.getActive() && this.nav1.getActive().name === page.name) {
            return 'primary';
        }
        return;
    };
    MyApp.prototype.initializeTranslation = function () {
        // Translation configuration
        this.translate.addLangs(['en', 'fr']);
        // Default language
        this.translate.setDefaultLang('fr');
        // Use language
        this.translate.use('fr');
    };
    /*
    Set the main page according to the screen width
     */
    MyApp.prototype.setMainPages = function () {
        if (!this.config.isLargeScreen) {
            console.log("just one pane");
            //the other navs are not displayed in small screens, only the main nav is active
            this.rootPageMain = __WEBPACK_IMPORTED_MODULE_7__pages_search_module_search_search__["a" /* SearchPage */];
        }
        else {
            console.log("many panes");
            //the main page is the third nav (the one in the right) for large screens
            this.rootPageList = __WEBPACK_IMPORTED_MODULE_7__pages_search_module_search_search__["a" /* SearchPage */];
            this.rootPageDetails = __WEBPACK_IMPORTED_MODULE_13__pages_landing_page_landing_page__["a" /* LandingPage */];
            this.rootPageMain = __WEBPACK_IMPORTED_MODULE_5__pages_test_components_about_about__["a" /* AboutPage */];
        }
    };
    /*
    Function updating the rootMain page when switching from one tab to another
    (called only for small screens)
     */
    MyApp.prototype.tabChanged = function (e) {
        switch (this.selectedTab) {
            case ("searchTab"):
                this.rootPageMain = __WEBPACK_IMPORTED_MODULE_7__pages_search_module_search_search__["a" /* SearchPage */];
                break;
            case ("advertTab"):
                this.rootPageMain = __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */];
                break;
            case ("missionTab"):
                this.rootPageMain = __WEBPACK_IMPORTED_MODULE_5__pages_test_components_about_about__["a" /* AboutPage */];
                break;
            case ("accountTab"):
                this.rootPageMain = __WEBPACK_IMPORTED_MODULE_13__pages_landing_page_landing_page__["a" /* LandingPage */];
                break;
            default:
                this.rootPageMain = __WEBPACK_IMPORTED_MODULE_7__pages_search_module_search_search__["a" /* SearchPage */];
                break;
        }
    };
    /*
    Initializing navigation params and subscribing to events
     */
    MyApp.prototype.initializeNavigation = function () {
        //initializition
        this.nav1.name = "list";
        this.nav2.name = "details";
        this.nav3.name = "main";
        this.navigationService.setNav1(this.nav1);
        this.navigationService.setNav2(this.nav2);
        this.navigationService.setNav3(this.nav3);
        //initializing the selected tab for small screens
        this.selectedTab = "searchTab";
        //the first and third navs should be displayed in large screens
        //the second nav is hidden by default
        this.showList = true;
        this.showDetails = false;
        this.showMain = true;
        //subscribe to routing events (push, setRoot, pop, hideNav)
        this.catchNavigationEvents();
        this.catchHideNavEvents();
        this.catchPopEvents();
        //construct page mapping with tabs for small screens
        if (!this.config.isLargeScreen) {
            this.pageMapping = this.navigationService.constructPageMapping();
        }
    };
    /*
    Catch navigation events for routing
     */
    MyApp.prototype.catchNavigationEvents = function () {
        var _this = this;
        this.event.subscribe("navigate:" + this.nav1.name, function (data) {
            _this.showList = true;
            _this.selectedTab = _this.pageMapping[data.page.name];
            if (data.isRoot) {
                _this.nav1.setRoot(data.page, data.params);
            }
            else {
                _this.nav1.push(data.page, data.params);
            }
        });
        this.event.subscribe("navigate:" + this.nav2.name, function (data) {
            _this.showDetails = true;
            _this.selectedTab = _this.pageMapping[data.page.name];
            if (data.isRoot) {
                _this.nav2.setRoot(data.page, data.params);
            }
            else {
                _this.nav2.push(data.page, data.params);
            }
        });
        this.event.subscribe("navigate:" + this.nav3.name, function (data) {
            _this.showMain = true;
            _this.selectedTab = _this.pageMapping[data.page.name];
            if (data.isRoot) {
                _this.nav3.setRoot(data.page, data.params);
            }
            else {
                _this.nav3.push(data.page, data.params);
            }
        });
    };
    /*
  Catch hide navs events while routing
   */
    MyApp.prototype.catchHideNavEvents = function () {
        var _this = this;
        this.event.subscribe("hide:" + this.nav1.name, function () {
            _this.showList = false;
        });
        this.event.subscribe("hide:" + this.nav2.name, function () {
            _this.showDetails = false;
        });
        this.event.subscribe("hide:" + this.nav3.name, function () {
            _this.showMain = false;
        });
    };
    /*
    Catch pop events for routing
     */
    MyApp.prototype.catchPopEvents = function () {
        var _this = this;
        this.event.subscribe("pop:" + this.nav1.name, function () {
            _this.nav1.pop();
        });
        this.event.subscribe("pop:" + this.nav2.name, function () {
            _this.nav2.pop();
        });
    };
    MyApp.prototype.goToAccount = function (caller) {
        if (!caller)
            caller = this;
        caller.self.storage.get("currentUser").then(function (currentUser) {
            //if the user has not yet signed in
            if (!currentUser) {
                var vojPageList = { page: __WEBPACK_IMPORTED_MODULE_15__pages_account_module_login_login__["a" /* LoginPage */], isRoot: true, isModal: true };
                caller.self.navigationService.navigate("list", vojPageList);
            }
            else {
                var vojPageList = { page: __WEBPACK_IMPORTED_MODULE_17__pages_account_module_account_account__["a" /* AccountPage */], isRoot: true };
                caller.self.navigationService.navigate("list", vojPageList);
                if (caller.self.config.isLargeScreen) {
                    var vojPageDetails = { page: __WEBPACK_IMPORTED_MODULE_18__pages_account_module_user_information_user_information__["a" /* UserInformationPage */], isRoot: true };
                    caller.self.navigationService.navigate("details", vojPageDetails);
                    var vojPageMain = { page: __WEBPACK_IMPORTED_MODULE_19__pages_account_module_identity_identity__["a" /* IdentityPage */], isRoot: true };
                    caller.self.navigationService.navigate("main", vojPageMain);
                }
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('contentList'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */])
    ], MyApp.prototype, "nav1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('contentDetails'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */])
    ], MyApp.prototype, "nav2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('contentMain'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */])
    ], MyApp.prototype, "nav3", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/app/app.html"*/'<ion-split-pane [when]="config.isLargeScreen">\n\n    <!-- main navigation -->\n    <!-- <voj-header [data]="dataHeader"></voj-header> -->\n    <voj-header-web [data]="dataHeader" *ngIf="config.isLargeScreen"></voj-header-web>\n\n    <ion-nav [root]="rootPageList" #contentList name="list" [hidden]="!showList" swipeBackEnabled="false"\n             class="voj-style"></ion-nav>\n    <ion-nav [root]="rootPageDetails" #contentDetails name="details" [hidden]="!showDetails" swipeBackEnabled="false"\n             class="voj-style"></ion-nav>\n    <ion-nav [root]="rootPageMain" main #contentMain name="main" [hidden]="!showMain" swipeBackEnabled="false"\n             class="voj-style"></ion-nav>\n\n    <!-- Bottom Tabs shown in small screens -->\n    <ion-footer *ngIf="!config.isLargeScreen" class="voj-tabs">\n        <ion-toolbar>\n            <ion-segment [(ngModel)]="selectedTab" (ionChange)="tabChanged($event)">\n                <!--ion-fab left height class="fab-notification" >\n                    <button ion-fab (click)="notificationFunction()" >\n                        {{badge}}\n                    </button>\n                </ion-fab-->\n                <ion-segment-button value="searchTab" class="segment-button-tab">\n                    <ion-badge color="danger" class="fab-notification" [hidden]= "badge<=0">{{badge}}</ion-badge>\n                    <div class="segment-tab">\n                        <ion-icon name="search" class="segment-tab-icon"></ion-icon>\n                    </div>\n                    <div class="segment-tab">Recherche</div>\n                </ion-segment-button>\n\n                <ion-segment-button value="advertTab" class="segment-button-tab">\n                    <div class="segment-tab">\n                        <ion-icon name="megaphone" class="segment-tab-icon"></ion-icon>\n                    </div>\n                    <div class="segment-tab">{{annoncesLabel}}</div>\n                </ion-segment-button>\n\n                <ion-segment-button value="missionTab" class="segment-button-tab">\n                    <div class="segment-tab">\n                        <ion-icon name="folder" class="segment-tab-icon"></ion-icon>\n                    </div>\n                    <div class="segment-tab">Missions</div>\n                </ion-segment-button>\n\n                <ion-segment-button value="accountTab" class="segment-button-tab" (click)="goToAccount()">\n                    <div class="segment-tab">\n                        <ion-icon name="contact" class="segment-tab-icon"></ion-icon>\n                    </div>\n                    <div class="segment-tab">Compte</div>\n                </ion-segment-button>\n\n            </ion-segment>\n        </ion-toolbar>\n    </ion-footer>\n\n    <!--<voj-footer *ngIf="!config.isLargeScreen">\n    </voj-footer>-->\n</ion-split-pane>'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_20__providers_search_service_search_service__["a" /* SearchServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_6__config_voj_configuration__["a" /* Configuration */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_10__services_navigation_service__["a" /* NavigationService */],
            __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_12__providers_voj_events_voj_events__["a" /* EventBusProvider */],
            __WEBPACK_IMPORTED_MODULE_14__services_modal_service__["a" /* ModalService */],
            __WEBPACK_IMPORTED_MODULE_16__ionic_storage__["b" /* Storage */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 887:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobyerStrategy; });
var JobyerStrategy = (function () {
    function JobyerStrategy() {
    }
    JobyerStrategy.prototype.loadHeaderData = function (app, notificationFunction, searchFunction, annonceFunction, missionFunction, accountFunction) {
        return {
            menu: [
                {
                    icon: 'search',
                    label: 'Recherche',
                    badge: 0,
                    action: function () {
                        if (app.badge > 0)
                            notificationFunction(app);
                        else
                            searchFunction(app);
                    },
                    notificationFunction: function () {
                        notificationFunction(app);
                    }
                },
                {
                    icon: 'search',
                    label: 'Mon CV',
                    badge: -1,
                    action: function () {
                        annonceFunction(app);
                    }
                },
                {
                    icon: 'search',
                    label: 'Missions',
                    badge: -1,
                    action: function () {
                        missionFunction(app);
                    }
                },
                {
                    self: this,
                    icon: 'search',
                    label: 'Compte',
                    badge: -1,
                    action: function () {
                        accountFunction(app);
                    }
                }
            ],
            logo: 'assets/img/vitonjob.png',
            searchbar: {
                placeholder: 'string'
            },
            segments: [
                {
                    title: {
                        icon: 'string',
                        label: '0'
                    },
                    subtitle: {
                        icon: 'string',
                        label: 'Contrats en attente'
                    },
                    action: function () {
                        console.log('works 1');
                    },
                    style: 'style2'
                },
                {
                    title: {
                        icon: 'string',
                        label: '0'
                    },
                    subtitle: {
                        icon: 'string',
                        label: 'Pointages à valider'
                    },
                    action: function () {
                        console.log('works 2');
                    },
                    style: 'style2'
                },
                {
                    title: {
                        icon: 'string',
                        label: '0'
                    },
                    subtitle: {
                        icon: 'string',
                        label: 'Missions à clôturer'
                    },
                    action: function () {
                        console.log('works 3');
                    },
                    style: 'style2'
                }
            ]
        };
    };
    return JobyerStrategy;
}());

//# sourceMappingURL=jobyer.js.map

/***/ }),

/***/ 888:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployerStrategy; });
var EmployerStrategy = (function () {
    function EmployerStrategy() {
    }
    EmployerStrategy.prototype.loadHeaderData = function (app, notificationFunction, searchFunction, annonceFunction, missionFunction, accountFunction) {
        return {
            menu: [
                {
                    icon: 'search',
                    label: 'Recherche',
                    badge: 0,
                    action: function () { searchFunction(app); },
                    notificationFunction: notificationFunction
                },
                {
                    icon: 'search',
                    label: 'Annonces',
                    badge: -1,
                    action: function () { annonceFunction(app); }
                },
                {
                    icon: 'search',
                    label: 'Missions',
                    badge: -1,
                    action: function () { missionFunction(app); }
                },
                {
                    self: this,
                    icon: 'search',
                    label: 'Compte',
                    badge: -1,
                    action: function () { accountFunction(app); }
                }
            ],
            logo: 'assets/img/vitonjob.png',
            searchbar: {
                placeholder: 'string'
            },
            segments: [
                {
                    title: {
                        icon: 'string',
                        label: '0'
                    },
                    subtitle: {
                        icon: 'string',
                        label: 'Contrats en attente'
                    },
                    action: function () {
                        console.log('works 1');
                    },
                    style: 'style2'
                },
                {
                    title: {
                        icon: 'string',
                        label: '0'
                    },
                    subtitle: {
                        icon: 'string',
                        label: 'Pointages à valider'
                    },
                    action: function () {
                        console.log('works 2');
                    },
                    style: 'style2'
                },
                {
                    title: {
                        icon: 'string',
                        label: '0'
                    },
                    subtitle: {
                        icon: 'string',
                        label: 'Missions à clôturer'
                    },
                    action: function () {
                        console.log('works 3');
                    },
                    style: 'style2'
                }
            ]
        };
    };
    return EmployerStrategy;
}());

//# sourceMappingURL=employer.js.map

/***/ }),

/***/ 889:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tabs_tabs_module__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_module__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__test_components_contact_contacts_module__ = __webpack_require__(890);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__test_components_about_about_module__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_module_search_search_module__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cv_offer_module_jobyer_availability_choice_jobyer_availability_choice_module__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__account_module_user_information_user_information_module__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__details_details_module__ = __webpack_require__(891);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__account_module_open_application_open_application_module__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__account_module_sign_up_sign_up_module__ = __webpack_require__(892);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_voj_components_module__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__account_module_enterprise_details_enterprise_details_module__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__account_module_options_options_module__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__account_module_account_account_module__ = __webpack_require__(893);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__account_module_identity_identity_module__ = __webpack_require__(894);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__account_module_main_address_main_address_module__ = __webpack_require__(895);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__account_module_login_login_module__ = __webpack_require__(896);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__account_module_bank_settings_bank_settings_module__ = __webpack_require__(897);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__account_module_personal_details_identity_personal_details_identity_module__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__cv_offer_module_availabilities_add_days_availabilities_add_days_module__ = __webpack_require__(898);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__cv_offer_module_availabilities_availabilities_module__ = __webpack_require__(899);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__landing_page_landing_page_module__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__cv_offer_module_languages_languages_module__ = __webpack_require__(900);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__account_module_enterprise_search_enterprise_search_module__ = __webpack_require__(902);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__account_module_reset_password_reset_password_module__ = __webpack_require__(904);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__account_module_personal_details_personal_details_module__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__account_module_company_company_module__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__account_module_my_cv_my_cv_module__ = __webpack_require__(905);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__cv_offer_module_qualities_qualities_module__ = __webpack_require__(907);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__information_resume_information_resume_module__ = __webpack_require__(909);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__options_options_module__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__find_job_find_job_module__ = __webpack_require__(910);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__account_module_jobs_list_jobs_list_module__ = __webpack_require__(911);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__availabilities_add_slot_availabilities_add_slot_page_module__ = __webpack_require__(913);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__calendar_calendar_module__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__documents_documents_module__ = __webpack_require__(915);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





































var PagesModule = (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [],
            imports: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__tabs_tabs_module__["TabsModule"],
                __WEBPACK_IMPORTED_MODULE_2__home_home_module__["HomeModule"],
                __WEBPACK_IMPORTED_MODULE_3__test_components_contact_contacts_module__["a" /* ContactModule */],
                __WEBPACK_IMPORTED_MODULE_4__test_components_about_about_module__["AboutModule"],
                __WEBPACK_IMPORTED_MODULE_5__search_module_search_search_module__["SearchPageModule"],
                __WEBPACK_IMPORTED_MODULE_8__details_details_module__["a" /* DetailsPageModule */],
                __WEBPACK_IMPORTED_MODULE_9__account_module_open_application_open_application_module__["OpenApplicationModule"],
                __WEBPACK_IMPORTED_MODULE_8__details_details_module__["a" /* DetailsPageModule */],
                __WEBPACK_IMPORTED_MODULE_16__account_module_main_address_main_address_module__["a" /* MainAddressModule */],
                __WEBPACK_IMPORTED_MODULE_12__account_module_enterprise_details_enterprise_details_module__["EnterpriseDetailsModule"],
                __WEBPACK_IMPORTED_MODULE_7__account_module_user_information_user_information_module__["UserInformationModule"],
                __WEBPACK_IMPORTED_MODULE_6__cv_offer_module_jobyer_availability_choice_jobyer_availability_choice_module__["JobyerAvailabilityChoiceModule"],
                __WEBPACK_IMPORTED_MODULE_13__account_module_options_options_module__["OptionsModule"],
                __WEBPACK_IMPORTED_MODULE_15__account_module_identity_identity_module__["a" /* IdentityModule */],
                __WEBPACK_IMPORTED_MODULE_14__account_module_account_account_module__["a" /* AccountPageModule */],
                __WEBPACK_IMPORTED_MODULE_19__account_module_personal_details_identity_personal_details_identity_module__["PersonalDetailsIdentityPageModule"],
                __WEBPACK_IMPORTED_MODULE_17__account_module_login_login_module__["a" /* LoginModule */],
                __WEBPACK_IMPORTED_MODULE_18__account_module_bank_settings_bank_settings_module__["a" /* BankSettingsPageModule */],
                __WEBPACK_IMPORTED_MODULE_10__account_module_sign_up_sign_up_module__["a" /* SignUpPageModule */],
                __WEBPACK_IMPORTED_MODULE_11__components_voj_components_module__["a" /* VojComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_20__cv_offer_module_availabilities_add_days_availabilities_add_days_module__["a" /* AvailabilitiesAddDaysPageModule */],
                __WEBPACK_IMPORTED_MODULE_21__cv_offer_module_availabilities_availabilities_module__["a" /* AvailabilitiesPageModule */],
                __WEBPACK_IMPORTED_MODULE_22__landing_page_landing_page_module__["LandingPageModule"],
                __WEBPACK_IMPORTED_MODULE_29__cv_offer_module_qualities_qualities_module__["a" /* QualitiesPageModule */],
                __WEBPACK_IMPORTED_MODULE_23__cv_offer_module_languages_languages_module__["a" /* LanguagesPageModule */],
                __WEBPACK_IMPORTED_MODULE_24__account_module_enterprise_search_enterprise_search_module__["a" /* EnterpriseSearchPageModule */],
                __WEBPACK_IMPORTED_MODULE_25__account_module_reset_password_reset_password_module__["a" /* ResetPasswordModule */],
                __WEBPACK_IMPORTED_MODULE_27__account_module_company_company_module__["CompanyModule"],
                __WEBPACK_IMPORTED_MODULE_26__account_module_personal_details_personal_details_module__["PersonalDetailsPageModule"],
                __WEBPACK_IMPORTED_MODULE_28__account_module_my_cv_my_cv_module__["a" /* MyCvPageModule */],
                __WEBPACK_IMPORTED_MODULE_31__options_options_module__["OptionsPageModule"],
                __WEBPACK_IMPORTED_MODULE_33__account_module_jobs_list_jobs_list_module__["a" /* JobsListPageModule */],
                __WEBPACK_IMPORTED_MODULE_32__find_job_find_job_module__["a" /* FindJobPageModule */],
                __WEBPACK_IMPORTED_MODULE_30__information_resume_information_resume_module__["a" /* InformationResumePageModule */],
                __WEBPACK_IMPORTED_MODULE_34__availabilities_add_slot_availabilities_add_slot_page_module__["a" /* AvailabilitiesAddSlotPageModule */],
                __WEBPACK_IMPORTED_MODULE_35__calendar_calendar_module__["CalendarPageModule"],
                __WEBPACK_IMPORTED_MODULE_36__documents_documents_module__["a" /* DocumentsPageModule */]
            ]
        })
    ], PagesModule);
    return PagesModule;
}());

//# sourceMappingURL=pages.module.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInformationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_voj_configuration__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__strategy_employer__ = __webpack_require__(864);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__strategy_jobyer__ = __webpack_require__(865);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__strategy_context__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_navigation_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__identity_identity__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__main_address_main_address__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__personal_details_personal_details__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__personal_details_identity_personal_details_identity__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__bank_settings_bank_settings__ = __webpack_require__(119);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var UserInformationPage = (function () {
    function UserInformationPage(config, storage, context, navigationService) {
        var _this = this;
        this.config = config;
        this.storage = storage;
        this.context = context;
        this.navigationService = navigationService;
        this.userData = {};
        // Get user type
        this.userType = (this.config.configuration.customer == "J" ? "jobyer" : "employer");
        console.log('User type:', this.userType);
        /***
         * Strategy pattern test
         * @type {EmployerStrategy | JobyerStrategy}
         */
        __WEBPACK_IMPORTED_MODULE_6__strategy_context__["a" /* Context */].strategy = (this.userType !== 'jobyer') ? new __WEBPACK_IMPORTED_MODULE_4__strategy_employer__["a" /* EmployerStrategy */]() : new __WEBPACK_IMPORTED_MODULE_5__strategy_jobyer__["a" /* JobyerStrategy */]();
        this.dataPageHeader = this.context.loadHeaderData();
        /** END **/
        this.storage.get("currentUser").then(function (data) {
            if (!data) {
                return;
            }
            _this.currentUser = JSON.parse(data);
            _this.userData = {
                // JobyerStrategy
                //name: this.currentUser.identity ? this.currentUser.identity.lastName : '',
                //firstName: this.currentUser.identity ? this.currentUser.identity.firstName : '',
                name: "Ma civilité",
                identityPage: __WEBPACK_IMPORTED_MODULE_8__identity_identity__["a" /* IdentityPage */],
                no: "Mon adresse",
                addressPage: __WEBPACK_IMPORTED_MODULE_9__main_address_main_address__["a" /* MainAddressPage */],
                birthDate: "Mes données sociales",
                birthDataPage: __WEBPACK_IMPORTED_MODULE_10__personal_details_personal_details__["a" /* PersonalDetailsPage */],
                placeOfBirth: "",
                identityDocumentType: 'Mon identité',
                identityCardPage: __WEBPACK_IMPORTED_MODULE_11__personal_details_identity_personal_details_identity__["a" /* PersonalDetailsIdentityPage */],
                docNumber: "",
                bankDetails: 'Mes coordonnées bancaires',
                bankSettingPage: __WEBPACK_IMPORTED_MODULE_12__bank_settings_bank_settings__["a" /* BankSettingsPage */],
                documents: 'Mes documents',
                streetName: '',
                postcode: "",
                city: '',
                // EmployerStrategy
                companyName: 'Dome Enterprise'
            };
        });
    }
    UserInformationPage.prototype.presentPage = function (page) {
        var vojPage = { page: page, isRoot: true };
        this.navigationService.navigate("main", vojPage);
    };
    UserInformationPage.prototype.test = function () {
    };
    UserInformationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'user-information-page',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/account-module/user-information/user-information.html"*/'<voj-page-header [data]="dataPageHeader"></voj-page-header>\n\n<!-- Jobyer info list -->\n<ion-list padding class="voj-user-info-list" *ngIf="userType === \'jobyer\'">\n    <!-- User name -->\n    <ion-item>\n        <h2 class="voj-user-info-item-label">{{userData.name}} {{userData.firstName}}</h2>\n\n        <button class="voj-user-info-edit-btn" ion-button icon-only item-end (click)="presentPage(userData.identityPage)">\n            <ion-icon name="create"></ion-icon>\n        </button>\n    </ion-item>\n\n    <!-- Address -->\n    <ion-item>\n        <h2 class="voj-user-info-item-label">{{userData.no}} {{userData.streetName}}</h2>\n        <p>{{userData.postcode}} {{userData.city}}</p>\n        <button class="voj-user-info-edit-btn" ion-button icon-only item-end (click)="presentPage(userData.addressPage)">\n            <ion-icon name="create"></ion-icon>\n        </button>\n    </ion-item>\n\n    <!-- Birth date and Place of birth -->\n    <ion-item>\n        <h2 class="voj-user-info-item-label">{{userData.birthDate}}<br>{{userData.placeOfBirth}}</h2>\n\n        <button class="voj-user-info-edit-btn" ion-button icon-only item-end (click)="presentPage(userData.birthDataPage)">\n            <ion-icon name="create"></ion-icon>\n        </button>\n    </ion-item>\n\n    <!-- Identity document -->\n    <ion-item>\n        <h2 class="voj-user-info-item-label">{{userData.identityDocumentType}} {{userData.docNumber}}</h2>\n\n        <button class="voj-user-info-edit-btn" ion-button icon-only item-end (click)="presentPage(userData.identityCardPage)">\n            <ion-icon name="create"></ion-icon>\n        </button>\n    </ion-item>\n\n    <!-- Bank details -->\n    <ion-item>\n        <h2 class="voj-user-info-item-label">{{userData.bankDetails}}</h2>\n\n        <button class="voj-user-info-edit-btn" ion-button icon-only item-end (click)="presentPage(userData.bankSettingPage)">\n            <ion-icon name="create"></ion-icon>\n        </button>\n    </ion-item>\n\n    <!-- Documents -->\n    <ion-item>\n        <h2 class="voj-user-info-item-label">{{userData.documents}}</h2>\n\n        <button class="voj-user-info-edit-btn" ion-button icon-only item-end (click)="test()">\n            <ion-icon name="create"></ion-icon>\n        </button>\n    </ion-item>\n</ion-list>\n\n<!-- Employer info list -->\n<ion-list padding class="voj-user-info-list" *ngIf="userType === \'employer\'">\n    <!-- 1 - Company name -->\n    <ion-item>\n        <h2 class="voj-user-info-item-label">{{userData.companyName}}</h2>\n\n        <button class="voj-user-info-edit-btn" ion-button icon-only item-end (click)="presentPage(\'Enterprise Details 1/2\')">\n            <ion-icon name="create"></ion-icon>\n        </button>\n    </ion-item>\n\n    <!-- 2 - Address -->\n    <ion-item>\n        <h2 class="voj-user-info-item-label">{{userData.no}} {{userData.streetName}}<br>{{userData.postcode}} {{userData.city}}</h2>\n\n        <button class="voj-user-info-edit-btn" ion-button icon-only item-end (click)="presentPage(\'Addresses page\')">\n            <ion-icon name="create"></ion-icon>\n        </button>\n    </ion-item>\n\n    <!-- 3 - Enterprise Details 2/2 -->\n    <ion-item>\n        <h2 class="voj-user-info-item-label">{{\'Collective agreement, organization of occupational medicine, ...\'}}</h2>\n\n        <button class="voj-user-info-edit-btn" ion-button icon-only item-end (click)="presentPage(\'Enterprise Details 2/2\')">\n            <ion-icon name="create"></ion-icon>\n        </button>\n    </ion-item>\n\n    <!-- 4 - Bank details -->\n    <ion-item>\n        <h2 class="voj-user-info-item-label">{{ \'Bank details\' }}</h2>\n\n        <button class="voj-user-info-edit-btn" ion-button icon-only item-end (click)="presentPage(\'Bank Settings\')">\n            <ion-icon name="create"></ion-icon>\n        </button>\n    </ion-item>\n\n    <!-- 5 - My Documents -->\n    <ion-item>\n        <h2 class="voj-user-info-item-label">{{ \'My Documents\' }}</h2>\n\n        <button class="voj-user-info-edit-btn" ion-button icon-only item-end (click)="presentPage(\'Documents page\')">\n            <ion-icon name="create"></ion-icon>\n        </button>\n    </ion-item>\n\n    <!-- 6 - My presentation -->\n    <ion-item>\n        <h2 class="voj-user-info-item-label">{{ \'My presentation\' }}</h2>\n\n        <button class="voj-user-info-edit-btn" ion-button icon-only item-end (click)="presentPage(\'Enterprise Presentation\')">\n            <ion-icon name="create"></ion-icon>\n        </button>\n    </ion-item>\n\n    <!-- 7 - My qualities -->\n    <ion-item>\n        <h2 class="voj-user-info-item-label">{{ \'My qualities\' }}</h2>\n\n        <button class="voj-user-info-edit-btn" ion-button icon-only item-end (click)="presentPage(\'Qualities\')">\n            <ion-icon name="create"></ion-icon>\n        </button>\n    </ion-item>\n\n    <!-- 8 - My languages -->\n    <ion-item>\n        <h2 class="voj-user-info-item-label">{{ \'My languages\' }}</h2>\n\n        <button class="voj-user-info-edit-btn" ion-button icon-only item-end (click)="presentPage(\'Languages\')">\n            <ion-icon name="create"></ion-icon>\n        </button>\n    </ion-item>\n</ion-list>\n'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/account-module/user-information/user-information.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__config_voj_configuration__["a" /* Configuration */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_6__strategy_context__["a" /* Context */],
            __WEBPACK_IMPORTED_MODULE_7__services_navigation_service__["a" /* NavigationService */]])
    ], UserInformationPage);
    return UserInformationPage;
}());

//# sourceMappingURL=user-information.js.map

/***/ }),

/***/ 890:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ContactModule = (function () {
    function ContactModule() {
    }
    ContactModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__contact__["a" /* ContactPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__contact__["a" /* ContactPage */]), __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__["a" /* VojComponentsModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__contact__["a" /* ContactPage */]
            ]
        })
    ], ContactModule);
    return ContactModule;
}());

//# sourceMappingURL=contacts.module.js.map

/***/ }),

/***/ 891:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__details__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_voj_components_module__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DetailsPageModule = (function () {
    function DetailsPageModule() {
    }
    DetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__details__["a" /* DetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__details__["a" /* DetailsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4__components_voj_components_module__["a" /* VojComponentsModule */]
            ],
        })
    ], DetailsPageModule);
    return DetailsPageModule;
}());

//# sourceMappingURL=details.module.js.map

/***/ }),

/***/ 892:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_up__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_voj_components_module__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SignUpPageModule = (function () {
    function SignUpPageModule() {
    }
    SignUpPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sign_up__["a" /* SignUpPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sign_up__["a" /* SignUpPage */]),
                __WEBPACK_IMPORTED_MODULE_4__components_voj_components_module__["a" /* VojComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
            ],
        })
    ], SignUpPageModule);
    return SignUpPageModule;
}());

//# sourceMappingURL=sign-up.module.js.map

/***/ }),

/***/ 893:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AccountPageModule = (function () {
    function AccountPageModule() {
    }
    AccountPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__account__["a" /* AccountPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__account__["a" /* AccountPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__["a" /* VojComponentsModule */]
            ],
        })
    ], AccountPageModule);
    return AccountPageModule;
}());

//# sourceMappingURL=account.module.js.map

/***/ }),

/***/ 894:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IdentityModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__identity__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var IdentityModule = (function () {
    function IdentityModule() {
    }
    IdentityModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__identity__["a" /* IdentityPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__identity__["a" /* IdentityPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__["a" /* VojComponentsModule */]
            ],
        })
    ], IdentityModule);
    return IdentityModule;
}());

//# sourceMappingURL=identity.module.js.map

/***/ }),

/***/ 895:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainAddressModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_address__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MainAddressModule = (function () {
    function MainAddressModule() {
    }
    MainAddressModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__main_address__["a" /* MainAddressPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__main_address__["a" /* MainAddressPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__["a" /* VojComponentsModule */]
            ],
        })
    ], MainAddressModule);
    return MainAddressModule;
}());

//# sourceMappingURL=main-address.module.js.map

/***/ }),

/***/ 896:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_voj_components_module__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var LoginModule = (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4__components_voj_components_module__["a" /* VojComponentsModule */]
            ],
        })
    ], LoginModule);
    return LoginModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 897:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BankSettingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bank_settings__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BankSettingsPageModule = (function () {
    function BankSettingsPageModule() {
    }
    BankSettingsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__bank_settings__["a" /* BankSettingsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__bank_settings__["a" /* BankSettingsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__["a" /* VojComponentsModule */]
            ],
        })
    ], BankSettingsPageModule);
    return BankSettingsPageModule;
}());

//# sourceMappingURL=bank-settings.module.js.map

/***/ }),

/***/ 898:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvailabilitiesAddDaysPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__availabilities_add_days__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AvailabilitiesAddDaysPageModule = (function () {
    function AvailabilitiesAddDaysPageModule() {
    }
    AvailabilitiesAddDaysPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__availabilities_add_days__["a" /* AvailabilitiesAddDaysPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__availabilities_add_days__["a" /* AvailabilitiesAddDaysPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__["a" /* VojComponentsModule */]
            ],
        })
    ], AvailabilitiesAddDaysPageModule);
    return AvailabilitiesAddDaysPageModule;
}());

//# sourceMappingURL=availabilities-add-days.module.js.map

/***/ }),

/***/ 899:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvailabilitiesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__availabilities__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AvailabilitiesPageModule = (function () {
    function AvailabilitiesPageModule() {
    }
    AvailabilitiesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__availabilities__["a" /* AvailabilitiesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__availabilities__["a" /* AvailabilitiesPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__["a" /* VojComponentsModule */]
            ],
        })
    ], AvailabilitiesPageModule);
    return AvailabilitiesPageModule;
}());

//# sourceMappingURL=availabilities.module.js.map

/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Configuration; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environment__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_voj_configuration_model__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_request_http_request__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_voj_tuple_model__ = __webpack_require__(833);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_voj_events_voj_events__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Configuration = (function () {
    function Configuration(http, eventBus) {
        this.http = http;
        this.eventBus = eventBus;
        this.configuration = new __WEBPACK_IMPORTED_MODULE_2__models_voj_configuration_model__["a" /* VojConfiguration */]();
    }
    Configuration.prototype.initialize = function () {
        var _this = this;
        var payload = {
            "cid": __WEBPACK_IMPORTED_MODULE_1__environment__["a" /* envConfig */].cid
        };
        this.http.call(payload, __WEBPACK_IMPORTED_MODULE_1__environment__["a" /* envConfig */].server, "", true).subscribe(function (data) {
            if (data && data.length > 0) {
                _this.configuration.brand = data[0].brand;
                _this.configuration.customer = data[0].customer;
                _this.configuration.env = data[0].env;
                _this.configuration.target = data[0].target;
                _this.configuration.dlMode = data[0].dlmode;
                _this.configuration.logo = data[0].logo;
                _this.configuration.brand = data[0].brand;
                _this.configuration.css = JSON.stringify(data[0].css);
                _this.configuration.urls = [];
                for (var key in data[0].urls) {
                    var t = new __WEBPACK_IMPORTED_MODULE_4__models_voj_tuple_model__["a" /* VojTuple */]();
                    t.key = key;
                    t.value = data[0].urls[key];
                    _this.configuration.urls.push(t);
                }
                _this.eventBus.publishAppHeader();
            }
        });
    };
    Configuration = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_http_request_http_request__["a" /* HttpRequestProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_voj_events_voj_events__["a" /* EventBusProvider */]])
    ], Configuration);
    return Configuration;
}());

//# sourceMappingURL=voj-configuration.js.map

/***/ }),

/***/ 900:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanguagesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__languages__ = __webpack_require__(901);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LanguagesPageModule = (function () {
    function LanguagesPageModule() {
    }
    LanguagesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__languages__["a" /* LanguagesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__languages__["a" /* LanguagesPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__["a" /* VojComponentsModule */]
            ],
        })
    ], LanguagesPageModule);
    return LanguagesPageModule;
}());

//# sourceMappingURL=languages.module.js.map

/***/ }),

/***/ 901:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanguagesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_voj_configuration__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LanguagesPage = (function () {
    function LanguagesPage(configurationService) {
        this.configurationService = configurationService;
        this.isMobile = false;
        this.config = this.configurationService.configuration;
        this.config.isLargeScreen ? this.isMobile = false : this.isMobile = true;
        this.headerData = {
            title: 'My languages',
            style: 'any',
            actions: [{
                    id: 'xdcfgvyhubijnklbhvg',
                    label: 'help',
                    icon: 'help',
                    action: function () {
                        console.log('button works');
                    }
                }],
            isCanceled: true
        };
        this.formData = {
            fields: [
                {
                    type: 'customTwoSelects',
                    value: 'select 1',
                    value2: 'select 2',
                    label: 'Add a language',
                    dataset: [
                        { id: 4, key: 'example 1', value: 'example1' },
                        { id: 5, key: 'example 2', value: 'example2' },
                        { id: 6, key: 'example 3', value: 'example3' },
                        { id: 7, key: 'example 4', value: 'example4' }
                    ],
                    dataset2: [
                        { id: 8, key: 'test 1', value: 'test1' },
                        { id: 9, key: 'test 2', value: 'test2' },
                        { id: 10, key: 'test 3', value: 'test3' },
                    ],
                    required: true,
                    visible: true,
                    id: '',
                    name: 'customlanguagesSelect'
                },
            ],
            submit: {
                id: 'xdcfgvyhubijnkfwlbhvg',
                label: 'Validate',
                icon: 'help',
                action: function () {
                    console.log('Navigation to J-S-CV-V1-01 Information Resume');
                }
            }
        };
    }
    LanguagesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LanguagesPage');
    };
    LanguagesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'languages-page',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/cv-offer-module/languages/languages.html"*/'<voj-page-header [data]=\'headerData\'></voj-page-header>\n<div [ngClass]="isMobile ? \'languages-container\' : \'\'" class="languages-parent">\n    <div [ngClass]="isMobile ? \'languages-child-container\' : \'\'" class="languages-child">\n        <voj-form [data]=\'formData\'></voj-form>\n    </div>\n</div>\n'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/cv-offer-module/languages/languages.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__config_voj_configuration__["a" /* Configuration */]])
    ], LanguagesPage);
    return LanguagesPage;
}());

//# sourceMappingURL=languages.js.map

/***/ }),

/***/ 902:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnterpriseSearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__enterprise_search__ = __webpack_require__(903);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var EnterpriseSearchPageModule = (function () {
    function EnterpriseSearchPageModule() {
    }
    EnterpriseSearchPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__enterprise_search__["a" /* EnterpriseSearchPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__enterprise_search__["a" /* EnterpriseSearchPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__["a" /* VojComponentsModule */]
            ],
        })
    ], EnterpriseSearchPageModule);
    return EnterpriseSearchPageModule;
}());

//# sourceMappingURL=enterprise-search.module.js.map

/***/ }),

/***/ 903:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnterpriseSearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_voj_configuration__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EnterpriseSearchPage = (function () {
    function EnterpriseSearchPage(configurationService) {
        this.configurationService = configurationService;
        this.isMobile = false;
        this.searchInput = '';
        this.input1 = '';
        this.input2 = '';
        this.input3 = '';
        this.config = this.configurationService.configuration;
        this.config.isLargeScreen ? this.isMobile = false : this.isMobile = true;
        this.headerData = {
            title: 'Rechercher mon entreprise',
            style: 'any',
            actions: [{
                    id: 'gcfhvjbknml',
                    label: '',
                    icon: 'help',
                    action: function showHelp() {
                        console.log('showHelp works');
                    }
                }],
            isCanceled: true
        };
        this.segmentData = {
            activeSegmentTab: 0,
            segmentsList: [
                {
                    title: 'Par nom',
                },
                {
                    title: 'Par siren'
                }
            ]
        };
    }
    EnterpriseSearchPage.prototype.initializeItems = function () {
        this.enterpriseData = [
            {
                companyname: 'TestCompany2',
                lastname: 'LastName2',
                firstname: 'FirstName2',
                siren: '765432178',
            },
            {
                companyname: 'TestCompany3',
                lastname: 'LastName3',
                firstname: 'FirstName3',
                siren: '897655638',
            },
            {
                companyname: 'TestCompany1',
                lastname: 'LastName1',
                firstname: 'FirstName1',
                siren: '123456789',
            },
            {
                companyname: 'TestCompany4',
                lastname: 'LastName4',
                firstname: 'FirstName4',
                siren: '123546789',
            },
            {
                companyname: 'TestCompany5',
                lastname: 'LastName5',
                firstname: 'FirstName5',
                siren: '123456798',
            }
        ];
    };
    EnterpriseSearchPage.prototype.filterItems = function () {
        var _this = this;
        if (this.segmentData.activeSegmentTab === 1) {
            this.searchInput = this.input1 + this.input2 + this.input3;
        }
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        // Filtering for first segment by name
        if (this.searchInput && this.searchInput.trim() != '' && this.segmentData.activeSegmentTab === 0) {
            console.log('Segment 1 works');
            this.enterpriseData = this.enterpriseData.filter(function (item) {
                var result = false;
                if ((item['firstname'].toLowerCase().indexOf(_this.searchInput.toLowerCase()) > -1) ||
                    (item['lastname'].toLowerCase().indexOf(_this.searchInput.toLowerCase()) > -1) ||
                    item['companyname'].toLowerCase().indexOf(_this.searchInput.toLowerCase()) > -1) {
                    result = true;
                }
                return result;
            });
        }
        else if (this.searchInput && this.searchInput.trim() != '' && this.segmentData.activeSegmentTab === 1) {
            this.enterpriseData = this.enterpriseData.filter(function (item) {
                var result = false;
                if ((item['siren'] === _this.searchInput)) {
                    result = true;
                }
                return result;
            });
        }
        else {
            this.enterpriseData = [];
        }
    };
    EnterpriseSearchPage.prototype.selectedItem = function () {
        console.log('Navigate tE-S-GCO-V1-04-Enterprise Details 1/3');
    };
    EnterpriseSearchPage.prototype.clearEnterpriseData = function () {
        this.enterpriseData = [];
        this.searchInput = '';
        this.input1 = '';
        this.input2 = '';
        this.input3 = '';
    };
    EnterpriseSearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EnterpriseSearchPage');
    };
    EnterpriseSearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'enterprise-search-page',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/account-module/enterprise-search/enterprise-search.html"*/'<voj-page-header [data]=\'headerData\'></voj-page-header>\n\n<!--<ion-content>-->\n\n\n    <div [ngClass]="isMobile ? \'enterprise-search-container\' : \'\'" class="enterprise-search-parent">\n        <div [ngClass]="isMobile ? \'enterprise-search-child-container\' : \'\'" class="enterprise-search-child">\n            <voj-header-segment (enterpriseSearchEvent)="clearEnterpriseData($event)" [data]=\'segmentData\'\n                                [(activeTab)]="segmentData.activeSegmentTab"></voj-header-segment>\n            <ion-searchbar *ngIf="segmentData.activeSegmentTab === 0" class="enterprise-search-bar" [(ngModel)]="searchInput" (ionInput)="filterItems()"></ion-searchbar>\n            <ion-grid *ngIf="segmentData.activeSegmentTab === 1" class="enterprise-search-bar2">\n                <ion-row align-items-center justify-content-center>\n                    <ion-col col-3><ion-input type="text" maxlength="3" [(ngModel)]="input1" class="enterprise-search-input"></ion-input></ion-col>\n                    <ion-col col-3><ion-input type="text" maxlength="3" [(ngModel)]="input2" class="enterprise-search-input"></ion-input></ion-col>\n                    <ion-col col-3><ion-input type="text" maxlength="3" [(ngModel)]="input3" class="enterprise-search-input"></ion-input></ion-col>\n                    <ion-col col-3 text-right><button clear ion-button (click)="filterItems()">\n                        <ion-icon class="search-btn" name="md-search"></ion-icon>\n                    </button></ion-col>\n                </ion-row>\n            </ion-grid>\n            <ion-list class="enterprise-data">\n                <ion-item *ngFor="let item of enterpriseData">\n                    <h2>{{item.companyname}}</h2>\n                    <h2>{{item.lastname}} {{item.firstname}}</h2>\n                    <h2>SIREN {{item.siren}}</h2>\n                    <button item-end class="select-button" (click)="selectedItem()">Sélectionner</button>\n                </ion-item>\n            </ion-list>\n        </div>\n    </div>\n<!--</ion-content>-->'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/account-module/enterprise-search/enterprise-search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__config_voj_configuration__["a" /* Configuration */]])
    ], EnterpriseSearchPage);
    return EnterpriseSearchPage;
}());

//# sourceMappingURL=enterprise-search.js.map

/***/ }),

/***/ 904:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reset_password__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_voj_components_module__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ResetPasswordModule = (function () {
    function ResetPasswordModule() {
    }
    ResetPasswordModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__reset_password__["a" /* ResetPasswordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__reset_password__["a" /* ResetPasswordPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4__components_voj_components_module__["a" /* VojComponentsModule */]
            ],
        })
    ], ResetPasswordModule);
    return ResetPasswordModule;
}());

//# sourceMappingURL=reset-password.module.js.map

/***/ }),

/***/ 905:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyCvPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_cv__ = __webpack_require__(906);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MyCvPageModule = (function () {
    function MyCvPageModule() {
    }
    MyCvPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__my_cv__["a" /* MyCvPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__my_cv__["a" /* MyCvPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__["a" /* VojComponentsModule */]
            ],
        })
    ], MyCvPageModule);
    return MyCvPageModule;
}());

//# sourceMappingURL=my-cv.module.js.map

/***/ }),

/***/ 906:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyCvPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_voj_configuration__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MyCvPage = (function () {
    function MyCvPage(configurationService) {
        this.configurationService = configurationService;
        this.isMobile = false;
        this.config = this.configurationService.configuration;
        this.config.isLargeScreen ? this.isMobile = false : this.isMobile = true;
        this.headerData = {
            title: 'My CV',
            style: 'any',
            actions: [{
                    id: 'xdcfgvyhubijnklbhvg',
                    label: 'help',
                    icon: 'help',
                    action: function () {
                        console.log('button works');
                    }
                }],
            isCanceled: true
        };
        this.formData = {
            fields: [
                {
                    type: 'customUploadSelect',
                    value: '',
                    label: 'Add file',
                    visible: true,
                    id: '',
                    name: 'customMyCvSelect'
                },
            ],
            submit: {
                id: 'xdcfgvyhubijnkfwlbhvg',
                label: 'Validate',
                icon: 'help',
                action: function () {
                    console.log('Button works');
                }
            }
        };
    }
    MyCvPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyCvPage');
    };
    MyCvPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'my-cv-page',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/account-module/my-cv/my-cv.html"*/'  <voj-page-header [data]=\'headerData\'></voj-page-header>\n  <div [ngClass]="isMobile ? \'my-cv-container\' : \'\'" class="my-cv-parent">\n    <div [ngClass]="isMobile ? \'my-cv-child-container\' : \'\'" class="my-cv-child">\n      <voj-form [data]=\'formData\'></voj-form>\n    </div>\n  </div>\n\n'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/account-module/my-cv/my-cv.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__config_voj_configuration__["a" /* Configuration */]])
    ], MyCvPage);
    return MyCvPage;
}());

//# sourceMappingURL=my-cv.js.map

/***/ }),

/***/ 907:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QualitiesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__qualities__ = __webpack_require__(908);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var QualitiesPageModule = (function () {
    function QualitiesPageModule() {
    }
    QualitiesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__qualities__["a" /* QualitiesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__qualities__["a" /* QualitiesPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__["a" /* VojComponentsModule */]
            ],
        })
    ], QualitiesPageModule);
    return QualitiesPageModule;
}());

//# sourceMappingURL=qualities.module.js.map

/***/ }),

/***/ 908:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QualitiesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_voj_configuration__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QualitiesPage = (function () {
    function QualitiesPage(configurationService) {
        this.configurationService = configurationService;
        this.isMobile = false;
        this.config = this.configurationService.configuration;
        this.config.isLargeScreen ? this.isMobile = false : this.isMobile = true;
        this.headerData = {
            title: 'My qualities',
            style: 'any',
            actions: [{
                    id: 'xdcfgvyhubijnklbhvg',
                    label: 'help',
                    icon: 'help',
                    action: function () {
                        console.log('button works');
                    }
                }],
            isCanceled: true
        };
        this.formData = {
            fields: [
                {
                    type: 'customSelect',
                    label: 'Add quality',
                    value: '',
                    dataset: [
                        { id: 4, key: 'example 1', value: 'example1' },
                        { id: 5, key: 'example 2', value: 'example2' },
                        { id: 6, key: 'example 3', value: 'example3' },
                        { id: 7, key: 'example 4', value: 'example4' },
                        { id: 41, key: 'example 5', value: 'example5' },
                        { id: 51, key: 'example 6', value: 'example6' },
                        { id: 61, key: 'example 7', value: 'example7' },
                        { id: 71, key: 'example 8', value: 'example8' },
                    ],
                    required: false,
                    visible: true,
                    id: "customQualitiesSelect",
                    name: 'customQualitiesSelect'
                },
            ],
            submit: {
                id: 'xdcfgvyhubijnkfwlbhvg',
                label: 'Validate',
                icon: 'help',
                action: function () {
                    console.log('Navigation to J-S-CV-V1-01 Information Resume');
                }
            }
        };
    }
    QualitiesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad QualitiesPage');
    };
    QualitiesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'qualities-page',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/cv-offer-module/qualities/qualities.html"*/'  <voj-page-header [data]=\'headerData\'></voj-page-header>\n  <div [ngClass]="isMobile ? \'qualities-container\' : \'\'" class="qualities-parent">\n    <div [ngClass]="isMobile ? \'qualities-child-container\' : \'\'" class="qualities-child">\n      <voj-form [data]=\'formData\'></voj-form>\n    </div>\n  </div>\n'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/cv-offer-module/qualities/qualities.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__config_voj_configuration__["a" /* Configuration */]])
    ], QualitiesPage);
    return QualitiesPage;
}());

//# sourceMappingURL=qualities.js.map

/***/ }),

/***/ 909:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformationResumePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__information_resume__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var InformationResumePageModule = (function () {
    function InformationResumePageModule() {
    }
    InformationResumePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__information_resume__["a" /* InformationResumePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__information_resume__["a" /* InformationResumePage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__["a" /* VojComponentsModule */]
            ],
        })
    ], InformationResumePageModule);
    return InformationResumePageModule;
}());

//# sourceMappingURL=information-resume.module.js.map

/***/ }),

/***/ 910:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindJobPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__find_job__ = __webpack_require__(603);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FindJobPageModule = (function () {
    function FindJobPageModule() {
    }
    FindJobPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__find_job__["a" /* FindJobPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__find_job__["a" /* FindJobPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__["a" /* VojComponentsModule */]
            ],
        })
    ], FindJobPageModule);
    return FindJobPageModule;
}());

//# sourceMappingURL=find-job.module.js.map

/***/ }),

/***/ 911:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobsListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jobs_list__ = __webpack_require__(912);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var JobsListPageModule = (function () {
    function JobsListPageModule() {
    }
    JobsListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__jobs_list__["a" /* JobsListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__jobs_list__["a" /* JobsListPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__["a" /* VojComponentsModule */]
            ],
        })
    ], JobsListPageModule);
    return JobsListPageModule;
}());

//# sourceMappingURL=jobs-list.module.js.map

/***/ }),

/***/ 912:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobsListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_voj_configuration__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_modal_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__find_job_find_job__ = __webpack_require__(603);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var JobsListPage = (function () {
    function JobsListPage(configurationService, modalService) {
        this.configurationService = configurationService;
        this.modalService = modalService;
        this.isMobile = false;
        this.config = this.configurationService.configuration;
        this.config.isLargeScreen ? this.isMobile = false : this.isMobile = true;
        this.headerData = {
            title: 'My jobs',
            style: 'any',
            actions: [{
                    id: 'xdcfgvyhubijnklbhvg',
                    label: 'help',
                    icon: 'help',
                    action: function () {
                        console.log('button works');
                    }
                }],
            isCanceled: true
        };
        this.formData = {
            fields: [
                {
                    type: 'customSelect',
                    value: '',
                    label: '',
                    dataset: [
                        { id: 4, key: 'test 1', value: 'test1' },
                        { id: 5, key: 'test 2', value: 'test2' },
                        { id: 6, key: 'test 3', value: 'test3' }
                    ],
                    required: false,
                    visible: true,
                    id: '1',
                    name: 'customSelectWithSearch'
                },
            ],
            submit: {
                id: 'xdcfgvyhubijnkfwlbhvg',
                label: 'Validate',
                icon: 'help',
                action: function () {
                    console.log('button works');
                }
            }
        };
    }
    JobsListPage.prototype.goToFindJob = function () {
        this.modalService.present({ page: __WEBPACK_IMPORTED_MODULE_3__find_job_find_job__["a" /* FindJobPage */] });
    };
    JobsListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BankSettingsPage');
    };
    JobsListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'jobs-list-page',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/account-module/jobs-list/jobs-list.html"*/'<ion-content>\n    <voj-page-header [data]=\'headerData\'></voj-page-header>\n    <div [ngClass]="isMobile ? \'jobs-list-container\' : \'\'">\n        <div [ngClass]="isMobile ? \'jobs-list-child-container\' : \'\'">\n            <ion-item>\n                <ion-label stacked class="jobs-list-label">Add job</ion-label>\n                <ion-input type="text" name="findJob" value="Job" (focus)="goToFindJob()"></ion-input>\n            </ion-item>\n            <voj-form [data]=\'formData\'></voj-form>\n        </div>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/account-module/jobs-list/jobs-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__config_voj_configuration__["a" /* Configuration */],
            __WEBPACK_IMPORTED_MODULE_2__services_modal_service__["a" /* ModalService */]])
    ], JobsListPage);
    return JobsListPage;
}());

//# sourceMappingURL=jobs-list.js.map

/***/ }),

/***/ 913:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvailabilitiesAddSlotPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__availabilities_add_slot__ = __webpack_require__(914);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AvailabilitiesAddSlotPageModule = (function () {
    function AvailabilitiesAddSlotPageModule() {
    }
    AvailabilitiesAddSlotPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__availabilities_add_slot__["a" /* AvailabilitiesAddSlotPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__availabilities_add_slot__["a" /* AvailabilitiesAddSlotPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__["a" /* VojComponentsModule */]
            ],
        })
    ], AvailabilitiesAddSlotPageModule);
    return AvailabilitiesAddSlotPageModule;
}());

//# sourceMappingURL=availabilities-add-slot-page.module.js.map

/***/ }),

/***/ 914:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvailabilitiesAddSlotPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_voj_configuration__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_navigation_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cv_offer_module_availabilities_availabilities__ = __webpack_require__(215);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AvailabilitiesAddSlotPage = (function () {
    function AvailabilitiesAddSlotPage(configurationService, navigationService) {
        this.configurationService = configurationService;
        this.navigationService = navigationService;
        this.isMobile = false;
        this.config = this.configurationService.configuration;
        this.config.isLargeScreen ? this.isMobile = false : this.isMobile = true;
        this.headerData = {
            title: 'Add an availability',
            style: 'any',
            actions: [{
                    id: 'xdcfggjhbj',
                    label: 'help',
                    icon: 'help',
                    action: function () {
                        console.log('button works');
                    }
                }],
            isCanceled: true
        };
        this.formData = {
            fields: [
                {
                    required: true,
                    type: 'text',
                    label: 'Available from',
                    value: '',
                    placeholder: '05/24/1990',
                    readonly: false,
                    visible: true,
                    id: '',
                    regex: '(?:0?2[/.-](?:[12][0-9]|0?[1-9])|(?:0?[469]|11)' +
                        '[/.-](?:30|[12][0-9]|0?[1-9])|(?:0?[13578]|1[02])[/.-](?:3[01]|[12][0-9]|0?[1-9]))[/.-][0-9]{4}',
                    name: 'Date from',
                },
                {
                    required: true,
                    type: 'text',
                    value: '',
                    label: 'Au',
                    placeholder: '05/24/1990',
                    readonly: false,
                    visible: true,
                    id: '',
                    regex: '(?:0?2[/.-](?:[12][0-9]|0?[1-9])|(?:0?[469]|11)' +
                        '[/.-](?:30|[12][0-9]|0?[1-9])|(?:0?[13578]|1[02])[/.-](?:3[01]|[12][0-9]|0?[1-9]))[/.-][0-9]{4}',
                    name: 'Date to',
                },
                {
                    value: 'wholeDay',
                    type: 'radioWithInputs',
                    label: 'Radio label',
                    dataset3: [
                        {
                            id: 1,
                            key: 'Whole day',
                            value: 'wholeDay'
                        },
                        {
                            id: 2,
                            key: '',
                            value: 'rangeHours',
                            subdata: {
                                key1: 'From',
                                placeholder1: '10:45',
                                value1: '',
                                name1: 'from hours',
                                key2: 'To',
                                value2: '',
                                name2: 'to hours',
                                placeholder2: '11:15',
                            }
                        }
                    ],
                    visible: true,
                    required: true,
                    regex: '([01]\\d|2[0-3]):([0-5]\\d)',
                    name: 'EntireDay',
                    id: '',
                },
            ],
            submit: {
                id: 'xdcfgvyhubijnkfwlbhvg',
                label: 'Validate',
                icon: 'build',
                action: function () {
                    this.validateDateFunc();
                }.bind(this)
            }
        };
    }
    AvailabilitiesAddSlotPage.prototype.validateDateFunc = function () {
        if (new Date(this.formData.fields[0].value) < new Date() ||
            new Date(this.formData.fields[1].value) < new Date(this.formData.fields[0].value)) {
            console.log('You can not enter a date earlier than the current date and ' +
                'also you can not enter second date earlier than the first date');
        }
        else {
            var vojNav = { page: __WEBPACK_IMPORTED_MODULE_3__cv_offer_module_availabilities_availabilities__["a" /* AvailabilitiesPage */], isRoot: false };
            this.navigationService.navigate('list', vojNav);
        }
    };
    AvailabilitiesAddSlotPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AvailabilitiesAddSlotPage');
    };
    AvailabilitiesAddSlotPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'availabilities-add-slot-page',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/availabilities-add-slot/availabilities-add-slot.html"*/'<voj-page-header [data]=\'headerData\'></voj-page-header>\n<div [ngClass]="isMobile ? \'availabilities-add-slot-container\' : \'\'" class="availabilities-add-slot-parent">\n    <div [ngClass]="isMobile ? \'availabilities-add-slot-child-container\' : \'\'" class="availabilities-add-slot-child">\n        <voj-form [data]=\'formData\'></voj-form>\n    </div>\n</div>'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/availabilities-add-slot/availabilities-add-slot.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__config_voj_configuration__["a" /* Configuration */],
            __WEBPACK_IMPORTED_MODULE_2__services_navigation_service__["a" /* NavigationService */]])
    ], AvailabilitiesAddSlotPage);
    return AvailabilitiesAddSlotPage;
}());

//# sourceMappingURL=availabilities-add-slot.js.map

/***/ }),

/***/ 915:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__documents__ = __webpack_require__(916);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DocumentsPageModule = (function () {
    function DocumentsPageModule() {
    }
    DocumentsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__documents__["a" /* DocumentsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__documents__["a" /* DocumentsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__["a" /* VojComponentsModule */]
            ],
        })
    ], DocumentsPageModule);
    return DocumentsPageModule;
}());

//# sourceMappingURL=documents.module.js.map

/***/ }),

/***/ 916:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_voj_configuration__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DocumentsPage = (function () {
    function DocumentsPage(configurationService) {
        this.configurationService = configurationService;
        this.isMobile = false;
        this.config = this.configurationService.configuration;
        this.config.isLargeScreen ? this.isMobile = false : this.isMobile = true;
        this.headerData = {
            title: 'My documents',
            style: 'any',
            actions: [{
                    id: 'xdcfgvyhubijnklbhvg',
                    label: 'help',
                    icon: 'help',
                    action: function () {
                        console.log('button works');
                    }
                }],
            isCanceled: true
        };
        this.formData = {
            fields: [
                {
                    type: 'customUploadSelect2',
                    value: '',
                    label: 'Add file',
                    visible: true,
                    id: '',
                    name: 'documentsUploadSelect2'
                },
            ],
            submit: {
                id: 'xdcfgvyhubijnkfwlbhvg',
                label: 'Validate',
                icon: 'help',
                action: function () {
                    console.log('Navigation to J-S-CV-V1-01 Information Resume');
                }
            }
        };
    }
    DocumentsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DocumentsPage');
    };
    DocumentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'documents-page',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/documents/documents.html"*/'<voj-page-header [data]=\'headerData\'></voj-page-header>\n<div [ngClass]="isMobile ? \'documents-container\' : \'\'" class="documents-parent">\n    <div [ngClass]="isMobile ? \'documents-child-container\' : \'\'" class="documents-child">\n        <!--<div class="custom-line"></div>-->\n        <voj-form [data]=\'formData\'></voj-form>\n    </div>\n</div>\n'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/documents/documents.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__config_voj_configuration__["a" /* Configuration */]])
    ], DocumentsPage);
    return DocumentsPage;
}());

//# sourceMappingURL=documents.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobyerAvailabilityChoicePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JobyerAvailabilityChoicePage = (function () {
    function JobyerAvailabilityChoicePage() {
        // Set page header title
        this.dataPageHeader = {
            title: 'Add an availability',
            actions: [
                {
                    id: 'help',
                    icon: 'help',
                    action: function () { console.log('Click help button.'); },
                    label: ''
                }
            ]
        };
    }
    JobyerAvailabilityChoicePage.prototype.presentPage = function (pageName) {
        console.log('Present page:', pageName);
    };
    JobyerAvailabilityChoicePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'jobyer-availability-choice-page',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/cv-offer-module/jobyer-availability-choice/jobyer-availability-choice.html"*/'<voj-page-header [data]="dataPageHeader"></voj-page-header>\n\n<ion-card padding>\n    <ion-card-header class="voj-card-header">\n        I am available:\n    </ion-card-header>\n    <ion-card-content class="voj-card-buttons">\n        <button ion-button block small (click)="presentPage(\'Totally\')">Totally</button>\n        <button ion-button block small (click)="presentPage(\'Partially\')">Partially</button>\n    </ion-card-content>\n</ion-card>\n'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/cv-offer-module/jobyer-availability-choice/jobyer-availability-choice.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], JobyerAvailabilityChoicePage);
    return JobyerAvailabilityChoicePage;
}());

//# sourceMappingURL=jobyer-availability-choice.js.map

/***/ })

},[604]);
//# sourceMappingURL=main.js.map