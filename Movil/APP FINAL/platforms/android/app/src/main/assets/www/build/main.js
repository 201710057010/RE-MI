webpackJsonp([7],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReservManPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aulas_disponibles_aulas_disponibles__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReservManPage = /** @class */ (function () {
    function ReservManPage(navCtrl, navParams, alertCtrl, viewCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        var calendar = new Date();
        this.horaActual = calendar.getHours();
        this.diaActual = calendar.getDate();
    }
    ReservManPage.prototype.buscAulas = function () {
        if ((this.pTipo != null) && (this.pInstr != null) && (this.pTiempo != null) && (this.pDia != null)) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__aulas_disponibles_aulas_disponibles__["a" /* AulasDisponiblesPage */], { tipo: this.pTipo, instr: this.pInstr, dia: this.pDia, time: this.pTiempo });
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: '¡No tan rápido!',
                subTitle: 'Primero debes llenar todos los campos.',
                buttons: ['OK']
            });
            alert_1.present();
        }
    };
    /**
     * Este metodo se encarga de mostrar en el html los horarios según si el usuario eligió hoy o mañana y la hora
     * actual que séa en ese momento
     */
    ReservManPage.prototype.verHora = function () {
    };
    ReservManPage.prototype.cerrarRervMan = function () {
        this.viewCtrl.dismiss();
    };
    ReservManPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reserv-man',template:/*ion-inline-start:"D:\proyectoIntegrador1\practicas\REMI\src\pages\reserv-man\reserv-man.html"*/'<ion-header>\n    <ion-navbar color="azul">\n      <ion-title>\n        Reserva Manual\n      </ion-title>\n      \n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding>\n    <ion-list padding no-lines>\n      <ion-item padding>\n        <ion-label color="azul">Selecciona tipo de salón</ion-label>\n        <ion-select [(ngModel)]="pTipo" interface="popover">\n          <ion-option value="Aula">Aula</ion-option>\n          <ion-option value="Cubiculo">Cubículo</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item padding>\n        <ion-label color="azul">Que tenga:</ion-label>\n        <ion-select [(ngModel)]="pInstr">\n          <ion-option value="Piano de cola" *ngIf="pTipo == \'Aula\'">1 Piano de cola</ion-option>\n          <ion-option value="Piano de cola y piano vertical" *ngIf="pTipo == \'Aula\'">Piano de cola y Piano vertical</ion-option>\n          <ion-option value="Clavinova" *ngIf="pTipo == \'Aula\'">1 Clavinova</ion-option>\n          <ion-option value="2 Clavinovas" *ngIf="pTipo == \'Aula\'">2 Clavinovas</ion-option>\n          <ion-option value="Clavinova" *ngIf="pTipo == \'Cubiculo\'">Clavinova</ion-option>\n          <ion-option value="Piano vertical" *ngIf="pTipo == \'Cubiculo\'">Piano vertical</ion-option>\n          <ion-option value="Bateria" *ngIf="pTipo == \'Cubiculo\'">Batería</ion-option>\n        </ion-select>\n      </ion-item>\n  \n      <ion-item padding>\n        <ion-label color="azul">¿Para cúando?</ion-label>\n        <ion-select [(ngModel)]="pDia" interface="popover">\n          <ion-option>Hoy</ion-option>\n          <ion-option>Mañana</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item padding>\n        <ion-label color="azul">¿De qué hora a qué hora?</ion-label>\n        <ion-select [(ngModel)]="pTiempo">\n          <ion-option *ngIf="((horaActual < 6)&&(pDia == \'Hoy\'))||(pDia==\'Mañana\')">6 a 7</ion-option>\n          <ion-option *ngIf="((horaActual < 6)&&(pDia == \'Hoy\'))||(pDia==\'Mañana\')">6 a 8</ion-option>\n          <ion-option *ngIf="((horaActual < 7)&&(pDia == \'Hoy\'))||(pDia==\'Mañana\')">7 a 8</ion-option>\n          <ion-option *ngIf="((horaActual < 7)&&(pDia == \'Hoy\'))||(pDia==\'Mañana\')">7 a 9</ion-option>\n          <ion-option *ngIf="((horaActual < 8)&&(pDia == \'Hoy\'))||(pDia==\'Mañana\')">8 a 9</ion-option>\n          <ion-option *ngIf="((horaActual < 8)&&(pDia == \'Hoy\'))||(pDia==\'Mañana\')">8 a 10</ion-option>\n          <ion-option *ngIf="((horaActual < 9)&&(pDia == \'Hoy\'))||(pDia==\'Mañana\')">9 a 10</ion-option>\n          <ion-option *ngIf="((horaActual < 9)&&(pDia == \'Hoy\'))||(pDia==\'Mañana\')">9 a 11</ion-option>\n          <ion-option *ngIf="((horaActual < 10)&&(pDia == \'Hoy\'))||(pDia==\'Mañana\')">10 a 12</ion-option>\n          <ion-option *ngIf="((horaActual < 11)&&(pDia == \'Hoy\'))||(pDia==\'Mañana\')">11 a 12</ion-option>\n          <ion-option *ngIf="((horaActual < 12)&&(pDia == \'Hoy\'))||(pDia==\'Mañana\')">12 a 13</ion-option>\n          <ion-option *ngIf="((horaActual < 12)&&(pDia == \'Hoy\'))||(pDia==\'Mañana\')">12 a 14</ion-option>\n          <ion-option *ngIf="((horaActual < 13)&&(pDia == \'Hoy\'))||(pDia==\'Mañana\')">13 a 14</ion-option>\n          <ion-option *ngIf="((horaActual < 13)&&(pDia == \'Hoy\'))||(pDia==\'Mañana\')">13 a 15</ion-option>\n          <ion-option *ngIf="((horaActual < 14)&&(pDia == \'Hoy\'))||(pDia==\'Mañana\')">14 a 15</ion-option>\n          <ion-option *ngIf="((horaActual < 14)&&(pDia == \'Hoy\'))||(pDia==\'Mañana\')">14 a 16</ion-option>\n          <ion-option *ngIf="((horaActual < 15)&&(pDia == \'Hoy\'))||(pDia==\'Mañana\')">15 a 16</ion-option>\n          <ion-option *ngIf="((horaActual < 15)&&(pDia == \'Hoy\'))||(pDia==\'Mañana\')">15 a 17</ion-option>\n          <ion-option *ngIf="((horaActual < 16)&&(pDia == \'Hoy\'))||(pDia==\'Mañana\')">16 a 17</ion-option>\n          <ion-option *ngIf="((horaActual < 16)&&(pDia == \'Hoy\'))||(pDia==\'Mañana\')">16 a 18</ion-option>\n          <ion-option *ngIf="((horaActual < 17)&&(pDia == \'Hoy\'))||(pDia==\'Mañana\')">17 a 18</ion-option>\n          <ion-option *ngIf="((horaActual < 17)&&(pDia == \'Hoy\'))||(pDia==\'Mañana\')">17 a 19</ion-option>\n          <ion-option *ngIf="((horaActual < 18)&&(pDia == \'Hoy\'))||(pDia==\'Mañana\')">18 a 19</ion-option>\n          <ion-option *ngIf="((horaActual < 18)&&(pDia == \'Hoy\'))||(pDia==\'Mañana\')">18 a 20</ion-option>\n          <ion-option *ngIf="((horaActual < 19)&&(pDia == \'Hoy\'))||(pDia==\'Mañana\')">19 a 20</ion-option>\n        </ion-select>\n      </ion-item>\n      \n    </ion-list>\n    <div text-center>\n      <button class="sizeD" ion-button color="morado" (click)="buscAulas()" outline icon-end>\n        Presiona para buscar aulas\n        <ion-icon name="search"></ion-icon>\n      </button>  \n    </div>\n    \n  </ion-content>'/*ion-inline-end:"D:\proyectoIntegrador1\practicas\REMI\src\pages\reserv-man\reserv-man.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], ReservManPage);
    return ReservManPage;
}());

