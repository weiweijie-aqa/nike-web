<template>
  <div  v-if="data" class="page-content">
    <div class="left">
      {{}}
      <div class="top">
        <img src="../assets/map.png" alt="" />
      </div>
      <div class="bottom">
        <div class="box-item">
          <a-progress
            type="circle"
            :percent="30"
            trailColor="#4E4E4E"
            strokeColor="#FF5A00"
            :size="120"
            :strokeWidth="12.5"
          >
            <template #format="percent">
              <span class="ft-24 font-bold">{{ percent }}%</span>
            </template>
          </a-progress>
          <span class="ft-20 font-bold mt-13 mb-24" style="color: #4a4c4c">APP</span>
          <div class="info-box">
            <span>Domestic</span>
            <span style="color: #ff5a00">30</span>
          </div>
          <div class="info-box">
            <span>International</span>
            <span class="font-bold">70</span>
          </div>
          <div class="info-box">
            <span>From country</span>
            <span class="font-bold">China</span>
          </div>
          <div class="info-box">
            <span>From city</span>
            <span class="font-bold">shanghai</span>
          </div>
        </div>
        <div class="box-item">
          <a-progress
            type="circle"
            :percent="30"
            trailColor="#4E4E4E"
            strokeColor="#FF5A00"
            :size="120"
            :strokeWidth="12.5"
          >
            <template #format="percent">
              <span class="ft-24 font-bold">{{ percent }}%</span>
            </template>
          </a-progress>
          <span class="ft-20 font-bold mt-13 mb-24" style="color: #4a4c4c">FW</span>
          <div class="info-box">
            <span>Domestic</span>
            <span style="color: #ff5a00">30</span>
          </div>
          <div class="info-box">
            <span>International</span>
            <span class="font-bold">70</span>
          </div>
          <div class="info-box">
            <span>From country</span>
            <span class="font-bold">China</span>
          </div>
          <div class="info-box">
            <span>From city</span>
            <span class="font-bold">shanghai</span>
          </div>
        </div>
        <div class="box-item">
          <a-progress
            type="circle"
            :percent="30"
            trailColor="#4E4E4E"
            strokeColor="#FF5A00"
            :size="120"
            :strokeWidth="12.5"
          >
            <template #format="percent">
              <span class="ft-24 font-bold">{{ percent }}%</span>
            </template>
          </a-progress>
          <span class="ft-20 font-bold mt-13 mb-24" style="color: #4a4c4c">APP</span>
          <div class="info-box">
            <span>Domestic</span>
            <span style="color: #ff5a00">30</span>
          </div>
          <div class="info-box">
            <span>International</span>
            <span class="font-bold">70</span>
          </div>
          <div class="info-box">
            <span>From country</span>
            <span class="font-bold">China</span>
          </div>
          <div class="info-box">
            <span>From city</span>
            <span class="font-bold">shanghai</span>
          </div>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="info-list">
        <div class="info-box">
          <img src="../assets/icon9.svg" alt="" />
          <span class="line-height-19">Inbound</span>
          <span class="line-height-19">Volume</span>
          <span class="count">{{ data.InboundVolume }}k</span>
        </div>
        <div class="info-box">
          <img src="../assets/icon10.svg" alt="" />
          <span class="line-height-19">On-Time </span>
          <span class="line-height-19">Arrival Rate</span>
          <span class="count">{{ data.OnTimeArrivalRate }}%</span>
        </div>
        <div class="info-box">
          <img src="../assets/icon11.svg" alt="" />
          <span class="line-height-19">Dock ToStock</span>
          <span class="line-height-19">Time</span>
          <span class="count">{{ data.DockToStockTime }}min</span>
        </div>
        <div class="info-box">
          <img src="../assets/icon12.svg" alt="" />
          <span class="line-height-19">Asn</span>
          <span class="line-height-19">Accuracy</span>
          <span class="count">{{ data.AsnAccuracy }}%</span>
        </div>
        <div class="info-box">
          <img src="../assets/icon13.svg" alt="" />
          <span class="line-height-19">Exception</span>
          <span class="line-height-19">Rate</span>
          <span class="count">{{ data.ExceptionRate }}%</span>
        </div>
      </div>
      <div style="display: flex; justify-content: space-between; flex-wrap: wrap">
        <div class="infos-wrap">
          <div class="info-box">
            <div class="icon-wrap">
              <img src="../assets/icon9.svg" alt="" />
            </div>
            <span class="line-height-19">Planned</span>
            <span class="line-height-19">Receiving Cartons</span>
            <span class="count">{{ data.PlannedReceivingCartons }}</span>
          </div>
          <div class="info-box">
            <div class="icon-wrap">
              <img src="../assets/icon14.svg" alt="" />
            </div>
            <span class="line-height-19">Booked VS Entered</span>
            <span class="line-height-19">Truckers</span>
            <span class="count">{{ data.BookedVSEnteredTruckers }}</span>
          </div>
        </div>
        <div class="receiving-progaess">
          <div class="title">Real Time Receiving Progress</div>
          <div style="display: flex; align-items: center; flex-direction: column">
            <a-progress
              type="circle"
              :percent="data.RealTimeReceivingProgress"
              trailColor="#99A8BD"
              strokeColor="#FF5A00"
              :size="120"
              :strokeWidth="12.5"
            >
              <template #format="percent">
                <span class="ft-28 font-bold">{{ percent }}%</span>
              </template>
            </a-progress>
            <div class="legend">
              <div class="item">
                <div class="dot" style="background-color: #ff5a00"></div>
                <span>Planned</span>
              </div>
              <div class="item">
                <div class="dot" style="background-color: #99a8bd"></div>
                <span>Planned Volume</span>
              </div>
            </div>
          </div>
        </div>
        <div class="inbound-vollume">
          <div ref="chartRef" class="chart"></div>
        </div>
        <div class="daily-exceptions">
          <div class="title">Daily Exceptions</div>

          <div class="table-header">
            <div class="column">Stage</div>
            <div class="column">Count</div>
          </div>
          <div class="table-body" v-for="item in data.DailyExceptions.Daily" :key="item.Stage">
            <div class="column">{{ item.Stage }}</div>
            <div class="column">{{ item.Count }}</div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import * as echarts from 'echarts'
