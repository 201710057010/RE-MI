webpackJsonp([6],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReservManPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aulas_disponibles_aulas_disponibles__ = __webpack_require__(106);
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
        this.buscar = true;
    }
    ReservManPage.prototype.buscAulas = function () {
        if (this.buscar == true) {
            var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__aulas_disponibles_aulas_disponibles__["a" /* AulasDisponiblesPage */]);
            modal.present();
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
    ReservManPage.prototype.cerrarRervMan = function () {
        this.viewCtrl.dismiss();
    };
    ReservManPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reserv-man',template:/*ion-inline-start:"D:\proyectoIntegrador1\practicas\REMI - copia\src\pages\reserv-man\reserv-man.html"*/'<ion-header>\n    <ion-navbar color="azul">\n      <ion-title>\n        Reserva Manual\n      </ion-title>\n      \n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding>\n    <ion-list padding no-lines>\n      <ion-item padding>\n        <ion-label color="azul">Selecciona tipo de salón</ion-label>\n        <ion-select [(ngModel)]="pTipo" interface="popover">\n          <ion-option value="Aula">Aula</ion-option>\n          <ion-option value="Cubiculo">Cubículo</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item padding>\n        <ion-label color="azul">Que tenga:</ion-label>\n        <ion-select [(ngModel)]="pAulDe" interface="popover">\n          <ion-option value="pCola">1 Piano de cola</ion-option>\n          <ion-option value="pCyV">Piano de cola y P.vertical</ion-option>\n          <ion-option value="1clav">1 Clavinova</ion-option>\n          <ion-option value="2clav">2 Clavinovas</ion-option>\n        </ion-select>\n      </ion-item>\n      \n      <ion-item padding>\n        <ion-label color="azul">¿Necesitas piano?</ion-label>\n        <ion-select [(ngModel)]="pPiano" interface="popover">\n          <ion-option value="siPiano">SI</ion-option>\n          <ion-option value="noPiano">NO</ion-option>\n        </ion-select>\n      </ion-item>\n  \n      <ion-item padding>\n        <ion-label color="azul">¿Para cúando?</ion-label>\n        <ion-select [(ngModel)]="pDia">\n          <ion-option value="Hoy en la mañana">Hoy en la mañana</ion-option>\n          <ion-option value="Hoy en la tarde">Hoy en la tarde</ion-option>\n          <ion-option value="Mañana en la mañana">Mañana en la mañana</ion-option>\n          <ion-option value="Mañana en la tarde">Mañana en la tarde</ion-option>\n        </ion-select>\n      </ion-item>\n  \n      <ion-item padding>\n        <ion-label color="azul">¿Por cúanto tiempo?</ion-label>\n        <ion-select [(ngModel)]="pTiempo" interface="popover">\n          <ion-option value="OneH">1 Hora</ion-option>\n          <ion-option value="twoH">2 Horas</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n    <div text-center>\n      <button class="sizeD" ion-button color="morado" (click)="buscAulas()" outline icon-end>\n        Presiona para buscar aulas\n        <ion-icon name="search"></ion-icon>\n      </button>  \n    </div>\n    \n  </ion-content>'/*ion-inline-end:"D:\proyectoIntegrador1\practicas\REMI - copia\src\pages\reserv-man\reserv-man.html"*/,
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

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AjustesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mis_reservas_mis_reservas__ = __webpack_require__(41);
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
    function AjustesPage(navCtrl, navParams, alerCtrl, user) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alerCtrl = alerCtrl;
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
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__mis_reservas_mis_reservas__["a" /* MisReservasPage */]);
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
            selector: 'page-ajustes',template:/*ion-inline-start:"D:\proyectoIntegrador1\practicas\REMI - copia\src\pages\ajustes\ajustes.html"*/'<ion-header>\n    <ion-navbar color="azul">\n   \n      <ion-title>\n          Ajustes\n      </ion-title>\n  \n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding>\n      <ion-list>\n      <h3 padding-top text-center>Cambiar contraseña</h3>\n      <ion-item>\n          <ion-input type="password" [(ngModel)]="passActual" placeholder="Contraseña actual"></ion-input>\n      </ion-item>\n      <ion-item padding-top>\n          <ion-input type="password" [(ngModel)]="newPass" placeholder="Nueva contraseña"></ion-input>\n      </ion-item>\n      <ion-item padding-top>\n          <ion-input type="password" [(ngModel)]="newPassConf" placeholder="Confirmar contraseña"></ion-input>\n      </ion-item>\n  \n      <div text-center padding-top>\n          <button ion-button color="morado" (click)="cambPass()" round>Guardar cambios</button>\n      </div>\n\n      <div class="alFondo">\n          <button button ion-button color="danger" (click)="closeSes()" icon-end>\n              Cerrar sesión\n              <ion-icon name="log-out"></ion-icon>\n          </button>\n      </div>\n      \n      </ion-list>\n  </ion-content>\n'/*ion-inline-end:"D:\proyectoIntegrador1\practicas\REMI - copia\src\pages\ajustes\ajustes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */]])
    ], AjustesPage);
    return AjustesPage;
}());

