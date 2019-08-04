(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a routerLink=\"/contacts\">Contacts</a>\r\n<a routerLink=\"/detail\">Detail</a>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/contacts/contacts.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/contacts/contacts.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let contact of contacts\">\r\n  <a routerLink=\"/detail/{{ contact.id }}/{{ contact.name }}/{{ contact.phoneNumber }}\">{{ contact.name }}</a>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/learn-pipes/learn-pipes.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/learn-pipes/learn-pipes.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4> ngay khong dung pipes:\" {{ birthday }}\"</h4>\n<p> pipes | date : \"{{ birthday | date }}\" </p>\n<p> pipes | date:'medium' : \"{{ birthday | date:'medium' }}\" </p>\n<p> pipes | date:'shortTime' : \"{{ birthday | date:'shortTime' }}\" </p>\n<p> pipes | date:'mmss' : \"{{ birthday | date:'mmss' }}\" </p>\n\n\n<h4> object khong dung pipes: \"{{person}}\"</h4>\n<p>object dung TenObject.tenthuoctinh : \"{{ person.name }}\" (person.name)</p>\n<p>object dung | json : \"{{ person | json  }}\"</p>\n\n\n<h4>Lay String tu server ( promise string )</h4>\n<p> Khong dung pipes: \" {{ diachi }} \" </p>\n<p> Dung pipes | async : \" {{ diachi | async }} \"</p>\n\n\n<h4>Tạo pipes làm tròn số</h4>\n<p> Nhap vao la 1,9 : {{ 1.9 | roundNum }} </p>\n<p> NHap vao la 3.2 : {{ 3.2 | roundNum }}</p>\n\n<p> Truyen them vao tham tu file khai bao isUper </p>\n// truuyen them 1 bien nua vao\n<p> value = 2.7 TenThamSo = true lam tron len : \"{{ 2.7 | roundNum: true: 20  }}\" </p>\n<p> value = 2.7 TenThamSo = flase lam xuong len : \"{{ 2.7 | roundNum: flase  }}\" </p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/ng-form/ng-form.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ng-form/ng-form.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"OnSubmit(FromDemo)\" #FromDemo=\"ngForm\">\r\n  <input placeholder=\"email>\"\r\n         #txtEmail=\"ngModel\"\r\n         name=\"Email\"\r\n         ngModel\r\n         required\r\n         email />\r\n  <br><br>\r\n  <p *ngIf=\"FromDemo.touched && FromDemo.controls.Email?.errors?.required\" class=\"errors\">Nhap Email</p>\r\n  <p *ngIf=\"FromDemo.touched && txtEmail.errors?.email\" class=\"errors\">Email sai</p>\r\n\r\n  <input type=\"password\"\r\n         #txtPass=\"ngModel\"\r\n         placeholder=\"password\"\r\n         name=\"Pass\"\r\n         ngModel\r\n         minlength=\"6\"\r\n         pattern=\"[a-z]*\"\r\n         class=\"errors\" />\r\n  <p *ngIf=\"FromDemo.touched && txtPass.errors?.minlength\" class=\"errors\"> Mat khau it nhat 6 ki tu</p>\r\n  <p *ngIf=\"FromDemo.touched && txtPass.errors?.pattern\" class=\"errors\"> Mat khau phai gom cac chu tu a-z </p>\r\n  <br><br>\r\n      <div ngModelGroup=\"subjects\">\r\n        <label><input type=\"checkbox\" [ngModel]=\"false\" name=\"NodeJs\" />NodeJs </label>\r\n        <label><input type=\"checkbox\" [ngModel]=\"false\" name=\"Angular\" />Angular </label>\r\n        <label><input type=\"checkbox\" [ngModel]=\"false\" name=\"Html\" />Html </label>\r\n      </div>\r\n  <br><br>\r\n  <button [disabled]=\"FromDemo.invalid\">Submit</button>\r\n \r\n  <p>{{ txtEmail.errors | json }}</p>\r\n  <p>{{ txtPass.errors | json}}</p>\r\n</form>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/page-not-found/page-not-found.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page-not-found/page-not-found.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>page-not-found works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/struct/struct.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/struct/struct.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n<div *ngIf=\"ShowAdd\">\n  <input type=\"text\" placeholder=\"En\" [(ngModel)]=\"En\" />\n  <br />\n  <input type=\"text\" placeholder=\"Vn\" [(ngModel)]=\"Vn\" />\n  <br />\n  <button (click)=\"Add()\">Add</button>\n</div>\n  <button (click)=\"ShowADD()\"  *ngIf=\"!ShowAdd\">Add</button>\n\n<div>\n  <select [(ngModel)] =\"TrangThai\" >\n    <option value=\"Xem_TatCa\">Xem tat ca</option>\n    <option value=\"Xem_DaNho\">Tu da nho</option>\n    <option value=\"Xem_ChuaNho\">Tu chua nho</option>\n  </select>\n</div>\n\n<div *ngFor=\"let show of arrWords\">\n  <div [ngStyle]=\"Word\" *ngIf=\"getLocTrangThai(show.memorized)\" >\r\n    <div [style.color]=\"show.memorized ? 'green' : 'red' \">{{show.en}}</div>\r\n    <div>{{show.vn}}</div>\r\n    <button (click)=\"Delete(show.id)\" style=\"font-size:15px\">Delete</button>\r\n    <button (click)=\"show.memorized = !show.memorized  \" style=\"font-size:15px\">\r\n      {{ show.memorized ? \"Da thuoc\" : \"Chua thuoc\" }}\r\n    </button>\r\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user-from/user-from.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user-from/user-from.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input placeholder=\"User name\" [(ngModel)]=\"name\" #UserName />\r\n<h3>Your name is :<h2 [style.color]=\" isHightlight ? 'orangered' : 'black' \">{{name}}</h2> </h3>\r\n<h3 >{{ UserName.value | json }}</h3>\r\n<div [class]=\" isHightlight ? 'circle1' : 'circle2' \"></div>\r\n<div [class.circle1]=\"!isHightlight\" [class.circle2]=\"isHightlight\"></div>\r\n<div [ngStyle]=\"currentStyle\">Dong chu theo ngStyle</div>\r\n<div [ngStyle]=\"isHightlight ? currentStyleT : currentStyleF \">Dong chu thay doi</div>\r\n<div [ngClass]=\"currentClass\"></div>\r\n<button (click)=\"Change()\">{{ChangeColor ? 'Cam' : 'Den'}}</button>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/weather/weather.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/weather/weather.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>{{getMessage()}}</h3><br />\n<input style=\"text\" placeholder=\"enter your city name\" [(ngModel)]=\"txtcityName\" /><br /><br />\n<button (click)=\"getTemp()\" >Get weather</button>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/word/word.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/word/word.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 [hidden] =\"forgot\">\r\n  <a href=\"#\"> Phung Manh Quang</a>\r\n  <br />\r\n  {{ en }}\r\n</h3>\r\n<button (click)=\"btnForgot()\">Click</button>\r\n<p>{{ vn }}</p>\r\n<img [src]=\"imgurl\" />\r\n"

/***/ }),

