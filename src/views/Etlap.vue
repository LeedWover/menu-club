<template>
  <div class="Etlap container mt-0">
    <div class="sultek py-3 mb-3">
      <h2 class="text-center">Frissensültek</h2>
      <hr>
      <div class="row">
        <div class="col-12 col-md-6" v-for="sult in sultek" :key="sult.name">
          <div class="media my-3">
            <div class="media-body text-center">
              <h5 class="mt-0">{{sult.name}}</h5>
              <p>{{sult.feltet}}</p>
              <p class="mb-0">{{sult.price}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="teszta my-3">
      <h2 class="text-center">Tészták</h2>
      <hr>
      <div class="row">
        <div class="col-12 col-md-6" v-for="teszta in tesztak" :key="teszta.name">
          <div class="media my-3">
            <div class="media-body text-center">
              <h5 class="mt-0">{{teszta.name}}</h5>
              <p>{{teszta.feltet}}</p>
              <p class="mb-0">{{teszta.price}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import db from "../db";

export default {
  data() {
    return {
      sultek: [],
      tesztak: []
    };
  },

  created() {
    db.collection("sultek")
      .get()
      .then(doc => {
        if (doc) {
          doc.forEach(element => {
            const data = {
              name: element.data().name,
              feltet: element.data().feltet,
              price: element.data().price
            };
            this.sultek.push(data);
          });
        } else {
          console.log("No such document!");
        }
      })
      .catch(function(error) {
        console.log("Error getting document:", error);
      });
    db.collection("tesztak")
      .get()
      .then(doc => {
        if (doc) {
          doc.forEach(element => {
            const data = {
              name: element.data().name,
              feltet: element.data().feltet,
              price: element.data().price
            };
            this.tesztak.push(data);
          });
        } else {
          console.log("No such document!");
        }
      })
      .catch(function(error) {
        console.log("Error getting document:", error);
      });
  }
};
</script>

<style scoped>
  
</style>
