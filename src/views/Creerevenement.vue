<template>
  <div class="container">
    <Header />
    <br>
    <div class="columns is-centered">
      <div class="column is-half">
        <article class="media notification">
          <figure class="media-left">
            <span class="icon">
              <i class="fa fa-calendar" aria-hidden="true"></i
            ></span>
          </figure>
          <div class="media-content">
            <div class="content">
              <h2 class="title">Créer un événement</h2>
              <form class="box" @submit.prevent="validation">
                <!-- form pour interagir avec le formulaire -->
                <div class="field">
                  <label for class="label">Titre</label>
                  <div class="control has-icons-left">
                    <input
                      type="username"
                      v-model="username"
                      class="input"
                      required
                    />
                  </div>
                </div>
                <div class="field">
                  <label for class="label">Description</label>
                  <div class="control has-icons-left">
                    <input
                      type="description"
                      v-model="description"
                      class="input"
                      required
                    />
                  </div>
                </div>
                <div class="field">
                  <label for class="label">Heure</label>
                  <div class="control has-icons-left">
                    <input
                      type="description"
                      v-model="description"
                      class="input"
                      required
                    />
                  </div>
                </div>
                <div class="field">
                  <label for class="label">Où</label>
                  <div class="control has-icons-left">
                    <input
                      type="username"
                      v-model="username"
                      class="input"
                      required
                    />
                  </div>
                </div>
                <div class="field">
                  <label for class="label">Quand</label>
                  <div class="control has-icons-left">
                    <input
                      type="username"
                      v-model="username"
                      class="input"
                      required
                    />
                  </div>
                </div>
                <div class="buttons">
                  <button class="button">Créer</button>
                  <router-link class="button has-background-white" to="home">Annuler</router-link>
                </div>
              </form>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
  components: {  },
      data() {
        return {
          conversation: {
            topic: "",
            label: "",
          },
        };
      },
      methods: {
        validation() {
          this.$api
            .post("channels", this.conversation)
            .then((response) => {
              this.$router.push({name:'Conversation', params:{id:response.data.id}})
            })
            .catch((error) => {
              alert(error.response.data.message);
            });
        },
      },
    };
</script>

</script>

<style scoped lang="scss">
.button {
  background-color: rgb(238, 234, 234)
}
</style>
