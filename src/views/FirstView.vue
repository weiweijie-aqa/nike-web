<template>
  <ContainerBox v-if="data">
    <template #lb>
      <div class="lb_wrap">
        <div class="title">CLC Introduction</div>
        <div class="text-content">
          Nike's China Logistics Center, located inTaicang City, Jiangsu Province, is China'sfirst
          zero-carbon smart logistics park with anintegrated "wind-solar" energy structure. The
          logistics center officially launched itsnew energy system and intelligent
          warehousingfacilities on March 21,2023.lt achieves 100% renewable energy supply through
          distributed windpower(6MW), photovoltaic power generation
        </div>
      </div>
    </template>
    <template #rt>
      <div class="rt_wrap">
        <!-- 左侧圆形进度条 -->
        <div class="progress-circles">
          <div class="title">Inventory & Storage Utilization%</div>
          <div class="circle-item">
            <a-progress
              type="circle"
              :percent="Number(data.AP.Percentage)>90?90:data.AP.Percentage"
              trailColor="#99A8BD"
              strokeColor="#FF5A00"
              :size="90"
              :strokeWidth="12.5"
            >
              <template #format>
                <span class="ft-20 font-normal">{{ data.AP.Percentage }}%</span>
              </template>
            </a-progress>
            <div class="circle-info">
              <div class="code">AP</div>
              <div class="value">{{ data.AP.Data }} <span class="ft-20">Mu</span></div>
            </div>
          </div>

          <div class="circle-item">
            <a-progress
              type="circle"
              :percent="Number(data.FW.Percentage)>90?90:data.FW.Percentage"
              trailColor="#99A8BD"
              strokeColor="#FF5A00"
              :size="90"
              :strokeWidth="12.5"
            >
              <template #format>
                <span class="ft-20 font-normal">{{ data.FW.Percentage }}%</span>
              </template>
            </a-progress>
            <div class="circle-info">
              <div class="code">FW</div>
              <div class="value">{{ data.FW.Data }} <span class="ft-20">Mu</span></div>
            </div>
          </div>

          <div class="circle-item">
            <a-progress
              type="circle"
              :percent="Number(data.OMNI.Percentage)>90?90:data.OMNI.Percentage"
              trailColor="#99A8BD"
              strokeColor="#FF5A00"
              :size="90"
              :strokeWidth="12.5"
            >
              <template #format>
                <span class="ft-20 font-normal">{{ data.OMNI.Percentage }}%</span>
              </template>
            </a-progress>
            <div class="circle-info">
              <div class="code">OMNI</div>
              <div class="value">{{ data.OMNI.Data }} <span class="ft-20">Mu</span></div>
            </div>
          </div>
        </div>
        <div class="product-info">
          <!-- 右侧产品统计 -->
          <div class="product-stats-wrap">
            <div class="title">SKU Count</div>
            <div class="product-stats">
              <div class="stat-item">
                <div class="icon-wrap">
                  <img src="../assets/icon2.svg" class="icon" />
                </div>

                <div class="stat-info">
                  <div class="stat-label">Apparel</div>
                  <div class="stat-value">
                    {{ data.SKUCount.Apparel }} <span class="ft-16">M SKUs</span>
                  </div>
                </div>
              </div>

              <div class="stat-item">
                <div class="icon-wrap">
                  <img src="../assets/icon5.svg" class="icon" />
                </div>
                <div class="stat-info">
                  <div class="stat-label">Equipment</div>
                  <div class="stat-value">
                    {{ data.SKUCount.Equipment }} <span class="ft-16">M SKUs</span>
                  </div>
                </div>
              </div>

              <div class="stat-item">
                <div class="icon-wrap">
                  <img src="../assets/icon1.svg" class="icon" />
                </div>
                <div class="stat-info">
                  <div class="stat-label">Footwear</div>
                  <div class="stat-value">
                    {{ data.SKUCount.Footwear }} <span class="ft-16">M SKUs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- YTD Inbound / Outbound Units -->
          <div class="ytd-section">
            <h2 class="ytd-title">YTD Inbound / Outbound Volume</h2>

            <div class="ytd-item">
              <div class="icon-wrap">
                <img src="../assets/icon30.svg" class="icon" />
              </div>
              <div class="ytd-info">
                <div style="display: flex; align-items: center; justify-content: space-between">
                  <div class="ytd-label">IB {{ data.YTD.IB.Data }} Mu</div>
                  <span class="ytd-percentage">{{ data.YTD.IB.Percentage }}%</span>
                </div>

                <div class="ytd-progress">
                  <a-progress
                    :percent="data.YTD.IB.Percentage"
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

            <div class="ytd-item">
              <div class="icon-wrap">
                <img src="../assets/icon31.svg" class="icon" />
              </div>
              <div class="ytd-info">
                <div style="display: flex; align-items: center; justify-content: space-between">
                  <div class="ytd-label">OB {{ data.YTD.OB.Data }} Mu</div>
                  <span class="ytd-percentage">{{ data.YTD.OB.Percentage }}%</span>
                </div>
                <div class="ytd-progress">
                  <a-progress
                    :percent="data.YTD.OB.Percentage"
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
        </div>
      </div>
    </template>
    <template #rb>
      <div class="chart-container">
        <div ref="chartRef" class="chart"></div>
      </div>
    </template>
  </ContainerBox>
