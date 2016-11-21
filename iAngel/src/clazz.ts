class TeacherController extends iAngel.Controller<any> {
    getParams(): Array<string> {
        return ['$scope','TeachService'];
    }

    onCreate(thas, $scope, TeachService) {
        $scope.talk = 'Thanks for use the iAngel. We can help U use it quickly!';
        var teach: TeachService = TeachService.clazz;
        $scope.next = function () {
           
            teach.next();
            $scope.talk = teach.talk();
        }

        $scope.isEnd = function () {
            if (teach.isEnd()) {
                return 'none';
            }
            return "";
        }

        $scope.isStart = function () {
            if (teach.isStart()) {
                return 'none'
            }
            return "";
        }

        $scope.last = function () {
            var teach: TeachService = TeachService.clazz;
            teach.last();
            $scope.talk = teach.talk();
        }
    }
}

class TeachService extends iAngel.Service<any> {
    private _course: Array<string>;
    private _nowIndex: number;
    talk(): string {
        return this._course[this._nowIndex];
    }

    getParams(): Array<string> {
        return [];
    }

    isStart(): boolean {
        if (this._course)
        if (this._nowIndex <= 0) {
            return true;
        }

        return false;
    }

    isEnd(): boolean {
        if (this._course)
        if (this._nowIndex == this._course.length - 1) {
            return true;
        }

        return false;
    }

    initCuorse(arr: Array<string>) {
        this._nowIndex = -1;
        this._course = arr;
    }

    next(): number {
        this._nowIndex ++;
        if (this._nowIndex == this._course.length) {
            this._nowIndex --;
        }
        return this._nowIndex;
    }

    now(): number {
        return this._nowIndex;
    }

    last(): number {
        this._nowIndex --;
        if (this._nowIndex < 0) {
            this._nowIndex ++;
        }
        return this._nowIndex;
    }

    onCreate(thas) {
        thas.clazz = this;
    }
}

class FirstController extends iAngel.Controller<any> {
    getParams(): Array<string> {
        return ['$scope','TeachService'];
    }

    onCreate(thas, $scope, TeachService) {
        var teach: TeachService = TeachService.clazz;
        teach.initCuorse([
            'This is Hello World. It can teach us how to use iAngel.',
            'AngularJS and TypeScript is so cool, but we always can\'t us them be better.',
            'Sometime we want build a class use the TypeScript, but the angular has it\'s own code piece.',
            'Like that: angular.module(Name,[...]).controller(NameC,[Params,func(P){...}])',
            'The controller is bad to reuse. But if we can build the class Controller, we just write new Controller(). we can use it again in anywhere.',
        ]);
        $scope.name = 'Arthas';
    }
}

