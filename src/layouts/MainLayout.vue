
<template>
  <q-layout view='hHh lpR fFf'>
    <q-header bordered class='bg-primary text-white'>
      <q-toolbar>
        <q-toolbar-title>
          <!-- <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg" alt="">
          </q-avatar> -->
          Title
        </q-toolbar-title>

        <q-btn dense flat round icon='menu' @click='right = !right' />
      </q-toolbar>
    </q-header>

    <q-drawer v-model='right' show-if-above side='right' elevated>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      right: false
    }
  }
}
</script>
