<template>
  <div  v-if="data" class="page-content">
    <div class="left">
      <div class="top">
        <img src="../assets/map.png" alt="" />
      </div>
      <div class="bottom">
        <div class="lb_wrap">
          <span>OB volume %</span>
          <span>Served Province/City</span>
          <span>Served Channel with%</span>
        </div>
      </div>
    </div>
    <div class="right">
      <!-- Today's GI Volume Section -->
      <div class="dashboard-section">
        <div class="section-title">Today's GI Volume</div>
        <div class="section-content">
          <div class="volume-info">
            <div class="volume-number">
              {{ data.TodayGlVolume.Total }} <span class="unit">Ku</span>
            </div>
            <div class="chart-container">
              <div ref="chartRef1" class="echarts-container"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Current Status Section -->
      <div class="dashboard-section">
        <div class="section-title">Current Status</div>
        <div class="ytd-item">
          <div class="icon-wrap">
            <img src="../assets/icon28.svg" class="icon" />
          </div>
          <div class="ytd-info">
            <div style="display: flex; align-items: center; justify-content: space-between">
              <div class="ytd-label"></div>
              <span class="ytd-percentage">{{ data.CurrentStatus }}%</span>
            </div>

            <div class="ytd-progress">
              <a-progress
                :percent="data.CurrentStatus"
                :showInfo="false"
                :size="12"
                trailColor="#ADADAD"
                :stroke-color="{
                  '0%': '#FF5A00',
                  '100%': '#FF881B',
                }"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- MTD GI Volume Section -->
      <div class="dashboard-section">
        <div class="section-title">MTD GI Volume</div>
        <div class="section-content">
          <div class="volume-info">
            <div class="volume-number">{{ data.MTDVolume.Total }} <span class="unit">Ku</span></div>
            <div class="chart-container">
              <div ref="chartRef2" class="echarts-container"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Monthly Shipment Target Fulfillment Section -->
      <div class="dashboard-section">
        <div class="section-title">Monthly Shipment Target Fulfillment</div>
        <div class="ytd-item">
          <div class="icon-wrap">
            <img src="../assets/iocn29.svg" class="icon" />
          </div>
          <div class="ytd-info">
            <div style="display: flex; align-items: center; justify-content: space-between">
              <div class="ytd-label"></div>
              <span class="ytd-percentage">{{ data.Monthly }}%</span>
            </div>

            <div class="ytd-progress">
              <a-progress
                :percent="data.Monthly"
                :showInfo="false"
                :size="12"
                trailColor="#ADADAD"
                :stroke-color="{
                  '0%': '#FF5A00',
                  '100%': '#FF881B',
                }"
              />
            </div>
          </div>
        </div>
      </div>

      <!--Last Month Performance-->
      <div class="last-month-performance">
        <div class="section-title">Last Month Performance</div>
        <div class="box-wrap">
          <div class="box">
            <div class="icon-wrap">
              <img src="../assets/icon6.svg" class="icon" />
            </div>
            <div class="info">
              <div class="code">Ship On Time%</div>
              <div class="value">{{data.ShipOnTime}}%</div>
            </div>
          </div>
          <div class="box">
            <div class="icon-wrap">
              <img src="../assets/icon7.svg" class="icon" />
            </div>
            <div class="info">
              <div class="code">Order Fill in%</div>
              <div class="value">{{data.OrderFillin}}%</div>
            </div>
          </div>
          <div class="box">
            <div class="icon-wrap">
              <img src="../assets/icon8.svg" class="icon" />
            </div>
            <div class="info">
              <div class="code">Order Accuracy%</div>
              <div class="value">{{data.OrderAccuracy}}%</div>
            </div>
          </div>
        </div>
      </div>
      <!--12 month roling volume-->
      <div class="chart3-container">
        <div ref="chartRef3" class="chart"></div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import * as echarts from 'echarts'
// import secondData from './Second.json'