//# sourceMappingURL=ajustes.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AulasDisponiblesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_listas_online_listas_online__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mis_reservas_mis_reservas__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AulasDisponiblesPage = /** @class */ (function () {
    function AulasDisponiblesPage(navCtrl, navParams, viewCtrl, listAulas) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.listAulas = listAulas;
        this.lista = this.listAulas.salonesDisp; //Trae la lista de aulas disponibles del provider "ListAulasDispProvider"
        this.listAulas.getAulasDisp();
    }
    AulasDisponiblesPage.prototype.aulaSelected = function (salon) {
        this.listAulas.addReserva(salon);
        this.viewCtrl.dismiss();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__mis_reservas_mis_reservas__["a" /* MisReservasPage */]);
    };
    AulasDisponiblesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-aulas-disponibles',template:/*ion-inline-start:"D:\proyectoIntegrador1\practicas\REMI - copia\src\pages\aulas-disponibles\aulas-disponibles.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Aulas Disponibles</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n    <h4>Selecciona uno:</h4>\n\n    <button ion-item *ngFor="let item of lista;let i = index" (click)="aulaSelected(item)">\n      <li> Salón: {{ item.codigo }} <br/> \n           Contiene: {{ item.instrumento }} </li> \n    </button> \n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\proyectoIntegrador1\practicas\REMI - copia\src\pages\aulas-disponibles\aulas-disponibles.html"*/,
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

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatBotPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_chat_chat__ = __webpack_require__(163);
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
    function ChatBotPage(navCtrl, navParams, _chat) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._chat = _chat;
        this.chats = [];
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
            selector: 'page-chat-bot',template:/*ion-inline-start:"D:\proyectoIntegrador1\practicas\REMI - copia\src\pages\chat-bot\chat-bot.html"*/'<ion-header>\n  <ion-navbar color="morado">\n\n    <ion-title>FEBOS</ion-title>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <div class="chats">\n      <div class="chatbox">\n        <div *ngFor="let chat of chats">\n          <div class="message sent" *ngIf="chat.type!==\'bot\' && chat.isMe">\n            {{chat.message}}\n            <span class="metadata">\n              <span class="time">{{chat.createdAt | date: \'HH:mm aaa\'}}</span>\n            </span>\n          </div>\n          <div class="message received"  *ngIf="chat.type ==\'bot\' && !chat.isMe">\n            {{chat.message}}\n            <span class="metadata">\n              <span class="time">{{chat.createdAt | date: \'HH:mm aaa\'}}</span>\n            </span>\n          </div>\n        </div>\n      </div>\n      </div>\n\n  <ion-footer>\n      <p text-center *ngIf="sending">enviando...</p>\n      <div class="flex-items" padding>\n\n          <ion-input [(ngModel)]="message" name="message" class="input_message" placeholder="Escribe un mensaje"></ion-input>\n          <ion-icon (click)="sendMessage()" class="send" name="send"></ion-icon>\n        </div>\n  </ion-footer>\n</ion-content>\n'/*ion-inline-end:"D:\proyectoIntegrador1\practicas\REMI - copia\src\pages\chat-bot\chat-bot.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__providers_chat_chat__["a" /* ChatProvider */]])
    ], ChatBotPage);
    return ChatBotPage;
}());

//# sourceMappingURL=chat-bot.js.map

/***/ }),

