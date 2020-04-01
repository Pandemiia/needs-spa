<template>
  <div class="p-need">
    <div class="p-need__name">{{need.name}}</div>
    <div class="p-need__name">{{need.quantity[0].needed}} {{need.units}}</div>
  </div>
</template>

<script>

export default {
  name: 'p-need',

  props: {
    need: {
      need: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.p-need {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  line-height: 18px;
  // background-color: #ffffff;
  padding: 4px 10px;
  border-bottom: 1px solid #ffffff;

  &:hover {
    background-color: #ffffff;
  }
}
</style>
