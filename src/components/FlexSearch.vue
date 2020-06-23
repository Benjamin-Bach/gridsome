<template>
  <Layout>
    <input
      id="search"
      v-model="searchTerm"
      class="input"
      type="text"
      placeholder="Search">

    <div v-for="result in searchResults"  :key="result.id">
      <g-link :to="result.path">
        {{ result.title }}
      </g-link>
    </div>

    </div>
  </Layout>
</template>

<script>
export default {
  data: () => ({
    searchTerm: ''
  }),
  computed: {
    searchResults () {
      const searchTerm = this.searchTerm
      if (searchTerm.length < 3) return []
      return this.$search.search({ query: searchTerm, limit: 5 })
    }
  }
}
</script>