/***/ 119:
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
webpackEmptyAsyncContext.id = 119;

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/ajustes/ajustes.module": [
		286,
		5
	],
	"../pages/aulas-disponibles/aulas-disponibles.module": [
		287,
		4
	],
	"../pages/chat-bot/chat-bot.module": [
		288,
		3
	],
	"../pages/custom-nav-bar/custom-nav-bar.module": [
		289,
		2
	],
	"../pages/mis-reservas/mis-reservas.module": [
		290,
		1
	],
	"../pages/reserv-man/reserv-man.module": [
		291,
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
webpackAsyncContext.id = 161;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObjReservaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__salon_salon__ = __webpack_require__(81);
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

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pusher_pusher__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(47);
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



var ChatProvider = /** @class */ (function () {
    function ChatProvider(http, _pusher) {
        this.http = http;
        this._pusher = _pusher;
        this._url = 'http://localhost:5000';
        this._channel = this._pusher.getPusher().subscribe('chat-bot');
    }
    ChatProvider.prototype.sendMessage = function (message) {
        var param = {
            type: 'human',
            message: message,
        };
        return this.http.post(this._url + "/message", param);
    };
    ChatProvider.prototype.getChannel = function () {
        return this._channel;
    };
    ChatProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_0__pusher_pusher__["a" /* PusherProvider */]])
    ], ChatProvider);
    return ChatProvider;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PusherProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(47);
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

/***/ 165:
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
    function UserProvider() {
        this.contraseña = "admin";
        this.horasHM = 2;
        this.horasHT = 2;
        this.horasMM = 2;
        this.horasMT = 2;
        /*this.nombre = name;
        this.codigo = codigo;
        this.correo = email;
        this.especializacion = espec;
        this.contraseña = pass;*/
    }
    UserProvider.prototype.cambPassword = function (newPass) {
        this.contraseña = newPass;
    };
    UserProvider.prototype.getPass = function () {
        return this.contraseña;
    };
    UserProvider.prototype.getCode = function () {
        return this.codigo;
    };
    UserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], UserProvider);
    return UserProvider;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 209:
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
            selector: 'page-custom-nav-bar',template:/*ion-inline-start:"D:\proyectoIntegrador1\practicas\REMI - copia\src\pages\custom-nav-bar\custom-nav-bar.html"*/'<!--\n  Generated template for the CustomNavBarPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-toolbar>\n  \n  <ion-buttons *ngIf="addBack" (click)="goToBack()" start>\n    <button ion-button icon-only color="royal">\n      <ion-icon name="arrow-back"></ion-icon>\n    </button>\n  </ion-buttons>\n  <ion-title>{{title}}</ion-title>\n  \n</ion-toolbar>'/*ion-inline-end:"D:\proyectoIntegrador1\practicas\REMI - copia\src\pages\custom-nav-bar\custom-nav-bar.html"*/,
            inputs: ['title', 'addBack']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], CustomNavBarPage);
    return CustomNavBarPage;
}());

