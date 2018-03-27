/**
 * Created by Acer on 2017/6/13.
 */
	//饼图
	/*饼状图*/
	function pie(a,b,d){
		// 基于准备好的dom，初始化echarts实例
		var vm = echarts.init(document.getElementById(b)),
			color_1,
			color_2;
		if(d == 0){
			color_1="#da756b";
			color_2="#da756b";
		}else{
			color_1="#80da6b";
			color_2="#efefef"
		}
		// 指定图表的配置项和数据
		option = {
			legend: {
				orient: 'vertical',
				x: 'left'
			},
			center:["50%","50%"],
			series: [
				{
					type: 'pie',
					radius: ['30%', '60%'],
					hoverAnimation:true,
					label: {
						normal: {
							show: false,
							position: 'center'
						},
						emphasis: {
							show: false,
							textStyle: {
								fontSize: '0',
								fontWeight: 'none'
							}
						}
					},
					color:[color_1,color_2],
					labelLine: {
						normal: {
							show: true
						}
					},
					data:[{value:a},{value:d}]
				}
			]
		};
		// 使用刚指定的配置项和数据显示图表。
		vm.setOption(option);
	}
	pie(1,"cd-pie-1",9);//图1
	pie(20,"cd-pie-2",0);//图2
	pie(5,"cd-pie-3",45);//图3
	pie(10,"cd-pie-4",90);//图4