import thirdData from './Third.json'

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
const chartRef = ref<HTMLDivElement>()
// 窗口尺寸响应式数据
const windowSize = ref({
  width: window.innerWidth,
  height: window.innerHeight,
})
const setChart = () => {
  // 如果ECharts图表存在，先销毁现有实例再重新创建
  if (chartRef.value) {
    // 检查是否已存在图表实例，如果存在则先销毁
    const existingChart = echarts.getInstanceByDom(chartRef.value)
    if (existingChart) {
      existingChart.dispose()
    }

    const chart = echarts.init(chartRef.value)

    const option = {
      title: {
        text: 'Inbound Volume',
        left: 'left',
        top: 0,
        textStyle: {
          color: '#110600',
          fontSize: '24',
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
        top: '30%',
        containLabel: true,
      },
      xAxis: {
        type: 'category',
        data: data.value.MonthIB4.map((item) => item.Month),
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
          fontSize: '16',
          fontFamily: 'NikeNormal',
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
          name: 'GI',
          type: 'line',
          data: data.value.MonthIB4.map((item) => item.Inbound),
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

// 窗口大小变化处理函数
const handleResize = () => {
  windowSize.value = {
    width: window.innerWidth,
    height: window.innerHeight,
  }
    // 清理图表实例
  if (chartRef.value) {
    const existingChart = echarts.getInstanceByDom(chartRef.value)
    if (existingChart) {
      existingChart.dispose()
    }
  }
  // 窗口大小变化时重新设置图表
  setChart()
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

  // 清理图表实例
  if (chartRef.value) {
    const existingChart = echarts.getInstanceByDom(chartRef.value)
    if (existingChart) {
      existingChart.dispose()
    }
  }
})
</script>

<style scoped lang="scss">
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

      border-radius: 8px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;

      .box-item {
        width: 309.33px;
        height: 100%;
        box-sizing: border-box;
        padding: 30px 20px;
        background: rgba(255, 255, 255, 0.2);
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 8px;

        .info-box {
          width: 100%;
          height: 38px;
          box-sizing: border-box;
          padding: 0 8px;
          display: flex;
          align-items: center;
          background: rgba(234, 94, 19, 0.05);
          border-radius: 4px;
          font-family: 'NikeNormal';
          font-size: 18px;
          color: #4a4c4c;
          gap: 14px;
          margin-bottom: 12px;

          &:last-child {
            margin-bottom: 0;
          }
        }
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

    .info-list {
      width: 100%;
      height: 264px;
      display: flex;
      justify-content: space-between;

      .info-box {
        width: 182px;
        height: 100%;
        font-family: 'NikeNormal';
        font-size: 16px;
        color: rgba(17, 6, 0, 0.7);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: rgba(255, 255, 255, 0.4);
        border-radius: 8px 8px 8px 8px;

        img {
          width: 32px;
          height: 32px;
          margin-bottom: 24px;
        }

        .count {
          font-family: 'Nike Trade Gothic Bold';
          font-size: 28px;
          color: #110600;
          margin-top: 12px;
        }
      }
    }

    .infos-wrap {
      width: 468px;
      height: 290px;
      background: rgba(255, 255, 255, 0.4);
      border-radius: 8px 8px 8px 8px;
      margin-top: 8px;
      display: flex;
      align-items: center;
      padding-left: 36px;

      .info-box {
        width: 184px;
        height: 164px;
        font-family: 'NikeNormal';
        font-size: 16px;
        color: rgba(17, 6, 0, 0.7);
        display: flex;
        flex-direction: column;
        // align-items: center;
        justify-content: center;

        &:first-child {
          margin-right: 33px;
        }

        .icon-wrap {
          width: 48px;
          height: 48px;
          background: linear-gradient(
            163deg,
            rgba(254, 91, 0, 0.2) 0%,
            rgba(255, 135, 26, 0.2) 100%
          );
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 36px;
          flex-shrink: 0;
        }

        img {
          width: 32px;
          height: 32px;
        }

        .count {
          font-family: 'Nike Trade Gothic Bold';
          font-size: 28px;
          color: #110600;
          margin-top: 8px;
          line-height: 24px;
        }
      }
    }

    .receiving-progaess {
      width: 468px;
      height: 290px;
      background: rgba(255, 255, 255, 0.4);
      border-radius: 8px 8px 8px 8px;
      margin-top: 8px;
      box-sizing: border-box;
      padding: 16px 12px;

      .title {
        font-family: 'Nike Trade Gothic Bold';
        font-size: 24px;
        color: #110600;
        line-height: 29px;
        margin-bottom: 48px;
      }

      .legend {
        display: flex;
        align-items: center;
        gap: 32px;
        margin-top: 16px;
        font-family: 'NikeNormal';
        font-size: 16px;
        color: rgba(35, 37, 37, 0.8);

        .item {
          display: flex;
          align-items: center;
          gap: 8px;

          .dot {
            width: 14px;
            height: 14px;
            border-radius: 50%;
          }
        }
      }
    }

    .inbound-vollume {
      width: 468px;
      height: 290px;
      background: rgba(255, 255, 255, 0.4);
      border-radius: 8px 8px 8px 8px;
      margin-top: 8px;
      box-sizing: border-box;
      padding: 16px 12px;

      .chart {
        width: 100%;
        height: 100%;
      }
    }

    .daily-exceptions {
      width: 468px;
      height: 290px;
      background: rgba(255, 255, 255, 0.4);
      border-radius: 8px 8px 8px 8px;
      margin-top: 8px;
      box-sizing: border-box;
      padding: 16px 12px;

      .title {
        font-family: 'Nike Trade Gothic Bold';
        font-size: 24px;
        color: #110600;
        line-height: 29px;
        margin-bottom: 16px;
      }

      .table-header {
        width: 100%;
        display: flex;
        background: rgba(255, 136, 27, 0.2);
        height: 30px;
        align-items: center;
        padding: 0 8px;
        box-sizing: border-box;

        .column {
          font-family: 'Nike Trade Gothic Bold';
          font-size: 18px;
          color: rgba(35, 37, 37, 0.8);

          &:first-child {
            flex: 1;
          }

          &:last-child {
            width: 40px;
            flex-shrink: 0;
          }
        }
      }

      .table-body {
        width: 100%;
        display: flex;
        height: 27px;
        align-items: center;
        padding: 0 8px;
        box-sizing: border-box;

        .column {
          font-family: 'NikeNormal';
          font-size: 18px;
          color: rgba(35, 37, 37, 0.8);

          &:first-child {
            flex: 1;
          }

          &:last-child {
            width: 40px;
            flex-shrink: 0;
          }
        }
      }
    }
  }
}
</style>
