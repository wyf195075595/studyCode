"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
console.log('ok');
// 创建一个类
function People(name, age) {
    this.name = name;
    this.age = age;
}
// 添加静态方法
People.hello = function () {
    console.log("\u6211\u53EB" + this.name + ",\u6211\u4ECA\u5E74" + this.age + "\u4E86");
};
//添加实例方法
People.prototype.say = function () {
    console.log("\u6211\u53EB" + this.name);
};
var xiaoming = new People('小明', 3);
xiaoming.say();
console.log(xiaoming);
// 创建Animal类
var Animal = /** @class */ (function () {
    function Animal(name, action) {
        this.action = action;
        this.name = name;
    }
    // 实例方法
    Animal.prototype.cry = function () {
        console.log(this.name + "会" + this.action);
    };
    // 静态方法
    Animal.hello = function () {
        console.log("我是" + this.name + "，我会" + this.action);
    };
    return Animal;
}());
var dog = new Animal('田园犬', '跑');
dog.cry();
console.log(dog);
// 封装
var Toast = /** @class */ (function () {
    function Toast() {
        this.alert = function (text) {
            // console.log('弹窗')
            var pain = document.createElement('div');
            pain.classList.add('pain-toast');
            pain.innerHTML = text;
            document.body.appendChild(pain);
        };
        this.hide = function (time) {
            if (time === void 0) { time = 1500; }
            setTimeout(function () {
                new Toast().hide();
                document.getElementsByClassName('pain-toast')[0].style.display = 'none';
            }, time);
        };
    }
    return Toast;
}());
// new Toast().alert('太好热')
// new Toast().hide()
// 异步动作
function test1(a, b) {
    return new Promise(function (resolve, reject) {
        if (b != 0) {
            setTimeout(function () {
                // 成功回调
                return resolve(a / b);
                // 后面不会被执行
                console.log('111');
            }, 2000);
        }
        else {
            setTimeout(function () {
                // 失败回调
                reject('被除数不能为0');
            }, 2000);
        }
    }).catch(function (err) {
        console.log(err);
    });
}
// 同步动作
function print(a, b) {
    return __awaiter(this, void 0, void 0, function () {
        var c;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, test1(a, b)];
                case 1:
                    c = _a.sent();
                    console.log(c);
                    return [2 /*return*/];
            }
        });
    });
}
console.log(print(10, 0));
var arr = [1, 2, 3];
var reg = new RegExp(/qq/);
console.log(typeof reg);
console.log(arr instanceof RegExp);
console.log(Array);
console.log(typeof 11);
console.log(new String('xiaoming') instanceof String);
// arr.unshift(3,4,5)
// console.table(arr)
console.log(arr.indexOf(3));
