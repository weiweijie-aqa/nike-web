<template>
  <div class="page-content">
    <div class="left">
      <div class="equipment-statistics mb-8">
        <div class="title">OMNI Equipment Statistics</div>
        <div class="info-box">
          <div class="box w-155">
            <div class="icon-wrap">
              <img src="../assets/icon15.svg" class="icon" />
            </div>
            <div class="info">
              <div class="value">1000<span class="ft-16">m</span></div>
              <div class="code">Conveyor belt</div>
            </div>
          </div>
          <div class="box w-181">
            <div class="icon-wrap">
              <img src="../assets/icon16.svg" class="icon" />
            </div>
            <div class="info">
              <div class="value">8<span class="ft-16">units</span></div>
              <div class="code">Labeling machine</div>
            </div>
          </div>
          <div class="box w-172">
            <div class="icon-wrap">
              <img src="../assets/icon17.svg" class="icon" />
            </div>
            <div class="info">
              <div class="value">2<span class="ft-16">units</span></div>
              <div class="code">Sorting machine</div>
            </div>
          </div>
          <div class="box w-212">
            <div class="icon-wrap">
              <img src="../assets/icon18.svg" class="icon" />
            </div>
            <div class="info">
              <div class="value">2<span class="ft-16">units</span></div>
              <div class="code">RFID channel machine</div>
            </div>
          </div>
          <div class="box w-120">
            <div class="icon-wrap">
              <img src="../assets/icon19.svg" class="icon" />
            </div>
            <div class="info">
              <div class="value">38<span class="ft-16">units</span></div>
              <div class="code">BCR</div>
            </div>
          </div>
        </div>
      </div>
      <div class="equipment-statistics mb-8">
        <div class="title">ASRS Equipment Statistics</div>
        <div class="info-box">
          <div class="box w-155">
            <div class="icon-wrap">
              <img src="../assets/icon15.svg" class="icon" />
            </div>
            <div class="info">
              <div class="value">1000<span class="ft-16">m</span></div>
              <div class="code">Conveyor belt</div>
            </div>
          </div>
          <div class="box w-181">
            <div class="icon-wrap">
              <img src="../assets/icon20.svg" class="icon" />
            </div>
            <div class="info">
              <div class="value">36<span class="ft-16">units</span></div>
              <div class="code">Stacker crane</div>
            </div>
          </div>
          <div class="box w-172">
            <div class="icon-wrap">
              <img src="../assets/icon17.svg" class="icon" />
            </div>
            <div class="info">
              <div class="value">2<span class="ft-16">units</span></div>
              <div class="code">Sorting machine</div>
            </div>
          </div>
          <div class="box w-212">
            <div class="icon-wrap">
              <img src="../assets/icon21.svg" class="icon" />
            </div>
            <div class="info">
              <div class="value">120<span class="ft-16">units</span></div>
              <div class="code">Shelf</div>
            </div>
          </div>
          <div class="box w-120">
            <div class="icon-wrap">
              <img src="../assets/icon19.svg" class="icon" />
            </div>
            <div class="info">
              <div class="value">36<span class="ft-16">units</span></div>
              <div class="code">BCR</div>
            </div>
          </div>
        </div>
      </div>
      <div class="map">
        <div class="title">
          <span style="color: #ff5a00">B</span>ar <span style="color: #ff5a00">C</span>ode
          <span style="color: #ff5a00">R</span>eade distribution map
        </div>
        <img src="../assets/img1.jpg" alt="" />
      </div>
    </div>
    <div class="right">
      <div class="flex gap-8" style="width: 100%">
        <div class="sku">
          <div class="title">SKU</div>
          <div class="value">120<span class="ft-28">K</span><span class="ft-24">u</span></div>
          <img src="../assets/icon22.svg" alt="" />
        </div>
        <div class="sku">
          <div class="title">Inventory utilization %</div>
          <div class="value">85<span class="ft-36">%</span></div>
          <div class="progress-wrap">
            <a-progress
              type="circle"
              :percent="85"
              trailColor="#99A8BD"
              strokeColor="#FF5A00"
              :size="100"
              :strokeWidth="12.5"
            >
              <template #format="percent">
                <span class="ft-16 font-normal" style="color: #232525">{{ percent }}%</span>
              </template>
            </a-progress>
          </div>
        </div>
      </div>
      <div class="flex second-charts-section" style="width: 100%">
        <div class="chart-box">
          <div ref="chartRef1" class="echarts-container"></div>
          <div class="legend">
            <div class="legend-item">
              <div class="w-16 h-16" style="background: #99a8bd"></div>
              <div class="font-bold ft-20 ml-4" style="color: #110600">
                Double Deep <span class="ml-12">35%</span>
              </div>
            </div>
            <div class="legend-item">
              <div class="w-16 h-16" style="background: #ff6c0a"></div>
              <div class="font-bold ft-20 ml-4" style="color: #110600">
                Single Deep <span class="ml-12">35%</span>
              </div>
            </div>
          </div>
        </div>
        <div class="chart-box">
          <div ref="chartRef2" class="echarts-container"></div>
          <div class="legend">
            <div class="legend-item">
              <div class="w-16 h-16" style="background: #99a8bd"></div>
              <div class="font-bold ft-20 ml-4" style="color: #110600">
                Lower <span class="ml-12">35%</span>
              </div>
            </div>
            <div class="legend-item">
              <div class="w-16 h-16" style="background: #ff6c0a"></div>
              <div class="font-bold ft-20 ml-4" style="color: #110600">
                Upper <span class="ml-12">35%</span>
              </div>
            </div>
          </div>
        </div>
        <div class="chart-box">
          <div ref="chartRef3" class="echarts-container"></div>
          <div class="legend">
            <div class="legend-item">
              <div class="w-16 h-16" style="background: #4e4e4e"></div>
              <div class="font-bold ft-20 ml-4" style="color: #110600">
                Small <span class="ml-12">35%</span>
              </div>
            </div>
            <div class="legend-item">
              <div class="w-16 h-16" style="background: #a9acb2"></div>
              <div class="font-bold ft-20 ml-4" style="color: #110600">
                Medium
                <span class="ml-12">35%</span>
              </div>
            </div>
            <div class="legend-item">
              <div class="w-16 h-16" style="background: #ff6c0a"></div>
              <div class="font-bold ft-20 ml-4" style="color: #110600">
                Large <span class="ml-12">35%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex third-charts-section">
        <div class="box">
          <div class="title">
            <span class="font-bold ft-24" style="color: #232525">Stacker Crane Cycle Analysis</span>
            <div class="legend">
              <div class="legend-item">
                <div class="w-12 h-12" style="background: #fc5f0a"></div>
                <div class="font-normal ft-16 ml-5" style="color: #110600">Work</div>
              </div>
              <div class="legend-item">
                <div class="w-12 h-12" style="background: #99a8bd"></div>
                <div class="font-normal ft-16 ml-5" style="color: #110600">Standby</div>
              </div>
            </div>
          </div>
          <div ref="chartRef4" class="echarts-container"></div>
        </div>
        <div class="box">
          <div class="title">
            <span class="font-bold ft-24" style="color: #232525">BCR Read Statistics</span>
            <div class="legend">
              <div class="legend-item">
                <div class="w-12 h-12" style="background: #fc5f0a"></div>
                <div class="font-normal ft-16 ml-5" style="color: #110600">ASRS</div>
              </div>
              <div class="legend-item">
                <div class="w-12 h-12" style="background: #99a8bd"></div>
                <div class="font-normal ft-16 ml-5" style="color: #110600">3B</div>
              </div>
            </div>
          </div>
          <div ref="chartRef5" class="echarts-container"></div>
        </div>
      </div>
      <div class="flex last-charts-section">
        <div class="box">
          <div class="font-bold ft-24" style="color: #232525">RFID IB Read Statistics</div>
          <div class="flex chart-wrap">
            <a-progress
              type="circle"
              :percent="85"
              trailColor="#99A8BD"
              strokeColor="#FF5A00"
              :size="80"
              :strokeWidth="12.5"
            >
              <template #format="percent">
                <div class="ft-16 font-normal" style="color: #232525">{{ percent }}%</div>
                <div class="ft-10 font-normal mt-4" style="color: rgba(35, 37, 37, 0.8)">
                  Accuracy
                </div>
              </template>
            </a-progress>
            <div class="ml-48">
              <div class="flex" style="align-items: center">
                <img src="../assets/icon27.svg" alt="" />
                <span class="font-bold ft-20" style="color: #110600">20 CTN</span>
              </div>
              <div>
                <img src="../assets/icon26.svg" alt="" />
                <span class="font-bold ft-20" style="color: #110600">120 Unit</span>
              </div>
            </div>
          </div>
        </div>
        <div class="box">
          <div class="font-bold ft-24" style="color: #232525">RFID OB Read Statistics</div>
          <div class="flex chart-wrap">
            <a-progress
              type="circle"
              :percent="85"
              trailColor="#99A8BD"
              strokeColor="#FF5A00"
              :size="80"
              :strokeWidth="12.5"
            >
              <template #format="percent">
                <div class="ft-16 font-normal" style="color: #232525">{{ percent }}%</div>
                <div class="ft-10 font-normal mt-4" style="color: rgba(35, 37, 37, 0.8)">
                  Accuracy
                </div>
              </template>
            </a-progress>
            <div class="ml-48">
              <div class="flex" style="align-items: center">
                <img src="../assets/icon27.svg" alt="" />
                <span class="font-bold ft-20" style="color: #110600">20 CTN</span>
              </div>
              <div>
                <img src="../assets/icon26.svg" alt="" />
                <span class="font-bold ft-20" style="color: #110600">120 Unit</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import * as echarts from 'echarts'

