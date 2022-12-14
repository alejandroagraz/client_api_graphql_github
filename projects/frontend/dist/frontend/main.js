(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["main"],{

/***/ 3696:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _guard_authentication_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guard/authentication.guard */ 1103);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home/home.component */ 9242);
/* harmony import */ var _components_error_error_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/error/error.component */ 2517);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ 927);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);







const routes = [
    { path: '', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent, canActivate: [_guard_authentication_guard__WEBPACK_IMPORTED_MODULE_0__.AuthenticationGuard] },
    { path: '**', component: _components_error_error_component__WEBPACK_IMPORTED_MODULE_2__.ErrorComponent },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 2050:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 3252);


class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 4750:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _graphql_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./graphql.module */ 9803);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 2050);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header/header.component */ 7899);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ 9242);
/* harmony import */ var _components_articles_articles_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/articles/articles.component */ 8566);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/footer/footer.component */ 7646);
/* harmony import */ var _components_error_error_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/error/error.component */ 2517);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/login/login.component */ 927);
/* harmony import */ var _pipes_format_date_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pipes/format.date.pipe */ 1096);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ 3696);
/* harmony import */ var angular2_moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular2-moment */ 8523);
/* harmony import */ var _guard_authentication_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./guard/authentication.guard */ 1103);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 4001);
















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ providers: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe, _guard_authentication_guard__WEBPACK_IMPORTED_MODULE_11__.AuthenticationGuard], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule,
            _graphql_module__WEBPACK_IMPORTED_MODULE_0__.GraphQLModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_9__.AppRoutingModule,
            angular2_moment__WEBPACK_IMPORTED_MODULE_10__.MomentModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent,
        _components_articles_articles_component__WEBPACK_IMPORTED_MODULE_4__.ArticlesComponent,
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__.HomeComponent,
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__.FooterComponent,
        _components_error_error_component__WEBPACK_IMPORTED_MODULE_6__.ErrorComponent,
        _pipes_format_date_pipe__WEBPACK_IMPORTED_MODULE_8__.FormatDatePipe,
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__.LoginComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule,
        _graphql_module__WEBPACK_IMPORTED_MODULE_0__.GraphQLModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_9__.AppRoutingModule,
        angular2_moment__WEBPACK_IMPORTED_MODULE_10__.MomentModule] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetComponentScope"](_components_home_home_component__WEBPACK_IMPORTED_MODULE_3__.HomeComponent, [_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent,
    _components_articles_articles_component__WEBPACK_IMPORTED_MODULE_4__.ArticlesComponent,
    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__.FooterComponent], []);


/***/ }),

/***/ 8566:
/*!***********************************************************!*\
  !*** ./src/app/components/articles/articles.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticlesComponent": () => (/* binding */ ArticlesComponent)
/* harmony export */ });
/* harmony import */ var _home_jagraz29_Workspace_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 2783);
/* harmony import */ var _services_articles_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/articles.service */ 2265);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _pipes_format_date_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pipes/format.date.pipe */ 1096);







function ArticlesComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Cargando...\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ArticlesComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " No hay articulos para mostrar, intentalo m\u00E1s tarde :)\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ArticlesComponent_div_3_article_1_tr_2_td_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ArticlesComponent_div_3_article_1_tr_2_td_1_Template_td_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11);
      const article_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return ctx_r9.newTab(article_r4.story_url);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const article_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", article_r4.story_title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" - ", article_r4.author, " - ");
  }
}
function ArticlesComponent_div_3_article_1_tr_2_td_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ArticlesComponent_div_3_article_1_tr_2_td_2_Template_td_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15);
      const article_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return ctx_r13.newTab(article_r4.story_url);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const article_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", article_r4.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" - ", article_r4.author, " - ");
  }
}
function ArticlesComponent_div_3_article_1_tr_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ArticlesComponent_div_3_article_1_tr_2_td_1_Template, 4, 2, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ArticlesComponent_div_3_article_1_tr_2_td_2_Template, 4, 2, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ArticlesComponent_div_3_article_1_tr_2_Template_td_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19);
      const article_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return ctx_r17.newTab(article_r4.story_url);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "formatDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ArticlesComponent_div_3_article_1_tr_2_Template_img_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19);
      const article_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return ctx_r20.removeArticle(article_r4);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const tabId_r5 = ctx_r22.index;
    const article_r4 = ctx_r22.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", tabId_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", article_r4.story_title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", article_r4.title && !article_r4.story_title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 5, article_r4.created_at), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("alt", article_r4.title);
  }
}
function ArticlesComponent_div_3_article_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "article", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "table", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ArticlesComponent_div_3_article_1_tr_2_Template, 8, 7, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const article_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", article_r4.story_title || article_r4.title);
  }
}
function ArticlesComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ArticlesComponent_div_3_article_1_Template, 4, 1, "article", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.articles);
  }
}
class ArticlesComponent {
  constructor(_articleService, router) {
    this._articleService = _articleService;
    this.router = router;
    this.articles = [];
    this.response = [];
  }
  ngOnInit() {}
  newTab(url) {
    window.open(url, "_blank");
  }
  removeArticle(data) {
    var _this = this;
    this._articleService.removeArticle(data._id).subscribe( /*#__PURE__*/function () {
      var _ref = (0,_home_jagraz29_Workspace_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resp) {
        if (resp.data.removeArticle) {
          _this.response = resp.data.removeArticle;
          if (_this.response) {
            _this.articles = _this.response;
          }
        }
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }(), error => {
      console.log(error);
    });
  }
}
ArticlesComponent.ɵfac = function ArticlesComponent_Factory(t) {
  return new (t || ArticlesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_articles_service__WEBPACK_IMPORTED_MODULE_1__.ArticleService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
};
ArticlesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ArticlesComponent,
  selectors: [["app-articles"]],
  inputs: {
    articles: "articles"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([_services_articles_service__WEBPACK_IMPORTED_MODULE_1__.ArticleService])],
  decls: 4,
  vars: 3,
  consts: [[1, "clearfix"], ["class", "loading", 4, "ngIf"], ["id", "articles", 4, "ngIf"], [1, "loading"], ["id", "articles"], ["class", "article-item", 4, "ngFor", "ngForOf"], [1, "article-item"], [1, "table"], [3, "id", 4, "ngIf"], [3, "id"], ["class", "td-title", 3, "click", 4, "ngIf"], [1, "td-date", 3, "click"], [1, "td-deleted"], ["src", "assets/images/remove.jpg", 1, "img-deleted", 3, "alt", "click"], [1, "td-title", 3, "click"], [1, "author"]],
  template: function ArticlesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ArticlesComponent_div_1_Template, 2, 0, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ArticlesComponent_div_2_Template, 2, 0, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ArticlesComponent_div_3_Template, 2, 1, "div", 2);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.articles);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.articles && ctx.articles.length == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.articles);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf],
  pipes: [_pipes_format_date_pipe__WEBPACK_IMPORTED_MODULE_2__.FormatDatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcnRpY2xlcy5jb21wb25lbnQuY3NzIn0= */"]
});

