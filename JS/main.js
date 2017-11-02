System.register("APIService", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var APIService;
    return {
        setters: [],
        execute: function () {
            APIService = class APIService {
                constructor() {
                    //test local
                    this.url = "http://localhost/courses_typescript/vendor_products/API/";
                }
                // mobile
                // private url: string = "http://192.168.10.52/courses_typescript/vendor_products/API/";
                // design patern singleton
                static getService() {
                    if (!APIService.instance) {
                        APIService.instance = new APIService();
                    }
                    return APIService.instance;
                }
                ;
                getWines() {
                    return new Promise((resolve, reject) => {
                        $.ajax({
                            url: this.url + "wines",
                            dataType: "json",
                            success: function (wines) {
                                resolve(wines);
                            },
                            error: function (wines) {
                                reject(wines);
                            }
                        });
                    });
                }
                getWinesVendorCategory(vendorId, type) {
                    return new Promise((resolve, reject) => {
                        $.ajax({
                            url: this.url + "wines/" + vendorId + "/" + type,
                            dataType: "json",
                            success: function (wines) {
                                resolve(wines);
                            },
                            error: function (wines) {
                                reject(wines);
                            }
                        });
                    });
                }
                getVendor(name, pass) {
                    return new Promise((resolve, reject) => {
                        $.ajax({
                            url: this.url + "vendorLogin/" + name + "/" + pass,
                            dataType: "json",
                            success: function (vendor) {
                                resolve(vendor);
                            },
                            error: function (vendor) {
                                reject(vendor);
                            }
                        });
                    });
                }
            };
            APIService.instance = null;
            exports_1("APIService", APIService);
        }
    };
});
System.register("Wine", [], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var Wine;
    return {
        setters: [],
        execute: function () {
            Wine = class Wine {
                constructor(name, color, year, designation, id, categoryId) {
                    this.id = id;
                    this.name = name;
                    this.color = color;
                    this.year = year;
                    this.designation = designation;
                    this.categoryId = categoryId;
                }
                display($parent, iterator) {
                    let div = '<div class="item ' + this.color + '" id="w' + this.id + '" data-position="' + iterator + '" draggable="true" title="' + this.designation + '" >';
                    div += '<span>' + this.name + '</span></br>';
                    div += '<span>' + this.year + '</span><br />';
                    div += '</div>';
                    $parent.append($(div));
                }
                displayDetail($parent) {
                    let div = '<div id="' + this.id + '" class="vindetail">';
                    div += '<h2>' + this.name + '</h2>';
                    div += '<h3>' + this.year + '</h3>';
                    div += '<p>' + this.designation + '</p>';
                    div += '</div>';
                    $parent.append($(div));
                }
            };
            exports_2("Wine", Wine);
        }
    };
});
System.register("Category", [], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var Category;
    return {
        setters: [],
        execute: function () {
            Category = class Category {
                constructor(id, name) {
                    this.id = id;
                    this.name = name;
                }
                displayNav($parent) {
                    let link = '<a href="#' + this.name + '" class="category-link"><li>' + this.name + '</li></a>';
                    $parent.append($(link));
                }
                disMain($parent) {
                    let div = '<section id="' + this.name + '" class=" page block container ' + this.name + '"  draggable="true"> <h2>' + this.name.toUpperCase() + '</h2></section>';
                    $parent.append($(div));
                }
                dispMenu($parent) {
                    let div = '<a href="#' + this.name + '" class="category-link"><div" class="button ' + this.name + '"> <h2>' + this.name + '</h2></div></a>';
                    $parent.append($(div));
                }
            };
            exports_3("Category", Category);
        }
    };
});
System.register("Vendor", [], function (exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var Vendor;
    return {
        setters: [],
        execute: function () {
            Vendor = class Vendor {
                constructor(name, id, products) {
                    this.id = id;
                    this.name = name;
                    this.products = products;
                }
                displayButtons($parent) {
                    let button = '<button id="v' + this.id + '" class ="vendorButton" >' + this.name.charAt(0).toUpperCase() + this.name.slice(1) + '</button>';
                    this.$dom = $(button);
                    $parent.append(this.$dom);
                }
                displayVendorSpace($parent) {
                    let div = '<div id="vendor-v' + this.id + '" class="container vendor ' + this.name + '">';
                    div += '<h2>' + this.name.charAt(0).toUpperCase() + this.name.slice(1) + '</h2>';
                    div += '<div class="vendorWine">';
                    div += '</div>';
                    div += '</div>';
                    this.$dom = $(div);
                    $parent.append(this.$dom);
                }
            };
            exports_4("Vendor", Vendor);
        }
    };
});
System.register("BddVendors", [], function (exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var BddVendors;
    return {
        setters: [],
        execute: function () {
            exports_5("BddVendors", BddVendors = [
                {
                    id: 1,
                    name: "paul",
                    products: [2, 4, 6, 7]
                },
                {
                    id: 2,
                    name: "pierre",
                    products: [1, 2, 4, 6]
                },
                {
                    id: 3,
                    name: "francois",
                    products: [1, 3, 4, 7]
                },
                {
                    id: 4,
                    name: "fred",
                    products: [1, 3, 5, 6]
                }
            ]);
        }
    };
});
System.register("BddCategory", [], function (exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    var BddCategory;
    return {
        setters: [],
        execute: function () {
            exports_6("BddCategory", BddCategory = [
                {
                    id: 1,
                    name: "red",
                },
                {
                    id: 2,
                    name: "pink"
                },
                {
                    id: 3,
                    name: "white"
                }
            ]);
        }
    };
});
System.register("App", ["Wine", "Category", "BddCategory", "APIService"], function (exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    var Wine_1, Category_1, BddCategory_1, APIService_1, App;
    return {
        setters: [
            function (Wine_1_1) {
                Wine_1 = Wine_1_1;
            },
            function (Category_1_1) {
                Category_1 = Category_1_1;
            },
            function (BddCategory_1_1) {
                BddCategory_1 = BddCategory_1_1;
            },
            function (APIService_1_1) {
                APIService_1 = APIService_1_1;
            }
        ],
        execute: function () {
            App = class App {
                constructor() {
                    // structural elements
                    this.catergory = [];
                    this.wines = [];
                    this.errors = [];
                    this.lastPage = [null];
                    this.vendor = {};
                    // dom elements
                    this.$nav = $("#nav");
                    this.$vendors = $("#vendors");
                    this.$wines = $("#wines");
                    // functions
                    this.initCategory();
                    this.init();
                    // this.initmobile();
                }
                init() {
                    $("#hamb").hide();
                    $("#lastPage").hide();
                    $("section").hide();
                    $("#login").show();
                }
                // initmobile(): void {
                // 	var mobile = [
                // 		/Android/i,
                // 		/webOS/i,
                // 		/iPhone/i,
                // 		/iPad/i,
                // 		/iPod/i,
                // 		/BlackBerry/i,
                // 		/Windows Phone/i
                // 	];
                // 	mobile.forEach(element => {
                // 		if( navigator.userAgent.match( element ) ){
                // 			$( ".page" ).attr( "data-role" , "page" )
                // 		}
                // 	});
                // }
                connection(name, pass) {
                    if (name == null && pass == null) {
                        this.errors.push("Vendeur non renseigné !");
                    }
                    else if ((name == null) !== (pass == null)) {
                        if (name == null) {
                            this.errors.push("Vendeur non renseigné !");
                        }
                        if (pass == null) {
                            this.errors.push("Mot de passe non renseigné !");
                        }
                    }
                    else {
                        let elements = new APIService_1.APIService();
                        let wines = elements.getVendor(name, pass);
                        let success = false;
                        wines
                            .then((data) => {
                            if (data.success == true) {
                                this.vendor = data.data;
                                success = true;
                                this.initVendor();
                                $("#login").hide();
                                $("#hamb").show();
                                $("#lastPage").show();
                                $("#menu-category").show();
                            }
                            else {
                                this.errors.push(data.errors);
                                this.displayError();
                            }
                            // return success;
                        })
                            .catch(function (error) {
                            // console.log(error);
                        });
                    }
                    this.pageGestion($("#menu-category"));
                }
                initVendor() {
                    $("#vendor").html(this.vendor.name);
                }
                initWhine(value) {
                    // this.wine = 
                }
                initCategory() {
                    let iterator = 0;
                    for (let category of BddCategory_1.BddCategory) {
                        let newCategory = new Category_1.Category(category.id, category.name);
                        this.catergory.push(newCategory);
                        newCategory.displayNav($("#nav #nav-category"));
                        newCategory.disMain($("main"));
                        newCategory.dispMenu($("main #menu-category"));
                        iterator++;
                    }
                    var vHeight = 100 / iterator;
                    this.$wines.children().css("height", vHeight + "%");
                }
                getWinesOfVendorAndTypes(vendorId, type, link) {
                    let typeId = this.getCategoryId(type);
                    let elements = new APIService_1.APIService();
                    let wines = elements.getWinesVendorCategory(vendorId, typeId);
                    let that = this;
                    wines
                        .then(function (data) {
                        if (that.wines != null) {
                            that.wines = [];
                        }
                        for (let item of data) {
                            let newWine = new Wine_1.Wine(item.name, item.color, item.year, item.designation, item.id, item.categoryId);
                            newWine.display($("#" + type));
                            that.wines.push(newWine);
                        }
                    })
                        .catch(function (error) {
                    });
                    $(".page").hide();
                    $(link).fadeIn();
                    this.pageGestion($(link));
                }
                getCategory() {
                    return this.catergory;
                }
                getVendorId() {
                    return this.vendor.id;
                }
                getCategoryId(nameCat) {
                    let id = 0;
                    this.catergory.forEach(element => {
                        if (element.name == nameCat) {
                            id = element.id;
                        }
                    });
                    return id;
                }
                displayError() {
                    this.errors.forEach(element => {
                        let p = "<p>" + element + "</p>";
                        $("#errors").append(p);
                    });
                    $("#errors").fadeIn(800, function () {
                        $(this).fadeOut(800, function () {
                            $(this).children().remove();
                        });
                    });
                }
                detail(wineId) {
                    this.wines.forEach(element => {
                        if (wineId == element.id) {
                            let wine = new Wine_1.Wine(element.name, element.color, element.year, element.designation, element.id, element.categoryId);
                            wine.displayDetail($("#detail"));
                            $("#detail").slideDown();
                            $("#" + element.color).hide();
                            this.pageGestion($("#detail"));
                        }
                    });
                }
                pageGestion(page) {
                    if (this.lastPage[0] == null) {
                        this.lastPage.splice(0, 1);
                    }
                    this.lastPage.push(page);
                }
                precedent() {
                    let index = this.lastPage.length;
                    let page = this.lastPage[index - 2];
                    let curentPage = $("section:visible");
                    if (index >= 2) {
                        curentPage.hide();
                        if (curentPage.hasClass("container")) {
                            // console.log("containerback");
                            curentPage.children(".item").remove();
                            curentPage.children(".vindetail").remove();
                        }
                        page.show();
                        if (page == $("#menu-category")) {
                            this.lastPage[0] = null;
                        }
                        else {
                            this.lastPage.splice(index - 1, 1);
                        }
                    }
                }
                precedentMobile(page, swipestart, swipestop) {
                    // console.log(swipestart);
                    // console.log(swipestop);
                    if (swipestart.coords[0] < swipestop.coords[0]) {
                        this.precedent();
                    }
                }
                ;
                quit() {
                    $("#login").show();
                    $("#hamb").hide();
                    $("#menu-category").hide();
                    this.vendor = {};
                    $("#vendor").html("");
                }
            };
            exports_7("App", App);
        }
    };
});
System.register("BddWine", [], function (exports_8, context_8) {
    "use strict";
    var __moduleName = context_8 && context_8.id;
    var BddWine;
    return {
        setters: [],
        execute: function () {
            exports_8("BddWine", BddWine = [
                {
                    id: 1,
                    name: "les marguerites",
                    color: "white",
                    year: 2007,
                    designation: "aop cotes du roussillon",
                    categoryId: 3
                },
                {
                    id: 2,
                    name: 'les lilas',
                    color: "red",
                    year: 2007,
                    designation: "aop cotes du roussillon",
                    categoryId: 1
                },
                {
                    id: 3,
                    name: 'mimosas',
                    color: "pink",
                    year: 2007,
                    designation: "aop cotes du roussillon",
                    categoryId: 2
                },
                {
                    id: 4,
                    name: 'les charues',
                    color: "red",
                    year: 2007,
                    designation: "aop cotes du roussillon",
                    categoryId: 1
                },
                {
                    id: 5,
                    name: 'la rosée du matin',
                    color: "pink",
                    year: 2007,
                    designation: "aop cotes du roussillon",
                    categoryId: 2
                },
                {
                    id: 6,
                    name: 'gris des sables',
                    color: "red",
                    year: 2007,
                    designation: "aop cotes du roussillon",
                    categoryId: 1
                },
                {
                    id: 7,
                    name: 'rivesalte maury',
                    color: "white",
                    year: 2007,
                    designation: "aoc muscat de rivesaltes",
                    categoryId: 3
                }
            ]);
        }
    };
});
System.register("main", ["App"], function (exports_9, context_9) {
    "use strict";
    var __moduleName = context_9 && context_9.id;
    var App_1, app;
    return {
        setters: [
            function (App_1_1) {
                App_1 = App_1_1;
            }
        ],
        execute: function () {
            app = new App_1.App();
            // ################################## login
            $("form").submit(function (event) {
                event.preventDefault();
                var vendorName = String($("#vendorName").val());
                var vendorPass = String($("#vendorPassword").val());
                app.connection(vendorName, vendorPass);
            });
            // ################################## navigation
            $("#lastPage").click(function () {
                app.precedent();
            });
            $("#hamb").click(function (event) {
                event.stopPropagation();
                let navStatus = $("#nav").css("display");
                if (navStatus == "block") {
                    $("#nav").slideUp();
                }
                else if (navStatus == "none") {
                    $("#nav").slideDown();
                }
            });
            $(window).click(function () {
                $("#nav").slideUp();
            });
            $(document).on("click", ".category-link", function (event) {
                event.preventDefault();
                var linkId = $(this).attr("href");
                let vendorId = app.getVendorId();
                let type = linkId.substring(1);
                let wines = app.getWinesOfVendorAndTypes(vendorId, type, linkId);
            });
            $(document).on("click", ".item", function () {
                let id = parseInt($(this).attr("id").substring(1));
                app.detail(id);
            });
            $("#quit").click(function (event) {
                event.preventDefault();
                app.quit();
            });
            $(function () {
                // Bind the swipeHandler callback function to the swipe event on div.box
                $("section").on("swipe", swipeHandler);
                // Callback function references the event target and adds the 'swipe' class to it
                function swipeHandler(event) {
                    if ($(this).attr("id") != "login") {
                        $(event.target).addClass("swipe");
                        var swipestart = event.swipestart;
                        var swipestop = event.swipestop;
                        app.precedentMobile($(this), swipestart, swipestop);
                    }
                }
            });
        }
    };
});
System.register("Model", [], function (exports_10, context_10) {
    "use strict";
    var __moduleName = context_10 && context_10.id;
    var Model;
    return {
        setters: [],
        execute: function () {
            Model = class Model {
                constructor(id) {
                    this.id = id;
                }
                getId() {
                    return this.id;
                }
            };
            exports_10("Model", Model);
        }
    };
});
System.register("testJquery", [], function (exports_11, context_11) {
    "use strict";
    var __moduleName = context_11 && context_11.id;
    // function de test des elements jquery
    function Dom(selector) {
        let elementJquery = $(selector);
        if (elementJquery.length < 1) {
            throw new Error("L'élément " + selector + " n'existe pas dans votre html !");
        }
        return elementJquery;
    }
    exports_11("Dom", Dom);
    return {
        setters: [],
        execute: function () {
            // to test replace the "$" of jquery by "Dom" and import function next view in console if there is an error 
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRTL0FQSVNlcnZpY2UudHMiLCJUUy9XaW5lLnRzIiwiVFMvQ2F0ZWdvcnkudHMiLCJUUy9WZW5kb3IudHMiLCJUUy9CZGRWZW5kb3JzLnRzIiwiVFMvQmRkQ2F0ZWdvcnkudHMiLCJUUy9BcHAudHMiLCJUUy9CZGRXaW5lLnRzIiwiVFMvbWFpbi50cyIsIlRTL01vZGVsLnRzIiwiVFMvdGVzdEpxdWVyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O1lBQ0EsYUFBQTtnQkFnQkM7b0JBYkEsWUFBWTtvQkFDSixRQUFHLEdBQVcsMERBQTBELENBQUM7Z0JBWW5FLENBQUM7Z0JBWGYsU0FBUztnQkFDVCx3RkFBd0Y7Z0JBQ3hGLDBCQUEwQjtnQkFDMUIsTUFBTSxDQUFDLFVBQVU7b0JBRWhCLEVBQUUsQ0FBQSxDQUFDLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFBLENBQUM7d0JBQ3hCLFVBQVUsQ0FBQyxRQUFRLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztvQkFDeEMsQ0FBQztvQkFDRCxNQUFNLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQztnQkFDNUIsQ0FBQztnQkFFYyxDQUFDO2dCQUVoQixRQUFRO29CQUVQLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBRSxDQUFDLE9BQVcsRUFBRyxNQUFVLEVBQU8sRUFBRTt3QkFFckQsQ0FBQyxDQUFDLElBQUksQ0FBQzs0QkFDTixHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxPQUFPOzRCQUN2QixRQUFRLEVBQUcsTUFBTTs0QkFDakIsT0FBTyxFQUFFLFVBQVMsS0FBUztnQ0FDMUIsT0FBTyxDQUFFLEtBQUssQ0FBRSxDQUFDOzRCQUNsQixDQUFDOzRCQUNELEtBQUssRUFBRSxVQUFVLEtBQVE7Z0NBQ3hCLE1BQU0sQ0FBRSxLQUFLLENBQUUsQ0FBQzs0QkFDakIsQ0FBQzt5QkFFRCxDQUFDLENBQUE7b0JBQ0gsQ0FBQyxDQUFDLENBQUE7Z0JBQ0gsQ0FBQztnQkFHRCxzQkFBc0IsQ0FBRSxRQUFlLEVBQUUsSUFBVztvQkFFbkQsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFFLENBQUMsT0FBVyxFQUFHLE1BQVUsRUFBTyxFQUFFO3dCQUVyRCxDQUFDLENBQUMsSUFBSSxDQUFDOzRCQUNOLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxHQUFHLFFBQVEsR0FBRyxRQUFRLEdBQUcsR0FBRyxHQUFHLElBQUk7NEJBQ2hELFFBQVEsRUFBRyxNQUFNOzRCQUVqQixPQUFPLEVBQUUsVUFBUyxLQUFTO2dDQUMxQixPQUFPLENBQUUsS0FBSyxDQUFFLENBQUM7NEJBQ2xCLENBQUM7NEJBQ0QsS0FBSyxFQUFFLFVBQVUsS0FBUTtnQ0FDeEIsTUFBTSxDQUFFLEtBQUssQ0FBRSxDQUFDOzRCQUNqQixDQUFDO3lCQUVELENBQUMsQ0FBQTtvQkFDSCxDQUFDLENBQUMsQ0FBQTtnQkFDSCxDQUFDO2dCQUVELFNBQVMsQ0FBRSxJQUFXLEVBQUUsSUFBWTtvQkFDbkMsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFFLENBQUUsT0FBVyxFQUFHLE1BQVUsRUFBTyxFQUFFO3dCQUV0RCxDQUFDLENBQUMsSUFBSSxDQUFDOzRCQUNOLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxHQUFHLGNBQWMsR0FBRyxJQUFJLEdBQUcsR0FBRyxHQUFHLElBQUk7NEJBQ2xELFFBQVEsRUFBRSxNQUFNOzRCQUVoQixPQUFPLEVBQUMsVUFBVSxNQUFTO2dDQUMxQixPQUFPLENBQUUsTUFBTSxDQUFFLENBQUM7NEJBQ25CLENBQUM7NEJBQ0QsS0FBSyxFQUFDLFVBQVUsTUFBUztnQ0FDeEIsTUFBTSxDQUFFLE1BQU0sQ0FBRSxDQUFDOzRCQUNsQixDQUFDO3lCQUNELENBQUMsQ0FBQTtvQkFDSCxDQUFDLENBQUUsQ0FBQTtnQkFDSixDQUFDO2FBSUQsQ0FBQTtZQXpFZSxtQkFBUSxHQUFlLElBQUksQ0FBQzs7UUE0RTVDLENBQUM7Ozs7Ozs7Ozs7WUM5RUQsT0FBQTtnQkFXQyxZQUFhLElBQVksRUFBRSxLQUFhLEVBQUUsSUFBVyxFQUFFLFdBQW1CLEVBQUUsRUFBVSxFQUFFLFVBQWtCO29CQUV6RyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztvQkFDYixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztvQkFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7b0JBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO29CQUNqQixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztvQkFDL0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7Z0JBRTlCLENBQUM7Z0JBR0QsT0FBTyxDQUFFLE9BQTRCLEVBQUcsUUFBaUI7b0JBRXhELElBQUksR0FBRyxHQUFXLG1CQUFtQixHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsbUJBQW1CLEdBQUcsUUFBUSxHQUFHLDRCQUE0QixHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO29CQUNwSyxHQUFHLElBQUksUUFBUSxHQUFFLElBQUksQ0FBQyxJQUFJLEdBQUUsY0FBYyxDQUFDO29CQUMzQyxHQUFHLElBQUksUUFBUSxHQUFFLElBQUksQ0FBQyxJQUFJLEdBQUUsZUFBZSxDQUFDO29CQUM1QyxHQUFHLElBQUksUUFBUSxDQUFDO29CQUVoQixPQUFPLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLENBQUUsQ0FBRSxDQUFDO2dCQUU1QixDQUFDO2dCQUVELGFBQWEsQ0FBRyxPQUE0QjtvQkFFM0MsSUFBSSxHQUFHLEdBQVcsV0FBVyxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsc0JBQXNCLENBQUM7b0JBQ2hFLEdBQUcsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7b0JBQ3BDLEdBQUcsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7b0JBQ3BDLEdBQUcsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUM7b0JBQ3pDLEdBQUcsSUFBRyxRQUFRLENBQUM7b0JBRWhCLE9BQU8sQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEdBQUcsQ0FBRSxDQUFFLENBQUM7Z0JBQzVCLENBQUM7YUFHRCxDQUFBOztRQUFBLENBQUM7Ozs7Ozs7Ozs7WUM5Q0YsV0FBQTtnQkFLQyxZQUFhLEVBQVUsRUFBRyxJQUFZO29CQUNyQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztvQkFDYixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztnQkFFbEIsQ0FBQztnQkFFRCxVQUFVLENBQUcsT0FBNEI7b0JBRXhDLElBQUksSUFBSSxHQUFXLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLDhCQUE4QixHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDO29CQUV2RyxPQUFPLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBRSxDQUFDO2dCQUMzQixDQUFDO2dCQUVELE9BQU8sQ0FBRSxPQUE0QjtvQkFFcEMsSUFBSSxHQUFHLEdBQVcsZUFBZSxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsaUNBQWlDLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRywyQkFBMkIsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxHQUFHLGlCQUFpQixDQUFDO29CQUUxSyxPQUFPLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBRSxDQUFDO2dCQUUxQixDQUFDO2dCQUVELFFBQVEsQ0FBRSxPQUE0QjtvQkFDckMsSUFBSSxHQUFHLEdBQVcsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsOENBQThDLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxpQkFBaUIsQ0FBQztvQkFFcEosT0FBTyxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUUsQ0FBQztnQkFDMUIsQ0FBQzthQU9ELENBQUE7O1FBQUEsQ0FBQzs7Ozs7Ozs7OztZQ3JDRixTQUFBO2dCQVdDLFlBQWEsSUFBWSxFQUFFLEVBQVMsRUFBRyxRQUFrQjtvQkFDeEQsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7b0JBQ2IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7b0JBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO2dCQUMxQixDQUFDO2dCQUVELGNBQWMsQ0FBRSxPQUE0QjtvQkFFM0MsSUFBSSxNQUFNLEdBQVcsZUFBZSxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsMkJBQTJCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDO29CQUVwSixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFFdEIsT0FBTyxDQUFDLE1BQU0sQ0FBRSxJQUFJLENBQUMsSUFBSSxDQUFFLENBQUM7Z0JBRTdCLENBQUM7Z0JBRUQsa0JBQWtCLENBQUUsT0FBNEI7b0JBQy9DLElBQUksR0FBRyxHQUFXLG1CQUFtQixHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUUsNEJBQTRCLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7b0JBQ2hHLEdBQUcsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUUsT0FBTyxDQUFDO29CQUNoRixHQUFHLElBQUksMEJBQTBCLENBQUM7b0JBQ2xDLEdBQUcsSUFBSSxRQUFRLENBQUM7b0JBQ2hCLEdBQUcsSUFBSSxRQUFRLENBQUM7b0JBRWpCLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUVuQixPQUFPLENBQUMsTUFBTSxDQUFFLElBQUksQ0FBQyxJQUFJLENBQUUsQ0FBQztnQkFDN0IsQ0FBQzthQUVELENBQUE7O1FBQUEsQ0FBQzs7Ozs7Ozs7OztZQ3ZDRix3QkFBYSxVQUFVLEdBRWpCO2dCQUNMO29CQUNDLEVBQUUsRUFBRyxDQUFDO29CQUNOLElBQUksRUFBRyxNQUFNO29CQUNiLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztpQkFDbkI7Z0JBQ0Q7b0JBQ0MsRUFBRSxFQUFHLENBQUM7b0JBQ04sSUFBSSxFQUFHLFFBQVE7b0JBQ2YsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO2lCQUNuQjtnQkFDRDtvQkFDQyxFQUFFLEVBQUcsQ0FBQztvQkFDTixJQUFJLEVBQUcsVUFBVTtvQkFDakIsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO2lCQUNuQjtnQkFDRDtvQkFDQyxFQUFFLEVBQUcsQ0FBQztvQkFDTixJQUFJLEVBQUcsTUFBTTtvQkFDYixRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7aUJBQ25CO2FBQ0QsRUFBQztRQUVGLENBQUM7Ozs7Ozs7Ozs7WUN6QkQseUJBQWEsV0FBVyxHQUVsQjtnQkFDTDtvQkFDQyxFQUFFLEVBQUcsQ0FBQztvQkFDTixJQUFJLEVBQUcsS0FBSztpQkFDWjtnQkFDRDtvQkFDQyxFQUFFLEVBQUcsQ0FBQztvQkFDTixJQUFJLEVBQUcsTUFBTTtpQkFDYjtnQkFDRDtvQkFDQyxFQUFFLEVBQUcsQ0FBQztvQkFDTixJQUFJLEVBQUcsT0FBTztpQkFDZDthQUNELEVBQUM7UUFFRixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQ1ZELE1BQUE7Z0JBd0JDO29CQUVDLHNCQUFzQjtvQkFFdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7b0JBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO29CQUVoQixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztvQkFFakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFFLElBQUksQ0FBRSxDQUFDO29CQUV6QixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztvQkFFakIsZUFBZTtvQkFDZixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBRSxNQUFNLENBQUUsQ0FBQztvQkFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUUsVUFBVSxDQUFDLENBQUM7b0JBQy9CLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFFLFFBQVEsQ0FBRSxDQUFDO29CQUU1QixZQUFZO29CQUNaLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztvQkFDcEIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO29CQUNaLHFCQUFxQjtnQkFFdEIsQ0FBQztnQkFFRCxJQUFJO29CQUVILENBQUMsQ0FBRSxPQUFPLENBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDcEIsQ0FBQyxDQUFFLFdBQVcsQ0FBRSxDQUFDLElBQUksRUFBRSxDQUFDO29CQUN4QixDQUFDLENBQUUsU0FBUyxDQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ3RCLENBQUMsQ0FBRSxRQUFRLENBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFFdEIsQ0FBQztnQkFFRCx1QkFBdUI7Z0JBRXZCLGtCQUFrQjtnQkFDbEIsZ0JBQWdCO2dCQUNoQixjQUFjO2dCQUNkLGVBQWU7Z0JBQ2YsYUFBYTtnQkFDYixhQUFhO2dCQUNiLG1CQUFtQjtnQkFDbkIscUJBQXFCO2dCQUNyQixNQUFNO2dCQUVOLCtCQUErQjtnQkFDL0IsZ0RBQWdEO2dCQUVoRCwrQ0FBK0M7Z0JBRy9DLE1BQU07Z0JBQ04sT0FBTztnQkFDUCxJQUFJO2dCQUVKLFVBQVUsQ0FBRSxJQUFXLEVBQUUsSUFBVztvQkFHbkMsRUFBRSxDQUFBLENBQUUsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSyxDQUFDLENBQUEsQ0FBQzt3QkFDbEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUUseUJBQXlCLENBQUUsQ0FBQztvQkFDL0MsQ0FBQztvQkFDRCxJQUFJLENBQUMsRUFBRSxDQUFBLENBQUUsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUM3QyxFQUFFLENBQUEsQ0FBRSxJQUFJLElBQUksSUFBSyxDQUFDLENBQUEsQ0FBQzs0QkFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUUseUJBQXlCLENBQUUsQ0FBQzt3QkFDL0MsQ0FBQzt3QkFDRCxFQUFFLENBQUEsQ0FBRSxJQUFJLElBQUksSUFBSyxDQUFDLENBQUEsQ0FBQzs0QkFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUUsOEJBQThCLENBQUUsQ0FBQzt3QkFDcEQsQ0FBQztvQkFDRixDQUFDO29CQUNELElBQUksQ0FBQyxDQUFDO3dCQUVMLElBQUksUUFBUSxHQUFjLElBQUksdUJBQVUsRUFBRSxDQUFDO3dCQUUzQyxJQUFJLEtBQUssR0FBZ0IsUUFBUSxDQUFDLFNBQVMsQ0FBRSxJQUFJLEVBQUUsSUFBSSxDQUFFLENBQUM7d0JBQzFELElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQzt3QkFFcEIsS0FBSzs2QkFDSCxJQUFJLENBQUUsQ0FBRSxJQUFJLEVBQUUsRUFBRTs0QkFDaEIsRUFBRSxDQUFBLENBQUUsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFLLENBQUMsQ0FBQSxDQUFDO2dDQUMxQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7Z0NBQ3hCLE9BQU8sR0FBRyxJQUFJLENBQUM7Z0NBQ2YsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dDQUNsQixDQUFDLENBQUUsUUFBUSxDQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7Z0NBQ3JCLENBQUMsQ0FBRSxPQUFPLENBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQ0FDcEIsQ0FBQyxDQUFFLFdBQVcsQ0FBRSxDQUFDLElBQUksRUFBRSxDQUFDO2dDQUN4QixDQUFDLENBQUUsZ0JBQWdCLENBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs0QkFDOUIsQ0FBQzs0QkFDRCxJQUFJLENBQUMsQ0FBQztnQ0FDTCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUM7Z0NBQ2hDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQzs0QkFDckIsQ0FBQzs0QkFHRCxrQkFBa0I7d0JBQ25CLENBQUMsQ0FBQzs2QkFDRCxLQUFLLENBQUMsVUFBUyxLQUFLOzRCQUNwQixzQkFBc0I7d0JBQ3ZCLENBQUMsQ0FBQyxDQUFDO29CQUVMLENBQUM7b0JBRUQsSUFBSSxDQUFDLFdBQVcsQ0FBRSxDQUFDLENBQUUsZ0JBQWdCLENBQUUsQ0FBRSxDQUFDO2dCQUMzQyxDQUFDO2dCQUVELFVBQVU7b0JBRVQsQ0FBQyxDQUFFLFNBQVMsQ0FBRSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBRSxDQUFDO2dCQUN6QyxDQUFDO2dCQUdELFNBQVMsQ0FBRSxLQUFTO29CQUVuQixlQUFlO2dCQUVoQixDQUFDO2dCQUVELFlBQVk7b0JBRVgsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDO29CQUVqQixHQUFHLENBQUEsQ0FBRSxJQUFJLFFBQVEsSUFBSSx5QkFBWSxDQUFDLENBQUEsQ0FBQzt3QkFDbEMsSUFBSSxXQUFXLEdBQUcsSUFBSSxtQkFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFZLEVBQUUsUUFBUSxDQUFDLElBQWMsQ0FBQyxDQUFDO3dCQUUvRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBRSxXQUFXLENBQUUsQ0FBQzt3QkFFbkMsV0FBVyxDQUFDLFVBQVUsQ0FBRSxDQUFDLENBQUUsb0JBQW9CLENBQUUsQ0FBRSxDQUFDO3dCQUVwRCxXQUFXLENBQUMsT0FBTyxDQUFFLENBQUMsQ0FBRSxNQUFNLENBQUUsQ0FBRSxDQUFDO3dCQUVuQyxXQUFXLENBQUMsUUFBUSxDQUFFLENBQUMsQ0FBRSxxQkFBcUIsQ0FBRSxDQUFFLENBQUM7d0JBQ25ELFFBQVEsRUFBRyxDQUFDO29CQUNiLENBQUM7b0JBRUQsSUFBSSxPQUFPLEdBQUcsR0FBRyxHQUFHLFFBQVEsQ0FBQztvQkFFN0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLENBQUUsUUFBUSxFQUFFLE9BQU8sR0FBRSxHQUFHLENBQUUsQ0FBQztnQkFDdEQsQ0FBQztnQkFJRCx3QkFBd0IsQ0FBRSxRQUFnQixFQUFHLElBQVksRUFBRyxJQUFTO29CQUVwRSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFFLElBQUksQ0FBRSxDQUFDO29CQUV4QyxJQUFJLFFBQVEsR0FBYyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztvQkFDM0MsSUFBSSxLQUFLLEdBQWdCLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBRSxRQUFRLEVBQUUsTUFBTSxDQUFFLENBQUM7b0JBRTdFLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztvQkFDaEIsS0FBSzt5QkFDSCxJQUFJLENBQUUsVUFBVSxJQUFJO3dCQUVwQixFQUFFLENBQUEsQ0FBRSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUssQ0FBQyxDQUFBLENBQUM7NEJBRXhCLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO3dCQUNqQixDQUFDO3dCQUVELEdBQUcsQ0FBQSxDQUFFLElBQUksSUFBSSxJQUFJLElBQUssQ0FBQyxDQUFBLENBQUM7NEJBRXZCLElBQUksT0FBTyxHQUFRLElBQUksV0FBSSxDQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFFLENBQUM7NEJBRTVHLE9BQU8sQ0FBQyxPQUFPLENBQUUsQ0FBQyxDQUFFLEdBQUcsR0FBRyxJQUFJLENBQUUsQ0FBRSxDQUFDOzRCQUVuQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBRSxPQUFPLENBQUUsQ0FBQzt3QkFDNUIsQ0FBQztvQkFFRixDQUFDLENBQUM7eUJBQ0QsS0FBSyxDQUFDLFVBQVMsS0FBSztvQkFFckIsQ0FBQyxDQUFDLENBQUM7b0JBRUosQ0FBQyxDQUFFLE9BQU8sQ0FBRSxDQUFDLElBQUksRUFBRSxDQUFDO29CQUNwQixDQUFDLENBQUUsSUFBSSxDQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBRW5CLElBQUksQ0FBQyxXQUFXLENBQUUsQ0FBQyxDQUFFLElBQUksQ0FBRSxDQUFFLENBQUM7Z0JBQy9CLENBQUM7Z0JBRUQsV0FBVztvQkFDVixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztnQkFDdkIsQ0FBQztnQkFFRCxXQUFXO29CQUVWLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztnQkFDdkIsQ0FBQztnQkFFRCxhQUFhLENBQUUsT0FBZTtvQkFFN0IsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO29CQUVYLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFFLE9BQU8sQ0FBQyxFQUFFO3dCQUVqQyxFQUFFLENBQUEsQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLE9BQVEsQ0FBQyxDQUFBLENBQUM7NEJBRTVCLEVBQUUsR0FBSSxPQUFPLENBQUMsRUFBRSxDQUFDO3dCQUNsQixDQUFDO29CQUNGLENBQUMsQ0FBQyxDQUFDO29CQUVILE1BQU0sQ0FBQyxFQUFFLENBQUM7Z0JBQ1gsQ0FBQztnQkFFRCxZQUFZO29CQUVYLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO3dCQUU3QixJQUFJLENBQUMsR0FBRyxLQUFLLEdBQUcsT0FBTyxHQUFHLE1BQU0sQ0FBQzt3QkFFakMsQ0FBQyxDQUFFLFNBQVMsQ0FBRSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsQ0FBQztvQkFFNUIsQ0FBQyxDQUFDLENBQUM7b0JBRUgsQ0FBQyxDQUFFLFNBQVMsQ0FBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUU7d0JBRTFCLENBQUMsQ0FBRSxJQUFJLENBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFOzRCQUV0QixDQUFDLENBQUUsSUFBSSxDQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7d0JBQy9CLENBQUMsQ0FBQyxDQUFDO29CQUVKLENBQUMsQ0FBQyxDQUFDO2dCQUNKLENBQUM7Z0JBRUQsTUFBTSxDQUFFLE1BQWM7b0JBRXJCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO3dCQUU1QixFQUFFLENBQUEsQ0FBRSxNQUFNLElBQUksT0FBTyxDQUFDLEVBQUcsQ0FBQyxDQUFBLENBQUM7NEJBRTFCLElBQUksSUFBSSxHQUFHLElBQUksV0FBSSxDQUFFLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsVUFBVSxDQUFFLENBQUM7NEJBRXRILElBQUksQ0FBQyxhQUFhLENBQUUsQ0FBQyxDQUFFLFNBQVMsQ0FBRSxDQUFFLENBQUM7NEJBRXJDLENBQUMsQ0FBRSxTQUFTLENBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQzs0QkFDM0IsQ0FBQyxDQUFFLEdBQUcsR0FBRSxPQUFPLENBQUMsS0FBSyxDQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7NEJBQy9CLElBQUksQ0FBQyxXQUFXLENBQUUsQ0FBQyxDQUFFLFNBQVMsQ0FBRSxDQUFFLENBQUM7d0JBQ3BDLENBQUM7b0JBQ0YsQ0FBQyxDQUFDLENBQUM7Z0JBRUosQ0FBQztnQkFFRCxXQUFXLENBQUUsSUFBeUI7b0JBRXJDLEVBQUUsQ0FBQSxDQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSyxDQUFDLENBQUEsQ0FBQzt3QkFFOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUc3QixDQUFDO29CQUVELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBRSxDQUFDO2dCQUU1QixDQUFDO2dCQUVELFNBQVM7b0JBRVIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUU7b0JBQ2xDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUUsS0FBSyxHQUFHLENBQUMsQ0FBRSxDQUFDO29CQUN0QyxJQUFJLFVBQVUsR0FBRyxDQUFDLENBQUUsaUJBQWlCLENBQUUsQ0FBQztvQkFFeEMsRUFBRSxDQUFBLENBQUUsS0FBSyxJQUFJLENBQUUsQ0FBQyxDQUFBLENBQUM7d0JBRWhCLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQzt3QkFHbEIsRUFBRSxDQUFBLENBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBRSxXQUFXLENBQUcsQ0FBQyxDQUFBLENBQUM7NEJBQ3hDLGdDQUFnQzs0QkFDaEMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQzs0QkFDdEMsVUFBVSxDQUFDLFFBQVEsQ0FBRSxZQUFZLENBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQzt3QkFFOUMsQ0FBQzt3QkFHRCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7d0JBRVosRUFBRSxDQUFBLENBQUUsSUFBSSxJQUFJLENBQUMsQ0FBRSxnQkFBZ0IsQ0FBRSxDQUFDLENBQUEsQ0FBQzs0QkFFbEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7d0JBRXpCLENBQUM7d0JBQ0QsSUFBSSxDQUFDLENBQUM7NEJBRUwsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUUsS0FBSyxHQUFHLENBQUMsRUFBRyxDQUFDLENBQUUsQ0FBQzt3QkFFdkMsQ0FBQztvQkFDRixDQUFDO2dCQUVGLENBQUM7Z0JBRUQsZUFBZSxDQUFFLElBQXlCLEVBQUUsVUFBZ0IsRUFBRyxTQUFlO29CQUc3RSwyQkFBMkI7b0JBQzNCLDBCQUEwQjtvQkFDMUIsRUFBRSxDQUFBLENBQUUsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQzt3QkFDL0MsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO29CQUNsQixDQUFDO2dCQUVGLENBQUM7Z0JBQUEsQ0FBQztnQkFFRixJQUFJO29CQUVILENBQUMsQ0FBRSxRQUFRLENBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDckIsQ0FBQyxDQUFFLE9BQU8sQ0FBRSxDQUFDLElBQUksRUFBRSxDQUFDO29CQUNwQixDQUFDLENBQUUsZ0JBQWdCLENBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFFN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7b0JBQ2pCLENBQUMsQ0FBRSxTQUFTLENBQUUsQ0FBQyxJQUFJLENBQUUsRUFBRSxDQUFFLENBQUM7Z0JBQzNCLENBQUM7YUFFRCxDQUFBOztRQUFBLENBQUM7Ozs7Ozs7Ozs7WUNuVkYscUJBQWEsT0FBTyxHQUVkO2dCQUNMO29CQUNDLEVBQUUsRUFBRyxDQUFDO29CQUNOLElBQUksRUFBRyxpQkFBaUI7b0JBQ3hCLEtBQUssRUFBRyxPQUFPO29CQUNmLElBQUksRUFBRyxJQUFJO29CQUNYLFdBQVcsRUFBRyx5QkFBeUI7b0JBQ3ZDLFVBQVUsRUFBRyxDQUFDO2lCQUNkO2dCQUNEO29CQUNDLEVBQUUsRUFBRyxDQUFDO29CQUNOLElBQUksRUFBRyxXQUFXO29CQUNsQixLQUFLLEVBQUcsS0FBSztvQkFDYixJQUFJLEVBQUcsSUFBSTtvQkFDWCxXQUFXLEVBQUcseUJBQXlCO29CQUN2QyxVQUFVLEVBQUcsQ0FBQztpQkFDZDtnQkFDRDtvQkFDQyxFQUFFLEVBQUcsQ0FBQztvQkFDTixJQUFJLEVBQUcsU0FBUztvQkFDaEIsS0FBSyxFQUFHLE1BQU07b0JBQ2QsSUFBSSxFQUFHLElBQUk7b0JBQ1gsV0FBVyxFQUFHLHlCQUF5QjtvQkFDdkMsVUFBVSxFQUFHLENBQUM7aUJBQ2Q7Z0JBQ0Q7b0JBQ0MsRUFBRSxFQUFHLENBQUM7b0JBQ04sSUFBSSxFQUFHLGFBQWE7b0JBQ3BCLEtBQUssRUFBRyxLQUFLO29CQUNiLElBQUksRUFBRyxJQUFJO29CQUNYLFdBQVcsRUFBRyx5QkFBeUI7b0JBQ3ZDLFVBQVUsRUFBRyxDQUFDO2lCQUNkO2dCQUNEO29CQUNDLEVBQUUsRUFBRyxDQUFDO29CQUNOLElBQUksRUFBRyxtQkFBbUI7b0JBQzFCLEtBQUssRUFBRyxNQUFNO29CQUNkLElBQUksRUFBRyxJQUFJO29CQUNYLFdBQVcsRUFBRyx5QkFBeUI7b0JBQ3ZDLFVBQVUsRUFBRyxDQUFDO2lCQUNkO2dCQUNEO29CQUNDLEVBQUUsRUFBRyxDQUFDO29CQUNOLElBQUksRUFBRyxpQkFBaUI7b0JBQ3hCLEtBQUssRUFBRyxLQUFLO29CQUNiLElBQUksRUFBRyxJQUFJO29CQUNYLFdBQVcsRUFBRyx5QkFBeUI7b0JBQ3ZDLFVBQVUsRUFBRyxDQUFDO2lCQUNkO2dCQUNEO29CQUNDLEVBQUUsRUFBRyxDQUFDO29CQUNOLElBQUksRUFBRyxpQkFBaUI7b0JBQ3hCLEtBQUssRUFBRyxPQUFPO29CQUNmLElBQUksRUFBRyxJQUFJO29CQUNYLFdBQVcsRUFBRywwQkFBMEI7b0JBQ3hDLFVBQVUsRUFBRyxDQUFDO2lCQUNkO2FBQ0QsRUFBQTtRQUdELENBQUM7Ozs7Ozs7Ozs7Ozs7O1lDN0RHLEdBQUcsR0FBRyxJQUFJLFNBQUcsRUFBRSxDQUFDO1lBRXBCLDJDQUEyQztZQUMzQyxDQUFDLENBQUUsTUFBTSxDQUFFLENBQUMsTUFBTSxDQUFDLFVBQVUsS0FBSztnQkFFakMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUV2QixJQUFJLFVBQVUsR0FBRyxNQUFNLENBQUUsQ0FBQyxDQUFFLGFBQWEsQ0FBRSxDQUFDLEdBQUcsRUFBRSxDQUFFLENBQUM7Z0JBQ3BELElBQUksVUFBVSxHQUFHLE1BQU0sQ0FBRSxDQUFDLENBQUUsaUJBQWlCLENBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBRSxDQUFDO2dCQUV4RCxHQUFHLENBQUMsVUFBVSxDQUFFLFVBQVUsRUFBRSxVQUFVLENBQUUsQ0FBQztZQUMxQyxDQUFDLENBQUMsQ0FBQztZQUdILGdEQUFnRDtZQUVoRCxDQUFDLENBQUUsV0FBVyxDQUFFLENBQUMsS0FBSyxDQUFFO2dCQUV2QixHQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7WUFFakIsQ0FBQyxDQUFDLENBQUM7WUFFSCxDQUFDLENBQUUsT0FBTyxDQUFFLENBQUMsS0FBSyxDQUFFLFVBQVUsS0FBSztnQkFFbEMsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUV4QixJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUUsTUFBTSxDQUFFLENBQUMsR0FBRyxDQUFFLFNBQVMsQ0FBRSxDQUFDO2dCQUU3QyxFQUFFLENBQUMsQ0FBRSxTQUFTLElBQUksT0FBUSxDQUFDLENBQUEsQ0FBQztvQkFFM0IsQ0FBQyxDQUFFLE1BQU0sQ0FBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUN2QixDQUFDO2dCQUNELElBQUksQ0FBQyxFQUFFLENBQUEsQ0FBRSxTQUFTLElBQUksTUFBTyxDQUFDLENBQUEsQ0FBQztvQkFFOUIsQ0FBQyxDQUFFLE1BQU0sQ0FBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUN6QixDQUFDO1lBRUYsQ0FBQyxDQUFDLENBQUM7WUFFSCxDQUFDLENBQUUsTUFBTSxDQUFFLENBQUMsS0FBSyxDQUFDO2dCQUVqQixDQUFDLENBQUUsTUFBTSxDQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7WUFFdkIsQ0FBQyxDQUFDLENBQUM7WUFJSCxDQUFDLENBQUUsUUFBUSxDQUFFLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxVQUFVLEtBQUs7Z0JBRTFELEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDdkIsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFFbEMsSUFBSSxRQUFRLEdBQUcsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUNqQyxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsd0JBQXdCLENBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxNQUFNLENBQUUsQ0FBQztZQUVwRSxDQUFDLENBQUUsQ0FBQztZQUlKLENBQUMsQ0FBRSxRQUFRLENBQUUsQ0FBQyxFQUFFLENBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRTtnQkFFbkMsSUFBSSxFQUFFLEdBQUUsUUFBUSxDQUFFLENBQUMsQ0FBRSxJQUFJLENBQUUsQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFFLENBQUMsU0FBUyxDQUFFLENBQUMsQ0FBRSxDQUFFLENBQUM7Z0JBRTFELEdBQUcsQ0FBQyxNQUFNLENBQUUsRUFBRSxDQUFFLENBQUM7WUFFbEIsQ0FBQyxDQUFFLENBQUM7WUFJSixDQUFDLENBQUUsT0FBTyxDQUFFLENBQUMsS0FBSyxDQUFFLFVBQVUsS0FBSztnQkFFbEMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUV2QixHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDWixDQUFDLENBQUUsQ0FBQztZQU1KLENBQUMsQ0FBQztnQkFDRCx3RUFBd0U7Z0JBQ3hFLENBQUMsQ0FBRSxTQUFTLENBQUUsQ0FBQyxFQUFFLENBQUUsT0FBTyxFQUFFLFlBQVksQ0FBRSxDQUFDO2dCQUUzQyxpRkFBaUY7Z0JBQ2pGLHNCQUF1QixLQUFVO29CQUVoQyxFQUFFLENBQUEsQ0FBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBRSxJQUFJLE9BQVEsQ0FBQyxDQUFBLENBQUM7d0JBRXJDLENBQUMsQ0FBRSxLQUFLLENBQUMsTUFBTSxDQUFFLENBQUMsUUFBUSxDQUFFLE9BQU8sQ0FBRSxDQUFDO3dCQUV0QyxJQUFJLFVBQVUsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDO3dCQUNsQyxJQUFJLFNBQVMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDO3dCQUVoQyxHQUFHLENBQUMsZUFBZSxDQUFFLENBQUMsQ0FBRSxJQUFJLENBQUUsRUFBRyxVQUFVLEVBQUcsU0FBUyxDQUFFLENBQUM7b0JBRTNELENBQUM7Z0JBRUYsQ0FBQztZQUNGLENBQUMsQ0FBQyxDQUFDO1FBQUEsQ0FBQzs7Ozs7Ozs7OztZQ3RHSixRQUFBO2dCQUtDLFlBQWEsRUFBUztvQkFDckIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7Z0JBQ2QsQ0FBQztnQkFFRCxLQUFLO29CQUNKLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO2dCQUNoQixDQUFDO2FBS0QsQ0FBQTs7UUFBQSxDQUFDOzs7Ozs7SUNoQkYsdUNBQXVDO0lBQ3ZDLGFBQXFCLFFBQWU7UUFDbkMsSUFBSSxhQUFhLEdBQVUsQ0FBQyxDQUFFLFFBQVEsQ0FBRSxDQUFDO1FBQ3pDLEVBQUUsQ0FBQSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsQ0FBRSxDQUFDLENBQUEsQ0FBQztZQUM3QixNQUFNLElBQUksS0FBSyxDQUFFLFlBQVksR0FBRyxRQUFRLEdBQUcsaUNBQWlDLENBQUUsQ0FBQztRQUNoRixDQUFDO1FBQ0QsTUFBTSxDQUFDLGFBQWEsQ0FBQztJQUN0QixDQUFDOzs7OztZQUVELDJHQUEyRztRQUFBLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5leHBvcnQgY2xhc3MgQVBJU2VydmljZSB7XHJcblxyXG5cdHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBBUElTZXJ2aWNlID0gbnVsbDtcclxuXHQvL3Rlc3QgbG9jYWxcclxuXHRwcml2YXRlIHVybDogc3RyaW5nID0gXCJodHRwOi8vbG9jYWxob3N0L2NvdXJzZXNfdHlwZXNjcmlwdC92ZW5kb3JfcHJvZHVjdHMvQVBJL1wiO1xyXG5cdC8vIG1vYmlsZVxyXG5cdC8vIHByaXZhdGUgdXJsOiBzdHJpbmcgPSBcImh0dHA6Ly8xOTIuMTY4LjEwLjUyL2NvdXJzZXNfdHlwZXNjcmlwdC92ZW5kb3JfcHJvZHVjdHMvQVBJL1wiO1xyXG5cdC8vIGRlc2lnbiBwYXRlcm4gc2luZ2xldG9uXHJcblx0c3RhdGljIGdldFNlcnZpY2UoKTpBUElTZXJ2aWNlIHtcclxuXHJcblx0XHRpZighQVBJU2VydmljZS5pbnN0YW5jZSl7XHJcblx0XHRcdEFQSVNlcnZpY2UuaW5zdGFuY2UgPSBuZXcgQVBJU2VydmljZSgpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIEFQSVNlcnZpY2UuaW5zdGFuY2U7XHJcblx0fVxyXG5cclxuXHRjb25zdHJ1Y3Rvcigpe307XHJcblxyXG5cdGdldFdpbmVzKCk6IFByb21pc2UgPGFueT4ge1xyXG5cclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZSggKHJlc29sdmU6YW55ICwgcmVqZWN0OmFueSk6IGFueSA9PiB7XHJcblxyXG5cdFx0XHQkLmFqYXgoe1xyXG5cdFx0XHRcdHVybDogdGhpcy51cmwgKyBcIndpbmVzXCIsXHJcblx0XHRcdFx0ZGF0YVR5cGUgOiBcImpzb25cIixcclxuXHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbih3aW5lczoge30pe1xyXG5cdFx0XHRcdFx0cmVzb2x2ZSggd2luZXMgKTsgXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRlcnJvcjogZnVuY3Rpb24oIHdpbmVzOnt9ICl7XHJcblx0XHRcdFx0XHRyZWplY3QoIHdpbmVzICk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSlcclxuXHRcdH0pXHJcblx0fVxyXG5cclxuXHJcblx0Z2V0V2luZXNWZW5kb3JDYXRlZ29yeSggdmVuZG9ySWQ6bnVtYmVyLCB0eXBlOm51bWJlciApOiBQcm9taXNlIDxhbnk+IHtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKCAocmVzb2x2ZTphbnkgLCByZWplY3Q6YW55KTogYW55ID0+IHtcclxuXHJcblx0XHRcdCQuYWpheCh7XHJcblx0XHRcdFx0dXJsOiB0aGlzLnVybCArIFwid2luZXMvXCIgKyB2ZW5kb3JJZCArIFwiL1wiICsgdHlwZSAsXHJcblx0XHRcdFx0ZGF0YVR5cGUgOiBcImpzb25cIixcclxuXHJcblx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24od2luZXM6IHt9KXtcclxuXHRcdFx0XHRcdHJlc29sdmUoIHdpbmVzICk7IFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0ZXJyb3I6IGZ1bmN0aW9uKCB3aW5lczp7fSApe1xyXG5cdFx0XHRcdFx0cmVqZWN0KCB3aW5lcyApO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0pXHJcblx0XHR9KVxyXG5cdH1cclxuXHJcblx0Z2V0VmVuZG9yKCBuYW1lOnN0cmluZywgcGFzczogc3RyaW5nKTogUHJvbWlzZSA8YW55PiB7XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoICggcmVzb2x2ZTphbnkgLCByZWplY3Q6YW55ICk6YW55ID0+e1xyXG5cclxuXHRcdFx0JC5hamF4KHtcclxuXHRcdFx0XHR1cmw6IHRoaXMudXJsICsgXCJ2ZW5kb3JMb2dpbi9cIiArIG5hbWUgKyBcIi9cIiArIHBhc3MsXHJcblx0XHRcdFx0ZGF0YVR5cGU6IFwianNvblwiLFxyXG5cclxuXHRcdFx0XHRzdWNjZXNzOmZ1bmN0aW9uKCB2ZW5kb3I6e30gKXtcclxuXHRcdFx0XHRcdHJlc29sdmUoIHZlbmRvciApO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0ZXJyb3I6ZnVuY3Rpb24oIHZlbmRvcjp7fSApe1xyXG5cdFx0XHRcdFx0cmVqZWN0KCB2ZW5kb3IgKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHR9IClcclxuXHR9XHJcblxyXG5cdFxyXG5cclxufVxyXG5cclxuXHJcbiIsIlxyXG5leHBvcnQgY2xhc3MgV2luZSB7XHJcblx0XHJcblx0XHJcblx0cHVibGljIG5hbWU6IHN0cmluZztcclxuXHRwdWJsaWMgY29sb3I6IHN0cmluZztcclxuXHRwdWJsaWMgeWVhcjogbnVtYmVyO1xyXG5cdHB1YmxpYyBkZXNpZ25hdGlvbjogc3RyaW5nO1xyXG5cdHB1YmxpYyBjYXRlZ29yeUlkOiBudW1iZXI7XHJcblxyXG5cdHB1YmxpYyBpZDogbnVtYmVyO1xyXG5cclxuXHRjb25zdHJ1Y3RvciggbmFtZTogc3RyaW5nLCBjb2xvcjogc3RyaW5nLCB5ZWFyOm51bWJlciwgZGVzaWduYXRpb246IHN0cmluZywgaWQ6IG51bWJlciwgY2F0ZWdvcnlJZDogbnVtYmVyICl7XHJcblxyXG5cdFx0dGhpcy5pZCA9IGlkO1xyXG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcclxuXHRcdHRoaXMuY29sb3IgPSBjb2xvcjtcclxuXHRcdHRoaXMueWVhciA9IHllYXI7XHJcblx0XHR0aGlzLmRlc2lnbmF0aW9uID0gZGVzaWduYXRpb247XHJcblx0XHR0aGlzLmNhdGVnb3J5SWQgPSBjYXRlZ29yeUlkO1xyXG5cclxuXHR9XHJcblxyXG5cclxuXHRkaXNwbGF5KCAkcGFyZW50OiBKUXVlcnk8SFRNTEVsZW1lbnQ+ICwgaXRlcmF0b3I/OiBudW1iZXIgKTogdm9pZCB7XHJcblxyXG5cdFx0bGV0IGRpdjogc3RyaW5nID0gJzxkaXYgY2xhc3M9XCJpdGVtICcgKyB0aGlzLmNvbG9yICsgJ1wiIGlkPVwidycgKyB0aGlzLmlkICsgJ1wiIGRhdGEtcG9zaXRpb249XCInICsgaXRlcmF0b3IgKyAnXCIgZHJhZ2dhYmxlPVwidHJ1ZVwiIHRpdGxlPVwiJyArIHRoaXMuZGVzaWduYXRpb24gKyAnXCIgPic7XHJcblx0XHRkaXYgKz0gJzxzcGFuPicrIHRoaXMubmFtZSArJzwvc3Bhbj48L2JyPic7XHJcblx0XHRkaXYgKz0gJzxzcGFuPicrIHRoaXMueWVhciArJzwvc3Bhbj48YnIgLz4nO1xyXG5cdFx0ZGl2ICs9ICc8L2Rpdj4nO1xyXG5cclxuXHRcdCRwYXJlbnQuYXBwZW5kKCAkKCBkaXYgKSApO1xyXG5cclxuXHR9XHJcblxyXG5cdGRpc3BsYXlEZXRhaWwgKCAkcGFyZW50OiBKUXVlcnk8SFRNTEVsZW1lbnQ+ICk6IHZvaWQge1xyXG5cclxuXHRcdGxldCBkaXY6IHN0cmluZyA9ICc8ZGl2IGlkPVwiJyArIHRoaXMuaWQgKyAnXCIgY2xhc3M9XCJ2aW5kZXRhaWxcIj4nO1xyXG5cdFx0XHRkaXYgKz0gJzxoMj4nICsgdGhpcy5uYW1lICsgJzwvaDI+JztcclxuXHRcdFx0ZGl2ICs9ICc8aDM+JyArIHRoaXMueWVhciArICc8L2gzPic7XHJcblx0XHRcdGRpdiArPSAnPHA+JyArIHRoaXMuZGVzaWduYXRpb24gKyAnPC9wPic7XHJcblx0XHRcdGRpdiArPSc8L2Rpdj4nO1xyXG5cclxuXHRcdCRwYXJlbnQuYXBwZW5kKCAkKCBkaXYgKSApO1xyXG5cdH1cclxuXHJcblxyXG59IiwiXHJcbmV4cG9ydCBjbGFzcyBDYXRlZ29yeSB7XHJcblx0XHJcblx0cHVibGljIGlkOiBudW1iZXI7XHJcblx0cHVibGljIG5hbWU6IHN0cmluZztcclxuXHJcblx0Y29uc3RydWN0b3IoIGlkOiBudW1iZXIgLCBuYW1lOiBzdHJpbmcpe1xyXG5cdFx0dGhpcy5pZCA9IGlkO1xyXG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcclxuXHJcblx0fVxyXG5cclxuXHRkaXNwbGF5TmF2KCAgJHBhcmVudDogSlF1ZXJ5PEhUTUxFbGVtZW50PiApe1xyXG5cclxuXHRcdGxldCBsaW5rOiBzdHJpbmcgPSAnPGEgaHJlZj1cIiMnICsgdGhpcy5uYW1lICsgJ1wiIGNsYXNzPVwiY2F0ZWdvcnktbGlua1wiPjxsaT4nICsgdGhpcy5uYW1lICsgJzwvbGk+PC9hPic7XHJcblx0XHJcblx0XHQkcGFyZW50LmFwcGVuZCggJChsaW5rKSApO1xyXG5cdH1cclxuXHJcblx0ZGlzTWFpbiggJHBhcmVudDogSlF1ZXJ5PEhUTUxFbGVtZW50PiApe1xyXG5cclxuXHRcdGxldCBkaXY6IHN0cmluZyA9ICc8c2VjdGlvbiBpZD1cIicgKyB0aGlzLm5hbWUgKyAnXCIgY2xhc3M9XCIgcGFnZSBibG9jayBjb250YWluZXIgJyArIHRoaXMubmFtZSArICdcIiAgZHJhZ2dhYmxlPVwidHJ1ZVwiPiA8aDI+JyArIHRoaXMubmFtZS50b1VwcGVyQ2FzZSgpICsgJzwvaDI+PC9zZWN0aW9uPic7XHJcblxyXG5cdFx0JHBhcmVudC5hcHBlbmQoICQoZGl2KSApO1xyXG5cclxuXHR9XHJcblxyXG5cdGRpc3BNZW51KCAkcGFyZW50OiBKUXVlcnk8SFRNTEVsZW1lbnQ+ICl7XHJcblx0XHRsZXQgZGl2OiBzdHJpbmcgPSAnPGEgaHJlZj1cIiMnICsgdGhpcy5uYW1lICsgJ1wiIGNsYXNzPVwiY2F0ZWdvcnktbGlua1wiPjxkaXZcIiBjbGFzcz1cImJ1dHRvbiAnICsgdGhpcy5uYW1lICsgJ1wiPiA8aDI+JyArIHRoaXMubmFtZSArICc8L2gyPjwvZGl2PjwvYT4nO1xyXG5cclxuXHRcdCRwYXJlbnQuYXBwZW5kKCAkKGRpdikgKTtcclxuXHR9XHJcblxyXG5cdFxyXG5cclxuXHJcblxyXG5cclxufSIsIlxyXG5leHBvcnQgY2xhc3MgVmVuZG9yIHtcclxuXHRcclxuXHRcclxuXHRcclxuXHRwdWJsaWMgaWQ6IG51bWJlcjtcclxuXHRwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG5cdHB1YmxpYyBwcm9kdWN0czogbnVtYmVyW107XHJcblxyXG5cdHB1YmxpYyAkZG9tOiBKUXVlcnk8SFRNTEVsZW1lbnQ+XHJcblx0XHJcblx0XHJcblx0Y29uc3RydWN0b3IoIG5hbWU6IHN0cmluZywgaWQ6bnVtYmVyICwgcHJvZHVjdHM/Om51bWJlcltdICl7XHJcblx0XHR0aGlzLmlkID0gaWQ7XHJcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xyXG5cdFx0dGhpcy5wcm9kdWN0cyA9IHByb2R1Y3RzO1xyXG5cdH1cclxuXHJcblx0ZGlzcGxheUJ1dHRvbnMoICRwYXJlbnQ6IEpRdWVyeTxIVE1MRWxlbWVudD4gKTogdm9pZCB7XHJcblxyXG5cdFx0bGV0IGJ1dHRvbjogc3RyaW5nID0gJzxidXR0b24gaWQ9XCJ2JyArIHRoaXMuaWQgKyAnXCIgY2xhc3MgPVwidmVuZG9yQnV0dG9uXCIgPicgKyB0aGlzLm5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0aGlzLm5hbWUuc2xpY2UoMSkgKyAnPC9idXR0b24+JztcclxuXHRcclxuXHRcdHRoaXMuJGRvbSA9ICQoYnV0dG9uKTtcclxuXHJcblx0XHQkcGFyZW50LmFwcGVuZCggdGhpcy4kZG9tICk7XHJcblxyXG5cdH1cclxuXHJcblx0ZGlzcGxheVZlbmRvclNwYWNlKCAkcGFyZW50OiBKUXVlcnk8SFRNTEVsZW1lbnQ+ICk6dm9pZHtcclxuXHRcdGxldCBkaXY6IHN0cmluZyA9ICc8ZGl2IGlkPVwidmVuZG9yLXYnICsgdGhpcy5pZCArJ1wiIGNsYXNzPVwiY29udGFpbmVyIHZlbmRvciAnICsgdGhpcy5uYW1lICsgJ1wiPic7XHJcblx0XHRcdGRpdiArPSAnPGgyPicgKyB0aGlzLm5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0aGlzLm5hbWUuc2xpY2UoMSkgKyc8L2gyPic7XHJcblx0XHRcdGRpdiArPSAnPGRpdiBjbGFzcz1cInZlbmRvcldpbmVcIj4nO1xyXG5cdFx0XHRkaXYgKz0gJzwvZGl2Pic7XHJcblx0XHRcdGRpdiArPSAnPC9kaXY+JztcclxuXHRcdFxyXG5cdFx0dGhpcy4kZG9tID0gJChkaXYpO1xyXG5cclxuXHRcdCRwYXJlbnQuYXBwZW5kKCB0aGlzLiRkb20gKTtcclxuXHR9XHJcblxyXG59IiwiXHJcbmV4cG9ydCBjb25zdCBCZGRWZW5kb3JzOiB7XHJcblx0W2tleTogc3RyaW5nXSA6IHN0cmluZ3xudW1iZXJ8bnVtYmVyW11cclxufVtdID0gW1xyXG5cdHtcclxuXHRcdGlkIDogMSxcclxuXHRcdG5hbWUgOiBcInBhdWxcIixcclxuXHRcdHByb2R1Y3RzOiBbMiw0LDYsN11cclxuXHR9LFxyXG5cdHtcclxuXHRcdGlkIDogMixcclxuXHRcdG5hbWUgOiBcInBpZXJyZVwiLFxyXG5cdFx0cHJvZHVjdHM6IFsxLDIsNCw2XVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0aWQgOiAzLFxyXG5cdFx0bmFtZSA6IFwiZnJhbmNvaXNcIixcclxuXHRcdHByb2R1Y3RzOiBbMSwzLDQsN11cclxuXHR9LFxyXG5cdHtcclxuXHRcdGlkIDogNCxcclxuXHRcdG5hbWUgOiBcImZyZWRcIixcclxuXHRcdHByb2R1Y3RzOiBbMSwzLDUsNl1cclxuXHR9XHJcbl07XHJcblxyXG4iLCJcclxuZXhwb3J0IGNvbnN0IEJkZENhdGVnb3J5OiB7XHJcblx0W2tleTogc3RyaW5nXSA6IHN0cmluZ3xudW1iZXJcclxufVtdID0gW1xyXG5cdHtcclxuXHRcdGlkIDogMSxcclxuXHRcdG5hbWUgOiBcInJlZFwiLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0aWQgOiAyLFxyXG5cdFx0bmFtZSA6IFwicGlua1wiXHJcblx0fSxcclxuXHR7XHJcblx0XHRpZCA6IDMsXHJcblx0XHRuYW1lIDogXCJ3aGl0ZVwiXHJcblx0fVxyXG5dO1xyXG5cclxuIiwiaW1wb3J0IHsgV2luZSB9IGZyb20gXCJXaW5lXCI7XHJcbmltcG9ydCB7IENhdGVnb3J5IH0gZnJvbSBcIkNhdGVnb3J5XCI7XHJcbmltcG9ydCB7IFZlbmRvciB9IGZyb20gXCJWZW5kb3JcIjtcclxuLy8gaW1wb3J0IHsgQmRkV2luZSB9IGZyb20gXCJCZGRXaW5lXCI7XHJcbmltcG9ydCB7IEJkZFZlbmRvcnMgfSBmcm9tIFwiQmRkVmVuZG9yc1wiO1xyXG5pbXBvcnQgeyBCZGRDYXRlZ29yeSB9IGZyb20gXCJCZGRDYXRlZ29yeVwiO1xyXG5pbXBvcnQgeyBBUElTZXJ2aWNlIH0gZnJvbSBcIkFQSVNlcnZpY2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBBcHAge1xyXG5cdFxyXG5cdFxyXG5cclxuXHRwcml2YXRlIGNhdGVyZ29yeTogeyBpZDogbnVtYmVyLCBuYW1lOiBzdHJpbmd9W107XHJcblx0cHJpdmF0ZSB3aW5lczogeyBba2V5OnN0cmluZ106IGFueSB9W107XHJcblxyXG5cdHByaXZhdGUgZXJyb3JzOiBzdHJpbmdbXTtcclxuXHJcblx0cHJpdmF0ZSBsYXN0UGFnZTogWyBKUXVlcnk8SFRNTEVsZW1lbnQ+IF07XHJcblxyXG5cdHByaXZhdGUgdmVuZG9yOiB7IFtrZXk6c3RyaW5nXTogYW55IH07XHJcblx0cHJpdmF0ZSBjb25uZWN0ZWQ6IGJvb2xlYW47XHJcblxyXG5cdHByaXZhdGUgdGVtcEFycmF5OiB7fVtdO1xyXG5cdHByaXZhdGUgdGVtcEFycmF5MToge31bXTtcclxuXHRcclxuXHRwdWJsaWMgJG5hdjogSlF1ZXJ5PEhUTUxFbGVtZW50PjtcclxuXHRwdWJsaWMgJHZlbmRvckJ1dHRvbjogSlF1ZXJ5PEhUTUxFbGVtZW50PjtcclxuXHRwdWJsaWMgJHZlbmRvcnNwYWNlOiBKUXVlcnk8SFRNTEVsZW1lbnQ+O1xyXG5cdHB1YmxpYyAkdmVuZG9yczogSlF1ZXJ5PEhUTUxFbGVtZW50PjtcclxuXHRwdWJsaWMgJHdpbmVzOiBKUXVlcnk8SFRNTEVsZW1lbnQ+O1xyXG5cdFxyXG5cdFxyXG5cdGNvbnN0cnVjdG9yKCl7XHJcblx0XHRcclxuXHRcdC8vIHN0cnVjdHVyYWwgZWxlbWVudHNcclxuXHJcblx0XHR0aGlzLmNhdGVyZ29yeSA9IFtdO1xyXG5cdFx0dGhpcy53aW5lcyA9IFtdO1xyXG5cclxuXHRcdHRoaXMuZXJyb3JzID0gW107XHJcblx0XHRcclxuXHRcdHRoaXMubGFzdFBhZ2UgPSBbIG51bGwgXTtcclxuXHRcclxuXHRcdHRoaXMudmVuZG9yID0ge307XHJcblxyXG5cdFx0Ly8gZG9tIGVsZW1lbnRzXHJcblx0XHR0aGlzLiRuYXYgPSAkKCBcIiNuYXZcIiApO1xyXG5cdFx0dGhpcy4kdmVuZG9ycyA9ICQoIFwiI3ZlbmRvcnNcIik7XHJcblx0XHR0aGlzLiR3aW5lcyA9ICQoIFwiI3dpbmVzXCIgKTtcclxuXHRcdFxyXG5cdFx0Ly8gZnVuY3Rpb25zXHJcblx0XHR0aGlzLmluaXRDYXRlZ29yeSgpO1xyXG5cdFx0dGhpcy5pbml0KCk7XHJcblx0XHQvLyB0aGlzLmluaXRtb2JpbGUoKTtcclxuXHJcblx0fVxyXG5cclxuXHRpbml0KCk6IHZvaWQge1xyXG5cclxuXHRcdCQoIFwiI2hhbWJcIiApLmhpZGUoKTsgXHJcblx0XHQkKCBcIiNsYXN0UGFnZVwiICkuaGlkZSgpO1xyXG5cdFx0JCggXCJzZWN0aW9uXCIgKS5oaWRlKCk7XHJcblx0XHQkKCBcIiNsb2dpblwiICkuc2hvdygpO1xyXG5cclxuXHR9XHJcblxyXG5cdC8vIGluaXRtb2JpbGUoKTogdm9pZCB7XHJcblxyXG5cdC8vIFx0dmFyIG1vYmlsZSA9IFtcclxuXHQvLyBcdFx0L0FuZHJvaWQvaSxcclxuXHQvLyBcdFx0L3dlYk9TL2ksXHJcblx0Ly8gXHRcdC9pUGhvbmUvaSxcclxuXHQvLyBcdFx0L2lQYWQvaSxcclxuXHQvLyBcdFx0L2lQb2QvaSxcclxuXHQvLyBcdFx0L0JsYWNrQmVycnkvaSxcclxuXHQvLyBcdFx0L1dpbmRvd3MgUGhvbmUvaVxyXG5cdC8vIFx0XTtcclxuXHRcdFxyXG5cdC8vIFx0bW9iaWxlLmZvckVhY2goZWxlbWVudCA9PiB7XHJcblx0Ly8gXHRcdGlmKCBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKCBlbGVtZW50ICkgKXtcclxuXHJcblx0Ly8gXHRcdFx0JCggXCIucGFnZVwiICkuYXR0ciggXCJkYXRhLXJvbGVcIiAsIFwicGFnZVwiIClcclxuXHJcblxyXG5cdC8vIFx0XHR9XHJcblx0Ly8gXHR9KTtcclxuXHQvLyB9XHJcblxyXG5cdGNvbm5lY3Rpb24oIG5hbWU6c3RyaW5nLCBwYXNzOnN0cmluZyk6dm9pZCB7XHJcblx0XHRcclxuXHJcblx0XHRpZiggbmFtZSA9PSBudWxsICYmIHBhc3MgPT0gbnVsbCApe1xyXG5cdFx0XHR0aGlzLmVycm9ycy5wdXNoKCBcIlZlbmRldXIgbm9uIHJlbnNlaWduw6kgIVwiICk7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmKCAobmFtZSA9PSBudWxsKSAhPT0gKHBhc3MgPT0gbnVsbCkgKSB7XHJcblx0XHRcdGlmKCBuYW1lID09IG51bGwgKXtcclxuXHRcdFx0XHR0aGlzLmVycm9ycy5wdXNoKCBcIlZlbmRldXIgbm9uIHJlbnNlaWduw6kgIVwiICk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYoIHBhc3MgPT0gbnVsbCApe1xyXG5cdFx0XHRcdHRoaXMuZXJyb3JzLnB1c2goIFwiTW90IGRlIHBhc3NlIG5vbiByZW5zZWlnbsOpICFcIiApO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0XHJcblx0XHRcdGxldCBlbGVtZW50czpBUElTZXJ2aWNlID0gbmV3IEFQSVNlcnZpY2UoKTtcclxuXHJcblx0XHRcdGxldCB3aW5lczpQcm9taXNlPGFueT4gPSBlbGVtZW50cy5nZXRWZW5kb3IoIG5hbWUsIHBhc3MgKTtcclxuXHRcdFx0bGV0IHN1Y2Nlc3MgPSBmYWxzZTtcclxuXHJcblx0XHRcdHdpbmVzXHJcblx0XHRcdFx0LnRoZW4oICggZGF0YSApPT57XHJcblx0XHRcdFx0XHRpZiggZGF0YS5zdWNjZXNzID09IHRydWUgKXtcclxuXHRcdFx0XHRcdFx0dGhpcy52ZW5kb3IgPSBkYXRhLmRhdGE7XHJcblx0XHRcdFx0XHRcdHN1Y2Nlc3MgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHR0aGlzLmluaXRWZW5kb3IoKTtcclxuXHRcdFx0XHRcdFx0JCggXCIjbG9naW5cIiApLmhpZGUoKTtcclxuXHRcdFx0XHRcdFx0JCggXCIjaGFtYlwiICkuc2hvdygpO1xyXG5cdFx0XHRcdFx0XHQkKCBcIiNsYXN0UGFnZVwiICkuc2hvdygpO1xyXG5cdFx0XHRcdFx0XHQkKCBcIiNtZW51LWNhdGVnb3J5XCIgKS5zaG93KCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5lcnJvcnMucHVzaCggZGF0YS5lcnJvcnMgKTtcclxuXHRcdFx0XHRcdFx0dGhpcy5kaXNwbGF5RXJyb3IoKTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdC8vIHJldHVybiBzdWNjZXNzO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0LmNhdGNoKGZ1bmN0aW9uKGVycm9yKXtcclxuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHRoaXMucGFnZUdlc3Rpb24oICQoIFwiI21lbnUtY2F0ZWdvcnlcIiApICk7XHJcblx0fVxyXG5cclxuXHRpbml0VmVuZG9yKCk6dm9pZCB7XHJcblx0XHRcclxuXHRcdCQoIFwiI3ZlbmRvclwiICkuaHRtbCggdGhpcy52ZW5kb3IubmFtZSApO1xyXG5cdH1cclxuXHJcblxyXG5cdGluaXRXaGluZSggdmFsdWU6IHt9ICk6IHZvaWQge1xyXG5cclxuXHRcdC8vIHRoaXMud2luZSA9IFxyXG5cdFxyXG5cdH1cclxuXHJcblx0aW5pdENhdGVnb3J5KCk6IHZvaWQge1xyXG5cclxuXHRcdGxldCBpdGVyYXRvciA9IDA7XHJcblxyXG5cdFx0Zm9yKCBsZXQgY2F0ZWdvcnkgb2YgQmRkQ2F0ZWdvcnkgKXtcclxuXHRcdFx0bGV0IG5ld0NhdGVnb3J5ID0gbmV3IENhdGVnb3J5KGNhdGVnb3J5LmlkIGFzIG51bWJlciwgY2F0ZWdvcnkubmFtZSBhcyBzdHJpbmcpO1xyXG5cclxuXHRcdFx0dGhpcy5jYXRlcmdvcnkucHVzaCggbmV3Q2F0ZWdvcnkgKTtcclxuXHJcblx0XHRcdG5ld0NhdGVnb3J5LmRpc3BsYXlOYXYoICQoIFwiI25hdiAjbmF2LWNhdGVnb3J5XCIgKSApO1xyXG5cclxuXHRcdFx0bmV3Q2F0ZWdvcnkuZGlzTWFpbiggJCggXCJtYWluXCIgKSApO1xyXG5cclxuXHRcdFx0bmV3Q2F0ZWdvcnkuZGlzcE1lbnUoICQoIFwibWFpbiAjbWVudS1jYXRlZ29yeVwiICkgKTtcclxuXHRcdFx0aXRlcmF0b3IgKys7XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIHZIZWlnaHQgPSAxMDAgLyBpdGVyYXRvcjtcclxuXHJcblx0XHR0aGlzLiR3aW5lcy5jaGlsZHJlbigpLmNzcyggXCJoZWlnaHRcIiwgdkhlaWdodCArXCIlXCIgKTtcclxuXHR9XHJcblxyXG5cdFxyXG5cclxuXHRnZXRXaW5lc09mVmVuZG9yQW5kVHlwZXMoIHZlbmRvcklkOiBudW1iZXIgLCB0eXBlOiBzdHJpbmcgLCBsaW5rOiBhbnkpOnZvaWQge1xyXG5cclxuXHRcdGxldCB0eXBlSWQgPSB0aGlzLmdldENhdGVnb3J5SWQoIHR5cGUgKTtcclxuXHJcblx0XHRsZXQgZWxlbWVudHM6QVBJU2VydmljZSA9IG5ldyBBUElTZXJ2aWNlKCk7XHJcblx0XHRsZXQgd2luZXM6UHJvbWlzZTxhbnk+ID0gZWxlbWVudHMuZ2V0V2luZXNWZW5kb3JDYXRlZ29yeSggdmVuZG9ySWQsIHR5cGVJZCApO1xyXG5cclxuXHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHRcdHdpbmVzXHJcblx0XHRcdC50aGVuKCBmdW5jdGlvbiggZGF0YSApe1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmKCB0aGF0LndpbmVzICE9IG51bGwgKXtcclxuXHJcblx0XHRcdFx0XHR0aGF0LndpbmVzID0gW107XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRmb3IoIGxldCBpdGVtIG9mIGRhdGEgKXtcclxuXHJcblx0XHRcdFx0XHRsZXQgbmV3V2luZTpXaW5lID0gbmV3IFdpbmUoIGl0ZW0ubmFtZSwgaXRlbS5jb2xvciwgaXRlbS55ZWFyLCBpdGVtLmRlc2lnbmF0aW9uLCBpdGVtLmlkLCBpdGVtLmNhdGVnb3J5SWQgKTtcclxuXHJcblx0XHRcdFx0XHRuZXdXaW5lLmRpc3BsYXkoICQoIFwiI1wiICsgdHlwZSApICk7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHRoYXQud2luZXMucHVzaCggbmV3V2luZSApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0fSlcclxuXHRcdFx0LmNhdGNoKGZ1bmN0aW9uKGVycm9yKXtcclxuXHRcdFxyXG5cdFx0XHR9KTtcclxuXHRcdFxyXG5cdFx0JCggXCIucGFnZVwiICkuaGlkZSgpO1xyXG5cdFx0JCggbGluayApLmZhZGVJbigpO1xyXG5cclxuXHRcdHRoaXMucGFnZUdlc3Rpb24oICQoIGxpbmsgKSApO1xyXG5cdH1cclxuXHJcblx0Z2V0Q2F0ZWdvcnkoKToge31bXSB7XHJcblx0XHRyZXR1cm4gdGhpcy5jYXRlcmdvcnk7XHJcblx0fVxyXG5cclxuXHRnZXRWZW5kb3JJZCgpOm51bWJlciB7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMudmVuZG9yLmlkO1xyXG5cdH1cclxuXHJcblx0Z2V0Q2F0ZWdvcnlJZCggbmFtZUNhdDogc3RyaW5nICk6bnVtYmVyIHtcclxuXHJcblx0XHRsZXQgaWQgPSAwO1xyXG5cclxuXHRcdHRoaXMuY2F0ZXJnb3J5LmZvckVhY2goIGVsZW1lbnQgPT4ge1xyXG5cclxuXHRcdFx0aWYoZWxlbWVudC5uYW1lID09IG5hbWVDYXQgKXtcclxuXHJcblx0XHRcdFx0aWQgPSAgZWxlbWVudC5pZDtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0cmV0dXJuIGlkO1xyXG5cdH1cclxuXHJcblx0ZGlzcGxheUVycm9yKCk6IHZvaWQge1xyXG5cdFx0XHJcblx0XHR0aGlzLmVycm9ycy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG5cclxuXHRcdFx0bGV0IHAgPSBcIjxwPlwiICsgZWxlbWVudCArIFwiPC9wPlwiO1xyXG5cclxuXHRcdFx0JCggXCIjZXJyb3JzXCIgKS5hcHBlbmQoIHAgKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHQkKCBcIiNlcnJvcnNcIiApLmZhZGVJbig4MDAsIGZ1bmN0aW9uKCl7XHJcblxyXG5cdFx0XHQkKCB0aGlzICkuZmFkZU91dCg4MDAsIGZ1bmN0aW9uKCl7XHJcblxyXG5cdFx0XHRcdCQoIHRoaXMgKS5jaGlsZHJlbigpLnJlbW92ZSgpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGRldGFpbCggd2luZUlkOiBudW1iZXIgKTogdm9pZCB7XHJcblxyXG5cdFx0dGhpcy53aW5lcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG5cclxuXHRcdFx0aWYoIHdpbmVJZCA9PSBlbGVtZW50LmlkICl7XHJcblxyXG5cdFx0XHRcdGxldCB3aW5lID0gbmV3IFdpbmUoIGVsZW1lbnQubmFtZSwgZWxlbWVudC5jb2xvciwgZWxlbWVudC55ZWFyLCBlbGVtZW50LmRlc2lnbmF0aW9uLCBlbGVtZW50LmlkLCBlbGVtZW50LmNhdGVnb3J5SWQgKTtcclxuXHJcblx0XHRcdFx0d2luZS5kaXNwbGF5RGV0YWlsKCAkKCBcIiNkZXRhaWxcIiApICk7XHJcblxyXG5cdFx0XHRcdCQoIFwiI2RldGFpbFwiICkuc2xpZGVEb3duKCk7XHJcblx0XHRcdFx0JCggXCIjXCIrIGVsZW1lbnQuY29sb3IgKS5oaWRlKCk7XHJcblx0XHRcdFx0dGhpcy5wYWdlR2VzdGlvbiggJCggXCIjZGV0YWlsXCIgKSApO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxuXHRwYWdlR2VzdGlvbiggcGFnZTogSlF1ZXJ5PEhUTUxFbGVtZW50PiApOiB2b2lkIHtcclxuXHJcblx0XHRpZiggdGhpcy5sYXN0UGFnZVswXSA9PSBudWxsICl7XHJcblxyXG5cdFx0XHR0aGlzLmxhc3RQYWdlLnNwbGljZSggMCwgMSk7XHJcblx0XHRcdFxyXG5cclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmxhc3RQYWdlLnB1c2goIHBhZ2UgKTtcclxuXHJcblx0fVxyXG5cclxuXHRwcmVjZWRlbnQoKTogdm9pZHtcclxuXHJcblx0XHRsZXQgaW5kZXggPSB0aGlzLmxhc3RQYWdlLmxlbmd0aCA7XHJcblx0XHRsZXQgcGFnZSA9IHRoaXMubGFzdFBhZ2VbIGluZGV4IC0gMiBdO1xyXG5cdFx0bGV0IGN1cmVudFBhZ2UgPSAkKCBcInNlY3Rpb246dmlzaWJsZVwiICk7XHJcblxyXG5cdFx0aWYoIGluZGV4ID49IDIgKXtcclxuXHJcblx0XHRcdGN1cmVudFBhZ2UuaGlkZSgpO1xyXG5cdFx0XHRcclxuXHJcblx0XHRcdGlmKCBjdXJlbnRQYWdlLmhhc0NsYXNzKCBcImNvbnRhaW5lclwiICkgKXtcclxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhcImNvbnRhaW5lcmJhY2tcIik7XHJcblx0XHRcdFx0Y3VyZW50UGFnZS5jaGlsZHJlbihcIi5pdGVtXCIpLnJlbW92ZSgpO1xyXG5cdFx0XHRcdGN1cmVudFBhZ2UuY2hpbGRyZW4oIFwiLnZpbmRldGFpbFwiICkucmVtb3ZlKCk7XHJcblxyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdFx0cGFnZS5zaG93KCk7XHJcblxyXG5cdFx0XHRpZiggcGFnZSA9PSAkKCBcIiNtZW51LWNhdGVnb3J5XCIpICl7XHJcblxyXG5cdFx0XHRcdHRoaXMubGFzdFBhZ2VbMF0gPSBudWxsO1xyXG5cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHJcblx0XHRcdFx0dGhpcy5sYXN0UGFnZS5zcGxpY2UoIGluZGV4IC0gMSAsIDEgKTtcclxuXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cclxuXHJcblx0cHJlY2VkZW50TW9iaWxlKCBwYWdlOiBKUXVlcnk8SFRNTEVsZW1lbnQ+LCBzd2lwZXN0YXJ0IDogYW55ICwgc3dpcGVzdG9wIDogYW55ICk6dm9pZCB7XHJcblxyXG5cdFx0XHJcblx0XHQvLyBjb25zb2xlLmxvZyhzd2lwZXN0YXJ0KTtcclxuXHRcdC8vIGNvbnNvbGUubG9nKHN3aXBlc3RvcCk7XHJcblx0XHRpZiggc3dpcGVzdGFydC5jb29yZHNbMF0gPCBzd2lwZXN0b3AuY29vcmRzWzBdKXtcclxuXHRcdFx0dGhpcy5wcmVjZWRlbnQoKTtcclxuXHRcdH1cclxuXHJcblx0fTtcclxuXHJcblx0cXVpdCgpe1xyXG5cclxuXHRcdCQoIFwiI2xvZ2luXCIgKS5zaG93KCk7XHJcblx0XHQkKCBcIiNoYW1iXCIgKS5oaWRlKCk7IFxyXG5cdFx0JCggXCIjbWVudS1jYXRlZ29yeVwiICkuaGlkZSgpO1xyXG5cclxuXHRcdHRoaXMudmVuZG9yID0ge307XHJcblx0XHQkKCBcIiN2ZW5kb3JcIiApLmh0bWwoIFwiXCIgKTtcclxuXHR9XHJcblxyXG59IiwiXHJcbmV4cG9ydCBjb25zdCBCZGRXaW5lOiB7XHJcblx0W2tleTogc3RyaW5nXSA6IHN0cmluZ3xudW1iZXJcclxufVtdID0gW1xyXG5cdHtcclxuXHRcdGlkIDogMSxcclxuXHRcdG5hbWUgOiBcImxlcyBtYXJndWVyaXRlc1wiLFxyXG5cdFx0Y29sb3IgOiBcIndoaXRlXCIsXHJcblx0XHR5ZWFyIDogMjAwNyxcclxuXHRcdGRlc2lnbmF0aW9uIDogXCJhb3AgY290ZXMgZHUgcm91c3NpbGxvblwiLFxyXG5cdFx0Y2F0ZWdvcnlJZCA6IDNcclxuXHR9LFxyXG5cdHtcclxuXHRcdGlkIDogMixcclxuXHRcdG5hbWUgOiAnbGVzIGxpbGFzJyAsXHJcblx0XHRjb2xvciA6IFwicmVkXCIsXHJcblx0XHR5ZWFyIDogMjAwNyxcclxuXHRcdGRlc2lnbmF0aW9uIDogXCJhb3AgY290ZXMgZHUgcm91c3NpbGxvblwiLFxyXG5cdFx0Y2F0ZWdvcnlJZCA6IDFcclxuXHR9LFxyXG5cdHtcclxuXHRcdGlkIDogMyxcclxuXHRcdG5hbWUgOiAnbWltb3NhcycsXHJcblx0XHRjb2xvciA6IFwicGlua1wiLFxyXG5cdFx0eWVhciA6IDIwMDcsXHJcblx0XHRkZXNpZ25hdGlvbiA6IFwiYW9wIGNvdGVzIGR1IHJvdXNzaWxsb25cIixcclxuXHRcdGNhdGVnb3J5SWQgOiAyXHJcblx0fSxcclxuXHR7XHJcblx0XHRpZCA6IDQsXHJcblx0XHRuYW1lIDogJ2xlcyBjaGFydWVzJyxcclxuXHRcdGNvbG9yIDogXCJyZWRcIixcclxuXHRcdHllYXIgOiAyMDA3LFxyXG5cdFx0ZGVzaWduYXRpb24gOiBcImFvcCBjb3RlcyBkdSByb3Vzc2lsbG9uXCIsXHJcblx0XHRjYXRlZ29yeUlkIDogMVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0aWQgOiA1LFxyXG5cdFx0bmFtZSA6ICdsYSByb3PDqWUgZHUgbWF0aW4nLFxyXG5cdFx0Y29sb3IgOiBcInBpbmtcIixcclxuXHRcdHllYXIgOiAyMDA3LFxyXG5cdFx0ZGVzaWduYXRpb24gOiBcImFvcCBjb3RlcyBkdSByb3Vzc2lsbG9uXCIsXHJcblx0XHRjYXRlZ29yeUlkIDogMlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0aWQgOiA2LFxyXG5cdFx0bmFtZSA6ICdncmlzIGRlcyBzYWJsZXMnLFxyXG5cdFx0Y29sb3IgOiBcInJlZFwiLFxyXG5cdFx0eWVhciA6IDIwMDcsXHJcblx0XHRkZXNpZ25hdGlvbiA6IFwiYW9wIGNvdGVzIGR1IHJvdXNzaWxsb25cIixcclxuXHRcdGNhdGVnb3J5SWQgOiAxXHJcblx0fSxcclxuXHR7XHJcblx0XHRpZCA6IDcsXHJcblx0XHRuYW1lIDogJ3JpdmVzYWx0ZSBtYXVyeScsXHJcblx0XHRjb2xvciA6IFwid2hpdGVcIixcclxuXHRcdHllYXIgOiAyMDA3LFxyXG5cdFx0ZGVzaWduYXRpb24gOiBcImFvYyBtdXNjYXQgZGUgcml2ZXNhbHRlc1wiLFxyXG5cdFx0Y2F0ZWdvcnlJZCA6IDNcclxuXHR9XHJcbl1cclxuXHJcblxyXG4iLCJpbXBvcnQge0FwcH0gZnJvbSBcIkFwcFwiO1xyXG5cclxudmFyIGFwcCA9IG5ldyBBcHAoKTtcclxuXHJcbi8vICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMgbG9naW5cclxuJCggXCJmb3JtXCIgKS5zdWJtaXQoZnVuY3Rpb24oIGV2ZW50ICl7XHJcblx0XHJcblx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0dmFyIHZlbmRvck5hbWUgPSBTdHJpbmcoICQoIFwiI3ZlbmRvck5hbWVcIiApLnZhbCgpICk7XHJcblx0dmFyIHZlbmRvclBhc3MgPSBTdHJpbmcoICQoIFwiI3ZlbmRvclBhc3N3b3JkXCIgKS52YWwoKSApO1xyXG5cclxuXHRhcHAuY29ubmVjdGlvbiggdmVuZG9yTmFtZSwgdmVuZG9yUGFzcyApO1xyXG59KTtcclxuXHJcblxyXG4vLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIG5hdmlnYXRpb25cclxuXHJcbiQoIFwiI2xhc3RQYWdlXCIgKS5jbGljayggZnVuY3Rpb24oKSB7XHJcblx0XHJcblx0YXBwLnByZWNlZGVudCgpO1xyXG5cclxufSk7XHJcblxyXG4kKCBcIiNoYW1iXCIgKS5jbGljayggZnVuY3Rpb24oIGV2ZW50ICl7XHJcblxyXG5cdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuXHRsZXQgbmF2U3RhdHVzID0gJCggXCIjbmF2XCIgKS5jc3MoIFwiZGlzcGxheVwiICk7XHJcblxyXG5cdGlmICggbmF2U3RhdHVzID09IFwiYmxvY2tcIiApe1xyXG5cclxuXHRcdCQoIFwiI25hdlwiICkuc2xpZGVVcCgpO1xyXG5cdH1cclxuXHRlbHNlIGlmKCBuYXZTdGF0dXMgPT0gXCJub25lXCIgKXtcclxuXHJcblx0XHQkKCBcIiNuYXZcIiApLnNsaWRlRG93bigpO1xyXG5cdH1cclxuXHJcbn0pO1xyXG5cclxuJCggd2luZG93ICkuY2xpY2soZnVuY3Rpb24oKXtcclxuXHJcblx0JCggXCIjbmF2XCIgKS5zbGlkZVVwKCk7XHJcblxyXG59KTtcclxuXHJcblxyXG5cclxuJCggZG9jdW1lbnQgKS5vbihcImNsaWNrXCIsIFwiLmNhdGVnb3J5LWxpbmtcIiwgZnVuY3Rpb24oIGV2ZW50ICl7XHJcblxyXG5cdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0dmFyIGxpbmtJZCA9ICQodGhpcykuYXR0cihcImhyZWZcIik7XHJcblxyXG5cdGxldCB2ZW5kb3JJZCA9IGFwcC5nZXRWZW5kb3JJZCgpO1xyXG5cdGxldCB0eXBlID0gbGlua0lkLnN1YnN0cmluZygxKTtcclxuXHRsZXQgd2luZXMgPSBhcHAuZ2V0V2luZXNPZlZlbmRvckFuZFR5cGVzKCB2ZW5kb3JJZCwgdHlwZSwgbGlua0lkICk7XHJcblx0XHJcbn0gKTtcclxuXHJcblxyXG5cclxuJCggZG9jdW1lbnQgKS5vbiggXCJjbGlja1wiLCBcIi5pdGVtXCIsIGZ1bmN0aW9uKCl7XHJcblxyXG5cdGxldCBpZD0gcGFyc2VJbnQoICQoIHRoaXMgKS5hdHRyKCBcImlkXCIgKS5zdWJzdHJpbmcoIDEgKSApO1xyXG5cclxuXHRhcHAuZGV0YWlsKCBpZCApO1xyXG5cclxufSApO1xyXG5cclxuXHJcblxyXG4kKCBcIiNxdWl0XCIgKS5jbGljayggZnVuY3Rpb24oIGV2ZW50ICl7XHJcblx0XHJcblx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcclxuXHRhcHAucXVpdCgpO1xyXG59ICk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cdC8vIEJpbmQgdGhlIHN3aXBlSGFuZGxlciBjYWxsYmFjayBmdW5jdGlvbiB0byB0aGUgc3dpcGUgZXZlbnQgb24gZGl2LmJveFxyXG5cdCQoIFwic2VjdGlvblwiICkub24oIFwic3dpcGVcIiwgc3dpcGVIYW5kbGVyICk7XHJcblxyXG5cdC8vIENhbGxiYWNrIGZ1bmN0aW9uIHJlZmVyZW5jZXMgdGhlIGV2ZW50IHRhcmdldCBhbmQgYWRkcyB0aGUgJ3N3aXBlJyBjbGFzcyB0byBpdFxyXG5cdGZ1bmN0aW9uIHN3aXBlSGFuZGxlciggZXZlbnQgOmFueSApe1xyXG5cclxuXHRcdGlmKCAkKHRoaXMpLmF0dHIoIFwiaWRcIiApICE9IFwibG9naW5cIiApe1xyXG5cclxuXHRcdFx0JCggZXZlbnQudGFyZ2V0ICkuYWRkQ2xhc3MoIFwic3dpcGVcIiApO1xyXG5cclxuXHRcdFx0dmFyIHN3aXBlc3RhcnQgPSBldmVudC5zd2lwZXN0YXJ0O1xyXG5cdFx0XHR2YXIgc3dpcGVzdG9wID0gZXZlbnQuc3dpcGVzdG9wO1xyXG5cclxuXHRcdFx0YXBwLnByZWNlZGVudE1vYmlsZSggJCggdGhpcyApICwgc3dpcGVzdGFydCAsIHN3aXBlc3RvcCApO1xyXG5cdFx0XHJcblx0XHR9IFxyXG5cdFx0XHJcblx0fVxyXG59KTsiLCJleHBvcnQgYWJzdHJhY3QgY2xhc3MgTW9kZWwge1xyXG5cclxuXHRwcml2YXRlIGlkOiBudW1iZXI7XHJcblxyXG5cclxuXHRjb25zdHJ1Y3RvciggaWQ6bnVtYmVyKXtcclxuXHRcdHRoaXMuaWQgPSBpZDtcclxuXHR9XHJcblxyXG5cdGdldElkKCk6IG51bWJlciB7XHJcblx0XHRyZXR1cm4gdGhpcy5pZDtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBhYnN0cmFjdCAkZG9tOkpRdWVyeTtcclxuXHRhYnN0cmFjdCBkaXNwbGF5KCAkcGFyZW50OiBKUXVlcnk8SFRNTEVsZW1lbnQ+ICk6dm9pZDtcclxuXHRcclxufSIsIi8vIGZ1bmN0aW9uIGRlIHRlc3QgZGVzIGVsZW1lbnRzIGpxdWVyeVxyXG5leHBvcnQgZnVuY3Rpb24gRG9tKCBzZWxlY3RvcjpzdHJpbmcgKTpKUXVlcnl7XHJcblx0bGV0IGVsZW1lbnRKcXVlcnk6SlF1ZXJ5ID0gJCggc2VsZWN0b3IgKTtcclxuXHRpZihlbGVtZW50SnF1ZXJ5Lmxlbmd0aCA8IDEgKXtcclxuXHRcdHRocm93IG5ldyBFcnJvciggXCJMJ8OpbMOpbWVudCBcIiArIHNlbGVjdG9yICsgXCIgbidleGlzdGUgcGFzIGRhbnMgdm90cmUgaHRtbCAhXCIgKTtcclxuXHR9XHJcblx0cmV0dXJuIGVsZW1lbnRKcXVlcnk7XHJcbn1cclxuXHJcbi8vIHRvIHRlc3QgcmVwbGFjZSB0aGUgXCIkXCIgb2YganF1ZXJ5IGJ5IFwiRG9tXCIgYW5kIGltcG9ydCBmdW5jdGlvbiBuZXh0IHZpZXcgaW4gY29uc29sZSBpZiB0aGVyZSBpcyBhbiBlcnJvciJdfQ==
