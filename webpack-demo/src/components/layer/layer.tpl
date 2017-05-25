<!-- ejs模版 后面也可以tpl结尾  jsx: react, vue  babel已集成插件-->
<!-- npm install ejs-loader --save-dev -->
<div class="layer">
	<!-- 这里尽量使用绝对地址 -->
	<!-- 使用相对路径可以使用以下模版语法 -->
	<img src="${ require('../../assets/zhuanquan.gif') }" alt="转啊转">
	<div class="a"> this is <%= name %> layer</div>
	<% for (var i = 0; i < arr.length; i++) { %>
		<%= arr[i] %>
	<% } %>
</div>