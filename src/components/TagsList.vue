<template>
  <ul>
    <li v-for="tag in $attrs.tags" :key="tag.id">
      <g-link :to="tag.path" class="read">{{tag.id}}</g-link>
    </li>
  </ul>
</template>