//# sourceMappingURL=reserv-man.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AjustesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mis_reservas_mis_reservas__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_list_users_list_users__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_logged_user_logged__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AjustesPage = /** @class */ (function () {
    function AjustesPage(navCtrl, navParams, alerCtrl, usersList, user) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alerCtrl = alerCtrl;
        this.usersList = usersList;
        this.user = user;
    }
    AjustesPage.prototype.cambPass = function () {
        if (this.passActual == this.user.getPass()) {
            if (this.newPass == this.newPassConf && this.newPass != null) {
                this.user.cambPassword(this.newPass);
                var alert_1 = this.alerCtrl.create({
                    title: 'Resultado',
                    message: 'Tu contraseña ha sido cambiada exitosamente.',
                    buttons: ['Ok']
                });
                alert_1.present();
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__mis_reservas_mis_reservas__["a" /* MisReservasPage */]);
            }
            else {
                var alert_2 = this.alerCtrl.create({
                    title: 'ALGO ANDA MAL',
                    message: 'La nueva contraseña no coincide con su confirmación, por favor inténtalo nuevamente.',
                    buttons: ['Ok']
                });
                alert_2.present();
            }
        }
        else {
            var alert_3 = this.alerCtrl.create({
                title: 'ALGO ANDA MAL',
                message: 'No ingresaste tu contraseña actual correctamente, por favor inténtalo de nuevo.',
                buttons: ['Ok']
            });
            alert_3.present();
        }
    };
    AjustesPage.prototype.closeSes = function () {
        var _this = this;
        var confirm = this.alerCtrl.create({
            title: 'Cierre de sesión',
            message: 'Estás a punto de cerrar sesión, ¿estás seguro?',
            buttons: [
                {
                    text: 'Aceptar',
                    handler: function () {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
                    }
                },
                {
                    text: 'Cancelar',
                    handler: function () {
                        //no hacer nada
                    }
                }
            ]
        });
        confirm.present();
    };
    AjustesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ajustes',template:/*ion-inline-start:"D:\proyectoIntegrador1\practicas\REMI\src\pages\ajustes\ajustes.html"*/'<ion-header>\n    <ion-navbar color="azul">\n   \n      <ion-title>\n          Ajustes\n      </ion-title>\n  \n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding>\n      <ion-list>\n      <h3 padding-top text-center>Cambiar contraseña</h3>\n      <ion-item>\n          <ion-input type="password" [(ngModel)]="passActual" placeholder="Contraseña actual"></ion-input>\n      </ion-item>\n      <ion-item padding-top>\n          <ion-input type="password" [(ngModel)]="newPass" placeholder="Nueva contraseña"></ion-input>\n      </ion-item>\n      <ion-item padding-top>\n          <ion-input type="password" [(ngModel)]="newPassConf" placeholder="Confirmar contraseña"></ion-input>\n      </ion-item>\n  \n      <div text-center padding-top>\n          <button ion-button color="morado" (click)="cambPass()" round>Guardar cambios</button>\n      </div>\n\n      <div class="alFondo">\n          <button button ion-button color="danger" (click)="closeSes()" icon-end>\n              Cerrar sesión\n              <ion-icon name="log-out"></ion-icon>\n          </button>\n      </div>\n      \n      </ion-list>\n  </ion-content>\n'/*ion-inline-end:"D:\proyectoIntegrador1\practicas\REMI\src\pages\ajustes\ajustes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_list_users_list_users__["a" /* ListUsersProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_user_logged_user_logged__["a" /* UserLoggedProvider */]])
    ], AjustesPage);
    return AjustesPage;
}());

//# sourceMappingURL=ajustes.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AulasDisponiblesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_listas_online_listas_online__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mis_reservas_mis_reservas__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { ObjReservaProvider } from '../../providers/obj-reserva/obj-reserva';
var AulasDisponiblesPage = /** @class */ (function () {
    function AulasDisponiblesPage(navCtrl, navParams, viewCtrl, listAulasDispOnline) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.listAulasDispOnline = listAulasDispOnline;
        this.lista = new Array(); //Trae la lista de aulas disponibles del provider "listAulasDispOnlineDispProvider"
        this.update();
    }
    AulasDisponiblesPage.prototype.update = function () {
        this.pTipo = this.navParams.get('tipo');
        this.pInstr = this.navParams.get('instr');
        this.pTiempo = this.navParams.get('time');
        this.pDia = this.navParams.get('dia');
        console.log(this.pTipo);
        var salonesDispOnline = this.listAulasDispOnline.getAulasDisp();
        for (var _i = 0, salonesDispOnline_1 = salonesDispOnline; _i < salonesDispOnline_1.length; _i++) {
            var salon = salonesDispOnline_1[_i];
            console.log(salon.getHorario(this.pDia, this.pTiempo));
            if ((this.pTipo == salon.tipo) && (this.pInstr == salon.instrumento) && (salon.getHorario(this.pDia, this.pTiempo))) {
                this.lista.push(salon);
            }
        }
    };
    AulasDisponiblesPage.prototype.aulaSelected = function (salon) {
        var fecha;
        if (this.pDia == "Hoy") {
            console.log("aulaSelected HOY");
            salon.hoy.horarios[this.pTiempo] = false;
            fecha = salon.hoy.fecha;
        }
        else if (this.pDia == "Mañana") {
            console.log("aulaSelected MAÑANA");
            console.log("Entro mañana");
            salon.man.horarios[this.pTiempo] = false;
            fecha = salon.man.fecha;
        }
        fecha.setMonth(fecha.getMonth() + 1);
        var hIni;
        var hFin;
        var palabras = this.pTiempo.split(" ");
        for (var _i = 0, palabras_1 = palabras; _i < palabras_1.length; _i++) {
            var palabra = palabras_1[_i];
            var strToNum = parseInt(palabra);
            if (strToNum >= 0) {
                if (hIni == null) {
                    hIni = strToNum;
                }
                else if (hFin == null) {
                    hFin = strToNum;
                }
            }
        }
        this.listAulasDispOnline.addReserva(fecha, hIni, hFin, salon);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__mis_reservas_mis_reservas__["a" /* MisReservasPage */]);
    };
    AulasDisponiblesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-aulas-disponibles',template:/*ion-inline-start:"D:\proyectoIntegrador1\practicas\REMI\src\pages\aulas-disponibles\aulas-disponibles.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Aulas Disponibles</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n    <h4>Selecciona uno:</h4>\n\n    <button ion-item *ngFor="let item of lista;let i = index" (click)="aulaSelected(item)">\n      <li> Salón: {{ item.codigo }} <br/> \n           Contiene: {{ item.instrumento }} </li> \n    </button> \n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\proyectoIntegrador1\practicas\REMI\src\pages\aulas-disponibles\aulas-disponibles.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1__providers_listas_online_listas_online__["a" /* ListasOnlineProvider */]])
    ], AulasDisponiblesPage);
    return AulasDisponiblesPage;
}());