const chartRef1 = ref<HTMLDivElement>()
const chartRef2 = ref<HTMLDivElement>()
const chartRef3 = ref<HTMLDivElement>()
const chartRef4 = ref<HTMLDivElement>()
const chartRef5 = ref<HTMLDivElement>()

// 窗口尺寸响应式数据
const windowSize = ref({
  width: window.innerWidth,
  height: window.innerHeight,
})

// 窗口大小变化处理函数
const handleResize = () => {
  windowSize.value = {
    width: window.innerWidth,
    height: window.innerHeight,
  }
  // 先销毁现有图表实例，再重新创建
  destroyAllCharts()
}
// 初始化第一个图表
const initChart1 = () => {
  if (chartRef1.value) {
    const chart = echarts.init(chartRef1.value)

    const option = {
      series: [
        {
          name: '进度',
          type: 'pie',
          radius: ['75%', '100%'],
          center: ['50%', '50%'],
          color: ['#FF5A00', '#99A8BD'],
          emphasis: {
            disabled: true,
          },
          label: {
            show: false,
          },
          data: [
            {
              value: 1048,
              name: 'Search Engine',
              itemStyle: {
                borderRadius: 200,
              },
            },
            {
              value: 735,
              name: 'Direct',
            },
          ],
        },
      ],
    }

    chart.setOption(option)
  }
}
const initChart2 = () => {
  if (chartRef2.value) {
    const chart = echarts.init(chartRef2.value)

    const option = {
      series: [
        {
          name: '进度',
          type: 'pie',
          radius: ['75%', '100%'],
          center: ['50%', '50%'],
          color: ['#FF5A00', '#99A8BD'],
          emphasis: {
            disabled: true,
          },
          label: {
            show: false,
          },
          data: [
            {
              value: 1048,
              name: 'Search Engine',
              itemStyle: {
                borderRadius: 200,
              },
            },
            {
              value: 735,
              name: 'Direct',
            },
          ],
        },
      ],
    }

    chart.setOption(option)
  }
}
// 初始化第二个图表
const initChart3 = () => {
  if (chartRef3.value) {
    const chart = echarts.init(chartRef3.value)

    const option = {
      series: [
        {
          name: '进度',
          type: 'pie',
          radius: ['75%', '100%'],
          center: ['50%', '50%'],
          color: ['#4E4E4E', '#FF5A00', '#99A8BD'],
          label: {
            show: false,
          },
          emphasis: {
            disabled: true,
          },
          data: [
            {
              value: 35,
              name: 'Small',
            },
            {
              value: 35,
              name: 'Medium',
              itemStyle: {
                borderRadius: [200, 0, 200, 0],
              },
            },
            {
              value: 30,
              name: 'Large',
              itemStyle: {
                borderRadius: 200,
              },
            },
          ],
        },
      ],
    }

    chart.setOption(option)
  }
}
// 销毁所有图表实例
const destroyAllCharts = () => {
  if (chartRef1.value) {
    const chart1 = echarts.getInstanceByDom(chartRef1.value)
    if (chart1) chart1.dispose()
  }
  if (chartRef2.value) {
    const chart2 = echarts.getInstanceByDom(chartRef2.value)
    if (chart2) chart2.dispose()
  }
  if (chartRef3.value) {
    const chart3 = echarts.getInstanceByDom(chartRef3.value)
    if (chart3) chart3.dispose()
  }
  if (chartRef4.value) {
    const chart4 = echarts.getInstanceByDom(chartRef4.value)
    if (chart4) chart4.dispose()
  }
  if (chartRef5.value) {
    const chart5 = echarts.getInstanceByDom(chartRef5.value)
    if (chart5) chart5.dispose()
  }
  initChart1()
  initChart2()
  initChart3()
  initChart4()
  initChart5()
}
// 初始化第四个图表 - Stacker Crane Cycle Analysis
const initChart4 = () => {
  if (chartRef4.value) {
    const chart = echarts.init(chartRef4.value)

    const option = {
      grid: {
        top: '5%',
        right: 0,
        bottom: 0,
        left: 0,
        containLabel: true,
      },
      xAxis: {
        type: 'category',
        data: ['Sep', 'Mar', 'Dec', 'Feb', 'Apr', 'Jun'],
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: '#666',
          fontSize: 12,
        },
      },
      yAxis: {
        type: 'value',
        max: 100,
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: '#666',
          fontSize: 12,
          formatter: '{value}%',
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: 'rgba(0,0,0,0.05)',
            type: 'solid',
          },
        },
      },
      series: [
        {
          name: 'Work',
          type: 'bar',
          data: [80, 37, 65, 65, 85, 50],
          label: {
            show: true,
            position: 'top', // 方块放在柱头
            offset: [0, 3], // 再往上挪 6 px，避免压住柱子
            formatter: '', // 不显示文字
            backgroundColor: '#EA5E13',
            width: 10, // 方块宽
            height: 2, // 方块高
          },
          barGap: '30%', // ← 关键：同一刻度内两根柱子间距
          itemStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: '#FF5A00',
                },
                {
                  offset: 1,
                  color: 'rgba(234,94,19,0)',
                },
              ],
            },
          },
          barWidth: 10,
        },
        {
          name: 'Standby',
          type: 'bar',
          data: [53, 80, 47, 50, 65, 50],
          label: {
            show: true,
            position: 'top', // 方块放在柱头
            offset: [0, 3], // 再往上挪 6 px，避免压住柱子
            formatter: '', // 不显示文字
            backgroundColor: '#99A8BD',
            width: 10, // 方块宽
            height: 2, // 方块高
          },
          itemStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: '#99A8BD',
                },
                {
                  offset: 1,
                  color: 'rgba(153,168,189,0)',
                },
              ],
            },
          },
          barWidth: 10,
        },
      ],
    }

    chart.setOption(option)
  }
}

