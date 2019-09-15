var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"routes","filename":"src/app/admin/admin-routing.module.ts","module":"AdminRoutingModule","children":[{"path":"","component":"AdminComponent","canActivate":["AdminguardService"]}],"kind":"module"},{"name":"routes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"","redirectTo":"/home","pathMatch":"full"},{"path":"home","loadChildren":"./home/home.module#HomeModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/home/home-routing.module.ts","module":"HomeRoutingModule","children":[{"path":"","component":"HomeComponent"}],"kind":"module"}],"module":"HomeModule"}]},{"path":"movie","loadChildren":"./movie/movie.module#MovieModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/movie/movie-routing.module.ts","module":"MovieRoutingModule","children":[{"path":":category/:id","component":"MovieComponent"}],"kind":"module"}],"module":"MovieModule"}]},{"path":"search","loadChildren":"./search/search.module#SearchModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/search/search-routing.module.ts","module":"SearchRoutingModule","children":[{"path":"","component":"SearchComponent"}],"kind":"module"}],"module":"SearchModule"}]},{"path":"profile","component":"ProfileComponent","canActivate":["AuthGuard"]},{"path":"admin","loadChildren":"./admin/admin.module#AdminModule"},{"path":"payment/:movieTitle/:theatre/:time/:seat/:total","component":"PaymentBookingComponent","canActivate":["AuthGuard"]},{"path":"**","redirectTo":"/home"}],"kind":"module"}]}
