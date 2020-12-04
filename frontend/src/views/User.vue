<template>
  <div>
    User
  </div>
</template>

<script>
import { fetchUser } from '../api'

export default {
  name: 'user-view',

  components: {}, 
  
  props: {
    type: {
      type: String,
      default: () => 'user'
    },    
  },  

  data () {
    return {
      transition: 'slide-right',
      displayedPage: Number(this.$route.params.page) || 1,
      displayedItems: [] // this.$store.getters.activeItems      
    }
  },  

  computed: {
    page () {
      return Number(this.$route.params.page) || 1
    },
    maxPage () {
      /*
      const { itemsPerPage, lists } = this.$store.state
      return Math.ceil(lists[this.type].length / itemsPerPage)
      */
     return 10;
    },
    hasMore () {
      return this.page < this.maxPage
    }
  },  

  beforeMount () {
    this.loadItems(this.page)
    /*    
    alert(this.$root._isMounted);
      this.loadItems(this.page)
    }    
    */
  },

  beforeDestroy () {
  },  

  watch: {
    page (to, from) {
      this.loadItems(to, from)
    }
  },

  methods: {
    loadItems (to = this.page, from = -1) {
      this.$bar.start()
      this.$bar.finish()      
    }
  }  

}
</script>

<style lang="stylus">
</style>
