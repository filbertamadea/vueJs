<!-- <template>
  <v-container class="bg-surface-variant">
    <v-row :width="300">
      <v-file-input
        :rules="rules"
        accept="image/png, image/jpeg, image/bmp"
        placeholder="Upload Photo"
        prepend-icon="mdi-camera"
        label="Avatar"
        @change="handleFileChange"
        :width="300"
      ></v-file-input>
    </v-row>
    <v-row>
      <v-img :width="300" v-if="imageUrl" :src="imageUrl" />
    </v-row>
  </v-container>
</template> -->

<template>
  <v-container class="bg-whites">
    <v-row style="margin-left: 10; margin-right: 10">
      <v-col cols="4">
        <v-sheet class="pa-2 ma-2">
          <v-file-input
            :rules="rules"
            accept="image/png, image/jpeg, image/bmp"
            placeholder="Upload Photo"
            prepend-icon="mdi-camera"
            label="Avatar"
            @change="handleFileChange"
            :width="300"
          ></v-file-input>
        </v-sheet>
        <v-sheet class="pa-2 ma-2">
          <v-btn variant="outlined" @click="handleDeleteFile"> Delete </v-btn>
        </v-sheet>
      </v-col>
      <v-col cols="4">
        <v-img :width="300" v-if="imageUrl" :src="imageUrl" />
      </v-col>
      <v-col cols="4"> </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      imageUrl: null,
    };
  },
  methods: {
    handleFileChange(event) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        this.imageUrl = URL.createObjectURL(file);
        this.saveImageToIndexedDB(e.target.result);
      };

      reader.readAsArrayBuffer(file);
    },

    handleDeleteFile(event) {
      const request = indexedDB.open("db_foto", 2);

      request.onerror = (event) => {
        console.error("Error opening database:", event.target.error);
      };

      request.onsuccess = (event) => {
        const db = event.target.result;

        const deleteTransaction = db.transaction("images", "readwrite");
        const deleteObjectStore = deleteTransaction.objectStore("images");

        const deleteRequest = deleteObjectStore.clear();

        deleteRequest.onsuccess = (event) => {
          // report the success of our request
          console.log("sukses delete");
        };
      };
    },

    saveImageToIndexedDB(blob) {
      const request = indexedDB.open("db_foto", 1);

      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        const objectStore = db.createObjectStore("images", {
          keyPath: "id",
          autoIncrement: true,
        });
      };

      request.onsuccess = (event) => {
        const db = event.target.result;
        const transaction = db.transaction(["images"], "readwrite");
        const objectStore = transaction.objectStore("images");
        const addRequest = objectStore.add({ image: blob });

        addRequest.onsuccess = () => {
          console.log("Berhasil menambahkan ke IndexedDB");
        };

        transaction.oncomplete = () => {
          db.close();
        };
      };
    },
  },
};
</script>
