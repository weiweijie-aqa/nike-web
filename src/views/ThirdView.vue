<template>
  <div class="page-content">
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
          <span class="line-height-19">INEOUND</span>
          <span class="line-height-19">VOLLIME</span>
          <span class="count">81.2k</span>
        </div>
        <div class="info-box">
          <img src="../assets/icon10.svg" alt="" />
          <span class="line-height-19">ON-TIME</span>
          <span class="line-height-19">ARRIVAL RATE</span>
          <span class="count">92%</span>
        </div>
        <div class="info-box">
          <img src="../assets/icon11.svg" alt="" />
          <span class="line-height-19">DOCK TO-</span>
          <span class="line-height-19">STUCK TIME</span>
          <span class="count">81.2k</span>
        </div>
        <div class="info-box">
          <img src="../assets/icon12.svg" alt="" />
          <span class="line-height-19">ASN</span>
          <span class="line-height-19">ACCURACY</span>
          <span class="count">98.7%</span>
        </div>
        <div class="info-box">
          <img src="../assets/icon13.svg" alt="" />
          <span class="line-height-19">EXCEPTION</span>
          <span class="line-height-19">RATE</span>
          <span class="count">1.8%</span>
        </div>
      </div>
      <div style="display: flex; justify-content: space-between; flex-wrap: wrap">
        <div class="infos-wrap">
          <div class="info-box">
            <div class="icon-wrap">
              <img src="../assets/icon9.svg" alt="" />
            </div>

            <span class="line-height-19">PlANNED RECEDING</span>
            <span class="line-height-19">CARTONS</span>
            <span class="count">35.000</span>
          </div>
          <div class="info-box">
            <div class="icon-wrap">
              <img src="../assets/icon14.svg" alt="" />
            </div>
            <span class="line-height-19">BOOKED VS ENTERED</span>
            <span class="line-height-19">TRUCKERS</span>
            <span class="count">18/14</span>
          </div>
        </div>
        <div class="receiving-progaess">
          <div class="title">Real-time receiving progaess</div>
          <div style="display: flex; align-items: center; flex-direction: column">
            <a-progress
              type="circle"
              :percent="62"
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
                <span>planned</span>
              </div>
              <div class="item">
                <div class="dot" style="background-color: #99a8bd"></div>
                <span>planned volume</span>
              </div>
            </div>
          </div>
        </div>
        <div class="inbound-vollume">
          <div ref="chartRef" class="chart"></div>
        </div>
        <div class="daily-exceptions">
          <div class="title">Daily exceptions</div>

          <div class="table-header">
            <div class="column">Stage</div>
            <div class="column">Count</div>
          </div>
          <div class="table-body">
            <div class="column">Unleading Carrier Issue</div>
            <div class="column">4</div>
          </div>
          <div class="table-body">
            <div class="column">Goods Rework</div>
            <div class="column">3</div>
          </div>
          <div class="table-body">
            <div class="column">Documentation Error</div>
            <div class="column">2</div>
          </div>
          <div class="table-body">
            <div class="column">Excepetion Count</div>
            <div class="column">2</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import * as echarts from 'echarts'

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
        text: 'Inbound vollume',
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
        data: ['Mar', 'Jan', 'Sep', 'May'],
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
          data: [60, 80, 40, 30],
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
  // 窗口大小变化时重新设置图表
  setChart()
}

// 示例用法（可以在控制台查看）
onMounted(() => {
  // 添加窗口大小变化监听事件
  window.addEventListener('resize', handleResize)

  // 初始化图表
  setChart()
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
        height: 48px;
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
        height: 40px;
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