// 初始化第五个图表 - BCR Read Statistics
const initChart5 = () => {
  if (chartRef5.value) {
    const chart = echarts.init(chartRef5.value)

    const option = {
      grid: {
        top: '5%',
        right: 0,
        bottom: 0,
        left: 0,
        containLabel: true,
      },
      xAxis: {
        type: 'category',
        data: ['Sep', 'Mar', 'Dec', 'Feb', 'Apr', 'Jun'],
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: '#666',
          fontSize: 12,
        },
      },
      yAxis: {
        type: 'value',
        max: 100,
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: '#666',
          fontSize: 12,
          formatter: '{value}%',
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: 'rgba(0,0,0,0.05)',
            type: 'solid',
          },
        },
      },
      series: [
        {
          name: 'ASRS',
          type: 'bar',
          data: [75, 35, 60, 62, 82, 48],
          barGap: '30%', // ← 关键：同一刻度内两根柱子间距、
          label: {
            show: true,
            position: 'top', // 方块放在柱头
            offset: [0, 3], // 再往上挪 6 px，避免压住柱子
            formatter: '', // 不显示文字
            backgroundColor: '#EA5E13',
            width: 10, // 方块宽
            height: 2, // 方块高
          },
          itemStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: '#FF5A00',
                },
                {
                  offset: 1,
                  color: 'rgba(234,94,19,0)',
                },
              ],
            },
          },
          barWidth: 10,
        },
        {
          name: '3B',
          type: 'bar',
          data: [50, 78, 45, 48, 63, 48],
          label: {
            show: true,
            position: 'top', // 方块放在柱头
            offset: [0, 3], // 再往上挪 6 px，避免压住柱子
            formatter: '', // 不显示文字
            backgroundColor: '#99A8BD',
            width: 10, // 方块宽
            height: 2, // 方块高
          },
          itemStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: '#99A8BD',
                },
                {
                  offset: 1,
                  color: 'rgba(153,168,189,0)',
                },
              ],
            },
          },
          barWidth: 10,
        },
      ],
    }

    chart.setOption(option)
  }
}

