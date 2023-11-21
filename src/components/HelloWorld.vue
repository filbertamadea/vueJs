<template>
  <v-table style="width: 50%; border: 1px solid black; ">
    <thead>
    <tr style="background: aqua;">
      <th class="text-center" style="font-size: 20px; font-weight: 900">
        Name
      </th>
      <th class="text-center" style="font-size: 20px; font-weight: 900">
        Calories
      </th>
      <th class="text-center" style="font-size: 20px; font-weight: 900">
        Get
      </th>
      <th class="text-center" style="font-size: 20px; font-weight: 900">
        Post
      </th>
    </tr>
    </thead>
    <tbody>
    <tr
      v-for="item in data"
      :key="item.id"
    >
      <td>{{ item.title }}</td>
      <td>{{ item.userId }}</td>
      <td>
          <v-btn @click="fetchData" style="background: #c4c4c4" :disabled="false">
            Get
          </v-btn>
      </td>
      <td>
          <v-btn @click="postData" style="background: #c4c4c4" :disabled="false">
            Post
          </v-btn>
      </td>
    </tr>
    </tbody>
  </v-table>
</template>

<script setup>
import {onMounted, ref} from "vue";

let data = ref({})

const fetchData = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    if (response.status === 200) {
      data.value = await response.json();
    } else {
      console.error('Failed to fetch data');
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
};

const postData = async () => {

  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })

  if(response.status === 201) {
    console.log('sukses ngab')
  } else {
    console.log('gagal blog')
  }
}

onMounted(fetchData)

onMounted(() => {
    data.value
})

</script>
