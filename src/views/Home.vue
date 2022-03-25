<template>
  <div>
      <Header />
    <h2>Home</h2>
    <p>
    </p>
  </div>
</template>

<script>
export default {
  methods: {

  },
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    this.$api.get("users").then((response) => {
      this.users = response.data;
      console.log(this.users)
    });
  },
};

</script>