/***/ }),

/***/ 2517:
/*!*****************************************************!*\
  !*** ./src/app/components/error/error.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorComponent": () => (/* binding */ ErrorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 8267);


class ErrorComponent {
    constructor(_location) {
        this._location = _location;
    }
    backClicked() {
        this._location.back();
    }
}
ErrorComponent.ɵfac = function ErrorComponent_Factory(t) { return new (t || ErrorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.Location)); };
ErrorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorComponent, selectors: [["app-error"]], decls: 83, vars: 0, consts: [["width", "1123", "height", "837", "viewBox", "0 0 1123 837", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["width", "1123", "height", "837", "fill", "black"], ["id", "sky", "filter", "url(#filter0_d)"], ["id", "background", "x", "30", "y", "26", "width", "1063", "height", "777", "rx", "20", "fill", "black"], ["id", "stars"], ["id", "Vector", "d", "M202.12 319.2C204.937 319.2 207.22 316.917 207.22 314.1C207.22 311.283 204.937 309 202.12 309C199.303 309 197.02 311.283 197.02 314.1C197.02 316.917 199.303 319.2 202.12 319.2Z", "fill", "white"], ["id", "Vector_2", "d", "M566.12 615.2C568.937 615.2 571.22 612.917 571.22 610.1C571.22 607.283 568.937 605 566.12 605C563.303 605 561.02 607.283 561.02 610.1C561.02 612.917 563.303 615.2 566.12 615.2Z", "fill", "white"], ["id", "Vector_3", "d", "M351.12 638.95C352.694 638.95 353.97 637.674 353.97 636.1C353.97 634.526 352.694 633.25 351.12 633.25C349.546 633.25 348.27 634.526 348.27 636.1C348.27 637.674 349.546 638.95 351.12 638.95Z", "fill", "white"], ["id", "Vector_4", "d", "M985.11 503.99C986.684 503.99 987.96 502.714 987.96 501.14C987.96 499.566 986.684 498.29 985.11 498.29C983.536 498.29 982.26 499.566 982.26 501.14C982.26 502.714 983.536 503.99 985.11 503.99Z", "fill", "white"], ["id", "Vector_5", "d", "M822.11 247.99C823.684 247.99 824.96 246.714 824.96 245.14C824.96 243.566 823.684 242.29 822.11 242.29C820.536 242.29 819.26 243.566 819.26 245.14C819.26 246.714 820.536 247.99 822.11 247.99Z", "fill", "white"], ["id", "Vector_6", "d", "M1053.11 372.99C1054.68 372.99 1055.96 371.714 1055.96 370.14C1055.96 368.566 1054.68 367.29 1053.11 367.29C1051.54 367.29 1050.26 368.566 1050.26 370.14C1050.26 371.714 1051.54 372.99 1053.11 372.99Z", "fill", "white"], ["id", "Vector_7", "d", "M292.12 152.2C294.937 152.2 297.22 149.917 297.22 147.1C297.22 144.283 294.937 142 292.12 142C289.303 142 287.02 144.283 287.02 147.1C287.02 149.917 289.303 152.2 292.12 152.2Z", "fill", "white"], ["id", "Vector_8", "d", "M151.95 492.17H147.41V487.63H145.56V492.17H141.02V494.02H145.56V498.55H147.41V494.02H151.95V492.17Z", "fill", "white"], ["id", "Vector_9", "d", "M265.95 490.17H261.41V485.63H259.56V490.17H255.02V492.02H259.56V496.55H261.41V492.02H265.95V490.17Z", "fill", "white"], ["id", "Vector_10", "d", "M428.95 582.17H424.41V577.63H422.56V582.17H418.02V584.02H422.56V588.55H424.41V584.02H428.95V582.17Z", "fill", "white"], ["id", "Vector_11", "d", "M776.98 344.67H774.91V342.6H774.07V344.67H772V345.51H774.07V347.58H774.91V345.51H776.98V344.67Z", "fill", "white"], ["id", "Vector_12", "d", "M68.98 422.67H66.91V420.6H66.07V422.67H64V423.51H66.07V425.58H66.91V423.51H68.98V422.67Z", "fill", "white"], ["id", "Vector_13", "d", "M153.98 592.67H151.91V590.6H151.07V592.67H149V593.51H151.07V595.58H151.91V593.51H153.98V592.67Z", "fill", "white"], ["id", "Vector_14", "d", "M297.97 357.71H295.9V355.64H295.06V357.71H292.99V358.55H295.06V360.62H295.9V358.55H297.97V357.71Z", "fill", "white"], ["id", "Vector_15", "d", "M321.98 268.67H319.91V266.6H319.07V268.67H317V269.51H319.07V271.58H319.91V269.51H321.98V268.67Z", "fill", "white"], ["id", "Vector_16", "d", "M956.9 333.07C957.916 333.07 958.74 332.246 958.74 331.23C958.74 330.214 957.916 329.39 956.9 329.39C955.884 329.39 955.06 330.214 955.06 331.23C955.06 332.246 955.884 333.07 956.9 333.07Z", "fill", "white"], ["id", "rocket"], ["id", "Vector_17", "d", "M635.46 400H466V406.78H635.46V400Z", "fill", "#535461"], ["id", "body-rocket"], ["id", "Vector_18", "d", "M482.581 674.368H458.851L463.091 645.558H478.341L482.581 674.368Z", "fill", "#535461"], ["id", "Vector_19", "d", "M685.931 674.368H662.211L666.441 645.558H681.701L685.931 674.368Z", "fill", "#535461"], ["id", "Group", "opacity", "0.1"], ["id", "Vector_20", "opacity", "0.1", "d", "M665.261 656.998H682.881L681.701 648.948H666.441L665.261 656.998Z", "fill", "black"], ["id", "Vector_21", "d", "M559.681 674.368H535.961L540.191 645.558H555.451L559.681 674.368Z", "fill", "#535461"], ["id", "Vector_22", "d", "M607.981 674.368H584.261L588.491 645.558H603.741L607.981 674.368Z", "fill", "#535461"], ["id", "Group_2", "opacity", "0.1"], ["id", "Vector_23", "opacity", "0.1", "d", "M587.311 656.998H604.931L603.741 648.948H588.491L587.311 656.998Z", "fill", "black"], ["id", "Vector_24", "d", "M677.861 300.724L677.86 300.724L677.869 300.733C681.479 304.531 686.193 310.849 691.386 320.975C702.335 342.647 707.995 366.605 707.901 390.887V390.888V652.328H633.901L633.901 391.988L633.901 391.986C633.785 367.014 639.733 342.386 651.234 320.22C655.114 312.85 659.549 305.944 664.436 300.73L664.436 300.73L664.442 300.724C665.29 299.787 666.326 299.038 667.481 298.525C668.637 298.012 669.887 297.747 671.151 297.747C672.415 297.747 673.666 298.012 674.821 298.525C675.977 299.038 677.012 299.787 677.861 300.724Z", "fill", "#E0E0E0", "stroke", "black"], ["id", "Vector_25", "d", "M463.524 300.733L463.524 300.733L463.532 300.724C464.38 299.787 465.416 299.038 466.571 298.525C467.727 298.012 468.977 297.747 470.241 297.747C471.505 297.747 472.755 298.012 473.911 298.525C475.067 299.038 476.102 299.787 476.95 300.724L476.95 300.724L476.957 300.731C481.853 305.944 486.278 312.85 490.168 320.22C501.665 342.388 507.612 367.014 507.501 391.986V391.988V652.328H433.501L433.501 390.888L433.501 390.887C433.408 366.605 439.067 342.647 450.017 320.975C455.2 310.849 459.913 304.531 463.524 300.733Z", "fill", "#E0E0E0", "stroke", "black"], ["id", "Vector_26", "d", "M490.201 396.448L508.001 396.538V418.478H490.201V396.448Z", "fill", "#535461"], ["id", "Vector_27", "d", "M633.401 396.448L651.191 396.538V418.478H633.401V396.448Z", "fill", "#535461"], ["id", "Group_3", "opacity", "0.1"], ["id", "Vector_28", "opacity", "0.1", "d", "M490.611 319.648C486.711 312.258 482.261 305.308 477.321 300.048C475.926 298.502 474.062 297.456 472.016 297.071C469.969 296.686 467.852 296.984 465.991 297.918C467.063 298.453 468.032 299.175 468.851 300.048C473.781 305.308 478.241 312.258 482.131 319.648C493.671 341.887 499.638 366.595 499.521 391.648V652.468H508.001V391.658C508.115 366.602 502.147 341.892 490.611 319.648V319.648Z", "fill", "black"], ["id", "Group_4", "opacity", "0.1"], ["id", "Vector_29", "opacity", "0.1", "d", "M657.571 320.368C661.461 312.978 665.921 306.028 670.851 300.768C671.773 299.772 672.889 298.976 674.131 298.428C672.298 297.626 670.26 297.421 668.304 297.841C666.348 298.261 664.573 299.285 663.231 300.768C658.291 306.028 653.831 312.978 649.941 320.368C638.407 342.609 632.44 367.315 632.551 392.368V653.228H640.181V392.388C640.061 367.328 646.029 342.613 657.571 320.368V320.368Z", "fill", "black"], ["id", "Vector_30", "d", "M471.041 738.768H470.391C467.331 738.768 464.395 737.553 462.231 735.388C460.067 733.224 458.851 730.289 458.851 727.228V674.368H482.581V727.228C482.581 730.289 481.365 733.224 479.201 735.388C477.037 737.553 474.102 738.768 471.041 738.768Z", "fill", "url(#paint0_linear)"], ["id", "Vector_31", "d", "M548.371 738.518H547.721C544.661 738.518 541.725 737.303 539.561 735.138C537.397 732.974 536.181 730.039 536.181 726.978V674.118H559.911V726.978C559.911 730.039 558.695 732.974 556.531 735.138C554.367 737.303 551.432 738.518 548.371 738.518Z", "fill", "url(#paint1_linear)"], ["id", "Vector_32", "d", "M597.371 738.518H596.721C593.661 738.518 590.725 737.303 588.561 735.138C586.397 732.974 585.181 730.039 585.181 726.978V674.118H608.911V726.978C608.911 730.039 607.695 732.974 605.531 735.138C603.367 737.303 600.432 738.518 597.371 738.518Z", "fill", "url(#paint2_linear)"], ["id", "Vector_33", "d", "M674.371 738.518H673.721C670.661 738.518 667.725 737.303 665.561 735.138C663.397 732.974 662.181 730.039 662.181 726.978V674.118H685.911V726.978C685.911 730.039 684.695 732.974 682.531 735.138C680.367 737.303 677.432 738.518 674.371 738.518Z", "fill", "url(#paint3_linear)"], ["id", "Vector_34", "d", "M578.51 96.4834L578.52 96.4957L578.531 96.5076C583.685 102.221 590.434 111.588 597.797 126.726L597.798 126.73C613.465 158.638 621.544 194.732 621.655 231.32L622.93 650.608L517.93 650.927L516.661 233.319C516.547 195.664 524.762 158.515 541.048 125.774C546.594 114.716 552.917 104.371 559.813 96.561L559.822 96.5507L559.831 96.5402C560.972 95.1742 562.398 94.0744 564.009 93.3179C565.62 92.5615 567.377 92.1667 569.157 92.1613C570.937 92.1559 572.697 92.54 574.312 93.2866C575.928 94.0333 577.361 95.1244 578.51 96.4834Z", "fill", "#EEEEEE", "stroke", "black", "stroke-width", "2"], ["id", "Vector_35", "d", "M585.811 142.368H551.971C545.896 142.368 540.971 147.293 540.971 153.368V156.958C540.971 163.034 545.896 167.958 551.971 167.958H585.811C591.886 167.958 596.811 163.034 596.811 156.958V153.368C596.811 147.293 591.886 142.368 585.811 142.368Z", "fill", "#535461"], ["id", "Vector_36", "d", "M433.431 396.448L451.231 396.538V418.478H433.431V396.448Z", "fill", "#535461"], ["id", "Vector_37", "d", "M690.171 396.448L707.961 396.538V418.478H690.171V396.448Z", "fill", "#535461"], ["id", "filter0_d", "x", "0", "y", "0", "width", "1123", "height", "837", "filterUnits", "userSpaceOnUse", "color-interpolation-filters", "sRGB"], ["flood-opacity", "0", "result", "BackgroundImageFix"], ["in", "SourceAlpha", "type", "matrix", "values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"], ["dy", "4"], ["stdDeviation", "15"], ["type", "matrix", "values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.7 0"], ["mode", "normal", "in2", "BackgroundImageFix", "result", "effect1_dropShadow"], ["mode", "normal", "in", "SourceGraphic", "in2", "effect1_dropShadow", "result", "shape"], ["id", "paint0_linear", "x1", "470.721", "y1", "674.368", "x2", "470.721", "y2", "738.768", "gradientUnits", "userSpaceOnUse"], ["stop-color", "#E0E0E0"], ["offset", "0.31", "stop-color", "#FCCC63"], ["offset", "0.77", "stop-color", "#F55F44"], ["id", "paint1_linear", "x1", "548.051", "y1", "674.118", "x2", "548.051", "y2", "738.518", "gradientUnits", "userSpaceOnUse"], ["id", "paint2_linear", "x1", "597.051", "y1", "674.118", "x2", "597.051", "y2", "738.518", "gradientUnits", "userSpaceOnUse"], ["id", "paint3_linear", "x1", "674.051", "y1", "674.118", "x2", "674.051", "y2", "738.518", "gradientUnits", "userSpaceOnUse"], [1, "text"], [3, "click"]], template: function ErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "rect", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "g", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "rect", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "g", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "path", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "path", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "g", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "path", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "g", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "path", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "g", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "path", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "path", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "path", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "g", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "path", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "path", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "path", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "path", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "path", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "g", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "path", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "g", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "path", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "path", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "path", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "path", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "path", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "path", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "path", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "path", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "path", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "filter", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "feFlood", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "feColorMatrix", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "feOffset", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "feGaussianBlur", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "feColorMatrix", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "feBlend", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "feBlend", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "linearGradient", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "stop", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "stop", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "stop", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "linearGradient", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "stop", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "stop", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "stop", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "linearGradient", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "stop", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "stop", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "stop", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "linearGradient", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "stop", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "stop", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "stop", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "404 Error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Couldn't launch :(");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Page Not Found - lets take you ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ErrorComponent_Template_a_click_81_listener() { return ctx.backClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "BACK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Fira+Mono:wght@500&display=swap');\nbody[_ngcontent-%COMP%]{\n  height: 95vh;\n  background: #000000;\n  text-align: center;\n  color: #E0E0E0;\n  font-family: 'Fira Mono', monospace;\n}\nh1[_ngcontent-%COMP%]{\n  font-size: 2.5rem;\n  font-family: 'Permanent Marker', cursive;\n}\ndiv[_ngcontent-%COMP%]{\n  transform-style: preserve-3d;\n}\nsvg[_ngcontent-%COMP%]{\n  width: clamp(300px , 70% , 600px);\n  height: 500px;\n\n}\n#rocket[_ngcontent-%COMP%]{\n\n  transform: translateY(750px);\n\n  animation: launch 2s ease-out forwards;\n}\n@keyframes launch {\n  from {\n    transform: translateY(750px);\n  }\n  to{\n    perspective: 500px;\n    transform: translateY(0px);\n  }\n}\n#stars[_ngcontent-%COMP%] {\n  animation: twinkling 2s linear ;\n}\n@keyframes twinkling {\n\n  from{\n    transform: scale(0);\n  }\n  to{\n    transform: scale(1);\n  }\n}\n.text[_ngcontent-%COMP%]{\n  opacity: 0;\n  animation:appear 1s ease-in forwards;\n  animation-delay: 1.8s;\n}\n@keyframes appear {\n  from{\n    opacity: 0;\n  }\n  to{\n    opacity: 1;\n  }\n}\na[_ngcontent-%COMP%]{\n  color:#F66947;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycm9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0dBQStHO0FBQy9HO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLG1DQUFtQztBQUNyQztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLHdDQUF3QztBQUMxQztBQUNBO0VBQ0UsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSxpQ0FBaUM7RUFDakMsYUFBYTs7QUFFZjtBQUNBOztFQUVFLDRCQUE0Qjs7RUFFNUIsc0NBQXNDO0FBQ3hDO0FBRUE7RUFDRTtJQUNFLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLDBCQUEwQjtFQUM1QjtBQUNGO0FBQ0E7RUFDRSwrQkFBK0I7QUFDakM7QUFDQTs7RUFFRTtJQUNFLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCO0FBQ0Y7QUFDQTtFQUNFLFVBQVU7RUFDVixvQ0FBb0M7RUFDcEMscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7QUFDQTtFQUNFLGFBQWE7RUFDYixxQkFBcUI7QUFDdkIiLCJmaWxlIjoiZXJyb3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBlcm1hbmVudCtNYXJrZXImZmFtaWx5PUZpcmErTW9ubzp3Z2h0QDUwMCZkaXNwbGF5PXN3YXAnKTtcbmJvZHl7XG4gIGhlaWdodDogOTV2aDtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI0UwRTBFMDtcbiAgZm9udC1mYW1pbHk6ICdGaXJhIE1vbm8nLCBtb25vc3BhY2U7XG59XG5oMXtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIGZvbnQtZmFtaWx5OiAnUGVybWFuZW50IE1hcmtlcicsIGN1cnNpdmU7XG59XG5kaXZ7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG59XG5zdmd7XG4gIHdpZHRoOiBjbGFtcCgzMDBweCAsIDcwJSAsIDYwMHB4KTtcbiAgaGVpZ2h0OiA1MDBweDtcblxufVxuI3JvY2tldHtcblxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNzUwcHgpO1xuXG4gIGFuaW1hdGlvbjogbGF1bmNoIDJzIGVhc2Utb3V0IGZvcndhcmRzO1xufVxuXG5Aa2V5ZnJhbWVzIGxhdW5jaCB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg3NTBweCk7XG4gIH1cbiAgdG97XG4gICAgcGVyc3BlY3RpdmU6IDUwMHB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICB9XG59XG4jc3RhcnMge1xuICBhbmltYXRpb246IHR3aW5rbGluZyAycyBsaW5lYXIgO1xufVxuQGtleWZyYW1lcyB0d2lua2xpbmcge1xuXG4gIGZyb217XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuICB0b3tcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG4udGV4dHtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOmFwcGVhciAxcyBlYXNlLWluIGZvcndhcmRzO1xuICBhbmltYXRpb24tZGVsYXk6IDEuOHM7XG59XG5Aa2V5ZnJhbWVzIGFwcGVhciB7XG4gIGZyb217XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0b3tcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5he1xuICBjb2xvcjojRjY2OTQ3O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4iXX0= */"] });