//# sourceMappingURL=aulas-disponibles.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatBotPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_chat_chat__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatBotPage = /** @class */ (function () {
    function ChatBotPage(navCtrl, navParams, _chat, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._chat = _chat;
        this.alertCtrl = alertCtrl;
        this.chats = [];
        var alert = this.alertCtrl.create({
            title: '¡Bienvenid@!',
            subTitle: 'Tu asistente Febos está esperando que lo saludes, él te ayudará en todo lo que necesites ;)',
            buttons: ['OK']
        });
        alert.present();
    }
    ChatBotPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        // subscribe to pusher's event
        this._chat.getChannel().bind('chat', function (data) {
            if (data.type !== 'bot') {
                data.isMe = true;
            }
            ;
            _this.chats.push(data);
        });
    };
    ChatBotPage.prototype.sendMessage = function () {
        var _this = this;
        this.sending = true;
        this._chat.sendMessage(this.message)
            .subscribe(function (resp) {
            _this.message = '';
            _this.sending = false;
        }, function (err) {
            _this.sending = false;
        });
    };
    ChatBotPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-chat-bot',template:/*ion-inline-start:"D:\proyectoIntegrador1\practicas\REMI\src\pages\chat-bot\chat-bot.html"*/'<ion-header>\n  <ion-navbar color="morado">\n\n    <ion-title>FEBOS</ion-title>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <div class="chats">\n      <div class="chatbox">\n        <div *ngFor="let chat of chats">\n          <div class="message sent" *ngIf="chat.type!==\'bot\' && chat.isMe">\n            {{chat.message}}\n            <span class="metadata">\n              <span class="time">{{chat.createdAt | date: \'HH:mm aaa\'}}</span>\n            </span>\n          </div>\n          <div class="message received"  *ngIf="chat.type ==\'bot\' && !chat.isMe">\n            {{chat.message}}\n            <span class="metadata">\n              <span class="time">{{chat.createdAt | date: \'HH:mm aaa\'}}</span>\n            </span>\n          </div>\n        </div>\n      </div>\n      </div>\n\n  <ion-footer>\n      <p text-center *ngIf="sending">enviando...</p>\n      <div class="flex-items" padding>\n\n          <ion-input [(ngModel)]="message" name="message" class="input_message" placeholder="Escribe un mensaje"></ion-input>\n          <ion-icon (click)="sendMessage()" class="send" name="send"></ion-icon>\n        </div>\n  </ion-footer>\n</ion-content>\n'/*ion-inline-end:"D:\proyectoIntegrador1\practicas\REMI\src\pages\chat-bot\chat-bot.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__providers_chat_chat__["a" /* ChatProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], ChatBotPage);
    return ChatBotPage;
}());

//# sourceMappingURL=chat-bot.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mis_reservas_mis_reservas__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_list_users_list_users__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_user__ = __webpack_require__(85);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegistroPage = /** @class */ (function () {
    function RegistroPage(navCtrl, navParams, userList, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userList = userList;
        this.alertCtrl = alertCtrl;
    }
    RegistroPage.prototype.goMisReservas = function () {
        if (this.userCode == null ||
            this.userName == null || this.userInstr == null ||
            this.userPass1 == null) {
            var alert_1 = this.alertCtrl.create({
                title: '¡No tan rápido!',
                subTitle: 'Por favor rellena todos los campos.',
                buttons: ['OK']
            });
            alert_1.present();
        }
        else if (!(this.userCode.length == 12)) {
            var alert_2 = this.alertCtrl.create({
                title: '"SUSURRO"',
                subTitle: 'Éste no es un codigo de miembro estudiantíl válido, por favor revísalo e intenta de nuevo.',
                buttons: ['OK']
            });
            alert_2.present();
        }
        else if ((!(this.userEmail.length >= 14) && !(this.userEmail.indexOf("@eafit.edu.co") > -1))) {
            var alert_3 = this.alertCtrl.create({
                title: '"SUSURRO"',
                subTitle: 'Esta App es sólo para miembros de la universidad, si lo eres por favor introduce tu correo institucional.',
                buttons: ['OK']
            });
            alert_3.present();
        }
        else if (this.userList.userRegistred(this.userEmail)) {
            var alert_4 = this.alertCtrl.create({
                title: '"SUSURRO"',
                subTitle: 'Este correo ya está siendo usado por un usuario.',
                buttons: ['OK']
            });
            alert_4.present();
        }
        else if (this.userPass1 != this.userPass2) {
            var alert_5 = this.alertCtrl.create({
                title: '"SUSURRO"',
                subTitle: 'Las contraseñas no coinciden, por favor inténtalo de nuevo.',
                buttons: ['OK']
            });
            alert_5.present();
        }
        else {
            var user = new __WEBPACK_IMPORTED_MODULE_4__providers_user_user__["a" /* UserProvider */](this.userName, this.userCode, this.userEmail, this.userInstr, this.userPass1);
            this.userList.addUsr(user);
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__mis_reservas_mis_reservas__["a" /* MisReservasPage */]);
            var alert_6 = this.alertCtrl.create({
                title: '!Bienvenid@!',
                subTitle: 'Aquí es donde aparecerán todas las reservas que tengas, hay dos maneras de realizar reservas la primera es interactuando con un caballeroso ChatBot o la otra es realizandolas de manera Manual.',
                buttons: ['OK']
            });
            alert_6.present();
        }
    };
    RegistroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-registro',template:/*ion-inline-start:"D:\proyectoIntegrador1\practicas\REMI\src\pages\registro\registro.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>REGISTRO</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <div text-center>\n      <ion-img width="100" height="80" src="assets/imgs/logoV3.png"></ion-img>\n    </div>\n    \n    <ion-item padding>\n      <ion-input [(ngModel)]="userName" type="text" placeholder="Nombre Completo"></ion-input>\n    </ion-item>\n\n    <ion-item padding>\n      <ion-label>¿Qué instrumento tocas?</ion-label>\n      <ion-select [(ngModel)]="userInstr">\n        <ion-option value="guitar">Guitarra</ion-option>\n        <ion-option value="vio">Violín</ion-option>\n        <ion-option value="pian">Piano</ion-option>\n        <ion-option value="tromp">Trompeta</ion-option>\n        <ion-option value="batery">Batería</ion-option>\n        <ion-option value="flaut">Flauta</ion-option>\n        <ion-option value="voz">Voz</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item padding>\n      <ion-input [(ngModel)]="userCode" type="text" placeholder="Código de Estudiante"></ion-input>\n    </ion-item>\n\n    <ion-item padding>\n      <ion-input [(ngModel)]="userEmail" type="text" placeholder="Correo Institucional"></ion-input>\n    </ion-item>\n\n    <ion-item padding>\n      <ion-input [(ngModel)]="userPass1" type="password" placeholder="Contraseña"></ion-input>\n    </ion-item>\n\n    <ion-item padding>\n      <ion-input [(ngModel)]="userPass2" type="password" placeholder="Repite Contraseña"></ion-input>\n    </ion-item>\n\n    <div text-center padding>\n      <button ion-button color="azul" (click)="goMisReservas()" class="butEntrar" round>Registrarse</button>  \n    </div>\n</ion-content>\n'/*ion-inline-end:"D:\proyectoIntegrador1\practicas\REMI\src\pages\registro\registro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_list_users_list_users__["a" /* ListUsersProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], RegistroPage);
    return RegistroPage;
}());

//# sourceMappingURL=registro.js.map

/***/ }),

/***/ 124:
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
webpackEmptyAsyncContext.id = 124;

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/ajustes/ajustes.module": [
		289,
		6
	],
	"../pages/aulas-disponibles/aulas-disponibles.module": [
		290,
		5
	],
	"../pages/chat-bot/chat-bot.module": [
		291,
		4
	],
	"../pages/custom-nav-bar/custom-nav-bar.module": [
		292,
		3
	],
	"../pages/mis-reservas/mis-reservas.module": [
		293,
		2
	],
	"../pages/registro/registro.module": [
		294,
		1
	],
	"../pages/reserv-man/reserv-man.module": [
		295,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 166;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pusher_pusher__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__salon_salon__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__obj_reserva_obj_reserva__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__listas_online_listas_online__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//import { Message } from '@angular/compiler/src/i18n/i18n_ast';
var ChatProvider = /** @class */ (function () {
    function ChatProvider(http, _pusher, listAulasOnline) {
        this.http = http;
        this._pusher = _pusher;
        this.listAulasOnline = listAulasOnline;
        this._url = 'http://localhost:5000';
        this._channel = this._pusher.getPusher().subscribe('chat-bot');
    }
    ChatProvider.prototype.sendMessage = function (message) {
        var param = {
            type: 'human',
            message: message,
        };
        this.isReserva(message);
        return this.http.post(this._url + "/message", param);
    };
    ChatProvider.prototype.getChannel = function () {
        return this._channel;
    };
    /**
     * Este metodo se encarga de identificar si el usuario está diciendo el tipo de salon, intrumento, hora inicial,
     * hora final o dia en el cual quiere hacer su reserva de salón.
     */
    ChatProvider.prototype.isReserva = function (message) {
        if (this.isSalon(message)) {
            if (message == "un aula") {
                this.type_salon = "aula";
            }
            else if (message == "un cubiculo") {
                this.type_salon = "cubiculo";
            }
            else {
                this.type_salon = message;
            }
        }
        else if (this.isInstrument(message)) {
            var palabras = message.split(" ");
            for (var _i = 0, palabras_1 = palabras; _i < palabras_1.length; _i++) {
                var palabra = palabras_1[_i];
                var strToNum = parseInt(palabra); //Convierte la palabra en "numero" si es posible
                if (strToNum >= 0) {
                    if (strToNum == 1) {
                        this.instrument = "Piano de cola";
                    }
                    else if (strToNum == 2) {
                        this.instrument = "Percusión";
                    }
                    else if (strToNum == 3) {
                        this.instrument = "Piano de cola y piano vertical";
                    }
                    else if (strToNum == 4) {
                        this.instrument = "1 Clavinova";
                    }
                    else if (strToNum == 5) {
                        this.instrument = "2 clavinovas";
                    }
                    else {
                        console.log("No es ningúna opción de instrumento.");
                    }
                }
            }
            if (this.instrument == null) {
                this.instrument = message;
            }
        }
        else if (this.isTime(message)) {
            var palabras = message.split(" ");
            for (var _a = 0, palabras_2 = palabras; _a < palabras_2.length; _a++) {
                var palabra = palabras_2[_a];
                var strToNum = parseInt(palabra);
                if (strToNum >= 0) {
                    if (this.hInicial == null) {
                        this.hInicial = strToNum;
                    }
                    else if (this.hFinal == null) {
                        this.hFinal = strToNum;
                    }
                }
            }
            console.log("Tipo salon: " + this.type_salon);
            console.log("Instrumento: " + this.instrument);
            console.log("hInicial: " + this.hInicial);
            console.log("hFinal: " + this.hFinal);
            console.log("Para el día: " + this.dia.getDate());
            this.reservar();
        }
        else if (this.isDia(message)) {
            var day;
            var month;
            var year;
            var calendar = new Date();
            if ((message == "hoy") || (message == "para hoy")) {
                day = calendar.getDate();
            }
            else if ((message == "mañana") || (message == "para mañana")) {
                day = calendar.getDate();
                if (day == 30) {
                    day = 1;
                }
                else {
                    day = day + 1;
                }
            }
            month = calendar.getMonth() + 1;
            year = calendar.getFullYear();
            this.dia = new Date(year, month, day);
        }
    };
    ChatProvider.prototype.reservar = function () {
        if ((this.type_salon != null) &&
            (this.hInicial != null) &&
            (this.hFinal != null) &&
            (this.instrument != null) &&
            (this.dia != null)) {
            var fechaHoy = new Date();
            var salon = new __WEBPACK_IMPORTED_MODULE_3__salon_salon__["a" /* SalonProvider */]("30-105", this.type_salon, this.instrument); //Este salon se tiene que buscar online!!
            var newReserva = new __WEBPACK_IMPORTED_MODULE_4__obj_reserva_obj_reserva__["a" /* ObjReservaProvider */](123, "elGetNombre", this.dia, this.hInicial, this.hFinal, salon, fechaHoy);
            this.listAulasOnline.addReservChatBot(newReserva);
            //ahora reinicializamos los datos registrados para la siguiente reserva
            this.type_salon = null;
            this.instrument = null;
            this.hInicial = null;
            this.hFinal = null;
            this.dia = null;
        }
    };
    /**
     * Metodo que verifica si el texto ingresado es un Aula o un Salón
     */
    ChatProvider.prototype.isSalon = function (text) {
        if ((text == "aula") || (text == "cubiculo") ||
            (text == "un aula") || (text == "un cubiculo")) {
            return true;
        }
        return false;
    };
    /**
     * Metodo que verifica si el texto ingresado es un tiempo 1 Hora/2 Horas (Para realizar reserva más adelante)
     * @param text
     */
    ChatProvider.prototype.isTime = function (text) {
        var horarios = [
            "6 a 7", "6 a 8", "7 a 8", "7 a 9", "8 a 9", "8 a 10", "9 a 10", "9 a 11", "11 a 12", "12 a 13", "12 a 14", "13 a 14", "13 a 15", "14 a 15", "14 a 16",
            "15 a 16", "15 a 17", "16 a 17", "16 a 18", "17 a 18", "17 a 19", "18 a 19", "18 a 20", "19 a 20"
        ];
        for (var _i = 0, horarios_1 = horarios; _i < horarios_1.length; _i++) {
            var horario = horarios_1[_i];
            if (text.indexOf(horario) > -1) {
                return true;
            }
        }
        return false;
    };
    /**
     * Revisa si el texto ingrasado es una de las opciones:
     * a) Hoy antes de 12
     * b) Hoy después de 12
     * c) Mañana antes de 12
     * d) Mañana después de 12
     */
    ChatProvider.prototype.isDia = function (text) {
        if ((text == "para hoy") ||
            (text == "para mañana") ||
            (text == "hoy") ||
            (text == "mañana")) {
            return true;
        }
        return false;
    };
    /**
     * Revisa si el texto ingrasado es un tipo de istrumento
     */
    ChatProvider.prototype.isInstrument = function (text) {
        if ((text == "1") ||
            (text == "2") ||
            (text == "3") ||
            (text == "4") ||
            (text == "5") ||
            (text == "la 1") ||
            (text == "la 2") ||
            (text == "la 3") ||
            (text == "la 4") ||
            (text == "la 5") ||
            (text.indexOf("clavinova") > -1) ||
            (text.indexOf("piano vertical") > -1) ||
            (text.indexOf("bateria") > -1)) {
            return true;
        }
        return false;
    };
    ChatProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_0__pusher_pusher__["a" /* PusherProvider */], __WEBPACK_IMPORTED_MODULE_5__listas_online_listas_online__["a" /* ListasOnlineProvider */]])
    ], ChatProvider);
    return ChatProvider;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PusherProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PusherProvider = /** @class */ (function () {
    function PusherProvider(http) {
        this.http = http;
        this._pusher = new Pusher('f7c95ae46e907460e65d', {
            cluster: 'us2',
            encrypted: true
        });
    }
    PusherProvider.prototype.getPusher = function () {
        return this._pusher;
    };
    PusherProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], PusherProvider);
    return PusherProvider;
}());

