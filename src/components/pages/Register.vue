<template>
  <div>
    <h4>Register</h4>
    <form @submit.prevent="register">
      <label for="firstname">First Name</label>
      <div>
        <input id="firstname" type="text" v-model="firstname" required autofocus />
      </div>
      <label for="lastname">Last Name</label>
      <div>
        <input id="lastname" type="text" v-model="lastname" required autofocus />
      </div>

      <label for="email">E-Mail Address</label>
      <div>
        <input id="email" type="email" v-model="email" required />
      </div>

      <label for="password">Password</label>
      <div>
        <input id="password" type="password" v-model="password" required />
      </div>

      <label for="password-confirm">Confirm Password</label>
      <div>
        <input id="password-confirm" type="password" v-model="password_confirmation" required />
      </div>

      <div>
        <button type="submit">Register</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      password_confirmation: "",
      is_admin: null
    };
  },
  methods: {
    register: function() {
      let data = {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation,
        is_admin: this.is_admin
      };
      this.$store
        .dispatch("register", data)
        .then(() => this.$router.push("/"))
        .catch(err => console.log(err));
    }
  }
};
</script>