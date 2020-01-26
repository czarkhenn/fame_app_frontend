<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      right
    >
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title to="/">Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link @click.prevent="addNewPersonDialog()">
          <v-list-item-action>
            <v-icon>mdi-account-plus</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>Add New Person</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="cyan"
      dark
    >
      <v-spacer />

      <v-toolbar-title>Famous Persons</v-toolbar-title>

      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    </v-app-bar>
                  <v-dialog v-model="newPersonDialog" max-width="800px">

                <v-card>
                  <v-card-title>
                    <span class="headline">Add New Person</span>
                  </v-card-title>

                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field v-model="newPerson.firstname" label="First name"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field v-model="newPerson.lastname" label="Last name"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field v-model="newPerson.birthday" label="Birthday"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field v-model="newPerson.bio" label="Bio"></v-text-field>
                        </v-col>


                      </v-row>
                    </v-container>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="close()">Cancel</v-btn>
                    <v-btn color="blue darken-1" text @click.prevent="addNewPerson()">Save</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>

    <v-content transition="slide-x-transition">
          
            <router-view></router-view>

    </v-content>
    

    <v-footer
      color="cyan"
      app
    >
      <v-spacer />

      <span class="white--text">&copy; Famous App Frontend View 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
import {mapActions} from 'vuex';
  export default {

    name: 'AppNav',
    props: {
      source: String,
    },
    data: () => ({
      newPersonDialog: false,
      drawer: null,
      newPerson: {
        firstname: '',
        lastname: '',
        birthday: '',
        bio: ''
      },
      defaultPerson: {
        firstname: '',
        lastname: '',
        birthday: '',
        bio: ''
      }
    }),
    methods: {
      ...mapActions(["addPerson"]),
      close() {
        this.newPersonDialog = false;
      },
      addNewPersonDialog(){
        this.newPersonDialog = true;
        this.defaultPerson
      },
      addNewPerson () {
        const new_person = this.newPerson
        this.addPerson(new_person),
        this.close();
      }
    }
  }
</script>