/***/ "./src/app/Login.component.ts":
/*!************************************!*\
  !*** ./src/app/Login.component.ts ***!
  \************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.OnSubmit = function (FromDemo) {
        console.log(FromDemo);
        throw new Error('From is valid');
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: "\n  <form (ngSubmit)=\"OnSubmit(FromDemo)\" #FromDemo=\"ngForm\">\n    <input placeholder=\"email>\" name=\"Email\" ngModel required  /><br><br>\n    <p *ngIf=\"FromDemo.controls.Email?.errors?.required\" >Nhap Email</p>\n    <input type=\"password\" placeholder=\"password\" name=\"Pass\"  ngModel /><br><br>\n    <button [disabled]=\"FromDemo.invalid\" >Submit</button>\n  </form>\n\n"
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: appRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutingModule", function() { return appRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _contact_detail_contact_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact-detail/contact-detail.component */ "./src/app/contact-detail/contact-detail.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _contacts_contacts_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contacts/contacts.module */ "./src/app/contacts/contacts.module.ts");







var routesConfig = [
    { path: 'detail/:id/:name/:phoneNumber', component: _contact_detail_contact_detail_component__WEBPACK_IMPORTED_MODULE_4__["ContactDetailComponent"] },
    { path: '', redirectTo: 'contacts', pathMatch: 'full' },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"] }
];
var appRoutingModule = /** @class */ (function () {
    function appRoutingModule() {
    }
    appRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _contact_detail_contact_detail_component__WEBPACK_IMPORTED_MODULE_4__["ContactDetailComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"],
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routesConfig),
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _contacts_contacts_module__WEBPACK_IMPORTED_MODULE_6__["ContactsModule"]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], appRoutingModule);
    return appRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.sass":
