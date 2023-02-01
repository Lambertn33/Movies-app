<template>
  <nav class="navbar navbar-expand-lg bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand logo" href="#">Movies App</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item" v-for="link in urlLinks" :key="link.name">
          <a class="nav-link active" aria-current="page" href="#">{{ link.name }}</a>
        </li>
      </ul>
    </div>
  </div>
</nav> 
</template>

<script>
  export default {
    data() {
      return {
        urlLinks: [
          {
            name: 'Movies List',
            href: ''
          },
          {
            name: 'My Favorites',
            href: ''
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .navbar {
    padding: 1rem;
  }
  .navbar-brand,
  .nav-link {
    color: white !important;
    font-weight: 600;
  }
  .navbar-collapse {
    margin-left: 2.5rem;
  }
</style>