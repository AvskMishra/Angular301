'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">book-my-movie documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AdminModule.html" data-type="entity-link">AdminModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AdminModule-9d5081091fb5a4705125b8d80f680720"' : 'data-target="#xs-components-links-module-AdminModule-9d5081091fb5a4705125b8d80f680720"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminModule-9d5081091fb5a4705125b8d80f680720"' :
                                            'id="xs-components-links-module-AdminModule-9d5081091fb5a4705125b8d80f680720"' }>
                                            <li class="link">
                                                <a href="components/AddTheaterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AddTheaterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AdminComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdminComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChangeShowComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChangeShowComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AdminModule-9d5081091fb5a4705125b8d80f680720"' : 'data-target="#xs-injectables-links-module-AdminModule-9d5081091fb5a4705125b8d80f680720"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AdminModule-9d5081091fb5a4705125b8d80f680720"' :
                                        'id="xs-injectables-links-module-AdminModule-9d5081091fb5a4705125b8d80f680720"' }>
                                        <li class="link">
                                            <a href="injectables/AdminService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AdminService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdminRoutingModule.html" data-type="entity-link">AdminRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-8f1d276799daffeff7df6992bddcd8c8"' : 'data-target="#xs-components-links-module-AppModule-8f1d276799daffeff7df6992bddcd8c8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-8f1d276799daffeff7df6992bddcd8c8"' :
                                            'id="xs-components-links-module-AppModule-8f1d276799daffeff7df6992bddcd8c8"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfileComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProfileComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link">CoreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CoreModule-8ed4fbaacd38fe6faf8f58b56f46cb5c"' : 'data-target="#xs-components-links-module-CoreModule-8ed4fbaacd38fe6faf8f58b56f46cb5c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CoreModule-8ed4fbaacd38fe6faf8f58b56f46cb5c"' :
                                            'id="xs-components-links-module-CoreModule-8ed4fbaacd38fe6faf8f58b56f46cb5c"' }>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ShellComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ShellComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CoreModule-8ed4fbaacd38fe6faf8f58b56f46cb5c"' : 'data-target="#xs-injectables-links-module-CoreModule-8ed4fbaacd38fe6faf8f58b56f46cb5c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CoreModule-8ed4fbaacd38fe6faf8f58b56f46cb5c"' :
                                        'id="xs-injectables-links-module-CoreModule-8ed4fbaacd38fe6faf8f58b56f46cb5c"' }>
                                        <li class="link">
                                            <a href="injectables/SignInService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>SignInService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserDetailService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>UserDetailService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link">HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomeModule-497f129a24502194913f9c25c39bee6a"' : 'data-target="#xs-components-links-module-HomeModule-497f129a24502194913f9c25c39bee6a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-497f129a24502194913f9c25c39bee6a"' :
                                            'id="xs-components-links-module-HomeModule-497f129a24502194913f9c25c39bee6a"' }>
                                            <li class="link">
                                                <a href="components/HomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomePageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomePageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MovieCardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MovieCardComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeRoutingModule.html" data-type="entity-link">HomeRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MaterialModule.html" data-type="entity-link">MaterialModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MovieModule.html" data-type="entity-link">MovieModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MovieModule-99e4f36b6d46babc7e38d3f75845021f"' : 'data-target="#xs-components-links-module-MovieModule-99e4f36b6d46babc7e38d3f75845021f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MovieModule-99e4f36b6d46babc7e38d3f75845021f"' :
                                            'id="xs-components-links-module-MovieModule-99e4f36b6d46babc7e38d3f75845021f"' }>
                                            <li class="link">
                                                <a href="components/MovieComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MovieComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MovieDescriptionComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MovieDescriptionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MoviePageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MoviePageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SocialFeedsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SocialFeedsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-MovieModule-99e4f36b6d46babc7e38d3f75845021f"' : 'data-target="#xs-injectables-links-module-MovieModule-99e4f36b6d46babc7e38d3f75845021f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MovieModule-99e4f36b6d46babc7e38d3f75845021f"' :
                                        'id="xs-injectables-links-module-MovieModule-99e4f36b6d46babc7e38d3f75845021f"' }>
                                        <li class="link">
                                            <a href="injectables/MovieService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>MovieService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MovieRoutingModule.html" data-type="entity-link">MovieRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SearchModule.html" data-type="entity-link">SearchModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SearchModule-71747f7ea22a2923b36178f8bdb78f5f"' : 'data-target="#xs-components-links-module-SearchModule-71747f7ea22a2923b36178f8bdb78f5f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SearchModule-71747f7ea22a2923b36178f8bdb78f5f"' :
                                            'id="xs-components-links-module-SearchModule-71747f7ea22a2923b36178f8bdb78f5f"' }>
                                            <li class="link">
                                                <a href="components/SDialogCardsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SDialogCardsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SDialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SearchComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SearchRoutingModule.html" data-type="entity-link">SearchRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-12a6b5c4dcfb8ba68d01d4677fda8a33"' : 'data-target="#xs-components-links-module-SharedModule-12a6b5c4dcfb8ba68d01d4677fda8a33"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-12a6b5c4dcfb8ba68d01d4677fda8a33"' :
                                            'id="xs-components-links-module-SharedModule-12a6b5c4dcfb8ba68d01d4677fda8a33"' }>
                                            <li class="link">
                                                <a href="components/ConfirmationModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ConfirmationModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MovieBookingComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MovieBookingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MovieDropdownsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MovieDropdownsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PaymentBookingComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PaymentBookingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PreBookingComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PreBookingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SeatReservationModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SeatReservationModalComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-SharedModule-12a6b5c4dcfb8ba68d01d4677fda8a33"' : 'data-target="#xs-pipes-links-module-SharedModule-12a6b5c4dcfb8ba68d01d4677fda8a33"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-SharedModule-12a6b5c4dcfb8ba68d01d4677fda8a33"' :
                                            'id="xs-pipes-links-module-SharedModule-12a6b5c4dcfb8ba68d01d4677fda8a33"' }>
                                            <li class="link">
                                                <a href="pipes/HomeFilterPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeFilterPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/SortMoviePipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SortMoviePipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/RemoveUser.html" data-type="entity-link">RemoveUser</a>
                            </li>
                            <li class="link">
                                <a href="classes/SetCastAndCrew.html" data-type="entity-link">SetCastAndCrew</a>
                            </li>
                            <li class="link">
                                <a href="classes/SetNowPlayingMovies.html" data-type="entity-link">SetNowPlayingMovies</a>
                            </li>
                            <li class="link">
                                <a href="classes/SetTheaters.html" data-type="entity-link">SetTheaters</a>
                            </li>
                            <li class="link">
                                <a href="classes/SetUpcomingMovies.html" data-type="entity-link">SetUpcomingMovies</a>
                            </li>
                            <li class="link">
                                <a href="classes/SetUser.html" data-type="entity-link">SetUser</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AdminService.html" data-type="entity-link">AdminService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HomeService.html" data-type="entity-link">HomeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoginService.html" data-type="entity-link">LoginService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MovieListService.html" data-type="entity-link">MovieListService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MovieService.html" data-type="entity-link">MovieService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SearchApiService.html" data-type="entity-link">SearchApiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SearchService.html" data-type="entity-link">SearchService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SegregateMovieService.html" data-type="entity-link">SegregateMovieService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SignInService.html" data-type="entity-link">SignInService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UiService.html" data-type="entity-link">UiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserDetailService.html" data-type="entity-link">UserDetailService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AdminguardService.html" data-type="entity-link">AdminguardService</a>
                            </li>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link">AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Cast.html" data-type="entity-link">Cast</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Crew.html" data-type="entity-link">Crew</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Movie.html" data-type="entity-link">Movie</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Movie-1.html" data-type="entity-link">Movie</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Movie-2.html" data-type="entity-link">Movie</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MoviesState.html" data-type="entity-link">MoviesState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Preferences.html" data-type="entity-link">Preferences</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Ratings.html" data-type="entity-link">Ratings</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/State.html" data-type="entity-link">State</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Theater.html" data-type="entity-link">Theater</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link">User</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserState.html" data-type="entity-link">UserState</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});