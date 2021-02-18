<template>
  <v-app>
    <div>
      <!--Side Navbar-->
      <v-navigation-drawer app temporary fixed v-model="sideNav">
          <v-icon  x-large @click="toggleSideNav">mdi-close</v-icon>
        <v-spacer></v-spacer>

        <v-list>
          <v-list-item  v-for="item in sideNavItems" :key="item.title" :to="item.link">
            <v-list-item-content>
              {{item.title}}
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <!--Horizontal Navbar-->
      <v-toolbar  color="primary" dark>
        <v-app-bar-nav-icon class="hidden-sm-and-up" @click="toggleSideNav"></v-app-bar-nav-icon>
        <v-toolbar-title class="hidden-xs-only">
         <router-link to="/" tag="span" style="cursor: pointer;">VueShare</router-link>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-text-field flex append-icon="mdi-account-search-outline"  placeholder="Search posts" color="accent" single-line dense hide-details></v-text-field>

        <v-spacer></v-spacer>

        <v-toolbar-items class="hidden-xs-only">
          <v-btn  text v-for="item in horizontalNavItems" :key="item.title" :to="item.link">
            {{item.title}}
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </div>
    <v-main>
      <v-container>
        <transition name="fade">

          <router-view/>
        </transition>
      </v-container>
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
    sideNav: false
  }),
  computed: {
    horizontalNavItems() {
      return [
        { title: 'Posts',link: '/posts'},
        { title: 'Sign in',link: '/signin'},
        { title: 'Sign up',link: '/signup'},
      ]
    },
    sideNavItems() {
      return [
        { title: 'Posts',link: '/posts'},
        { title: 'Sign in',link: '/signin'},
        { title: 'Sign up',link: '/signup'},
      ]
    }
  },
  methods: {
    toggleSideNav() {
      this.sideNav = !this.sideNav;
    }
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition-property: all;
  transition-duration: .125s;
}

.fade-enter-active {
  transition-delay: .125s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
  transform: translateX(-25px);
}

</style>