<template>
  <div class="page-content">
    <div class="left">
      <div class="top"></div>
      <div class="bottom"></div>
    </div>
    <div class="right">
      <div class="dashboard-section">
        <div class="section-header">Today’s Repacking Volume</div>
        <div class="section-content"><span>120</span> <span class="ft-24">ku</span></div>
        <img class="box-icon" src="../assets/icon23.svg" alt="" />
      </div>
      <div class="dashboard-section">
        <div class="section-header">CAPACITY UTILIZATION%</div>
        <div class="section-content"><span>85</span><span class="ft-36">%</span></div>
        <div class="dashboard">
          <img class="box-icon" src="../assets/icon24.svg" alt="" />
          <img class="pointer" src="../assets/icon25.svg" alt="" />
        </div>
      </div>
      <div class="dashboard-section">
        <div class="section-header">Overall Repacking Status</div>
        <div class="flex mt-31" style="align-items: center">
          <span class="ft-48 font-bold lh-58 mr-16">25%</span>
          <a-progress
            :percent="25"
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
      <div class="dashboard-section">
        <div class="section-header">Wave 5/8</div>
        <div class="flex mt-21" style="align-items: center">
          <div
            class="w-150 mr-8 lh-29 flex"
            style="flex-shrink: 0; align-items: center; justify-content: space-between"
          >
            <span class="ft-16 font-normal" style="color: rgba(35, 37, 37, 0.8)">Replenish</span>
            <span class="ft-24 font-bold">35%</span>
          </div>
          <a-progress
            :percent="35"
            :showInfo="false"
            :size="12"
            trailColor="#ADADAD"
            :stroke-color="{
              '0%': '#FF5A00',
              '100%': '#FF881B',
            }"
          />
        </div>
        <div class="flex mt-20" style="align-items: center">
          <div
            class="w-150 mr-8 lh-29 flex"
            style="flex-shrink: 0; align-items: center; justify-content: space-between"
          >
            <span class="ft-16 font-normal" style="color: rgba(35, 37, 37, 0.8)">Pick & Pack</span>
            <span class="ft-24 font-bold">25%</span>
          </div>
          <a-progress
            :percent="25"
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
      <div class="dashboard-section1">
        <div class="section-header">Picking Location Utilization%</div>
        <div class="flex mt-21" style="align-items: center">
          <div
            class="w-150 mr-8 lh-29 flex"
            style="flex-shrink: 0; align-items: center; justify-content: space-between"
          >
            <div class="flex">
              <div class="ft-16 font-bold count" style="color: rgba(35, 37, 37, 0.8)">2</div>
              <div class="ft-16 font-normal nd" style="color: rgba(35, 37, 37, 0.8)">nd</div>
              <div class="ft-16 font-bold ml-8" style="color: rgba(35, 37, 37, 0.8)">Floor</div>
            </div>
            <span class="ft-24 font-bold">35%</span>
          </div>
          <a-progress
            :percent="35"
            :showInfo="false"
            :size="12"
            trailColor="#ADADAD"
            :stroke-color="{
              '0%': '#FF5A00',
              '100%': '#FF881B',
            }"
          />
        </div>
        <div class="flex mt-20" style="align-items: center">
          <div
            class="w-150 mr-8 lh-29 flex"
            style="flex-shrink: 0; align-items: center; justify-content: space-between"
          >
            <div class="flex">
              <div class="ft-16 font-bold count" style="color: rgba(35, 37, 37, 0.8)">3</div>
              <div class="ft-16 font-normal nd" style="color: rgba(35, 37, 37, 0.8)">nd</div>
              <div class="ft-16 font-bold ml-8" style="color: rgba(35, 37, 37, 0.8)">Floor</div>
            </div>
            <span class="ft-24 font-bold">25%</span>
          </div>
          <a-progress
            :percent="25"
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
      <div class="dashboard-section1">
        <div class="section-header">Last Month’s Volume Share: 2F vs 3F</div>
        <div class="section-last-month">
          <div class="h-38 mr-32" style="color: #232525">
            <span class="ft-32 font-bold">3.5</span>
            <span class="ft-16 font-bold"> Mu</span>
            <span class="ft-20 font-bold"> VS</span>
            <span class="ft-32 font-bold ml-12">2.8</span>
            <span class="ft-16 font-bold"> Mu</span>
          </div>
          <a-progress
            type="circle"
            :percent="75"
            trailColor="#99A8BD"
            strokeColor="#FF5A00"
            :size="80"
            :strokeWidth="12.5"
            :showInfo="false"
          >
          </a-progress>
        </div>
      </div>
      <!--12 month roling volume-->
      <div class="chart1-container">
        <div ref="chartRef1" class="chart"></div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {  onMounted, onUnmounted, ref } from 'vue'
