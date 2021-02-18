<template>
  <v-container text-xs-center v-if="getPosts">
    <v-flex xs-12>
      <v-carousel v-bind="{'cycle': true}" interval="3000">
        <v-carousel-item v-for="post in getPosts" :key="post._id" :src="post.imageUrl">
          <h3 id="carousel-item__title">{{post.title}}</h3>
        </v-carousel-item>
      </v-carousel>
    </v-flex>
  </v-container>
</template>

<script>
// @ is an alias to /src
import { gql } from 'apollo-boost'

export default {
  name: 'home',
  data() {
    return {
      getPosts: []
    }
  },
  apollo: {
    getPosts: {
      query:  gql`
        query {
             getPosts {
             _id
            title
            likes
            imageUrl
            description
        }
      }
    `,
    },
  }
 }
</script>

<style>
#carousel-item__title {
  position: absolute;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border-radius: 5px 5px 0 0;
  padding: 0.5rem;
  margin: 0 auto;
  bottom: 50px;
  left: 0;
  right: 0;

}
</style>