//# sourceMappingURL=pusher.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomNavBarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
 * Generated class for the CustomNavBarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CustomNavBarPage = /** @class */ (function () {
    function CustomNavBarPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CustomNavBarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CustomNavBarPage');
    };
    CustomNavBarPage.prototype.goToBack = function () {
        this.navCtrl.pop();
    };
    CustomNavBarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-custom-nav-bar',template:/*ion-inline-start:"D:\proyectoIntegrador1\practicas\REMI\src\pages\custom-nav-bar\custom-nav-bar.html"*/'<!--\n  Generated template for the CustomNavBarPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-toolbar>\n  \n  <ion-buttons *ngIf="addBack" (click)="goToBack()" start>\n    <button ion-button icon-only color="royal">\n      <ion-icon name="arrow-back"></ion-icon>\n    </button>\n  </ion-buttons>\n  <ion-title>{{title}}</ion-title>\n  \n</ion-toolbar>'/*ion-inline-end:"D:\proyectoIntegrador1\practicas\REMI\src\pages\custom-nav-bar\custom-nav-bar.html"*/,
            inputs: ['title', 'addBack']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], CustomNavBarPage);
    return CustomNavBarPage;
}());

//# sourceMappingURL=custom-nav-bar.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(234);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_mis_reservas_mis_reservas__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_custom_nav_bar_custom_nav_bar__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_reserv_man_reserv_man__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_ajustes_ajustes__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_chat_chat__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_pusher_pusher__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_chat_bot_chat_bot__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_aulas_disponibles_aulas_disponibles__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_listas_online_listas_online__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_obj_reserva_obj_reserva__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_salon_salon__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_user_user__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_registro_registro__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_list_users_list_users__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_user_logged_user_logged__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_mis_reservas_mis_reservas__["a" /* MisReservasPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_custom_nav_bar_custom_nav_bar__["a" /* CustomNavBarPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_reserv_man_reserv_man__["a" /* ReservManPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_ajustes_ajustes__["a" /* AjustesPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_chat_bot_chat_bot__["a" /* ChatBotPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_aulas_disponibles_aulas_disponibles__["a" /* AulasDisponiblesPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_registro_registro__["a" /* RegistroPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/ajustes/ajustes.module#AjustesPageModule', name: 'AjustesPage', segment: 'ajustes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/aulas-disponibles/aulas-disponibles.module#AulasDisponiblesPageModule', name: 'AulasDisponiblesPage', segment: 'aulas-disponibles', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chat-bot/chat-bot.module#ChatBotPageModule', name: 'ChatBotPage', segment: 'chat-bot', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/custom-nav-bar/custom-nav-bar.module#CustomNavBarPageModule', name: 'CustomNavBarPage', segment: 'custom-nav-bar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mis-reservas/mis-reservas.module#MisReservasPageModule', name: 'MisReservasPage', segment: 'mis-reservas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registro/registro.module#RegistroPageModule', name: 'RegistroPage', segment: 'registro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reserv-man/reserv-man.module#ReservManPageModule', name: 'ReservManPage', segment: 'reserv-man', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_mis_reservas_mis_reservas__["a" /* MisReservasPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_custom_nav_bar_custom_nav_bar__["a" /* CustomNavBarPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_reserv_man_reserv_man__["a" /* ReservManPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_ajustes_ajustes__["a" /* AjustesPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_chat_bot_chat_bot__["a" /* ChatBotPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_aulas_disponibles_aulas_disponibles__["a" /* AulasDisponiblesPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_registro_registro__["a" /* RegistroPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__providers_chat_chat__["a" /* ChatProvider */],
                __WEBPACK_IMPORTED_MODULE_12__providers_pusher_pusher__["a" /* PusherProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_listas_online_listas_online__["a" /* ListasOnlineProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_obj_reserva_obj_reserva__["a" /* ObjReservaProvider */],
                __WEBPACK_IMPORTED_MODULE_19__providers_salon_salon__["a" /* SalonProvider */],
                __WEBPACK_IMPORTED_MODULE_20__providers_user_user__["a" /* UserProvider */],
                __WEBPACK_IMPORTED_MODULE_22__providers_list_users_list_users__["a" /* ListUsersProvider */],
                __WEBPACK_IMPORTED_MODULE_23__providers_user_logged_user_logged__["a" /* UserLoggedProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\proyectoIntegrador1\practicas\REMI\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\proyectoIntegrador1\practicas\REMI\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MisReservasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reserv_man_reserv_man__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ajustes_ajustes__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chat_bot_chat_bot__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_listas_online_listas_online__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MisReservasPage = /** @class */ (function () {
    function MisReservasPage(navCtrl, navParams, alertCtrl, modalCtrl, listAulas) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.listAulas = listAulas;
        this.myReservas = [];
        this.myReservas = listAulas.getMyReservas();
    }
    MisReservasPage.prototype.metDesrv = function (reserva) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: '¿Cancelar reserva?',
            subTitle: 'Estás a punto de cancelar tu reserva.',
            buttons: [
                {
                    text: 'Aceptar',
                    handler: function () {
                        //Borra la reserva de la lista
                        _this.listAulas.delReserva(reserva);
                    }
                },
                {
                    text: 'Cancelar',
                    handler: function () {
                        //No pasa nada
                    }
                }
            ]
        });
        alert.present();
    };
    MisReservasPage.prototype.goResevManual = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__reserv_man_reserv_man__["a" /* ReservManPage */]);
    };
    MisReservasPage.prototype.goChatBot = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__chat_bot_chat_bot__["a" /* ChatBotPage */]);
    };
    MisReservasPage.prototype.irToAjustes = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__ajustes_ajustes__["a" /* AjustesPage */]);
    };
    MisReservasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mis-reservas',template:/*ion-inline-start:"D:\proyectoIntegrador1\practicas\REMI\src\pages\mis-reservas\mis-reservas.html"*/'<ion-header>\n  <ion-navbar ios="light" md="morado">\n    <ion-title>\n      Reservas\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button large (click)="irToAjustes()">\n        Ajustes\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div text-center>\n    <button ion-button class="butBig" (click)="goChatBot()" color="morado" icon-end>\n      ChatBot\n      <ion-icon name="chatbubbles"></ion-icon>\n    </button>\n\n    <button ion-button class="butBig" (click)="goResevManual()" color="azul" espDer icon-end>\n      Reserva <br/>\n      Manual\n      <ion-icon name="person"></ion-icon>\n    </button>\n  </div>\n  \n  <h2>Mis reservas:</h2>\n    <ion-list>\n      <ion-label *ngIf="myReservas.length == 0" color="gris" text-center padding class="sinRes"> \n        No tienes reservas por el momento\n      </ion-label>\n      <ion-label *ngIf="myReservas.length == 0" color="gris" text-center padding class="sinResIcon"> \n        <ion-icon name="sad"></ion-icon>\n      </ion-label>\n\n      <ion-item ion-item *ngFor="let item of myReservas">\n        \n        <ion-label>\n          Para el día: {{ item.dia.getDate() }}/{{ item.dia.getMonth() }}/{{ item.dia.getFullYear() }}<br/> \n          Aula: {{ item.salon.codigo }} <br/>\n          Horario: {{ item.hInicial }} - {{ item.hFinal }}\n        </ion-label>\n        <button color="danger" ion-button class="butMed" icon-only (click)="metDesrv(item)" item-end round>\n          <ion-icon name="close"></ion-icon>\n        </button>\n        \n      </ion-item>\n    </ion-list>\n  \n</ion-content>'/*ion-inline-end:"D:\proyectoIntegrador1\practicas\REMI\src\pages\mis-reservas\mis-reservas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_listas_online_listas_online__["a" /* ListasOnlineProvider */]])
    ], MisReservasPage);
    return MisReservasPage;
}());