import * as echarts from 'echarts'

const chartRef1 = ref<HTMLDivElement>()
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
}
// 初始化第一个图表
const initChart1 = () => {
  if (chartRef1.value) {
    const chart = echarts.init(chartRef1.value)

    const option = {
      title: {
        text: '12 month rolling volume',
        left: 'left',
        top: 0,
        textStyle: {
          color: '#110600',
          fontSize: "24",
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
          fontSize: "16",
        },
        width: "300",
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: {
        type: 'category',
        data: ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
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
          fontSize: "16",
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
          data: [350, 700, 450, 750, 1250, 1450, 1250, 1700, 1200, 750, 850],
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

// 初始化所有图表
const initAllCharts = () => {
  initChart1()
}

// 示例用法（可以在控制台查看）
onMounted(() => {
  // 添加窗口大小变化监听事件
  window.addEventListener('resize', handleResize)
  // 初始化所有图表
  initAllCharts()
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

    .top {
      width: 100%;
      height: 432px;
      background: rgba(255, 255, 255, 0.4);
      border-radius: 8px;
      margin-bottom: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .bottom {
      width: 100%;
      height: 432px;
      background: rgba(255, 255, 255, 0.4);
      border-radius: 8px;
      padding: 20px;
      box-sizing: border-box;
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
      box-sizing: border-box;
      padding: 20px;
      background: rgba(255, 255, 255, 0.4);
      border-radius: 8px 8px 8px 8px;
      position: relative;
      .section-header {
        font-family: 'Nike Trade Gothic Bold';
        font-size: 24px;
        color: #110600;
        line-height: 29px;
      }
      .section-content {
        font-family: 'Nike Trade Gothic Bold';
        font-size: 48px;
        color: #110600;
        margin-top: 32px;
        height: 58px;
        line-height: 58px;
      }
      .box-icon {
        position: absolute;
        top: 25px;
        right: 47px;
        width: 120px;
        height: 120px;
      }
      .dashboard {
        position: absolute;
        top: 50px;
        right: 26px;
        width: 186.55px;
        height: 145.42px;
        .box-icon {
          width: 186.55px;
          height: 145.42px;
        }
        .pointer {
          width: 36.44px;
          height: 30.06px;
          position: absolute;
          bottom: 26px;
          right: 120px;
          transform: rotateZ(0deg);
          transform-origin: 0% 50%;
        }
      }
    }
    .dashboard-section1 {
      width: 468px;
      height: 160px;
      box-sizing: border-box;
      padding: 16px 20px;
      background: rgba(255, 255, 255, 0.4);
      border-radius: 8px 8px 8px 8px;
      .section-header {
        font-family: 'Nike Trade Gothic Bold';
        font-size: 24px;
        color: #110600;
        line-height: 29px;
      }
      .nd {
        margin-top: -5px;
      }
      .count {
        transform: translateY(5px);
      }
      .section-last-month {
        width: 100%;
        margin-top: 20px;
        height: 80px;
        padding: 0 82px;
        display: flex;
        align-items: center;
        box-sizing: border-box;
      }
    }
    .chart1-container {
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