/***/ }),

/***/ 7646:
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 4, vars: 0, consts: [["id", "footer"], [1, "center"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u00A9 Jose Agraz - joseagraz29@gmail.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 7899:
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../home/home.component */ 9242);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3252);



const _c0 = function () { return ["/home"]; };
const _c1 = function () { return ["active"]; };
const _c2 = function () { return ["/login"]; };
class HeaderComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    logout() {
        localStorage.removeItem('access_token');
        localStorage.clear();
        window.location.replace("");
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent])], decls: 17, vars: 8, consts: [["id", "header"], [1, "center"], ["id", "logo"], ["src", "assets/images/angular.svg", "alt", "Logotipo", 1, "app-logo"], ["id", "brand"], ["id", "menu"], [3, "routerLink", "routerLinkActive"], [3, "routerLink", "routerLinkActive", "click"], [1, "clearfix"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Test");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Angular ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "nav", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_14_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c0))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c2))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c1));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 9242:
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _services_articles_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/articles.service */ 2265);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);



class HomeComponent {
    constructor(_articleService) {
        this._articleService = _articleService;
        this.articles = [];
        this.title = 'HN Feed';
        this.sub_title = 'We <3 hacker news!';
    }
    ngOnInit() {
        this.getArticles();
    }
    getArticles() {
        this._articleService.getArticles().subscribe((resp) => {
            if (resp.data.getArticle) {
                this.articles = resp.data.getArticle;
                console.log(this.articles);
            }
        }, error => {
            console.log(error);
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_articles_service__WEBPACK_IMPORTED_MODULE_0__.ArticleService)); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_services_articles_service__WEBPACK_IMPORTED_MODULE_0__.ArticleService])], decls: 10, vars: 3, consts: [[1, "center"], ["id", "content"], [1, "subheader"], [3, "articles"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "app-articles", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.sub_title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("articles", ctx.articles);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 927:
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/authentication.service */ 9270);
/* harmony import */ var _models_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/login */ 8321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8346);