//# sourceMappingURL=mis-reservas.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListasOnlineProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__obj_reserva_obj_reserva__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__salon_salon__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_logged_user_logged__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListasOnlineProvider = /** @class */ (function () {
    function ListasOnlineProvider(http, user) {
        this.http = http;
        this.user = user;
        this.salonesDisp = new Array(); //Lista de salones disponibles.
        this.misReservas = new Array(); //Lista de reservas realizadas
        var salon1 = new __WEBPACK_IMPORTED_MODULE_3__salon_salon__["a" /* SalonProvider */]("30-114", "Aula", "Piano de cola y piano vertical");
        var salon2 = new __WEBPACK_IMPORTED_MODULE_3__salon_salon__["a" /* SalonProvider */]("30-116", "Aula", "Piano de cola y piano vertical");
        var salon3 = new __WEBPACK_IMPORTED_MODULE_3__salon_salon__["a" /* SalonProvider */]("30-112", "Aula", "Percusion");
        var salon4 = new __WEBPACK_IMPORTED_MODULE_3__salon_salon__["a" /* SalonProvider */]("30-202", "Aula", "Clavinova");
        var salon5 = new __WEBPACK_IMPORTED_MODULE_3__salon_salon__["a" /* SalonProvider */]("30-201", "Aula", "Clavinova");
        var salon6 = new __WEBPACK_IMPORTED_MODULE_3__salon_salon__["a" /* SalonProvider */]("30-204", "Aula", "Piano de cola");
        var salon7 = new __WEBPACK_IMPORTED_MODULE_3__salon_salon__["a" /* SalonProvider */]("30-308", "Aula", "Clavinova");
        var salon8 = new __WEBPACK_IMPORTED_MODULE_3__salon_salon__["a" /* SalonProvider */]("30-307", "Aula", "Piano vertical");
        var salon9 = new __WEBPACK_IMPORTED_MODULE_3__salon_salon__["a" /* SalonProvider */]("30-303", "Aula", "Piano de cola y piano vertical");
        var salon10 = new __WEBPACK_IMPORTED_MODULE_3__salon_salon__["a" /* SalonProvider */]("30-305", "Aula", "2 clavinovas");
        var salon11 = new __WEBPACK_IMPORTED_MODULE_3__salon_salon__["a" /* SalonProvider */]("30-301", "Aula", "Piano de cola y piano vertical");
        var salon12 = new __WEBPACK_IMPORTED_MODULE_3__salon_salon__["a" /* SalonProvider */]("30-306", "Aula", "2 clavinovas");
        var salon13 = new __WEBPACK_IMPORTED_MODULE_3__salon_salon__["a" /* SalonProvider */]("30-402", "Aula", "Piano vertical");
        //Cubiculos
        var salon14 = new __WEBPACK_IMPORTED_MODULE_3__salon_salon__["a" /* SalonProvider */]("30-117", "Cubiculo", "Clavinova");
        var salon15 = new __WEBPACK_IMPORTED_MODULE_3__salon_salon__["a" /* SalonProvider */]("30-118", "Cubiculo", "Clavinova");
        var salon16 = new __WEBPACK_IMPORTED_MODULE_3__salon_salon__["a" /* SalonProvider */]("30-208", "Cubiculo", "Clavinova");
        var salon17 = new __WEBPACK_IMPORTED_MODULE_3__salon_salon__["a" /* SalonProvider */]("30-207", "Cubiculo", "Clavinova");
        var salon18 = new __WEBPACK_IMPORTED_MODULE_3__salon_salon__["a" /* SalonProvider */]("30-310", "Cubiculo", "Clavinova");
        var salon19 = new __WEBPACK_IMPORTED_MODULE_3__salon_salon__["a" /* SalonProvider */]("30-311", "Cubiculo", "Clavinova");
        var salon20 = new __WEBPACK_IMPORTED_MODULE_3__salon_salon__["a" /* SalonProvider */]("30-103", "Cubiculo", "Batería");
        var salon21 = new __WEBPACK_IMPORTED_MODULE_3__salon_salon__["a" /* SalonProvider */]("30-104", "Cubiculo", "Batería");
        var salon22 = new __WEBPACK_IMPORTED_MODULE_3__salon_salon__["a" /* SalonProvider */]("30-107", "Cubiculo", "Batería");
        var salon23 = new __WEBPACK_IMPORTED_MODULE_3__salon_salon__["a" /* SalonProvider */]("30-108", "Cubiculo", "Piano vertical");
        var salon24 = new __WEBPACK_IMPORTED_MODULE_3__salon_salon__["a" /* SalonProvider */]("30-228", "Cubiculo", "Piano vertical");
        var salon25 = new __WEBPACK_IMPORTED_MODULE_3__salon_salon__["a" /* SalonProvider */]("30-220", "Cubiculo", "Piano vertical");
        var salon26 = new __WEBPACK_IMPORTED_MODULE_3__salon_salon__["a" /* SalonProvider */]("30-227", "Cubiculo", "Piano vertical");
        var salon27 = new __WEBPACK_IMPORTED_MODULE_3__salon_salon__["a" /* SalonProvider */]("30-223", "Cubiculo", "Piano vertical");
        var salon28 = new __WEBPACK_IMPORTED_MODULE_3__salon_salon__["a" /* SalonProvider */]("30-222", "Cubiculo", "Piano vertical");
        var salon29 = new __WEBPACK_IMPORTED_MODULE_3__salon_salon__["a" /* SalonProvider */]("30-224", "Cubiculo", "Piano vertical");
        var salon30 = new __WEBPACK_IMPORTED_MODULE_3__salon_salon__["a" /* SalonProvider */]("30-225", "Cubiculo", "Piano vertical");
        var salon31 = new __WEBPACK_IMPORTED_MODULE_3__salon_salon__["a" /* SalonProvider */]("30-226", "Cubiculo", "Piano vertical");
        //var salon1 = new SalonProvider("30-102","Aula","Clavinova");
        //var salon2 = new SalonProvider("30-203","Cubiculo","Piano");
        this.salonesDisp.push(salon1);
        this.salonesDisp.push(salon2);
        this.salonesDisp.push(salon3);
        this.salonesDisp.push(salon4);
        this.salonesDisp.push(salon5);
        this.salonesDisp.push(salon6);
        this.salonesDisp.push(salon7);
        this.salonesDisp.push(salon8);
        this.salonesDisp.push(salon9);
        this.salonesDisp.push(salon10);
        this.salonesDisp.push(salon11);
        this.salonesDisp.push(salon12);
        this.salonesDisp.push(salon13);
        this.salonesDisp.push(salon14);
        this.salonesDisp.push(salon15);
        this.salonesDisp.push(salon16);
        this.salonesDisp.push(salon17);
        this.salonesDisp.push(salon18);
        this.salonesDisp.push(salon19);
        this.salonesDisp.push(salon20);
        this.salonesDisp.push(salon21);
        this.salonesDisp.push(salon22);
        this.salonesDisp.push(salon23);
        this.salonesDisp.push(salon24);
        this.salonesDisp.push(salon25);
        this.salonesDisp.push(salon26);
        this.salonesDisp.push(salon27);
        this.salonesDisp.push(salon28);
        this.salonesDisp.push(salon29);
        this.salonesDisp.push(salon30);
        this.salonesDisp.push(salon31);
    }
    ListasOnlineProvider.prototype.getAulasDisp = function () {
        return this.salonesDisp;
    };
    ListasOnlineProvider.prototype.getMyReservas = function () {
        return this.misReservas;
    };
    //METODOS PARA RESERVAS REALIZADAS:
    ListasOnlineProvider.prototype.addReserva = function (fecha, hIni, hFin, salon) {
        //Método que añadirá una reserva a "Mis Reservas"
        var dateHoy = new Date();
        var newReserva = new __WEBPACK_IMPORTED_MODULE_2__obj_reserva_obj_reserva__["a" /* ObjReservaProvider */](123, this.user.getName(), fecha, hIni, hFin, salon, dateHoy);
        this.misReservas.push(newReserva);
        // **AQUI va a mandar la actualización al servidor diciendo que el salón está reservado el dia tal y a esta hora.**
    };
    ListasOnlineProvider.prototype.addReservChatBot = function (newReserva) {
        this.misReservas.push(newReserva);
        // **AQUI va a mandar la actualización al servidor diciendo que el salón está reservado el dia tal y a esta hora.**
    };
    ListasOnlineProvider.prototype.addSalonDisp = function (salon) {
        this.salonesDisp.push(salon);
    };
    ListasOnlineProvider.prototype.delReserva = function (reserva) {
        //Método que borrará una reserva de la lista "Mis reservas" online
        var indice = this.misReservas.indexOf(reserva);
        this.misReservas.splice(indice, 1);
        var fHoy = new Date();
        fHoy.setMonth(fHoy.getMonth() + 1);
        console.log(fHoy.getDate());
        console.log(reserva.dia.getDate());
        if (reserva.dia.getDate() == fHoy.getDate()) {
            console.log("El salon ahora está en true HOY");
            console.log(reserva.hInicial + " a " + reserva.hFinal);
            reserva.salon.hoy.horarios[reserva.hInicial + " a " + reserva.hFinal] = true;
        }
        else {
            console.log("El salon ahora está en true MAÑANA");
            reserva.salon.man.horarios[reserva.hInicial + " a " + reserva.hFinal] = true;
        }
        // **AQUI va a mandar la actualización al servidor diciendo que ya no está reservada el aula a esta hora.**
    };
    ListasOnlineProvider.prototype.delSalonDisp = function (salon) {
        var indice = this.salonesDisp.indexOf(salon);
        this.salonesDisp.splice(indice, 1);
    };
    ListasOnlineProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__user_logged_user_logged__["a" /* UserLoggedProvider */]])
    ], ListasOnlineProvider);
    return ListasOnlineProvider;
}());