</template>
<script setup lang="ts">
import ContainerBox from '../components/ContainerBox.vue'
import { onMounted, onUnmounted, ref } from 'vue'
import * as echarts from 'echarts'
// import indexData from './Index.json'

const chartRef = ref<HTMLDivElement>()
// JSON数据对象
const data = ref()

// 窗口尺寸响应式数据
const windowSize = ref({
  width: window.innerWidth,
  height: window.innerHeight,
})
/* 接收 UE 消息 */
window.ue.interface.sendData = (jsonStr: string) => {
  data.value = JSON.parse(jsonStr)
  setTimeout(() => {
    handleResize()
  }, 100)
}
// 窗口大小变化处理函数
const handleResize = () => {
  windowSize.value = {
    width: window.innerWidth,
    height: window.innerHeight,
  }

  // 先销毁现有图表实例，再重新创建
  if (chartRef.value) {
    const existingChart = echarts.getInstanceByDom(chartRef.value)
    if (existingChart) {
      existingChart.dispose()
    }
  }

  // 重新初始化图表
  initChart()
}

// 图表初始化函数
const initChart = () => {
  if (chartRef.value) {
    const chart = echarts.init(chartRef.value)

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
        icon: 'roundRect',
        itemWidth: 24,
        itemHeight: 2,
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
        data: data.value['Month12'].map((item) => item.Month),
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
          color: 'rgba(35,37,37,0.8)',
          fontFamily: 'NikeNormal',
          fontSize: '16',
        },
      },
      yAxis: {
        type: 'value',
        name: '(K units)',
        nameLocation: 'end',
        min: 'dataMin', // 取数据最小值
        nameTextStyle: {
          color: '#666',
          fontFamily: 'NikeNormal',
          fontSize: '16',
        },
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
          name: 'Inbound',
          type: 'line',
          data: data.value['Month12'].map((item) => item.Inbound),
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
        {
          name: 'Outbound',
          type: 'line',
          data: data.value['Month12'].map((item) => item.Outbound),
          lineStyle: {
            color: '#5291EA',
            width: 3,
          },
          itemStyle: {
            color: '#4A90E2',
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
  // initChart()
})

// 组件卸载时移除事件监听器并销毁图表
onUnmounted(() => {
  window.removeEventListener('resize', handleResize)

  // 销毁图表实例
  if (chartRef.value) {
    const existingChart = echarts.getInstanceByDom(chartRef.value)
    if (existingChart) {
      existingChart.dispose()
    }
  }
})
</script>

<style scoped lang="scss">
.font-normal {
  font-family: 'NikeNormal';
}
.icon {
  width: 36px;
  height: 36px;
}
.lb_wrap {
  width: 100%;
  height: 100%;

  .title {
    font-family: 'Nike Trade Gothic Bold';
    font-size: 24px;
    color: #110600;
    height: 29px;
  }

  .text-content {
    margin-top: 24px;
    font-family: 'NikeNormal';
    font-size: 26px;
    color: rgba(35, 37, 37, 0.8);
    line-height: 39px;
  }
}

.rt_wrap {
  width: 100%;
  height: 100%;
  display: flex;
  gap: 8px;

  .progress-circles {
    display: flex;
    flex-direction: column;
    width: 320px;
    height: 100%;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 8px;
    padding: 12px;
    box-sizing: border-box;
    .title {
      font-family: 'Nike Trade Gothic Bold';
      font-size: 24px;
      color: #110600;
    }

    .circle-item {
      display: flex;
      align-items: center;
      padding-left: 57px;
      box-sizing: border-box;
      gap: 32px;
      flex: 1;
      border-bottom: 1px solid rgba(35, 37, 37, 0.08);

      &:last-child {
        border-bottom: none;
      }

      .circle_wrap {
        width: 90px;
        height: 90px;
        background: #ff5a00;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;

        .circle {
          width: 72px;
          height: 72px;
          background: #99a8bd;
          border-radius: 50%;
        }
      }

      .circle-info {
        .code {
          font-family: 'Nike Normal';
          font-size: 16px;
          color: rgba(35, 37, 37, 0.8);
          margin-bottom: 8px;
          line-height: 19px;
        }

        .value {
          font-family: 'Nike Trade Gothic Bold';
          font-size: 28px;
          color: #333;
          height: 34px;
          line-height: 34px;
        }
      }
    }
  }

  .product-info {
    flex: 1;
  }

  .product-stats-wrap {
    border-radius: 8px 0px 0px 8px;
    padding: 12px 16px;
    box-sizing: border-box;
    height: 160px;
    margin-bottom: 8px;
    background: rgba(248, 248, 247, 0.5);
    .title {
      font-family: 'Nike Trade Gothic Bold';
      font-size: 24px;
      color: #110600;
      height: 29px;
    }
  }
  .product-stats {
    display: flex;
    justify-content: space-between;
    margin-top: 37px;

    .stat-item {
      display: flex;
      align-items: center;
      gap: 12px;
      width: 188px;

      .icon-wrap {
        width: 58px;
        height: 58px;
        background: linear-gradient(163deg, rgba(254, 91, 0, 0.2) 0%, rgba(255, 135, 26, 0.2) 100%);
        border-radius: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .stat-info {
        .stat-label {
          font-family: 'NikeNormal';
          font-weight: normal;
          font-size: 16px;
          color: rgba(35, 37, 37, 0.8);
          margin-bottom: 8px;
        }

        .stat-value {
          font-family: 'Nike Trade Gothic Bold';
          font-size: 20px;
          color: #110600;
        }
      }
    }
  }

  .ytd-section {
    background: rgba(248, 248, 247, 0.5);
    border-radius: 8px 0px 0px 8px;
    padding: 16px 20px;
    box-sizing: border-box;
    height: 264px;

    .ytd-title {
      font-family: 'Nike Trade Gothic Bold';
      font-size: 24px;
      color: #110600;
      margin-bottom: 28px;
    }

    .ytd-item {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 32px;

      .icon-wrap {
        width: 58px;
        height: 58px;
        background: linear-gradient(163deg, rgba(254, 91, 0, 0.2) 0%, rgba(255, 135, 26, 0.2) 100%);
        border-radius: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
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
  }
}

.chart-container {
  width: 100%;
  height: 100%;

  .chart {
    width: 100%;
    height: 100%;
  }
}
</style>