class LoginComponent {
    constructor(_authenticationService, router) {
        this._authenticationService = _authenticationService;
        this.router = router;
        this.access_token = '';
        this.login = new _models_login__WEBPACK_IMPORTED_MODULE_1__.Login('', '');
    }
    ngOnInit() { }
    onSubmit() {
        this.authenticate(this.login.username, this.login.password);
    }
    authenticate(username, password) {
        this._authenticationService.login(username, password).subscribe((resp) => {
            if (resp.data.authenticateUser) {
                this.access_token = resp.data.authenticateUser.access_token;
                if (this.access_token != '') {
                    localStorage.setItem('access_token', this.access_token);
                    this.router.navigate(['/home']);
                }
            }
        }, error => {
            console.log(error);
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_services_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService])], decls: 17, vars: 2, consts: [["id", "brand"], [1, "mid-form", 3, "ngSubmit"], ["userForm", "ngForm"], [1, "imgcontainer"], ["src", "../../../assets/images/user_icon.png", "alt", "Avatar", 1, "avatar"], [1, "container"], ["type", "text", "placeholder", "Enter Username", "name", "username", "required", "", 3, "ngModel", "ngModelChange"], ["username", "ngModel"], ["type", "password", "placeholder", "Enter Password", "name", "password", "required", "", 3, "ngModel", "ngModelChange"], ["passwordd", "ngModel"], ["type", "submit", 1, "btn-login"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Test");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Angular\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_6_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_11_listener($event) { return ctx.login.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_13_listener($event) { return ctx.login.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.login.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.login.password);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 9803:
/*!***********************************!*\
  !*** ./src/app/graphql.module.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createApollo": () => (/* binding */ createApollo),
/* harmony export */   "GraphQLModule": () => (/* binding */ GraphQLModule)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-angular */ 8336);
/* harmony import */ var apollo_angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! apollo-angular/http */ 2583);
/* harmony import */ var _apollo_client_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client/core */ 162);
/* harmony import */ var _apollo_client_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client/core */ 935);
/* harmony import */ var _apollo_client_link_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client/link/context */ 6995);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);