//# sourceMappingURL=listas-online.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SalonProvider; });
/* unused harmony export Dia */
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

var SalonProvider = /** @class */ (function () {
    //horarios: IHash = {};
    function SalonProvider(codigo, tipo, instrumento) {
        this.codigo = codigo;
        this.tipo = tipo;
        this.instrumento = instrumento;
        var horariosHoy = {};
        var horariosMa = {};
        var fechaHoy = new Date();
        fechaHoy.setDate(fechaHoy.getDate());
        var fechaMan = new Date();
        fechaMan.setDate(fechaHoy.getDate() + 1);
        fechaMan.setMonth(fechaHoy.getMonth() + 1);
        //console.log("Salon.ts fHoy "+fechaHoy.getDate());
        //console.log("Salon.ts fMan "+fechaMan.getDate());
        this.hoy = new Dia("Hoy", horariosHoy, fechaHoy);
        this.man = new Dia("Mañana", horariosMa, fechaMan);
        horariosHoy["6 a 7"] = true;
        horariosHoy["6 a 8"] = true;
        horariosHoy["7 a 8"] = true;
        horariosHoy["7 a 9"] = true;
        horariosHoy["8 a 9"] = true;
        horariosHoy["8 a 10"] = true;
        horariosHoy["9 a 10"] = true;
        horariosHoy["9 a 11"] = true;
        horariosHoy["10 a 12"] = true;
        horariosHoy["11 a 12"] = true;
        horariosHoy["12 a 13"] = true;
        horariosHoy["12 a 14"] = true;
        horariosHoy["13 a 14"] = true;
        horariosHoy["13 a 15"] = true;
        horariosHoy["14 a 15"] = true;
        horariosHoy["14 a 16"] = true;
        horariosHoy["15 a 16"] = true;
        horariosHoy["15 a 17"] = true;
        horariosHoy["16 a 17"] = true;
        horariosHoy["16 a 18"] = true;
        horariosHoy["17 a 18"] = true;
        horariosHoy["17 a 19"] = true;
        horariosHoy["18 a 19"] = true;
        horariosHoy["18 a 20"] = true;
        horariosHoy["19 a 20"] = true;
        horariosMa["6 a 7"] = true;
        horariosMa["6 a 8"] = true;
        horariosMa["7 a 8"] = true;
        horariosMa["7 a 9"] = true;
        horariosMa["8 a 9"] = true;
        horariosMa["8 a 10"] = true;
        horariosMa["9 a 10"] = true;
        horariosMa["9 a 11"] = true;
        horariosHoy["10 a 12"] = true;
        horariosMa["11 a 12"] = true;
        horariosMa["12 a 13"] = true;
        horariosMa["12 a 14"] = true;
        horariosMa["13 a 14"] = true;
        horariosMa["13 a 15"] = true;
        horariosMa["14 a 15"] = true;
        horariosMa["14 a 16"] = true;
        horariosMa["15 a 16"] = true;
        horariosMa["15 a 17"] = true;
        horariosMa["16 a 17"] = true;
        horariosMa["16 a 18"] = true;
        horariosMa["17 a 18"] = true;
        horariosMa["17 a 19"] = true;
        horariosMa["18 a 19"] = true;
        horariosMa["18 a 20"] = true;
        horariosMa["19 a 20"] = true;
        /*this.horarios["6 a 7"] = true;
        this.horarios["6 a 8"] = true;
        this.horarios["7 a 8"] = true;
        this.horarios["7 a 9"] = true;
        this.horarios["8 a 9"] = true;
        this.horarios["8 a 10"] = true;
        this.horarios["9 a 10"] = true;
        this.horarios["9 a 11"] = true;
        this.horarios["11 a 12"] = true;
        this.horarios["12 a 13"] = true;
        this.horarios["12 a 14"] = true;
        this.horarios["13 a 14"] = true;
        this.horarios["13 a 15"] = true;
        this.horarios["14 a 15"] = true;
        this.horarios["14 a 16"] = true;
        this.horarios["15 a 16"] = true;
        this.horarios["15 a 17"] = true;
        this.horarios["16 a 17"] = true;
        this.horarios["16 a 18"] = true;
        this.horarios["17 a 18"] = true;
        this.horarios["17 a 19"] = true;
        this.horarios["18 a 19"] = true;
        this.horarios["18 a 20"] = true;
        this.horarios["19 a 20"] = true;*/
    }
    SalonProvider.prototype.getHorario = function (dia, horario) {
        if (dia == "Hoy") {
            return this.hoy.horarios[horario];
        }
        else if (dia == "Mañana") {
            return this.man.horarios[horario];
        }
    };
    SalonProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [String, String, String])
    ], SalonProvider);
    return SalonProvider;
}());

