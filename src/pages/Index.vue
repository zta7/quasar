<template>
  <div>
    <q-btn-dropdown
      color='primary'
      label='capacitor test'
    >
      <q-list>
        <q-item
          v-close-popup
          clickable
          @click='get_device()'
        >
          <q-item-section>
            <q-item-label>device</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          v-close-popup
          clickable
          @click='keyboard_show()'
        >
          <q-item-section>
            <q-item-label>keyboard_show</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          v-close-popup
          clickable
          @click='local_notifications()'
        >
          <q-item-section>
            <q-item-label>local_notifications</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          v-close-popup
          clickable
          @click='modal_alert()'
        >
          <q-item-section>
            <q-item-label>modal_alert</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          v-close-popup
          clickable
          @click='get_network()'
        >
          <q-item-section>
            <q-item-label>get_network</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          v-close-popup
          clickable
          @click='share()'
        >
          <q-item-section>
            <q-item-label>share</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          v-close-popup
          clickable
          @click='get_permissions()'
        >
          <q-item-section>
            <q-item-label>get_permissions</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          v-close-popup
          clickable
          @click='status_bar()'
        >
          <q-item-section>
            <q-item-label>status_bar</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          v-close-popup
          clickable
          @click='set_storage()'
        >
          <q-item-section>
            <q-item-label>set_storage</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          v-close-popup
          clickable
          @click='get_storage()'
        >
          <q-item-section>
            <q-item-label>get_storage</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          v-close-popup
          clickable
          @click='toast()'
        >
          <q-item-section>
            <q-item-label>toast</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
    {{ device }}
    {{ network }}
    {{ permissions }}
    {{ user }}
    <div
      v-for='i in 10'
      :key='i'
      v-text="i < 9 ? 'f' : 'w'"
    />
  </div>
</template>

<script>
import { Plugins, StatusBarStyle } from '@capacitor/core'

const { Device, Keyboard, LocalNotifications, Modals, Network, Share, Permissions, StatusBar, Storage, Toast } = Plugins

export default {
  data() {
    return {
      device     : null,
      network    : null,
      permissions: null,
      is_light   : true,
      user       : null,
      arr        : [
        '1',
        '2'
      ]
    }
  },
  methods: {
    kkk(a, b, c) {
      if (a) {
        console.log(a)
        return a
      }
      else if (b) {
        console.log(b)
        return c
      }
      return b
    },
    toast() {
      this.kkk('faksfakfljkfa', 'faksfakfljkfa', 'faksfakfljkfa', 'faksfakfljkfa', 'faksfakfljkfa', 'faksfakfljkfa', 'faksfakfljkfa', 'faksfakfljkfa')

      Toast.show({
        text: 'Hello!'
      })
      console.log('fff')
    },
    get_device() {
      Device.getInfo().then(device => {
        this.device = device
      })
    },
    keyboard_show() {
      Keyboard.show()
    },
    async local_notifications() {
      await LocalNotifications.schedule({
        notifications: [
          {
            title       : 'Title',
            body        : 'Body',
            id          : 1,
            schedule    : { at: new Date(Date.now() + 1000 * 5) },
            sound       : null,
            attachments : null,
            actionTypeId: '',
            extra       : null
          }
        ]
      })
    },
    modal_alert() {
      Modals.alert({
        title  : 'Stop',
        message: 'this is an error'
      })
    },
    get_network() {
      Network.getStatus().then(network => {
        this.network = network
      })
    },
    get_permissions() {
      Permissions.query({ name: 'camera' }).then(permissions => {
        this.permissions = permissions
      })
    },
    async share() {
      const shareRet = await Share.share({
        title      : 'See cool stuff',
        text       : 'Really awesome thing you need to see right meow',
        url        : 'http://ionicframework.com/',
        dialogTitle: 'Share with buddies'
      })
      console.log(shareRet)
    },
    status_bar() {
      StatusBar.setStyle({
        style: this.is_light ? StatusBarStyle.Dark : StatusBarStyle.Light
      })
      this.is_light = !this.is_light
      // StatusBar.hide()
      // Display content under transparent status bar (Android only)
      // StatusBar.setOverlaysWebView({
      //   overlay: true
      // })
    },
    set_storage() {
      Storage.set({
        key  : 'user',
        value: JSON.stringify({
          name    : 'fuuuuck',
          password: 'fffff'
        })
      })
    },
    get_storage() {
      Storage.get({
        key: 'user'
      }).then(user => {
        this.user = JSON.parse(user.value)
      })
    }
  }
}
</script>
