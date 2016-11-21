var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var iAngel;
(function (iAngel) {
    var Utils = (function () {
        function Utils() {
        }
        Utils.getClassName = function (clazz) {
            return (clazz.toString().replace(/function\s?/mi, "").split("("))[0];
        };
        return Utils;
    }());
    iAngel.Utils = Utils;
    /**
     * U can use it create angularJS Object. like .controller('|N|name',['|P|$scope',|F|function($scope){...}])
     * The Class Name  => |N|
     */
    var Nut = (function () {
        /**
         * @param module module = angular.module, if U don't have any TypeScript about angular.module U can use type any.
         */
        function Nut(module) {
            var thas = this;
            this._module = module;
            var arr = this.getParams();
            if (!arr) {
                arr = [];
            }
            arr[arr.length] = function () {
                var params = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    params[_i - 0] = arguments[_i];
                }
                thas.onCreate.apply(thas, [this].concat(params));
            };
            this._init(arr, module);
        }
        Object.defineProperty(Nut.prototype, "module", {
            /**
             * return module.
             */
            get: function () {
                return this._module;
            },
            enumerable: true,
            configurable: true
        });
        return Nut;
    }());
    var Config = (function (_super) {
        __extends(Config, _super);
        function Config() {
            _super.apply(this, arguments);
        }
        Config.prototype._init = function (arr, module) {
            module.config(arr);
        };
        return Config;
    }(Nut));
    iAngel.Config = Config;
    var Directive = (function (_super) {
        __extends(Directive, _super);
        function Directive() {
            _super.apply(this, arguments);
        }
        Directive.prototype.getName = function () {
            return this._name;
        };
        Directive.prototype._init = function (arr, module) {
            this._name = Utils.getClassName(this.constructor);
            module.directive(this.getName(), arr);
        };
        return Directive;
    }(Nut));
    iAngel.Directive = Directive;
    var Controller = (function (_super) {
        __extends(Controller, _super);
        function Controller() {
            _super.apply(this, arguments);
        }
        Controller.prototype.getName = function () {
            return this._name;
        };
        Controller.prototype._init = function (arr, module) {
            this._name = Utils.getClassName(this.constructor);
            module.controller(this.getName(), arr);
        };
        return Controller;
    }(Nut));
    iAngel.Controller = Controller;
    var Service = (function (_super) {
        __extends(Service, _super);
        function Service() {
            _super.apply(this, arguments);
        }
        Service.prototype.getName = function () {
            return this._name;
        };
        Service.prototype._init = function (arr, module) {
            this._name = Utils.getClassName(this.constructor);
            module.service(this.getName(), arr);
        };
        return Service;
    }(Nut));
    iAngel.Service = Service;
})(iAngel || (iAngel = {}));
//# sourceMappingURL=iAngle.js.map