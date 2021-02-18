<template>
  <v-app>
    <v-main>
      <!--Navbar-->
      <v-toolbar  color="primary" dark>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title>
         <router-link to="/" tag="span" style="cursor: pointer;">VueShare</router-link>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-text-field flex append-icon="mdi-account-search-outline"  placeholder="Search posts" color="accent" single-line dense hide-details></v-text-field>

      </v-toolbar>
      <v-btn color="success">Connect</v-btn>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Home from './components/Home';

export default {
  name: 'App',

  components: {
    Home,
  },

  data: () => ({
    //
  }),
};
</script>
