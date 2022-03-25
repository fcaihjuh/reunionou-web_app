<template>
<div class="container">
<Header />
<h2>Mon profil</h2>
<div class="columns is-mobile is-centered">
  <div class="column is-half">
    <p class="bd-notification is-primary">
      <code class="html">is-half</code><br>
    </p>
  </div>
</div>
</div>
</template>

<script>
export default {
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    this.$api.get("users").then((response) => {
      this.users = response.data;
      console.log(this.users);
    });
  },
};
</script>

<style scoped lang="scss">
h2 {
  text-align: center;
  font-size: 20px;
}
</style>
