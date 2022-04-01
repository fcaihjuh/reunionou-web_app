<template>
  <section class="hero is-fullheight">
    <Header />
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-12-tablet is-11-desktop is-10-widescreen">
            <h4 class="title is-4 has-text-centered">Modifier l'événement'</h4>
            <form class="box" @submit.prevent="modifierEvenement">
                           <div class="field">
                <label class="label">Titre</label>
                <div class="control">
                  <input class="input" v-model="modifierEvenement.title" />
                </div>
              </div>
              <div class="field">
                <label class="label">Description</label>
                <div class="control">
                  <input class="input" v-model="modifierEvenement.desc" />
                </div>
              </div>
              <div class="field">
                <label class="label">Lieu</label>
                <div class="control">
                  <input class="input" v-model="modifierEvenement.place" />
                </div>
              </div>
               <div class="field">
                <label class="label">Date</label>
                <div class="control">
                  <input class="input" v-model="modifierEvenement.date" />
                </div>
              </div>
              <div class="buttons">
                <button class="button is-info is-outlined">Modifier</button>
                <router-link class="button is-outlined" to="/"
                  >Annuler</router-link
                >
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
        idEvenement : this.$route.params.id,
      modifierEvenement: {
        title: "",
        desc: "",
        place:"",
        date:"",
      },
    };
  },
  mounted(){
      //Je récupère les données avant modification pour les afficher dans le input
      this.$api.post(`event`).then((response) => {
          this.modifierEvenement.title = response.data.title;
          this.modifierEvenement.desc = response.data.desc;
          this.modifierEvenement.place = response.data.place;
          this.modifierEvenement.date = response.data.date;
      })
  },
  methods: {
      //Si aucune modification n'est faite, leurs ancienne valeurs restent ainsi.
    modifierEvenement() {
      this.$api
        .put(`event/${this.idEvenement}`,this.modifierEvenement)
        .then(() => {
        this.$router.push('/');
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
    },
  },
};
</script>
<style scoped></style>