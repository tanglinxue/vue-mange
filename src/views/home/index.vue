<template>
  <el-row class="home" :gutter="20">
    <el-col :span="8" style="margin-top: 20px">
      <el-card shadow="hover">
        <div class="user">
          <img :src="userImg" />
          <div class="userinfo">
            <p class="name">Admin</p>
            <p class="access">超级管理员</p>
          </div>
        </div>
        <div class="login-info">
          <p>上次登录时间:<span>2021-7-19</span></p>
          <p>上次登录地点:<span>武汉</span></p>
        </div>
      </el-card>
      <el-card style="margin-top: 20px; height: 460px">
        <el-table :data="tableData">
          <el-table-column
            v-for="(val, key) in tableLabel"
            :key="key"
            :label="val"
            :prop="key"
          ></el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <el-col :span="16" style="margin-top: 20px">
      <div class="num">
        <el-card
          v-for="item in countData"
          :key="item.name"
          :body-style="{ display: 'flex', padding: 0 }"
        >
          <i
            class="icon"
            :class="`el-icon-${item.icon}`"
            :style="{ backgroundColor: item.color }"
          ></i>
          <div class="detail">
            <p class="num">￥{{ item.value }}</p>
            <p class="txt">{{ item.name }}</p>
          </div>
        </el-card>
      </div>
      <el-card style="height: 280px">
        <echart :chart-data="echartData.order" style="height: 280px"></echart>
      </el-card>
      <div class="graph">
        <el-card style="height: 260px">
          <echart
            :chart-data="echartData.user"
            style="height: 240px"
          ></echart>
        </el-card>
        <el-card style="height: 260px">
          <echart
            :chart-data="echartData.video"
            :is-axis-chart="false"
            style="height: 240px"
          ></echart>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import { getData } from "../../api/data";
import Echart from '../../components/ECharts'
export default {
  name: "home",
  components: {
    Echart,
  },
  data() {
    return {
      tableData: [],
      tableLabel: {
        name: "课程",
        todayBuy: "今日购买",
        monthBuy: "本月购买",
        totalBuy: "总购买",
      },
      countData: [
        {
          name: "今日支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "今日收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "今日未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
        {
          name: "本月支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "本月收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "本月未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
      ],
      userImg: require("../../assets/images/user.png"),
      echartData: {
        order: {
          xData: [],
          series: [],
        },
        user: {
          xData: [],
          series: [],
        },
        video: {
          series: [],
        },
      },
    };
  },
  async mounted() {
    let res = await getData();
    const { code, data } = res.data;
    if (code === 20000) {
      console.log(res);
      this.tableData = data.tableData;
      const order = data.orderData;
      const keyArray = Object.keys(order.data[0]);
      const series = [];
      keyArray.forEach((key) => {
        series.push({
          name: key,
          data: order.data.map((item) => item[key]),
          type: "line",
        });
      });

      this.echartData.order.xData = order.date;
      this.echartData.order.series = series;
      this.echartData.user.xData = data.userData.map((item) => item.date);
      this.echartData.user.series = [
        {
          name: "新增用户",
          data: data.userData.map((item) => item.new),
          type: "bar",
        },
        {
          name: "活跃用户",
          data: data.userData.map((item) => item.active),
          type: "bar",
          // bar 表示柱状图
        },
      ];

      this.echartData.video.series = [
        {
          data: data.videoData,
          type: "pie",
        },
      ];
    }
  },
};
</script>

<style></style>