const uri = 'http://localhost:4000/graphql';
function createApollo(httpLink) {
    const basic = (0,_apollo_client_link_context__WEBPACK_IMPORTED_MODULE_0__.setContext)((operation, context) => ({
        headers: {
            Accept: 'charset=utf-8'
        }
    }));
    const auth = (0,_apollo_client_link_context__WEBPACK_IMPORTED_MODULE_0__.setContext)((operation, context) => {
        const token = localStorage.getItem('access_token');
        if (token === null) {
            return {};
        }
        else {
            return {
                headers: {
                    authorization: `bearer ${token}`
                }
            };
        }
    });
    const link = _apollo_client_core__WEBPACK_IMPORTED_MODULE_1__.ApolloLink.from([basic, auth, httpLink.create({ uri })]);
    const cache = new _apollo_client_core__WEBPACK_IMPORTED_MODULE_2__.InMemoryCache();
    return {
        link,
        cache
    };
}
class GraphQLModule {
}
GraphQLModule.ɵfac = function GraphQLModule_Factory(t) { return new (t || GraphQLModule)(); };
GraphQLModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: GraphQLModule });
GraphQLModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [{
            provide: apollo_angular__WEBPACK_IMPORTED_MODULE_4__.APOLLO_OPTIONS,
            useFactory: createApollo,
            deps: [apollo_angular_http__WEBPACK_IMPORTED_MODULE_5__.HttpLink]
        }], imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](GraphQLModule, { exports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule] }); })();


