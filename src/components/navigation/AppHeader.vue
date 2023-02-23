<template>
  <div class="app-header-container">
    <div class="container">
      <div class="app-header">
        <img src="@/assets/img/logo-spread.svg" alt="" />
        <div class="d-flex align-items-center" style="gap: 30px">
          <el-dropdown>
            <span
              class="el-dropdown-link d-flex align-items-center"
              style="gap: 3px"
            >
              <country-flag country="US" size="small" /> <span>English</span>
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>Action 1</el-dropdown-item>
              <el-dropdown-item>Action 2</el-dropdown-item>
              <el-dropdown-item>Action 3</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>

          <div class="join-waitlist">
            <button
              class="primary-btn d-flex align-items-center"
              style="gap: 3px"
            >
              <span>Join our Waitlist</span>
              <span>
                <i-icon icon="ic:round-arrow-outward" width="13px" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
