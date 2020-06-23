<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="100" />

    <h1>Hello, world!</h1>
    <TagsList :tags="$page.tags.edges"/>
    <div v-for="edge in $page.posts.edges" :key="edge.node.id">
      <h2><g-link :to="edge.node.path" class="read">{{edge.node.title}}</g-link></h2>
      <TagsList :tags="edge.node.tags"/>
      <span v-html="edge.node.teaser"/> <span>[{{ edge.node.timeToRead }} mn de lecture]</span>
    </div>

  </Layout>
</template>

<script>

import TagsList from "@/components/TagsList";
export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  components: {
    TagsList
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
  tags: allTag{
    edges {
      node{
        id
        path
      }
    }
  }
  posts: allBlogPost{
    edges {
      node {
        id
        title
        teaser
        path
        timeToRead
        tags{
          id
          path
        }
        fileInfo {
          directory
        }
      }
    }
  }
}
</page-query>



