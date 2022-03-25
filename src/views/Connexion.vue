<template>
  <div class="container">
    <Header />
    <div class="columns is-centered">
      <div class="column is-half">
        <article class="media notification is-warning">
            <figure class="media-left">
              <span class="icon">
<i class="fa far fa-address-card"></i>
</span>
            </figure>
            <div class="media-content">
              <div class="content">
                <h2 class="title">Mon profil</h2>
                <p class="is-size-5">
                  Prénom nom : <b>{{ $store.state.member.fullname }}</b> <br />
                  Email : <b>{{ $store.state.member.email }}</b>
                </p>
              </div>
            </div>
        </article>
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
  font-size: 20px;
}
</style>