/***/ }),

/***/ 1103:
/*!***********************************************!*\
  !*** ./src/app/guard/authentication.guard.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationGuard": () => (/* binding */ AuthenticationGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/authentication.service */ 9270);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3252);



class AuthenticationGuard {
    constructor(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    canActivate(route, state) {
        const isLogged = this.authenticationService.isLogged;
        if (isLogged) {
            return true;
        }
        else {
            this.router.navigate(['login']);
            return false;
        }
    }
}
AuthenticationGuard.ɵfac = function AuthenticationGuard_Factory(t) { return new (t || AuthenticationGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
AuthenticationGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthenticationGuard, factory: AuthenticationGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8321:
/*!*********************************!*\
  !*** ./src/app/models/login.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Login": () => (/* binding */ Login)
/* harmony export */ });
class Login {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}


/***/ }),

/***/ 1096:
/*!*******************************************!*\
  !*** ./src/app/pipes/format.date.pipe.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormatDatePipe": () => (/* binding */ FormatDatePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 8267);


class FormatDatePipe {
    constructor(datePipe) {
        this.datePipe = datePipe;
    }
    transform(value) {
        const today = new Date;
        const yesterday = new Date;
        const data = new Date(value);
        yesterday.setDate(yesterday.getDate() - 1);
        if (today.toLocaleDateString().valueOf() == data.toLocaleDateString().valueOf()) {
            return this.datePipe.transform(value, 'shortTime');
        }
        else if (yesterday.toLocaleDateString().valueOf() == data.toLocaleDateString().valueOf()) {
            return 'Yesterday';
        }
        else {
            return this.datePipe.transform(value, 'MMM d');
        }
    }
}
FormatDatePipe.ɵfac = function FormatDatePipe_Factory(t) { return new (t || FormatDatePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DatePipe, 16)); };
FormatDatePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "formatDate", type: FormatDatePipe, pure: true });


