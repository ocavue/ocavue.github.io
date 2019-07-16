(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{164:function(e,v,s){e.exports=s.p+"assets/img/1-1.db97f2bc.svg"},165:function(e,v,s){e.exports=s.p+"assets/img/1-2.43eab6b5.svg"},166:function(e,v,s){e.exports=s.p+"assets/img/1-3.e21e1637.svg"},167:function(e,v,s){e.exports=s.p+"assets/img/1-4.18e74816.svg"},168:function(e,v,s){e.exports=s.p+"assets/img/2-1-1.41e5bb6e.svg"},169:function(e,v,s){e.exports=s.p+"assets/img/2-1-2.d2728ad3.svg"},170:function(e,v,s){e.exports=s.p+"assets/img/2-1-3.2cdd88fa.svg"},171:function(e,v,s){e.exports=s.p+"assets/img/2-1-4.6524a2fa.svg"},172:function(e,v,s){e.exports=s.p+"assets/img/2-2-1.71f9bacc.svg"},173:function(e,v,s){e.exports=s.p+"assets/img/2-2-2.30dd88a4.svg"},174:function(e,v,s){e.exports=s.p+"assets/img/2-2-3.b8d8276f.svg"},175:function(e,v,s){e.exports=s.p+"assets/img/2-2-4.f3b1a65e.svg"},176:function(e,v,s){e.exports=s.p+"assets/img/2-2-5.1bab0969.svg"},177:function(e,v,s){e.exports=s.p+"assets/img/2-2-6.a0958537.svg"},178:function(e,v,s){e.exports=s.p+"assets/img/2-2-7.d575120e.svg"},179:function(e,v,s){e.exports=s.p+"assets/img/sm.90659984.svg"},186:function(e,v,s){"use strict";s.r(v);var t=s(1),r=Object(t.a)({},function(){var e=this,v=e.$createElement,t=e._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[t("strong",[e._v("一致性")]),e._v("是分布式系统必须要解决的的问题，Paxos 算法就是解决分布式系统一致性的经典算法。在这篇文章中，我会用例子和图示讲解 Paxos 算法。")]),e._v(" "),t("p",[e._v("我们先撇开细节和定义，直接用一个例子来直观地理解一下这个算法。")]),e._v(" "),t("p",[e._v("想象一个用来卖票的分布式系统，就像 12306 那样。这个系统一共有五台机器，分布在不同的地点。为了讲解的方便，我们设定"),t("strong",[e._v("这个系统只卖一张票")]),e._v("。五台机器有各自的数据库，用来储存买票者的名字。如果机器 A 认为把票卖给了我，而机器 B 认为把票卖给了你，那就糟糕了。于是我们要分布式系统的一致性，具体到这个例子就是保证不同机器中买票者的名字是同一个。")]),e._v(" "),t("p",[e._v("此时机器 D 收到了来自 Alice 的买票请求。于是 D 首先进入 Prepare 阶段：,")]),e._v(" "),t("p",[e._v("D 向其他 4 台机器发送了一条 "),t("strong",[e._v("提议")]),e._v("（这里用"),t("span",{staticStyle:{color:"#7EA6E0"}},[t("em",[t("strong",[e._v("蓝色的箭头")])])]),e._v("表示提议）：")]),e._v(" "),t("p",[t("img",{attrs:{src:s(164),alt:""}})]),e._v(" "),t("p",[e._v("其中 "),t("code",[e._v("P-1D")]),e._v(" 表示：")]),e._v(" "),t("ol",[t("li",[e._v("这是一个提议（P for Prepare）")]),e._v(" "),t("li",[e._v("提议的 ID 是 "),t("code",[e._v("1D")])])]),e._v(" "),t("p",[e._v("每个提议都需要一个递增的全局唯一 ID，最简单的方法就是当前时间加上当前机器的名字。这个 ID 会贯穿整个 Paxos 流程。值得注意的是，在提议阶段，D 并没有把购买者的名字 Alice 告诉其他机器。")]),e._v(" "),t("p",[e._v("其他机器收到这个提议后，他们发现之前并没有收到过提议，于是同意了这份提议。具体来说是做了下面几件事：")]),e._v(" "),t("ol",[t("li",[e._v("将 "),t("code",[e._v("P-1D")]),e._v(" 记录下来")]),e._v(" "),t("li",[e._v("承诺以后不再接受 "),t("code",[e._v('ID < "1D"')]),e._v(" 的提议")]),e._v(" "),t("li",[e._v("向 D 回复 OK，这里用"),t("span",{staticStyle:{color:"#EA6B66"}},[t("em",[t("strong",[e._v("红色的箭头")])])]),e._v("表示对提议的回复")])]),e._v(" "),t("p",[t("img",{attrs:{src:s(165),alt:""}})]),e._v(" "),t("p",[e._v("D 收到其他机器的回复后，发现加上自己的同意，发现已经有超过半数的机器同意将票卖给 Alice（事实上，所有五台机器都同意这点）。即然多数派已经同意了这份提议，那么 D 就认为认为这个提议已经被通过了，于是进入了 Commit 阶段。")]),e._v(" "),t("p",[e._v("在 Commit 阶段，D 向所有机器发出了一个"),t("strong",[e._v("决议")]),e._v("（这里用"),t("span",{staticStyle:{color:"#97D077"}},[t("em",[t("strong",[e._v("绿色的箭头")])])]),e._v("表示表示决议）：")]),e._v(" "),t("p",[t("img",{attrs:{src:s(166),alt:""}})]),e._v(" "),t("p",[e._v("其中 "),t("code",[e._v("A-1D-Alice")]),e._v(" 表示")]),e._v(" "),t("ul",[t("li",[e._v("这是一个决议（A for Accept）")]),e._v(" "),t("li",[e._v("决议的 ID 是 "),t("code",[e._v("1D")])]),e._v(" "),t("li",[e._v("决议内容：将票卖给 Alice")])]),e._v(" "),t("p",[e._v("其他四台机器到了这个决议后，就会把决议的内容记录下来，并返回给 D。D 最后把买票成功的消息发给 Alice，用图表示就是这样，这里用"),t("span",{staticStyle:{color:"#B5739D"}},[t("em",[t("strong",[e._v("紫色的箭头")])])]),e._v("表示对决议的回复：")]),e._v(" "),t("p",[t("img",{attrs:{src:s(167),alt:""}})]),e._v(" "),t("p",[e._v("此时，所有五台机器都认为票卖给了 Alice，一致性得到了保证。")]),e._v(" "),t("p",[e._v("上面的情况是所有机器和网络都能正常运行的理想情况，可使现实中总是不理想的，而分布式系统的最大价值之一就是能应对部分节点的故障，所以下面我们来模拟一下节点故障的情况。")]),e._v(" "),t("h2",{attrs:{id:"节点故障的例子"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#节点故障的例子","aria-hidden":"true"}},[e._v("#")]),e._v(" 节点故障的例子")]),e._v(" "),t("p",[e._v("我们假设有两台机器 B 和 E 发生了故障，那么重复一下上面的步骤，看看会发生什么。")]),e._v(" "),t("p",[e._v("第一步，D 接受到了 Alice 的请求，于是向其他机器"),t("strong",[e._v("发送提议")]),e._v("：")]),e._v(" "),t("p",[t("img",{attrs:{src:s(168),alt:""}})]),e._v(" "),t("p",[e._v("第二步，除了发生故障的 B 和 E，其他机器都"),t("strong",[e._v("回复了提议")]),e._v("：")]),e._v(" "),t("p",[t("img",{attrs:{src:s(169),alt:""}})]),e._v(" "),t("p",[e._v("第三步，D 认为提议得到了多数派（A、C、D）的认可，于是向大家"),t("strong",[e._v("发送决议")])]),e._v(" "),t("p",[t("img",{attrs:{src:s(170),alt:""}})]),e._v(" "),t("p",[e._v("第四步，除了故障机外，其他机器都"),t("strong",[e._v("回复了决议")]),e._v("。最后 D 向 Alice 发送购票成功的消息。")]),e._v(" "),t("p",[t("img",{attrs:{src:s(171),alt:""}})]),e._v(" "),t("p",[e._v("到目前为止，一切都 OK。由于只有少数的机器发生了故障，依然有一个多数派（3 台机器 > 5 台机器 / 2）存在，所以系统的运行没有受到影响。但是，如果我们这时候修好了 B 和 D，就会发现一个问题：B 和 D 就像刚苏醒的植物人，他们还以为这张票没卖出去呢！Paxos 算法如何解决这种情况呢？让我们继续这个例子：")]),e._v(" "),t("p",[t("img",{attrs:{src:s(172),alt:""}})]),e._v(" "),t("blockquote",[t("p",[e._v("↑ B 和 E 恢复工作了，但是他们此时没有 "),t("code",[e._v("P-1D")]),e._v(" 和 "),t("code",[e._v("C-1D-Alice")]),e._v(" 的信息")])]),e._v(" "),t("p",[e._v("假如这时候 Bob 来买票了，他向机器 B 发出了买票请求，于是 B 向其他机器发送了一个提议。")]),e._v(" "),t("p",[t("img",{attrs:{src:s(173),alt:""}})]),e._v(" "),t("p",[e._v("对于这个提议，E 的回复是 OK，但是 A、C 和 D 的回复是 "),t("code",[e._v('"1B" < "1D", Fail')]),e._v("。因为在之前，A、C、D 已经承诺过了，他们不会接受 "),t("code",[e._v('id < "1D"')]),e._v(" 的提议请求。")]),e._v(" "),t("p",[t("img",{attrs:{src:s(174),alt:""}})]),e._v(" "),t("p",[e._v("于是 B 只能放弃 "),t("code",[e._v("1B")]),e._v(" 提议，而是紧接着又提出一个 ID 为 "),t("code",[e._v("2B")]),e._v(" 提议，并将提议发送给其他机器：")]),e._v(" "),t("p",[t("img",{attrs:{src:s(175),alt:""}})]),e._v(" "),t("p",[e._v("然后机器其他机器都同意了这个提议，不过 A、C 和 D 在同意提议的同时，还返回了这样一条信息：「我已经把票卖给 Alice 了，你不可能通知我把票买给其他人」：")]),e._v(" "),t("p",[t("img",{attrs:{src:s(176),alt:""}})]),e._v(" "),t("p",[e._v("B 收到了包括自己在内的五分针对 "),t("code",[e._v("2B")]),e._v(" 提议的同意，所以 B 可以进入下一步，也就是发表决议了。但是知道了票已经被 Alice 拿走后，由于卖掉的票是不能再拿回来的，所以 B 被迫修改决议的内容，也就是发表一个将票卖给 Alice 的决议，毕竟：")]),e._v(" "),t("p",[t("img",{attrs:{src:s(177),alt:""}})]),e._v(" "),t("p",[e._v("其他机器收到了这个决议后，也把这个决议写在自己的数据库中，并且将结果返回给 B。B 再通知 Bob 票已经被卖掉了：")]),e._v(" "),t("p",[t("img",{attrs:{src:s(178),alt:""}})]),e._v(" "),t("p",[e._v("在这个例子中，我们的分布式系统非常好地处理了节点故障的情况，最后达到的效果如下：")]),e._v(" "),t("ol",[t("li",[e._v("同一张票没有被卖给两个人。虽然 Bob 请求的机器 B 一开始并不知道票已经被 Alice 拿走了，但是最终 Bob 还是知道了。这就是最终一致性。")]),e._v(" "),t("li",[e._v("最终所有机器上都储存了相同的信息，也就是 "),t("code",[e._v("P-2B")]),e._v(" 和 "),t("code",[e._v("C-2B-Alice")]),e._v("。")])]),e._v(" "),t("h2",{attrs:{id:"更加现实的情况"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更加现实的情况","aria-hidden":"true"}},[e._v("#")]),e._v(" 更加现实的情况")]),e._v(" "),t("p",[e._v("同时处理多个 paxos 实例：")]),e._v(" "),t("p",[e._v("在现实中，一个卖票系统不可能像上面的例子中只卖一张票。我们只要把每一张票当成一个独立的 paxos 算法流程，比如说在每个请求和响应中添加上票的唯一标示，就能从逻辑上同时处理多张票的售卖。")]),e._v(" "),t("p",[e._v("*TODO添加图示")]),e._v(" "),t("p",[e._v("票的转台")]),e._v(" "),t("p",[e._v("我们做的另一个假设是一张票只会被卖出一次，但是在现实中由于可以退票，一张票可以在退票后卖个另一位顾客。在 paxos 中，我们需要引入状态机的概念：简单来说就有一个 状态 经过一个 操作 后变成了另一个状态。")]),e._v(" "),t("p",[e._v("一张票被卖掉之后，它的状态由 可买 变成了 不可买，退票后其状态又重新变成了 可买。")]),e._v(" "),t("p",[e._v("火车票的售卖 和 银行账号的余额 都可以表示为这样的逻辑：")]),e._v(" "),t("p",[t("img",{attrs:{src:s(179),alt:""}})]),e._v(" "),t("p",[e._v("只要知道初始状态和所有的操作，根据状态机的逻辑就能算出当前的状态。我们可以为每一个状态制定一个 Paxos 算法实例，所有机器上使用 Paxos 算法同步了状态 1, 2, 3, .... 这样就能在所有机器上都保存相同的记录。")]),e._v(" "),t("h2",{attrs:{id:"paxos-的详细定义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#paxos-的详细定义","aria-hidden":"true"}},[e._v("#")]),e._v(" Paxos 的详细定义")]),e._v(" "),t("p",[e._v("上面的例子中，整个流程并不是非常的严谨。为了更深入地理解 Paxos，我们需要在这里做一些枯燥的介绍。")]),e._v(" "),t("p",[e._v("一个分布式系统中又若干个节点（上面的例子中一共有五个节点，也就是五台机器），在 Paxos 算法中，每个节点可能有三种角色：proposer、acceptor 和 learner。一个节点可以身担一个或者多个角色。其中 learner 并不会影响到决策本身，所以我们在这篇文章中不会涉及到 learner。")]),e._v(" "),t("p",[e._v("Proposer 是提出提议（"),t("em",[e._v("prepare")]),e._v(" request）和决议（"),t("em",[e._v("accept")]),e._v(" request）的节点，acceptor 是接受提议和决议，并对其提议或者决议进行回复的节点。在上面的例子中，所有五个节点同时是 proposer 和 acceptor。")]),e._v(" "),t("p",[e._v("下面是严谨地定义一次 Paxos 流程：这里我直接引用并翻译了论文原文，斜体的部分是我自己添加的一些解释：")]),e._v(" "),t("blockquote",[t("p",[e._v("Phase 1. (a) A proposer selects a proposal number "),t("em",[e._v("n")]),e._v(" and sends a "),t("em",[e._v("prepare")]),e._v(" request with number "),t("em",[e._v("n")]),e._v(" to a majority of acceptors.")]),e._v(" "),t("p",[e._v("(b) If an acceptor receives a "),t("em",[e._v("prepare")]),e._v(" request with number "),t("em",[e._v("n")]),e._v(" greater than that of any "),t("em",[e._v("prepare")]),e._v(" request to which it has already responded, then it responds to the request with a promise not to accept any more proposals numbered less than n and with the highest-numbered proposal (if any) that it has accepted.")]),e._v(" "),t("p",[e._v("Phase 2. (a) If the proposer receives a response to its "),t("em",[e._v("prepare")]),e._v(" requests (numbered n) from a majority of acceptors, then it sends an "),t("em",[e._v("accept")]),e._v(" request to each of those acceptors for a proposal numbered "),t("em",[e._v("n")]),e._v(" with a value "),t("em",[e._v("v")]),e._v(", where "),t("em",[e._v("v")]),e._v(" is the value of the highest-numbered proposal among the responses, or is any value if the responses reported no proposals.，")]),e._v(" "),t("p",[e._v("(b) If an acceptor receives an "),t("em",[e._v("accept")]),e._v(" request for a proposal numbered "),t("em",[e._v("n")]),e._v(", it accepts the proposal unless it has already responded to a "),t("em",[e._v("prepare")]),e._v(" request having a number greater than "),t("em",[e._v("n")]),e._v(".")])]),e._v(" "),t("p",[t("strong",[e._v("阶段 1. (a) 一个 proposer 选择一个提议编号 "),t("em",[e._v("n")]),e._v("，然后将提议编号 "),t("em",[e._v("n")]),e._v(" 放入 "),t("em",[e._v("prepare")]),e._v(" request 中并发送给 acceptors 中的多数派。")])]),e._v(" "),t("p",[t("em",[e._v("在我们的例子中，proposer 会将 prepare request 发送给了所有的 acceptors，但是出于性能优化的考虑，即然它只需要大多数的 acceptors 同意，那么他可以只给 acceptors 中的一个多数派发送 prepare requests。具体发送给哪些 acceptors 由 proposer 自己决定。")])]),e._v(" "),t("p",[t("strong",[e._v("(b) 如果一个 accptor 接受了一个 "),t("em",[e._v("prepare")]),e._v(" request，其中的数字 "),t("em",[e._v("n")]),e._v(" 大于这个 acceptor 已经回复过的所有 "),t("em",[e._v("prepare")]),e._v(" request，那么他会回复这个 request，同时承诺不接受比 n 小的提议编号，而且会返回它已经接受过的提议中编号最大的那个提议（如果有的话）。")])]),e._v(" "),t("p",[t("em",[e._v("在我们上面的某张图中，（TODO，具体哪张图？），E 只返回了 OK，因为它之前没有接受过提议，但是 ACD 除了来返回 OK 之外，还返回了之前接受过的编号最大的提议，也就是 Alice")])]),e._v(" "),t("p",[t("strong",[e._v("阶段 2. (a) 如果这个 proposer 收到了来自多数 acceptors 对 "),t("em",[e._v("prepare")]),e._v(" requests (编号 n) 的回复，那么他会对这些 acceptors 分别发送一个 "),t("em",[e._v("accept")]),e._v(" request，其中包含提议编号 "),t("em",[e._v("n")]),e._v(" 和一个值 "),t("em",[e._v("v")]),e._v("。"),t("em",[e._v("v")]),e._v(" 是响应中的提议中编号最大的那个提议的值，如果响应中没有提议，那 "),t("em",[e._v("v")]),e._v(" 可以是任何值。")])]),e._v(" "),t("p",[e._v("在图 2-1-3 和 2-2-6 中，proposer 发送了 accept request（绿色的箭头）。其中 2-1-3 中的 v 可以是任何值 ，这里 proposer 选择了 Alice，但是 "),t("a",{attrs:{href:"#2-2-6"}},[e._v("2-2-6")]),e._v(" 中的")]),e._v(" "),t("p",[t("strong",[e._v("(b) 如果一个 acceptor 收到了一个带有提议编号 "),t("em",[e._v("n")]),e._v(" 的 "),t("em",[e._v("accept")]),e._v(" request，除非它已经回应过一个有着比 "),t("em",[e._v("n")]),e._v(" 更大的编号的 "),t("em",[e._v("prepare")]),e._v(" request ，它会接受这个提议。")])]),e._v(" "),t("h2",{attrs:{id:"参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[e._v("#")]),e._v(" 参考资料")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://zh.wikipedia.org/wiki/Paxos%E7%AE%97%E6%B3%95#%E5%AE%9E%E4%BE%8B",target:"_blank",rel:"noopener noreferrer"}},[e._v("Paxos算法的维基百科页面"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("a",{attrs:{href:"http://research.microsoft.com/users/lamport/pubs/paxos-simple.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Paxos Made Simple"),t("OutboundLink")],1),e._v(" Lamport 于 2001年发布的论文。")]),e._v(" "),t("p",[e._v("https://groups.csail.mit.edu/tds/papers/Lynch/jacm85.pdf FLP 不可能原理")]),e._v(" "),t("p",[e._v("http://rystsov.info/2016/05/01/paxos.html 一个 Paxos 的 JavaScript 实现")])])},[],!1,null,null,null);v.default=r.exports}}]);