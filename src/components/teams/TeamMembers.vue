<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item v-for="member in members" :key="member.id" :name="member.fullName" :role="member.role"></user-item>
    </ul>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  inject: ['users', 'teams'],
  props: ['teamID'],
  components: {
    UserItem
  },
  data() {
    return {
      teamName: '',
      members: [],
    };
  },
  methods: {
    loadTeamMembers(teamID) {
      const SelectedTeam = this.teams.find(team => team.id === teamID);
      const members = SelectedTeam.members;
      const SelectedMembers = [];
      for (const member of members) {
        const SelectedUser = this.users.find(user => user.id === member);
        SelectedMembers.push(SelectedUser);
      }
      this.members = SelectedMembers;
      this.teamName = SelectedTeam.name;
    }
  },
  created() {
    this.loadTeamMembers(this.teamID);
  },
  watch:{
    teamID(newID){
      this.loadTeamMembers(newID);
    }
  }
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>