/*!************************************!*\
  !*** ./src/app/app.component.sass ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Learn Angular Developer';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.sass */ "./src/app/app.component.sass")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _word_word_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./word/word.component */ "./src/app/word/word.component.ts");
/* harmony import */ var _user_from_user_from_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user-from/user-from.component */ "./src/app/user-from/user-from.component.ts");
/* harmony import */ var _struct_struct_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./struct/struct.component */ "./src/app/struct/struct.component.ts");
/* harmony import */ var _person_person_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./person/person.component */ "./src/app/person/person.component.ts");
/* harmony import */ var _parent_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./parent.component */ "./src/app/parent.component.ts");
/* harmony import */ var _child_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./child.component */ "./src/app/child.component.ts");
/* harmony import */ var _card_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./card.component */ "./src/app/card.component.ts");
/* harmony import */ var _learn_pipes_learn_pipes_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./learn-pipes/learn-pipes.component */ "./src/app/learn-pipes/learn-pipes.component.ts");
/* harmony import */ var _roundNum_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./roundNum.pipe */ "./src/app/roundNum.pipe.ts");
/* harmony import */ var _weather_weather_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./weather/weather.component */ "./src/app/weather/weather.component.ts");
/* harmony import */ var _Login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Login.component */ "./src/app/Login.component.ts");
/* harmony import */ var _ng_form_ng_form_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ng-form/ng-form.component */ "./src/app/ng-form/ng-form.component.ts");
/* harmony import */ var _sig_up_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./sig-up.component */ "./src/app/sig-up.component.ts");





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _word_word_component__WEBPACK_IMPORTED_MODULE_8__["WordComponent"],
                _user_from_user_from_component__WEBPACK_IMPORTED_MODULE_9__["UserFromComponent"],
                _struct_struct_component__WEBPACK_IMPORTED_MODULE_10__["StructComponent"],
                _person_person_component__WEBPACK_IMPORTED_MODULE_11__["PersonComponent"],
                _parent_component__WEBPACK_IMPORTED_MODULE_12__["ParentCompanent"],
                _child_component__WEBPACK_IMPORTED_MODULE_13__["ChildCompanent"],
                _card_component__WEBPACK_IMPORTED_MODULE_14__["CardComponent"],
                _learn_pipes_learn_pipes_component__WEBPACK_IMPORTED_MODULE_15__["LearnPipesComponent"],
                _roundNum_pipe__WEBPACK_IMPORTED_MODULE_16__["roudNum"],
                _weather_weather_component__WEBPACK_IMPORTED_MODULE_17__["WeatherComponent"],
                _Login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"],
                _ng_form_ng_form_component__WEBPACK_IMPORTED_MODULE_19__["NgFormComponent"],
                _sig_up_component__WEBPACK_IMPORTED_MODULE_20__["sigupComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["appRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/card.component.ts":
/*!***********************************!*\
  !*** ./src/app/card.component.ts ***!
  \***********************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CardComponent = /** @class */ (function () {
    function CardComponent() {
    }
    CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-card',
            template: "\n            <div class='card'>\n              <div class='header'>\n                <ng-content select=\".card-header\"></ng-content>\n              <div>\n              <div class='body'>\n                <ng-content select=\".card-body\"></ng-content>\n              <div>\n            </div>\n          ",
            styles: ["\n      .card {\n        padding: 5px;\n        margin: 5px;\n        background: #fff;\n        border-radius: 2px;\n        display: inline-block;\n        width: 300px;\n        box-shadow: 0px 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);\n      }\n  "]
        })
    ], CardComponent);
    return CardComponent;
}());

/*<p class="card-body" > Phung Manh Quang < /p>
  < h3 class="card-header" > Hoc Angular < /h3>
  viet ben html <app-card></app-card>
*/


/***/ }),

/***/ "./src/app/child.component.ts":
/*!************************************!*\
  !*** ./src/app/child.component.ts ***!
  \************************************/
/*! exports provided: ChildCompanent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildCompanent", function() { return ChildCompanent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChildCompanent = /** @class */ (function () {
    function ChildCompanent() {
        // Parent tương tác tới Child
        this.ClickAdd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        //Child tương tác tới Parent
        this.value = 0;
    }
    ChildCompanent.prototype.Add = function () {
        this.ClickAdd.emit(true);
    };
    ChildCompanent.prototype.Sub = function () {
        this.ClickAdd.emit(false);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], ChildCompanent.prototype, "ClickAdd", void 0);
    ChildCompanent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-child',
            template: "\n              <button (click)=\"Add()\" >Add for Parent</button><br>\n              <button (click)=\"Sub()\" >Sub for Parent</button>\n              <h3>{{ value }}<h3>\n            "
        })
    ], ChildCompanent);
    return ChildCompanent;
}());



