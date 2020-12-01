(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{424:function(t,a,v){"use strict";v.r(a);var _=v(42),e=Object(_.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"map"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#map"}},[t._v("#")]),t._v(" Map")]),t._v(" "),v("p",[t._v("对象保存键值对，并且能够记住键的原始插入顺序。任何值都可以作为一个键或一个值")]),t._v(" "),v("h2",{attrs:{id:"objects-和-map-的比较"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#objects-和-map-的比较"}},[t._v("#")]),t._v(" Objects 和 map 的比较")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"left"}}),t._v(" "),v("th",[t._v("Map")]),t._v(" "),v("th",[t._v("Object")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("意外的键")]),t._v(" "),v("td",[t._v("Map 默认情况不包含任何键。"),v("br"),t._v("只包含显式插入的键。")]),t._v(" "),v("td",[t._v("一个 Object 有一个原型, "),v("br"),t._v("原型链上的键名有可能和你自己在对象上的设置的键名产生冲突。")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("键的类型")]),t._v(" "),v("td",[t._v("一个 Map的键可以是任意值，包括函数、对象或任意基本类型。")]),t._v(" "),v("td",[t._v("一个Object 的键必须是一个 String 或是Symbol。")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("键的顺序")]),t._v(" "),v("td",[t._v("Map 中的 key 是有序的。"),v("br"),t._v("当迭代的时候，一个 Map 对象以插入的顺序返回键值。")]),t._v(" "),v("td",[t._v("一个 Object 的键是无序的。")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("Size")]),t._v(" "),v("td",[t._v("Map 的键值对个数可以轻易地通过size 属性获取")]),t._v(" "),v("td",[t._v("Object 的键值对个数只能手动计算")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("迭代")]),t._v(" "),v("td",[t._v("Map 是 iterable 的，所以可以直接被迭代。")]),t._v(" "),v("td",[t._v("迭代一个Object需要以某种方式获取它的键然后才能迭代。")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("性能")]),t._v(" "),v("td",[t._v("在频繁增删键值对的场景下表现更好。")]),t._v(" "),v("td",[t._v("在频繁添加和删除键值对的场景下未作出优化。")])])])]),t._v(" "),v("h2",{attrs:{id:"构造函数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#构造函数"}},[t._v("#")]),t._v(" 构造函数")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("new Map([iterable])\n")])])]),v("table",[v("thead",[v("tr",[v("th",[t._v("参数")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("iterable")]),t._v(" "),v("td",[t._v("一个数组或者其他 iterable 对象")])])])]),t._v(" "),v("h2",{attrs:{id:"静态属性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#静态属性"}},[t._v("#")]),t._v(" 静态属性")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("静态属性")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("Map.length")]),t._v(" "),v("td",[t._v("返回Map对象的键/值对的数量")])]),t._v(" "),v("tr",[v("td",[t._v("Map[Symbol.species]")]),t._v(" "),v("td",[t._v("返回一个 "),v("code",[t._v("Map")]),t._v(" 构造函数.")])])])]),t._v(" "),v("h2",{attrs:{id:"实例属性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#实例属性"}},[t._v("#")]),t._v(" 实例属性")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("实例属性")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("constructor")]),t._v(" "),v("td",[t._v("返回一个函数，它创建了实例的原型。默认是Map函数")])]),t._v(" "),v("tr",[v("td",[t._v("size")]),t._v(" "),v("td",[t._v("返回Map对象的键/值对的数量。")])])])]),t._v(" "),v("h2",{attrs:{id:"实例方法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#实例方法"}},[t._v("#")]),t._v(" 实例方法")]),t._v(" "),v("h3",{attrs:{id:"删除"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#删除"}},[t._v("#")]),t._v(" 删除")]),t._v(" "),v("h4",{attrs:{id:"clear"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#clear"}},[t._v("#")]),t._v(" clear()")]),t._v(" "),v("p",[t._v("除Map对象中的所有元素，返回undefined.")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("myMap.clear();\n")])])]),v("h4",{attrs:{id:"delete"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#delete"}},[t._v("#")]),t._v(" delete()")]),t._v(" "),v("div",{staticClass:"language-js extra-class"},[v("pre",{pre:!0,attrs:{class:"language-js"}},[v("code",[t._v("myMap"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("delete")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),v("table",[v("thead",[v("tr",[v("th",[t._v("参数")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("key")]),t._v(" "),v("td",[t._v("元素的键。")])]),t._v(" "),v("tr",[v("td",[t._v("返回值")]),t._v(" "),v("td",[t._v("元素存在并删除返回 true；元素不存在返回 false。")])])])]),t._v(" "),v("h3",{attrs:{id:"操作"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#操作"}},[t._v("#")]),t._v(" 操作")]),t._v(" "),v("h4",{attrs:{id:"get"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#get"}},[t._v("#")]),t._v(" get()")]),t._v(" "),v("p",[t._v("返回某个 "),v("code",[t._v("Map")]),t._v(" 对象中的一个指定元素")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("myMap.get(key);\n")])])]),v("table",[v("thead",[v("tr",[v("th",[t._v("参数")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("key")]),t._v(" "),v("td",[t._v("元素的键。")])]),t._v(" "),v("tr",[v("td",[t._v("返回值")]),t._v(" "),v("td",[t._v("元素存在返回值；元素不存在返回undefined")])])])]),t._v(" "),v("h4",{attrs:{id:"has"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#has"}},[t._v("#")]),t._v(" has()")]),t._v(" "),v("p",[t._v("返回一个bool值，用来表明map 中是否存在指定元素")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("myMap.has(key);\n")])])]),v("table",[v("thead",[v("tr",[v("th",[t._v("参数")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("key")]),t._v(" "),v("td",[t._v("元素的键。")])]),t._v(" "),v("tr",[v("td",[t._v("返回值")]),t._v(" "),v("td",[t._v("元素存在返回 true；元素不存在返回 false。")])])])]),t._v(" "),v("h4",{attrs:{id:"set"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#set"}},[t._v("#")]),t._v(" set()")]),t._v(" "),v("p",[v("code",[t._v("Map")]),t._v(" 对象添加或更新一个指定了键（"),v("code",[t._v("key")]),t._v("）和值（"),v("code",[t._v("value")]),t._v("）的（新）键值对")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("myMap.set(key, value);\n")])])]),v("table",[v("thead",[v("tr",[v("th",[t._v("参数")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("key")]),t._v(" "),v("td",[t._v("元素的键。")])]),t._v(" "),v("tr",[v("td",[t._v("value")]),t._v(" "),v("td",[t._v("元素的值。")])]),t._v(" "),v("tr",[v("td",[t._v("返回值")]),t._v(" "),v("td",[v("code",[t._v("Map")]),t._v(" 对象")])])])]),t._v(" "),v("h4",{attrs:{id:"foreach"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#foreach"}},[t._v("#")]),t._v(" forEach()")]),t._v(" "),v("p",[t._v("插入顺序依次对 "),v("code",[t._v("Map")]),t._v(" 中每个键/值对执行一次给定的函数")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("myMap.forEach(callback([value][,key][,map])[, thisArg])\n")])])]),v("table",[v("thead",[v("tr",[v("th",[t._v("迭代方法参数")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("callback()")]),t._v(" "),v("td",[t._v("每个元素所要执行的函数")])]),t._v(" "),v("tr",[v("td",[t._v("thisArg(可选)")]),t._v(" "),v("td",[t._v("执行回调函数 "),v("code",[t._v("callback")]),t._v(" 时，用作 "),v("code",[t._v("this")]),t._v(" 的值")])])])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("callback()参数")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("value(可选)")]),t._v(" "),v("td",[t._v("每个迭代的值")])]),t._v(" "),v("tr",[v("td",[t._v("key(可选)")]),t._v(" "),v("td",[t._v("每个迭代的键")])]),t._v(" "),v("tr",[v("td",[t._v("map(可选)")]),t._v(" "),v("td",[t._v("被迭代的map")])])])]),t._v(" "),v("h3",{attrs:{id:"迭代器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#迭代器"}},[t._v("#")]),t._v(" 迭代器")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("实例方法")]),t._v(" "),v("th",[t._v("返回")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("entries()")]),t._v(" "),v("td",[t._v("新的 Map 迭代器对象")])]),t._v(" "),v("tr",[v("td",[t._v("keys()")]),t._v(" "),v("td",[t._v("Map 迭代器对象的键")])]),t._v(" "),v("tr",[v("td",[t._v("values()")]),t._v(" "),v("td",[t._v("Map 迭代器对象的值。")])]),t._v(" "),v("tr",[v("td",[t._v("myMap[Symbol.iterator]")]),t._v(" "),v("td",[t._v("entries() 方法是同一个函数")])])])])])}),[],!1,null,null,null);a.default=e.exports}}]);