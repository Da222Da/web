import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.9e8bdea8.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"theory/design-mode/items/pattern/strategy.md","filePath":"theory/design-mode/items/pattern/strategy.md"}'),l={name:"theory/design-mode/items/pattern/strategy.md"},o=p(`<p>策略模式（Strategy Pattern）是一种行为设计模式，它定义了一系列算法，将每个算法封装在独立的类中，并使它们可以互相替换。这种模式允许算法的选择独立于客户端，客户端可以在运行时动态选择所需的算法。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PaymentStrategy</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">pay</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">amount</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// 抽象方法，由具体策略类实现</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">CreditCardPayment</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">extends</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PaymentStrategy</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">pay</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">amount</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">		console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`使用信用卡支付 \${</span><span style="color:#E1E4E8;">amount</span><span style="color:#9ECBFF;">} 元\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PayPalPayment</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">extends</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PaymentStrategy</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">pay</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">amount</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">		console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`使用PayPal支付 \${</span><span style="color:#E1E4E8;">amount</span><span style="color:#9ECBFF;">} 元\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PaymentContext</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">strategy</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.strategy </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> strategy;</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">setStrategy</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">strategy</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.strategy </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> strategy;</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">makePayment</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">amount</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.strategy.</span><span style="color:#B392F0;">pay</span><span style="color:#E1E4E8;">(amount);</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用策略模式</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">creditCardPayment</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">CreditCardPayment</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">payPalPayment</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PayPalPayment</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">paymentContext</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PaymentContext</span><span style="color:#E1E4E8;">(creditCardPayment);</span></span>
<span class="line"><span style="color:#E1E4E8;">paymentContext.</span><span style="color:#B392F0;">makePayment</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">paymentContext.</span><span style="color:#B392F0;">setStrategy</span><span style="color:#E1E4E8;">(payPalPayment);</span></span>
<span class="line"><span style="color:#E1E4E8;">paymentContext.</span><span style="color:#B392F0;">makePayment</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">50</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PaymentStrategy</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">pay</span><span style="color:#24292E;">(</span><span style="color:#E36209;">amount</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// 抽象方法，由具体策略类实现</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">CreditCardPayment</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">extends</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PaymentStrategy</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">pay</span><span style="color:#24292E;">(</span><span style="color:#E36209;">amount</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">		console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">\`使用信用卡支付 \${</span><span style="color:#24292E;">amount</span><span style="color:#032F62;">} 元\`</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PayPalPayment</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">extends</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PaymentStrategy</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">pay</span><span style="color:#24292E;">(</span><span style="color:#E36209;">amount</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">		console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">\`使用PayPal支付 \${</span><span style="color:#24292E;">amount</span><span style="color:#032F62;">} 元\`</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PaymentContext</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">constructor</span><span style="color:#24292E;">(</span><span style="color:#E36209;">strategy</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.strategy </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> strategy;</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">setStrategy</span><span style="color:#24292E;">(</span><span style="color:#E36209;">strategy</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.strategy </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> strategy;</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">makePayment</span><span style="color:#24292E;">(</span><span style="color:#E36209;">amount</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.strategy.</span><span style="color:#6F42C1;">pay</span><span style="color:#24292E;">(amount);</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用策略模式</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">creditCardPayment</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">CreditCardPayment</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">payPalPayment</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PayPalPayment</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">paymentContext</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PaymentContext</span><span style="color:#24292E;">(creditCardPayment);</span></span>
<span class="line"><span style="color:#24292E;">paymentContext.</span><span style="color:#6F42C1;">makePayment</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">100</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">paymentContext.</span><span style="color:#6F42C1;">setStrategy</span><span style="color:#24292E;">(payPalPayment);</span></span>
<span class="line"><span style="color:#24292E;">paymentContext.</span><span style="color:#6F42C1;">makePayment</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">50</span><span style="color:#24292E;">);</span></span></code></pre></div><p>通过策略模式，可以使代码更具灵活性和可维护性，同时将算法的实现与客户端代码解耦，使得系统更易于扩展和修改。</p>`,3),t=[o];function e(c,y,r,E,i,F){return n(),a("div",null,t)}const P=s(l,[["render",e]]);export{C as __pageData,P as default};