/***/ }),

/***/ "./src/app/contact-detail/contact-detail.component.sass":
/*!**************************************************************!*\
  !*** ./src/app/contact-detail/contact-detail.component.sass ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QtZGV0YWlsL2NvbnRhY3QtZGV0YWlsLmNvbXBvbmVudC5zYXNzIn0= */"

/***/ }),

/***/ "./src/app/contact-detail/contact-detail.component.ts":
/*!************************************************************!*\
  !*** ./src/app/contact-detail/contact-detail.component.ts ***!
  \************************************************************/
/*! exports provided: ContactDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactDetailComponent", function() { return ContactDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ContactDetailComponent = /** @class */ (function () {
    function ContactDetailComponent(route) {
        var _this = this;
        this.route = route;
        this.name = "";
        this.phoneNumber = "";
        route.paramMap.subscribe(function (params) {
            var id = params.get('id');
            _this.name = params.get('name');
            _this.phoneNumber = params.get('phoneNumber');
        });
    }
    ContactDetailComponent.prototype.ngOnInit = function () {
    };
    ContactDetailComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    ContactDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-detail',
            template: '<p>Ten: {{ name }}</p><p>SDT: {{ phoneNumber }}</p>',
            styles: [__webpack_require__(/*! ./contact-detail.component.sass */ "./src/app/contact-detail/contact-detail.component.sass")]
        })
    ], ContactDetailComponent);
    return ContactDetailComponent;
}());



/***/ }),

/***/ "./src/app/contacts/contacts.component.sass":
/*!**************************************************!*\
  !*** ./src/app/contacts/contacts.component.sass ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3RzL2NvbnRhY3RzLmNvbXBvbmVudC5zYXNzIn0= */"

/***/ }),

/***/ "./src/app/contacts/contacts.component.ts":
/*!************************************************!*\
  !*** ./src/app/contacts/contacts.component.ts ***!
  \************************************************/
/*! exports provided: ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactsComponent = /** @class */ (function () {
    function ContactsComponent() {
        this.contacts = [
            { id: 1, name: 'Teo', phoneNumber: '0123' },
            { id: 2, name: 'Ti', phoneNumber: '4567' },
            { id: 3, name: 'Tun', phoneNumber: '8910' }
        ];
    }
    ContactsComponent.prototype.ngOnInit = function () {
    };
    ContactsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contacts',
            template: __webpack_require__(/*! raw-loader!./contacts.component.html */ "./node_modules/raw-loader/index.js!./src/app/contacts/contacts.component.html"),
            styles: [__webpack_require__(/*! ./contacts.component.sass */ "./src/app/contacts/contacts.component.sass")]
        })
    ], ContactsComponent);
    return ContactsComponent;
}());



/***/ }),

/***/ "./src/app/contacts/contacts.module.ts":
/*!*********************************************!*\
  !*** ./src/app/contacts/contacts.module.ts ***!
  \*********************************************/
/*! exports provided: ContactsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsModule", function() { return ContactsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _contacts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contacts.component */ "./src/app/contacts/contacts.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var routesConfig = [
    { path: 'contacts', component: _contacts_component__WEBPACK_IMPORTED_MODULE_2__["ContactsComponent"] },
];
var ContactsModule = /** @class */ (function () {
    function ContactsModule() {
    }
    ContactsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _contacts_component__WEBPACK_IMPORTED_MODULE_2__["ContactsComponent"],
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routesConfig),
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]
            ]
        })
    ], ContactsModule);
    return ContactsModule;
}());



/***/ }),

/***/ "./src/app/learn-pipes/learn-pipes.component.sass":
/*!********************************************************!*\
  !*** ./src/app/learn-pipes/learn-pipes.component.sass ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xlYXJuLXBpcGVzL2xlYXJuLXBpcGVzLmNvbXBvbmVudC5zYXNzIn0= */"

/***/ }),

/***/ "./src/app/learn-pipes/learn-pipes.component.ts":
/*!******************************************************!*\
  !*** ./src/app/learn-pipes/learn-pipes.component.ts ***!
  \******************************************************/
