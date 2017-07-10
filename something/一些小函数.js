// 将一个地址取得参数并转换成对象
function parse(url) {
	var str = url.split('?')[1]
	var arr = str.split('&');
	var res = {};
	arr.forEach(function(item) {
		var itemArr = item.split('=');
		res[itemArr[0]] = itemArr[1];
	});
	return res;
}
var obj = parse('http://www.example.com/list?a=10&b=20&c=30&d=40');
console.log(obj);


// 模拟数组forEach
Array.prototype.myForEach = function(callback) {
	for (let i = 0; i < this.length; i++) {
		callback(this[i], i);
	}
}


// 模拟数组map
Array.prototype.myMap = function(callback) {
	var arr = [];
	for (let i = 0; i < this.length; i++) {
		arr.push(callback(this[i], i););
	}
	return arr;
}


// function add(a,b){
//  if(b!=undefinded)
if (arguments.length == 2) {
	return a + b;
} else {
	return function(j) {
		return a + j;
	}
}
}
add(2, 3);


// 数组查重
// 法1--循环遍历
function uniqueArr1(arr) {
	var res = [];
	for (var i = 0; i < arr.length; i++) {
		for (var j = 0; j < res.length; j++) {
			if (arr[i] == res[j]) {
				break;
			}
		}
		// 判断有没有相同数值（有没有break）或用flag标识
		if (j == res.length) {
			res.push(arr[i]);
		}
	}
	return res;
}

// 法2--indexOf
function uniqueArr2(arr) {
	var res = [];
	arr.forEach(function(item, index) {
		(res.indexOf(item) === -1) && res.push(item);
	})
	return res;
}

// 法3--对象键唯一性
function uniqueArr3(arr) {
	var obj = {},
		res = [];

	// // hasOwnProperty
	// for(var i=0; i<arr.length; i++){
	// 	if(!obj.hasOwnProperty(arr[i])){
	// 		obj[arr[i]] = arr[i];
	// 		res.push(arr[i]);
	// 	}
	// }

	// key--undefined
	for (var i = 0; i < arr.length; i++) {
		if (!obj[arr[i]]) {
			res.push(arr[i]);
			obj[arr[i]] = 1;
		}
	}
	return res;
}

// 法4--使用sort方法
function uniqueArr4(arr) {
	arr.sort();
	var res = [arr[0]];
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] != res[res.length - 1]) {
			res.push(arr[i]);
		}
	}
	return res;

	// // 更骚的写法
	// return arr.sort().filter(function(item,index,arr){
	// 	return item != arr[index-1];
	// })

}



var arr = [1, 4, 2, 1, 5, 3, 3];
var res1 = uniqueArr1(arr);
var res2 = uniqueArr2(arr);
var res3 = uniqueArr3(arr);
var res4 = uniqueArr4(arr);


console.log(res1)
console.log(res2)
console.log(res3)
console.log(res4)



// 数组的浅拷贝/深拷贝
// 浅拷贝--简单的值拷贝--（当然也可以for循环）
var arr2 = [1, 7, 0, 5];
// 使用concat
var copyArr1 = arr2.concat();
console.log(copyArr1);
// 使用slice
var copyArr2 = arr2.concat();
console.log(copyArr2);

// 深拷贝
var arr3 = [1, 2, [3, 4], {
	a: 5,
	b: 6
}, 7];
// 使用JSON的转换
var resArr = JSON.parse(JSON.stringify(arr3));
console.log(resArr);
// JQ的$.extend
var resArr2 = $.extend(true, [], arr3);
// 扩展原型（这里只默认数组中只包含数组或对象元素）
Object.prototype.clone = function() {
	var obj = {};

	for (var i in this) {
		obj[i] = this[i];
	}

	return obj;
}
Array.prototype.clone = function() {
	var len = this.lenght,
		arr = [];

	for (var i = 0; i < len; i++) {
		if (typeof this[i] !== "object") {
			arr.push(this[i]);
		} else {
			arr.push(this[i].clone());
		}
	}
	return arr;
}
var resArr3 = arr3.clone();


// 对象的拷贝
// 简单循环
var obj = {
	name: 'FungLeo',
	sex: 'man',
	old: '18'
}
var obj2 = copyObj(obj)

function copyObj(obj) {
	let res = {}
	for (var key in obj) {
		res[key] = obj[key]
	}
	return res
}

// JOSN
var obj3 = JSON.parse(JSON.stringify(obj))