<script setup>
import { useAccountStore } from "../../stores/account";

const accountStore = useAccountStore();

const logout = () => {
  accountStore.logout();
};

</script>

<template>
<header>
  <div class="collapse bg-dark show" id="navbarHeader">
    <div class="container">
      <div class="row">
        <div class="col-sm-8 col-md-7 py-4">
          <h4 class="text-white">About</h4>
          <p class="text-muted">Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.</p>
        </div>

        <div class="col-sm-4 offset-md-1 py-4" v-if="accountStore.isLogined">
          <h4 class="text-white">Login Info</h4>
          <ul class="list-unstyled">
            <li><a href="#" class="text-white">{{ accountStore.profile.email }}</a></li>
            
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="navbar navbar-dark bg-dark shadow-sm">
    <div class="container">
      <router-link :to="{name: 'home'}" class="navbar-brand d-flex align-items-center">       
        <strong>Home</strong>
      </router-link>
	  <router-link :to="{name: 'boardlist'}" class="navbar-brand d-flex align-items-center">
		<strong>Board</strong>
	  </router-link>	  
	  <router-link :to="{name: 'join'}" class="navbar-brand d-flex align-items-center">
		<strong>Join</strong>
	  </router-link>

	  <a class="navbar-brand d-flex align-items-center" v-if="accountStore.isLogined">
		  <button type="button" class="btn btn-primary" @click="logout()">로그아웃</button>
	  </a>
	  <router-link :to="{name: 'login'}" class="navbar-brand d-flex align-items-center" v-if="!accountStore.isLogined">
		  <strong>Login</strong>
	  </router-link>    

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="true" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
  </div>
</header>	
</template>