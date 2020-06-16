<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="100" />

    <h1>Hello, world!</h1>

    <div v-for="edge in $page.posts.edges" :key="edge.node.id">
      <h2><g-link :to="edge.node.path" class="read">{{edge.node.title}}</g-link></h2>
      <span>{{ edge.node.path }}</span><br>
      <span>{{ edge.node.timeToRead }} mn</span>
    </div>

  </Layout>
</template>

<script>

export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>

<page-query>
query {
  metadata {
    siteName
  }
  posts: allBlogPost{
    edges {
      node {
        id
        title
        content
        path
        timeToRead
        fileInfo {
          directory
        }
      }
    }
  }
}
</page-query>
