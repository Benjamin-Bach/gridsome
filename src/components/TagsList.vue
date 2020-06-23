<template>
  <ul>
    <li v-for="tag in $attrs.tags" :key="tag.id">
      <span v-if="tag.node">
        <g-link :to="tag.node.path" class="read">{{tag.node.id}}</g-link>
      </span>
      <span v-else>
        <g-link :to="tag.path" class="read">{{tag.id}}</g-link>
      </span>
    </li>
  </ul>
</template>

<style scoped lang="scss">
  ul{
    margin:0;
    padding:0;
    font-family: 'helvetica','arial', sans-serif;
    text-transform: uppercase;
    font-size: .85rem;
    text-align: right;
    li{
      display: inline-block;
      &:not(:last-of-type){
        margin-right: 1rem;
      }
      opacity: .5;
      &:hover{
        opacity: 1;
      }
    }
  }
</style>