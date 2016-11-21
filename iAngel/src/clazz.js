var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TeacherController = (function (_super) {
    __extends(TeacherController, _super);
    function TeacherController() {
        _super.apply(this, arguments);
    }
    TeacherController.prototype.getParams = function () {
        return ['$scope', 'TeachService'];
    };
    TeacherController.prototype.onCreate = function (thas, $scope, TeachService) {
        $scope.talk = 'Thanks for use the iAngel. We can help U use it quickly!';
        var teach = TeachService.clazz;
        $scope.next = function () {
            teach.next();
            $scope.talk = teach.talk();
        };
        $scope.isEnd = function () {
            if (teach.isEnd()) {
                return 'none';
            }
            return "";
        };
        $scope.isStart = function () {
            if (teach.isStart()) {
                return 'none';
            }
            return "";
        };
        $scope.last = function () {
            var teach = TeachService.clazz;
            teach.last();
            $scope.talk = teach.talk();
        };
    };
    return TeacherController;
}(iAngel.Controller));
var TeachService = (function (_super) {
    __extends(TeachService, _super);
    function TeachService() {
        _super.apply(this, arguments);
    }
    TeachService.prototype.talk = function () {
        return this._course[this._nowIndex];
    };
    TeachService.prototype.getParams = function () {
        return [];
    };
    TeachService.prototype.isStart = function () {
        if (this._course)
            if (this._nowIndex <= 0) {
                return true;
            }
        return false;
    };
    TeachService.prototype.isEnd = function () {
        if (this._course)
            if (this._nowIndex == this._course.length - 1) {
                return true;
            }
        return false;
    };
    TeachService.prototype.initCuorse = function (arr) {
        this._nowIndex = -1;
        this._course = arr;
    };
    TeachService.prototype.next = function () {
        this._nowIndex++;
        if (this._nowIndex == this._course.length) {
            this._nowIndex--;
        }
        return this._nowIndex;
    };
    TeachService.prototype.now = function () {
        return this._nowIndex;
    };
    TeachService.prototype.last = function () {
        this._nowIndex--;
        if (this._nowIndex < 0) {
            this._nowIndex++;
        }
        return this._nowIndex;
    };
    TeachService.prototype.onCreate = function (thas) {
        thas.clazz = this;
    };
    return TeachService;
}(iAngel.Service));
var FirstController = (function (_super) {
    __extends(FirstController, _super);
    function FirstController() {
        _super.apply(this, arguments);
    }
    FirstController.prototype.getParams = function () {
        return ['$scope', 'TeachService'];
    };
    FirstController.prototype.onCreate = function (thas, $scope, TeachService) {
        var teach = TeachService.clazz;
        teach.initCuorse([
            'This is Hello World. It can teach us how to use iAngel.',
            'AngularJS and TypeScript is so cool, but we always can\'t us them be better.',
            'Sometime we want build a class use the TypeScript, but the angular has it\'s own code piece.',
            'Like that: angular.module(Name,[...]).controller(NameC,[Params,func(P){...}])',
            'The controller is bad to reuse. But if we can build the class Controller, we just write new Controller(). we can use it again in anywhere.',
        ]);
        $scope.name = 'Arthas';
    };
    return FirstController;
}(iAngel.Controller));
//# sourceMappingURL=clazz.js.map