/*! exports provided: LearnPipesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearnPipesComponent", function() { return LearnPipesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LearnPipesComponent = /** @class */ (function () {
    function LearnPipesComponent() {
        this.birthday = new Date(2019, 8, 2);
        this.person = { name: 'Phung Quang', age: 20 };
        //Viet sẽ là String nhưng lấy từ server sẽ là kiểu promise của string
        // Cần lấy về băng pipes
        this.address = '170 Luong the vinh'; // binh thuong
        this.diachi = Promise.resolve("179 Luong the vinh");
    }
    LearnPipesComponent.prototype.ngOnInit = function () {
    };
    LearnPipesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-learn-pipes',
            template: __webpack_require__(/*! raw-loader!./learn-pipes.component.html */ "./node_modules/raw-loader/index.js!./src/app/learn-pipes/learn-pipes.component.html"),
            styles: [__webpack_require__(/*! ./learn-pipes.component.sass */ "./src/app/learn-pipes/learn-pipes.component.sass")]
        })
    ], LearnPipesComponent);
    return LearnPipesComponent;
}());



/***/ }),

/***/ "./src/app/ng-form/ng-form.component.css":
/*!***********************************************!*\
  !*** ./src/app/ng-form/ng-form.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\ninput.ng-invalid.ng-touched {\r\n  border: 2px solid red;\r\n}\r\n.errors{\r\n  color: red;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmctZm9ybS9uZy1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9uZy1mb3JtL25nLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcclxufVxyXG4uZXJyb3Jze1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/ng-form/ng-form.component.ts":
/*!**********************************************!*\
  !*** ./src/app/ng-form/ng-form.component.ts ***!
  \**********************************************/
/*! exports provided: NgFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgFormComponent", function() { return NgFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_form_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ng-form.service */ "./src/app/ng-form/ng-form.service.ts");



var NgFormComponent = /** @class */ (function () {
    function NgFormComponent(ngFormService) {
        this.ngFormService = ngFormService;
    }
    NgFormComponent.prototype.OnSubmit = function (FromDemo) {
        this.ngFormService.sendPost(FromDemo.value)
            .then(function (ketqua) { return console.log(ketqua); })
            .catch(function (err) { return console.log(err); });
    };
    NgFormComponent.ctorParameters = function () { return [
        { type: _ng_form_service__WEBPACK_IMPORTED_MODULE_2__["ngFormService"] }
    ]; };
    NgFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ng-form',
            template: __webpack_require__(/*! raw-loader!./ng-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/ng-form/ng-form.component.html"),
            providers: [_ng_form_service__WEBPACK_IMPORTED_MODULE_2__["ngFormService"]],
            styles: [__webpack_require__(/*! ./ng-form.component.css */ "./src/app/ng-form/ng-form.component.css")]
        })
    ], NgFormComponent);
    return NgFormComponent;
}());



/***/ }),

/***/ "./src/app/ng-form/ng-form.service.ts":
/*!********************************************!*\
  !*** ./src/app/ng-form/ng-form.service.ts ***!
  \********************************************/
/*! exports provided: ngFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ngFormService", function() { return ngFormService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ngFormService = /** @class */ (function () {
    function ngFormService(http) {
        this.http = http;
    }
    ngFormService.prototype.sendPost = function (value) {
        var url = "http://localhost:3000/postForm";
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json', });
        var body = JSON.stringify(value);
        return this.http.post(url, body, { headers: header })
            .toPromise();
    };
    ngFormService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ngFormService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ngFormService);
    return ngFormService;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.sass":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.sass ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zYXNzIn0= */"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/index.js!./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.sass */ "./src/app/page-not-found/page-not-found.component.sass")]
        })
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/parent.component.ts":
/*!*************************************!*\
  !*** ./src/app/parent.component.ts ***!
  \*************************************/
/*! exports provided: ParentCompanent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentCompanent", function() { return ParentCompanent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ParentCompanent = /** @class */ (function () {
    function ParentCompanent() {
        // Parent tương tác với Child
        this.value = 0;
        this.Child = "";
        // Child tương tác với Parent
        // @ViewChild(ChildCompanent)
    }
    ParentCompanent.prototype.changeValue = function (Math) {
        if (Math) {
            this.value = this.value + 1;
        }
        else {
            this.value = this.value - 1;
        }
        ;
    };
    ParentCompanent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-parent',
            template: "<h3>Parent Thay doi gia tri Child</h3>\n              <h3>{{ value }}</h3>\n             <app-child (ClickAdd)=\"changeValue($event)\" #Child ></app-child>\n             <h3>Child thay doi gia tri Parent</h3>\n              <button (click)=\"Child.value = Child.value + 1\">Add for Child</button>\n              <button (click)=\"onAddforChild()\" >Sub for Child( cach 2)</button>\n              "
        })
    ], ParentCompanent);
    return ParentCompanent;
}());



