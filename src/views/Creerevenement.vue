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
                <label class="label">Titre</label>
                <div class="control">
                  <input type="text" class="input" v-model="evenement.title" />
                </div>
              </div>
              <div class="field">
                <label class="label">Description</label>
                <div class="control">
                  <input type="text" class="input" v-model="evenement.desc" />
                </div>
              </div>
              <div class="field">
                <label class="label">Lieu</label>
                <div class="control">
                  <input type="text" class="input" v-model="evenement.place" />
                </div>
              </div>
               <div class="field">
                <label class="label">Date</label>
                <div class="control">
                  <Calendar />
                  <input type="date" class="input" v-model="evenement.date" />
                </div>
              </div>
              <div class="buttons">
                <button class="button is-info is-outlined">Créer</button>
                <router-link class="button is-outlined" to="/home"
                  >Annuler</router-link
                >
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
          evenement: {
            title: "",
            desc: "",
            place:"",
            date:"",
          },
        };
      },
      methods: {
        validation() {
          this.$api
            .post(`event/${this.id}`, this.evenement)
            .then((response) => {
              this.$router.push({name:'Evenement', params:{id:response.data.id}})
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