var Dia = /** @class */ (function () {
    function Dia(d, h, f) {
        this.dia = d;
        this.horarios = h;
        this.fecha = f;
    }
    return Dia;
}());

//# sourceMappingURL=salon.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserLoggedProvider; });
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

var UserLoggedProvider = /** @class */ (function () {
    function UserLoggedProvider() {
        this.horasHM = 2;
        this.horasHT = 2;
        this.horasMM = 2;
        this.horasMT = 2;
    }
    UserLoggedProvider.prototype.upInfo = function (user) {
        this.nombre = user.getName;
        this.codigo = user.getCode;
        this.correo = user.getEmail;
        this.especializacion = user.getEsp;
        this.contraseña = user.getPass;
    };
    UserLoggedProvider.prototype.cambPassword = function (newPass) {
        this.contraseña = newPass;
    };
    UserLoggedProvider.prototype.getName = function () {
        return this.nombre;
    };
    UserLoggedProvider.prototype.getPass = function () {
        return this.contraseña;
    };
    UserLoggedProvider.prototype.getCode = function () {
        return this.codigo;
    };
    UserLoggedProvider.prototype.getEmail = function () {
        return this.correo;
    };
    UserLoggedProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], UserLoggedProvider);
    return UserLoggedProvider;
}());

//# sourceMappingURL=user-logged.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListUsersProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_user__ = __webpack_require__(85);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListUsersProvider = /** @class */ (function () {
    function ListUsersProvider(http) {
        this.http = http;
        this.userList = new Array();
        var user = new __WEBPACK_IMPORTED_MODULE_2__user_user__["a" /* UserProvider */]("Gonzalo", "201710057010", "admin@eafit.edu.co", "Bateria", "adm");
        this.addUsr(user);
    }
    ListUsersProvider.prototype.addUsr = function (user) {
        this.userList.push(user);
    };
    ListUsersProvider.prototype.getList = function () {
        return this.userList;
    };
    ListUsersProvider.prototype.verifUser = function (email, pass) {
        for (var _i = 0, _a = this.userList; _i < _a.length; _i++) {
            var user = _a[_i];
            if ((email == user.getEmail()) && (pass == user.getPass())) {
                return true;
            }
        }
        return false;
    };
    ListUsersProvider.prototype.userRegistred = function (email) {
        for (var _i = 0, _a = this.userList; _i < _a.length; _i++) {
            var user = _a[_i];
            if (email == user.getEmail()) {
                console.log(email);
                console.log(user.getEmail());
                return true;
            }
        }
        return false;
    };
    ListUsersProvider.prototype.searchUser = function (email) {
        for (var _i = 0, _a = this.userList; _i < _a.length; _i++) {
            var user = _a[_i];
            if (email == user.getEmail()) {
                return user;
            }
        }
        return null;
    };
    ListUsersProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ListUsersProvider);
    return ListUsersProvider;
}());

