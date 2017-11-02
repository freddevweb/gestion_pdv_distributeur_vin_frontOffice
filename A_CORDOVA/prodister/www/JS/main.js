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
                    this.url = "http://192.168.110.52/courses_typescript/vendor_products/API/";
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
                            console.log(error);
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
                            console.log("containerback");
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
                    console.log();
                }
                precedentMobile(page, swipestart, swipestop) {
                    console.log(swipestart);
                    console.log(swipestop);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRTL0FQSVNlcnZpY2UudHMiLCJUUy9XaW5lLnRzIiwiVFMvQ2F0ZWdvcnkudHMiLCJUUy9WZW5kb3IudHMiLCJUUy9CZGRWZW5kb3JzLnRzIiwiVFMvQmRkQ2F0ZWdvcnkudHMiLCJUUy9BcHAudHMiLCJUUy9CZGRXaW5lLnRzIiwiVFMvbWFpbi50cyIsIlRTL01vZGVsLnRzIiwiVFMvdGVzdEpxdWVyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O1lBQ0EsYUFBQTtnQkFnQkM7b0JBYkEsWUFBWTtvQkFDSixRQUFHLEdBQVcsMERBQTBELENBQUM7Z0JBWW5FLENBQUM7Z0JBWGYsU0FBUztnQkFDVCx3RkFBd0Y7Z0JBQ3hGLDBCQUEwQjtnQkFDMUIsTUFBTSxDQUFDLFVBQVU7b0JBRWhCLEVBQUUsQ0FBQSxDQUFDLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFBLENBQUM7d0JBQ3hCLFVBQVUsQ0FBQyxRQUFRLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztvQkFDeEMsQ0FBQztvQkFDRCxNQUFNLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQztnQkFDNUIsQ0FBQztnQkFFYyxDQUFDO2dCQUVoQixRQUFRO29CQUVQLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBRSxDQUFDLE9BQVcsRUFBRyxNQUFVLEVBQU8sRUFBRTt3QkFFckQsQ0FBQyxDQUFDLElBQUksQ0FBQzs0QkFDTixHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxPQUFPOzRCQUN2QixRQUFRLEVBQUcsTUFBTTs0QkFDakIsT0FBTyxFQUFFLFVBQVMsS0FBUztnQ0FDMUIsT0FBTyxDQUFFLEtBQUssQ0FBRSxDQUFDOzRCQUNsQixDQUFDOzRCQUNELEtBQUssRUFBRSxVQUFVLEtBQVE7Z0NBQ3hCLE1BQU0sQ0FBRSxLQUFLLENBQUUsQ0FBQzs0QkFDakIsQ0FBQzt5QkFFRCxDQUFDLENBQUE7b0JBQ0gsQ0FBQyxDQUFDLENBQUE7Z0JBQ0gsQ0FBQztnQkFHRCxzQkFBc0Is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QVU7b0JBRWhDLEVBQUUsQ0FBQSxDQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFFLElBQUksT0FBUSxDQUFDLENBQUEsQ0FBQzt3QkFFckMsQ0FBQyxDQUFFLEtBQUssQ0FBQyxNQUFNLENBQUUsQ0FBQyxRQUFRLENBQUUsT0FBTyxDQUFFLENBQUM7d0JBRXRDLElBQUksVUFBVSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7d0JBQ2xDLElBQUksU0FBUyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUM7d0JBRWhDLEdBQUcsQ0FBQyxlQUFlLENBQUUsQ0FBQyxDQUFFLElBQUksQ0FBRSxFQUFHLFVBQVUsRUFBRyxTQUFTLENBQUUsQ0FBQztvQkFFM0QsQ0FBQztnQkFFRixDQUFDO1lBQ0YsQ0FBQyxDQUFDLENBQUM7UUFBQSxDQUFDOzs7Ozs7Ozs7O1lDdEdKLFFBQUE7Z0JBS0MsWUFBYSxFQUFTO29CQUNyQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztnQkFDZCxDQUFDO2dCQUVELEtBQUs7b0JBQ0osTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7Z0JBQ2hCLENBQUM7YUFLRCxDQUFBOztRQUFBLENBQUM7Ozs7OztJQ2hCRix1Q0FBdUM7SUFDdkMsYUFBcUIsUUFBZTtRQUNuQyxJQUFJLGFBQWEsR0FBVSxDQUFDLENBQUUsUUFBUSxDQUFFLENBQUM7UUFDekMsRUFBRSxDQUFBLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFFLENBQUMsQ0FBQSxDQUFDO1lBQzdCLE1BQU0sSUFBSSxLQUFLLENBQUUsWUFBWSxHQUFHLFFBQVEsR0FBRyxpQ0FBaUMsQ0FBRSxDQUFDO1FBQ2hGLENBQUM7UUFDRCxNQUFNLENBQUMsYUFBYSxDQUFDO0lBQ3RCLENBQUM7Ozs7O1lBRUQsMkdBQTJHO1FBQUEsQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmV4cG9ydCBjbGFzcyBBUElTZXJ2aWNlIHtcclxuXHJcblx0cHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IEFQSVNlcnZpY2UgPSBudWxsO1xyXG5cdC8vdGVzdCBsb2NhbFxyXG5cdHByaXZhdGUgdXJsOiBzdHJpbmcgPSBcImh0dHA6Ly9sb2NhbGhvc3QvY291cnNlc190eXBlc2NyaXB0L3ZlbmRvcl9wcm9kdWN0cy9BUEkvXCI7XHJcblx0Ly8gbW9iaWxlXHJcblx0Ly8gcHJpdmF0ZSB1cmw6IHN0cmluZyA9IFwiaHR0cDovLzE5Mi4xNjguMTAuNTIvY291cnNlc190eXBlc2NyaXB0L3ZlbmRvcl9wcm9kdWN0cy9BUEkvXCI7XHJcblx0Ly8gZGVzaWduIHBhdGVybiBzaW5nbGV0b25cclxuXHRzdGF0aWMgZ2V0U2VydmljZSgpOkFQSVNlcnZpY2Uge1xyXG5cclxuXHRcdGlmKCFBUElTZXJ2aWNlLmluc3RhbmNlKXtcclxuXHRcdFx0QVBJU2VydmljZS5pbnN0YW5jZSA9IG5ldyBBUElTZXJ2aWNlKCk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gQVBJU2VydmljZS5pbnN0YW5jZTtcclxuXHR9XHJcblxyXG5cdGNvbnN0cnVjdG9yKCl7fTtcclxuXHJcblx0Z2V0V2luZXMoKTogUHJvbWlzZSA8YW55PiB7XHJcblxyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKCAocmVzb2x2ZTphbnkgLCByZWplY3Q6YW55KTogYW55ID0+IHtcclxuXHJcblx0XHRcdCQuYWpheCh7XHJcblx0XHRcdFx0dXJsOiB0aGlzLnVybCArIFwid2luZXNcIixcclxuXHRcdFx0XHRkYXRhVHlwZSA6IFwianNvblwiLFxyXG5cdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHdpbmVzOiB7fSl7XHJcblx0XHRcdFx0XHRyZXNvbHZlKCB3aW5lcyApOyBcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGVycm9yOiBmdW5jdGlvbiggd2luZXM6e30gKXtcclxuXHRcdFx0XHRcdHJlamVjdCggd2luZXMgKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9KVxyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cclxuXHRnZXRXaW5lc1ZlbmRvckNhdGVnb3J5KCB2ZW5kb3JJZDpudW1iZXIsIHR5cGU6bnVtYmVyICk6IFByb21pc2UgPGFueT4ge1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoIChyZXNvbHZlOmFueSAsIHJlamVjdDphbnkpOiBhbnkgPT4ge1xyXG5cclxuXHRcdFx0JC5hamF4KHtcclxuXHRcdFx0XHR1cmw6IHRoaXMudXJsICsgXCJ3aW5lcy9cIiArIHZlbmRvcklkICsgXCIvXCIgKyB0eXBlICxcclxuXHRcdFx0XHRkYXRhVHlwZSA6IFwianNvblwiLFxyXG5cclxuXHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbih3aW5lczoge30pe1xyXG5cdFx0XHRcdFx0cmVzb2x2ZSggd2luZXMgKTsgXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRlcnJvcjogZnVuY3Rpb24oIHdpbmVzOnt9ICl7XHJcblx0XHRcdFx0XHRyZWplY3QoIHdpbmVzICk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSlcclxuXHRcdH0pXHJcblx0fVxyXG5cclxuXHRnZXRWZW5kb3IoIG5hbWU6c3RyaW5nLCBwYXNzOiBzdHJpbmcpOiBQcm9taXNlIDxhbnk+IHtcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZSggKCByZXNvbHZlOmFueSAsIHJlamVjdDphbnkgKTphbnkgPT57XHJcblxyXG5cdFx0XHQkLmFqYXgoe1xyXG5cdFx0XHRcdHVybDogdGhpcy51cmwgKyBcInZlbmRvckxvZ2luL1wiICsgbmFtZSArIFwiL1wiICsgcGFzcyxcclxuXHRcdFx0XHRkYXRhVHlwZTogXCJqc29uXCIsXHJcblxyXG5cdFx0XHRcdHN1Y2Nlc3M6ZnVuY3Rpb24oIHZlbmRvcjp7fSApe1xyXG5cdFx0XHRcdFx0cmVzb2x2ZSggdmVuZG9yICk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRlcnJvcjpmdW5jdGlvbiggdmVuZG9yOnt9ICl7XHJcblx0XHRcdFx0XHRyZWplY3QoIHZlbmRvciApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdH0gKVxyXG5cdH1cclxuXHJcblx0XHJcblxyXG59XHJcblxyXG5cclxuIiwiXHJcbmV4cG9ydCBjbGFzcyBXaW5lIHtcclxuXHRcclxuXHRcclxuXHRwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG5cdHB1YmxpYyBjb2xvcjogc3RyaW5nO1xyXG5cdHB1YmxpYyB5ZWFyOiBudW1iZXI7XHJcblx0cHVibGljIGRlc2lnbmF0aW9uOiBzdHJpbmc7XHJcblx0cHVibGljIGNhdGVnb3J5SWQ6IG51bWJlcjtcclxuXHJcblx0cHVibGljIGlkOiBudW1iZXI7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCBuYW1lOiBzdHJpbmcsIGNvbG9yOiBzdHJpbmcsIHllYXI6bnVtYmVyLCBkZXNpZ25hdGlvbjogc3RyaW5nLCBpZDogbnVtYmVyLCBjYXRlZ29yeUlkOiBudW1iZXIgKXtcclxuXHJcblx0XHR0aGlzLmlkID0gaWQ7XHJcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xyXG5cdFx0dGhpcy5jb2xvciA9IGNvbG9yO1xyXG5cdFx0dGhpcy55ZWFyID0geWVhcjtcclxuXHRcdHRoaXMuZGVzaWduYXRpb24gPSBkZXNpZ25hdGlvbjtcclxuXHRcdHRoaXMuY2F0ZWdvcnlJZCA9IGNhdGVnb3J5SWQ7XHJcblxyXG5cdH1cclxuXHJcblxyXG5cdGRpc3BsYXkoICRwYXJlbnQ6IEpRdWVyeTxIVE1MRWxlbWVudD4gLCBpdGVyYXRvcj86IG51bWJlciApOiB2b2lkIHtcclxuXHJcblx0XHRsZXQgZGl2OiBzdHJpbmcgPSAnPGRpdiBjbGFzcz1cIml0ZW0gJyArIHRoaXMuY29sb3IgKyAnXCIgaWQ9XCJ3JyArIHRoaXMuaWQgKyAnXCIgZGF0YS1wb3NpdGlvbj1cIicgKyBpdGVyYXRvciArICdcIiBkcmFnZ2FibGU9XCJ0cnVlXCIgdGl0bGU9XCInICsgdGhpcy5kZXNpZ25hdGlvbiArICdcIiA+JztcclxuXHRcdGRpdiArPSAnPHNwYW4+JysgdGhpcy5uYW1lICsnPC9zcGFuPjwvYnI+JztcclxuXHRcdGRpdiArPSAnPHNwYW4+JysgdGhpcy55ZWFyICsnPC9zcGFuPjxiciAvPic7XHJcblx0XHRkaXYgKz0gJzwvZGl2Pic7XHJcblxyXG5cdFx0JHBhcmVudC5hcHBlbmQoICQoIGRpdiApICk7XHJcblxyXG5cdH1cclxuXHJcblx0ZGlzcGxheURldGFpbCAoICRwYXJlbnQ6IEpRdWVyeTxIVE1MRWxlbWVudD4gKTogdm9pZCB7XHJcblxyXG5cdFx0bGV0IGRpdjogc3RyaW5nID0gJzxkaXYgaWQ9XCInICsgdGhpcy5pZCArICdcIiBjbGFzcz1cInZpbmRldGFpbFwiPic7XHJcblx0XHRcdGRpdiArPSAnPGgyPicgKyB0aGlzLm5hbWUgKyAnPC9oMj4nO1xyXG5cdFx0XHRkaXYgKz0gJzxoMz4nICsgdGhpcy55ZWFyICsgJzwvaDM+JztcclxuXHRcdFx0ZGl2ICs9ICc8cD4nICsgdGhpcy5kZXNpZ25hdGlvbiArICc8L3A+JztcclxuXHRcdFx0ZGl2ICs9JzwvZGl2Pic7XHJcblxyXG5cdFx0JHBhcmVudC5hcHBlbmQoICQoIGRpdiApICk7XHJcblx0fVxyXG5cclxuXHJcbn0iLCJcclxuZXhwb3J0IGNsYXNzIENhdGVnb3J5IHtcclxuXHRcclxuXHRwdWJsaWMgaWQ6IG51bWJlcjtcclxuXHRwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG5cclxuXHRjb25zdHJ1Y3RvciggaWQ6IG51bWJlciAsIG5hbWU6IHN0cmluZyl7XHJcblx0XHR0aGlzLmlkID0gaWQ7XHJcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xyXG5cclxuXHR9XHJcblxyXG5cdGRpc3BsYXlOYXYoICAkcGFyZW50OiBKUXVlcnk8SFRNTEVsZW1lbnQ+ICl7XHJcblxyXG5cdFx0bGV0IGxpbms6IHN0cmluZyA9ICc8YSBocmVmPVwiIycgKyB0aGlzLm5hbWUgKyAnXCIgY2xhc3M9XCJjYXRlZ29yeS1saW5rXCI+PGxpPicgKyB0aGlzLm5hbWUgKyAnPC9saT48L2E+JztcclxuXHRcclxuXHRcdCRwYXJlbnQuYXBwZW5kKCAkKGxpbmspICk7XHJcblx0fVxyXG5cclxuXHRkaXNNYWluKCAkcGFyZW50OiBKUXVlcnk8SFRNTEVsZW1lbnQ+ICl7XHJcblxyXG5cdFx0bGV0IGRpdjogc3RyaW5nID0gJzxzZWN0aW9uIGlkPVwiJyArIHRoaXMubmFtZSArICdcIiBjbGFzcz1cIiBwYWdlIGJsb2NrIGNvbnRhaW5lciAnICsgdGhpcy5uYW1lICsgJ1wiICBkcmFnZ2FibGU9XCJ0cnVlXCI+IDxoMj4nICsgdGhpcy5uYW1lLnRvVXBwZXJDYXNlKCkgKyAnPC9oMj48L3NlY3Rpb24+JztcclxuXHJcblx0XHQkcGFyZW50LmFwcGVuZCggJChkaXYpICk7XHJcblxyXG5cdH1cclxuXHJcblx0ZGlzcE1lbnUoICRwYXJlbnQ6IEpRdWVyeTxIVE1MRWxlbWVudD4gKXtcclxuXHRcdGxldCBkaXY6IHN0cmluZyA9ICc8YSBocmVmPVwiIycgKyB0aGlzLm5hbWUgKyAnXCIgY2xhc3M9XCJjYXRlZ29yeS1saW5rXCI+PGRpdlwiIGNsYXNzPVwiYnV0dG9uICcgKyB0aGlzLm5hbWUgKyAnXCI+IDxoMj4nICsgdGhpcy5uYW1lICsgJzwvaDI+PC9kaXY+PC9hPic7XHJcblxyXG5cdFx0JHBhcmVudC5hcHBlbmQoICQoZGl2KSApO1xyXG5cdH1cclxuXHJcblx0XHJcblxyXG5cclxuXHJcblxyXG59IiwiXHJcbmV4cG9ydCBjbGFzcyBWZW5kb3Ige1xyXG5cdFxyXG5cdFxyXG5cdFxyXG5cdHB1YmxpYyBpZDogbnVtYmVyO1xyXG5cdHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcblx0cHVibGljIHByb2R1Y3RzOiBudW1iZXJbXTtcclxuXHJcblx0cHVibGljICRkb206IEpRdWVyeTxIVE1MRWxlbWVudD5cclxuXHRcclxuXHRcclxuXHRjb25zdHJ1Y3RvciggbmFtZTogc3RyaW5nLCBpZDpudW1iZXIgLCBwcm9kdWN0cz86bnVtYmVyW10gKXtcclxuXHRcdHRoaXMuaWQgPSBpZDtcclxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XHJcblx0XHR0aGlzLnByb2R1Y3RzID0gcHJvZHVjdHM7XHJcblx0fVxyXG5cclxuXHRkaXNwbGF5QnV0dG9ucyggJHBhcmVudDogSlF1ZXJ5PEhUTUxFbGVtZW50PiApOiB2b2lkIHtcclxuXHJcblx0XHRsZXQgYnV0dG9uOiBzdHJpbmcgPSAnPGJ1dHRvbiBpZD1cInYnICsgdGhpcy5pZCArICdcIiBjbGFzcyA9XCJ2ZW5kb3JCdXR0b25cIiA+JyArIHRoaXMubmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHRoaXMubmFtZS5zbGljZSgxKSArICc8L2J1dHRvbj4nO1xyXG5cdFxyXG5cdFx0dGhpcy4kZG9tID0gJChidXR0b24pO1xyXG5cclxuXHRcdCRwYXJlbnQuYXBwZW5kKCB0aGlzLiRkb20gKTtcclxuXHJcblx0fVxyXG5cclxuXHRkaXNwbGF5VmVuZG9yU3BhY2UoICRwYXJlbnQ6IEpRdWVyeTxIVE1MRWxlbWVudD4gKTp2b2lke1xyXG5cdFx0bGV0IGRpdjogc3RyaW5nID0gJzxkaXYgaWQ9XCJ2ZW5kb3ItdicgKyB0aGlzLmlkICsnXCIgY2xhc3M9XCJjb250YWluZXIgdmVuZG9yICcgKyB0aGlzLm5hbWUgKyAnXCI+JztcclxuXHRcdFx0ZGl2ICs9ICc8aDI+JyArIHRoaXMubmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHRoaXMubmFtZS5zbGljZSgxKSArJzwvaDI+JztcclxuXHRcdFx0ZGl2ICs9ICc8ZGl2IGNsYXNzPVwidmVuZG9yV2luZVwiPic7XHJcblx0XHRcdGRpdiArPSAnPC9kaXY+JztcclxuXHRcdFx0ZGl2ICs9ICc8L2Rpdj4nO1xyXG5cdFx0XHJcblx0XHR0aGlzLiRkb20gPSAkKGRpdik7XHJcblxyXG5cdFx0JHBhcmVudC5hcHBlbmQoIHRoaXMuJGRvbSApO1xyXG5cdH1cclxuXHJcbn0iLCJcclxuZXhwb3J0IGNvbnN0IEJkZFZlbmRvcnM6IHtcclxuXHRba2V5OiBzdHJpbmddIDogc3RyaW5nfG51bWJlcnxudW1iZXJbXVxyXG59W10gPSBbXHJcblx0e1xyXG5cdFx0aWQgOiAxLFxyXG5cdFx0bmFtZSA6IFwicGF1bFwiLFxyXG5cdFx0cHJvZHVjdHM6IFsyLDQsNiw3XVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0aWQgOiAyLFxyXG5cdFx0bmFtZSA6IFwicGllcnJlXCIsXHJcblx0XHRwcm9kdWN0czogWzEsMiw0LDZdXHJcblx0fSxcclxuXHR7XHJcblx0XHRpZCA6IDMsXHJcblx0XHRuYW1lIDogXCJmcmFuY29pc1wiLFxyXG5cdFx0cHJvZHVjdHM6IFsxLDMsNCw3XVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0aWQgOiA0LFxyXG5cdFx0bmFtZSA6IFwiZnJlZFwiLFxyXG5cdFx0cHJvZHVjdHM6IFsxLDMsNSw2XVxyXG5cdH1cclxuXTtcclxuXHJcbiIsIlxyXG5leHBvcnQgY29uc3QgQmRkQ2F0ZWdvcnk6IHtcclxuXHRba2V5OiBzdHJpbmddIDogc3RyaW5nfG51bWJlclxyXG59W10gPSBbXHJcblx0e1xyXG5cdFx0aWQgOiAxLFxyXG5cdFx0bmFtZSA6IFwicmVkXCIsXHJcblx0fSxcclxuXHR7XHJcblx0XHRpZCA6IDIsXHJcblx0XHRuYW1lIDogXCJwaW5rXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdGlkIDogMyxcclxuXHRcdG5hbWUgOiBcIndoaXRlXCJcclxuXHR9XHJcbl07XHJcblxyXG4iLCJpbXBvcnQgeyBXaW5lIH0gZnJvbSBcIldpbmVcIjtcclxuaW1wb3J0IHsgQ2F0ZWdvcnkgfSBmcm9tIFwiQ2F0ZWdvcnlcIjtcclxuaW1wb3J0IHsgVmVuZG9yIH0gZnJvbSBcIlZlbmRvclwiO1xyXG4vLyBpbXBvcnQgeyBCZGRXaW5lIH0gZnJvbSBcIkJkZFdpbmVcIjtcclxuaW1wb3J0IHsgQmRkVmVuZG9ycyB9IGZyb20gXCJCZGRWZW5kb3JzXCI7XHJcbmltcG9ydCB7IEJkZENhdGVnb3J5IH0gZnJvbSBcIkJkZENhdGVnb3J5XCI7XHJcbmltcG9ydCB7IEFQSVNlcnZpY2UgfSBmcm9tIFwiQVBJU2VydmljZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFwcCB7XHJcblx0XHJcblx0XHJcblxyXG5cdHByaXZhdGUgY2F0ZXJnb3J5OiB7IGlkOiBudW1iZXIsIG5hbWU6IHN0cmluZ31bXTtcclxuXHRwcml2YXRlIHdpbmVzOiB7IFtrZXk6c3RyaW5nXTogYW55IH1bXTtcclxuXHJcblx0cHJpdmF0ZSBlcnJvcnM6IHN0cmluZ1tdO1xyXG5cclxuXHRwcml2YXRlIGxhc3RQYWdlOiBbIEpRdWVyeTxIVE1MRWxlbWVudD4gXTtcclxuXHJcblx0cHJpdmF0ZSB2ZW5kb3I6IHsgW2tleTpzdHJpbmddOiBhbnkgfTtcclxuXHRwcml2YXRlIGNvbm5lY3RlZDogYm9vbGVhbjtcclxuXHJcblx0cHJpdmF0ZSB0ZW1wQXJyYXk6IHt9W107XHJcblx0cHJpdmF0ZSB0ZW1wQXJyYXkxOiB7fVtdO1xyXG5cdFxyXG5cdHB1YmxpYyAkbmF2OiBKUXVlcnk8SFRNTEVsZW1lbnQ+O1xyXG5cdHB1YmxpYyAkdmVuZG9yQnV0dG9uOiBKUXVlcnk8SFRNTEVsZW1lbnQ+O1xyXG5cdHB1YmxpYyAkdmVuZG9yc3BhY2U6IEpRdWVyeTxIVE1MRWxlbWVudD47XHJcblx0cHVibGljICR2ZW5kb3JzOiBKUXVlcnk8SFRNTEVsZW1lbnQ+O1xyXG5cdHB1YmxpYyAkd2luZXM6IEpRdWVyeTxIVE1MRWxlbWVudD47XHJcblx0XHJcblx0XHJcblx0Y29uc3RydWN0b3IoKXtcclxuXHRcdFxyXG5cdFx0Ly8gc3RydWN0dXJhbCBlbGVtZW50c1xyXG5cclxuXHRcdHRoaXMuY2F0ZXJnb3J5ID0gW107XHJcblx0XHR0aGlzLndpbmVzID0gW107XHJcblxyXG5cdFx0dGhpcy5lcnJvcnMgPSBbXTtcclxuXHRcdFxyXG5cdFx0dGhpcy5sYXN0UGFnZSA9IFsgbnVsbCBdO1xyXG5cdFxyXG5cdFx0dGhpcy52ZW5kb3IgPSB7fTtcclxuXHJcblx0XHQvLyBkb20gZWxlbWVudHNcclxuXHRcdHRoaXMuJG5hdiA9ICQoIFwiI25hdlwiICk7XHJcblx0XHR0aGlzLiR2ZW5kb3JzID0gJCggXCIjdmVuZG9yc1wiKTtcclxuXHRcdHRoaXMuJHdpbmVzID0gJCggXCIjd2luZXNcIiApO1xyXG5cdFx0XHJcblx0XHQvLyBmdW5jdGlvbnNcclxuXHRcdHRoaXMuaW5pdENhdGVnb3J5KCk7XHJcblx0XHR0aGlzLmluaXQoKTtcclxuXHRcdC8vIHRoaXMuaW5pdG1vYmlsZSgpO1xyXG5cclxuXHR9XHJcblxyXG5cdGluaXQoKTogdm9pZCB7XHJcblxyXG5cdFx0JCggXCIjaGFtYlwiICkuaGlkZSgpOyBcclxuXHRcdCQoIFwiI2xhc3RQYWdlXCIgKS5oaWRlKCk7XHJcblx0XHQkKCBcInNlY3Rpb25cIiApLmhpZGUoKTtcclxuXHRcdCQoIFwiI2xvZ2luXCIgKS5zaG93KCk7XHJcblxyXG5cdH1cclxuXHJcblx0Ly8gaW5pdG1vYmlsZSgpOiB2b2lkIHtcclxuXHJcblx0Ly8gXHR2YXIgbW9iaWxlID0gW1xyXG5cdC8vIFx0XHQvQW5kcm9pZC9pLFxyXG5cdC8vIFx0XHQvd2ViT1MvaSxcclxuXHQvLyBcdFx0L2lQaG9uZS9pLFxyXG5cdC8vIFx0XHQvaVBhZC9pLFxyXG5cdC8vIFx0XHQvaVBvZC9pLFxyXG5cdC8vIFx0XHQvQmxhY2tCZXJyeS9pLFxyXG5cdC8vIFx0XHQvV2luZG93cyBQaG9uZS9pXHJcblx0Ly8gXHRdO1xyXG5cdFx0XHJcblx0Ly8gXHRtb2JpbGUuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuXHQvLyBcdFx0aWYoIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goIGVsZW1lbnQgKSApe1xyXG5cclxuXHQvLyBcdFx0XHQkKCBcIi5wYWdlXCIgKS5hdHRyKCBcImRhdGEtcm9sZVwiICwgXCJwYWdlXCIgKVxyXG5cclxuXHJcblx0Ly8gXHRcdH1cclxuXHQvLyBcdH0pO1xyXG5cdC8vIH1cclxuXHJcblx0Y29ubmVjdGlvbiggbmFtZTpzdHJpbmcsIHBhc3M6c3RyaW5nKTp2b2lkIHtcclxuXHRcdFxyXG5cclxuXHRcdGlmKCBuYW1lID09IG51bGwgJiYgcGFzcyA9PSBudWxsICl7XHJcblx0XHRcdHRoaXMuZXJyb3JzLnB1c2goIFwiVmVuZGV1ciBub24gcmVuc2VpZ27DqSAhXCIgKTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYoIChuYW1lID09IG51bGwpICE9PSAocGFzcyA9PSBudWxsKSApIHtcclxuXHRcdFx0aWYoIG5hbWUgPT0gbnVsbCApe1xyXG5cdFx0XHRcdHRoaXMuZXJyb3JzLnB1c2goIFwiVmVuZGV1ciBub24gcmVuc2VpZ27DqSAhXCIgKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiggcGFzcyA9PSBudWxsICl7XHJcblx0XHRcdFx0dGhpcy5lcnJvcnMucHVzaCggXCJNb3QgZGUgcGFzc2Ugbm9uIHJlbnNlaWduw6kgIVwiICk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHRcclxuXHRcdFx0bGV0IGVsZW1lbnRzOkFQSVNlcnZpY2UgPSBuZXcgQVBJU2VydmljZSgpO1xyXG5cclxuXHRcdFx0bGV0IHdpbmVzOlByb21pc2U8YW55PiA9IGVsZW1lbnRzLmdldFZlbmRvciggbmFtZSwgcGFzcyApO1xyXG5cdFx0XHRsZXQgc3VjY2VzcyA9IGZhbHNlO1xyXG5cclxuXHRcdFx0d2luZXNcclxuXHRcdFx0XHQudGhlbiggKCBkYXRhICk9PntcclxuXHRcdFx0XHRcdGlmKCBkYXRhLnN1Y2Nlc3MgPT0gdHJ1ZSApe1xyXG5cdFx0XHRcdFx0XHR0aGlzLnZlbmRvciA9IGRhdGEuZGF0YTtcclxuXHRcdFx0XHRcdFx0c3VjY2VzcyA9IHRydWU7XHJcblx0XHRcdFx0XHRcdHRoaXMuaW5pdFZlbmRvcigpO1xyXG5cdFx0XHRcdFx0XHQkKCBcIiNsb2dpblwiICkuaGlkZSgpO1xyXG5cdFx0XHRcdFx0XHQkKCBcIiNoYW1iXCIgKS5zaG93KCk7XHJcblx0XHRcdFx0XHRcdCQoIFwiI2xhc3RQYWdlXCIgKS5zaG93KCk7XHJcblx0XHRcdFx0XHRcdCQoIFwiI21lbnUtY2F0ZWdvcnlcIiApLnNob3coKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmVycm9ycy5wdXNoKCBkYXRhLmVycm9ycyApO1xyXG5cdFx0XHRcdFx0XHR0aGlzLmRpc3BsYXlFcnJvcigpO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0Ly8gcmV0dXJuIHN1Y2Nlc3M7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQuY2F0Y2goZnVuY3Rpb24oZXJyb3Ipe1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0dGhpcy5wYWdlR2VzdGlvbiggJCggXCIjbWVudS1jYXRlZ29yeVwiICkgKTtcclxuXHR9XHJcblxyXG5cdGluaXRWZW5kb3IoKTp2b2lkIHtcclxuXHRcdFxyXG5cdFx0JCggXCIjdmVuZG9yXCIgKS5odG1sKCB0aGlzLnZlbmRvci5uYW1lICk7XHJcblx0fVxyXG5cclxuXHJcblx0aW5pdFdoaW5lKCB2YWx1ZToge30gKTogdm9pZCB7XHJcblxyXG5cdFx0Ly8gdGhpcy53aW5lID0gXHJcblx0XHJcblx0fVxyXG5cclxuXHRpbml0Q2F0ZWdvcnkoKTogdm9pZCB7XHJcblxyXG5cdFx0bGV0IGl0ZXJhdG9yID0gMDtcclxuXHJcblx0XHRmb3IoIGxldCBjYXRlZ29yeSBvZiBCZGRDYXRlZ29yeSApe1xyXG5cdFx0XHRsZXQgbmV3Q2F0ZWdvcnkgPSBuZXcgQ2F0ZWdvcnkoY2F0ZWdvcnkuaWQgYXMgbnVtYmVyLCBjYXRlZ29yeS5uYW1lIGFzIHN0cmluZyk7XHJcblxyXG5cdFx0XHR0aGlzLmNhdGVyZ29yeS5wdXNoKCBuZXdDYXRlZ29yeSApO1xyXG5cclxuXHRcdFx0bmV3Q2F0ZWdvcnkuZGlzcGxheU5hdiggJCggXCIjbmF2ICNuYXYtY2F0ZWdvcnlcIiApICk7XHJcblxyXG5cdFx0XHRuZXdDYXRlZ29yeS5kaXNNYWluKCAkKCBcIm1haW5cIiApICk7XHJcblxyXG5cdFx0XHRuZXdDYXRlZ29yeS5kaXNwTWVudSggJCggXCJtYWluICNtZW51LWNhdGVnb3J5XCIgKSApO1xyXG5cdFx0XHRpdGVyYXRvciArKztcclxuXHRcdH1cclxuXHJcblx0XHR2YXIgdkhlaWdodCA9IDEwMCAvIGl0ZXJhdG9yO1xyXG5cclxuXHRcdHRoaXMuJHdpbmVzLmNoaWxkcmVuKCkuY3NzKCBcImhlaWdodFwiLCB2SGVpZ2h0ICtcIiVcIiApO1xyXG5cdH1cclxuXHJcblx0XHJcblxyXG5cdGdldFdpbmVzT2ZWZW5kb3JBbmRUeXBlcyggdmVuZG9ySWQ6IG51bWJlciAsIHR5cGU6IHN0cmluZyAsIGxpbms6IGFueSk6dm9pZCB7XHJcblxyXG5cdFx0bGV0IHR5cGVJZCA9IHRoaXMuZ2V0Q2F0ZWdvcnlJZCggdHlwZSApO1xyXG5cclxuXHRcdGxldCBlbGVtZW50czpBUElTZXJ2aWNlID0gbmV3IEFQSVNlcnZpY2UoKTtcclxuXHRcdGxldCB3aW5lczpQcm9taXNlPGFueT4gPSBlbGVtZW50cy5nZXRXaW5lc1ZlbmRvckNhdGVnb3J5KCB2ZW5kb3JJZCwgdHlwZUlkICk7XHJcblxyXG5cdFx0bGV0IHRoYXQgPSB0aGlzO1xyXG5cdFx0d2luZXNcclxuXHRcdFx0LnRoZW4oIGZ1bmN0aW9uKCBkYXRhICl7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYoIHRoYXQud2luZXMgIT0gbnVsbCApe1xyXG5cclxuXHRcdFx0XHRcdHRoYXQud2luZXMgPSBbXTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGZvciggbGV0IGl0ZW0gb2YgZGF0YSApe1xyXG5cclxuXHRcdFx0XHRcdGxldCBuZXdXaW5lOldpbmUgPSBuZXcgV2luZSggaXRlbS5uYW1lLCBpdGVtLmNvbG9yLCBpdGVtLnllYXIsIGl0ZW0uZGVzaWduYXRpb24sIGl0ZW0uaWQsIGl0ZW0uY2F0ZWdvcnlJZCApO1xyXG5cclxuXHRcdFx0XHRcdG5ld1dpbmUuZGlzcGxheSggJCggXCIjXCIgKyB0eXBlICkgKTtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0dGhhdC53aW5lcy5wdXNoKCBuZXdXaW5lICk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9KVxyXG5cdFx0XHQuY2F0Y2goZnVuY3Rpb24oZXJyb3Ipe1xyXG5cdFx0XHJcblx0XHRcdH0pO1xyXG5cdFx0XHJcblx0XHQkKCBcIi5wYWdlXCIgKS5oaWRlKCk7XHJcblx0XHQkKCBsaW5rICkuZmFkZUluKCk7XHJcblxyXG5cdFx0dGhpcy5wYWdlR2VzdGlvbiggJCggbGluayApICk7XHJcblx0fVxyXG5cclxuXHRnZXRDYXRlZ29yeSgpOiB7fVtdIHtcclxuXHRcdHJldHVybiB0aGlzLmNhdGVyZ29yeTtcclxuXHR9XHJcblxyXG5cdGdldFZlbmRvcklkKCk6bnVtYmVyIHtcclxuXHJcblx0XHRyZXR1cm4gdGhpcy52ZW5kb3IuaWQ7XHJcblx0fVxyXG5cclxuXHRnZXRDYXRlZ29yeUlkKCBuYW1lQ2F0OiBzdHJpbmcgKTpudW1iZXIge1xyXG5cclxuXHRcdGxldCBpZCA9IDA7XHJcblxyXG5cdFx0dGhpcy5jYXRlcmdvcnkuZm9yRWFjaCggZWxlbWVudCA9PiB7XHJcblxyXG5cdFx0XHRpZihlbGVtZW50Lm5hbWUgPT0gbmFtZUNhdCApe1xyXG5cclxuXHRcdFx0XHRpZCA9ICBlbGVtZW50LmlkO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHRyZXR1cm4gaWQ7XHJcblx0fVxyXG5cclxuXHRkaXNwbGF5RXJyb3IoKTogdm9pZCB7XHJcblx0XHRcclxuXHRcdHRoaXMuZXJyb3JzLmZvckVhY2goZWxlbWVudCA9PiB7XHJcblxyXG5cdFx0XHRsZXQgcCA9IFwiPHA+XCIgKyBlbGVtZW50ICsgXCI8L3A+XCI7XHJcblxyXG5cdFx0XHQkKCBcIiNlcnJvcnNcIiApLmFwcGVuZCggcCApO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdCQoIFwiI2Vycm9yc1wiICkuZmFkZUluKDgwMCwgZnVuY3Rpb24oKXtcclxuXHJcblx0XHRcdCQoIHRoaXMgKS5mYWRlT3V0KDgwMCwgZnVuY3Rpb24oKXtcclxuXHJcblx0XHRcdFx0JCggdGhpcyApLmNoaWxkcmVuKCkucmVtb3ZlKCk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0ZGV0YWlsKCB3aW5lSWQ6IG51bWJlciApOiB2b2lkIHtcclxuXHJcblx0XHR0aGlzLndpbmVzLmZvckVhY2goZWxlbWVudCA9PiB7XHJcblxyXG5cdFx0XHRpZiggd2luZUlkID09IGVsZW1lbnQuaWQgKXtcclxuXHJcblx0XHRcdFx0bGV0IHdpbmUgPSBuZXcgV2luZSggZWxlbWVudC5uYW1lLCBlbGVtZW50LmNvbG9yLCBlbGVtZW50LnllYXIsIGVsZW1lbnQuZGVzaWduYXRpb24sIGVsZW1lbnQuaWQsIGVsZW1lbnQuY2F0ZWdvcnlJZCApO1xyXG5cclxuXHRcdFx0XHR3aW5lLmRpc3BsYXlEZXRhaWwoICQoIFwiI2RldGFpbFwiICkgKTtcclxuXHJcblx0XHRcdFx0JCggXCIjZGV0YWlsXCIgKS5zbGlkZURvd24oKTtcclxuXHRcdFx0XHQkKCBcIiNcIisgZWxlbWVudC5jb2xvciApLmhpZGUoKTtcclxuXHRcdFx0XHR0aGlzLnBhZ2VHZXN0aW9uKCAkKCBcIiNkZXRhaWxcIiApICk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG5cdHBhZ2VHZXN0aW9uKCBwYWdlOiBKUXVlcnk8SFRNTEVsZW1lbnQ+ICk6IHZvaWQge1xyXG5cclxuXHRcdGlmKCB0aGlzLmxhc3RQYWdlWzBdID09IG51bGwgKXtcclxuXHJcblx0XHRcdHRoaXMubGFzdFBhZ2Uuc3BsaWNlKCAwLCAxKTtcclxuXHRcdFx0XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMubGFzdFBhZ2UucHVzaCggcGFnZSApO1xyXG5cclxuXHR9XHJcblxyXG5cdHByZWNlZGVudCgpOiB2b2lke1xyXG5cclxuXHRcdGxldCBpbmRleCA9IHRoaXMubGFzdFBhZ2UubGVuZ3RoIDtcclxuXHRcdGxldCBwYWdlID0gdGhpcy5sYXN0UGFnZVsgaW5kZXggLSAyIF07XHJcblx0XHRsZXQgY3VyZW50UGFnZSA9ICQoIFwic2VjdGlvbjp2aXNpYmxlXCIgKTtcclxuXHJcblx0XHRpZiggaW5kZXggPj0gMiApe1xyXG5cclxuXHRcdFx0Y3VyZW50UGFnZS5oaWRlKCk7XHJcblx0XHRcdFxyXG5cclxuXHRcdFx0aWYoIGN1cmVudFBhZ2UuaGFzQ2xhc3MoIFwiY29udGFpbmVyXCIgKSApe1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiY29udGFpbmVyYmFja1wiKTtcclxuXHRcdFx0XHRjdXJlbnRQYWdlLmNoaWxkcmVuKFwiLml0ZW1cIikucmVtb3ZlKCk7XHJcblx0XHRcdFx0Y3VyZW50UGFnZS5jaGlsZHJlbiggXCIudmluZGV0YWlsXCIgKS5yZW1vdmUoKTtcclxuXHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdFxyXG5cdFx0XHRwYWdlLnNob3coKTtcclxuXHJcblx0XHRcdGlmKCBwYWdlID09ICQoIFwiI21lbnUtY2F0ZWdvcnlcIikgKXtcclxuXHJcblx0XHRcdFx0dGhpcy5sYXN0UGFnZVswXSA9IG51bGw7XHJcblxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cclxuXHRcdFx0XHR0aGlzLmxhc3RQYWdlLnNwbGljZSggaW5kZXggLSAxICwgMSApO1xyXG5cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0Y29uc29sZS5sb2coKVxyXG5cdH1cclxuXHJcblx0cHJlY2VkZW50TW9iaWxlKCBwYWdlOiBKUXVlcnk8SFRNTEVsZW1lbnQ+LCBzd2lwZXN0YXJ0IDogYW55ICwgc3dpcGVzdG9wIDogYW55ICk6dm9pZCB7XHJcblxyXG5cdFx0XHJcblx0XHRjb25zb2xlLmxvZyhzd2lwZXN0YXJ0KTtcclxuXHRcdGNvbnNvbGUubG9nKHN3aXBlc3RvcCk7XHJcblx0XHRpZiggc3dpcGVzdGFydC5jb29yZHNbMF0gPCBzd2lwZXN0b3AuY29vcmRzWzBdKXtcclxuXHRcdFx0dGhpcy5wcmVjZWRlbnQoKTtcclxuXHRcdH1cclxuXHJcblx0fTtcclxuXHJcblx0cXVpdCgpe1xyXG5cclxuXHRcdCQoIFwiI2xvZ2luXCIgKS5zaG93KCk7XHJcblx0XHQkKCBcIiNoYW1iXCIgKS5oaWRlKCk7IFxyXG5cdFx0JCggXCIjbWVudS1jYXRlZ29yeVwiICkuaGlkZSgpO1xyXG5cclxuXHRcdHRoaXMudmVuZG9yID0ge307XHJcblx0XHQkKCBcIiN2ZW5kb3JcIiApLmh0bWwoIFwiXCIgKTtcclxuXHR9XHJcblxyXG59IiwiXHJcbmV4cG9ydCBjb25zdCBCZGRXaW5lOiB7XHJcblx0W2tleTogc3RyaW5nXSA6IHN0cmluZ3xudW1iZXJcclxufVtdID0gW1xyXG5cdHtcclxuXHRcdGlkIDogMSxcclxuXHRcdG5hbWUgOiBcImxlcyBtYXJndWVyaXRlc1wiLFxyXG5cdFx0Y29sb3IgOiBcIndoaXRlXCIsXHJcblx0XHR5ZWFyIDogMjAwNyxcclxuXHRcdGRlc2lnbmF0aW9uIDogXCJhb3AgY290ZXMgZHUgcm91c3NpbGxvblwiLFxyXG5cdFx0Y2F0ZWdvcnlJZCA6IDNcclxuXHR9LFxyXG5cdHtcclxuXHRcdGlkIDogMixcclxuXHRcdG5hbWUgOiAnbGVzIGxpbGFzJyAsXHJcblx0XHRjb2xvciA6IFwicmVkXCIsXHJcblx0XHR5ZWFyIDogMjAwNyxcclxuXHRcdGRlc2lnbmF0aW9uIDogXCJhb3AgY290ZXMgZHUgcm91c3NpbGxvblwiLFxyXG5cdFx0Y2F0ZWdvcnlJZCA6IDFcclxuXHR9LFxyXG5cdHtcclxuXHRcdGlkIDogMyxcclxuXHRcdG5hbWUgOiAnbWltb3NhcycsXHJcblx0XHRjb2xvciA6IFwicGlua1wiLFxyXG5cdFx0eWVhciA6IDIwMDcsXHJcblx0XHRkZXNpZ25hdGlvbiA6IFwiYW9wIGNvdGVzIGR1IHJvdXNzaWxsb25cIixcclxuXHRcdGNhdGVnb3J5SWQgOiAyXHJcblx0fSxcclxuXHR7XHJcblx0XHRpZCA6IDQsXHJcblx0XHRuYW1lIDogJ2xlcyBjaGFydWVzJyxcclxuXHRcdGNvbG9yIDogXCJyZWRcIixcclxuXHRcdHllYXIgOiAyMDA3LFxyXG5cdFx0ZGVzaWduYXRpb24gOiBcImFvcCBjb3RlcyBkdSByb3Vzc2lsbG9uXCIsXHJcblx0XHRjYXRlZ29yeUlkIDogMVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0aWQgOiA1LFxyXG5cdFx0bmFtZSA6ICdsYSByb3PDqWUgZHUgbWF0aW4nLFxyXG5cdFx0Y29sb3IgOiBcInBpbmtcIixcclxuXHRcdHllYXIgOiAyMDA3LFxyXG5cdFx0ZGVzaWduYXRpb24gOiBcImFvcCBjb3RlcyBkdSByb3Vzc2lsbG9uXCIsXHJcblx0XHRjYXRlZ29yeUlkIDogMlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0aWQgOiA2LFxyXG5cdFx0bmFtZSA6ICdncmlzIGRlcyBzYWJsZXMnLFxyXG5cdFx0Y29sb3IgOiBcInJlZFwiLFxyXG5cdFx0eWVhciA6IDIwMDcsXHJcblx0XHRkZXNpZ25hdGlvbiA6IFwiYW9wIGNvdGVzIGR1IHJvdXNzaWxsb25cIixcclxuXHRcdGNhdGVnb3J5SWQgOiAxXHJcblx0fSxcclxuXHR7XHJcblx0XHRpZCA6IDcsXHJcblx0XHRuYW1lIDogJ3JpdmVzYWx0ZSBtYXVyeScsXHJcblx0XHRjb2xvciA6IFwid2hpdGVcIixcclxuXHRcdHllYXIgOiAyMDA3LFxyXG5cdFx0ZGVzaWduYXRpb24gOiBcImFvYyBtdXNjYXQgZGUgcml2ZXNhbHRlc1wiLFxyXG5cdFx0Y2F0ZWdvcnlJZCA6IDNcclxuXHR9XHJcbl1cclxuXHJcblxyXG4iLCJpbXBvcnQge0FwcH0gZnJvbSBcIkFwcFwiO1xyXG5cclxudmFyIGFwcCA9IG5ldyBBcHAoKTtcclxuXHJcbi8vICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMgbG9naW5cclxuJCggXCJmb3JtXCIgKS5zdWJtaXQoZnVuY3Rpb24oIGV2ZW50ICl7XHJcblx0XHJcblx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0dmFyIHZlbmRvck5hbWUgPSBTdHJpbmcoICQoIFwiI3ZlbmRvck5hbWVcIiApLnZhbCgpICk7XHJcblx0dmFyIHZlbmRvclBhc3MgPSBTdHJpbmcoICQoIFwiI3ZlbmRvclBhc3N3b3JkXCIgKS52YWwoKSApO1xyXG5cclxuXHRhcHAuY29ubmVjdGlvbiggdmVuZG9yTmFtZSwgdmVuZG9yUGFzcyApO1xyXG59KTtcclxuXHJcblxyXG4vLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIG5hdmlnYXRpb25cclxuXHJcbiQoIFwiI2xhc3RQYWdlXCIgKS5jbGljayggZnVuY3Rpb24oKSB7XHJcblx0XHJcblx0YXBwLnByZWNlZGVudCgpO1xyXG5cclxufSk7XHJcblxyXG4kKCBcIiNoYW1iXCIgKS5jbGljayggZnVuY3Rpb24oIGV2ZW50ICl7XHJcblxyXG5cdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuXHRsZXQgbmF2U3RhdHVzID0gJCggXCIjbmF2XCIgKS5jc3MoIFwiZGlzcGxheVwiICk7XHJcblxyXG5cdGlmICggbmF2U3RhdHVzID09IFwiYmxvY2tcIiApe1xyXG5cclxuXHRcdCQoIFwiI25hdlwiICkuc2xpZGVVcCgpO1xyXG5cdH1cclxuXHRlbHNlIGlmKCBuYXZTdGF0dXMgPT0gXCJub25lXCIgKXtcclxuXHJcblx0XHQkKCBcIiNuYXZcIiApLnNsaWRlRG93bigpO1xyXG5cdH1cclxuXHJcbn0pO1xyXG5cclxuJCggd2luZG93ICkuY2xpY2soZnVuY3Rpb24oKXtcclxuXHJcblx0JCggXCIjbmF2XCIgKS5zbGlkZVVwKCk7XHJcblxyXG59KTtcclxuXHJcblxyXG5cclxuJCggZG9jdW1lbnQgKS5vbihcImNsaWNrXCIsIFwiLmNhdGVnb3J5LWxpbmtcIiwgZnVuY3Rpb24oIGV2ZW50ICl7XHJcblxyXG5cdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0dmFyIGxpbmtJZCA9ICQodGhpcykuYXR0cihcImhyZWZcIik7XHJcblxyXG5cdGxldCB2ZW5kb3JJZCA9IGFwcC5nZXRWZW5kb3JJZCgpO1xyXG5cdGxldCB0eXBlID0gbGlua0lkLnN1YnN0cmluZygxKTtcclxuXHRsZXQgd2luZXMgPSBhcHAuZ2V0V2luZXNPZlZlbmRvckFuZFR5cGVzKCB2ZW5kb3JJZCwgdHlwZSwgbGlua0lkICk7XHJcblx0XHJcbn0gKTtcclxuXHJcblxyXG5cclxuJCggZG9jdW1lbnQgKS5vbiggXCJjbGlja1wiLCBcIi5pdGVtXCIsIGZ1bmN0aW9uKCl7XHJcblxyXG5cdGxldCBpZD0gcGFyc2VJbnQoICQoIHRoaXMgKS5hdHRyKCBcImlkXCIgKS5zdWJzdHJpbmcoIDEgKSApO1xyXG5cclxuXHRhcHAuZGV0YWlsKCBpZCApO1xyXG5cclxufSApO1xyXG5cclxuXHJcblxyXG4kKCBcIiNxdWl0XCIgKS5jbGljayggZnVuY3Rpb24oIGV2ZW50ICl7XHJcblx0XHJcblx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcclxuXHRhcHAucXVpdCgpO1xyXG59ICk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cdC8vIEJpbmQgdGhlIHN3aXBlSGFuZGxlciBjYWxsYmFjayBmdW5jdGlvbiB0byB0aGUgc3dpcGUgZXZlbnQgb24gZGl2LmJveFxyXG5cdCQoIFwic2VjdGlvblwiICkub24oIFwic3dpcGVcIiwgc3dpcGVIYW5kbGVyICk7XHJcblxyXG5cdC8vIENhbGxiYWNrIGZ1bmN0aW9uIHJlZmVyZW5jZXMgdGhlIGV2ZW50IHRhcmdldCBhbmQgYWRkcyB0aGUgJ3N3aXBlJyBjbGFzcyB0byBpdFxyXG5cdGZ1bmN0aW9uIHN3aXBlSGFuZGxlciggZXZlbnQgOmFueSApe1xyXG5cclxuXHRcdGlmKCAkKHRoaXMpLmF0dHIoIFwiaWRcIiApICE9IFwibG9naW5cIiApe1xyXG5cclxuXHRcdFx0JCggZXZlbnQudGFyZ2V0ICkuYWRkQ2xhc3MoIFwic3dpcGVcIiApO1xyXG5cclxuXHRcdFx0dmFyIHN3aXBlc3RhcnQgPSBldmVudC5zd2lwZXN0YXJ0O1xyXG5cdFx0XHR2YXIgc3dpcGVzdG9wID0gZXZlbnQuc3dpcGVzdG9wO1xyXG5cclxuXHRcdFx0YXBwLnByZWNlZGVudE1vYmlsZSggJCggdGhpcyApICwgc3dpcGVzdGFydCAsIHN3aXBlc3RvcCApO1xyXG5cdFx0XHJcblx0XHR9IFxyXG5cdFx0XHJcblx0fVxyXG59KTsiLCJleHBvcnQgYWJzdHJhY3QgY2xhc3MgTW9kZWwge1xyXG5cclxuXHRwcml2YXRlIGlkOiBudW1iZXI7XHJcblxyXG5cclxuXHRjb25zdHJ1Y3RvciggaWQ6bnVtYmVyKXtcclxuXHRcdHRoaXMuaWQgPSBpZDtcclxuXHR9XHJcblxyXG5cdGdldElkKCk6IG51bWJlciB7XHJcblx0XHRyZXR1cm4gdGhpcy5pZDtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBhYnN0cmFjdCAkZG9tOkpRdWVyeTtcclxuXHRhYnN0cmFjdCBkaXNwbGF5KCAkcGFyZW50OiBKUXVlcnk8SFRNTEVsZW1lbnQ+ICk6dm9pZDtcclxuXHRcclxufSIsIi8vIGZ1bmN0aW9uIGRlIHRlc3QgZGVzIGVsZW1lbnRzIGpxdWVyeVxyXG5leHBvcnQgZnVuY3Rpb24gRG9tKCBzZWxlY3RvcjpzdHJpbmcgKTpKUXVlcnl7XHJcblx0bGV0IGVsZW1lbnRKcXVlcnk6SlF1ZXJ5ID0gJCggc2VsZWN0b3IgKTtcclxuXHRpZihlbGVtZW50SnF1ZXJ5Lmxlbmd0aCA8IDEgKXtcclxuXHRcdHRocm93IG5ldyBFcnJvciggXCJMJ8OpbMOpbWVudCBcIiArIHNlbGVjdG9yICsgXCIgbidleGlzdGUgcGFzIGRhbnMgdm90cmUgaHRtbCAhXCIgKTtcclxuXHR9XHJcblx0cmV0dXJuIGVsZW1lbnRKcXVlcnk7XHJcbn1cclxuXHJcbi8vIHRvIHRlc3QgcmVwbGFjZSB0aGUgXCIkXCIgb2YganF1ZXJ5IGJ5IFwiRG9tXCIgYW5kIGltcG9ydCBmdW5jdGlvbiBuZXh0IHZpZXcgaW4gY29uc29sZSBpZiB0aGVyZSBpcyBhbiBlcnJvciJdfQ==
