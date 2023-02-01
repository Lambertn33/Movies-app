<template>
  <div class="row">
    <div class="col-md-12">
      <div class="container py-5 px-3 my-4 rounded" style="background:#E9ECEF">
        <h4 class="display-5 pb-2">{{ title }}</h4>
        <p class="lead">{{ subTitle }}</p>
        <hr>
        <div class="btn btn-primary">
          <router-link to="/movies"><span>Movies List</span></router-link>
        </div>
        <p></p>
    </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: 'Welcome to Movies App',
        subTitle: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error culpa suscipit dignissimos, optio recusandae dolor porro inventore iure maxime vitae ducimus doloremque corrupti voluptas amet laboriosam debitis minus distinctio mollitia! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem sunt magni similique suscipit mollitia quos facilis omnis, incidunt a saepe. Dolor sit iusto minus! Quo quae asperiores reprehenderit velit tempora?'
      }
    }
  }
</script>

<style>
  .btn-primary span {
    color: #fff;
    font-weight: 500;
  }
</style>