/***/ }),

/***/ 2265:
/*!**********************************************!*\
  !*** ./src/app/services/articles.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticleService": () => (/* binding */ ArticleService)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-angular */ 248);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-angular */ 8336);



const ARTICLES = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query getArticle {
      getArticle {
        _id
        story_title
        title
        story_url
        author
        created_at
      }
    }
`;
const REMOVE = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
  mutation removeArticle($input: RemoveInput!) {
    removeArticle(input: $input) {
      _id
      story_title
      title
      story_url
      author
      created_at
    }
  }
`;
class ArticleService {
    constructor(apollo) {
        this.apollo = apollo;
    }
    getArticles() {
        return this.apollo.watchQuery({
            query: ARTICLES,
        }).valueChanges;
    }
    ;
    removeArticle(_id) {
        return this.apollo.mutate({
            mutation: REMOVE,
            variables: {
                input: {
                    _id: _id,
                },
            },
        });
    }
    ;
}
ArticleService.ɵfac = function ArticleService_Factory(t) { return new (t || ArticleService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_2__.Apollo)); };
ArticleService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ArticleService, factory: ArticleService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9270:
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationService": () => (/* binding */ AuthenticationService)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-angular */ 248);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-angular */ 8336);



const LOGIN = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
  mutation authenticateUser($input: AuthInput!) {
    authenticateUser(input: $input) {
      access_token
    }
  }