// 示例用法（可以在控制台查看）
onMounted(() => {
  // 添加窗口大小变化监听事件
  window.addEventListener('resize', handleResize)
  initChart1()
  initChart2()
  initChart3()
  initChart4()
  initChart5()
})
// 组件卸载时移除事件监听器
onUnmounted(() => {
  window.removeEventListener('resize', handleResize)

  // 销毁所有图表实例
  destroyAllCharts()
})
</script>

<style scoped lang="scss">
.font-normal {
  font-family: 'NikeNormal';
}

.page-content {
  width: 3840px;
  height: 1080px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  // background-color: black;

  .left {
    width: 960px;
    height: 888px;
    background: #f8f8f780;
    box-sizing: border-box;
    padding: 8px;
    background: rgba(248, 248, 247, 0.5);
    border-radius: 0px 8px 8px 0px;
    .equipment-statistics {
      width: 100%;
      height: 153px;
      background: rgba(255, 255, 255, 0.4);
      border-radius: 8px;
      box-sizing: border-box;
      padding: 20px 12px;
      .title {
        font-family: 'Nike Trade Gothic Bold';
        color: #110600;
        font-size: 24px;
        line-height: 30px;
        color: #110600;
      }
      .info-box {
        width: 100%;
        display: flex;
        margin-top: 20px;
        gap: 20px;

        .box {
          display: flex;
          align-items: center;
          gap: 8px;

          .icon-wrap {
            width: 64px;
            height: 64px;
            background: linear-gradient(
              163deg,
              rgba(254, 91, 0, 0.2) 0%,
              rgba(255, 135, 26, 0.2) 100%
            );
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            .icon {
              width: 36px;
              height: 36px;
            }
          }

          .info {
            padding: 3px 0 2px 0;
            .code {
              font-family: 'NikeNormal';
              font-size: 14px;
              color: rgba(35, 37, 37, 0.8);
              line-height: 17px;
              white-space: nowrap;
            }

            .value {
              font-family: 'Nike Trade Gothic Bold';
              font-size: 28px;
              color: #110600;
              line-height: 34px;
              margin-bottom: 8px;
            }
          }
        }
      }
    }
    .map {
      width: 100%;
      height: 550px;
      background: rgba(255, 255, 255, 0.4);
      border-radius: 8px 8px 8px 8px;
      padding: 20px;
      box-sizing: border-box;
      .title {
        font-family: 'Nike Trade Gothic Bold';
        color: #110600;
        font-size: 24px;
        line-height: 30px;
        color: #110600;
        margin-bottom: 20px;
      }
      img {
        width: 904px;
        height: 471px;
      }
    }
  }

  .right {
    width: 960px;
    height: 888px;
    background: rgba(248, 248, 247, 0.5);
    border-radius: 8px 0px 0px 8px;
    padding: 8px;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: flex-start;
    gap: 8px;
    .sku {
      flex: 1;
      height: 184px;
      background: rgba(255, 255, 255, 0.4);
      border-radius: 8px 8px 8px 8px;
      padding: 20px;
      box-sizing: border-box;
      position: relative;
      .title {
        font-family: 'Nike Trade Gothic Bold';
        color: #110600;
        font-size: 24px;
        line-height: 30px;
        color: #110600;
      }
      .value {
        font-family: 'Nike Trade Gothic Bold';
        color: #232525;
        font-size: 48px;
        margin-top: 39px;
        line-height: 58px;
      }
      .progress-wrap {
        position: absolute;
        top: 52px;
        right: 60px;
        width: 100px;
        height: 100px;
      }
      img {
        position: absolute;
        top: 32px;
        right: 35px;
        width: 120px;
        height: 120px;
      }
    }
    .second-charts-section {
      height: 184px;
      border-radius: 8px 8px 8px 8px;
      background: rgba(255, 255, 255, 0.4);
      display: flex;
      .chart-box {
        width: 33.33%;
        height: 100%;
        padding: 20px;
        flex-shrink: 0;
        &:nth-child(2) {
          padding: 20px 20px 20px 46px;
        }
        &:last-child {
          padding: 20px 20px 20px 37px;
        }
        box-sizing: border-box;
        display: flex;
        align-items: center;
        gap: 32px;
        .echarts-container {
          width: 80px;
          height: 80px;
        }
        .legend {
          display: flex;
          flex-direction: column;
          gap: 8px;
          .legend-item {
            display: flex;
            align-items: center;
          }
        }
      }
    }
    .third-charts-section {
      width: 100%;
      height: 296px;
      gap: 8px;
      .box {
        flex: 1;
        height: 100%;
        background: rgba(255, 255, 255, 0.4);
        border-radius: 8px 8px 8px 8px;
        box-sizing: border-box;
        padding: 16px 12px;
        .title {
          display: flex;
          align-items: center;
          justify-content: space-between;
          line-height: 29px;
        }
        .echarts-container {
          width: 444px;
          height: 207px;
          margin-top: 16px;
        }
        .legend {
          display: flex;
          gap: 8px;
          .legend-item {
            display: flex;
            align-items: center;
          }
        }
      }
    }
    .last-charts-section {
      width: 100%;
      height: 184px;
      gap: 8px;
      .box {
        flex: 1;
        height: 100%;
        background: rgba(255, 255, 255, 0.4);
        border-radius: 8px 8px 8px 8px;
        padding: 28px 20px 27px 20px;
        .chart-wrap {
          width: 100%;
          box-sizing: border-box;
          padding: 0 105px;
          margin-top: 20px;
          align-items: center;
          img{
            width: 20px;
            margin-right: 4px;
          }
        }
      }
    }
  }
}
</style>
