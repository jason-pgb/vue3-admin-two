<script>
export default {
  name: "home",
};
</script>

<template>
<<<<<<< Updated upstream
  <div>
    <h1>欢迎学习vue3全栈课程</h1>
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
=======
  <div class="basic-layout">
    <div class="nav-side">
      <div class="logo">
        <img src="./../assets/logo.png"
             alt="">
        <span>Manager</span>
      </div>
      <!-- 导航菜单 -->
      <el-menu default-active="2"
               class="nav-menu"
               background-color="#001529"
               text-color="#fff"
               :collapse="false"
               router>
        <el-sub-menu index="1">
          <template #title>
            <i class="el-icon-setting"></i>
            <span>系统管理</span>
          </template>
          <el-menu-item index="1-1">用户管理</el-menu-item>
          <el-menu-item index="1-2">菜单管理</el-menu-item>

        </el-sub-menu>
        <el-sub-menu index="2">
          <template #title>
            <i class="el-icon-setting"></i>
            <span>审批管理</span>
          </template>
          <el-menu-item index="2-1">休假管理</el-menu-item>
          <el-menu-item index="2-2">带我审批</el-menu-item>
        </el-sub-menu>

      </el-menu>
    </div>
    <div class="content-right">
      <div class="nav-top">
        <div class="nav-left">
          <div class="menu-fold"><i class="el-icon-s-fold"></i></div>
          <div class="bread">面包屑</div>
        </div>

        <div class="user-info">admin</div>
      </div>
      <div class="wrapper">
        <div class="main-page">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.basic-layout {
  position: relative;
  .nav-side {
    position: fixed;
    width: 200px;
    height: 100vh;
    background-color: #001529;
    color: #fff;
    overflow-y: auto;
    transition: width 0.5s;
    .logo {
      display: flex;
      align-items: center;
      font-size: 18px;
      height: 50px;
      img {
        margin: 0 15px;
        width: 32px;
        height: 32px;
      }
    }
    .nav-menu {
      border-right: none;
      height: calc(100vh - 50px);
    }
  }
  .content-right {
    margin-left: 200px;
    .nav-top {
      height: 50px;
      line-height: 50px;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #ddd;
      padding: 0 20px;
      .nav-left {
        display: flex;
        align-items: center;
        .menu-fold {
          margin-right: 16px;
          font-size: 18px;
        }
      }
    }
    .wrapper {
      background: #eef0f3;
      padding: 20px;
      height: calc(100vh - 50px);
      .main-page {
        height: 100%;
        background-color: #fff;
      }
    }
  }
}
</style>
>>>>>>> Stashed changes