`;
class AuthenticationService {
    constructor(apollo) {
        this.apollo = apollo;
    }
    login(username, password) {
        return this.apollo.mutate({
            mutation: LOGIN,
            variables: {
                input: {
                    username: username,
                    password: password,
                },
            },
        });
    }
    get isLogged() {
        return localStorage.getItem('access_token');
    }
}
AuthenticationService.ɵfac = function AuthenticationService_Factory(t) { return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_2__.Apollo)); };
AuthenticationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthenticationService, factory: AuthenticationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8260:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 271:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 4750);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 8260);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 6700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 2139,
	"./af.js": 2139,
	"./ar": 2600,
	"./ar-dz": 1001,
	"./ar-dz.js": 1001,
	"./ar-kw": 9842,
	"./ar-kw.js": 9842,
	"./ar-ly": 9826,
	"./ar-ly.js": 9826,
	"./ar-ma": 5452,
	"./ar-ma.js": 5452,
	"./ar-sa": 1802,
	"./ar-sa.js": 1802,
	"./ar-tn": 4094,
	"./ar-tn.js": 4094,
	"./ar.js": 2600,
	"./az": 6375,
	"./az.js": 6375,
	"./be": 2086,
	"./be.js": 2086,
	"./bg": 5236,
	"./bg.js": 5236,
	"./bm": 1704,
	"./bm.js": 1704,
	"./bn": 4506,
	"./bn-bd": 4466,
	"./bn-bd.js": 4466,
	"./bn.js": 4506,
	"./bo": 7891,
	"./bo.js": 7891,
	"./br": 3348,
	"./br.js": 3348,
	"./bs": 4848,
	"./bs.js": 4848,
	"./ca": 5928,
	"./ca.js": 5928,
	"./cs": 1839,
	"./cs.js": 1839,
	"./cv": 9151,
	"./cv.js": 9151,
	"./cy": 5761,
	"./cy.js": 5761,
	"./da": 6686,
	"./da.js": 6686,
	"./de": 5177,
	"./de-at": 2311,
	"./de-at.js": 2311,
	"./de-ch": 4407,
	"./de-ch.js": 4407,
	"./de.js": 5177,
	"./dv": 9729,
	"./dv.js": 9729,
	"./el": 430,
	"./el.js": 430,
	"./en-au": 8430,
	"./en-au.js": 8430,
	"./en-ca": 1139,
	"./en-ca.js": 1139,
	"./en-gb": 6747,
	"./en-gb.js": 6747,
	"./en-ie": 9466,
	"./en-ie.js": 9466,
	"./en-il": 2121,
	"./en-il.js": 2121,
	"./en-in": 1167,
	"./en-in.js": 1167,
	"./en-nz": 2030,
	"./en-nz.js": 2030,
	"./en-sg": 3646,
	"./en-sg.js": 3646,
	"./eo": 3126,
	"./eo.js": 3126,
	"./es": 8819,
	"./es-do": 9293,
	"./es-do.js": 9293,
	"./es-mx": 5304,
	"./es-mx.js": 5304,
	"./es-us": 6068,
	"./es-us.js": 6068,
	"./es.js": 8819,
	"./et": 3291,
	"./et.js": 3291,
	"./eu": 1400,
	"./eu.js": 1400,
	"./fa": 43,
	"./fa.js": 43,
	"./fi": 6138,
	"./fi.js": 6138,
	"./fil": 1466,
	"./fil.js": 1466,
	"./fo": 6803,
	"./fo.js": 6803,
	"./fr": 5523,
	"./fr-ca": 697,
	"./fr-ca.js": 697,
	"./fr-ch": 9001,
	"./fr-ch.js": 9001,
	"./fr.js": 5523,
	"./fy": 1116,
	"./fy.js": 1116,
	"./ga": 6151,
	"./ga.js": 6151,
	"./gd": 3094,
	"./gd.js": 3094,
	"./gl": 1279,
	"./gl.js": 1279,
	"./gom-deva": 4458,
	"./gom-deva.js": 4458,
	"./gom-latn": 6320,
	"./gom-latn.js": 6320,
	"./gu": 8658,
	"./gu.js": 8658,
	"./he": 2153,
	"./he.js": 2153,
	"./hi": 8732,
	"./hi.js": 8732,
	"./hr": 4960,
	"./hr.js": 4960,
	"./hu": 2623,
	"./hu.js": 2623,
	"./hy-am": 1862,
	"./hy-am.js": 1862,
	"./id": 1068,
	"./id.js": 1068,
	"./is": 1260,
	"./is.js": 1260,
	"./it": 1007,
	"./it-ch": 8063,
	"./it-ch.js": 8063,
	"./it.js": 1007,
	"./ja": 6854,
	"./ja.js": 6854,
	"./jv": 2390,
	"./jv.js": 2390,
	"./ka": 5958,
	"./ka.js": 5958,
	"./kk": 7216,
	"./kk.js": 7216,
	"./km": 1061,
	"./km.js": 1061,
	"./kn": 4060,
	"./kn.js": 4060,
	"./ko": 5216,
	"./ko.js": 5216,
	"./ku": 894,
	"./ku.js": 894,
	"./ky": 609,
	"./ky.js": 609,
	"./lb": 3591,
	"./lb.js": 3591,
	"./lo": 8381,
	"./lo.js": 8381,
	"./lt": 6118,
	"./lt.js": 6118,
	"./lv": 7889,
	"./lv.js": 7889,
	"./me": 4274,
	"./me.js": 4274,
	"./mi": 9226,
	"./mi.js": 9226,
	"./mk": 528,
	"./mk.js": 528,
	"./ml": 7938,
	"./ml.js": 7938,
	"./mn": 5456,
	"./mn.js": 5456,
	"./mr": 4393,
	"./mr.js": 4393,
	"./ms": 3647,
	"./ms-my": 3049,
	"./ms-my.js": 3049,
	"./ms.js": 3647,
	"./mt": 6097,
	"./mt.js": 6097,
	"./my": 6277,
	"./my.js": 6277,
	"./nb": 7245,
	"./nb.js": 7245,
	"./ne": 3988,
	"./ne.js": 3988,
	"./nl": 2557,
	"./nl-be": 478,
	"./nl-be.js": 478,
	"./nl.js": 2557,
	"./nn": 9046,
	"./nn.js": 9046,
	"./oc-lnc": 3131,
	"./oc-lnc.js": 3131,
	"./pa-in": 1731,
	"./pa-in.js": 1731,
	"./pl": 8409,
	"./pl.js": 8409,
	"./pt": 1178,
	"./pt-br": 6558,
	"./pt-br.js": 6558,
	"./pt.js": 1178,
	"./ro": 4138,
	"./ro.js": 4138,
	"./ru": 3380,
	"./ru.js": 3380,
	"./sd": 2889,
	"./sd.js": 2889,
	"./se": 2774,
	"./se.js": 2774,
	"./si": 3776,
	"./si.js": 3776,
	"./sk": 9597,
	"./sk.js": 9597,
	"./sl": 3871,
	"./sl.js": 3871,
	"./sq": 4228,
	"./sq.js": 4228,
	"./sr": 774,
	"./sr-cyrl": 1928,
	"./sr-cyrl.js": 1928,
	"./sr.js": 774,
	"./ss": 3176,
	"./ss.js": 3176,
	"./sv": 2422,
	"./sv.js": 2422,
	"./sw": 2530,
	"./sw.js": 2530,
	"./ta": 5731,
	"./ta.js": 5731,
	"./te": 8025,
	"./te.js": 8025,
	"./tet": 3934,
	"./tet.js": 3934,
	"./tg": 9958,
	"./tg.js": 9958,
	"./th": 4251,
	"./th.js": 4251,
	"./tk": 5494,
	"./tk.js": 5494,
	"./tl-ph": 8568,
	"./tl-ph.js": 8568,
	"./tlh": 3158,
	"./tlh.js": 3158,
	"./tr": 9574,
	"./tr.js": 9574,
	"./tzl": 4311,
	"./tzl.js": 4311,
	"./tzm": 9990,
	"./tzm-latn": 2380,
	"./tzm-latn.js": 2380,
	"./tzm.js": 9990,
	"./ug-cn": 2356,
	"./ug-cn.js": 2356,
	"./uk": 4934,
	"./uk.js": 4934,
	"./ur": 4515,
	"./ur.js": 4515,
	"./uz": 58,
	"./uz-latn": 1875,
	"./uz-latn.js": 1875,
	"./uz.js": 58,
	"./vi": 3325,
	"./vi.js": 3325,
	"./x-pseudo": 9208,
	"./x-pseudo.js": 9208,
	"./yo": 8742,
	"./yo.js": 8742,
	"./zh-cn": 2378,
	"./zh-cn.js": 2378,
	"./zh-hk": 4569,
	"./zh-hk.js": 4569,
	"./zh-mo": 4671,
	"./zh-mo.js": 4671,
	"./zh-tw": 259,
	"./zh-tw.js": 259
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 6700;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(271)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map