/***/ }),

/***/ "./src/app/person/person.component.sass":
/*!**********************************************!*\
  !*** ./src/app/person/person.component.sass ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BlcnNvbi9wZXJzb24uY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/person/person.component.ts":
/*!********************************************!*\
  !*** ./src/app/person/person.component.ts ***!
  \********************************************/
/*! exports provided: PersonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonComponent", function() { return PersonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PersonComponent = /** @class */ (function () {
    function PersonComponent() {
        this.ValueX = 0;
    }
    PersonComponent.prototype.ngOnInit = function () {
    };
    PersonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-person',
            template: 'heko',
            styles: [__webpack_require__(/*! ./person.component.sass */ "./src/app/person/person.component.sass")]
        })
    ], PersonComponent);
    return PersonComponent;
}());



/***/ }),

/***/ "./src/app/roundNum.pipe.ts":
/*!**********************************!*\
  !*** ./src/app/roundNum.pipe.ts ***!
  \**********************************/
/*! exports provided: roudNum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roudNum", function() { return roudNum; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var roudNum = /** @class */ (function () {
    function roudNum() {
    }
    roudNum.prototype.transform = function (value, isUpper, toAdd) {
        if (isUpper) {
            // ceil lam tron len
            return Math.ceil(value), value + toAdd;
        }
        // floor lam tron xuong
        return Math.floor(value);
    };
    roudNum = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'roundNum' })
    ], roudNum);
    return roudNum;
}());



/***/ }),

/***/ "./src/app/sig-up.component.ts":
/*!*************************************!*\
  !*** ./src/app/sig-up.component.ts ***!
  \*************************************/
/*! exports provided: sigupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sigupComponent", function() { return sigupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var sigupComponent = /** @class */ (function () {
    function sigupComponent(fb) {
        this.fb = fb;
    }
    sigupComponent.prototype.ngOnInit = function () {
        // cach 2 hay hon
        /*this.formSigup = new FormGroup({
          email: new FormControl('email 1 gia tri mac dinh'),
          password: new FormControl(),
          subject: new FormGroup({
            nodeJs: new FormControl(),
            angular: new FormControl()
          })
        })*/
        this.formSignUp = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, gmailValidator]],
            password: '',
            subject: this.fb.group({
                nodeJS: false,
                angular: true,
                reactJS: false
            })
        });
    };
    sigupComponent.prototype.onSubmit = function () {
        console.log(this.formSignUp.value);
    };
    sigupComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    sigupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-sigup",
            template: "\n            <form (ngSubmit)=\"onSubmit();\" [formGroup]=\"formSignUp\">\n            <input placeholder=\"Email\" formControlName=\"email\">\n            <p *ngIf=\"formSignUp.get('email').invalid && formSignUp.get('email').touched\">Email is required</p>\n            <br><br>\n            <input type=\"password\" placeholder=\"Password\" formControlName=\"password\">\n            <br><br>\n            <div formGroupName=\"subject\">\n                <label><input type=\"checkbox\" name=\"NodeJS\" formControlName=\"nodeJS\"> NodeJS</label>\n                <label><input type=\"checkbox\" name=\"Angular\" formControlName=\"angular\"> Angular</label>\n                <label><input type=\"checkbox\" name=\"ReactJS\" formControlName=\"reactJS\"> ReactJS</label>\n            </div>\n            <br><br>\n            <button [disabled]=\"formSignUp.invalid\">Submit</button>\n        </form>\n        <code>{{ formSignUp.controls.email.errors | json }}</code>\n      "
        })
    ], sigupComponent);
    return sigupComponent;
}());

function gmailValidator(formControl) {
    if (formControl.value.includes('@gmail.com')) {
        return null;
    }
    return { gmail: true };
}


/***/ }),

/***/ "./src/app/struct/struct.component.sass":
/*!**********************************************!*\
  !*** ./src/app/struct/struct.component.sass ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0cnVjdC9zdHJ1Y3QuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/struct/struct.component.ts":
/*!********************************************!*\
  !*** ./src/app/struct/struct.component.ts ***!
  \********************************************/