//# sourceMappingURL=list-users.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mis_reservas_mis_reservas__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__registro_registro__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_list_users_list_users__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_logged_user_logged__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, alertCtrl, usersList, usrLogged) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.usersList = usersList;
        this.usrLogged = usrLogged;
    }
    HomePage.prototype.goReservas = function () {
        if (this.usersList.verifUser(this.usrN, this.passW)) {
            var user = this.usersList.searchUser(this.usrN);
            this.usrLogged.upInfo(user);
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__mis_reservas_mis_reservas__["a" /* MisReservasPage */]);
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: 'Intenta de nuevo',
                subTitle: 'Tu usuario o contraseña incorrectos. Si no estás registrado has clic en el botón de abajo ;)',
                buttons: ['OK']
            });
            alert_1.present();
        }
    };
    HomePage.prototype.goRegistro = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__registro_registro__["a" /* RegistroPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\proyectoIntegrador1\practicas\REMI\src\pages\home\home.html"*/'<ion-content padding-vertical>\n\n    <ion-list>\n      <div text-center>\n        <ion-img width="250" height="200" src="assets/imgs/logoV3.png"></ion-img>\n      </div>\n\n      <ion-item>\n        <ion-label floating>Usuario</ion-label>\n        <ion-input [(ngModel)]="usrN" type="text"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Contraseña</ion-label>\n        <ion-input [(ngModel)]="passW" type="password"></ion-input>\n      </ion-item>\n    </ion-list>\n\n    <div text-center padding>\n        <button ion-button color="morado" (click)="goReservas()" class="butEntrar" round>ENTRAR</button>  \n    </div>\n\n    <div text-center class="registro">\n      <u (click)="goRegistro()">¿Nuevo en la App? ¡Registrate!</u>\n    </div>\n</ion-content>\n\n'/*ion-inline-end:"D:\proyectoIntegrador1\practicas\REMI\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_list_users_list_users__["a" /* ListUsersProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_user_logged_user_logged__["a" /* UserLoggedProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObjReservaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__salon_salon__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ObjReservaProvider = /** @class */ (function () {
    function ObjReservaProvider(id, estudiante, dia, hInicial, hFinal, salon, createdAt) {
        this.id = id;
        this.estudiante = estudiante;
        this.dia = dia;
        this.hInicial = hInicial;
        this.hFinal = hFinal;
        this.salon = salon;
        this.createdAt = createdAt;
    }
    ObjReservaProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [Number, String, Date, Number, Number, __WEBPACK_IMPORTED_MODULE_1__salon_salon__["a" /* SalonProvider */], Date])
    ], ObjReservaProvider);
    return ObjReservaProvider;
}());

//# sourceMappingURL=obj-reserva.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
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

var UserProvider = /** @class */ (function () {
    function UserProvider(name, codigo, email, espec, pass) {
        this.horasHM = 2;
        this.horasHT = 2;
        this.horasMM = 2;
        this.horasMT = 2;
        this.nombre = name;
        this.codigo = codigo;
        this.correo = email;
        this.especializacion = espec;
        this.contraseña = pass;
    }
    UserProvider.prototype.cambPassword = function (newPass) {
        this.contraseña = newPass;
    };
    UserProvider.prototype.getPass = function () {
        return this.contraseña;
    };
    UserProvider.prototype.getName = function () {
        return this.nombre;
    };
    UserProvider.prototype.getEsp = function () {
        return this.especializacion;
    };
    UserProvider.prototype.getCode = function () {
        return this.codigo;
    };
    UserProvider.prototype.getEmail = function () {
        return this.correo;
    };
    UserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [String, String, String, String, String])
    ], UserProvider);
    return UserProvider;
}());

//# sourceMappingURL=user.js.map

/***/ })

},[213]);
//# sourceMappingURL=main.js.map