// JSON数据对象
const data = ref()
const flag = ref(true)
const hideView = () => {
  if (flag.value) {
    // 控制左侧区域宽度为0，实现隐藏效果
    const leftElement = document.querySelector('.left') as HTMLElement
    const rightElement = document.querySelector('.right') as HTMLElement
    if (leftElement) {
      leftElement.style.transform = 'translateX(-100%)'
    }
    if (rightElement) {
      rightElement.style.transform = 'translateX(100%)'
    }
  } else {
    // 控制左侧区域宽度为0，实现隐藏效果
    const leftElement = document.querySelector('.left') as HTMLElement
    const rightElement = document.querySelector('.right') as HTMLElement
    if (leftElement) {
      leftElement.style.transform = 'translateX(0)'
    }
    if (rightElement) {
      rightElement.style.transform = 'translateX(0)'
    }
  }
  flag.value = !flag.value
}
window.ue.interface.handleHide = () => {
  hideView()
}
/* 接收 UE 消息 */
window.ue.interface.sendData = (jsonStr: string) => {
  data.value = JSON.parse(jsonStr)
  setTimeout(() => {
    handleResize()
  }, 100)
}

const chartRef1 = ref<HTMLDivElement>()
const chartRef2 = ref<HTMLDivElement>()
const chartRef3 = ref<HTMLDivElement>()
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
  initAllCharts()
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
}

// 初始化所有图表
const initAllCharts = () => {
  initChart1()
  initChart2()
  initChart3()
}

// 初始化第一个图表
const initChart1 = () => {
  if (chartRef1.value) {
    const chart = echarts.init(chartRef1.value)
    const percent = (Number(data.value.TodayGlVolume.Repack) / Number(data.value.TodayGlVolume.Total) * 100).toFixed(2)

    const option = {
      title: {
        text: `{percent|${percent}%}\n{label|Repack}`,
        left: 'center',
        top: 'center',
        textStyle: {
          rich: {
            percent: {
              fontSize: '16',
              color: ' #232525',
              fontFamily: 'NikeNormal',
              fontWeight: 'normal',
            },
            label: {
              fontSize: '14',
              color: ' #232525',
              fontFamily: 'NikeNormal',
              fontWeight: 'normal',
            },
          },
        },
      },
      series: [
        {
          name: '进度',
          type: 'pie',
          radius: ['75%', '100%'],
          center: ['50%', '50%'],
          color: ['#FF5A00', '#99A8BD'],
          label: {
            show: true,
            position: 'outside',
            formatter: '{c}',
            color: '#232525',
            fontSize: '14',
            fontFamily: 'NikeNormal',
          },
          labelLine: {
            show: true, // 是否显示引导线
            length: 10, // 第一段线长（从扇形边缘出发）
            length2: 20, // 第二段线长（折后横向段）
            smooth: 0.2, // 折线圆角平滑度
          },
          data: [
            {
              value: data.value.TodayGlVolume.Repack,
              name: 'Repack',
              itemStyle: {
                borderRadius: 200,
              },
            },
            {
              value: data.value.TodayGlVolume.Normal,
              name: 'Normal',
            },
          ],
        },
      ],
    }

    chart.setOption(option)
  }
}

