(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{190:function(t,a,s){"use strict";s.r(a);var n=s(1),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("静态语言与动态语言孰优孰劣一直是网络上争论不休的话题。在这篇论文中（"),s("a",{attrs:{href:"https://cacm.acm.org/magazines/2017/10/221326-a-large-scale-study-of-programming-languages-and-code-quality-in-github/abstract",target:"_blank",rel:"noopener noreferrer"}},[t._v("英文原文"),s("OutboundLink")],1),t._v("，"),s("a",{attrs:{href:"https://www.zcfy.cc/article/a-large-scale-study-of-programming-languages-and-code-quality-in-github",target:"_blank",rel:"noopener noreferrer"}},[t._v("中文翻译"),s("OutboundLink")],1),t._v("），研究者通过统计 GitHub 上的不同语言的热门项目，的确得出了静态语言比动态语言更好维护的结论。")]),t._v(" "),s("p",[t._v("如果我们想同时拥有静态语言的严谨和动态语言的自由，一方面就是让静态语言更动态，比如 Java 10 中新的 "),s("code",[t._v("var")]),t._v(" 关键字；另一方面当然就是让动态语言变得更加静态，这篇文章的主角：Python type hints。")]),t._v(" "),s("h2",{attrs:{id:"python-type-hints-的进化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#python-type-hints-的进化","aria-hidden":"true"}},[t._v("#")]),t._v(" Python type hints 的进化")]),t._v(" "),s("h3",{attrs:{id:"python-3-0-function-annotation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#python-3-0-function-annotation","aria-hidden":"true"}},[t._v("#")]),t._v(" Python 3.0: function annotation")]),t._v(" "),s("p",[t._v("在 Python 中，我们可以写这么一个函数")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("plus")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b\n")])])]),s("p",[t._v("如果我想要声明这个函数参数和返回值的类型，可以使用下面的写法：")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("plus")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b\n")])])]),s("p",[t._v("这就是被称为 "),s("strong",[t._v("function annotation")]),t._v(" 的写法。使用冒号 "),s("code",[t._v(":")]),t._v(" 加类型名来代表参数的类型，使用箭头 "),s("code",[t._v("->")]),t._v(" 加类型表示返回值的类型。理解这种写法的关键就是，把高亮的部分都忽略，这些高亮的部分都不会被 Python 解析器所解析。你只需要把搞两部分忽略，就能看到熟悉的 Python 函数语法。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.loli.net/2019/05/06/5ccfe8af55408.jpg",alt:"hight light function annotation"}})]),t._v(" "),s("p",[t._v("Python 解释器在运行时并不会检查类型，所以哪怕参数的类型不对，Python 解释器也不会因此抛出任何异常。")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# example.py")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("plus")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("plus"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello "')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"world!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ python3 example.py\nhello world"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n")])])]),s("p",[t._v("为了能够检查出类型的错误，我们还需要一些额外的静态检查工具。比如 Python 官方维护的 "),s("a",{attrs:{href:"https://github.com/python/mypy",target:"_blank",rel:"noopener noreferrer"}},[t._v("mypy"),s("OutboundLink")],1),t._v(" 和 facebook 维护的 "),s("a",{attrs:{href:"https://github.com/facebook/pyre-check",target:"_blank",rel:"noopener noreferrer"}},[t._v("pyre"),s("OutboundLink")],1),t._v("。在开发的过程中，我们可以使用这类工具扫描代码，提前发现代码中的 bug，和其他语言的编译过程异曲同工。这篇文章会使用 mypy 作为例子，毕竟 Python type hints 的很多语法都继承自 mypy。")]),t._v(" "),s("p",[t._v("首先安装 mypy:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ pip3 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" mypy\n")])])]),s("p",[t._v("然后使用 mypy 对上面的文件进行检查：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('$ mypy example.py\nexample.py:5: error: Argument 2 to "exp" has incompatible type "str"; expected "int"\n')])])]),s("p",[t._v("除了内置的类型之外，Python 语法也支持用户创建的类")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mypackage "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Bar\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Bar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bar_method"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("不管你们相不相信，这种写法在 python3.0 中就已经被支持了（"),s("a",{attrs:{href:"https://www.python.org/dev/peps/pep-3107/",target:"_blank",rel:"noopener noreferrer"}},[t._v("PEP 3107"),s("OutboundLink")],1),t._v("）。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ pyenv local python3.0.1; python\nPython 3.0.1 (r301:69556, May 24 2018, 14:39:16)\n\n>>> def f(a: int, b: str): pass\n...\n>>>\n")])])]),s("p",[t._v("但是 Pyhton3 诞生这么多年，我印象中使用 Python type hints 语法的项目寥寥无几，除了对 Python 2.7 的兼容性外，另一个可能的原因是这套语法的功能还不够强大。在后来的 Python 版本中其语法也进行了不断的增强。")]),t._v(" "),s("h3",{attrs:{id:"python-3-5-typing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#python-3-5-typing","aria-hidden":"true"}},[t._v("#")]),t._v(" Python 3.5: typing")]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("在 python3.5 中，引入了 "),s("code",[t._v("typing")]),t._v(" 模块，现在我们可以表示嵌套结构了")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" typing "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Dict"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" List\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("best_students")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scores"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Dict"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" score "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" score "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" scores"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("items "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" score "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("90")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("code",[t._v("Dict[str, int]")]),t._v(" 表示一个 keys 的类型为 str，values 的类型为 int 的字典，比如 "),s("code",[t._v('{"a": 1, "b": 2}')])]),t._v(" "),s("p",[s("code",[t._v("List[int]")]),t._v(" 表示由整型组成的列表，比如"),s("code",[t._v("[0, 1, 1, 2, 3]")])]),t._v(" "),s("p",[t._v("基于 typing 提供的类型，我们可以写出相当复杂的嵌套结构：")]),t._v(" "),s("p",[s("code",[t._v("Dict[str, Dict[str, List[str]]]")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("{\n\t'原木镇': {\n        '第一小学': ['张伟', '王伟', '王芳'],\n        '第二小学': ['李伟', '李娜'],\n\t},\n\t'鸽子镇': {\n        '高山中学': ['张敏', '李静'],\n        '亿百中学': ['王静']\n        '蟒蛇小学': ['刘伟', '王秀英']\n\t}\n}\n")])])]),s("p",[t._v("由于 "),s("code",[t._v("typing")]),t._v(" 模块并没有对 python 本身的语法作出修改，所以低于 3.5 的 python 版本也可以通过安装 pip 库 "),s("a",{attrs:{href:"https://pypi.org/project/typing/",target:"_blank",rel:"noopener noreferrer"}},[t._v("typing"),s("OutboundLink")],1),t._v(" 来获得这个功能。")]),t._v(" "),s("p",[t._v("另外一个有趣的事情是，"),s("code",[t._v("typing")]),t._v(" 使用方括号 "),s("code",[t._v("List[str]")]),t._v(" 而不是圆括号 "),s("code",[t._v("List(str)")]),t._v("。如果你使用了后面的方法的话，mypy 会提醒你 "),s("code",[t._v("Suggestion: use List[...] instead of List(...)")]),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"typing-高级用法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#typing-高级用法","aria-hidden":"true"}},[t._v("#")]),t._v(" typing 高级用法")]),t._v(" "),s("h3",{attrs:{id:"union"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#union","aria-hidden":"true"}},[t._v("#")]),t._v(" Union")]),t._v(" "),s("p",[t._v("有时候我们的参数、返回值（以及下面会谈到的变量）并不只有一种类型，这种情况下我们就可以使用 "),s("code",[t._v("Union")]),t._v(" 对不同的类型进行或操作：")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" typing "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Union"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" List\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_first_name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("names"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" List"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" Union"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("names"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" names"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),t._v("\n")])])]),s("p",[t._v("上面这个函数的返回值可能是 "),s("code",[t._v("None")]),t._v("，也可能是一个字符串")]),t._v(" "),s("h3",{attrs:{id:"callable"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#callable","aria-hidden":"true"}},[t._v("#")]),t._v(" Callable")]),t._v(" "),s("p",[t._v("Python 中万物皆是对象，函数也是对象。"),s("code",[t._v("Callable")]),t._v(" 就可以表示函数类型。")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" typing "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Callable\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_regex")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" Callable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("regex")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pattern"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" string"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" re\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" regex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("p",[t._v("在上面的例子中，"),s("code",[t._v("get_regex")]),t._v(" 函数返回一个 "),s("code",[t._v("Callable")]),t._v(" 对象。这个对象接受两个位置参数，类型分别是 "),s("code",[t._v("str")]),t._v(" 和 "),s("code",[t._v("str")]),t._v("。它的返回值的类型是 "),s("code",[t._v("bool")]),t._v("。")]),t._v(" "),s("p",[t._v("不过 Callable 不能表示位置参数，在下面我还会详细地谈到这个问题。")]),t._v(" "),s("h3",{attrs:{id:"any"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#any","aria-hidden":"true"}},[t._v("#")]),t._v(" Any")]),t._v(" "),s("p",[t._v("无论如何，Python 的类型注解系统总是无法表达所有的类型")]),t._v(" "),s("p",[t._v("Python 总有一些我们很难表达的形式或者类型。这种情况下我就能使用 "),s("code",[t._v("typing.Any")]),t._v("，它代表任何东西。比如说")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" typing "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Any\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Any"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Any"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"python-3-6-variable-annotations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#python-3-6-variable-annotations","aria-hidden":"true"}},[t._v("#")]),t._v(" Python 3.6: variable annotations")]),t._v(" "),s("p",[t._v("在 python3.6 中，除了函数的参数和返回值外，变量也可以表示类型了（"),s("a",{attrs:{href:"https://www.python.org/dev/peps/pep-0526/",target:"_blank",rel:"noopener noreferrer"}},[t._v("PEP 526"),s("OutboundLink")],1),t._v("）")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("items"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("list")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" read_json_file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Employee")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NamedTuple"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n")])])]),s("p",[t._v("通过这种形式，我们可以实现“先声明，后赋值”的写法。而这种特性就是 Python 3.7 的 dataclass 的基础。")]),t._v(" "),s("h3",{attrs:{id:"python-3-7-dataclass"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#python-3-7-dataclass","aria-hidden":"true"}},[t._v("#")]),t._v(" Python 3.7: dataclass")]),t._v(" "),s("p",[t._v("我在上面说过，python 解析器并不会在意类型注解，严格来说这是不对的，Python 会把类型信息放在 "),s("code",[t._v("__annotations__")]),t._v(" 属性中：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(">>> def foo(a: str):\n...     print('hello', a)\n...\n\n>>> foo.__annotations__\n{'a': str}\n\n>>> class Bar:\n...     a: str\n...     b: int\n\n>>> Bar.__annotations__\n{'a': str, 'b': int}\n")])])]),s("p",[t._v("所以在 python 中，类型信息是可以被获取到并被加以利用的。在过去，我们会这么写一个类：")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" typing "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Tuple\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Bar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("__init__")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" size"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("float")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" phone"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" location"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Tuple"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("float")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("float")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" name\n        self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("size "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" size\n        self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("phone "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" phone\n        self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" location\n")])])]),s("p",[t._v("但是在 python3.7 中，我们可以利用新的 dataclass 大幅简化这类语法：")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" dataclasses "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" dataclass\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" typing "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Tuple\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Bar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dataclass"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),t._v("\n    size"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("float")]),t._v("\n    phone"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("\n    location"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Tuple"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("float")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("float")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[t._v("dataclass 作为一个例子，展示了 Python 的 type hints 的潜力。")]),t._v(" "),s("h2",{attrs:{id:"格式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#格式","aria-hidden":"true"}},[t._v("#")]),t._v(" 格式")]),t._v(" "),s("h2",{attrs:{id:"其他好处：ide"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他好处：ide","aria-hidden":"true"}},[t._v("#")]),t._v(" 其他好处：IDE")]),t._v(" "),s("h2",{attrs:{id:"python-typing-不能做什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#python-typing-不能做什么","aria-hidden":"true"}},[t._v("#")]),t._v(" python typing 不能做什么")]),t._v(" "),s("p",[t._v("相比于 typescript 之于 javascript，python typing 的语法改动非常有限。这也导致了 Python 的类型检查并不能够覆盖所有的情况，比如说关键字参数：")]),t._v(" "),s("blockquote",[s("p",[t._v("There is no syntax to indicate optional or keyword arguments; such function types are rarely used as callback types. "),s("code",[t._v("Callable[..., ReturnType]")]),t._v(" (literal ellipsis) can be used to type hint a callable taking any number of arguments and returning "),s("code",[t._v("ReturnType")]),t._v(".")]),t._v(" "),s("p",[t._v("——"),s("a",{attrs:{href:"https://docs.python.org/3.7/library/typing.html#typing.Callable",target:"_blank",rel:"noopener noreferrer"}},[t._v("python typing 官方文档"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("下面这个")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"s"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\nfoo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("对于这个错误，mypy 可以检查出来：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ mypy example.py\nexample.py:5: error: Argument "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"item"')]),t._v(" to "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo"')]),t._v(" has incompatible "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"int"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" expected "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"str"')]),t._v("\n")])])]),s("p",[t._v("但是只要加上一个装饰器，哪怕这个装饰器并没有改变参数和返回值的类型，由于 Python 语法的限制，我们无法精确地声明被装饰后的函数的关键字参数类型，于是 mypy 就检查不出这个错误了：")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" time\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" typing "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Callable\n\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo_timer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("func"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" Callable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" __debug__"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("new_func")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),t._v("kwargs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            start "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            result "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" func"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),t._v("kwargs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" start"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result\n\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" new_func\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" func\n\n\n@foo_timer\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"s"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\nfoo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ mypy example.py\n$\n")])])]),s("p",[t._v("我可不是在钻牛角尖，我在某个项目中大量使用到了装饰器配合关键字参数的写法，结果 mypy 对这种情况的静态检查根本无能为力，让我又回到了以前只有在 runtime 时才能暴露问题的时代。")]),t._v(" "),s("p",[t._v("同样是对动态语言的类型检查，相比于 typescript 对 javascript 语法的重新设计，Python 选择了尽可能兼容原来的写法，方便上手的同时，距离真正的静态语言还有着相当多的进步空间。")])])},[],!1,null,null,null);a.default=e.exports}}]);