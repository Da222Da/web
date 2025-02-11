# VueRouter 路由管理

VueRouter 是 Vue3 的官方提供的路由管理库。

如果想要查看更多信息的话，请移步 [官网](https://router.vuejs.org/)。

## Graph 可视化图表

<ElMindmap :data="data" height="500" :router="router" offsetLeft="20" />

<script setup>
import { onMounted, ref, computed } from "vue";
import { useRouter } from 'vitepress';
const router = useRouter();
const CurrentPath = router.route.path;
const data = ref({
	data: {
		text: "VueRouter",
	},
	children: [
		{ 
			data: { text: "123" },
		},
	],
})
</script>

## Details 图表详情