// 初始化第二个图表
const initChart2 = () => {
  if (chartRef2.value) {
    const chart2 = echarts.init(chartRef2.value)
    const percent = (Number(data.value.MTDVolume.Repack) / Number(data.value.MTDVolume.Total) * 100).toFixed(2)
    const option = {
      title: {
        text: `{percent|${percent}%}\n{label|Repack}`,
        left: 'center',
        top: 'center',
        textStyle: {
          rich: {
            percent: {
              fontSize: '16',
              color: ' #232525',
              fontFamily: 'NikeNormal',
              fontWeight: 'normal',
            },
            label: {
              fontSize: '14',
              color: ' #232525',
              fontFamily: 'NikeNormal',
              fontWeight: 'normal',
            },
          },
        },
      },
      series: [
        {
          name: '进度',
          type: 'pie',
          radius: ['75%', '100%'],
          center: ['50%', '50%'],
          color: ['#FF5A00', '#99A8BD'],
          label: {
            show: true,
            position: 'outside',
            formatter: '{c}',
            color: '#232525',
            fontSize: '14',
            fontFamily: 'NikeNormal',
          },
          labelLine: {
            show: true, // 是否显示引导线
            length: 10, // 第一段线长（从扇形边缘出发）
            length2: 20, // 第二段线长（折后横向段）
            smooth: 0.2, // 折线圆角平滑度
          },
          data: [
            {
              value: data.value.MTDVolume.Repack,
              name: 'Repack',
              itemStyle: {
                borderRadius: 200,
              },
            },
            {
              value: data.value.MTDVolume.Normal,
              name: 'Normal',
            },
          ],
        },
      ],
    }
    chart2.setOption(option)
  }
}

// 初始化第三个图表
const initChart3 = () => {
  if (chartRef3.value) {
    const chart = echarts.init(chartRef3.value)

    const option = {
      title: {
        text: '12 Month Rolling Volume',
        left: 'left',
        top: 0,
        textStyle: {
          color: '#110600',
          fontSize: '24',
          fontWeight: 'bold',
          fontFamily: 'Nike Trade Gothic Bold',
        },
      },
      legend: {
        data: ['Inbound', 'Outbound'],
        right: 'right',
        top: 0,
        orient: 'horizontal',
        textStyle: {
          color: '#110600',
          fontFamily: 'NikeNormal',
          fontSize: '16',
        },
        width: '300',
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: {
        type: 'category',
        data: data.value.Month12.map((item) => item.Month),
        axisLine: {
          lineStyle: {
            color: 'rgba(0,0,0,0.05)',
          },
        },
        axisTick: {
          show: true,
          lineStyle: {
            color: 'rgba(0,0,0,0.05)',
          },
        },
        axisLabel: {
          color: '#110600',
          fontSize: '16',
        },
      },
      yAxis: {
        type: 'value',
        min: 'dataMin', // 取数据最小值
        axisLine: {
          lineStyle: {
            color: '#ccc',
          },
        },
        axisLabel: {
          color: '#666',
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(0,0,0,0.05)',
          },
        },
      },
      series: [
        {
          name: 'GI',
          type: 'line',
          data: data.value.Month12.map((item) => item.Outbound),
          lineStyle: {
            color: '#EA5E13',
            width: 3,
          },
          itemStyle: {
            color: '#FF6B35',
          },
          symbol: 'none',
          smooth: true,
        },
      ],
      tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderColor: '#ccc',
        textStyle: {
          color: '#333',
        },
      },
    }

    chart.setOption(option)
  }
}