/*! exports provided: StructComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StructComponent", function() { return StructComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StructComponent = /** @class */ (function () {
    function StructComponent() {
        this.arrSubject = ['Angular', 'NodeJS', 'Rubi'];
        this.Word = { fontSize: '20px', background: '#dcdcdc', width: '100px', margin: '10px' };
        this.En = "";
        this.Vn = "";
        this.ShowAdd = false;
        this.TrangThai = "Xem_TatCa";
        this.null = true;
        this.memoriz = "";
        this.arrWords = [
            { id: 1, en: 'action', vn: 'hanh dong', memorized: true },
            { id: 2, en: 'actor', vn: 'dien vien', memorized: false },
            { id: 3, en: 'activity', vn: 'hoat dong', memorized: true },
            { id: 4, en: 'active', vn: 'chu dong', memorized: true },
            { id: 5, en: 'bath', vn: 'tam', memorized: false },
            { id: 6, en: 'bedroom', vn: 'phong ngu', memorized: true },
        ];
    }
    StructComponent.prototype.Add = function () {
        this.arrWords.unshift({
            id: this.arrWords.length + 1,
            en: this.En,
            vn: this.Vn,
            memorized: false
        });
        this.En = "";
        this.Vn = "";
        this.ShowAdd = !this.ShowAdd;
    };
    StructComponent.prototype.ShowADD = function () {
        this.ShowAdd = !this.ShowAdd;
    };
    StructComponent.prototype.Delete = function (id) {
        var index = this.arrWords.findIndex(function (show) { return show.id === id; });
        this.arrWords.splice(index, 1);
    };
    StructComponent.prototype.getLocTrangThai = function (memorized) {
        var TatCa = this.TrangThai === 'Xem_TatCa';
        var DaNho = this.TrangThai === 'Xem_DaNho' && memorized;
        var ChuaNho = this.TrangThai === 'Xem_ChuaNho' && !memorized;
        return TatCa || DaNho || ChuaNho;
    };
    StructComponent.prototype.ngOnInit = function () {
    };
    StructComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-struct',
            template: __webpack_require__(/*! raw-loader!./struct.component.html */ "./node_modules/raw-loader/index.js!./src/app/struct/struct.component.html"),
            styles: [__webpack_require__(/*! ./struct.component.sass */ "./src/app/struct/struct.component.sass")]
        })
    ], StructComponent);
    return StructComponent;
}());



/***/ }),

/***/ "./src/app/user-from/user-from.component.css":
/*!***************************************************!*\
  !*** ./src/app/user-from/user-from.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".circle1 {\r\n  width: 50px;\r\n  height: 50px;\r\n  border-radius: 25px;\r\n  background-color: orangered;\r\n}\r\n\r\n.circle2 {\r\n  width: 50px;\r\n  height: 50px;\r\n  border-radius: 25px;\r\n  background-color: black;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1mcm9tL3VzZXItZnJvbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvdXNlci1mcm9tL3VzZXItZnJvbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNpcmNsZTEge1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZXJlZDtcclxufVxyXG5cclxuLmNpcmNsZTIge1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/user-from/user-from.component.ts":
/*!**************************************************!*\
  !*** ./src/app/user-from/user-from.component.ts ***!
  \**************************************************/
/*! exports provided: UserFromComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFromComponent", function() { return UserFromComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserFromComponent = /** @class */ (function () {
    function UserFromComponent() {
        this.name = '';
        this.isHightlight = true;
        this.ChangeColor = true;
        this.currentStyle = { fontSize: '30px', color: '#ff6a00' };
        this.currentStyleT = { fontSize: '45px', color: '#ff6a00' };
        this.currentStyleF = { fontSize: '15px', color: '#ff6a00' };
        this.currentClass = { circle1: !this.isHightlight, circle2: this.isHightlight };
    }
    UserFromComponent.prototype.ngOnInit = function () {
    };
    UserFromComponent.prototype.Change = function () {
        this.isHightlight = !this.isHightlight;
        this.ChangeColor = !this.ChangeColor;
    };
    UserFromComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-from',
            template: __webpack_require__(/*! raw-loader!./user-from.component.html */ "./node_modules/raw-loader/index.js!./src/app/user-from/user-from.component.html"),
            styles: [__webpack_require__(/*! ./user-from.component.css */ "./src/app/user-from/user-from.component.css")]
        })
    ], UserFromComponent);
    return UserFromComponent;
}());



/***/ }),

/***/ "./src/app/weather/weather.component.sass":
/*!************************************************!*\
  !*** ./src/app/weather/weather.component.sass ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYXRoZXIvd2VhdGhlci5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "./src/app/weather/weather.component.ts":
/*!**********************************************!*\
  !*** ./src/app/weather/weather.component.ts ***!
  \**********************************************/