//# sourceMappingURL=custom-nav-bar.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(231);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_mis_reservas_mis_reservas__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_custom_nav_bar_custom_nav_bar__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_reserv_man_reserv_man__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_ajustes_ajustes__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_chat_chat__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_pusher_pusher__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_chat_bot_chat_bot__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_aulas_disponibles_aulas_disponibles__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_listas_online_listas_online__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_obj_reserva_obj_reserva__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_salon_salon__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_user_user__ = __webpack_require__(165);
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
                __WEBPACK_IMPORTED_MODULE_16__pages_aulas_disponibles_aulas_disponibles__["a" /* AulasDisponiblesPage */]
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
                __WEBPACK_IMPORTED_MODULE_16__pages_aulas_disponibles_aulas_disponibles__["a" /* AulasDisponiblesPage */]
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
                __WEBPACK_IMPORTED_MODULE_20__providers_user_user__["a" /* UserProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(79);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\proyectoIntegrador1\practicas\REMI - copia\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\proyectoIntegrador1\practicas\REMI - copia\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MisReservasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reserv_man_reserv_man__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ajustes_ajustes__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chat_bot_chat_bot__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_listas_online_listas_online__ = __webpack_require__(80);
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
        this.myReservas = listAulas.misReservas;
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
            selector: 'page-mis-reservas',template:/*ion-inline-start:"D:\proyectoIntegrador1\practicas\REMI - copia\src\pages\mis-reservas\mis-reservas.html"*/'<ion-header>\n  <ion-navbar ios="light" md="morado">\n    <ion-title>\n      Reservas\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button large (click)="irToAjustes()">\n        Ajustes\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div text-center>\n    <button ion-button class="butBig" (click)="goChatBot()" color="morado" icon-end>\n      ChatBot\n      <ion-icon name="chatbubbles"></ion-icon>\n    </button>\n\n    <button ion-button class="butBig" (click)="goResevManual()" color="azul" espDer icon-end>\n      Reserva <br/>\n      Manual\n      <ion-icon name="person"></ion-icon>\n    </button>\n  </div>\n  \n  <h2>Mis reservas:</h2>\n    <ion-list>\n      <ion-item ion-item *ngFor="let item of myReservas">\n  \n        <ion-label>\n          Para el día: {{ item.dia.getDate() }}/{{ item.dia.getMonth() }}/{{ item.dia.getFullYear() }}<br/> \n          Aula: {{ item.salon.codigo }} <br/>\n          Horario: {{ item.hInicial }} - {{ item.hFinal }}\n        </ion-label>\n        <button color="danger" ion-button class="butMed" icon-only (click)="metDesrv(item)" item-end round>\n          <ion-icon name="close"></ion-icon>\n        </button>\n        \n      </ion-item>\n    </ion-list>\n  \n</ion-content>'/*ion-inline-end:"D:\proyectoIntegrador1\practicas\REMI - copia\src\pages\mis-reservas\mis-reservas.html"*/,
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

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mis_reservas_mis_reservas__ = __webpack_require__(41);
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
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.goPagina2 = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__mis_reservas_mis_reservas__["a" /* MisReservasPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\proyectoIntegrador1\practicas\REMI - copia\src\pages\home\home.html"*/'<ion-content padding-vertical>\n\n    <ion-list>\n      <div text-center>\n        <ion-img width="250" height="200" src="assets/imgs/logoV3.png"></ion-img>\n      </div>\n\n      <ion-item>\n        <ion-label floating>Username</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Password</ion-label>\n        <ion-input type="password"></ion-input>\n      </ion-item>\n    </ion-list>\n\n    <div text-center padding>\n        <button ion-button color="morado" (click)="goPagina2()" class="butEntrar" round>ENTRAR</button>  \n    </div>\n</ion-content>\n\n'/*ion-inline-end:"D:\proyectoIntegrador1\practicas\REMI - copia\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListasOnlineProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__obj_reserva_obj_reserva__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__salon_salon__ = __webpack_require__(81);
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
    function ListasOnlineProvider(http) {
        this.http = http;
        this.salonesDisp = new Array(); //Lista de salones disponibles.
        this.misReservas = new Array(); //Lista de reservas realizadas
    }
    ListasOnlineProvider.prototype.getAulasDisp = function () {
        // Método que traer las aulas disponibles de la DB según los parametros ingresados
        var salon1 = new __WEBPACK_IMPORTED_MODULE_3__salon_salon__["a" /* SalonProvider */]("30-102", "Aula", "Clavinova");
        var salon2 = new __WEBPACK_IMPORTED_MODULE_3__salon_salon__["a" /* SalonProvider */]("30-203", "Cubiculo", "Piano");
        this.salonesDisp.push(salon1);
        this.salonesDisp.push(salon2);
    };
    //METODOS PARA RESERVAS REALIZADAS:
    ListasOnlineProvider.prototype.addReserva = function (salon) {
        //Método que añadirá una reserva a "Mis Reservas"
        var dateReserva = new Date(2018, 10, 11);
        var dateHoy = new Date(2018, 10, 10);
        var newReserva = new __WEBPACK_IMPORTED_MODULE_2__obj_reserva_obj_reserva__["a" /* ObjReservaProvider */](123, "elGetNombre", dateReserva, 14, 15, salon, dateHoy);
        this.misReservas.push(newReserva);
        // **AQUI va a mandar la actualización al servidor diciendo que el salón está reservado el dia tal y a esta hora.**
        this.salonesDisp = new Array();
    };
    ListasOnlineProvider.prototype.delReserva = function (reserva) {
        //Método que borrará una reserva de la lista "Mis reservas" online
        var indice = this.misReservas.indexOf(reserva);
        this.misReservas.splice(indice, 1);
        // **AQUI va a mandar la actualización al servidor diciendo que ya no está reservada el aula a esta hora.**
    };
    ListasOnlineProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ListasOnlineProvider);
    return ListasOnlineProvider;
}());

//# sourceMappingURL=listas-online.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SalonProvider; });
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
    function SalonProvider(codigo, tipo, instrumento) {
        this.codigo = codigo;
        this.tipo = tipo;
        this.instrumento = instrumento;
    }
    SalonProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [String, String, String])
    ], SalonProvider);
    return SalonProvider;
}());

//# sourceMappingURL=salon.js.map

/***/ })

},[210]);
//# sourceMappingURL=main.js.map