// 示例用法（可以在控制台查看）
onMounted(() => {
  // 添加窗口大小变化监听事件
  window.addEventListener('resize', handleResize)
  ue5('loaded', { msg: '加载完成了' })
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
  //background-color: black;

  .left {
    width: 960px;
    height: 888px;
    background: #f8f8f780;
    box-sizing: border-box;
    padding: 8px;
    background: rgba(248, 248, 247, 0.5);
    border-radius: 0px 8px 8px 0px;

    .top {
      width: 100%;
      height: 432px;
      background: rgba(255, 255, 255, 0.4);
      border-radius: 8px;
      margin-bottom: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 709px;
        height: 371px;
      }
    }

    .bottom {
      width: 100%;
      height: 432px;
      background: rgba(255, 255, 255, 0.4);
      border-radius: 8px;
      padding: 20px;
      box-sizing: border-box;

      .lb_wrap {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 8px;
        justify-content: center;
        align-items: center;
        font-family: 'NikeNormal';
        font-size: 26px;
        color: rgba(35, 37, 37, 0.8);
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

    .dashboard-section {
      width: 468px;
      height: 170px;
      background: rgba(255, 255, 255, 0.4);
      border-radius: 8px;
      padding: 20px 20px 0 20px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;

      .section-title {
        font-family: 'Nike Trade Gothic Bold';
        font-size: 24px;
        line-height: 30px;
        color: #110600;
        margin-bottom: 10px;
      }

      .ytd-item {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-bottom: 32px;
        margin-top: 20px;

        .icon-wrap {
          width: 58px;
          height: 58px;
          background: linear-gradient(
            163deg,
            rgba(254, 91, 0, 0.2) 0%,
            rgba(255, 135, 26, 0.2) 100%
          );
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          .icon {
            width: 40px;
            height: 40px;
          }
        }

        .ytd-info {
          flex: 1;

          .ytd-label {
            font-family: 'Nike Trade Gothic', Arial, sans-serif;
            font-weight: normal;
            font-size: 16px;
            color: rgba(35, 37, 37, 0.8);
          }

          .ytd-percentage {
            font-family: 'Nike Trade Gothic', Arial, sans-serif;
            font-weight: bold;
            font-size: 24px;
            color: #333;
          }

          .ytd-progress {
            display: flex;
            align-items: center;
          }
        }
      }

      .section-content {
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      // Volume sections (Today's GI Volume & MTD GI Volume)
      .volume-info {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin-left: 38px;

        .volume-number {
          font-family: 'Nike Trade Gothic Bold';
          font-size: 36px;
          color: #110600;

          .unit {
            font-size: 28px;
          }
        }

        .chart-container {
          .echarts-container {
            width: 280px;
            height: 100px;
          }
        }
      }

      // Status sections (Current Status & Monthly Shipment Target Fulfillment)
      .status-info {
        display: flex;
        align-items: center;
        gap: 40px;
        width: 100%;

        .status-icon {
          .icon-box {
            width: 60px;
            height: 60px;
            background: rgba(255, 107, 53, 0.1);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }

        .progress-container {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 20px;

          .progress-bar {
            flex: 1;
            height: 12px;
            background: #e0e0e0;
            border-radius: 6px;
            overflow: hidden;

            .progress-fill {
              height: 100%;
              background: #ff6b35;
              border-radius: 6px;
              transition: width 0.3s ease;
            }
          }

          .progress-percentage {
            font-family: 'NikeNormal';
            font-size: 32px;
            font-weight: bold;
            color: #333;
            min-width: 80px;
            text-align: right;
          }
        }
      }
    }

    .last-month-performance {
      width: 100%;
      height: 160px;
      background: rgba(255, 255, 255, 0.4);
      border-radius: 8px;
      padding: 16px;
      box-sizing: border-box;

      .section-title {
        font-family: 'Nike Trade Gothic Bold';
        font-size: 24px;
        line-height: 30px;
        color: #110600;
        margin-bottom: 30px;
      }

      .box-wrap {
        display: flex;

        .box {
          width: 290.67px;
          display: flex;
          align-items: center;
          gap: 20px;

          .icon-wrap {
            width: 58px;
            height: 58px;
            background: linear-gradient(
              163deg,
              rgba(254, 91, 0, 0.2) 0%,
              rgba(255, 135, 26, 0.2) 100%
            );
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            .icon {
              width: 40px;
              height: 40px;
            }
          }

          .info {
            .code {
              font-family: 'NikeNormal';
              font-size: 16px;
              color: rgba(35, 37, 37, 0.8);
            }

            .value {
              font-family: 'Nike Trade Gothic Bold';
              font-size: 24px;
              color: #110600;
            }
          }
        }
      }
    }

    .chart3-container {
      width: 100%;
      height: 348px;
      background: rgba(255, 255, 255, 0.4);
      border-radius: 8px;
      padding: 12px 12px 0 12px;
      box-sizing: border-box;

      .chart {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