/*! exports provided: WeatherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherComponent", function() { return WeatherComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weather.service */ "./src/app/weather/weather.service.ts");



var WeatherComponent = /** @class */ (function () {
    function WeatherComponent(weatherService) {
        this.weatherService = weatherService;
        this.Temp = '';
        this.txtcityName = '';
        this.cityName = '';
        this.isload = false;
    }
    WeatherComponent.prototype.ngOnInit = function () { };
    WeatherComponent.prototype.getTemp = function () {
        var _this = this;
        this.isload = true;
        this.weatherService.getTemp(this.txtcityName)
            .then(function (temp) {
            _this.cityName = _this.txtcityName;
            _this.Temp = temp;
            _this.isload = false;
            _this.txtcityName = "";
        })
            .catch(function (err) {
            {
                alert("Nhap sai thanh pho!");
                _this.txtcityName = "";
                _this.isload = false;
                _this.cityName = "";
            }
        });
    };
    WeatherComponent.prototype.getMessage = function () {
        if (this.isload) {
            return "Loading...";
        }
        return this.cityName == '' ? 'Enter your city name' : (this.cityName + ' is now ' + this.Temp);
    };
    WeatherComponent.ctorParameters = function () { return [
        { type: _weather_service__WEBPACK_IMPORTED_MODULE_2__["WeatherService"] }
    ]; };
    WeatherComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-weather',
            template: __webpack_require__(/*! raw-loader!./weather.component.html */ "./node_modules/raw-loader/index.js!./src/app/weather/weather.component.html"),
            providers: [_weather_service__WEBPACK_IMPORTED_MODULE_2__["WeatherService"]],
            styles: [__webpack_require__(/*! ./weather.component.sass */ "./src/app/weather/weather.component.sass")]
        })
    ], WeatherComponent);
    return WeatherComponent;
}());



/***/ }),

/***/ "./src/app/weather/weather.service.ts":
/*!********************************************!*\
  !*** ./src/app/weather/weather.service.ts ***!
  \********************************************/
/*! exports provided: WeatherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherService", function() { return WeatherService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var WeatherService = /** @class */ (function () {
    function WeatherService(http) {
        this.http = http;
        this.temp = "";
    }
    WeatherService.prototype.getTemp = function (cityName) {
        return this.http.get('https://api.openweathermap.org/data/2.5/weather?appid=cb687e596642c663d80120965f7c27cd&units=metric&q=' + cityName)
            .toPromise()
            .then(function (res) { return res.main.temp; });
    };
    WeatherService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    WeatherService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], WeatherService);
    return WeatherService;
}());



/***/ }),

/***/ "./src/app/word/word.component.css":
/*!*****************************************!*\
  !*** ./src/app/word/word.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3{\r\n  color: #ffd800;\r\n  font-size: 40px;\r\n}\r\n.circle1 {\r\n  width: 50px;\r\n  height: 50px;\r\n  border-radius: 25px;\r\n  background-color: orangered;\r\n}\r\n.circle2 {\r\n  width: 50px;\r\n  height: 50px;\r\n  border-radius: 25px;\r\n  background-color: black;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29yZC93b3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix1QkFBdUI7O0FBRXpCIiwiZmlsZSI6InNyYy9hcHAvd29yZC93b3JkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoM3tcclxuICBjb2xvcjogI2ZmZDgwMDtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbn1cclxuLmNpcmNsZTEge1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZXJlZDtcclxufVxyXG4uY2lyY2xlMiB7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcblxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/word/word.component.ts":
/*!****************************************!*\
  !*** ./src/app/word/word.component.ts ***!
  \****************************************/
/*! exports provided: WordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordComponent", function() { return WordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WordComponent = /** @class */ (function () {
    function WordComponent() {
        this.en = "Hello";
        this.vn = "Xin chao";
        this.imgurl = ".\src\favicon.ico";
        this.forgot = false;
    }
    WordComponent.prototype.btnForgot = function () {
        this.forgot = !this.forgot;
    };
    WordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! raw-loader!./word.component.html */ "./node_modules/raw-loader/index.js!./src/app/word/word.component.html"),
            selector: 'app-word' //html tag ten the <app-word></app-wprd>
            ,
            styles: [__webpack_require__(/*! ./word.component.css */ "./src/app/word/word.component.css")]
        })
    ], WordComponent);
    return WordComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Manh Quang\Desktop\learn-angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map