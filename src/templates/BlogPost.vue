<template>
  <Layout>
    <h1 v-html="$page.post.title"/>
    <TagsList :tags="$page.post.tags"/>
    <article v-html="$page.post.content" />
  </Layout>
</template>

<script>
import TagsList from "@/components/TagsList";
export default{
  components: {
    TagsList
  }
}
</script>

<page-query>
query BlogPost ($path: String!) {
   post: blogPost (path: $path) {
    id
    title
    content
    tags{
      id
      path
    }
  }
}
</page-query>
