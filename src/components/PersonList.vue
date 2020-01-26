<template>
<v-container>
  <v-card
    v-for="(person, index) in allPersons"
    :key="person.id"
    class="mx-auto mb-2"
    color="#26c6da"
    dark
    
    max-width="600"
  >
    <v-card-title>
      <v-icon
        left
      >
        mdi-cake
      </v-icon>
      <span class="title font-weight-light">{{person.birthday}}</span>
    </v-card-title>

    <v-card-text class="headline font-weight-bold">
      "{{person.bio}}"
    </v-card-text>

    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{person.firstname}} {{person.lastname}}</v-list-item-title>
        </v-list-item-content>

        <v-row
          align="center"
          justify="end"
        >
        <v-btn icon @click.prevent="openEditDialog(person)"><v-icon>mdi-pencil</v-icon></v-btn>
        <v-btn icon @click.prevent="openDeleteDialog(person, index)"><v-icon>mdi-account-remove</v-icon></v-btn>
        </v-row>
      </v-list-item>
    </v-card-actions>
    
  </v-card>
  <div class="text-center">
    <v-dialog
      v-model="deleteDialog"
      width="500"
      persistent
    >
      <v-card>
        <v-card-title
          class="headline red lighten-2"
          primary-title
        >
          Delete Person
        </v-card-title>

        <v-card-text>
         Are you sure you want to delete?
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="red"
            text
            @click="deleteClose()"
          >
            No
          </v-btn>
          <v-btn
            color="success"
            text
            @click="removePerson()"
          >
            Yes
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>

  <v-dialog v-model="editDialog" max-width="800px">

    <v-card>
      <v-card-title>
        <span class="headline">Add New Person</span>
      </v-card-title>

      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="4">
              <v-text-field v-model="editPerson.firstname" label="First name"></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field v-model="editPerson.lastname" label="Last name"></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field v-model="editPerson.birthday" label="Birthday"></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field v-model="editPerson.bio" label="Bio"></v-text-field>
            </v-col>


          </v-row>
        </v-container>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="editClose()">Cancel</v-btn>
        <v-btn color="blue darken-1" text @click.prevent="process_editPerson()">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</v-container>
</template>




<script>
import { mapGetters, mapActions } from "vuex";

export default {
  created() {
    this.fetchPersons();
  },
  data() {
    return {
      editDialog: false,
      deleteDialog: false,
      person_id: '',
      personIndex: '',
      img: require('../assets/user.png'),
      editPerson: {
        firstname: '',
        lastname: '',
        birthday: '',
        bio: ''
      }
  }
  },
  computed: {
    ...mapGetters(["allPersons"]),
  },
  methods: {
    ...mapActions(["fetchPersons", "deletePerson", "updatePerson"]),
    deleteClose() {
      this.deleteDialog = false;
    },
    editClose() {
      this.editDialog = false;
    },
    openDeleteDialog(person, index) {
      this.deleteDialog = true
      this.person_id = person.id
      this.personIndex = index

    },
    removePerson() {
      const payload = {}
      const person_id = this.person_id
      const person_index = this.personIndex
      Object.assign(payload, {person_id: person_id, person_index: person_index })
      this.deletePerson(payload);
      this.deleteClose()

    },
    openEditDialog(person) {
      this.editDialog = true
      this.editPerson = Object.assign({}, person)
      this.person_id = person.id

    },
    process_editPerson(){
      this.updatePerson(this.editPerson);
      this.editClose()
    }
  },

  }
</script>

<style>

</style>